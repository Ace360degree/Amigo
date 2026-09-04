import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate, useLocation } from "@tanstack/react-router";
import logo from "../assets/img/logo.png";
import EligibilityModal from "./EligibilityModal";

export default function Header() {
  const [isCoursesDropdownOpen, setIsCoursesDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isEligibilityModalOpen, setIsEligibilityModalOpen] = useState(false);
  const [modalSource, setModalSource] = useState("automatic popup");
  const lastClickedElRef = useRef<HTMLElement | null>(null);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleGlobalClick = (e: MouseEvent) => {
      lastClickedElRef.current = e.target as HTMLElement;
    };
    window.addEventListener("click", handleGlobalClick, true);
    return () => window.removeEventListener("click", handleGlobalClick, true);
  }, []);

  useEffect(() => {
    const handleOpenModal = (e: Event) => {
      const customEvent = e as CustomEvent;
      let source = customEvent.detail?.source;
      if (!source) {
        const clickedEl = lastClickedElRef.current || document.activeElement;
        if (clickedEl) {
          if (clickedEl.closest("header") || clickedEl.closest("[role='navigation']")) {
            source = "header-menu";
          } else if (clickedEl.closest("footer")) {
            source = "footer-cta";
          } else {
            const parentSection = clickedEl.closest("section");
            const parentDiv = clickedEl.closest("div[id]");
            const pageName = window.location.pathname === "/" ? "home" : window.location.pathname.replace(/^\//, "").replace(/\/$/, "");

            let sectionName = "cta";
            if (parentSection && parentSection.id) {
              sectionName = parentSection.id;
            } else if (parentDiv && parentDiv.id) {
              sectionName = parentDiv.id;
            } else if (parentSection) {
              const className = parentSection.className || "";
              if (className.includes("hero") || className.includes("banner")) {
                sectionName = "hero";
              } else {
                const allSections = Array.from(document.querySelectorAll("section"));
                const index = allSections.indexOf(parentSection);
                sectionName = index === 0 ? "hero" : `section-${index}`;
              }
            }
            source = `${pageName}-${sectionName}`;
          }
        } else {
          source = "automatic popup";
        }
      }
      setModalSource(source);
      setIsEligibilityModalOpen(true);
    };
    window.addEventListener("openEligibilityModal", handleOpenModal);
    return () => window.removeEventListener("openEligibilityModal", handleOpenModal);
  }, []);

  const handleNavClick = (path: string) => {
    navigate({ to: path as any });
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const courses = [
    { name: "Cabin Crew (Air Hostess) & Hospitality Management", desc: "Cabin crew training & placement assistance", path: "/courses/air-hostess-cabin-crew-hospitality-management" },
    { name: "Airport Ground Staff & Hospitality Management", desc: "Ground operations & placement assistance", path: "/courses/airport-ground-staff-hospitality-management" },
    { name: "AI & Data Science", desc: "Certified course & placement assistance", path: "/courses/ai-data-science-with-generative-ai-machine-learning" }
  ];

  return (
    <header className="w-full sticky md:static top-0 z-50 bg-white max-md:shadow-sm">
      {/* Top Bar 2: Scrolling Ticker Marquee */}
      <div className="w-full bg-[#0b2f61] text-[#ffd300] py-2 px-4 overflow-hidden relative border-b border-blue-950/20">
        <div className="relative w-full flex items-center">
          <div className="animate-marquee whitespace-nowrap flex items-center text-xs sm:text-sm font-bold tracking-wide gap-8">
            <span>
              🚀 Become an Air Hostess | 🎓 Up to ₹50,000 Scholarship Available | ✈️ 10,000+ Students Trained | ⏳ Limited seats — apply now to secure your spot! &nbsp;&nbsp;|
            </span>
            <span>
              🚀 Become an Air Hostess | 🎓 Up to ₹50,000 Scholarship Available | ✈️ 10,000+ Students Trained | ⏳ Limited seats — apply now to secure your spot! &nbsp;&nbsp;|
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
            <Link
              to="/"
              onClick={() => {
                setIsMobileMenuOpen(false);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="flex items-center focus:outline-none"
              aria-label="Amigo Academy Home"
            >
              <img src={logo} alt="Amigo Academy Logo" className="h-20 sm:h-24 lg:h-[88px] w-auto object-contain py-1" />
            </Link>

            {/* Desktop Links */}
            <nav className="hidden md:flex items-center space-x-5 text-[#1e293b] font-sans font-semibold text-sm">
              {/* Courses Dropdown Link */}
              <div
                className="relative group"
                onMouseEnter={() => setIsCoursesDropdownOpen(true)}
                onMouseLeave={() => setIsCoursesDropdownOpen(false)}
              >
                <Link
                  to="/courses"
                  onClick={() => {
                    setIsCoursesDropdownOpen(false);
                    setIsMobileMenuOpen(false);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className={`flex items-center gap-1 hover:text-[#e31e24] transition-colors py-2 focus:outline-none ${location.pathname.startsWith("/courses") ? "text-[#e31e24]" : ""}`}
                >
                  Courses
                  <svg className={`w-3.5 h-3.5 transition-transform duration-200 ${isCoursesDropdownOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </Link>

                {/* Dropdown Box with bridge padding to prevent hover flicker */}
                {isCoursesDropdownOpen && (
                  <div className="absolute left-0 top-full pt-1 z-50 animate-fadeIn">
                    <div className="w-64 bg-white rounded-xl shadow-xl border border-neutral-100 py-3">
                      {courses.map((course, idx) => (
                        <Link
                          key={idx}
                          to={course.path as any}
                          onClick={() => {
                            setIsCoursesDropdownOpen(false);
                            setIsMobileMenuOpen(false);
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                          className="w-full text-left px-4 py-2 hover:bg-neutral-50 flex flex-col group/item transition-colors"
                        >
                          <span className="text-xs font-bold text-neutral-800 group-hover/item:text-[#e31e24]">{course.name}</span>
                          <span className="text-[10px] text-neutral-400">{course.desc}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <span className="text-neutral-300 font-normal">|</span>

              <Link
                to="/placement"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className={`hover:text-[#e31e24] transition-colors py-2 ${location.pathname === "/placement" ? "text-[#e31e24]" : ""}`}
              >
                Placements
              </Link>

              <span className="text-neutral-300 font-normal">|</span>

              <Link
                to="/scholarship"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className={`hover:text-[#e31e24] transition-colors py-2 ${location.pathname === "/scholarship" ? "text-[#e31e24]" : ""}`}
              >
                Scholarships
              </Link>

              <span className="text-neutral-300 font-normal">|</span>

              <Link
                to="/branches"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className={`hover:text-[#e31e24] transition-colors py-2 ${location.pathname === "/branches" ? "text-[#e31e24]" : ""}`}
              >
                Branches
              </Link>

              <span className="text-neutral-300 font-normal">|</span>

              <Link
                to="/franchise"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className={`hover:text-[#e31e24] transition-colors py-2 ${location.pathname === "/franchise" ? "text-[#e31e24]" : ""}`}
              >
                Franchise
              </Link>
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
              <Link
                to="/courses"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="text-left w-full focus:outline-none block"
              >
                <span className="text-neutral-400 text-xs uppercase tracking-wider block mb-2 hover:text-[#e31e24] cursor-pointer">Our Courses</span>
              </Link>
              {courses.map((course, idx) => (
                <Link
                  key={idx}
                  to={course.path as any}
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="w-full text-left py-1.5 text-sm text-neutral-700 hover:text-[#e31e24] block"
                >
                  • {course.name}
                </Link>
              ))}
            </div>

            <Link
              to="/placement"
              onClick={() => {
                setIsMobileMenuOpen(false);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="text-left py-1 hover:text-[#e31e24] border-b border-neutral-100"
            >
              Placements
            </Link>
            <Link
              to="/scholarship"
              onClick={() => {
                setIsMobileMenuOpen(false);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="text-left py-1 hover:text-[#e31e24] border-b border-neutral-100"
            >
              Scholarships
            </Link>
            <Link
              to="/branches"
              onClick={() => {
                setIsMobileMenuOpen(false);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="text-left py-1 hover:text-[#e31e24] border-b border-neutral-100"
            >
              Branches
            </Link>

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
        source={modalSource}
      />
    </header>
  );
}

