
// import React, { useState } from "react";
// import { BsGlobe } from "react-icons/bs";
// import { FiSearch } from "react-icons/fi";
// import { Link } from "react-router-dom";
// import "./Navbar.css";
// import { IoReorderThreeOutline } from "react-icons/io5";
// // import installation1 from "../../assets/eventAndVideo/installation1.mp4"

// const Navbar = () => {
//   const [homeHover, setHomeHover] = useState(false);
//   const [solutionsHover, setSolutionsHover] = useState(false);

//   return (
//     <header className="navbar">
//       <div className="navbar-container">

//         {/* ===== LEFT SIDE LOGO (same as your original) ===== */}
//         <div className="logo-container">
//           <Link to="/global" className="logo-link">
//             <div className="logo-main">
//               <div className="logo-shape">
//                 <BsGlobe className="global-logo" />
//               </div>
//               <div className="nav-logo-heading">
//                 <h3>Grand Sameer Events Pvt. Ltd.</h3>
//               </div>
//             </div>
//           </Link>
//         </div>

//         {/* ===== NAVIGATION MENU ===== */}
//         <nav className="nav-links">
//           <ul>
//             <li
//               onMouseEnter={() => setHomeHover(true)}
//               onMouseLeave={() => setHomeHover(false)}
//             >
//               <Link to="/">Home</Link>
//               {homeHover && (
//                 <div className="dropdown home-dropdown">
//                   <div className="hero-banner">
//                     <h2>Engineering Grandeur, Delivering Excellence.</h2>
//                     {/* <video
//                       className="hero-video"
//                       autoPlay
//                       loop
//                       muted
//                       // src= "installation1"
//                       src="https://cdn.pixabay.com/video/2023/03/16/155763-808757158_tiny.mp4"
//                     ></video> */}
//                     <ul className="hero-highlights">
//                       <li>10+ Years of Excellence</li>
//                       <li>₹50+ Crores Infrastructure</li>
//                       <li>1,00,000+ sq.ft. Premium Event Structures</li>
//                       <li>Top 3 in Central India | Top 15 in India</li>
//                       <li>500+ Mega Events Delivered</li>
//                     </ul>
//                   </div>
//                 </div>
//               )}
//             </li>

//             <li
//               onMouseEnter={() => setSolutionsHover(true)}
//               onMouseLeave={() => setSolutionsHover(false)}
//             >
//               <Link to="/solutions">Solutions</Link>
//               {solutionsHover && (
//                 <div className="dropdown solution-dropdown">
//                   <ul>
//                     <li>Corporate & Business Excellence</li>
//                     <li>Government & Institutional Events</li>
//                     <li>Mega Political Gatherings</li>
//                     <li>Cultural & Religious Extravaganzas</li>
//                     <li>Luxury Weddings & Private Celebrations</li>
//                     <li>Sports & Entertainment Arenas</li>
//                     <li>Industrial & Commercial Solutions</li>
//                   </ul>
//                 </div>
//               )}
//             </li>

//             <li><Link to="/industries">Industries We Serve</Link></li>
//             <li><Link to="/case-studies">Case Studies</Link></li>
//             <li><Link to="/about">About Us</Link></li>
//             <li><Link to="/gallery">Gallery</Link></li>
//             <li><Link to="/contact">Contact Us</Link></li>
//           </ul>
//         </nav>

//         {/* ===== RIGHT SIDE SEARCH + BUTTON ===== */}
//         <div className="nav-right">
//           <div className="searc-div">
//             <button className="search-btn">
//               <FiSearch className="search-icon" />
//             </button>
//           </div>
//           <div className="threeIcon-more">
//             <div className="nav-icon">
//               <IoReorderThreeOutline className="three-line-icon" />
//             </div>
//             <button className="more-btn">More</button>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Navbar;  


import React, { useState } from "react";
import { BsGlobe } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { IoReorderThreeOutline } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  // For active link color
  const getActiveClass = (path) =>
    location.pathname === path ? "active-link" : "";

  // Hover handler with delay
  let dropdownTimer;
  const handleMouseEnter = (name) => {
    clearTimeout(dropdownTimer);
    setActiveDropdown(name);
  };

  const handleMouseLeave = () => {
    dropdownTimer = setTimeout(() => {
      setActiveDropdown(null);
    }, 250);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* ===== LEFT SIDE LOGO ===== */}
        <div className="logo-container">
          <Link to="/global" className="logo-link">
            <div className="logo-main">
              <div className="logo-shape">
                <BsGlobe className="global-logo" />
              </div>
              <div className="nav-logo-heading">
                <h3>Grand Sameer Events Pvt. Ltd.</h3>
              </div>
            </div>
          </Link>
        </div>

        {/* ===== NAVIGATION MENU ===== */}
        <nav className="nav-links">
          <ul>
            {/* HOME DROPDOWN */}
            <li
              onMouseEnter={() => handleMouseEnter("home")}
              onMouseLeave={handleMouseLeave}
            >
              <Link to="/" className={getActiveClass("/")}>Home</Link>
              {activeDropdown === "home" && (
                <div
                  className="dropdown home-dropdown"
                  onMouseEnter={() => handleMouseEnter("home")}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="hero-banner">
                    <h2>Engineering Grandeur, Delivering Excellence.</h2>
                    <ul className="hero-highlights">
                      <li>10+ Years of Excellence</li>
                      <li>₹50+ Crores Infrastructure</li>
                      <li>1,00,000+ sq.ft. Premium Event Structures</li>
                      <li>Top 3 in Central India | Top 15 in India</li>
                      <li>500+ Mega Events Delivered</li>
                    </ul>
                  </div>
                </div>
              )}
            </li>

            {/* SOLUTIONS DROPDOWN */}
            <li
              onMouseEnter={() => handleMouseEnter("solutions")}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                to="/solutions"
                className={getActiveClass("/solutions")}
              >
                Solutions
              </Link>
              {activeDropdown === "solutions" && (
                <div
                  className="dropdown solution-dropdown"
                  onMouseEnter={() => handleMouseEnter("solutions")}
                  onMouseLeave={handleMouseLeave}
                >
                  <ul>
                    <li>Corporate & Business Excellence</li>
                    <li>Government & Institutional Events</li>
                    <li>Mega Political Gatherings</li>
                    <li>Cultural & Religious Extravaganzas</li>
                    <li>Luxury Weddings & Private Celebrations</li>
                    <li>Sports & Entertainment Arenas</li>
                    <li>Industrial & Commercial Solutions</li>
                  </ul>
                </div>
              )}
            </li>

            <li>
              <Link
                to="/industries"
                className={getActiveClass("/industries")}
              >
                Industries We Serve
              </Link>
            </li>
            <li>
              <Link
                to="/case-studies"
                className={getActiveClass("/case-studies")}
              >
                Case Studies
              </Link>
            </li>
            <li>
              <Link to="/about" className={getActiveClass("/about")}>
                About Us
              </Link>
            </li>
            <li>
              <Link to="/gallery" className={getActiveClass("/gallery")}>
                Gallery
              </Link>
            </li>
            <li>
              <Link to="/contact" className={getActiveClass("/contact")}>
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>

        {/* ===== RIGHT SIDE ===== */}
        <div className="nav-right">
          <div className="searc-div">
            <button className="search-btn">
              <FiSearch className="search-icon" />
            </button>
          </div>
          <div className="threeIcon-more">
            <div className="nav-icon">
              <IoReorderThreeOutline className="three-line-icon" />
            </div>
            <button className="more-btn">More</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
