import React from "react";

import Layout from "@components/Layout";
import SEO from "@components/SEO";
import Home from "../sections/home/Home.Hero";

function LandingPage() {
  return (
    <Layout>
      <SEO/>
      <Home/>
    </Layout>
  );
}

export default LandingPage;