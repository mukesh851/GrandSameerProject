// import React from "react";
// import "./MainSectionB.css";


// const MainSectionB = () => {
//   return (
//     <section className="block">
//       <div className="container">
//         <div className="row align-items-end justify-content-between">
//           <div className="col-lg-8">
//             <p className="top-title">Losberger De Boer solutions</p>
//             <h2 className="section-heading">
//               Temporary and semi-permanent space solutions
//             </h2>
//           </div>
//         </div>

//         <div className="columns">
//           {/* Event Space */}
//           <div className="columns__item zoom-image">
//             <div className="columns__image image-wrapper cut-corner">
//               <img
//                 src="https://source.unsplash.com/600x400/?event,venue"
//                 alt="Event Space"
//                 loading="lazy"
//               />
//             </div>
//             <div className="columns__text">
//               <h3 className="columns__title">Event Space</h3>
//               <p>
//                 We are the inspirational partner that offers the complete
//                 package for the perfect event.
//               </p>
//               <a href="#" className="columns__link link">
//                 <span>Our Event rental solutions</span>
//               </a>
//             </div>
//           </div>

//           {/* Commercial Space */}
//           <div className="columns__item zoom-image">
//             <div className="columns__image image-wrapper cut-corner">
//               <img
//                 src="https://source.unsplash.com/600x400/?office,building"
//                 alt="Commercial Space"
//                 loading="lazy"
//               />
//             </div>
//             <div className="columns__text">
//               <h3 className="columns__title">Commercial & Public Space</h3>
//               <p>
//                 As a contractor, we help businesses meet their short term and
//                 long term space requirements.
//               </p>
//               <a href="#" className="columns__link link">
//                 <span>Our Commercial solutions</span>
//               </a>
//             </div>
//           </div>

//           {/* Rapid Deployment */}
//           <div className="columns__item zoom-image">
//             <div className="columns__image image-wrapper cut-corner">
//               <img
//                 src="https://source.unsplash.com/600x400/?military,shelter"
//                 alt="Rapid Deployment Space"
//                 loading="lazy"
//               />
//             </div>
//             <div className="columns__text">
//               <h3 className="columns__title">Rapid Deployment Space</h3>
//               <p>
//                 We are a global supplier of rapidly deployable shelters,
//                 emergency facilities and military space solutions.
//               </p>
//               <a href="#" className="columns__link link">
//                 <span>Our Rapid Deployment solutions</span>
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default MainSectionB;




import React from "react";
import "./MainSectionB.css";

import eventImg from "../../assets/images/event.jpg";
import commercialImg from "../../assets/images/commercial.jpg";
import rapidImg from "../../assets/images/rapid.jpg";

const MainSectionB = () => {
  return (
    
   <div className="main-section-container">
     <div className="block">
      <div className="container">
        <div className="section-header">
          <p className="top-title">Grand Sameer Events Pvt. Ltd. —</p>
          <h2 className="section-title">
            Temporary and semi-permanent space solutions
          </h2>
        </div>

        <div className="columns">
          <div className="columns__item">
            <div className="columns__image">
              <img src={eventImg} alt="Event Space" loading="lazy" />
            </div>
            <div className="columns__text">
              <h3 className="columns__title">Event Space</h3>
              <p>
                We are the inspirational partner that offers the complete
                package for the perfect event.
              </p>
              <a
                href="/global/solutions/event-space-rental/"
                className="columns__link"
              >
                Our Event rental solutions →
              </a>
            </div>
          </div>

          <div className="columns__item">
            <div className="columns__image">
              <img src={commercialImg} alt="Commercial & Public Space" loading="lazy" />
            </div>
            <div className="columns__text">
              <h3 className="columns__title">Commercial & Public Space</h3>
              <p>
                As a contractor, we help businesses meet their short term and
                long term space requirements.
              </p>
              <a
                href="/global/solutions/commercial-space/"
                className="columns__link"
              >
                Our Commercial solutions →
              </a>
            </div>
          </div>

          <div className="columns__item">
            <div className="columns__image">
              <img src={rapidImg} alt="Rapid Deployment Space" loading="lazy" />
            </div>
            <div className="columns__text">
              <h3 className="columns__title">Rapid Deployment Space</h3>
              <p>
                We are a global supplier of rapidly deployable shelters,
                emergency facilities and military space solutions.
              </p>
              <a
                href="/global/solutions/rapid-deployment-space/"
                className="columns__link"
              >
                Our Rapid Deployment solutions →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>


 {/* SectionDivider.css  */}
     <div className="block-border">
      <div className="main-border-container">
        <span className="divider--branded"></span>
      </div>
    </div>


   


   </div>

    
  );
};

export default MainSectionB;

