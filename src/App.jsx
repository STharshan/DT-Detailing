import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import MaintenanceClean from "./pages/Service/Maintenance";
import DeepClean from "./pages/Service/DeepClean";
import PaintEnhancement from "./pages/Service/PaintEnhancement";
import CeramicCoating from "./pages/Service/CeramicCoating";
import Sheffield from "./pages/Location/Sheffield";
import Doncaster from "./pages/Location/Doncaster";
import GDPRConsent from "./components/GDPRBanner";
import ScrollToTop from "./components/ScrollTOTop";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsConditions from "./components/Term";
import ScrollToHash from "./components/ScrollHash";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <ScrollToHash />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/maintenance-clean" element={<MaintenanceClean />} />
        <Route path="/deep-clean" element={<DeepClean />} />
        <Route path="/paint-enhancement" element={<PaintEnhancement />} />
        <Route path="/ceramic-coating" element={<CeramicCoating />} />
        <Route path="/sheffield" element={<Sheffield />} />
        <Route path="/doncaster" element={<Doncaster />} />
        <Route path="/terms" element={<TermsConditions />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
      </Routes>
      <Footer />
      <a
        href="https://wa.me/447474461322" // <-- WhatsApp link (no + or spaces)
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-18 right-7 md:right-6 z-50 bg-[#10B981] hover:bg-[#15e6a0] text-white p-2 md:p-3 rounded-full shadow-lg transition-transform hover:scale-110"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp size={19} />
      </a>
      <GDPRConsent />
    </Router>
  );
}

export default App;
