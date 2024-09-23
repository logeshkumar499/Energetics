import React from "react";
// import LinkedInImg from "../../../assets/icons/linkedin-white.png";

const AboutSectionItems = ({ item = {}, index = 0 }) => {
  return (
    <>
      <div key={item.id + item.name} className="item row row-gap-1">
        <div className="col-md-4 col-sm-12">
          <img className="uesr-img" src={item.imgSource} alt="about-img" />

          {/* <a
            href={item.linkedIn}
            target="_blank"
            className="d-flex justify-content-center align-items-center mt-2"
          >
            <span className="item-section-sub-title">LinkedIn </span>
            <img
              src={LinkedInImg}
              className="social-img ml-2"
              alt="SocialImg"
            />
          </a> */}
        </div>
        <div className="col-md-8 col-sm-12">
          <h6 className="item-section-title">{item.description}</h6>
          <p className="item-section-sub-title mb-1">
            {item.name} <span>{item.designation}</span>
          </p>
          <p className="d-flex">
            <a href={item.logoLink} target="_blank">
              <img src={item.logo} alt="witmerImg" className="item-logo-img" />
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutSectionItems;
