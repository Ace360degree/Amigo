import React from "react";
import { useNavigate, Link } from "react-router-dom";
import heroImage from "../assets/img/branches/branches-main.png";
import branchesMobileHero from "../assets/img/branches/branches-main-mobile.png";
import branchesIllustration from "../assets/img/branches2a.png";
import branchImage1 from "../assets/img/branchesimg1a.png";
import branchImage2 from "../assets/img/branchesimg2a.png";
import branchImage3 from "../assets/img/branchesimg3a.png";
import branchIcon1 from "../assets/img/branchesicon1a.png";
import branchIcon2 from "../assets/img/branchesicon2a.png";
import branchIcon3 from "../assets/img/branchesicon3a.png";
import branchIcon4 from "../assets/img/branchesicon4a.png";
import branchIcon5 from "../assets/img/branchesicon5a.png";
import branchIcon6 from "../assets/img/branchesicon6a.png";
import branchVisitImage from "../assets/img/branchesimg4a.png";
import branchCtaIcon1 from "../assets/img/branchesicon7a.png";
import branchCtaIcon2 from "../assets/img/branchesicon8a.png";
import branchCtaIcon3 from "../assets/img/branchesicon9a.png";
import branchCtaIcon4 from "../assets/img/branchesicon10a.png";
import branchCtaIcon5 from "../assets/img/branchesicon11a.png";
import branchArrowIcon from "../assets/img/branchesicon12a.png";

type Stat = {
  value: string;
  label: string;
};

type BranchCard = {
  name: string;
  tag?: string;
  address: string[];
  phone: string;
  mapHref: string;
  link: string;
};

const stats: Stat[] = [
  { value: "10,000+", label: "Students Trained" },
  { value: "3", label: "Branches in Mumbai" },
  { value: "3", label: "Career-Focused Courses" },
  { value: "100%", label: "Same Training Standard" },
];

const branches: BranchCard[] = [
  {
    name: "Ghatkopar",
    address: [
      "AMIGO ACADEMY GHATKOPAR",
      "SAI INFOTECH, 107 & 108, Patel Chowk",
      "Opposite Ghatkopar Station, Saibaba Nagar",
      "Pant Nagar, Ghatkopar East, Mumbai, Maharashtra 400077",
    ],
    phone: "+919987588932",
    mapHref: "https://maps.google.com/?q=Sai+Infotech+Ghatkopar+East+Mumbai",
    link: "/ghatkopar-branch"
  },
  {
    name: "Andheri",
    address: [
      "AMIGO ACADEMY ANDHERI",
      "902, 9th, Time Chambers, Swami Vivekanand Rd",
      "Andheri West, Mumbai, Maharashtra 400058",
    ],
    phone: "+919987588932",
    mapHref: "https://maps.google.com/?q=Time+Chambers+Swami+Vivekanand+Road+Andheri+West+Mumbai",
    link: "/andheri-branch"
  },
  {
    name: "Thane",
    address: [
      "AMIGO ACADEMY THANE",
      "A204, 2nd Floor, Thakor Niwas CHS",
      "Above Tip Top Mithaiwala, Jambli Naka",
      "Thane West, Thane, Maharashtra 400602",
    ],
    phone: "+919987588932",
    mapHref: "https://maps.google.com/?q=Thakor+Niwas+Jambli+Naka+Thane+West+Maharashtra",
    link: "/thane-branch"
  },
];

const branchShowcase = [
  {
    title: "Ghatkopar Branch",
    description:
      "Our Ghatkopar branch has been guiding students towards careers in aviation and technology since 2017.",
    image: branchImage1,
    cta: "Explore Ghatkopar Branch",
    link: "/ghatkopar-branch"
  },
  {
    title: "Andheri Branch",
    description:
      "Conveniently located for students in the western suburbs, our Andheri branch offers the same courses, practical training, and placement support that students expect from Amigo Academy.",
    image: branchImage2,
    cta: "Explore Andheri Branch",
    link: "/andheri-branch"
  },
  {
    title: "Thane Branch",
    description:
      "Our Thane branch provides students in the central suburbs with easy access to career-focused training, helping aspiring professionals prepare for opportunities in aviation and technology.",
    image: branchImage3,
    cta: "Explore Thane Branch",
    link: "/thane-branch"
  },
];

const experienceCards = [
  {
    title: "Industry Focussed Training",
    icon: branchIcon1,
  },
  {
    title: "Experienced Faculty",
    icon: branchIcon2,
  },
  {
    title: "Practical Training",
    icon: branchIcon3,
  },
  {
    title: "Placement Support",
    icon: branchIcon4,
  },
  {
    title: "Career Guidance",
    icon: branchIcon5,
  },
  {
    title: "Same Quality at Every Branch",
    icon: branchIcon6,
  },
];

export default function Branches() {
  const navigate = useNavigate();

  const handleBranchClick = (path: string) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-white text-neutral-900">
      {/* Hero Section */}
      {/* Desktop Hero View */}
      <section className="hidden sm:flex relative w-full min-h-[580px] lg:h-[620px] bg-white items-center overflow-hidden border-b border-neutral-100">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-y-0 right-0 w-full lg:w-[58%] h-full">
            <img
              src={heroImage}
              alt="Find an Amigo Academy Branch Near You"
              className="w-full h-full object-cover object-left"
            />
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto w-full px-6 sm:px-8 md:px-12 z-20 py-16 lg:py-0">
          <div className="max-w-xl lg:max-w-[580px] text-left flex flex-col space-y-6">
            {/* Breadcrumbs */}
            <div className="flex items-center gap-1.5 text-xs sm:text-[13px] font-sans font-medium text-slate-400">
              <Link to="/" className="hover:text-[#DF1818] transition-colors focus:outline-none">Home</Link>
              <span className="text-slate-400 mx-1 select-none">&gt;</span>
              <span className="font-bold text-[#DF1818] tracking-tight">Branches</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-[48px] font-outfit font-extrabold tracking-tight text-[#17365d] leading-snug sm:leading-[1.28] lg:leading-[1.32]">
              Find an Amigo Academy<br />
              Branch Near You
            </h1>

            <p className="text-[#475569] font-sans font-medium text-xs sm:text-[15.5px] leading-relaxed max-w-lg">
              With three branches across Mumbai— Ghatkopar, Andheri, and Thane— Amigo Academy makes career-focused education more accessible, with the same practical training, placement support, and career guidance at every location.
            </p>

            <div className="pt-2">
              <a
                href="#branch-grid"
                className="inline-flex items-center justify-center gap-2 bg-[#DF1818] hover:bg-[#c41212] text-white font-sans font-bold text-xs sm:text-[14px] px-8 py-3.5 rounded-full shadow-[0_8px_20px_rgba(223,24,24,0.3)] hover:shadow-[0_12px_24px_rgba(223,24,24,0.4)] transition-all duration-300 active:scale-95 whitespace-nowrap focus:outline-none cursor-pointer"
              >
                Find Your Nearest Branch
                <span className="font-bold">&nbsp;➔</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Hero View matching screenshot */}
      <section className="sm:hidden relative w-full bg-white overflow-hidden border-b border-neutral-100">
        <div className="relative w-full h-[520px] overflow-hidden">
          {/* Background Image without gradient overlay */}
          <img
            src={branchesMobileHero}
            alt="Find an Amigo Academy Branch Near You"
            className="absolute inset-0 w-full h-full object-cover object-[right_top]"
          />

          {/* Text Content overlay matching screenshot */}
          <div className="absolute inset-y-0 left-0 z-10 px-5 flex flex-col justify-center max-w-[280px]">
            {/* Breadcrumbs */}
            <div className="flex items-center gap-1.5 text-xs font-sans font-medium text-slate-400 mb-3">
              <Link to="/" className="hover:text-[#DF1818] transition-colors focus:outline-none">Home</Link>
              <span className="text-slate-400 mx-1 select-none">&gt;</span>
              <span className="font-bold text-[#DF1818] tracking-tight">Branches</span>
            </div>

            <h1 className="text-[28px] font-extrabold text-[#17365d] leading-[1.15] tracking-tight mb-4 font-outfit">
              Find an Amigo<br />
              Academy Branch<br />
              Near You
            </h1>

            <p className="text-[#475569] text-[12.5px] leading-relaxed mb-6 font-medium">
              With three branches across Mumbai— Ghatkopar, Andheri, and Thane— Amigo Academy makes career-focused education more accessible, with the same practical training, placement support, and career guidance at every location.
            </p>

            <div>
              <a
                href="#branch-grid"
                className="inline-flex items-center justify-between gap-3 bg-[#e02607] hover:bg-[#c81e04] text-white font-bold text-[13.5px] px-5 py-3 rounded-full shadow-lg active:scale-95 transition-all duration-300 cursor-pointer"
              >
                <span>Find Your Nearest Branch</span>
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20 text-white text-xs font-extrabold">➔</span>
              </a>
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

      {/* Three Convenient Locations Section */}
      <section className="bg-[#f0f4f9] py-16 sm:py-24 px-4 sm:px-6 md:px-8 border-t border-slate-100/60">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-3xl sm:text-[40px] font-extrabold text-[#112a46] leading-tight tracking-tight">
            Three Convenient Locations
            <br className="hidden sm:block" />
            Across Mumbai
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-sm sm:text-[15.5px] leading-relaxed text-slate-500 font-medium">
            Choosing the right institute should never depend on how far you have to travel.
            That&apos;s why Amigo Academy has established branches in Ghatkopar, Andheri, and
            Thane, making it easier for students across Mumbai to access professional training
            closer to home.
          </p>
          <p className="mx-auto mt-4 max-w-3xl text-sm sm:text-[15.5px] leading-relaxed text-slate-500 font-medium">
            Simply choose the branch that&apos;s most convenient for you and begin your journey
            with confidence.
          </p>

          <div className="mt-10 sm:mt-12 rounded-[28px] bg-white p-4 sm:p-6 md:p-8 shadow-[0_10px_35px_rgba(15,42,74,0.05)] border border-slate-100/80">
            <div className="relative w-full overflow-hidden rounded-[20px] bg-white">
              {/* Clickable hotspots disabled temporarily */}
              {/* <div className="absolute inset-0 z-10 grid grid-cols-3">
                <button
                  onClick={() => handleBranchClick("/andheri-branch")}
                  className="w-full h-full cursor-pointer focus:outline-none transition-opacity hover:bg-red-500/5"
                  title="Explore Andheri Branch"
                  aria-label="Explore Andheri Branch"
                />
                <button
                  onClick={() => handleBranchClick("/ghatkopar-branch")}
                  className="w-full h-full cursor-pointer focus:outline-none transition-opacity hover:bg-red-500/5"
                  title="Explore Ghatkopar Branch"
                  aria-label="Explore Ghatkopar Branch"
                />
                <button
                  onClick={() => handleBranchClick("/thane-branch")}
                  className="w-full h-full cursor-pointer focus:outline-none transition-opacity hover:bg-red-500/5"
                  title="Explore Thane Branch"
                  aria-label="Explore Thane Branch"
                />
              </div> */}

              <img
                src={branchesIllustration}
                alt="Three Convenient Locations Across Mumbai — Andheri, Ghatkopar, Thane"
                className="w-full h-auto object-contain block"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="branch-grid" className="bg-white py-20 px-4 sm:px-6 md:px-8 border-t border-neutral-100">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-3xl sm:text-[40px] font-extrabold text-[#1f3658] leading-tight">
              Our Branches
            </h2>
            <p className="mt-4 text-sm sm:text-base text-slate-500 max-w-2xl mx-auto">
              Explore individual branch pages for detailed course offerings, campus facilities, contact information, and location maps.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {branchShowcase.map((branch) => (
              <article
                key={branch.title}
                className="group overflow-hidden rounded-[22px] border border-[#d9e1ee] bg-white shadow-[0_10px_30px_rgba(15,42,74,0.05)] transition-all hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <div
                    onClick={() => handleBranchClick(branch.link)}
                    className="h-52 sm:h-56 overflow-hidden cursor-pointer"
                  >
                    <img
                      src={branch.image}
                      alt={branch.title}
                      className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <div className="p-6 sm:p-7">
                    <h3
                      onClick={() => handleBranchClick(branch.link)}
                      className="text-[17px] sm:text-lg font-extrabold text-[#1f3658] group-hover:text-[#e31e24] transition-colors leading-snug cursor-pointer"
                    >
                      {branch.title}
                    </h3>
                    <p className="mt-4 text-sm leading-6 text-slate-500">
                      {branch.description}
                    </p>
                  </div>
                </div>

                <div className="p-6 sm:p-7 pt-0">
                  <button
                    onClick={() => handleBranchClick(branch.link)}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#e31e24] px-6 py-3.5 text-sm font-bold text-white shadow-[0_12px_25px_rgba(227,30,36,0.18)] transition-all hover:bg-[#c8191f] active:scale-95 cursor-pointer"
                  >
                    {branch.cta}
                    <img
                      src={branchArrowIcon}
                      alt=""
                      aria-hidden="true"
                      className="h-4 w-4 object-contain"
                    />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* The Same Amigo Experience Section */}
      <section className="bg-[#eef3fa] py-20 px-4 sm:px-6 md:px-8 border-t border-neutral-100">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-3xl sm:text-[40px] font-extrabold text-[#1f3658] leading-tight">
            The Same Amigo Experience
            <br />
            at Every Branch
          </h2>

          <p className="mx-auto mt-6 max-w-4xl text-sm sm:text-base leading-7 text-slate-500">
            No matter which branch you choose, you&apos;ll become part of the same Amigo
            Academy community. Every branch follows the same training standards, offers the
            same career-focused programmes, and is committed to helping students build the
            skills and confidence needed for professional success.
          </p>
          <p className="mx-auto mt-4 max-w-4xl text-sm sm:text-base leading-7 text-slate-500">
            From classroom learning and career guidance to placement support, every student
            receives the same commitment to quality across all our branches.
          </p>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {experienceCards.map((item) => (
              <div
                key={item.title}
                className="rounded-[18px] border border-[#dde5f2] bg-white px-6 py-7 text-center shadow-[0_10px_28px_rgba(15,42,74,0.04)]"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#f6e7bf]">
                  <img
                    src={item.icon}
                    alt=""
                    aria-hidden="true"
                    className="h-6 w-6 object-contain"
                  />
                </div>
                <div className="mt-5 text-sm sm:text-[15px] font-extrabold text-[#1f3658] leading-snug">
                  {item.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visit a Branch Section */}
      <section className="bg-white py-20 px-4 sm:px-6 md:px-8 border-t border-neutral-100">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-3xl sm:text-[40px] font-extrabold text-[#1f3658] leading-tight">
            Visit a Branch Before You Decide
          </h2>

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-16">
            <div className="max-w-xl">
              <p className="text-sm sm:text-base leading-7 text-slate-500">
                Choosing an institute is an important decision, and sometimes the best way to
                make that decision is by visiting in person. Meet our counsellors, explore the
                learning environment, ask your questions, and understand which course is right
                for your career goals.
              </p>
              <p className="mt-5 text-sm sm:text-base leading-7 text-slate-500">
                We&apos;re always happy to welcome students and parents for a conversation before
                they begin their journey with us.
              </p>

              <button
                onClick={() => handleBranchClick("/contact")}
                className="mt-8 inline-flex items-center justify-center rounded-full bg-[#e31e24] px-6 py-3.5 text-sm font-bold text-white shadow-[0_12px_25px_rgba(227,30,36,0.18)] transition-all hover:bg-[#c8191f] active:scale-95 cursor-pointer focus:outline-none"
              >
                Find Your Nearest Branch
                <span className="ml-2">&#10132;</span>
              </button>
            </div>

            <div className="lg:justify-self-end">
              <div className="overflow-hidden rounded-[22px] shadow-[0_12px_35px_rgba(15,42,74,0.08)]">
                <img
                  src={branchVisitImage}
                  alt="Visit a branch before you decide"
                  className="h-full w-full max-w-[560px] object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* CTA Section */}
      <section className="bg-[#0b2f61] px-4 sm:px-6 md:px-8 py-20 sm:py-24 border-t border-[#0d3770] relative overflow-hidden">
        <div className="mx-auto max-w-5xl text-center text-white relative z-10">

          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[#f5b74a]/30 bg-[#072147]/80 px-5 py-2 text-xs sm:text-[13px] font-extrabold uppercase tracking-wide text-[#f5b74a] shadow-sm mb-8">
            <span className="text-sm">⚡</span>
            LIMITED SEATS PER BATCH — APPLY EARLY TO SECURE YOUR SPOT
          </div>

          {/* Main Title */}
          <h2 className="mx-auto max-w-4xl text-3xl sm:text-4xl lg:text-[50px] font-extrabold leading-snug sm:leading-[1.3] lg:leading-[1.28] text-white tracking-tight mb-6">
            Start Your Journey from the Branch That's Closest to You
          </h2>

          {/* Middle Pill Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[#f5b74a]/30 bg-[#072147]/80 px-5 py-2 text-xs sm:text-[13px] font-extrabold text-[#f5b74a] shadow-sm mb-10">
            <span className="text-sm">🏛️</span>
            Maharashtra Govt Certified — Only aviation institute in Maharashtra
          </div>

          {/* Action Buttons Row */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 mb-10">
            <button
              onClick={() => window.dispatchEvent(new CustomEvent("openEligibilityModal"))}
              className="inline-flex min-w-[230px] items-center justify-center gap-2.5 rounded-2xl bg-[#E02424] hover:bg-[#c81c1c] px-7 py-4 text-xs sm:text-sm font-extrabold text-white uppercase tracking-wider shadow-[0_8px_25px_rgba(224,36,36,0.45)] transition-all hover:shadow-[0_12px_30px_rgba(224,36,36,0.55)] active:scale-95 cursor-pointer focus:outline-none"
            >
              <span className="text-base">✈️</span>
              CHECK MY ELIGIBILITY NOW
            </button>

            <button
              onClick={() => window.dispatchEvent(new CustomEvent("openEligibilityModal"))}
              className="inline-flex min-w-[190px] items-center justify-center gap-2 rounded-2xl bg-[#E02424] hover:bg-[#c81c1c] px-7 py-4 text-xs sm:text-sm font-bold text-white shadow-[0_8px_25px_rgba(224,36,36,0.45)] transition-all hover:shadow-[0_12px_30px_rgba(224,36,36,0.55)] active:scale-95 cursor-pointer focus:outline-none"
            >
              Start My Career
            </button>

            <a
              href="https://wa.me/919987588932"
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-w-[190px] items-center justify-center gap-2.5 rounded-2xl bg-[#22c55e] hover:bg-[#16a34a] px-7 py-4 text-xs sm:text-sm font-bold text-white shadow-[0_8px_25px_rgba(34,197,94,0.4)] transition-all hover:shadow-[0_12px_30px_rgba(34,197,94,0.5)] active:scale-95 cursor-pointer"
            >
              <span className="text-base">💬</span>
              Chat on WhatsApp
            </a>
          </div>

          {/* Bottom Highlights */}
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs sm:text-[13px] text-[#a3b8db] font-semibold">
            <div className="flex items-center gap-2">
              <span className="text-[#22c55e] font-extrabold">✓</span> 4.6 Google Rating
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#22c55e] font-extrabold">✓</span> 10,000+ Students Trained
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#22c55e] font-extrabold">✓</span> Certified Courses
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#22c55e] font-extrabold">✓</span> 200+ Hiring Partners
            </div>
          </div>

          {/* Download Brochure (PDF) Button below Trust Markers */}
          <div className="mt-8 flex justify-center">
            <button
              onClick={() => window.dispatchEvent(new CustomEvent("openEligibilityModal"))}
              className="inline-flex items-center justify-center gap-2.5 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-sans font-bold text-xs sm:text-sm px-7 py-3.5 rounded-full shadow-lg transition-all active:scale-95 cursor-pointer"
            >
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M7.5 12l4.5 4.5m0 0l4.5-4.5M12 16.5V3" />
              </svg>
              <span>Download Brochure (PDF)</span>
            </button>
          </div>

        </div>
      </section>
    </div>
  );
}

