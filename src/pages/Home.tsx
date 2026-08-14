import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import heroCrew from "../assets/img/hero-crew.png";
import courseCabin from "../assets/img/course-cabin.png";
import courseGround from "../assets/img/course-ground.png";
import courseAi from "../assets/img/course-ai.png";
import differentClassroom from "../assets/img/different-classroom.png";

// Student Success Stories images
import Student1 from "../assets/img/Student1.png";
import Studentpf1 from "../assets/img/Studentpf1.png";
import Student2 from "../assets/img/Student2.png";
import Studentpf2 from "../assets/img/Studentpf2.png";
import Student3 from "../assets/img/Student3.png";
import Studentpf3 from "../assets/img/Studentpf3.png";
import Student4 from "../assets/img/Student4.png";
import Studentpf4 from "../assets/img/Studentpf4.png";
import Student5 from "../assets/img/Student5.png";
import Studentpf5 from "../assets/img/Studentpf5.png";

// Airline brand logo images
import brandAirIndia from "../assets/img/brandAirIndia.png";
import brandQatar from "../assets/img/brandQatar.png";
import brandEmirates from "../assets/img/brandEmirates.png";
import brandSpiceJet from "../assets/img/brandSpiceJet.png";
import brandVistara from "../assets/img/brandVistara.png";

// News and Updates images
import newsImage1 from "../assets/img/newsImage1.png";
import newsImage2 from "../assets/img/newsImage2.png";
import newsImage3 from "../assets/img/newsImage3.png";
import newsImage4 from "../assets/img/newsImage4.png";
import newsFeatured from "../assets/img/newsFeatured.png";

interface HomeProps {
  setCurrentPage?: (page: string) => void;
}

export default function Home({ setCurrentPage }: HomeProps = {}) {
  // Form states
  const [mobileNumber, setMobileNumber] = useState("");
  const [fullName, setFullName] = useState("");
  const [selectedCourse, setSelectedCourse] = useState("");
  const [selectedBranch, setSelectedBranch] = useState("");
  const [selectedAge, setSelectedAge] = useState("");
  const [selectedGender, setSelectedGender] = useState("");
  const [activeGuide, setActiveGuide] = useState("");
  const [activeFaq, setActiveFaq] = useState<number | null>(null);



  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    if (!mobileNumber || !fullName || !selectedCourse || !selectedBranch || !selectedAge || !selectedGender) {
      alert("Please fill in all required fields.");
      return;
    }
    alert(`Success! Application submitted for ${fullName}. We will contact you shortly.`);
  };

  const coursesList = [
    "Air Hostess & Cabin Crew",
    "Airport Ground Staff & Hospitality",
    "Cruise Line & Hospitality Management",
    "Digital Marketing",
    "Cyber Security",
    "AI & Data Science"
  ];

  const branchesList = [
    "Mumbai Ghatkopar",
    "Mumbai Andheri",
    "Thane"
  ];

  return (
    <div className="relative bg-neutral-50">

      {/* Hero Section Container */}
      <section className="relative w-full min-h-[440px] sm:min-h-[500px] lg:min-h-[600px] bg-white overflow-hidden flex items-center">

        {/* Right Background Image Container (Visible on large screens, faded behind overlay) */}
        <div className="absolute right-0 top-0 bottom-0 w-full lg:w-3/5 h-full z-0">
          {/* Faded background image */}
          <img
            src={heroCrew}
            alt="Amigo Academy Aviation Classroom"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Content Area */}
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 pt-10 sm:pt-12 pb-20 sm:pb-28 lg:py-24 relative z-20 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">

          {/* Left Column: Heading and Text */}
          <div className="lg:col-span-6 flex flex-col space-y-4 sm:space-y-6 text-left items-start justify-center max-w-xl">

            <h1 className="text-[2rem] leading-[1.05] sm:text-5xl lg:text-[54px] font-sans font-extrabold tracking-tight text-[#0f2a4a] sm:leading-[1.12] max-w-[12ch] sm:max-w-none">
              Your Aviation Dream Starts Here
            </h1>

            <p className="text-slate-600 text-xs sm:text-sm sm:text-base leading-relaxed font-sans max-w-md sm:max-w-xl">
              <span className="block sm:inline">Air Hostess & Cabin Crew</span>
              <span className="hidden sm:inline text-slate-400 font-bold mx-2">*</span>
              <span className="block sm:inline">Airport Ground Staff & Hospitality</span>
              <span className="hidden sm:inline text-slate-400 font-bold mx-2">*</span>
              <span className="block sm:inline">Cruise Line & Hospitality Management</span>
              <span className="hidden sm:inline text-slate-400 font-bold mx-2">*</span>
              <span className="block sm:inline">Digital Marketing</span>
              <span className="hidden sm:inline text-slate-400 font-bold mx-2">*</span>
              <span className="block sm:inline">Cyber Security</span>
              <span className="hidden sm:inline text-slate-400 font-bold mx-2">*</span>
              <span className="block sm:inline">AI & Data Science</span>
            </p>

            <button
              onClick={() => {
                const element = document.getElementById("eligibilityForm");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
              className="w-full sm:w-auto justify-center bg-[#e31e24] hover:bg-[#c2141a] text-white font-sans font-bold text-xs sm:text-sm px-5 sm:px-6 py-3.5 rounded-full shadow-md hover:shadow-lg transition-all active:scale-95 flex items-center gap-2 group focus:outline-none"
            >
              Enroll Now To Avail Scholarship
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </button>
          </div>

        </div>

      </section>

      {/* Floating Eligibility Form Card Section */}
      <section id="eligibilityForm" className="max-w-7xl mx-auto w-full px-4 sm:px-6 -mt-14 sm:-mt-20 lg:-mt-28 relative z-30">
        <div className="bg-white rounded-3xl border border-neutral-100 shadow-xl p-4 sm:p-6 lg:p-8 max-w-5xl mx-auto">
          <form onSubmit={handleApply} className="flex flex-col space-y-4">

            {/* Form Fields Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">

              {/* Mobile Number */}
              <div className="relative flex items-center">
                <span className="absolute left-4 text-slate-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </span>
                <input
                  type="tel"
                  required
                  placeholder="Mobile Number"
                  value={mobileNumber}
                  onChange={(e) => setMobileNumber(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-100 focus:border-slate-300 focus:bg-white text-neutral-800 text-sm pl-11 pr-6 py-3 rounded-xl focus:outline-none transition-all placeholder-slate-400 font-semibold"
                />
                <span className="absolute right-3.5 top-3.5 text-red-500 font-bold">*</span>
              </div>

              {/* Full Name */}
              <div className="relative flex items-center">
                <span className="absolute left-4 text-slate-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </span>
                <input
                  type="text"
                  required
                  placeholder="Full Name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-100 focus:border-slate-300 focus:bg-white text-neutral-800 text-sm pl-11 pr-6 py-3.5 rounded-xl focus:outline-none transition-all placeholder-slate-400 font-semibold"
                />
                <span className="absolute right-3.5 top-3.5 text-red-500 font-bold">*</span>
              </div>

              {/* Course select */}
              <div className="relative flex items-center">
                <span className="absolute left-4 text-slate-400 pointer-events-none">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  </svg>
                </span>
                <select
                  required
                  value={selectedCourse}
                  onChange={(e) => setSelectedCourse(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-100 focus:border-slate-300 focus:bg-white text-slate-700 text-sm pl-11 pr-8 py-3 rounded-xl focus:outline-none transition-all appearance-none cursor-pointer font-semibold"
                >
                  <option value="" disabled>Course</option>
                  {coursesList.map((c, i) => (
                    <option key={i} value={c}>{c}</option>
                  ))}
                </select>
                <span className="absolute right-7 text-red-500 font-bold pointer-events-none">*</span>
                <span className="absolute right-3.5 text-slate-400 pointer-events-none">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </div>

            </div>

            {/* Row 2 Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 items-center">

              {/* Branch select */}
              <div className="relative flex items-center">
                <span className="absolute left-4 text-slate-400 pointer-events-none">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </span>
                <select
                  required
                  value={selectedBranch}
                  onChange={(e) => setSelectedBranch(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-100 focus:border-slate-300 focus:bg-white text-slate-700 text-sm pl-11 pr-8 py-3 rounded-xl focus:outline-none transition-all appearance-none cursor-pointer font-semibold"
                >
                  <option value="" disabled>Branch</option>
                  {branchesList.map((b, i) => (
                    <option key={i} value={b}>{b}</option>
                  ))}
                </select>
                <span className="absolute right-7 text-red-500 font-bold pointer-events-none">*</span>
                <span className="absolute right-3.5 text-slate-400 pointer-events-none">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </div>

              {/* Age select */}
              <div className="relative flex items-center">
                <span className="absolute left-4 text-slate-400 pointer-events-none">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </span>
                <select
                  required
                  value={selectedAge}
                  onChange={(e) => setSelectedAge(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-100 focus:border-slate-300 focus:bg-white text-slate-700 text-sm pl-11 pr-8 py-3 rounded-xl focus:outline-none transition-all appearance-none cursor-pointer font-semibold"
                >
                  <option value="" disabled>Age</option>
                  <option value="17">17 Years</option>
                  <option value="18">18 Years</option>
                  <option value="19">19 Years</option>
                  <option value="20">20 Years</option>
                  <option value="21">21 Years</option>
                  <option value="22">22 Years</option>
                  <option value="23">23 Years</option>
                  <option value="24">24 Years</option>
                  <option value="25">25 Years</option>
                  <option value="26+">26+ Years</option>
                </select>
                <span className="absolute right-7 text-red-500 font-bold pointer-events-none">*</span>
                <span className="absolute right-3.5 text-slate-400 pointer-events-none">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </div>

              {/* Gender select */}
              <div className="relative flex items-center">
                <span className="absolute left-4 text-slate-400 pointer-events-none">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </span>
                <select
                  required
                  value={selectedGender}
                  onChange={(e) => setSelectedGender(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-100 focus:border-slate-300 focus:bg-white text-slate-700 text-sm pl-11 pr-8 py-3 rounded-xl focus:outline-none transition-all appearance-none cursor-pointer font-semibold"
                >
                  <option value="" disabled>Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
                <span className="absolute right-7 text-red-500 font-bold pointer-events-none">*</span>
                <span className="absolute right-3.5 text-slate-400 pointer-events-none">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </div>

              {/* Apply Button */}
              <button
                type="submit"
                className="w-full bg-[#f28580] hover:bg-[#e06c67] text-white font-sans font-bold text-sm py-3 px-6 rounded-xl transition-all duration-200 active:scale-95 shadow-sm hover:shadow-md flex items-center justify-center gap-2 focus:outline-none cursor-pointer whitespace-nowrap"
              >
                APPLY NOW
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </button>

            </div>

          </form>
        </div>
      </section>

      {/* Stats Counter Section */}
      <section className="max-w-7xl mx-auto w-full px-4 sm:px-6 pt-10 pb-16 relative z-20">
        <div className="bg-[#1E417A] rounded-[2rem] shadow-[0_15px_30px_rgba(30,65,122,0.18)] py-6 sm:py-8 px-4 sm:px-6 max-w-5xl mx-auto text-white">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-6 md:gap-y-0 items-center justify-center text-center">

            {/* Stat 1: Google Rating */}
            <div className="flex flex-col items-center justify-center border-r border-b border-white/10 pb-6 md:pb-0 md:border-b-0 md:border-r md:border-white/15">
              <span className="text-3xl sm:text-4xl font-extrabold text-[#DDAB30] tracking-tight flex items-center">
                4.6<span className="text-2xl sm:text-3xl ml-0.5 font-normal">★</span>
              </span>
              <span className="text-[10px] sm:text-xs font-bold tracking-widest text-slate-200 mt-2 uppercase">
                Google Rating
              </span>
            </div>

            {/* Stat 2: Students Trained */}
            <div className="flex flex-col items-center justify-center border-b border-slate-100/10 pb-6 md:pb-0 md:border-b-0 md:border-r md:border-white/15">
              <span className="text-3xl sm:text-4xl font-extrabold text-[#DDAB30] tracking-tight">
                10,000+
              </span>
              <span className="text-[10px] sm:text-xs font-bold tracking-widest text-slate-200 mt-2 uppercase">
                Students Trained
              </span>
            </div>

            {/* Stat 3: Hiring Partners */}
            <div className="flex flex-col items-center justify-center border-r border-white/10 pt-6 md:pt-0 md:border-r md:border-white/15">
              <span className="text-3xl sm:text-4xl font-extrabold text-[#DDAB30] tracking-tight">
                200+
              </span>
              <span className="text-[10px] sm:text-xs font-bold tracking-widest text-slate-200 mt-2 uppercase">
                Hiring Partners
              </span>
            </div>

            {/* Stat 4: Govt Certified */}
            <div className="flex flex-col items-center justify-center pt-6 md:pt-0">
              <span className="text-3xl sm:text-4xl font-extrabold text-[#DDAB30] tracking-tight">
                Govt
              </span>
              <span className="text-[10px] sm:text-xs font-bold tracking-widest text-slate-200 mt-2 uppercase">
                Certified
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* Popular Courses Section */}
      <section className="max-w-7xl mx-auto w-full px-4 sm:px-6 pt-8 pb-16 relative z-20">

        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f2a4a] leading-tight">
            Career-Ready Popular Courses
          </h2>
          <p className="text-slate-500 text-sm sm:text-base mt-3 leading-relaxed font-sans">
            Choose from our wide range of industry-leading programs designed for your success
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">

          {/* Card 1: Cabin Crew */}
          <div className="bg-white rounded-[2rem] border border-neutral-100 shadow-[0_12px_30px_rgba(0,0,0,0.03)] overflow-hidden flex flex-col justify-between group hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] transition-all duration-300">
            <div>
              <div className="w-full h-52 overflow-hidden relative">
                <img
                  src={courseCabin}
                  alt="Air Hostess / Cabin Crew Training"
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                />
              </div>
              <div className="p-6 sm:p-7 flex flex-col space-y-4">
                <h3 className="text-lg font-bold text-[#0f2a4a] leading-snug font-sans">
                  Air Hostess / Cabin Crew & Hospitality Management
                </h3>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-sans">
                  12-month air hostess & cabin crew training across Ghatkopar, Andheri, Thane & Pune. Professional grooming, aviation training, interview preparation & dedicated placement support with easy EMI and scholarships up to ₹50,000.
                </p>
              </div>
            </div>

            <div className="px-6 sm:px-7 pb-7 flex flex-col space-y-5">
              {/* Badges Grid */}
              <div className="grid grid-cols-2 gap-2 text-white">
                <div className="bg-[#1e417a] py-2 px-3 rounded-lg flex items-center gap-1.5 text-[10px] sm:text-xs font-semibold font-sans">
                  <svg className="w-3.5 h-3.5 min-w-[14px]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                  12 Months
                </div>
                <div className="bg-[#1e417a] py-2 px-3 rounded-lg flex items-center gap-1.5 text-[10px] sm:text-xs font-semibold font-sans">
                  <svg className="w-3.5 h-3.5 min-w-[14px]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                  5 Days a week
                </div>
                <div className="bg-[#1e417a] py-2 px-3 rounded-lg flex items-center gap-1.5 text-[10px] sm:text-xs font-semibold font-sans">
                  <svg className="w-3.5 h-3.5 min-w-[14px]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  2 Hours
                </div>
                <div className="bg-[#1e417a] py-2 px-3 rounded-lg flex items-center gap-1.5 text-[10px] sm:text-xs font-semibold font-sans truncate">
                  <svg className="w-3.5 h-3.5 min-w-[14px]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="5" />
                    <line x1="12" y1="1" x2="12" y2="3" />
                    <line x1="12" y1="21" x2="12" y2="23" />
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                    <line x1="1" y1="12" x2="3" y2="12" />
                    <line x1="21" y1="12" x2="23" y2="12" />
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                  </svg>
                  Morning / Afternoon...
                </div>
              </div>

              {/* Action Link */}
              <button
                onClick={() => setCurrentPage?.("contact")}
                className="text-[#1e417a] hover:text-[#0b2f61] font-bold text-xs sm:text-sm flex items-center gap-1 w-fit group/btn focus:outline-none transition-colors"
              >
                Explore Now
                <svg className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </button>
            </div>
          </div>

          {/* Card 2: Ground Staff */}
          <div className="bg-white rounded-[2rem] border border-neutral-100 shadow-[0_12px_30px_rgba(0,0,0,0.03)] overflow-hidden flex flex-col justify-between group hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] transition-all duration-300">
            <div>
              <div className="w-full h-52 overflow-hidden relative">
                <img
                  src={courseGround}
                  alt="Airport Ground Staff Training"
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                />
              </div>
              <div className="p-6 sm:p-7 flex flex-col space-y-4">
                <h3 className="text-lg font-bold text-[#0f2a4a] leading-snug font-sans">
                  Airport Ground Staff & Hospitality Management
                </h3>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-sans">
                  12-month Govt-certified airport ground staff training in Mumbai & Pune — check-in, boarding, baggage & customer service, with placement support and easy EMI.
                </p>
              </div>
            </div>

            <div className="px-6 sm:px-7 pb-7 flex flex-col space-y-5">
              {/* Badges Grid */}
              <div className="grid grid-cols-2 gap-2 text-white">
                <div className="bg-[#1e417a] py-2 px-3 rounded-lg flex items-center gap-1.5 text-[10px] sm:text-xs font-semibold font-sans">
                  <svg className="w-3.5 h-3.5 min-w-[14px]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                  12 Months
                </div>
                <div className="bg-[#1e417a] py-2 px-3 rounded-lg flex items-center gap-1.5 text-[10px] sm:text-xs font-semibold font-sans">
                  <svg className="w-3.5 h-3.5 min-w-[14px]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                  5 Days a Week
                </div>
                <div className="bg-[#1e417a] py-2 px-3 rounded-lg flex items-center gap-1.5 text-[10px] sm:text-xs font-semibold font-sans">
                  <svg className="w-3.5 h-3.5 min-w-[14px]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  2 Hours
                </div>
                <div className="bg-[#1e417a] py-2 px-3 rounded-lg flex items-center gap-1.5 text-[10px] sm:text-xs font-semibold font-sans truncate">
                  <svg className="w-3.5 h-3.5 min-w-[14px]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="5" />
                    <line x1="12" y1="1" x2="12" y2="3" />
                    <line x1="12" y1="21" x2="12" y2="23" />
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                    <line x1="1" y1="12" x2="3" y2="12" />
                    <line x1="21" y1="12" x2="23" y2="12" />
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                  </svg>
                  Morning / Afternoon...
                </div>
              </div>

              {/* Action Link */}
              <button
                onClick={() => setCurrentPage?.("contact")}
                className="text-[#1e417a] hover:text-[#0b2f61] font-bold text-xs sm:text-sm flex items-center gap-1 w-fit group/btn focus:outline-none transition-colors"
              >
                Explore Now
                <svg className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </button>
            </div>
          </div>

          {/* Card 3: AI & Data Science */}
          <div className="bg-white rounded-[2rem] border border-neutral-100 shadow-[0_12px_30px_rgba(0,0,0,0.03)] overflow-hidden flex flex-col justify-between group hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] transition-all duration-300">
            <div>
              <div className="w-full h-52 overflow-hidden relative">
                <img
                  src={courseAi}
                  alt="AI & Data Science Course"
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                />
              </div>
              <div className="p-6 sm:p-7 flex flex-col space-y-4">
                <h3 className="text-lg font-bold text-[#0f2a4a] leading-snug font-sans">
                  AI & Data Science with Generative AI & Machine Learning
                </h3>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-sans">
                  12-month AI & Data Science course in Ghatkopar, Andheri, Thane & Pune — Python, Generative AI, machine learning, real projects & placement support. Easy EMI and scholarships up to ₹50,000. Apply now.
                </p>
              </div>
            </div>

            <div className="px-6 sm:px-7 pb-7 flex flex-col space-y-5">
              {/* Badges Grid */}
              <div className="grid grid-cols-2 gap-2 text-white">
                <div className="bg-[#1e417a] py-2 px-3 rounded-lg flex items-center gap-1.5 text-[10px] sm:text-xs font-semibold font-sans">
                  <svg className="w-3.5 h-3.5 min-w-[14px]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                  12 Months
                </div>
                <div className="bg-[#1e417a] py-2 px-3 rounded-lg flex items-center gap-1.5 text-[10px] sm:text-xs font-semibold font-sans">
                  <svg className="w-3.5 h-3.5 min-w-[14px]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                  5 Days a Week
                </div>
                <div className="bg-[#1e417a] py-2 px-3 rounded-lg flex items-center gap-1.5 text-[10px] sm:text-xs font-semibold font-sans">
                  <svg className="w-3.5 h-3.5 min-w-[14px]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  2 hours/Day
                </div>
                <div className="bg-[#1e417a] py-2 px-3 rounded-lg flex items-center gap-1.5 text-[10px] sm:text-xs font-semibold font-sans truncate">
                  <svg className="w-3.5 h-3.5 min-w-[14px]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="5" />
                    <line x1="12" y1="1" x2="12" y2="3" />
                    <line x1="12" y1="21" x2="12" y2="23" />
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                    <line x1="1" y1="12" x2="3" y2="12" />
                    <line x1="21" y1="12" x2="23" y2="12" />
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                  </svg>
                  Morning / Afternoon...
                </div>
              </div>

              {/* Action Link */}
              <button
                onClick={() => setCurrentPage?.("contact")}
                className="text-[#1e417a] hover:text-[#0b2f61] font-bold text-xs sm:text-sm flex items-center gap-1 w-fit group/btn focus:outline-none transition-colors"
              >
                Explore Now
                <svg className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </button>
            </div>
          </div>

        </div>

        {/* Lower Banner Pill */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 bg-[#fffbf0] border border-[#ffecd1] px-6 py-3 rounded-full shadow-[0_4px_10px_rgba(255,236,209,0.2)]">
            <span className="text-[#e31e24] font-bold text-xs sm:text-sm">✨</span>
            <span className="text-[#0b2f61] font-sans font-bold text-[10px] sm:text-xs tracking-wider uppercase">
              Limited Seats — Apply Early To Secure Your Spot
            </span>
          </div>
        </div>

      </section>

      {/* What Makes Amigo Different Section */}
      <section className="max-w-7xl mx-auto w-full px-6 pt-10 pb-16 relative z-20">

        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f2a4a] leading-tight">
            What Makes Amigo Different?
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-6xl mx-auto">

          {/* Left Column: Difference items list */}
          <div className="lg:col-span-6 flex flex-col space-y-8">

            {/* Item 1 */}
            <div className="flex items-start space-x-4 text-left">
              <div className="w-12 h-12 rounded-2xl bg-blue-50/70 border border-blue-100/30 flex items-center justify-center text-indigo-900 shrink-0">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-[#1e417a]">
                  <circle cx="12" cy="8" r="5" />
                  <path d="M8.5 12.5L7 22l5-3 5 3-1.5-9.5" />
                </svg>
              </div>
              <div className="flex flex-col space-y-1">
                <h3 className="text-base sm:text-lg font-bold text-[#0f2a4a] flex items-center gap-1.5 font-sans">
                  <span>🎓</span> Maharashtra Govt Certified
                </h3>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-sans font-semibold">
                  Maharashtra Govt-certified — a recognized qualification trusted by employers across India.
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex items-start space-x-4 text-left">
              <div className="w-12 h-12 rounded-2xl bg-blue-50/70 border border-blue-100/30 flex items-center justify-center text-indigo-900 shrink-0">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-[#1e417a]">
                  <rect x="3" y="7" width="18" height="12" rx="2" />
                  <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                  <path d="M3 12h18" />
                </svg>
              </div>
              <div className="flex flex-col space-y-1">
                <h3 className="text-base sm:text-lg font-bold text-[#0f2a4a] flex items-center gap-1.5 font-sans">
                  <span>💼</span> Strong Placement Support
                </h3>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-sans font-semibold">
                  Active hiring connections across aviation and tech — including IndiGo, Air India, Emirates, Mumbai Airport and IT & AI companies. We push your profile until selected.
                </p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="flex items-start space-x-4 text-left">
              <div className="w-12 h-12 rounded-2xl bg-blue-50/70 border border-blue-100/30 flex items-center justify-center text-indigo-900 shrink-0">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-[#1e417a]">
                  <rect x="2" y="6" width="20" height="14" rx="2.5" />
                  <path d="M2 11h20" />
                </svg>
              </div>
              <div className="flex flex-col space-y-1">
                <h3 className="text-base sm:text-lg font-bold text-[#0f2a4a] flex items-center gap-1.5 font-sans">
                  <span>💳</span> Easy EMI Options
                </h3>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-sans font-semibold">
                  Scholarship up to ₹50,000 plus flexible zero-interest EMI on all courses. Quality education without financial pressure.
                </p>
              </div>
            </div>

            {/* Item 4 */}
            <div className="flex items-start space-x-4 text-left">
              <div className="w-12 h-12 rounded-2xl bg-blue-50/70 border border-blue-100/30 flex items-center justify-center text-indigo-900 shrink-0">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-[#1e417a]">
                  <path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M18.4 5.6l-2.8 2.8M8.4 15.6l-2.8 2.8" />
                </svg>
              </div>
              <div className="flex flex-col space-y-1">
                <h3 className="text-base sm:text-lg font-bold text-[#0f2a4a] flex items-center gap-1.5 font-sans">
                  <span>🤝</span> Lifetime Career Support
                </h3>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-sans font-semibold">
                  Support doesn't stop at graduation. Ongoing career counselling and job connections at every stage.
                </p>
              </div>
            </div>

            {/* Item 5 */}
            <div className="flex items-start space-x-4 text-left">
              <div className="w-12 h-12 rounded-2xl bg-blue-50/70 border border-blue-100/30 flex items-center justify-center text-indigo-900 shrink-0">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-[#1e417a]">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
              </div>
              <div className="flex flex-col space-y-1">
                <h3 className="text-base sm:text-lg font-bold text-[#0f2a4a] flex items-center gap-1.5 font-sans">
                  <span>💬</span> Free Career Counselling
                </h3>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-sans font-semibold">
                  Talk to an academy mentor today for free guidance on the right course and career path.
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Video Container */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-[2rem] overflow-visible shadow-[0_20px_50px_rgba(0,0,0,0.08)] bg-white max-w-lg mx-auto lg:max-w-none">

              {/* Classroom Image */}
              <div className="rounded-[2rem] overflow-hidden w-full h-[320px] sm:h-[400px]">
                <img
                  src={differentClassroom}
                  alt="Amigo Academy Different Classroom"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Video Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  onClick={() => alert("Playing academy video...")}
                  className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-full flex items-center justify-center shadow-2xl hover:scale-105 active:scale-95 transition-transform duration-300 focus:outline-none cursor-pointer"
                  aria-label="Play video"
                >
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-[#e31e24] fill-current ml-1" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
              </div>

              {/* Floating CTA Eligibility Button */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 md:left-10 md:translate-x-0 z-20 whitespace-nowrap">
                <button
                  onClick={() => {
                    const element = document.getElementById("eligibilityForm");
                    element?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="bg-[#e31e24] hover:bg-[#c2141a] text-white font-sans font-bold text-xs sm:text-sm px-6 sm:px-8 py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all active:scale-95 flex items-center gap-2 focus:outline-none"
                >
                  Check My Eligibility Now
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </button>
              </div>

            </div>
          </div>

        </div>

        {/* Lower Banner Pill */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-2 bg-[#fffbf0] border border-[#ffecd1] px-6 py-3 rounded-full shadow-[0_4px_10px_rgba(255,236,209,0.2)]">
            <span className="text-[#e31e24] font-bold text-xs sm:text-sm">✨</span>
            <span className="text-[#0b2f61] font-sans font-bold text-[10px] sm:text-xs tracking-wider uppercase">
              Limited Seats — Apply Early To Secure Your Spot
            </span>
          </div>
        </div>

      </section>

      {/* Scholarship Section */}
      <section className="max-w-7xl mx-auto w-full px-6 pt-10 pb-16 relative z-20">
        <div className="bg-[#1E417A] rounded-[2rem] shadow-[0_20px_50px_rgba(30,65,122,0.22)] py-12 px-6 sm:px-10 md:px-12 max-w-5xl mx-auto text-white text-center">

          {/* Header */}
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-wider font-sans uppercase">
            SCHOLARSHIP
          </h2>
          <p className="text-slate-100 text-sm sm:text-lg mt-3 font-semibold font-sans tracking-wide">
            Get Up to ₹50,000 Off Your Course Fee
          </p>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">

            {/* Block 1 */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col items-center justify-center text-center space-y-4">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                <svg className="w-5 h-5 text-[#DDAB30]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <span className="text-xs sm:text-sm font-bold leading-snug font-sans max-w-[150px]">
                Scholarship up to ₹50,000
              </span>
            </div>

            {/* Block 2 */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col items-center justify-center text-center space-y-4">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <rect x="2" y="6" width="20" height="14" rx="2" ry="2" />
                  <line x1="2" y1="11" x2="22" y2="11" />
                </svg>
              </div>
              <span className="text-xs sm:text-sm font-bold leading-snug font-sans max-w-[150px]">
                Zero-interest EMI
              </span>
            </div>

            {/* Block 3 */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col items-center justify-center text-center space-y-4">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="12" r="6" />
                  <circle cx="12" cy="12" r="2" />
                </svg>
              </div>
              <span className="text-xs sm:text-sm font-bold leading-snug font-sans max-w-[150px]">
                Available on all courses
              </span>
            </div>

            {/* Block 4 */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col items-center justify-center text-center space-y-4">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="16" x2="12" y2="12" />
                  <line x1="12" y1="8" x2="12.01" y2="8" />
                </svg>
              </div>
              <span className="text-xs sm:text-sm font-bold leading-snug font-sans max-w-[150px]">
                Limited per batch
              </span>
            </div>

          </div>

          {/* Red CTA Button */}
          <div className="mt-10">
            <button
              onClick={() => {
                const element = document.getElementById("eligibilityForm");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-[#e31e24] hover:bg-[#c2141a] text-white font-sans font-bold text-sm sm:text-base px-8 sm:px-12 py-4 rounded-2xl shadow-[0_8px_25px_rgba(227,30,36,0.35)] hover:shadow-[0_12px_30px_rgba(227,30,36,0.5)] transition-all active:scale-95 uppercase focus:outline-none"
            >
              CHECK MY ELIGIBILITY NOW &rarr;
            </button>
          </div>

          {/* Under-button Notice */}
          <div className="mt-8 flex items-center justify-center gap-1.5 text-[10px] sm:text-xs font-bold text-slate-300 uppercase tracking-wider font-sans">
            <span>✨</span>
            <span>🏛️</span>
            <span>Maharashtra Govt Certified &bull; Only aviation institute in maharashtra with govt certification</span>
          </div>

          {/* Link */}
          <div className="mt-4">
            <button
              onClick={() => setCurrentPage?.("services")}
              className="text-white hover:text-[#DDAB30] text-xs sm:text-sm font-bold underline transition-colors focus:outline-none"
            >
              View full scholarship details
            </button>
          </div>

        </div>

        {/* Lower Banner Pill */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-2 bg-[#fffbf0] border border-[#ffecd1] px-6 py-3 rounded-full shadow-[0_4px_10px_rgba(255,236,209,0.2)]">
            <span className="text-[#e31e24] font-bold text-xs sm:text-sm">✨</span>
            <span className="text-[#0b2f61] font-sans font-bold text-[10px] sm:text-xs tracking-wider uppercase">
              Limited Seats — Apply Early To Secure Your Spot
            </span>
          </div>
        </div>

      </section>

      {/* Google Reviews & Testimonials Section */}
      <section className="max-w-7xl mx-auto w-full px-6 pt-10 pb-16 relative z-20">

        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f2a4a] leading-tight">
            Trusted by 820+ Students on Google
          </h2>
          <p className="text-slate-500 text-sm sm:text-base mt-3 leading-relaxed font-sans font-semibold">
            Real reviews from trainees who built their careers with Amigoz Academy
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-7xl mx-auto items-stretch">

          {/* Column 1: Google Rating Info Card */}
          <div className="lg:row-span-2 bg-white rounded-3xl border border-neutral-100 shadow-[0_12px_30px_rgba(0,0,0,0.03)] p-8 flex flex-col justify-between items-start">
            <div>
              {/* Google Logo */}
              <div className="flex items-center gap-1">
                <svg className="w-24 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l3.66-2.85z" fill="#FBBC05" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.85c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                </svg>
              </div>

              {/* Search Box Style Pill */}
              <div className="relative w-full flex items-center bg-slate-50 border border-slate-100 rounded-full py-2 px-4 mt-6">
                <svg className="w-4 h-4 text-blue-500 mr-2.5 shrink-0" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <span className="text-[#0f2a4a] text-xs font-bold font-sans">
                  Amigoz Academy Courses
                </span>
              </div>

              {/* Star Text & Stars */}
              <h3 className="text-xl font-extrabold text-[#0f2a4a] mt-8 font-sans">
                4.6 Stars on google!
              </h3>

              <div className="flex gap-1 mt-2 text-[#0f2a4a]">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Review Info Text */}
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mt-6 font-semibold font-sans">
                Based on 1,200+ verified student reviews. Students consistently praise our placement support, practical training, and career guidance. See why students who trained with us are now flying with Emirates, IndiGo, Air India & major airports worldwide.
              </p>
            </div>

            <button
              onClick={() => window.open("https://www.google.com/search?q=Amigoz+Academy", "_blank")}
              className="w-full bg-[#e31e24] hover:bg-[#c2141a] text-white font-sans font-bold text-xs sm:text-sm py-3.5 rounded-full mt-8 flex items-center justify-center gap-2 group transition-all shadow-sm hover:shadow active:scale-95"
            >
              View all reviews on Google
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </button>
          </div>

          {/* 6 Review Cards */}
          {[
            {
              name: "Sakshi Pate",
              stars: 4,
              text: "I joined with zero aviation experience. Within 5 months I cleared interviews and got placed as Ground Staff at Mumbai Airport. The mock interviews helped a lot.",
              role: "Cabin Crew",
              airline: "Emirates",
              batch: "Batch 2024",
              date: "12 Jan 2026",
              initials: "SP",
              gradient: "from-[#1E417A] to-[#12284C]"
            },
            {
              name: "Sohail Shaikh",
              stars: 5,
              text: "Every class felt like real airline training. The placement team kept following up until I got selected. Totally worth the fees.",
              role: "Ground Staff Executive",
              airline: "Mumbai Airport",
              batch: "Batch 2025",
              date: "8 Jan 2026",
              initials: "SS",
              gradient: "from-[#e31e24] to-[#c2141a]"
            },
            {
              name: "Aasif Bate",
              stars: 5,
              text: "My parents trusted Amigo after seeing Google reviews and government recognition. I got my first job within 2 months of completing the course.",
              role: "Cabin Crew",
              airline: "SpiceJet",
              batch: "Batch 2024",
              date: "5 Jan 2026",
              initials: "AB",
              gradient: "from-[#DDAB30] to-[#b3861b]"
            },
            {
              name: "Sahil Ghag",
              stars: 5,
              text: "The faculty here is amazing. They really invest their time in your growth. Highly recommended for anyone wanting to join the aviation industry.",
              role: "Customer Service",
              airline: "Indigo",
              batch: "Batch 2025",
              date: "15 Jan 2026",
              initials: "SG",
              gradient: "from-teal-600 to-teal-800"
            },
            {
              name: "Kiran Tripathi",
              stars: 5,
              text: "Best academy in Mumbai for aviation courses. Their placement support is 100% genuine.",
              role: "Ticketing Executive",
              airline: "Air India",
              batch: "Batch 2024",
              date: "20 Jan 2026",
              initials: "KT",
              gradient: "from-purple-600 to-purple-800"
            },
            {
              name: "Swati Patil",
              stars: 5,
              text: "I am really thankful to Amigoz Academy for reshaping my career. Their communication classes really boosted my confidence.",
              role: "Ground Staff",
              airline: "Akasa Air",
              batch: "Batch 2024",
              date: "25 Jan 2026",
              initials: "SP",
              gradient: "from-[#1e417a] to-[#DDAB30]"
            }
          ].map((rev, idx) => (
            <div key={idx} className="bg-white rounded-3xl border border-neutral-100 shadow-[0_12px_30px_rgba(0,0,0,0.03)] p-6 sm:p-7 flex flex-col justify-between items-start space-y-6">

              <div className="w-full flex flex-col space-y-4">
                {/* Review Stars */}
                <div className="flex gap-0.5 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className={`w-4 h-4 ${i < rev.stars ? "fill-current" : "text-slate-200"}`} viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Review Quote Text */}
                <p className="text-[#0f2a4a] text-xs sm:text-sm font-bold font-sans leading-relaxed text-left">
                  "{rev.text}"
                </p>
              </div>

              {/* Reviewer Details Row */}
              <div className="w-full flex flex-col space-y-2 border-t border-slate-50 pt-4">
                <div className="flex items-center gap-3">
                  {/* Colored Gradient Avatar with Initials */}
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-tr ${rev.gradient} text-white flex items-center justify-center font-bold text-xs sm:text-sm shrink-0 shadow-sm`}>
                    {rev.initials}
                  </div>
                  <div className="flex flex-col text-left">
                    <h4 className="text-xs sm:text-sm font-bold text-[#0f2a4a] leading-tight">
                      {rev.name}
                    </h4>
                    <p className="text-slate-400 text-[10px] sm:text-xs font-semibold mt-0.5 leading-snug">
                      {rev.role} | {rev.airline} | {rev.batch}
                    </p>
                  </div>
                </div>
                <div className="text-left">
                  <span className="text-slate-400 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider pl-13">
                    Google Review &bull; {rev.date}
                  </span>
                </div>
              </div>

            </div>
          ))}

        </div>

      </section>
      <section className="w-full pb-16 relative z-20">
        <div className="mt-20 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-left">
          <div className="flex flex-col space-y-4 max-w-3xl">
            <p className="text-[#0f2a4a]/90 text-sm sm:text-base md:text-lg font-extrabold font-sans leading-normal">
              Choosing the right academy can decide your entire career. Join thousands who trusted Amigoz and got placed.
            </p>
            {/* Pills Container */}
            <div className="flex flex-wrap gap-2.5">
              {["Verified Google Reviews", "Placement Support", "Govt Recognised", "6,000+ Students Trained"].map((pill, idx) => (
                <span key={idx} className="bg-white border border-[#dbeafe] text-[#0f2a4a] text-xs font-bold px-5 py-2.5 rounded-full font-sans shadow-sm transition-all hover:bg-slate-50">
                  {pill}
                </span>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <button
            onClick={() => {
              const element = document.getElementById("eligibilityForm");
              element?.scrollIntoView({ behavior: "smooth" });
            }}
            className="bg-[#e31e24] hover:bg-[#c2141a] text-white font-sans font-bold text-sm sm:text-base px-8 py-4 rounded-full shadow-[0_8px_25px_rgba(227,30,36,0.25)] hover:shadow-[0_12px_30px_rgba(227,30,36,0.35)] transition-all active:scale-95 flex items-center gap-2 group shrink-0"
          >
            Check My Batch & Placement Options
            <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </button>
        </div>
      </section>


      {/* Student Success Stories Section */}
      <section className="max-w-7xl mx-auto w-full px-6 pt-16 pb-16 relative z-20">

        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f2a4a] leading-tight font-sans">
            Student Success Stories
          </h2>
          <p className="text-slate-500 text-sm sm:text-base mt-3 leading-relaxed font-sans font-semibold">
            Hear directly from our alumni who are now flying high in their careers.
          </p>
        </div>

        {/* Stories Flex Grid */}
        <div className="flex flex-wrap justify-center gap-8 max-w-7xl mx-auto">

          {[
            {
              name: "Jasmine Soni",
              role: "Cabin Crew Emirates",
              batch: "Aviation Batch 2023",
              quote: "Amigoz Air Hostess Academy completely transformed my career path. The practical training and expert guidance helped me land my dream job as a Cabin Crew Member within months of graduating.",
              videoImg: Student1,
              avatarImg: Studentpf1,
              badge: "SELECTED FOR INDIGO",
              overlayText: ""
            },
            {
              name: "Swati Patil",
              role: "Airport Ground Staff",
              batch: "Travel & Tourism 2022",
              quote: "The comprehensive curriculum covers every aspect of the industry. The instructors are real professionals who know what airlines are looking for. I am now happily working at International Airport.",
              videoImg: Student2,
              avatarImg: Studentpf2,
              badge: "",
              overlayText: "Swati Patil - Speak Up!"
            },
            {
              name: "Hardik Chari",
              role: "Gust Service Exclusive",
              batch: "Batch 2024",
              quote: "\"Gust Service Exclusive Course Mumbai — zero to high-paying job. Placement team is exceptional.\"",
              videoImg: Student3,
              avatarImg: Studentpf3,
              badge: "JOB ASSISTANCE",
              overlayText: ""
            },
            {
              name: "Isaac Edward",
              role: "Passenger Service Excusive",
              batch: "Batch 2025",
              quote: "ROHAN S. \"12-month course + placement team = best move after 12th. Got placed at Mumbai Airport within 5 months.\"",
              videoImg: Student4,
              avatarImg: Studentpf4,
              badge: "",
              overlayText: "Isaac Edward"
            },
            {
              name: "Ashwini Patil",
              role: "Cabin Crew",
              batch: "Batch 2024",
              quote: "Best air hostess course Mumbai — flying international in 5 months. Grooming and mock interviews made all the difference.",
              videoImg: Student5,
              avatarImg: Studentpf5,
              badge: "",
              overlayText: "Congratulations ASHWINI PATIL - Cabin Crew Vistara"
            }
          ].map((story, idx) => (
            <div key={idx} className="w-full md:w-[350px] lg:w-[370px] flex flex-col bg-white rounded-3xl border border-neutral-100 shadow-[0_12px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300">

              {/* Video Thumbnail frame */}
              <div className="relative w-full h-52 bg-slate-100 flex items-center justify-center">

                {/* Real video background image */}
                <img
                  src={story.videoImg}
                  alt={story.name}
                  className="absolute inset-0 w-full h-full object-cover rounded-t-3xl"
                />

                {/* Dark overlay mask */}
                <div className="absolute inset-0 bg-slate-900/20 rounded-t-3xl" />

                {/* Play Button Overlay */}
                <button
                  onClick={() => alert(`Playing video story of ${story.name}...`)}
                  className="relative z-10 w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-xl hover:scale-105 active:scale-95 transition-transform duration-200 cursor-pointer focus:outline-none"
                  aria-label="Play video"
                >
                  <svg className="w-5 h-5 text-[#e31e24] fill-current ml-0.5" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>

                {/* Badge Overlay */}
                {story.badge && (
                  <div className="absolute bottom-4 left-4 bg-black/60 text-white font-bold text-[9px] px-2 py-1 rounded tracking-wider uppercase">
                    {story.badge}
                  </div>
                )}

                {/* Video Title Text Overlay */}
                {story.overlayText && (
                  <div className="absolute bottom-4 left-4 max-w-[200px] text-left">
                    <span className="text-white/80 font-sans font-bold text-[10px] bg-black/40 px-2.5 py-1 rounded backdrop-blur-[2px] truncate block">
                      {story.overlayText}
                    </span>
                  </div>
                )}

                {/* Bottom-right overlapping avatar */}
                <div className="absolute -bottom-5 right-6 z-20 w-12 h-12 rounded-full border-4 border-white bg-white overflow-hidden shadow-md">
                  <img
                    src={story.avatarImg}
                    alt={story.name}
                    className="w-full h-full object-cover"
                  />
                </div>

              </div>

              {/* Text details content */}
              <div className="p-6 sm:p-7 pt-8 text-left flex flex-col space-y-4 flex-grow">
                <div>
                  <h3 className="text-base sm:text-lg font-extrabold text-[#0f2a4a] leading-tight">
                    {story.name}
                  </h3>
                  <p className="text-blue-600 font-bold text-[11px] sm:text-xs tracking-wide mt-1">
                    {story.role} <span className="text-slate-300 font-normal mx-1">•</span> {story.batch}
                  </p>
                </div>

                <div className="border-l-2 border-[#dbeafe] pl-3 flex-grow">
                  <p className="text-slate-500 font-semibold font-sans italic text-xs sm:text-sm leading-relaxed">
                    "{story.quote}"
                  </p>
                </div>
              </div>

            </div>
          ))}

        </div>
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 bg-[#fffbf0] border border-[#ffecd1] px-6 py-3 rounded-full shadow-[0_4px_10px_rgba(255,236,209,0.2)]">
            <span className="text-[#e31e24] font-bold text-xs sm:text-sm">✨</span>
            <span className="text-[#0b2f61] font-sans font-bold text-[10px] sm:text-xs tracking-wider uppercase">
              Limited Seats — Apply Early To Secure Your Spot
            </span>
          </div>
        </div>
      </section>

      {/* Career Guides & Advice Section */}
      <section className="max-w-4xl mx-auto w-full px-6 pt-16 pb-20 relative z-20">

        {/* Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-1.5 bg-[#eff6ff] border border-[#dbeafe] text-[#2563eb] text-[10px] sm:text-xs font-extrabold tracking-wider uppercase px-4 py-1.5 rounded-full">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499c.15-.427.76-.427.91 0l1.838 5.234 5.589.444c.456.036.638.6.291.902l-4.223 3.666 1.34 5.378c.11.442-.38.8-.755.536l-4.877-3.487-4.878 3.487c-.374.264-.866-.094-.755-.536l1.34-5.378-4.223-3.666c-.347-.302-.165-.866.291-.902l5.589-.444 1.838-5.234z" />
            </svg>
            Industry Insights
          </div>
        </div>

        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f2a4a] leading-tight font-sans">
            Career Guides & Advice
          </h2>
          <p className="text-slate-500 text-sm sm:text-base mt-3 leading-relaxed font-sans font-semibold">
            Expert tips and professional resources grouped by category to help you excel.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {[
            {
              id: "cabin-crew",
              title: "✈️ AIR HOSTESS / CABIN CREW",
              articles: [
                { title: "How to prepare for Cabin Crew interview in 2026", duration: "5 min read" },
                { title: "Essential grooming tips for airline recruitment", duration: "4 min read" },
                { title: "Cabin crew salary guide & career paths", duration: "6 min read" }
              ]
            },
            {
              id: "ai-data",
              title: "🤖 AI & DATA SCIENCE",
              articles: [
                { title: "Top 10 Generative AI skills demanded by employers", duration: "5 min read" },
                { title: "Building a standout portfolio as a Data Scientist", duration: "7 min read" },
                { title: "AI & Machine Learning certification roadmap", duration: "6 min read" }
              ]
            },
            {
              id: "ground-staff",
              title: "🛄 AIRPORT GROUND STAFF",
              articles: [
                { title: "Introduction to airport operations & customer services", duration: "4 min read" },
                { title: "What to expect as a Passenger Service Executive", duration: "5 min read" },
                { title: "Aviation security & check-in agent checklist", duration: "6 min read" }
              ]
            }
          ].map((cat) => {
            const isOpen = activeGuide === cat.id;
            return (
              <div key={cat.id} className="bg-white rounded-2xl border border-neutral-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] overflow-hidden transition-all duration-300">
                <button
                  onClick={() => setActiveGuide(isOpen ? "" : cat.id)}
                  className="w-full flex items-center justify-between p-5 hover:bg-slate-50/50 transition-colors focus:outline-none"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#eff6ff] flex items-center justify-center text-[#2563eb] shrink-0">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <span className="text-[#0f2a4a] text-sm sm:text-base font-extrabold font-sans tracking-wide">
                      {cat.title}
                    </span>
                  </div>
                  <svg className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Accordion panel content */}
                {isOpen && (
                  <div className="border-t border-slate-50 bg-slate-50/30 p-5 space-y-3">
                    {cat.articles.map((art, aIdx) => (
                      <div key={aIdx} className="flex items-center justify-between p-3 bg-white border border-neutral-100 rounded-xl hover:border-blue-100 hover:shadow-sm transition-all cursor-pointer group">
                        <span className="text-slate-700 font-semibold font-sans text-xs sm:text-sm group-hover:text-blue-600 transition-colors">
                          {art.title}
                        </span>
                        <span className="text-slate-400 font-bold text-[10px] sm:text-xs">
                          {art.duration}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Footer Link */}
        <div className="text-center mt-10">
          <button
            onClick={() => setCurrentPage?.("services")}
            className="text-[#1E417A] hover:text-[#0b2f61] font-bold text-xs sm:text-sm flex items-center gap-1.5 mx-auto group transition-colors focus:outline-none"
          >
            Explore All Industry Advice
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </section>

      {/* Our Students Work With Section */}
      <section className="max-w-7xl mx-auto w-full px-6 pt-12 pb-16 relative z-20">

        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f2a4a] leading-tight font-sans">
            Our Students Work With
          </h2>
          <p className="text-slate-500 text-sm sm:text-base mt-3 leading-relaxed font-sans font-semibold">
            Elite global brands that trust Amigoz graduates for their workforce needs.
          </p>
        </div>

        {/* Brands Logo Grid */}
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16 max-w-6xl mx-auto mb-16">
          {[
            { img: brandAirIndia, name: "Air India" },
            { img: brandQatar, name: "Qatar Airways" },
            { img: brandEmirates, name: "Emirates" },
            { img: brandSpiceJet, name: "SpiceJet" },
            { img: brandVistara, name: "Vistara" }
          ].map((brand, idx) => (
            <div key={idx} className="w-32 sm:w-40 h-16 flex items-center justify-center transition-transform hover:scale-105 duration-300">
              <img
                src={brand.img}
                alt={brand.name}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          ))}
        </div>

      </section>

      {/* Frequently Asked Questions Section */}
      <section className="max-w-4xl mx-auto w-full px-6 pt-16 pb-20 relative z-20">

        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f2a4a] leading-tight font-sans">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-500 text-sm sm:text-base mt-3 leading-relaxed font-sans font-semibold">
            Got questions? We've got answers. Find out everything you need to know about our courses.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4 max-w-3xl mx-auto">
          {[
            {
              q: "What salary can I expect after air hostess training.",
              a: "Graduates from our air hostess training program typically secure starting salaries between ₹4.5 Lakhs to ₹9 Lakhs per annum. International airlines offer even higher packages, and salary scales increase rapidly with experience and cabin rank."
            },
            {
              q: "What is the eligibility for air hostess course after 12th.",
              a: "Candidates must be between 17 to 26 years of age and have cleared their 10+2 examinations in any stream with a minimum aggregate of 50%. Good communication skills, a pleasing personality, and basic physical fitness are also required."
            },
            {
              q: "Which is the best air hostess course in Mumbai with placement support.",
              a: "Amigoz Academy offers the leading Gov-certified Air Hostess and Cabin Crew program in Mumbai. We provide intensive hands-on classroom training, professional grooming, mock interviews, and 100% genuine placement support until you are selected."
            },
            {
              q: "Best AI and Data Science course in Mumbai after 12th.",
              a: "Our 12-month AI & Data Science course is ideal for 12th graduates looking to enter tech. It features practical training in Python, Machine Learning, Generative AI, and databases, backed by placement support and flexible EMI options."
            },
            {
              q: "Do you provide placement for airport ground staff course.",
              a: "Yes, we have robust recruitment partnerships with major airlines and airport operators. Our dedicated placement cell arranges direct campus interviews with IndiGo, Air India, Emirates, SpiceJet, and Akasa Air to ensure rapid placements."
            },
            {
              q: "Are your courses government recognised with EMI options.",
              a: "Yes, our aviation and hospitality programs are Maharashtra Government certified. We offer transparent pricing with easy zero-interest EMI options, along with scholarship opportunities up to ₹50,000 to assist qualified students."
            },
            {
              q: "Best digital marketing or cyber security course in Mumbai.",
              a: "Our specialized academy programs in Digital Marketing and Cyber Security are designed by industry professionals. They combine core theoretical frameworks with real-world lab exercises, capstone projects, and resume-building support."
            },
            {
              q: "Do you have branches in Ghatkopar, Andheri, Thane and Pune.",
              a: "Yes, Amigoz Academy operates modern, fully-equipped training centers across Ghatkopar, Andheri, Thane, and Pune. All branches feature top-tier facilities, mock aircraft cabins, and experienced faculty."
            },
            {
              q: "How can I get free career counseling or scholarship information.",
              a: "To obtain free guidance or check your scholarship eligibility, simply fill out the registration form at the top of this page. One of our academy advisors will reach out to you to guide you step-by-step."
            }
          ].map((faq, idx) => {
            const isOpen = activeFaq === idx;
            return (
              <div key={idx} className="bg-white rounded-2xl border border-neutral-100 shadow-[0_4px_20px_rgba(0,0,0,0.015)] overflow-hidden transition-all duration-300">
                <button
                  onClick={() => setActiveFaq(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-slate-50/50 transition-colors focus:outline-none"
                >
                  <span className="text-[#0f2a4a] text-sm sm:text-base font-extrabold font-sans pr-4">
                    {faq.q}
                  </span>
                  <svg className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {isOpen && (
                  <div className="border-t border-slate-50 bg-slate-50/20 p-5">
                    <p className="text-slate-500 font-semibold font-sans text-xs sm:text-sm leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Latest News & Updates Section */}
      <section className="max-w-7xl mx-auto w-full px-6 pt-16 pb-20 relative z-20">

        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f2a4a] leading-tight font-sans">
            Latest News & Updates
          </h2>
          <p className="text-slate-500 text-sm sm:text-base mt-3 leading-relaxed font-sans font-semibold">
            Hear from our successful students, industry experts, and campus highlights shaping the future of aviation & hospitality careers.
          </p>
        </div>

        {/* Content Layout: 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto items-stretch">

          {/* Left Column: 4 Small Posts Grid (8 columns span on large screens) */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                img: newsImage1,
                title: "Cabin Crew Job Opportunities and...",
                desc: "Explore current airline hiring trends, career paths, and how...",
                meta: "08 MINUTES — PLACEMENT CELL"
              },
              {
                img: newsImage2,
                title: "Inside Our Training Campus: A Day in...",
                desc: "A look into our modern classrooms, practical sessions,...",
                meta: "06 MINUTES — CAMPUS LIFE"
              },
              {
                img: newsImage3,
                title: "Placement Day Highlights: Landing Your",
                desc: "See how students attend interviews and secure jobs with...",
                meta: "05 MINUTES — HR TEAM"
              },
              {
                img: newsImage4,
                title: "Life After Training: Alumni Success Stories",
                desc: "A glimpse into the professional lives of Amigoz graduates working",
                meta: "10 MINUTES — ALUMNI NETWORK"
              }
            ].map((post, idx) => (
              <div key={idx} className="flex gap-4 items-center bg-white p-4 rounded-2xl border border-neutral-100 shadow-[0_4px_20px_rgba(0,0,0,0.015)] hover:shadow-md transition-all duration-300">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden shrink-0">
                  <img
                    src={post.img}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col text-left space-y-1">
                  <h3 className="text-sm sm:text-base font-extrabold text-[#0f2a4a] leading-snug font-sans line-clamp-1">
                    {post.title}
                  </h3>
                  <p className="text-slate-400 text-xs leading-normal font-sans line-clamp-2">
                    {post.desc}
                  </p>
                  <span className="text-[9px] sm:text-[10px] font-bold text-slate-400 tracking-wider uppercase pt-1">
                    {post.meta}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Featured Post Card (4 columns span on large screens) */}
          <div className="lg:col-span-4 flex">
            <div className="relative w-full rounded-2xl overflow-hidden flex flex-col justify-end p-6 sm:p-8 min-h-[350px] lg:min-h-none bg-slate-900 group shadow-md hover:shadow-xl transition-all duration-300">
              {/* Background Image */}
              <img
                src={newsFeatured}
                alt="Featured Post"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {/* Overlay Mask */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent" />

              {/* Content Overlay */}
              <div className="relative z-10 text-left space-y-3">
                <h3 className="text-lg sm:text-xl font-extrabold text-white leading-snug font-sans">
                  Why 2026 Is The Best Time To Start Your Aviation Career
                </h3>
                <span className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
                  05 April 2026
                </span>
              </div>
            </div>
          </div>

        </div>

      </section>

      {/* Follow our Journey - Instagram Section */}
      <section className="max-w-7xl mx-auto w-full px-6 pt-12 pb-20 relative z-20">

        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f2a4a] leading-tight font-sans">
            Follow our Journey - Instagram
          </h2>
        </div>

        {/* Instagram Grid of 5 Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 max-w-6xl mx-auto items-stretch mb-16">
          {[
            { img: newsFeatured, type: "img" },
            { img: newsImage1, type: "img" },
            { img: newsImage2, type: "img" },
            { img: newsImage3, type: "img" },
            { type: "cta" }
          ].map((item, idx) => {
            if (item.type === "img") {
              return (
                <div key={idx} className="aspect-square rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-300 bg-slate-100 border border-neutral-100">
                  <img
                    src={item.img}
                    alt={`Instagram post ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              );
            } else {
              return (
                <a
                  key={idx}
                  href="https://instagram.com/amigozacademy"
                  target="_blank"
                  rel="noreferrer"
                  className="aspect-square rounded-2xl bg-[#1E417A] hover:bg-[#12284C] text-white flex flex-col items-center justify-center p-4 shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-300 cursor-pointer"
                >
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white mb-2 fill-none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499c.15-.427.76-.427.91 0l1.838 5.234 5.589.444c.456.036.638.6.291.902l-4.223 3.666 1.34 5.378c.11.442-.38.8-.755.536l-4.877-3.487-4.878 3.487c-.374.264-.866-.094-.755-.536l1.34-5.378-4.223-3.666c-.347-.302-.165-.866.291-.902l5.589-.444 1.838-5.234z" />
                  </svg>
                  <span className="text-[10px] sm:text-xs font-sans font-extrabold tracking-wide uppercase">
                    @amigozacademy
                  </span>
                </a>
              );
            }
          })}
        </div>

      </section>

      {/* Final Urgent CTA Section */}
      <section className="text-white py-20 px-6 relative overflow-hidden z-20 text-center" style={{ background: "linear-gradient(180deg, rgba(28, 57, 142, 0.2) 0%, rgba(28, 57, 142, 0) 100%), #0e264a" }}>

        {/* Subtle background light glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-5xl mx-auto relative z-10">

          {/* Limited Seats Banner */}
          <div className="inline-flex items-center gap-1.5 bg-white/5 border border-[#DDAB30]/30 text-[#DDAB30] text-[10px] sm:text-xs font-bold px-5 py-2.5 rounded-full tracking-wider uppercase">
            <span>⚡</span>
            <span>LIMITED SEATS PER BATCH — APPLY EARLY TO SECURE YOUR SPOT</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight max-w-4xl mx-auto mt-8 font-sans leading-tight text-white">
            2026 Batches Are Filling Fast — Don't Get Left Behind
          </h2>

          {/* Subtitle */}
          <p className="text-slate-300 text-sm sm:text-lg max-w-2xl mx-auto mt-4 font-sans font-medium">
            Admissions Open — Secure Your Seat Early. One free call is all it takes.
          </p>

          {/* Government Certification Badge */}
          <div className="inline-flex items-center gap-2 bg-white/5 border border-[#DDAB30]/30 text-[#DDAB30] text-[10px] sm:text-xs font-bold px-5 py-2.5 rounded-xl tracking-wide mt-8 font-sans">
            <span>🏛️</span>
            <span>Maharashtra Govt Certified — Only aviation institute in Maharashtra</span>
          </div>

          {/* Buttons Row */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12 max-w-4xl mx-auto">
            {/* Check Eligibility Red Button */}
            <button
              onClick={() => {
                const element = document.getElementById("eligibilityForm");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
              className="w-full sm:w-auto bg-[#e31e24] hover:bg-[#c2141a] text-white font-sans font-bold text-xs sm:text-sm px-8 py-4 rounded-xl shadow-[0_8px_25px_rgba(227,30,36,0.25)] hover:shadow-[0_12px_30px_rgba(227,30,36,0.35)] transition-all active:scale-95 flex items-center justify-center gap-2 uppercase tracking-wide cursor-pointer focus:outline-none"
            >
              <span>⚡</span> CHECK MY ELIGIBILITY NOW
            </button>

            {/* Start My Career Red Button */}
            <button
              onClick={() => {
                const element = document.getElementById("eligibilityForm");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
              className="w-full sm:w-auto bg-[#e31e24] hover:bg-[#c2141a] text-white font-sans font-bold text-xs sm:text-sm px-8 py-4 rounded-xl shadow-[0_8px_25px_rgba(227,30,36,0.25)] hover:shadow-[0_12px_30px_rgba(227,30,36,0.35)] transition-all active:scale-95 flex items-center justify-center gap-2 cursor-pointer focus:outline-none"
            >
              Start My Career
            </button>

            {/* WhatsApp Green Button */}
            <a
              href="https://wa.me/919987588932"
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto bg-[#22c55e] hover:bg-[#16a34a] text-white font-sans font-bold text-xs sm:text-sm px-8 py-4 rounded-xl shadow-[0_8px_25px_rgba(34,197,94,0.15)] hover:shadow-[0_12px_30px_rgba(34,197,94,0.25)] transition-all active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.197 1.489 4.887 1.491 5.43.003 9.85-4.415 9.854-9.845.002-2.63-1.023-5.101-2.883-6.963C16.643 1.975 14.178.953 11.56.951c-5.438 0-9.861 4.417-9.865 9.848-.001 1.83.49 3.618 1.447 5.191l-1.018 3.715 3.823-.997a9.833 9.833 0 0 0 4.692 1.246zm11.758-6.809c-.321-.16-.1.08-1.066-.403-.189-.094-.327-.14-.467.071-.14.212-.544.684-.667.825-.123.14-.246.155-.567-.005-.321-.16-1.354-.499-2.58-1.593-.952-.85-1.595-1.9-1.782-2.22-.187-.32-.02-.493.14-.652.144-.143.321-.377.482-.566.16-.19.214-.32.321-.53.111-.212.056-.397-.028-.557-.084-.16-.723-1.742-.99-2.385-.26-.628-.523-.544-.723-.554l-.615-.01c-.214 0-.56.08-.853.4-.294.32-1.123 1.101-1.123 2.685 0 1.585 1.152 3.118 1.312 3.33 1.16 2.01 2.5 3.01 4.49 3.81 2.76 1.11 3.52.89 4.79.7.77-.11 2.38-1.19 2.71-2.34.33-1.15.33-2.14.23-2.34-.1-.2-.36-.32-.68-.48z" />
              </svg>
              Chat on WhatsApp
            </a>
          </div>

          {/* Trust Markers */}
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 mt-12 text-slate-300 text-xs sm:text-sm font-bold font-sans">
            <div className="flex items-center gap-1.5">
              <span className="text-emerald-400">✓</span>
              <span>4.6 Google Rating</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-emerald-400">✓</span>
              <span>10,000+ Students</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-emerald-400">✓</span>
              <span>Govt Certified</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-emerald-400">✓</span>
              <span>200+ Hiring Partners</span>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
