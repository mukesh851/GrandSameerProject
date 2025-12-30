import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-header">
        <div className="globe">🌐</div>
        <h2>Grand Sameer Events Pvt. Ltd.</h2>
        <h4>Temporary Infrastructure & Event Execution</h4>
      </div>

      <div className="footer-grid">
        <div className="footer-col">
          <h3>◆ Our Solutions</h3>
          <p>Aluminium Hangars & Domes</p>
          <p>Political & Government Events</p>
          <p>Corporate & Institutional Events</p>
          <p>Exhibitions & Summits</p>
          <p>Concerts & Grand Weddings</p>
        </div>

        <div className="footer-col">
          <h3>◆ Products / Services</h3>
          <p>Temporary Event Infrastructure</p>
          <p>Large-Span Structure Rentals</p>
          <p>Climate-Controlled Event Spaces</p>
          <p>Rapid Deployment Projects</p>
        </div>

        <div className="footer-col">
          <h3>◆ Our Expertise</h3>
          <p>Why Grand Sameer</p>
          <p>About us</p>
          <p>Case Studies</p>
          <p>News & Awards</p>
        </div>

        <div className="footer-col">
          <h3>◆ Contact details</h3>
          <p><strong>Grand Sameer Events Pvt. Ltd.</strong></p>
          <p>📍 Ujjain / Indore, Madhya Pradesh, India</p>
          <p>📞 +91 XXXXXXXXXX</p>
          <p>📧 info@grandsameerevents.com</p>
        </div>
      </div>

      <div className="footer-social">
        <p>Engage with us on:</p>
        <div className="icons">
          <span>in</span>
          <span>▶</span>
          <span>f</span>
          <span>◎</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
