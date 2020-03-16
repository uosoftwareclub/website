import React from "react";
import { useThemeUI } from 'theme-ui';

import { IColorTheme } from '@types';
import Layout from "@components/Layout";
import SEO from "@components/SEO";
import LeaderboardHero from "../sections/leaderboard/Leaderboard.Hero";
import LeaderboardFeatured from "../sections/leaderboard/Leaderboard.Featured";

const mockResponse = [
  {
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
  },
  {
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
  },
  {
    username: 'techwithtimm',
    eloData: [
      {
        x: 0,
        y: 1500,
      },
      {
        x: 1,
        y: 1500,
      },
      {
        x: 2,
        y: 1500,
      },
      {
        x: 3,
        y: 1500,
      },
      {
        x: 4,
        y: 1551,
      },
    ],
  },
  {
    username: 'melkman',
    eloData: [
      {
        x: 0,
        y: 1500,
      },
      {
        x: 1,
        y: 1500,
      },
      {
        x: 2,
        y: 1500,
      },
      {
        x: 3,
        y: 1500,
      },
      {
        x: 4,
        y: 1464,
      },
    ],
  },
  {
    username: 'astronova',
    eloData: [
      {
        x: 0,
        y: 1500,
      },
      {
        x: 1,
        y: 1500,
      },
      {
        x: 2,
        y: 1500,
      },
      {
        x: 3,
        y: 1500,
      },
      {
        x: 4,
        y: 1446,
      },
    ],
  },
  {
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
  },
  {
    username: 'aauon723',
    eloData: [
      {
        x: 0,
        y: 1500,
      },
      {
        x: 1,
        y: 1500,
      },
      {
        x: 2,
        y: 1464,
      },
      {
        x: 3,
        y: 1412,
      },
      {
        x: 4,
        y: 1412,
      },
    ],
  },
  {
    username: 'skrj',
    eloData: [
      {
        x: 0,
        y: 1500,
      },
      {
        x: 1,
        y: 1500,
      },
      {
        x: 2,
        y: 1500,
      },
      {
        x: 3,
        y: 1442,
      },
      {
        x: 4,
        y: 1397,
      },
    ],
  },
  {
    username: 'killuam87',
    eloData: [
      {
        x: 0,
        y: 1500,
      },
      {
        x: 1,
        y: 1500,
      },
      {
        x: 2,
        y: 1500,
      },
      {
        x: 3,
        y: 1454,
      },
      {
        x: 4,
        y: 1396,
      },
    ],
  },
]

function Leaderboard() {
  const themeContext = useThemeUI();
  const theme: IColorTheme = themeContext.theme as any;
  return (
    <Layout>
      <SEO
        title="UOSC - University of Ottawa Software Club, Software Learning Amplified"
        description="UOSC, empowering any student with a passion for software to achieve more. We will help you take your software development skills to the next level, and land that dream internship."
        pathname="/leaderboard"
      />
      <LeaderboardHero/>
      <LeaderboardFeatured rankingData={mockResponse}/>
      <svg style={{ height: 0 }}>
        <defs>
          <linearGradient id="leetcodeFeaturedGradient" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor={theme.colors.grey}/>
            <stop offset="100%" stopColor={theme.colors.card}/>
          </linearGradient>
        </defs>
      </svg>
    </Layout>
  );
}

export default Leaderboard;