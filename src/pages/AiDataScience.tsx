import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import aiDsHero from "../assets/img/career guides/ai-ds-hero.png";
import aiDsHeroMobile from "../assets/img/career guides/ai-ds-hero-mobile.png";
import aiDs12 from "../assets/img/career guides/12.png";
import aiDs13 from "../assets/img/career guides/13.png";
import cc1 from "../assets/img/imgs19aug/1.png";
import cc2 from "../assets/img/imgs19aug/2.png";
import cc3 from "../assets/img/imgs19aug/3.png";
import cc4 from "../assets/img/imgs19aug/4.png";
import cc5 from "../assets/img/imgs19aug/5.png";
import cc6 from "../assets/img/imgs19aug/6.png";
import cc7 from "../assets/img/imgs19aug/7.png";
import cc8 from "../assets/img/imgs19aug/8.png";
import cc9 from "../assets/img/imgs19aug/9.png";
import cc10 from "../assets/img/imgs19aug/10.png";
import cc11 from "../assets/img/imgs19aug/11.png";
import cc12 from "../assets/img/imgs19aug/12.png";
import cc13 from "../assets/img/imgs19aug/13.png";
import cc14 from "../assets/img/imgs19aug/14.png";
import cc15 from "../assets/img/imgs19aug/15.png";

import icon1 from "../assets/img/icons/1.png";
import icon2 from "../assets/img/icons/2.png";
import icon3 from "../assets/img/icons/3.png";
import icon4 from "../assets/img/icons/4.png";
import icon5 from "../assets/img/icons/5.png";
import icon6 from "../assets/img/icons/6.png";

function FAQItem({ number, question, answer }: { number: number; question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className={`bg-white border rounded-2xl overflow-hidden transition-all duration-300 ${isOpen
        ? "border-[#1C3E8A]/20 shadow-[0_8px_30px_rgba(0,0,0,0.05)]"
        : "border-[#E1E5ED] shadow-sm"
        }`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-6 py-5 text-left cursor-pointer group"
      >
        <div className="flex items-center space-x-4">
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 text-sm font-bold transition-colors duration-300 ${isOpen ? "bg-[#1C3E8A] text-white" : "bg-[#e8ecf4] text-[#1C3E8A]"
              }`}
          >
            {number}
          </div>
          <span className="text-sm sm:text-[16px] font-outfit font-bold text-[#1C3E8A] pr-4">
            {question}
          </span>
        </div>
        <svg
          className={`w-5 h-5 text-[#1C3E8A] shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""
            }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <div className="px-6 pb-5 pt-1">
          <div className="bg-[#f8fafc] border-l-4 border-[#1C3E8A] p-4 rounded-r-lg">
            <p className="text-slate-600 font-sans text-xs sm:text-[14px] leading-relaxed">
              {answer}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

const categories = [
  {
    title: "Career Planning",
    cards: [
      { image: cc1, title: "Is AI & Data Science a Good Career?", meta: "May 24, 2026 • 8 min read" },
      { image: cc2, title: "AI & Data Science Career Path", meta: "May 20, 2026 • 5 min read" },
      { image: cc3, title: "AI & Data Science Opportunities", meta: "May 16, 2026 • 5 min read" }
    ]
  },
  {
    title: "Eligibility & Requirements",
    cards: [
      { image: cc4, title: "AI & Data Science Eligibility & Syllabus", meta: "Aug 12, 2026 • 5 min read" },
      { image: cc5, title: "AI & Data Science Learning Path", meta: "Aug 1, 2026 • 15 min read" },
      { image: cc6, title: "AI & Data Science Course Preparation", meta: "Aug 1, 2026 • 15 min read" }
    ]
  },
  {
    title: "Salary & Career Growth",
    cards: [
      { image: cc7, title: "Data Science Jobs in Mumbai", meta: "Aug 10, 2026 • 6 min read" },
      { image: cc8, title: "AI & Data Science Career Opportunities", meta: "Aug 5, 2026 • 12 min read" },
      { image: cc9, title: "Data Scientist Salary in India", meta: "Aug 6, 2026 • 12 min read" }
    ]
  },
  {
    title: "Skills & Interview Preparation",
    cards: [
      { image: cc10, title: "Python for Data Science: A Beginner's Guide", meta: "July 10, 2026 • 6 min read" },
      { image: cc11, title: "AI & Data Science Skills", meta: "Aug 5, 2026 • 7 min read" },
      { image: cc12, title: "How to Become Job-Ready for a Data Science Career", meta: "Aug 20, 2026 • 12 min read" }
    ]
  },
  {
    title: "Related Careers",
    cards: [
      { image: cc13, title: "Cabin Crew Career Guide", meta: "July 10, 2026 • 16 min read" },
      { image: cc14, title: "Airport Ground Staff Career Guide", meta: "July 10, 2026 • 16 min read" },
      { image: cc15, title: "AI & Data Science Career Guide", meta: "July 10, 2026 • 16 min read" }
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
    question: "Where can I learn about AI & Data Science eligibility, jobs, and Python?",
    answer: "You can explore our detailed career guides on this page covering eligibility, Python fundamentals, job opportunities, learning paths, and career growth in AI & Data Science."
  },
  {
    question: "How do I start preparing for a career in AI & Data Science?",
    answer: "Start by building foundational skills in mathematics, programming (Python), and data analysis. Enrolling in a structured AI & Data Science course will help you develop practical skills with industry-relevant projects."
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

export default function AiDataScience() {
  const navigate = useNavigate();

  const handleCTA = () => {
    window.dispatchEvent(new CustomEvent("openEligibilityModal"));
  };

  return (
    <div className="flex flex-col bg-white">
      {/* Hero Section */}
      {/* Desktop Hero View */}
      <section className="hidden sm:flex relative w-full min-h-[580px] lg:h-[620px] bg-white items-center overflow-hidden border-b border-neutral-100">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-y-0 right-0 w-full lg:w-[52%] h-full">
            <img
              src={aiDsHero}
              alt="AI & Data Science Career Guide"
              className="w-full h-full object-cover object-left lg:object-center"
              onError={(e) => { e.currentTarget.style.display = "none"; }}
            />
            <div className="absolute inset-0 bg-neutral-900/5 mix-blend-multiply" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white via-48% md:via-52% lg:via-48% to-transparent z-10 pointer-events-none" />
        </div>

        <div className="relative max-w-7xl mx-auto w-full px-6 sm:px-8 md:px-12 z-20 py-16 lg:py-0">
          <div className="max-w-xl lg:max-w-[680px] text-left flex flex-col space-y-6">
            <h1 className="text-3xl sm:text-4xl lg:text-[50px] font-outfit font-extrabold tracking-tight text-[#1C3E8A] leading-snug sm:leading-[1.28] lg:leading-[1.32]">
              AI & Data Science Career Guide
            </h1>
            <p className="text-slate-600 font-sans font-semibold text-xs sm:text-[18px] leading-relaxed max-w-lg sm:max-w-xl">
              Thinking about building a career in Artificial Intelligence or Data Science? This Career Guide brings together everything you need to know before choosing this fast-growing profession.
            </p>
            <p className="text-slate-600 font-sans font-semibold text-xs sm:text-[18px] leading-relaxed max-w-lg sm:max-w-xl">
              Learn about career opportunities, industry demand, required skills, and explore detailed guides covering eligibility, jobs, Python, and much more.
            </p>
            <div className="pt-2">
              <button
                onClick={() => window.location.href = "tel:+919987588932"}
                className="inline-flex items-center justify-center gap-2 bg-[#DF1818] hover:bg-[#c41212] text-white font-sans font-bold text-xs sm:text-[14px] px-8 py-3.5 rounded-full shadow-[0_8px_20px_rgba(223,24,24,0.2)] hover:shadow-[0_12px_24px_rgba(223,24,24,0.3)] transition-all duration-300 active:scale-95 whitespace-nowrap focus:outline-none cursor-pointer"
              >
                Talk to a Career Counsellor
                <span className="font-bold">&nbsp;&#10132;</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Hero View matching screenshot */}
      <section className="sm:hidden relative w-full bg-white overflow-hidden border-b border-neutral-100">
        <div className="relative w-full h-[530px] overflow-hidden">
          {/* Background Image without gradient overlay */}
          <img
            src={aiDsHeroMobile}
            alt="AI & Data Science Career Guide"
            className="absolute inset-0 w-full h-full object-cover object-[right_top]"
          />

          {/* Text Content overlay matching screenshot */}
          <div className="absolute inset-y-0 left-0 z-10 px-5 flex flex-col justify-center max-w-[275px]">
            <h1 className="text-[28px] font-extrabold text-[#17365d] leading-[1.3] tracking-tight mb-4 font-outfit">
              AI &amp;<br />
              Data Science<br />
              Career Guide
            </h1>

            <div className="space-y-3 text-[#475569] text-[12px] leading-relaxed font-medium mb-6">
              <p>
                This Career Guide brings together everything you need to know before choosing this fast-growing profession.
              </p>
              <p>
                Learn about career opportunities, industry demand, required skills, and explore detailed guides covering eligibility, jobs, Python, and much more.
              </p>
            </div>

            <div>
              <button
                onClick={() => window.location.href = "tel:+919987588932"}
                className="inline-flex items-center justify-between gap-3 bg-[#e02607] hover:bg-[#c81e04] text-white font-bold text-[13.5px] px-5 py-3 rounded-full shadow-lg active:scale-95 transition-all duration-300 cursor-pointer"
              >
                <span>Talk to a Career Counsellor</span>
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20 text-white text-xs font-extrabold">➔</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Thinking about building a career in AI & Data Science section */}
      <section className="bg-white py-20 sm:py-24 border-t border-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-[940px] mx-auto flex flex-col items-center">
            <div className="w-full text-center mb-12">
              <h2 className="text-3xl sm:text-[40px] font-extrabold text-[#1C3E8A] font-outfit mb-8 leading-tight tracking-tight">
                Thinking about building a <br className="hidden sm:block" /> career in AI & Data Science?
              </h2>
              <div className="space-y-5 text-slate-600 font-sans font-semibold text-xs sm:text-[15.5px] leading-relaxed max-w-[700px] mx-auto">
                <p>
                  Before choosing this career, it's important to understand what AI & Data Science professionals do, what skills the industry demands, and how you can prepare yourself for opportunities in this fast-growing technology field.
                </p>
                <p>
                  This Career Guide brings together everything you need to know before choosing this profession. Learn about the role, responsibilities, career opportunities, and explore detailed guides covering eligibility, skills, Python, job opportunities, learning paths, and much more.
                </p>
              </div>
            </div>
            <div className="w-full flex justify-center pt-2">
              <button
                onClick={handleCTA}
                className="inline-flex items-center justify-center gap-2 bg-[#DF1818] hover:bg-[#c41212] text-white font-sans font-bold text-xs sm:text-[14px] px-8 py-4 rounded-full shadow-[0_8px_20px_rgba(223,24,24,0.15)] hover:shadow-[0_12px_24px_rgba(223,24,24,0.25)] transition-all duration-300 active:scale-95 whitespace-nowrap focus:outline-none cursor-pointer"
              >
                Check Career Opportunities
                <span className="font-bold">&nbsp;&#10132;</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* What Does an AI & Data Science Professional Do section */}
      <section className="bg-[#f0f4f9] py-20 sm:py-24 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl sm:text-[40px] font-extrabold text-[#17365d] font-outfit mb-14 text-center leading-tight tracking-tight">
            What Does an AI & Data Science<br className="hidden sm:block" /> Professional Do?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {[
              { icon: icon1, title: "Develop Machine Learning Models", desc: "AI & Data Science professionals develop machine learning models and create predictive solutions to solve real-world problems." },
              { icon: icon2, title: "Collect & Analyse Data", desc: "AI & Data Science professionals collect, analyse, and interpret data to identify patterns and support better decision-making." },
              { icon: icon3, title: "Create AI-Powered Applications", desc: "Professionals build AI-powered applications using intelligent technologies to develop practical solutions across industries." },
              { icon: icon4, title: "Analyse Trends & Insights", desc: "AI & Data Science professionals analyse trends and use data-driven insights to help organisations make informed decisions." },
              { icon: icon5, title: "Automate Processes", desc: "Professionals use AI and automation technologies to improve efficiency and solve business challenges." },
              { icon: icon6, title: "Build Intelligent Solutions", desc: "AI & Data Science professionals create innovative solutions using data, machine learning, and emerging technologies." }
            ].map((card, idx) => (
              <div
                key={idx}
                className="bg-white rounded-[24px] p-7 sm:p-8 border border-white shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_14px_40px_rgba(0,0,0,0.07)] transition-all duration-300 flex flex-col text-left justify-start"
              >
                <div className="w-11 h-11 rounded-full bg-[#fef3c7] flex items-center justify-center mb-6 shrink-0">
                  <img src={card.icon} alt="" className="w-5 h-5 object-contain" />
                </div>
                <h3 className="text-[16px] sm:text-[17px] font-bold text-[#17365d] font-outfit mb-3 leading-snug">{card.title}</h3>
                <p className="text-slate-500 font-sans text-xs sm:text-[13.5px] font-normal leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* AI & Data Science: A Growing Career Field section */}
      <section className="bg-white py-20 sm:py-24 border-t border-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-[820px] mx-auto text-center">
            <h2 className="text-3xl sm:text-[44px] font-extrabold text-[#1C3E8A] font-outfit mb-10 leading-tight tracking-tight">
              AI & Data Science: A<br className="hidden sm:block" /> Growing Career Field
            </h2>
            <div className="space-y-5 text-slate-600 font-sans font-semibold text-xs sm:text-[18px] leading-relaxed">
              <p>
                Artificial Intelligence and Data Science are among today's fastest-growing career fields. Organisations across industries are increasingly using AI and data-driven technologies to improve decision-making, automate processes, and drive innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Career Opportunities & Potential Career Roles section */}
      <section className="bg-[#f4f7fa] py-20 sm:py-24 border-t border-slate-100/60">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
            <div className="space-y-6 text-left order-2 lg:order-1">
              <h2 className="text-3xl sm:text-[40px] font-extrabold text-[#1C3E8A] font-outfit tracking-tight leading-tight">
                Career Opportunities
              </h2>
              <div className="space-y-5 text-[#4A5568] font-sans font-semibold text-xs sm:text-[15.5px] leading-relaxed">
                <p>
                  AI & Data Science professionals have opportunities across a wide range of industries including technology, healthcare, finance, retail, manufacturing, education, and many more.
                </p>
                <p>
                  As organisations continue adopting AI-powered solutions, the demand for skilled professionals continues to grow.
                </p>
              </div>
            </div>
            <div className="w-full aspect-[16/10] sm:aspect-[1.58] lg:h-[350px] rounded-[24px] overflow-hidden order-1 lg:order-2">
              <img
                src={aiDs12}
                alt="AI & Data Science Career Opportunities"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Potential Career Roles */}
          <div className="text-left">
            <h3 className="text-3xl sm:text-[40px] font-extrabold text-[#1C3E8A] font-outfit mb-10 tracking-tight leading-tight">
              Potential Career Roles
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {["AI Associate", "Data Analyst", "Junior Data Scientist", "Machine Learning Associate"].map((role, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-[20px] py-7 px-4 border border-[#E1E5ED] shadow-[0_8px_30px_rgb(0,0,0,0.02)] hover:shadow-[0_12px_40px_rgb(0,0,0,0.05)] transition-all duration-300 flex items-center justify-center min-h-[90px] text-center"
                >
                  <span className="text-[15px] sm:text-[16px] font-bold text-[#1C3E8A] font-outfit">{role}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Explore AI & Data Science Career Guides Section */}
      <section className="bg-white py-20 sm:py-24 border-t border-slate-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 text-center">
          <h2 className="text-3xl sm:text-[40px] font-extrabold text-[#1C3E8A] font-outfit mb-5 leading-tight tracking-tight">
            Explore AI & Data Science<br className="hidden sm:block" /> Career Guides
          </h2>
          <p className="text-slate-600 font-sans font-semibold text-xs sm:text-[15.5px] max-w-[820px] mx-auto mb-16 leading-relaxed">
            Every student has different questions before choosing a career. Explore the guides below to understand every important aspect of building a career in AI & Data Science.
          </p>

          <div className="space-y-16">
            {categories.map((category, catIdx) => (
              <div key={catIdx} className="text-center">
                <h3 className="text-2xl sm:text-[28px] font-extrabold text-[#1C3E8A] font-outfit mb-8 tracking-tight text-center">
                  {category.title}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 text-left">
                  {category.cards.map((card, cardIdx) => (
                    <div
                      key={cardIdx}
                      onClick={() => {
                        navigate("/how-to-become-a-cabin-crew-after-12th");
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                      className="bg-white rounded-[24px] overflow-hidden border border-[#E1E5ED] shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.07)] transition-all duration-300 flex flex-col justify-between text-left group cursor-pointer hover:-translate-y-1"
                    >
                      <div>
                        <div className="relative w-full h-[190px] sm:h-[200px] overflow-hidden bg-slate-100">
                          <img
                            src={card.image}
                            alt={card.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                        <div className="p-6 flex flex-col justify-between min-h-[110px]">
                          <h4 className="text-[15px] sm:text-[16px] font-bold text-[#17365d] font-outfit leading-snug mb-3 group-hover:text-[#DF1818] transition-colors duration-300">
                            {card.title}
                          </h4>
                          <p className="text-[#94a3b8] font-sans text-[11.5px] sm:text-[12px] font-medium leading-relaxed">
                            {card.meta}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ready to Begin Your AI & Data Science Journey section */}
      <section className="bg-[#f4f7fa] py-20 sm:py-24 border-t border-slate-100/60">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-[40px] font-extrabold text-[#1C3E8A] font-outfit leading-tight tracking-tight">
              Ready to Begin Your AI & Data Science Journey?
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6 text-left order-2 lg:order-1">
              <div className="space-y-5 text-slate-600 font-sans font-semibold text-xs sm:text-[15.5px] leading-relaxed">
                <p>
                  Every career is different, and choosing the right one depends on your interests, strengths, and aspirations. If you enjoy working with technology, analysing data, solving problems, and learning emerging technologies, AI & Data Science could be a rewarding career path to explore.
                </p>
                <p>
                  If you're still unsure, our counsellors can help you understand the profession, discuss your career options, and answer your questions before you make a decision.
                </p>
              </div>
              <div className="pt-4">
                <button
                  onClick={handleCTA}
                  className="inline-flex items-center justify-center gap-2 bg-[#DF1818] hover:bg-[#c41212] text-white font-sans font-bold text-xs sm:text-[14px] px-8 py-4 rounded-full shadow-[0_8px_20px_rgba(223,24,24,0.2)] hover:shadow-[0_12px_24px_rgba(223,24,24,0.3)] transition-all duration-300 active:scale-95 whitespace-nowrap focus:outline-none cursor-pointer"
                >
                  Book Free Career Counselling
                  <span className="font-bold">&nbsp;&#10132;</span>
                </button>
              </div>
            </div>
            <div className="w-full h-[300px] sm:h-[400px] lg:h-[380px] rounded-[24px] overflow-hidden order-1 lg:order-2 shadow-[0_10px_30px_rgba(0,0,0,0.04)]">
              <img
                src={aiDs13}
                alt="Begin Your AI & Data Science Journey"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions Section */}
      <section className="w-full bg-white py-20 border-t border-slate-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 md:px-8 w-full flex flex-col items-center space-y-12">
          <div className="text-center space-y-4">
            <span className="inline-block bg-[#FDF6E2] text-[#B7791F] text-[10.5px] font-extrabold uppercase px-5 py-1.5 rounded-full tracking-wider border border-[#F6E05E]/40">
              Questions By Students &amp; Parents
            </span>
            <h2 className="text-3xl sm:text-[38px] font-outfit font-black text-[#1C3E8A] leading-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-neutral-500 font-sans font-semibold text-xs sm:text-[13px] max-w-xl mx-auto leading-relaxed">
              Honest answers about AI & Data Science Careers
            </p>
          </div>
          <div className="w-full space-y-4">
            {faqs.map((faq, idx) => (
              <FAQItem key={idx} number={idx + 1} question={faq.question} answer={faq.answer} />
            ))}
          </div>

          {/* Have More Questions Banner Pill */}
          <div className="mt-10 text-center">
            <button
              onClick={() => {
                navigate("/contact");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 bg-[#fffbf0] border border-[#ffecd1] px-6 py-3 rounded-full shadow-[0_4px_10px_rgba(255,236,209,0.2)] hover:scale-105 transition-all cursor-pointer"
            >
              <span className="text-[#e31e24] font-bold text-xs sm:text-sm">✨</span>
              <span className="text-[#0b2f61] font-sans font-bold text-[10px] sm:text-xs tracking-wider uppercase">
                If you have anymore question, please contact us
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Batches are filling fast section */}
      <section className="bg-[#001D4A] py-16 sm:py-20 text-center text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
          <div className="bg-[#1e293b]/40 border border-slate-700/50 rounded-xl px-5 py-2 inline-flex items-center gap-2 text-xs font-bold text-[#ffd300] uppercase tracking-wider mb-6">
            <span>&#9889;</span> LIMITED SEATS PER BATCH &#8212; APPLY EARLY TO SECURE YOUR SPOT
          </div>
          <h2 className="text-3xl sm:text-[44px] lg:text-[48px] font-extrabold text-white font-outfit max-w-4xl leading-tight tracking-tight mb-4">
            2026 Batches Are Filling Fast &#8212; Secure Your Spot Now!
          </h2>
          <p className="text-slate-300 font-sans font-semibold text-xs sm:text-[16px] leading-relaxed mb-6">
            Admissions Open &#8212; Secure Your Seat Early. One free call is all it takes.
          </p>
          <div className="bg-[#1e293b]/40 border border-slate-700/50 rounded-xl px-5 py-2 inline-flex items-center gap-2 text-xs font-bold text-[#ffd300] uppercase tracking-wider mb-10">
            <span>&#127963;</span> Maharashtra Govt Certified &#8212; Only aviation institute in Maharashtra
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-4xl mb-8">
            <button
              onClick={handleCTA}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#DF1818] hover:bg-[#c41212] text-white font-sans font-bold text-xs sm:text-[14px] uppercase tracking-wider px-8 py-4 rounded-xl shadow-lg transition-all duration-300 active:scale-95 whitespace-nowrap focus:outline-none cursor-pointer"
            >
              CHECK MY ELIGIBILITY NOW
            </button>
            <button
              onClick={handleCTA}
              className="w-full sm:w-auto inline-flex items-center justify-center bg-[#DF1818] hover:bg-[#c41212] text-white font-sans font-bold text-xs sm:text-[14px] px-8 py-4 rounded-xl shadow-lg transition-all duration-300 active:scale-95 whitespace-nowrap focus:outline-none cursor-pointer"
            >
              Start My Course
            </button>
            <a
              href="https://wa.me/919987588932"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba56] text-white font-sans font-bold text-xs sm:text-[14px] px-8 py-4 rounded-xl shadow-lg transition-all duration-300 active:scale-95 whitespace-nowrap focus:outline-none cursor-pointer"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.248 8.477 3.517 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.963C16.588 1.981 14.117.954 11.5.954c-5.43 0-9.855 4.37-9.859 9.801-.002 1.757.465 3.472 1.353 4.982L2.003 21.84l6.143-1.603z" />
              </svg>
              Chat on WhatsApp
            </a>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs sm:text-[13px] text-slate-300 font-bold font-sans">
            <span className="flex items-center gap-1.5"><span className="text-[#25D366]">&#10003;</span> 4.6 Google Rating</span>
            <span className="flex items-center gap-1.5"><span className="text-[#25D366]">&#10003;</span> 10,000+ Students Trained</span>
            <span className="flex items-center gap-1.5"><span className="text-[#25D366]">&#10003;</span> Certified Courses</span>
            <span className="flex items-center gap-1.5"><span className="text-[#25D366]">&#10003;</span> 200+ Hiring Partners</span>
          </div>

          {/* Download Brochure PDF Button below Trust Markers */}
          <div className="mt-8 flex justify-center">
            <button
              onClick={handleCTA}
              className="inline-flex items-center justify-center gap-2.5 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-sans font-bold text-xs sm:text-sm px-7 py-3.5 rounded-full shadow-lg transition-all active:scale-95 cursor-pointer"
            >
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M7.5 12l4.5 4.5m0 0l4.5-4.5M12 16.5V3" />
              </svg>
              <span>Download Brochure (PDF)</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
