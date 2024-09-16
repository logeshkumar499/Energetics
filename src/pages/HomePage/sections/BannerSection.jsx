import React from "react";
import CommonButton from "../../../components/Button";
import Header from "../../../layout/Header";
import { useNavigate } from "react-router-dom";

const BannerSection = () => {
  const navigate = useNavigate();
  return (
    <section className="container-fluid">
      <div className="banner-section">
        <Header />
        <div className="w-100 banner-content">
          <h3 className="banner-section-title">Energetics AI</h3>
          <p className="banner-section-subtitle">
            Unleashing the Power of Innovation
          </p>
          <CommonButton onClick={() => navigate("/contact")}>
            Contact us
          </CommonButton>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
