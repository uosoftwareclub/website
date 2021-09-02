import React, { useEffect } from 'react';

import Layout from '@components/Layout';
import SEO from '@components/SEO';
import HomeHero from '../sections/home/Home.Hero';
import HomeDescription from '../sections/home/Home.Description';
import HomeEnding from '../sections/home/Home.Ending';

function LandingPage() {
  useEffect(() => {
    const event = listenForCKeyPress;
    window.addEventListener('keydown', event);
    return () => window.removeEventListener('keydown', event);
  });

  return (
    <Layout>
      <SEO
        title="UOSC - University of Ottawa Software Club, Software Learning Amplified"
        description="UOSC, empowering any student with a passion for software to achieve more. We will help you take your software development skills to the next level, and land that dream internship."
        pathname="/"
      />
      <HomeHero />
      <HomeDescription />
      <HomeEnding />
    </Layout>
  );
}

const listenForCKeyPress = (event: KeyboardEvent) => {
  if (event.isComposing || event.ctrlKey || event.altKey || event.shiftKey) {
    return;
  }
  if (event.key === 'c') {
    window?.location.replace('mailto:uosoftwareclub@gmail.com');
  }
  // do something
};
export default LandingPage;
