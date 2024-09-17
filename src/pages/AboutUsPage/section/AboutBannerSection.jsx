import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../../layout/Header";
import CommonButton from "../../../components/Button";

const AboutBannerSection = () => {
  const navigate = useNavigate();
  return (
    <section className="container-fluid">
      <div className="about-banner-section">
        <Header />
        <div className="w-100 about-banner-content">
          <h3 className="about-banner-section-title mt-3">Customer-Centric</h3>
          <p className="about-banner-section-subtitle">
            Exceptional Experiences
          </p>
          <CommonButton className="mt-3" onClick={() => navigate("/contact")}>
            Contact us
          </CommonButton>
        </div>
      </div>
    </section>
  );
};

export default AboutBannerSection;
