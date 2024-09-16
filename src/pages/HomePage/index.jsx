import React from "react";
import BannerSection from "./sections/BannerSection";
import ContentSection from "./sections/ContentSection";
import AboutSection from "./sections/AboutSection";
import "./homepage.css";
import TechnologySection from "./sections/TechnologySection";
import FeaturesSection from "./sections/FeaturesSection";
import Footer from "../../layout/Footer";

const HomePage = () => {
  return (
    <>
      <BannerSection />
      <ContentSection />
      <AboutSection />
      <TechnologySection />
      <FeaturesSection />
      <Footer/>
    </>
  );
};

export default HomePage;
