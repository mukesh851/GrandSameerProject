import React, { useState } from "react";
import "./CaseStudies.css";

// ✅ Import local images from src/assets folder
// import wonderImg from "../assets/wonder-cement.jpg";
// import summitImg from "../assets/investor-summit.jpg";
// import rallyImg from "../assets/political-rally.jpg";
import wonderImg from "../../assets/eventAndVideo/event1.jpg";
import summitImg from "../../assets/eventAndVideo/event2.jpg";
import rallyImg from "../../assets/eventAndVideo/event3.jpg";

// import event1 from "../../assets/eventAndVideo/event1.jpg";
// import event2 from "../../assets/eventAndVideo/event2.jpg";
// import event3 from "../../assets/eventAndVideo/event3.jpg";

const allProjects = [
  {
    id: 1,
    title: "Wonder Cement – Corporate Infrastructure Solutions",
    year: "2024",
    client: "Wonder Cement",
    category: "Corporate",
    description:
      "Delivered complete modular infrastructure for corporate exhibitions and events.",
    image: wonderImg,
  },
  {
    id: 2,
    title: "Global Investor Summit – Large Scale Government Showcase",
    year: "2023",
    client: "Madhya Pradesh Government",
    category: "Government",
    description:
      "Created massive structures and venue solutions for the prestigious Global Investor Summit.",
    image: summitImg,
  },
  {
    id: 3,
    title: "High-profile Political Rallies – Mass Gathering Structures",
    year: "2022",
    client: "National Party",
    category: "Political",
    description:
      "Designed and deployed temporary mega structures for high-footfall political gatherings.",
    image: rallyImg,
  },
];

const CaseStudies = () => {
  const [filter, setFilter] = useState("All");

  const filters = ["All", "Corporate", "Government", "Political"];

  const filteredProjects =
    filter === "All"
      ? allProjects
      : allProjects.filter((p) => p.category === filter);

  return (
    <section className="case-studies-section">
      <div className="container">
        <div className="header">
          <div className="left">
            <p className="top-title">Case Studies / Track Record</p>
            <h2>Proven Performance Across Industries</h2>
          </div>

          <div className="right">
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
