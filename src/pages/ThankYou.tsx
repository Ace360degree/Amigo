import React from "react";
import logo from "../assets/img/logo.png";

export default function ThankYou() {
  return (
    <div className="min-h-screen bg-[#001D4A] flex flex-col items-center justify-center p-6 text-center relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-red-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-4xl w-full relative z-10 animate-in fade-in zoom-in duration-700">
        {/* Airplane Icon */}
        <div className="mb-10 flex justify-center">
          <div className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide w-20 h-20 text-blue-300 stroke-[1.5] rotate-45 lucide-plane-icon lucide-plane"
              aria-hidden="true"
            >
              <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"></path>
            </svg>
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-red-500 rounded-full animate-ping"></div>
          </div>
        </div>

        {/* Headline */}
        <h1 className="text-3xl md:text-6xl font-black text-white mb-6 leading-[1.1] font-heading tracking-tight">
          You are on your way to an amazing career!
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-2xl text-white/70 font-medium mb-12 leading-relaxed max-w-3xl mx-auto">
          Our counsellor will call you within 10 minutes with your personalised course details and scholarship options. Keep your phone nearby.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <a
            href="https://wa.me/919987588932"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto bg-[#25D366] text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-[#1ebd5b] transition-all shadow-[0_20px_50px_rgba(37,211,102,0.2)] active:scale-95"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide w-5 h-5 lucide-message-square-icon lucide-message-square"
              aria-hidden="true"
            >
              <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path>
            </svg>
            Chat on WhatsApp
          </a>

          <a
            href="tel:+919987588932"
            className="w-full md:w-auto bg-indigo-600 text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-indigo-700 transition-all shadow-[0_20px_50px_rgba(79,70,229,0.2)] active:scale-95"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide w-5 h-5 lucide-phone-icon lucide-phone"
              aria-hidden="true"
            >
              <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path>
            </svg>
            Call Counsellor
          </a>
        </div>

        {/* Footer text */}
        <p className="mt-12 text-white/30 text-[11px] font-black uppercase tracking-[0.3em]">
          Amigo Academy • Empowering Futures
        </p>
      </div>

      {/* Logo */}
      <div className="mt-20 opacity-20 hover:opacity-40 transition-all duration-500">
        <img src={logo} alt="Amigo Academy" className="h-10 grayscale brightness-200" />
      </div>
    </div>
  );
}
