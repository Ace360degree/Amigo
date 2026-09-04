import process from 'node:process';globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import { jsxs, jsx } from 'react/jsx-runtime';
import { useState } from 'react';
import { Link } from '@tanstack/react-router';

const heroScholarship = "/assets/heroscholarship-BY6Ijugj.png";
function FAQItem({ index, question, answer }) {
  const [isOpen, setIsOpen] = useState(false);
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: `bg-white border rounded-3xl overflow-hidden transition-all duration-300 ${isOpen ? "border-neutral-200 shadow-[0_8px_30px_rgba(0,0,0,0.04)]" : "border-neutral-200/80 shadow-sm"}`,
      children: [
        /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: () => setIsOpen(!isOpen),
            className: "w-full flex items-center justify-between px-6 py-5 text-left cursor-pointer group",
            children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-4", children: [
                /* @__PURE__ */ jsx(
                  "div",
                  {
                    className: `w-8 h-8 rounded-full flex items-center justify-center font-sans font-bold text-xs shrink-0 transition-colors duration-300 ${isOpen ? "bg-[#0b2f61] text-white" : "bg-[#f0f4f9] text-[#0b2f61]"}`,
                    children: index
                  }
                ),
                /* @__PURE__ */ jsx("span", { className: "text-sm sm:text-[15px] font-sans font-bold text-[#0b2f61] pr-4", children: question })
              ] }),
              /* @__PURE__ */ jsx(
                "svg",
                {
                  className: `w-5 h-5 text-neutral-400 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`,
                  fill: "none",
                  viewBox: "0 0 24 24",
                  stroke: "currentColor",
                  strokeWidth: 2,
                  children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M19 9l-7 7-7-7" })
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: `overflow-hidden transition-all duration-300 ${isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"}`,
            children: /* @__PURE__ */ jsx("div", { className: "px-6 pb-6 pt-2", children: /* @__PURE__ */ jsx("div", { className: "border-l-2 border-[#0b2f61] pl-4 py-1", children: /* @__PURE__ */ jsx("p", { className: "text-neutral-500 font-sans text-xs sm:text-[13px] leading-relaxed", children: answer }) }) })
          }
        )
      ]
    }
  );
}
function Scholarship() {
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
    /* @__PURE__ */ jsxs("section", { className: "relative w-full min-h-[420px] sm:min-h-[500px] lg:h-[580px] bg-white flex items-center overflow-hidden border-b border-neutral-100", children: [
      /* @__PURE__ */ jsxs("div", { className: "hidden lg:block absolute inset-y-0 right-0 w-[50%] h-full z-0", children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            src: heroScholarship,
            alt: "Amigo Academy Scholarship counseling session with students",
            className: "w-full h-full object-cover object-left",
            onError: (e) => {
              e.currentTarget.style.display = "none";
            }
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-neutral-900/5 mix-blend-multiply" }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent z-10" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "block lg:hidden absolute inset-0 z-0 w-full h-full", children: /* @__PURE__ */ jsx(
        "img",
        {
          src: new URL("../assets/img/mobileheroScholarship.png", globalThis._importMeta_.url).href,
          alt: "Amigo Academy Scholarship counseling Mobile",
          className: "w-full h-full object-cover object-[right_center]",
          onError: (e) => {
            e.currentTarget.style.display = "none";
          }
        }
      ) }),
      /* @__PURE__ */ jsx("div", { className: "relative max-w-7xl mx-auto w-full px-4 sm:px-6 md:px-8 z-20 py-12 lg:py-0", children: /* @__PURE__ */ jsxs("div", { className: "w-[50%] sm:w-[50%] lg:w-full max-w-xl md:max-w-2xl text-left flex flex-col space-y-4 md:space-y-7 pl-1 md:pl-2", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1.5 text-xs sm:text-[13px] font-sans font-medium text-slate-400", children: [
          /* @__PURE__ */ jsx(Link, { to: "/", className: "hover:text-[#DF1818] transition-colors focus:outline-none", children: "Home" }),
          /* @__PURE__ */ jsx("span", { className: "text-slate-400 mx-1 select-none", children: ">" }),
          /* @__PURE__ */ jsx("span", { className: "font-bold text-[#DF1818] tracking-tight", children: "Scholarship" })
        ] }),
        /* @__PURE__ */ jsxs("h1", { className: "text-xl sm:text-3xl lg:text-[50px] font-outfit font-extrabold tracking-tight text-[#1a2d42] leading-[1.2] lg:leading-[1.12]", children: [
          "Amigo Academy ",
          /* @__PURE__ */ jsx("br", {}),
          "Scholarship \u2013 ",
          /* @__PURE__ */ jsxs("span", { className: "text-[#dfaa29]", children: [
            "Up to ",
            /* @__PURE__ */ jsx("br", {}),
            "\u20B950,000 Off"
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "text-neutral-700 text-[10px] sm:text-[14px] leading-relaxed lg:leading-[1.65] font-semibold max-w-md md:max-w-[480px] space-y-3 sm:space-y-4", children: [
          /* @__PURE__ */ jsx("p", { children: "We believe money should never stop a student from building a successful career. Amigo Academy offers scholarships of up to \u20B950,000 along with Zero-Interest EMI across all three courses." }),
          /* @__PURE__ */ jsx("p", { children: "Our counsellors help every student understand the financial support they are eligible for through a free eligibility assessment." })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "pt-1", children: /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: () => window.dispatchEvent(new CustomEvent("openEligibilityModal")),
            className: "inline-flex items-center justify-center bg-[#e31e24] hover:bg-[#c2141a] text-white font-sans font-bold text-[9px] sm:text-xs lg:text-[13px] px-4 py-2.5 sm:px-6 sm:py-3 lg:px-8 lg:py-3.5 rounded-full shadow-[0_12px_24px_rgba(227,30,36,0.22)] hover:shadow-[0_16px_32px_rgba(227,30,36,0.3)] transition-all duration-300 active:scale-95 group whitespace-nowrap cursor-pointer",
            children: [
              "Enroll Now To Avail Scholarship",
              /* @__PURE__ */ jsx("span", { className: "ml-2 transition-transform duration-300 group-hover:translate-x-1 font-bold", children: "\u2794" })
            ]
          }
        ) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "w-full bg-[#f1f5f9] py-20 px-4 sm:px-6 md:px-8 border-t border-neutral-100", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 text-left", children: [
      /* @__PURE__ */ jsx("div", { className: "bg-white rounded-[28px] p-8 flex flex-col justify-between shadow-[0_8px_30px_rgba(11,47,97,0.02)] border border-[#e2e8f0]/80 min-h-[220px] transition-all duration-300 hover:shadow-[0_8px_30px_rgba(11,47,97,0.05)]", children: /* @__PURE__ */ jsxs("div", { className: "space-y-4.5", children: [
        /* @__PURE__ */ jsx("div", { className: "w-11 h-11 rounded-full bg-[#fdf3e7] flex items-center justify-center text-[#7c5529] text-base", children: "\u{1F393}" }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-2.5", children: [
          /* @__PURE__ */ jsx("span", { className: "text-[10px] font-extrabold text-[#e31e24] uppercase tracking-widest block font-sans", children: "SCHOLARSHIP" }),
          /* @__PURE__ */ jsx("h4", { className: "font-outfit font-extrabold text-[#0b2f61] text-[15px] sm:text-base leading-tight", children: "Up to \u20B950,000 Off" }),
          /* @__PURE__ */ jsx("p", { className: "text-neutral-500 text-xs sm:text-[13px] leading-relaxed font-semibold", children: "Merit and need-based scholarship on course fees." })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "bg-white rounded-[28px] p-8 flex flex-col justify-between shadow-[0_8px_30px_rgba(11,47,97,0.02)] border border-[#e2e8f0]/80 min-h-[220px] transition-all duration-300 hover:shadow-[0_8px_30px_rgba(11,47,97,0.05)]", children: /* @__PURE__ */ jsxs("div", { className: "space-y-4.5", children: [
        /* @__PURE__ */ jsx("div", { className: "w-11 h-11 rounded-full bg-[#fdf3e7] flex items-center justify-center text-[#7c5529] text-base", children: "\u{1F4B3}" }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-2.5", children: [
          /* @__PURE__ */ jsx("span", { className: "text-[10px] font-extrabold text-[#e31e24] uppercase tracking-widest block font-sans", children: "EMI" }),
          /* @__PURE__ */ jsx("h4", { className: "font-outfit font-extrabold text-[#0b2f61] text-[15px] sm:text-base leading-tight", children: "Zero\u2013Interest EMI" }),
          /* @__PURE__ */ jsx("p", { className: "text-neutral-500 text-xs sm:text-[13px] leading-relaxed font-semibold", children: "Pay in easy installments with no extra cost." })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "bg-white rounded-[28px] p-8 flex flex-col justify-between shadow-[0_8px_30px_rgba(11,47,97,0.02)] border border-[#e2e8f0]/80 min-h-[220px] transition-all duration-300 hover:shadow-[0_8px_30px_rgba(11,47,97,0.05)]", children: /* @__PURE__ */ jsxs("div", { className: "space-y-4.5", children: [
        /* @__PURE__ */ jsx("div", { className: "w-11 h-11 rounded-full bg-[#fdf3e7] flex items-center justify-center text-[#7c5529] text-base", children: "\u{1F95E}" }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-2.5", children: [
          /* @__PURE__ */ jsx("span", { className: "text-[10px] font-extrabold text-[#e31e24] uppercase tracking-widest block font-sans", children: "ELIGIBLE COURSES" }),
          /* @__PURE__ */ jsx("h4", { className: "font-outfit font-extrabold text-[#0b2f61] text-[15px] sm:text-base leading-tight", children: "Available for All 3 Courses" }),
          /* @__PURE__ */ jsx("p", { className: "text-neutral-500 text-xs sm:text-[13px] leading-relaxed font-semibold", children: "Cabin Crew, Ground Staff and AI & Data Science." })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "bg-white rounded-[28px] p-8 flex flex-col justify-between shadow-[0_8px_30px_rgba(11,47,97,0.02)] border border-[#e2e8f0]/80 min-h-[220px] transition-all duration-300 hover:shadow-[0_8px_30px_rgba(11,47,97,0.05)]", children: /* @__PURE__ */ jsxs("div", { className: "space-y-4.5", children: [
        /* @__PURE__ */ jsx("div", { className: "w-11 h-11 rounded-full bg-[#fdf3e7] flex items-center justify-center text-[#7c5529] text-base", children: "\u{1F6E1}\uFE0F" }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-2.5", children: [
          /* @__PURE__ */ jsx("span", { className: "text-[10px] font-extrabold text-[#e31e24] uppercase tracking-widest block font-sans", children: "CERTIFICATION" }),
          /* @__PURE__ */ jsx("h4", { className: "font-outfit font-extrabold text-[#0b2f61] text-[15px] sm:text-base leading-tight", children: "Certified course" }),
          /* @__PURE__ */ jsx("p", { className: "text-neutral-500 text-xs sm:text-[13px] leading-relaxed font-semibold", children: "Certified aviation training programs." })
        ] })
      ] }) })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "w-full bg-[#f1f5f9] py-20 px-4 sm:px-6 md:px-8 border-t border-neutral-100", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto space-y-14 text-center", children: [
      /* @__PURE__ */ jsxs("div", { className: "space-y-4 max-w-2xl mx-auto flex flex-col items-center", children: [
        /* @__PURE__ */ jsx("span", { className: "bg-[#fdf3e7] text-[#7c5529] text-[10px] font-extrabold uppercase tracking-widest px-4 py-1.5 rounded-full border border-amber-500/10", children: "FINANCIAL SUPPORT" }),
        /* @__PURE__ */ jsx("h2", { className: "text-3xl sm:text-[38px] font-outfit font-extrabold text-[#0b2f61] leading-tight", children: "Why Choose Amigo Financial Support?" }),
        /* @__PURE__ */ jsx("p", { className: "text-neutral-500 text-xs sm:text-sm leading-relaxed max-w-xl font-semibold", children: "Transparent scholarships, zero-interest EMI and honest counselling so your career decision is never a money decision." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left", children: [
        /* @__PURE__ */ jsx("div", { className: "bg-white rounded-3xl p-8 flex flex-col justify-between shadow-[0_10px_30px_rgba(11,47,97,0.05)] border border-neutral-200/60 min-h-[170px]", children: /* @__PURE__ */ jsxs("div", { className: "space-y-3.5", children: [
          /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-full bg-[#fdf3e7] text-[#7c5529] flex items-center justify-center p-2.5", children: /* @__PURE__ */ jsxs("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.5", strokeLinecap: "round", strokeLinejoin: "round", className: "w-full h-full", children: [
            /* @__PURE__ */ jsx("path", { d: "M22 10 12 5 2 10l10 5 10-5Z" }),
            /* @__PURE__ */ jsx("path", { d: "M6 12v5c0 1.5 2.5 3 6 3s6-1.5 6-3v-5" })
          ] }) }),
          /* @__PURE__ */ jsx("h4", { className: "font-outfit font-extrabold text-[#0b2f61] text-sm sm:text-base", children: "Scholarships up to \u20B950,000" }),
          /* @__PURE__ */ jsx("p", { className: "text-neutral-500 text-xs leading-relaxed font-semibold", children: "Eligible students receive a direct reduction on course fees, assessed transparently by our counsellors." })
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "bg-white rounded-3xl p-8 flex flex-col justify-between shadow-[0_10px_30px_rgba(11,47,97,0.05)] border border-neutral-200/60 min-h-[170px]", children: /* @__PURE__ */ jsxs("div", { className: "space-y-3.5", children: [
          /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-full bg-[#fdf3e7] text-[#7c5529] flex items-center justify-center p-2.5", children: /* @__PURE__ */ jsxs("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.5", strokeLinecap: "round", strokeLinejoin: "round", className: "w-full h-full", children: [
            /* @__PURE__ */ jsx("path", { d: "M20 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-9a2 2 0 0 0-2-2Z" }),
            /* @__PURE__ */ jsx("path", { d: "M20 7V5a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v2" }),
            /* @__PURE__ */ jsx("path", { d: "M18 13h.01" })
          ] }) }),
          /* @__PURE__ */ jsx("h4", { className: "font-outfit font-extrabold text-[#0b2f61] text-sm sm:text-base", children: "Flexible Payment Options" }),
          /* @__PURE__ */ jsx("p", { className: "text-neutral-500 text-xs leading-relaxed font-semibold", children: "Choose a payment plan that fits your family's monthly budget instead of a single upfront fee." })
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "bg-white rounded-3xl p-8 flex flex-col justify-between shadow-[0_10px_30px_rgba(11,47,97,0.05)] border border-neutral-200/60 min-h-[170px]", children: /* @__PURE__ */ jsxs("div", { className: "space-y-3.5", children: [
          /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-full bg-[#fdf3e7] text-[#7c5529] flex items-center justify-center p-2.5", children: /* @__PURE__ */ jsxs("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.5", strokeLinecap: "round", strokeLinejoin: "round", className: "w-full h-full", children: [
            /* @__PURE__ */ jsx("rect", { x: "2", y: "5", width: "20", height: "14", rx: "2" }),
            /* @__PURE__ */ jsx("path", { d: "M2 10h20" }),
            /* @__PURE__ */ jsx("path", { d: "M6 15h4" })
          ] }) }),
          /* @__PURE__ */ jsx("h4", { className: "font-outfit font-extrabold text-[#0b2f61] text-sm sm:text-base", children: "Zero\u2013Interest EMI" }),
          /* @__PURE__ */ jsx("p", { className: "text-neutral-500 text-xs leading-relaxed font-semibold", children: "Spread your fees across convenient installments with absolutely no interest added." })
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "bg-white rounded-3xl p-8 flex flex-col justify-between shadow-[0_10px_30px_rgba(11,47,97,0.05)] border border-neutral-200/60 min-h-[170px]", children: /* @__PURE__ */ jsxs("div", { className: "space-y-3.5", children: [
          /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-full bg-[#fdf3e7] text-[#7c5529] flex items-center justify-center p-2.5", children: /* @__PURE__ */ jsxs("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.5", strokeLinecap: "round", strokeLinejoin: "round", className: "w-full h-full", children: [
            /* @__PURE__ */ jsx("path", { d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" }),
            /* @__PURE__ */ jsx("path", { d: "M14 2v6h6" }),
            /* @__PURE__ */ jsx("path", { d: "m9 15 2 2 4-4" })
          ] }) }),
          /* @__PURE__ */ jsx("h4", { className: "font-outfit font-extrabold text-[#0b2f61] text-sm sm:text-base", children: "Transparent Eligibility Process" }),
          /* @__PURE__ */ jsx("p", { className: "text-neutral-500 text-xs leading-relaxed font-semibold", children: "You know exactly what you qualify for, and why, before you pay a single rupee." })
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "bg-white rounded-3xl p-8 flex flex-col justify-between shadow-[0_10px_30px_rgba(11,47,97,0.05)] border border-neutral-200/60 min-h-[170px]", children: /* @__PURE__ */ jsxs("div", { className: "space-y-3.5", children: [
          /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-full bg-[#fdf3e7] text-[#7c5529] flex items-center justify-center p-2.5", children: /* @__PURE__ */ jsxs("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.5", strokeLinecap: "round", strokeLinejoin: "round", className: "w-full h-full", children: [
            /* @__PURE__ */ jsx("path", { d: "M3 14v-3a9 9 0 0 1 18 0v3" }),
            /* @__PURE__ */ jsx("path", { d: "M21 14v3a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h3Z" }),
            /* @__PURE__ */ jsx("path", { d: "M3 14v3a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2H3Z" })
          ] }) }),
          /* @__PURE__ */ jsx("h4", { className: "font-outfit font-extrabold text-[#0b2f61] text-sm sm:text-base", children: "Expert Counselling" }),
          /* @__PURE__ */ jsx("p", { className: "text-neutral-500 text-xs leading-relaxed font-semibold", children: "Real counsellors walk you and your parents through fees, support and career outcomes." })
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "bg-white rounded-3xl p-8 flex flex-col justify-between shadow-[0_10px_30px_rgba(11,47,97,0.05)] border border-neutral-200/60 min-h-[170px]", children: /* @__PURE__ */ jsxs("div", { className: "space-y-3.5", children: [
          /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-full bg-[#fdf3e7] text-[#7c5529] flex items-center justify-center p-2.5", children: /* @__PURE__ */ jsxs("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.5", strokeLinecap: "round", strokeLinejoin: "round", className: "w-full h-full", children: [
            /* @__PURE__ */ jsx("rect", { x: "2", y: "7", width: "20", height: "14", rx: "2" }),
            /* @__PURE__ */ jsx("path", { d: "M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" }),
            /* @__PURE__ */ jsx("path", { d: "M2 13h20" })
          ] }) }),
          /* @__PURE__ */ jsx("h4", { className: "font-outfit font-extrabold text-[#0b2f61] text-sm sm:text-base", children: "Career\u2013Focused Education" }),
          /* @__PURE__ */ jsx("p", { className: "text-neutral-500 text-xs leading-relaxed font-semibold", children: "Every rupee goes into practical training, grooming, interview preparation and placement support." })
        ] }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "w-full bg-white py-20 px-4 sm:px-6 md:px-8", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto space-y-16 text-center", children: [
      /* @__PURE__ */ jsxs("div", { className: "space-y-4 max-w-2xl mx-auto flex flex-col items-center", children: [
        /* @__PURE__ */ jsx("span", { className: "bg-[#fdf3e7] text-[#7c5529] text-[10px] font-extrabold uppercase tracking-widest px-4 py-1.5 rounded-full border border-amber-500/10", children: "SIMPLE & TRANSPARENT" }),
        /* @__PURE__ */ jsx("h2", { className: "text-3xl sm:text-[38px] font-outfit font-extrabold text-[#0b2f61] leading-tight", children: "Scholarship Eligibility Process" }),
        /* @__PURE__ */ jsx("p", { className: "text-neutral-500 text-xs sm:text-sm leading-relaxed max-w-xl font-semibold", children: "Five clear steps from your first enquiry to a confirmed seat with your scholarship applied." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "relative pt-6", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute top-[47px] left-[10%] right-[10%] h-[3px] bg-[#1d4ed8] z-0 hidden lg:block" }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-6 relative z-10", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center space-y-6", children: [
            /* @__PURE__ */ jsx("div", { className: "w-16 h-16 flex items-center justify-center", children: /* @__PURE__ */ jsx(
              "img",
              {
                src: new URL("../assets/img/icon1.png", globalThis._importMeta_.url).href,
                alt: "Step 1 Icon",
                className: "w-full h-full object-contain"
              }
            ) }),
            /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-3xl p-6 border border-neutral-200/80 shadow-[0_10px_30px_rgba(11,47,97,0.05)] text-center w-full max-w-[240px] space-y-2", children: [
              /* @__PURE__ */ jsx("span", { className: "text-[10px] font-extrabold text-[#e31e24] uppercase tracking-widest block font-sans", children: "STEP 1" }),
              /* @__PURE__ */ jsx("h4", { className: "font-outfit font-extrabold text-[#0b2f61] text-sm sm:text-base leading-tight", children: "Submit Enquiry" }),
              /* @__PURE__ */ jsx("p", { className: "text-neutral-500 text-xs leading-relaxed font-semibold", children: "Share your name, course interest and preferred branch \u2014 takes under a minute." })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center space-y-6", children: [
            /* @__PURE__ */ jsx("div", { className: "w-16 h-16 flex items-center justify-center", children: /* @__PURE__ */ jsx(
              "img",
              {
                src: new URL("../assets/img/icon2.png", globalThis._importMeta_.url).href,
                alt: "Step 2 Icon",
                className: "w-full h-full object-contain"
              }
            ) }),
            /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-3xl p-6 border border-neutral-200/80 shadow-[0_10px_30px_rgba(11,47,97,0.05)] text-center w-full max-w-[240px] space-y-2", children: [
              /* @__PURE__ */ jsx("span", { className: "text-[10px] font-extrabold text-[#e31e24] uppercase tracking-widest block font-sans", children: "STEP 2" }),
              /* @__PURE__ */ jsx("h4", { className: "font-outfit font-extrabold text-[#0b2f61] text-sm sm:text-base leading-tight", children: "Talk to Counsellor" }),
              /* @__PURE__ */ jsx("p", { className: "text-neutral-500 text-xs leading-relaxed font-semibold", children: "A counsellor calls you to understand your background, goals and budget." })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center space-y-6", children: [
            /* @__PURE__ */ jsx("div", { className: "w-16 h-16 flex items-center justify-center", children: /* @__PURE__ */ jsx(
              "img",
              {
                src: new URL("../assets/img/icon3.png", globalThis._importMeta_.url).href,
                alt: "Step 3 Icon",
                className: "w-full h-full object-contain"
              }
            ) }),
            /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-3xl p-6 border border-neutral-200/80 shadow-[0_10px_30px_rgba(11,47,97,0.05)] text-center w-full max-w-[240px] space-y-2", children: [
              /* @__PURE__ */ jsx("span", { className: "text-[10px] font-extrabold text-[#e31e24] uppercase tracking-widest block font-sans", children: "STEP 3" }),
              /* @__PURE__ */ jsx("h4", { className: "font-outfit font-extrabold text-[#0b2f61] text-sm sm:text-base leading-tight", children: "Eligibility Assessment" }),
              /* @__PURE__ */ jsx("p", { className: "text-neutral-500 text-xs leading-relaxed font-semibold", children: "We review your profile against our scholarship criteria \u2014 free of cost." })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center space-y-6", children: [
            /* @__PURE__ */ jsx("div", { className: "w-16 h-16 flex items-center justify-center", children: /* @__PURE__ */ jsx(
              "img",
              {
                src: new URL("../assets/img/icon4.png", globalThis._importMeta_.url).href,
                alt: "Step 4 Icon",
                className: "w-full h-full object-contain"
              }
            ) }),
            /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-3xl p-6 border border-neutral-200/80 shadow-[0_10px_30px_rgba(11,47,97,0.05)] text-center w-full max-w-[240px] space-y-2", children: [
              /* @__PURE__ */ jsx("span", { className: "text-[10px] font-extrabold text-[#e31e24] uppercase tracking-widest block font-sans", children: "STEP 4" }),
              /* @__PURE__ */ jsx("h4", { className: "font-outfit font-extrabold text-[#0b2f61] text-sm sm:text-base leading-tight", children: "Scholarship Approval" }),
              /* @__PURE__ */ jsx("p", { className: "text-neutral-500 text-xs leading-relaxed font-semibold", children: "You receive your approved scholarship amount and EMI plan in writing." })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center space-y-6", children: [
            /* @__PURE__ */ jsx("div", { className: "w-16 h-16 flex items-center justify-center", children: /* @__PURE__ */ jsx(
              "img",
              {
                src: new URL("../assets/img/icon5.png", globalThis._importMeta_.url).href,
                alt: "Step 5 Icon",
                className: "w-full h-full object-contain"
              }
            ) }),
            /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-3xl p-6 border border-neutral-200/80 shadow-[0_10px_30px_rgba(11,47,97,0.05)] text-center w-full max-w-[240px] space-y-2", children: [
              /* @__PURE__ */ jsx("span", { className: "text-[10px] font-extrabold text-[#e31e24] uppercase tracking-widest block font-sans", children: "STEP 5" }),
              /* @__PURE__ */ jsx("h4", { className: "font-outfit font-extrabold text-[#0b2f61] text-sm sm:text-base leading-tight", children: "Admission" }),
              /* @__PURE__ */ jsx("p", { className: "text-neutral-500 text-xs leading-relaxed font-semibold", children: "Confirm your seat, pick your batch and begin your career training." })
            ] })
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "w-full bg-[#f1f5f9] py-20 px-4 sm:px-6 md:px-8 border-t border-neutral-100", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto space-y-16 text-center", children: [
      /* @__PURE__ */ jsxs("div", { className: "space-y-4 max-w-2xl mx-auto flex flex-col items-center", children: [
        /* @__PURE__ */ jsx("span", { className: "bg-[#fdf3e7] text-[#7c5529] text-[10px] font-extrabold uppercase tracking-widest px-4 py-1.5 rounded-full border border-amber-500/10", children: "ALL THREE COURSES" }),
        /* @__PURE__ */ jsx("h2", { className: "text-3xl sm:text-[38px] font-outfit font-extrabold text-[#0b2f61] leading-tight", children: "Scholarship Across Courses" }),
        /* @__PURE__ */ jsx("p", { className: "text-neutral-500 text-xs sm:text-sm leading-relaxed max-w-xl font-semibold", children: "Whichever program you choose, scholarship support and zero-interest EMI are available." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8 text-left", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-3xl p-8 flex flex-col justify-between shadow-[0_12px_35px_rgba(11,47,97,0.08)] border border-neutral-200/60 min-h-[380px]", children: [
          /* @__PURE__ */ jsxs("div", { className: "space-y-6 flex flex-col", children: [
            /* @__PURE__ */ jsx("span", { className: "inline-flex bg-[#fdf3e7] text-[#7c5529] text-[10px] font-extrabold tracking-wider uppercase px-4 py-2 rounded-full border border-amber-500/10 w-fit", children: "SCHOLARSHIP AVAILABLE" }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsx("h4", { className: "font-outfit font-extrabold text-[#0b2f61] text-lg sm:text-xl", children: "Cabin Crew (Air Hostess) & Hospitality Management" }),
              /* @__PURE__ */ jsx("p", { className: "text-neutral-500 text-[13px] leading-relaxed font-semibold", children: "In-flight service, safety, grooming and communication training for airline cabin crew roles." })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-3 pt-2", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2.5 text-xs text-[#0b2f61] font-semibold", children: [
                /* @__PURE__ */ jsx("span", { className: "text-[#dfaa29] text-base", children: "\u2713" }),
                " Scholarship Available"
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2.5 text-xs text-[#0b2f61] font-semibold", children: [
                /* @__PURE__ */ jsx("span", { className: "text-[#dfaa29] text-base", children: "\u2713" }),
                " Zero-Interest EMI"
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-neutral-400 text-[11px] font-bold pt-2", children: [
              /* @__PURE__ */ jsx("span", { children: "\u{1F4CD}" }),
              " Ghatkopar \xB7 Andheri \xB7 Thane"
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "pt-6", children: /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => window.dispatchEvent(new CustomEvent("openEligibilityModal")),
              className: "w-full inline-flex items-center justify-center bg-[#e31e24] hover:bg-[#c2141a] text-white font-sans font-bold text-[13px] py-3.5 rounded-full shadow-[0_8px_20px_rgba(227,30,36,0.15)] transition-all duration-300 active:scale-95 cursor-pointer",
              children: "Apply Now"
            }
          ) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-3xl p-8 flex flex-col justify-between shadow-[0_12px_35px_rgba(11,47,97,0.08)] border border-neutral-200/60 min-h-[380px]", children: [
          /* @__PURE__ */ jsxs("div", { className: "space-y-6 flex flex-col", children: [
            /* @__PURE__ */ jsx("span", { className: "inline-flex bg-[#fdf3e7] text-[#7c5529] text-[10px] font-extrabold tracking-wider uppercase px-4 py-2 rounded-full border border-amber-500/10 w-fit", children: "SCHOLARSHIP AVAILABLE" }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsx("h4", { className: "font-outfit font-extrabold text-[#0b2f61] text-lg sm:text-xl", children: "Airport Ground Staff & Hospitality Management" }),
              /* @__PURE__ */ jsx("p", { className: "text-neutral-500 text-[13px] leading-relaxed font-semibold", children: "Check-in, customer service and ground operations training for airport and airline jobs." })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-3 pt-2", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2.5 text-xs text-[#0b2f61] font-semibold", children: [
                /* @__PURE__ */ jsx("span", { className: "text-[#dfaa29] text-base", children: "\u2713" }),
                " Scholarship Available"
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2.5 text-xs text-[#0b2f61] font-semibold", children: [
                /* @__PURE__ */ jsx("span", { className: "text-[#dfaa29] text-base", children: "\u2713" }),
                " Zero-Interest EMI"
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-neutral-400 text-[11px] font-bold pt-2", children: [
              /* @__PURE__ */ jsx("span", { children: "\u{1F4CD}" }),
              " Ghatkopar \xB7 Andheri \xB7 Thane"
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "pt-6", children: /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => window.dispatchEvent(new CustomEvent("openEligibilityModal")),
              className: "w-full inline-flex items-center justify-center bg-[#e31e24] hover:bg-[#c2141a] text-white font-sans font-bold text-[13px] py-3.5 rounded-full shadow-[0_8px_20px_rgba(227,30,36,0.15)] transition-all duration-300 active:scale-95 cursor-pointer",
              children: "Apply Now"
            }
          ) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-3xl p-8 flex flex-col justify-between shadow-[0_12px_35px_rgba(11,47,97,0.08)] border border-neutral-200/60 min-h-[380px]", children: [
          /* @__PURE__ */ jsxs("div", { className: "space-y-6 flex flex-col", children: [
            /* @__PURE__ */ jsx("span", { className: "inline-flex bg-[#fdf3e7] text-[#7c5529] text-[10px] font-extrabold tracking-wider uppercase px-4 py-2 rounded-full border border-amber-500/10 w-fit", children: "SCHOLARSHIP AVAILABLE" }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsx("h4", { className: "font-outfit font-extrabold text-[#0b2f61] text-lg sm:text-xl", children: "AI & Data Science" }),
              /* @__PURE__ */ jsx("p", { className: "text-neutral-500 text-[13px] leading-relaxed font-semibold", children: "Practical AI, analytics and data projects with interview preparation for technology roles." })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-3 pt-2", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2.5 text-xs text-[#0b2f61] font-semibold", children: [
                /* @__PURE__ */ jsx("span", { className: "text-[#dfaa29] text-base", children: "\u2713" }),
                " Scholarship Available"
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2.5 text-xs text-[#0b2f61] font-semibold", children: [
                /* @__PURE__ */ jsx("span", { className: "text-[#dfaa29] text-base", children: "\u2713" }),
                " Zero-Interest EMI"
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-neutral-400 text-[11px] font-bold pt-2", children: [
              /* @__PURE__ */ jsx("span", { children: "\u{1F4CD}" }),
              " Ghatkopar \xB7 Andheri \xB7 Thane"
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "pt-6", children: /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => window.dispatchEvent(new CustomEvent("openEligibilityModal")),
              className: "w-full inline-flex items-center justify-center bg-[#e31e24] hover:bg-[#c2141a] text-white font-sans font-bold text-[13px] py-3.5 rounded-full shadow-[0_8px_20px_rgba(227,30,36,0.15)] transition-all duration-300 active:scale-95 cursor-pointer",
              children: "Apply Now"
            }
          ) })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "w-full bg-[#f1f5f9] py-20 px-4 sm:px-6 md:px-8 border-t border-neutral-100", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto space-y-16 text-center", children: [
      /* @__PURE__ */ jsxs("div", { className: "space-y-4 max-w-2xl mx-auto flex flex-col items-center", children: [
        /* @__PURE__ */ jsx("span", { className: "bg-[#fdf3e7] text-[#7c5529] text-[10px] font-extrabold uppercase tracking-widest px-4 py-1.5 rounded-full border border-amber-500/10", children: "STUDENT BENEFITS" }),
        /* @__PURE__ */ jsx("h2", { className: "text-3xl sm:text-[38px] font-outfit font-extrabold text-[#0b2f61] leading-tight", children: "Financial Support Benefits" }),
        /* @__PURE__ */ jsx("p", { className: "text-neutral-500 text-xs sm:text-sm leading-relaxed max-w-xl font-semibold", children: "Practical benefits that make premium aviation and technology training affordable for Mumbai families." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left", children: [
        /* @__PURE__ */ jsx("div", { className: "bg-white rounded-3xl p-8 flex flex-col justify-between shadow-[0_12px_35px_rgba(11,47,97,0.08)] border border-neutral-200/60 min-h-[170px]", children: /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsx("div", { className: "w-10 h-10 flex items-center justify-center", children: /* @__PURE__ */ jsx(
            "img",
            {
              src: new URL("../assets/img/icons1.png", globalThis._importMeta_.url).href,
              alt: "Reduced Course Fees Icon",
              className: "w-full h-full object-contain"
            }
          ) }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsx("h4", { className: "font-outfit font-extrabold text-[#0b2f61] text-sm sm:text-base", children: "Reduced Course Fees" }),
            /* @__PURE__ */ jsx("p", { className: "text-neutral-500 text-xs leading-relaxed font-semibold", children: "Approved scholarships come straight off your total course fee." })
          ] })
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "bg-white rounded-3xl p-8 flex flex-col justify-between shadow-[0_12px_35px_rgba(11,47,97,0.08)] border border-neutral-200/60 min-h-[170px]", children: /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsx("div", { className: "w-10 h-10 flex items-center justify-center", children: /* @__PURE__ */ jsx(
            "img",
            {
              src: new URL("../assets/img/icons2.png", globalThis._importMeta_.url).href,
              alt: "Flexible EMI Plans Icon",
              className: "w-full h-full object-contain"
            }
          ) }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsx("h4", { className: "font-outfit font-extrabold text-[#0b2f61] text-sm sm:text-base", children: "Flexible EMI Plans" }),
            /* @__PURE__ */ jsx("p", { className: "text-neutral-500 text-xs leading-relaxed font-semibold", children: "Monthly installments planned around your family's cash flow." })
          ] })
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "bg-white rounded-3xl p-8 flex flex-col justify-between shadow-[0_12px_35px_rgba(11,47,97,0.08)] border border-neutral-200/60 min-h-[170px]", children: /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsx("div", { className: "w-10 h-10 flex items-center justify-center", children: /* @__PURE__ */ jsx(
            "img",
            {
              src: new URL("../assets/img/icons3.png", globalThis._importMeta_.url).href,
              alt: "Affordable Career Training Icon",
              className: "w-full h-full object-contain"
            }
          ) }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsx("h4", { className: "font-outfit font-extrabold text-[#0b2f61] text-sm sm:text-base", children: "Affordable Career Training" }),
            /* @__PURE__ */ jsx("p", { className: "text-neutral-500 text-xs leading-relaxed font-semibold", children: "Premium aviation and technology training at a reachable cost." })
          ] })
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "bg-white rounded-3xl p-8 flex flex-col justify-between shadow-[0_12px_35px_rgba(11,47,97,0.08)] border border-neutral-200/60 min-h-[170px]", children: /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsx("div", { className: "w-10 h-10 flex items-center justify-center", children: /* @__PURE__ */ jsx(
            "img",
            {
              src: new URL("../assets/img/icons4.png", globalThis._importMeta_.url).href,
              alt: "Easy Application Process Icon",
              className: "w-full h-full object-contain"
            }
          ) }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsx("h4", { className: "font-outfit font-extrabold text-[#0b2f61] text-sm sm:text-base", children: "Easy Application Process" }),
            /* @__PURE__ */ jsx("p", { className: "text-neutral-500 text-xs leading-relaxed font-semibold", children: "One short enquiry starts your free eligibility assessment." })
          ] })
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "bg-white rounded-3xl p-8 flex flex-col justify-between shadow-[0_12px_35px_rgba(11,47,97,0.08)] border border-neutral-200/60 min-h-[170px]", children: /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsx("div", { className: "w-10 h-10 flex items-center justify-center", children: /* @__PURE__ */ jsx(
            "img",
            {
              src: new URL("../assets/img/icons5.png", globalThis._importMeta_.url).href,
              alt: "Dedicated Counselling Icon",
              className: "w-full h-full object-contain"
            }
          ) }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsx("h4", { className: "font-outfit font-extrabold text-[#0b2f61] text-sm sm:text-base", children: "Dedicated Counselling" }),
            /* @__PURE__ */ jsx("p", { className: "text-neutral-500 text-xs leading-relaxed font-semibold", children: "A named counsellor stays with you from enquiry to admission." })
          ] })
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "bg-white rounded-3xl p-8 flex flex-col justify-between shadow-[0_12px_35px_rgba(11,47,97,0.08)] border border-neutral-200/60 min-h-[170px]", children: /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsx("div", { className: "w-10 h-10 flex items-center justify-center", children: /* @__PURE__ */ jsx(
            "img",
            {
              src: new URL("../assets/img/icons6.png", globalThis._importMeta_.url).href,
              alt: "Student-Focused Financial Support Icon",
              className: "w-full h-full object-contain"
            }
          ) }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsx("h4", { className: "font-outfit font-extrabold text-[#0b2f61] text-sm sm:text-base", children: "Student-Focused Financial Support" }),
            /* @__PURE__ */ jsx("p", { className: "text-neutral-500 text-xs leading-relaxed font-semibold", children: "Support designed so finances never decide your career." })
          ] })
        ] }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "w-full bg-[#f1f5f9] py-20 px-4 sm:px-6 md:px-8 border-t border-neutral-100", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto space-y-16 text-center", children: [
      /* @__PURE__ */ jsxs("div", { className: "space-y-4 max-w-2xl mx-auto flex flex-col items-center", children: [
        /* @__PURE__ */ jsx("span", { className: "bg-[#fdf3e7] text-[#7c5529] text-[10px] font-extrabold uppercase tracking-widest px-4 py-1.5 rounded-full border border-amber-500/10", children: "STUDENT SUCCESS" }),
        /* @__PURE__ */ jsx("h2", { className: "text-3xl sm:text-[38px] font-outfit font-extrabold text-[#0b2f61] leading-tight", children: "Students Who Studied With Scholarship Support" }),
        /* @__PURE__ */ jsx("p", { className: "text-neutral-500 text-xs sm:text-sm leading-relaxed max-w-xl font-semibold", children: "Real Amigo Academy students who used scholarships and zero-interest EMI to start their careers." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-3xl p-8 flex flex-col justify-between shadow-[0_12px_35px_rgba(11,47,97,0.08)] border border-neutral-200/60 space-y-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
            /* @__PURE__ */ jsx("div", { className: "w-16 h-16 rounded-full overflow-hidden border-2 border-neutral-200 flex-shrink-0", children: /* @__PURE__ */ jsx(
              "img",
              {
                src: new URL("../assets/img/profileimg1.png", globalThis._importMeta_.url).href,
                alt: "Sneha Kulkarni",
                className: "w-full h-full object-cover",
                onError: (e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150";
                }
              }
            ) }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h4", { className: "font-outfit font-extrabold text-[#0b2f61] text-base", children: "Sneha Kulkarni" }),
              /* @__PURE__ */ jsx("span", { className: "text-[#e31e24] text-[11px] font-extrabold tracking-wide uppercase block", children: "Cabin Crew (Air Hostess) & Hospitality Management" }),
              /* @__PURE__ */ jsx("span", { className: "text-neutral-400 text-[10px] font-semibold flex items-center gap-1 mt-0.5", children: "\u{1F4CD} Andheri branch" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-[#f8fafc] rounded-2xl p-5 border border-neutral-100 flex items-start gap-3", children: [
            /* @__PURE__ */ jsx("span", { className: "text-[#dfaa29] text-xl font-serif leading-none mt-1", children: "\u201C" }),
            /* @__PURE__ */ jsx("p", { className: "text-neutral-600 text-xs sm:text-[13px] leading-relaxed font-semibold", children: "The scholarship covered a big part of my fees, so my parents agreed immediately. I fly with an airline today." })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-3xl p-8 flex flex-col justify-between shadow-[0_12px_35px_rgba(11,47,97,0.08)] border border-neutral-200/60 space-y-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
            /* @__PURE__ */ jsx("div", { className: "w-16 h-16 rounded-full overflow-hidden border-2 border-neutral-200 flex-shrink-0", children: /* @__PURE__ */ jsx(
              "img",
              {
                src: new URL("../assets/img/profileimg2.png", globalThis._importMeta_.url).href,
                alt: "Rohit Sawant",
                className: "w-full h-full object-cover",
                onError: (e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150";
                }
              }
            ) }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h4", { className: "font-outfit font-extrabold text-[#0b2f61] text-base", children: "Rohit Sawant" }),
              /* @__PURE__ */ jsx("span", { className: "text-[#e31e24] text-[11px] font-extrabold tracking-wide uppercase block", children: "Airport Ground Staff" }),
              /* @__PURE__ */ jsx("span", { className: "text-neutral-400 text-[10px] font-semibold flex items-center gap-1 mt-0.5", children: "\u{1F4CD} Ghatkopar branch" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-[#f8fafc] rounded-2xl p-5 border border-neutral-100 flex items-start gap-3", children: [
            /* @__PURE__ */ jsx("span", { className: "text-[#dfaa29] text-xl font-serif leading-none mt-1", children: "\u201C" }),
            /* @__PURE__ */ jsx("p", { className: "text-neutral-600 text-xs sm:text-[13px] leading-relaxed font-semibold", children: "Zero-interest EMI meant I could pay monthly from my part-time job while I trained." })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-3xl p-8 flex flex-col justify-between shadow-[0_12px_35px_rgba(11,47,97,0.08)] border border-neutral-200/60 space-y-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
            /* @__PURE__ */ jsx("div", { className: "w-16 h-16 rounded-full overflow-hidden border-2 border-neutral-200 flex-shrink-0", children: /* @__PURE__ */ jsx(
              "img",
              {
                src: new URL("../assets/img/profileimg3.png", globalThis._importMeta_.url).href,
                alt: "Aishwarya Nair",
                className: "w-full h-full object-cover",
                onError: (e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150";
                }
              }
            ) }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h4", { className: "font-outfit font-extrabold text-[#0b2f61] text-base", children: "Aishwarya Nair" }),
              /* @__PURE__ */ jsx("span", { className: "text-[#e31e24] text-[11px] font-extrabold tracking-wide uppercase block", children: "Cabin Crew (Air Hostess) & Hospitality Management" }),
              /* @__PURE__ */ jsx("span", { className: "text-neutral-400 text-[10px] font-semibold flex items-center gap-1 mt-0.5", children: "\u{1F4CD} Thane branch" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-[#f8fafc] rounded-2xl p-5 border border-neutral-100 flex items-start gap-3", children: [
            /* @__PURE__ */ jsx("span", { className: "text-[#dfaa29] text-xl font-serif leading-none mt-1", children: "\u201C" }),
            /* @__PURE__ */ jsx("p", { className: "text-neutral-600 text-xs sm:text-[13px] leading-relaxed font-semibold", children: "The counsellor explained exactly what I qualified for. Nothing hidden, no surprise charges." })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-3xl p-8 flex flex-col justify-between shadow-[0_12px_35px_rgba(11,47,97,0.08)] border border-neutral-200/60 space-y-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
            /* @__PURE__ */ jsx("div", { className: "w-16 h-16 rounded-full overflow-hidden border-2 border-neutral-200 flex-shrink-0", children: /* @__PURE__ */ jsx(
              "img",
              {
                src: new URL("../assets/img/profileimg4.png", globalThis._importMeta_.url).href,
                alt: "Pooja Deshmukh",
                className: "w-full h-full object-cover",
                onError: (e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150";
                }
              }
            ) }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h4", { className: "font-outfit font-extrabold text-[#0b2f61] text-base", children: "Pooja Deshmukh" }),
              /* @__PURE__ */ jsx("span", { className: "text-[#e31e24] text-[11px] font-extrabold tracking-wide uppercase block", children: "Airport Ground Staff & Hospitality Management" }),
              /* @__PURE__ */ jsx("span", { className: "text-neutral-400 text-[10px] font-semibold flex items-center gap-1 mt-0.5", children: "\u{1F4CD} Thane branch" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-[#f8fafc] rounded-2xl p-5 border border-neutral-100 flex items-start gap-3", children: [
            /* @__PURE__ */ jsx("span", { className: "text-[#dfaa29] text-xl font-serif leading-none mt-1", children: "\u201C" }),
            /* @__PURE__ */ jsx("p", { className: "text-neutral-600 text-xs sm:text-[13px] leading-relaxed font-semibold", children: "I had almost dropped the idea because of fees. The eligibility check changed that in one call." })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-3xl p-8 flex flex-col justify-between shadow-[0_12px_35px_rgba(11,47,97,0.08)] border border-neutral-200/60 space-y-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
            /* @__PURE__ */ jsx("div", { className: "w-16 h-16 rounded-full overflow-hidden border-2 border-neutral-200 flex-shrink-0", children: /* @__PURE__ */ jsx(
              "img",
              {
                src: new URL("../assets/img/profileimg5.png", globalThis._importMeta_.url).href,
                alt: "Aditya Menon",
                className: "w-full h-full object-cover",
                onError: (e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150";
                }
              }
            ) }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h4", { className: "font-outfit font-extrabold text-[#0b2f61] text-base", children: "Aditya Menon" }),
              /* @__PURE__ */ jsx("span", { className: "text-[#e31e24] text-[11px] font-extrabold tracking-wide uppercase block", children: "AI & Data Science" }),
              /* @__PURE__ */ jsx("span", { className: "text-neutral-400 text-[10px] font-semibold flex items-center gap-1 mt-0.5", children: "\u{1F4CD} Andheri branch" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-[#f8fafc] rounded-2xl p-5 border border-neutral-100 flex items-start gap-3", children: [
            /* @__PURE__ */ jsx("span", { className: "text-[#dfaa29] text-xl font-serif leading-none mt-1", children: "\u201C" }),
            /* @__PURE__ */ jsx("p", { className: "text-neutral-600 text-xs sm:text-[13px] leading-relaxed font-semibold", children: "My scholarship plus EMI made a technology course possible without a loan." })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-3xl p-8 flex flex-col justify-between shadow-[0_12px_35px_rgba(11,47,97,0.08)] border border-neutral-200/60 space-y-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
            /* @__PURE__ */ jsx("div", { className: "w-16 h-16 rounded-full overflow-hidden border-2 border-neutral-200 flex-shrink-0", children: /* @__PURE__ */ jsx(
              "img",
              {
                src: new URL("../assets/img/profileimg6.png", globalThis._importMeta_.url).href,
                alt: "Fatima Shaikh",
                className: "w-full h-full object-cover",
                onError: (e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&q=80&w=150";
                }
              }
            ) }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h4", { className: "font-outfit font-extrabold text-[#0b2f61] text-base", children: "Fatima Shaikh" }),
              /* @__PURE__ */ jsx("span", { className: "text-[#e31e24] text-[11px] font-extrabold tracking-wide uppercase block", children: "Cabin Crew (Air Hostess) & Hospitality Management" }),
              /* @__PURE__ */ jsx("span", { className: "text-neutral-400 text-[10px] font-semibold flex items-center gap-1 mt-0.5", children: "\u{1F4CD} Ghatkopar branch" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-[#f8fafc] rounded-2xl p-5 border border-neutral-100 flex items-start gap-3", children: [
            /* @__PURE__ */ jsx("span", { className: "text-[#dfaa29] text-xl font-serif leading-none mt-1", children: "\u201C" }),
            /* @__PURE__ */ jsx("p", { className: "text-neutral-600 text-xs sm:text-[13px] leading-relaxed font-semibold", children: "My family could plan the fees comfortably, and I focused fully on my training." })
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "w-full bg-[#f8fafc] py-20 border-t border-neutral-200/50", children: /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto px-4 sm:px-6 md:px-8 w-full flex flex-col items-center space-y-12", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center space-y-4", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-3xl sm:text-[38px] font-outfit font-black text-[#0b2f61] leading-tight", children: "Frequently Asked Questions" }),
        /* @__PURE__ */ jsx("p", { className: "text-neutral-500 font-sans font-semibold text-xs sm:text-[13px] max-w-xl mx-auto leading-relaxed", children: "Got questions? We've got answers. Find out everything you need to know about our courses." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "w-full space-y-4", children: [
        /* @__PURE__ */ jsx(
          FAQItem,
          {
            index: 1,
            question: "How much scholarship can I get?",
            answer: "You can receive a scholarship of **up to \u20B950,000**, depending on your eligibility."
          }
        ),
        /* @__PURE__ */ jsx(
          FAQItem,
          {
            index: 2,
            question: "Is EMI really zero-interest?",
            answer: "Yes, we partner directly with premium financing organizations to structure monthly payment plans that carry 0% interest charges for your family."
          }
        ),
        /* @__PURE__ */ jsx(
          FAQItem,
          {
            index: 3,
            question: "Which courses are covered by the scholarship?",
            answer: "All three of our major training courses\u2014Cabin Crew (Air Hostess) & Hospitality Management, Airport Ground Staff & Hospitality Management, and AI & Data Science\u2014have scholarship seats allocated."
          }
        ),
        /* @__PURE__ */ jsx(
          FAQItem,
          {
            index: 4,
            question: "Does checking my eligibility cost anything?",
            answer: "No, our assessment check and counselling call are 100% free of cost with zero obligations."
          }
        ),
        /* @__PURE__ */ jsx(
          FAQItem,
          {
            index: 5,
            question: "Is Amigo Academy certified?",
            answer: "Yes, Amigo Academy is Maharashtra Government Certified, providing premium training formats across our campus branches in Ghatkopar, Andheri, and Thane."
          }
        )
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-10 text-center", children: /* @__PURE__ */ jsxs(
        "button",
        {
          onClick: () => {
            window.location.href = "/contact";
          },
          className: "inline-flex items-center gap-2 bg-[#fffbf0] border border-[#ffecd1] px-6 py-3 rounded-full shadow-[0_4px_10px_rgba(255,236,209,0.2)] hover:scale-105 transition-all cursor-pointer",
          children: [
            /* @__PURE__ */ jsx("span", { className: "text-[#e31e24] font-bold text-xs sm:text-sm", children: "\u2728" }),
            /* @__PURE__ */ jsx("span", { className: "text-[#0b2f61] font-sans font-bold text-[10px] sm:text-xs tracking-wider uppercase", children: "If you have anymore question, please contact us" })
          ]
        }
      ) })
    ] }) }),
    /* @__PURE__ */ jsxs(
      "section",
      {
        style: { backgroundColor: "#0d1b3d" },
        className: "py-16 px-6 text-center text-white relative overflow-hidden",
        children: [
          /* @__PURE__ */ jsx("div", { className: "flex justify-center mb-7", children: /* @__PURE__ */ jsxs(
            "span",
            {
              style: {
                border: "1px solid rgba(240,161,58,0.4)",
                color: "#f0a13a",
                backgroundColor: "rgba(240,161,58,0.05)"
              },
              className: "inline-flex items-center gap-2 text-xs font-bold tracking-wide px-4 py-2 rounded-full",
              children: [
                /* @__PURE__ */ jsx("svg", { className: "w-3.5 h-3.5", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ jsx("path", { d: "M11.3 1.046a1 1 0 01.7 1.169L10.98 8h4.02a1 1 0 01.76 1.65l-8 9.5a1 1 0 01-1.752-.815L6.02 12H2a1 1 0 01-.76-1.65l8-9.5a1 1 0 011.06-.304z" }) }),
                "Limited seats per batch \u2014 apply early to secure your spot"
              ]
            }
          ) }),
          /* @__PURE__ */ jsx(
            "h1",
            {
              style: { color: "#ffffff" },
              className: "font-extrabold text-3xl sm:text-5xl leading-tight max-w-4xl mx-auto mb-5",
              children: "2026 batches are filling fast \u2014 Secure Your Spot Now!"
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "flex justify-center mb-8", children: /* @__PURE__ */ jsxs(
            "span",
            {
              style: {
                border: "1px solid rgba(255,255,255,0.1)",
                color: "#f0a13a",
                backgroundColor: "rgba(255,255,255,0.05)"
              },
              className: "inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-full",
              children: [
                /* @__PURE__ */ jsx("svg", { className: "w-4 h-4", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ jsx("path", { d: "M10 1L2 5v2h16V5l-8-4zM4 9v7H2v2h16v-2h-2V9h-2v7h-2V9h-2v7H8V9H6v7H4V9H4z" }) }),
                "Maharashtra govt certified \u2014 only aviation institute in Maharashtra"
              ]
            }
          ) }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row items-center justify-center gap-4 mb-8", children: [
            /* @__PURE__ */ jsxs(
              "button",
              {
                onClick: () => window.dispatchEvent(new CustomEvent("openEligibilityModal")),
                style: { backgroundColor: "#e0392f", color: "#ffffff" },
                className: "w-full sm:w-auto inline-flex items-center justify-center gap-2 text-sm font-bold px-6 py-3.5 rounded-full transition-colors cursor-pointer",
                children: [
                  /* @__PURE__ */ jsx("svg", { className: "w-4 h-4", fill: "none", stroke: "currentColor", strokeWidth: 2.5, viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M13 10V3L4 14h7v7l9-11h-7z" }) }),
                  "Check my eligibility now"
                ]
              }
            ),
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: () => window.dispatchEvent(new CustomEvent("openEligibilityModal")),
                style: { backgroundColor: "#e0392f", color: "#ffffff" },
                className: "w-full sm:w-auto inline-flex items-center justify-center text-sm font-bold px-8 py-3.5 rounded-full transition-colors cursor-pointer",
                children: "Start my career"
              }
            ),
            /* @__PURE__ */ jsxs(
              "a",
              {
                href: "https://wa.me/919987588932",
                target: "_blank",
                rel: "noopener noreferrer",
                style: { backgroundColor: "#25d366", color: "#ffffff" },
                className: "w-full sm:w-auto inline-flex items-center justify-center gap-2 text-sm font-bold px-6 py-3.5 rounded-full transition-colors",
                children: [
                  /* @__PURE__ */ jsx("svg", { className: "w-4 h-4", fill: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { d: "M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 004.74 1.21h.005c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.87 9.87 0 0012.04 2zm5.8 14.05c-.24.68-1.4 1.3-1.93 1.38-.5.08-1.12.11-1.8-.11-.42-.13-.96-.31-1.65-.61-2.9-1.25-4.79-4.17-4.94-4.36-.14-.2-1.18-1.57-1.18-3 0-1.42.75-2.12 1.01-2.41.27-.29.58-.36.78-.36.19 0 .39 0 .56.01.18.01.42-.07.66.5.24.58.82 2 .89 2.15.07.15.12.32.02.52-.1.2-.15.32-.29.49-.15.17-.31.38-.44.51-.15.15-.3.31-.13.6.17.29.75 1.24 1.62 2.01 1.11.99 2.05 1.3 2.34 1.44.29.15.46.13.63-.08.18-.2.75-.87.95-1.17.2-.29.4-.24.66-.15.27.1 1.7.8 1.99.94.29.15.48.22.55.34.07.13.07.72-.17 1.4z" }) }),
                  "Chat on WhatsApp"
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsx(
            "div",
            {
              style: { color: "#8fdca0" },
              className: "flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-medium",
              children: ["4.6 Google rating", "10,000+ students Trained", "Certified Courses", "200+ hiring partners"].map(
                (item, i) => /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1.5 font-bold", children: [
                  /* @__PURE__ */ jsx("svg", { className: "w-3.5 h-3.5", fill: "none", stroke: "currentColor", strokeWidth: 3, viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M5 13l4 4L19 7" }) }),
                  item
                ] }, i)
              )
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "mt-8 flex justify-center", children: /* @__PURE__ */ jsxs(
            "button",
            {
              onClick: () => window.dispatchEvent(new CustomEvent("openEligibilityModal")),
              className: "inline-flex items-center gap-2.5 px-7 py-3 rounded-full border border-white/40 text-white hover:bg-white/10 hover:border-white/80 transition-all text-sm font-semibold cursor-pointer shadow-md active:scale-95 focus:outline-none",
              children: [
                /* @__PURE__ */ jsx("svg", { className: "w-4 h-4 text-white", fill: "none", stroke: "currentColor", strokeWidth: 2, viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M7.5 12l4.5 4.5m0 0l4.5-4.5M12 16.5V3" }) }),
                /* @__PURE__ */ jsx("span", { children: "Download Brochure (PDF)" })
              ]
            }
          ) })
        ]
      }
    )
  ] });
}
const SplitComponent = Scholarship;

export { SplitComponent as component };
//# sourceMappingURL=scholarship-BQaUEMNq.mjs.map
