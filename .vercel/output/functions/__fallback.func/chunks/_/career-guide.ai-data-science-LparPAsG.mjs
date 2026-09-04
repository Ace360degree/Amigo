import { jsxs, jsx } from 'react/jsx-runtime';
import { useState } from 'react';
import { useNavigate, Link } from '@tanstack/react-router';
import { i as icon1, a as icon2, b as icon3, c as icon4, d as icon5, e as icon6 } from './6-BSAB3DQ9.mjs';

const aiDsHero = "/assets/ai-ds-hero-t_di7irk.png";
const aiDsHeroMobile = "/assets/ai-ds-hero-mobile-BK7NQhbJ.png";
const aiDs12 = "/assets/12-1msF5q-4.png";
const aiDs13 = "/assets/13-D9j8hQh6.png";
const cc1 = "/assets/1-CdFvM0bf.png";
const cc2 = "/assets/2-Dcc6pApp.png";
const cc3 = "/assets/3-DrEnGf1p.png";
const cc4 = "/assets/4-D7dXx_17.png";
const cc5 = "/assets/5-B6OaAPaR.png";
const cc6 = "/assets/6-CMv1OjNO.png";
const cc7 = "/assets/7-aiN7UJKN.png";
const cc8 = "/assets/8-CnH4W2xU.png";
const cc9 = "/assets/9-huzoEISx.png";
const cc10 = "/assets/10-njDXtj7a.png";
const cc11 = "/assets/11-D-z6LuEl.png";
const cc12 = "/assets/12-6dcl4Rwi.png";
const cc13 = "/assets/13-CFtHtYuf.png";
const cc14 = "/assets/14-DsFuLBus.png";
const cc15 = "/assets/15-DHIxCDmg.png";
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
    title: "Career Planning",
    cards: [
      { image: cc1, title: "Is AI & Data Science a Good Career?", meta: "May 24, 2026 \u2022 8 min read" },
      { image: cc2, title: "AI & Data Science Career Path", meta: "May 20, 2026 \u2022 5 min read" },
      { image: cc3, title: "AI & Data Science Opportunities", meta: "May 16, 2026 \u2022 5 min read" }
    ]
  },
  {
    title: "Eligibility & Requirements",
    cards: [
      { image: cc4, title: "AI & Data Science Eligibility & Syllabus", meta: "Aug 12, 2026 \u2022 5 min read" },
      { image: cc5, title: "AI & Data Science Learning Path", meta: "Aug 1, 2026 \u2022 15 min read" },
      { image: cc6, title: "AI & Data Science Course Preparation", meta: "Aug 1, 2026 \u2022 15 min read" }
    ]
  },
  {
    title: "Salary & Career Growth",
    cards: [
      { image: cc7, title: "Data Science Jobs in Mumbai", meta: "Aug 10, 2026 \u2022 6 min read" },
      { image: cc8, title: "AI & Data Science Career Opportunities", meta: "Aug 5, 2026 \u2022 12 min read" },
      { image: cc9, title: "Data Scientist Salary in India", meta: "Aug 6, 2026 \u2022 12 min read" }
    ]
  },
  {
    title: "Skills & Interview Preparation",
    cards: [
      { image: cc10, title: "Data Science: A Beginner's Guide", meta: "July 10, 2026 \u2022 6 min read" },
      { image: cc11, title: "AI & Data Science Skills", meta: "Aug 5, 2026 \u2022 7 min read" },
      { image: cc12, title: "How to Become Job-Ready for a Data Science Career", meta: "Aug 20, 2026 \u2022 12 min read" }
    ]
  },
  {
    title: "Related Careers",
    cards: [
      { image: cc13, title: "Cabin Crew Career Guide", meta: "July 10, 2026 \u2022 16 min read" },
      { image: cc14, title: "Airport Ground Staff Career Guide", meta: "July 10, 2026 \u2022 16 min read" },
      { image: cc15, title: "AI & Data Science Career Guide", meta: "July 10, 2026 \u2022 16 min read" }
    ]
  }
];
const faqs = [
  {
    question: "What does an AI & Data Science professional do?",
    answer: "AI & Data Science professionals work with data, programming, and technologies to analyse information, build intelligent solutions, and help businesses make better decisions."
  },
  {
    question: "Is AI & Data Science a good career after 12th?",
    answer: "Yes, AI & Data Science is one of the fastest-growing career fields globally. Students who build a strong foundation in programming, data analysis, and machine learning can access high-demand opportunities across industries."
  },
  {
    question: "Where can I learn about AI & Data Science eligibility and jobs?",
    answer: "You can explore our detailed career guides on this page covering eligibility, programming fundamentals, job opportunities, learning paths, and career growth in AI & Data Science."
  },
  {
    question: "How do I start preparing for a career in AI & Data Science?",
    answer: "Start by building foundational skills in mathematics, programming, and data analysis. Enrolling in a structured AI & Data Science course will help you develop practical skills with industry-relevant projects."
  },
  {
    question: "What kind of placement support does Amigo Academy provide for AI & DS students?",
    answer: "Amigo Academy provides placement assistance including career counselling, resume building, mock interviews, and connections with hiring partners across IT companies, startups, and global organisations."
  },
  {
    question: "What career opportunities are available after completing the course?",
    answer: "After completing the course, you can pursue roles such as AI Associate, Data Analyst, Junior Data Scientist, Machine Learning Associate, Business Intelligence Analyst, and more across technology, healthcare, finance, and other industries."
  }
];
function AiDataScience() {
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
              src: aiDsHero,
              alt: "AI & Data Science Career Guide",
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
          /* @__PURE__ */ jsx("span", { className: "font-bold text-[#DF1818] tracking-tight", children: "AI & Data Science Career Guide" })
        ] }),
        /* @__PURE__ */ jsx("h1", { className: "text-3xl sm:text-4xl lg:text-[50px] font-outfit font-extrabold tracking-tight text-[#1C3E8A] leading-snug sm:leading-[1.28] lg:leading-[1.32]", children: "AI & Data Science Career Guide" }),
        /* @__PURE__ */ jsx("p", { className: "text-slate-600 font-sans font-semibold text-xs sm:text-[18px] leading-relaxed max-w-lg sm:max-w-xl", children: "Thinking about building a career in Artificial Intelligence or Data Science? This Career Guide brings together everything you need to know before choosing this fast-growing profession." }),
        /* @__PURE__ */ jsx("p", { className: "text-slate-600 font-sans font-semibold text-xs sm:text-[18px] leading-relaxed max-w-lg sm:max-w-xl", children: "Learn about career opportunities, industry demand, required skills, and explore detailed guides covering eligibility, jobs, Programming, and much more." }),
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
    /* @__PURE__ */ jsx("section", { className: "sm:hidden relative w-full bg-white overflow-hidden border-b border-neutral-100", children: /* @__PURE__ */ jsxs("div", { className: "relative w-full h-[530px] overflow-hidden", children: [
      /* @__PURE__ */ jsx(
        "img",
        {
          src: aiDsHeroMobile,
          alt: "AI & Data Science Career Guide",
          className: "absolute inset-0 w-full h-full object-cover object-[right_top]"
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "absolute inset-y-0 left-0 z-10 px-5 flex flex-col justify-center max-w-[275px]", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1.5 text-xs font-sans font-medium text-slate-400 mb-3", children: [
          /* @__PURE__ */ jsx(Link, { to: "/", className: "hover:text-[#DF1818] transition-colors focus:outline-none", children: "Home" }),
          /* @__PURE__ */ jsx("span", { className: "text-slate-400 mx-1 select-none", children: ">" }),
          /* @__PURE__ */ jsx(Link, { to: "/career-guides", className: "hover:text-[#DF1818] transition-colors focus:outline-none", children: "Career Guides" }),
          /* @__PURE__ */ jsx("span", { className: "text-slate-400 mx-1 select-none", children: ">" }),
          /* @__PURE__ */ jsx("span", { className: "font-bold text-[#DF1818] tracking-tight", children: "AI & Data Science Career Guide" })
        ] }),
        /* @__PURE__ */ jsxs("h1", { className: "text-[28px] font-extrabold text-[#17365d] leading-[1.3] tracking-tight mb-4 font-outfit", children: [
          "AI &",
          /* @__PURE__ */ jsx("br", {}),
          "Data Science",
          /* @__PURE__ */ jsx("br", {}),
          "Career Guide"
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-3 text-[#475569] text-[12px] leading-relaxed font-medium mb-6", children: [
          /* @__PURE__ */ jsx("p", { children: "This Career Guide brings together everything you need to know before choosing this fast-growing profession." }),
          /* @__PURE__ */ jsx("p", { children: "Learn about career opportunities, industry demand, required skills, and explore detailed guides covering eligibility, jobs, Programming, and much more." })
        ] }),
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
          " career in AI & Data Science?"
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-5 text-slate-600 font-sans font-semibold text-xs sm:text-[15.5px] leading-relaxed max-w-[700px] mx-auto", children: [
          /* @__PURE__ */ jsx("p", { children: "Before choosing this career, it's important to understand what AI & Data Science professionals do, what skills the industry demands, and how you can prepare yourself for opportunities in this fast-growing technology field." }),
          /* @__PURE__ */ jsx("p", { children: "This Career Guide brings together everything you need to know before choosing this profession. Learn about the role, responsibilities, career opportunities, and explore detailed guides covering eligibility, skills, Programming, job opportunities, learning paths, and much more." })
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
        "What Does an AI & Data Science",
        /* @__PURE__ */ jsx("br", { className: "hidden sm:block" }),
        " Professional Do?"
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto", children: [
        { icon: icon1, title: "Develop Machine Learning Models", desc: "AI & Data Science professionals develop machine learning models and create predictive solutions to solve real-world problems." },
        { icon: icon2, title: "Collect & Analyse Data", desc: "AI & Data Science professionals collect, analyse, and interpret data to identify patterns and support better decision-making." },
        { icon: icon3, title: "Create AI-Powered Applications", desc: "Professionals build AI-powered applications using intelligent technologies to develop practical solutions across industries." },
        { icon: icon4, title: "Analyse Trends & Insights", desc: "AI & Data Science professionals analyse trends and use data-driven insights to help organisations make informed decisions." },
        { icon: icon5, title: "Automate Processes", desc: "Professionals use AI and automation technologies to improve efficiency and solve business challenges." },
        { icon: icon6, title: "Build Intelligent Solutions", desc: "AI & Data Science professionals create innovative solutions using data, machine learning, and emerging technologies." }
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
        "AI & Data Science: A",
        /* @__PURE__ */ jsx("br", { className: "hidden sm:block" }),
        " Growing Career Field"
      ] }),
      /* @__PURE__ */ jsx("div", { className: "space-y-5 text-slate-600 font-sans font-semibold text-xs sm:text-[18px] leading-relaxed", children: /* @__PURE__ */ jsx("p", { children: "Artificial Intelligence and Data Science are among today's fastest-growing career fields. Organisations across industries are increasingly using AI and data-driven technologies to improve decision-making, automate processes, and drive innovation." }) })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "bg-[#f4f7fa] py-20 sm:py-24 border-t border-slate-100/60", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-6 sm:px-8 md:px-12", children: [
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20", children: [
        /* @__PURE__ */ jsxs("div", { className: "space-y-6 text-left order-2 lg:order-1", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-3xl sm:text-[40px] font-extrabold text-[#1C3E8A] font-outfit tracking-tight leading-tight", children: "Career Opportunities" }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-5 text-[#4A5568] font-sans font-semibold text-xs sm:text-[15.5px] leading-relaxed", children: [
            /* @__PURE__ */ jsx("p", { children: "AI & Data Science professionals have opportunities across a wide range of industries including technology, healthcare, finance, retail, manufacturing, education, and many more." }),
            /* @__PURE__ */ jsx("p", { children: "As organisations continue adopting AI-powered solutions, the demand for skilled professionals continues to grow." })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "w-full aspect-[16/10] sm:aspect-[1.58] lg:h-[350px] rounded-[24px] overflow-hidden order-1 lg:order-2", children: /* @__PURE__ */ jsx(
          "img",
          {
            src: aiDs12,
            alt: "AI & Data Science Career Opportunities",
            className: "w-full h-full object-cover"
          }
        ) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "text-left", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-3xl sm:text-[40px] font-extrabold text-[#1C3E8A] font-outfit mb-10 tracking-tight leading-tight", children: "Potential Career Roles" }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6", children: ["AI Associate", "Data Analyst", "Junior Data Scientist", "Machine Learning Associate"].map((role, idx) => /* @__PURE__ */ jsx(
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
      /* @__PURE__ */ jsxs("h2", { className: "text-3xl sm:text-[40px] font-extrabold text-[#1C3E8A] font-outfit mb-5 leading-tight tracking-tight", children: [
        "Explore AI & Data Science",
        /* @__PURE__ */ jsx("br", { className: "hidden sm:block" }),
        " Career Guides"
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-slate-600 font-sans font-semibold text-xs sm:text-[15.5px] max-w-[820px] mx-auto mb-16 leading-relaxed", children: "Every student has different questions before choosing a career. Explore the guides below to understand every important aspect of building a career in AI & Data Science." }),
      /* @__PURE__ */ jsx("div", { className: "space-y-16", children: categories.map((category, catIdx) => /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-2xl sm:text-[28px] font-extrabold text-[#1C3E8A] font-outfit mb-8 tracking-tight text-center", children: category.title }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 text-left", children: category.cards.map((card, cardIdx) => /* @__PURE__ */ jsx(
          "div",
          {
            onClick: () => {
              navigate({ to: "/how-to-become-a-cabin-crew-after-12th" });
              window.scrollTo({ top: 0, behavior: "smooth" });
            },
            className: "bg-white rounded-[24px] overflow-hidden border border-[#E1E5ED] shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.07)] transition-all duration-300 flex flex-col justify-between text-left group cursor-pointer hover:-translate-y-1",
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
      /* @__PURE__ */ jsx("div", { className: "text-center mb-12", children: /* @__PURE__ */ jsx("h2", { className: "text-3xl sm:text-[40px] font-extrabold text-[#1C3E8A] font-outfit leading-tight tracking-tight", children: "Ready to Begin Your AI & Data Science Journey?" }) }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center", children: [
        /* @__PURE__ */ jsxs("div", { className: "space-y-6 text-left order-2 lg:order-1", children: [
          /* @__PURE__ */ jsxs("div", { className: "space-y-5 text-slate-600 font-sans font-semibold text-xs sm:text-[15.5px] leading-relaxed", children: [
            /* @__PURE__ */ jsx("p", { children: "Every career is different, and choosing the right one depends on your interests, strengths, and aspirations. If you enjoy working with technology, analysing data, solving problems, and learning emerging technologies, AI & Data Science could be a rewarding career path to explore." }),
            /* @__PURE__ */ jsx("p", { children: "If you're still unsure, our counsellors can help you understand the profession, discuss your career options, and answer your questions before you make a decision." })
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
            src: aiDs13,
            alt: "Begin Your AI & Data Science Journey",
            className: "w-full h-full object-cover"
          }
        ) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "w-full bg-white py-20 border-t border-slate-100", children: /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto px-4 sm:px-6 md:px-8 w-full flex flex-col items-center space-y-12", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center space-y-4", children: [
        /* @__PURE__ */ jsx("span", { className: "inline-block bg-[#FDF6E2] text-[#B7791F] text-[10.5px] font-extrabold uppercase px-5 py-1.5 rounded-full tracking-wider border border-[#F6E05E]/40", children: "Questions By Students & Parents" }),
        /* @__PURE__ */ jsx("h2", { className: "text-3xl sm:text-[38px] font-outfit font-black text-[#1C3E8A] leading-tight", children: "Frequently Asked Questions" }),
        /* @__PURE__ */ jsx("p", { className: "text-neutral-500 font-sans font-semibold text-xs sm:text-[13px] max-w-xl mx-auto leading-relaxed", children: "Honest answers about AI & Data Science Careers" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "w-full space-y-4", children: faqs.map((faq, idx) => /* @__PURE__ */ jsx(FAQItem, { number: idx + 1, question: faq.question, answer: faq.answer }, idx)) }),
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
      /* @__PURE__ */ jsx("p", { className: "text-slate-300 font-sans font-semibold text-xs sm:text-[16px] leading-relaxed mb-6", children: "Admissions Open \u2014 Secure Your Seat Early. One free call is all it takes." }),
      /* @__PURE__ */ jsxs("div", { className: "bg-[#1e293b]/40 border border-slate-700/50 rounded-xl px-5 py-2 inline-flex items-center gap-2 text-xs font-bold text-[#ffd300] uppercase tracking-wider mb-10", children: [
        /* @__PURE__ */ jsx("span", { children: "\u{1F393}" }),
        " Industry-Oriented Professional Training"
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-4xl mb-8", children: [
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: handleCTA,
            className: "w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#DF1818] hover:bg-[#c41212] text-white font-sans font-bold text-xs sm:text-[14px] uppercase tracking-wider px-8 py-4 rounded-xl shadow-lg transition-all duration-300 active:scale-95 whitespace-nowrap focus:outline-none cursor-pointer",
            children: "CHECK MY ELIGIBILITY NOW"
          }
        ),
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: handleCTA,
            className: "w-full sm:w-auto inline-flex items-center justify-center bg-[#DF1818] hover:bg-[#c41212] text-white font-sans font-bold text-xs sm:text-[14px] px-8 py-4 rounded-xl shadow-lg transition-all duration-300 active:scale-95 whitespace-nowrap focus:outline-none cursor-pointer",
            children: "Start My Course"
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
const SplitComponent = AiDataScience;

export { SplitComponent as component };
//# sourceMappingURL=career-guide.ai-data-science-LparPAsG.mjs.map
