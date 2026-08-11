import React from "react";

export default function PageLoader() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white/95 backdrop-blur-md transition-opacity duration-300">
      {/* Top glowing progress bar */}
      <div className="absolute top-0 left-0 h-1 bg-gradient-to-r from-[#DF1818] via-[#1C3E8A] to-[#DF1818] w-full animate-[topProgressBar_1.2s_ease-in-out_infinite]" />

      {/* Center Spinner & Brand Pulse */}
      <div className="flex flex-col items-center justify-center space-y-4 p-8 rounded-2xl">
        <div className="relative w-16 h-16 flex items-center justify-center">
          {/* Outer Rotating Ring */}
          <div className="absolute inset-0 rounded-full border-4 border-slate-100 border-t-[#DF1818] border-r-[#1C3E8A] animate-spin" />
          
          {/* Inner Glowing Core */}
          <div className="w-8 h-8 bg-[#1C3E8A] rounded-full animate-pulse flex items-center justify-center shadow-lg shadow-blue-900/30">
            <span className="text-white text-[10px] font-black font-outfit">A</span>
          </div>
        </div>

        <div className="text-center space-y-1">
          <p className="text-[#1C3E8A] font-outfit font-extrabold text-sm tracking-wider uppercase animate-pulse">
            Loading Experience...
          </p>
          <p className="text-slate-400 font-sans text-xs font-semibold">
            Amigo Academy
          </p>
        </div>
      </div>
    </div>
  );
}
