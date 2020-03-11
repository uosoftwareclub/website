import React from 'react';
import styled from '@emotion/styled';
import Section from '@components/Section';
import mediaqueries from '@styles/media';

import buildImage from '../../assets/build.jpg';
import buildImageDark from '../../assets/build_dark.jpg';
import Headings from '@components/Headings';
import ArrowButton from '@components/Button/Button.Arrow';
import { useColorMode, useThemeUI } from 'theme-ui';
import { IColorTheme } from '@types';
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
            <Headings.h3>A Place to Build</Headings.h3>
            <p>
              At UOSC, we strive to deliver high quality open source projects. From beautiful web design to
              full-stack web development, we cover it all.
            </p>
            <p>
              Contributing to UOSC hosted projects means using the latest and greatest technologies like
              ReactJS, MongoDB, and AWS.
            </p>
            <p>
              At UOSC Open Source you can build you dream, learn from the best. Come checkout our projects now!
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
    </>
  );
};

export default HeroService;

const ServiceContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  ${mediaqueries.phablet`
    .trails-text {
      font-size: 2em;
    }
  `}
`

const ServiceDescriptionContainer = styled.div<any>`
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
  color: ${p => p.theme.colors.primary}
`

const ServiceImageContainer = styled.div`
  width: 40%;
  /* box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23); */
  img {
    max-width: 100%;
  }
  
`
