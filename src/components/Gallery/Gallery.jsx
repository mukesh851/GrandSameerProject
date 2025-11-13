
// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import "./Gallery.css";

// import event1 from "../../assets/eventAndVideo/event1.jpg";
// import event2 from "../../assets/eventAndVideo/event2.jpg";
// import event3 from "../../assets/eventAndVideo/event3.jpg";
// import drone1 from "../../assets/eventAndVideo/drone1.jpg";
// import drone2 from "../../assets/eventAndVideo/drone2.jpg";
// import drone3 from "../../assets/eventAndVideo/drone3.jpg";
// import installation1 from "../../assets/eventAndVideo/installation1.mp4";
// import installation2 from "../../assets/eventAndVideo/installation2.mp4";
// import installation3 from "../../assets/eventAndVideo/installation3.mp4";

// const Gallery = () => {
//   const [activeCategory, setActiveCategory] = useState("All");
//   const [selectedMedia, setSelectedMedia] = useState(null);

//   const categories = ["All", "Event Galleries", "Drone Shots", "Videos"];

//   const mediaData = [
//     { id: 1, type: "image", category: "Event Galleries", src: event1, title: "Corporate Event" },
//     { id: 2, type: "image", category: "Event Galleries", src: event2, title: "Product Launch" },
//     { id: 3, type: "image", category: "Event Galleries", src: event3, title: "Event Launch" },
//     { id: 4, type: "image", category: "Drone Shots", src: drone1, title: "Mega Hangar Aerial" },
//     { id: 5, type: "image", category: "Drone Shots", src: drone2, title: "High-Profile Event" },
//     { id: 6, type: "image", category: "Drone Shots", src: drone3, title: "In Ground" },
//     { id: 7, type: "video", category: "Videos", src: installation1, title: "Large-scale Installation 1" },
//     { id: 8, type: "video", category: "Videos", src: installation2, title: "Large-scale Installation 2" },
//     { id: 9, type: "video", category: "Videos", src: installation3, title: "Large-scale Installation 3" },
//   ];

//   const filteredMedia =
//     activeCategory === "All"
//       ? mediaData
//       : mediaData.filter((m) => m.category === activeCategory);

//   // Fade-in animation
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
//   }, [filteredMedia]);

//   return (
//     <section className="gallery-section" id="gallery">
//       <div className="gallery-container">
//          <div className="gallery-part">

//         <h2 className="gallery-title">Gallery / Media</h2>
//         <p className="gallery-subtitle">
//           Explore category-wise event galleries, drone shots of mega hangars & high-profile events,
//           and videos of large-scale installations.
//         </p>
//          </div>

//         {/* Category Tabs */}
//         <div className="gallery-tabs">
//           {categories.map((cat) => (
//             <button
//               key={cat}
//               onClick={() => setActiveCategory(cat)}
//               className={`tab-btn ${activeCategory === cat ? "active" : ""}`}
//             >
//               {cat}
//             </button>
//           ))}
//         </div>

//         {/* Media Grid */}
//         <div className="media-grid">
//           {filteredMedia.map((item) => (
//             <div
//               key={item.id}
//               className="media-card fade-in"
//               onClick={() => setSelectedMedia(item)}
//             >
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

//         {/* View All Button */}
//         <div className="view-all-container fade-in">
//           <Link to="/full-gallery" className="view-all-btn">
//             View All
//           </Link>
//         </div>
//       </div>

//       {/* Modal */}
//       {selectedMedia && (
//         <div className="media-modal" onClick={() => setSelectedMedia(null)}>
//           <div className="modal-content" onClick={(e) => e.stopPropagation()}>
//             <span className="close-btn" onClick={() => setSelectedMedia(null)}>
//               &times;
//             </span>
//             {selectedMedia.type === "image" ? (
//               <img src={selectedMedia.src} alt={selectedMedia.title} className="modal-img" />
//             ) : (
//               <video src={selectedMedia.src} controls autoPlay className="modal-video"></video>
//             )}
//             <p className="modal-caption">{selectedMedia.title}</p>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// };

// export default Gallery;





import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Gallery.css";

import event1 from "../../assets/eventAndVideo/event1.jpg";
import event2 from "../../assets/eventAndVideo/event2.jpg";
import event3 from "../../assets/eventAndVideo/event3.jpg";
import drone1 from "../../assets/eventAndVideo/drone1.jpg";
import drone2 from "../../assets/eventAndVideo/drone2.jpg";
import drone3 from "../../assets/eventAndVideo/drone3.jpg";
import installation1 from "../../assets/eventAndVideo/installation1.mp4";
import installation2 from "../../assets/eventAndVideo/installation2.mp4";
import installation3 from "../../assets/eventAndVideo/installation3.mp4";

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedMedia, setSelectedMedia] = useState(null);

  const categories = ["All", "Event Galleries", "Drone Shots", "Videos"];

  const mediaData = [
    { id: 1, type: "image", category: "Event Galleries", src: event1, title: "Corporate Event" },
    { id: 2, type: "image", category: "Event Galleries", src: event2, title: "Product Launch" },
    { id: 3, type: "image", category: "Event Galleries", src: event3, title: "Event Launch" },
    { id: 4, type: "image", category: "Drone Shots", src: drone1, title: "Mega Hangar Aerial" },
    { id: 5, type: "image", category: "Drone Shots", src: drone2, title: "High-Profile Event" },
    { id: 6, type: "image", category: "Drone Shots", src: drone3, title: "In Ground" },
    { id: 7, type: "video", category: "Videos", src: installation1, title: "Large-scale Installation 1" },
    { id: 8, type: "video", category: "Videos", src: installation2, title: "Large-scale Installation 2" },
    { id: 9, type: "video", category: "Videos", src: installation3, title: "Large-scale Installation 3" },
  ];

  const filteredMedia =
    activeCategory === "All"
      ? mediaData
      : mediaData.filter((m) => m.category === activeCategory);

  // Fade-in animation
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
  }, [filteredMedia]);

  return (
    <section className="gallery-section" id="gallery">
      <div className="gallery-container">
        <div className="gallery-part">
          <h2 className="gallery-title">Gallery / Media</h2>
          <p className="gallery-subtitle">
            Explore category-wise event galleries, drone shots of mega hangars & high-profile events,
            and videos of large-scale installations.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="gallery-tabs">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`tab-btn ${activeCategory === cat ? "active" : ""}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Media Grid */}
        <div className="media-grid">
          {filteredMedia.map((item) => (
            <div
              key={item.id}
              className="media-card fade-in"
              onClick={() => setSelectedMedia(item)}
            >
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

        {/* View All Button */}
        <div className="view-all-container fade-in">
          <Link to="/full-gallery" className="view-all-btn">
            View All
          </Link>
        </div>
      </div>

      {/* Modal */}
      {selectedMedia && (
        <div className="media-modal" onClick={() => setSelectedMedia(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-btn" onClick={() => setSelectedMedia(null)}>
              &times;
            </span>
            {selectedMedia.type === "image" ? (
              <img src={selectedMedia.src} alt={selectedMedia.title} className="modal-img" />
            ) : (
              <video src={selectedMedia.src} controls autoPlay className="modal-video"></video>
            )}
            <p className="modal-caption">{selectedMedia.title}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
