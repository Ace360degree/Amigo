import process from 'node:process';globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import { jsxs, jsx } from 'react/jsx-runtime';
import { useState } from 'react';
import { useNavigate, Link } from '@tanstack/react-router';
import Swal from 'sweetalert2';
import { b as submitContactForm } from './router-CBeBCufh.mjs';
import 'axios';

const heroContact = "/assets/herocontact-CWjmJjg1.png";
function Contact({ setCurrentPage } = {}) {
  useNavigate();
  const [selectedMapTab, setSelectedMapTab] = useState("ghatkopar");
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
    /* @__PURE__ */ jsxs("section", { className: "relative w-full min-h-[420px] sm:min-h-[500px] lg:h-[520px] bg-white flex items-center overflow-hidden border-b border-neutral-100", children: [
      /* @__PURE__ */ jsxs("div", { className: "hidden lg:block absolute inset-0 z-0", children: [
        /* @__PURE__ */ jsxs("div", { className: "absolute inset-y-0 right-0 w-[50%] h-full z-0", children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              src: heroContact,
              alt: "Contact Amigo Academy Office counseling",
              className: "w-full h-full object-cover object-center lg:object-left-top"
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-neutral-900/5 mix-blend-multiply" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-white via-white via-40% md:via-45% lg:via-35% to-white/0 z-10" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "block lg:hidden absolute inset-0 z-0 w-full h-full", children: /* @__PURE__ */ jsx(
        "img",
        {
          src: new URL("../assets/img/mobileherocontant.png", globalThis._importMeta_.url).href,
          alt: "Contact Amigo Academy Mobile",
          className: "w-full h-full object-cover object-[right_center]",
          onError: (e) => {
            e.currentTarget.style.display = "none";
          }
        }
      ) }),
      /* @__PURE__ */ jsx("div", { className: "relative max-w-7xl mx-auto w-full px-4 sm:px-6 md:px-8 z-25 py-12 lg:py-0", children: /* @__PURE__ */ jsxs("div", { className: "w-[50%] sm:w-[50%] lg:w-full max-w-xl md:max-w-2xl text-left flex flex-col space-y-4 md:space-y-7", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1.5 text-xs sm:text-[13px] font-sans font-medium text-slate-400", children: [
          /* @__PURE__ */ jsx(Link, { to: "/", className: "hover:text-[#DF1818] transition-colors focus:outline-none", children: "Home" }),
          /* @__PURE__ */ jsx("span", { className: "text-slate-400 mx-1 select-none", children: ">" }),
          /* @__PURE__ */ jsx("span", { className: "font-bold text-[#DF1818] tracking-tight", children: "Contact Us" })
        ] }),
        /* @__PURE__ */ jsxs("h1", { className: "text-xl sm:text-3xl lg:text-[52px] font-outfit font-extrabold tracking-tight text-[#11243e] leading-[1.2] lg:leading-[1.12] drop-shadow-sm", children: [
          "Contact ",
          /* @__PURE__ */ jsxs("span", { className: "text-[#DF1818]", children: [
            /* @__PURE__ */ jsx("br", {}),
            "Amigo Academy"
          ] })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-neutral-700 text-[10px] sm:text-[14px] leading-relaxed lg:leading-[1.65] font-medium max-w-md md:max-w-lg", children: "Have a question about courses, admissions, placements, or a franchise? Reach us directly by phone, WhatsApp, enquiry form, or visit any of our three Branches. We believe in honest guidance, without any pressure." }),
        /* @__PURE__ */ jsx("div", { className: "pt-1", children: /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: () => {
              var _a;
              (_a = document.getElementById("tell-us-how-we-can-help")) == null ? void 0 : _a.scrollIntoView({ behavior: "smooth" });
            },
            className: "inline-flex items-center justify-center bg-[#e31e24] hover:bg-[#c2141a] text-white font-sans font-bold text-[9px] sm:text-xs lg:text-[13px] px-4 py-2.5 sm:px-6 sm:py-3 lg:px-8 lg:py-3.5 rounded-full shadow-[0_12px_24px_rgba(227,30,36,0.22)] hover:shadow-[0_16px_32px_rgba(227,30,36,0.3)] transition-all duration-300 active:scale-95 group focus:outline-none whitespace-nowrap cursor-pointer",
            children: [
              "Contact Now",
              /* @__PURE__ */ jsx("span", { className: "ml-2 transition-transform duration-300 group-hover:translate-x-1 font-bold", children: "\u2794" })
            ]
          }
        ) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "w-full bg-[#5c6b7d] py-12 px-4 sm:px-6 md:px-8", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-3xl p-8 flex flex-col justify-between items-start text-left min-h-[200px] shadow-sm", children: [
        /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-full bg-[#fdf3e7] flex items-center justify-center text-[#7c5529]", children: /* @__PURE__ */ jsx("svg", { className: "w-5 h-5", fill: "none", stroke: "currentColor", strokeWidth: 2, viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" }) }) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h4", { className: "font-outfit font-extrabold text-[#0b2f61] text-base", children: "Call Us" }),
            /* @__PURE__ */ jsx("p", { className: "text-neutral-500 text-xs mt-1 font-semibold", children: "+919987588932" })
          ] })
        ] }),
        /* @__PURE__ */ jsx("a", { href: "tel:+919987588932", className: "text-[#e31e24] hover:text-[#c2141a] font-sans font-bold text-xs uppercase tracking-wider mt-4", children: "Call Now" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-3xl p-8 flex flex-col justify-between items-start text-left min-h-[200px] shadow-sm", children: [
        /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-full bg-[#fdf3e7] flex items-center justify-center text-[#7c5529]", children: /* @__PURE__ */ jsx("svg", { className: "w-5 h-5", fill: "none", stroke: "currentColor", strokeWidth: 2, viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" }) }) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h4", { className: "font-outfit font-extrabold text-[#0b2f61] text-base", children: "WhatsApp" }),
            /* @__PURE__ */ jsx("p", { className: "text-neutral-500 text-xs mt-1 font-semibold", children: "Chat with a counsellor" })
          ] })
        ] }),
        /* @__PURE__ */ jsx("a", { href: "https://wa.me/919987588932", target: "_blank", rel: "noopener noreferrer", className: "text-[#e31e24] hover:text-[#c2141a] font-sans font-bold text-xs uppercase tracking-wider mt-4", children: "Start Chat" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-3xl p-8 flex flex-col justify-between items-start text-left min-h-[200px] shadow-sm", children: [
        /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-full bg-[#fdf3e7] flex items-center justify-center text-[#7c5529]", children: /* @__PURE__ */ jsx("svg", { className: "w-5 h-5", fill: "none", stroke: "currentColor", strokeWidth: 2, viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" }) }) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h4", { className: "font-outfit font-extrabold text-[#0b2f61] text-base", children: "Email" }),
            /* @__PURE__ */ jsx("p", { className: "text-neutral-500 text-xs mt-1 font-semibold font-sans", children: "care@amigoacademy.in" })
          ] })
        ] }),
        /* @__PURE__ */ jsx("a", { href: "mailto:care@amigoacademy.in", className: "text-[#e31e24] hover:text-[#c2141a] font-sans font-bold text-xs uppercase tracking-wider mt-4", children: "Send Email" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-3xl p-8 flex flex-col justify-between items-start text-left min-h-[200px] shadow-sm", children: [
        /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-full bg-[#fdf3e7] flex items-center justify-center text-[#7c5529]", children: /* @__PURE__ */ jsx("svg", { className: "w-5 h-5", fill: "none", stroke: "currentColor", strokeWidth: 2, viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" }) }) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h4", { className: "font-outfit font-extrabold text-[#0b2f61] text-base", children: "Office Hours" }),
            /* @__PURE__ */ jsxs("p", { className: "text-neutral-500 text-xs mt-1 font-semibold", children: [
              "Monday \u2013 Saturday",
              /* @__PURE__ */ jsx("br", {}),
              "10:00 AM \u2013 7:00 PM"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs(
          "a",
          {
            href: "https://maps.app.goo.gl/VUcP8V3PtDAQdEPv5",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "text-[#e31e24] hover:text-[#c2141a] font-sans font-bold text-xs uppercase tracking-wider mt-4 flex items-center gap-1 group",
            children: [
              "Walk-ins Welcome",
              /* @__PURE__ */ jsx("span", { className: "transition-transform group-hover:translate-x-0.5", children: "\u2794" })
            ]
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "w-full bg-[#f1f5f9] py-16 px-4 sm:px-6 md:px-8", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto space-y-12 text-center", children: [
      /* @__PURE__ */ jsxs("div", { className: "space-y-4 max-w-2xl mx-auto flex flex-col items-center", children: [
        /* @__PURE__ */ jsx("span", { className: "bg-[#fdf3e7] text-[#7c5529] text-[10px] font-extrabold uppercase tracking-widest px-4 py-1.5 rounded-full border border-amber-500/10", children: "Our Mumbai Campuses" }),
        /* @__PURE__ */ jsx("h2", { className: "text-3xl sm:text-4xl font-outfit font-extrabold text-[#0b2f61]", children: "Visit Our Branches" }),
        /* @__PURE__ */ jsx("p", { className: "text-neutral-500 text-xs sm:text-sm leading-relaxed", children: "Choose the branch nearest to you \u2014 the same programs, faculty standards and placement support at all three." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-3xl p-8 flex flex-col justify-between shadow-sm border border-neutral-200/80 text-left min-h-[360px]", children: [
          /* @__PURE__ */ jsxs("div", { className: "space-y-5", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-3.5", children: [
              /* @__PURE__ */ jsx("div", { className: "w-11 h-11 rounded-full bg-[#1e3a8a] text-white flex items-center justify-center flex-shrink-0 text-sm", children: "\u{1F4CD}" }),
              /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("h4", { className: "font-outfit font-extrabold text-[#0b2f61] text-base leading-tight", children: "Ghatkopar" }) })
            ] }),
            /* @__PURE__ */ jsxs("p", { className: "text-neutral-500 text-xs sm:text-[13px] leading-relaxed pt-1", children: [
              "SAI INFOTECH, 107 & 108, Patel Chowk",
              /* @__PURE__ */ jsx("br", {}),
              "opposite Ghatkopar Station, Saibaba Nagar",
              /* @__PURE__ */ jsx("br", {}),
              "Pant Nagar, Ghatkopar East, Mumbai,",
              /* @__PURE__ */ jsx("br", {}),
              "Maharashtra 400077"
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-5 pt-6 border-t border-neutral-100 mt-6", children: [
            /* @__PURE__ */ jsxs("a", { href: "tel:+919987588932", className: "flex items-center space-x-2 text-neutral-800 hover:text-[#e31e24] transition-colors", children: [
              /* @__PURE__ */ jsx("span", { className: "text-neutral-400 text-xs", children: "\u{1F4DE}" }),
              /* @__PURE__ */ jsx("span", { className: "text-xs sm:text-sm font-extrabold font-sans", children: "+919987588932" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-3.5 w-full", children: [
              /* @__PURE__ */ jsxs(
                "button",
                {
                  onClick: () => {
                    var _a;
                    setSelectedMapTab("ghatkopar");
                    (_a = document.getElementById("interactive-map")) == null ? void 0 : _a.scrollIntoView({ behavior: "smooth" });
                  },
                  className: "bg-[#0b2f61] hover:bg-[#072042] text-white text-[11px] font-bold py-3 rounded-full flex items-center justify-center gap-1.5 shadow-sm active:scale-95 transition-all cursor-pointer",
                  children: [
                    /* @__PURE__ */ jsx("span", { children: "\u2708\uFE0F" }),
                    " View Map"
                  ]
                }
              ),
              /* @__PURE__ */ jsxs(
                "a",
                {
                  href: "tel:+919987588932",
                  className: "bg-[#e31e24] hover:bg-[#c2141a] text-white text-[11px] font-bold py-3 rounded-full flex items-center justify-center gap-1.5 shadow-sm active:scale-95 transition-all",
                  children: [
                    /* @__PURE__ */ jsx("span", { children: "\u{1F4DE}" }),
                    " Call"
                  ]
                }
              )
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-3xl p-8 flex flex-col justify-between shadow-sm border border-neutral-200/80 text-left min-h-[360px]", children: [
          /* @__PURE__ */ jsxs("div", { className: "space-y-5", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-3.5", children: [
              /* @__PURE__ */ jsx("div", { className: "w-11 h-11 rounded-full bg-[#1e3a8a] text-white flex items-center justify-center flex-shrink-0 text-sm", children: "\u{1F4CD}" }),
              /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("h4", { className: "font-outfit font-extrabold text-[#0b2f61] text-base leading-tight", children: "Andheri" }) })
            ] }),
            /* @__PURE__ */ jsxs("p", { className: "text-neutral-500 text-xs sm:text-[13px] leading-relaxed pt-1", children: [
              "902, 9th, Time Chambers, Swami Vivekanand",
              /* @__PURE__ */ jsx("br", {}),
              "Rd, Andheri West, Mumbai, Maharashtra",
              /* @__PURE__ */ jsx("br", {}),
              "400058"
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-5 pt-6 border-t border-neutral-100 mt-6", children: [
            /* @__PURE__ */ jsxs("a", { href: "tel:+919987588932", className: "flex items-center space-x-2 text-neutral-800 hover:text-[#e31e24] transition-colors", children: [
              /* @__PURE__ */ jsx("span", { className: "text-neutral-400 text-xs", children: "\u{1F4DE}" }),
              /* @__PURE__ */ jsx("span", { className: "text-xs sm:text-sm font-extrabold font-sans", children: "+919987588932" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-3.5 w-full", children: [
              /* @__PURE__ */ jsxs(
                "button",
                {
                  onClick: () => {
                    var _a;
                    setSelectedMapTab("andheri");
                    (_a = document.getElementById("interactive-map")) == null ? void 0 : _a.scrollIntoView({ behavior: "smooth" });
                  },
                  className: "bg-[#0b2f61] hover:bg-[#072042] text-white text-[11px] font-bold py-3 rounded-full flex items-center justify-center gap-1.5 shadow-sm active:scale-95 transition-all cursor-pointer",
                  children: [
                    /* @__PURE__ */ jsx("span", { children: "\u2708\uFE0F" }),
                    " View Map"
                  ]
                }
              ),
              /* @__PURE__ */ jsxs(
                "a",
                {
                  href: "tel:+919987588932",
                  className: "bg-[#e31e24] hover:bg-[#c2141a] text-white text-[11px] font-bold py-3 rounded-full flex items-center justify-center gap-1.5 shadow-sm active:scale-95 transition-all",
                  children: [
                    /* @__PURE__ */ jsx("span", { children: "\u{1F4DE}" }),
                    " Call"
                  ]
                }
              )
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-3xl p-8 flex flex-col justify-between shadow-sm border border-neutral-200/80 text-left min-h-[360px]", children: [
          /* @__PURE__ */ jsxs("div", { className: "space-y-5", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-3.5", children: [
              /* @__PURE__ */ jsx("div", { className: "w-11 h-11 rounded-full bg-[#1e3a8a] text-white flex items-center justify-center flex-shrink-0 text-sm", children: "\u{1F4CD}" }),
              /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("h4", { className: "font-outfit font-extrabold text-[#0b2f61] text-base leading-tight", children: "Thane" }) })
            ] }),
            /* @__PURE__ */ jsxs("p", { className: "text-neutral-500 text-xs sm:text-[13px] leading-relaxed pt-1", children: [
              "A204, 2nd floor, Amigo Academy, Thakor",
              /* @__PURE__ */ jsx("br", {}),
              "Niwas CHS, above Tip Top Mithaiwala, Jambli",
              /* @__PURE__ */ jsx("br", {}),
              "Naka, Thane West, Thane, Maharashtra",
              /* @__PURE__ */ jsx("br", {}),
              "400602"
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-5 pt-6 border-t border-neutral-100 mt-6", children: [
            /* @__PURE__ */ jsxs("a", { href: "tel:+919987588932", className: "flex items-center space-x-2 text-neutral-800 hover:text-[#e31e24] transition-colors", children: [
              /* @__PURE__ */ jsx("span", { className: "text-neutral-400 text-xs", children: "\u{1F4DE}" }),
              /* @__PURE__ */ jsx("span", { className: "text-xs sm:text-sm font-extrabold font-sans", children: "+919987588932" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-3.5 w-full", children: [
              /* @__PURE__ */ jsxs(
                "button",
                {
                  onClick: () => {
                    var _a;
                    setSelectedMapTab("thane");
                    (_a = document.getElementById("interactive-map")) == null ? void 0 : _a.scrollIntoView({ behavior: "smooth" });
                  },
                  className: "bg-[#0b2f61] hover:bg-[#072042] text-white text-[11px] font-bold py-3 rounded-full flex items-center justify-center gap-1.5 shadow-sm active:scale-95 transition-all cursor-pointer",
                  children: [
                    /* @__PURE__ */ jsx("span", { children: "\u2708\uFE0F" }),
                    " View Map"
                  ]
                }
              ),
              /* @__PURE__ */ jsxs(
                "a",
                {
                  href: "tel:+919987588932",
                  className: "bg-[#e31e24] hover:bg-[#c2141a] text-white text-[11px] font-bold py-3 rounded-full flex items-center justify-center gap-1.5 shadow-sm active:scale-95 transition-all",
                  children: [
                    /* @__PURE__ */ jsx("span", { children: "\u{1F4DE}" }),
                    " Call"
                  ]
                }
              )
            ] })
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { id: "interactive-map", className: "w-full bg-white py-16 px-4 sm:px-6 md:px-8 border-t border-neutral-100", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto space-y-10 text-center", children: [
      /* @__PURE__ */ jsxs("div", { className: "space-y-4 max-w-2xl mx-auto flex flex-col items-center", children: [
        /* @__PURE__ */ jsx("span", { className: "bg-[#fdf3e7] text-[#7c5529] text-[10px] font-extrabold uppercase tracking-widest px-4 py-1.5 rounded-full border border-amber-500/10", children: "Interactive Map" }),
        /* @__PURE__ */ jsx("h2", { className: "text-3xl font-outfit font-extrabold text-[#0b2f61]", children: "Find Us On Google Maps" }),
        /* @__PURE__ */ jsx("p", { className: "text-neutral-500 text-xs sm:text-sm leading-relaxed", children: "Toggle the tabs below to view the interactive map location and get directions for each of our Mumbai campuses." })
      ] }),
      /* @__PURE__ */ jsx(MapTabs, { activeTab: selectedMapTab, onTabChange: setSelectedMapTab })
    ] }) }),
    /* @__PURE__ */ jsx("section", { id: "tell-us-how-we-can-help", className: "w-full bg-[#f1f5f9] py-16 px-4 sm:px-6 md:px-8 border-t border-neutral-200/50", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto space-y-12 text-center", children: [
      /* @__PURE__ */ jsxs("div", { className: "space-y-4 max-w-2xl mx-auto flex flex-col items-center", children: [
        /* @__PURE__ */ jsx("span", { className: "bg-[#fdf3e7] text-[#7c5529] text-[10px] font-extrabold uppercase tracking-widest px-4 py-1.5 rounded-full border border-amber-500/10", children: "Send An Enquiry" }),
        /* @__PURE__ */ jsx("h2", { className: "text-3xl sm:text-4xl font-outfit font-extrabold text-[#0b2f61]", children: "Tell Us How We Can Help" }),
        /* @__PURE__ */ jsx("p", { className: "text-neutral-500 text-xs sm:text-sm leading-relaxed", children: "Share a few details and the right counsellor will get back to you with clear, honest answers." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-8 text-left items-stretch", children: [
        /* @__PURE__ */ jsx("div", { className: "lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-neutral-200/60 flex flex-col justify-between", children: /* @__PURE__ */ jsx(EnquiryForm, {}) }),
        /* @__PURE__ */ jsxs("div", { className: "lg:col-span-5 bg-gradient-to-b from-[#0b2f61] to-[#1e3a8a] text-white rounded-3xl p-8 sm:p-10 flex flex-col justify-between shadow-md relative overflow-hidden", children: [
          /* @__PURE__ */ jsxs("div", { className: "space-y-6 z-10", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-xl sm:text-2xl font-outfit font-extrabold text-white", children: "Prefer to talk instead?" }),
            /* @__PURE__ */ jsxs("p", { className: "text-blue-100/80 text-xs sm:text-sm leading-relaxed", children: [
              "Call or WhatsApp ",
              /* @__PURE__ */ jsx("a", { href: "tel:+919987588932", className: "text-white underline font-bold", children: "+919987588932" }),
              " during office hours and speak to an admission counsellor straight away \u2014 no forms, no waiting."
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-4 pt-4 border-t border-white/10", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-3 text-xs sm:text-[13px] text-blue-100", children: [
                /* @__PURE__ */ jsx("span", { className: "text-[#ffd300] text-sm", children: "\u2714" }),
                /* @__PURE__ */ jsx("span", { children: "Free career guidance for students and parents" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-3 text-xs sm:text-[13px] text-blue-100", children: [
                /* @__PURE__ */ jsx("span", { className: "text-[#ffd300] text-sm", children: "\u2714" }),
                /* @__PURE__ */ jsx("span", { children: "Course fees, batch dates and eligibility explained" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-3 text-xs sm:text-[13px] text-blue-100", children: [
                /* @__PURE__ */ jsx("span", { className: "text-[#ffd300] text-sm", children: "\u2714" }),
                /* @__PURE__ */ jsx("span", { children: "Franchise and hiring enquiries handled by head office" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "absolute -bottom-16 -right-16 w-44 h-44 rounded-full bg-white/5 blur-xl pointer-events-none" })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "w-full bg-[#5c6b7d] py-16 px-4 sm:px-6 md:px-8 border-t border-slate-500/10", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto space-y-12 text-center", children: [
      /* @__PURE__ */ jsxs("div", { className: "space-y-4 max-w-2xl mx-auto flex flex-col items-center", children: [
        /* @__PURE__ */ jsx("span", { className: "bg-[#fdf3e7] text-[#7c5529] text-[10px] font-extrabold uppercase tracking-widest px-4 py-1.5 rounded-full border border-amber-500/10", children: "Student & Parent Support" }),
        /* @__PURE__ */ jsx("h2", { className: "text-3xl sm:text-4xl font-outfit font-extrabold text-[#fff] drop-shadow-sm", children: "Why Contact Amigo?" }),
        /* @__PURE__ */ jsx("p", { className: "text-slate-200 text-xs sm:text-sm leading-relaxed", children: "Every enquiry is handled by a real counsellor who knows the courses, the branches and the hiring market." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left", children: [
        /* @__PURE__ */ jsx("div", { className: "bg-white rounded-3xl p-8 flex flex-col justify-between items-start shadow-sm border border-neutral-100 min-h-[180px]", children: /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-full bg-[#fdf3e7] flex items-center justify-center text-[#7c5529] text-xs", children: "\u{1F9ED}" }),
          /* @__PURE__ */ jsx("h4", { className: "font-outfit font-extrabold text-[#0b2f61] text-sm sm:text-base", children: "Free Career Guidance" }),
          /* @__PURE__ */ jsx("p", { className: "text-neutral-500 text-xs leading-relaxed font-semibold", children: "Talk through aviation and technology career paths with a counsellor before you commit to anything." })
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "bg-white rounded-3xl p-8 flex flex-col justify-between items-start shadow-sm border border-neutral-100 min-h-[180px]", children: /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-full bg-[#fdf3e7] flex items-center justify-center text-[#7c5529] text-xs", children: "\u{1F393}" }),
          /* @__PURE__ */ jsx("h4", { className: "font-outfit font-extrabold text-[#0b2f61] text-sm sm:text-base", children: "Expert Admission Counselling" }),
          /* @__PURE__ */ jsx("p", { className: "text-neutral-500 text-xs leading-relaxed font-semibold", children: "Get clear answers on eligibility, batch dates, fees and documents for every Amigo program." })
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "bg-white rounded-3xl p-8 flex flex-col justify-between items-start shadow-sm border border-neutral-100 min-h-[180px]", children: /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-full bg-[#fdf3e7] flex items-center justify-center text-[#7c5529] text-xs", children: "\u{1F4BC}" }),
          /* @__PURE__ */ jsx("h4", { className: "font-outfit font-extrabold text-[#0b2f61] text-sm sm:text-base", children: "Placement Assistance" }),
          /* @__PURE__ */ jsx("p", { className: "text-neutral-500 text-xs leading-relaxed font-semibold", children: "Understand how our placement support works and which employers hire from your branch." })
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "bg-white rounded-3xl p-8 flex flex-col justify-between items-start shadow-sm border border-neutral-100 min-h-[180px]", children: /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-full bg-[#fdf3e7] flex items-center justify-center text-[#7c5529] text-xs", children: "\u{1F3C5}" }),
          /* @__PURE__ */ jsx("h4", { className: "font-outfit font-extrabold text-[#0b2f61] text-sm sm:text-base", children: "Scholarship Information" }),
          /* @__PURE__ */ jsx("p", { className: "text-neutral-500 text-xs leading-relaxed font-semibold", children: "Check which merit and need-based scholarship options you or your child may qualify for." })
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "bg-white rounded-3xl p-8 flex flex-col justify-between items-start shadow-sm border border-neutral-100 min-h-[180px]", children: /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-full bg-[#fdf3e7] flex items-center justify-center text-[#7c5529] text-xs", children: "\u{1F3E2}" }),
          /* @__PURE__ */ jsx("h4", { className: "font-outfit font-extrabold text-[#0b2f61] text-sm sm:text-base", children: "Franchise Support" }),
          /* @__PURE__ */ jsx("p", { className: "text-neutral-500 text-xs leading-relaxed font-semibold", children: "Partner enquiries are handled directly by our head office team in Ghatkopar, Mumbai." })
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "bg-white rounded-3xl p-8 flex flex-col justify-between items-start shadow-sm border border-neutral-100 min-h-[180px]", children: /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-full bg-[#fdf3e7] flex items-center justify-center text-[#7c5529] text-xs", children: "\u23F1\uFE0F" }),
          /* @__PURE__ */ jsx("h4", { className: "font-outfit font-extrabold text-[#0b2f61] text-sm sm:text-base", children: "Quick Response" }),
          /* @__PURE__ */ jsx("p", { className: "text-neutral-500 text-xs leading-relaxed font-semibold", children: "Call or WhatsApp during office hours and you will usually speak to someone right away." })
        ] }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs("section", { className: "bg-[#eef1fa] py-16 px-6 border-t border-neutral-200/50", children: [
      /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto text-center mb-10", children: [
        /* @__PURE__ */ jsx("span", { className: "inline-block bg-[#fdecc8] text-[#c07f1f] text-[10px] font-bold tracking-wider uppercase px-3.5 py-1.5 rounded-full mb-5", children: "Before you visit" }),
        /* @__PURE__ */ jsx("h2", { className: "text-[32px] font-outfit font-extrabold text-[#0b2f61] tracking-tight mb-3", children: "Frequently Asked Questions" }),
        /* @__PURE__ */ jsx("p", { className: "text-neutral-500 text-sm sm:text-base", children: "Quick answers about branches, appointments and how fast our team replies." })
      ] }),
      /* @__PURE__ */ jsx(FaqAccordion, {}),
      /* @__PURE__ */ jsx("div", { className: "mt-10 text-center", children: /* @__PURE__ */ jsxs(
        "button",
        {
          onClick: () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          },
          className: "inline-flex items-center gap-2 bg-[#fffbf0] border border-[#ffecd1] px-6 py-3 rounded-full shadow-[0_4px_10px_rgba(255,236,209,0.2)] hover:scale-105 transition-all cursor-pointer",
          children: [
            /* @__PURE__ */ jsx("span", { className: "text-[#e31e24] font-bold text-xs sm:text-sm", children: "\u2728" }),
            /* @__PURE__ */ jsx("span", { className: "text-[#0b2f61] font-sans font-bold text-[10px] sm:text-xs tracking-wider uppercase", children: "If you have anymore question, please contact us" })
          ]
        }
      ) })
    ] }),
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
function EnquiryForm() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    type: "Admission",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);
    try {
      await submitContactForm({
        enquiry_type: formData.type,
        name: formData.name,
        phone: formData.mobile,
        email: formData.email,
        message: formData.message
      });
      setSubmitted(true);
      setFormData({ name: "", mobile: "", email: "", type: "Admission", message: "" });
      Swal.fire({
        title: "Enquiry Submitted!",
        text: "Thank you for contacting us. Redirecting to confirmation page...",
        icon: "success",
        confirmButtonColor: "#1C3E8A",
        timer: 2e3,
        timerProgressBar: true,
        showConfirmButton: false
      }).then(() => {
        navigate({ to: "/thank-you" });
      });
    } catch (error) {
      console.error("Contact submission error:", error);
      Swal.fire({
        title: "Submission Failed",
        text: "Failed to submit enquiry. Please try again.",
        icon: "error",
        confirmButtonColor: "#DF1818"
      });
    } finally {
      setLoading(false);
    }
  };
  if (submitted) {
    return /* @__PURE__ */ jsxs("div", { className: "bg-emerald-50 border border-emerald-100 text-emerald-800 p-8 rounded-2xl text-center space-y-3 my-auto", children: [
      /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto text-xl font-bold", children: "\u2713" }),
      /* @__PURE__ */ jsx("h3", { className: "font-outfit font-bold text-lg", children: "Enquiry Submitted!" }),
      /* @__PURE__ */ jsx("p", { className: "text-xs text-emerald-600", children: "Our counselors will contact you shortly." })
    ] });
  }
  return /* @__PURE__ */ jsxs("form", { onSubmit: handleFormSubmit, className: "space-y-5 text-left flex flex-col justify-between h-full", children: [
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col space-y-1.5", children: [
        /* @__PURE__ */ jsx("label", { className: "text-[10px] font-extrabold text-[#0b2f61] uppercase tracking-wider font-sans", children: "Name" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "text",
            required: true,
            value: formData.name,
            onChange: (e) => setFormData({ ...formData, name: e.target.value }),
            placeholder: "Your full name",
            className: "border border-neutral-200 rounded-xl px-4 py-3 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#0b2f61]/10 focus:border-[#0b2f61] placeholder-neutral-400 font-medium"
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col space-y-1.5", children: [
        /* @__PURE__ */ jsx("label", { className: "text-[10px] font-extrabold text-[#0b2f61] uppercase tracking-wider font-sans", children: "Mobile" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "tel",
            required: true,
            pattern: "[0-9]{10}",
            value: formData.mobile,
            onChange: (e) => setFormData({ ...formData, mobile: e.target.value }),
            placeholder: "10-digit mobile number",
            className: "border border-neutral-200 rounded-xl px-4 py-3 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#0b2f61]/10 focus:border-[#0b2f61] placeholder-neutral-400 font-medium"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col space-y-1.5", children: [
        /* @__PURE__ */ jsx("label", { className: "text-[10px] font-extrabold text-[#0b2f61] uppercase tracking-wider font-sans", children: "Email" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "email",
            required: true,
            value: formData.email,
            onChange: (e) => setFormData({ ...formData, email: e.target.value }),
            placeholder: "you@example.com",
            className: "border border-neutral-200 rounded-xl px-4 py-3 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#0b2f61]/10 focus:border-[#0b2f61] placeholder-neutral-400 font-medium"
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col space-y-1.5", children: [
        /* @__PURE__ */ jsx("label", { className: "text-[10px] font-extrabold text-[#0b2f61] uppercase tracking-wider font-sans", children: "Enquiry Type" }),
        /* @__PURE__ */ jsxs(
          "select",
          {
            value: formData.type,
            onChange: (e) => setFormData({ ...formData, type: e.target.value }),
            className: "border border-neutral-200 rounded-xl px-4 py-3 text-xs sm:text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#0b2f61]/10 focus:border-[#0b2f61] font-medium text-neutral-700",
            children: [
              /* @__PURE__ */ jsx("option", { children: "Admission" }),
              /* @__PURE__ */ jsx("option", { children: "Franchise" }),
              /* @__PURE__ */ jsx("option", { children: "Placement/Recruitment" }),
              /* @__PURE__ */ jsx("option", { children: "Other Query" })
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col space-y-1.5", children: [
      /* @__PURE__ */ jsx("label", { className: "text-[10px] font-extrabold text-[#0b2f61] uppercase tracking-wider font-sans", children: "Message" }),
      /* @__PURE__ */ jsx(
        "textarea",
        {
          rows: 3,
          required: true,
          value: formData.message,
          onChange: (e) => setFormData({ ...formData, message: e.target.value }),
          placeholder: "Which course or branch are you interested in?",
          className: "border border-neutral-200 rounded-xl px-4 py-3 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#0b2f61]/10 focus:border-[#0b2f61] placeholder-neutral-400 font-medium resize-none"
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "space-y-4 pt-2", children: [
      /* @__PURE__ */ jsxs(
        "button",
        {
          type: "submit",
          className: "w-full bg-[#e31e24] hover:bg-[#c2141a] text-white font-sans font-bold text-xs sm:text-sm py-4 rounded-full shadow-[0_12px_24px_rgba(227,30,36,0.18)] transition-all active:scale-95 uppercase tracking-wider flex items-center justify-center gap-2",
          children: [
            /* @__PURE__ */ jsx("span", { children: "\u{1F680}" }),
            " Send Enquiry"
          ]
        }
      ),
      /* @__PURE__ */ jsx("p", { className: "text-[10px] text-neutral-400 flex items-center justify-center gap-1 font-semibold", children: "\u{1F6E1}\uFE0F Our team usually responds within one business day." })
    ] })
  ] });
}
function MapTabs({ activeTab: propActiveTab, onTabChange } = {}) {
  const [internalTab, setInternalTab] = useState("ghatkopar");
  const activeTab = propActiveTab || internalTab;
  const handleTabClick = (tab) => {
    setInternalTab(tab);
    if (onTabChange) {
      onTabChange(tab);
    }
  };
  const mapUrls = {
    ghatkopar: "https://maps.google.com/maps?q=Amigo%20Academy%20Ghatkopar%20Sai%20Infotech%20Mumbai&t=&z=16&ie=UTF8&iwloc=&output=embed",
    andheri: "https://maps.google.com/maps?q=Amigo%20Academy%20Andheri%20Time%20Chambers%20Mumbai&t=&z=16&ie=UTF8&iwloc=&output=embed",
    thane: "https://maps.google.com/maps?q=Amigo%20Academy%20Thane%20Thakor%20Niwas%20Mumbai&t=&z=16&ie=UTF8&iwloc=&output=embed"
  };
  return /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsx("div", { className: "flex justify-center space-x-2 border-b border-neutral-100 pb-4 max-w-md mx-auto", children: ["ghatkopar", "andheri", "thane"].map((tab) => /* @__PURE__ */ jsx(
      "button",
      {
        onClick: () => handleTabClick(tab),
        className: `px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${activeTab === tab ? "bg-[#0b2f61] text-white shadow-md scale-105" : "bg-neutral-50 text-neutral-500 hover:bg-neutral-100 hover:text-neutral-800"}`,
        children: tab
      },
      tab
    )) }),
    /* @__PURE__ */ jsx("div", { className: "relative w-full h-[400px] sm:h-[480px] rounded-3xl overflow-hidden shadow-xl border border-neutral-100 bg-neutral-50", children: /* @__PURE__ */ jsx(
      "iframe",
      {
        src: mapUrls[activeTab],
        width: "100%",
        height: "100%",
        style: { border: 0 },
        allowFullScreen: true,
        loading: "lazy",
        referrerPolicy: "no-referrer-when-downgrade",
        title: `${activeTab} campus location map`,
        className: "absolute inset-0 w-full h-full"
      }
    ) })
  ] });
}
function FaqAccordion() {
  const [activeIndex, setActiveIndex] = useState(null);
  const faqs = [
    {
      question: "Which branch should I visit?",
      answer: "You should visit the branch closest to your location. We offer the exact same curriculum, certified trainers, placement cells, and infrastructure support across our Ghatkopar, Andheri, and Thane campuses."
    },
    {
      question: "Can I enquire through WhatsApp?",
      answer: "Yes, absolutely! You can send us a message or request a call back directly on our official WhatsApp number +919987588932. Our counselors are online from 10:00 AM to 7:00 PM."
    },
    {
      question: "Can I book a counselling session?",
      answer: "Yes. Both online guidance sessions and face-to-face personal counseling sessions are free of charge. You can walk in during office hours or call us to book an appointment with our senior counselors."
    },
    {
      question: "Do I need an appointment to visit?",
      answer: "No, appointments are not mandatory from Monday to Saturday. However, if you are looking to visit on a Sunday, it is strictly by prior appointment only as our branches are otherwise closed."
    },
    {
      question: "Which courses are available?",
      answer: "We offer comprehensive courses in Cabin Crew (Air Hostess) & Hospitality Management, Airport Ground Staff & Hospitality Management and AI & Data Science."
    },
    {
      question: "How quickly will someone contact me?",
      answer: "After submitting our enquiry form, one of our senior academic advisors will reach out to you within 2 to 24 business hours to address your queries."
    }
  ];
  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return /* @__PURE__ */ jsx("div", { className: "space-y-3.5 max-w-4xl mx-auto", children: faqs.map((faq, index) => {
    const isOpen = activeIndex === index;
    return /* @__PURE__ */ jsxs(
      "div",
      {
        className: `bg-white shadow-[0_2px_10px_rgba(11,47,97,0.03)] border border-[#e2e8f0]/85 transition-all duration-300 ${isOpen ? "rounded-[22px]" : "rounded-full"}`,
        children: [
          /* @__PURE__ */ jsxs(
            "button",
            {
              onClick: () => toggleAccordion(index),
              className: "w-full flex items-center justify-between px-7 py-5 text-left focus:outline-none group cursor-pointer",
              children: [
                /* @__PURE__ */ jsx("span", { className: "text-base sm:text-lg font-outfit font-extrabold text-[#0b2f61] tracking-tight", children: faq.question }),
                /* @__PURE__ */ jsx(
                  "span",
                  {
                    className: `text-neutral-400 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`,
                    children: /* @__PURE__ */ jsx(
                      "svg",
                      {
                        className: "w-5 h-5 text-neutral-400 group-hover:text-[#0b2f61] transition-colors",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: 2.5,
                        viewBox: "0 0 24 24",
                        children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M19 9l-7 7-7-7" })
                      }
                    )
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsx(
            "div",
            {
              className: `transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? "max-h-[350px] border-t border-neutral-100/70 bg-neutral-50/20" : "max-h-0"}`,
              children: /* @__PURE__ */ jsx("div", { className: "px-7 py-5 text-sm sm:text-base text-neutral-600 font-medium leading-relaxed text-left", children: faq.answer })
            }
          )
        ]
      },
      index
    );
  }) });
}
const SplitComponent = Contact;

export { SplitComponent as component };
//# sourceMappingURL=contact-D9yaXWRv.mjs.map
