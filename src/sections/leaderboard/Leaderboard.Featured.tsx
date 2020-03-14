import React from 'react';

import styled from '@emotion/styled';
import mediaqueries from '@styles/media';
import Section from '@components/Section';
import Card from '@components/Card';
interface ILeaderboardFeaturedProps {
  rankingData: {
    username: string,
    eloData: {
      x: number,
      y: number,
    }[],
  }[]
}

const LeaderboardFeatured: React.FC<ILeaderboardFeaturedProps> = (props) => {
  const renderCards = (props: ILeaderboardFeaturedProps) => {
    return props.rankingData.map((data, index) => {
      return (
        <Card.LeetcodeFeatured 
          username={data.username}
          eloData={data.eloData}
          position={index+1}
          key={index}
        />
      );
    });
  };

  return (
    <>
      <Section>
        <TopThreeContainer>
          { renderCards(props) }
        </TopThreeContainer>
      </Section>
    </>
  );
};

export default LeaderboardFeatured;

const TopThreeContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  width: 100%;
  ${mediaqueries.desktop`
    grid-template-columns: repeat(2, 1fr);
  `};
  ${mediaqueries.tablet`
    grid-template-columns: repeat(1, 1fr);
  `};
`;