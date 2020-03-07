import React from "react";
import styled from "@emotion/styled";

import Section from "@components/Section";
import Transitions from '@components/Transitions'

import media from "@styles/media";
import { IColorThemeProps } from "@types";
import mediaqueries from "@styles/media";

import TeamSpirit from '../../assets/team_spirit.svg';

const HomeHero: React.FC = () => {
  return (
    <Section>
      <HeroContainer>
        <ContentContainer>
          <Transitions.CSS.FadeIn>
            <MainText>
              UOSC, empowering open-source projects and competitive programming at University of Ottawa.
            </MainText>
            <SubText>
              We will help you take your software development skills to the next level, and land that dream internship.
            </SubText>
            <CalltoAction>Press <KeyChar>C</KeyChar> anywhere to contact us</CalltoAction>
          </Transitions.CSS.FadeIn>
        </ContentContainer>
        <HeroImageContainer>
          <HeroImage src={TeamSpirit} alt="UOSC Team Spirit" className="Logo__Desktop"/>
        </HeroImageContainer>
      </HeroContainer>
    </Section>
  );
};

export default HomeHero;

const MainText = styled.p<IColorThemeProps>`
  font-size: 2.5rem;
  font-weight: 400;
  color: ${p => p.theme.colors.primary};
  line-height: 1.3;
  margin-bottom: 2rem;
`

const SubText = styled.p<IColorThemeProps>`
  font-size: 2.5rem;
  font-weight: 400;
  color: ${p => p.theme.colors.grey};
  line-height: 1.3;
  margin-bottom: 5rem;
`

const CalltoAction = styled.button<IColorThemeProps>`
  color: ${p => p.theme.colors.grey};
  transition: all 0.25s ease 0s;
  font-weight: 700;
  &:hover {
    color: ${p => p.theme.colors.primary};
    span {
      background: ${p => p.theme.colors.primary};
    }
  }
`

const KeyChar = styled.span<IColorThemeProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${p => p.theme.colors.background};
  font-size: 13px;
  width: 16px;
  height: 16px;
  margin: 0px 1px;
  background: ${p => p.theme.colors.grey};
  border-radius: 2.5px;
  transition: background 0.25s ease 0s;
`

const HeroContainer = styled.div`
  display: flex;
  text-align: left;
  align-items: center;
  justify-content: space-between;
  padding: 110px 0;
  ${media.phablet`
    padding: 55px 0;
  `};
`

const ContentContainer = styled.div`
  position: relative;
  width: 40%;
  margin-right: 50px;
  ${media.phablet`
    width: 100%;
    margin-right: 0;
  `};
`

const HeroImageContainer = styled.div`
  position: relative;
  width: 45%;

  ${mediaqueries.tablet`
    display: none;
    .Logo__Desktop {
      display: none;
    }
  `}
`

const HeroImage = styled.img`
  max-width: 100%;
`