import React from "react";
import OwlCarousel from "react-owl-carousel";
// import LinkedInImg from "../../../assets/icons/linkedin-white.png";
import { AboutSectionContent } from "../../../contents";
import AboutSectionItems from "../components/AboutSectionItems";

const AboutSection = () => {
  return (
    <>
      <section className="container-fluid mt-2 pb-3">
        <div className="about-section">
          <div className="col-md-12 pt-3 pb-3 pr-2 pl-2">
            <div className="row row-gap-1 ">
              <div className="col-md-12 pb-3 pt-3">
                <h6 className="about-title">What they say about us</h6>
              </div>
              <div className="col-md-12 mt-2">
                <OwlCarousel
                  className="owl-theme about-card-container"
                  loop={false}
                  nav={true}
                  margin={10}
                  {...settings}
                >
                  {AboutSectionContent.map((x, i) => (
                    <AboutSectionItems item={x} index={i} key={x.id + x.name} />
                  ))}
                </OwlCarousel>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
var settings = {
  mouseDrag: false,
  items: 1,
  dots: false,
  lazyLoad: true,
  autoplay: false,
  navText: [
    `<i class="fas fa-angle-left"></i>`,
    `<i class='fas fa-angle-right'></i>`,
  ],
};
export default AboutSection;
