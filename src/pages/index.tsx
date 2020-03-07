import React from "react";

import Layout from "@components/Layout";
import SEO from "@components/SEO";
import HomeHero from "../sections/home/Home.Hero";
import HomeDescription from "../sections/home/Home.Description";

function LandingPage() {
  listenForCKeyPress();
  return (
    <Layout>
      <SEO/>
      <HomeHero/>
      <HomeDescription />
    </Layout>
  );
}

const listenForCKeyPress = () => {
  const windowGlobal = typeof window !== 'undefined' && window;
  if (!windowGlobal) {
    return;
  }
  window.addEventListener("keydown", event => {
    if (event.isComposing) {
      return;
    }
    if (event.key === 'c') {
      window?.location.replace('mailto:uosoftwareclub@gmail.com')
    }
    // do something
  });
}
export default LandingPage;