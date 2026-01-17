import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import "./Solutions.css";

import img1 from "../../assets/aboutUs/Jabalpur14.jpeg";
import img2 from "../../assets/aboutUs/Bhopal9.jpeg";
import img3 from "../../assets/aboutUs/BhopalA21.jpeg";
import img4 from "../../assets/aboutUs/Sagar1.jpeg"
import img5 from "../../assets/aboutUs/BhopalA14.jpeg";
import img6 from "../../assets/aboutUs/BhopalA4.jpeg";
import img7 from "../../assets/aboutUs/BhopalA25.jpeg";


const data = [
  {
    id: "sol-1",
    title: "🏛️ Government & Institutional Events",
    images: [img1, img2, img3, img4, img5],
    desc: "From Prime Ministerial rallies to state-level government programs, we deliver secure, protocol-compliant temporary infrastructure at scale."
  },
  {
    id: "sol-2",
    title: "🗳️ Mega Political Gatherings",
    images: [img2, img3, img4, img5, img6],
    desc: "We specialize in mass-scale political rallies with large-span hangars, crowd-ready layouts, and rapid on-ground execution."
  },
  {
    id: "sol-3",
    title: "🏢 Corporate & Business Excellence",
    images: [img3, img4, img5, img6, img7],
    desc: "World-class infrastructure for corporate summits, investor meets, exhibitions, and high-profile business events."
  },
  {
    id: "sol-4",
    title: "🕉️ Cultural & Religious Gatherings",
    images: [img4, img5, img6, img7, img1],
    desc: "Infrastructure for large religious congregations, spiritual events, and gatherings led by Jain saints, spiritual leaders, and religious institutions."
  },
  {
    id: "sol-5",
    title: "🎶 Concerts & Entertainment Arenas",
    images: [img5, img6, img7, img1, img2],
    desc: "High-capacity structures for live concerts, music festivals, and entertainment events with safe crowd flow and strong execution."
  },
  {
    id: "sol-6",
    title: "💍 Luxury Weddings & Private Celebrations",
    images: [img6, img7, img1, img2, img3],
    desc: "Designer hangars, grand mandaps, and premium setups for large weddings and exclusive private celebrations."
  },
  {
    id: "sol-7",
    title: "🎭 Sports & Entertainment Events",
    images: [img7, img1, img2, img3, img4],
    desc: "Temporary stadium-scale infrastructure for sports events, shows, and large public entertainment programs."
  }
];


const Solutions = () => {
  return (
    <section className="solutions-section">
      <div className="solutions-container">
        <div className="solutions-header">
          <h2>Solutions / What We Do</h2>
          <p>Each category has its own elegant subpage...</p>
        </div>

        <div className="solution-Imgcontent">
          {data.map((item, index) => (
            <div
              id={item.id}
              key={item.id}
              className={`solution-card ${index % 2 === 1 ? "reverse-layout" : ""}`}
            >
              <div className="solution-image">
                <Swiper
                  modules={[Autoplay, Navigation]}
                  slidesPerView={1}
                  loop={true}
                  navigation={true}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false
                  }}
                >
                  {item.images.map((img, i) => (
                    <SwiperSlide key={i}>
                      <img src={img} alt={item.title} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>


              <div className="solution-content">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))} 
        </div>
      </div>
    </section>
  );
};

export default Solutions;
