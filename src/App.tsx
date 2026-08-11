import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Scholarship from "./pages/Scholarship";
import Placement from "./pages/Placement";
import Franchise from "./pages/Franchise";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/scholarship" element={<Scholarship />} />
          <Route path="/placement" element={<Placement />} />
          <Route path="/franchise" element={<Franchise />} />
          {/* Catch-all route to redirect back to home or render 404 */}
          <Route path="*" element={<Home />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
