import { jsxs, jsx } from 'react/jsx-runtime';
import { useState } from 'react';
import { useNavigate, Link } from '@tanstack/react-router';
import { c as courseGroundy1, a as courseCabiny1, b as courseAiy1 } from './cc15-Doi03YZB.mjs';
import { a as icon2, b as icon3, c as icon4, d as icon5, i as icon1, e as icon6 } from './6-BSAB3DQ9.mjs';

const airportHero = "/assets/airportground-hero-CSG0mEws.png";
const airportHeroMobile = "/assets/airportground-heromobile-DPc055S4.png";
const ground10 = "/assets/10-Cdvz3ujs.png";
const ground11 = "/assets/11-_9YiqEY-.png";
const cc16 = "/assets/cc16-CY4JC0lG.png";
const cc17 = "/assets/cc17-B31Wagk9.png";
const cc18 = "/assets/cc18-Mt7nROet.png";
const cc19 = "/assets/cc19-8WbGMOTM.png";
const cc20 = "/assets/cc20-BmnDII6s.png";
const cc21 = "/assets/cc21-Cjd4gbNU.png";
const cc22 = "/assets/cc22-DtXgmYlA.png";
const cc23 = "/assets/cc23-C5S43JLj.png";
const cc24 = "/assets/cc24-BjTUODXs.png";
const cc25 = "/assets/cc25-Cvxpmi5b.png";
const cc26 = "/assets/cc26-sgVpVaVO.png";
const cc27 = "/assets/cc27-DfFuXvvJ.png";
function FAQItem({ number, question, answer }) {
  const [isOpen, setIsOpen] = useState(false);
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: `bg-white border rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? "border-[#1C3E8A]/20 shadow-[0_8px_30px_rgba(0,0,0,0.05)]" : "border-[#E1E5ED] shadow-sm"}`,
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
                    className: `w-8 h-8 rounded-full flex items-center justify-center shrink-0 text-sm font-bold transition-colors duration-300 ${isOpen ? "bg-[#1C3E8A] text-white" : "bg-[#e8ecf4] text-[#1C3E8A]"}`,
                    children: number
                  }
                ),
                /* @__PURE__ */ jsx("span", { className: "text-sm sm:text-[16px] font-outfit font-bold text-[#1C3E8A] pr-4", children: question })
              ] }),
              /* @__PURE__ */ jsx(
                "svg",
                {
                  className: `w-5 h-5 text-[#1C3E8A] shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`,
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
            className: `overflow-hidden transition-all duration-300 ${isOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"}`,
            children: /* @__PURE__ */ jsx("div", { className: "px-6 pb-5 pt-1", children: /* @__PURE__ */ jsx("div", { className: "bg-[#f8fafc] border-l-4 border-[#1C3E8A] p-4 rounded-r-lg", children: /* @__PURE__ */ jsx("p", { className: "text-slate-600 font-sans text-xs sm:text-[14px] leading-relaxed", children: answer }) }) })
          }
        )
      ]
    }
  );
}
const categories = [
  {
    title: "Job Roles & Responsibilities",
    cards: [
      {
        image: cc16,
        title: "Airport Ground Staff Job Roles & Responsibilities",
        meta: "May 24, 2026 \u2022 8 min read"
      },
      {
        image: cc17,
        title: "Airport Ground Staff Duties: Complete Guide for Beginners",
        meta: "April 12, 2026 \u2022 8 min read"
      },
      {
        image: cc18,
        title: "Types of Airport Ground Staff Jobs & Departments",
        meta: "June 18, 2026 \u2022 8 min read"
      }
    ]
  },
  {
    title: "Career Comparisons",
    cards: [
      {
        image: cc19,
        title: "Ground Staff vs Cabin Crew \u2014 Which Should You Choose?",
        meta: "Aug 12, 2026 \u2022 5 min read"
      },
      {
        image: cc20,
        title: "Airport Ground Staff Requirements",
        meta: "May 24, 2026 \u2022 8 min read"
      },
      {
        image: cc21,
        title: "Airport Ground Staff vs Other Aviation Careers",
        meta: "May 24, 2026 \u2022 8 min read"
      }
    ]
  },
  {
    title: "Course & Training",
    cards: [
      {
        image: cc22,
        title: "Airport Ground Staff Course Fees in Mumbai",
        meta: "Aug 10, 2026 \u2022 8 min read"
      },
      {
        image: cc23,
        title: "Airport Ground Staff Course After 12th: Eligibility & Duration",
        meta: "May 24, 2026 \u2022 8 min read"
      },
      {
        image: cc24,
        title: "Airport Ground Staff Course Syllabus: Skills You Will Learn",
        meta: "May 24, 2026 \u2022 8 min read"
      }
    ]
  },
  {
    title: "Interview Preparation",
    cards: [
      {
        image: cc25,
        title: "Airport Ground Staff Interview Questions & Answers",
        meta: "July 10, 2026 \u2022 6 min read"
      },
      {
        image: cc26,
        title: "How to Prepare for Airport Ground Staff Interview: Complete Guide",
        meta: "May 24, 2026 \u2022 12 min read"
      },
      {
        image: cc27,
        title: "Airport Ground Staff Selection Process: Complete Guide",
        meta: "July 5, 2026 \u2022 8 min read"
      }
    ]
  },
  {
    title: "Related Careers",
    cards: [
      {
        image: courseGroundy1,
        title: "Airport Ground Staff Course Duration & Batch Timings",
        meta: "July 10, 2026 \u2022 6 min read"
      },
      {
        image: courseCabiny1,
        title: "Air Hostess Course Duration & Batch Timings",
        meta: "July 10, 2026 \u2022 6 min read"
      },
      {
        image: courseAiy1,
        title: "AI & Data Science Career Guide",
        meta: "July 10, 2026 \u2022 16 min read"
      }
    ]
  }
];
const faqs = [
  {
    question: "What does an Airport Ground Staff professional do?",
    answer: "Airport Ground Staff professionals handle airport operations including passenger check-in, boarding assistance, baggage coordination, ramp operations, and ensuring a smooth travel experience for passengers."
  },
  {
    question: "Is Airport Ground Staff a good career after 12th?",
    answer: "Yes, it is a great career option after 12th. Many airlines and ground handling companies actively hire 12th pass candidates for customer-facing and operational roles, especially those with professional aviation training."
  },
  {
    question: "Where can I learn about Airport Ground Staff job roles, interviews, and career opportunities?",
    answer: "You can explore our detailed career guides on this page covering job roles, interview preparation, course details, salary, and career growth paths for Airport Ground Staff professionals."
  },
  {
    question: "How do I start preparing for an Airport Ground Staff career?",
    answer: "Start by enrolling in a professional aviation training program that covers customer service, grooming, airport operations, and communication skills. Amigo Academy offers structured courses designed specifically for airport ground staff careers."
  },
  {
    question: "What kind of placement support does Amigo Academy provide for ground staff?",
    answer: "Amigo Academy provides 100% placement assistance including grooming workshops, mock interview sessions, resume building, and direct placement drives with leading airlines and airport ground handling companies."
  },
  {
    question: "What skills will I develop during the Aviation, Hospitality & Travel Management course?",
    answer: "You will develop skills in customer service, professional grooming, airport operations, communication, problem-solving, teamwork, and hospitality \u2014 all essential for a successful ground staff career."
  },
  {
    question: "What career opportunities are available after Ground Staff training?",
    answer: "After completing ground staff training, you can pursue roles such as Customer Service Agent, Passenger Service Executive, Check-in Executive, Boarding Gate Executive, Ramp Agent, and Cargo Operations Agent with domestic and international airlines."
  }
];
function AirportGroundStaff() {
  const navigate = useNavigate();
  const handleCTA = () => {
    window.dispatchEvent(new CustomEvent("openEligibilityModal"));
  };
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col bg-white", children: [
    /* @__PURE__ */ jsxs("section", { className: "hidden sm:flex relative w-full min-h-[580px] lg:h-[620px] bg-white items-center overflow-hidden border-b border-neutral-100", children: [
      /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 z-0", children: [
        /* @__PURE__ */ jsxs("div", { className: "absolute inset-y-0 right-0 w-full lg:w-[52%] h-full", children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              src: airportHero,
              alt: "Airport Ground Staff Career Guide",
              className: "w-full h-full object-cover object-left lg:object-center",
              onError: (e) => {
                e.currentTarget.style.display = "none";
              }
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-neutral-900/5 mix-blend-multiply" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-white via-white via-48% md:via-52% lg:via-48% to-transparent z-10 pointer-events-none" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "relative max-w-7xl mx-auto w-full px-6 sm:px-8 md:px-12 z-20 py-16 lg:py-0", children: /* @__PURE__ */ jsxs("div", { className: "max-w-xl lg:max-w-[680px] text-left flex flex-col space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1.5 text-xs sm:text-[13px] font-sans font-medium text-slate-400", children: [
          /* @__PURE__ */ jsx(Link, { to: "/", className: "hover:text-[#DF1818] transition-colors focus:outline-none", children: "Home" }),
          /* @__PURE__ */ jsx("span", { className: "text-slate-400 mx-1 select-none", children: ">" }),
          /* @__PURE__ */ jsx(Link, { to: "/career-guides", className: "hover:text-[#DF1818] transition-colors focus:outline-none", children: "Career Guides" }),
          /* @__PURE__ */ jsx("span", { className: "text-slate-400 mx-1 select-none", children: ">" }),
          /* @__PURE__ */ jsx("span", { className: "font-bold text-[#DF1818] tracking-tight", children: "Airport Ground Staff Career Guide" })
        ] }),
        /* @__PURE__ */ jsx("h1", { className: "text-3xl sm:text-4xl lg:text-[50px] font-outfit font-extrabold tracking-tight text-[#1C3E8A] leading-snug sm:leading-[1.28] lg:leading-[1.32]", children: "Airport Ground Staff Career Guide" }),
        /* @__PURE__ */ jsx("p", { className: "text-slate-600 font-sans font-semibold text-xs sm:text-[18px] leading-relaxed max-w-lg sm:max-w-xl", children: "Explore everything you need to know about an Airport Ground Staff career, including job roles, eligibility, career opportunities, interview preparation, and detailed career guides from Amigo Academy." }),
        /* @__PURE__ */ jsx("div", { className: "pt-2", children: /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: () => window.location.href = "tel:+919987588932",
            className: "inline-flex items-center justify-center gap-2 bg-[#DF1818] hover:bg-[#c41212] text-white font-sans font-bold text-xs sm:text-[14px] px-8 py-3.5 rounded-full shadow-[0_8px_20px_rgba(223,24,24,0.2)] hover:shadow-[0_12px_24px_rgba(223,24,24,0.3)] transition-all duration-300 active:scale-95 whitespace-nowrap focus:outline-none cursor-pointer",
            children: [
              "Talk to a Career Counsellor",
              /* @__PURE__ */ jsx("span", { className: "font-bold", children: "\xA0\u2794" })
            ]
          }
        ) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "sm:hidden relative w-full bg-white overflow-hidden border-b border-neutral-100", children: /* @__PURE__ */ jsxs("div", { className: "relative w-full h-[520px] overflow-hidden", children: [
      /* @__PURE__ */ jsx(
        "img",
        {
          src: airportHeroMobile,
          alt: "Airport Ground Staff Career Guide",
          className: "absolute inset-0 w-full h-full object-cover object-[right_top]"
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "absolute inset-y-0 left-0 z-10 px-5 flex flex-col justify-center max-w-[280px]", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1.5 text-xs font-sans font-medium text-slate-400 mb-3", children: [
          /* @__PURE__ */ jsx(Link, { to: "/", className: "hover:text-[#DF1818] transition-colors focus:outline-none", children: "Home" }),
          /* @__PURE__ */ jsx("span", { className: "text-slate-400 mx-1 select-none", children: ">" }),
          /* @__PURE__ */ jsx(Link, { to: "/career-guides", className: "hover:text-[#DF1818] transition-colors focus:outline-none", children: "Career Guides" }),
          /* @__PURE__ */ jsx("span", { className: "text-slate-400 mx-1 select-none", children: ">" }),
          /* @__PURE__ */ jsx("span", { className: "font-bold text-[#DF1818] tracking-tight", children: "Airport Ground Staff Career Guide" })
        ] }),
        /* @__PURE__ */ jsxs("h1", { className: "text-[28px] font-extrabold text-[#17365d] leading-[1.3] tracking-tight mb-4 font-outfit", children: [
          "Airport",
          /* @__PURE__ */ jsx("br", {}),
          "Ground Staff",
          /* @__PURE__ */ jsx("br", {}),
          "Career Guide"
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-[#475569] text-[12.5px] leading-relaxed mb-6 font-medium", children: "Explore everything you need to know about an Airport Ground Staff career, including job roles, eligibility, career opportunities, interview preparation, and detailed career guides from Amigo Academy." }),
        /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: () => window.location.href = "tel:+919987588932",
            className: "inline-flex items-center justify-between gap-3 bg-[#e02607] hover:bg-[#c81e04] text-white font-bold text-[13.5px] px-5 py-3 rounded-full shadow-lg active:scale-95 transition-all duration-300 cursor-pointer",
            children: [
              /* @__PURE__ */ jsx("span", { children: "Talk to a Career Counsellor" }),
              /* @__PURE__ */ jsx("span", { className: "flex h-6 w-6 items-center justify-center rounded-full bg-white/20 text-white text-xs font-extrabold", children: "\u2794" })
            ]
          }
        ) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "bg-white py-20 sm:py-24 border-t border-slate-50", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-6", children: /* @__PURE__ */ jsxs("div", { className: "max-w-[940px] mx-auto flex flex-col items-center", children: [
      /* @__PURE__ */ jsxs("div", { className: "w-full text-center mb-12", children: [
        /* @__PURE__ */ jsxs("h2", { className: "text-3xl sm:text-[40px] font-extrabold text-[#1C3E8A] font-outfit mb-8 leading-tight tracking-tight", children: [
          "Thinking about building a ",
          /* @__PURE__ */ jsx("br", { className: "hidden sm:block" }),
          " career in airport operations?"
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-5 text-slate-600 font-sans font-semibold text-xs sm:text-[15.5px] leading-relaxed max-w-[700px] mx-auto", children: [
          /* @__PURE__ */ jsx("p", { children: "This Career Guide brings together everything you need to know before choosing the Airport Ground Staff profession." }),
          /* @__PURE__ */ jsx("p", { children: "Learn about job roles, responsibilities, career opportunities, and explore detailed guides covering airport operations, interviews, course fees, and much more." })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "w-full flex justify-center pt-2", children: /* @__PURE__ */ jsxs(
        "button",
        {
          onClick: handleCTA,
          className: "inline-flex items-center justify-center gap-2 bg-[#DF1818] hover:bg-[#c41212] text-white font-sans font-bold text-xs sm:text-[14px] px-8 py-4 rounded-full shadow-[0_8px_20px_rgba(223,24,24,0.15)] hover:shadow-[0_12px_24px_rgba(223,24,24,0.25)] transition-all duration-300 active:scale-95 whitespace-nowrap focus:outline-none cursor-pointer",
          children: [
            "Check Career Opportunities",
            /* @__PURE__ */ jsx("span", { className: "font-bold", children: "\xA0\u2794" })
          ]
        }
      ) })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "bg-[#f0f4f9] py-20 sm:py-24 border-t border-slate-100", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-6", children: [
      /* @__PURE__ */ jsxs("h2", { className: "text-3xl sm:text-[40px] font-extrabold text-[#17365d] font-outfit mb-14 text-center leading-tight tracking-tight", children: [
        "Roles & Responsibilities of",
        /* @__PURE__ */ jsx("br", { className: "hidden sm:block" }),
        " Airport Ground Staff"
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto", children: [
        {
          icon: icon2,
          title: "Passenger Assistance",
          desc: "Help passengers with check-in, boarding, baggage queries, and airport guidance throughout their journey."
        },
        {
          icon: icon3,
          title: "Airport Operations Support",
          desc: "Coordinate with airline teams and airport departments to ensure smooth daily operations."
        },
        {
          icon: icon4,
          title: "Baggage Handling Coordination",
          desc: "Assist in managing baggage processes, tracking luggage, and resolving passenger concerns."
        },
        {
          icon: icon5,
          title: "Customer Service Excellence",
          desc: "Provide professional support, answer passenger questions, and create a positive travel experience."
        },
        {
          icon: icon1,
          title: "Safety & Security Support",
          desc: "Follow airport safety procedures and assist passengers during emergency situations when required."
        },
        {
          icon: icon6,
          title: "Career Opportunities",
          desc: "Build a rewarding career in airports, airlines, and aviation services with opportunities for professional growth."
        }
      ].map((card, idx) => /* @__PURE__ */ jsxs(
        "div",
        {
          className: "bg-white rounded-[24px] p-7 sm:p-8 border border-white shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_14px_40px_rgba(0,0,0,0.07)] transition-all duration-300 flex flex-col text-left justify-start",
          children: [
            /* @__PURE__ */ jsx("div", { className: "w-11 h-11 rounded-full bg-[#fef3c7] flex items-center justify-center mb-6 shrink-0", children: /* @__PURE__ */ jsx("img", { src: card.icon, alt: "", className: "w-5 h-5 object-contain" }) }),
            /* @__PURE__ */ jsx("h3", { className: "text-[16px] sm:text-[17px] font-bold text-[#17365d] font-outfit mb-3 leading-snug", children: card.title }),
            /* @__PURE__ */ jsx("p", { className: "text-slate-500 font-sans text-xs sm:text-[13.5px] font-normal leading-relaxed", children: card.desc })
          ]
        },
        idx
      )) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "bg-white py-20 sm:py-24 border-t border-slate-50", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-6", children: /* @__PURE__ */ jsxs("div", { className: "max-w-[820px] mx-auto text-center", children: [
      /* @__PURE__ */ jsxs("h2", { className: "text-3xl sm:text-[44px] font-extrabold text-[#1C3E8A] font-outfit mb-10 leading-tight tracking-tight", children: [
        "Why Choose a Career as",
        /* @__PURE__ */ jsx("br", { className: "hidden sm:block" }),
        " Airport Ground Staff?"
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-5 text-slate-600 font-sans font-semibold text-xs sm:text-[18px] leading-relaxed", children: [
        /* @__PURE__ */ jsx("p", { children: "An Airport Ground Staff career offers the opportunity to work in the fast-paced aviation industry while supporting passengers and ensuring efficient airport operations. It is a profession that values communication, professionalism, teamwork, problem-solving, and customer service." }),
        /* @__PURE__ */ jsx("p", { children: "Whether your goal is to work with domestic airlines, airport operators, or aviation service providers, understanding the profession is the first step towards making an informed career decision." })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "bg-[#f4f7fa] py-20 sm:py-24 border-t border-slate-100/60", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-6 sm:px-8 md:px-12", children: [
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20", children: [
        /* @__PURE__ */ jsxs("div", { className: "space-y-6 text-left order-2 lg:order-1", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-3xl sm:text-[40px] font-extrabold text-[#1C3E8A] font-outfit tracking-tight leading-tight", children: "Career Opportunities" }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-5 text-[#4A5568] font-sans font-semibold text-xs sm:text-[15.5px] leading-relaxed", children: [
            /* @__PURE__ */ jsx("p", { children: "Airport Ground Staff professionals have opportunities to work across airports and airline operations in customer-facing and operational roles." }),
            /* @__PURE__ */ jsx("p", { children: "As the aviation industry continues to expand, skilled Ground Staff professionals remain an important part of delivering safe, efficient, and comfortable passenger experiences." })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "w-full aspect-[16/10] sm:aspect-[1.58] lg:h-[350px] rounded-[24px] overflow-hidden order-1 lg:order-2", children: /* @__PURE__ */ jsx(
          "img",
          {
            src: ground10,
            alt: "Airport Ground Staff Career Opportunities",
            className: "w-full h-full object-cover"
          }
        ) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "text-left", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-3xl sm:text-[40px] font-extrabold text-[#1C3E8A] font-outfit mb-10 tracking-tight leading-tight", children: "Potential Career Roles" }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6", children: [
          "Airport Ground Staff",
          "Passenger Service Executive",
          "Check-in Executive",
          "Boarding Gate Executive"
        ].map((role, idx) => /* @__PURE__ */ jsx(
          "div",
          {
            className: "bg-white rounded-[20px] py-7 px-4 border border-[#E1E5ED] shadow-[0_8px_30px_rgb(0,0,0,0.02)] hover:shadow-[0_12px_40px_rgb(0,0,0,0.05)] transition-all duration-300 flex items-center justify-center min-h-[90px] text-center",
            children: /* @__PURE__ */ jsx("span", { className: "text-[15px] sm:text-[16px] font-bold text-[#1C3E8A] font-outfit", children: role })
          },
          idx
        )) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "bg-white py-20 sm:py-24 border-t border-slate-50", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-6 sm:px-8 md:px-12 text-center", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl sm:text-[40px] font-extrabold text-[#1C3E8A] font-outfit mb-5 leading-tight tracking-tight", children: "Explore Airport Ground Staff Career Guides" }),
      /* @__PURE__ */ jsx("p", { className: "text-slate-600 font-sans font-semibold text-xs sm:text-[15.5px] max-w-[820px] mx-auto mb-16 leading-relaxed", children: "Every student has different questions before choosing a career. Explore the guides below to understand every important aspect of becoming an Airport Ground Staff professional." }),
      /* @__PURE__ */ jsx("div", { className: "space-y-16", children: categories.map((category, catIdx) => /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-2xl sm:text-[28px] font-extrabold text-[#1C3E8A] font-outfit mb-8 tracking-tight text-center", children: category.title }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 text-left", children: category.cards.map((card, cardIdx) => /* @__PURE__ */ jsx(
          "div",
          {
            onClick: () => {
              navigate({ to: "/how-to-become-a-cabin-crew-after-12th" });
              window.scrollTo({ top: 0, behavior: "smooth" });
            },
            className: "bg-white rounded-[24px] overflow-hidden border border-[#E1E5ED] shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-[0_12px_40px_rgb(0,0,0,0.07)] transition-all duration-300 flex flex-col justify-between text-left group cursor-pointer hover:-translate-y-1",
            children: /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("div", { className: "relative w-full h-[190px] sm:h-[200px] overflow-hidden bg-slate-100", children: /* @__PURE__ */ jsx(
                "img",
                {
                  src: card.image,
                  alt: card.title,
                  className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                }
              ) }),
              /* @__PURE__ */ jsxs("div", { className: "p-6 flex flex-col justify-between min-h-[110px]", children: [
                /* @__PURE__ */ jsx("h4", { className: "text-[15px] sm:text-[16px] font-bold text-[#17365d] font-outfit leading-snug mb-3 group-hover:text-[#DF1818] transition-colors duration-300", children: card.title }),
                /* @__PURE__ */ jsx("p", { className: "text-[#94a3b8] font-sans text-[11.5px] sm:text-[12px] font-medium leading-relaxed", children: card.meta })
              ] })
            ] })
          },
          cardIdx
        )) })
      ] }, catIdx)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "bg-[#f4f7fa] py-20 sm:py-24 border-t border-slate-100/60", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-6 sm:px-8 md:px-12", children: [
      /* @__PURE__ */ jsx("div", { className: "text-center mb-12", children: /* @__PURE__ */ jsx("h2", { className: "text-3xl sm:text-[40px] font-extrabold text-[#1C3E8A] font-outfit leading-tight tracking-tight", children: "Ready to Begin Your Airport Ground Staff Journey?" }) }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center", children: [
        /* @__PURE__ */ jsxs("div", { className: "space-y-6 text-left order-2 lg:order-1", children: [
          /* @__PURE__ */ jsxs("div", { className: "space-y-5 text-slate-600 font-sans font-semibold text-xs sm:text-[15.5px] leading-relaxed", children: [
            /* @__PURE__ */ jsx("p", { children: "Every career is different, and choosing the right one depends on your interests, strengths, and aspirations. If you enjoy working with people, coordinating complex operations, and being part of the aviation industry, Ground Staff could be a rewarding career path to explore." }),
            /* @__PURE__ */ jsx("p", { children: "If you're still unsure, our counsellors can help you understand the profession, discuss your eligibility, and answer your questions before you make a decision." })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "pt-4", children: /* @__PURE__ */ jsxs(
            "button",
            {
              onClick: handleCTA,
              className: "inline-flex items-center justify-center gap-2 bg-[#DF1818] hover:bg-[#c41212] text-white font-sans font-bold text-xs sm:text-[14px] px-8 py-4 rounded-full shadow-[0_8px_20px_rgba(223,24,24,0.2)] hover:shadow-[0_12px_24px_rgba(223,24,24,0.3)] transition-all duration-300 active:scale-95 whitespace-nowrap focus:outline-none cursor-pointer",
              children: [
                "Book Free Career Counselling",
                /* @__PURE__ */ jsx("span", { className: "font-bold", children: "\xA0\u2794" })
              ]
            }
          ) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "w-full h-[300px] sm:h-[400px] lg:h-[380px] rounded-[24px] overflow-hidden order-1 lg:order-2 shadow-[0_10px_30px_rgba(0,0,0,0.04)]", children: /* @__PURE__ */ jsx(
          "img",
          {
            src: ground11,
            alt: "Begin Your Airport Ground Staff Journey",
            className: "w-full h-full object-cover"
          }
        ) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "w-full bg-white py-20 border-t border-slate-100", children: /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto px-4 sm:px-6 md:px-8 w-full flex flex-col items-center space-y-12", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center space-y-4", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-3xl sm:text-[38px] font-outfit font-black text-[#1C3E8A] leading-tight", children: "Frequently Asked Questions" }),
        /* @__PURE__ */ jsx("p", { className: "text-neutral-500 font-sans font-semibold text-xs sm:text-[13px] max-w-xl mx-auto leading-relaxed", children: "Honest answers about Airport Ground Staff Careers" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "w-full space-y-4", children: faqs.map((faq, idx) => /* @__PURE__ */ jsx(
        FAQItem,
        {
          number: idx + 1,
          question: faq.question,
          answer: faq.answer
        },
        idx
      )) }),
      /* @__PURE__ */ jsx("div", { className: "mt-10 text-center", children: /* @__PURE__ */ jsxs(
        "button",
        {
          onClick: () => {
            navigate({ to: "/contact" });
            window.scrollTo({ top: 0, behavior: "smooth" });
          },
          className: "inline-flex items-center gap-2 bg-[#fffbf0] border border-[#ffecd1] px-6 py-3 rounded-full shadow-[0_4px_10px_rgba(255,236,209,0.2)] hover:scale-105 transition-all cursor-pointer",
          children: [
            /* @__PURE__ */ jsx("span", { className: "text-[#e31e24] font-bold text-xs sm:text-sm", children: "\u2728" }),
            /* @__PURE__ */ jsx("span", { className: "text-[#0b2f61] font-sans font-bold text-[10px] sm:text-xs tracking-wider uppercase", children: "If you have anymore question, please contact us" })
          ]
        }
      ) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "bg-[#001D4A] py-16 sm:py-20 text-center text-white relative overflow-hidden", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-6 flex flex-col items-center", children: [
      /* @__PURE__ */ jsxs("div", { className: "bg-[#1e293b]/40 border border-slate-700/50 rounded-xl px-5 py-2 inline-flex items-center gap-2 text-xs font-bold text-[#ffd300] uppercase tracking-wider mb-6", children: [
        /* @__PURE__ */ jsx("span", { children: "\u26A1" }),
        " LIMITED SEATS PER BATCH \u2014 APPLY EARLY TO SECURE YOUR SPOT"
      ] }),
      /* @__PURE__ */ jsx("h2", { className: "text-3xl sm:text-[44px] lg:text-[48px] font-extrabold text-white font-outfit max-w-4xl leading-tight tracking-tight mb-4", children: "2026 Batches Are Filling Fast \u2014 Secure Your Spot Now!" }),
      /* @__PURE__ */ jsxs("div", { className: "bg-[#1e293b]/40 border border-slate-700/50 rounded-xl px-5 py-2 inline-flex items-center gap-2 text-xs font-bold text-[#ffd300] uppercase tracking-wider mb-10", children: [
        /* @__PURE__ */ jsx("span", { children: "\u{1F3DB}\uFE0F" }),
        " Maharashtra Govt Certified \u2014 Only aviation institute in Maharashtra"
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-4xl mb-8", children: [
        /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: handleCTA,
            className: "w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#DF1818] hover:bg-[#c41212] text-white font-sans font-bold text-xs sm:text-[14px] uppercase tracking-wider px-8 py-4 rounded-xl shadow-lg transition-all duration-300 active:scale-95 whitespace-nowrap focus:outline-none cursor-pointer",
            children: [
              /* @__PURE__ */ jsx("span", { children: "\u2708\uFE0F" }),
              " CHECK MY ELIGIBILITY NOW"
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: handleCTA,
            className: "w-full sm:w-auto inline-flex items-center justify-center bg-[#DF1818] hover:bg-[#c41212] text-white font-sans font-bold text-xs sm:text-[14px] px-8 py-4 rounded-xl shadow-lg transition-all duration-300 active:scale-95 whitespace-nowrap focus:outline-none cursor-pointer",
            children: "Start My Career"
          }
        ),
        /* @__PURE__ */ jsxs(
          "a",
          {
            href: "https://wa.me/919987588932",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba56] text-white font-sans font-bold text-xs sm:text-[14px] px-8 py-4 rounded-xl shadow-lg transition-all duration-300 active:scale-95 whitespace-nowrap focus:outline-none cursor-pointer",
            children: [
              /* @__PURE__ */ jsx("svg", { className: "w-5 h-5 fill-current", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { d: "M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.248 8.477 3.517 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.963C16.588 1.981 14.117.954 11.5.954c-5.43 0-9.855 4.37-9.859 9.801-.002 1.757.465 3.472 1.353 4.982L2.003 21.84l6.143-1.603z" }) }),
              "Chat on WhatsApp"
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs sm:text-[13px] text-slate-300 font-bold font-sans", children: [
        /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1.5", children: [
          /* @__PURE__ */ jsx("span", { className: "text-[#25D366]", children: "\u2713" }),
          " 4.6 Google Rating"
        ] }),
        /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1.5", children: [
          /* @__PURE__ */ jsx("span", { className: "text-[#25D366]", children: "\u2713" }),
          " 10,000+ Students Trained"
        ] }),
        /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1.5", children: [
          /* @__PURE__ */ jsx("span", { className: "text-[#25D366]", children: "\u2713" }),
          " Certified Courses"
        ] }),
        /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1.5", children: [
          /* @__PURE__ */ jsx("span", { className: "text-[#25D366]", children: "\u2713" }),
          " 200+ Hiring Partners"
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-8 flex justify-center", children: /* @__PURE__ */ jsxs(
        "button",
        {
          onClick: handleCTA,
          className: "inline-flex items-center justify-center gap-2.5 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-sans font-bold text-xs sm:text-sm px-7 py-3.5 rounded-full shadow-lg transition-all active:scale-95 cursor-pointer",
          children: [
            /* @__PURE__ */ jsx("svg", { className: "w-4 h-4 text-white", fill: "none", stroke: "currentColor", strokeWidth: 2, viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M7.5 12l4.5 4.5m0 0l4.5-4.5M12 16.5V3" }) }),
            /* @__PURE__ */ jsx("span", { children: "Download Brochure (PDF)" })
          ]
        }
      ) })
    ] }) })
  ] });
}
const SplitComponent = AirportGroundStaff;

export { SplitComponent as component };
//# sourceMappingURL=career-guide.airport-ground-staff-CB7RLQ10.mjs.map
