import React from "react";
import styled from "@emotion/styled";
import { graphql, useStaticQuery } from "gatsby";

import Section from "@components/Section";

import mediaqueries from "@styles/media";
import { IColorThemeProps, IColorTheme } from "@types";
import { useThemeUI } from "theme-ui";
import Headings from "@components/Headings";
import Heartbeat from "@components/Animations/Heartbeat";

interface Link {
  name: string;
  url: string;
}
interface Links extends Array<Link> {
  name: string;
  url: string;
};

const siteQuery = graphql`
  {
    allSite {
      edges {
        node {
          siteMetadata {
            name
            social {
              url
              name
            }
          }
        }
      }
    }
    allMdx(
      sort: { fields: frontmatter___date, order: ASC }
      filter: { frontmatter: { date: { ne: null } } }
    ) {
      edges {
        node {
          frontmatter {
            date
          }
        }
      }
    }
  }
`;

const renderSocialLinks = (links: Links) => {
  const themeContext = useThemeUI();
  const theme: IColorTheme = themeContext.theme as any;
  return links.map((link: Link) => {
    const { name, url } = link;
    return (                
      <li key={name}>
        <Link
          theme={theme}
          href={url}
          target="_blank"
        >
          { name }
        </Link>
      </li>
    );
  });
}

const Footer: React.FC<{}> = () => {
  const currentYear: Number = new Date().getFullYear(); 
  const results = useStaticQuery(siteQuery);
  const { name, social } = results.allSite.edges[0].node.siteMetadata;
  const themeContext = useThemeUI();
  const theme: IColorTheme = themeContext.theme as any;
  return (
    <>
      <Section narrow>
        <HoritzontalRule theme={theme} />
        <FooterContainer theme={theme} >
          <FooterRow>
            <FooterColumn className="quarter">
              <Headings.h6>
                Directory
              </Headings.h6>
              <LinkContainer>
                <li>
                  <Link 
                    theme={theme}
                    href="/"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link 
                    theme={theme}
                    href="/stories"
                  >
                    Stories
                  </Link>
                </li>
                <li>
                  <Link theme={theme}>
                    Labs
                  </Link>
                </li>
                <li>
                  <Link theme={theme}>
                    Contact
                  </Link>
                </li>
              </LinkContainer>
            </FooterColumn>
            <FooterColumn className="quarter">
              <Headings.h6>
                Social
              </Headings.h6>
              <LinkContainer>
                { renderSocialLinks(social) }
              </LinkContainer>
            </FooterColumn>
            <FooterColumn className="half">
              <Headings.h6>
                General Enquiries
              </Headings.h6>
              <EmailText
                theme={theme}
                href="mailto:uosoftwareclub@gmail.com"
              >
                uosoftwareclub@gmail.com
              </EmailText>
            </FooterColumn>
          </FooterRow>
          <FooterRow>
            <FooterText theme={theme}>
              Built with 
              <Heartbeat/>
              by the front end team. Powered by ☕.
              <br/>
              © {currentYear} {name}.
            </FooterText>
          </FooterRow>
        </FooterContainer>
      </Section>
    </>
  );
};

export default Footer;

const EmailText = styled.a`
  font-size: 24px;
  color: ${(p: IColorThemeProps) => p.theme.colors.grey};
  &:hover {
    color: ${p => p.theme.colors.primary};
  }
`;

const FooterContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: space-between;
  padding-bottom: 80px;
  color: ${(p: IColorThemeProps) => p.theme.colors.grey};

  ${mediaqueries.tablet`
    padding-bottom: 100px;
  `}

  ${mediaqueries.phablet`
    padding-bottom: 50px;
  `}
`;

const FooterRow = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 40px;

  ${mediaqueries.tablet`
    margin-bottom: 24px;
    flex-direction: column;
  `}
`;

const FooterColumn = styled.div`
  width: 100%;
  margin-right: 8px;
  ${mediaqueries.tablet`
    margin-bottom: 16px;
  `}
  &.quarter {
    flex: 1;
  }
  &.half {
    flex: 2;
  }
`;

const HoritzontalRule = styled.div`
  position: relative;
  margin: 140px auto 50px;
  border-bottom: 1px solid ${(p: IColorThemeProps) => p.theme.colors.horizontalRule};

  ${mediaqueries.tablet`
    margin: 60px auto;
  `}
`;

const FooterText = styled.div`
  font-size: 12px;
  color: ${(p: IColorThemeProps) => p.theme.colors.grey};
  ${mediaqueries.tablet`
    margin-bottom: 80px;
  `}
`;

const LinkContainer = styled.ul`
  list-style-type: none;
`;

const Link = styled.a`
  color: ${(p: IColorThemeProps) => p.theme.colors.grey};
  &:hover {
    color: ${(p: IColorThemeProps) => p.theme.colors.primary};
  }
`;
