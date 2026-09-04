import React, { useState } from "react";
import { createPortal } from "react-dom";
import { useNavigate, Link } from "@tanstack/react-router";
import coursesHero from "../assets/img/courses1121.png";
import coursesMobileHero from "../assets/img/coursesmain-mobile.png";
import coursesCard1 from "../assets/img/courses2.png";
import coursesCard2 from "../assets/img/courses2a.png";
import coursesCard3 from "../assets/img/courses3a.png";
import courses444a from "../assets/img/courses444a.png";
import courses555a from "../assets/img/courses555a.png";
import courses666a from "../assets/img/courses666a.png";
import coursesVideo1a from "../assets/img/coursesvideo1a.png";
import coursesVideo2a from "../assets/img/coursesvideo2a.png";
import coursesVideo3a from "../assets/img/coursesvideo3a.png";
import coursesVideo4a from "../assets/img/coursesvideo4a.png";
import coursesVideo5a from "../assets/img/coursesvideo5a.png";
import coursesIcon1 from "../assets/img/coursesicon1.png";
import coursesIcon2 from "../assets/img/coursesicon2.png";
import coursesIcon3 from "../assets/img/coursesicon3.png";
import coursesIcon4 from "../assets/img/coursesicon4.png";
import coursesIcon5 from "../assets/img/coursesicon5.png";
import coursesIcon6 from "../assets/img/coursesicon6.png";

type Stat = {
  value: string;
  label: string;
};

type CourseCard = {
  id: string;
  title: string;
  description: string;
  image: string;
  accent: string;
  highlights: string[];
  outcomes: string[];
  cta: string;
};

type ComparisonRow = {
  label: string;
  cabinCrew: string;
  groundStaff: string;
  aiDataScience: string;
};

type WhyCard = {
  eyebrow: string;
  title: string;
  description: string;
  bullets: string[];
  icon: string;
};

type LearningCard = {
  title: string;
  description: string;
  image: string;
  cta: string;
  link: string;
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

const stats: Stat[] = [
  { value: "10,000+", label: "Students Trained" },
  { value: "3", label: "Specialised Career Paths" },
  { value: "200+", label: "Hiring Partners" },
  { value: "9+", label: "Years of Excellence" },
];

const comparisonRows: ComparisonRow[] = [
  {
    label: "Duration",
    cabinCrew: "6 Months",
    groundStaff: "6 Months",
    aiDataScience: "12 Months",
  },
  {
    label: "Eligibility",
    cabinCrew: "12th Pass",
    groundStaff: "12th Pass",
    aiDataScience: "12th / HSC Pass",
  },
  {
    label: "Age",
    cabinCrew: "17 to 24",
    groundStaff: "17 to 27",
    aiDataScience: "17 to 25",
  },
  {
    label: "Certification",
    cabinCrew: "Certified course",
    groundStaff: "Certified course",
    aiDataScience: "Industry-Oriented Professional Training",
  },
  {
    label: "Career Type",
    cabinCrew: "In-flight service",
    groundStaff: "Airport operations",
    aiDataScience: "Technology and analytics",
  },
  {
    label: "Work Environment",
    cabinCrew: "Aircraft cabin, travel-heavy",
    groundStaff: "Airport terminal, shift-based",
    aiDataScience: "Office / hybrid desk role",
  },
  {
    label: "Best For",
    cabinCrew: "People-facing, travel lovers",
    groundStaff: "Operations & coordination",
    aiDataScience: "Logical problem solvers",
  },
  {
    label: "Growth Path",
    cabinCrew: "Senior crew > purser > trainer",
    groundStaff: "Supervisor > duty manager",
    aiDataScience: "Analyst > data scientist > lead",
  },
  {
    label: "Placement",
    cabinCrew: "Placement support",
    groundStaff: "Placement support",
    aiDataScience: "Placement support",
  },
  {
    label: "Scholarships",
    cabinCrew: "Up to Rs50,000",
    groundStaff: "Up to Rs50,000",
    aiDataScience: "Up to Rs50,000",
  },
];

const whyCards: WhyCard[] = [
  {
    eyebrow: "Certification",
    title: "Certified course",
    description:
      "Your training meets industry standards and certified learning requirements.",
    bullets: [
      "Certified course",
      "Credible, recognised brand",
    ],
    icon: coursesIcon1,
  },
  {
    eyebrow: "Track Record",
    title: "Established Brand",
    description:
      "A trusted academy built and proven in Mumbai since 2017.",
    bullets: [
      "Founded in 2017",
      "10,000+ students trained",
      "4.6+ rating from reviews",
    ],
    icon: coursesIcon2,
  },
  {
    eyebrow: "Programs",
    title: "High-Demand Courses",
    description:
      "Three job-focused courses with real hiring demand in every track.",
    bullets: [
      "Cabin Crew (Air Hostess) & Hospitality Management",
      "Airport Ground Staff & Hospitality Management",
      "AI & Data Science",
    ],
    icon: coursesIcon3,
  },
  {
    eyebrow: "Support",
    title: "Complete Business Support",
    description:
      "You are never left to figure out operations alone.",
    bullets: [
      "Startup guidance",
      "Cabin crew faculty support",
      "Placement process",
      "Marketing assistance",
    ],
    icon: coursesIcon4,
  },
  {
    eyebrow: "Opportunity",
    title: "Growing Industry",
    description:
      "Aviation and AI hiring continue to expand across India.",
    bullets: [
      "Rising aviation demand",
      "Rising AI and data science demand",
      "Long-term opportunity",
    ],
    icon: coursesIcon5,
  },
  {
    eyebrow: "Partnership",
    title: "Honest, Long-Term Partnership",
    description:
      "We guide students with a growth roadmap rather than one-time advice.",
    bullets: [
      "Transparent process",
      "Honest guidance",
      "Shared growth roadmap",
    ],
    icon: coursesIcon6,
  },
];

const learningCards: LearningCard[] = [
  {
    title: "Placement Support",
    description:
      "From interviews, application support to employer interviews, our dedicated placement cell helps students prepare, connect and get selected for the right career.",
    image: courses444a,
    cta: "Learn About Placements",
    link: "/placement",
  },
  {
    title: "Scholarships & EMI",
    description:
      "We offer scholarship support of up to Rs50,000 and flexible EMI options, making your dream career more accessible and affordable.",
    image: courses555a,
    cta: "Learn About Scholarships",
    link: "/scholarship",
  },
  {
    title: "Career Guides",
    description:
      "From resume building to interview preparation, our career guidance sessions help students build confidence and understand their next steps.",
    image: courses666a,
    cta: "Learn About Career Guides",
    link: "/career-guides",
  },
];

const faqItems: FaqItem[] = [
  {
    question: "Which course should I choose after 12th?",
    answer:
      "The right course depends on your interests, strengths, and career goals. Explore Aviation or AI & Data Science, and speak with a career counsellor to choose confidently.",
  },
  {
    question: "What courses does Amigo Academy offer?",
    answer:
      "We currently offer three main courses: Cabin Crew (Air Hostess) & Hospitality Management, Airport Ground Staff & Hospitality Management, and AI & Data Science.",
  },
  {
    question: "Are all courses certified?",
    answer:
      "Yes, the aviation programs are Certified courses and the AI & Data Science track is industry-oriented professional training.",
  },
  {
    question: "How long are the courses?",
    answer:
      "Each programme is designed as a 6 to 12 months course structure with practical training, classroom learning, and placement support.",
  },
  {
    question: "What is the minimum eligibility?",
    answer:
      "The basic eligibility is usually 12th pass. For most aviation tracks, students should typically be 18 years or older.",
  },
  {
    question: "I didn’t meet cabin crew height standards. What are my options?",
    answer:
      "You can still explore Airport Ground Staff or AI & Data Science if cabin crew requirements are not the right fit for your profile.",
  },
  {
    question: "Which course has the highest salary?",
    answer:
      "Salary depends on role, employer and performance. AI & Data Science can offer the highest growth potential, while aviation roles can also provide strong starting salaries and travel benefits.",
  },
  {
    question: "Do you guarantee a job after the course?",
    answer:
      "We provide placement support, interview preparation, and job assistance, but final hiring is always decided by the employer.",
  },
  {
    question: "Can boys apply for cabin crew and ground staff courses?",
    answer:
      "Yes, both boys and girls can apply. Cabin crew roles are open to eligible applicants, and ground staff positions are available across many airline and airport teams.",
  },
  {
    question: "Do I need coding experience for AI & Data Science?",
    answer:
      "No prior coding experience is required. We start with fundamentals and gradually build up to practical data and AI skills.",
  },
];

const storyCards: StoryCard[] = [
  {
    title: "Jasmine Soni",
    role: "Cabin Crew Executive",
    company: "Air Asia 2025",
    quote:
      "\"Amigo Air Hostess Academy completely transformed my career path. The practical training and expert guidance helped me land my dream job as a Cabin Crew Member within months of graduating.\"",
    image: coursesVideo1a,
  },
  {
    title: "Swati Patil",
    role: "Airport Ground Staff",
    company: "Vistara 2025",
    quote:
      "\"The comprehensive curriculum covered every aspect of the industry. The mock interviews and interview preparation made the whole process feel natural and calm.\"",
    image: coursesVideo2a,
  },
  {
    title: "Hardik Chari",
    role: "Guest Service Executive",
    company: "IndiGo 2025",
    quote:
      "\"Guest Service Executive roles can be competitive, but the placement team helped me build confidence and stay focused through each round.\"",
    image: coursesVideo3a,
  },
  {
    title: "Issac Edward",
    role: "Passenger Service Executive",
    company: "Airport 2025",
    quote:
      "\"The 6-month course and placement support gave me the right start. The training made me ready for a full-time airport role from day one.\"",
    image: coursesVideo4a,
  },
  {
    title: "Ashwini Patil",
    role: "Cabin Crew",
    company: "Akasa Air 2025",
    quote:
      "\"Best in class access to training and support. The interview preparation and mock sessions made all the difference for my selection.\"",
    image: coursesVideo5a,
  },
];

const courses: CourseCard[] = [
  {
    id: "air-hostess",
    title: "Cabin Crew (Air Hostess) & Hospitality Management",
    description:
      "If you dream of working with leading domestic or international airlines, this programme prepares you with the professional skills, confidence, communication, grooming and industry knowledge required to begin your aviation career.",
    image: coursesCard1,
    accent: "#e31e24",
    highlights: [
      "6 Month Programme",
      "Maharashtra Government Certified",
      "Practical Training",
      "Interview Preparation",
      "Placement Support",
    ],
    outcomes: ["Cabin Crew", "Air Hostess", "Flight Steward", "In-flight Customer Service"],
    cta: "Explore Course",
  },
  {
    id: "ground-staff",
    title: "Airport Ground Staff & Hospitality Management",
    description:
      "Airports depend on skilled professionals to ensure smooth passenger experiences and efficient daily operations. This programme prepares students for customer service, check-in, passenger handling, baggage services and airport operations.",
    image: coursesCard2,
    accent: "#1e417a",
    highlights: [
      "6 Month Programme",
      "Maharashtra Government Certified",
      "Practical Training",
      "Interview Preparation",
      "Placement Support",
    ],
    outcomes: ["Airport Ground Staff", "Passenger Service Executive", "Check-in Executive", "Customer Service Executive"],
    cta: "Explore Course",
  },
  {
    id: "ai-data-science",
    title: "AI & Data Science",
    description:
      "Technology is shaping the future of every industry. Our AI & Data Science programme helps students build practical knowledge in Artificial Intelligence, Machine Learning, Python and Data Science through industry-oriented learning and real-world projects.",
    image: coursesCard3,
    accent: "#0b2f61",
    highlights: [
      "12 Month Programme",
      "Industry-Oriented Professional Training",
      "Practical Projects",
      "Career Guidance",
      "Placement Support",
    ],
    outcomes: ["AI Associate", "Data Analyst", "Junior Data Scientist", "Machine Learning Associate"],
    cta: "Explore Course",
  },
];

export default function Courses() {
  const navigate = useNavigate();
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  return (
    <div className="bg-white text-neutral-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white border-b border-neutral-100 py-10 sm:py-12 lg:py-20 min-h-[500px] sm:min-h-[auto] flex items-center">
        <div className="absolute inset-0">
          {/* Desktop Image */}
          <div className="hidden sm:block absolute inset-y-0 right-0 w-full lg:w-[55%]">
            <img
              src={coursesHero}
              alt="Amigo Academy course guidance session"
              className="h-full w-full object-cover object-center"
            />
          </div>

          {/* Mobile Image */}
          <div className="sm:hidden absolute inset-0 w-full h-full">
            <img
              src={coursesMobileHero}
              alt="Find the Right Course for Your Career Goals"
              className="h-full w-full object-cover object-[right_center]"
            />
          </div>

          {/* Desktop Gradient Overlays */}
          <div className="hidden sm:block absolute inset-0 bg-gradient-to-r from-white via-white/85 via-42% to-transparent" />
          <div className="hidden sm:block lg:hidden absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent" />
        </div>

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 md:px-12 py-4 sm:py-6 lg:py-10 w-full">
          <div className="max-w-[600px] space-y-4 sm:space-y-6">
            {/* Breadcrumbs */}
            <div className="flex items-center gap-1.5 text-xs sm:text-[13px] font-sans font-medium text-slate-400">
              <Link to="/" className="hover:text-[#DF1818] transition-colors focus:outline-none">Home</Link>
              <span className="text-slate-400 mx-1 select-none">&gt;</span>
              <span className="font-bold text-[#DF1818] tracking-tight">Courses</span>
            </div>
            {/* Heading for Mobile */}
            <h1 className="sm:hidden text-[32px] font-extrabold tracking-tight text-[#112a46] leading-[1.12]">
              Find the Right<br />
              Course for<br />
              <span className="text-[#F5A623]">
                Your Career<br />
                Goals
              </span>
            </h1>

            {/* Heading for Desktop */}
            <h1 className="hidden sm:block text-4xl sm:text-5xl lg:text-[54px] font-extrabold tracking-tight text-[#112a46] leading-[1.1]">
              Find the Right Course for{" "}
              <span className="text-[#E6A020] block">Your Career Goals</span>
            </h1>

            {/* Description Paragraph */}
            <p className="max-w-[200px] sm:max-w-[400px] text-xs sm:text-[15px] leading-[1.65] sm:leading-[1.7] text-slate-600 font-normal">
              Choose the right course. Build the right skills. Shape your future.
              Explore industry-focused programs designed to prepare you for real career opportunities.
            </p>

            {/* CTA Button */}
            <div className="pt-2 sm:pt-2">
              <button
                onClick={() => window.dispatchEvent(new CustomEvent("openEligibilityModal"))}
                className="inline-flex items-center justify-center gap-3 rounded-full bg-[#E02424] hover:bg-[#c81c1c] px-6 sm:px-7 py-3.5 text-xs sm:text-sm font-bold text-white shadow-[0_10px_25px_rgba(224,36,36,0.38)] transition-all hover:shadow-[0_14px_30px_rgba(224,36,36,0.48)] active:scale-95 cursor-pointer"
              >
                <span>Enrol Now To Avail Scholarship</span>
                <svg className="w-4 h-4 text-white shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Cards Section */}
      <section className="bg-white py-12 sm:py-16 px-6 sm:px-8 md:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-[24px] border border-slate-100/90 bg-white p-6 sm:p-8 text-center shadow-[0_6px_25px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_35px_rgba(0,0,0,0.06)] transition-all duration-300 flex flex-col items-center justify-center min-h-[140px] sm:min-h-[160px]"
              >
                <div className="text-3xl sm:text-[38px] font-extrabold text-[#112a46] leading-none mb-3">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-[13px] font-bold text-[#112a46]/80 leading-snug">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Paths */}
      <section id="courses-grid" className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 pb-20">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <h2 className="text-3xl sm:text-[40px] font-extrabold text-[#1f3658] leading-tight">
            Three Career Paths. One Goal. Your Success.
          </h2>
          <p className="mt-4 text-sm sm:text-base leading-7 text-slate-500">
            Every student has unique career goals. Our industry-focused programmes combine practical learning, professional development, and expert guidance to help you achieve them.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {courses.map((course) => (
            <article
              key={course.id}
              id={course.id}
              className="overflow-hidden rounded-[28px] border border-neutral-200/70 bg-white shadow-[0_16px_40px_rgba(15,42,74,0.07)] transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="relative h-52 w-full overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#081427]/90 to-transparent" />
                <div
                  className="absolute left-4 top-4 rounded-full px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.2em] text-white shadow-sm"
                  style={{ backgroundColor: course.accent }}
                >
                  Career Track
                </div>
              </div>

              <div className="p-5 sm:p-6">
                <h3 className="text-[18px] sm:text-[20px] font-extrabold text-[#1f3658] leading-snug">
                  {course.title}
                </h3>
                <p className="mt-3 text-xs sm:text-sm leading-6 text-slate-500">
                  {course.description}
                </p>

                <div className="mt-5">
                  <div className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#1f3658]">
                    Course Highlights
                  </div>
                  <ul className="mt-3 space-y-2">
                    {course.highlights.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-xs sm:text-sm text-slate-600">
                        <span
                          className="mt-1.5 h-2 w-2 shrink-0 rounded-full"
                          style={{ backgroundColor: course.accent }}
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-5">
                  <div className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#1f3658]">
                    Career Opportunities
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {course.outcomes.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-neutral-200 bg-slate-50 px-3 py-1 text-[11px] font-semibold text-slate-600"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <Link
                  to={
                    course.id === "air-hostess"
                      ? "/courses/air-hostess-cabin-crew-hospitality-management"
                      : course.id === "ground-staff"
                        ? "/courses/airport-ground-staff-hospitality-management"
                        : "/courses/ai-data-science-with-generative-ai-machine-learning"
                  }
                  className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-[#e31e24] px-5 py-3 text-xs font-bold text-white shadow-[0_12px_25px_rgba(227,30,36,0.15)] transition-all hover:bg-[#c8191f] active:scale-95 cursor-pointer"
                >
                  <span>{course.cta}</span>
                  <span className="ml-2">➔</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Course Comparison */}
      <section className="bg-[#f4f6fb] py-20 px-4 sm:px-6 md:px-8 border-t border-neutral-100">
        <div className="mx-auto max-w-6xl text-center">
          <div className="inline-flex items-center rounded-full border border-[#d9e4f5] bg-white px-4 py-1 text-[10px] font-bold uppercase tracking-[0.22em] text-[#6f7f9b] shadow-sm">
            Side by Side
          </div>
          <h2 className="mt-4 text-3xl sm:text-[40px] font-extrabold text-[#1f3658] leading-tight">
            Course comparison at a glance
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-xs sm:text-sm leading-7 text-slate-500">
            The quickest way to see how the three courses actually differ - duration, eligibility, salary, work environment and long-term growth.
          </p>

          {/* Mobile Scroll Cues & Indicator Banner */}
          <div className="mt-6 inline-flex items-center justify-center gap-2 text-xs font-bold text-[#1c3e8a] bg-[#eef4ff] border border-[#d0e0fb] rounded-full px-4 py-1.5 shadow-sm md:hidden">
            <svg className="w-4 h-4 text-[#e31e24] animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            <span>Scroll horizontally to view full table</span>
            <svg className="w-4 h-4 text-[#e31e24] animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </div>

          <div className="mt-4 md:mt-10 overflow-hidden rounded-[22px] bg-white shadow-[0_16px_40px_rgba(15,42,74,0.08)] border border-neutral-100 relative">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[900px] border-collapse text-left">
                <thead>
                  <tr className="bg-[#234a8a] text-white">
                    <th className="px-5 py-4 text-[10px] font-bold uppercase tracking-[0.2em]">Compare</th>
                    <th className="px-5 py-4 text-sm font-bold">Cabin Crew (Air Hostess) &amp; Hospitality Management</th>
                    <th className="px-5 py-4 text-sm font-bold">Airport Ground Staff &amp; Hospitality Management</th>
                    <th className="px-5 py-4 text-sm font-bold">AI &amp; Data Science</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, index) => (
                    <tr
                      key={row.label}
                      className={index % 2 === 0 ? "bg-[#f7f9fd]" : "bg-white"}
                    >
                      <td className="border-t border-slate-100 px-5 py-4 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
                        {row.label}
                      </td>
                      <td className="border-t border-slate-100 px-5 py-4 text-xs font-medium text-slate-600">
                        {row.cabinCrew}
                      </td>
                      <td className="border-t border-slate-100 px-5 py-4 text-xs font-medium text-slate-600">
                        {row.groundStaff}
                      </td>
                      <td className="border-t border-slate-100 px-5 py-4 text-xs font-medium text-slate-600">
                        {row.aiDataScience}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className="px-6 pt-4 text-[10px] leading-5 text-slate-400">
            Salary ranges are approximate and may vary by employer, city and performance. We will share the latest, verified range during counselling.
          </p>
          <Link
            to="/contact"
            className="mt-10 inline-flex items-center justify-center rounded-full bg-[#e31e24] px-8 py-3.5 text-sm font-bold text-white shadow-[0_12px_25px_rgba(227,30,36,0.16)] transition-all hover:bg-[#c8191f] active:scale-95 cursor-pointer"
          >
            <span>Book Free Career Counselling</span>
            <span className="ml-2">➔</span>
          </Link>
        </div>
      </section>

      {/* Why Choose Amigo */}
      <section className="bg-[#f3f6fb] py-16 sm:py-20 px-4 sm:px-6 md:px-8">
        <div className="mx-auto max-w-[1120px] text-center">
          <div className="inline-flex items-center rounded-full border border-[#ead9a9] bg-[#fff7e7] px-3 py-1 text-[9px] font-bold uppercase tracking-[0.16em] text-[#7c5529]">
            Why Amigo?
          </div>
          <h2 className="mt-3 text-3xl sm:text-[31px] font-extrabold text-[#234681] leading-tight tracking-tight">
            Why Choose Amigo Academy
          </h2>
          <p className="mx-auto mt-4 max-w-[590px] text-[11px] leading-5 text-slate-500">
            A certified brand, proven courses and complete operational support — everything a franchise partner needs to build a credible education business.
          </p>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-left">
            {whyCards.map((card) => (
              <article
                key={card.title}
                className="rounded-[14px] border border-slate-200/80 bg-white p-4 shadow-[0_8px_18px_rgba(15,42,74,0.08)]"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#ffedc3]">
                  <img
                    src={card.icon}
                    alt=""
                    aria-hidden="true"
                    className="h-4 w-4 object-contain"
                  />
                </div>
                <div className="mt-3 text-[8px] font-bold uppercase tracking-[0.16em] text-[#e31e24]">
                  {card.eyebrow}
                </div>
                <h3 className="mt-1 text-[13px] font-extrabold text-[#234681] leading-snug">
                  {card.title}
                </h3>

                <p className="mt-2 text-[10px] leading-4 text-slate-500">
                  {card.description}
                </p>

                <ul className="mt-3 space-y-1.5">
                  {card.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-1.5 text-[10px] leading-4 text-slate-700">
                      <span className="flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full bg-[#ffedc3] text-[8px] font-bold text-[#8a632f]">✓</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <Link
            to="/about-us"
            className="mt-12 inline-flex items-center justify-center rounded-full bg-[#e31e24] px-7 py-3 text-[10px] font-bold text-white shadow-[0_12px_25px_rgba(227,30,36,0.16)] transition-all hover:bg-[#c8191f] active:scale-95 cursor-pointer"
          >
            <span>Learn More About Amigo Academy</span>
            <span className="ml-2">➔</span>
          </Link>
        </div>
      </section>

      {/* Beyond Classroom Learning */}
      <section className="bg-white py-20 px-4 sm:px-6 md:px-8 border-t border-neutral-100">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="text-3xl sm:text-[40px] font-extrabold text-[#1f3658] leading-tight">
            Beyond Your Classroom Learning
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-xs sm:text-sm leading-7 text-slate-500">
            Your journey with Amigo Academy extends beyond classroom teaching. We provide additional support that helps you feel prepared for every step in your career.
          </p>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {learningCards.map((card) => (
              <article
                key={card.title}
                className="overflow-hidden rounded-[22px] bg-white border border-neutral-100 shadow-[0_10px_28px_rgba(15,42,74,0.06)]"
              >
                <div className="h-48 w-full overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="p-5">
                  <h3 className="text-[18px] font-extrabold text-[#1f3658]">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-xs leading-6 text-slate-500">
                    {card.description}
                  </p>

                  <Link
                    to={card.link}
                    className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-[#e31e24] px-5 py-3 text-xs font-bold text-white transition-all hover:bg-[#c8191f] active:scale-95"
                  >
                    {card.cta}
                    <span className="ml-2">➔</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-[#f3f6fb] py-14 sm:py-16 px-4 sm:px-6 md:px-8">
        <div className="mx-auto max-w-[720px] text-center">
          <h2 className="text-[27px] sm:text-[32px] font-extrabold text-[#234681] leading-tight tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-xs leading-5 text-slate-500">
            Got questions? We&apos;ve got answers. Find out everything you need to know about our courses.
          </p>

          <div className="mt-10 space-y-3 text-left">
            {faqItems.map((faq, index) => {
              const isOpen = index === 0;

              return (
                <details
                  key={faq.question}
                  open={isOpen}
                  className="group overflow-hidden rounded-[8px] border border-slate-200/80 bg-white shadow-[0_6px_16px_rgba(15,42,74,0.04)]"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-xs font-bold text-[#172846]">
                    <span className="flex min-w-0 items-center gap-3">
                      <span className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[10px] font-bold ${isOpen ? "bg-[#234a8a] text-white" : "bg-[#edf3ff] text-[#315796]"}`}>
                        {index + 1}
                      </span>
                      <span className="leading-5">{faq.question}</span>
                    </span>
                    <svg
                      className="h-4 w-4 shrink-0 text-[#234a8a] transition-transform duration-300 group-open:rotate-180"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="mx-[52px] mb-5 rounded-r-md border-l-2 border-[#234a8a] bg-[#f7f9fc] px-4 py-3 text-[11px] leading-5 text-slate-500">
                    {faq.answer}
                  </div>
                </details>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/scholarship"
              className="inline-flex items-center gap-2 rounded-full bg-[#e31e24] px-7 py-3.5 text-[11px] font-bold text-white shadow-[0_10px_20px_rgba(227,30,36,0.22)] transition-all hover:bg-[#c8191f] active:scale-95 cursor-pointer"
            >
              <span>Enroll Now To Avail Scholarship</span>
              <span className="text-sm leading-none">➜</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Student Success Stories */}
      <section className="bg-white py-20 px-4 sm:px-6 md:px-8 border-t border-neutral-100">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-4xl rounded-[22px] bg-[#103482] px-6 sm:px-10 py-10 text-center text-white shadow-[0_18px_40px_rgba(15,42,74,0.16)]">
            <h2 className="text-2xl sm:text-[30px] font-extrabold leading-tight text-white">
              Still have questions?
            </h2>
            <p className="mx-auto max-w-[500px] mt-3 text-xs sm:text-sm leading-6 text-white/80">
              Our expert counsellors are here to help you make the right career decision.
              Get personalized guidance in under 60 seconds.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="tel:+919987588932"
                className="inline-flex items-center justify-center rounded-lg bg-white px-5 py-2.5 text-xs font-bold text-[#1f4da3] shadow-sm transition-all hover:opacity-95 active:scale-95"
              >
                Talk to Counselor Now
                <span className="ml-2">➔</span>
              </a>
              <button
                type="button"
                onClick={() => window.dispatchEvent(new CustomEvent("openEligibilityModal"))}
                className="inline-flex items-center justify-center rounded-lg border border-white/50 bg-transparent px-5 py-2.5 text-xs font-bold text-white shadow-sm transition-all hover:bg-white/10 active:scale-95 cursor-pointer"
              >
                Download Brochure (PDF)
              </button>
            </div>
          </div>

          <div className="mt-16 text-center">
            <h2 className="text-3xl sm:text-[40px] font-extrabold text-[#1f3658] leading-tight">
              Student Success Stories
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-xs sm:text-sm leading-7 text-slate-500">
              Hear from our successful graduates who are now thriving in their dream careers.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {storyCards.map((story) => (
              <article
                key={story.title}
                className="overflow-hidden rounded-[20px] bg-white shadow-[0_10px_28px_rgba(15,42,74,0.08)] border border-neutral-100"
              >
                <div
                  className="relative h-60 w-full overflow-hidden bg-slate-100 group"
                >
                  <img
                    src={story.image}
                    alt={story.title}
                    className="h-full w-full object-cover transition-transform duration-500"
                  />
                  {/* Play Button Overlay - Disabled */}
                  {/* <div className="absolute inset-0 bg-black/10 group-hover:bg-black/25 transition-colors" />
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsVideoModalOpen(true);
                    }}
                    className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#e31e24] shadow-lg transition-transform group-hover:scale-110 active:scale-95"
                    aria-label={`Play story for ${story.title}`}
                  >
                    <svg className="ml-1 h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </button> */}
                  <div className="absolute left-0 right-0 bottom-0 bg-white/90 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.22em] text-[#1f3658]">
                    Selected for India
                  </div>
                </div>

                <div className="p-5">
                  <div className="flex items-center gap-3">
                    <div className="h-9 w-9 overflow-hidden rounded-full border border-neutral-200">
                      <img
                        src={story.image}
                        alt={story.title}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-sm font-extrabold text-[#1f3658]">
                        {story.title}
                      </h3>
                      <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#e31e24]">
                        {story.role}
                      </p>
                      <p className="text-[10px] font-semibold text-slate-400">
                        {story.company}
                      </p>
                    </div>
                  </div>

                  <p className="mt-4 text-[12px] leading-6 text-slate-500 italic">
                    {story.quote}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 flex items-center justify-center gap-3">
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#d9e4f5] bg-white text-[#1f4da3] shadow-sm"
              aria-label="Previous story"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => window.dispatchEvent(new CustomEvent("openEligibilityModal"))}
              className="inline-flex items-center justify-center rounded-full bg-[#1f4da3] hover:bg-[#183d84] px-5 py-2.5 text-xs font-bold text-white shadow-sm transition-all cursor-pointer active:scale-95"
            >
              Be in Amigo's Next Story
              <span className="ml-2">➔</span>
            </button>
          </div>
        </div>
      </section>

      {/* Bottom Banner */}
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
            2026 Batches Are Filling Fast — Secure Your Spot Now!
          </h2>

          {/* Subtitle */}
          {/* <p className="text-slate-300 text-sm sm:text-lg max-w-2xl mx-auto mt-4 font-sans font-medium">
            Admissions Open — Secure Your Seat Early. One free call is all it takes.
          </p> */}

          {/* Government Certification Badge */}
          <div className="inline-flex items-center gap-2 bg-white/5 border border-[#DDAB30]/30 text-[#DDAB30] text-[10px] sm:text-xs font-bold px-5 py-2.5 rounded-xl tracking-wide mt-8 font-sans">
            <span>🏛️</span>
            <span>Certified course</span>
          </div>

          {/* Buttons Row */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12 max-w-5xl mx-auto">
            {/* Check Eligibility Red Button */}
            <button
              onClick={() => window.dispatchEvent(new CustomEvent("openEligibilityModal"))}
              className="w-full sm:w-auto bg-[#e31e24] hover:bg-[#c2141a] text-white font-sans font-bold text-xs sm:text-sm px-8 py-4 rounded-xl shadow-[0_8px_25px_rgba(227,30,36,0.25)] hover:shadow-[0_12px_30px_rgba(227,30,36,0.35)] transition-all active:scale-95 flex items-center justify-center gap-2 uppercase tracking-wide cursor-pointer focus:outline-none"
            >
              <span>⚡</span> CHECK MY ELIGIBILITY NOW
            </button>

            {/* Start My Career Red Button */}
            <button
              onClick={() => window.dispatchEvent(new CustomEvent("openEligibilityModal"))}
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
              <span>10,000+ Students Trained</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-emerald-400">✓</span>
              <span>Certified Courses</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-emerald-400">✓</span>
              <span>200+ Hiring Partners</span>
            </div>
          </div>

          {/* Download Brochure PDF Button below Trust Markers */}
          <div className="mt-8 flex justify-center">
            <button
              onClick={() => window.dispatchEvent(new CustomEvent("openEligibilityModal"))}
              className="inline-flex items-center justify-center gap-2.5 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-sans font-bold text-xs sm:text-sm px-7 py-3 rounded-full shadow-lg transition-all active:scale-95 cursor-pointer"
            >
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M7.5 12l4.5 4.5m0 0l4.5-4.5M12 16.5V3" />
              </svg>
              <span>Download Brochure (PDF)</span>
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
