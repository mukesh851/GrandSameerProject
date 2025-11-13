

// import React, { useState } from "react";
// import { BsGlobe } from "react-icons/bs";
// import { FiSearch } from "react-icons/fi";
// import { IoReorderThreeOutline } from "react-icons/io5";
// import { Link, useLocation } from "react-router-dom";
// import "./Navbar.css";

// const Navbar = () => {
//   const [activeDropdown, setActiveDropdown] = useState(null);
//   const location = useLocation();

//   // For active link color
//   const getActiveClass = (path) =>
//     location.pathname === path ? "active-link" : "";

//   // Hover handler with delay
//   let dropdownTimer;
//   const handleMouseEnter = (name) => {
//     clearTimeout(dropdownTimer);
//     setActiveDropdown(name);
//   };

//   const handleMouseLeave = () => {
//     dropdownTimer = setTimeout(() => {
//       setActiveDropdown(null);
//     }, 250);
//   };

//   return (
//     <header className="navbar">
//       <div className="navbar-container">
//         {/* ===== LEFT SIDE LOGO ===== */}
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
//             {/* HOME DROPDOWN */}
//             <li
//               onMouseEnter={() => handleMouseEnter("home")}
//               onMouseLeave={handleMouseLeave}
//             >
//               <Link to="/" className={getActiveClass("/")}>Home</Link>
//               {activeDropdown === "home" && (
//                 <div
//                   className="dropdown home-dropdown"
//                   onMouseEnter={() => handleMouseEnter("home")}
//                   onMouseLeave={handleMouseLeave}
//                 >
//                   <div className="hero-banner">
//                     <h2>Engineering Grandeur, Delivering Excellence.</h2>
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

//             {/* SOLUTIONS DROPDOWN */}
//             <li
//               onMouseEnter={() => handleMouseEnter("solutions")}
//               onMouseLeave={handleMouseLeave}
//             >
//               <Link
//                 to="/solutions"
//                 className={getActiveClass("/solutions")}
//               >
//                 Solutions
//               </Link>
//               {activeDropdown === "solutions" && (
//                 <div
//                   className="dropdown solution-dropdown"
//                   onMouseEnter={() => handleMouseEnter("solutions")}
//                   onMouseLeave={handleMouseLeave}
//                 >
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

//             <li>
//               <Link
//                 to="/industries"
//                 className={getActiveClass("/industries")}
//               >
//                 Industries We Serve
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/case-studies"
//                 className={getActiveClass("/case-studies")}
//               >
//                 Case Studies
//               </Link>
//             </li>
//             <li>
//               <Link to="/about" className={getActiveClass("/about")}>
//                 About Us
//               </Link>
//             </li>
//             <li>
//               <Link to="/gallery" className={getActiveClass("/gallery")}>
//                 Gallery
//               </Link>
//             </li>
//             <li>
//               <Link to="/contact" className={getActiveClass("/contact")}>
//                 Contact Us
//               </Link>
//             </li>
//           </ul>
//         </nav>

//         {/* ===== RIGHT SIDE ===== */}
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
  const [rightPanelOpen, setRightPanelOpen] = useState(false); // For More panel
  const location = useLocation();

  const getActiveClass = (path) =>
    location.pathname === path ? "active-link" : "";

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
        {/* ===== LEFT LOGO ===== */}
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
            {/* Home */}
            <li
              onMouseEnter={() => handleMouseEnter("home")}
              onMouseLeave={handleMouseLeave}
            >
              <Link to="/" className={getActiveClass("/")}>
                Home
              </Link>
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

            {/* Solutions */}
            <li
              onMouseEnter={() => handleMouseEnter("solutions")}
              onMouseLeave={handleMouseLeave}
            >
              <Link to="/solutions" className={getActiveClass("/solutions")}>
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

          {/* More Button */}
          <div
            className="threeIcon-more"
            onClick={() => setRightPanelOpen(!rightPanelOpen)}
          >
            <div className="nav-icon">
              <IoReorderThreeOutline className="three-line-icon" />
            </div>
            <button className="more-btn">More</button>
          </div>
        </div>
      </div>

      {/* ===== RIGHT SIDE SLIDE PANEL ===== */}
      <div
        className={`right-panel ${rightPanelOpen ? "open" : ""}`}
        onClick={() => setRightPanelOpen(false)}
      >
        <ul>
          <li>
            <Link to="/" onClick={() => setRightPanelOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/solutions" onClick={() => setRightPanelOpen(false)}>
              Solutions
            </Link>
          </li>
          <li>
            <Link to="/industries" onClick={() => setRightPanelOpen(false)}>
              Industries We Serve
            </Link>
          </li>
          <li>
            <Link to="/case-studies" onClick={() => setRightPanelOpen(false)}>
              Case Studies
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={() => setRightPanelOpen(false)}>
              About Us
            </Link>
          </li>
          <li>
            <Link to="/gallery" onClick={() => setRightPanelOpen(false)}>
              Gallery
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => setRightPanelOpen(false)}>
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;

