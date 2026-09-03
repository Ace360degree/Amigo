import React, { useState } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import logofooter from "../assets/img/logofooter.png";
import FooterQR from "../assets/img/FooterQR.png";

export default function Footer() {
  const navigate = useNavigate();
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);

  const handleNavClick = (path: string) => {
    navigate({ to: path as any });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#132238] text-slate-300 font-sans pt-16 pb-8 border-t border-blue-950/40">
      <div className="max-w-7xl mx-auto px-6">

        {/* Main Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-700/30">

          {/* Brand Col */}
          <div className="lg:col-span-4 flex flex-col space-y-5 text-left">
            {/* Logo */}
            <button
              onClick={() => handleNavClick("/")}
              className="flex items-center focus:outline-none w-fit"
              aria-label="Amigo Academy Home"
            >
              <img src={logofooter} alt="Amigo Academy Logo" className="h-16 sm:h-20 w-auto object-contain" />
            </button>

            {/* Contacts */}
            <div className="flex flex-col space-y-3 pt-2 text-sm text-slate-200">
              <a href="tel:+919987588932" className="flex items-center space-x-3 group w-fit">
                <span className="w-8 h-8 rounded-full border border-slate-700/60 flex items-center justify-center text-slate-300 group-hover:text-white group-hover:border-white transition-all">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </span>
                <span className="font-semibold group-hover:text-white transition-colors">+919987588932</span>
              </a>

              <a href="mailto:care@amigoacademy.in" className="flex items-center space-x-3 group w-fit">
                <div className="w-8 h-8 rounded-full bg-[#112340] flex items-center justify-center text-[#e31e24] group-hover:scale-110 transition-transform">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="font-semibold group-hover:text-white transition-colors text-xs sm:text-sm">care@amigoacademy.in</span>
              </a>
            </div>

            {/* Paragraph Text */}
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-xs pt-1">
              Founded in 2017, Amigo Academy Pvt Ltd has been envisaged as an academy steadily committed to delivering holistic training concepts across aviation, hospitality, and technology sectors.
            </p>
            <button
              onClick={() => handleNavClick("/about-us")}
              className="text-white hover:text-[#e31e24] font-bold text-xs w-fit text-left focus:outline-none"
            >
              Read More
            </button>
          </div>

          {/* Links Col 1: Home */}
          <div className="lg:col-span-2 flex flex-col space-y-4 text-left">
            <h4 className="text-white font-sans font-bold text-sm tracking-wide border-l-2 border-[#e31e24] pl-2.5">
              Quick Links
            </h4>
            <nav className="flex flex-col space-y-2.5 text-xs sm:text-sm text-slate-400">
              <button onClick={() => handleNavClick("/about-us")} className="text-left hover:text-white transition-colors w-fit">About us</button>
              <button onClick={() => handleNavClick("/placement")} className="text-left hover:text-white transition-colors w-fit">Placements</button>
              <button onClick={() => handleNavClick("/scholarship")} className="text-left hover:text-white transition-colors w-fit">Scholarships</button>
              <button onClick={() => handleNavClick("/branches")} className="text-left hover:text-white transition-colors w-fit">Branches</button>
              <button onClick={() => handleNavClick("/franchise")} className="text-left hover:text-white transition-colors w-fit">Franchise</button>
              <button onClick={() => handleNavClick("/blog")} className="text-left hover:text-white transition-colors w-fit">Blog</button>
              <button onClick={() => handleNavClick("/gallery")} className="text-left hover:text-white transition-colors w-fit">Gallery</button>
              <button onClick={() => handleNavClick("/student-success")} className="text-left hover:text-white transition-colors w-fit">Amigo Student Success</button>
              <button onClick={() => handleNavClick("/contact")} className="text-left hover:text-white transition-colors w-fit">Contact Us</button>
              <button onClick={() => handleNavClick("/locations")} className="text-left hover:text-white transition-colors w-fit">Locations</button>

              {/* Online Payment Collapsible Menu */}
              <div className="flex flex-col space-y-1.5 pt-1">
                <button
                  onClick={() => setIsPaymentOpen(!isPaymentOpen)}
                  className="flex items-center justify-between text-left hover:text-white transition-colors w-fit gap-1.5 focus:outline-none cursor-pointer"
                >
                  <span>Online Payment</span>
                  <svg className={`w-3 h-3 transition-transform duration-200 ${isPaymentOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </button>
                {isPaymentOpen && (
                  <div className="flex flex-col space-y-2 pl-3 border-l border-slate-700 mt-1">
                    <a href="https://pages.razorpay.com/amigoacademypayment" target="_blank" rel="noreferrer" className="hover:text-white transition-colors text-xs w-fit">Razorpay</a>
                    <a href="https://www.instamojo.com/@amigoairacademy/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors text-xs w-fit">Instamojo</a>
                  </div>
                )}
              </div>
            </nav>
          </div>

          {/* Links Col 2: Courses */}
          <div className="lg:col-span-2 flex flex-col space-y-4 text-left">
            <h4 className="text-white font-sans font-bold text-sm tracking-wide border-l-2 border-[#e31e24] pl-2.5">
              Courses
            </h4>
            <nav className="flex flex-col space-y-2.5 text-xs sm:text-sm text-slate-400">
              <button onClick={() => handleNavClick("/courses/air-hostess-cabin-crew-hospitality-management")} className="text-left hover:text-white transition-colors w-fit">Cabin Crew (Air Hostess) & Hospitality Management</button>
              <button onClick={() => handleNavClick("/courses/airport-ground-staff-hospitality-management")} className="text-left hover:text-white transition-colors w-fit">Airport Ground Staff & Hospitality Management</button>
              <button onClick={() => handleNavClick("/courses/ai-data-science-with-generative-ai-machine-learning")} className="text-left hover:text-white transition-colors w-fit">AI & Data Science</button>
              <button onClick={() => handleNavClick("/courses")} className="text-left hover:text-white transition-colors w-fit">All Courses</button>
            </nav>
          </div>

          {/* Links Col 3: Career Guides */}
          <div className="lg:col-span-2 flex flex-col space-y-4 text-left">
            <h4 className="text-white font-sans font-bold text-sm tracking-wide border-l-2 border-[#e31e24] pl-2.5">
              Career Guides
            </h4>
            <nav className="flex flex-col space-y-2.5 text-xs sm:text-sm text-slate-400">
              <button onClick={() => handleNavClick("/career-guide/cabin-crew")} className="text-left hover:text-white transition-colors w-fit">Cabin Crew Career Guide</button>
              <button onClick={() => handleNavClick("/career-guide/airport-ground-staff")} className="text-left hover:text-white transition-colors w-fit">Airport Ground Staff Career Guide</button>
              <button onClick={() => handleNavClick("/career-guide/ai-data-science")} className="text-left hover:text-white transition-colors w-fit">AI & Data Science Career Guide</button>
              <button onClick={() => handleNavClick("/career-guides")} className="text-left hover:text-white transition-colors w-fit">All Career Guides</button>
            </nav>
          </div>

          {/* QR Code Col */}
          <div className="lg:col-span-2 flex flex-col space-y-3.5 items-start text-left">
            <h4 className="text-white font-sans font-bold text-xs tracking-wider uppercase leading-snug">
              Scan & Pre Register<br />For Seminar
            </h4>
            {/* Footer QR Image */}
            <button
              type="button"
              onClick={() => window.dispatchEvent(new CustomEvent("openSeminarModal"))}
              className="bg-white p-2 rounded-xl border border-slate-700/50 shadow-md hover:scale-105 transition-transform cursor-pointer group text-left"
              title="Click to open Seminar Form"
            >
              <img
                src={FooterQR}
                alt="Scan & Pre Register QR Code"
                className="w-28 h-28 sm:w-32 sm:h-32 object-contain"
              />
            </button>
          </div>

        </div>

        {/* Branches Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12 border-b border-slate-700/30 text-left text-xs sm:text-sm">

          {/* Branch 1 */}
          <button
            onClick={() => handleNavClick("/ghatkopar-branch")}
            className="flex items-start space-x-3 text-left group cursor-pointer focus:outline-none"
          >
            <span className="text-[#e31e24] text-lg sm:text-xl pt-0.5 group-hover:scale-110 transition-transform">📍</span>
            <div className="flex flex-col space-y-1">
              <h5 className="text-white font-sans font-bold uppercase tracking-wider group-hover:text-[#e31e24] transition-colors">
                Ghatkopar Branch
              </h5>
              {/* <p className="text-slate-400 leading-relaxed font-semibold">
                AMIGO ACADEMY GHATKOPAR
              </p> */}
              <p className="text-slate-400 leading-relaxed">
                107 & 108, Sai Infotech, Patel Chowk,<br />
                Opposite Railway Station, Pant Nagar,<br />
                Ghatkopar East, Mumbai, Maharashtra 400077
              </p>
            </div>
          </button>

          {/* Branch 2 */}
          <button
            onClick={() => handleNavClick("/andheri-branch")}
            className="flex items-start space-x-3 text-left group cursor-pointer focus:outline-none"
          >
            <span className="text-[#e31e24] text-lg sm:text-xl pt-0.5 group-hover:scale-110 transition-transform">📍</span>
            <div className="flex flex-col space-y-1">
              <h5 className="text-white font-sans font-bold uppercase tracking-wider group-hover:text-[#e31e24] transition-colors">
                Andheri Branch
              </h5>
              <p className="text-slate-400 leading-relaxed">
                902, 9th Floor, Time Chambers,<br />
                Swami Vivekanand Rd,<br />
                Andheri West, Mumbai 400058
              </p>
            </div>
          </button>

          {/* Branch 3 */}
          <button
            onClick={() => handleNavClick("/thane-branch")}
            className="flex items-start space-x-3 text-left group cursor-pointer focus:outline-none"
          >
            <span className="text-[#e31e24] text-lg sm:text-xl pt-0.5 group-hover:scale-110 transition-transform">📍</span>
            <div className="flex flex-col space-y-1">
              <h5 className="text-white font-sans font-bold uppercase tracking-wider group-hover:text-[#e31e24] transition-colors">
                Thane Branch
              </h5>
              <p className="text-slate-400 leading-relaxed">
                3rd Floor, Above McDonald's,<br />
                Opp Railway Station,<br />
                Thane West, Maharashtra 400601
              </p>
            </div>
          </button>

        </div>

        {/* Bottom copyright & Socials */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500">
          {/* Social Links */}
          <div className="flex items-center space-x-6 mb-4 md:mb-0">
            {/* Facebook */}
            <a href="https://www.facebook.com/share/1dUEaqYi4g/" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors" aria-label="Facebook">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
              </svg>
            </a>

            {/* Instagram */}
            <a href="https://www.instagram.com/amigozacademy" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors" aria-label="Instagram">
              <svg className="w-5 h-5 fill-none stroke-current" strokeWidth={2} viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>

            {/* YouTube */}
            <a href="https://www.youtube.com/@amigoacademy6050" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors" aria-label="YouTube">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a href="https://www.linkedin.com/company/amigo-academy" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors" aria-label="LinkedIn">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
              </svg>
            </a>
          </div>

          {/* Middle Policy Links */}
          <div className="flex space-x-6 mb-4 md:mb-0 text-slate-400 font-semibold">
            <button onClick={() => handleNavClick("/privacy-policy")} className="hover:text-white transition-colors">Privacy Policy</button>
            <button onClick={() => handleNavClick("/terms-and-conditions")} className="hover:text-white transition-colors">Terms & Conditions</button>
            <button onClick={() => handleNavClick("/refund-policy")} className="hover:text-white transition-colors">Refund Policy</button>
          </div>

          <p className="text-slate-500">
            &copy; 2026 Amigo Academy Pvt Ltd. All Rights Reserved | Designed and Managed by{" "}
            <a
              href="https://www.ace360degree.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white underline transition-colors"
            >
              Ace 360⁰ Digital Marketing Agency
            </a>
          </p>
        </div>

      </div>

      {/* Floating Scroll-to-Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-20 right-5 md:bottom-6 md:right-6 z-[9999] bg-[#e31e24] hover:bg-[#c2141a] text-white w-11 h-11 md:w-12 md:h-12 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 active:scale-90 flex items-center justify-center border border-white/20 focus:outline-none cursor-pointer group"
        aria-label="Scroll back to top"
      >
        <svg className="w-5 h-5 transition-transform duration-200 group-hover:-translate-y-0.5" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
        </svg>
      </button>

      {/* Floating WhatsApp Button for Desktop/Tablet */}
      <a
        href="https://wa.me/919987588932"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-[162px] right-6 z-[9999] hidden md:flex bg-[#25d366] hover:bg-[#20ba5a] text-white w-[60px] h-[60px] rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 active:scale-90 items-center justify-center border border-white/20 focus:outline-none cursor-pointer group"
        aria-label="Chat on WhatsApp"
      >
        <svg className="w-8 h-8 transition-transform duration-200 group-hover:scale-110 fill-current" viewBox="0 0 24 24">
          <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984 0 1.764.459 3.486 1.332 5.001l-1.416 5.17 5.293-1.388c1.46.797 3.109 1.217 4.781 1.218h.004c5.505 0 9.987-4.479 9.988-9.986 0-2.667-1.037-5.175-2.923-7.062a9.923 9.923 0 0 0-7.069-2.937zm5.882 14.398c-.247.694-1.228 1.288-1.996 1.455-.525.114-1.211.205-3.518-.75-2.954-1.222-4.857-4.223-5.004-4.419-.147-.196-1.199-1.597-1.199-3.045 0-1.448.756-2.161 1.026-2.455.27-.294.589-.368.785-.368.196 0 .392.001.564.01.182.009.428-.069.67.511.247.592.834 2.036.907 2.183.074.147.123.319.025.515-.098.196-.147.319-.294.49-.147.172-.309.384-.442.516-.147.147-.301.308-.13.602.172.294.764 1.261 1.639 2.04 1.127 1.002 2.077 1.312 2.371 1.459.294.147.466.123.638-.074.172-.196.736-.858.932-1.152.196-.294.392-.245.662-.147.27.098 1.716.81 2.01 1.006.294.196.49.294.564.417.074.123.074.717-.173 1.411z" />
        </svg>
      </a>
    </footer>
  );
}