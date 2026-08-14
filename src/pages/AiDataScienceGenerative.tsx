import React from "react";
import aiDataHero from "../assets/img/ai&datahero1ad.png";
import aiDataIcon from "../assets/img/ai&dataicon2ad.png";
import eligibilityIcon from "../assets/img/iconaidata2ad.png";
import eligibilityBadgeIcon from "../assets/img/iconaidata3ad.png";
import faqBadgeIcon from "../assets/img/iconaidataad4.png";
import storyImage1 from "../assets/img/coursesvideo1a.png";
import storyImage2 from "../assets/img/coursesvideo2a.png";
import storyImage3 from "../assets/img/coursesvideo3a.png";
import storyImage4 from "../assets/img/coursesvideo4a.png";
import storyImage5 from "../assets/img/coursesvideo5a.png";

type OverviewItem = {
  label: string;
  value: string;
};

type HighlightCard = {
  title: string;
  description: string;
};

type EligibilityCard = {
  title: string;
  tag: string;
  detail: string;
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
  { label: "Next Batch Starting", value: "July 2026" },
  { label: "Timing", value: "Morning / Afternoon / Evening" },
  { label: "Our Branches", value: "Ghatkopar, Andheri & Thane" },
  { label: "Age", value: "17 to 25 Years" },
  { label: "Duration", value: "12 Months (5 Days/Week, 2 Hours/Day)" },
  { label: "Eligibility", value: "12th Pass" },
];

const highlights: HighlightCard[] = [
  { title: "Practical Curriculum", description: "Python, Generative AI, Machine Learning & Real Projects." },
  { title: "High-Demand Career Field", description: "Growing Demand for AI & Data Science Professionals Across India." },
  { title: "Dedicated Placement Support", description: "Profile Building, Tech & Analytics Employers Across Mumbai." },
  { title: "Strong Project Portfolio", description: "Build 8-10 Real Data Projects to Strengthen Your Resume & Interviews." },
  { title: "Interactive Offline Classroom Batches", description: "In-Person Learning at 3 Branches with Expert Guidance." },
  { title: "Strong Career Growth Potential", description: "Competitive Salaries Based on Skills, Projects & Employer Requirements." },
  { title: "Scholarship Opportunities", description: "Scholarships up to Rs50,000 Available." },
  { title: "Zero-Interest EMI Options", description: "Flexible Payment Plans to Make the Course Affordable." },
];

const formFields = [
  "Mobile Number",
  "Full Name",
  "Age",
  "Qualification",
  "Preferred Branch",
  "Gender",
];

const learnCards = [
  "Introduction to Artificial Intelligence & Data",
  "Python Programming for Data Science",
  "Data Analysis with Pandas & NumPy",
  "Data Visualization & Storytelling",
  "Machine Learning Fundamentals",
  "Deep Learning Concepts",
  "Generative AI & Modern AI Tools",
  "Statistics & Mathematical Foundations",
  "Real-World Projects & Case Studies",
  "Career Preparation & Job Readiness",
  "Big Data & Cloud Basics",
];

const eligibilityCards: EligibilityCard[] = [
  {
    title: "Educational Qualification",
    tag: "Required",
    detail: "12th Pass (any stream)",
    note: "Science, IT, and Commerce backgrounds welcome - open to beginners interested in data and AI",
  },
  {
    title: "Age Criteria",
    tag: "Required",
    detail: "17 to 25 Years",
    note: "Ideal for students, job seekers, and career switchers",
  },
  {
    title: "Basic Computer Knowledge",
    tag: "Essential",
    detail: "Comfortable with computers and internet",
    note: "No prior coding experience needed - we teach Python from scratch",
  },
  {
    title: "Analytical & Logical Thinking",
    tag: "Essential",
    detail: "Interest in data, numbers, and problem-solving",
    note: "We build your analytical skills throughout the course",
  },
  {
    title: "Communication Skills",
    tag: "Essential",
    detail: "Basic English understanding",
    note: "Ability to present and explain data findings clearly",
  },
  {
    title: "No Advanced Technical Background Required",
    tag: "Background",
    detail: "Beginners are welcome",
    note: "Step-by-step learning approach, suitable for career switchers too",
  },
];

const faqItems: FaqItem[] = [
  {
    question: "What is the duration of the AI & Data Science course?",
    answer: "The AI & Data Science course is a 12-month program with 5 days a week and 2 hours a day. Morning, afternoon, and evening batches are available at our Ghatkopar, Andheri & Thane branches.",
  },
  {
    question: "What is the eligibility for the AI & Data Science course?",
    answer: "The basic eligibility is 12th pass from any stream. We also welcome students from IT, commerce, and science backgrounds who want to start a career in data and AI.",
  },
  {
    question: "What will I learn in the AI & Data Science course?",
    answer: "You will learn Python, data analysis, machine learning, deep learning, generative AI, statistics, project building, and job-readiness skills.",
  },
  {
    question: "What is the salary after a data science course in India?",
    answer: "Salary depends on the role, company, and skills. Our training and placement support help students prepare for competitive entry-level opportunities.",
  },
  {
    question: "Are there data science jobs in Mumbai?",
    answer: "Yes, Mumbai has strong demand for data analytics, AI, and technology roles across startups, enterprises, and service companies.",
  },
  {
    question: "Do I need coding experience to join the AI & Data Science course?",
    answer: "No prior coding experience is needed. We teach Python and the core technical concepts from scratch in a step-by-step format.",
  },
  {
    question: "What makes a good AI & Data Science course for beginners?",
    answer: "A good beginner-friendly course should include practical training, structured modules, project work, mentor support, and placement guidance.",
  },
  {
    question: "Can I do the AI & Data Science course after 12th?",
    answer: "Yes, 12th pass students can apply. It is one of the most common entry points into the field.",
  },
  {
    question: "Does Amigo Academy provide placement support for data science students?",
    answer: "Yes, we provide placement support, interview preparation, and career counselling to help students prepare for suitable opportunities.",
  },
  {
    question: "Where are Amigo Academy's branches for the AI & Data Science course?",
    answer: "The course is available at our Ghatkopar, Andheri, and Thane branches in Mumbai.",
  },
  {
    question: "Is AI & Data Science a good career in 2026?",
    answer: "Yes, AI and data-driven roles continue to grow in 2026, making this a strong long-term career option for students entering the tech field.",
  },
  {
    question: "How do I enrol or check my eligibility?",
    answer: "You can enquire through the page form or speak with our counsellors for a quick eligibility check and course guidance.",
  },
  {
    question: "What is the difference between AI, Machine Learning and Data Science?",
    answer: "AI is the broader field of creating intelligent systems, machine learning is a subset focused on learning from data, and data science uses data analysis to generate business insights.",
  },
  {
    question: "Does the AI & Data Science course cover Generative AI?",
    answer: "Yes, the course includes Generative AI concepts along with modern AI tools and practical project exposure.",
  },
];

const storyCards: StoryCard[] = [
  {
    title: "Jasmine Soni",
    role: "Cabin Crew Executive",
    company: "Air Asia 2025",
    quote:
      '"Amigoz Air Hostess Academy completely transformed my career path. The practical training and expert guidance helped me land my dream job as a Cabin Crew Member within months of graduating."',
    image: storyImage1,
  },
  {
    title: "Swati Patil",
    role: "Airport Ground Staff",
    company: "Vistara 2025",
    quote:
      '"The comprehensive curriculum covered every aspect of the industry. The mock interviews and interview preparation made the whole process feel natural and calm."',
    image: storyImage2,
  },
  {
    title: "Hardik Chari",
    role: "Guest Service Executive",
    company: "IndiGo 2025",
    quote:
      '"Guest Service Executive roles can be competitive, but the placement team helped me build confidence and stay focused through each round."',
    image: storyImage3,
  },
  {
    title: "Issac Edward",
    role: "Passenger Service Executive",
    company: "Airport 2025",
    quote:
      '"The course and placement support gave me the right start. The training made me ready for a full-time airport role from day one."',
    image: storyImage4,
  },
  {
    title: "Ashwini Patil",
    role: "Cabin Crew",
    company: "Vistara 2025",
    quote:
      '"Best in class access to training and support. The interview preparation and mock sessions made all the difference for my selection."',
    image: storyImage5,
  },
];

export default function AiDataScienceGenerative() {
  return (
    <div className="bg-white text-neutral-900">
      <section className="relative overflow-hidden border-b border-neutral-100 bg-white">
       {/* Mobile Hero Section */}
       {/* Mobile Hero Section */}
<div className="md:hidden bg-white">

{/* Hero */}
<div className="relative h-[265px] overflow-hidden">

  <img
    src={new URL("../assets/img/ai&dataheromobileresponsivead1img.png", import.meta.url).href}
    alt="AI & Data Science with Generative AI & Machine Learning"
    className="
      absolute inset-0
      h-full w-full
      object-cover
      object-[70%_center]
    "
  />


  <div className="relative z-10 px-4 pt-8">

    <h1
      className="
        max-w-[220px]
        text-[26px]
        font-extrabold
        leading-[1.04]
        tracking-tight
        text-[#1f3658]
      "
    >
      AI &amp; Data
      <br />
      Science with
      <br />
      Generative AI
      <br />
      &amp; Machine
      <br />
      Learning
    </h1>


    <div className="mt-4 space-y-[5px]">

      <p className="text-[12px] font-semibold text-[#1f3658]">
        • 12 Months
      </p>

      <p className="text-[12px] font-semibold text-[#1f3658]">
        • Certificate Program
      </p>

      <p className="text-[12px] font-semibold text-red-500">
        • Practical Training
      </p>

    </div>

  </div>

</div>



{/* Course Overview */}

<div className="px-4 pt-6 pb-8">

  <h2
    className="
      mb-5
      text-[16px]
      font-extrabold
      text-[#1f3658]
    "
  >
    Course Overview
  </h2>


  <div className="space-y-[13px]">

    {overview.map((item) => (

      <div
        key={item.label}
        className="
          flex
          items-start
          gap-3
          text-[11px]
          leading-[18px]
          text-slate-600
        "
      >

        <span
          className="
            mt-[3px]
            flex
            h-[12px]
            w-[12px]
            shrink-0
            items-center
            justify-center
            rounded-full
            border
            border-[#1f3658]
          "
        >
          <span className="h-[5px] w-[5px] rounded-full bg-[#1f3658]" />
        </span>


        <p>
          <span className="font-bold text-[#1f3658]">
            {item.label}:
          </span>{" "}
          {item.value}
        </p>


      </div>

    ))}

  </div>

</div>


</div>

        <div className="hidden md:block">
          <div className="absolute inset-0">
            <div className="absolute inset-y-0 right-0 w-full lg:w-[56%]">
              <img
                src={aiDataHero}
                alt="AI & Data Science with Generative AI & Machine Learning"
                className="h-full w-full object-cover object-center lg:object-center"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white via-48% to-white/0" />
            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/75 to-transparent lg:hidden" />
          </div>

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 md:px-8 py-10 sm:py-14 lg:py-20">
            <div className="max-w-[520px] lg:max-w-[560px] space-y-5 sm:space-y-6">
              <div className="text-[10px] sm:text-xs font-semibold text-slate-400">
                Home &nbsp; &gt; &nbsp;
                <span className="text-[#e31e24]">AI &amp; Data Science with Generative AI &amp; Machine Learning</span>
              </div>

              <div className="space-y-4">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[58px] font-extrabold tracking-tight text-[#1f3658] leading-[1.05]">
                  AI &amp; Data Science with Generative AI &amp; Machine Learning
                </h1>
                <div className="text-sm sm:text-base font-semibold text-slate-700 leading-6">
                  12 Months <span className="mx-2 text-slate-300">&bull;</span> Certificate Program <span className="mx-2 text-[#e31e24]">&bull;</span> Live Projects
                </div>
              </div>

              <div className="space-y-3">
                <h2 className="text-base sm:text-lg lg:text-xl font-extrabold text-[#1f3658]">
                  Course Overview
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 sm:gap-x-8 gap-y-3">
                  {overview.map((item) => (
                    <div key={item.label} className="flex items-start gap-2 text-xs sm:text-sm text-slate-600">
                      <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#1f3658]" />
                      <p>
                        <span className="font-bold text-slate-700">{item.label}:</span>{" "}
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 -mt-6 sm:-mt-8 relative z-10 pb-14 sm:pb-16">
        <div className="rounded-[24px] border border-neutral-100 bg-white p-4 sm:p-7 shadow-[0_12px_35px_rgba(15,42,74,0.06)]">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-extrabold text-[#1f3658] leading-tight">
              Course Highlights
            </h2>
          </div>

          <div className="mt-6 sm:mt-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 sm:gap-4">
            {highlights.map((item) => (
              <article
                key={item.title}
                className="rounded-[16px] border border-[#f3e7c7] bg-[#fff8e7] px-4 py-4 shadow-[0_8px_20px_rgba(15,42,74,0.03)]"
              >
                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-white border border-[#dfe7fb] shadow-sm">
                    <img src={aiDataIcon} alt="" aria-hidden="true" className="h-5 w-5 object-contain" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-[13px] sm:text-sm font-extrabold text-[#1f3658] leading-snug">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-[11px] sm:text-xs leading-5 text-slate-500">
                      {item.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 sm:px-6 md:px-8 pb-16 sm:pb-20">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-[22px] bg-[#294f9f] px-4 sm:px-7 md:px-8 py-6 sm:py-8 shadow-[0_12px_28px_rgba(15,42,74,0.16)]">
            <div className="max-w-4xl">
              <h2 className="text-[22px] sm:text-[30px] font-extrabold text-white leading-tight text-center sm:text-left">
                Kickstart Your Career In 12 Months
              </h2>
              <p className="mt-1 text-[10px] sm:text-xs font-medium text-white/85 text-center sm:text-left">
                Get Batch timings and Seat availability
              </p>
            </div>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
              {formFields.map((field) => (
                <label
                  key={field}
                  className="flex h-11 items-center rounded-full bg-white px-4 text-xs sm:text-sm text-slate-400 shadow-[0_1px_0_rgba(255,255,255,0.2)_inset]"
                >
                  <input
                    type="text"
                    placeholder={field}
                    aria-label={field}
                    className="w-full bg-transparent text-slate-700 placeholder:text-slate-400 outline-none"
                  />
                </label>
              ))}
            </div>

            <div className="mt-5 flex justify-center sm:justify-end">
              <button className="inline-flex items-center gap-0 rounded-full overflow-hidden">
                <span className="bg-[#8d9fd0] px-5 sm:px-6 py-2.5 text-xs sm:text-sm font-bold text-[#15306b]">
                  Enroll Now
                </span>
                <span className="flex h-10 w-10 items-center justify-center bg-[#9b2754] text-white text-lg">
                  →
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f8fb] py-16 sm:py-20 lg:py-24 border-t border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
          <h2 className="text-center text-2xl sm:text-3xl lg:text-[40px] font-extrabold text-[#2b2b2b] leading-tight">
            What Will You Learn?
          </h2>

          <div className="mt-8 sm:mt-12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5">
            {learnCards.map((card) => (
              <article
                key={card}
                className="rounded-[16px] bg-white px-5 sm:px-6 py-5 sm:py-6 shadow-[0_10px_25px_rgba(15,42,74,0.05)] border border-white"
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="max-w-[250px] text-[14px] sm:text-[15px] font-extrabold leading-snug text-[#232d46]">
                    {card}
                  </h3>
                  <span className="text-[#ff3b30] text-xl leading-none shrink-0">→</span>
                </div>
                <div className="mt-6 text-sm font-bold text-[#ff1f1f]">View Details</div>
              </article>
            ))}
          </div>

          <div className="mt-10 text-center">
            <button className="inline-flex items-center gap-2 text-sm font-extrabold text-[#ff1f1f]">
              Show More
              <span className="text-lg">→</span>
            </button>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20 lg:py-24 border-t border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
          <div className="text-center">
            <div className="inline-flex items-center rounded-full bg-[#eef7ff] px-4 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#2a67b1] border border-[#d9e7fb]">
              <img src={eligibilityIcon} alt="" aria-hidden="true" className="mr-2 h-4 w-4 object-contain" />
              Quick Eligibility Check
            </div>
            <h2 className="mt-4 text-2xl sm:text-3xl lg:text-[40px] font-extrabold text-[#18304f] leading-tight">
              Do You Meet the Eligibility Criteria?
            </h2>
            <p className="mx-auto mt-3 max-w-3xl text-xs sm:text-sm leading-7 text-slate-500">
              Check if you qualify for our 12-month AI &amp; Data Science with Generative AI &amp; Machine Learning.
            </p>
          </div>

          <div className="mt-8 sm:mt-12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5 text-left">
            {eligibilityCards.map((item) => (
              <article
                key={item.title}
                className="min-h-[230px] rounded-[18px] border border-[#eef1f7] bg-white p-5 sm:p-6 shadow-[0_10px_28px_rgba(15,42,74,0.05)] flex flex-col"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#f3f6fd] border border-[#e5ecfb] overflow-hidden">
                      <img src={eligibilityBadgeIcon} alt="" className="h-5 w-5 object-contain" />
                    </div>
                    <div className="pt-0.5">
                      <h3 className="text-[16px] sm:text-[18px] font-extrabold text-[#1e2a44] leading-6">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-[13px] font-medium text-[#334155] leading-6">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                  <div className="shrink-0 rounded-full border border-[#ffb0b0] bg-[#fff5f5] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-[#f44336]">
                    {item.tag}
                  </div>
                </div>

                <div className="mt-auto border-t border-[#f3f5fb] pt-4">
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center">
                      <img src={eligibilityIcon} alt="" className="h-5 w-5 object-contain" />
                    </div>
                    <p className="text-[12px] leading-6 text-slate-500">
                      {item.note}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-6 rounded-[18px] border border-[#eef1f7] bg-[#fbfcfe] px-5 py-5 shadow-[0_10px_28px_rgba(15,42,74,0.04)] flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 text-left">
            <div>
              <h3 className="text-base sm:text-lg font-extrabold text-[#18304f]">
                Not Sure If You Qualify?
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-slate-500">
                Don't worry! Our counsellors will evaluate your profile and suggest the best career path and options for you.
              </p>
            </div>
            <a
              href="/contact#enquiry-form"
              className="inline-flex items-center justify-center rounded-full bg-[#1f4da3] px-6 py-3 text-xs sm:text-sm font-bold text-white shadow-sm transition-all hover:bg-[#183e82] active:scale-95"
            >
              Check My Eligibility
              <span className="ml-2">+</span>
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20 px-4 sm:px-6 md:px-8 border-t border-neutral-100">
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center rounded-full bg-[#eef7ff] px-4 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#2a67b1] border border-[#d9e7fb]">
            <img src={faqBadgeIcon} alt="" aria-hidden="true" className="mr-2 h-4 w-4 object-contain" />
            Common Questions Answered
          </div>
          <h2 className="mt-4 text-2xl sm:text-3xl lg:text-[40px] font-extrabold text-[#18304f] leading-tight">
            Frequently Asked Questions - Aviation,<br className="hidden sm:block" />
            Hospitality &amp; Travel Management Training
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-xs sm:text-sm leading-7 text-slate-500">
            Got questions? We have answers. Still confused? Speak to our counsellor in 60 seconds.
          </p>

          <div className="mt-10 space-y-3 text-left">
            {faqItems.map((faq, index) => {
              const isOpen = index === 0;
              return (
                <details
                  key={faq.question}
                  open={isOpen}
                  className="group rounded-xl border border-[#e8eef8] bg-white shadow-[0_10px_28px_rgba(15,42,74,0.05)] overflow-hidden"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-4 py-4 text-sm font-semibold text-[#1e2a44]">
                    <span className="flex items-center gap-3">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#2a67b1] text-[10px] font-bold text-white">
                        {index + 1}
                      </span>
                      <span>{faq.question}</span>
                    </span>
                    <svg
                      className="h-4 w-4 shrink-0 text-slate-400 transition-transform duration-300 group-open:rotate-180"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2.25}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="border-t border-[#edf1f7] px-4 py-4">
                    <div className="rounded-lg border-l-4 border-[#2a67b1] bg-[#f8fbff] px-4 py-4 text-xs sm:text-sm leading-6 text-slate-500">
                      {faq.answer}
                    </div>
                  </div>
                </details>
              );
            })}
          </div>

          <div className="mt-10 sm:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            {[
              { value: "1,200+", label: "Students Enrolled" },
              { value: "200+", label: "Hiring Partners" },
              { value: "90 Days", label: "Avg. Placement Time" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl sm:text-4xl font-extrabold text-[#1e2a44]">
                  {stat.value}
                </div>
                <div className="mt-2 text-[11px] sm:text-xs font-medium text-slate-500">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 sm:px-6 md:px-8 pb-16 sm:pb-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-4xl rounded-[22px] bg-[#1f4da3] px-5 sm:px-10 py-8 sm:py-10 text-center text-white shadow-[0_18px_40px_rgba(15,42,74,0.16)]">
            <h2 className="text-2xl sm:text-[30px] text-white font-extrabold leading-tight">
              Still have questions?
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-xs sm:text-sm leading-6 text-white/80">
              Our expert counsellors are here to help you make the right career decision.
              Get personalized guidance in under 60 seconds.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="/contact#enquiry-form"
                className="inline-flex items-center justify-center rounded-lg bg-white px-5 py-2.5 text-xs font-bold text-[#1f4da3] shadow-sm transition-all hover:opacity-95 active:scale-95"
              >
                Talk to Counselor Now
                <span className="ml-2">→</span>
              </a>
              <a
                href="/contact#enquiry-form"
                className="inline-flex items-center justify-center rounded-lg border border-white/50 bg-transparent px-5 py-2.5 text-xs font-bold text-white shadow-sm transition-all hover:bg-white/10 active:scale-95"
              >
                Download Brochure (PDF)
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-10 sm:py-14 px-4 sm:px-6 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-extrabold text-[#1f3658] leading-tight">
              Student Success Stories
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-xs sm:text-sm leading-7 text-slate-500">
              Hear from our successful graduates who are now thriving in their dream careers.
            </p>
          </div>

          <div className="mt-8 sm:mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6">
            {storyCards.map((story) => (
              <article
                key={story.title}
                className="overflow-hidden rounded-[20px] bg-white shadow-[0_10px_28px_rgba(15,42,74,0.08)] border border-neutral-100"
              >
                <div className="relative h-52 sm:h-60 w-full overflow-hidden bg-slate-100">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/10" />
                  <button
                    type="button"
                    className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#e31e24] shadow-lg transition-transform hover:scale-105 active:scale-95"
                    aria-label={`Play story for ${story.title}`}
                  >
                    <svg className="ml-1 h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </button>
                  <div className="absolute left-0 right-0 bottom-0 bg-white/90 px-4 py-2 text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.18em] sm:tracking-[0.22em] text-[#1f3658]">
                    Selected for India
                  </div>
                </div>

                <div className="p-4 sm:p-5">
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

          <div className="mt-8 sm:mt-10 flex items-center justify-center gap-3">
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
              className="inline-flex items-center justify-center rounded-full bg-[#1f4da3] px-5 py-2.5 text-xs font-bold text-white shadow-sm"
            >
              Next Story
              <span className="ml-2">+</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
