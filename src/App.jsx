import {BrowserRouter, Routes, Route} from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import {Contact} from "./pages/Contact";
import {Services} from "./pages/Services";
import AboutUs from "./pages/AboutUs";
import Work from "./pages/Work";
import CaseStudies from "./pages/CaseStudies";

function App() {
  return (
    <BrowserRouter>
      <div className="font-poppins">
        <Navbar />
        <Routes>
          <Route index path="/" element={<Homepage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/our-work" element={<CaseStudies />} />
          <Route path="/join-us" element={<Work />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
