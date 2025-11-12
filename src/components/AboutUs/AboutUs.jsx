// import React from "react";
import "./AboutUs.css";
import event1 from "../../assets/eventAndVideo/event1.jpg";
import event2 from "../../assets/eventAndVideo/event2.jpg";
import event3 from "../../assets/eventAndVideo/event3.jpg";

const AboutUs = () => {
  return (
    <section className="about-section">
      {/* Banner Section */}
      <div className="about-banner">
        <div className="overlay">
          <h1 className="about-title">About Us</h1>
          <p className="about-subtitle">
            Scale Meets Elegance — Precision, Scale, and Excellence in Every Structure.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="about-container">
        <div className="about-content">
          <h2 className="section-heading">
            Grand Sameer Events Pvt. Ltd.
          </h2>
          <p className="section-text">
            Grand Sameer Events Pvt. Ltd. is one of India’s leading providers of
            large-scale event infrastructure, known for <strong>engineering precision</strong>,
            unmatched <strong>scale</strong>, and flawless <strong>execution</strong>.
          </p>
          <p className="section-text">
            With over <strong>1,00,000 sq.ft.</strong> of premium hangar and event infrastructure
            valued at <strong>₹50+ Crores</strong>, we are ranked among the <strong>Top 3</strong> companies
            in Central India and among the <strong>Top 15 nationally</strong> in mega hangar solutions.
          </p>
          <p className="section-text">
            Our expertise spans <strong>corporate summits</strong>, <strong>government & political mega-events</strong>,
            <strong> luxury weddings</strong>, <strong>cultural festivals</strong>, and <strong>industrial structures</strong>.
            From hosting the <strong>Global Investor Summit</strong> to building structures for <strong>Prime Ministerial rallies</strong>,
            we deliver world-class quality and speed in every project.
          </p>
          <p className="section-text">
            At Grand Sameer Events, <strong>scale meets elegance</strong> — making us the trusted partner
            for clients who demand nothing less than <strong>excellence</strong>.
          </p>
        </div>

        {/* Image Grid */}
        <div className="about-grid">
          <div className="grid-item">

            <div className="image-content1">
              <h3>Massive Event Infrastructure</h3>
              <p>State-of-the-art hangar systems for events of any scale.</p>
            </div>
            <img src={event1} alt="Event Infrastructure" />

          </div>
          <div className="grid-item">

            <img src={event2} alt="Corporate Summits" />
            <div className="image-content2">
              <h3>Corporate & Government Summits</h3>
              <p>From summits to rallies — we deliver speed, safety, and style.</p>
            </div>

          </div>
          <div className="grid-item">

            <div className="image-content3">
              <h3>Engineering Excellence</h3>
              <p>Precision design and execution trusted by national leaders.</p>
            </div>
            <img src={event3} alt="Excellence" />
          </div>

        </div>
      </div>

      {/* Vision & Values */}
      <div className="about-vision">
        <h2>Our Vision & Values</h2>
        <p>
          To redefine large-scale event infrastructure in India through innovation,
          integrity, and excellence. We believe in combining engineering precision
          with aesthetic brilliance to create world-class experiences.
        </p>

        <div className="values-list">
          <div className="value-card">
            <h4>Innovation</h4>
            <p>Always pushing boundaries with modular and sustainable designs.</p>
          </div>
          <div className="value-card">
            <h4>Commitment</h4>
            <p>Delivering every project on time, every time.</p>
          </div>
          <div className="value-card">
            <h4>Excellence</h4>
            <p>Setting industry standards through quality and craftsmanship.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
