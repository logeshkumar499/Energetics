import React from "react";
import { Col, Row } from "reactstrap";
import User1 from "../../../assets/images/user-1.png";
import User2 from "../../../assets/images/user-2.png";

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
                <p className="designation-txt">Director</p>
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
                <p className="designation-txt">Director</p>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </section>
  );
};
export default OurLeadershipSection;
