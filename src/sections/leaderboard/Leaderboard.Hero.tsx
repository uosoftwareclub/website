import React from 'react';
import styled from '@emotion/styled';
import Lottie, { Options } from 'react-lottie';
import { useThemeUI } from 'theme-ui';

import Section from '@components/Section';
import Transitions from '@components/Transitions';
import { IColorThemeProps, IColorTheme } from '@types';
import mediaqueries from '@styles/media';

import animationData from '../../assets/trophy.json';
import ButtonArrow from '@components/Button/Button.Arrow';

const LeaderboardHero: React.FC = () => {
  const themeContext = useThemeUI();
  const theme: IColorTheme = themeContext.theme as any;
  const lottieOptions: Options = {
    loop: false,
    autoplay: true, 
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <Section>
      <HeroContainer>
        <ContentContainer>
          <Transitions.CSS.FadeIn>
            <MainText>
              Leetcode
              <br/>
              Leaderboard
            </MainText>
            <SubText>
              Weekly Leetcode competitions every saturday from 9:30pm - 11:00pm EST.
              Compete against fellow classmates and rise through the ranks.
            </SubText>
            <a
              href="https://leetcode.com/contest/"
              target="_blank"
            >
              <ButtonArrow 
                text='Learn more'
                color={theme.colors.primary}
              />
            </a>
          </Transitions.CSS.FadeIn>
        </ContentContainer>
        <HeroImageContainer>
          <Lottie 
            options={lottieOptions}
          />
        </HeroImageContainer>
      </HeroContainer>
    </Section>
  );
};

export default LeaderboardHero;

const test = styled.a``;

const MainText = styled.p<IColorThemeProps>`
  font-size: 64px;
  font-weight: 700;
  color: ${(p) => p.theme.colors.primary};
  line-height: 1.3;
  margin-bottom: 16px;
  ${mediaqueries.tablet`
    font-size: 48px;
  `};
  ${mediaqueries.phone`
    font-size: 32px;
  `};
`;

const SubText = styled.p<IColorThemeProps>`
  font-size: 32px;
  font-weight: 400;
  color: ${(p) => p.theme.colors.grey};
  line-height: 1.3;
  margin-bottom: 8px;
  ${mediaqueries.tablet`
    font-size: 24px;
  `};
  ${mediaqueries.phone`
    font-size: 16px;
  `};
`;

const HeroContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 55px 0;
`;

const ContentContainer = styled.div<IColorThemeProps>`
  display: flex;
  flex: 2;
`;

const HeroImageContainer = styled.div`
  margin-bottom: 64px;
  flex: 1;
  ${mediaqueries.desktop`
    display: none;
  `};
`;