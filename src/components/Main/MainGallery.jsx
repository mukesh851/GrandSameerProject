
import "./MainGallery.css";

// Replace these with your actual image imports from assets
import img1 from "../../assets/images/gallery1.jpg";
import img2 from "../../assets/images/gallery2.jpg";
import img3 from "../../assets/images/gallery3.jpg";
import img4 from "../../assets/images/gallery4.jpg";

const MainGallery = () => {
  return ( 
    <div className="gallery-section">
      <div className="gallery-container">
        <div className="gallery-header">
          <p className="gallery-subtitle">Grand Sameer Events Pvt. Ltd.</p>
          <h2 className="gallery-title">Explore our innovative space solutions</h2>
        </div>

        <div className="gallery-grid">
          <div className="gallery-card">
            <div className="gallery-image">
              <img src={img1} alt="Event Space" loading="lazy" />
            </div>
            <div className="gallery-content">
              <h3>Event Space</h3>
              <p>Complete event structures designed for large-scale functions and exhibitions.</p>
              <a href="#" className="gallery-link">Learn More →</a>
            </div>
          </div>

          <div className="gallery-card">
            <div className="gallery-image">
              <img src={img2} alt="Commercial Space" loading="lazy" />
            </div>
            <div className="gallery-content">
              <h3>Commercial Space</h3>
              <p>Flexible and durable semi-permanent buildings for business and retail purposes.</p>
              <a href="#" className="gallery-link">Learn More →</a>
            </div>
          </div>

          <div className="gallery-card">
            <div className="gallery-image">
              <img src={img3} alt="Rapid Deployment" loading="lazy" />
            </div>
            <div className="gallery-content">
              <h3>Rapid Deployment</h3>
              <p>Efficient, deployable space solutions for emergencies and special operations.</p>
              <a href="#" className="gallery-link">Learn More →</a>
            </div>
          </div>

          <div className="gallery-card">
            <div className="gallery-image">
              <img src={img4} alt="Industrial Space" loading="lazy" />
            </div>
            <div className="gallery-content">
              <h3>Industrial Space</h3>
              <p>Adaptable modular structures ideal for warehouses, workshops, and logistics.</p>
              <a href="#" className="gallery-link">Learn More →</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainGallery;

