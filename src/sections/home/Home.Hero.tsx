import React from "react";
import styled from "@emotion/styled";

import Section from "@components/Section";
import Heading from '@components/Headings'
import Transitions from '@components/Transitions'
import Button from '@components/Button'

import media from "@styles/media";

const HomeHero: React.FC = () => {
  return (
    <Section>
      <ContentContainer>
        <Transitions.CSS.FadeIn>
          <Heading.h1>
            UOSC - The club to build open source projects, compete
            against each other, and design great products.
          </Heading.h1>
          <MainText>
            We are a team of dedicated students on a mission to help
            raise and amplify talent at uOttawa.
          </MainText>
          <Button
            text="Coming soon..."
            isDisabled={true}
          />
        </Transitions.CSS.FadeIn>
      </ContentContainer>
    </Section>
  );
};

export default HomeHero;

const MainText = styled.p`
  font-size: 3.2rem;
  font-weight: 400;
  color: ${p => p.theme.colors.grey};
  line-height: 1.3;
  margin-bottom: 50px;
  ${media.phablet`
    font-size: 2.2rem;
  `};
`

const ContentContainer = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  text-align: center;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 110px 35px;
  ${media.phablet`
    margin: 55px 17.5px;
  `};
`