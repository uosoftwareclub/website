import React from "react";

import Layout from "@components/Layout";
import SEO from "@components/SEO";
import HomeHero from "../sections/home/Home.Hero";

function LandingPage() {
  return (
    <Layout>
      <SEO/>
      <HomeHero/>
    </Layout>
  );
}

export default LandingPage;