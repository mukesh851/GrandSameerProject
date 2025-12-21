import React, { useState } from "react";
import "./CaseStudies.css";

import wonderImg from "../../assets/eventAndVideo/event1.jpg";
import summitImg from "../../assets/eventAndVideo/event2.jpg";
import rallyImg from "../../assets/eventAndVideo/event3.jpg";


const allProjects = [
  {
    id: 1,
    title: "Wonder Cement — On-Site Semi-Permanent Infrastructure",
    year: "2024",
    client: "Wonder Cement",
    category: "Corporate",
    description:
      "Customized hangars delivered for continuous industrial operations, ensuring efficiency, ventilation, and maximum usable space. ",
    image: wonderImg,
  },
  {
    id: 2,
    title: "Tata Motors — Rapid Industrial Space Deployment",
    year: "2023",
    client: "Tata Motors",
    category: "TataMotors",
    description:
      "A fully operational temporary facility constructed under extreme timelines for Tata Motors. Built to withstand heavy equipment, high footfall, and 24×7 industrial usage. ",
    image: summitImg,
  },
  {
    id: 3,
    title: "Government of Madhya Pradesh — Chief Minister & Prime Minister Events",
    year: "2022",
    client: "National Party",
    category: "Political",
    description:
      "High-security temporary structures built for VIP movement, press briefings, audience seating, and large-scale public events. Delivered with zero-error execution and top-tier safety compliance.",
    image: rallyImg,
  },
];

const CaseStudies = () => {
  const [filter, setFilter] = useState("All");

  const filters = ["All", "Corporate", "TataMotors", "Political"];

  const filteredProjects =
    filter === "All"
      ? allProjects
      : allProjects.filter((p) => p.category === filter);

  return (
    <section className="case-studies-section">
      <div className="container">
        <div className="header">
          <div className="case-study-top">
            <h1 className="top-title">Case Studies / Track Record</h1>
            <p>Proven Performance Across Industries</p>
          </div>

          <div className="all-buttons">
            <div className="filters">
              {filters.map((f) => (
                <button
                  key={f}
                  className={`filter-btn ${filter === f ? "active" : ""}`}
                  onClick={() => setFilter(f)}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="projects-grid">
          {filteredProjects.map((proj) => (
            <div key={proj.id} className="project-card">
              <div className="img-wrap">
                <img src={proj.image} alt={proj.title} />
              </div>
              <div className="content">
                <h3>{proj.title}</h3>
                <p>{proj.description}</p>
                <span className="meta">
                  {proj.year} • {proj.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="growth-snapshot">
          <h3>Growth Snapshot</h3>
          <ul>
            <li>📈 Consistent YoY growth</li>
            <li>🔁 Repeat partnerships with top agencies & corporates</li>
            <li>🏗️ Expanding project portfolio across India</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
