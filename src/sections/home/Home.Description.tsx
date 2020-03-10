import React from 'react';
import styled from '@emotion/styled';
import Lottie from 'react-lottie';

import Section from '@components/Section';
import Transitions from '@components/Transitions';
import Heading from '@components/Headings';

import media from '@styles/media';
import { IColorThemeProps, IColorTheme } from '@types';
import mediaqueries from '@styles/media';

import { useThemeUI } from 'theme-ui';

const HomeDescription: React.FC = () => {
  const themeContext = useThemeUI();
  const theme: IColorTheme = themeContext.theme as any;
  return (
    <Section>
      <DescriptionContainer>
        <div>
          <Sticky>
            <Heading.h2>The UOSC Approach</Heading.h2>
          </Sticky>
          
        </div>
        <TextContainer theme={theme}>
          <p>
            In the vast and growing world of software, 
            it is vital to be surrounded by like minded individuals in the field.
            This allows one to grow at a faster rate by sharing their knowledge and learning from peers and mentors.
          </p>
          <p>
            The uOttawa Software Club hosts open-source projects on GitHub providing a place for members to make
            contributions and participate in meaningful real-world impacting developments.
          </p>
          <p>
            We are also commited to providing a vivid competitive experience within the club by hosting events during
            LeetCode Competitions.
          </p>
        </TextContainer>
      </DescriptionContainer>
      
    </Section>
  )
}

export default HomeDescription;

const Sticky = styled.div`
  position: sticky;
  top: 15px;

  ${mediaqueries.phablet`
    position: relative;
  `}
`

const DescriptionContainer = styled.div`
  width: 100%;
  max-width: 100%;
  position: relative;
  display: grid;
  grid-template-columns: 144px 670px;
  z-index: 2;
  margin: 0px auto;
  margin-bottom: 50px;
  padding: 100px 4rem 30px;
  background: transparent;
  grid-column-gap: 128px;
  p {
    margin-bottom: 60px;
  }

  h2 {
    margin-bottom: 15px;
  }

  ${media.desktop`
    max-width: 100%;
    padding: 55px 0;
    display: block;
    p {
      margin-bottom: 30px;
    }
  `};
`

const TextContainer = styled.div<IColorThemeProps>`
  font-size: 2.5rem;
  font-weight: 400;
  color: ${(p) => p.theme.colors.primary};
  line-height: 1.3;
  margin-bottom: 2rem;
  ${media.desktop`
    font-size: 2rem;
  `};
`