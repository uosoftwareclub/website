import React from "react";

import Layout from "@narative/gatsby-theme-novela/src/components/Layout";
import SEO from "@narative/gatsby-theme-novela/src/components/SEO";
import Home from "../sections/home/Home.Hero";

function LandingPage() {
  return (
    <Layout>
      <SEO />
      <Home/>
    </Layout>
  );
}

export default LandingPage;