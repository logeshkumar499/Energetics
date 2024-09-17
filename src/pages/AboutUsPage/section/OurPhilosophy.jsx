import React from "react";
import { Col, Row } from "reactstrap";

const OurPhilosophySection = () => {
  return (
    <section className="container-fluid mt-4 pb-4">
      <div className="our-philosophy-section">
        <div className="col-md-12 pt-3 pb-3 pr-2 pl-2">
          <Row className="row row-gap-1 h-100">
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
          </Row>
          <Row className="row row-gap-1 h-100">
            <Col className="col-md-6 col-sm-12">
              <OurPhilosophySectionCard
                title="Our Vision"
                description="We envision becoming the premier tech partner for leading startups and enterprises. Our goal is to be the name you trust for innovative solutions and strategic growth, helping you stay ahead in a fast-evolving landscape."
              />
            </Col>
            <Col className="col-md-6 col-sm-12">
              <OurPhilosophySectionCard
                title="Our Mission"
                description="Our mission is simple: to empower startups and enterprises to research, plan, and build cutting-edge solutions that propel them to the forefront of their markets. We’re here to ensure your vision is executed flawlessly, with speed and precision."
              />
            </Col>
          </Row>
        </div>
      </div>
    </section>
  );
};
export default OurPhilosophySection;

export const OurPhilosophySectionCard = ({ title, description,className }) => {
  return (
    <div className={`card-container h-100 ${className}`}>
      <div className="card-overlay">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
};
