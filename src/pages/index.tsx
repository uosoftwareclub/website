import React from "react";

import Layout from "@components/Layout";
import SEO from "@components/SEO";
import HomeHero from "../sections/home/Home.Hero";
import HomeDescription from "../sections/home/Home.Description";

function LandingPage() {
  listenForCKeyPress();
  return (
    <Layout>
      <SEO
        title="UOSC - University of Ottawa Software Club, Software Learning Amplified"
        description="UOSC, empowering any student with a passion for software to achieve more. We will help you take your software development skills to the next level, and land that dream internship."
        pathname="/"
      />
      <HomeHero/>
      <HomeDescription />
    </Layout>
  );
}

const listenForCKeyPress = () => {1
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