import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import airportHero from "../assets/img/career guides/airportground-hero.png";
import airportHeroMobile from "../assets/img/career guides/airportground-heromobile.png";
import ground10 from "../assets/img/career guides/10.png";
import ground11 from "../assets/img/career guides/11.png";
import cc13 from "../assets/img/career guides/cc13.png";
import cc14 from "../assets/img/career guides/cc14.png";
import cc15 from "../assets/img/career guides/cc15.png";
import cc16 from "../assets/img/career guides/cc16.png";
import cc17 from "../assets/img/career guides/cc17.png";
import cc18 from "../assets/img/career guides/cc18.png";
import cc19 from "../assets/img/career guides/cc19.png";
import cc20 from "../assets/img/career guides/cc20.png";
import cc21 from "../assets/img/career guides/cc21.png";
import cc22 from "../assets/img/career guides/cc22.png";
import cc23 from "../assets/img/career guides/cc23.png";
import cc24 from "../assets/img/career guides/cc24.png";
import cc25 from "../assets/img/career guides/cc25.png";
import cc26 from "../assets/img/career guides/cc26.png";
import cc27 from "../assets/img/career guides/cc27.png";

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
    title: "Job Roles & Responsibilities",
    cards: [
      {
        image: cc16,
        title: "Airport Ground Staff Job Roles & Responsibilities",
        meta: "May 24, 2026 • 8 min read"
      },
      {
        image: cc17,
        title: "Airport Ground Staff Duties: Complete Guide for Beginners",
        meta: "April 12, 2026 • 8 min read"
      },
      {
        image: cc18,
        title: "Types of Airport Ground Staff Jobs & Departments",
        meta: "June 18, 2026 • 8 min read"
      }
    ]
  },
  {
    title: "Career Comparisons",
    cards: [
      {
        image: cc19,
        title: "Ground Staff vs Cabin Crew — Which Should You Choose?",
        meta: "Aug 12, 2026 • 5 min read"
      },
      {
        image: cc20,
        title: "Airport Ground Staff Requirements",
        meta: "May 24, 2026 • 8 min read"
      },
      {
        image: cc21,
        title: "Airport Ground Staff vs Other Aviation Careers",
        meta: "May 24, 2026 • 8 min read"
      }
    ]
  },
  {
    title: "Course & Training",
    cards: [
      {
        image: cc22,
        title: "Airport Ground Staff Course Fees in Mumbai",
        meta: "Aug 10, 2026 • 8 min read"
      },
      {
        image: cc23,
        title: "Airport Ground Staff Course After 12th: Eligibility & Duration",
        meta: "May 24, 2026 • 8 min read"
      },
      {
        image: cc24,
        title: "Airport Ground Staff Course Syllabus: Skills You Will Learn",
        meta: "May 24, 2026 • 8 min read"
      }
    ]
  },
  {
    title: "Interview Preparation",
    cards: [
      {
        image: cc25,
        title: "Airport Ground Staff Interview Questions & Answers",
        meta: "July 10, 2026 • 6 min read"
      },
      {
        image: cc26,
        title: "How to Prepare for Airport Ground Staff Interview: Complete Guide",
        meta: "May 24, 2026 • 12 min read"
      },
      {
        image: cc27,
        title: "Airport Ground Staff Selection Process: Complete Guide",
        meta: "July 5, 2026 • 8 min read"
      }
    ]
  },
  {
    title: "Related Careers",
    cards: [
      {
        image: cc14,
        title: "Airport Ground Staff Course Duration & Batch Timings",
        meta: "July 10, 2026 • 6 min read"
      },
      {
        image: cc13,
        title: "Air Hostess Course Duration & Batch Timings",
        meta: "July 10, 2026 • 6 min read"
      },
      {
        image: cc15,
        title: "AI & Data Science Career Guide",
        meta: "July 10, 2026 • 16 min read"
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
    answer: "You will develop skills in customer service, professional grooming, airport operations, communication, problem-solving, teamwork, and hospitality — all essential for a successful ground staff career."
  },
  {
    question: "What career opportunities are available after Ground Staff training?",
    answer: "After completing ground staff training, you can pursue roles such as Customer Service Agent, Passenger Service Executive, Check-in Executive, Boarding Gate Executive, Ramp Agent, and Cargo Operations Agent with domestic and international airlines."
  }
];

export default function AirportGroundStaff() {
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
              src={airportHero}
              alt="Airport Ground Staff Career Guide"
              className="w-full h-full object-cover object-left lg:object-center"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
            <div className="absolute inset-0 bg-neutral-900/5 mix-blend-multiply" />
          </div>

          <div className="absolute inset-0 bg-gradient-to-r from-white via-white via-48% md:via-52% lg:via-48% to-transparent z-10 pointer-events-none" />
        </div>

        <div className="relative max-w-7xl mx-auto w-full px-6 sm:px-8 md:px-12 z-20 py-16 lg:py-0">
          <div className="max-w-xl lg:max-w-[680px] text-left flex flex-col space-y-6">
            <h1 className="text-3xl sm:text-4xl lg:text-[50px] font-outfit font-extrabold tracking-tight text-[#1C3E8A] leading-snug sm:leading-[1.28] lg:leading-[1.32]">
              Airport Ground Staff Career Guide
            </h1>

            <p className="text-slate-600 font-sans font-semibold text-xs sm:text-[18px] leading-relaxed max-w-lg sm:max-w-xl">
              Explore everything you need to know about an Airport Ground Staff career, including job roles, eligibility, career opportunities, interview preparation, and detailed career guides from Amigo Academy.
            </p>

            <div className="pt-2">
              <button
                onClick={handleCTA}
                className="inline-flex items-center justify-center gap-2 bg-[#DF1818] hover:bg-[#c41212] text-white font-sans font-bold text-xs sm:text-[14px] px-8 py-3.5 rounded-full shadow-[0_8px_20px_rgba(223,24,24,0.2)] hover:shadow-[0_12px_24px_rgba(223,24,24,0.3)] transition-all duration-300 active:scale-95 whitespace-nowrap focus:outline-none cursor-pointer"
              >
                Talk to a Career Counsellor
                <span className="font-bold">&nbsp;➔</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Hero View matching screenshot */}
      <section className="sm:hidden relative w-full bg-white overflow-hidden border-b border-neutral-100">
        <div className="relative w-full h-[520px] overflow-hidden">
          {/* Background Image without gradient overlay */}
          <img
            src={airportHeroMobile}
            alt="Airport Ground Staff Career Guide"
            className="absolute inset-0 w-full h-full object-cover object-[right_top]"
          />

          {/* Text Content overlay matching screenshot */}
          <div className="absolute inset-y-0 left-0 z-10 px-5 flex flex-col justify-center max-w-[280px]">
            <h1 className="text-[28px] font-extrabold text-[#17365d] leading-[1.3] tracking-tight mb-4 font-outfit">
              Airport<br />
              Ground Staff<br />
              Career Guide
            </h1>

            <p className="text-[#475569] text-[12.5px] leading-relaxed mb-6 font-medium">
              Explore everything you need to know about an Airport Ground Staff career, including job roles, eligibility, career opportunities, interview preparation, and detailed career guides from Amigo Academy.
            </p>

            <div>
              <button
                onClick={handleCTA}
                className="inline-flex items-center justify-between gap-3 bg-[#e02607] hover:bg-[#c81e04] text-white font-bold text-[13.5px] px-5 py-3 rounded-full shadow-lg active:scale-95 transition-all duration-300 cursor-pointer"
              >
                <span>Talk to a Career Counsellor</span>
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20 text-white text-xs font-extrabold">➔</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Thinking about becoming Airport Ground Staff section */}
      <section className="bg-white py-20 sm:py-24 border-t border-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-[940px] mx-auto flex flex-col items-center">

            {/* Centered Text Content */}
            <div className="w-full text-center mb-12">
              <h2 className="text-3xl sm:text-[40px] font-extrabold text-[#1C3E8A] font-outfit mb-8 leading-tight tracking-tight">
                Thinking about building a <br className="hidden sm:block" /> career in airport operations?
              </h2>

              <div className="space-y-5 text-slate-600 font-sans font-semibold text-xs sm:text-[15.5px] leading-relaxed max-w-[700px] mx-auto">
                <p>
                  This Career Guide brings together everything you need to know before choosing the Airport Ground Staff profession.
                </p>
                <p>
                  Learn about job roles, responsibilities, career opportunities, and explore detailed guides covering airport operations, interviews, course fees, and much more.
                </p>
              </div>
            </div>

            {/* Centered Button */}
            <div className="w-full flex justify-center pt-2">
              <button
                onClick={handleCTA}
                className="inline-flex items-center justify-center gap-2 bg-[#DF1818] hover:bg-[#c41212] text-white font-sans font-bold text-xs sm:text-[14px] px-8 py-4 rounded-full shadow-[0_8px_20px_rgba(223,24,24,0.15)] hover:shadow-[0_12px_24px_rgba(223,24,24,0.25)] transition-all duration-300 active:scale-95 whitespace-nowrap focus:outline-none cursor-pointer"
              >
                Check Career Opportunities
                <span className="font-bold">&nbsp;➔</span>
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* Roles & Responsibilities section */}
      <section className="bg-[#f0f4f9] py-20 sm:py-24 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">

          {/* Header */}
          <h2 className="text-3xl sm:text-[40px] font-extrabold text-[#17365d] font-outfit mb-14 text-center leading-tight tracking-tight">
            Roles & Responsibilities of<br className="hidden sm:block" /> Airport Ground Staff
          </h2>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {[
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
            ].map((card, idx) => (
              <div
                key={idx}
                className="bg-white rounded-[24px] p-7 sm:p-8 border border-white shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_14px_40px_rgba(0,0,0,0.07)] transition-all duration-300 flex flex-col text-left justify-start"
              >
                {/* Round Icon */}
                <div className="w-11 h-11 rounded-full bg-[#fef3c7] flex items-center justify-center mb-6 shrink-0">
                  <img src={card.icon} alt="" className="w-5 h-5 object-contain" />
                </div>
                <h3 className="text-[16px] sm:text-[17px] font-bold text-[#17365d] font-outfit mb-3 leading-snug">
                  {card.title}
                </h3>
                <p className="text-slate-500 font-sans text-xs sm:text-[13.5px] font-normal leading-relaxed">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Why Choose a Career as Airport Ground Staff section */}
      <section className="bg-white py-20 sm:py-24 border-t border-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-[820px] mx-auto text-center">

            <h2 className="text-3xl sm:text-[44px] font-extrabold text-[#1C3E8A] font-outfit mb-10 leading-tight tracking-tight">
              Why Choose a Career as<br className="hidden sm:block" /> Airport Ground Staff?
            </h2>

            <div className="space-y-5 text-slate-600 font-sans font-semibold text-xs sm:text-[18px] leading-relaxed">
              <p>
                An Airport Ground Staff career offers the opportunity to work in the fast-paced aviation industry while supporting passengers and ensuring efficient airport operations. It is a profession that values communication, professionalism, teamwork, problem-solving, and customer service.
              </p>
              <p>
                Whether your goal is to work with domestic airlines, airport operators, or aviation service providers, understanding the profession is the first step towards making an informed career decision.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Career Opportunities & Potential Career Roles section */}
      <section className="bg-[#f4f7fa] py-20 sm:py-24 border-t border-slate-100/60">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">

          {/* Career Opportunities Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
            <div className="space-y-6 text-left order-2 lg:order-1">
              <h2 className="text-3xl sm:text-[40px] font-extrabold text-[#1C3E8A] font-outfit tracking-tight leading-tight">
                Career Opportunities
              </h2>
              <div className="space-y-5 text-[#4A5568] font-sans font-semibold text-xs sm:text-[15.5px] leading-relaxed">
                <p>
                  Airport Ground Staff professionals have opportunities to work across airports and airline operations in customer-facing and operational roles.
                </p>
                <p>
                  As the aviation industry continues to expand, skilled Ground Staff professionals remain an important part of delivering safe, efficient, and comfortable passenger experiences.
                </p>
              </div>
            </div>
            <div className="w-full aspect-[16/10] sm:aspect-[1.58] lg:h-[350px] rounded-[24px] overflow-hidden order-1 lg:order-2">
              <img
                src={ground10}
                alt="Airport Ground Staff Career Opportunities"
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
              {[
                "Airport Ground Staff",
                "Passenger Service Executive",
                "Check-in Executive",
                "Boarding Gate Executive"
              ].map((role, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-[20px] py-7 px-4 border border-[#E1E5ED] shadow-[0_8px_30px_rgb(0,0,0,0.02)] hover:shadow-[0_12px_40px_rgb(0,0,0,0.05)] transition-all duration-300 flex items-center justify-center min-h-[90px] text-center"
                >
                  <span className="text-[15px] sm:text-[16px] font-bold text-[#1C3E8A] font-outfit">
                    {role}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Explore Airport Ground Staff Career Guides Section */}
      <section className="bg-white py-20 sm:py-24 border-t border-slate-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 text-center">

          {/* Header */}
          <h2 className="text-3xl sm:text-[40px] font-extrabold text-[#1C3E8A] font-outfit mb-5 leading-tight tracking-tight">
            Explore Airport Ground Staff Career Guides
          </h2>

          {/* Subtitle */}
          <p className="text-slate-600 font-sans font-semibold text-xs sm:text-[15.5px] max-w-[820px] mx-auto mb-16 leading-relaxed">
            Every student has different questions before choosing a career. Explore the guides below to understand every important aspect of becoming an Airport Ground Staff professional.
          </p>

          {/* Category Blocks */}
          <div className="space-y-16">
            {categories.map((category, catIdx) => (
              <div key={catIdx} className="text-center">
                {/* Category Title */}
                <h3 className="text-2xl sm:text-[28px] font-extrabold text-[#1C3E8A] font-outfit mb-8 tracking-tight text-center">
                  {category.title}
                </h3>

                {/* Cards Container - Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 text-left">
                  {category.cards.map((card, cardIdx) => (
                    <div
                      key={cardIdx}
                      onClick={() => {
                        navigate("/how-to-become-a-cabin-crew-after-12th");
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                      className="bg-white rounded-[24px] overflow-hidden border border-[#E1E5ED] shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-[0_12px_40px_rgb(0,0,0,0.07)] transition-all duration-300 flex flex-col justify-between text-left group cursor-pointer hover:-translate-y-1"
                    >
                      <div>
                        {/* Card Image */}
                        <div className="relative w-full h-[190px] sm:h-[200px] overflow-hidden bg-slate-100">
                          <img
                            src={card.image}
                            alt={card.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                        {/* Card Body */}
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

      {/* Ready to Begin Your Airport Ground Staff Journey section */}
      <section className="bg-[#f4f7fa] py-20 sm:py-24 border-t border-slate-100/60">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
          {/* Centered Heading */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-[40px] font-extrabold text-[#1C3E8A] font-outfit leading-tight tracking-tight">
              Ready to Begin Your Airport Ground Staff Journey?
            </h2>
          </div>

          {/* Two-Column Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-6 text-left order-2 lg:order-1">
              <div className="space-y-5 text-slate-600 font-sans font-semibold text-xs sm:text-[15.5px] leading-relaxed">
                <p>
                  Every career is different, and choosing the right one depends on your interests, strengths, and aspirations. If you enjoy working with people, coordinating complex operations, and being part of the aviation industry, Ground Staff could be a rewarding career path to explore.
                </p>
                <p>
                  If you're still unsure, our counsellors can help you understand the profession, discuss your eligibility, and answer your questions before you make a decision.
                </p>
              </div>
              <div className="pt-4">
                <button
                  onClick={handleCTA}
                  className="inline-flex items-center justify-center gap-2 bg-[#DF1818] hover:bg-[#c41212] text-white font-sans font-bold text-xs sm:text-[14px] px-8 py-4 rounded-full shadow-[0_8px_20px_rgba(223,24,24,0.2)] hover:shadow-[0_12px_24px_rgba(223,24,24,0.3)] transition-all duration-300 active:scale-95 whitespace-nowrap focus:outline-none cursor-pointer"
                >
                  Book Free Career Counselling
                  <span className="font-bold">&nbsp;➔</span>
                </button>
              </div>
            </div>

            {/* Right Image */}
            <div className="w-full h-[300px] sm:h-[400px] lg:h-[380px] rounded-[24px] overflow-hidden order-1 lg:order-2 shadow-[0_10px_30px_rgba(0,0,0,0.04)]">
              <img
                src={ground11}
                alt="Begin Your Airport Ground Staff Journey"
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
            <h2 className="text-3xl sm:text-[38px] font-outfit font-black text-[#1C3E8A] leading-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-neutral-500 font-sans font-semibold text-xs sm:text-[13px] max-w-xl mx-auto leading-relaxed">
              Honest answers about Airport Ground Staff Careers
            </p>
          </div>

          <div className="w-full space-y-4">
            {faqs.map((faq, idx) => (
              <FAQItem
                key={idx}
                number={idx + 1}
                question={faq.question}
                answer={faq.answer}
              />
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

          {/* Top Badge */}
          <div className="bg-[#1e293b]/40 border border-slate-700/50 rounded-xl px-5 py-2 inline-flex items-center gap-2 text-xs font-bold text-[#ffd300] uppercase tracking-wider mb-6">
            <span>⚡</span> LIMITED SEATS PER BATCH — APPLY EARLY TO SECURE YOUR SPOT
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-[44px] lg:text-[48px] font-extrabold text-white font-outfit max-w-4xl leading-tight tracking-tight mb-4">
            2026 Batches Are Filling Fast — Don't Get Left Behind
          </h2>

          {/* Subtitle */}
          <p className="text-slate-300 font-sans font-semibold text-xs sm:text-[16px] leading-relaxed mb-6">
            Admissions Open — Secure Your Seat Early. One free call is all it takes.
          </p>

          {/* Second Badge */}
          <div className="bg-[#1e293b]/40 border border-slate-700/50 rounded-xl px-5 py-2 inline-flex items-center gap-2 text-xs font-bold text-[#ffd300] uppercase tracking-wider mb-10">
            <span>🏛️</span> Maharashtra Govt Certified — Only aviation institute in Maharashtra
          </div>

          {/* CTA Buttons Row */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-4xl mb-8">
            <button
              onClick={handleCTA}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#DF1818] hover:bg-[#c41212] text-white font-sans font-bold text-xs sm:text-[14px] uppercase tracking-wider px-8 py-4 rounded-xl shadow-lg transition-all duration-300 active:scale-95 whitespace-nowrap focus:outline-none cursor-pointer"
            >
              <span>✈️</span> CHECK MY ELIGIBILITY NOW
            </button>
            <button
              onClick={handleCTA}
              className="w-full sm:w-auto inline-flex items-center justify-center bg-[#DF1818] hover:bg-[#c41212] text-white font-sans font-bold text-xs sm:text-[14px] px-8 py-4 rounded-xl shadow-lg transition-all duration-300 active:scale-95 whitespace-nowrap focus:outline-none cursor-pointer"
            >
              Start My Career
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

          {/* Features Row */}
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs sm:text-[13px] text-slate-300 font-bold font-sans">
            <span className="flex items-center gap-1.5">
              <span className="text-[#25D366]">✓</span> 4.6 Google Rating
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-[#25D366]">✓</span> 10,000+ Students
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-[#25D366]">✓</span> Govt Certified
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-[#25D366]">✓</span> 200+ Hiring Partners
            </span>
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
