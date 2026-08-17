import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function FAQItem({ number, question, answer }: { number: number; question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className={`bg-white border rounded-2xl overflow-hidden transition-all duration-300 ${
        isOpen
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
            className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 text-sm font-bold transition-colors duration-300 ${
              isOpen ? "bg-[#1C3E8A] text-white" : "bg-[#e8ecf4] text-[#1C3E8A]"
            }`}
          >
            {number}
          </div>
          <span className="text-sm sm:text-[16px] font-outfit font-bold text-[#1C3E8A] pr-4">
            {question}
          </span>
        </div>
        <svg
          className={`w-5 h-5 text-[#1C3E8A] shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
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
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
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

import cabinHero from "../assets/img/career guides/cabincrew-hero.png";
import cabinHeroMobile from "../assets/img/career guides/cabincrewhero-mobile.png";
import cabinCrew1 from "../assets/img/career guides/cabincrew1.png";
import cc1 from "../assets/img/career guides/cc1.png";
import cc2 from "../assets/img/career guides/cc2.png";
import cc3 from "../assets/img/career guides/cc3.png";
import cc4 from "../assets/img/career guides/cc4.png";
import cc5 from "../assets/img/career guides/cc5.png";
import cc6 from "../assets/img/career guides/cc6.png";
import cc7 from "../assets/img/career guides/cc7.png";
import cc8 from "../assets/img/career guides/cc8.png";
import cc9 from "../assets/img/career guides/cc9.png";
import cc10 from "../assets/img/career guides/cc10.png";
import cabinJourneyImg from "../assets/img/career guides/9.png";

const categories = [
  {
    title: "Career Planning",
    cards: [
      {
        image: cc1,
        title: "How to Become an Air Hostess After 12th",
        meta: "May 24, 2026 • 8 min read"
      },
      {
        image: cc2,
        title: "Air Hostess Career Growth & Promotions",
        meta: "May 20, 2026 • 5 min read"
      },
      {
        image: cc3,
        title: "A Day in the Life of Cabin Crew",
        meta: "May 16, 2026 • 5 min read"
      }
    ]
  },
  {
    title: "Eligibility & Requirements",
    cards: [
      {
        image: cc4,
        title: "Cabin Crew Eligibility",
        meta: "Aug 12, 2026 • 5 min read"
      },
      {
        image: cc5,
        title: "Air Hostess Height Requirements",
        meta: "Aug 1, 2026 • 15 min read"
      }
    ]
  },
  {
    title: "Salary & Career Growth",
    cards: [
      {
        image: cc6,
        title: "Air Hostess Salary in India",
        meta: "Aug 10, 2026 • 8 min read"
      },
      {
        image: cc7,
        title: "Domestic vs International Cabin Crew Salary",
        meta: "Aug 5, 2026 • 12 min read"
      }
    ]
  },
  {
    title: "Skills & Interview Preparation",
    cards: [
      {
        image: cc8,
        title: "Cabin Crew Skills Required",
        meta: "July 10, 2026 • 6 min read"
      },
      {
        image: cc9,
        title: "Cabin Crew Interview Tips & Common Mistakes",
        meta: "Aug 5, 2026 • 7 min read"
      }
    ]
  },
  {
    title: "Training",
    cards: [
      {
        image: cc10,
        title: "Air Hostess Course Duration & Batch Timings",
        meta: "July 10, 2026 • 6 min read"
      }
    ]
  },
  {
    title: "Related Careers",
    cards: [
      {
        image: cc2,
        title: "Airport Ground Staff Career",
        meta: "July 10, 2026 • 6 min read"
      },
      {
        image: cc3,
        title: "AI & Data Science Career Guide",
        meta: "July 10, 2026 • 6 min read"
      }
    ]
  }
];

export default function CabinCrew() {
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
              src={cabinHero}
              alt="Cabin Crew Career Guide"
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
            <h1 className="text-3xl sm:text-4xl lg:text-[50px] font-outfit font-extrabold tracking-tight text-[#1C3E8A] leading-[1.15]">
              Cabin Crew Career Guide
            </h1>

            <p className="text-slate-600 font-sans font-semibold text-xs sm:text-[18px] leading-relaxed max-w-lg sm:max-w-xl">
              Explore everything you need to know about a Cabin Crew career, including roles, eligibility, salary, career growth, required skills, and detailed career guides from Amigo Academy.
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
        <div className="relative w-full h-[510px] overflow-hidden">
          {/* Background Image without gradient overlay */}
          <img
            src={cabinHeroMobile}
            alt="Cabin Crew Career Guide"
            className="absolute inset-0 w-full h-full object-cover object-[right_top]"
          />

          {/* Text Content overlay matching screenshot */}
          <div className="absolute inset-y-0 left-0 z-10 px-5 flex flex-col justify-center max-w-[280px]">
            <h1 className="text-[28px] font-extrabold text-[#17365d] leading-[1.15] tracking-tight mb-4 font-outfit">
              Cabin Crew<br />
              Career Guide
            </h1>

            <p className="text-[#475569] text-[12.5px] leading-relaxed mb-6 font-medium">
              Explore everything you need to know about a Cabin Crew career, including roles, eligibility, salary, career growth, required skills, and detailed career guides from Amigo Academy.
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

      {/* Thinking about becoming Cabin Crew section */}
      <section className="bg-white py-20 sm:py-24 border-t border-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-[940px] mx-auto flex flex-col items-center">

            {/* Centered Text Content */}
            <div className="w-full text-center mb-12">
              <h2 className="text-3xl sm:text-[40px] font-extrabold text-[#1C3E8A] font-outfit mb-8 leading-tight tracking-tight">
                Thinking about becoming a<br className="hidden sm:block" /> Cabin Crew professional?
              </h2>

              <div className="space-y-5 text-slate-600 font-sans font-semibold text-xs sm:text-[15.5px] leading-relaxed max-w-[700px] mx-auto">
                <p>
                  Before choosing this career, it's important to understand what the profession involves, what airlines expect, and how you can prepare yourself for opportunities in the aviation industry.
                </p>
                <p>
                  This Career Guide brings together everything you need to know before choosing this profession. Learn about the role, responsibilities, career opportunities, and explore detailed guides covering salary, eligibility, skills, interviews, and much more.
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
      <section className="bg-[#f4f7fa] py-20 sm:py-24 border-t border-slate-100/60">
        <div className="max-w-7xl mx-auto px-6">

          {/* Header */}
          <h2 className="text-3xl sm:text-[40px] font-extrabold text-[#1C3E8A] font-outfit mb-16 text-center leading-tight tracking-tight">
            Roles & Responsibilities of<br className="hidden sm:block" /> Cabin Crew
          </h2>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Ensure Passenger Safety",
                desc: "Cabin Crew professionals are trained to handle safety procedures, emergencies, and passenger protection throughout the flight."
              },
              {
                title: "Provide Passenger Comfort & Service",
                desc: "Assist passengers, deliver in-flight services, and ensure a comfortable travel experience."
              },
              {
                title: "Manage Emergency Situations",
                desc: "Cabin Crew members are prepared to respond calmly and effectively during unexpected situations."
              },
              {
                title: "Maintain Professional Standards",
                desc: "They represent the airline by following service standards, grooming guidelines, and professional conduct."
              },
              {
                title: "Support Passenger Needs",
                desc: "They help passengers with queries, special requirements, and overall journey assistance."
              },
              {
                title: "Deliver a Positive Travel Experience",
                desc: "They combine safety, hospitality, and communication skills to create a smooth flight experience."
              }
            ].map((card, idx) => (
              <div
                key={idx}
                className="bg-white rounded-[20px] p-7 border border-[#E1E5ED] shadow-[0_8px_30px_rgb(0,0,0,0.02)] hover:shadow-[0_12px_40px_rgb(0,0,0,0.06)] transition-all duration-300 flex flex-col text-left"
              >
                {/* Gold Circle Icon */}
                <div className="w-10 h-10 rounded-full bg-[#E8B84B] flex items-center justify-center mb-5 flex-shrink-0">
                  <div className="w-3.5 h-3.5 rounded-full bg-white/70" />
                </div>
                <h3 className="text-[14.5px] sm:text-[15.5px] font-bold text-[#1C3E8A] font-outfit mb-3 leading-snug">
                  {card.title}
                </h3>
                <p className="text-slate-500 font-sans text-xs sm:text-[13px] font-semibold leading-relaxed">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Career at a Glance section */}
      <section className="bg-white py-20 sm:py-24 border-t border-slate-50">
        <div className="max-w-7xl mx-auto px-6">

          {/* Header */}
          <h2 className="text-3xl sm:text-[40px] font-extrabold text-[#1C3E8A] font-outfit mb-14 text-center leading-tight tracking-tight">
            Career at a Glance
          </h2>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { label: "Career", value: "Cabin Crew" },
              { label: "Industry", value: "Aviation" },
              { label: "Eligibility", value: "12th Pass" },
              { label: "Work Environment", value: "Domestic & International Airlines" },
              { label: "Key Skills", value: "Communication, Professionalism & Customer Service" },
              { label: "Career Growth", value: "Multiple opportunities within the aviation industry" }
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-[20px] p-7 border border-[#E1E5ED] shadow-[0_8px_30px_rgb(0,0,0,0.02)] hover:shadow-[0_12px_40px_rgb(0,0,0,0.05)] transition-all duration-300 flex flex-col text-left min-h-[130px]"
              >
                <p className="text-[13.5px] sm:text-[15px] font-bold text-[#1C3E8A] font-outfit mb-2">
                  {item.label}
                </p>
                <p className="text-slate-500 font-sans text-xs sm:text-[13.5px] font-semibold leading-relaxed">
                  {item.value}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Why Choose a Career as Cabin Crew section */}
      <section className="bg-white py-20 sm:py-24 border-t border-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-[820px] mx-auto text-center">

            <h2 className="text-3xl sm:text-[44px] font-extrabold text-[#1C3E8A] font-outfit mb-10 leading-tight tracking-tight">
              Why Choose a Career as<br className="hidden sm:block" /> Cabin Crew?
            </h2>

            <div className="space-y-5 text-slate-600 font-sans font-semibold text-xs sm:text-[18px] leading-relaxed">
              <p>
                A career in Cabin Crew offers the opportunity to work in a professional aviation environment while interacting with people from different backgrounds every day. It is a career that values communication, confidence, professionalism, teamwork, and excellent customer service.
              </p>
              <p>
                Whether your goal is to work with domestic airlines or pursue opportunities internationally, understanding the profession is the first step towards making an informed career decision.
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
                  Cabin Crew professionals have opportunities to work with domestic and international airlines in customer-facing aviation roles. As the aviation industry continues to grow, skilled professionals remain an important part of delivering safe and comfortable travel experiences.
                </p>
                <p>
                  Career opportunities continue to expand as airlines recruit trained professionals with the right knowledge, confidence, and communication skills.
                </p>
              </div>
            </div>
            <div className="w-full aspect-[16/10] sm:aspect-[1.58] lg:h-[350px] rounded-[24px] overflow-hidden order-1 lg:order-2">
              <img
                src={cabinCrew1}
                alt="Cabin Crew Career Opportunities"
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
                "Cabin Crew",
                "Air Hostess",
                "Flight Steward",
                "In-flight Customer Service"
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

      {/* Explore Cabin Crew Career Guides Section */}
      <section className="bg-white py-20 sm:py-24 border-t border-slate-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 text-center">
          
          {/* Header */}
          <h2 className="text-3xl sm:text-[40px] font-extrabold text-[#1C3E8A] font-outfit mb-5 leading-tight tracking-tight">
            Explore Cabin Crew Career Guides
          </h2>
          
          {/* Subtitle */}
          <p className="text-slate-600 font-sans font-semibold text-xs sm:text-[15.5px] max-w-[820px] mx-auto mb-16 leading-relaxed">
            Every student has different questions before choosing a career. Explore the guides below to understand every important aspect of becoming a Cabin Crew professional.
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
                        if (card.title.includes("Ground Staff")) {
                          navigate("/career-guide/airport-ground-staff");
                        } else if (card.title.includes("AI") || card.title.includes("Data Science")) {
                          navigate("/career-guide/ai-data-science");
                        } else {
                          navigate("/contact");
                        }
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                      className="bg-white rounded-[24px] overflow-hidden border border-[#E1E5ED] shadow-[0_8px_30px_rgb(0,0,0,0.02)] hover:shadow-[0_12px_40px_rgb(0,0,0,0.06)] transition-all duration-300 flex flex-col justify-between text-left group cursor-pointer"
                    >
                      <div>
                        {/* Card Image */}
                        <div className="relative w-full h-[200px] overflow-hidden">
                          <img
                            src={card.image}
                            alt={card.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                        {/* Card Body */}
                        <div className="p-6 flex flex-col space-y-4">
                          <h4 className="text-[17px] sm:text-[19px] font-bold text-[#1C3E8A] font-outfit leading-snug group-hover:text-[#DF1818] transition-colors duration-300">
                            {card.title}
                          </h4>
                          <p className="text-slate-500 font-sans text-xs sm:text-[13.5px] font-semibold leading-relaxed">
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

      {/* Ready to Begin Your Cabin Crew Journey section */}
      <section className="bg-[#f4f7fa] py-20 sm:py-24 border-t border-slate-100/60">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
          {/* Centered Heading */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-[40px] font-extrabold text-[#1C3E8A] font-outfit leading-tight tracking-tight">
              Ready to Begin Your Cabin Crew Journey?
            </h2>
          </div>

          {/* Two-Column Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-6 text-left order-2 lg:order-1">
              <div className="space-y-5 text-slate-600 font-sans font-semibold text-xs sm:text-[15.5px] leading-relaxed">
                <p>
                  Every career is different, and choosing the right one depends on your interests, strengths, and aspirations. If you enjoy working with people, communicating confidently, travelling, and being part of the aviation industry, Cabin Crew could be a rewarding career path to explore.
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
                src={cabinJourneyImg}
                alt="Begin Your Cabin Crew Journey"
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
              Questions By Students & Parents
            </span>
            <h2 className="text-3xl sm:text-[38px] font-outfit font-black text-[#1C3E8A] leading-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-neutral-500 font-sans font-semibold text-xs sm:text-[13px] max-w-xl mx-auto leading-relaxed">
              Honest answers about Cabin Crew Career
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
                Have more questions — click here
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

        </div>
      </section>
    </div>
  );
}
