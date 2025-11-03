import { BsGlobe } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo-container">

          <a href="/global" className="logo-link">
              <div className="logo-main">
                <div className="logo-shape">
                  <BsGlobe className="global-logo"/>
                </div>
                <div className="nav-logo-heading">
                  <h3>Grand Sameer Events Pvt. Ltd.</h3>
                </div>
              </div> 
          </a>
        </div>


        <ul className="nav-menu static">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/solutions">Solutions</Link></li>
          <li><Link to="/industries">Industries We Serve</Link></li>
          <li><Link to="/case-studies">Case Studies</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/gallery">Gallery</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>






        <button className="btn-menu-toggle">
          <svg className="icon-menu" focusable="false" data-alignment="left">
            <use xlinkHref="#icon-menu"></use>
          </svg>
          More
        </button>

      </div>
    </nav>
  );
};

export default Navbar;


