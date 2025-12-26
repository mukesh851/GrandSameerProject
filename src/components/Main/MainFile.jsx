import './MainFile.css';
import sameerEvents from "../../assets/mainFileVideo/sameerEvents.mp4";

const MainFile = () => {
  return (
    <main id="main-content">
      {/* 🔹 Background Video */}
      <div className="video-background">
        <video autoPlay loop muted playsInline className="background-video">
          <source src={sameerEvents} type="video/mp4" />
        </video>
      </div>

      {/* 🔹 Foreground Content */}
      <div className="hero-inner">
        <div className="inner-content">
          {/* <h1>We create <strong>Space</strong></h1> */}
          <h1>Grand Sameer <strong>Events Pvt. Ltd.</strong></h1>
          {/* <p className="intro">
            Losberger De Boer delivers top class temporary and permanent space
            solutions for events, commercial and public space.
          </p> */}
          <a href="#" className="inner-content-button">
            Contact LDB
          </a>
        </div>
      </div>
    </main>
  );
};

export default MainFile;
