import React, { useState } from "react";
import "./ContactForm.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! Your message has been submitted.");
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        {/* Left: Contact Info + Map */}
        <div className="contact-info">
          <h2>Contact Us</h2>
          <p className="contact-desc">
            Have questions or need a custom event solution? Fill out the form or reach us directly.
          </p>

          <div className="contact-details">
            <h3>📍 Office Address</h3>
            <p>Ujjain HQ, Madhya Pradesh, India</p>

            <h3>📞 Phone</h3>
            <p><a href="tel:+919876543210">+91 98765 43210</a></p>

            <h3>📧 Email</h3>
            <p><a href="mailto:info@company.com">info@company.com</a></p>
          </div>

          {/* Google Map */}
          <div className="map-container">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14693.34653183479!2d75.7754056!3d23.1765238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3963742e4e77ab0b%3A0x5dcf5f0e8283d5e!2sUjjain%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1701500000000!5m2!1sen!2sin"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* Right: Inquiry Form */}
        <div className="contact-form">
          <h2>Inquiry Form</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
              />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email address"
                required
              />
            </div>

            <div className="form-group">
              <label>Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
              />
            </div>

            <div className="form-group">
              <label>Event Type</label>
              <select
                name="eventType"
                value={formData.eventType}
                onChange={handleChange}
                required
              >
                <option value="">Select event type</option>
                <option>Corporate Event</option>
                <option>Wedding</option>
                <option>Exhibition</option>
                <option>Conference</option>
                <option>Other</option>
              </select>
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message..."
                rows="5"
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;



