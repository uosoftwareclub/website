import React from "react";

import Layout from "@components/Layout";
import SEO from "@components/SEO";
import HomeHero from "../sections/home/Home.Hero";

function LandingPage() {
  listenForCKeyPress();
  return (
    <Layout>
      <SEO/>
      <HomeHero/>
    </Layout>
  );
}

const listenForCKeyPress = () => window.addEventListener("keydown", event => {
  if (event.isComposing) {
    return;
  }
  if (event.key === 'c') {
    window.location.replace('mailto:uosoftwareclub@gmail.com')
  }
  // do something
});

export default LandingPage;