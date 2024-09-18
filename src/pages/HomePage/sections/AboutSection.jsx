import React from "react";
import OwlCarousel from "react-owl-carousel";
// import KarthicImg from "../../../assets/images/karthik.png";
// import witmerImg from "../../../assets/images/witmer-icon.png";
import LinkedInImg from "../../../assets/icons/linkedin-white.png";
import { AboutSectionContent } from "../../../contents";

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
                  {AboutSectionContent.map((x) => (
                    <div key={x.id + x.name} className="item row row-gap-1">
                      <div className="col-md-4 col-sm-12">
                        <img
                          className="uesr-img"
                          src={x.imgSource}
                          alt="about-img"
                        />

                        <a
                          href={x.linkedIn}
                          target="_blank"
                          className="d-flex justify-content-center align-items-center mt-2"
                        >
                          <span className="item-section-sub-title">
                            LinkedIn{" "}
                          </span>
                          <img
                            src={LinkedInImg}
                            className="social-img ml-2"
                            alt="SocialImg"
                          />
                        </a>
                      </div>
                      <div className="col-md-8 col-sm-12">
                        <h6 className="item-section-title">{x.description}</h6>
                        <p className="item-section-sub-title mb-1">
                          {x.name} <span>{x.designation}</span>
                        </p>
                        <p className="d-flex">
                          <img
                            src={x.logo}
                            alt="witmerImg"
                            className="item-logo-img"
                          />
                          {/* <a href={x.linkedIn} target="_blank" className="ml-3">
                            <img
                              src={LinkedInImg}
                              className="social-img"
                              alt="SocialImg"
                            />
                          </a> */}
                        </p>
                      </div>
                    </div>
                  ))}
                  {/* <div className="item row row-gap-1">
                    <div className="col-md-4 col-sm-12">
                      <img
                        className="uesr-img"
                        src={KarthicImg}
                        alt="about-img"
                      />
                    </div>
                    <div className="col-md-8 col-sm-12">
                      <h6 className="item-section-title">
                        Lorem ipsum dolor sit amet consectetur. Sit id facilisis
                        quis dui neque porta. Nibh quis aliquet risus sit nec
                        eget dui et. Nullam venenatis tempus tristique orci.
                        Tempor hac integer porta etiam pellentesque
                      </h6>
                      <p className="item-section-sub-title mb-1">
                        Karthik Balakrishnan, <span>Founder & CEO</span>
                      </p>
                      <p className="item-section-sub-title">
                        <img src={witmerImg} alt="witmerImg" />
                      </p>
                    </div>
                  </div> */}
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
