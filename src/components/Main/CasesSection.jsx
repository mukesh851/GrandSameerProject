// src/components/CasesSection.jsx
import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Pagination, Autoplay, A11y } from "swiper/modules";
import "swiper/css";

import "./CasesSection.css";

import case1 from "../../assets/cases/cases1.jpg";
import case2 from "../../assets/cases/cases2.jpg";
import case3 from "../../assets/cases/cases3.jpg";
import case4 from "../../assets/cases/cases4.jpg";
import case5 from "../../assets/cases/cases5.jpg";
import case6 from "../../assets/cases/cases6.jpg";
import case7 from "../../assets/cases/cases7.jpg";

const CasesSection = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const cases = [
    { img: case1, title: "COP26 Project", link: "/global/cases/event-space/cop26-project/" },
    { img: case2, title: "Formula E in Saudi Arabia", link: "/global/cases/event-space/formula-e-in-saudi-arabia/" },
    { img: case3, title: "Extra warehouse space delivered in 8 weeks", link: "/global/cases/commercial-space/extra-warehouse-space-delivered-in-8-weeks/" },
    { img: case4, title: "International Astronautical Congress in Baku", link: "/global/cases/event-space/international-astronautical-congress-in-baku/" },
    { img: case5, title: "Temporary School Lytchett Minster Upper School", link: "/global/cases/commercial-space/temporary-school-lytchett-minster-upper-school-after-fire/" },
    { img: case6, title: "Land Rover Offroad Experience Center", link: "/global/cases/commercial-space/land-rover-offroad-experience-center/" },
    { img: case7, title: "German television - FIFA World Cup 2022 TV Studio", link: "/global/cases/event-space/german-television-fifa-world-cup-2022-tv-studio/" },
  ];

  return (
    <div className="cases-block-dark">
      <div className="cases-container">
        <div className="cases-header">
          <p className="cases-top-title">Cases</p>
          <h2 className="cases-heading">We love to show you our work</h2>
        </div>
      </div>

      <div className="cases-wrapper">
        <Swiper
          modules={[Navigation, Pagination, Autoplay, A11y]}
          spaceBetween={24}
          slidesPerView={3}
          loop={false}
          // lazy={true}
          pagination={{ clickable: true }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          autoplay={{ delay: 5000, disableOnInteraction: true }}
          breakpoints={{
            0: { slidesPerView: 1 },
            600: { slidesPerView: 2 },
            992: { slidesPerView: 3 },
          }}
          onSwiper={(swiper) => {
            // Fix for navigation not attaching at load time
            setTimeout(() => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            });
          }}
          a11y={true}
        >
          {cases.map((item, i) => (
            <SwiperSlide key={i}>
              <a href={item.link} className="cases-slide-item">
                <figure className="cases-figure">
                 <img src={item.img} className="cases-image" alt={item.title} />
                  <div className="swiper-lazy-preloader"></div>
                  <figcaption className="cases-caption">
                    <h3>{item.title}</h3>
                  </figcaption>
                </figure>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="cases-navigation">
          <button ref={prevRef} className="cases-nav-btn prev" aria-label="Previous">
            <span className="arrow left"></span>
          </button>
          <button ref={nextRef} className="cases-nav-btn next" aria-label="Next">
            <span className="arrow right"></span>
          </button>
        </div>

        <div className="cases-bottom-nav">
          <div className="cases-bottom-actions">
            <button className="cases-toggle">Cases by Topic</button>
            <Link to="/cases" className="cases-view-btn">
              View all cases
            </Link>
          </div>

          <div className="cases-bottom-body">
            <p>Cases by Topic</p>
            <ul>
              <li><a href="/global/cases/event-space/">Event Space</a></li>
              <li><a href="/global/cases/commercial-space/">Commercial Space</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CasesSection;
