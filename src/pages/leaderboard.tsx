import React from "react";

import Layout from "@components/Layout";
import SEO from "@components/SEO";
import LeaderboardHero from "../sections/leaderboard/Leaderboard.Hero";
import LeaderboardFeatured from "../sections/leaderboard/Leaderboard.Featured";

function Leaderboard() {
  return (
    <Layout>
      <SEO
        title="UOSC - University of Ottawa Software Club, Software Learning Amplified"
        description="UOSC, empowering any student with a passion for software to achieve more. We will help you take your software development skills to the next level, and land that dream internship."
        pathname="/leaderboard"
      />
      <LeaderboardHero/>
      <LeaderboardFeatured/>
    </Layout>
  );
}

export default Leaderboard;