import React from "react";
import { Col, Row } from "reactstrap";

const OurPhilosophySection = () => {
  return (
    <section className="container-fluid mt-4 pb-4">
      <div className="our-philosophy-section">
        <div className="col-md-12 pt-3 pb-3 pr-2 pl-2">
          <Row className="row row-gap-1 ">
            <Col className="col-md-12 mb-3 mt-3">
              <h6 className="our-philosophy-title">Our Philosophy & Vision</h6>
              <div className="w-100 d-flex flex-wrap justify-content-center">
                <p className="our-philosophy-subtitle w-90">
                  At Energetics AI, we’ve helped business find the formula for
                  success: combining expertise, speed, and innovation to deliver
                  transformative software solutions.{" "}
                </p>
              </div>
            </Col>
            <Col className="col-md-6 col-sm-12">
              <OurPhilosophySectionCard
                title="Energy (E)"
                description="The potential we bring to every project, powered by innovation, creativity, and technology. At Energetics AI, our energy fuels dynamic software solutions that push the boundaries of IT and entertainment."
              />
            </Col>
            <Col className="col-md-6 col-sm-12">
              <OurPhilosophySectionCard
                title="Energy (E)"
                description="The potential we bring to every project, powered by innovation, creativity, and technology. At Energetics AI, our energy fuels dynamic software solutions that push the boundaries of IT and entertainment."
              />
            </Col>
          </Row>
        </div>
      </div>
    </section>
  );
};
export default OurPhilosophySection;

export const OurPhilosophySectionCard = ({
  title,
  description,
}) => {
  return (
    <div className={`card-container`}>
      <div className="card-overlay">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
};
