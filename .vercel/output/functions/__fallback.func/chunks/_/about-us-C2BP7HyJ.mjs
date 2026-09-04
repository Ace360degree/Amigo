import process from 'node:process';globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import { jsxs, jsx } from 'react/jsx-runtime';
import { useState } from 'react';
import { useNavigate, Link } from '@tanstack/react-router';
import { S as Studentpf1, a as Studentimg1, b as Studentpf3, c as Studentimg3, d as Studentpf2, e as Studentimg2 } from './Studentpf3-BszBCtiH.mjs';
import { S as Studentpf4, a as Student4, b as Studentpf5, c as Student5 } from './Studentpf5-Bc2yn57C.mjs';

const Awards1 = "/assets/Awards1-B-xo8mfn.png";
const Awards2 = "/assets/Awards2-DI9pVCUK.png";
const Awards3 = "/assets/Awards3-G-ORD14v.png";
const Awards4 = "/assets/Awards4-DTREKhzR.png";
const Awards5 = "/assets/Awards5-BNsbec9X.png";
const Awards6 = "/assets/Awards6-ngyqNHrM.png";
const Awards7 = "/assets/Awards7-DNUvKbja.png";
const Awards8 = "/assets/Awards8-DhlEbNu9.png";
function About({ setCurrentPage } = {}) {
  useNavigate();
  const [activeAccordion, setActiveAccordion] = useState(null);
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col space-y-20 pb-20", children: [
    /* @__PURE__ */ jsxs("section", { className: "w-full bg-[#f1f5f9] min-h-[420px] sm:min-h-[500px] lg:h-[520px] relative overflow-hidden flex items-center border-b border-neutral-200/50", children: [
      /* @__PURE__ */ jsxs("div", { className: "hidden lg:block absolute top-0 right-0 h-full w-[50%] z-0", children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            src: new URL("../assets/img/aboutushero.png", globalThis._importMeta_.url).href,
            alt: "Cabin Crew Cabin Flight",
            className: "h-full w-full object-cover lg:object-left-bottom",
            onError: (e) => {
              e.currentTarget.src = "https://images.unsplash.com/photo-1540962351504-03099e0a754b?auto=format&fit=crop&q=80&w=800";
            }
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-[#f1f5f9] via-[#f1f5f9]/70 to-transparent z-10" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "block lg:hidden absolute inset-0 z-0 w-full h-full", children: /* @__PURE__ */ jsx(
        "img",
        {
          src: new URL("../assets/img/mobileheroaboutus.png", globalThis._importMeta_.url).href,
          alt: "Cabin Crew Cabin Flight Mobile",
          className: "w-full h-full object-cover object-[right_center]",
          onError: (e) => {
            e.currentTarget.src = "https://images.unsplash.com/photo-1540962351504-03099e0a754b?auto=format&fit=crop&q=80&w=800";
          }
        }
      ) }),
      /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto w-full px-4 sm:px-6 md:px-8 relative z-20 flex items-center h-full py-12 lg:py-0", children: /* @__PURE__ */ jsxs("div", { className: "w-[50%] sm:w-[50%] lg:w-full max-w-[480px] space-y-4 sm:space-y-6 text-left", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1.5 text-xs sm:text-[13px] font-sans font-medium text-slate-400", children: [
          /* @__PURE__ */ jsx(Link, { to: "/", className: "hover:text-[#DF1818] transition-colors focus:outline-none", children: "Home" }),
          /* @__PURE__ */ jsx("span", { className: "text-slate-400 mx-1 select-none", children: ">" }),
          /* @__PURE__ */ jsx("span", { className: "font-bold text-[#DF1818] tracking-tight", children: "About Us" })
        ] }),
        /* @__PURE__ */ jsx("h1", { className: "text-xl sm:text-3xl lg:text-[48px] font-outfit font-extrabold text-[#0b2f61] leading-[1.2] lg:leading-[1.1] tracking-tight", children: "About Us" }),
        /* @__PURE__ */ jsx("div", { className: "space-y-3 sm:space-y-4 font-sans font-semibold text-neutral-600 text-[15px] sm:text-[15px] leading-relaxed", children: /* @__PURE__ */ jsx("p", { children: "Amigo Academy pvt Ltd is a career-focused training institute, founded in 2017, helping students build industry-ready skills and achieve successful careers in aviation." }) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "bg-slate-50/30 py-12 sm:py-16 border-t border-slate-100/80", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6", children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6", children: [
      { value: "10,000+", label: "Students Trained" },
      { value: "9+", label: "Years of Excellence" },
      { value: "3", label: "Specialized Career Paths" },
      { value: "200+", label: "Hiring Partners" }
    ].map((stat, idx) => /* @__PURE__ */ jsxs(
      "div",
      {
        className: "bg-white rounded-[24px] border border-slate-100/80 shadow-[0_8px_30px_rgba(0,0,0,0.015)] p-5 sm:p-10 flex flex-col items-center justify-center text-center transition-all duration-300 hover:shadow-[0_16px_40px_rgba(0,0,0,0.03)] hover:-translate-y-0.5",
        children: [
          /* @__PURE__ */ jsx("span", { className: "text-xl sm:text-[38px] font-outfit font-extrabold text-[#0b2f61] tracking-tight leading-none mb-3", children: stat.value }),
          /* @__PURE__ */ jsx("span", { className: "text-slate-500 font-sans font-bold text-[10px] sm:text-[13px] tracking-wide", children: stat.label })
        ]
      },
      idx
    )) }) }) }),
    /* @__PURE__ */ jsx("section", { className: "bg-slate-50/30 py-20 sm:py-24 border-t border-slate-100/80", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto px-6", children: [
      /* @__PURE__ */ jsx("div", { className: "flex flex-col items-center text-center mb-12", children: /* @__PURE__ */ jsx("h2", { className: "text-3xl sm:text-4xl font-extrabold text-[#0f2a4a] leading-tight font-sans tracking-tight mb-4", children: "What Makes Amigo Academy Different" }) }),
      /* @__PURE__ */ jsx("div", { className: "max-w-2xl mx-auto mt-10 space-y-5", children: [
        "Training That Delivers Real Career Outcomes",
        "Across every vertical, our approach remains consistent",
        "Industry-aligned curriculum designed for real-world roles",
        "Experienced trainers with domain expertise Experienced trainers with domain expertise",
        "Interview preparation and placement support",
        "Nationally recognized certifications and affiliations",
        "We don't believe in one-size-fits-all education \u2014 we build professionals who are job-ready from day one."
      ].map((text, index) => /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-4", children: [
        /* @__PURE__ */ jsx("div", { className: "w-5 h-5 rounded-full bg-[#f6a619] flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm", children: /* @__PURE__ */ jsx("svg", { className: "w-3.5 h-3.5 text-white", fill: "none", stroke: "currentColor", strokeWidth: "3", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M4.5 12.75l6 6 9-13.5" }) }) }),
        /* @__PURE__ */ jsx("p", { className: "text-slate-600 font-sans font-semibold text-xs sm:text-sm leading-relaxed pt-0.5", children: text })
      ] }, index)) })
    ] }) }),
    /* @__PURE__ */ jsx(
      "section",
      {
        style: { backgroundColor: "#2e5185" },
        className: "w-full py-16 px-4 sm:px-6 md:px-8 text-white text-center border-t border-b border-neutral-100",
        children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto space-y-10", children: [
          /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
            /* @__PURE__ */ jsx("h2", { className: "text-2xl sm:text-3xl font-outfit font-extrabold text-white", children: "Ready to Kickstart Your Career with Amigo Academy?" }),
            /* @__PURE__ */ jsx("p", { className: "text-neutral-200/90 text-xs sm:text-sm font-semibold", children: "Connect with Amigo Academy Today!" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-[#244270]/90 rounded-3xl p-6 sm:p-8 border border-white/10 flex flex-col lg:flex-row items-center justify-between gap-6 text-left shadow-[0_15px_35px_rgba(11,47,97,0.15)]", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3 w-full lg:w-auto pb-4 lg:pb-0", children: [
              /* @__PURE__ */ jsx("span", { className: "text-[#dfaa29] text-xl mt-1", children: "\u{1F4CD}" }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-1 max-w-[320px]", children: [
                /* @__PURE__ */ jsx("span", { className: "text-[10px] text-neutral-300 font-bold block uppercase tracking-wider", children: "Amigo Academy Pvt Ltd" }),
                /* @__PURE__ */ jsx("p", { className: "text-neutral-200 text-xs leading-relaxed font-semibold", children: "107 & 108, Sai Infotech, Patel Chowk, opp Railway Station, Pant Nagar - Ghatkopar East, Mumbai - MH 400077" })
              ] })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "hidden lg:block h-12 w-[1px] bg-white/10" }),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-3 w-full lg:w-auto pb-4 lg:pb-0", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ jsx("span", { className: "text-[#dfaa29] text-lg", children: "\u{1F4DE}" }),
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-neutral-200", children: [
                  /* @__PURE__ */ jsx("span", { className: "text-neutral-300", children: "Call Us:" }),
                  /* @__PURE__ */ jsx("a", { href: "tel:+919987588932", className: "hover:underline font-bold text-white", children: "+919987588932" })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ jsx("span", { className: "text-[#dfaa29] text-lg", children: "\u2709\uFE0F" }),
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-neutral-200", children: [
                  /* @__PURE__ */ jsx("span", { className: "text-neutral-300", children: "Email:" }),
                  /* @__PURE__ */ jsx("a", { href: "mailto:care@amigoacademy.in", className: "hover:underline font-bold text-white", children: "care@amigoacademy.in" })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "w-full lg:w-auto pt-2 lg:pt-0", children: /* @__PURE__ */ jsx(
              "button",
              {
                onClick: () => window.dispatchEvent(new CustomEvent("openEligibilityModal")),
                className: "w-full lg:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-neutral-50 text-[#0b2f61] font-sans font-bold text-[13px] px-8 py-3.5 rounded-full shadow-[0_8px_20px_rgba(255,255,255,0.05)] transition-all duration-300 active:scale-95 whitespace-nowrap cursor-pointer",
                children: "Get Free Counselling \u2192"
              }
            ) })
          ] })
        ] })
      }
    ),
    /* @__PURE__ */ jsx("section", { className: "w-full bg-white py-16 px-4 sm:px-6 md:px-8 border-t border-b border-neutral-100", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto space-y-10 text-center", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl sm:text-[38px] font-outfit font-extrabold text-[#0b2f61] leading-tight", children: "From Classroom to Career with" }),
      /* @__PURE__ */ jsx("div", { className: "w-full overflow-hidden relative py-6", children: /* @__PURE__ */ jsx("div", { className: "animate-marquee whitespace-nowrap flex items-center gap-12 sm:gap-16", children: [
        { img: new URL("../assets/img/brand1.png", globalThis._importMeta_.url).href, alt: "Air India" },
        { img: new URL("../assets/img/brand2.png", globalThis._importMeta_.url).href, alt: "SpiceJet" },
        { img: new URL("../assets/img/brand3.png", globalThis._importMeta_.url).href, alt: "AirAsia" },
        { img: new URL("../assets/img/brand4.png", globalThis._importMeta_.url).href, alt: "Lufthansa" },
        { img: new URL("../assets/img/brand5.png", globalThis._importMeta_.url).href, alt: "Etihad Airways" },
        { img: new URL("../assets/img/brand1.png", globalThis._importMeta_.url).href, alt: "Air India" },
        { img: new URL("../assets/img/brand2.png", globalThis._importMeta_.url).href, alt: "SpiceJet" },
        { img: new URL("../assets/img/brand3.png", globalThis._importMeta_.url).href, alt: "AirAsia" },
        { img: new URL("../assets/img/brand4.png", globalThis._importMeta_.url).href, alt: "Lufthansa" },
        { img: new URL("../assets/img/brand5.png", globalThis._importMeta_.url).href, alt: "Etihad Airways" }
      ].map((brand, idx) => /* @__PURE__ */ jsx("div", { className: "h-14 sm:h-16 md:h-20 inline-flex items-center justify-center shrink-0 transition-transform hover:scale-105 duration-300", children: /* @__PURE__ */ jsx(
        "img",
        {
          src: brand.img,
          alt: brand.alt,
          className: "max-h-full w-auto object-contain shrink-0",
          onError: (e) => {
            e.currentTarget.style.display = "none";
          }
        }
      ) }, idx)) }) })
    ] }) }),
    /* @__PURE__ */ jsxs("section", { className: "relative w-full py-20 px-4 sm:px-6 md:px-8 text-white overflow-hidden border-t border-b border-neutral-100", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 z-0", children: /* @__PURE__ */ jsx(
        "img",
        {
          src: new URL("../assets/img/aboutusbg.png", globalThis._importMeta_.url).href,
          alt: "Cabin Interior Background",
          className: "w-full h-full object-cover filter brightness-[0.25] contrast-[0.9] grayscale",
          onError: (e) => {
            e.currentTarget.src = "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=1200";
          }
        }
      ) }),
      /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 relative z-10 text-left", children: [
        /* @__PURE__ */ jsxs("div", { className: "space-y-6 md:pr-4", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-3xl text-white font-outfit font-extrabold tracking-tight", children: "Mission" }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-4 font-sans text-xs sm:text-[13px] leading-relaxed text-neutral-300 font-semibold", children: [
            /* @__PURE__ */ jsx("p", { children: "At Amigo Academy, our mission is to empower students with the skills, confidence, and professionalism required to succeed in competitive industries \u2014 nationally and globally." }),
            /* @__PURE__ */ jsx("p", { children: "Through continuous innovation, expert mentorship, and outcome-driven training, we aim to create a workforce that is skilled, confident, and future-ready." })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-6 md:px-4 md:border-l md:border-white/10", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-3xl text-white font-outfit font-extrabold tracking-tight", children: "Our Core Values" }),
          /* @__PURE__ */ jsxs("ul", { className: "space-y-4 font-sans text-xs sm:text-[13px] leading-relaxed text-neutral-300 font-semibold list-disc pl-4", children: [
            /* @__PURE__ */ jsx("li", { children: "As industries evolve, so do career aspirations." }),
            /* @__PURE__ */ jsx("li", { children: "Recognizing this shift, Amigo Academy has strategically expanded into high-growth career verticals, while maintaining a unified training philosophy and brand identity." })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-6 md:pl-4 md:border-l md:border-white/10", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-3xl text-white font-outfit font-extrabold tracking-tight", children: "Key Focus Areas" }),
          /* @__PURE__ */ jsxs("ul", { className: "space-y-4 font-sans text-xs sm:text-[13px] leading-relaxed text-neutral-300 font-semibold list-disc pl-4", children: [
            /* @__PURE__ */ jsx("li", { children: "Founded in 2017 by industry veterans" }),
            /* @__PURE__ */ jsx("li", { children: "Trusted partner with leading airlines & hotels" }),
            /* @__PURE__ */ jsx("li", { children: "10,000+ Students Trained" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "bg-slate-50/30 py-20 sm:py-24 border-t border-slate-100/80", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center text-center mb-16", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-3xl sm:text-4xl font-extrabold text-[#0f2a4a] leading-tight font-sans tracking-tight mb-4", children: "Awards & Accreditations" }),
        /* @__PURE__ */ jsx("p", { className: "text-slate-500 font-semibold font-sans text-sm sm:text-base max-w-2xl leading-relaxed", children: "Recognized for Excellence in Training & Industry Standards" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6", children: [
        {
          img: Awards1,
          text: "Dr. APJ Abdul Kalam Memorial Excellence Award"
        },
        {
          img: Awards2,
          text: "National Pride and excellence award"
        },
        {
          img: Awards3,
          text: "Ministry of labour"
        },
        {
          img: Awards4,
          text: "National Skill Development Corporation"
        },
        {
          img: Awards5,
          text: "Skill India"
        },
        {
          img: Awards6,
          text: "Aerospace and Aviation Sector Skill Council"
        },
        {
          img: Awards7,
          text: "ISO 9001-2015"
        },
        {
          img: Awards8,
          text: "Maharashtra State Board of Skill, Vocational Education and Training (MSBSVET)"
        }
      ].map((award, index) => /* @__PURE__ */ jsxs(
        "div",
        {
          className: "bg-white rounded-2xl border border-slate-100 shadow-[0_4px_12px_rgba(0,0,0,0.02)] p-6 flex flex-col items-center text-center transition-all duration-300 hover:shadow-[0_12px_28px_rgba(0,0,0,0.06)] hover:-translate-y-1",
          children: [
            /* @__PURE__ */ jsx("div", { className: "w-full h-32 flex items-center justify-center mb-5 p-2", children: /* @__PURE__ */ jsx(
              "img",
              {
                src: award.img,
                alt: award.text,
                className: "max-h-full max-w-full object-contain"
              }
            ) }),
            /* @__PURE__ */ jsx("h3", { className: "font-sans font-bold text-[#0f2a4a] text-xs sm:text-sm leading-snug px-2", children: award.text })
          ]
        },
        index
      )) })
    ] }) }),
    /* @__PURE__ */ jsxs("section", { className: "hidden max-w-7xl mx-auto w-full px-6 pt-16 pb-16 relative z-20", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center max-w-2xl mx-auto mb-16", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-3xl sm:text-4xl font-extrabold text-[#0f2a4a] leading-tight font-sans", children: "Student Success Stories" }),
        /* @__PURE__ */ jsx("p", { className: "text-slate-500 text-sm sm:text-base mt-3 leading-relaxed font-sans font-semibold", children: "Hear directly from our alumni who are now flying high in their careers." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex flex-wrap justify-center gap-8 max-w-7xl mx-auto", children: [
        {
          name: "Jasmine Soni",
          role: "Cabin Crew Emirates",
          batch: "Aviation Batch 2023",
          quote: "Amigo Air Hostess Academy completely transformed my career path. The practical training and expert guidance helped me land my dream job as a Cabin Crew Member within months of graduating.",
          videoImg: Studentimg1,
          avatarImg: Studentpf1,
          badge: "SELECTED FOR INDIGO",
          overlayText: ""
        },
        {
          name: "Swati Patil",
          role: "Airport Ground Staff",
          batch: "Travel & Tourism 2022",
          quote: "The comprehensive curriculum covers every aspect of the industry. The instructors are real professionals who know what airlines are looking for. I am now happily working at International Airport.",
          videoImg: Studentimg3,
          avatarImg: Studentpf3,
          badge: "",
          overlayText: "Swati Patil - Speak Up!"
        },
        {
          name: "Hardik Chari",
          role: "Gust Service Exclusive",
          batch: "Batch 2024",
          quote: '"Gust Service Exclusive Course Mumbai \u2014 zero to high-paying job. Placement team is exceptional."',
          videoImg: Studentimg2,
          avatarImg: Studentpf2,
          badge: "JOB ASSISTANCE",
          overlayText: ""
        },
        {
          name: "Isaac Edward",
          role: "Passenger Service Excusive",
          batch: "Batch 2025",
          quote: 'ROHAN S. "6-month course + placement team = best move after 12th. Got placed at Mumbai Airport within 5 months."',
          videoImg: Student4,
          avatarImg: Studentpf4,
          badge: "",
          overlayText: "Isaac Edward"
        },
        {
          name: "Ashwini Patil",
          role: "Cabin Crew",
          batch: "Batch 2024",
          quote: "Best air hostess course Mumbai \u2014 flying international in 5 months. Grooming and mock interviews made all the difference.",
          videoImg: Student5,
          avatarImg: Studentpf5,
          badge: "",
          overlayText: "Congratulations ASHWINI PATIL - Cabin Crew Vistara"
        }
      ].map((story, idx) => /* @__PURE__ */ jsxs("div", { className: "w-full md:w-[350px] lg:w-[370px] flex flex-col bg-white rounded-3xl border border-neutral-100 shadow-[0_12px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300", children: [
        /* @__PURE__ */ jsxs("div", { className: "relative w-full h-52 bg-slate-100 flex items-center justify-center", children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              src: story.videoImg,
              alt: story.name,
              className: "absolute inset-0 w-full h-full object-cover rounded-t-3xl"
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-slate-900/20 rounded-t-3xl" }),
          story.badge && /* @__PURE__ */ jsx("div", { className: "absolute bottom-4 left-4 bg-black/60 text-white font-bold text-[9px] px-2 py-1 rounded tracking-wider uppercase", children: story.badge }),
          story.overlayText && /* @__PURE__ */ jsx("div", { className: "absolute bottom-4 left-4 max-w-[200px] text-left", children: /* @__PURE__ */ jsx("span", { className: "text-white/80 font-sans font-bold text-[10px] bg-black/40 px-2.5 py-1 rounded backdrop-blur-[2px] truncate block", children: story.overlayText }) }),
          /* @__PURE__ */ jsx("div", { className: "absolute -bottom-5 right-6 z-20 w-12 h-12 rounded-full border-4 border-white bg-white overflow-hidden shadow-md", children: /* @__PURE__ */ jsx(
            "img",
            {
              src: story.avatarImg,
              alt: story.name,
              className: "w-full h-full object-cover"
            }
          ) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "p-6 sm:p-7 pt-8 text-left flex flex-col space-y-4 flex-grow", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { className: "text-base sm:text-lg font-extrabold text-[#0f2a4a] leading-tight", children: story.name }),
            /* @__PURE__ */ jsxs("p", { className: "text-blue-600 font-bold text-[11px] sm:text-xs tracking-wide mt-1", children: [
              story.role,
              " ",
              /* @__PURE__ */ jsx("span", { className: "text-slate-300 font-normal mx-1", children: "\u2022" }),
              " ",
              story.batch
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "border-l-2 border-[#dbeafe] pl-3 flex-grow", children: /* @__PURE__ */ jsxs("p", { className: "text-slate-500 font-semibold font-sans italic text-xs sm:text-sm leading-relaxed", children: [
            '"',
            story.quote,
            '"'
          ] }) })
        ] })
      ] }, idx)) }),
      /* @__PURE__ */ jsxs("div", { className: "mt-16 flex items-center justify-center gap-4", children: [
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => alert("Previous story clicked (Carousel navigation placeholder)"),
            className: "w-12 h-12 rounded-full border border-slate-200 bg-white flex items-center justify-center text-[#0f2a4a] hover:border-slate-300 hover:bg-slate-50 transition-all duration-200 active:scale-95 focus:outline-none shadow-sm cursor-pointer",
            "aria-label": "Previous Story",
            children: /* @__PURE__ */ jsx("svg", { className: "w-4 h-4 text-slate-500", fill: "none", stroke: "currentColor", strokeWidth: "2.5", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M15.75 19.5L8.25 12l7.5-7.5" }) })
          }
        ),
        /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: () => window.dispatchEvent(new CustomEvent("openEligibilityModal")),
            className: "inline-flex items-center gap-2 bg-[#244270] hover:bg-[#1a3052] text-white font-sans font-bold text-sm px-6 py-3.5 rounded-full shadow-[0_4px_12px_rgba(36,66,112,0.15)] active:scale-95 transition-all duration-200 focus:outline-none cursor-pointer",
            children: [
              /* @__PURE__ */ jsx("span", { children: "Be in Amigo's Next Story" }),
              /* @__PURE__ */ jsx("svg", { className: "w-4 h-4 text-white", fill: "none", stroke: "currentColor", strokeWidth: "2.5", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" }) })
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "hidden bg-white py-20 sm:py-24 border-t border-slate-100/80", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-6 text-center", children: [
      /* @__PURE__ */ jsxs("div", { className: "mb-16", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-3xl sm:text-4xl font-extrabold text-[#0f2a4a] leading-tight font-sans tracking-tight mb-4", children: "Core Team Members" }),
        /* @__PURE__ */ jsx("p", { className: "text-slate-500 font-semibold font-sans text-sm sm:text-base max-w-2xl mx-auto leading-relaxed", children: "Guiding Our Company Towards Success" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex flex-wrap justify-center gap-12 sm:gap-16 lg:gap-24", children: [
        {
          name: "Irfaan shaikh",
          role: "Director",
          img: new URL("../assets/img/Director1.png", globalThis._importMeta_.url).href,
          linkedin: "https://www.linkedin.com/in/irfaan-i-shaikh-4ba267164/"
        },
        {
          name: "Niraav joshi",
          role: "Director",
          img: new URL("../assets/img/Director2.png", globalThis._importMeta_.url).href,
          linkedin: "https://linkedin.com"
        }
      ].map((member, idx) => /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center", children: [
        /* @__PURE__ */ jsx("div", { className: "w-40 h-40 sm:w-44 sm:h-44 rounded-full overflow-hidden border-[6px] border-white shadow-[0_10px_35px_rgba(0,0,0,0.05)] hover:shadow-[0_15px_45px_rgba(0,0,0,0.08)] hover:scale-[1.02] transition-all duration-300", children: /* @__PURE__ */ jsx(
          "img",
          {
            src: member.img,
            alt: member.name,
            className: "w-full h-full object-cover"
          }
        ) }),
        /* @__PURE__ */ jsx("h3", { className: "font-sans font-bold text-[#0f2a4a] text-lg sm:text-xl tracking-wide mt-6 capitalize", children: member.name }),
        /* @__PURE__ */ jsx("span", { className: "text-slate-400 font-sans font-semibold text-xs sm:text-[13px] tracking-wide mt-1", children: member.role }),
        /* @__PURE__ */ jsx(
          "a",
          {
            href: member.linkedin,
            target: "_blank",
            rel: "noreferrer",
            className: "w-8 h-8 rounded bg-[#0077b5] flex items-center justify-center text-white mt-4 shadow-sm hover:bg-[#005582] active:scale-95 transition-all duration-200",
            "aria-label": `${member.name} LinkedIn Profile`,
            children: /* @__PURE__ */ jsx("svg", { className: "w-4 h-4 fill-current", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { d: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" }) })
          }
        )
      ] }, idx)) })
    ] }) })
  ] });
}
const SplitComponent = About;

export { SplitComponent as component };
//# sourceMappingURL=about-us-C2BP7HyJ.mjs.map
