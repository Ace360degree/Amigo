import React, { useState } from "react";
import { createPortal } from "react-dom";
import { useNavigate } from "react-router-dom";
import aviationHero from "../assets/img/aviation-hero.png";
import aviationHeroMobile from "../assets/img/aviation-hero-mobile.png";
import coursesVideo1a from "../assets/img/coursesvideo1a.png";
import coursesVideo2a from "../assets/img/coursesvideo2a.png";
import coursesVideo3a from "../assets/img/coursesvideo3a.png";
import coursesVideo4a from "../assets/img/coursesvideo4a.png";
import coursesVideo5a from "../assets/img/coursesvideo5a.png";
import course9 from "../assets/img/courses/9.png";
import course10 from "../assets/img/courses/10.png";
import course11 from "../assets/img/courses/11.png";
import course12 from "../assets/img/courses/12.png";
import course13 from "../assets/img/courses/13.png";
import course14 from "../assets/img/courses/14.png";
import course15 from "../assets/img/courses/15.png";

type OverviewItem = {
  label: string;
  value: string;
};

type HighlightCard = {
  title: string;
  description: string;
  iconType?: "badge" | "users" | "grad" | "card";
};

type LearnCard = {
  image: string;
  title: string;
};

type CriteriaCard = {
  title: string;
  tag: string;
  details: string;
  note: string;
};

type FaqItem = {
  question: string;
  answer: string;
};

type StoryCard = {
  title: string;
  role: string;
  company: string;
  quote: string;
  image: string;
};

const overview: OverviewItem[] = [
  { label: "Timing", value: "Morning / Afternoon / Evening" },
  { label: "Our Branches", value: "Ghatkopar, Andheri & Thane" },
  { label: "Age", value: "17 to 27 Years" },
  { label: "Duration", value: "12 Months (5 Days/Week, 2 Hours/Day)" },
  { label: "Eligibility", value: "12th Pass" },
];

const highlights: HighlightCard[] = [
  {
    title: "Practical Curriculum",
    description: "Check-in, Boarding, Baggage, Ramp, Customer service",
    iconType: "badge",
  },
  {
    title: "High-Demand Career Field",
    description: "Growing Demand for AI & Data Science Professionals Across India",
    iconType: "users",
  },
  {
    title: "Dedicated Placement Support",
    description: "Profile Pushed to Airlines & Aviation Employers",
    iconType: "grad",
  },
  {
    title: "Strong Project Portfolio",
    description: "Build 8–10 Real Data Projects to Strengthen Your Resume & Interviews",
    iconType: "card",
  },
  {
    title: "Interactive Offline Classroom Batches",
    description: "In-Person Learning at 4 Branches with Expert Guidance",
    iconType: "users",
  },
  {
    title: "Strong Career Growth Potential",
    description: "Competitive Salaries Based on Skills, Projects & Employer Requirements",
    iconType: "grad",
  },
  {
    title: "Scholarship Opportunities",
    description: "Scholarships up to ₹50,000 Available",
    iconType: "card",
  },
  {
    title: "Zero-Interest EMI Options",
    description: "Flexible Payment Plans to Make the Course Affordable",
    iconType: "card",
  },
];

const learnCards: LearnCard[] = [
  {
    image: course9,
    title: "Airport Operations & Ground Handling",
  },
  {
    image: course10,
    title: "Passenger Check-in & Boarding",
  },
  {
    image: course11,
    title: "Baggage & Cargo Handling",
  },
  {
    image: course12,
    title: "Customer Service & Communication",
  },
  {
    image: course13,
    title: "Grooming & Personality Development",
  },
  {
    image: course14,
    title: "Airport Safety & Security",
  },
  {
    image: course15,
    title: "Interview Preparation & Job Readiness",
  },
];

const criteriaCards: CriteriaCard[] = [
  {
    title: "Educational Qualification",
    tag: "Required",
    details: "12th Pass",
    note: "Any stream — Science, Commerce or Arts",
  },
  {
    title: "Age Criteria",
    tag: "Required",
    details: "17 to 25 Years",
    note: "Relaxation possible based on experience and role",
  },
  {
    title: "Height Requirement",
    tag: "Essential",
    details: "No height requirement",
    note: "Open to all body types",
  },
  {
    title: "Gender",
    tag: "Required",
    details: "Open to All",
    note: "Male and female candidates welcome",
  },
  {
    title: "Communication",
    tag: "Essential",
    details: "Basic English",
    note: "We train you further during the course",
  },
  {
    title: "Certification",
    tag: "Essential",
    details: "Govt Certified",
    note: "Maharashtra Government recognised course",
  },
];

const faqItems: FaqItem[] = [
  {
    question: "What is the duration of the airport ground staff course at Amigo Academy?",
    answer:
      "The airport ground staff course is a 12-month (1 year) program, held 5 days a week for 2 hours a day. Morning, afternoon, and evening batches are available at our Ghatkopar, Andheri & Thane branches.",
  },
  {
    question: "What is the eligibility for the airport ground staff course?",
    answer:
      "The basic eligibility is 12th pass from any recognized board in any stream. Candidates aged 17 to 25 years can apply.",
  },
  {
    question: "Is the airport ground staff course government certified?",
    answer:
      "Yes, Amigo Academy's training programs are Maharashtra Government Certified, offering official credentials trusted by employers.",
  },
  {
    question: "What is the salary of airport ground staff in India?",
    answer:
      "Starting salaries generally range from ₹2.5 LPA to ₹4.5 LPA depending on the airline, role, and location, with rapid growth opportunities as you gain experience.",
  },
  {
    question: "What kind of placement support does Amigo Academy provide for ground staff?",
    answer:
      "We provide placement support including resume building, mock interviews, grooming sessions, and direct interview scheduling with top airlines and ground handling companies.",
  },
  {
    question: "Is there a height requirement for airport ground staff?",
    answer:
      "No, unlike cabin crew roles, airport ground staff roles have no height requirement and are open to all body types.",
  },
  {
    question: "Can boys join the airport ground staff course?",
    answer:
      "Yes, male and female candidates are equally eligible for all aviation and airport management roles.",
  },
  {
    question: "Where are Amigo Academy's branches for the ground staff course?",
    answer:
      "Our campus branches are located at Ghatkopar, Andheri & Thane in Mumbai.",
  },
  {
    question: "What jobs can I get after the airport ground staff course?",
    answer:
      "Roles include Customer Service Executive, Passenger Service Agent, Check-in Staff, Boarding Gate Agent, Baggage & Ramp Handler, and Airport Operations Coordinator.",
  },
  {
    question: "What is the difference between airport ground staff and cabin crew?",
    answer:
      "Cabin crew work inside the aircraft during flights, while ground staff handle airport-side passenger services, check-in, baggage, and ground operations.",
  },
  {
    question: "Are EMI or scholarship options available?",
    answer:
      "Yes, Amigo Academy offers scholarships up to ₹50,000 along with zero-interest monthly EMI options to make the course affordable.",
  },
  {
    question: "How do I enrol or check my eligibility?",
    answer:
      "You can click 'Check My Eligibility' on our website or contact our counselling team for instant guidance.",
  },
  {
    question: "Is airport ground staff a good career after 12th?",
    answer:
      "Yes! It offers fast entry into the expanding aviation sector with immediate employment opportunities after 12th.",
  },
  {
    question: "Does the airport ground staff course include interview preparation?",
    answer:
      "Yes, comprehensive interview preparation, mock interviews, spoken English training, and personality development are core parts of the 12-month program.",
  },
];

const storyCards: StoryCard[] = [
  {
    title: "Jasmine Soni",
    role: "Cabin Crew Emirates",
    company: "Aviation Batch 2023",
    quote:
      '"Amigo Air Hostess Academy completely transformed my career path. The practical training and expert guidance helped me land my dream job as a Cabin Crew Member within months of graduating."',
    image: coursesVideo1a,
  },
  {
    title: "Swati Patil",
    role: "Airport Ground Staff",
    company: "Trawell & Tourism 2022",
    quote:
      '"The comprehensive curriculum covers every aspect of the industry. The instructors are real professionals who know what airlines are looking for. I am now happily working at International Airport."',
    image: coursesVideo2a,
  },
  {
    title: "Hardik Chari",
    role: "Guest Service Executive",
    company: "Batch 2024",
    quote:
      '"Guest Service Executive Course Mumbai – zero to high-paying job. Placement team is exceptional."',
    image: coursesVideo3a,
  },
  {
    title: "Isaac Edward",
    role: "Passenger Service Executive",
    company: "Batch 2026",
    quote:
      '"ROHAN S. 12-month course + placement team = best move after 12th. Got placed at Mumbai Airport within 5 months."',
    image: coursesVideo4a,
  },
  {
    title: "Ashwini Patil",
    role: "Cabin Crew",
    company: "Batch 2026",
    quote:
      '"Best air hostess course Mumbai — flying international in 5 months. Grooming and mock interviews made all the difference."',
    image: coursesVideo5a,
  },
];

export default function AviationHospitality() {
  const navigate = useNavigate();
  return (
    <div className="bg-[#f5f7fb] text-neutral-900 font-sans">
      {/* Hero Section */}
      {/* Desktop Hero View */}
      <section className="hidden sm:flex w-full bg-[#f1f5f9] h-[650px] relative overflow-hidden items-center border-b border-neutral-200/50">
        <div className="absolute top-0 right-0 h-full w-full lg:w-[48%] z-0">
          <img
            src={aviationHero}
            alt="Airport Ground Staff & Hospitality Management"
            className="h-full w-full object-cover object-center"
            onError={(e) => {
              e.currentTarget.src =
                "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#f1f5f9] from-0% via-[#f1f5f9]/40 via-[22%] to-transparent z-10 lg:block hidden" />
        </div>

        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 md:px-8 relative z-20 flex items-center h-full">
          <div className="max-w-[650px] text-left">
            <div className="flex items-center flex-wrap gap-2 text-[11px] mb-6">
              <span className="text-[#53657d]">Home</span>
              <span className="text-[#9ca3af]">›</span>
              <span className="text-[#e31e24] font-semibold">
                Airport Ground Staff & Hospitality Management
              </span>
            </div>

            <h1 className="text-[38px] sm:text-[42px] lg:text-[46px] font-outfit font-extrabold text-[#0b2f61] leading-[1.1] tracking-tight">
              Airport Ground Staff &amp; Hospitality Management
            </h1>

            <div className="flex flex-wrap items-center gap-2 mt-4 text-[15px] sm:text-[16px] font-semibold">
              <span className="text-[#0b2f61]">12 Month</span>
              <span className="text-[#6b7280]">•</span>
              <span className="text-[#0b2f61]">Certificate Program</span>
              <span className="text-[#6b7280]">•</span>
              <span className="text-[#e31e24]">Practical Training</span>
            </div>

            <div className="mt-8 bg-white/70 backdrop-blur-sm p-6 rounded-2xl border border-slate-200/60 shadow-sm max-w-xl">
              <h2 className="text-[18px] font-bold text-[#0b2f61] mb-4">
                Course Overview
              </h2>

              <div className="space-y-3 text-xs sm:text-sm text-[#42526a]">

                <div className="flex items-center gap-3">
                  <span className="text-[#0b2f61] font-bold">◷</span>
                  <p>
                    <span className="font-semibold text-slate-700">Timing:</span>
                    <span className="ml-2 font-bold text-[#0b2f61]">Morning / Afternoon / Evening</span>
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-[#0b2f61] font-bold">⌖</span>
                  <p>
                    <span className="font-semibold text-slate-700">Our Branches:</span>
                    <span className="ml-2 font-medium text-[#0b2f61]">Ghatkopar, Andheri &amp; Thane</span>
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-[#0b2f61] font-bold">▤</span>
                  <p>
                    <span className="font-semibold text-slate-700">Duration:</span>
                    <span className="ml-2 font-medium text-[#0b2f61]">12 Months (5 Days/Week, 2 Hours/Day)</span>
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-[#0b2f61] font-bold">▧</span>
                  <p>
                    <span className="font-semibold text-slate-700">Eligibility:</span>
                    <span className="ml-2 font-medium text-[#0b2f61]">12th Pass</span>
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-[#0b2f61] font-bold">♙</span>
                  <p>
                    <span className="font-semibold text-slate-700">Age:</span>
                    <span className="ml-2 font-medium text-[#0b2f61]">17 to 27 Years</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Hero View */}
      <section className="sm:hidden w-full bg-[#f8fafc] border-b border-neutral-200/50">
        {/* Top Hero Banner */}
        <div className="relative w-full h-[430px] overflow-hidden bg-[#f1f5f9]">
          <img
            src={aviationHeroMobile}
            alt="Aviation & Hospitality Management"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />

          {/* Text Overlay Pinned to Left */}
          <div className="absolute inset-y-0 left-0 z-10 px-5 flex flex-col justify-center max-w-[280px]">
            <h1 className="text-[26px] font-extrabold text-[#0b2f61] leading-[1.16] tracking-tight">
              Aviation &amp;<br />
              Hospitality<br />
              Management
            </h1>

            <ul className="mt-5 space-y-2.5 text-[13px] font-bold">
              <li className="flex items-center gap-2 text-[#0b2f61]">
                <span className="text-[#0b2f61] font-extrabold">•</span> 12 Month
              </li>
              <li className="flex items-center gap-2 text-[#0b2f61]">
                <span className="text-[#0b2f61] font-extrabold">•</span> Certificate Program
              </li>
              <li className="flex items-center gap-2 text-[#e31e24]">
                <span className="text-[#e31e24] font-extrabold">•</span> Practical Training
              </li>
            </ul>
          </div>
        </div>

        {/* Course Overview below Hero Banner on Mobile */}
        <div className="bg-white px-5 py-7 border-b border-slate-100">
          <h2 className="text-[19px] font-extrabold text-[#0b2f61] mb-5">
            Course Overview
          </h2>

          <div className="space-y-4 text-xs">
            <div className="flex items-center justify-between gap-3 text-[#42526a]">
              <span className="font-semibold text-slate-700">Timing:</span>
              <span className="text-[#0b2f61] font-bold">Morning / Afternoon / Evening</span>
            </div>
            <div className="flex items-center justify-between gap-3 text-[#42526a]">
              <span className="font-semibold text-slate-700">Our Branches:</span>
              <span className="text-[#0b2f61] font-medium text-right">Ghatkopar, Andheri &amp; Thane</span>
            </div>
            <div className="flex items-center justify-between gap-3 text-[#42526a]">
              <span className="font-semibold text-slate-700">Duration:</span>
              <span className="text-[#0b2f61] font-medium text-right">12 Months (5 Days/Week, 2 Hours/Day)</span>
            </div>
            <div className="flex items-center justify-between gap-3 text-[#42526a]">
              <span className="font-semibold text-slate-700">Eligibility:</span>
              <span className="text-[#0b2f61] font-medium">12th Pass</span>
            </div>
            <div className="flex items-center justify-between gap-3 text-[#42526a]">
              <span className="font-semibold text-slate-700">Age:</span>
              <span className="text-[#0b2f61] font-medium">17 to 27 Years</span>
            </div>
          </div>
        </div>
      </section>

      {/* Course Highlights Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 mt-8 sm:-mt-14 relative z-10 pb-16">
        <div className="rounded-[32px] bg-white border border-slate-100 shadow-[0_15px_45px_rgba(0,0,0,0.06)] p-6 sm:p-10 md:p-12">
          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-[#0b2f61] text-center mb-8 sm:mb-10">
            Course Highlights
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="rounded-[20px] bg-[#FFF9EA] border border-[#FBECC8]/60 p-5 flex items-start gap-4 transition-all duration-300 hover:shadow-md"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-[#2563eb] shadow-sm">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <circle cx="12" cy="8" r="6" />
                    <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
                  </svg>
                </div>

                <div>
                  <h3 className="text-sm font-extrabold text-[#0b2f61] leading-snug mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Container: Kickstart Your Career In 12 Months */}
      <section className="bg-[#f4f6fb] py-12 px-4 sm:px-6 md:px-8 border-t border-neutral-100">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-[28px] sm:rounded-[36px] bg-[#183a7d] px-6 sm:px-12 py-10 sm:py-12 shadow-[0_20px_50px_rgba(24,58,125,0.18)] text-white">
            <div className="text-left">
              <h2 className="text-2xl sm:text-[34px] font-extrabold leading-tight tracking-tight text-white">
                Kickstart Your Career In 12 Months
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-slate-200/90 font-normal">
                Get Batch timings and Seat availability
              </p>
            </div>

            <form className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5" onSubmit={(e) => { e.preventDefault(); navigate("/thank-you"); }}>
              {/* Mobile Number */}
              <div className="relative flex items-center bg-white rounded-full h-[50px] px-4 shadow-sm">
                <input
                  type="tel"
                  required
                  placeholder="Mobile Number *"
                  className="w-full text-xs sm:text-sm text-slate-800 placeholder-slate-400 font-semibold focus:outline-none bg-transparent"
                />
              </div>

              {/* Full Name */}
              <div className="relative flex items-center bg-white rounded-full h-[50px] px-4 shadow-sm">
                <input
                  type="text"
                  required
                  placeholder="Full Name *"
                  className="w-full text-xs sm:text-sm text-slate-800 placeholder-slate-400 font-semibold focus:outline-none bg-transparent"
                />
              </div>

              {/* Age */}
              <div className="relative flex items-center bg-white rounded-full h-[50px] px-4 shadow-sm">
                <select className="w-full text-xs sm:text-sm text-slate-500 font-semibold focus:outline-none bg-transparent appearance-none cursor-pointer">
                  <option value="" disabled selected hidden>Age</option>
                  <option value="17">17 Years</option>
                  <option value="18">18 Years</option>
                  <option value="19">19 Years</option>
                  <option value="20">20 Years</option>
                  <option value="21">21 Years</option>
                  <option value="22">22 Years</option>
                  <option value="23">23 Years</option>
                  <option value="24">24 Years</option>
                  <option value="25">25 Years</option>
                </select>
              </div>

              {/* Qualification */}
              <div className="relative flex items-center bg-white rounded-full h-[50px] px-4 shadow-sm">
                <select className="w-full text-xs sm:text-sm text-slate-500 font-semibold focus:outline-none bg-transparent appearance-none cursor-pointer">
                  <option value="" disabled selected hidden>Qualification</option>
                  <option value="12th">12th Pass</option>
                  <option value="undergraduate">Undergraduate</option>
                  <option value="graduate">Graduate</option>
                </select>
              </div>

              {/* Preferred Branch */}
              <div className="relative flex items-center bg-white rounded-full h-[50px] px-4 shadow-sm">
                <select className="w-full text-xs sm:text-sm text-slate-500 font-semibold focus:outline-none bg-transparent appearance-none cursor-pointer">
                  <option value="" disabled selected hidden>Preferred Branch</option>
                  <option value="ghatkopar">Ghatkopar</option>
                  <option value="andheri">Andheri</option>
                  <option value="thane">Thane</option>
                </select>
              </div>

              {/* Gender */}
              <div className="relative flex items-center bg-white rounded-full h-[50px] px-4 shadow-sm">
                <select className="w-full text-xs sm:text-sm text-slate-500 font-semibold focus:outline-none bg-transparent appearance-none cursor-pointer">
                  <option value="" disabled selected hidden>Gender</option>
                  <option value="female">Female</option>
                  <option value="male">Male</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Submit button spanning full row on desktop */}
              <div className="md:col-span-3 flex justify-center pt-2">
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#e31e24] hover:bg-[#c2141a] text-white font-bold text-sm px-10 py-3.5 rounded-full shadow-lg transition-all active:scale-95 cursor-pointer"
                >
                  <span>Enrol Now</span>
                  <span className="text-base font-extrabold">➔</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* What Will You Learn */}
      <section className="bg-[#f9fafb] py-16 sm:py-24 px-4 sm:px-6 md:px-8 border-t border-neutral-100">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111827] text-center mb-12 sm:mb-16 font-sans">
            What Will You Learn?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {learnCards.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-[24px] overflow-hidden border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="h-[200px] sm:h-[210px] w-full overflow-hidden relative bg-slate-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 sm:p-6 flex flex-col justify-center flex-1 bg-white min-h-[90px]">
                  <h3 className="text-[15px] sm:text-[16px] font-bold text-[#1f2937] leading-snug font-sans">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 flex justify-center">
            <button
              type="button"
              onClick={() => window.dispatchEvent(new CustomEvent("openEligibilityModal"))}
              className="inline-flex items-center justify-center gap-2.5 bg-[#DF1818] hover:bg-[#c41212] text-white font-sans font-bold text-sm sm:text-base px-8 py-3.5 rounded-full shadow-[0_8px_20px_rgba(223,24,24,0.28)] hover:shadow-[0_12px_28px_rgba(223,24,24,0.38)] transition-all duration-300 active:scale-95 cursor-pointer"
            >
              <span>Explore Airport Ground Staff Course
              </span>
              <span className="font-bold">&nbsp;➔</span>
            </button>
          </div>
        </div>
      </section>

      {/* Eligibility Criteria */}
      <section className="bg-white py-16 sm:py-20 px-4 sm:px-6 md:px-8 border-t border-neutral-100">
        <div className="mx-auto max-w-7xl">
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#e6f7f0] px-4 py-1.5 text-xs font-semibold text-[#0d9488] border border-[#ccf0e1]">
              <svg className="w-4 h-4 text-[#0d9488]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Quick Eligibility Check</span>
            </div>
          </div>

          <h2 className="mt-4 text-3xl sm:text-[40px] font-extrabold text-[#0b2f61] text-center leading-tight">
            Do You Meet the Eligibility Criteria?
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-xs sm:text-sm leading-relaxed text-slate-500 text-center">
            Check if you qualify for our 12-month Airport Ground Staff &amp; Hospitality Management program.
          </p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {criteriaCards.map((item) => {
              const isRequired = item.tag === "Required";
              return (
                <div
                  key={item.title}
                  className="rounded-[22px] border border-slate-100/90 bg-white p-6 sm:p-7 shadow-[0_8px_30px_rgba(0,0,0,0.03)] flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <div className="w-10 h-10 rounded-full bg-[#f0f4fd] flex items-center justify-center text-[#2563eb]">
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                          <path d="M6 12v5c3 3 9 3 12 0v-5" />
                        </svg>
                      </div>
                      <span
                        className={`text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${isRequired
                          ? "bg-[#fff1f2] text-[#f43f5e] border-[#fecdd3]"
                          : "bg-[#fff7ed] text-[#ea580c] border-[#ffedd5]"
                          }`}
                      >
                        {item.tag}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-[17px] font-bold text-[#0b2f61]">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-xs sm:text-sm font-medium text-slate-600">
                      {item.details}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-start gap-2.5">
                    <svg className="w-4 h-4 text-[#10b981] shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      {item.note}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Card inside Eligibility section */}
          <div className="mt-8 min-h-[255px] rounded-[16px] border border-slate-100 bg-white px-6 py-10 shadow-[0_8px_30px_rgba(0,0,0,0.03)] flex flex-col items-center justify-center gap-3 text-center">
            <div>
              <h3 className="text-[19px] sm:text-[21px] font-extrabold text-[#17213a]">
                Not Sure If You Qualify?
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-500">
                Don't worry! Our counselors will evaluate your profile and suggest the best career path in aviation for you.
              </p>
            </div>
            <button
              onClick={() => window.dispatchEvent(new CustomEvent("openEligibilityModal"))}
              className="mt-8 shrink-0 rounded-full bg-[#ed1c24] hover:bg-[#cb151c] text-white px-[72px] py-3.5 text-sm font-bold shadow-[0_10px_20px_rgba(237,28,36,0.2)] transition-all inline-flex items-center gap-8 cursor-pointer"
            >
              <span>Check My Eligibility</span>
              <span>➔</span>
            </button>
          </div>
        </div>
      </section>

      {/* Still Have Questions CTA Banner */}
      <section className="bg-[#f4f6fb] py-12 px-4 sm:px-6 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-[28px] sm:rounded-[36px] bg-[#0b2f61] px-6 sm:px-12 py-10 sm:py-14 text-center text-white shadow-xl">
            <h2 className="text-2xl sm:text-[34px] font-extrabold text-white leading-tight">
              Still have questions?
            </h2>
            <p className="mx-auto mt-2 max-w-xl text-xs sm:text-sm leading-relaxed text-slate-200/90 font-normal">
              Our expert counselors are here to help you make the right career decision.
              <br className="hidden sm:block" />
              Get personalized guidance in under 60 seconds.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => window.dispatchEvent(new CustomEvent("openEligibilityModal"))}
                className="rounded-full bg-white hover:bg-slate-50 text-[#0b2f61] font-bold px-7 py-3 text-sm shadow-md transition-all inline-flex items-center gap-2 cursor-pointer"
              >
                <span>Talk to Counselor Now</span>
                <span>➔</span>
              </button>
              <button
                onClick={() => window.dispatchEvent(new CustomEvent("openEligibilityModal"))}
                className="rounded-full border border-white/60 hover:bg-white/10 text-white font-bold px-7 py-3 text-sm transition-all inline-flex items-center gap-2 cursor-pointer"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
                <span>Download Brochure (PDF)</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Student Success Stories */}
      {/* <section className="bg-[#f4f6fb] py-16 sm:py-20 px-4 sm:px-6 md:px-8 border-t border-neutral-100">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="text-3xl sm:text-[40px] font-extrabold text-[#0b2f61] leading-tight">
            Student Success Stories
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-xs sm:text-sm text-slate-500">
            Hear from our successful graduates who are now thriving in their dream careers
          </p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {storyCards.slice(0, 3).map((story) => (
              <article
                key={story.title}
                className="overflow-hidden rounded-[22px] bg-white border border-slate-100/90 shadow-[0_8px_30px_rgba(0,0,0,0.03)] flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                    <img
                      src={story.image}
                      alt={story.title}
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/15" />
                    <button
                      type="button"
                      className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#e31e24] shadow-lg transition-transform hover:scale-105"
                    >
                      <svg className="ml-0.5 h-5 w-5 fill-current" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </button>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-3">
                      <img
                        src={story.image}
                        alt={story.title}
                        className="h-10 w-10 rounded-full border border-slate-200 object-cover shrink-0"
                      />
                      <div>
                        <h3 className="text-sm font-extrabold text-[#0b2f61]">
                          {story.title}
                        </h3>
                        <p className="text-[11px] font-medium text-slate-500">
                          {story.role}
                        </p>
                        <p className="text-[10px] text-slate-400">
                          {story.company}
                        </p>
                      </div>
                    </div>

                    <p className="mt-4 text-xs text-slate-600 leading-relaxed italic">
                      {story.quote}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 flex items-center justify-center gap-3">
            <button
              type="button"
              className="w-10 h-10 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-600 hover:bg-slate-50 shadow-sm transition-all"
            >
              <span>←</span>
            </button>
            <button
              type="button"
              className="rounded-full bg-[#0b2f61] hover:bg-[#071f42] text-white px-6 py-2.5 text-xs font-bold flex items-center gap-2 shadow-md transition-all"
            >
              <span>Next Story</span>
              <span>➔</span>
            </button>
          </div>
        </div>
      </section> */}

      {/* FAQ Section */}
      <section className="bg-white py-16 sm:py-20 px-4 sm:px-6 md:px-8 border-t border-neutral-100">
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-[#eff6ff] px-4 py-1.5 text-xs font-semibold text-[#2563eb] border border-[#dbeafe]">
            <svg className="w-4 h-4 text-[#2563eb]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M12 18h.01" />
            </svg>
            <span>Common Questions Answered</span>
          </div>

          <h2 className="mt-4 text-2xl sm:text-[34px] font-extrabold text-[#0b2f61] leading-tight max-w-3xl mx-auto">
            Frequently Asked Questions – Aviation, Hospitality &amp; Travel Management Training
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-xs sm:text-sm text-slate-500">
            Got questions? We have answers. Still confused? Speak to our counselor in 60 seconds.
          </p>

          <div className="mt-10 space-y-3.5 text-left">
            {faqItems.map((faq, index) => (
              <details
                key={faq.question}
                open={index === 0}
                className="group rounded-[18px] border border-slate-100/90 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.02)] overflow-hidden transition-all duration-200"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-4 sm:p-5 text-sm font-extrabold text-[#0b2f61] select-none">
                  <span className="flex items-center gap-3.5">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#f0f4fd] text-xs font-bold text-[#2563eb] group-open:bg-[#0b2f61] group-open:text-white transition-colors">
                      {index + 1}
                    </span>
                    <span className="group-open:text-[#0b2f61] transition-colors">{faq.question}</span>
                  </span>
                  <svg
                    className="h-4 w-4 shrink-0 text-slate-400 transition-transform duration-300 group-open:rotate-180"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </summary>
                <div className="px-4 pb-4 sm:px-5 sm:pb-5">
                  <div className="rounded-xl border-l-4 border-[#0b2f61] bg-[#f8fafc] p-4 text-xs sm:text-sm leading-relaxed text-slate-600">
                    {faq.answer}
                  </div>
                </div>
              </details>
            ))}
          </div>

          {/* Have More Questions Banner Pill */}
          <div className="mt-10 text-center">
            <button
              onClick={() => {
                window.location.href = "/contact";
              }}
              className="inline-flex items-center gap-2 bg-[#fffbf0] border border-[#ffecd1] px-6 py-3 rounded-full shadow-[0_4px_10px_rgba(255,236,209,0.2)] hover:scale-105 transition-all cursor-pointer"
            >
              <span className="text-[#e31e24] font-bold text-xs sm:text-sm">✨</span>
              <span className="text-[#0b2f61] font-sans font-bold text-[10px] sm:text-xs tracking-wider uppercase">
                If you have anymore question, please contact us
              </span>
            </button>
          </div>

          {/* Bottom Stats */}
          <div className="mt-16 pt-12 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            {[
              { value: "1,200+", label: "Students Enrolled" },
              { value: "200+", label: "Hiring Partners" },
              { value: "120+", label: "Students Trained" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl sm:text-4xl font-extrabold text-[#0b2f61]">
                  {stat.value}
                </div>
                <div className="mt-1.5 text-xs font-medium text-slate-500">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
