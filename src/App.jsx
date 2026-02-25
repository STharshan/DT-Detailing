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
      <GDPRConsent />
    </Router>
  );
}

export default App;
