import React, { useState } from "react";
import { Link } from "react-router-dom";
import { createPortal } from "react-dom";
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
import Studentimg1 from "../assets/img/Student1.png";
import Studentimg2 from "../assets/img/Student3.png";
import Studentimg3 from "../assets/img/Student2.png";
import placementIcons1 from "../assets/img/placementicons1.png";
import placementIcons2 from "../assets/img/placementicons2.png";
import placementIcons3 from "../assets/img/placementicons3.png";
import placementIcons4 from "../assets/img/placementicons4.png";
import placementIcons5 from "../assets/img/placementicons5.png";
import placementIcons6 from "../assets/img/placementicons6.png";

// Student profile image imports for video stories
import Studentpf1 from "../assets/img/Studentpf1.png";
import Studentpf2 from "../assets/img/Studentpf3.png";
import Studentpf3 from "../assets/img/Studentpf2.png";

// Brand Logo Imports
import placementbrandy1 from "../assets/img/placementbrandy1.png";
import placementbrandy2 from "../assets/img/placementbrandy2.png";
import placementbrandy3 from "../assets/img/placementbrandy3.png";
import placementbrandy4 from "../assets/img/placementbrandy4.png";
import placementbrandy5 from "../assets/img/placementbrandy5.png";
import placementbrandy6 from "../assets/img/placementbrandy6.png";
import placementbrandy7 from "../assets/img/placementbrandy7.png";
import placementbrandy8 from "../assets/img/placementbrandy8.png";
import placementbrandy9 from "../assets/img/placementbrandy9.png";
import placementbrandy10 from "../assets/img/placementbrandy10.png";
import placementbrandy11 from "../assets/img/placementbrandy11.png";
import placementbrandy12 from "../assets/img/placementbrandy12.png";

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

export default function Placement() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const statistics = [
    { number: "10,000+", label: "Students Trained Successfully" },
    { number: "100%", label: "Placement Assistance Guarantee" },
    { number: "200+", label: "Global Airlines & Tech Recruiters" },
    { number: "Upto ₹9 L", label: "Average Starting Salary Range (Based on Eligibility*)" },
  ];

  const placedStudents = [
    {
      name: "Vikat Gokhale",
      role: "Ground Staff — Customer Service",
      company: "Akasa Air",
      branch: "Andheri Branch",
      year: "Placed 2025",
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
      company: "IndiGo",
      branch: "Thane Branch",
      year: "Placed 2024",
      quote: "Grooming sessions changed how I carried myself in the interview.",
      image: placementStudent3,
    },
    {
      name: "Mehwish Sayyed",
      role: "Airport Ground Staff",
      company: "Vistara",
      branch: "Ghatkopar Branch",
      year: "Placed 2025",
      quote: "The mock interviews made the real airline round feel familiar.",
      image: placementStudent4,
    },
    {
      name: "Vrihikesh Gore",
      role: "Guest Relations",
      company: "JW Marriott Mumbai",
      branch: "Andheri Branch",
      year: "Placed 2024",
      quote: "The practical training and interview preparation made me ready for my job.",
      image: placementStudent5,
    },
    {
      name: "Fatima Shaikh",
      role: "Cabin Crew",
      company: "Air Asia",
      branch: "Ghatkopar Branch",
      year: "Placed 2024",
      quote: "English communication classes got me through the Emirates assessment.",
      image: placementStudent6,
    },
    {
      name: "Bhumika Jadhav",
      role: "Cabin Crew",
      company: "Qatar",
      branch: "Thane Branch",
      year: "Placed 2024",
      quote: "The mock interviews made the real airline round feel familiar.",
      image: placementStudent7,
    },
    {
      name: "Danish Dafadar",
      role: "Ramp & Ground Operations",
      company: "Mumbai Airport",
      branch: "Andheri Branch",
      year: "Placed 2025",
      quote: "Practical airport training made day one at work easy.",
      image: placementStudent8,
    },
    {
      name: "Samir Ovhal",
      role: "Guest Relations",
      company: "The Oberoi Group",
      branch: "Ghatkopar Branch",
      year: "Placed 2024",
      quote: "Resume help and mock rounds got me shortlisted in three weeks.",
      image: placementStudent9,
    },
  ];

  const hiringPartners = [
    placementbrandy1,
    placementbrandy2,
    placementbrandy3,
    placementbrandy4,
    placementbrandy5,
    placementbrandy6,
    placementbrandy7,
    placementbrandy8,
    placementbrandy9
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
      name: "Jasmine Soni",
      role: "Cabin Crew Emirates · Aviation Batch 2023",
      company: "Emirates",
      description: "Amigo Air Hostess Academy completely transformed my career path. The practical training and expert guidance helped me land my dream job as a Cabin Crew Member within months of graduating.",
      image: Studentimg1,
      profile: Studentpf1,
    },
    {
      name: "Hardik Chari",
      role: "Guest Service Exclusive · Batch 2024",
      company: "Akasa Air",
      description: "Guest Service Exclusive Course Mumbai — zero to high-paying job. Placement team is exceptional.",
      image: Studentimg2,
      profile: Studentpf2,
    },
    {
      name: "Swati Patil",
      role: "Airport Ground Staff · Travel & Tourism 2022",
      company: "Mumbai Airport",
      description: "The comprehensive curriculum covers every aspect of the industry. The instructors are real professionals who know what airlines are looking for. I am now happily working at International Airport.",
      image: Studentimg3,
      profile: Studentpf3,
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
      <section className="w-full bg-[#f1f5f9] min-h-[450px] sm:min-h-[500px] lg:h-[650px] relative overflow-hidden flex items-center border-b border-neutral-200/50">
        {/* Desktop Background Image: right-0, lg:w-[42%], hidden on mobile */}
        <div className="hidden lg:block absolute top-0 right-0 h-full w-[42%] z-0">
          <img
            src={new URL("../assets/img/placementhero.png", import.meta.url).href}
            alt="Student Placements Success"
            className="h-full w-full object-cover object-top lg:object-[35%_top]"
            onError={(e) => {
              e.currentTarget.src = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#f1f5f9] from-0% via-[#f1f5f9]/30 via-[18%] to-transparent to-[38%] z-10" />
        </div>

        {/* Mobile Background Image: w-full, height is 100% */}
        <div className="block lg:hidden absolute inset-0 z-0 w-full h-full">
          <img
            src={new URL("../assets/img/mobileheroplacement.png", import.meta.url).href}
            alt="Student Placements Success Mobile"
            className="w-full h-full object-cover object-[right_center]"
            onError={(e) => {
              e.currentTarget.src = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800";
            }}
          />
        </div>

        {/* Content Container */}
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 md:px-8 relative z-20 flex items-center min-h-[450px] sm:min-h-[500px] lg:h-[650px] py-12 lg:py-0">
          <div className="w-[48%] sm:w-[50%] lg:w-full max-w-[520px] space-y-4 sm:space-y-6 text-left">
            {/* Breadcrumbs */}
            <div className="flex items-center gap-1.5 text-xs sm:text-[13px] font-sans font-medium text-slate-400">
              <Link to="/" className="hover:text-[#DF1818] transition-colors focus:outline-none">Home</Link>
              <span className="text-slate-400 mx-1 select-none">&gt;</span>
              <span className="font-bold text-[#DF1818] tracking-tight">Placements</span>
            </div>

            <h1 className="text-xl sm:text-3xl lg:text-[48px] font-outfit font-extrabold text-[#0b2f61] tracking-tight">
              <span className="block leading-[1.2]">Our Student Placements</span>
              {/* <span className="block mt-2 leading-[1.2]">&amp; Success Stories</span> */}
            </h1>
            {/* Desktop list of courses */}
            <p className="hidden lg:block text-neutral-500 font-sans font-semibold text-xs sm:text-[15px] leading-relaxed">
              Our students are building successful careers across aviation, hospitality, AI and data science. With industry-focused training and dedicated placement support, we help turn skills into real career opportunities.
            </p>
            {/* Mobile list of courses stacked vertically */}
            <div className="block lg:hidden text-neutral-500 font-sans font-semibold text-[10px] leading-relaxed space-y-0.5">
              Our students are building successful careers across aviation, hospitality, AI and data science. With industry-focused training and dedicated placement support, we help turn skills into real career opportunities.
            </div>
            <div className="pt-1">
              <button
                onClick={() => window.dispatchEvent(new CustomEvent("openEligibilityModal"))}
                style={{ backgroundColor: "#e31e24", color: "#ffffff" }}
                className="inline-flex items-center justify-center gap-2 text-[9px] sm:text-sm font-bold px-4 py-2.5 sm:px-6 sm:py-3.5 rounded-full transition-colors shadow-[0_8px_20px_rgba(227,30,36,0.15)] hover:bg-[#c2141a] active:scale-95 whitespace-nowrap cursor-pointer"
              >
                Enroll Now To Avail Scholarship &rarr;
              </button>
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
              Each placement below is a named Amigo Academy student, shared with their consent — with branch, employer, role and year.
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
            <button
              onClick={() => window.dispatchEvent(new CustomEvent("openEligibilityModal"))}
              style={{ backgroundColor: "#e31e24", color: "#ffffff" }}
              className="inline-flex items-center justify-center gap-2 text-xs sm:text-sm font-bold px-8 py-3.5 rounded-full transition-all shadow-[0_8px_20px_rgba(227,30,36,0.15)] hover:bg-[#c2141a] active:scale-95 cursor-pointer"
            >
              Enroll Now &rarr;
            </button>
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

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 w-full max-w-5xl">
          {hiringPartners.map((logo, idx) => (
            <div
              key={idx}
              className="bg-white border border-neutral-200/80 rounded-2xl sm:rounded-3xl p-4 sm:p-5 flex items-center justify-center shadow-sm hover:shadow-md hover:border-neutral-300 hover:-translate-y-0.5 transition-all duration-300 h-24 sm:h-28"
            >
              <img
                src={logo}
                alt={`Hiring Partner Logo ${idx + 1}`}
                className="max-h-12 sm:max-h-16 w-auto max-w-[88%] object-contain"
              />
            </div>
          ))}
        </div>

        <p className="text-[10px] sm:text-xs text-neutral-400 font-medium max-w-2xl text-center leading-relaxed mt-4">
          Company names are listed as employers where Amigo Academy students have been placed or where hiring drives are conducted. All trademarks belong to their respective owners.
        </p>
      </section>

      {/* Your Placement Journey, Step By Step Section */}
      <section className="w-full bg-[#f8fafc] py-20 border-t border-neutral-200/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 w-full flex flex-col items-center space-y-12">
          <div className="text-center space-y-4">
            <span className="inline-block bg-amber-50 text-amber-800 text-[10px] font-extrabold uppercase px-4 py-1.5 rounded-full tracking-wider border border-amber-200/40">
              The Amigo Path
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
                {/* Image Container */}
                <div
                  className="relative w-full h-[220px] bg-neutral-50 rounded-2xl overflow-hidden group"
                >
                  <img
                    src={story.image}
                    alt={story.name}
                    className="w-full h-full object-cover transition-transform duration-500"
                  />

                  {/* Play Button Overlay - Disabled for now */}
                  {/* <div className="absolute inset-0 bg-black/10 z-0 group-hover:bg-black/25 transition-colors duration-300" />
                  <div
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsVideoModalOpen(true);
                    }}
                    className="w-14 h-14 rounded-full bg-[#e31e24] flex items-center justify-center text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-lg cursor-pointer group-hover:scale-110 active:scale-95 transition-transform duration-300 z-10"
                  >
                    <svg
                      className="w-5 h-5 fill-current ml-1"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div> */}

                  {/* Company Badge */}
                  <div className="bg-white/95 backdrop-blur-sm text-[10px] font-bold text-neutral-800 px-3 py-1 rounded-full absolute bottom-3.5 left-3.5 shadow-sm border border-neutral-100/50 z-10">
                    {story.company}
                  </div>

                  {/* Circular Profile Image Inset */}
                  {story.profile && (
                    <div className="absolute bottom-2.5 right-2.5 w-11 h-11 rounded-full border-2 border-white overflow-hidden shadow-md z-20 bg-white">
                      <img
                        src={story.profile}
                        alt={`${story.name} Profile`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
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
              question="Are these real Amigo Academy placements?"
              answer="Yes, these are real Amigo Academy placements"
            />
            <FAQItem
              index={2}
              question="Which companies hire Amigo students?"
              answer="Our students are hired by leading airlines such as IndiGo, Air India, Vistara, SpiceJet, Akasa Air, Emirates, Qatar Airways, and many more. We also have placements in ground handling, travel, and hospitality companies."
            />
            {/* <FAQItem
              index={3}
              question="Which companies hire Amigo students?"
              answer="Our students are hired by leading airlines such as IndiGo, Air India, Vistara, SpiceJet, Akasa Air, Emirates, Qatar Airways, and many more. We also have placements in ground handling, travel, and hospitality companies."
            /> */}
            <FAQItem
              index={4}
              question="Does Amigo guarantee placement?"
              answer="We provide 100% placement assistance — that means dedicated mock interviews, resume building, grooming sessions, and direct introductions to hiring partners. While no institute can legally guarantee a job, our track record of 10,000+ placements speaks for itself."
            />
            <FAQItem
              index={5}
              question="Is Amigo Academy certified?"
              answer="Yes, Amigo Academy is Maharashtra Government Certified, offering recognised training qualifications trusted by major employers."
            />
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
          2026 Batches Are Filling Fast — Secure Your Spot Now!
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

