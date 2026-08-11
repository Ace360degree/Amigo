import React, { useState } from "react";
import placementStudent1 from "../assets/img/placementstudent1.png";
import placementStudent2 from "../assets/img/placementstudent2.png";
import placementStudent3 from "../assets/img/placementstudent3.png";
import placementStudent4 from "../assets/img/placementstudent4.png";
import placementStudent5 from "../assets/img/placementstudent5.png";
import placementStudent6 from "../assets/img/placementstudent6.png";
import placementStudent7 from "../assets/img/placementstudent7.png";
import placementStudent8 from "../assets/img/placementstudent8.png";
import placementStudent9 from "../assets/img/placementstudent9.png";
import placementIcon1 from "../assets/img/placementicon1.png";
import placementIcon2 from "../assets/img/placementicon2.png";
import placementIcon3 from "../assets/img/placementicon3.png";
import placementIcon4 from "../assets/img/placementicon4.png";
import placementIcon5 from "../assets/img/placementicon5.png";
import placementIcon6 from "../assets/img/placementicon6.png";
import Studentimg1 from "../assets/img/Studentimg1.png";
import Studentimg2 from "../assets/img/Studentimg2.png";
import Studentimg3 from "../assets/img/Studentimg3.png";
import placementIcons1 from "../assets/img/placementicons1.png";
import placementIcons2 from "../assets/img/placementicons2.png";
import placementIcons3 from "../assets/img/placementicons3.png";
import placementIcons4 from "../assets/img/placementicons4.png";
import placementIcons5 from "../assets/img/placementicons5.png";
import placementIcons6 from "../assets/img/placementicons6.png";

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className={`bg-white border rounded-2xl overflow-hidden transition-all duration-300 ${isOpen
        ? "border-[#0b2f61]/20 shadow-[0_4px_20px_rgba(0,0,0,0.06)]"
        : "border-neutral-200/60 shadow-sm"
        }`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-6 py-5 text-left cursor-pointer group"
      >
        <span className="text-sm sm:text-[15px] font-outfit font-bold text-[#0b2f61] pr-4">
          {question}
        </span>
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
        <div className="px-6 pb-5 border-t border-neutral-100">
          <p className="text-neutral-500 font-sans text-xs sm:text-[13px] leading-relaxed pt-4">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Placement() {
  const statistics = [
    { number: "10,000+", label: "Students Placed Successfully" },
    { number: "100%", label: "Placement Assistance Guarantee" },
    { number: "150+", label: "Global Airlines & Tech Recruiters" },
    { number: "₹4.5L - ₹9.2L", label: "Average Starting Salary Range" },
  ];

  const placedStudents = [
    {
      name: "Vikat Gokhale",
      role: "Ground Staff — Customer Service",
      company: "Akasa Air",
      branch: "Andheri Branch",
      year: "Placed 2015",
      quote: "The mock interviews made the real airline round feel familiar.",
      image: placementStudent1,
    },
    {
      name: "Waqas Shaikh",
      role: "Ground Staff — Customer Service",
      company: "Air India",
      branch: "Ghatkopar Branch",
      year: "Placed 2025",
      quote: "My trainer pushed my profile until I got the offer letter.",
      image: placementStudent2,
    },
    {
      name: "Reema Mascarenhas",
      role: "Cabin Crew",
      company: "Air India",
      branch: "Thane Branch",
      year: "Placed 2024",
      quote: "Grooming sessions changed how I carried myself in the interview.",
      image: placementStudent3,
    },
    {
      name: "Mehwish Sayyed",
      role: "Airport Ground Staff",
      company: "Indigo",
      branch: "Ghatkopar Branch",
      year: "Placed 2025",
      quote: "The mock interviews made the real airline round feel familiar.",
      image: placementStudent4,
    },
    {
      name: "Vrihikesh Gore",
      role: "Junior Data Analyst",
      company: "ITC Maratha Mumbai",
      branch: "Andheri Branch",
      year: "Placed 2025",
      quote: "The AI & Data Science projects were exactly what recruiters asked about.",
      image: placementStudent5,
    },
    {
      name: "Fatima Shaikh",
      role: "Cabin Crew",
      company: "Emirates",
      branch: "Ghatkopar Branch",
      year: "Placed 2024",
      quote: "English communication classes got me through the Emirates assessment.",
      image: placementStudent6,
    },
    {
      name: "Bhumika Jadhav",
      role: "Cabin Crew",
      company: "Akasa Air",
      branch: "Thane Branch",
      year: "Placed 2024",
      quote: "The mock interviews made the real airline round feel familiar.",
      image: placementStudent7,
    },
    {
      name: "Danish Dafadar",
      role: "Ramp & Ground Operations",
      company: "Adani Electricity",
      branch: "Andheri Branch",
      year: "Placed 2025",
      quote: "Practical airport training made day one at work easy.",
      image: placementStudent8,
    },
    {
      name: "Samir Ovhal",
      role: "AI Support Engineer",
      company: "The Oberoi Group",
      branch: "Ghatkopar Branch",
      year: "Placed 2024",
      quote: "Resume help and mock rounds got me shortlisted in three weeks.",
      image: placementStudent9,
    },
  ];

  const hiringPartners = [
    "IndiGo",
    "Air India",
    "Akasa Air",
    "Emirates",
    "SpiceJet",
    "Mumbai Airport",
    "AirAsia",
    "Vistara",
    "AISATS",
    "Quantiphi",
    "TCS",
    "Infosys",
  ];
  const journeySteps = [
    {
      number: "01",
      title: "Admission",
      description: "Counselling, eligibility check and the right program for your profile.",
    },
    {
      number: "02",
      title: "Training",
      description: "Aviation and technology fundamentals taught by industry trainers.",
    },
    {
      number: "03",
      title: "Soft Skills",
      description: "Spoken English, etiquette, grooming and on-floor confidence.",
    },
    {
      number: "04",
      title: "Interview Preparation",
      description: "Airline-specific questions, group discussions and profile building.",
    },
    {
      number: "05",
      title: "Mock Interviews",
      description: "Real panel simulations with feedback after every round.",
    },
    {
      number: "06",
      title: "Placement Support",
      description: "Profile shared with 200+ hiring partners and drive scheduling.",
    },
    {
      number: "07",
      title: "Final Selection",
      description: "Offer letter, documentation guidance and joining support.",
    },
  ];

  const supportFeatures = [
    {
      title: "Resume Building",
      description: "Aviation-format resumes and profiles recruiters actually shortlist.",
      icon: placementIcon1,
    },
    {
      title: "Interview Training",
      description: "Answer structure, body language and panel handling practice.",
      icon: placementIcon2,
    },
    {
      title: "Grooming",
      description: "Uniform standards, personal presentation and airline grooming norms.",
      icon: placementIcon3,
    },
    {
      title: "Communication Skills",
      description: "Spoken English, clarity, announcements and passenger handling.",
      icon: placementIcon4,
    },
    {
      title: "Airline Interview Practice",
      description: "Company-wise rounds for IndiGo, Air India, Akasa and more.",
      icon: placementIcon5,
    },
    {
      title: "Career Guidance",
      description: "Long-term growth mapping across cabin crew, ground and tech roles.",
      icon: placementIcon6,
    },
  ];

  const videoStories = [
    {
      name: "Sneha Kulkarni",
      role: "Cabin Crew · 2025",
      company: "IndiGo",
      description: "From a Borivali classroom to her first flight — Sneha talks about the grooming and interview rounds that got her selected.",
      image: Studentimg1,
    },
    {
      name: "Rohit Sawant",
      role: "Ground Staff · 2025",
      company: "Mumbai Airport",
      description: "Rohit explains how practical airport training and mock rounds helped him clear a ground-handling interview.",
      image: Studentimg2,
    },
    {
      name: "Sanjana Rao",
      role: "AI Support Engineer · 2025",
      company: "TCS",
      description: "Sanjana shares how the AI & Data Science track and placement support led to her first tech role.",
      image: Studentimg3,
    },
  ];

  const recruiterFeatures = [
    {
      title: "Industry-ready training",
      description: "Syllabus built around live airline and employer hiring requirements.",
      icon: placementIcons1,
    },
    {
      title: "Professional grooming",
      description: "Students arrive at interviews meeting airline presentation standards.",
      icon: placementIcons2,
    },
    {
      title: "Communication skills",
      description: "Clear, confident English for passengers, panels and teams.",
      icon: placementIcons3,
    },
    {
      title: "Practical learning",
      description: "Cabin mock-ups, airport visits and real tools instead of theory only.",
      icon: placementIcons4,
    },
    {
      title: "Confidence building",
      description: "Repeated stage practice, group discussions and feedback loops.",
      icon: placementIcons5,
    },
    {
      title: "Placement support",
      description: "A dedicated team that follows every profile until final selection.",
      icon: placementIcons6,
    },
  ];

  return (
    <div className="flex flex-col">

      {/* Placements Hero Section */}
      <section className="w-full bg-[#f1f5f9] h-[650px] relative overflow-hidden flex items-center border-b border-neutral-200/50">
        {/* Split Background Image on the Right */}
        <div className="absolute top-0 right-0 h-full w-full lg:w-[42%] z-0">
          <img
            src={new URL("../assets/img/placementhero.png", import.meta.url).href}
            alt="Student Placements Success"
            className="h-full w-full object-cover object-top lg:object-[35%_top]"
            onError={(e) => {
              e.currentTarget.src = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#f1f5f9] from-0% via-[#f1f5f9]/30 via-[18%] to-transparent to-[38%] z-10 lg:block hidden" />
          <div className="absolute inset-0 bg-[#f1f5f9]/40 z-10 lg:hidden block" />
        </div>

        {/* Content Container */}
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 md:px-8 relative z-20 flex items-center h-full">
          <div className="max-w-[520px] space-y-6 text-left">
            <h1 className="text-4xl sm:text-[48px] font-outfit font-extrabold text-[#0b2f61] leading-[1.1] tracking-tight">
              Our Student Placements<br />&amp; Success Stories
            </h1>
            <p className="text-neutral-500 font-sans font-semibold text-xs sm:text-[13px] leading-relaxed">
              Air Hostess &amp; Cabin Crew * Airport Ground Staff &amp; Hospitality * Cruise Line &amp; Hospitality Management * Digital Marketing * Cyber Security * AI &amp; Data Science
            </p>
            <div className="pt-2">
              <a
                href="#enquiry-form"
                style={{ backgroundColor: "#e31e24", color: "#ffffff" }}
                className="inline-flex items-center justify-center gap-2 text-xs sm:text-sm font-bold px-6 py-3.5 rounded-full transition-colors shadow-[0_8px_20px_rgba(227,30,36,0.15)] hover:bg-[#c2141a]"
              >
                Enroll Now To Avail Scholarship &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Counter Section */}
      <section className="w-full bg-[#f8fafc] py-12 border-y border-neutral-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {statistics.map((stat, i) => (
              <div
                key={i}
                className="bg-white border border-neutral-200/60 rounded-2xl p-6 text-center shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-300"
              >
                <p className="text-3xl sm:text-4xl font-outfit font-extrabold text-[#0b2f61] mb-2">
                  {stat.number}
                </p>
                <p className="text-neutral-500 text-xs sm:text-sm font-semibold">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Placements Grid Section */}
      <section className="w-full bg-[#f8fafc] py-20 border-t border-neutral-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 w-full flex flex-col items-center space-y-12">
          <div className="text-center space-y-4">
            <span className="inline-block bg-amber-50 text-amber-800 text-[10px] font-extrabold uppercase px-4 py-1.5 rounded-full tracking-wider border border-amber-200/40">
              Real Students - Real Offers
            </span>
            <h2 className="text-3xl sm:text-[38px] font-outfit font-black text-[#0b2f61] leading-tight">
              Where Our Students Are Working Today
            </h2>
            <p className="text-neutral-500 font-sans font-semibold text-xs sm:text-[13px] max-w-xl mx-auto leading-relaxed">
              Each placement below is a named Amigoz Academy student, shared with their consent — with branch, employer, role and year.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
            {placedStudents.map((student, idx) => (
              <div
                key={idx}
                className="bg-white border border-neutral-200/60 rounded-3xl p-5 flex flex-col space-y-4 shadow-sm hover:shadow-md transition-shadow relative text-left"
              >
                {/* Image Container */}
                <div className="relative w-full h-[260px] bg-neutral-50 rounded-2xl overflow-hidden">
                  <img
                    src={student.image}
                    alt={student.name}
                    className="w-full h-full object-cover"
                  />

                  {/* PLACED badge */}
                  <div className="bg-[#10b981] text-white text-[9px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full absolute top-3.5 left-3.5 flex items-center gap-1.5 shadow-sm">
                    <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                    Placed
                  </div>

                  {/* Company Badge */}
                  <div className="bg-white/95 backdrop-blur-sm text-[10px] font-bold text-neutral-800 px-3 py-1 rounded-full absolute bottom-3.5 right-3.5 shadow-sm border border-neutral-100/50">
                    {student.company}
                  </div>
                </div>

                {/* Student Info */}
                <div className="space-y-1 px-1">
                  <h3 className="text-lg font-outfit font-extrabold text-[#0b2f61]">
                    {student.name}
                  </h3>
                  <p className="text-xs font-bold text-red-600 uppercase tracking-wide">
                    {student.role}
                  </p>

                  <div className="flex items-center gap-4 text-[11px] text-neutral-400 font-semibold pt-1">
                    <span className="flex items-center gap-1">
                      📍 {student.branch}
                    </span>
                    <span className="flex items-center gap-1">
                      📅 {student.year}
                    </span>
                  </div>
                </div>

                {/* Quote Block */}
                <div className="bg-[#f4f7fa] rounded-xl p-3.5 relative flex gap-2">
                  <span className="text-[#dfaa29] text-xl font-serif leading-none mt-1">“</span>
                  <p className="text-neutral-600 text-xs italic font-medium leading-relaxed">
                    {student.quote}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action Button */}
          <div className="pt-6">
            <a
              href="#enquiry-form"
              className="inline-flex items-center justify-center border border-amber-500/30 bg-[#fffbeb] hover:bg-[#fef3c7] text-amber-900 font-sans font-bold text-xs sm:text-[13px] px-8 py-3.5 rounded-full transition-all shadow-sm hover:shadow active:scale-95"
            >
              I Want To Be On This Page
            </a>
          </div>
        </div>
      </section>

      {/* Airlines & Companies Hiring Grid Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 w-full flex flex-col items-center space-y-12 pb-16">
        <div className="text-center space-y-4">
          <span className="inline-block bg-amber-50 text-amber-800 text-[10px] font-extrabold uppercase px-4 py-1.5 rounded-full tracking-wider border border-amber-200/40">
            200+ Hiring Partners
          </span>
          <h2 className="text-3xl sm:text-[38px] font-outfit font-black text-[#0b2f61] leading-tight">
            Airlines &amp; Companies That Hire Our Students
          </h2>
          <p className="text-neutral-500 font-sans font-semibold text-xs sm:text-[13px] max-w-xl mx-auto leading-relaxed">
            From full-service and low-cost carriers to airport ground handling and technology employers.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-5xl">
          {hiringPartners.map((partner, idx) => (
            <div
              key={idx}
              className="bg-white border border-neutral-200/60 rounded-2xl py-7 px-4 text-center font-sans font-extrabold text-[#4b5563] text-sm sm:text-base tracking-wide shadow-sm hover:shadow hover:border-neutral-300 hover:-translate-y-0.5 transition-all duration-300"
            >
              {partner}
            </div>
          ))}
        </div>

        <p className="text-[10px] sm:text-xs text-neutral-400 font-medium max-w-2xl text-center leading-relaxed mt-4">
          Company names are listed as employers where Amigoz Academy students have been placed or where hiring drives are conducted. All trademarks belong to their respective owners.
        </p>
      </section>

      {/* Your Placement Journey, Step By Step Section */}
      <section className="w-full bg-[#f8fafc] py-20 border-t border-neutral-200/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 w-full flex flex-col items-center space-y-12">
          <div className="text-center space-y-4">
            <span className="inline-block bg-amber-50 text-amber-800 text-[10px] font-extrabold uppercase px-4 py-1.5 rounded-full tracking-wider border border-amber-200/40">
              The Amigoz Path
            </span>
            <h2 className="text-3xl sm:text-[38px] font-outfit font-black text-[#0b2f61] leading-tight">
              Your Placement Journey, Step By Step
            </h2>
            <p className="text-neutral-500 font-sans font-semibold text-xs sm:text-[13px] max-w-xl mx-auto leading-relaxed">
              A structured path from your first counselling session to your final selection.
            </p>
          </div>

          {/* Timeline Container */}
          <div className="relative w-full flex flex-col space-y-6 pt-4">
            {/* Connecting Vertical Line */}
            <div className="absolute left-[23px] sm:left-[27px] top-6 bottom-6 w-[2px] bg-neutral-200 z-0" />

            {journeySteps.map((step, idx) => (
              <div key={idx} className="relative flex items-center w-full z-10">
                {/* Number Badge Container */}
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#0b2f61] text-white flex items-center justify-center font-outfit font-bold text-sm sm:text-base shadow-sm shrink-0">
                  {step.number}
                </div>

                {/* Card Container */}
                <div className="flex-1 bg-white border border-neutral-200/60 rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow transition-shadow text-left ml-4 sm:ml-6">
                  <h3 className="text-base sm:text-lg font-outfit font-extrabold text-[#0b2f61] mb-1">
                    {step.title}
                  </h3>
                  <p className="text-neutral-500 font-sans font-semibold text-xs sm:text-[13px] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do To Get You Selected Section */}
      <section className="w-full bg-[#f8fafc] py-20 border-t border-neutral-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 w-full flex flex-col items-center space-y-12">
          <div className="text-center space-y-4">
            <span className="inline-block bg-amber-50 text-amber-800 text-[10px] font-extrabold uppercase px-4 py-1.5 rounded-full tracking-wider border border-amber-200/40">
              Placement Support
            </span>
            <h2 className="text-3xl sm:text-[38px] font-outfit font-black text-[#0b2f61] leading-tight">
              What We Do To Get You Selected
            </h2>
            <p className="text-neutral-500 font-sans font-semibold text-xs sm:text-[13px] max-w-xl mx-auto leading-relaxed">
              Support that continues after the syllabus ends — until you have an offer letter in hand.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            {supportFeatures.map((feat, idx) => (
              <div
                key={idx}
                className="bg-white border border-neutral-200/60 rounded-3xl p-6 flex flex-col items-start text-left space-y-4 shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-300 relative"
              >
                {/* Icon Container */}
                <div className="w-16 h-16 rounded-full bg-[#f0f5fa] flex items-center justify-center shrink-0 overflow-hidden">
                  <img
                    src={feat.icon}
                    alt={feat.title}
                    className="w-full h-full object-contain p-2.5"
                  />
                </div>

                {/* Text details */}
                <div className="space-y-1.5">
                  <h3 className="text-base sm:text-lg font-outfit font-extrabold text-[#0b2f61]">
                    {feat.title}
                  </h3>
                  <p className="text-neutral-500 font-sans font-semibold text-xs sm:text-[13px] leading-relaxed">
                    {feat.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hear It From Our Placed Students (Video Success Stories) */}
      <section className="w-full bg-slate-50 py-20 border-t border-neutral-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 w-full flex flex-col items-center space-y-12">
          <div className="text-center space-y-4">
            <span className="inline-block bg-amber-50 text-amber-800 text-[10px] font-extrabold uppercase px-4 py-1.5 rounded-full tracking-wider border border-amber-200/40">
              Student Success Stories
            </span>
            <h2 className="text-3xl sm:text-[38px] font-outfit font-black text-[#0b2f61] leading-tight">
              Hear It From Our Placed Students
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            {videoStories.map((story, idx) => (
              <div
                key={idx}
                className="bg-white border border-neutral-200/80 rounded-3xl p-5 flex flex-col space-y-4 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-md hover:-translate-y-1 transition-all duration-300 relative text-left"
              >
                {/* Image Container with Play Overlay */}
                <div className="relative w-full h-[220px] bg-neutral-50 rounded-2xl overflow-hidden group">
                  <img
                    src={story.image}
                    alt={story.name}
                    className="w-full h-full object-cover"
                  />

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 bg-black/10 z-0 group-hover:bg-black/20 transition-colors duration-300" />
                  <div className="w-14 h-14 rounded-full bg-[#e31e24] flex items-center justify-center text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-lg cursor-pointer hover:scale-110 active:scale-95 transition-transform duration-300 z-10">
                    {/* SVG Triangle Play Icon */}
                    <svg
                      className="w-5 h-5 fill-current ml-1"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>

                  {/* Company Badge */}
                  <div className="bg-white/95 backdrop-blur-sm text-[10px] font-bold text-neutral-800 px-3 py-1 rounded-full absolute bottom-3.5 left-3.5 shadow-sm border border-neutral-100/50 z-10">
                    {story.company}
                  </div>
                </div>

                {/* Info & Description */}
                <div className="flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-1 px-1">
                    <h3 className="text-lg font-outfit font-extrabold text-[#0b2f61]">
                      {story.name}
                    </h3>
                    <p className="text-xs font-bold text-red-600 uppercase tracking-wide">
                      {story.role}
                    </p>
                    <p className="text-neutral-500 font-sans font-semibold text-xs sm:text-[13px] leading-relaxed pt-2">
                      {story.description}
                    </p>
                  </div>

                  {/* Watch Story Button */}
                  <div className="pt-2">
                    <button className="w-full py-2.5 border border-[#0b2f61]/25 hover:border-[#0b2f61] text-[#0b2f61] font-sans font-bold text-xs sm:text-[13px] rounded-full flex items-center justify-center gap-2 hover:bg-[#0b2f61]/5 transition-all">
                      {/* Play outline icon */}
                      <svg
                        className="w-4 h-4 fill-none stroke-current stroke-2"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                      Watch Story
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Recruiters Choose Amigo Students Section */}
      <section className="w-full bg-[#f8fafc] py-20 border-t border-neutral-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 w-full flex flex-col items-center space-y-12">
          <div className="text-center space-y-4">
            <span className="inline-block bg-amber-50 text-amber-800 text-[10px] font-extrabold uppercase px-4 py-1.5 rounded-full tracking-wider border border-amber-200/40">
              Employer Point of View
            </span>
            <h2 className="text-3xl sm:text-[38px] font-outfit font-black text-[#0b2f61] leading-tight">
              Why Recruiters Choose Amigo Students
            </h2>
            <p className="text-neutral-500 font-sans font-semibold text-xs sm:text-[13px] max-w-xl mx-auto leading-relaxed">
              Hiring teams come back to us because our students arrive prepared, groomed and confident.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            {recruiterFeatures.map((feat, idx) => (
              <div
                key={idx}
                className="bg-white border border-neutral-200/60 rounded-3xl p-6 flex flex-col items-start text-left space-y-4 shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-300 relative"
              >
                {/* Icon Container */}
                <div className="w-16 h-16 rounded-full bg-[#fdf2e9] flex items-center justify-center shrink-0 overflow-hidden">
                  <img
                    src={feat.icon}
                    alt={feat.title}
                    className="w-full h-full object-contain p-2.5"
                  />
                </div>

                {/* Text details */}
                <div className="space-y-1.5">
                  <h3 className="text-base sm:text-lg font-outfit font-extrabold text-[#0b2f61]">
                    {feat.title}
                  </h3>
                  <p className="text-neutral-500 font-sans font-semibold text-xs sm:text-[13px] leading-relaxed">
                    {feat.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions Section */}
      <section className="w-full bg-[#f8fafc] py-20 border-t border-neutral-200/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 md:px-8 w-full flex flex-col items-center space-y-12">
          <div className="text-center space-y-4">
            <span className="inline-block bg-amber-50 text-amber-800 text-[10px] font-extrabold uppercase px-4 py-1.5 rounded-full tracking-wider border border-amber-200/40">
              Questions By Students & Parents
            </span>
            <h2 className="text-3xl sm:text-[38px] font-outfit font-black text-[#0b2f61] leading-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-neutral-500 font-sans font-semibold text-xs sm:text-[13px] max-w-xl mx-auto leading-relaxed">
              Honest answers about how placements at Amigoz Academy actually work.
            </p>
          </div>

          <div className="w-full space-y-4">
            <FAQItem
              question="Are these real Amigoz Academy placements?"
              answer="Yes, every placement shown on this page is verified. Our placed students work at real airlines and companies, and we can connect you with alumni who are happy to share their experience."
            />
            <FAQItem
              question="Which companies hire Amigoz students?"
              answer="Our students are hired by leading airlines such as IndiGo, Air India, Vistara, SpiceJet, Akasa Air, Emirates, Qatar Airways, and many more. We also have placements in ground handling, travel, and hospitality companies."
            />
            <FAQItem
              question="Does Amigoz guarantee placement?"
              answer="We provide 100% placement assistance — that means dedicated mock interviews, resume building, grooming sessions, and direct introductions to hiring partners. While no institute can legally guarantee a job, our track record of 10,000+ placements speaks for itself."
            />
            <FAQItem
              question="What is the average salary after placement?"
              answer="Starting salaries typically range from ₹4.5 Lakhs to ₹9.2 Lakhs per annum depending on the role, airline, and location. Cabin crew and ground staff at international airlines tend to be on the higher end."
            />
            <FAQItem
              question="How soon after course completion do students get placed?"
              answer="Most students receive their first interview call within 2–4 weeks of completing the course. Many get placed even before the course ends, during our exclusive placement drives."
            />
            <FAQItem
              question="Do you help with interview preparation?"
              answer="Absolutely. We conduct regular mock interviews, group discussions, personality development sessions, and one-on-one mentorship to make sure you walk into every interview with confidence."
            />
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
          2026 batches are filling fast — don&rsquo;t get left behind
        </h1>

        {/* Subheading */}
        <p style={{ color: "#a8b3cc" }} className="text-sm sm:text-base mb-7">
          Admissions open — secure your seat early. One free call is all it takes.
        </p>

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
          <a
            href="#enquiry-form"
            style={{ backgroundColor: "#e0392f", color: "#ffffff" }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-sm font-bold px-6 py-3.5 rounded-full transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Check my eligibility now
          </a>

          <a
            href="#enquiry-form"
            style={{ backgroundColor: "#e0392f", color: "#ffffff" }}
            className="w-full sm:w-auto inline-flex items-center justify-center text-sm font-bold px-8 py-3.5 rounded-full transition-colors"
          >
            Start my career
          </a>

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
          {["4.6 Google rating", "10,000+ students", "Govt certified", "200+ hiring partners"].map(
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
      </section>
    </div>
  );
}
