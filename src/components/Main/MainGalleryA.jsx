
import React from "react";
import "./MainGalleryA.css";

import eventImg from "../../assets/images/event.jpg";
import commercialImg from "../../assets/images/commercial.jpg";
import rapidImg from "../../assets/images/rapid.jpg";

const MainGalleryA = () => {
  return (

    <div className="main-section-container">
      <div className="block">
        <div className="container">
          <div className="section-header">
            <p className="top-title">Grand Sameer Events Pvt. Ltd. —</p>
            <h2 className="section-title">
              Temporary and semi-permanent space solutions
            </h2>
          </div>

          <div className="columns">
            <div className="columns__item">
              <div className="columns__image">
                <img src={eventImg} alt="Event Space" loading="lazy" />
              </div>
              <div className="columns__text">
                <h3 className="columns__title">Event Space</h3>
                <p>
                  We are the inspirational partner that offers the complete
                  package for the perfect event.
                </p>
                <a
                  href="/global/solutions/event-space-rental/"
                  className="columns__link"
                >
                  Our Event rental solutions →
                </a>
              </div>
            </div>

            <div className="columns__item">
              <div className="columns__image">
                <img src={commercialImg} alt="Commercial & Public Space" loading="lazy" />
              </div>
              <div className="columns__text">
                <h3 className="columns__title">Commercial & Public Space</h3>
                <p>
                  As a contractor, we help businesses meet their short term and
                  long term space requirements.
                </p>
                <a
                  href="/global/solutions/commercial-space/"
                  className="columns__link"
                >
                  Our Commercial solutions →
                </a>
              </div>
            </div>

            <div className="columns__item">
              <div className="columns__image">
                <img src={rapidImg} alt="Rapid Deployment Space" loading="lazy" />
              </div>
              <div className="columns__text">
                <h3 className="columns__title">Rapid Deployment Space</h3>
                <p>
                  We are a global supplier of rapidly deployable shelters,
                  emergency facilities and military space solutions.
                </p>
                <a
                  href="/global/solutions/rapid-deployment-space/"
                  className="columns__link"
                >
                  Our Rapid Deployment solutions →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* SectionDivider.css  */}
      <div className="block-border">
        <div className="main-border-container">
          <span className="divider--branded"></span>
        </div>
      </div>
    </div>
  );
};

export default MainGalleryA;

