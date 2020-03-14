import React from 'react';
import styled from '@emotion/styled';
import Section from '@components/Section';
import mediaqueries from '@styles/media';

import buildImage from '../../assets/build.jpg';
import buildImageDark from '../../assets/build_dark.jpg';
import competeImage from '../../assets/compete.jpg';
import competeImageDark from '../../assets/compete_d.jpg';
import Headings from '@components/Headings';
import ArrowButton from '@components/Button/Button.Arrow';
import { useColorMode, useThemeUI } from 'theme-ui';
import { IColorTheme, IColorThemeProps } from '@types';
import { Link } from 'gatsby';

const HeroService = () => {
  const themeContext = useThemeUI();
  const [colorMode] = useColorMode();
  const isDark = colorMode === `dark`;
  const theme: IColorTheme = themeContext.theme as any;
  return (
    <>
      <Section>
        <ServiceContainer>
          <ServiceDescriptionContainer>
            <Headings.h3>We 💖 Open Source</Headings.h3>
            <p>
              At UOSC, we strive to deliver high quality open source projects. From beautiful web design to
              full-stack web development, we cover it all.
            </p>
            <p>
              Contributing to UOSC hosted projects means using the latest and greatest technologies like
              ReactJS, MongoDB, and AWS.
            </p>
            <p>
              At UOSC Open Source, you can build you dream, and gain valuable experience. Come checkout our projects now!
            </p>
            <ArrowButton
              as={Link}
              to="labs"
              text="See Projects"
              // onClick={() => handleNavigatingToContact()}
              color={theme.colors.primary}
            />
          </ServiceDescriptionContainer>
          <ServiceImageContainer>
          {isDark ? (
            <img src={buildImageDark}/>
          ) : (
            <img src={buildImage}/>
          )}
          </ServiceImageContainer>          
        </ServiceContainer>
      </Section>
      <Section>
        <ServiceContainer>
          <ServiceImageContainer>
          {isDark ? (
            <img src={competeImageDark} className="half"/>
          ) : (
            <img src={competeImage} className="half"/>
          )}
          </ServiceImageContainer>
          <ServiceDescriptionContainerMirrored>
            <Headings.h3>Compete &amp; Grow</Headings.h3>
            <p>
              At UOSC, we believe in having healthy competition. Every Saturday we host in person leetcode competitions
              for members to compete and grow together.
            </p>
            <p>
              We provide free interview prep and resume roast and other mentorship services to assist our members. 
            </p>
            <p>
              At UOSC Competition, you can compete, and learn from the best. Checkout our member leaderboard now!
            </p>
            <ArrowButton
              as={Link}
              to="leaderboard"
              text="Leaderboard"
              // onClick={() => handleNavigatingToContact()}
              color={theme.colors.primary}
            />
          </ServiceDescriptionContainerMirrored>
        </ServiceContainer>
      </Section>
    </>
  );
};

export default HeroService;

const ServiceContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 200px;
  ${mediaqueries.tablet`
    margin-bottom: 100px;
  `}
`

const ServiceDescriptionContainerMirrored = styled.div<IColorThemeProps>`
  h3 {
    font-size: 3em;
    margin-bottom: 20px;
    text-align: right;
  }
  p {
    margin-bottom: 15px;
    font-size: 1.2em;
    text-align: right;
  }
  width: 40%;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-left: -5vw;
  margin-top: -200px;
  color: ${p => p.theme.colors.primary};
  ${mediaqueries.desktop`
    margin-top: 0;
    width: 60%;
  `}

  ${mediaqueries.tablet`
    width: 100%;
    display: block;
    h3 {
      font-size: 2em;
      margin-bottom: 20px;
      text-align: left;
    }
    p {
      text-align: left;
    }
    margin-left: 0;
    margin-top: 0;
  `}
`


const ServiceDescriptionContainer = styled.div<IColorThemeProps>`
  h3 {
    font-size: 3em;
    margin-bottom: 20px;
  }
  p {
    margin-bottom: 20px;
    font-size: 1.2em;
  }
  width: 40%;
  z-index: 1;
  margin-right: -5vw;
  margin-top: -200px;
  color: ${p => p.theme.colors.primary};
  ${mediaqueries.desktop`
    margin-top: 0;
    width: 60%;
  `}

  ${mediaqueries.tablet`
    width: 100%;
    margin-top: 0;
    h3 {
      font-size: 2em;
      margin-bottom: 20px;
    }
    margin-left: 0;
    margin-top: 0;
  `}
`

const ServiceImageContainer = styled.div`
  width: 40%;
  
  .half {
    opacity: 0.5;
  }

  /* box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23); */
  img {
    max-width: 100%;
  }
  ${mediaqueries.tablet`
    display: none;
  `}
`
