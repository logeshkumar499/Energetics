import React from "react";
import "./aboutus.css";
import AboutBannerSection from "./section/AboutBannerSection";
import OurPhilosophySection from "./section/OurPhilosophy";
// import ExcellenceSection from "./section/ExcellenceSection";
import OurLeadershipSection from "./section/OurLeadershipSection";
// import KeyPlayers from "./section/KeyPlayers";
// import OurAdvisorSection from "./section/OurAdvisorSection";
import Footer from "../../layout/Footer";

const AboutUsPage = () => {
  return (
    <>
      <AboutBannerSection />
      <OurPhilosophySection />
      {/* <ExcellenceSection /> */}
      <OurLeadershipSection />
      {/* <OurAdvisorSection /> */}
      {/* <KeyPlayers/> */}
      <Footer />
    </>
  );
};

export default AboutUsPage;
