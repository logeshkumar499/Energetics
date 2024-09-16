import React from "react";
import cardOne from "../../../assets/images/home-card-1.png";
import cardTwo from "../../../assets/images/home-card-2.png";
import cardThree from "../../../assets/images/home-card-3.png";

const ContentSection = () => {
  return (
    <section className="container-fluid mt-4 pb-4">
      <div className="content-home-section">
        <div className="col-md-12 pt-3 pb-3 pr-2 pl-2">
          <div className="row row-gap-1 ">
            <div className="col-md-6">
              <ContentSectionCard
                title="Energy (E)"
                className="h-100 white-txt card-one"
                description="The potential we bring to every project, powered by innovation, creativity, and technology. At Energetics AI, our energy fuels dynamic software solutions that push the boundaries of IT and entertainment."
                style={{ backgroundImage: `url(${cardOne})` }}
              />
            </div>
            <div className="col-md-6 d-flex flex-column gap-1 justify-content-center">
              <ContentSectionCard
                title="Mass (m)"
                className="card-two white-txt h-50"
                description="The solid foundation of expertise, knowledge, and experience. We offer robust, scalable, and tailored software services that form the core of every successful project."
                style={{ backgroundImage: `url(${cardTwo})` }}
              />
              <ContentSectionCard
                className="card-two black-txt h-50"
                title="Speed of Light (c²)"
                description="The velocity of change in the tech world is exponential. Energetics AI keeps pace with the fast-moving landscape of technology, accelerating your business toward a future of endless possibilities."
                style={{ backgroundImage: `url(${cardThree})` }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const ContentSectionCard = ({
  title,
  description,
  className = "",
  style = {},
}) => {
  return (
    <div className={`card-container ${className}`} style={style}>
      <div className="card-overlay">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
};
export default ContentSection;
