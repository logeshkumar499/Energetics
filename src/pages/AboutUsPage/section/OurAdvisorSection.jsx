import React from "react";
import { Col, Row } from "reactstrap";
import OwlCarousel from "react-owl-carousel";
import { OurAdvisorsContent } from "../../../contents";

const OurAdvisorSection = () => {
  return (
    <section className="container-fluid">
      <div className="advisor-section">
        <div className="col-md-12 p-2">
          <Row className="row row-gap-1 ">
            <Col className="col-md-12 mb-3 mt-3">
              <h6 className="advisor-title  text-center">Our Advisors</h6>
              <div className="w-100 d-flex flex-wrap justify-content-center">
                <p className="advisor-subtitle w-90">
                  We are proud to have leading subject matter experts guiding
                  us.
                </p>
              </div>
            </Col>
            <Col md={12}>
              <OwlCarousel
                className="owl-theme features-container"
                loop={false}
                nav={true}
                margin={10}
                {...settings}
              >
                {OurAdvisorsContent.map((x) => (
                  <div key={x.id + x.name} className="img-container">
                    <img src={x.imgSource} alt="user-img" />
                    <h6 className="name-txt mt-2">{x.name}</h6>
                    <p className="designation-txt">{x.designation}</p>
                  </div>
                ))}
              </OwlCarousel>
            </Col>
          </Row>
        </div>
      </div>
    </section>
  );
};
export default OurAdvisorSection;

const settings = {
  loop: false,
  margin: 20,
  stagePadding: 12,
  nav: false,
  dots: false,
  lazyLoad: true,
  lazyContent: true,
  responsive: {
    0: {
      items: 1,
    },
    500: {
      items: 2,
    },
    700: {
      items: 3,
    },
    1000: {
      items: 3,
    },
    2000: {
      items: 4,
    },
  },
};
