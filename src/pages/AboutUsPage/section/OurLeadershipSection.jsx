import React from "react";
import { Col, Row } from "reactstrap";
import User1 from "../../../assets/images/nirmal.png";
import User2 from "../../../assets/images/yasar.png";
import LinkedInImg from "../../../assets/icons/linkedin.png";

const OurLeadershipSection = () => {
  return (
    <section className="container-fluid">
      <div className="leadership-section">
        <div className="col-md-12 p-2">
          <Row className="row row-gap-1 ">
            <Col className="col-md-12 mb-3 mt-3">
              <h6 className="leadership-title  text-center">Our Leadership</h6>
              <div className="w-100 d-flex flex-wrap justify-content-center">
                <p className="leadership-subtitle w-90">
                  We are led by a team of seasoned professionals bringing rich
                  expertise and domain exposure from varied backgrounds while
                  providing strategic direction to deliver excellence.
                </p>
              </div>
            </Col>
            <Col
              sm={12}
              md={6}
              className="leadership-container d-flex justify-content-md-start align-items-sm-center align-items-md-end justify-content-center flex-column "
            >
              <div className="img-container">
                <img src={User1} alt="user-img" />
                <h6 className="name-txt mt-2">Nirmal Ramesh Kotecha</h6>
                <p className="designation-txt mb-2">Director & CEO</p>
                <a
                  href="https://www.linkedin.com/in/nirmalkotecha"
                  target="_blank"
                  className="mb-3 d-flex justify-content-start align-items-center w-fit-content"
                >
                  <span className="designation-txt fw-600">LinkedIn </span>
                  <img
                    src={LinkedInImg}
                    className="social-img ml-2"
                    alt="SocialImg"
                  />
                </a>
              </div>
            </Col>
            <Col
              sm={12}
              md={6}
              className="leadership-container d-flex justify-content-md-start align-items-sm-center align-items-md-start justify-content-center flex-column "
            >
              <div className="img-container">
                <img src={User2} alt="user-img" />
                <h6 className="name-txt mt-2">Yasar Arafath</h6>
                <p className="designation-txt mb-2">Director & CTO</p>
                <a
                  href="https://www.linkedin.com/in/abdulrashid1991"
                  target="_blank"
                  className="mb-3 d-flex justify-content-start align-items-center w-fit-content"
                >
                  <span className="designation-txt fw-600">LinkedIn </span>
                  <img
                    src={LinkedInImg}
                    className="social-img ml-2"
                    alt="SocialImg"
                  />
                </a>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </section>
  );
};
export default OurLeadershipSection;
