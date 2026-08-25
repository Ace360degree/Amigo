import React, { useState } from "react";
import { createPortal } from "react-dom";
import { useNavigate } from "react-router-dom";
import aiCourse from "../assets/img/aicourse.png";
import aiCourseMobile from "../assets/img/aicourse-mobile.png";
import coursesVideo1a from "../assets/img/coursesvideo1a.png";
import coursesVideo2a from "../assets/img/coursesvideo2a.png";
import coursesVideo3a from "../assets/img/coursesvideo3a.png";
import coursesVideo4a from "../assets/img/coursesvideo4a.png";
import coursesVideo5a from "../assets/img/coursesvideo5a.png";
import course16 from "../assets/img/courses/16.png";
import course17 from "../assets/img/courses/17.png";
import course18 from "../assets/img/courses/18.png";
import course19 from "../assets/img/courses/19.png";
import course20 from "../assets/img/courses/20.png";
import course21 from "../assets/img/courses/21.png";
import course22 from "../assets/img/courses/22.png";
import course23 from "../assets/img/courses/23.png";
import course24 from "../assets/img/courses/24.png";
import course25 from "../assets/img/courses/25.png";
import course26 from "../assets/img/courses/26.png";

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
  badgeType: "REQUIRED" | "ESSENTIAL" | "BACKGROUND";
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
  { label: "Duration", value: "12 Months (Weekdays and Weekend batches available, 2 Hours/Day)" },
  { label: "Eligibility", value: "10th Pass" },
  { label: "Age", value: "15 Years & Above" },
];

const highlights: HighlightCard[] = [
  {
    title: "Practical Curriculum",
    description: "Coding, Generative AI, Machine Learning & 9+ Real Projects",
    iconType: "badge",
  },
  {
    title: "High-Demand Career Field",
    description: "Growing Demand for AI & Data Science Professionals Across India",
    iconType: "users",
  },
  {
    title: "Dedicated Placement Support",
    description: "Profile Pushed to Tech & Analytics Employers Across Mumbai",
    iconType: "grad",
  },
  {
    title: "Strong Project Portfolio",
    description: "Build 9-10 Real Data Projects to Strengthen Your Resume & Interviews",
    iconType: "card",
  },
  {
    title: "Interactive Offline Classroom Batches",
    description: "In-Person Learning at 3 Branches with Expert Guidance",
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
    image: course16,
    title: "Introduction to Artificial Intelligence & Data",
  },
  {
    image: course17,
    title: "Programming for Data Science",
  },
  {
    image: course18,
    title: "Data Analysis with Pandas & NumPy",
  },
  {
    image: course19,
    title: "Data Visualization & Storytelling",
  },
  {
    image: course20,
    title: "Machine Learning Fundamentals",
  },
  {
    image: course21,
    title: "Deep Learning Concepts",
  },
  {
    image: course22,
    title: "Generative AI & Modern AI Tools",
  },
  {
    image: course23,
    title: "Statistics & Mathematical Foundations",
  },
  {
    image: course24,
    title: "Real-World Projects & Case Studies",
  },
  {
    image: course25,
    title: "Career Preparation & Job Readiness",
  },
  {
    image: course26,
    title: "Big Data & Cloud Basics",
  },
];

const criteriaCards: CriteriaCard[] = [
  {
    title: "Educational Qualification",
    tag: "REQUIRED",
    details: "10th Pass",
    note: "Science, IT, and Commerce backgrounds welcome — open to beginners interested in data and AI",
    badgeType: "REQUIRED",
  },
  {
    title: "Age Criteria",
    tag: "REQUIRED",
    details: "17 to 25 Years",
    note: "Ideal for students, job seekers, and career switchers",
    badgeType: "REQUIRED",
  },
  {
    title: "Basic Computer Knowledge",
    tag: "ESSENTIAL",
    details: "Comfortable with computers and internet",
    note: "No prior coding experience needed",
    badgeType: "ESSENTIAL",
  },
  {
    title: "Analytical & Logical Thinking",
    tag: "ESSENTIAL",
    details: "Interest in data, numbers, and problem-solving",
    note: "We build your analytical skills throughout the course",
    badgeType: "ESSENTIAL",
  },
  {
    title: "Communication Skills",
    tag: "ESSENTIAL",
    details: "Basic English understanding",
    note: "Ability to present and explain data findings clearly",
    badgeType: "ESSENTIAL",
  },
  {
    title: "No Advanced Technical Background Required",
    tag: "BACKGROUND",
    details: "Beginners are welcome",
    note: "Step-by-step learning approach, suitable for career switchers too",
    badgeType: "BACKGROUND",
  },
];

const faqItems: FaqItem[] = [
  {
    question: "What is the duration of the AI & Data Science course?",
    answer:
      "The AI & Data Science course is a 12-month (1 year) program, held 5 days a week for 2 hours a day. Morning, afternoon, and evening batches are available at our Ghatkopar, Andheri & Thane branches.",
  },
  {
    question: "What is the eligibility for the AI & Data Science course?",
    answer:
      "The basic eligibility is 10th pass from any recognized board. Candidates aged 15 years & above can apply.",
  },
  {
    question: "What will I learn in the AI & Data Science course?",
    answer:
      "You will learn programming, Data Analysis with Pandas & NumPy, Data Visualization, Machine Learning, Deep Learning, Generative AI, Statistics, and Real-World Industry Projects.",
  },
  {
    question: "What is the salary after a data science course in India?",
    answer:
      "Starting salaries for entry-level AI & Data Science roles range from ₹4 LPA to ₹8 LPA, with fast growth potential as you gain project experience.",
  },
  {
    question: "Are there data science jobs in Mumbai?",
    answer:
      "Yes, Mumbai is home to major IT firms, tech startups, banks, and analytics hubs actively hiring AI & Data Science professionals.",
  },
  {
    question: "Do I need coding experience to join the AI & Data Science course?",
    answer:
      "No prior coding experience is required. We teach programming fundamentals from scratch step-by-step.",
  },
  {
    question: "What makes a good AI & Data Science course for beginners?",
    answer:
      "A good course offers structured offline classroom training, hands-on real-world projects, expert mentorship, and dedicated placement support.",
  },
  {
    question: "Can I do the AI & Data Science course after 10th?",
    answer:
      "Yes! 10th pass students can enroll and build a career in technology.",
  },
  {
    question: "Does Amigo Academy provide placement support for data science students?",
    answer:
      "Yes, we provide 100% placement assistance including resume building, GitHub portfolio building, mock interviews, and recruiter connections.",
  },
  {
    question: "Where are Amigo Academy's branches for the AI & Data Science course?",
    answer:
      "Our training campuses are located in Ghatkopar, Andheri & Thane.",
  },
  {
    question: "Is AI & Data Science a good career in 2026?",
    answer:
      "Yes, AI and Machine Learning are among the highest-demand skills globally with expanding opportunities across all industries.",
  },
  {
    question: "How do I enroll or check my eligibility?",
    answer:
      "You can click 'Check My Eligibility' or contact our counseling team for immediate guidance.",
  },
  {
    question: "What is the difference between AI, Machine Learning and Data Science?",
    answer:
      "Data Science focuses on analyzing data to extract insights, Machine Learning involves algorithms that learn from data, and AI is the broader field of building intelligent systems.",
  },
  {
    question: "Does the AI & Data Science course cover Generative AI?",
    answer:
      "Yes, our updated curriculum includes Generative AI concepts, LLM tools, prompt engineering, and modern AI application development.",
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
    company: "Travel & Tourism 2022",
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
    company: "Batch 2025",
    quote:
      '"ROHAN S. 12-month course + placement team = best move after 12th. Got placed at Mumbai Airport within 5 months."',
    image: coursesVideo4a,
  },
  {
    title: "Ashwini Patil",
    role: "Cabin Crew",
    company: "Batch 2024",
    quote:
      '"Best air hostess course Mumbai – flying international in 5 months. Grooming and mock interviews made all the difference."',
    image: coursesVideo5a,
  },
];

export default function AIDataScienceCourse() {
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [storyIndex, setStoryIndex] = useState<number>(0);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const handleCTA = () => {
    window.dispatchEvent(new CustomEvent("openEligibilityModal"));
  };

  const handleNextStory = () => {
    setStoryIndex((prev) => (prev + 1) % storyCards.length);
  };

  const handlePrevStory = () => {
    setStoryIndex((prev) => (prev - 1 + storyCards.length) % storyCards.length);
  };

  return (
    <div className="flex flex-col bg-white text-slate-800 font-sans">
      {/* Desktop Hero View */}
      <section className="hidden sm:flex w-full bg-[#f1f5f9] h-[650px] relative overflow-hidden items-center border-b border-neutral-200/50">
        <div className="absolute top-0 right-0 h-full w-full lg:w-[48%] z-0">
          <img
            src={aiCourse}
            alt="AI & Data Science with Generative AI & Machine Learning"
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#f1f5f9] from-0% via-[#f1f5f9]/40 via-[22%] to-transparent z-10 lg:block hidden" />
        </div>

        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 md:px-8 relative z-20 flex items-center h-full">
          <div className="max-w-[650px] text-left">
            <div className="flex items-center flex-wrap gap-2 text-[11px] mb-6">
              <button onClick={() => navigate("/")} className="text-[#53657d] hover:text-[#0b2f61] transition-colors cursor-pointer">
                Home
              </button>
              <span className="text-[#9ca3af]">›</span>
              <span className="text-[#e31e24] font-semibold">
                AI &amp; Data Science with Generative AI &amp; Machine Learning
              </span>
            </div>

            <h1 className="text-[38px] sm:text-[42px] lg:text-[46px] font-outfit font-extrabold text-[#0b2f61] leading-[1.1] tracking-tight">
              AI &amp; Data Science with<br />
              Generative AI &amp;<br />
              Machine Learning
            </h1>

            <div className="flex flex-wrap items-center gap-2 mt-4 text-[15px] sm:text-[16px] font-semibold">
              <span className="text-[#0b2f61]">12 Month</span>
              <span className="text-[#6b7280]">•</span>
              <span className="text-[#0b2f61]">Certificate Program</span>
              <span className="text-[#6b7280]">•</span>
              <span className="text-[#e31e24]">Live Projects</span>
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
                    <span className="ml-2 font-medium text-[#0b2f61]">10th Pass</span>
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-[#0b2f61] font-bold">♙</span>
                  <p>
                    <span className="font-semibold text-slate-700">Age:</span>
                    <span className="ml-2 font-medium text-[#0b2f61]">15 Years & Above</span>
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
            src={aiCourseMobile}
            alt="AI & Data Science with Generative AI & Machine Learning"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />

          {/* Text Overlay Pinned to Left */}
          <div className="absolute inset-y-0 left-0 z-10 px-5 flex flex-col justify-center max-w-[280px]">
            <h1 className="text-[24px] font-extrabold text-[#0b2f61] leading-[1.16] tracking-tight">
              AI &amp; Data Science<br />
              with Generative AI<br />
              &amp; Machine Learning
            </h1>

            <ul className="mt-5 space-y-2.5 text-[13px] font-bold">
              <li className="flex items-center gap-2 text-[#0b2f61]">
                <span className="text-[#0b2f61] font-extrabold">•</span> 12 Month
              </li>
              <li className="flex items-center gap-2 text-[#0b2f61]">
                <span className="text-[#0b2f61] font-extrabold">•</span> Certificate Program
              </li>
              <li className="flex items-center gap-2 text-[#e31e24]">
                <span className="text-[#e31e24] font-extrabold">•</span> Live Projects
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
              <span className="text-[#0b2f61] font-medium text-right">12 Months (5 Days/Wk, 2 Hrs/Day)</span>
            </div>
            <div className="flex items-center justify-between gap-3 text-[#42526a]">
              <span className="font-semibold text-slate-700">Eligibility:</span>
              <span className="text-[#0b2f61] font-medium">10th Pass</span>
            </div>
            <div className="flex items-center justify-between gap-3 text-[#42526a]">
              <span className="font-semibold text-slate-700">Age:</span>
              <span className="text-[#0b2f61] font-medium">15 Years & Above</span>
            </div>
          </div>
        </div>
      </section>

      {/* Course Highlights Section */}
      <section className="py-16 px-4 sm:px-6 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0b2f61] text-center mb-10 font-outfit">
            Course Highlights
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-[#FFFBEB] border border-[#FDE68A]/60 p-6 flex items-start gap-4 transition-all duration-300 hover:shadow-md text-left"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-[#2563eb] shadow-sm">
                  <svg className="h-5 w-5 text-[#2563eb]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-extrabold text-[#0b2f61] leading-snug mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 font-medium leading-relaxed">
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
                  <option value="10th">10th Pass</option>
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

      {/* What Will You Learn? Section */}
      <section className="bg-[#f9fafb] py-16 sm:py-24 px-4 sm:px-6 md:px-8 border-t border-neutral-100">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111827] text-center mb-12 sm:mb-16 font-sans">
            What Will You Learn?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {learnCards.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-[24px] overflow-hidden border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col justify-between group text-left"
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
              onClick={handleCTA}
              className="inline-flex items-center justify-center gap-2.5 bg-[#DF1818] hover:bg-[#c41212] text-white font-sans font-bold text-sm sm:text-base px-8 py-3.5 rounded-full shadow-[0_8px_20px_rgba(223,24,24,0.28)] hover:shadow-[0_12px_28px_rgba(223,24,24,0.38)] transition-all duration-300 active:scale-95 cursor-pointer"
            >
              <span>Enroll Now to Start</span>
              <span className="font-bold">&nbsp;➔</span>
            </button>
          </div>
        </div>
      </section>

      {/* Do You Meet the Eligibility Criteria? Section */}
      <section className="py-20 px-4 sm:px-6 md:px-8 bg-[#f8fafc] border-t border-b border-slate-100">
        <div className="max-w-6xl mx-auto text-center">
          {/* Badge */}
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200/60 mb-4">
            <span>🛡</span> Quick Eligibility Check
          </span>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0b2f61] mb-3 font-outfit">
            Do You Meet the Eligibility Criteria?
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm font-semibold max-w-xl mx-auto mb-14">
            Check if you qualify for our 12-month AI & Data Science with Generative AI & Machine Learning.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 text-left">
            {criteriaCards.map((c, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm flex flex-col justify-between space-y-4"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xl">🎓</span>
                    <span
                      className={`text-[10px] font-extrabold px-2.5 py-1 rounded-md uppercase tracking-wider ${c.badgeType === "REQUIRED"
                        ? "bg-rose-50 text-rose-600 border border-rose-100"
                        : c.badgeType === "ESSENTIAL"
                          ? "bg-amber-50 text-amber-600 border border-amber-100"
                          : "bg-indigo-50 text-indigo-600 border border-indigo-100"
                        }`}
                    >
                      {c.tag}
                    </span>
                  </div>
                  <h3 className="text-sm font-extrabold text-[#0b2f61] mb-1">{c.title}</h3>
                  <p className="text-xs font-bold text-slate-700 mb-3">{c.details}</p>
                </div>

                <div className="flex items-start gap-2 pt-3 border-t border-slate-100 text-[11px] text-slate-500 font-medium leading-relaxed">
                  <span className="text-emerald-500 font-bold text-xs">✓</span>
                  <span>{c.note}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Not Sure If You Qualify Callout */}
          <div className="mt-8 min-h-[255px] rounded-[16px] border border-slate-100 bg-white px-6 py-10 shadow-[0_8px_30px_rgba(0,0,0,0.03)] mx-auto flex flex-col items-center justify-center text-center">
            <h3 className="text-[19px] sm:text-[21px] font-extrabold text-[#17213a]">Not Sure If You Qualify?</h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-500 max-w-xl mx-auto">
              Don't worry! Our counsellors will evaluate your profile and suggest the best career path in Data Science for you.
            </p>
            <div className="mt-8">
              <button
                onClick={handleCTA}
                className="inline-flex items-center gap-8 bg-[#ed1c24] hover:bg-[#cb151c] text-white font-bold text-sm px-[72px] py-3.5 rounded-full shadow-[0_10px_20px_rgba(237,28,36,0.2)] transition-all active:scale-95 cursor-pointer"
              >
                <span>Check My Eligibility</span>
                <span className="text-base font-bold">➔</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions Section */}
      <section className="py-20 px-4 sm:px-6 md:px-8 bg-[#f8fafc] border-t border-slate-100">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-blue-50 text-[#0b2f61] text-xs font-bold border border-blue-100 mb-4">
            <span>❓</span> Common Questions Answered
          </span>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0b2f61] mb-3 font-outfit">
            Frequently Asked Questions – AI & Data Science Course
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm font-semibold max-w-xl mx-auto mb-14">
            Got questions? We have answers. Still confused? Speak to our counselor in 60 seconds.
          </p>

          <div className="space-y-3 text-left">
            {faqItems.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-sm transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between p-5 text-left font-bold text-xs sm:text-sm text-[#0b2f61] gap-4 cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-full bg-blue-50 text-[#0b2f61] flex items-center justify-center text-xs shrink-0 font-extrabold">
                        {idx + 1}
                      </span>
                      <span>{faq.question}</span>
                    </div>
                    <svg
                      className={`h-4 w-4 shrink-0 text-[#0b2f61] transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5">
                      <div className="rounded-xl border-l-4 border-[#0b2f61] bg-[#f8fafc] p-4 text-xs sm:text-sm font-medium leading-relaxed text-slate-600">
                        {faq.answer}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Bottom Stats */}
          <div className="mt-16 pt-12 border-t border-slate-200/80 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl sm:text-4xl font-extrabold text-[#0b2f61]">1,200+</div>
              <div className="mt-1.5 text-xs font-medium text-slate-500">Students Enrolled</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-extrabold text-[#0b2f61]">200+</div>
              <div className="mt-1.5 text-xs font-medium text-slate-500">Hiring Partners</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-extrabold text-[#0b2f61]">120+</div>
              <div className="mt-1.5 text-xs font-medium text-slate-500">Students Trained</div>
            </div>
          </div>
        </div>
      </section>

      {/* Still Have Questions? Callout Banner */}
      <section className="py-16 px-4 sm:px-6 md:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="rounded-3xl bg-[#183a7d] p-8 sm:p-12 text-white text-center space-y-6 shadow-xl">
            <h2 className="text-2xl sm:text-4xl font-extrabold font-outfit text-white">Still have questions?</h2>
            <p className="text-xs sm:text-sm text-white max-w-xl mx-auto font-medium">
              Our expert counselors are here to help you make the right career decision. Get personalized guidance in under 60 seconds.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <button
                onClick={() => window.location.href = "tel:+919987588932"}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-[#183a7d] hover:bg-slate-100 font-bold text-xs sm:text-sm px-8 py-3.5 rounded-full shadow-md transition-all cursor-pointer"
              >
                <span>Talk to Counselor Now</span>
                <span className="text-base font-extrabold">➔</span>
              </button>
              <button
                onClick={handleCTA}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-transparent text-white border border-white/40 hover:bg-white/10 font-bold text-xs sm:text-sm px-8 py-3.5 rounded-full shadow-md transition-all cursor-pointer"
              >
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M7.5 12l4.5 4.5m0 0l4.5-4.5M12 16.5V3" />
                </svg>
                <span>Download Brochure (PDF)</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Student Success Stories Section (Hidden) */}
      {/* <section className="py-20 px-4 sm:px-6 md:px-8 bg-white border-t border-slate-100">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0b2f61] mb-3 font-outfit">
            Student Success Stories
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm font-semibold max-w-xl mx-auto mb-14">
            Hear from our successful graduates who are now thriving in their dream careers
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 text-left">
            {storyCards.slice(storyIndex, storyIndex + 3).concat(
              storyCards.slice(0, Math.max(0, storyIndex + 3 - storyCards.length))
            ).map((story, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col"
              >
                <div
                  className="relative w-full h-[200px] overflow-hidden bg-slate-900 group"
                >
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover opacity-90 transition-transform duration-500"
                  />
                </div>

                <div className="p-6 flex flex-col justify-between flex-1 space-y-4">
                  <div>
                    <h3 className="text-base font-extrabold text-[#0b2f61]">{story.title}</h3>
                    <p className="text-xs font-semibold text-slate-500">{story.role}</p>
                    <p className="text-[11px] font-medium text-slate-400">{story.company}</p>
                  </div>
                  <p className="text-xs text-slate-600 font-medium italic leading-relaxed">
                    {story.quote}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center gap-4">
            <button
              onClick={handlePrevStory}
              className="w-10 h-10 rounded-full border border-slate-300 flex items-center justify-center text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
            >
              ←
            </button>
            <button
              onClick={handleNextStory}
              className="w-10 h-10 rounded-full border border-slate-300 flex items-center justify-center text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
            >
              →
            </button>
          </div>
        </div>
      </section> */}

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
