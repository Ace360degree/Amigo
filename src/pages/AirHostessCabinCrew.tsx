import React, { useState } from "react";
import { createPortal } from "react-dom";

// ... existing code ...

import { useNavigate } from "react-router-dom";
import heroImage from "../assets/img/aircourseh111a.png";
import airHostessMobileHero from "../assets/img/airhostesshero-mobile.png";
import courseIcon121 from "../assets/img/courseicon121.png";
import airhostessIcon2 from "../assets/img/airhostessicon2.png";
import coursesVideo1a from "../assets/img/coursesvideo1a.png";
import coursesVideo2a from "../assets/img/coursesvideo2a.png";
import coursesVideo3a from "../assets/img/coursesvideo3a.png";
import coursesVideo4a from "../assets/img/coursesvideo4a.png";
import coursesVideo5a from "../assets/img/coursesvideo5a.png";

import courseImg1 from "../assets/img/courses/1.png";
import courseImg2 from "../assets/img/courses/2.png";
import courseImg3 from "../assets/img/courses/3.png";
import courseImg4 from "../assets/img/courses/4.png";
import courseImg5 from "../assets/img/courses/5.png";
import courseImg6 from "../assets/img/courses/6.png";
import courseImg7 from "../assets/img/courses/7.png";
import courseImg8 from "../assets/img/courses/8.png";

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
  title: string;
  image: string;
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
  { label: "Duration", value: "12 Months (6 Days/Week, 2 Hours/Day)" },
  { label: "Eligibility", value: "12th Pass" },
  { label: "Age", value: "17 to 24 Years" },
];

const highlights: HighlightCard[] = [
  {
    title: "Maharashtra Government-Certified Program",
    description: "Govt. Approved Official Certification for Aviation & Hospitality",
    iconType: "badge",
  },
  {
    title: "Grooming & Personality Development",
    description: "Professional Grooming, Communication & Confidence Building",
    iconType: "badge",
  },
  {
    title: "Dedicated Placement Support",
    description: "Profile Pushed to Airlines & Aviation Employers",
    iconType: "badge",
  },
  {
    title: "Real Interview & Grooming Focus",
    description: "Grooming Sessions + Mock Interviews for Airline Selection",
    iconType: "badge",
  },
  {
    title: "Interactive Offline Classroom Batches",
    description: "In-Person Learning at 4 Branches",
    iconType: "users",
  },
  {
    title: "Domestic & International Career Paths",
    description: "Opportunities with IndiGo, Air India, Emirates, Akasa & More",
    iconType: "badge",
  },
  {
    title: "Scholarship Opportunities",
    description: "Scholarships up to ₹50,000 Available",
    iconType: "grad",
  },
  {
    title: "Zero-Interest EMI Options",
    description: "Flexible Payment Plans to Make the Course Affordable",
    iconType: "card",
  },
];

const learnCards: LearnCard[] = [
  { title: "Introduction to Aviation & Cabin Crew Roles", image: courseImg1 },
  { title: "Grooming & Personality Development", image: courseImg2 },
  { title: "Communication Skills for Cabin Crew", image: courseImg3 },
  { title: "Passenger Handling & In-Flight Service", image: courseImg4 },
  { title: "Safety, Emergency & First Aid Procedures", image: courseImg5 },
  { title: "Cabin Crew Eligibility & Career Roadmap", image: courseImg6 },
  { title: "Interview Preparation & Job Readiness", image: courseImg7 },
  { title: "Aviation Industry Exposure & Airline Recruitment Process", image: courseImg8 },
];

const criteriaCards: CriteriaCard[] = [
  {
    title: "Educational Qualification",
    tag: "Required",
    details: "12th Pass (any stream)",
    note: "Open to students from all academic backgrounds.",
  },
  {
    title: "Age Criteria",
    tag: "Required",
    details: "17 to 24 Years",
    note: "Relaxation possible for experienced candidates or applicants with airline-relevant background.",
  },
  {
    title: "Height Requirement",
    tag: "For Cabin Crew",
    details: "Airlines require 160 cm (female) / 170 cm (male) or fitting as per airline norms",
    note: "Airport-specific standards can vary. We also help guide students on the best route for their profile.",
  },
  {
    title: "Medical & Fitness Standards",
    tag: "Required",
    details: "Good general health and vision",
    note: "Overall physical fitness is required for flying duties.",
  },
  {
    title: "Language Proficiency",
    tag: "Essential",
    details: "Language proficiency and clear communication",
    note: "Clear pronunciation and strong communication skills matter most.",
  },
  {
    title: "Personality & Professional Traits",
    tag: "Preferred",
    details: "Confident, disciplined, and presentable demeanor",
    note: "Polite attitude, cleanliness, grooming and hygiene are key.",
  },
];

const faqItems: FaqItem[] = [
  {
    question: "What is the duration of the air hostess / cabin crew course at Amigo Academy?",
    answer:
      "The air hostess / cabin crew course is a 12-month program with 6 days a week, 2 hours a day. Morning, afternoon and evening batches are available at our Ghatkopar, Andheri, Thane and Pune branches.",
  },
  {
    question: "What is the eligibility for the air hostess / cabin crew course?",
    answer:
      "The basic eligibility is 12th pass from any stream. We also guide students on age, grooming and communication readiness during counselling.",
  },
  {
    question: "What is the height requirement for cabin crew?",
    answer:
      "Height requirements depend on the airline, but we help students understand the typical expectations and the best career path for their profile.",
  },
  {
    question: "Is the cabin crew course government certified?",
    answer:
      "Yes, our aviation training is Maharashtra Government certified and built around practical classroom learning.",
  },
  {
    question: "Does Amigo Academy provide placement support for cabin crew?",
    answer:
      "Yes, we provide placement support, interview preparation and job guidance for eligible students.",
  },
  {
    question: "What salary can I expect after completing the air hostess course?",
    answer:
      "Salary depends on the airline, role and location, but students are guided toward the current market opportunities during placement support.",
  },
  {
    question: "What is the starting salary of an air hostess after 12th?",
    answer:
      "Starting salaries vary by airline and position. We discuss realistic ranges during counselling so you know what to expect.",
  },
  {
    question: "Is a medical or hospitality management degree required?",
    answer:
      "No, a medical or hospitality degree is not required. The course is designed for students after 12th who want to build an aviation career.",
  },
  {
    question: "What is the difference between cabin crew, air hostess, and flight attendant?",
    answer:
      "These terms are often used interchangeably. The role focuses on passenger service, safety and in-flight hospitality.",
  },
  {
    question: "Can male candidates apply for the cabin crew course?",
    answer:
      "Yes, male candidates can apply. There are roles in cabin crew and also other aviation and airport pathways depending on profile and airline standards.",
  },
  {
    question: "What is the minimum height required for an air hostess in India?",
    answer:
      "Minimum height varies by airline. We help you understand the current requirements during the eligibility discussion.",
  },
  {
    question: "What if I don't meet the airline height requirement?",
    answer:
      "If cabin crew height expectations are not met, we can guide you toward airport ground staff or other suitable paths.",
  },
  {
    question: "Can I join the cabin crew course if I have a tattoo?",
    answer:
      "Airline policies vary. We recommend discussing your profile so we can guide you to the most practical option.",
  },
  {
    question: "Can I join the cabin crew course after 12th?",
    answer:
      "Yes, 12th pass students can apply. It is one of the most common entry points into aviation training.",
  },
  {
    question: "What skills are taught in the cabin crew course?",
    answer:
      "You learn grooming, communication, passenger handling, safety, emergency procedures, interview preparation and aviation industry exposure.",
  },
  {
    question: "What makes Amigo Academy's cabin crew course different?",
    answer:
      "Our course combines government certification, practical classroom training, placement support and career guidance in one structured program.",
  },
  {
    question: "How do I enrol or check my eligibility?",
    answer:
      "Use the enquiry form on this page or contact our team for a quick eligibility check and counselling session.",
  },
];

const storyCards: StoryCard[] = [
  {
    title: "Jasmine Soni",
    role: "Cabin Crew Executive",
    company: "Air Asia 2025",
    quote:
      '"Amigo Air Hostess Academy completely transformed my career path. The practical training and expert guidance helped me land my dream job as a Cabin Crew Member within months of graduating."',
    image: coursesVideo1a,
  },
  {
    title: "Swati Patil",
    role: "Airport Ground Staff",
    company: "Vistara 2025",
    quote:
      '"The comprehensive curriculum covered every aspect of the industry. The mock interviews and interview preparation made the whole process feel natural and calm."',
    image: coursesVideo2a,
  },
  {
    title: "Hardik Chari",
    role: "Guest Service Executive",
    company: "IndiGo 2025",
    quote:
      '"Guest Service Executive roles can be competitive, but the placement team helped me build confidence and stay focused through each round."',
    image: coursesVideo3a,
  },
  {
    title: "Issac Edward",
    role: "Passenger Service Executive",
    company: "Airport 2025",
    quote:
      '"The 12-month course and placement support gave me the right start. The training made me ready for a full-time airport role from day one."',
    image: coursesVideo4a,
  },
  {
    title: "Ashwini Patil",
    role: "Cabin Crew",
    company: "Akasa Air 2025",
    quote:
      '"Best in class access to training and support. The interview preparation and mock sessions made all the difference for my selection."',
    image: coursesVideo5a,
  },
];

export default function AirHostessCabinCrew() {
  const navigate = useNavigate();
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  return (
    <div className="bg-[#f5f7fb] text-neutral-900">
      {/* Hero Section */}
      {/* Desktop Hero View */}
      <section className="hidden sm:flex w-full bg-[#f1f5f9] h-[650px] relative overflow-hidden items-center border-b border-neutral-200/50">
        <div className="absolute top-0 right-0 h-full w-full lg:w-[55%] z-0">
          <img
            src={new URL("../assets/img/aircourseh111a.png", import.meta.url).href}
            alt="Air Hostess and Cabin Crew Training"
            className="h-full w-full object-cover object-center"
            onError={(e) => {
              e.currentTarget.src =
                "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#f1f5f9] from-0% via-[#f1f5f9]/30 via-[18%] to-transparent to-[38%] z-10 lg:block hidden" />
          <div className="absolute inset-0 bg-[#f1f5f9]/40 z-10 lg:hidden block" />
        </div>

        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 md:px-8 relative z-20 flex items-center h-full">
          <div className="max-w-[650px] text-left">
            <div className="flex items-center flex-wrap gap-2 text-[11px] mb-7">
              <span className="text-[#53657d]">Home</span>
              <span className="text-[#9ca3af]">›</span>
              <span className="text-[#e31e24] font-semibold">
                Air Hostess / Cabin Crew &amp; Hospitality Management
              </span>
            </div>

            <h1 className="text-[40px] sm:text-[42px] lg:text-[45px] font-outfit font-extrabold text-[#17365d] leading-[1.08] tracking-tight">
              Air Hostess / Cabin Crew
            </h1>

            <div className="flex flex-wrap items-center gap-2 mt-3 text-[16px] font-semibold">
              <span className="text-[#17365d]">12 Months</span>
              <span className="text-[#6b7280]">-</span>
              <span className="text-[#17365d]">Certificate Program</span>
              <span className="text-[#6b7280]">-</span>
              <span className="text-[#e31e24]">Practical Training</span>
            </div>

            <div className="mt-9">
              <h2 className="text-[24px] font-extrabold text-[#17365d] mb-8">
                Course Overview
              </h2>

              <div className="space-y-5 text-[20px] leading-none text-[#4b5e7d]">

                <div className="flex items-center gap-4">
                  <span className="w-5 shrink-0 text-center text-[18px] text-[#17365d]">◷</span>
                  <p>
                    <span className="font-semibold">Timing:</span>
                    <span className="ml-4 font-bold text-[#17365d]">
                      Morning / Afternoon / Evening
                    </span>
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <span className="w-5 shrink-0 text-center text-[18px] text-[#17365d]">⌖</span>
                  <p>
                    <span className="font-semibold">Our Branches:</span>
                    <span className="ml-3">Ghatkopar, Andheri &amp; Thane</span>
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <span className="w-5 shrink-0 text-center text-[18px] text-[#17365d]">▤</span>
                  <p>
                    <span className="font-semibold">Duration:</span>
                    <span className="ml-3">12 Months (5 Days/Week, 2 Hours/Day)</span>
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <span className="w-5 shrink-0 text-center text-[18px] text-[#17365d]">▧</span>
                  <p>
                    <span className="font-semibold">Eligibility:</span>
                    <span className="ml-3">12th Pass</span>
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <span className="w-5 shrink-0 text-center text-[18px] text-[#17365d]">♙</span>
                  <p>
                    <span className="font-semibold">Age:</span>
                    <span className="ml-2">17 to 24 Years</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Hero View matching SS 2 */}
      <section className="sm:hidden w-full bg-[#f8fafc] border-b border-neutral-200/50">
        {/* Top Hero Banner */}
        <div className="relative w-full h-[430px] overflow-hidden bg-[#f1f5f9]">
          <img
            src={airHostessMobileHero}
            alt="Air Hostess / Cabin Crew & Hospitality Management"
            className="absolute inset-0 h-full w-full object-cover object-[right_top]"
          />

          {/* Text Overlay Pinned to Left */}
          <div className="absolute inset-y-0 left-0 z-10 px-5 flex flex-col justify-center max-w-[275px]">
            <h1 className="text-[26px] font-extrabold text-[#17365d] leading-[1.16] tracking-tight">
              Air Hostess /<br />
              Cabin Crew &amp;<br />
              Hospitality<br />
              Management
            </h1>

            <ul className="mt-5 space-y-2.5 text-[13px] font-bold">
              <li className="flex items-center gap-2 text-[#17365d]">
                <span className="text-[#17365d] font-extrabold">•</span> 12 Months
              </li>
              <li className="flex items-center gap-2 text-[#17365d]">
                <span className="text-[#17365d] font-extrabold">•</span> Certificate Program
              </li>
              <li className="flex items-center gap-2 text-[#e31e24]">
                <span className="text-[#e31e24] font-extrabold">•</span> Practical Training
              </li>
            </ul>
          </div>
        </div>

        {/* Course Overview below Hero Banner on Mobile */}
        <div className="bg-white px-5 py-7 border-b border-slate-100">
          <h2 className="text-[19px] font-extrabold text-[#17365d] mb-5">
            Course Overview
          </h2>

          <div className="space-y-4 text-xs">

            {/* Timing */}
            <div className="flex items-center justify-between gap-3 text-[#42526a]">
              <div className="flex items-center gap-2.5">
                <svg className="w-4 h-4 text-[#17365d] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="font-semibold text-slate-700">Timing:</span>
              </div>
              <span className="text-[#17365d] font-bold">Morning / Afternoon / Evening</span>
            </div>

            {/* Our Branches */}
            <div className="flex items-center justify-between gap-3 text-[#42526a]">
              <div className="flex items-center gap-2.5">
                <svg className="w-4 h-4 text-[#17365d] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <span className="font-semibold text-slate-700">Our Branches:</span>
              </div>
              <span className="text-[#17365d] font-medium text-right">Ghatkopar, Andheri &amp; Thane</span>
            </div>

            {/* Duration */}
            <div className="flex items-center justify-between gap-3 text-[#42526a]">
              <div className="flex items-center gap-2.5">
                <svg className="w-4 h-4 text-[#17365d] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                </svg>
                <span className="font-semibold text-slate-700">Duration:</span>
              </div>
              <span className="text-[#17365d] font-medium text-right">12 Months (5 Days/Week, 2 Hours/Day)</span>
            </div>

            {/* Eligibility */}
            <div className="flex items-center justify-between gap-3 text-[#42526a]">
              <div className="flex items-center gap-2.5">
                <svg className="w-4 h-4 text-[#17365d] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="font-semibold text-slate-700">Eligibility:</span>
              </div>
              <span className="text-[#17365d] font-medium">12th Pass</span>
            </div>

            {/* Age */}
            <div className="flex items-center justify-between gap-3 text-[#42526a]">
              <div className="flex items-center gap-2.5">
                <svg className="w-4 h-4 text-[#17365d] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
                <span className="font-semibold text-slate-700">Age:</span>
              </div>
              <span className="text-[#17365d] font-medium">17 to 24 Years</span>
            </div>
          </div>
        </div>
      </section>

      {/* Course Highlights Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 mt-8 sm:-mt-14 relative z-10 pb-16">
        <div className="rounded-[32px] bg-white border border-slate-100 shadow-[0_15px_45px_rgba(0,0,0,0.06)] p-6 sm:p-10 md:p-12">
          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-[#112a46] text-center mb-8 sm:mb-10">
            Course Highlights
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="rounded-[20px] bg-[#FFF9EA] border border-[#FBECC8]/60 p-5 flex items-start gap-4 transition-all duration-300 hover:shadow-md"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-[#2563eb] shadow-sm">
                  {item.iconType === "users" ? (
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  ) : item.iconType === "grad" ? (
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                      <path d="M6 12v5c3 3 9 3 12 0v-5" />
                    </svg>
                  ) : item.iconType === "card" ? (
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                      <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
                      <line x1="1" y1="10" x2="23" y2="10" />
                    </svg>
                  ) : (
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                      <circle cx="12" cy="8" r="6" />
                      <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
                    </svg>
                  )}
                </div>

                <div>
                  <h3 className="text-sm sm:text-[15px] font-extrabold text-[#112a46] leading-snug mb-1">
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

            <form className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5" onSubmit={async (e) => {
              e.preventDefault();
              const target = e.currentTarget;
              const mobile = (target.querySelector('input[type="tel"]') as HTMLInputElement)?.value || "";
              const name = (target.querySelector('input[type="text"]') as HTMLInputElement)?.value || "";
              const selects = target.querySelectorAll('select');
              const age = selects[0]?.value || "";
              const qualification = selects[1]?.value || "";
              const branch = selects[2]?.value || "";
              const gender = selects[3]?.value || "";

              try {
                const bodyParams = new URLSearchParams();
                bodyParams.append("action", "counsellor");
                bodyParams.append("name", name);
                bodyParams.append("phone", mobile);
                bodyParams.append("course", "Air Hostess / Cabin Crew");
                bodyParams.append("branch", branch);
                bodyParams.append("age", age);
                bodyParams.append("gender", gender);
                bodyParams.append("qualification", qualification);
                bodyParams.append("form_location", "Air Hostess Cabin Crew Page");

                const res = await fetch("https://amigoacademy.in/api/submit.php", {
                  method: "POST",
                  headers: { "Content-Type": "application/x-www-form-urlencoded" },
                  body: bodyParams.toString(),
                });
                const data = await res.json();
                if (res.ok && data.status === "success") {
                  navigate("/thank-you");
                } else {
                  alert(data.message || "Failed to submit enquiry. Please try again.");
                }
              } catch (err) {
                console.error("Backend API error:", err);
                alert("Network error. Please check your connection and try again.");
              }
            }}>
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
              className="inline-flex items-center justify-center gap-2.5 bg-[#e31e24] hover:bg-[#c2141a] text-white font-sans font-bold text-sm sm:text-base px-8 py-3.5 rounded-full shadow-[0_8px_20px_rgba(227,30,36,0.28)] hover:shadow-[0_12px_28px_rgba(227,30,36,0.38)] transition-all duration-300 active:scale-95 cursor-pointer"
            >
              <span>Enroll Now to Start</span>
              <span className="text-base font-extrabold">➔</span>
            </button>
          </div>
        </div>
      </section>

      {/* Eligibility Criteria */}
      <section className="bg-white py-16 sm:py-20 px-4 sm:px-6 md:px-8 border-t border-neutral-100">
        <div className="mx-auto max-w-7xl">
          {/* Pill Badge */}
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#e6f7f0] px-4 py-1.5 text-xs font-semibold text-[#0d9488] border border-[#ccf0e1]">
              <svg className="w-4 h-4 text-[#0d9488]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Quick Eligibility Check</span>
            </div>
          </div>

          <h2 className="mt-4 text-3xl sm:text-[40px] font-extrabold text-[#11223f] text-center leading-tight">
            Do You Meet the Eligibility Criteria?
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-xs sm:text-sm leading-relaxed text-slate-500 text-center">
            Check if you qualify for our 12-month Air Hostess / Cabin Crew &amp; Hospitality Management program.
          </p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {criteriaCards.map((item) => {
              const isRed = item.tag === "Required";
              return (
                <div
                  key={item.title}
                  className="rounded-[22px] border border-slate-100/90 bg-white p-6 sm:p-7 shadow-[0_8px_30px_rgba(0,0,0,0.03)] flex flex-col justify-between"
                >
                  <div>
                    {/* Header line: icon left, badge right */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <div className="w-10 h-10 rounded-full bg-[#f0f4fd] flex items-center justify-center text-[#2563eb]">
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                          <path d="M6 12v5c3 3 9 3 12 0v-5" />
                        </svg>
                      </div>
                      <span
                        className={`text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${isRed
                          ? "bg-[#fff1f2] text-[#f43f5e] border-[#fecdd3]"
                          : "bg-[#fff7ed] text-[#ea580c] border-[#ffedd5]"
                          }`}
                      >
                        {item.tag}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-[17px] font-bold text-[#11223f]">
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
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-16 sm:py-20 px-4 sm:px-6 md:px-8 border-t border-neutral-100">
        <div className="mx-auto max-w-4xl text-center">
          {/* Pill Badge */}
          <div className="inline-flex items-center gap-1.5 rounded-full bg-[#eff6ff] px-4 py-1.5 text-xs font-semibold text-[#2563eb] border border-[#dbeafe]">
            {/* <svg className="w-4 h-4 text-[#2563eb]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M12 18h.01" />
            </svg> */}
            <span>Common Questions Answered</span>
          </div>

          <h2 className="mt-4 text-2xl sm:text-[34px] font-extrabold text-[#11223f] leading-tight max-w-3xl mx-auto">
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
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-4 sm:p-5 text-sm font-extrabold text-[#11223f] select-none">
                  <span className="flex items-center gap-3.5">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#f0f4fd] text-xs font-bold text-[#2563eb] group-open:bg-[#183a7d] group-open:text-white transition-colors">
                      {index + 1}
                    </span>
                    <span className="group-open:text-[#183a7d] transition-colors">{faq.question}</span>
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
                  <div className="rounded-xl border-l-4 border-[#183a7d] bg-[#f8fafc] p-4 text-xs sm:text-sm leading-relaxed text-slate-600">
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
              { value: "120+", label: "Students Placed" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl sm:text-4xl font-extrabold text-[#11223f]">
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

      {/* Still Have Questions Banner */}
      <section className="bg-[#f4f6fb] py-12 px-4 sm:px-6 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-[28px] sm:rounded-[36px] bg-[#183a7d] px-6 sm:px-12 py-10 sm:py-14 text-center text-white shadow-[0_20px_50px_rgba(24,58,125,0.18)]">
            <h2 className="text-2xl sm:text-[34px] font-extrabold text-white leading-tight">
              Still have questions?
            </h2>
            <p className="mx-auto mt-2 max-w-xl text-xs sm:text-sm leading-relaxed text-slate-200/90 font-normal">
              Our expert counselors are here to help you make the right career decision.
              <br className="hidden sm:block" />
              Get personalized guidance in under 60 seconds.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href="/contact#enquiry-form"
                className="rounded-full bg-white hover:bg-slate-50 text-[#183a7d] font-bold px-7 py-3 text-sm shadow-md transition-all inline-flex items-center gap-2"
              >
                <span>Talk to Counselor Now</span>
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
              <a
                href="/contact#enquiry-form"
                className="rounded-full border border-white/60 hover:bg-white/10 text-white font-bold px-7 py-3 text-sm transition-all inline-flex items-center gap-2"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
                <span>Download Brochure (PDF)</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Student Success Stories */}
      <section className="bg-[#f4f6fb] py-16 sm:py-20 px-4 sm:px-6 md:px-8 border-t border-neutral-100">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="text-3xl sm:text-[40px] font-extrabold text-[#11223f] leading-tight">
            Student Success Stories
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-xs sm:text-sm text-slate-500">
            Hear from our successful graduates who are now thriving in their dream careers.
          </p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {storyCards.map((story) => (
              <article
                key={story.title}
                className="overflow-hidden rounded-[22px] bg-white border border-slate-100/90 shadow-[0_8px_30px_rgba(0,0,0,0.03)] flex flex-col justify-between"
              >
                <div>
                  {/* Thumbnail */}
                  <div
                    onClick={() => setIsVideoModalOpen(true)}
                    className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100 cursor-pointer group"
                  >
                    <img
                      src={story.image}
                      alt={story.title}
                      className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/15 group-hover:bg-black/25 transition-colors" />
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsVideoModalOpen(true);
                      }}
                      className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#e31e24] shadow-lg transition-transform group-hover:scale-110"
                      aria-label={`Play story for ${story.title}`}
                    >
                      <svg className="ml-0.5 h-5 w-5 fill-current" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </button>
                    <div className="absolute left-3 bottom-3 bg-black/80 px-3 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider text-white">
                      SELECTED FOR INDIGO
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-6">
                    <div className="flex items-center gap-3">
                      <img
                        src={story.image}
                        alt={story.title}
                        className="h-10 w-10 rounded-full border border-slate-200 object-cover shrink-0"
                      />
                      <div>
                        <h3 className="text-sm font-extrabold text-[#11223f]">
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
              aria-label="Previous story"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>
            <button
              type="button"
              className="rounded-full bg-[#183a7d] hover:bg-[#122c60] text-white px-6 py-2.5 text-xs font-bold flex items-center gap-2 shadow-md transition-all"
            >
              <span>Next Story</span>
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* YouTube Video Modal Popup */}
      {isVideoModalOpen &&
        createPortal(
          <div
            onClick={() => setIsVideoModalOpen(false)}
            className="fixed inset-0 z-[99999] flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/80 backdrop-blur-lg w-screen h-screen"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl bg-black rounded-3xl overflow-visible shadow-2xl border border-white/10"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsVideoModalOpen(false)}
                className="absolute -top-4 -right-4 sm:-top-5 sm:-right-5 z-50 w-10 h-10 sm:w-12 sm:h-12 bg-white text-neutral-900 hover:bg-[#e31e24] hover:text-white rounded-full flex items-center justify-center text-lg sm:text-xl font-bold shadow-2xl transition-all duration-200 focus:outline-none cursor-pointer border-2 border-white/20 active:scale-95"
                aria-label="Close modal"
              >
                ✕
              </button>

              <div className="relative w-full pt-[56.25%] rounded-3xl overflow-hidden bg-black">
                <iframe
                  className="absolute inset-0 w-full h-full border-0 rounded-3xl"
                  src="https://www.youtube.com/embed/j04rbjw2B9M?si=0gO4vXb6kcrM3xO6&autoplay=1"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>,
          document.body
        )}
    </div>
  );
}
