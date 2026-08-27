import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

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

// Awards & Accreditations images
import Awards1 from "../assets/img/Awards1.png";
import Awards2 from "../assets/img/Awards2.png";
import Awards3 from "../assets/img/Awards3.png";
import Awards4 from "../assets/img/Awards4.png";
import Awards5 from "../assets/img/Awards5.png";
import Awards6 from "../assets/img/Awards6.png";
import Awards7 from "../assets/img/Awards7.png";
import Awards8 from "../assets/img/Awards8.png";

interface AboutProps {
  setCurrentPage?: (page: string) => void;
}

export default function About({ setCurrentPage }: AboutProps = {}) {
  const navigate = useNavigate();
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

  const accordionData = [
    {
      title: "CABIN CREW (AIR HOSTESS) & HOSPITALITY MANAGEMENT",
      emoji: "✈️",
      content: (
        <div className="space-y-3 font-sans text-xs sm:text-sm">
          <p className="text-slate-600 font-medium leading-relaxed">
            Landing a job as a cabin crew member requires a combination of perfect grooming, outstanding communication skills, and safety awareness. Here is how you can prepare:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-slate-500 font-medium">
            <li><strong className="text-slate-700">Grooming & Appearance:</strong> Airlines maintain high standards. Invest in professional attire, skin care, and posture training.</li>
            <li><strong className="text-slate-700">Communication Skills:</strong> Practice group discussions, situational questions, and customer service scenarios. Clarity, politeness, and active listening are key.</li>
            <li><strong className="text-slate-700">Medical & Fitness Standards:</strong> Ensure you meet the height, weight, and vision requirements of your target airlines. Basic swimming skills are also a major plus.</li>
          </ul>
        </div>
      ),
    },
    {
      title: "AIRPORT GROUND STAFF & HOSPITALITY MANAGEMENT",
      emoji: "🛂",
      content: (
        <div className="space-y-3 font-sans text-xs sm:text-sm">
          <p className="text-slate-600 font-medium leading-relaxed">
            Ground staff are the backbone of airport operations. A successful ground staff career relies on strong customer service and operational efficiency:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-slate-500 font-medium">
            <li><strong className="text-slate-700">Customer Relations:</strong> Learn conflict resolution, passenger handling, and empathy. You are the face of the airline at the terminal.</li>
            <li><strong className="text-slate-700">Terminal Operations:</strong> Master check-in procedures, baggage handling systems, boarding gate operations, and security protocols.</li>
            <li><strong className="text-slate-700">Industry Standards:</strong> Familiarize yourself with IATA rules, dangerous goods regulations, and airport safety measures.</li>
          </ul>
        </div>
      ),
    },
    {
      title: "AI & DATA SCIENCE",
      emoji: "💻",
      content: (
        <div className="space-y-3 font-sans text-xs sm:text-sm">
          <p className="text-slate-600 font-medium leading-relaxed">
            Data Science and AI are shaping the future of industries. To build a robust career in this domain, focus on these critical areas:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-slate-500 font-medium">
            <li><strong className="text-slate-700">Programming Foundations:</strong> Master Python, SQL, and libraries like Pandas, NumPy, and Scikit-Learn.</li>
            <li><strong className="text-slate-700">Core Concepts:</strong> Understand probability, statistics, regression models, classification techniques, and deep learning basics.</li>
            <li><strong className="text-slate-700">Practical Projects:</strong> Build real-world applications, clean messy datasets, and document your projects on GitHub and Kaggle.</li>
          </ul>
        </div>
      ),
    },
  ];

  const toggleAccordion = (index: number) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const statistics = [
    { number: "10,000+", label: "Students Trained Successfully" },
    { number: "100%", label: "Placement Assistance Guarantee" },
    { number: "150+", label: "Global Airlines & Tech Recruiters" },
    { number: "₹4.5L - ₹9.2L", label: "Average Starting Salary Range" },
  ];

  const partners = [
    { name: "Indigo Airlines", logo: "✈️" },
    { name: "Air India", logo: "🇮🇳" },
    { name: "SpiceJet", logo: "🌶️" },
    { name: "Qatar Airways", logo: "🇶🇦" },
    { name: "Emirates", logo: "🇦🇪" },
    { name: "Etihad Airways", logo: "✨" },
    { name: "GoFirst", logo: "⭐" },
  ];

  const studentSuccess = [
    {
      name: "Sneha Sharma",
      role: "Cabin Crew, Indigo Airlines",
      batch: "Aviation 2024 Batch",
      quote: "Amigo Academy transformed my confidence. The practical sessions in mock cabins prepared me perfectly for my airlines interviews. Getting placed before completing the course was a dream come true!",
      initial: "S"
    },
    {
      name: "Rahul Deshmukh",
      role: "Ground Operations, Qatar Airways",
      batch: "Aviation 2023 Batch",
      quote: "The recruiters at Amigo are extremely supportive. They guided me through group discussions, grooming sessions, and technical tests. I'm now based out of Doha working for a 5-star airline.",
      initial: "R"
    },
    {
      name: "Anjali Patil",
      role: "Airport Manager, Vistara",
      batch: "Airport Management 2024 Batch",
      quote: "A certified course combined with expert training gave me an edge in the interviews. The branches and training mockups are highly professional.",
      initial: "A"
    }
  ];

  return (
    <div className="flex flex-col space-y-20 pb-20">

      {/* About Us Hero Section */}
      <section className="w-full bg-[#f1f5f9] min-h-[420px] sm:min-h-[500px] lg:h-[520px] relative overflow-hidden flex items-center border-b border-neutral-200/50">
        {/* Desktop Background Image: right-0, w-[50%], hidden on mobile */}
        <div className="hidden lg:block absolute top-0 right-0 h-full w-[50%] z-0">
          <img
            src={new URL("../assets/img/aboutushero.png", import.meta.url).href}
            alt="Cabin Crew Cabin Flight"
            className="h-full w-full object-cover lg:object-left-bottom"
            onError={(e) => {
              // Fallback mockup image
              e.currentTarget.src = "https://images.unsplash.com/photo-1540962351504-03099e0a754b?auto=format&fit=crop&q=80&w=800";
            }}
          />
          {/* Subtle gradient overlay to fade into the content container background */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#f1f5f9] via-[#f1f5f9]/70 to-transparent z-10" />
        </div>

        {/* Mobile Background Image: w-full, height is 100% */}
        <div className="block lg:hidden absolute inset-0 z-0 w-full h-full">
          <img
            src={new URL("../assets/img/mobileheroaboutus.png", import.meta.url).href}
            alt="Cabin Crew Cabin Flight Mobile"
            className="w-full h-full object-cover object-[right_center]"
            onError={(e) => {
              e.currentTarget.src = "https://images.unsplash.com/photo-1540962351504-03099e0a754b?auto=format&fit=crop&q=80&w=800";
            }}
          />
        </div>

        {/* Content Container */}
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 md:px-8 relative z-20 flex items-center h-full py-12 lg:py-0">
          <div className="w-[50%] sm:w-[50%] lg:w-full max-w-[480px] space-y-4 sm:space-y-6 text-left">

            {/* Breadcrumbs */}
            <div className="flex items-center gap-1.5 text-xs sm:text-[13px] font-sans font-medium text-slate-400">
              <Link to="/" className="hover:text-[#DF1818] transition-colors focus:outline-none">Home</Link>
              <span className="text-slate-400 mx-1 select-none">&gt;</span>
              <span className="font-bold text-[#DF1818] tracking-tight">About Us</span>
            </div>

            {/* Title */}
            <h1 className="text-xl sm:text-3xl lg:text-[48px] font-outfit font-extrabold text-[#0b2f61] leading-[1.2] lg:leading-[1.1] tracking-tight">
              About Us
            </h1>

            {/* Copy Paragraphs */}
            <div className="space-y-3 sm:space-y-4 font-sans font-semibold text-neutral-600 text-[15px] sm:text-[15px] leading-relaxed">
              <p>
                Amigo Academy pvt Ltd is a career-focused training institute, founded in 2017, helping students build industry-ready skills and achieve successful careers in aviation.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Highlights Stats Section */}
      <section className="bg-slate-50/30 py-12 sm:py-16 border-t border-slate-100/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              { value: "10,000+", label: "Students Trained" },
              { value: "9+", label: "Years of Excellence" },
              { value: "3", label: "Specialized Career Paths" },
              { value: "200+", label: "Hiring Partners" }
            ].map((stat, idx) => (
              <div
                key={idx}
                className="bg-white rounded-[24px] border border-slate-100/80 shadow-[0_8px_30px_rgba(0,0,0,0.015)] p-5 sm:p-10 flex flex-col items-center justify-center text-center transition-all duration-300 hover:shadow-[0_16px_40px_rgba(0,0,0,0.03)] hover:-translate-y-0.5"
              >
                <span className="text-xl sm:text-[38px] font-outfit font-extrabold text-[#0b2f61] tracking-tight leading-none mb-3">
                  {stat.value}
                </span>
                <span className="text-slate-500 font-sans font-bold text-[10px] sm:text-[13px] tracking-wide">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* What Makes Amigo Academy Different Section */}
      <section className="bg-slate-50/30 py-20 sm:py-24 border-t border-slate-100/80">
        <div className="max-w-4xl mx-auto px-6">

          {/* Headings */}
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f2a4a] leading-tight font-sans tracking-tight mb-4">
              What Makes Amigo Academy Different
            </h2>

          </div>

          {/* List Content */}
          <div className="max-w-2xl mx-auto mt-10 space-y-5">
            {[
              "Training That Delivers Real Career Outcomes",
              "Across every vertical, our approach remains consistent",
              "Industry-aligned curriculum designed for real-world roles",
              "Experienced trainers with domain expertise Experienced trainers with domain expertise",
              "Interview preparation and placement support",
              "Nationally recognized certifications and affiliations",
              "We don't believe in one-size-fits-all education — we build professionals who are job-ready from day one."
            ].map((text, index) => (
              <div key={index} className="flex items-start space-x-4">
                {/* Checkmark Badge */}
                <div className="w-5 h-5 rounded-full bg-[#f6a619] flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                  <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>

                {/* Text */}
                <p className="text-slate-600 font-sans font-semibold text-xs sm:text-sm leading-relaxed pt-0.5">
                  {text}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA Connect Section */}
      <section
        style={{ backgroundColor: "#2e5185" }}
        className="w-full py-16 px-4 sm:px-6 md:px-8 text-white text-center border-t border-b border-neutral-100"
      >
        <div className="max-w-6xl mx-auto space-y-10">

          {/* Header */}
          <div className="space-y-3">
            <h2 className="text-2xl sm:text-3xl font-outfit font-extrabold text-white">
              Ready to Kickstart Your Career with Amigo Academy?
            </h2>
            <p className="text-neutral-200/90 text-xs sm:text-sm font-semibold">
              Connect with Amigo Academy Today!
            </p>
          </div>

          {/* Info Banner Container */}
          <div className="bg-[#244270]/90 rounded-3xl p-6 sm:p-8 border border-white/10 flex flex-col lg:flex-row items-center justify-between gap-6 text-left shadow-[0_15px_35px_rgba(11,47,97,0.15)]">

            {/* Address Info */}
            <div className="flex items-start gap-3 w-full lg:w-auto pb-4 lg:pb-0">
              <span className="text-[#dfaa29] text-xl mt-1">📍</span>
              <div className="space-y-1 max-w-[320px]">
                <span className="text-[10px] text-neutral-300 font-bold block uppercase tracking-wider">Amigo Academy Pvt Ltd</span>
                <p className="text-neutral-200 text-xs leading-relaxed font-semibold">
                  107 & 108, Sai Infotech, Patel Chowk, opp Railway Station, Pant Nagar - Ghatkopar East, Mumbai - MH 400077
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="hidden lg:block h-12 w-[1px] bg-white/10"></div>

            {/* Contact Stack */}
            <div className="flex flex-col gap-3 w-full lg:w-auto pb-4 lg:pb-0">
              {/* Call Info */}
              <div className="flex items-center gap-3">
                <span className="text-[#dfaa29] text-lg">📞</span>
                <div className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-neutral-200">
                  <span className="text-neutral-300">Call Us:</span>
                  <a href="tel:+919987588932" className="hover:underline font-bold text-white">+919987588932</a>
                </div>
              </div>
              {/* Email Info */}
              <div className="flex items-center gap-3">
                <span className="text-[#dfaa29] text-lg">✉️</span>
                <div className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-neutral-200">
                  <span className="text-neutral-300">Email:</span>
                  <a href="mailto:care@amigoacademy.in" className="hover:underline font-bold text-white">care@amigoacademy.in</a>
                </div>
              </div>
            </div>

            {/* Button */}
            <div className="w-full lg:w-auto pt-2 lg:pt-0">
              <button
                onClick={() => window.dispatchEvent(new CustomEvent("openEligibilityModal"))}
                className="w-full lg:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-neutral-50 text-[#0b2f61] font-sans font-bold text-[13px] px-8 py-3.5 rounded-full shadow-[0_8px_20px_rgba(255,255,255,0.05)] transition-all duration-300 active:scale-95 whitespace-nowrap cursor-pointer"
              >
                Get Free Counselling &rarr;
              </button>
            </div>

          </div>

        </div>
      </section>
      {/* From Classroom to Career Partner Slider Section */}
      <section className="w-full bg-white py-16 px-4 sm:px-6 md:px-8 border-t border-b border-neutral-100">
        <div className="max-w-7xl mx-auto space-y-10 text-center">

          {/* Header */}
          <h2 className="text-3xl sm:text-[38px] font-outfit font-extrabold text-[#0b2f61] leading-tight">
            From Classroom to Career with
          </h2>

          {/* Logos Continuous Marquee Slider (No Arrows) */}
          <div className="w-full overflow-hidden relative py-6">
            <div className="animate-marquee whitespace-nowrap flex items-center gap-12 sm:gap-16">
              {[
                { img: new URL("../assets/img/brand1.png", import.meta.url).href, alt: "Air India" },
                { img: new URL("../assets/img/brand2.png", import.meta.url).href, alt: "SpiceJet" },
                { img: new URL("../assets/img/brand3.png", import.meta.url).href, alt: "AirAsia" },
                { img: new URL("../assets/img/brand4.png", import.meta.url).href, alt: "Lufthansa" },
                { img: new URL("../assets/img/brand5.png", import.meta.url).href, alt: "Etihad Airways" },
                { img: new URL("../assets/img/brand1.png", import.meta.url).href, alt: "Air India" },
                { img: new URL("../assets/img/brand2.png", import.meta.url).href, alt: "SpiceJet" },
                { img: new URL("../assets/img/brand3.png", import.meta.url).href, alt: "AirAsia" },
                { img: new URL("../assets/img/brand4.png", import.meta.url).href, alt: "Lufthansa" },
                { img: new URL("../assets/img/brand5.png", import.meta.url).href, alt: "Etihad Airways" },
              ].map((brand, idx) => (
                <div key={idx} className="h-14 sm:h-16 md:h-20 inline-flex items-center justify-center shrink-0 transition-transform hover:scale-105 duration-300">
                  <img
                    src={brand.img}
                    alt={brand.alt}
                    className="max-h-full w-auto object-contain shrink-0"
                    onError={(e) => { e.currentTarget.style.display = "none"; }}
                  />
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Mission, Core Values & Focus Areas Section */}
      <section className="relative w-full py-20 px-4 sm:px-6 md:px-8 text-white overflow-hidden border-t border-b border-neutral-100">
        {/* Background Image with Dark Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={new URL("../assets/img/aboutusbg.png", import.meta.url).href}
            alt="Cabin Interior Background"
            className="w-full h-full object-cover filter brightness-[0.25] contrast-[0.9] grayscale"
            onError={(e) => {
              // Fallback dark placeholder
              e.currentTarget.src = "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=1200";
            }}
          />
        </div>

        {/* Content Columns */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 relative z-10 text-left">

          {/* Column 1: Mission */}
          <div className="space-y-6 md:pr-4">
            <h3 className="text-3xl text-white font-outfit font-extrabold tracking-tight">Mission</h3>
            <div className="space-y-4 font-sans text-xs sm:text-[13px] leading-relaxed text-neutral-300 font-semibold">
              <p>
                At Amigo Academy, our mission is to empower students with the skills, confidence, and professionalism required to succeed in competitive industries — nationally and globally.
              </p>
              <p>
                Through continuous innovation, expert mentorship, and outcome-driven training, we aim to create a workforce that is skilled, confident, and future-ready.
              </p>
            </div>
          </div>

          {/* Column 2: Our Core Values */}
          <div className="space-y-6 md:px-4 md:border-l md:border-white/10">
            <h3 className="text-3xl text-white font-outfit font-extrabold tracking-tight">Our Core Values</h3>
            <ul className="space-y-4 font-sans text-xs sm:text-[13px] leading-relaxed text-neutral-300 font-semibold list-disc pl-4">
              <li>
                As industries evolve, so do career aspirations.
              </li>
              <li>
                Recognizing this shift, Amigo Academy has strategically expanded into high-growth career verticals, while maintaining a unified training philosophy and brand identity.
              </li>
            </ul>
          </div>

          {/* Column 3: Key Focus Areas */}
          <div className="space-y-6 md:pl-4 md:border-l md:border-white/10">
            <h3 className="text-3xl text-white font-outfit font-extrabold tracking-tight">Key Focus Areas</h3>
            <ul className="space-y-4 font-sans text-xs sm:text-[13px] leading-relaxed text-neutral-300 font-semibold list-disc pl-4">
              <li>
                Founded in 2017 by industry veterans
              </li>
              <li>
                Trusted partner with leading airlines & hotels
              </li>
              <li>
                10,000+ Students Trained
              </li>
            </ul>
          </div>

        </div>
      </section>
      {/* Awards & Accreditations Section */}
      <section className="bg-slate-50/30 py-20 sm:py-24 border-t border-slate-100/80">
        <div className="max-w-7xl mx-auto px-6">

          {/* Headings */}
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f2a4a] leading-tight font-sans tracking-tight mb-4">
              Awards & Accreditations
            </h2>
            <p className="text-slate-500 font-semibold font-sans text-sm sm:text-base max-w-2xl leading-relaxed">
              Recognized for Excellence in Training & Industry Standards
            </p>
          </div>

          {/* Awards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                img: Awards1,
                text: "Dr. APJ Abdul Kalam Memorial Excellence Award"
              },
              {
                img: Awards2,
                text: "National Pride and excellence award"
              },
              {
                img: Awards3,
                text: "Ministry of labour"
              },
              {
                img: Awards4,
                text: "National Skill Development Corporation"
              },
              {
                img: Awards5,
                text: "Skill India"
              },
              {
                img: Awards6,
                text: "Aerospace and Aviation Sector Skill Council"
              },
              {
                img: Awards7,
                text: "ISO 9001-2015"
              },
              {
                img: Awards8,
                text: "Maharashtra State Board of Skill, Vocational Education and Training (MSBSVET)"
              }
            ].map((award, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border border-slate-100 shadow-[0_4px_12px_rgba(0,0,0,0.02)] p-6 flex flex-col items-center text-center transition-all duration-300 hover:shadow-[0_12px_28px_rgba(0,0,0,0.06)] hover:-translate-y-1"
              >
                {/* Image Container */}
                <div className="w-full h-32 flex items-center justify-center mb-5 p-2">
                  <img
                    src={award.img}
                    alt={award.text}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>

                {/* Description Text */}
                <h3 className="font-sans font-bold text-[#0f2a4a] text-xs sm:text-sm leading-snug px-2">
                  {award.text}
                </h3>
              </div>
            ))}
          </div>

        </div>
      </section>

      <section className="hidden max-w-7xl mx-auto w-full px-6 pt-16 pb-16 relative z-20">

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
              quote: "Amigo Air Hostess Academy completely transformed my career path. The practical training and expert guidance helped me land my dream job as a Cabin Crew Member within months of graduating.",
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
              quote: "ROHAN S. \"6-month course + placement team = best move after 12th. Got placed at Mumbai Airport within 5 months.\"",
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

                {/* Play Button Overlay - Disabled */}
                {/* <button
                  onClick={() => alert(`Playing video story of ${story.name}...`)}
                  className="relative z-10 w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-xl hover:scale-105 active:scale-95 transition-transform duration-200 cursor-pointer focus:outline-none"
                  aria-label="Play video"
                >
                  <svg className="w-5 h-5 text-[#e31e24] fill-current ml-0.5" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button> */}

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
        <div className="mt-16 flex items-center justify-center gap-4">
          {/* Previous Story Button */}
          <button
            onClick={() => alert("Previous story clicked (Carousel navigation placeholder)")}
            className="w-12 h-12 rounded-full border border-slate-200 bg-white flex items-center justify-center text-[#0f2a4a] hover:border-slate-300 hover:bg-slate-50 transition-all duration-200 active:scale-95 focus:outline-none shadow-sm cursor-pointer"
            aria-label="Previous Story"
          >
            <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>

          {/* Be in Amigo's Next Story Button */}
          <button
            onClick={() => window.dispatchEvent(new CustomEvent("openEligibilityModal"))}
            className="inline-flex items-center gap-2 bg-[#244270] hover:bg-[#1a3052] text-white font-sans font-bold text-sm px-6 py-3.5 rounded-full shadow-[0_4px_12px_rgba(36,66,112,0.15)] active:scale-95 transition-all duration-200 focus:outline-none cursor-pointer"
          >
            <span>Be in Amigo's Next Story</span>
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </button>
        </div>
      </section>


      {/* Core Team Members Section */}
      <section className="hidden bg-white py-20 sm:py-24 border-t border-slate-100/80">
        <div className="max-w-7xl mx-auto px-6 text-center">

          {/* Headings */}
          <div className="mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f2a4a] leading-tight font-sans tracking-tight mb-4">
              Core Team Members
            </h2>
            <p className="text-slate-500 font-semibold font-sans text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              Guiding Our Company Towards Success
            </p>
          </div>

          {/* Members Container */}
          <div className="flex flex-wrap justify-center gap-12 sm:gap-16 lg:gap-24">
            {[
              {
                name: "Irfaan shaikh",
                role: "Director",
                img: new URL("../assets/img/Director1.png", import.meta.url).href,
                linkedin: "https://www.linkedin.com/in/irfaan-i-shaikh-4ba267164/"
              },
              {
                name: "Niraav joshi",
                role: "Director",
                img: new URL("../assets/img/Director2.png", import.meta.url).href,
                linkedin: "https://linkedin.com"
              }
            ].map((member, idx) => (
              <div key={idx} className="flex flex-col items-center">
                {/* Circular Avatar */}
                <div className="w-40 h-40 sm:w-44 sm:h-44 rounded-full overflow-hidden border-[6px] border-white shadow-[0_10px_35px_rgba(0,0,0,0.05)] hover:shadow-[0_15px_45px_rgba(0,0,0,0.08)] hover:scale-[1.02] transition-all duration-300">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Name */}
                <h3 className="font-sans font-bold text-[#0f2a4a] text-lg sm:text-xl tracking-wide mt-6 capitalize">
                  {member.name}
                </h3>

                {/* Role */}
                <span className="text-slate-400 font-sans font-semibold text-xs sm:text-[13px] tracking-wide mt-1">
                  {member.role}
                </span>

                {/* LinkedIn Link */}
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 rounded bg-[#0077b5] flex items-center justify-center text-white mt-4 shadow-sm hover:bg-[#005582] active:scale-95 transition-all duration-200"
                  aria-label={`${member.name} LinkedIn Profile`}
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
