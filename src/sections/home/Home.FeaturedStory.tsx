import React from 'react';

import styled from "@emotion/styled";
import { css } from "@emotion/core";
import { Link, graphql, useStaticQuery } from "gatsby";

import Headings from "@components/Headings";
import Image from "@components/Image";
import Section from '@components/Section';
import ButtonArrow from '@components/Button/Button.Arrow';

import mediaqueries from "@styles/media";
import { IArticleQuery, IArticle, IColorTheme, IColorThemeProps } from "@types";
import { useThemeUI } from "theme-ui";

const siteQuery = graphql`
  {
    allArticle(limit: 1, sort: {fields: date, order: DESC}) {
      edges {
        node {
          id
          author
          excerpt
          title
          slug
          hero {
            regular: childImageSharp {
              fluid(maxWidth: 653, quality: 100) {
                base64
                aspectRatio
                src
                srcSet
                srcWebp
                srcSetWebp
                sizes
              }
            }
          }
        }
      }
    }
  }
`;

/**
 * Utility function to parse graphql query from article
 * to match IArticle
 */
function normalizeArticle(article): IArticle {
  return {
    ...article,
    hero: {
      regular: article.hero.regular.fluid
    }
  };
}

const HomeFeaturedStory: React.FC = () => {
  const results: IArticleQuery = useStaticQuery(siteQuery).allArticle;
  if (!results) return null;

  const article: IArticle = normalizeArticle(results.edges[0].node);
  return (
    <FeaturedStory article={article} />
  );
};

export default HomeFeaturedStory;

interface FeaturedStoryProps {
  article: IArticle;
}

const FeaturedStory: React.FC<FeaturedStoryProps> =({ article }) => {
  const themeContext = useThemeUI();
  const theme: IColorTheme = themeContext.theme as any;

  const hasOverflow = article.title.length > 35;
  const imageSource = article.hero.regular;

  return (
    <Section>
        <ArticleLink
          theme={theme}
          to={article.slug}
          data-a11y="false"
        >
          <FeaturedStoryContainer>
            <ImageContainer>
              <Image alt={article.title} src={imageSource}  />
            </ImageContainer>
            <FeaturedStoryInfoContainer>
              <SubtleTextContainer>
                <SubtleText>
                  Featured story
                </SubtleText>
              </SubtleTextContainer>
              <Title dark hasOverflow={hasOverflow}>
                {article.title}
              </Title>
              <Excerpt theme={theme} hasOverflow={hasOverflow}>
                {article.excerpt}
              </Excerpt>
              <ButtonContainer>
                <ButtonArrow
                  text='Read more'
                  color={theme.colors.primary}
                />
              </ButtonContainer>
            </FeaturedStoryInfoContainer>
          </FeaturedStoryContainer>
        </ArticleLink>
    </Section>
  );
};

const limitToTwoLines = css`
  text-overflow: ellipsis;
  overflow-wrap: normal;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  white-space: normal;
  overflow: hidden;

  ${mediaqueries.phablet`
    -webkit-line-clamp: 3;
  `}
`;

const FeaturedStoryContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  column-gap: 30px;
  margin: 32px 0;

  ${mediaqueries.desktop`
    grid-template-columns: 1fr;
    row-gap: 30px;
    padding: 32px 0;
    margin: 0;
  `}
`;

const FeaturedStoryInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ButtonContainer = styled.div`
  margin-top: 16px;
`;

const SubtleTextContainer = styled.div`
  position: absolute;
  top: 0;
`;

const SubtleText = styled.p`
  font-size: 14px;
  line-height: 1.45;
  color: ${(p: IColorThemeProps) => p.theme.colors.grey};
  
  :after {
    content: "";
    position: absolute;
    height: 1px;
    width: 30px;
    right: -42px;
    top: 11px;
    background: ${(p: IColorThemeProps) => p.theme.colors.grey};
  }
`;

const ImageContainer = styled.div`
  position: relative;
  height: 280px;
  box-shadow: 0 30px 60px -10px rgba(0, 0, 0, 0.3),
    0 18px 36px -18px rgba(0, 0, 0, 0.33);
  transition: transform 0.3s var(--ease-out-quad),
    box-shadow 0.3s var(--ease-out-quad);

  & > div {
    height: 100%;
  }

  ${mediaqueries.tablet`
    height: 220px;
    margin-bottom: 35px;
  `}
`;

const Title = styled(Headings.h3)<{hasOverflow: boolean} & IColorThemeProps>`
  font-size: 22px;
  line-height: 1.4;
  margin-bottom: ${p => (p.hasOverflow ? "45px" : "10px")};
  color: ${p => p.theme.colors.primary};
  font-family: ${p => p.theme.fonts.serif};
  transition: color 0.3s ease-in-out;
  ${limitToTwoLines};

  ${mediaqueries.tablet`
    margin-bottom: 15px;
  `}
`;

const Excerpt = styled.p<{ hasOverflow: boolean } & IColorThemeProps>`
  ${limitToTwoLines};
  font-size: 16px;
  margin-bottom: 10px;
  color: ${p => p.theme.colors.grey};
  display: ${p => (p.hasOverflow ? "none" : "box")};

  ${mediaqueries.desktop`
    display: -webkit-box;
  `}

  ${mediaqueries.tablet`
    margin-bottom: 15px;
  `}
`;

const ArticleLink = styled(Link)<IColorThemeProps>`
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1;
  transition: transform 0.33s var(--ease-out-quart);
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);

  &:hover ${ImageContainer} {
    transform: translateY(-1px);
    box-shadow: 0 50px 80px -20px rgba(0, 0, 0, 0.27),
      0 30px 50px -30px rgba(0, 0, 0, 0.3);
  }

  &:hover h2,
  &:focus h2 {
    color: ${p => p.theme.colors.accent};
  }

  &[data-a11y="true"]:focus::after {
    content: "";
    position: absolute;
    left: -2%;
    top: -2%;
    width: 104%;
    height: 104%;
    border: 3px solid ${p => p.theme.colors.accent};
    background: rgba(255, 255, 255, 0.01);
  }

  ${mediaqueries.phablet`
    &:hover ${ImageContainer} {
      transform: none;
      box-shadow: initial;
    }

    &:active {
      transform: scale(0.97) translateY(3px);
    }
  `}
`;
