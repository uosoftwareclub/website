import React from 'react';

import styled from '@emotion/styled';
import { IColorThemeProps } from '@types';
import mediaqueries from '@styles/media';
import Section from '@components/Section';
import Card from '@components/Card';

const first = {
  username: '0x77756f6e',
  eloData: [
    {
      x: 0,
      y: 1500,
    },
    {
      x: 1,
      y: 1656,
    },
    {
      x: 2,
      y: 1628,
    },
    {
      x: 3,
      y: 1646,
    },
    {
      x: 4,
      y: 1628,
    },
  ],
};

const second = {
  username: 'l1ghtspeed',
  eloData: [
    {
      x: 0,
      y: 1500,
    },
    {
      x: 1,
      y: 1508,
    },
    {
      x: 2,
      y: 1541,
    },
    {
      x: 3,
      y: 1585,
    },
    {
      x: 4,
      y: 1585,
    },
  ],
};

const third = {
  username: 'helloworldguys',
  eloData: [
    {
      x: 0,
      y: 1500,
    },
    {
      x: 1,
      y: 1534,
    },
    {
      x: 2,
      y: 1430,
    },
    {
      x: 3,
      y: 1407,
    },
    {
      x: 4,
      y: 1430,
    },
  ],
};

const LeaderboardFeatured: React.FC<{}> = ({}) => {
  return (
    <>
      <Section>
        <TopThreeContainer>
          <Card.LeetcodeFeatured 
            username={first.username}
            eloData={first.eloData}
            medalColor={'#d4af37'}
          />
          <Card.LeetcodeFeatured 
            username={second.username}
            eloData={second.eloData}
            medalColor={'#aaa9ad'}
          />
          <Card.LeetcodeFeatured 
            username={third.username}
            eloData={third.eloData}
            medalColor={'#cd7f32'}
          />
        </TopThreeContainer>
      </Section>
    </>
  );
};

export default LeaderboardFeatured;

const TopThreeContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  ${mediaqueries.desktop`
    flex-direction: column;
  `};
`;