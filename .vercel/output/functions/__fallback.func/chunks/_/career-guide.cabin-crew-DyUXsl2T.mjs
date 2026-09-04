import { jsxs, jsx } from 'react/jsx-runtime';
import { useState } from 'react';
import { useNavigate, Link } from '@tanstack/react-router';
import { a as courseCabiny1, c as courseGroundy1, b as courseAiy1 } from './cc15-Doi03YZB.mjs';
import { i as icon1, a as icon2, b as icon3, c as icon4, d as icon5, e as icon6 } from './6-BSAB3DQ9.mjs';

const cabinHero = "/assets/cabincrew-hero-BGC5fpY1.png";
const cabinHeroMobile = "/assets/cabincrewhero-mobile-DVKLVz2R.png";
const cabinCrew1 = "/assets/cabincrew1-BKY-Q5OX.png";
const cc1 = "/assets/cc1-DP_EjtP9.png";
const cc2 = "/assets/cc2-CgmbDxQY.png";
const cc3 = "/assets/cc3-D9m4fwJ7.png";
const cc4 = "/assets/cc4-BiNhEasu.png";
const cc5 = "/assets/cc5-B5fQaiku.png";
const cc6 = "/assets/cc6-BfimPo7Y.png";
const cc7 = "/assets/cc7-C_5a0TH9.png";
const cc8 = "/assets/cc8-CzsnqRSQ.png";
const cc9 = "/assets/cc9-CrIfjv0A.png";
const cc10 = "/assets/cc10-CfHZed8w.png";
const cc11 = "/assets/cc11-Cxn_IalF.png";
const cc12 = "/assets/cc12-CaWM5qew.png";
const cabinJourneyImg = "/assets/9-DrAok-PS.png";
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
const faqs = [
  {
    question: "What does a Cabin Crew professional do?",
    answer: "A Cabin Crew professional is responsible for passenger safety, comfort, and in-flight service, while assisting passengers and handling emergencies when required."
  },
  {
    question: "Is Cabin Crew a good career after 12th?",
    answer: "Yes, it is one of the most rewarding and glamorous career options after 12th. It offers high salary packages, travel opportunities, global exposure, and swift career advancement."
  },
  {
    question: "Where can I learn about Cabin Crew eligibility, salary, and interview preparation?",
    answer: "You can find comprehensive details in our Explore Cabin Crew Career Guides section above. We provide exhaustive resources on height/weight eligibility, salary scales, and prep tips."
  },
  {
    question: "How do I start preparing for a Cabin Crew career?",
    answer: "Joining a certified course at Amigo Academy is the best step. We cover personal grooming, behavioral skills, aviation rules, passenger care, and mock interviews to make you airline-ready."
  },
  {
    question: "What kind of placement support does Amigo Academy provide for cabin crew?",
    answer: "We offer 100% placement assistance, which includes grooming sessions, mock interviews with experts, resume writing workshops, and direct placement opportunities with top domestic and international airlines."
  },
  {
    question: "What skills will I develop during the Aviation, Hospitality & Travel Management course?",
    answer: "You will master communication skills, soft skills, grooming standards, passenger care, food and beverage service, inflight announcement procedures, first aid, and critical emergency response management."
  },
  {
    question: "Does the course include practical training and placement support?",
    answer: "Yes, the training features practical modules including mock aircraft cabin sessions, grooming feedback, and real-world hospitality training, paired with our strong placement program."
  }
];
const categories = [
  {
    title: "Career Planning",
    cards: [
      {
        image: cc1,
        title: "How to Become an Air Hostess After 12th",
        meta: "May 24, 2026 \u2022 8 min read"
      },
      {
        image: cc2,
        title: "Air Hostess Career Growth & Promotions",
        meta: "May 20, 2026 \u2022 5 min read"
      },
      {
        image: cc3,
        title: "A Day in the Life of Cabin Crew",
        meta: "May 16, 2026 \u2022 5 min read"
      }
    ]
  },
  {
    title: "Eligibility & Requirements",
    cards: [
      {
        image: cc4,
        title: "Cabin Crew Eligibility",
        meta: "Aug 12, 2026 \u2022 5 min read"
      },
      {
        image: cc5,
        title: "Air Hostess Height Requirements",
        meta: "Aug 1, 2026 \u2022 15 min read"
      },
      {
        image: cc6,
        title: "Cabin Crew Qualification After 12th Eligibility",
        meta: "June 16, 2026 \u2022 8 min read"
      }
    ]
  },
  {
    title: "Salary & Career Growth",
    cards: [
      {
        image: cc7,
        title: "Air Hostess Salary in India",
        meta: "Aug 10, 2026 \u2022 8 min read"
      },
      {
        image: cc8,
        title: "Domestic vs International Cabin Crew Salary",
        meta: "Aug 5, 2026 \u2022 12 min read"
      },
      {
        image: cc9,
        title: "Cabin Crew Career Growth: Future Opportunities",
        meta: "May 22, 2026 \u2022 11 min read"
      }
    ]
  },
  {
    title: "Skills & Interview Preparation",
    cards: [
      {
        image: cc10,
        title: "Cabin Crew Skills Required",
        meta: "July 10, 2026 \u2022 6 min read"
      },
      {
        image: cc11,
        title: "Cabin Crew Interview Tips & Common Mistakes",
        meta: "Aug 5, 2026 \u2022 7 min read"
      },
      {
        image: cc12,
        title: "Cabin Crew Grooming & Communication Skills",
        meta: "July 5, 2026 \u2022 8 min read"
      }
    ]
  },
  {
    title: "Related Careers",
    cards: [
      {
        image: courseCabiny1,
        title: "Air Hostess Course Duration & Batch Timings",
        meta: "July 10, 2026 \u2022 6 min read"
      },
      {
        image: courseGroundy1,
        title: "Airport Ground Staff Career",
        meta: "July 10, 2026 \u2022 16 min read"
      },
      {
        image: courseAiy1,
        title: "AI & Data Science Career Guide",
        meta: "July 10, 2026 \u2022 16 min read"
      }
    ]
  }
];
function CabinCrew() {
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
              src: cabinHero,
              alt: "Cabin Crew Career Guide",
              className: "w-full h-full object-contain object-right",
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
          /* @__PURE__ */ jsx("span", { className: "font-bold text-[#DF1818] tracking-tight", children: "Cabin Crew Career Guide" })
        ] }),
        /* @__PURE__ */ jsx("h1", { className: "text-3xl sm:text-4xl lg:text-[50px] font-outfit font-extrabold tracking-tight text-[#1C3E8A] leading-[1.15]", children: "Cabin Crew Career Guide" }),
        /* @__PURE__ */ jsx("p", { className: "text-slate-600 font-sans font-semibold text-xs sm:text-[18px] leading-relaxed max-w-lg sm:max-w-xl", children: "Explore everything you need to know about a Cabin Crew career, including roles, eligibility, salary, career growth, required skills, and detailed career guides from Amigo Academy." }),
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
    /* @__PURE__ */ jsx("section", { className: "sm:hidden relative w-full bg-white overflow-hidden border-b border-neutral-100", children: /* @__PURE__ */ jsxs("div", { className: "relative w-full h-[510px] overflow-hidden", children: [
      /* @__PURE__ */ jsx(
        "img",
        {
          src: cabinHeroMobile,
          alt: "Cabin Crew Career Guide",
          className: "absolute inset-0 w-full h-full object-contain object-right-top"
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "absolute inset-y-0 left-0 z-10 px-5 flex flex-col justify-center max-w-[280px]", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1.5 text-xs font-sans font-medium text-slate-400 mb-3", children: [
          /* @__PURE__ */ jsx(Link, { to: "/", className: "hover:text-[#DF1818] transition-colors focus:outline-none", children: "Home" }),
          /* @__PURE__ */ jsx("span", { className: "text-slate-400 mx-1 select-none", children: ">" }),
          /* @__PURE__ */ jsx(Link, { to: "/career-guides", className: "hover:text-[#DF1818] transition-colors focus:outline-none", children: "Career Guides" }),
          /* @__PURE__ */ jsx("span", { className: "text-slate-400 mx-1 select-none", children: ">" }),
          /* @__PURE__ */ jsx("span", { className: "font-bold text-[#DF1818] tracking-tight", children: "Cabin Crew Career Guide" })
        ] }),
        /* @__PURE__ */ jsxs("h1", { className: "text-[28px] font-extrabold text-[#17365d] leading-[1.15] tracking-tight mb-4 font-outfit", children: [
          "Cabin Crew",
          /* @__PURE__ */ jsx("br", {}),
          "Career Guide"
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-[#475569] text-[12.5px] leading-relaxed mb-6 font-medium", children: "Explore everything you need to know about a Cabin Crew career, including roles, eligibility, salary, career growth, required skills, and detailed career guides from Amigo Academy." }),
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
          "Thinking about becoming a",
          /* @__PURE__ */ jsx("br", { className: "hidden sm:block" }),
          " Cabin Crew professional?"
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-5 text-slate-600 font-sans font-semibold text-xs sm:text-[15.5px] leading-relaxed max-w-[700px] mx-auto", children: [
          /* @__PURE__ */ jsx("p", { children: "Before choosing this career, it's important to understand what the profession involves, what airlines expect, and how you can prepare yourself for opportunities in the aviation industry." }),
          /* @__PURE__ */ jsx("p", { children: "This Career Guide brings together everything you need to know before choosing this profession. Learn about the role, responsibilities, career opportunities, and explore detailed guides covering salary, eligibility, skills, interviews, and much more." })
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
        " Cabin Crew"
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto", children: [
        {
          icon: icon1,
          title: "Ensure Passenger Safety",
          desc: "Cabin Crew professionals are trained to handle safety procedures, emergencies, and passenger protection throughout the flight."
        },
        {
          icon: icon2,
          title: "Provide Passenger Comfort & Service",
          desc: "Assist passengers, deliver in-flight services, and ensure a comfortable travel experience."
        },
        {
          icon: icon3,
          title: "Manage Emergency Situations",
          desc: "Cabin Crew members are prepared to respond calmly and effectively during unexpected situations."
        },
        {
          icon: icon4,
          title: "Maintain Professional Standards",
          desc: "They represent the airline by following service standards, grooming guidelines, and professional conduct."
        },
        {
          icon: icon5,
          title: "Support Passenger Needs",
          desc: "They help passengers with queries, special requirements, and overall journey assistance."
        },
        {
          icon: icon6,
          title: "Deliver a Positive Travel Experience",
          desc: "They combine safety, hospitality, and communication skills to create a smooth flight experience."
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
        " Cabin Crew?"
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-5 text-slate-600 font-sans font-semibold text-xs sm:text-[18px] leading-relaxed", children: [
        /* @__PURE__ */ jsx("p", { children: "A career in Cabin Crew offers the opportunity to work in a professional aviation environment while interacting with people from different backgrounds every day. It is a career that values communication, confidence, professionalism, teamwork, and excellent customer service." }),
        /* @__PURE__ */ jsx("p", { children: "Whether your goal is to work with domestic airlines or pursue opportunities internationally, understanding the profession is the first step towards making an informed career decision." })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "bg-[#f4f7fa] py-20 sm:py-24 border-t border-slate-100/60", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-6 sm:px-8 md:px-12", children: [
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20", children: [
        /* @__PURE__ */ jsxs("div", { className: "space-y-6 text-left order-2 lg:order-1", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-3xl sm:text-[40px] font-extrabold text-[#1C3E8A] font-outfit tracking-tight leading-tight", children: "Career Opportunities" }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-5 text-[#4A5568] font-sans font-semibold text-xs sm:text-[15.5px] leading-relaxed", children: [
            /* @__PURE__ */ jsx("p", { children: "Cabin Crew professionals have opportunities to work with domestic and international airlines in customer-facing aviation roles. As the aviation industry continues to grow, skilled professionals remain an important part of delivering safe and comfortable travel experiences." }),
            /* @__PURE__ */ jsx("p", { children: "Career opportunities continue to expand as airlines recruit trained professionals with the right knowledge, confidence, and communication skills." })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "w-full aspect-[16/10] sm:aspect-[1.58] lg:h-[350px] rounded-[24px] overflow-hidden order-1 lg:order-2", children: /* @__PURE__ */ jsx(
          "img",
          {
            src: cabinCrew1,
            alt: "Cabin Crew Career Opportunities",
            className: "w-full h-full object-cover"
          }
        ) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "text-left", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-3xl sm:text-[40px] font-extrabold text-[#1C3E8A] font-outfit mb-10 tracking-tight leading-tight", children: "Potential Career Roles" }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6", children: [
          "Cabin Crew",
          "Air Hostess",
          "Flight Steward",
          "In-flight Customer Service"
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
      /* @__PURE__ */ jsx("h2", { className: "text-3xl sm:text-[40px] font-extrabold text-[#1C3E8A] font-outfit mb-5 leading-tight tracking-tight", children: "Explore Cabin Crew Career Guides" }),
      /* @__PURE__ */ jsx("p", { className: "text-slate-600 font-sans font-semibold text-xs sm:text-[15.5px] max-w-[820px] mx-auto mb-16 leading-relaxed", children: "Every student has different questions before choosing a career. Explore the guides below to understand every important aspect of becoming a Cabin Crew professional." }),
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
      /* @__PURE__ */ jsx("div", { className: "text-center mb-12", children: /* @__PURE__ */ jsx("h2", { className: "text-3xl sm:text-[40px] font-extrabold text-[#1C3E8A] font-outfit leading-tight tracking-tight", children: "Ready to Begin Your Cabin Crew Journey?" }) }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center", children: [
        /* @__PURE__ */ jsxs("div", { className: "space-y-6 text-left order-2 lg:order-1", children: [
          /* @__PURE__ */ jsxs("div", { className: "space-y-5 text-slate-600 font-sans font-semibold text-xs sm:text-[15.5px] leading-relaxed", children: [
            /* @__PURE__ */ jsx("p", { children: "Every career is different, and choosing the right one depends on your interests, strengths, and aspirations. If you enjoy working with people, communicating confidently, travelling, and being part of the aviation industry, Cabin Crew could be a rewarding career path to explore." }),
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
            src: cabinJourneyImg,
            alt: "Begin Your Cabin Crew Journey",
            className: "w-full h-full object-cover"
          }
        ) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "w-full bg-white py-20 border-t border-slate-100", children: /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto px-4 sm:px-6 md:px-8 w-full flex flex-col items-center space-y-12", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center space-y-4", children: [
        /* @__PURE__ */ jsx("span", { className: "inline-block bg-[#FDF6E2] text-[#B7791F] text-[10.5px] font-extrabold uppercase px-5 py-1.5 rounded-full tracking-wider border border-[#F6E05E]/40", children: "Questions By Students & Parents" }),
        /* @__PURE__ */ jsx("h2", { className: "text-3xl sm:text-[38px] font-outfit font-black text-[#1C3E8A] leading-tight", children: "Frequently Asked Questions" }),
        /* @__PURE__ */ jsx("p", { className: "text-neutral-500 font-sans font-semibold text-xs sm:text-[13px] max-w-xl mx-auto leading-relaxed", children: "Honest answers about Cabin Crew Career" })
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
const SplitComponent = CabinCrew;

export { SplitComponent as component };
//# sourceMappingURL=career-guide.cabin-crew-DyUXsl2T.mjs.map
