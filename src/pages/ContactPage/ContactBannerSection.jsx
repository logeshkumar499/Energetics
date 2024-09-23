import React from "react";
import Header from "../../layout/Header";

const ContactBannerSection = () => {
  return (
    <section className="container-fluid mb-4">
      <div className="banner-section">
        <Header />
        <div className="w-100 banner-content">
          <h3 className="banner-section-title">Get in Touch</h3>
          <p className="banner-section-subtitle">You can reach us anytime</p>
        </div>
      </div>
    </section>
  );
};

export default ContactBannerSection;
