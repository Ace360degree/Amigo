import React from "react";
import heroImage from "../assets/img/brancheshero1a.png";
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
    tag: "Head Office",
    address: [
      "AMIGO ACADEMY GHATKOPAR",
      "SAI INFOTECH, 107 & 108, Patel Chowk",
      "Opposite Ghatkopar Station, Saibaba Nagar",
      "Pant Nagar, Ghatkopar East, Mumbai, Maharashtra 400077",
    ],
    phone: "+91 99875 88932",
    mapHref: "https://maps.google.com/?q=Sai+Infotech+Ghatkopar+East+Mumbai",
  },
  {
    name: "Andheri",
    address: [
      "AMIGO ACADEMY ANDHERI",
      "902, 9th, Time Chambers, Swami Vivekanand Rd",
      "Andheri West, Mumbai, Maharashtra 400058",
    ],
    phone: "+91 99875 88932",
    mapHref: "https://maps.google.com/?q=Time+Chambers+Swami+Vivekanand+Road+Andheri+West+Mumbai",
  },
  {
    name: "Thane",
    address: [
      "AMIGO ACADEMY THANE",
      "A204, 2nd Floor, Thakor Niwas CHS",
      "Above Tip Top Mithaiwala, Jambli Naka",
      "Thane West, Thane, Maharashtra 400602",
    ],
    phone: "+91 99875 88932",
    mapHref: "https://maps.google.com/?q=Thakor+Niwas+Jambli+Naka+Thane+West+Maharashtra",
  },
];

const branchShowcase = [
  {
    title: "Ghatkopar Branch (Head Office)",
    description:
      "Our Ghatkopar branch serves as the head office of Amigo Academy and has been guiding students towards careers in aviation and technology since 2017.",
    image: branchImage1,
    cta: "Explore Ghatkopar Branch",
  },
  {
    title: "Andheri Branch",
    description:
      "Conveniently located for students in the western suburbs, our Andheri branch offers the same courses, practical training, and placement support that students expect from Amigo Academy.",
    image: branchImage2,
    cta: "Explore Andheri Branch",
  },
  {
    title: "Thane Branch",
    description:
      "Our Thane branch provides students in the central suburbs with easy access to career-focused training, helping aspiring professionals prepare for opportunities in aviation and technology.",
    image: branchImage3,
    cta: "Explore Thane Branch",
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
  return (
    <div className="bg-[#f5f7fb] text-neutral-900">
      <section className="relative overflow-hidden bg-white border-b border-neutral-100">
        <div className="absolute inset-0">
          <div className="absolute inset-y-0 right-0 w-full lg:w-[58%]">
            <img
              src={heroImage}
              alt="Amigo Academy branch"
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white via-48% to-white/0" />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/70 to-transparent lg:hidden" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 md:px-8 py-14 lg:py-20">
          <div className="max-w-[560px] space-y-6">
            <div className="text-[10px] sm:text-xs font-semibold text-slate-400">
              Home &nbsp; &gt; &nbsp;
              <span className="text-[#e31e24]">Branches</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-[58px] font-extrabold tracking-tight text-[#1f3658] leading-[1.05]">
                Find an Amigo Academy Branch Near You
              </h1>
              <p className="text-sm sm:text-base leading-7 text-slate-600 max-w-xl">
                With three branches across Mumbai, Amigo Academy makes quality career-focused
                education more accessible to students. Whether you choose our Ghatkopar,
                Andheri, or Thane branch, you&apos;ll receive the same practical training,
                dedicated placement support, and honest career guidance that have helped over
                10,000 students begin their careers in aviation and technology.
              </p>
            </div>

            <a
              href="#branch-grid"
              className="inline-flex items-center justify-center rounded-full bg-[#e31e24] px-6 py-3.5 text-sm font-bold text-white shadow-[0_12px_25px_rgba(227,30,36,0.18)] transition-all hover:bg-[#c8191f] active:scale-95"
            >
              Find Your Nearest Branch
              <span className="ml-2">â†’</span>
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 -mt-8 relative z-10 pb-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-[22px] border border-neutral-200/70 bg-white px-5 py-6 text-center shadow-[0_10px_30px_rgba(15,42,74,0.04)]"
            >
              <div className="text-3xl sm:text-[34px] font-extrabold text-[#1f3658]">
                {stat.value}
              </div>
              <div className="mt-2 text-[11px] sm:text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#f4f7fc] py-20 px-4 sm:px-6 md:px-8 border-t border-neutral-100">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-3xl sm:text-[40px] font-extrabold text-[#1f3658] leading-tight">
            Three Convenient Locations
            <br />
            Across Mumbai
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-sm sm:text-base leading-7 text-slate-500">
            Choosing the right institute should never depend on how far you have to travel.
            That&apos;s why Amigo Academy has established branches in Ghatkopar, Andheri, and
            Thane, making it easier for students across Mumbai to access professional training
            closer to home.
          </p>
          <p className="mx-auto mt-4 max-w-3xl text-sm sm:text-base leading-7 text-slate-500">
            Simply choose the branch that&apos;s most convenient for you and begin your journey
            with confidence.
          </p>

          <div className="mt-10 rounded-[22px] bg-white p-4 sm:p-6 shadow-[0_12px_35px_rgba(15,42,74,0.08)] border border-white/80">
            <div className="relative overflow-hidden rounded-[18px] bg-white">
              <div className="absolute left-6 top-5 sm:left-10 sm:top-8 z-10 flex flex-col gap-5 sm:flex-row sm:gap-16 lg:gap-24">
                {["Andheri", "Ghatkopar", "Thane"].map((branch) => (
                  <div key={branch} className="flex items-start gap-2.5 text-left">
                    <div className="text-[#d61f26] text-2xl leading-none">ðŸ“</div>
                    <div className="pt-0.5">
                      <div className="text-sm sm:text-base font-extrabold text-[#1f3658] leading-none">
                        {branch}
                      </div>
                      <div className="text-[11px] sm:text-xs text-slate-500 font-medium">Branch</div>
                    </div>
                  </div>
                ))}
              </div>

              <img
                src={branchesIllustration}
                alt="Mumbai branch locations illustration"
                className="mt-12 w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 px-4 sm:px-6 md:px-8 border-t border-neutral-100">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-3xl sm:text-[40px] font-extrabold text-[#1f3658] leading-tight">
              Our Branches
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {branchShowcase.map((branch) => (
              <article
                key={branch.title}
                className="overflow-hidden rounded-[22px] border border-[#d9e1ee] bg-white shadow-[0_10px_30px_rgba(15,42,74,0.05)]"
              >
                <div className="h-52 sm:h-56 overflow-hidden">
                  <img
                    src={branch.image}
                    alt={branch.title}
                    className="h-full w-full object-cover object-center"
                  />
                </div>

                <div className="p-6 sm:p-7">
                  <h3 className="text-[17px] sm:text-lg font-extrabold text-[#1f3658] leading-snug">
                    {branch.title}
                  </h3>
                  <p className="mt-4 text-sm leading-6 text-slate-500">
                    {branch.description}
                  </p>

                  <a
                    href="#branch-grid"
                    className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#e31e24] px-6 py-3.5 text-sm font-bold text-white shadow-[0_12px_25px_rgba(227,30,36,0.18)] transition-all hover:bg-[#c8191f] active:scale-95"
                  >
                    {branch.cta}
                    <img
                      src={branchArrowIcon}
                      alt=""
                      aria-hidden="true"
                      className="h-4 w-4 object-contain"
                    />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

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

              <a
                href="#branch-grid"
                className="mt-8 inline-flex items-center justify-center rounded-full bg-[#e31e24] px-6 py-3.5 text-sm font-bold text-white shadow-[0_12px_25px_rgba(227,30,36,0.18)] transition-all hover:bg-[#c8191f] active:scale-95"
              >
                Find Your Nearest Branch
                <span className="ml-2">â†’</span>
              </a>
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

      <section className="bg-[#082a63] px-4 sm:px-6 md:px-8 py-16 sm:py-20 border-t border-[#0f356f]">
        <div className="mx-auto max-w-6xl text-center text-white">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#f1b739]/30 bg-[#123977] px-4 py-1.5 text-[10px] sm:text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#f5c24a]">
            <img src={branchCtaIcon1} alt="" aria-hidden="true" className="h-3.5 w-3.5 object-contain" />
            Limited Seats Per Batch - Apply Early to Secure Your Spot
          </div>

          <h2 className="mx-auto mt-6 max-w-4xl text-3xl sm:text-4xl lg:text-[44px] font-extrabold leading-[1.1] text-white">
            Start Your Journey from the Branch That&apos;s Closest to You
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm sm:text-base leading-7 text-[#c6d5ee]">
            Admissions Open â€” Secure Your Seat Early. One free call is all it takes.
          </p>

          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#f5b74a]/25 bg-[#123977] px-5 py-2 text-[10px] sm:text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#f5b74a]">
            <img
              src={branchCtaIcon2}
              alt=""
              aria-hidden="true"
              className="h-3.5 w-3.5 object-contain"
            />
            Maharashtra Govt Certified - Only aviation institute in Maharashtra
          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#branch-grid"
              className="inline-flex min-w-[190px] items-center justify-center gap-2 rounded-full bg-[#ef2a22] px-6 py-3.5 text-sm font-extrabold text-white shadow-[0_12px_25px_rgba(239,42,34,0.22)] transition-all hover:bg-[#d9221c] active:scale-95"
            >
              <img
                src={branchCtaIcon3}
                alt=""
                aria-hidden="true"
                className="h-4 w-4 object-contain"
              />
              Check My Eligibility Now
            </a>

            <a
              href="#branch-grid"
              className="inline-flex min-w-[190px] items-center justify-center gap-2 rounded-full bg-[#ef2a22] px-6 py-3.5 text-sm font-extrabold text-white shadow-[0_12px_25px_rgba(239,42,34,0.22)] transition-all hover:bg-[#d9221c] active:scale-95"
            >
              Start My Career
            </a>

            <a
              href="#branch-grid"
              className="inline-flex min-w-[190px] items-center justify-center gap-2 rounded-full bg-[#25d366] px-6 py-3.5 text-sm font-extrabold text-white shadow-[0_12px_25px_rgba(37,211,102,0.22)] transition-all hover:bg-[#1fb85b] active:scale-95"
            >
              <img
                src={branchCtaIcon4}
                alt=""
                aria-hidden="true"
                className="h-4 w-4 object-contain"
              />
              Chat on WhatsApp
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[11px] sm:text-xs text-[#c6d5ee]">
            <div className="flex items-center gap-2">
              <span className="text-[#26d07c]">âœ“</span> 4.6 Google Rating
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#26d07c]">âœ“</span> 10,000+ Students
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#26d07c]">âœ“</span> Govt Certified
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#26d07c]">âœ“</span> 200+ Hiring Partners
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

