import React from "react";
import "./Solutions.css";

import img1 from "../../assets/solutionsIm/Corporate.png";
import img2 from "../../assets/solutionsIm/Government.png";
import img3 from "../../assets/solutionsIm/Mega.png";
import img4 from "../../assets/solutionsIm/Cultural.png";
import img5 from "../../assets/solutionsIm/Luxury.png";
import img6 from "../../assets/solutionsIm/Sports.png";
import img7 from "../../assets/solutionsIm/Industrial.png";

const solutionsData = [
  {
    title: "Corporate & Business Excellence",
    desc: "We design world-class environments for businesses to showcase, connect, and grow. From Global Investor Summits to brand launches and exhibitions, our corporate infrastructure solutions set the stage for success.",
    img: img1,
  },
  {
    title: "Government & Institutional Events",
    desc: "From Prime Ministerial rallies to national celebrations, we provide secure, large-scale structures trusted by governments, PSUs, and diplomatic institutions.",
    img: img2,
  },
  {
    title: "Mega Political Gatherings",
    desc: "We specialize in handling mass-scale political rallies, party conferences, and election campaigns with flawless execution and speed.",
    img: img3,
  },
  {
    title: "Cultural & Religious Extravaganzas",
    desc: "From Maha Kumbh Melas to community festivals, our infrastructure empowers millions of people to gather in safe, large, and elegant environments.",
    img: img4,
  },
  {
    title: "Luxury Weddings & Private Celebrations",
    desc: "Designer hangars, grand mandaps, and royal pavilions crafted for those who demand unforgettable, elegant, and luxurious celebrations.",
    img: img5,
  },
  {
    title: "Sports & Entertainment Arenas",
    desc: "We build stadium-scale tents, concert pavilions, and entertainment lounges, redefining large-scale sports and cultural experiences.",
    img: img6,
  },
  {
    title: "Industrial & Commercial Solutions",
    desc: "Beyond events, we provide temporary warehouses, factory setups, and emergency response shelters — versatile, durable, and cost-efficient.",
    img: img7,
  },
];

const Solutions = () => {
  return (
    <section className="solutions-section">
      <div className="solutions-container">
        <div className="solutions-header">
          <h2>Solutions / What We Do</h2>
          <p>Each category has its own elegant subpage with case studies & visuals.</p>
        </div>

        {solutionsData.map((item, index) => (
          <div
            className={`solution-card ${index % 2 === 1 ? "reverse-layout" : ""}`}
            key={index}
          >
            <div className="solution-image">
              <img src={item.img} alt={item.title} />
            </div>
            <div className="solution-content">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Solutions;
