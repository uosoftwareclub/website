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
  return (
    <Section>
      <DescriptionContainer>
        <Heading.h2>The UOSC Approach</Heading.h2>
        <TextContainer>
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

const DescriptionContainer = styled.div`
  width: 100%;
  max-width: 1220px;
  position: relative;
  display: grid;
  grid-template-columns: 144px 670px;
  z-index: 2;
  margin: 0px auto;
  padding: 100px 4rem 30px;
  background: transparent;
  grid-column-gap: 128px;
  p {
    margin-bottom: 60px;
  }
`

const TextContainer = styled.div<IColorThemeProps>`
  font-size: 2.5rem;
  font-weight: 400;
  color: ${(p) => p.theme.colors.primary};
  line-height: 1.3;
  margin-bottom: 2rem;
`