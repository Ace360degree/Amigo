import React from "react";
import { useNavigate } from "react-router-dom";
import careerHero from "../assets/img/careerguides-hero.png";
import careermainMobile from "../assets/img/careermain-mobile.png";
import cardImg1 from "../assets/img/career guides/1.png";
import cardImg2 from "../assets/img/career guides/2.png";
import cardImg3 from "../assets/img/career guides/3.png";
import cardImg4 from "../assets/img/career guides/4.png";
import cardImg5 from "../assets/img/career guides/5.png";
import cardImg6 from "../assets/img/career guides/6.png";
import cardImg7 from "../assets/img/career guides/7.png";
import cardImg8 from "../assets/img/career guides/8.png";

export default function CareerGuides() {
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
              src={careerHero}
              alt="Career Guides to Help You Make the Right Career Choice"
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
              Career Guides to Help You Make the Right Career Choice
            </h1>

            <p className="text-slate-600 font-sans font-semibold text-xs sm:text-[18px] leading-relaxed max-w-lg sm:max-w-xl">
              Career Guides are designed to help you understand different professions before choosing a course. From eligibility and career growth to salary, industry insights, and career options after 12th, you'll find practical guidance that helps you make informed decisions with confidence.
            </p>

            <div className="pt-2">
              <button
                onClick={handleCTA}
                className="inline-flex items-center justify-center gap-2 bg-[#DF1818] hover:bg-[#c41212] text-white font-sans font-bold text-xs sm:text-[14px] px-8 py-3.5 rounded-full shadow-[0_8px_20px_rgba(223,24,24,0.2)] hover:shadow-[0_12px_24px_rgba(223,24,24,0.3)] transition-all duration-300 active:scale-95 whitespace-nowrap focus:outline-none cursor-pointer"
              >
                Enroll Now To Avail Scholarship
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
            src={careermainMobile}
            alt="Career Guides to Help You Make the Right Career Choice"
            className="absolute inset-0 w-full h-full object-cover object-[right_top]"
          />

          {/* Text Content overlay matching screenshot */}
          <div className="absolute inset-y-0 left-0 z-10 px-5 flex flex-col justify-center max-w-[310px]">
            <h1 className="text-[32px] font-extrabold text-[#17365d] leading-[1.15] tracking-tight mb-4 font-outfit">
              Career Guides<br />
              to Help You<br />
              Make the<br />
              Right Career<br />
              Choice
            </h1>

            <p className="text-[#475569] text-[13px] leading-relaxed mb-6 font-medium max-w-[200px]">
              Every successful career begins with the right training. At Amigo Academy, our industry-focused programmes in Cabin Crew, Airport Operations, and AI &amp; Data Science equip students with practical skills, confidence, and career-ready expertise.
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

      {/* Explore Career Guides hubs cards section */}
      <section className="bg-white py-20 sm:py-24 border-t border-slate-50">
        <div className="max-w-7xl mx-auto px-6 text-center">

          {/* Header */}
          <h2 className="text-3xl sm:text-[40px] font-extrabold text-[#1C3E8A] font-outfit mb-5 leading-tight tracking-tight">
            Explore Career Guides
          </h2>

          {/* Subtitle */}
          <p className="text-slate-600 font-sans font-semibold text-xs sm:text-[15.5px] max-w-[820px] mx-auto mb-16 leading-relaxed">
            If you've already decided which industry interests you, start by exploring one of our profession-specific Career Hubs. Each hub introduces the profession and brings together detailed guides covering eligibility, salary, required skills, career growth, interview preparation, and much more.
          </p>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">

            {/* Card 1: Cabin Crew */}
            <div className="bg-white rounded-[24px] overflow-hidden border border-slate-100/80 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-[0_12px_40px_rgb(0,0,0,0.07)] transition-all duration-300 flex flex-col justify-between text-left">
              <div>
                <div className="relative w-full h-[210px] overflow-hidden">
                  <img
                    src={cardImg1}
                    alt="Air Hostess / Cabin Crew Career"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 sm:p-7 flex flex-col space-y-4">
                  <h3 className="text-[19px] sm:text-[21px] font-bold text-[#1C3E8A] font-outfit leading-snug">
                    Air Hostess / Cabin Crew Career
                  </h3>
                  <p className="text-slate-500 font-sans text-xs sm:text-[13px] font-semibold leading-relaxed">
                    Thinking about becoming Cabin Crew? Explore everything you need to know about the profession—from responsibilities and eligibility to salary, career growth, interview preparation, and industry insights.
                  </p>

                  <div className="pt-2">
                    <h4 className="text-slate-400 font-sans font-bold text-[10.5px] sm:text-xs uppercase tracking-wider mb-3">
                      You'll Find Guides On
                    </h4>
                    <ul className="space-y-2">
                      {[
                        "Salary & Career Growth",
                        "Eligibility & Height Requirements",
                        "Medical Requirements",
                        "Skills Required",
                        "Interview Tips",
                        "Course Duration & Training",
                        "Job Opportunities"
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start text-xs sm:text-[13px] text-slate-600 font-bold">
                          <span className="text-slate-400 mr-2.5 font-normal">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="px-6 pb-7">
                <button
                  onClick={() => { navigate("/career-guide/cabin-crew"); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                  className="w-full bg-[#DF1818] hover:bg-[#c41212] text-white font-sans font-bold text-xs sm:text-[13px] py-3.5 px-5 rounded-full shadow-[0_6px_16px_rgba(223,24,24,0.15)] hover:shadow-[0_8px_24px_rgba(223,24,24,0.25)] transition-all duration-300 active:scale-95 flex items-center justify-center gap-1.5 focus:outline-none cursor-pointer"
                >
                  Explore Air Hostess / Cabin Crew Guides
                  <span className="font-bold">&nbsp;➔</span>
                </button>
              </div>
            </div>

            {/* Card 2: Airport Ground Staff */}
            <div className="bg-white rounded-[24px] overflow-hidden border border-slate-100/80 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-[0_12px_40px_rgb(0,0,0,0.07)] transition-all duration-300 flex flex-col justify-between text-left">
              <div>
                <div className="relative w-full h-[210px] overflow-hidden">
                  <img
                    src={cardImg2}
                    alt="Airport Ground Staff Career"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 sm:p-7 flex flex-col space-y-4">
                  <h3 className="text-[19px] sm:text-[21px] font-bold text-[#1C3E8A] font-outfit leading-snug">
                    Airport Ground Staff Career
                  </h3>
                  <p className="text-slate-500 font-sans text-xs sm:text-[13px] font-semibold leading-relaxed">
                    Discover what it takes to build a successful career in airport operations. Learn about job roles, responsibilities, career opportunities, interviews, and the skills required to work in one of the aviation industry's most important professions.
                  </p>

                  <div className="pt-2">
                    <h4 className="text-slate-400 font-sans font-bold text-[10.5px] sm:text-xs uppercase tracking-wider mb-3">
                      You'll Find Guides On
                    </h4>
                    <ul className="space-y-2">
                      {[
                        "Job Roles & Responsibilities",
                        "Ground Staff vs Cabin Crew",
                        "Airport Jobs in Mumbai",
                        "Course Fees",
                        "Interview Questions & Answers"
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start text-xs sm:text-[13px] text-slate-600 font-bold">
                          <span className="text-slate-400 mr-2.5 font-normal">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="px-6 pb-7">
                <button
                  onClick={() => { navigate("/career-guide/airport-ground-staff"); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                  className="w-full bg-[#DF1818] hover:bg-[#c41212] text-white font-sans font-bold text-xs sm:text-[13px] py-3.5 px-5 rounded-full shadow-[0_6px_16px_rgba(223,24,24,0.15)] hover:shadow-[0_8px_24px_rgba(223,24,24,0.25)] transition-all duration-300 active:scale-95 flex items-center justify-center gap-1.5 focus:outline-none cursor-pointer"
                >
                  Explore Airport Ground Staff Course
                  <span className="font-bold">&nbsp;➔</span>
                </button>
              </div>
            </div>

            {/* Card 3: AI & Data Science */}
            <div className="bg-white rounded-[24px] overflow-hidden border border-slate-100/80 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-[0_12px_40px_rgb(0,0,0,0.07)] transition-all duration-300 flex flex-col justify-between text-left">
              <div>
                <div className="relative w-full h-[210px] overflow-hidden">
                  <img
                    src={cardImg3}
                    alt="AI & Data Science Career"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 sm:p-7 flex flex-col space-y-4">
                  <h3 className="text-[19px] sm:text-[21px] font-bold text-[#1C3E8A] font-outfit leading-snug">
                    AI & Data Science Career
                  </h3>
                  <p className="text-slate-500 font-sans text-xs sm:text-[13px] font-semibold leading-relaxed">
                    Explore one of today's fastest-growing industries through practical guides covering Artificial Intelligence, Data Science, career opportunities, learning pathways, and future industry demand.
                  </p>

                  <div className="pt-2">
                    <h4 className="text-slate-400 font-sans font-bold text-[10.5px] sm:text-xs uppercase tracking-wider mb-3">
                      You'll Find Guides On
                    </h4>
                    <ul className="space-y-2">
                      {[
                        "AI & Data Science Course",
                        "Data Science Jobs",
                        "Career Opportunities",
                        "Eligibility & Syllabus",
                        "Python for Beginners"
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start text-xs sm:text-[13px] text-slate-600 font-bold">
                          <span className="text-slate-400 mr-2.5 font-normal">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="px-6 pb-7">
                <button
                  onClick={() => { navigate("/career-guide/ai-data-science"); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                  className="w-full bg-[#DF1818] hover:bg-[#c41212] text-white font-sans font-bold text-xs sm:text-[13px] py-3.5 px-5 rounded-full shadow-[0_6px_16px_rgba(223,24,24,0.15)] hover:shadow-[0_8px_24px_rgba(223,24,24,0.25)] transition-all duration-300 active:scale-95 flex items-center justify-center gap-1.5 focus:outline-none cursor-pointer"
                >
                  Explore AI & Data Science Course
                  <span className="font-bold">&nbsp;➔</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Career Planning After 12th section */}
      <section className="bg-[#f4f7fa] py-20 sm:py-24 border-t border-slate-100/60">
        <div className="max-w-7xl mx-auto px-6">

          {/* Header */}
          <h2 className="text-3xl sm:text-[40px] font-extrabold text-[#1C3E8A] font-outfit mb-5 text-center leading-tight tracking-tight">
            Career Planning After 12th
          </h2>

          {/* Subtitle */}
          <p className="text-slate-600 font-sans font-semibold text-xs sm:text-[15.5px] max-w-[820px] mx-auto mb-16 text-center leading-relaxed">
            Choosing what to do after 12th can feel overwhelming. These guides help you explore different career paths, compare opportunities, and understand which options best match your interests and future goals.
          </p>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: "Best Courses After 12th (Mumbai)",
                desc: "Explore career-focused courses across aviation, technology, and other industries."
              },
              {
                title: "High-Salary Courses After 12th",
                desc: "Understand which careers offer strong earning potential and long-term growth."
              },
              {
                title: "Career Options After 12th (Commerce, Science & Arts)",
                desc: "Compare different career paths and find the one that matches your interests and goals."
              },
              {
                title: "Career Courses After 12th Without NEET or JEE",
                desc: "Explore professional careers that don't require competitive entrance exams."
              },
              {
                title: "Best Career Options After 12th",
                desc: "Compare different career paths and find the one that matches your interests and goals."
              }
            ].map((guide, idx) => (
              <div
                key={idx}
                className="bg-white rounded-[24px] p-8 sm:p-10 border border-slate-100/50 shadow-[0_8px_30px_rgb(0,0,0,0.02)] hover:shadow-[0_12px_40px_rgb(0,0,0,0.06)] transition-all duration-300 flex flex-col justify-center items-center text-center min-h-[200px]"
              >
                <h3 className="text-[17px] sm:text-[19px] font-bold text-[#1C3E8A] font-outfit mb-3.5 leading-snug">
                  {guide.title}
                </h3>
                <p className="text-slate-500 font-sans text-xs sm:text-[13px] font-semibold leading-relaxed">
                  {guide.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Centered Button */}
          <div className="flex justify-center pt-4">
            <button
              onClick={handleCTA}
              className="inline-flex items-center justify-center gap-2 bg-[#DF1818] hover:bg-[#c41212] text-white font-sans font-bold text-xs sm:text-[14px] px-8 py-4 rounded-full shadow-[0_8px_20px_rgba(223,24,24,0.15)] hover:shadow-[0_12px_24px_rgba(223,24,24,0.25)] transition-all duration-300 active:scale-95 whitespace-nowrap focus:outline-none cursor-pointer"
            >
              Learn More About Amigo Academy
              <span className="font-bold">&nbsp;➔</span>
            </button>
          </div>

        </div>
      </section>

      {/* Career Comparisons & Industry Insights section */}
      <section className="bg-white py-20 sm:py-24 border-t border-slate-50">
        <div className="max-w-7xl mx-auto px-6">

          {/* Header */}
          <h2 className="text-3xl sm:text-[40px] font-extrabold text-[#1C3E8A] font-outfit mb-5 text-center leading-tight tracking-tight">
            Career Comparisons & Industry Insights
          </h2>

          {/* Subtitle */}
          <p className="text-slate-600 font-sans font-semibold text-xs sm:text-[15.5px] max-w-[820px] mx-auto mb-12 text-center leading-relaxed">
            Students often compare careers before making a decision. These guides help you understand the differences between professions, explore emerging career opportunities, and stay informed about industry trends.
          </p>

          {/* Subheading */}
          <h3 className="text-2xl sm:text-[28px] font-bold text-[#1C3E8A] font-outfit text-center mb-12">
            Explore These Guides
          </h3>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                img: cardImg4,
                title: "Ground Staff vs Cabin Crew - Which Should You Choose?",
                desc: "Compare two popular aviation careers to understand their roles, opportunities, and suitability."
              },
              {
                img: cardImg5,
                title: "AI Engineer vs Data Scientist - What's the Difference?",
                desc: "Compare two exciting career paths by understanding their industries, opportunities, required skills, and long-term career."
              },
              {
                img: cardImg6,
                title: "AI Engineer vs Data Scientist - What's the Difference?",
                desc: "Learn how these technology careers differ in responsibilities, skills, and career opportunities."
              },
              {
                img: cardImg7,
                title: "Prompt Engineering — The Newest AI Skill Explained",
                desc: "Understand one of the fastest-growing skills in Artificial Intelligence and why it matters."
              },
              {
                img: cardImg8,
                title: "A Day in the Life of Cabin Crew",
                desc: "Discover what a typical day looks like for a Cabin Crew professional, from reporting for duty to landing."
              }
            ].map((guide, idx) => (
              <div
                key={idx}
                className="bg-white rounded-[24px] overflow-hidden border border-[#E1E5ED] shadow-[0_8px_30px_rgb(0,0,0,0.02)] hover:shadow-[0_12px_40px_rgb(0,0,0,0.06)] transition-all duration-300 flex flex-col justify-between text-left"
              >
                <div>
                  <div className="relative w-full h-[200px] overflow-hidden">
                    <img
                      src={guide.img}
                      alt={guide.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 sm:p-7 flex flex-col space-y-3.5">
                    <h3 className="text-[17px] sm:text-[19px] font-bold text-[#1C3E8A] font-outfit leading-snug">
                      {guide.title}
                    </h3>
                    <p className="text-slate-500 font-sans text-xs sm:text-[13px] font-semibold leading-relaxed">
                      {guide.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Why Explore Our Career Guides section */}
      <section className="bg-[#f4f7fa] py-20 sm:py-24 border-t border-slate-100/60">
        <div className="max-w-7xl mx-auto px-6 text-center">

          {/* Header */}
          <h2 className="text-3xl sm:text-[40px] font-extrabold text-[#1C3E8A] font-outfit mb-6 leading-tight tracking-tight">
            Why Explore Our Career Guides?
          </h2>

          {/* Subtitle Paragraphs */}
          <div className="max-w-[840px] mx-auto space-y-5 mb-16 text-slate-600 font-sans font-semibold text-xs sm:text-[15.5px] leading-relaxed">
            <p>
              Choosing a career is a major decision, and having the right information makes all the difference. Our Career Guides answer the questions students ask us most often—written in simple language, based on practical guidance, and designed to help you understand different career paths before choosing a course.
            </p>
            <p>
              Whether you're exploring aviation or technology, these guides are here to help you make informed decisions before taking your next step.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Simple easy to understand guidance.",
              "Covers aviation, technology & emerging careers.",
              "Helps you compare & choose the right path.",
              "Practical information for better decisions."
            ].map((text, idx) => (
              <div
                key={idx}
                className="bg-white rounded-[20px] p-6 sm:p-8 border border-[#E1E5ED] shadow-[0_8px_30px_rgb(0,0,0,0.02)] hover:shadow-[0_12px_40px_rgb(0,0,0,0.05)] transition-all duration-300 flex items-center justify-center min-h-[140px] text-center"
              >
                <p className="text-slate-600 font-sans text-xs sm:text-[14.5px] font-bold leading-relaxed">
                  {text}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Need Help Choosing the Right Career section */}
      <section className="bg-white py-20 sm:py-24 border-t border-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-[840px] mx-auto flex flex-col items-center">

            {/* Centered Text Content */}
            <div className="w-full text-center mb-12">
              <h2 className="text-3xl sm:text-[40px] font-extrabold text-[#1C3E8A] font-outfit mb-6 leading-tight tracking-tight">
                Need Help Choosing the Right Career?
              </h2>

              <div className="space-y-5 text-slate-600 font-sans font-semibold text-xs sm:text-[15.5px] leading-relaxed">
                <p>
                  Every student has different interests, strengths, and aspirations. If you're still unsure which career path is the right fit, our counsellors are here to help.
                </p>
                <p>
                  We'll answer your questions honestly, explain your options, and help you understand which career and course best match your goals—without unnecessary pressure.
                </p>
              </div>
            </div>

            {/* Centered Button */}
            <div className="w-full flex justify-center pt-2">
              <button
                onClick={handleCTA}
                className="inline-flex items-center justify-center gap-2 bg-[#DF1818] hover:bg-[#c41212] text-white font-sans font-bold text-xs sm:text-[14px] px-8 py-4 rounded-full shadow-[0_8px_20px_rgba(223,24,24,0.15)] hover:shadow-[0_12px_24px_rgba(223,24,24,0.25)] transition-all duration-300 active:scale-95 whitespace-nowrap focus:outline-none cursor-pointer"
              >
                Book Free Career Counselling
                <span className="font-bold">&nbsp;➔</span>
              </button>
            </div>

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
