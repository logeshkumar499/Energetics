import React from "react";
import OwlCarousel from "react-owl-carousel";
import { FeaturesContent } from "../../../contents";

const FeaturesSection = () => {
  return (
    <>
      <section className="container-fluid mt-2 pb-3">
        <div className="features-section">
          <div className="col-md-12 pt-3 pb-3 pr-2 pl-2">
            <div className="row">
              <div className="col-md-12">
                <OwlCarousel
                  className="owl-theme features-container"
                  loop={false}
                  nav={true}
                  margin={10}
                  {...settings}
                >
                  {FeaturesContent.map((x) => (
                    <div key={x.id + x.title} className="features-card item ">
                      <div className="features-img-container">
                        <img src={x.imgSource} alt="features-img" />
                      </div>
                      <div className="feature-txt mt-3">
                        <b>{x.title}</b>&nbsp;{x.describtion}
                      </div>
                    </div>
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

const settings = {
  loop: false,
  margin: 20,
  stagePadding: 12,
  nav: true,
  dots: false,
  lazyLoad: true,
  lazyContent: true,
  navText: [
    `<i class="fas fa-angle-left"></i>`,
    `<i class='fas fa-angle-right'></i>`,
  ],
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
    2000: {
      items: 4,
    },
  },
};

export default FeaturesSection;
