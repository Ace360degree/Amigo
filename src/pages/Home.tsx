import React, { useState } from "react";
import heroCrew from "../assets/img/hero-crew.png";
import courseCabin from "../assets/img/course-cabin.png";
import courseGround from "../assets/img/course-ground.png";
import courseAi from "../assets/img/course-ai.png";
import differentClassroom from "../assets/img/different-classroom.png";

interface HomeProps {
  setCurrentPage: (page: string) => void;
}

export default function Home({ setCurrentPage }: HomeProps) {
  // Form states
  const [mobileNumber, setMobileNumber] = useState("");
  const [fullName, setFullName] = useState("");
  const [selectedCourse, setSelectedCourse] = useState("");
  const [selectedBranch, setSelectedBranch] = useState("");
  const [selectedAge, setSelectedAge] = useState("");
  const [selectedGender, setSelectedGender] = useState("");

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
    <div className="relative pb-16 bg-neutral-50">
      
      {/* Hero Section Container */}
      <section className="relative w-full min-h-[500px] lg:min-h-[600px] bg-white overflow-hidden flex items-center">
        
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
        <div className="max-w-7xl mx-auto w-full px-6 pt-12 pb-32 lg:py-24 relative z-20 grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Heading and Text */}
          <div className="lg:col-span-6 flex flex-col space-y-6 text-left items-start justify-center">
            
            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-sans font-extrabold tracking-tight text-[#0f2a4a] leading-[1.12]">
              Your Aviation Dream Starts Here
            </h1>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-sans max-w-xl">
              Air Hostess & Cabin Crew <span className="text-slate-400 font-bold mx-2">*</span> 
              Airport Ground Staff & Hospitality <span className="text-slate-400 font-bold mx-2">*</span> 
              Cruise Line & Hospitality Management <span className="text-slate-400 font-bold mx-2">*</span> 
              Digital Marketing <span className="text-slate-400 font-bold mx-2">*</span> 
              Cyber Security <span className="text-slate-400 font-bold mx-2">*</span> 
              AI & Data Science
            </p>

            <button
              onClick={() => {
                const element = document.getElementById("eligibilityForm");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-[#e31e24] hover:bg-[#c2141a] text-white font-sans font-bold text-xs sm:text-sm px-6 py-3.5 rounded-full shadow-md hover:shadow-lg transition-all active:scale-95 flex items-center gap-2 group focus:outline-none"
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
      <section id="eligibilityForm" className="max-w-7xl mx-auto w-full px-6 -mt-20 lg:-mt-28 relative z-30">
        <div className="bg-white rounded-3xl border border-neutral-100 shadow-xl p-6 sm:p-8 max-w-5xl mx-auto">
          <form onSubmit={handleApply} className="flex flex-col space-y-4">
            
            {/* Form Fields Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              
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
                  className="w-full bg-slate-50 border border-slate-100 focus:border-slate-300 focus:bg-white text-neutral-800 text-sm pl-11 pr-6 py-3.5 rounded-xl focus:outline-none transition-all placeholder-slate-400 font-semibold"
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
                  className="w-full bg-slate-50 border border-slate-100 focus:border-slate-300 focus:bg-white text-slate-700 text-sm pl-11 pr-8 py-3.5 rounded-xl focus:outline-none transition-all appearance-none cursor-pointer font-semibold"
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
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
              
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
                  className="w-full bg-slate-50 border border-slate-100 focus:border-slate-300 focus:bg-white text-slate-700 text-sm pl-11 pr-8 py-3.5 rounded-xl focus:outline-none transition-all appearance-none cursor-pointer font-semibold"
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
                  className="w-full bg-slate-50 border border-slate-100 focus:border-slate-300 focus:bg-white text-slate-700 text-sm pl-11 pr-8 py-3.5 rounded-xl focus:outline-none transition-all appearance-none cursor-pointer font-semibold"
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
                  className="w-full bg-slate-50 border border-slate-100 focus:border-slate-300 focus:bg-white text-slate-700 text-sm pl-11 pr-8 py-3.5 rounded-xl focus:outline-none transition-all appearance-none cursor-pointer font-semibold"
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
                className="w-full bg-[#f28580] hover:bg-[#e06c67] text-white font-sans font-bold text-sm py-3.5 px-6 rounded-xl transition-all duration-200 active:scale-95 shadow-sm hover:shadow-md flex items-center justify-center gap-2 focus:outline-none cursor-pointer whitespace-nowrap"
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
      <section className="max-w-7xl mx-auto w-full px-6 pt-10 pb-16 relative z-20">
        <div className="bg-[#1E417A] rounded-[2rem] shadow-[0_15px_30px_rgba(30,65,122,0.18)] py-8 px-6 max-w-5xl mx-auto text-white">
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
      <section className="max-w-7xl mx-auto w-full px-6 pt-8 pb-16 relative z-20">
        
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          
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
                onClick={() => setCurrentPage("contact")}
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
                onClick={() => setCurrentPage("contact")}
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
                onClick={() => setCurrentPage("contact")}
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
              onClick={() => setCurrentPage("services")}
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

        {/* Lower Banner Pill / Section Options CTA Box */}
        <div className="mt-16 bg-white border border-neutral-100 shadow-[0_15px_35px_rgba(0,0,0,0.03)] rounded-[2.5rem] p-6 sm:p-8 max-w-5xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex flex-col space-y-4 text-left max-w-2xl">
            <p className="text-[#0f2a4a] text-sm sm:text-base font-bold font-sans leading-relaxed">
              Choosing the right academy can decide your entire career. Join thousands who trusted Amigo and got placed.
            </p>
            {/* Pills Container */}
            <div className="flex flex-wrap gap-2">
              {["Verified Google Reviews", "Placement Support", "Govt Recognised", "6,000+ Students Trained"].map((pill, idx) => (
                <span key={idx} className="bg-slate-50 border border-slate-100 text-[#1e417a] text-[10px] sm:text-xs font-bold px-4 py-2 rounded-full font-sans transition-all hover:bg-slate-100">
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
            className="bg-[#e31e24] hover:bg-[#c2141a] text-white font-sans font-bold text-xs sm:text-sm px-6 py-4 rounded-2xl shadow-md hover:shadow-lg transition-all active:scale-95 flex items-center gap-2 group shrink-0"
          >
            Check My Batch & Placement Options
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </button>
        </div>

        {/* Lower Banner Limited Seats Pill */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 bg-[#fffbf0] border border-[#ffecd1] px-8 py-3.5 rounded-full shadow-[0_4px_10px_rgba(255,236,209,0.2)]">
            <span className="text-[#e31e24] font-bold text-xs sm:text-sm">✨</span>
            <span className="text-[#0b2f61] font-sans font-bold text-[10px] sm:text-xs tracking-wider uppercase">
              LIMITED SEATS — APPLY EARLY TO SECURE YOUR SPOT
            </span>
          </div>
        </div>

      </section>

    </div>
  );
}
