// import React from "react";
// import { Link } from "react-router-dom";
// import "./Gallery.css";

// import event1 from "../../assets/eventAndVideo/event1.jpg";
// import event2 from "../../assets/eventAndVideo/event2.jpg";
// import drone1 from "../../assets/eventAndVideo/drone1.jpg";
// import drone2 from "../../assets/eventAndVideo/drone2.jpg";
// import installation from "../../assets/eventAndVideo/installation.mp4";

// const FullGallery = () => {
//   const mediaItems = [
//     { id: 1, type: "image", src: event1, title: "Corporate Event" },
//     { id: 2, type: "image", src: event2, title: "Product Launch" },
//     { id: 3, type: "image", src: drone1, title: "Mega Hangar Aerial" },
//     { id: 4, type: "image", src: drone2, title: "High-Profile Event" },
//     { id: 5, type: "video", src: installation, title: "Large-scale Installation" },
//   ];

//   return (
//     <section className="gallery-section">
//       <div className="gallery-container">
//         <h2 className="gallery-title">Full Gallery</h2>
//         <p className="gallery-subtitle">Explore our complete media collection below.</p>

//         <div className="media-grid">
//           {mediaItems.map((item) => (
//             <div key={item.id} className="media-card fade-in">
//               {item.type === "image" ? (
//                 <img src={item.src} alt={item.title} className="media-img" />
//               ) : (
//                 <video src={item.src} muted loop autoPlay className="media-video"></video>
//               )}
//               <div className="media-overlay">
//                 <p>{item.title}</p>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="view-all-container fade-in">
//           <Link to="/" className="view-all-btn">
//             ← Back to Gallery
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FullGallery;



// import React, { useEffect } from "react";
// import "./FullGallery.css";

// import event1 from "../../assets/eventAndVideo/event1.jpg";
// import event2 from "../../assets/eventAndVideo/event2.jpg";
// import drone1 from "../../assets/eventAndVideo/drone1.jpg";
// import drone2 from "../../assets/eventAndVideo/drone2.jpg";
// import installation from "../../assets/eventAndVideo/installation.mp4";

// const FullGallery = () => {
//   const mediaData = [
//     { id: 1, type: "image", src: event1, title: "Corporate Event" },
//     { id: 2, type: "image", src: event2, title: "Product Launch" },
//     { id: 3, type: "image", src: drone1, title: "Mega Hangar Aerial" },
//     { id: 4, type: "image", src: drone2, title: "High-Profile Event" },
//     { id: 5, type: "video", src: installation, title: "Large-scale Installation" },
//   ];

//   // Fade-in on scroll
//   useEffect(() => {
//     const elements = document.querySelectorAll(".fade-in");
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) entry.target.classList.add("visible");
//         });
//       },
//       { threshold: 0.2 }
//     );

//     elements.forEach((el) => observer.observe(el));
//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section className="full-gallery-section">
//       <div className="full-gallery-container">
//         <h2 className="full-gallery-title">Full Gallery</h2>
//         <p className="full-gallery-subtitle">
//           Explore our complete media collection below.
//         </p>

//         <div className="full-media-grid">
//           {mediaData.map((item) => (
//             <div key={item.id} className="media-card fade-in">
//               {item.type === "image" ? (
//                 <img src={item.src} alt={item.title} className="media-img" />
//               ) : (
//                 <video
//                   src={item.src}
//                   muted
//                   loop
//                   autoPlay
//                   playsInline
//                   className="media-video"
//                 ></video>
//               )}
//               <div className="media-overlay">
//                 <p>{item.title}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FullGallery;






import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./FullGallery.css";

import event1 from "../../assets/eventAndVideo/event1.jpg";
import event2 from "../../assets/eventAndVideo/event2.jpg";
import event3 from "../../assets/eventAndVideo/event3.jpg";
import drone1 from "../../assets/eventAndVideo/drone1.jpg";
import drone2 from "../../assets/eventAndVideo/drone2.jpg";
import drone3 from "../../assets/eventAndVideo/drone3.jpg";
import installation1 from "../../assets/eventAndVideo/installation1.mp4";
import installation2 from "../../assets/eventAndVideo/installation2.mp4";
import installation3 from "../../assets/eventAndVideo/installation3.mp4";

const FullGallery = () => {
  const mediaData = [
     { id: 1, type: "image", src: event1, title: "Corporate Event" },
     { id: 2, type: "image", src: event2, title: "Product Launch" },
     { id: 3, type: "image", src: event3, title: "Event Launch" },
     { id: 4, type: "image", src: drone1, title: "Mega Hangar Aerial" },
     { id: 5, type: "image", src: drone2, title: "High-Profile Event" },
     { id: 5, type: "image", src: drone3, title: "In Ground " },
     { id: 6, type: "video", src: installation1, title: "Large-scale Installation12" },
     { id: 7, type: "video", src: installation2, title: "Large-scale Installation" },
     { id: 8, type: "video", src: installation3, title: "Large-scale Installation3" },
   ];

  // Fade-in animation on scroll
  useEffect(() => {
    const elements = document.querySelectorAll(".fade-in");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="full-gallery-section">
      <div className="full-gallery-container">
        <h2 className="full-gallery-title">Full Gallery</h2>
        <p className="full-gallery-subtitle">
          Explore our complete media collection below.
        </p>

        {/* Media Grid */}
        <div className="full-media-grid">
          {mediaData.map((item) => (
            <div key={item.id} className="media-card fade-in">
              {item.type === "image" ? (
                <img src={item.src} alt={item.title} className="media-img" />
              ) : (
                <video
                  src={item.src}
                  muted
                  loop
                  autoPlay
                  playsInline
                  className="media-video"
                ></video>
              )}
              <div className="media-overlay">
                <p>{item.title}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Back Button */}
        <div className="view-all-container fade-in">
          <Link to="/gallery" className="view-all-btn">
            ← Back to Gallery
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FullGallery;


