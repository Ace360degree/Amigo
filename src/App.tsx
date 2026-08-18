import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from "react-router-dom";
import Layout from "./components/Layout";

// Static imports for instant page transitions without any loading screen
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Scholarship from "./pages/Scholarship";
import Placement from "./pages/Placement";
import Franchise from "./pages/Franchise";
import CareerGuides from "./pages/CareerGuides";
import CabinCrew from "./pages/CabinCrew";
import AirportGroundStaff from "./pages/AirportGroundStaff";
import AiDataScience from "./pages/AiDataScience";
import AndheriBranch from "./pages/AndheriBranch";
import ThaneBranch from "./pages/ThaneBranch";
import GhatkoparBranch from "./pages/GhatkoparBranch";
import StudentSuccess from "./pages/StudentSuccess";
import Gallery from "./pages/Gallery";
import Blog from "./pages/Blog";
import InnerBlog from "./pages/InnerBlog";
import TermsConditions from "./pages/TermsConditions";
import RefundPolicy from "./pages/RefundPolicy";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Courses from "./pages/Courses";
import AirHostessCabinCrew from "./pages/AirHostessCabinCrew";
import AviationHospitality from "./pages/AviationHospitality";
import AIDataScienceCourse from "./pages/AI-DataScienceCourse";
import Branches from "./pages/Branches";
import ThankYou from "./pages/ThankYou";

// Helper component to smoothly scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/scholarship" element={<Scholarship />} />
          <Route path="/placement" element={<Placement />} />
          <Route path="/franchise" element={<Franchise />} />
          <Route path="/career-guides" element={<CareerGuides />} />
          <Route path="/career-guide/cabin-crew" element={<CabinCrew />} />
          <Route path="/career-guide/airport-ground-staff" element={<AirportGroundStaff />} />
          <Route path="/career-guide/ai-data-science" element={<AiDataScience />} />
          <Route path="/andheri-branch" element={<AndheriBranch />} />
          <Route path="/thane-branch" element={<ThaneBranch />} />
          <Route path="/ghatkopar-branch" element={<GhatkoparBranch />} />
          <Route path="/student-success" element={<StudentSuccess />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/how-to-become-a-cabin-crew-after-12th" element={<InnerBlog />} />
          <Route path="/terms-and-conditions" element={<TermsConditions />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/aviation-hospitality-management" element={<Navigate to="/courses/airport-ground-staff-hospitality-management" replace />} />
          <Route path="/courses/air-hostess-cabin-crew-hospitality-management" element={<AirHostessCabinCrew />} />
          <Route path="/courses/airport-ground-staff-hospitality-management" element={<AviationHospitality />} />
          <Route path="/courses/ai-data-science-with-generative-ai-machine-learning" element={<AIDataScienceCourse />} />
          <Route path="/branches" element={<Branches />} />
          <Route path="/thank-you" element={<ThankYou />} />
          {/* Catch-all route to redirect back to home or render 404 */}
          <Route path="*" element={<Home />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
