import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      {/* <ScrollToTop /> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/services/mot" element={<Mot />} />
        <Route path="/services/brake" element={<Brake />} />
        <Route path="/terms" element={<TermsConditions />} />
        <Route path="/privacy" element={<PrivacyPolicy />} /> */}
      </Routes>
      <Footer />
      {/* <GDPRConsent /> */}
    </Router>
  );
}

export default App;
