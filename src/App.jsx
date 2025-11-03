import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Solutions from "./pages/Solutions/Solutions";
import Industries from "./pages/Industries/Industries";
import CaseStudies from "./pages/CaseStudies/CaseStudies";
import AboutUs from "./pages/AboutUs/AboutUs";
import GalleryPage from "./pages/GalleryPage/GalleryPage";
import FullGallery from "./components/Gallery/FullGallery";
import ContactUs from "./pages/ContactUs/ContactUs";
import Footer from "./components/Footer/footter";
import AllCasesPage from "./pages/casesPage/AllCasesPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/full-gallery" element={<FullGallery />} /> 
          
          <Route path="/contact" element={<ContactUs />} />

          {/* Cases */}
          <Route path="/cases" element={<AllCasesPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
