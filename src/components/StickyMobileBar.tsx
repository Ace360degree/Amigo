import React from "react";

export default function StickyMobileBar() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 w-full bg-white border-t-2 border-[#0b2f61] shadow-[0_-6px_25px_rgba(0,0,0,0.15)]">
      <div className="grid grid-cols-3 w-full h-[65px]">
        {/* Call Now Button */}
        <a
          href="tel:+919987588932"
          className="flex flex-col items-center justify-center bg-white border-r border-slate-200 active:bg-slate-50 transition-colors py-1 focus:outline-none"
        >
          {/* Solid Phone Receiver Icon */}
          <svg className="w-6 h-6 text-[#0b2f61] fill-current" viewBox="0 0 24 24">
            <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1.003 1.003 0 011.02-.24c1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
          </svg>
          <span className="text-[12.5px] font-extrabold text-[#0b2f61] leading-tight mt-1 font-outfit tracking-wide">
            Call Now
          </span>
        </a>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/919987588932"
          target="_blank"
          rel="noreferrer"
          className="flex flex-col items-center justify-center bg-white border-r border-slate-200 active:bg-slate-50 transition-colors py-1 focus:outline-none"
        >
          {/* WhatsApp Brand Icon */}
          <svg className="w-6 h-6 text-[#22c55e] fill-current" viewBox="0 0 24 24">
            <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984 0 1.764.459 3.486 1.332 5.001l-1.416 5.17 5.293-1.388c1.46.797 3.109 1.217 4.781 1.218h.004c5.505 0 9.987-4.479 9.988-9.986 0-2.667-1.037-5.175-2.923-7.062a9.923 9.923 0 0 0-7.069-2.937zm5.882 14.398c-.247.694-1.228 1.288-1.996 1.455-.525.114-1.211.205-3.518-.75-2.954-1.222-4.857-4.223-5.004-4.419-.147-.196-1.199-1.597-1.199-3.045 0-1.448.756-2.161 1.026-2.455.27-.294.589-.368.785-.368.196 0 .392.001.564.01.182.009.428-.069.67.511.247.592.834 2.036.907 2.183.074.147.123.319.025.515-.098.196-.147.319-.294.49-.147.172-.309.384-.442.516-.147.147-.301.308-.13.602.172.294.764 1.261 1.639 2.04 1.127 1.002 2.077 1.312 2.371 1.459.294.147.466.123.638-.074.172-.196.736-.858.932-1.152.196-.294.392-.245.662-.147.27.098 1.716.81 2.01 1.006.294.196.49.294.564.417.074.123.074.717-.173 1.411z" />
          </svg>
          <span className="text-[12.5px] font-extrabold text-[#22c55e] leading-tight mt-1 font-outfit tracking-wide">
            WhatsApp
          </span>
        </a>

        {/* Apply Now Button */}
        <button
          onClick={() => window.dispatchEvent(new CustomEvent("openEligibilityModal"))}
          className="flex flex-col items-center justify-center bg-[#e31e24] active:bg-[#c2141a] transition-colors py-1 focus:outline-none cursor-pointer"
        >
          {/* User-Plus Solid / Bold Icon */}
          <svg className="w-6 h-6 text-white fill-current" viewBox="0 0 24 24">
            <path d="M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm-9-2V7H4v3H1v2h3v3h2v-3h3v-2H6zm9 4c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
          </svg>
          <span className="text-[12.5px] font-extrabold text-white leading-tight mt-1 font-outfit tracking-wide">
            Apply Now
          </span>
        </button>
      </div>
    </div>
  );
}
