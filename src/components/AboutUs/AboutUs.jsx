
// import "./AboutUs.css";
// import event1 from "../../assets/eventAndVideo/event1.jpg";
// import event2 from "../../assets/eventAndVideo/event2.jpg";
// import event3 from "../../assets/eventAndVideo/event3.jpg";

// const AboutUs = () => {
//   return (
//     <section className="about-section">
//       {/* Banner Section */}
//       <div className="about-banner">
//         <div className="overlay">
//           <h1 className="about-title">About Us</h1>
//           <p className="about-subtitle">
//             Scale Meets Elegance — Precision, Scale, and Excellence in Every Structure.
//           </p>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="about-container">
//         <div className="about-content">
//           <h2 className="section-heading">
//             Grand Sameer Events Pvt. Ltd.
//           </h2>
//           <p className="section-text">
//             Grand Sameer Events Pvt. Ltd. is one of India’s leading providers of
//             large-scale event infrastructure, known for <strong>engineering precision</strong>,
//             unmatched <strong>scale</strong>, and flawless <strong>execution</strong>.
//           </p>
//           <p className="section-text">
//             With over <strong>1,00,000 sq.ft.</strong> of premium hangar and event infrastructure
//             valued at <strong>₹50+ Crores</strong>, we are ranked among the <strong>Top 3</strong> companies
//             in Central India and among the <strong>Top 15 nationally</strong> in mega hangar solutions.
//           </p>
//           <p className="section-text">
//             Our expertise spans <strong>corporate summits</strong>, <strong>government & political mega-events</strong>,
//             <strong> luxury weddings</strong>, <strong>cultural festivals</strong>, and <strong>industrial structures</strong>.
//             From hosting the <strong>Global Investor Summit</strong> to building structures for <strong>Prime Ministerial rallies</strong>,
//             we deliver world-class quality and speed in every project.
//           </p>
//           <p className="section-text">
//             At Grand Sameer Events, <strong>scale meets elegance</strong> — making us the trusted partner
//             for clients who demand nothing less than <strong>excellence</strong>.
//           </p>
//         </div>

//         {/* Image Grid */}
//         <div className="about-grid">
//           <div className="grid-item">

//             <div className="image-content1">
//               <h3>Massive Event Infrastructure</h3>
//               <p>State-of-the-art hangar systems for events of any scale.</p>
//             </div>
//             <img src={event1} alt="Event Infrastructure" />

//           </div>
//           <div className="grid-item">

//             <img src={event2} alt="Corporate Summits" />
//             <div className="image-content2">
//               <h3>Corporate & Government Summits</h3>
//               <p>From summits to rallies — we deliver speed, safety, and style.</p>
//             </div>

//           </div>
//           <div className="grid-item">

//             <div className="image-content3">
//               <h3>Engineering Excellence</h3>
//               <p>Precision design and execution trusted by national leaders.</p>
//             </div>
//             <img src={event3} alt="Excellence" />
//           </div>

//         </div>
//       </div>

//       {/* Vision & Values */}
//       <div className="about-vision">
//         <h2>Our Vision & Values</h2>
//         <p>
//           To redefine large-scale event infrastructure in India through innovation,
//           integrity, and excellence. We believe in combining engineering precision
//           with aesthetic brilliance to create world-class experiences.
//         </p>

//         <div className="values-list">
//           <div className="value-card">
//             <h4>Innovation</h4>
//             <p>Always pushing boundaries with modular and sustainable designs.</p>
//           </div>
//           <div className="value-card">
//             <h4>Commitment</h4>
//             <p>Delivering every project on time, every time.</p>
//           </div>
//           <div className="value-card">
//             <h4>Excellence</h4>
//             <p>Setting industry standards through quality and craftsmanship.</p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutUs;


// AboutUs_GrandSameerEvents.jsx 

import React from 'react'
import './Aboutus.css'

import event1 from "../../assets/eventAndVideo/event1.jpg";
import event2 from "../../assets/eventAndVideo/event2.jpg";
import event3 from "../../assets/eventAndVideo/event3.jpg";
// const HeroImage = '/assets/about-hero.jpg'
// import HeroImage from "../../assets/eventAndVideo/event1.jpg";

export default function AboutUs() {
  return (
    <main className="about-wrapper">

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


          {/* <div className="container"> */}
            <div className="hero-text">
              <h1 className="hero-title">Grand Sameer Events</h1>
              <p className="hero-subtitle">A leading provider of temporary & semi-permanent aluminium structures — hangars, canopies, and modular infrastructure — delivering international quality with Indian execution speed.</p>

              <div className="hero-buttons">
                <a href="#contact" className="btn-primary">Contact Us</a>
                <a href="#strengths" className="btn-outline">Our Strengths</a>
              </div>

              <div className="hero-info">
                <p><strong>Inventory:</strong> 4,00,000 sq ft premium aluminium structures</p>
                <p><strong>Experience:</strong> 20+ years delivering infrastructure for high-profile organisations</p>
              </div>
            </div>
          {/* </div> */}


          {/* Image Grid */}
          <div className="about-grid">
            <div className="grid-item">
              <div className="image-content1">
                <h3>🏛️ Government & Institutional Events</h3>
                <p>From Prime Ministerial rallies to state-level government programs, we deliver secure, protocol-compliant temporary infrastructure at scale.</p>
              </div>
              <img src={event1} alt="Event Infrastructure" />
            </div>

            
            <div className="grid-item">
              <img src={event2} alt="Corporate Summits" />
              <div className="image-content2">
                <h3>🗳️ Mega Political Gatherings</h3>
                <p>We specialize in mass-scale political rallies with large-span hangars, crowd-ready layouts, and rapid on-ground execution.</p>
              </div>
            </div>

            <div className="grid-item">
              <div className="image-content3">
                <h3>🏢 Corporate & Business Excellence</h3>
                <p>World-class infrastructure for corporate summits, investor meets, exhibitions, and high-profile business events.</p>
              </div>
              <img src={event3} alt="Excellence" />
            </div> 

            <div className="grid-item">
              <img src={event2} alt="Corporate Summits" />
              <div className="image-content2">
                <h3>🕉️ Cultural & Religious Gatherings</h3>
                <p>Infrastructure for large religious congregations, spiritual events, and gatherings led by Jain saints, spiritual leaders, and religious institutions.</p>
              </div>
            </div>
            
            <div className="grid-item">
              <div className="image-content1">
                <h3>🎶 Concerts & Entertainment Arenas</h3>
                <p>High-capacity structures for live concerts, music festivals, and entertainment events with safe crowd flow and strong execution.</p>
              </div>
              <img src={event1} alt="Event Infrastructure" />
            </div>

             <div className="grid-item">
              <img src={event2} alt="Corporate Summits" />
              <div className="image-content2">
                <h3>💍 Luxury Weddings & Private Celebrations</h3>
                <p>Designer hangars, grand mandaps, and premium setups for large weddings and exclusive private celebrations.</p>
              </div>
            </div>

            <div className="grid-item">
              <div className="image-content3">
                <h3>🎭 Sports & Entertainment Events</h3>
                <p>Temporary stadium-scale infrastructure for sports events, shows, and large public entertainment programs.</p>
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


      {/* HERO SECTION */}
      {/* <section className="hero-section">
        <div className="container grid-2">

          <div className="hero-text">
            <p className="tag">ABOUT US</p>
            <h1 className="hero-title">Grand Sameer Events</h1>
            <p className="hero-subtitle">A leading provider of temporary & semi-permanent aluminium structures — hangars, canopies, and modular infrastructure — delivering international quality with Indian execution speed.</p>

            <div className="hero-buttons">
              <a href="#contact" className="btn-primary">Contact Us</a>
              <a href="#strengths" className="btn-outline">Our Strengths</a>
            </div>

            <div className="hero-info">
              <p><strong>Inventory:</strong> 4,00,000 sq ft premium aluminium structures</p>
              <p><strong>Experience:</strong> 20+ years delivering infrastructure for high-profile organisations</p>
            </div>
          </div>

          <div className="hero-image-container">
            <img src={HeroImage} alt="Grand Sameer Events hangar" className="hero-image" />
          </div>

        </div>
      </section> */}

      {/* WHO WE ARE */}
      <section className="section-grey">
        <div className="container grid-2-1">

          <div>
            <h2 className="section-title">Who We Are</h2>
            <p className="section-text">Grand Sameer Events is a leading provider of temporary & semi-permanent aluminium structures including hangars, canopies, and modular infrastructure. With 4 lakh sq. ft. of aluminium inventory, we stand among India’s most capable companies in the large-span temporary structure industry.</p>

            <p className="section-text">For over two decades, we have delivered infrastructure for India’s most prestigious organisations, including:</p>
            <ul className="list">
              <li>Government of India & MP Government</li>
              <li>PM & CM-level events</li>
              <li>Tata Group</li>
              <li>Wonder Cement</li>
              <li>Global Investors Summit 2025</li>
            </ul>

            <p className="section-text">We combine international quality with Indian execution speed.</p>
          </div>

          <aside className="quick-facts">
            <h3>Quick Facts</h3>
            <div className="facts-grid">
              <div><strong>Inventory</strong><p>4,00,000 sq ft</p></div>
              <div><strong>Top Ranking</strong><p>Top 3 in MP, Top 15 in India</p></div>
              <div><strong>Events</strong><p>PM/CM-level & Govt.</p></div>
              <div><strong>Safety</strong><p>Flawless engineering record</p></div>
            </div>
          </aside>

        </div>
      </section>

      {/* VISION + MISSION */}
      <section className="section">
        <div className="container grid-2-1">

          <div>
            <h2 className="section-title">Our Vision</h2>
            <p className="section-text">To become India’s most trusted infrastructure partner for hangars, industrial structures, and large-scale event architecture.</p>

            <h2 className="section-title mt">Our Mission</h2>
            <ul className="list">
              <li>Deliver world-class aluminium structures at global benchmarks</li>
              <li>Provide rapid deployment for high-stakes environments</li>
              <li>Build reliable temporary infrastructure that lasts</li>
              <li>Expand India’s modular space capability to global standards</li>
            </ul>
          </div>

          <aside className="strength-box" id="strengths">
            <h3>Our Strengths</h3>
            <ul className="list">
              <li>4,00,000 sq ft premium aluminium structures</li>
              <li>Top 3 in MP, Top 15 in India</li>
              <li>High-profile government event portfolio</li>
              <li>Flawless safety & engineering record</li>
              <li>In-house logistics & manpower strength</li>
            </ul>
          </aside>

        </div>
      </section>

      {/* TRUSTED BY */}
      <section className="section-grey">
        <div className="container">
          <h3 className="section-title center">Trusted By</h3>
          <p className="section-text center">Organisations we've delivered for over the years</p>

          <div className="logo-grid">
            {['Govt', 'PM/CM', 'Tata', 'Wonder', 'Global Summit', 'Others'].map((c, i) => (
              <div key={i} className="logo-box">{c}</div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="cta">
        <div className="container cta-box">
          <div>
            <h4 className="cta-title">Ready to discuss your next project?</h4>
            <p className="cta-text">We provide rapid deployment, project management and turnkey delivery for events, hangars, and industrial structures.</p>
          </div>
          <a href="/contact" className="cta-button">Get in touch</a>
        </div>
      </section>

      {/* FOOTER */}
      {/* <footer className="footer">
        <div className="container footer-row">
          <p>© {new Date().getFullYear()} Grand Sameer Events. All rights reserved.</p>
          <nav className="footer-links">
            <a href="/privacy">Privacy</a>
            <a href="/terms">Terms</a>
          </nav>
        </div>
      </footer> */}

    </main>
  )
}
