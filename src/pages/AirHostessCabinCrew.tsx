import React from "react";
import heroImage from "../assets/img/aircourseh111a.png";
import courseIcon121 from "../assets/img/courseicon121.png";
import airhostessIcon2 from "../assets/img/airhostessicon2.png";
import coursesVideo1a from "../assets/img/coursesvideo1a.png";
import coursesVideo2a from "../assets/img/coursesvideo2a.png";
import coursesVideo3a from "../assets/img/coursesvideo3a.png";
import coursesVideo4a from "../assets/img/coursesvideo4a.png";
import coursesVideo5a from "../assets/img/coursesvideo5a.png";

type OverviewItem = {
  label: string;
  value: string;
};

type HighlightCard = {
  title: string;
  description: string;
};

type LearnCard = {
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
  { label: "Next Batch Starting", value: "May 2026" },
  { label: "Timing", value: "Morning / Afternoon / Evening" },
  { label: "Our Branches", value: "Ghatkopar, Andheri & Thane" },
  { label: "Age", value: "17 to 24 Years" },
  { label: "Duration", value: "12 Months (6 Days/Week, 2 Hours/Day)" },
  { label: "Eligibility", value: "12th Pass" },
];

const highlights: HighlightCard[] = [
  {
    title: "Maharashtra Government Certified Program",
    description: "Your ticket to a globally recognized career in aviation and hospitality.",
  },
  {
    title: "Grooming & Personality Development",
    description: "Professional appearance, communication, confidence, and etiquette training.",
  },
  {
    title: "Dedicated Placement Support",
    description: "Profile building, job interviews, and support through every hiring stage.",
  },
  {
    title: "Real Interview & Grooming Focus",
    description: "Training sessions aligned to airline requirements and role expectations.",
  },
  {
    title: "Interactive Offline Classroom Batches",
    description: "Learn in person with hands-on mentoring and a structured daily routine.",
  },
  {
    title: "Domestic & International Career Paths",
    description: "Open doors to airlines, airports, hospitality, and premium customer service.",
  },
  {
    title: "Scholarship Opportunities",
    description: "Scholarship support up to Rs50,000 for eligible students.",
  },
  {
    title: "Zero-Interest EMI Options",
    description: "Flexible payment plans to make your course more affordable.",
  },
];

const learnCards: LearnCard[] = [
  { title: "Introduction to Aviation & Cabin Crew Roles" },
  { title: "Grooming & Personality Development" },
  { title: "Communication Skills for Cabin Crew" },
  { title: "Passenger Handling & In-Flight Service" },
  { title: "Safety, Emergency & First Aid Procedures" },
  { title: "Cabin Crew Eligibility & Career Roadmap" },
  { title: "Interview Preparation & Job Readiness" },
  { title: "Aviation Industry Exposure & Airline Recruitment Process" },
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
    question: "What is the duration of the air hostess / cabin crew course at Amigoz Academy?",
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
    question: "What if I donâ€™t meet the airline height requirement?",
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
    question: "What makes Amigoz Academyâ€™s cabin crew course different?",
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
      '"Amigoz Air Hostess Academy completely transformed my career path. The practical training and expert guidance helped me land my dream job as a Cabin Crew Member within months of graduating."',
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
  return (
    <div className="bg-[#f5f7fb] text-neutral-900">
      {/* Hero */}
      <section className="relative overflow-hidden bg-white border-b border-neutral-100">
        <div className="absolute inset-0">
          <div className="absolute inset-y-0 right-0 w-full lg:w-[58%]">
            <img
              src={heroImage}
              alt="Air hostess and cabin crew training"
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white via-48% to-white/0" />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/70 to-transparent lg:hidden" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 md:px-8 py-10 sm:py-14 lg:py-20">
          <div className="max-w-[540px]">
            <div className="text-[10px] sm:text-xs font-semibold text-slate-400">
              Home &nbsp; &gt; &nbsp;
              <span className="text-[#e31e24]">
                Air Hostess / Cabin Crew &amp; Hospitality Management
              </span>
            </div>

            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-[58px] font-extrabold tracking-tight text-[#18304f] leading-[1.05]">
              Air Hostess / Cabin Crew &amp; Hospitality Management
            </h1>

            <div className="mt-4 flex flex-wrap items-center gap-2 text-xs sm:text-sm font-semibold">
              <span className="text-[#1f3658]">12 Months</span>
              <span className="text-[#e31e24]">â€¢</span>
              <span className="text-[#1f3658]">Certificate Program</span>
              <span className="text-[#e31e24]">â€¢</span>
              <span className="text-[#1f3658]">Practical Training</span>
            </div>

            <div className="mt-7">
              <h2 className="text-lg sm:text-xl font-extrabold text-[#18304f]">
                Course Overview
              </h2>
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                {overview.map((item) => (
                  <div key={item.label} className="flex items-start gap-3 text-sm">
                    <span className="mt-1.5 h-2.5 w-2.5 rounded-full bg-[#1f4da3]" />
                    <p className="text-slate-600">
                      <span className="font-semibold text-[#18304f]">{item.label}:</span>{" "}
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 -mt-8 relative z-10 pb-16">
        <div className="rounded-[22px] bg-white border border-neutral-100 shadow-[0_16px_40px_rgba(15,42,74,0.08)] px-5 sm:px-8 py-7">
          <h2 className="text-2xl sm:text-[30px] font-extrabold text-[#18304f] text-center">
            Course Highlights
          </h2>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-[#f5e7b8] bg-[#fffaf0] px-4 py-4 shadow-[0_6px_18px_rgba(15,42,74,0.04)]"
              >
                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white text-[#1f4da3] border border-[#dce7fb]">
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.25}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h18" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-extrabold text-[#18304f]">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-[11px] leading-5 text-slate-500">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enquiry Form */}
      <section className="bg-[#f4f6fb] py-6 px-4 sm:px-6 md:px-8 border-t border-neutral-100">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-[22px] bg-[#244c9d] px-5 sm:px-8 py-8 sm:py-10 shadow-[0_16px_40px_rgba(15,42,74,0.12)] text-white">
            <div className="max-w-2xl">
              <h2 className="text-2xl sm:text-[32px] font-extrabold leading-tight">
                Kickstart Your Career In 6 Months
              </h2>
              <p className="mt-2 text-[11px] sm:text-xs text-white/75">
                Get batch timings and seat availability.
              </p>
            </div>

            <form className="mt-8 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
              {[
                "Mobile Number",
                "Full Name",
                "Age",
                "Qualification",
                "Preferred Branch",
                "Gender",
              ].map((placeholder) => (
                <input
                  key={placeholder}
                  type="text"
                  placeholder={placeholder}
                  className="h-11 rounded-full bg-white px-4 text-sm text-slate-700 placeholder:text-slate-400 outline-none border border-transparent focus:border-[#d8e2f7]"
                />
              ))}

              <div className="sm:col-span-2 xl:col-span-1 flex items-center gap-3">
                <button
                  type="submit"
                  className="w-full h-11 rounded-full bg-[#f15d6a] text-white font-bold text-sm shadow-sm transition-all hover:bg-[#e24d5c] active:scale-95"
                >
                  Enroll Now
                </button>
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#6b78a7] text-white">
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* What Will You Learn */}
      <section className="bg-[#f4f6fb] py-20 px-4 sm:px-6 md:px-8 border-t border-neutral-100">
        <div className="mx-auto max-w-[1320px] text-center">
          <h2 className="text-3xl sm:text-[40px] font-extrabold text-[#2a2a2a] leading-tight">
            What Will You Learn?
          </h2>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 text-left">
            {learnCards.map((item) => (
              <div
                key={item.title}
                className="min-h-[130px] rounded-[16px] border border-[#eef1f7] bg-white px-5 py-5 shadow-[0_8px_22px_rgba(15,42,74,0.04)]"
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="max-w-[88%] text-[15px] font-extrabold text-[#1f2e4d] leading-6">
                    {item.title}
                  </h3>
                  <span className="mt-0.5 text-[#ff2f2f] text-xl leading-none">&rsaquo;</span>
                </div>
                <button
                  type="button"
                  className="mt-7 text-sm font-bold text-[#ff2f2f]"
                >
                  View Details
                </button>
              </div>
            ))}
          </div>

          <button
            type="button"
            className="mt-10 inline-flex items-center justify-center text-sm font-bold text-[#ff2f2f]"
          >
            Show More
            <span className="ml-2">&rarr;</span>
          </button>
        </div>
      </section>

      {/* Eligibility Criteria */}
      <section className="bg-white py-16 px-4 sm:px-6 md:px-8 border-t border-neutral-100">
        <div className="mx-auto max-w-7xl text-center">
          <div className="inline-flex items-center rounded-full bg-[#eef7ff] px-4 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#2a67b1] border border-[#d9e7fb]">
            Quick Eligibility Check
          </div>
          <h2 className="mt-4 text-3xl sm:text-[40px] font-extrabold text-[#18304f] leading-tight">
            Do You Meet the Eligibility Criteria?
          </h2>
          <p className="mx-auto mt-3 max-w-3xl text-xs sm:text-sm leading-7 text-slate-500">
            Check if you qualify for our 6-month Aviation, Hospitality & Travel Management program.
            Most students who meet these simple criteria get placed within 90 days.
          </p>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 text-left">
            {criteriaCards.map((item) => (
              <div
                key={item.title}
                className="min-h-[230px] rounded-[18px] border border-[#eef1f7] bg-white p-6 shadow-[0_10px_28px_rgba(15,42,74,0.05)] flex flex-col"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#f3f6fd] border border-[#e5ecfb] overflow-hidden">
                      <img src={courseIcon121} alt="" className="h-5 w-5 object-contain" />
                    </div>
                    <div className="pt-0.5">
                      <h3 className="text-[18px] font-extrabold text-[#1e2a44] leading-6">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-[13px] font-medium text-[#334155] leading-6">
                        {item.details}
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
                      <img src={airhostessIcon2} alt="" className="h-5 w-5 object-contain" />
                    </div>
                    <p className="text-[12px] leading-6 text-slate-500">
                      {item.note}
                    </p>
                  </div>
                </div>
              </div>
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

      {/* FAQ Section */}
      <section className="bg-white py-20 px-4 sm:px-6 md:px-8 border-t border-neutral-100">
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center rounded-full bg-[#eef7ff] px-4 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#2a67b1] border border-[#d9e7fb]">
            Common Questions Answered
          </div>
          <h2 className="mt-4 text-3xl sm:text-[40px] font-extrabold text-[#18304f] leading-tight">
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

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
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

      <section className="bg-white py-20 px-4 sm:px-6 md:px-8 border-t border-neutral-100">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-4xl rounded-[22px] bg-[#1f4da3] px-6 sm:px-10 py-10 text-center text-white shadow-[0_18px_40px_rgba(15,42,74,0.16)]">
            <h2 className="text-2xl sm:text-[30px]  text-white font-extrabold leading-tight">
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
                <span className="ml-2">+</span>
              </a>
              <a
                href="/contact#enquiry-form"
                className="inline-flex items-center justify-center rounded-lg border border-white/50 bg-transparent px-5 py-2.5 text-xs font-bold text-white shadow-sm transition-all hover:bg-white/10 active:scale-95"
              >
                Download Brochure (PDF)
              </a>
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
                <div className="relative h-60 w-full overflow-hidden bg-slate-100">
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
