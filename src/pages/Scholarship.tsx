import React, { useState } from "react";
import { Link } from "@tanstack/react-router";
import heroScholarship from "../assets/img/heroscholarship.png";
import mobileHeroScholarship from "../assets/img/mobileheroScholarship.png";
import icon1 from "../assets/img/icon1.png";
import icon2 from "../assets/img/icon2.png";
import icon3 from "../assets/img/icon3.png";
import icon4 from "../assets/img/icon4.png";
import icon5 from "../assets/img/icon5.png";
import icons1 from "../assets/img/icons1.png";
import icons2 from "../assets/img/icons2.png";
import icons3 from "../assets/img/icons3.png";
import icons4 from "../assets/img/icons4.png";
import icons5 from "../assets/img/icons5.png";
import icons6 from "../assets/img/icons6.png";
import studentImg1 from "../assets/img/scholarship/student1.png";
import studentImg2 from "../assets/img/scholarship/student2.png";
import studentImg3 from "../assets/img/scholarship/student3.png";
import studentImg4 from "../assets/img/scholarship/student4.png";
import studentImg5 from "../assets/img/scholarship/student5.png";
import studentImg6 from "../assets/img/scholarship/student6.png";

function FAQItem({ index, question, answer }: { index: number; question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className={`bg-white border rounded-3xl overflow-hidden transition-all duration-300 ${isOpen
        ? "border-neutral-200 shadow-[0_8px_30px_rgba(0,0,0,0.04)]"
        : "border-neutral-200/80 shadow-sm"
        }`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-6 py-5 text-left cursor-pointer group"
      >
        <div className="flex items-center space-x-4">
          {/* Index Circle Indicator */}
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center font-sans font-bold text-xs shrink-0 transition-colors duration-300 ${isOpen ? "bg-[#0b2f61] text-white" : "bg-[#f0f4f9] text-[#0b2f61]"
              }`}
          >
            {index}
          </div>
          <span className="text-sm sm:text-[15px] font-sans font-bold text-[#0b2f61] pr-4">
            {question}
          </span>
        </div>
        <svg
          className={`w-5 h-5 text-neutral-400 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""
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
        className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <div className="px-6 pb-6 pt-2">
          <div className="border-l-2 border-[#0b2f61] pl-4 py-1">
            <p className="text-neutral-500 font-sans text-xs sm:text-[13px] leading-relaxed">
              {answer}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Scholarship() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full min-h-[420px] sm:min-h-[500px] lg:h-[580px] bg-white flex items-center overflow-hidden border-b border-neutral-100">

        {/* Desktop Background Image: right-0, w-[50%], hidden on mobile */}
        <div className="hidden lg:block absolute inset-y-0 right-0 w-[50%] h-full z-0">
          <img
            src={heroScholarship}
            alt="Amigo Academy Scholarship counseling session with students"
            className="w-full h-full object-cover object-left"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
          {/* Subtle overlay tint */}
          <div className="absolute inset-0 bg-neutral-900/5 mix-blend-multiply" />
          {/* Gradient overlay to fade left edge into white without covering the girl */}
          <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent z-10" />
        </div>

        {/* Mobile Background Image: w-full, height is 100% */}
        <div className="block lg:hidden absolute inset-0 z-0 w-full h-full">
          <img
            src={mobileHeroScholarship}
            alt="Scholarship & Financial Assistance Mobile"
            className="w-full h-full object-cover object-[right_center]"
          />
        </div>

        {/* Content Box */}
        <div className="relative max-w-7xl mx-auto w-full px-4 sm:px-6 md:px-8 z-20 py-12 lg:py-0">
          <div className="w-[50%] sm:w-[50%] lg:w-full max-w-xl md:max-w-2xl text-left flex flex-col space-y-4 md:space-y-7 pl-1 md:pl-2">

            {/* Breadcrumbs */}
            <div className="flex items-center gap-1.5 text-xs sm:text-[13px] font-sans font-medium text-slate-400">
              <Link to="/" className="hover:text-[#DF1818] transition-colors focus:outline-none">Home</Link>
              <span className="text-slate-400 mx-1 select-none">&gt;</span>
              <span className="font-bold text-[#DF1818] tracking-tight">Scholarship</span>
            </div>

            {/* Header Text matching the mockup colors and style */}
            <h1 className="text-xl sm:text-3xl lg:text-[50px] font-outfit font-extrabold tracking-tight text-[#1a2d42] leading-[1.2] lg:leading-[1.12]">
              Amigo Academy <br />
              Scholarship – <span className="text-[#dfaa29]">Up to <br />₹50,000 Off</span>
            </h1>

            {/* Paragraph Text */}
            <div className="text-neutral-700 text-[10px] sm:text-[14px] leading-relaxed lg:leading-[1.65] font-semibold max-w-md md:max-w-[480px] space-y-3 sm:space-y-4">
              <p>
                We believe money should never stop a student from building a successful career. Amigo Academy offers scholarships of up to ₹50,000 along with Zero-Interest EMI across all three courses.
              </p>
              <p>
                Our counsellors help every student understand the financial support they are eligible for through a free eligibility assessment.
              </p>
            </div>

            {/* Check Eligibility Button */}
            <div className="pt-1">
              <button
                onClick={() => window.dispatchEvent(new CustomEvent("openEligibilityModal"))}
                className="inline-flex items-center justify-center bg-[#e31e24] hover:bg-[#c2141a] text-white font-sans font-bold text-[9px] sm:text-xs lg:text-[13px] px-4 py-2.5 sm:px-6 sm:py-3 lg:px-8 lg:py-3.5 rounded-full shadow-[0_12px_24px_rgba(227,30,36,0.22)] hover:shadow-[0_16px_32px_rgba(227,30,36,0.3)] transition-all duration-300 active:scale-95 group whitespace-nowrap cursor-pointer"
              >
                Enroll Now To Avail Scholarship
                <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1 font-bold">➔</span>
              </button>
            </div>

          </div>
        </div>
      </section>
      {/* Scholarship Features Grid Section */}
      <section className="w-full bg-[#f1f5f9] py-20 px-4 sm:px-6 md:px-8 border-t border-neutral-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 text-left">

            {/* Card 1: Scholarship */}
            <div className="bg-white rounded-[28px] p-8 flex flex-col justify-between shadow-[0_8px_30px_rgba(11,47,97,0.02)] border border-[#e2e8f0]/80 min-h-[220px] transition-all duration-300 hover:shadow-[0_8px_30px_rgba(11,47,97,0.05)]">
              <div className="space-y-4.5">
                <div className="w-11 h-11 rounded-full bg-[#fdf3e7] flex items-center justify-center text-[#7c5529] text-base">
                  🎓
                </div>
                <div className="space-y-2.5">
                  <span className="text-[10px] font-extrabold text-[#e31e24] uppercase tracking-widest block font-sans">
                    SCHOLARSHIP
                  </span>
                  <h4 className="font-outfit font-extrabold text-[#0b2f61] text-[15px] sm:text-base leading-tight">
                    Up to ₹50,000 Off
                  </h4>
                  <p className="text-neutral-500 text-xs sm:text-[13px] leading-relaxed font-semibold">
                    Merit and need-based scholarship on course fees.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2: EMI */}
            <div className="bg-white rounded-[28px] p-8 flex flex-col justify-between shadow-[0_8px_30px_rgba(11,47,97,0.02)] border border-[#e2e8f0]/80 min-h-[220px] transition-all duration-300 hover:shadow-[0_8px_30px_rgba(11,47,97,0.05)]">
              <div className="space-y-4.5">
                <div className="w-11 h-11 rounded-full bg-[#fdf3e7] flex items-center justify-center text-[#7c5529] text-base">
                  💳
                </div>
                <div className="space-y-2.5">
                  <span className="text-[10px] font-extrabold text-[#e31e24] uppercase tracking-widest block font-sans">
                    EMI
                  </span>
                  <h4 className="font-outfit font-extrabold text-[#0b2f61] text-[15px] sm:text-base leading-tight">
                    Zero–Interest EMI
                  </h4>
                  <p className="text-neutral-500 text-xs sm:text-[13px] leading-relaxed font-semibold">
                    Pay in easy installments with no extra cost.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3: Eligible Courses */}
            <div className="bg-white rounded-[28px] p-8 flex flex-col justify-between shadow-[0_8px_30px_rgba(11,47,97,0.02)] border border-[#e2e8f0]/80 min-h-[220px] transition-all duration-300 hover:shadow-[0_8px_30px_rgba(11,47,97,0.05)]">
              <div className="space-y-4.5">
                <div className="w-11 h-11 rounded-full bg-[#fdf3e7] flex items-center justify-center text-[#7c5529] text-base">
                  🥞
                </div>
                <div className="space-y-2.5">
                  <span className="text-[10px] font-extrabold text-[#e31e24] uppercase tracking-widest block font-sans">
                    ELIGIBLE COURSES
                  </span>
                  <h4 className="font-outfit font-extrabold text-[#0b2f61] text-[15px] sm:text-base leading-tight">
                    Available for All 3 Courses
                  </h4>
                  <p className="text-neutral-500 text-xs sm:text-[13px] leading-relaxed font-semibold">
                    Cabin Crew, Ground Staff and AI & Data Science.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 4: Certification */}
            <div className="bg-white rounded-[28px] p-8 flex flex-col justify-between shadow-[0_8px_30px_rgba(11,47,97,0.02)] border border-[#e2e8f0]/80 min-h-[220px] transition-all duration-300 hover:shadow-[0_8px_30px_rgba(11,47,97,0.05)]">
              <div className="space-y-4.5">
                <div className="w-11 h-11 rounded-full bg-[#fdf3e7] flex items-center justify-center text-[#7c5529] text-base">
                  🛡️
                </div>
                <div className="space-y-2.5">
                  <span className="text-[10px] font-extrabold text-[#e31e24] uppercase tracking-widest block font-sans">
                    CERTIFICATION
                  </span>
                  <h4 className="font-outfit font-extrabold text-[#0b2f61] text-[15px] sm:text-base leading-tight">
                    Certified course
                  </h4>
                  <p className="text-neutral-500 text-xs sm:text-[13px] leading-relaxed font-semibold">
                    Certified aviation training programs.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      {/* Why Choose Amigo Financial Support? Section */}
      <section className="w-full bg-[#f1f5f9] py-20 px-4 sm:px-6 md:px-8 border-t border-neutral-100">
        <div className="max-w-7xl mx-auto space-y-14 text-center">

          {/* Header text layout */}
          <div className="space-y-4 max-w-2xl mx-auto flex flex-col items-center">
            <span className="bg-[#fdf3e7] text-[#7c5529] text-[10px] font-extrabold uppercase tracking-widest px-4 py-1.5 rounded-full border border-amber-500/10">
              FINANCIAL SUPPORT
            </span>
            <h2 className="text-3xl sm:text-[38px] font-outfit font-extrabold text-[#0b2f61] leading-tight">
              Why Choose Amigo Financial Support?
            </h2>
            <p className="text-neutral-500 text-xs sm:text-sm leading-relaxed max-w-xl font-semibold">
              Transparent scholarships, zero-interest EMI and honest counselling so your career decision is never a money decision.
            </p>
          </div>

          {/* 3x2 Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">

            {/* Card 1 */}
            <div className="bg-white rounded-3xl p-8 flex flex-col justify-between items-start text-left min-h-[220px] shadow-sm border border-neutral-100 hover:shadow-md transition-shadow">
              <div className="space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-[#fdf3e7] flex items-center justify-center text-[#7c5529]">
                  <img
                    src={icon1}
                    alt="Scholarship Assistance"
                    className="w-10 h-10 object-contain group-hover:scale-110 transition-transform"
                  />
                </div>
                <h4 className="font-outfit font-extrabold text-[#0b2f61] text-base">Scholarship Assistance</h4>
                <p className="text-neutral-500 text-xs mt-1 leading-relaxed">
                  Financial support up to ₹50,000 for deserving candidates across all aviation & hospitality programs.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-3xl p-8 flex flex-col justify-between items-start text-left min-h-[220px] shadow-sm border border-neutral-100 hover:shadow-md transition-shadow">
              <div className="space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-[#fdf3e7] flex items-center justify-center text-[#7c5529]">
                  <img
                    src={icon2}
                    alt="Zero-Interest EMI"
                    className="w-10 h-10 object-contain group-hover:scale-110 transition-transform"
                  />
                </div>
                <h4 className="font-outfit font-extrabold text-[#0b2f61] text-base">Zero-Interest EMI</h4>
                <p className="text-neutral-500 text-xs mt-1 leading-relaxed">
                  Flexible monthly payment options with zero-interest EMI to ease the fee structure burden.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-3xl p-8 flex flex-col justify-between items-start text-left min-h-[220px] shadow-sm border border-neutral-100 hover:shadow-md transition-shadow">
              <div className="space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-[#fdf3e7] flex items-center justify-center text-[#7c5529]">
                  <img
                    src={icon3}
                    alt="Merit & Need Based"
                    className="w-10 h-10 object-contain group-hover:scale-110 transition-transform"
                  />
                </div>
                <h4 className="font-outfit font-extrabold text-[#0b2f61] text-base">Merit & Need Based</h4>
                <p className="text-neutral-500 text-xs mt-1 leading-relaxed">
                  Evaluated fairly through our online/offline scholarship test and 12th pass academic scores.
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-3xl p-8 flex flex-col justify-between items-start text-left min-h-[220px] shadow-sm border border-neutral-100 hover:shadow-md transition-shadow">
              <div className="space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-[#fdf3e7] flex items-center justify-center text-[#7c5529]">
                  <img
                    src={icon4}
                    alt="Transparent Process"
                    className="w-10 h-10 object-contain group-hover:scale-110 transition-transform"
                  />
                </div>
                <h4 className="font-outfit font-extrabold text-[#0b2f61] text-base">Transparent Process</h4>
                <p className="text-neutral-500 text-xs mt-1 leading-relaxed">
                  Direct deduction from total course fees with zero hidden conditions or surprise charges.
                </p>
              </div>
            </div>

            {/* Card 5 */}
            <div className="bg-white rounded-3xl p-8 flex flex-col justify-between items-start text-left min-h-[220px] shadow-sm border border-neutral-100 hover:shadow-md transition-shadow sm:col-span-2 lg:col-span-1">
              <div className="space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-[#fdf3e7] flex items-center justify-center text-[#7c5529]">
                  <img
                    src={icon5}
                    alt="100% Equal Opportunity"
                    className="w-10 h-10 object-contain group-hover:scale-110 transition-transform"
                  />
                </div>
                <h4 className="font-outfit font-extrabold text-[#0b2f61] text-base">100% Equal Opportunity</h4>
                <p className="text-neutral-500 text-xs mt-1 leading-relaxed">
                  Open to all eligible students applying for Ghatkopar, Andheri & Thane branches.
                </p>
              </div>
            </div>

            {/* Card 6 */}
            <div className="bg-white rounded-3xl p-8 flex flex-col justify-between shadow-[0_12px_35px_rgba(11,47,97,0.08)] border border-neutral-200/60 min-h-[170px]">
              <div className="space-y-4">
                <div className="w-10 h-10 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full text-[#7c5529]">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
                    <path d="M14 2v6h6" />
                    <path d="m9 15 2 2 4-4" />
                  </svg>
                </div>
                <div className="space-y-2">
                  <h4 className="font-outfit font-extrabold text-[#0b2f61] text-sm sm:text-base">
                    Career–Focused Education
                  </h4>
                  <p className="text-neutral-500 text-xs leading-relaxed font-semibold">
                    Every rupee goes into practical training, grooming, interview preparation and placement support.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      {/* Scholarship Eligibility Process Timeline Section */}
      <section className="w-full bg-white py-20 px-4 sm:px-6 md:px-8">
        <div className="max-w-7xl mx-auto space-y-16 text-center">

          {/* Header */}
          <div className="space-y-4 max-w-2xl mx-auto flex flex-col items-center">
            <span className="bg-[#fdf3e7] text-[#7c5529] text-[10px] font-extrabold uppercase tracking-widest px-4 py-1.5 rounded-full border border-amber-500/10">
              SIMPLE & TRANSPARENT
            </span>
            <h2 className="text-3xl sm:text-[38px] font-outfit font-extrabold text-[#0b2f61] leading-tight">
              Scholarship Eligibility Process
            </h2>
            <p className="text-neutral-500 text-xs sm:text-sm leading-relaxed max-w-xl font-semibold">
              Six clear steps from your first enquiry to a confirmed seat with your scholarship applied.
            </p>
          </div>

          {/* Timeline Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">

            {/* Process Card 1 */}
            <div className="bg-white rounded-3xl p-8 flex flex-col justify-between text-left shadow-sm border border-neutral-100 min-h-[220px] relative overflow-hidden group">
              <div className="space-y-3 relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-[#fdf3e7] flex items-center justify-center text-[#7c5529]">
                  <img
                    src={icons1}
                    alt="Step 1"
                    className="w-8 h-8 object-contain"
                  />
                </div>
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#e31e24]">Step 1</span>
                <h4 className="font-outfit font-extrabold text-[#0b2f61] text-sm sm:text-base">Online Registration</h4>
                <p className="text-neutral-500 text-xs leading-relaxed">
                  Fill out the quick scholarship application form on this page with your basic academic details.
                </p>
              </div>
            </div>

            {/* Process Card 2 */}
            <div className="bg-white rounded-3xl p-8 flex flex-col justify-between text-left shadow-sm border border-neutral-100 min-h-[220px] relative overflow-hidden group">
              <div className="space-y-3 relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-[#fdf3e7] flex items-center justify-center text-[#7c5529]">
                  <img
                    src={icons2}
                    alt="Step 2"
                    className="w-8 h-8 object-contain"
                  />
                </div>
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#e31e24]">Step 2</span>
                <h4 className="font-outfit font-extrabold text-[#0b2f61] text-sm sm:text-base">Counseling Call</h4>
                <p className="text-neutral-500 text-xs leading-relaxed">
                  Our academic team calls you to confirm eligibility and schedule your scholarship evaluation session.
                </p>
              </div>
            </div>

            {/* Process Card 3 */}
            <div className="bg-white rounded-3xl p-8 flex flex-col justify-between text-left shadow-sm border border-neutral-100 min-h-[220px] relative overflow-hidden group">
              <div className="space-y-3 relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-[#fdf3e7] flex items-center justify-center text-[#7c5529]">
                  <img
                    src={icons3}
                    alt="Step 3"
                    className="w-8 h-8 object-contain"
                  />
                </div>
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#e31e24]">Step 3</span>
                <h4 className="font-outfit font-extrabold text-[#0b2f61] text-sm sm:text-base">Aptitude & Grooming Test</h4>
                <p className="text-neutral-500 text-xs leading-relaxed">
                  Appear for a simple online or branch assessment evaluating basic communication, personality & aptitude.
                </p>
              </div>
            </div>

            {/* Process Card 4 */}
            <div className="bg-white rounded-3xl p-8 flex flex-col justify-between text-left shadow-sm border border-neutral-100 min-h-[220px] relative overflow-hidden group">
              <div className="space-y-3 relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-[#fdf3e7] flex items-center justify-center text-[#7c5529]">
                  <img
                    src={icons4}
                    alt="Step 4"
                    className="w-8 h-8 object-contain"
                  />
                </div>
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#e31e24]">Step 4</span>
                <h4 className="font-outfit font-extrabold text-[#0b2f61] text-sm sm:text-base">Scholarship Grant</h4>
                <p className="text-neutral-500 text-xs leading-relaxed">
                  Based on test performance and academic profile, receive a fee scholarship grant up to ₹50,000.
                </p>
              </div>
            </div>

            {/* Process Card 5 */}
            <div className="bg-white rounded-3xl p-8 flex flex-col justify-between text-left shadow-sm border border-neutral-100 min-h-[220px] relative overflow-hidden group">
              <div className="space-y-3 relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-[#fdf3e7] flex items-center justify-center text-[#7c5529]">
                  <img
                    src={icons5}
                    alt="Step 5"
                    className="w-8 h-8 object-contain"
                  />
                </div>
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#e31e24]">Step 5</span>
                <h4 className="font-outfit font-extrabold text-[#0b2f61] text-sm sm:text-base">Flexible EMI Setup</h4>
                <p className="text-neutral-500 text-xs leading-relaxed">
                  Choose customized monthly zero-interest EMI plans suited to your family's budget.
                </p>
              </div>
            </div>

            {/* Process Card 6 */}
            <div className="bg-white rounded-3xl p-8 flex flex-col justify-between text-left shadow-sm border border-neutral-100 min-h-[220px] relative overflow-hidden group">
              <div className="space-y-3 relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-[#fdf3e7] flex items-center justify-center text-[#7c5529]">
                  <img
                    src={icons6}
                    alt="Step 6"
                    className="w-8 h-8 object-contain"
                  />
                </div>
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#e31e24]">Step 6</span>
                <h4 className="font-outfit font-extrabold text-[#0b2f61] text-sm sm:text-base">Batch Confirmation</h4>
                <p className="text-neutral-500 text-xs leading-relaxed">
                  Lock your seat at Ghatkopar, Andheri or Thane branch and begin your transformation journey.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>
      {/* Scholarship Across Courses Section */}
      <section className="w-full bg-[#f1f5f9] py-20 px-4 sm:px-6 md:px-8 border-t border-neutral-100">
        <div className="max-w-7xl mx-auto space-y-16 text-center">

          {/* Header */}
          <div className="space-y-4 max-w-2xl mx-auto flex flex-col items-center">
            <span className="bg-[#fdf3e7] text-[#7c5529] text-[10px] font-extrabold uppercase tracking-widest px-4 py-1.5 rounded-full border border-amber-500/10">
              ALL THREE COURSES
            </span>
            <h2 className="text-3xl sm:text-[38px] font-outfit font-extrabold text-[#0b2f61] leading-tight">
              Scholarship Across Courses
            </h2>
            <p className="text-neutral-500 text-xs sm:text-sm leading-relaxed max-w-xl font-semibold">
              Whichever program you choose, scholarship support and zero-interest EMI are available.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">

            {/* Course Card 1 */}
            <div className="bg-white rounded-3xl p-8 flex flex-col justify-between shadow-[0_12px_35px_rgba(11,47,97,0.08)] border border-neutral-200/60 min-h-[380px]">
              <div className="space-y-6 flex flex-col">
                {/* Yellow Badge */}
                <span className="inline-flex bg-[#fdf3e7] text-[#7c5529] text-[10px] font-extrabold tracking-wider uppercase px-4 py-2 rounded-full border border-amber-500/10 w-fit">
                  SCHOLARSHIP AVAILABLE
                </span>

                {/* Info */}
                <div className="space-y-2">
                  <h4 className="font-outfit font-extrabold text-[#0b2f61] text-lg sm:text-xl">
                    Cabin Crew (Air Hostess) & Hospitality Management
                  </h4>
                  <p className="text-neutral-500 text-[13px] leading-relaxed font-semibold">
                    In-flight service, safety, grooming and communication training for airline cabin crew roles.
                  </p>
                </div>

                {/* Features List */}
                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-2.5 text-xs text-[#0b2f61] font-semibold">
                    <span className="text-[#dfaa29] text-base">✓</span> Scholarship Available
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-[#0b2f61] font-semibold">
                    <span className="text-[#dfaa29] text-base">✓</span> Zero-Interest EMI
                  </div>
                </div>

                {/* Campuses */}
                <div className="flex items-center gap-2 text-neutral-400 text-[11px] font-bold pt-2">
                  <span>📍</span> Ghatkopar · Andheri · Thane
                </div>
              </div>

              {/* Button */}
              <div className="pt-6">
                <button
                  onClick={() => window.dispatchEvent(new CustomEvent("openEligibilityModal"))}
                  className="w-full inline-flex items-center justify-center bg-[#e31e24] hover:bg-[#c2141a] text-white font-sans font-bold text-[13px] py-3.5 rounded-full shadow-[0_8px_20px_rgba(227,30,36,0.15)] transition-all duration-300 active:scale-95 cursor-pointer"
                >
                  Apply Now
                </button>
              </div>
            </div>

            {/* Course Card 2 */}
            <div className="bg-white rounded-3xl p-8 flex flex-col justify-between shadow-[0_12px_35px_rgba(11,47,97,0.08)] border border-neutral-200/60 min-h-[380px]">
              <div className="space-y-6 flex flex-col">
                {/* Yellow Badge */}
                <span className="inline-flex bg-[#fdf3e7] text-[#7c5529] text-[10px] font-extrabold tracking-wider uppercase px-4 py-2 rounded-full border border-amber-500/10 w-fit">
                  SCHOLARSHIP AVAILABLE
                </span>

                {/* Info */}
                <div className="space-y-2">
                  <h4 className="font-outfit font-extrabold text-[#0b2f61] text-lg sm:text-xl">
                    Airport Ground Staff & Hospitality Management
                  </h4>
                  <p className="text-neutral-500 text-[13px] leading-relaxed font-semibold">
                    Check-in, customer service and ground operations training for airport and airline jobs.
                  </p>
                </div>

                {/* Features List */}
                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-2.5 text-xs text-[#0b2f61] font-semibold">
                    <span className="text-[#dfaa29] text-base">✓</span> Scholarship Available
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-[#0b2f61] font-semibold">
                    <span className="text-[#dfaa29] text-base">✓</span> Zero-Interest EMI
                  </div>
                </div>

                {/* Campuses */}
                <div className="flex items-center gap-2 text-neutral-400 text-[11px] font-bold pt-2">
                  <span>📍</span> Ghatkopar · Andheri · Thane
                </div>
              </div>

              {/* Button */}
              <div className="pt-6">
                <button
                  onClick={() => window.dispatchEvent(new CustomEvent("openEligibilityModal"))}
                  className="w-full inline-flex items-center justify-center bg-[#e31e24] hover:bg-[#c2141a] text-white font-sans font-bold text-[13px] py-3.5 rounded-full shadow-[0_8px_20px_rgba(227,30,36,0.15)] transition-all duration-300 active:scale-95 cursor-pointer"
                >
                  Apply Now
                </button>
              </div>
            </div>

            {/* Course Card 3 */}
            <div className="bg-white rounded-3xl p-8 flex flex-col justify-between shadow-[0_12px_35px_rgba(11,47,97,0.08)] border border-neutral-200/60 min-h-[380px]">
              <div className="space-y-6 flex flex-col">
                {/* Yellow Badge */}
                <span className="inline-flex bg-[#fdf3e7] text-[#7c5529] text-[10px] font-extrabold tracking-wider uppercase px-4 py-2 rounded-full border border-amber-500/10 w-fit">
                  SCHOLARSHIP AVAILABLE
                </span>

                {/* Info */}
                <div className="space-y-2">
                  <h4 className="font-outfit font-extrabold text-[#0b2f61] text-lg sm:text-xl">
                    AI & Data Science
                  </h4>
                  <p className="text-neutral-500 text-[13px] leading-relaxed font-semibold">
                    Practical AI, analytics and data projects with interview preparation for technology roles.
                  </p>
                </div>

                {/* Features List */}
                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-2.5 text-xs text-[#0b2f61] font-semibold">
                    <span className="text-[#dfaa29] text-base">✓</span> Scholarship Available
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-[#0b2f61] font-semibold">
                    <span className="text-[#dfaa29] text-base">✓</span> Zero-Interest EMI
                  </div>
                </div>

                {/* Campuses */}
                <div className="flex items-center gap-2 text-neutral-400 text-[11px] font-bold pt-2">
                  <span>📍</span> Ghatkopar · Andheri · Thane
                </div>
              </div>

              {/* Button */}
              <div className="pt-6">
                <button
                  onClick={() => window.dispatchEvent(new CustomEvent("openEligibilityModal"))}
                  className="w-full inline-flex items-center justify-center bg-[#e31e24] hover:bg-[#c2141a] text-white font-sans font-bold text-[13px] py-3.5 rounded-full shadow-[0_8px_20px_rgba(227,30,36,0.15)] transition-all duration-300 active:scale-95 cursor-pointer"
                >
                  Apply Now
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>
      {/* Financial Support Benefits Section */}
      <section className="w-full bg-[#f1f5f9] py-20 px-4 sm:px-6 md:px-8 border-t border-neutral-100">
        <div className="max-w-7xl mx-auto space-y-16 text-center">

          {/* Header */}
          <div className="space-y-4 max-w-2xl mx-auto flex flex-col items-center">
            <span className="bg-[#fdf3e7] text-[#7c5529] text-[10px] font-extrabold uppercase tracking-widest px-4 py-1.5 rounded-full border border-amber-500/10">
              STUDENT BENEFITS
            </span>
            <h2 className="text-3xl sm:text-[38px] font-outfit font-extrabold text-[#0b2f61] leading-tight">
              Financial Support Benefits
            </h2>
            <p className="text-neutral-500 text-xs sm:text-sm leading-relaxed max-w-xl font-semibold">
              Practical benefits that make premium aviation and technology training affordable for Mumbai families.
            </p>
          </div>

          {/* 3x2 Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">

            {/* Card 1 */}
            <div className="bg-white rounded-3xl p-8 flex flex-col justify-between shadow-[0_12px_35px_rgba(11,47,97,0.08)] border border-neutral-200/60 min-h-[170px]">
              <div className="space-y-4">
                <div className="w-10 h-10 flex items-center justify-center">
                  <img
                    src={icons1}
                    alt="Reduced Course Fees Icon"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="space-y-2">
                  <h4 className="font-outfit font-extrabold text-[#0b2f61] text-sm sm:text-base">
                    Reduced Course Fees
                  </h4>
                  <p className="text-neutral-500 text-xs leading-relaxed font-semibold">
                    Approved scholarships come straight off your total course fee.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-3xl p-8 flex flex-col justify-between shadow-[0_12px_35px_rgba(11,47,97,0.08)] border border-neutral-200/60 min-h-[170px]">
              <div className="space-y-4">
                <div className="w-10 h-10 flex items-center justify-center">
                  <img
                    src={icons2}
                    alt="Flexible EMI Plans Icon"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="space-y-2">
                  <h4 className="font-outfit font-extrabold text-[#0b2f61] text-sm sm:text-base">
                    Flexible EMI Plans
                  </h4>
                  <p className="text-neutral-500 text-xs leading-relaxed font-semibold">
                    Monthly installments planned around your family's cash flow.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-3xl p-8 flex flex-col justify-between shadow-[0_12px_35px_rgba(11,47,97,0.08)] border border-neutral-200/60 min-h-[170px]">
              <div className="space-y-4">
                <div className="w-10 h-10 flex items-center justify-center">
                  <img
                    src={icons3}
                    alt="Affordable Career Training Icon"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="space-y-2">
                  <h4 className="font-outfit font-extrabold text-[#0b2f61] text-sm sm:text-base">
                    Affordable Career Training
                  </h4>
                  <p className="text-neutral-500 text-xs leading-relaxed font-semibold">
                    Premium aviation and technology training at a reachable cost.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-3xl p-8 flex flex-col justify-between shadow-[0_12px_35px_rgba(11,47,97,0.08)] border border-neutral-200/60 min-h-[170px]">
              <div className="space-y-4">
                <div className="w-10 h-10 flex items-center justify-center">
                  <img
                    src={icons4}
                    alt="Easy Application Process Icon"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="space-y-2">
                  <h4 className="font-outfit font-extrabold text-[#0b2f61] text-sm sm:text-base">
                    Easy Application Process
                  </h4>
                  <p className="text-neutral-500 text-xs leading-relaxed font-semibold">
                    One short enquiry starts your free eligibility assessment.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 5 */}
            <div className="bg-white rounded-3xl p-8 flex flex-col justify-between shadow-[0_12px_35px_rgba(11,47,97,0.08)] border border-neutral-200/60 min-h-[170px]">
              <div className="space-y-4">
                <div className="w-10 h-10 flex items-center justify-center">
                  <img
                    src={icons5}
                    alt="Dedicated Counselling Icon"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="space-y-2">
                  <h4 className="font-outfit font-extrabold text-[#0b2f61] text-sm sm:text-base">
                    Dedicated Counselling
                  </h4>
                  <p className="text-neutral-500 text-xs leading-relaxed font-semibold">
                    A named counsellor stays with you from enquiry to admission.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 6 */}
            <div className="bg-white rounded-3xl p-8 flex flex-col justify-between shadow-[0_12px_35px_rgba(11,47,97,0.08)] border border-neutral-200/60 min-h-[170px]">
              <div className="space-y-4">
                <div className="w-10 h-10 flex items-center justify-center">
                  <img
                    src={icons6}
                    alt="Student-Focused Financial Support Icon"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="space-y-2">
                  <h4 className="font-outfit font-extrabold text-[#0b2f61] text-sm sm:text-base">
                    Student-Focused Financial Support
                  </h4>
                  <p className="text-neutral-500 text-xs leading-relaxed font-semibold">
                    Support designed so finances never decide your career.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Student Success Testimonials Section */}
      <section className="w-full bg-[#f1f5f9] py-20 px-4 sm:px-6 md:px-8 border-t border-neutral-100">
        <div className="max-w-7xl mx-auto space-y-16 text-center">

          {/* Header */}
          <div className="space-y-4 max-w-2xl mx-auto flex flex-col items-center">
            <span className="bg-[#fdf3e7] text-[#7c5529] text-[10px] font-extrabold uppercase tracking-widest px-4 py-1.5 rounded-full border border-amber-500/10">
              STUDENT SUCCESS
            </span>
            <h2 className="text-3xl sm:text-[38px] font-outfit font-extrabold text-[#0b2f61] leading-tight">
              Students Who Studied With Scholarship Support
            </h2>
            <p className="text-neutral-500 text-xs sm:text-sm leading-relaxed max-w-xl font-semibold">
              Real Amigo Academy students who used scholarships and zero-interest EMI to start their careers.
            </p>
          </div>

          {/* Testimonial 3x2 Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">

            {/* Aaliya Bhat */}
            <div className="bg-white rounded-3xl p-8 flex flex-col justify-between shadow-[0_12px_35px_rgba(11,47,97,0.08)] border border-neutral-200/60 space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-neutral-200 flex-shrink-0">
                  <img
                    src={studentImg1}
                    alt="Aaliya Bhat"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-outfit font-extrabold text-[#0b2f61] text-base">
                    Aaliya Bhat
                  </h4>
                  <span className="text-[#e31e24] text-[11px] font-extrabold tracking-wide uppercase block">
                    Air Hostess / Cabin Crew
                  </span>
                  <span className="text-neutral-400 text-[10px] font-semibold flex items-center gap-1 mt-0.5">
                    📍 Andheri branch
                  </span>
                </div>
              </div>
              <div className="bg-[#f8fafc] rounded-2xl p-5 border border-neutral-100 flex items-start gap-3">
                <span className="text-[#dfaa29] text-xl font-serif leading-none mt-1">“</span>
                <p className="text-neutral-600 text-xs sm:text-[13px] leading-relaxed font-semibold">
                  Amazing institute, skilled professionals and placements!! Def recommend to do a course from here. The faculty is v sweet and helpful
                </p>
              </div>
            </div>

            {/* Kajal Gupta */}
            <div className="bg-white rounded-3xl p-8 flex flex-col justify-between shadow-[0_12px_35px_rgba(11,47,97,0.08)] border border-neutral-200/60 space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-neutral-200 flex-shrink-0">
                  <img
                    src={studentImg2}
                    alt="Kajal Gupta"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-outfit font-extrabold text-[#0b2f61] text-base">
                    Kajal Gupta
                  </h4>
                  <span className="text-[#e31e24] text-[11px] font-extrabold tracking-wide uppercase block">
                    Airport Ground Staff
                  </span>
                  <span className="text-neutral-400 text-[10px] font-semibold flex items-center gap-1 mt-0.5">
                    📍 Ghatkopar branch
                  </span>
                </div>
              </div>
              <div className="bg-[#f8fafc] rounded-2xl p-5 border border-neutral-100 flex items-start gap-3">
                <span className="text-[#dfaa29] text-xl font-serif leading-none mt-1">“</span>
                <p className="text-neutral-600 text-xs sm:text-[13px] leading-relaxed font-semibold">
                  Amigo academy provides reliable placement assistance along with excellent training. The support continues even after course completion.
                </p>
              </div>
            </div>

            {/* Affan Ali Syed */}
            <div className="bg-white rounded-3xl p-8 flex flex-col justify-between shadow-[0_12px_35px_rgba(11,47,97,0.08)] border border-neutral-200/60 space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-neutral-200 flex-shrink-0">
                  <img
                    src={studentImg3}
                    alt="Affan Ali Syed"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-outfit font-extrabold text-[#0b2f61] text-base">
                    Affan Ali Syed
                  </h4>
                  <span className="text-[#e31e24] text-[11px] font-extrabold tracking-wide uppercase block">
                    Air Hostess / Cabin Crew
                  </span>
                  <span className="text-neutral-400 text-[10px] font-semibold flex items-center gap-1 mt-0.5">
                    📍 Thane branch
                  </span>
                </div>
              </div>
              <div className="bg-[#f8fafc] rounded-2xl p-5 border border-neutral-100 flex items-start gap-3">
                <span className="text-[#dfaa29] text-xl font-serif leading-none mt-1">“</span>
                <p className="text-neutral-600 text-xs sm:text-[13px] leading-relaxed font-semibold">
                  This academy provides reliable placement assistance along with excellent training. The support continues even after course completion. I was very pleased with it!
                </p>
              </div>
            </div>

            {/* Alfiya Siddiqui */}
            <div className="bg-white rounded-3xl p-8 flex flex-col justify-between shadow-[0_12px_35px_rgba(11,47,97,0.08)] border border-neutral-200/60 space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-neutral-200 flex-shrink-0">
                  <img
                    src={studentImg4}
                    alt="Alfiya Siddiqui"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-outfit font-extrabold text-[#0b2f61] text-base">
                    Alfiya Siddiqui
                  </h4>
                  <span className="text-[#e31e24] text-[11px] font-extrabold tracking-wide uppercase block">
                    Air Hostess / Cabin Crew
                  </span>
                  <span className="text-neutral-400 text-[10px] font-semibold flex items-center gap-1 mt-0.5">
                    📍 Ghatkopar branch
                  </span>
                </div>
              </div>
              <div className="bg-[#f8fafc] rounded-2xl p-5 border border-neutral-100 flex items-start gap-3">
                <span className="text-[#dfaa29] text-xl font-serif leading-none mt-1">“</span>
                <p className="text-neutral-600 text-xs sm:text-[13px] leading-relaxed font-semibold">
                  I stay in chembur and was searching forna airhostess course near me Amigoz is the best institute
                </p>
              </div>
            </div>

            {/* Ashish Pawar */}
            <div className="bg-white rounded-3xl p-8 flex flex-col justify-between shadow-[0_12px_35px_rgba(11,47,97,0.08)] border border-neutral-200/60 space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-neutral-200 flex-shrink-0">
                  <img
                    src={studentImg5}
                    alt="Ashish Pawar"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-outfit font-extrabold text-[#0b2f61] text-base">
                    Ashish Pawar
                  </h4>
                  <span className="text-[#e31e24] text-[11px] font-extrabold tracking-wide uppercase block">
                    Airport Ground Staff
                  </span>
                  <span className="text-neutral-400 text-[10px] font-semibold flex items-center gap-1 mt-0.5">
                    📍 Andheri branch
                  </span>
                </div>
              </div>
              <div className="bg-[#f8fafc] rounded-2xl p-5 border border-neutral-100 flex items-start gap-3">
                <span className="text-[#dfaa29] text-xl font-serif leading-none mt-1">“</span>
                <p className="text-neutral-600 text-xs sm:text-[13px] leading-relaxed font-semibold">
                  Amigoz Academy truly helped me transform my career with practical learning and great support
                </p>
              </div>
            </div>

            {/* Suraj Sawant */}
            <div className="bg-white rounded-3xl p-8 flex flex-col justify-between shadow-[0_12px_35px_rgba(11,47,97,0.08)] border border-neutral-200/60 space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-neutral-200 flex-shrink-0">
                  <img
                    src={studentImg6}
                    alt="Suraj Sawant"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-outfit font-extrabold text-[#0b2f61] text-base">
                    Suraj Sawant
                  </h4>
                  <span className="text-[#e31e24] text-[11px] font-extrabold tracking-wide uppercase block">
                    Air Hostess / Cabin Crew
                  </span>
                  <span className="text-neutral-400 text-[10px] font-semibold flex items-center gap-1 mt-0.5">
                    📍 Ghatkopar branch
                  </span>
                </div>
              </div>
              <div className="bg-[#f8fafc] rounded-2xl p-5 border border-neutral-100 flex items-start gap-3">
                <span className="text-[#dfaa29] text-xl font-serif leading-none mt-1">“</span>
                <p className="text-neutral-600 text-xs sm:text-[13px] leading-relaxed font-semibold">
                  The academy focuses on overall personality development. The discipline and professionalism maintained here are impressive.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Frequently Asked Questions Section */}
      <section className="w-full bg-[#f8fafc] py-20 border-t border-neutral-200/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 md:px-8 w-full flex flex-col items-center space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl sm:text-[38px] font-outfit font-black text-[#0b2f61] leading-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-neutral-500 font-sans font-semibold text-xs sm:text-[13px] max-w-xl mx-auto leading-relaxed">
              Got questions? We've got answers. Find out everything you need to know about our courses.
            </p>
          </div>

          <div className="w-full space-y-4">
            <FAQItem
              index={1}
              question="How much scholarship can I get?"
              answer="You can receive a scholarship of **up to ₹50,000**, depending on your eligibility."
            />
            <FAQItem
              index={2}
              question="Is EMI really zero-interest?"
              answer="Yes, we partner directly with premium financing organizations to structure monthly payment plans that carry 0% interest charges for your family."
            />
            <FAQItem
              index={3}
              question="Which courses are covered by the scholarship?"
              answer="All three of our major training courses—Cabin Crew (Air Hostess) & Hospitality Management, Airport Ground Staff & Hospitality Management, and AI & Data Science—have scholarship seats allocated."
            />
            <FAQItem
              index={4}
              question="Does checking my eligibility cost anything?"
              answer="No, our assessment check and counselling call are 100% free of cost with zero obligations."
            />
            <FAQItem
              index={5}
              question="Is Amigo Academy certified?"
              answer="Yes, Amigo Academy is Maharashtra Government Certified, providing premium training formats across our campus branches in Ghatkopar, Andheri, and Thane."
            />
          </div>

          {/* Have More Questions Banner Pill */}
          <div className="mt-10 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-[#fffbf0] border border-[#ffecd1] px-6 py-3 rounded-full shadow-[0_4px_10px_rgba(255,236,209,0.2)] hover:scale-105 transition-all cursor-pointer"
            >
              <span className="text-[#e31e24] font-bold text-xs sm:text-sm">✨</span>
              <span className="text-[#0b2f61] font-sans font-bold text-[10px] sm:text-xs tracking-wider uppercase">
                If you have anymore question, please contact us
              </span>
            </Link>
          </div>
        </div>
      </section>

      <section
        style={{ backgroundColor: "#0d1b3d" }}
        className="py-16 px-6 text-center text-white relative overflow-hidden"
      >
        {/* Top badge */}
        <div className="flex justify-center mb-7">
          <span
            style={{
              border: "1px solid rgba(240,161,58,0.4)",
              color: "#f0a13a",
              backgroundColor: "rgba(240,161,58,0.05)",
            }}
            className="inline-flex items-center gap-2 text-xs font-bold tracking-wide px-4 py-2 rounded-full"
          >
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M11.3 1.046a1 1 0 01.7 1.169L10.98 8h4.02a1 1 0 01.76 1.65l-8 9.5a1 1 0 01-1.752-.815L6.02 12H2a1 1 0 01-.76-1.65l8-9.5a1 1 0 011.06-.304z" />
            </svg>
            Limited seats per batch — apply early to secure your spot
          </span>
        </div>

        {/* Headline */}
        <h1
          style={{ color: "#ffffff" }}
          className="font-extrabold text-3xl sm:text-5xl leading-tight max-w-4xl mx-auto mb-5"
        >
          2026 batches are filling fast — Secure Your Spot Now!
        </h1>

        {/* Subheading */}
        {/* <p style={{ color: "#a8b3cc" }} className="text-sm sm:text-base mb-7">
          Admissions open — secure your seat early. One free call is all it takes.
        </p> */}

        {/* Certification badge */}
        <div className="flex justify-center mb-8">
          <span
            style={{
              border: "1px solid rgba(255,255,255,0.1)",
              color: "#f0a13a",
              backgroundColor: "rgba(255,255,255,0.05)",
            }}
            className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-full"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 1L2 5v2h16V5l-8-4zM4 9v7H2v2h16v-2h-2V9h-2v7h-2V9h-2v7H8V9H6v7H4V9H4z" />
            </svg>
            Maharashtra govt certified — only aviation institute in Maharashtra
          </span>
        </div>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <button
            onClick={() => window.dispatchEvent(new CustomEvent("openEligibilityModal"))}
            style={{ backgroundColor: "#e0392f", color: "#ffffff" }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-sm font-bold px-6 py-3.5 rounded-full transition-colors cursor-pointer"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Check my eligibility now
          </button>

          <button
            onClick={() => window.dispatchEvent(new CustomEvent("openEligibilityModal"))}
            style={{ backgroundColor: "#e0392f", color: "#ffffff" }}
            className="w-full sm:w-auto inline-flex items-center justify-center text-sm font-bold px-8 py-3.5 rounded-full transition-colors cursor-pointer"
          >
            Start my career
          </button>

          <a
            href="https://wa.me/919987588932"
            target="_blank"
            rel="noopener noreferrer"
            style={{ backgroundColor: "#25d366", color: "#ffffff" }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-sm font-bold px-6 py-3.5 rounded-full transition-colors"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 004.74 1.21h.005c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.87 9.87 0 0012.04 2zm5.8 14.05c-.24.68-1.4 1.3-1.93 1.38-.5.08-1.12.11-1.8-.11-.42-.13-.96-.31-1.65-.61-2.9-1.25-4.79-4.17-4.94-4.36-.14-.2-1.18-1.57-1.18-3 0-1.42.75-2.12 1.01-2.41.27-.29.58-.36.78-.36.19 0 .39 0 .56.01.18.01.42-.07.66.5.24.58.82 2 .89 2.15.07.15.12.32.02.52-.1.2-.15.32-.29.49-.15.17-.31.38-.44.51-.15.15-.3.31-.13.6.17.29.75 1.24 1.62 2.01 1.11.99 2.05 1.3 2.34 1.44.29.15.46.13.63-.08.18-.2.75-.87.95-1.17.2-.29.4-.24.66-.15.27.1 1.7.8 1.99.94.29.15.48.22.55.34.07.13.07.72-.17 1.4z" />
            </svg>
            Chat on WhatsApp
          </a>
        </div>

        {/* Trust indicators */}
        <div
          style={{ color: "#8fdca0" }}
          className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-medium"
        >
          {["4.6 Google rating", "10,000+ students Trained", "Certified Courses", "200+ hiring partners"].map(
            (item, i) => (
              <span key={i} className="inline-flex items-center gap-1.5 font-bold">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                {item}
              </span>
            )
          )}
        </div>

        {/* Download Brochure (PDF) Pill Button */}
        <div className="mt-8 flex justify-center">
          <button
            onClick={() => window.dispatchEvent(new CustomEvent("openEligibilityModal"))}
            className="inline-flex items-center gap-2.5 px-7 py-3 rounded-full border border-white/40 text-white hover:bg-white/10 hover:border-white/80 transition-all text-sm font-semibold cursor-pointer shadow-md active:scale-95 focus:outline-none"
          >
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M7.5 12l4.5 4.5m0 0l4.5-4.5M12 16.5V3" />
            </svg>
            <span>Download Brochure (PDF)</span>
          </button>
        </div>
      </section>
    </div>
  );
}
