import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import heroContact from "../assets/img/herocontact.png";

interface ContactProps {
  setCurrentPage?: (page: string) => void;
}

export default function Contact({ setCurrentPage }: ContactProps = {}) {
  const navigate = useNavigate();
  const [selectedMapTab, setSelectedMapTab] = useState<"ghatkopar" | "andheri" | "thane">("ghatkopar");
  return (
    <div className="flex flex-col">
      {/* Hero Section styled to match the visual image (Full width with fade transition) */}
      <section className="relative w-full min-h-[420px] sm:min-h-[500px] lg:h-[520px] bg-white flex items-center overflow-hidden border-b border-neutral-100">

        {/* Desktop Background Image on the right with white fade to the left */}
        <div className="hidden lg:block absolute inset-0 z-0">
          <div className="absolute inset-y-0 right-0 w-[50%] h-full z-0">
            <img
              src={heroContact}
              alt="Contact Amigo Academy Office counseling"
              className="w-full h-full object-cover object-center lg:object-left-top"
            />
            {/* Soft subtle lighting overlay on top of image */}
            <div className="absolute inset-0 bg-neutral-900/5 mix-blend-multiply" />
          </div>

          {/* Fading White Mask layer overlaying from Left to Right */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white via-40% md:via-45% lg:via-35% to-white/0 z-10" />
        </div>

        {/* Mobile Background Image Container */}
        <div className="block lg:hidden absolute inset-0 z-0 w-full h-full">
          <img
            src={new URL("../assets/img/mobileherocontant.png", import.meta.url).href}
            alt="Contact Amigo Academy Mobile"
            className="w-full h-full object-cover object-[right_center]"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
        </div>

        {/* Content Container aligned exactly over the fade mask */}
        <div className="relative max-w-7xl mx-auto w-full px-4 sm:px-6 md:px-8 z-25 py-12 lg:py-0">
          <div className="w-[50%] sm:w-[50%] lg:w-full max-w-xl md:max-w-2xl text-left flex flex-col space-y-4 md:space-y-7">

            {/* Main Headline */}
            <h1 className="text-xl sm:text-3xl lg:text-[52px] font-outfit font-extrabold tracking-tight text-[#11243e] leading-[1.2] lg:leading-[1.12] drop-shadow-sm">
              Contact <span className="text-[#DF1818]"><br />Amigo Academy</span>
            </h1>

            {/* Description Text */}
            <p className="text-neutral-700 text-[10px] sm:text-[14px] leading-relaxed lg:leading-[1.65] font-medium max-w-md md:max-w-lg">
              Have a question about courses, admissions, placements, or a franchise? Reach us directly by phone, WhatsApp, enquiry form, or visit any of our three Mumbai branches. We believe in honest guidance, without any pressure.
            </p>

            {/* Red Button with Shadow and Arrow Icon */}
            <div className="pt-1">
              <button
                onClick={() => {
                  document.getElementById("tell-us-how-we-can-help")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center justify-center bg-[#e31e24] hover:bg-[#c2141a] text-white font-sans font-bold text-[9px] sm:text-xs lg:text-[13px] px-4 py-2.5 sm:px-6 sm:py-3 lg:px-8 lg:py-3.5 rounded-full shadow-[0_12px_24px_rgba(227,30,36,0.22)] hover:shadow-[0_16px_32px_rgba(227,30,36,0.3)] transition-all duration-300 active:scale-95 group focus:outline-none whitespace-nowrap cursor-pointer"
              >
                Contact Now
                <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1 font-bold">➔</span>
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* Quick Contact Cards Section matching the screenshot */}
      <section className="w-full bg-[#5c6b7d] py-12 px-4 sm:px-6 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {/* Card 1: Call Us */}
          <div className="bg-white rounded-3xl p-8 flex flex-col justify-between items-start text-left min-h-[200px] shadow-sm">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-full bg-[#fdf3e7] flex items-center justify-center text-[#7c5529]">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h4 className="font-outfit font-extrabold text-[#0b2f61] text-base">Call Us</h4>
                <p className="text-neutral-500 text-xs mt-1 font-semibold">+91 99875 88932</p>
              </div>
            </div>
            <a href="tel:+919987588932" className="text-[#e31e24] hover:text-[#c2141a] font-sans font-bold text-xs uppercase tracking-wider mt-4">
              Call Now
            </a>
          </div>

          {/* Card 2: WhatsApp */}
          <div className="bg-white rounded-3xl p-8 flex flex-col justify-between items-start text-left min-h-[200px] shadow-sm">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-full bg-[#fdf3e7] flex items-center justify-center text-[#7c5529]">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <div>
                <h4 className="font-outfit font-extrabold text-[#0b2f61] text-base">WhatsApp</h4>
                <p className="text-neutral-500 text-xs mt-1 font-semibold">Chat with a counsellor</p>
              </div>
            </div>
            <a href="https://wa.me/919987588932" target="_blank" rel="noopener noreferrer" className="text-[#e31e24] hover:text-[#c2141a] font-sans font-bold text-xs uppercase tracking-wider mt-4">
              Start Chat
            </a>
          </div>

          {/* Card 3: Email */}
          <div className="bg-white rounded-3xl p-8 flex flex-col justify-between items-start text-left min-h-[200px] shadow-sm">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-full bg-[#fdf3e7] flex items-center justify-center text-[#7c5529]">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h4 className="font-outfit font-extrabold text-[#0b2f61] text-base">Email</h4>
                <p className="text-neutral-500 text-xs mt-1 font-semibold font-sans">care@amigoacademy.in</p>
              </div>
            </div>
            <a href="mailto:care@amigoacademy.in" className="text-[#e31e24] hover:text-[#c2141a] font-sans font-bold text-xs uppercase tracking-wider mt-4">
              Send Email
            </a>
          </div>

          {/* Card 4: Office Hours */}
          <div className="bg-white rounded-3xl p-8 flex flex-col justify-between items-start text-left min-h-[200px] shadow-sm">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-full bg-[#fdf3e7] flex items-center justify-center text-[#7c5529]">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h4 className="font-outfit font-extrabold text-[#0b2f61] text-base">Office Hours</h4>
                <p className="text-neutral-500 text-xs mt-1 font-semibold">Monday – Saturday<br />10:00 AM – 7:00 PM</p>
              </div>
            </div>
            <a
              href="https://maps.app.goo.gl/VUcP8V3PtDAQdEPv5"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#e31e24] hover:text-[#c2141a] font-sans font-bold text-xs uppercase tracking-wider mt-4 flex items-center gap-1 group"
            >
              Walk-ins Welcome
              <span className="transition-transform group-hover:translate-x-0.5">➔</span>
            </a>
          </div>

        </div>
      </section>

      {/* Visit Our Mumbai Branches Section - Matched UI Colors */}
      <section className="w-full bg-[#f1f5f9] py-16 px-4 sm:px-6 md:px-8">
        <div className="max-w-7xl mx-auto space-y-12 text-center">

          {/* Header text layout */}
          <div className="space-y-4 max-w-2xl mx-auto flex flex-col items-center">
            <span className="bg-[#fdf3e7] text-[#7c5529] text-[10px] font-extrabold uppercase tracking-widest px-4 py-1.5 rounded-full border border-amber-500/10">
              Our Mumbai Campuses
            </span>
            <h2 className="text-3xl sm:text-4xl font-outfit font-extrabold text-[#0b2f61]">
              Visit Our Mumbai Branches
            </h2>
            <p className="text-neutral-500 text-xs sm:text-sm leading-relaxed">
              Choose the branch nearest to you — the same programs, faculty standards and placement support at all three.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Ghatkopar Branch */}
            <div className="bg-white rounded-3xl p-8 flex flex-col justify-between shadow-sm border border-neutral-200/80 text-left min-h-[360px]">
              <div className="space-y-5">
                <div className="flex items-start space-x-3.5">
                  <div className="w-11 h-11 rounded-full bg-[#1e3a8a] text-white flex items-center justify-center flex-shrink-0 text-sm">
                    📍
                  </div>
                  <div>
                    <h4 className="font-outfit font-extrabold text-[#0b2f61] text-base leading-tight">Ghatkopar</h4>
                  </div>
                </div>

                <p className="text-neutral-500 text-xs sm:text-[13px] leading-relaxed pt-1">
                  AMIGO ACADEMY GHATKOPAR<br />
                  SAI INFOTECH, 107 & 108, Patel Chowk<br />
                  opposite Ghatkopar Station, Saibaba Nagar<br />
                  Pant Nagar, Ghatkopar East, Mumbai,<br />
                  Maharashtra 400077
                </p>
              </div>

              <div className="space-y-5 pt-6 border-t border-neutral-100 mt-6">
                <a href="tel:+919987588932" className="flex items-center space-x-2 text-neutral-800 hover:text-[#e31e24] transition-colors">
                  <span className="text-neutral-400 text-xs">📞</span>
                  <span className="text-xs sm:text-sm font-extrabold font-sans">+91 99875 88932</span>
                </a>

                <div className="grid grid-cols-2 gap-3.5 w-full">
                  <button
                    onClick={() => {
                      setSelectedMapTab("ghatkopar");
                      document.getElementById("interactive-map")?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="bg-[#0b2f61] hover:bg-[#072042] text-white text-[11px] font-bold py-3 rounded-full flex items-center justify-center gap-1.5 shadow-sm active:scale-95 transition-all cursor-pointer"
                  >
                    <span>✈️</span> View Map
                  </button>
                  <a
                    href="tel:+919987588932"
                    className="bg-[#e31e24] hover:bg-[#c2141a] text-white text-[11px] font-bold py-3 rounded-full flex items-center justify-center gap-1.5 shadow-sm active:scale-95 transition-all"
                  >
                    <span>📞</span> Call
                  </a>
                </div>
              </div>
            </div>

            {/* Andheri Branch */}
            <div className="bg-white rounded-3xl p-8 flex flex-col justify-between shadow-sm border border-neutral-200/80 text-left min-h-[360px]">
              <div className="space-y-5">
                <div className="flex items-start space-x-3.5">
                  <div className="w-11 h-11 rounded-full bg-[#1e3a8a] text-white flex items-center justify-center flex-shrink-0 text-sm">
                    📍
                  </div>
                  <div>
                    <h4 className="font-outfit font-extrabold text-[#0b2f61] text-base leading-tight">Andheri</h4>
                  </div>
                </div>

                <p className="text-neutral-500 text-xs sm:text-[13px] leading-relaxed pt-1">
                  AMIGO ACADEMY ANDHERI<br />
                  902, 9th, Time Chambers, Swami Vivekanand<br />
                  Rd, Andheri West, Mumbai, Maharashtra<br />
                  400058
                </p>
              </div>

              <div className="space-y-5 pt-6 border-t border-neutral-100 mt-6">
                <a href="tel:+919987588932" className="flex items-center space-x-2 text-neutral-800 hover:text-[#e31e24] transition-colors">
                  <span className="text-neutral-400 text-xs">📞</span>
                  <span className="text-xs sm:text-sm font-extrabold font-sans">+91 99875 88932</span>
                </a>

                <div className="grid grid-cols-2 gap-3.5 w-full">
                  <button
                    onClick={() => {
                      setSelectedMapTab("andheri");
                      document.getElementById("interactive-map")?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="bg-[#0b2f61] hover:bg-[#072042] text-white text-[11px] font-bold py-3 rounded-full flex items-center justify-center gap-1.5 shadow-sm active:scale-95 transition-all cursor-pointer"
                  >
                    <span>✈️</span> View Map
                  </button>
                  <a
                    href="tel:+919987588932"
                    className="bg-[#e31e24] hover:bg-[#c2141a] text-white text-[11px] font-bold py-3 rounded-full flex items-center justify-center gap-1.5 shadow-sm active:scale-95 transition-all"
                  >
                    <span>📞</span> Call
                  </a>
                </div>
              </div>
            </div>

            {/* Thane Branch */}
            <div className="bg-white rounded-3xl p-8 flex flex-col justify-between shadow-sm border border-neutral-200/80 text-left min-h-[360px]">
              <div className="space-y-5">
                <div className="flex items-start space-x-3.5">
                  <div className="w-11 h-11 rounded-full bg-[#1e3a8a] text-white flex items-center justify-center flex-shrink-0 text-sm">
                    📍
                  </div>
                  <div>
                    <h4 className="font-outfit font-extrabold text-[#0b2f61] text-base leading-tight">Thane</h4>
                  </div>
                </div>

                <p className="text-neutral-500 text-xs sm:text-[13px] leading-relaxed pt-1">
                  AMIGO ACADEMY THANE<br />
                  A204, 2nd floor, Amigo Academy, Thakor<br />
                  Niwas CHS, above Tip Top Mithaiwala, Jambli<br />
                  Naka, Thane West, Thane, Maharashtra<br />
                  400602
                </p>
              </div>

              <div className="space-y-5 pt-6 border-t border-neutral-100 mt-6">
                <a href="tel:+919987588932" className="flex items-center space-x-2 text-neutral-800 hover:text-[#e31e24] transition-colors">
                  <span className="text-neutral-400 text-xs">📞</span>
                  <span className="text-xs sm:text-sm font-extrabold font-sans">+91 99875 88932</span>
                </a>

                <div className="grid grid-cols-2 gap-3.5 w-full">
                  <button
                    onClick={() => {
                      setSelectedMapTab("thane");
                      document.getElementById("interactive-map")?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="bg-[#0b2f61] hover:bg-[#072042] text-white text-[11px] font-bold py-3 rounded-full flex items-center justify-center gap-1.5 shadow-sm active:scale-95 transition-all cursor-pointer"
                  >
                    <span>✈️</span> View Map
                  </button>
                  <a
                    href="tel:+919987588932"
                    className="bg-[#e31e24] hover:bg-[#c2141a] text-white text-[11px] font-bold py-3 rounded-full flex items-center justify-center gap-1.5 shadow-sm active:scale-95 transition-all"
                  >
                    <span>📞</span> Call
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      {/* Interactive Campus Location Maps Section */}
      <section id="interactive-map" className="w-full bg-white py-16 px-4 sm:px-6 md:px-8 border-t border-neutral-100">
        <div className="max-w-7xl mx-auto space-y-10 text-center">

          <div className="space-y-4 max-w-2xl mx-auto flex flex-col items-center">
            <span className="bg-[#fdf3e7] text-[#7c5529] text-[10px] font-extrabold uppercase tracking-widest px-4 py-1.5 rounded-full border border-amber-500/10">
              Interactive Map
            </span>
            <h2 className="text-3xl font-outfit font-extrabold text-[#0b2f61]">
              Find Us On Google Maps
            </h2>
            <p className="text-neutral-500 text-xs sm:text-sm leading-relaxed">
              Toggle the tabs below to view the interactive map location and get directions for each of our Mumbai campuses.
            </p>
          </div>

          {/* Map Tabs and Map Display */}
          <MapTabs activeTab={selectedMapTab} onTabChange={setSelectedMapTab} />

        </div>
      </section>
      <section id="tell-us-how-we-can-help" className="w-full bg-[#f1f5f9] py-16 px-4 sm:px-6 md:px-8 border-t border-neutral-200/50">
        <div className="max-w-7xl mx-auto space-y-12 text-center">

          {/* Section Header */}
          <div className="space-y-4 max-w-2xl mx-auto flex flex-col items-center">
            <span className="bg-[#fdf3e7] text-[#7c5529] text-[10px] font-extrabold uppercase tracking-widest px-4 py-1.5 rounded-full border border-amber-500/10">
              Send An Enquiry
            </span>
            <h2 className="text-3xl sm:text-4xl font-outfit font-extrabold text-[#0b2f61]">
              Tell Us How We Can Help
            </h2>
            <p className="text-neutral-500 text-xs sm:text-sm leading-relaxed">
              Share a few details and the right counsellor will get back to you with clear, honest answers.
            </p>
          </div>

          {/* Form & Card Grid Container */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-left items-stretch">

            {/* Left Card: Enquiry Form */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-neutral-200/60 flex flex-col justify-between">
              <EnquiryForm />
            </div>

            {/* Right Card: Direct Call / WhatsApp details */}
            <div className="lg:col-span-5 bg-gradient-to-b from-[#0b2f61] to-[#1e3a8a] text-white rounded-3xl p-8 sm:p-10 flex flex-col justify-between shadow-md relative overflow-hidden">
              <div className="space-y-6 z-10">
                <h3 className="text-xl sm:text-2xl font-outfit font-extrabold text-white">
                  Prefer to talk instead?
                </h3>
                <p className="text-blue-100/80 text-xs sm:text-sm leading-relaxed">
                  Call or WhatsApp <a href="tel:+919987588932" className="text-white underline font-bold">+91 99875 88932</a> during office hours and speak to an admission counsellor straight away — no forms, no waiting.
                </p>

                <div className="space-y-4 pt-4 border-t border-white/10">
                  <div className="flex items-start space-x-3 text-xs sm:text-[13px] text-blue-100">
                    <span className="text-[#ffd300] text-sm">✔</span>
                    <span>Free career guidance for students and parents</span>
                  </div>
                  <div className="flex items-start space-x-3 text-xs sm:text-[13px] text-blue-100">
                    <span className="text-[#ffd300] text-sm">✔</span>
                    <span>Course fees, batch dates and eligibility explained</span>
                  </div>
                  <div className="flex items-start space-x-3 text-xs sm:text-[13px] text-blue-100">
                    <span className="text-[#ffd300] text-sm">✔</span>
                    <span>Franchise and hiring enquiries handled by head office</span>
                  </div>
                </div>
              </div>

              {/* Decorative background shape */}
              <div className="absolute -bottom-16 -right-16 w-44 h-44 rounded-full bg-white/5 blur-xl pointer-events-none" />
            </div>

          </div>
        </div>
      </section>

      {/* Why Contact Amigo Section */}
      <section className="w-full bg-[#5c6b7d] py-16 px-4 sm:px-6 md:px-8 border-t border-slate-500/10">
        <div className="max-w-7xl mx-auto space-y-12 text-center">

          {/* Header Layout */}
          <div className="space-y-4 max-w-2xl mx-auto flex flex-col items-center">
            <span className="bg-[#fdf3e7] text-[#7c5529] text-[10px] font-extrabold uppercase tracking-widest px-4 py-1.5 rounded-full border border-amber-500/10">
              Student & Parent Support
            </span>
            <h2 className="text-3xl sm:text-4xl font-outfit font-extrabold text-[#fff] drop-shadow-sm">
              Why Contact Amigo?
            </h2>
            <p className="text-slate-200 text-xs sm:text-sm leading-relaxed">
              Every enquiry is handled by a real counsellor who knows the courses, the branches and the hiring market.
            </p>
          </div>

          {/* 3x2 Grid Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">

            {/* Card 1: Free Career Guidance */}
            <div className="bg-white rounded-3xl p-8 flex flex-col justify-between items-start shadow-sm border border-neutral-100 min-h-[180px]">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-full bg-[#fdf3e7] flex items-center justify-center text-[#7c5529] text-xs">
                  🧭
                </div>
                <h4 className="font-outfit font-extrabold text-[#0b2f61] text-sm sm:text-base">Free Career Guidance</h4>
                <p className="text-neutral-500 text-xs leading-relaxed font-semibold">
                  Talk through aviation and technology career paths with a counsellor before you commit to anything.
                </p>
              </div>
            </div>

            {/* Card 2: Expert Admission Counselling */}
            <div className="bg-white rounded-3xl p-8 flex flex-col justify-between items-start shadow-sm border border-neutral-100 min-h-[180px]">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-full bg-[#fdf3e7] flex items-center justify-center text-[#7c5529] text-xs">
                  🎓
                </div>
                <h4 className="font-outfit font-extrabold text-[#0b2f61] text-sm sm:text-base">Expert Admission Counselling</h4>
                <p className="text-neutral-500 text-xs leading-relaxed font-semibold">
                  Get clear answers on eligibility, batch dates, fees and documents for every Amigo program.
                </p>
              </div>
            </div>

            {/* Card 3: Placement Assistance */}
            <div className="bg-white rounded-3xl p-8 flex flex-col justify-between items-start shadow-sm border border-neutral-100 min-h-[180px]">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-full bg-[#fdf3e7] flex items-center justify-center text-[#7c5529] text-xs">
                  💼
                </div>
                <h4 className="font-outfit font-extrabold text-[#0b2f61] text-sm sm:text-base">Placement Assistance</h4>
                <p className="text-neutral-500 text-xs leading-relaxed font-semibold">
                  Understand how our placement support works and which employers hire from your branch.
                </p>
              </div>
            </div>

            {/* Card 4: Scholarship Information */}
            <div className="bg-white rounded-3xl p-8 flex flex-col justify-between items-start shadow-sm border border-neutral-100 min-h-[180px]">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-full bg-[#fdf3e7] flex items-center justify-center text-[#7c5529] text-xs">
                  🏅
                </div>
                <h4 className="font-outfit font-extrabold text-[#0b2f61] text-sm sm:text-base">Scholarship Information</h4>
                <p className="text-neutral-500 text-xs leading-relaxed font-semibold">
                  Check which merit and need-based scholarship options you or your child may qualify for.
                </p>
              </div>
            </div>

            {/* Card 5: Franchise Support */}
            <div className="bg-white rounded-3xl p-8 flex flex-col justify-between items-start shadow-sm border border-neutral-100 min-h-[180px]">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-full bg-[#fdf3e7] flex items-center justify-center text-[#7c5529] text-xs">
                  🏢
                </div>
                <h4 className="font-outfit font-extrabold text-[#0b2f61] text-sm sm:text-base">Franchise Support</h4>
                <p className="text-neutral-500 text-xs leading-relaxed font-semibold">
                  Partner enquiries are handled directly by our head office team in Ghatkopar, Mumbai.
                </p>
              </div>
            </div>

            {/* Card 6: Quick Response */}
            <div className="bg-white rounded-3xl p-8 flex flex-col justify-between items-start shadow-sm border border-neutral-100 min-h-[180px]">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-full bg-[#fdf3e7] flex items-center justify-center text-[#7c5529] text-xs">
                  ⏱️
                </div>
                <h4 className="font-outfit font-extrabold text-[#0b2f61] text-sm sm:text-base">Quick Response</h4>
                <p className="text-neutral-500 text-xs leading-relaxed font-semibold">
                  Call or WhatsApp during office hours and you will usually speak to someone right away.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* Frequently Asked Questions Section */}
      <section className="bg-[#eef1fa] py-16 px-6 border-t border-neutral-200/50">
        <div className="max-w-4xl mx-auto text-center mb-10">
          <span className="inline-block bg-[#fdecc8] text-[#c07f1f] text-[10px] font-bold tracking-wider uppercase px-3.5 py-1.5 rounded-full mb-5">
            Before you visit
          </span>
          <h2 className="text-[32px] font-outfit font-extrabold text-[#0b2f61] tracking-tight mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-neutral-500 text-sm sm:text-base">
            Quick answers about branches, appointments and how fast our team replies.
          </p>
        </div>

        <FaqAccordion />

        {/* Have More Questions Banner Pill */}
        <div className="mt-10 text-center">
          <button
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 bg-[#fffbf0] border border-[#ffecd1] px-6 py-3 rounded-full shadow-[0_4px_10px_rgba(255,236,209,0.2)] hover:scale-105 transition-all cursor-pointer"
          >
            <span className="text-[#e31e24] font-bold text-xs sm:text-sm">✨</span>
            <span className="text-[#0b2f61] font-sans font-bold text-[10px] sm:text-xs tracking-wider uppercase">
              If you have anymore question, please contact us
            </span>
          </button>
        </div>
      </section>

      {/* CTA Batch open urgency footer section */}
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
          2026 batches are filling fast — Secure Your Spot Now!
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
    </div>
  );
}


import { submitContactForm } from "../services/api";

// Sub-component to manage form inputs and submission
function EnquiryForm() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    type: "Admission",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;

    setLoading(true);
    try {
      await submitContactForm({
        enquiry_type: formData.type,
        name: formData.name,
        phone: formData.mobile,
        email: formData.email,
        message: formData.message
      });

      setSubmitted(true);
      setFormData({ name: "", mobile: "", email: "", type: "Admission", message: "" });
      navigate("/thank-you");
    } catch (error) {
      console.error("Contact submission error:", error);
      alert("Failed to submit enquiry. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-emerald-50 border border-emerald-100 text-emerald-800 p-8 rounded-2xl text-center space-y-3 my-auto">
        <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto text-xl font-bold">✓</div>
        <h3 className="font-outfit font-bold text-lg">Enquiry Submitted!</h3>
        <p className="text-xs text-emerald-600">Our counselors will contact you shortly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleFormSubmit} className="space-y-5 text-left flex flex-col justify-between h-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Name input */}
        <div className="flex flex-col space-y-1.5">
          <label className="text-[10px] font-extrabold text-[#0b2f61] uppercase tracking-wider font-sans">Name</label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Your full name"
            className="border border-neutral-200 rounded-xl px-4 py-3 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#0b2f61]/10 focus:border-[#0b2f61] placeholder-neutral-400 font-medium"
          />
        </div>

        {/* Mobile input */}
        <div className="flex flex-col space-y-1.5">
          <label className="text-[10px] font-extrabold text-[#0b2f61] uppercase tracking-wider font-sans">Mobile</label>
          <input
            type="tel"
            required
            pattern="[0-9]{10}"
            value={formData.mobile}
            onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
            placeholder="10-digit mobile number"
            className="border border-neutral-200 rounded-xl px-4 py-3 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#0b2f61]/10 focus:border-[#0b2f61] placeholder-neutral-400 font-medium"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Email input */}
        <div className="flex flex-col space-y-1.5">
          <label className="text-[10px] font-extrabold text-[#0b2f61] uppercase tracking-wider font-sans">Email</label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="you@example.com"
            className="border border-neutral-200 rounded-xl px-4 py-3 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#0b2f61]/10 focus:border-[#0b2f61] placeholder-neutral-400 font-medium"
          />
        </div>

        {/* Enquiry type selector */}
        <div className="flex flex-col space-y-1.5">
          <label className="text-[10px] font-extrabold text-[#0b2f61] uppercase tracking-wider font-sans">Enquiry Type</label>
          <select
            value={formData.type}
            onChange={(e) => setFormData({ ...formData, type: e.target.value })}
            className="border border-neutral-200 rounded-xl px-4 py-3 text-xs sm:text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#0b2f61]/10 focus:border-[#0b2f61] font-medium text-neutral-700"
          >
            <option>Admission</option>
            <option>Franchise</option>
            <option>Placement/Recruitment</option>
            <option>Other Query</option>
          </select>
        </div>
      </div>

      {/* Message input */}
      <div className="flex flex-col space-y-1.5">
        <label className="text-[10px] font-extrabold text-[#0b2f61] uppercase tracking-wider font-sans">Message</label>
        <textarea
          rows={3}
          required
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Which course or branch are you interested in?"
          className="border border-neutral-200 rounded-xl px-4 py-3 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#0b2f61]/10 focus:border-[#0b2f61] placeholder-neutral-400 font-medium resize-none"
        />
      </div>

      {/* Submit Button */}
      <div className="space-y-4 pt-2">
        <button
          type="submit"
          className="w-full bg-[#e31e24] hover:bg-[#c2141a] text-white font-sans font-bold text-xs sm:text-sm py-4 rounded-full shadow-[0_12px_24px_rgba(227,30,36,0.18)] transition-all active:scale-95 uppercase tracking-wider flex items-center justify-center gap-2"
        >
          <span>🚀</span> Send Enquiry
        </button>

        <p className="text-[10px] text-neutral-400 flex items-center justify-center gap-1 font-semibold">
          🛡️ Our team usually responds within one business day.
        </p>
      </div>
    </form>
  );
}

interface MapTabsProps {
  activeTab?: "ghatkopar" | "andheri" | "thane";
  onTabChange?: (tab: "ghatkopar" | "andheri" | "thane") => void;
}

// Sub-component to manage interactive map switching
function MapTabs({ activeTab: propActiveTab, onTabChange }: MapTabsProps = {}) {
  const [internalTab, setInternalTab] = useState<"ghatkopar" | "andheri" | "thane">("ghatkopar");
  const activeTab = propActiveTab || internalTab;

  const handleTabClick = (tab: "ghatkopar" | "andheri" | "thane") => {
    setInternalTab(tab);
    if (onTabChange) {
      onTabChange(tab);
    }
  };

  // Real Google Maps embed URLs for Ghatkopar, Andheri, and Thane
  const mapUrls = {
    ghatkopar: "https://maps.google.com/maps?q=Amigo%20Academy%20Ghatkopar%20Sai%20Infotech%20Mumbai&t=&z=16&ie=UTF8&iwloc=&output=embed",
    andheri: "https://maps.google.com/maps?q=Amigo%20Academy%20Andheri%20Time%20Chambers%20Mumbai&t=&z=16&ie=UTF8&iwloc=&output=embed",
    thane: "https://maps.google.com/maps?q=Amigo%20Academy%20Thane%20Thakor%20Niwas%20Mumbai&t=&z=16&ie=UTF8&iwloc=&output=embed"
  };

  return (
    <div className="space-y-6">
      {/* Tab Selectors */}
      <div className="flex justify-center space-x-2 border-b border-neutral-100 pb-4 max-w-md mx-auto">
        {(["ghatkopar", "andheri", "thane"] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => handleTabClick(tab)}
            className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${activeTab === tab
              ? "bg-[#0b2f61] text-white shadow-md scale-105"
              : "bg-neutral-50 text-neutral-500 hover:bg-neutral-100 hover:text-neutral-800"
              }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Embedded Map Frame */}
      <div className="relative w-full h-[400px] sm:h-[480px] rounded-3xl overflow-hidden shadow-xl border border-neutral-100 bg-neutral-50">
        <iframe
          src={mapUrls[activeTab]}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={`${activeTab} campus location map`}
          className="absolute inset-0 w-full h-full"
        ></iframe>
      </div>
    </div>
  );
}

// FAQ Accordion sub-component
function FaqAccordion() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Which branch should I visit?",
      answer: "You should visit the branch closest to your location. We offer the exact same curriculum, certified trainers, placement cells, and infrastructure support across our Ghatkopar, Andheri, and Thane campuses."
    },
    {
      question: "Can I enquire through WhatsApp?",
      answer: "Yes, absolutely! You can send us a message or request a call back directly on our official WhatsApp number +91 99875 88932. Our counselors are online from 10:00 AM to 7:00 PM."
    },
    {
      question: "Can I book a counselling session?",
      answer: "Yes. Both online guidance sessions and face-to-face personal counseling sessions are free of charge. You can walk in during office hours or call us to book an appointment with our senior counselors."
    },
    {
      question: "Do I need an appointment to visit?",
      answer: "No, appointments are not mandatory from Monday to Saturday. However, if you are looking to visit on a Sunday, it is strictly by prior appointment only as our branches are otherwise closed."
    },
    {
      question: "Which courses are available?",
      answer: "We offer comprehensive courses in Aviation and Hospitality Management, Air Hostess Training, AI and Data Science Certification, and Global Airport Operations."
    },
    {
      question: "How quickly will someone contact me?",
      answer: "After submitting our enquiry form, one of our senior academic advisors will reach out to you within 2 to 24 business hours to address your queries."
    }
  ];

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="space-y-3.5 max-w-4xl mx-auto">
      {faqs.map((faq, index) => {
        const isOpen = activeIndex === index;
        return (
          <div
            key={index}
            className={`bg-white shadow-[0_2px_10px_rgba(11,47,97,0.03)] border border-[#e2e8f0]/85 transition-all duration-300 ${isOpen ? "rounded-[22px]" : "rounded-full"
              }`}
          >
            {/* Accordion header button */}
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full flex items-center justify-between px-7 py-5 text-left focus:outline-none group cursor-pointer"
            >
              <span className="text-base sm:text-lg font-outfit font-extrabold text-[#0b2f61] tracking-tight">
                {faq.question}
              </span>
              <span
                className={`text-neutral-400 transition-transform duration-300 ${isOpen ? "rotate-180" : ""
                  }`}
              >
                <svg
                  className="w-5 h-5 text-neutral-400 group-hover:text-[#0b2f61] transition-colors"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </button>

            {/* Accordion content body */}
            <div
              className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? "max-h-[350px] border-t border-neutral-100/70 bg-neutral-50/20" : "max-h-0"
                }`}
            >
              <div className="px-7 py-5 text-sm sm:text-base text-neutral-600 font-medium leading-relaxed text-left">
                {faq.answer}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
