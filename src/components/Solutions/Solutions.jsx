
// import React from "react";
// import "./Solutions.css";

// import img1 from "../../assets/solutionsIm/Corporate.png";
// import img2 from "../../assets/solutionsIm/Government.png";
// import img3 from "../../assets/solutionsIm/Mega.png";
// import img4 from "../../assets/solutionsIm/Cultural.png";
// import img5 from "../../assets/solutionsIm/Luxury.png";
// import img6 from "../../assets/solutionsIm/Sports.png";
// import img7 from "../../assets/solutionsIm/Industrial.png";

// const solutionsData = [
//   { title: "Corporate & Business Excellence", desc: "We design world-class environments for businesses to showcase, connect, and grow. From Global Investor Summits to brand launches and exhibitions, our corporate infrastructure solutions set the stage for success.", img: img1 },
//   { title: "Government & Institutional Events", desc: "From Prime Ministerial rallies to national celebrations, we provide secure, large-scale structures trusted by governments, PSUs, and diplomatic institutions.", img: img2 },
//   { title: "Mega Political Gatherings", desc: "We specialize in handling mass-scale political rallies, party conferences, and election campaigns with flawless execution and speed.", img: img3 },
//   { title: "Cultural & Religious Extravaganzas", desc: "From Maha Kumbh Melas to community festivals, our infrastructure empowers millions of people to gather in safe, large, and elegant environments.", img: img4 },
//   { title: "Luxury Weddings & Private Celebrations", desc: "Designer hangars, grand mandaps, and royal pavilions crafted for those who demand unforgettable, elegant, and luxurious celebrations.", img: img5 },
//   { title: "Sports & Entertainment Arenas", desc: "We build stadium-scale tents, concert pavilions, and entertainment lounges, redefining large-scale sports and cultural experiences.", img: img6 },
//   { title: "Industrial & Commercial Solutions", desc: "Beyond events, we provide temporary warehouses, factory setups, and emergency response shelters — versatile, durable, and cost-efficient.", img: img7 },
// ];

// const Solutions = () => {
//   return (
//     <section className="solutions-section">
//       <div className="solutions-container">
//         <div className="solutions-header">
//           <h2>Solutions / What We Do</h2>
//           <p>Each category has its own elegant subpage with case studies & visuals.</p>
//         </div>

//         {solutionsData.map((item, index) => (
//           <div
//             className={`solution-card ${index % 2 === 1 ? "reverse-layout" : ""}`}
//             key={index}
//           >
//             <div className="solution-image">
//               <img src={item.img} alt={item.title} />
//             </div>
//             <div className="solution-content">
//               <h3>{item.title}</h3>
//               <p>{item.desc}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Solutions;





import React from "react";
import "./Solutions.css";

// import img1 from "../../assets/solutionsIm/Corporate.png";
// import img2 from "../../assets/solutionsIm/Government.png";
// import img3 from "../../assets/solutionsIm/Mega.png";
// import img4 from "../../assets/solutionsIm/Cultural.png";
// import img5 from "../../assets/solutionsIm/Luxury.png";
// import img6 from "../../assets/solutionsIm/Sports.png";
// import img7 from "../../assets/solutionsIm/Industrial.png";

import img1 from "../../assets/aboutUs/Jabalpur14.jpeg";
import img2 from "../../assets/aboutUs/Bhopal9.jpeg";
import img3 from "../../assets/aboutUs/BhopalA21.jpeg";
import img4 from "../../assets/aboutUs/Sagar1.jpeg"
import img5 from "../../assets/aboutUs/BhopalA14.jpeg";
import img6 from "../../assets/aboutUs/BhopalA4.jpeg";
import img7 from "../../assets/aboutUs/BhopalA25.jpeg";



// const data = [
//   { id: "sol-1", title: "Corporate & Business Excellence", img: img1, desc: "We design world-class environments..." },
//   { id: "sol-2", title: "Government & Institutional Events", img: img2, desc: "From Prime Ministerial rallies..." },
//   { id: "sol-3", title: "Mega Political Gatherings", img: img3, desc: "We specialize in mass-scale political rallies..." },
//   { id: "sol-4", title: "Cultural & Religious Extravaganzas", img: img4, desc: "From Maha Kumbh Melas..." },
//   { id: "sol-5", title: "Luxury Weddings & Private Celebrations", img: img5, desc: "Designer hangars, grand mandaps..." },
//   { id: "sol-6", title: "Sports & Entertainment Arenas", img: img6, desc: "We build stadium-scale tents..." },
//   { id: "sol-7", title: "Industrial & Commercial Solutions", img: img7, desc: "Temporary warehouses, factory setups..." }
// ];


const data = [
  { id: "sol-1", title: "🏛️ Government & Institutional Events", img: img1, desc: "From Prime Ministerial rallies to state-level government programs, we deliver secure, protocol-compliant temporary infrastructure at scale." },
  { id: "sol-2", title: "🗳️ Mega Political Gatherings", img: img2, desc: "We specialize in mass-scale political rallies with large-span hangars, crowd-ready layouts, and rapid on-ground execution." },
  { id: "sol-3", title: "🏢 Corporate & Business Excellence", img: img3, desc: "World-class infrastructure for corporate summits, investor meets, exhibitions, and high-profile business events." },
  { id: "sol-4", title: "🕉️ Cultural & Religious Gatherings", img: img4, desc: "Infrastructure for large religious congregations, spiritual events, and gatherings led by Jain saints, spiritual leaders, and religious institutions." },
  { id: "sol-5", title: "🎶 Concerts & Entertainment Arenas", img: img5, desc: "High-capacity structures for live concerts, music festivals, and entertainment events with safe crowd flow and strong execution." },

  { id: "sol-6", title: "💍 Luxury Weddings & Private Celebrations", img: img6, desc: "Designer hangars, grand mandaps, and premium setups for large weddings and exclusive private celebrations." },
  { id: "sol-7", title: "🎭 Sports & Entertainment Events", img: img7, desc: "Temporary stadium-scale infrastructure for sports events, shows, and large public entertainment programs. celebrations." }
];

const Solutions = () => {
  return (
    <section className="solutions-section">
      <div className="solutions-container">
        <div className="solutions-header">
          <h2>Solutions / What We Do</h2>
          <p>Each category has its own elegant subpage...</p>
        </div>

        <div className="solution-Imgcontent">
          {data.map((item, index) => (
            <div
              id={item.id}
              key={item.id}
              className={`solution-card ${index % 2 === 1 ? "reverse-layout" : ""}`}
            >
              <div className="solution-image">
                <img src={item.img} alt={item.title} />
              </div>

              <div className="solution-content">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
