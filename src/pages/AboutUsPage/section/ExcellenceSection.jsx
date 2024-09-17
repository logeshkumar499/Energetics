import React, { useRef, useState } from "react";
import { Col, Row } from "reactstrap";
import OwlCarousel from "react-owl-carousel";
import { ExcellenceSectionContent } from "../../../contents";

const ExcellenceSection = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const totalSlides = ExcellenceSectionContent.length;
  const carouselRef = useRef(null);

  // Handle click on slider track
  const handleSliderClick = (event) => {
    const boundingRect = event.target.getBoundingClientRect();
    const clickPosition = event.clientX - boundingRect.left;
    const newIndex = Math.round(
      (clickPosition / boundingRect.width) * totalSlides
    );
    const adjustedIndex = Math.min(Math.max(newIndex, 0), totalSlides - 1);
    if (carouselRef.current) {
      carouselRef.current.to(adjustedIndex, 300, true);
    }
    setSlideIndex(adjustedIndex);
  };

  return (
    <section className="container-fluid pb-4">
      <div className="excellence-section">
        <div className="col-md-12 pt-3 pb-3 pr-2 pl-2">
          <Row className="row row-gap-1 ">
            <Col className="col-md-12 mb-3 mt-3">
              <div className="w-100 d-flex flex-wrap justify-content-center">
                <h6 className="excellence-title w-90 text-center">
                  10+ Years of Excellence and Counting
                </h6>
                <p className="excellence-subtitle w-90">
                  Since our inception in 2011, we have helped clients achieve
                  sustainable growth in their digital transformation while
                  enabling them to render experience-driven customer
                  experiences.
                </p>
              </div>
            </Col>
            <Col md={12}>
              <OwlCarousel
                className="owl-theme features-container"
                ref={carouselRef}
                nav={true}
                margin={10}
                {...settings}
              >
                {ExcellenceSectionContent.map((x) => (
                  <div
                    key={x.id + x.title}
                    className="cart-container item position-relative"
                  >
                    <div className="border" />
                    <p className="cart-year">{x.year}</p>
                    <h6 className="cart-title mt-2">{x.title}</h6>
                    <p className="cart-subtitle">{x.description}</p>
                  </div>
                ))}
              </OwlCarousel>
              <div className="w-100 position-relative pt-5 mb-4">
                <div
                  style={{
                    height: "4px",
                    backgroundColor: "#ddd",
                    position: "relative",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                  onClick={handleSliderClick} // Click handler for custom slider
                >
                  <div
                    style={{
                      width: "24px",
                      height: "24px",
                      borderRadius: "50%",
                      top: "-10px",
                      backgroundColor: "#911D3C",
                      position: "absolute",
                      left: `${(slideIndex / totalSlides) * 100}%`,
                      transform: "translateX(-50%)",
                      transition: "left 0.3s ease-in-out", // Smooth transition for handle
                    }}
                  />
                </div>
              </div>
            </Col>
            {/* Custom Slider */}
          </Row>
        </div>
      </div>
    </section>
  );
};
export default ExcellenceSection;

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
      items: 4,
    },
    2000: {
      items: 5,
    },
  },
};
