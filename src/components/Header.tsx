import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/img/logo.png";
import EligibilityModal from "./EligibilityModal";

export default function Header() {
  const [isCoursesDropdownOpen, setIsCoursesDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isEligibilityModalOpen, setIsEligibilityModalOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleOpenModal = () => setIsEligibilityModalOpen(true);
    window.addEventListener("openEligibilityModal", handleOpenModal);
    return () => window.removeEventListener("openEligibilityModal", handleOpenModal);
  }, []);

  const handleNavClick = (path: string) => {
    navigate(path);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const courses = [
    { name: "Cabin Crew (Air Hostess & Hospitality Management)", desc: "Cabin crew training & placement", path: "/courses/air-hostess-cabin-crew-hospitality-management" },
    { name: "Airport Ground Staff & Hospitality Management", desc: "Ground operations diploma", path: "/courses/airport-ground-staff-hospitality-management" },
    { name: "AI & Data Science", desc: "State certified analytics course", path: "/courses/ai-data-science-with-generative-ai-machine-learning" }
  ];

  return (
    <header className="w-full sticky md:static top-0 z-50 bg-white max-md:shadow-sm">
      {/* Top Bar 1: Certification Notice */}
      <div className="hidden w-full bg-[#f6a619] py-2 px-4 text-center border-b border-amber-600/10">
        <p className="text-neutral-900 font-sans font-bold text-[11px] sm:text-xs md:text-sm flex items-center justify-center gap-1.5 leading-none">
          <span>🏛️</span> Maharashtra Govt Certified Aviation Institute
        </p>
      </div>

      {/* Top Bar 2: Scrolling Ticker Marquee */}
      <div className="w-full bg-[#0b2f61] text-[#ffd300] py-2 px-4 overflow-hidden relative border-b border-blue-950/20">
        <div className="relative w-full flex items-center">
          <div className="animate-marquee whitespace-nowrap flex items-center text-xs sm:text-sm font-bold tracking-wide gap-8">
            <span>
              🚀 Become an Air Hostess in Just 12 Months | 🎓 Up to ₹50,000 Scholarship Available | ✈️ 10,000+ Students Trained with Top Airlines | ⏳ Limited seats — apply now to secure your spot! &nbsp;&nbsp;|
            </span>
            <span>
              🚀 Become an Air Hostess in Just 12 Months | 🎓 Up to ₹50,000 Scholarship Available | ✈️ 10,000+ Students Trained with Top Airlines | ⏳ Limited seats — apply now to secure your spot! &nbsp;&nbsp;|
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="w-full border-b border-neutral-100 shadow-sm py-3 px-4 sm:px-6 md:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">

          {/* Left Group: Logo and Nav Links */}
          <div className="flex items-center space-x-10 lg:space-x-14">
            {/* Logo */}
            <button
              onClick={() => handleNavClick("/")}
              className="flex items-center focus:outline-none"
              aria-label="Amigo Academy Home"
            >
              <img src={logo} alt="Amigo Academy Logo" className="h-16 sm:h-16 lg:h-[72px] w-auto object-contain py-1" />
            </button>

            {/* Desktop Links */}
            <nav className="hidden md:flex items-center space-x-5 text-[#1e293b] font-sans font-semibold text-sm">
              {/* Courses Dropdown Link */}
              <div
                className="relative group"
                onMouseEnter={() => setIsCoursesDropdownOpen(true)}
                onMouseLeave={() => setIsCoursesDropdownOpen(false)}
              >
                <button
                  onClick={() => {
                    handleNavClick("/courses");
                    setIsCoursesDropdownOpen(false);
                  }}
                  className={`flex items-center gap-1 hover:text-[#e31e24] transition-colors py-2 focus:outline-none ${location.pathname.startsWith("/courses") ? "text-[#e31e24]" : ""}`}
                >
                  Courses
                  <svg className={`w-3.5 h-3.5 transition-transform duration-200 ${isCoursesDropdownOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Dropdown Box with bridge padding to prevent hover flicker */}
                {isCoursesDropdownOpen && (
                  <div className="absolute left-0 top-full pt-1 z-50 animate-fadeIn">
                    <div className="w-64 bg-white rounded-xl shadow-xl border border-neutral-100 py-3">
                      {courses.map((course, idx) => (
                        <button
                          key={idx}
                          onClick={() => {
                            handleNavClick(course.path);
                            setIsCoursesDropdownOpen(false);
                          }}
                          className="w-full text-left px-4 py-2 hover:bg-neutral-50 flex flex-col group/item transition-colors"
                        >
                          <span className="text-xs font-bold text-neutral-800 group-hover/item:text-[#e31e24]">{course.name}</span>
                          <span className="text-[10px] text-neutral-400">{course.desc}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <span className="text-neutral-300 font-normal">|</span>

              <button
                onClick={() => handleNavClick("/placement")}
                className={`hover:text-[#e31e24] transition-colors py-2 ${location.pathname === "/placement" ? "text-[#e31e24]" : ""}`}
              >
                Placements
              </button>

              <span className="text-neutral-300 font-normal">|</span>

              <button
                onClick={() => handleNavClick("/scholarship")}
                className={`hover:text-[#e31e24] transition-colors py-2 ${location.pathname === "/scholarship" ? "text-[#e31e24]" : ""}`}
              >
                Scholarships
              </button>

              <span className="text-neutral-300 font-normal">|</span>

              <button
                onClick={() => handleNavClick("/branches")}
                className={`hover:text-[#e31e24] transition-colors py-2 ${location.pathname === "/branches" ? "text-[#e31e24]" : ""}`}
              >
                Branches
              </button>

              <span className="text-neutral-300 font-normal">|</span>

              <button
                onClick={() => handleNavClick("/franchise")}
                className={`hover:text-[#e31e24] transition-colors py-2 ${location.pathname === "/franchise" ? "text-[#e31e24]" : ""}`}
              >
                Franchise
              </button>
            </nav>
          </div>

          {/* Right Side Buttons */}
          <div className="flex items-center space-x-3.5">
            {/* CTA Eligibility Button */}
            <button
              onClick={() => setIsEligibilityModalOpen(true)}
              className="bg-[#e31e24] hover:bg-[#c2141a] text-white font-sans font-bold text-xs sm:text-sm px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-md hover:shadow-lg transition-all active:scale-95 whitespace-nowrap focus:outline-none cursor-pointer"
            >
              Check my Eligibility
            </button>

            {/* Mobile Hamburger toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-1 text-neutral-600 hover:text-neutral-900 focus:outline-none"
              aria-label="Toggle Menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden w-full border-b border-neutral-100 bg-white animate-slideDown">
          <nav className="flex flex-col px-6 py-4 space-y-4 font-sans font-bold text-[#1e293b] text-base">
            <div className="border-b border-neutral-100 pb-2">
              <button onClick={() => handleNavClick("/courses")} className="text-left w-full focus:outline-none">
                <span className="text-neutral-400 text-xs uppercase tracking-wider block mb-2 hover:text-[#e31e24] cursor-pointer">Our Courses</span>
              </button>
              {courses.map((course, idx) => (
                <button
                  key={idx}
                  onClick={() => handleNavClick(course.path)}
                  className="w-full text-left py-1.5 text-sm text-neutral-700 hover:text-[#e31e24] block"
                >
                  • {course.name}
                </button>
              ))}
            </div>

            <button
              onClick={() => handleNavClick("/placement")}
              className="text-left py-1 hover:text-[#e31e24] border-b border-neutral-100"
            >
              Placements
            </button>
            <button
              onClick={() => handleNavClick("/scholarship")}
              className="text-left py-1 hover:text-[#e31e24] border-b border-neutral-100"
            >
              Scholarships
            </button>
            <button
              onClick={() => handleNavClick("/branches")}
              className="text-left py-1 hover:text-[#e31e24] border-b border-neutral-100"
            >
              Branches
            </button>

            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                setIsEligibilityModalOpen(true);
              }}
              className="bg-[#e31e24] hover:bg-[#c2141a] text-white font-sans font-bold text-sm px-6 py-3 rounded-full shadow-md text-center"
            >
              Check my Eligibility
            </button>
          </nav>
        </div>
      )}

      {/* Eligibility Form Modal */}
      <EligibilityModal
        isOpen={isEligibilityModalOpen}
        onClose={() => setIsEligibilityModalOpen(false)}
      />
    </header>
  );
}

