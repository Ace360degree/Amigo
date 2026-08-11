import React from "react";
import logofooter from "../assets/img/logofooter.png";
import FooterQR from "../assets/img/FooterQR.png";

interface FooterProps {
  setCurrentPage: (page: string) => void;
}

export default function Footer({ setCurrentPage }: FooterProps) {
  const handleNavClick = (pageId: string) => {
    setCurrentPage(pageId);
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
              onClick={() => handleNavClick("home")}
              className="flex items-center focus:outline-none w-fit"
              aria-label="Amigo Academy Home"
            >
              <img src={logofooter} alt="Amigo Academy Logo" className="h-9 sm:h-12 w-auto object-contain" />
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
              onClick={() => handleNavClick("about")}
              className="text-white hover:text-[#e31e24] font-bold text-xs w-fit text-left focus:outline-none"
            >
              Read More
            </button>
          </div>

          {/* Links Col 1: Home */}
          <div className="lg:col-span-2 flex flex-col space-y-4 text-left">
            <h4 className="text-white font-sans font-bold text-sm tracking-wide border-l-2 border-[#e31e24] pl-2.5">
              Home
            </h4>
            <nav className="flex flex-col space-y-2.5 text-xs sm:text-sm text-slate-400">
              <button onClick={() => handleNavClick("about")} className="text-left hover:text-white transition-colors w-fit">About us</button>
              <button onClick={() => handleNavClick("about")} className="text-left hover:text-white transition-colors w-fit">Placements</button>
              <button onClick={() => handleNavClick("services")} className="text-left hover:text-white transition-colors w-fit">Scholarships</button>
              <button onClick={() => handleNavClick("contact")} className="text-left hover:text-white transition-colors w-fit">Franchise</button>
              <button onClick={() => handleNavClick("home")} className="text-left hover:text-white transition-colors w-fit">Blog</button>
              <button onClick={() => handleNavClick("home")} className="text-left hover:text-white transition-colors w-fit">Gallery</button>
              <button onClick={() => handleNavClick("about")} className="text-left hover:text-white transition-colors w-fit">Amigo Student Success</button>
              <button onClick={() => handleNavClick("contact")} className="text-left hover:text-white transition-colors w-fit">Login</button>
              <button onClick={() => handleNavClick("contact")} className="text-left hover:text-white transition-colors w-fit">Signup</button>
            </nav>
          </div>

          {/* Links Col 2: Courses */}
          <div className="lg:col-span-2 flex flex-col space-y-4 text-left">
            <h4 className="text-white font-sans font-bold text-sm tracking-wide border-l-2 border-[#e31e24] pl-2.5">
              Courses
            </h4>
            <nav className="flex flex-col space-y-2.5 text-xs sm:text-sm text-slate-400">
              <button onClick={() => handleNavClick("services")} className="text-left hover:text-white transition-colors w-fit">Cabin Crew</button>
              <button onClick={() => handleNavClick("services")} className="text-left hover:text-white transition-colors w-fit">Airport Ground Staff</button>
              <button onClick={() => handleNavClick("services")} className="text-left hover:text-white transition-colors w-fit">AI & Data Science</button>
            </nav>
          </div>

          {/* Links Col 3: Career Guides */}
          <div className="lg:col-span-2 flex flex-col space-y-4 text-left">
            <h4 className="text-white font-sans font-bold text-sm tracking-wide border-l-2 border-[#e31e24] pl-2.5">
              Career Guides
            </h4>
            <nav className="flex flex-col space-y-2.5 text-xs sm:text-sm text-slate-400">
              <button onClick={() => handleNavClick("services")} className="text-left hover:text-white transition-colors w-fit">Cabin Crew</button>
              <button onClick={() => handleNavClick("services")} className="text-left hover:text-white transition-colors w-fit">Airport Ground Staff</button>
              <button onClick={() => handleNavClick("services")} className="text-left hover:text-white transition-colors w-fit">AI & Data Science</button>
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
          <div className="flex items-start space-x-3">
            <span className="text-[#e31e24] text-lg sm:text-xl pt-0.5">📍</span>
            <div className="flex flex-col space-y-1">
              <h5 className="text-white font-sans font-bold uppercase tracking-wider">
                Mumbai Ghatkopar
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
          </div>

          {/* Branch 2 */}
          <div className="flex items-start space-x-3">
            <span className="text-[#e31e24] text-lg sm:text-xl pt-0.5">📍</span>
            <div className="flex flex-col space-y-1">
              <h5 className="text-white font-sans font-bold uppercase tracking-wider">
                Mumbai Andheri
              </h5>
              <p className="text-slate-400 leading-relaxed">
                902, 9th Floor, Time Chambers,<br />
                Swami Vivekanand Rd,<br />
                Andheri West, Mumbai 400058
              </p>
            </div>
          </div>

          {/* Branch 3 */}
          <div className="flex items-start space-x-3">
            <span className="text-[#e31e24] text-lg sm:text-xl pt-0.5">📍</span>
            <div className="flex flex-col space-y-1">
              <h5 className="text-white font-sans font-bold uppercase tracking-wider">
                Thane
              </h5>
              <p className="text-slate-400 leading-relaxed">
                A204, 2nd floor, Thakor Niwas<br />
                CHS, above Tip Top Mithaiwala,<br />
                Jambli Naka, Opp Railway Station,<br />
                Thane West, Maharashtra 400601
              </p>
            </div>
          </div>

        </div>

        {/* Bottom copyright & Socials */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500">
          {/* Social Links */}
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <span className="text-slate-400 font-sans font-bold uppercase tracking-wider mr-2">Get Social</span>

            {/* Facebook */}
            <a href="https://www.facebook.com/share/1dUEaqYi4g/" target="_blank" rel="noreferrer" className="w-7 h-7 rounded-full border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white hover:border-white transition-colors" aria-label="Facebook">
              <svg className="w-3.5 h-3.5 fill-currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
              </svg>
            </a>

            {/* Instagram */}
            <a href="https://www.instagram.com/amigo_academy?igsh=MXVyOGR3Y3lid3RsMg==" target="_blank" rel="noreferrer" className="w-7 h-7 rounded-full border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white hover:border-white transition-colors" aria-label="Instagram">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
          </div>

          {/* Middle Policy Links */}
          <div className="flex space-x-6 mb-4 md:mb-0 text-slate-400 font-semibold">
            <button onClick={() => handleNavClick("about")} className="hover:text-white transition-colors">Privacy Policy</button>
            <button onClick={() => handleNavClick("about")} className="hover:text-white transition-colors">Terms & Conditions</button>
            <button onClick={() => handleNavClick("about")} className="hover:text-white transition-colors">Sitemap</button>
          </div>

          {/* Copyright text */}
          <p className="text-slate-500">
            &copy; 2024 Amigo Academy. All Rights Reserved
          </p>
        </div>

      </div>
    </footer>
  );
}