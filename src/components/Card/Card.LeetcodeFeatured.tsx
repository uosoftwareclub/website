import React from 'react';

import styled from '@emotion/styled';
import { IColorThemeProps } from '@types';
import mediaqueries from '@styles/media';
import Headings from '@components/Headings';
import Icons from '@icons';
import Graph from '@components/Graph';

const medalColors = {
  gold: '#d4af37',
  silver: '#aaa9ad',
  bronze: '#cd7f32',
}

const getMedalColor = (position: number): string => {
  switch(position) {
    case(1):
      return medalColors.gold;
    case(2):
      return medalColors.silver;
    case(3):
      return medalColors.bronze;
    default:
      return;
  }
};

interface LeetcodeFeaturedProps {
  username: string,
  eloData: {
    x: number,
    y: number,
  }[],
  position: number,
}

const LeetcodeFeatured: React.FC<LeetcodeFeaturedProps> = ({ username, eloData, position }) => {
  const curElo: number = eloData[eloData.length - 1].y;
  const leetcodeExternalLink = `https://leetcode.com/${username}/`;
  const medalColor = getMedalColor(position);
  const title = medalColor ? username : `${position}. ${username}`;

  return (
    <>
      <CardContainer>
        <InfoContainer>
          <NameContainer>
            { medalColor &&
              <MedalContainer>
                <Icons.Medal fill={medalColor}/>
              </MedalContainer>
            }
            <Headings.h3>
              { title }
            </Headings.h3>
            <LinkContainer>
              <a
                href={leetcodeExternalLink}
                target="_blank" 
              >
                <Icons.ExternalLink fill={'#00acee'}/>
              </a>
            </LinkContainer>
          </NameContainer>
          <ELOText>
            { curElo }
          </ELOText>
        </InfoContainer>
        <GraphContainer>
          <Graph.LeetcodeFeatured eloData={eloData}/>
        </GraphContainer>
      </CardContainer>
    </>
  );
};

export default LeetcodeFeatured;

const CardContainer = styled.div<IColorThemeProps>`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  background: ${p => p.theme.colors.card};
  border-radius: 8px;
  padding: 16px 24px;
  position: relative;
  width: 100%;
  min-height: 160px;
  box-shadow: 0px 3px 15px rgba(0,0,0,0.2);
`;

const ELOText = styled.p<IColorThemeProps>`
  color: ${p => p.theme.colors.grey};
  font-size: 16px;
`;

const GraphContainer = styled.div`
  height: auto;
  width: 100%;
  margin-top: 16px;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex: 1;
  justify-content: space-between;
`;

const LinkContainer = styled.div`
  width: 12px;
  margin-left: 8px;
`;

const MedalContainer = styled.div`
  width: 24px;
  height: 24px;
  margin-right: 8px;
  text-align: center;
`;

const NameContainer = styled.div`
  display: flex;
  align-items: center;
`;