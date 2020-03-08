import React from 'react';
import styled from '@emotion/styled';
import Lottie from 'react-lottie';

import Section from '@components/Section';
import Transitions from '@components/Transitions';
import ScrollIndicator from '@components/ScrollIndicator';
import ArrowButton from '@components/Button/Button.Arrow';

import media from '@styles/media';
import { IColorThemeProps, IColorTheme } from '@types';
import mediaqueries from '@styles/media';

import animationData from '../../assets/17059-galacticons-animated.json';
import { useThemeUI, useColorMode } from 'theme-ui';

const HomeHero: React.FC = () => {
  const themeContext = useThemeUI();
  const [colorMode] = useColorMode();
  const isDark = colorMode === `dark`;
  const theme: IColorTheme = themeContext.theme as any;
  const lottieOptions = {
    loop: true,
    autoplay: true, 
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  return (
    <Section>
      <HeroContainer>
        <ContentContainer theme={theme}>
          <Transitions.CSS.FadeIn>
            <MainText theme={theme}>
              UOSC, empowering any student with a passion for software to achieve more.
            </MainText>
            <SubText theme={theme}>
              We will help you take your software development skills to the next
              level, and land that dream internship.
            </SubText>
            <CalltoAction
              theme={theme}
              onClick={() => handleNavigatingToContact()}
              className="cta-desktop"
            >
              Press <KeyChar theme={theme} className="key-char">C</KeyChar> anywhere to contact us
            </CalltoAction>
            <span className="cta-mobile">
              <ArrowButton
                text="Get in touch"
                onClick={() => handleNavigatingToContact()}
                color={theme.colors.primary}
              />
            </span>
          </Transitions.CSS.FadeIn>
        </ContentContainer>
        <HeroImageContainer>
          <Lottie 
            options={lottieOptions}
          />
        </HeroImageContainer>
      </HeroContainer>
      <ScrollIndicator mode={isDark ? 'light' : 'dark'} />
    </Section>
  );
};

export default HomeHero;

const handleNavigatingToContact = () => {
  const windowGlobal = typeof window !== 'undefined' && window;
  if (!windowGlobal) {
    return;
  }
  window.location.replace('mailto:uosoftwareclub@gmail.com');
}

const MainText = styled.p<IColorThemeProps>`
  font-size: 2.5rem;
  font-weight: 400;
  color: ${(p) => p.theme.colors.primary};
  line-height: 1.3;
  margin-bottom: 2rem;
  ${media.phone`
    font-size: 2rem;
  `};
`;

const SubText = styled.p<IColorThemeProps>`
  font-size: 2.5rem;
  font-weight: 400;
  color: ${(p) => p.theme.colors.grey};
  line-height: 1.3;
  margin-bottom: 5rem;
  ${media.phone`
    font-size: 2rem;
  `};
`;

const CalltoAction = styled.button<IColorThemeProps>`
  font-weight: 700;
  
`;

const KeyChar = styled.span<IColorThemeProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${(p) => p.theme.colors.background};
  font-size: 13px;
  width: 16px;
  height: 18px;
  margin: 0px 1px;
  background: ${(p) => p.theme.colors.grey};
  border-radius: 2.5px;
  transition: all 0.25s ease;
`;

const HeroContainer = styled.div`
  height: calc(100vh - 230px);
  min-height: 600px;
  padding-top: 10;

  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 110px 0;
  
  ${media.phablet`
    height: calc(100vh - 180px);
    min-height: 100%;
    padding: 0;
  `};

  ${media.desktop_medium`
    min-height: 360px;
  `};

  @media screen and (max-height: 800px) {
    min-height: 360px;
  }
`;

const ContentContainer = styled.div<IColorThemeProps>`
  position: relative;
  width: 40%;
  margin-right: 50px;
  .cta-desktop {
    color: ${(p) => p.theme.colors.grey};
  }
  .cta-mobile {
    display: none;
    color: ${(p) => p.theme.colors.primary};
  }
  &:hover {
    .cta-desktop {
      color: ${(p) => p.theme.colors.primary};
      transition: all 0.25s ease 0s;
      .key-char {
        background: ${(p) => p.theme.colors.primary};
      }
    }
  }
  ${media.tablet`
    width: 100%;
    margin-right: 0;
    .cta-desktop {
      display: none;
    }
    .cta-mobile {
      display: block;
    }
  `};
`;

const HeroImageContainer = styled.div`
  position: relative;
  width: 45%;

  ${mediaqueries.tablet`
    display: none;
  `}
`;

const CalltoActionArrow = ({color = 'white'}) => (
  <svg width="35" height="7" viewBox="0 0 35 7" version="1.1">
    <g fill="none">
      <g>
        <path
          d="M 3.5 0L 6.53109 5.25L 0.468911 5.25L 3.5 0Z"
          transform="matrix(0 1 -1 0 35 0)"
          fill={color}
        ></path>
        <line
          y1="-0.5"
          x2="30"
          y2="-0.5"
          transform="translate(0 4)"
          stroke={color}
        ></line>
      </g>
    </g>
  </svg>
);
