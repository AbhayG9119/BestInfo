import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import CareerOpportunity from './pages/CareerOpportunity';
import HealthCare from './pages/services/HealthCare';
import ITDevelopment from './pages/services/ITDevelopment';
import ITRecruitment from './pages/services/ITRecruitment';
import ITTraining from './pages/services/ITTraining';
import StaffingNonIT from './pages/services/StaffingNonIT';
import BLogs from './pages/BLogs';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/services/health-care" element={<HealthCare />} />
        <Route path="/services/it-development" element={<ITDevelopment />} />
        <Route path="/services/it-recruitment" element={<ITRecruitment />} />
        <Route path="/services/it-training" element={<ITTraining />} />
        <Route path="/services/staffing-non-it" element={<StaffingNonIT />} />
        <Route path="/CareerOpportunity" element={<CareerOpportunity />} />
        <Route path="/BLogs" element={<BLogs />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
