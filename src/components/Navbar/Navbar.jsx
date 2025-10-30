
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo-container">

          <a href="/global" class="logo">
            <div className="logo-text">
              <div className="logo-main">
                <div className="logo-shape">

                </div>
              </div>
              
                <div className="nav-logo-heading">
                  <h3>Grand Sameer Events Pvt. Ltd.</h3>
                </div>
              
            </div>
          </a>
        </div>

        {/* <svg aria-label="Losberger de Boer" focusable="false" width="100%" height="100%" viewBox="0 0 132 63" xmlns="http://www.w3.org/2000/svg">
          
            <g class="logo__shape">
              <path class="logo__shape__top" d="M47.1103448 29.8706897L47.1103448 0.227586207 17.4672414 0.227586207 24.9775862 7.68103448 39.6568966 7.68103448 39.6568966 22.3603448z" transform="translate(42.103)"></path>
              <path class="logo__shape__bottom" d="M47.1103448 34.7068966L39.6568966 27.1965517 39.6568966 39.4862069 7.85172414 39.4862069 7.85172414 7.68103448 20.1413793 7.68103448 12.6310345 0.227586207 0.34137931 0.227586207 0.34137931 46.9965517 47.1103448 46.9965517z" transform="translate(42.103)"></path>
            </g>
          </svg> */}

        {/* </a> */}

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


