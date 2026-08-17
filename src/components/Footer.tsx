import React from "react";
import { useNavigate } from "react-router-dom";
import logofooter from "../assets/img/logofooter.png";
import FooterQR from "../assets/img/FooterQR.png";

export default function Footer() {
  const navigate = useNavigate();

  const handleNavClick = (path: string) => {
    navigate(path);
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

              <a href="mailto:info@amigoacademy.in" className="flex items-center space-x-3 group w-fit">
                <span className="w-8 h-8 rounded-full border border-slate-700/60 flex items-center justify-center text-slate-300 group-hover:text-white group-hover:border-white transition-all">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <span className="font-semibold group-hover:text-white transition-colors text-xs sm:text-sm">info@amigoacademy.in</span>
              </a>
            </div>

            {/* Paragraph Text */}
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-xs pt-1">
              Founded in 2017, Amigo Academy has been envisaged as an academy steadily committed to delivering holistic training co...
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
              Navigation
            </h4>
            <nav className="flex flex-col space-y-2.5 text-xs sm:text-sm text-slate-400">
              <button onClick={() => handleNavClick("/about-us")} className="text-left hover:text-white transition-colors w-fit">About us</button>
              <button onClick={() => handleNavClick("/placement")} className="text-left hover:text-white transition-colors w-fit">Placements</button>
              <button onClick={() => handleNavClick("/scholarship")} className="text-left hover:text-white transition-colors w-fit">Scholarships</button>
              <button onClick={() => handleNavClick("/franchise")} className="text-left hover:text-white transition-colors w-fit">Franchise</button>
              <button onClick={() => handleNavClick("/blog")} className="text-left hover:text-white transition-colors w-fit">Blog</button>
              <button onClick={() => handleNavClick("/gallery")} className="text-left hover:text-white transition-colors w-fit">Gallery</button>
              <button onClick={() => handleNavClick("/student-success")} className="text-left hover:text-white transition-colors w-fit">Amigo Student Success</button>
              <button onClick={() => handleNavClick("/contact")} className="text-left hover:text-white transition-colors w-fit">Contact Us</button>
            </nav>
          </div>

          {/* Links Col 2: Courses */}
          <div className="lg:col-span-2 flex flex-col space-y-4 text-left">
            <h4 className="text-white font-sans font-bold text-sm tracking-wide border-l-2 border-[#e31e24] pl-2.5">
              Courses
            </h4>
            <nav className="flex flex-col space-y-2.5 text-xs sm:text-sm text-slate-400">
              <button onClick={() => handleNavClick("/courses")} className="text-left hover:text-white transition-colors w-fit">Aviation & Hospitality Management</button>
              <button onClick={() => handleNavClick("/courses/air-hostess-cabin-crew-hospitality-management")} className="text-left hover:text-white transition-colors w-fit">Air Hostess / Cabin Crew</button>
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
              <button onClick={() => handleNavClick("/career-guide/cabin-crew")} className="text-left hover:text-white transition-colors w-fit">Cabin Crew</button>
              <button onClick={() => handleNavClick("/career-guide/airport-ground-staff")} className="text-left hover:text-white transition-colors w-fit">Airport Ground Staff</button>
              <button onClick={() => handleNavClick("/career-guide/ai-data-science")} className="text-left hover:text-white transition-colors w-fit">AI & Data Science</button>
              <button onClick={() => handleNavClick("/career-guides")} className="text-left hover:text-white transition-colors w-fit">All Career Guides</button>
            </nav>
          </div>

          {/* QR Code Col */}
          <div className="lg:col-span-2 flex flex-col space-y-3.5 items-start text-left">
            <h4 className="text-white font-sans font-bold text-xs tracking-wider uppercase leading-snug">
              Scan & Pre Register<br />For Seminar
            </h4>
            {/* Footer QR Image */}
            <div className="bg-white p-2 rounded-xl border border-slate-700/50 shadow-md">
              <img
                src={FooterQR}
                alt="Scan & Pre Register QR Code"
                className="w-28 h-28 sm:w-32 sm:h-32 object-contain"
              />
            </div>
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
                Mumbai Ghatkopar (Head Office)
              </h5>
              <p className="text-slate-400 leading-relaxed font-semibold">
                AMIGO ACADEMY GHATKOPAR
              </p>
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
                Mumbai Andheri Branch
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
            <a href="https://www.instagram.com/amigo_academy?igsh=MXVyOGR3Y3lid3RsMg==" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors" aria-label="Instagram">
              <svg className="w-5 h-5 fill-none stroke-current" strokeWidth={2} viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>

            {/* X (formerly Twitter) */}
            <a href="https://x.com/amigo_academy" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors" aria-label="X (Twitter)">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a href="https://www.linkedin.com/company/amigo-academy" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors" aria-label="LinkedIn">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
              </svg>
            </a>
          </div>

          {/* Middle Policy Links */}
          <div className="flex space-x-6 mb-4 md:mb-0 text-slate-400 font-semibold">
            <button onClick={() => handleNavClick("/privacy-policy")} className="hover:text-white transition-colors">Privacy Policy</button>
            <button onClick={() => handleNavClick("/terms-and-conditions")} className="hover:text-white transition-colors">Terms & Conditions</button>
            <button onClick={() => handleNavClick("/refund-policy")} className="hover:text-white transition-colors">Refund Policy</button>
          </div>

          {/* Copyright text */}
          <p className="text-slate-500">
            &copy; 2024 Amigo Academy. All Rights Reserved
          </p>
        </div>

      </div>

      {/* Floating Scroll-to-Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 z-50 bg-[#e31e24] hover:bg-[#c2141a] text-white p-3.5 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 active:scale-90 flex items-center justify-center border border-white/20 focus:outline-none cursor-pointer group"
        aria-label="Scroll back to top"
      >
        <svg className="w-5 h-5 transition-transform duration-200 group-hover:-translate-y-0.5" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
        </svg>
      </button>
    </footer>
  );
}