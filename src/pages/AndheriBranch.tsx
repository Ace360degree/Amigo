import React from "react";
import { useNavigate } from "react-router-dom";
import andheriHero from "../assets/img/branches/Andheri-hero.png";
import andheriHeroMobile from "../assets/img/branches/Andheri-hero-mobile.png";
import course1 from "../assets/img/branches/1.png";
import course2 from "../assets/img/branches/2.png";
import course3 from "../assets/img/branches/3.png";
import visitImg from "../assets/img/branches/4.png";

export default function AndheriBranch() {
  const navigate = useNavigate();

  const handleCTA = () => {
    navigate("/contact");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const courses = [
    {
      image: course1,
      title: "Air Hostess / Cabin Crew",
      desc: "Prepare for a professional career with domestic and international airlines through practical training, personality development, and interview preparation.",
      btn: "Explore Air Hostess / Cabin Crew Course",
      link: "/career-guide/cabin-crew"
    },
    {
      image: course2,
      title: "Airport Ground Staff",
      desc: "Build the knowledge and practical skills required for customer service and operational roles within airports and the aviation industry.",
      btn: "Explore Airport Ground Staff Course",
      link: "/career-guide/airport-ground-staff"
    },
    {
      image: course3,
      title: "AI & Data Science",
      desc: "Develop future-ready technical skills through industry-oriented learning, practical projects, and career-focused training in Artificial Intelligence and Data Science.",
      btn: "Explore AI & Data Science Course",
      link: "/career-guide/ai-data-science"
    }
  ];

  const features = [
    {
      icon: (
        <svg className="w-7 h-7 text-[#1C3E8A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
        </svg>
      ),
      label: "Industry Focussed Training"
    },
    {
      icon: (
        <svg className="w-7 h-7 text-[#1C3E8A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
        </svg>
      ),
      label: "Experienced Faculty"
    },
    {
      icon: (
        <svg className="w-7 h-7 text-[#1C3E8A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
        </svg>
      ),
      label: "Practical Training"
    },
    {
      icon: (
        <svg className="w-7 h-7 text-[#1C3E8A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
        </svg>
      ),
      label: "Placement Support"
    },
    {
      icon: (
        <svg className="w-7 h-7 text-[#1C3E8A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
        </svg>
      ),
      label: "Career Guidance"
    },
    {
      icon: (
        <svg className="w-7 h-7 text-[#1C3E8A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        </svg>
      ),
      label: "Same Quality at Every Branch"
    }
  ];

  return (
    <div className="flex flex-col bg-white">

      {/* Hero Section */}
      {/* Desktop Hero View */}
      <section className="hidden sm:flex relative w-full min-h-[620px] lg:h-[660px] bg-white items-center overflow-hidden border-b border-neutral-100">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-y-0 right-0 w-full lg:w-[56%] h-full">
            <img
              src={andheriHero}
              alt="Amigo Academy Andheri Branch"
              className="w-full h-full object-cover object-left lg:object-center"
              onError={(e) => { e.currentTarget.style.display = "none"; }}
            />
            <div className="absolute inset-0 bg-neutral-900/5 mix-blend-multiply" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white via-45% md:via-48% lg:via-46% to-transparent z-10 pointer-events-none" />
        </div>

        <div className="relative max-w-7xl mx-auto w-full px-6 sm:px-8 md:px-12 z-20 py-16 lg:py-0">
          <div className="max-w-[580px] lg:max-w-[650px] text-left flex flex-col space-y-8">
            <h1 className="text-3xl sm:text-4xl lg:text-[50px] font-outfit font-extrabold tracking-tight text-[#1C3E8A] leading-[1.2] mb-2">
              Amigo Academy<br />Andheri Branch
            </h1>
            <p className="text-slate-600 font-sans font-semibold text-xs sm:text-[16px] leading-relaxed max-w-xl">
              Located in the prime educational hub of Andheri, our branch is dedicated to helping students build successful careers in Aviation and Technology. With Maharashtra Government Certified aviation training, industry-oriented programmes, practical learning sessions, placement assistance, and personalised career guidance, the Andheri branch provides aspiring students with the skills and confidence needed to achieve their career goals.
            </p>
            <div className="pt-2">
              <button
                onClick={handleCTA}
                className="inline-flex items-center justify-center gap-2 bg-[#DF1818] hover:bg-[#c41212] text-white font-sans font-bold text-xs sm:text-[14px] px-8 py-4 rounded-full shadow-[0_8px_20px_rgba(223,24,24,0.2)] hover:shadow-[0_12px_24px_rgba(223,24,24,0.3)] transition-all duration-300 active:scale-95 whitespace-nowrap focus:outline-none cursor-pointer"
              >
                Visit the Andheri Branch
                <span className="font-bold">&nbsp;&#10132;</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Hero View matching screenshot */}
      <section className="sm:hidden relative w-full bg-white overflow-hidden border-b border-neutral-100">
        <div className="relative w-full h-[530px] overflow-hidden">
          {/* Background Image without gradient overlay */}
          <img
            src={andheriHeroMobile}
            alt="Amigo Academy Andheri Branch"
            className="absolute inset-0 w-full h-full object-cover object-[right_top]"
          />

          {/* Text Content overlay matching screenshot */}
          <div className="absolute inset-y-0 left-0 z-10 px-5 flex flex-col justify-center max-w-[280px]">
            <h1 className="text-[28px] font-extrabold text-[#17365d] leading-[1.15] tracking-tight mb-4 font-outfit">
              Amigo Academy<br />
              Andheri Branch
            </h1>

            <p className="text-[#475569] text-[12.5px] leading-relaxed mb-6 font-medium">
              Located in Andheri, our branch helps students build careers in Aviation and Technology through Maharashtra Government Certified training, practical learning, placement support, and personalised career guidance.
            </p>

            <div>
              <button
                onClick={handleCTA}
                className="inline-flex items-center justify-between gap-3 bg-[#e02607] hover:bg-[#c81e04] text-white font-bold text-[13.5px] px-5 py-3 rounded-full shadow-lg active:scale-95 transition-all duration-300 cursor-pointer"
              >
                <span>Visit the Andheri Branch</span>
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20 text-white text-xs font-extrabold">➔</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome To Amigo Academy Andheri Branch section */}
      <section className="bg-white py-20 sm:py-24 border-t border-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-[920px] mx-auto text-center">
            <h2 className="text-3xl sm:text-[40px] font-extrabold text-[#1C3E8A] font-outfit mb-8 leading-tight tracking-tight">
              Welcome To Amigo Academy<br className="hidden sm:block" /> Andheri Branch
            </h2>
            <div className="space-y-5 text-slate-600 font-sans font-semibold text-xs sm:text-[16px] leading-relaxed">
              <p>
                The Andheri branch of Amigo Academy is dedicated to helping students build successful careers in Aviation and Technology. Located in a well-connected area of Mumbai, this branch provides students with easy access to career-focused training, personalized guidance, and admission support.
              </p>
              <p>
                Whether you are exploring career options after 12th or planning to enter the aviation or technology industry, our experienced team at Andheri is here to guide you with the right skills, knowledge, and confidence to make informed career decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Offered at the Andheri Branch section */}
      <section className="bg-white py-16 sm:py-20 border-t border-slate-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-[38px] font-extrabold text-[#1C3E8A] font-outfit mb-4 leading-tight tracking-tight">
              Courses Offered at the Andheri Branch
            </h2>
            <p className="text-slate-600 font-sans font-semibold text-xs sm:text-[15px] max-w-[640px] mx-auto leading-relaxed">
              Students at our Andheri branch can enrol in the same industry-focused programmes offered across all Amigo Academy locations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {courses.map((course, idx) => (
              <div
                key={idx}
                className="bg-white rounded-[20px] overflow-hidden border border-[#E1E5ED] shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-[0_12px_40px_rgb(0,0,0,0.07)] transition-all duration-300 flex flex-col"
              >
                {/* Course Image */}
                <div className="w-full h-[200px] overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Course Body */}
                <div className="p-6 flex flex-col flex-1 space-y-3">
                  <h3 className="text-[16px] sm:text-[17px] font-bold text-[#1C3E8A] font-outfit leading-snug">
                    {course.title}
                  </h3>
                  <p className="text-slate-500 font-sans text-xs sm:text-[13px] font-semibold leading-relaxed flex-1">
                    {course.desc}
                  </p>
                  <div className="pt-2">
                    <button
                      onClick={() => { navigate(course.link); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                      className="w-full inline-flex items-center justify-center gap-2 bg-[#DF1818] hover:bg-[#c41212] text-white font-sans font-bold text-xs sm:text-[13px] py-3 px-5 rounded-full shadow-[0_6px_16px_rgba(223,24,24,0.15)] hover:shadow-[0_8px_24px_rgba(223,24,24,0.25)] transition-all duration-300 active:scale-95 focus:outline-none cursor-pointer"
                    >
                      {course.btn}
                      <span className="font-bold">&#10132;</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Same Amigo Experience at Every Branch section */}
      <section className="bg-[#f4f7fa] py-20 sm:py-24 border-t border-slate-100/60">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-[40px] font-extrabold text-[#1C3E8A] font-outfit mb-8 leading-tight tracking-tight">
              The Same Amigo Experience<br className="hidden sm:block" /> at Every Branch
            </h2>
            <div className="space-y-5 text-slate-600 font-sans font-semibold text-xs sm:text-[15.5px] leading-relaxed max-w-[760px] mx-auto">
              <p>
                No matter which branch you choose, you'll become part of the same Amigo Academy community. Every branch follows the same training standards, offers the same career-focused programmes, and is committed to helping students build the skills and confidence needed for professional success.
              </p>
              <p>
                From classroom learning and career guidance to placement support, every student receives the same commitment to quality across all our branches.
              </p>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="bg-white rounded-[18px] p-7 border border-[#E1E5ED] shadow-[0_8px_30px_rgb(0,0,0,0.02)] hover:shadow-[0_12px_40px_rgb(0,0,0,0.05)] transition-all duration-300 flex flex-col items-center text-center gap-4"
              >
                <div className="w-12 h-12 rounded-full bg-[#eef1f9] flex items-center justify-center flex-shrink-0">
                  {feature.icon}
                </div>
                <p className="text-[14px] sm:text-[15px] font-bold text-[#1C3E8A] font-outfit leading-snug">
                  {feature.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visit Our Branch Before You Decide section */}
      <section className="bg-white py-20 sm:py-24 border-t border-slate-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-[40px] font-extrabold text-[#1C3E8A] font-outfit leading-tight tracking-tight">
              Visit Our Branch Before You Decide
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-6 text-left order-2 lg:order-1">
              <div className="space-y-5 text-slate-600 font-sans font-semibold text-xs sm:text-[15px] leading-relaxed">
                <p>
                  Choosing the right institute is an important step towards building your future, and visiting our Andheri branch allows you to experience the Amigo Academy environment first-hand. Meet our counsellors, discuss your career goals, explore available courses, and receive honest guidance to help you select the right programme for your aspirations.
                </p>
                <p>
                  Whether you are visiting for admissions, course details, or career counselling, our team at the Andheri branch is here to answer your questions and support you throughout your journey towards a successful career in Aviation and Technology.
                </p>
              </div>
              <div className="pt-2">
                <button
                  onClick={handleCTA}
                  className="inline-flex items-center justify-center gap-2 bg-[#DF1818] hover:bg-[#c41212] text-white font-sans font-bold text-xs sm:text-[14px] px-8 py-4 rounded-full shadow-[0_8px_20px_rgba(223,24,24,0.2)] hover:shadow-[0_12px_24px_rgba(223,24,24,0.3)] transition-all duration-300 active:scale-95 whitespace-nowrap focus:outline-none cursor-pointer"
                >
                  Find Your Nearest Branch
                  <span className="font-bold">&nbsp;&#10132;</span>
                </button>
              </div>
            </div>

            {/* Right Image */}
            <div className="w-full h-[280px] sm:h-[360px] lg:h-[340px] rounded-[24px] overflow-hidden order-1 lg:order-2 shadow-[0_10px_30px_rgba(0,0,0,0.06)]">
              <img
                src={visitImg}
                alt="Visit Amigo Academy Andheri Branch"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Branch Information section */}
      <section className="bg-[#f4f7fa] py-20 sm:py-24 border-t border-slate-100/60">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
          <h2 className="text-3xl sm:text-[40px] font-extrabold text-[#1C3E8A] font-outfit mb-12 text-center leading-tight tracking-tight">
            Branch Information
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Address */}
            <div className="bg-white rounded-[20px] p-7 border border-[#E1E5ED] shadow-[0_8px_30px_rgb(0,0,0,0.02)] hover:shadow-[0_12px_40px_rgb(0,0,0,0.05)] transition-all duration-300 flex flex-col gap-4">
              <div className="w-11 h-11 rounded-full bg-[#eef1f9] flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-[#1C3E8A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
              </div>
              <div>
                <p className="text-[14px] sm:text-[15px] font-bold text-[#1C3E8A] font-outfit mb-2">Address</p>
                <p className="text-slate-500 font-sans text-xs sm:text-[13.5px] font-semibold leading-relaxed">
                  9th Floor, Time Chambers, S.V.Road,<br />
                  Opposite Andheri Railway Station,<br />
                  Andheri (West)
                </p>
              </div>
            </div>

            {/* Contact Number */}
            <div className="bg-white rounded-[20px] p-7 border border-[#E1E5ED] shadow-[0_8px_30px_rgb(0,0,0,0.02)] hover:shadow-[0_12px_40px_rgb(0,0,0,0.05)] transition-all duration-300 flex flex-col gap-4">
              <div className="w-11 h-11 rounded-full bg-[#eef1f9] flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-[#1C3E8A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
              </div>
              <div>
                <p className="text-[14px] sm:text-[15px] font-bold text-[#1C3E8A] font-outfit mb-2">Contact Number</p>
                <p className="text-slate-500 font-sans text-xs sm:text-[13.5px] font-semibold leading-relaxed">
                  +91-74001-86233<br />
                  +91-98332-93942
                </p>
              </div>
            </div>

            {/* Courses Available */}
            <div className="bg-white rounded-[20px] p-7 border border-[#E1E5ED] shadow-[0_8px_30px_rgb(0,0,0,0.02)] hover:shadow-[0_12px_40px_rgb(0,0,0,0.05)] transition-all duration-300 flex flex-col gap-4">
              <div className="w-11 h-11 rounded-full bg-[#eef1f9] flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-[#1C3E8A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <div>
                <p className="text-[14px] sm:text-[15px] font-bold text-[#1C3E8A] font-outfit mb-2">Courses Available</p>
                <ul className="text-slate-500 font-sans text-xs sm:text-[13.5px] font-semibold leading-relaxed space-y-1">
                  <li>&#8226; Air Hostess / Cabin Crew</li>
                  <li>&#8226; Airport Ground Staff</li>
                  <li>&#8226; AI &amp; Data Science</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Start Your Journey CTA section */}
      <section className="bg-[#001D4A] py-16 sm:py-20 text-center text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">

          {/* Top Badge */}
          <div className="bg-[#1e293b]/40 border border-slate-700/50 rounded-xl px-5 py-2 inline-flex items-center gap-2 text-xs font-bold text-[#ffd300] uppercase tracking-wider mb-6">
            <span>&#9889;</span> LIMITED SEATS PER BATCH &#8212; APPLY EARLY TO SECURE YOUR SPOT
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-[44px] lg:text-[48px] font-extrabold text-white font-outfit max-w-3xl leading-tight tracking-tight mb-4">
            Start Your Journey from the Branch That's Closest to You
          </h2>

          {/* Subtitle */}
          <p className="text-slate-300 font-sans font-semibold text-xs sm:text-[16px] leading-relaxed mb-6">
            Admissions Open &#8212; Secure Your Seat Early. One free call is all it takes.
          </p>

          {/* Second Badge */}
          <div className="bg-[#1e293b]/40 border border-slate-700/50 rounded-xl px-5 py-2 inline-flex items-center gap-2 text-xs font-bold text-[#ffd300] uppercase tracking-wider mb-10">
            <span>&#127963;</span> Maharashtra Govt Certified &#8212; Only aviation institute in Maharashtra
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-4xl mb-8">
            <button
              onClick={handleCTA}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#DF1818] hover:bg-[#c41212] text-white font-sans font-bold text-xs sm:text-[14px] uppercase tracking-wider px-8 py-4 rounded-xl shadow-lg transition-all duration-300 active:scale-95 whitespace-nowrap focus:outline-none cursor-pointer"
            >
              &#10022; CHECK MY ELIGIBILITY NOW
            </button>
            <button
              onClick={handleCTA}
              className="w-full sm:w-auto inline-flex items-center justify-center bg-[#DF1818] hover:bg-[#c41212] text-white font-sans font-bold text-xs sm:text-[14px] px-8 py-4 rounded-xl shadow-lg transition-all duration-300 active:scale-95 whitespace-nowrap focus:outline-none cursor-pointer"
            >
              Start My Career
            </button>
            <a
              href="https://wa.me/919987588932"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba56] text-white font-sans font-bold text-xs sm:text-[14px] px-8 py-4 rounded-xl shadow-lg transition-all duration-300 active:scale-95 whitespace-nowrap focus:outline-none cursor-pointer"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.248 8.477 3.517 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.963C16.588 1.981 14.117.954 11.5.954c-5.43 0-9.855 4.37-9.859 9.801-.002 1.757.465 3.472 1.353 4.982L2.003 21.84l6.143-1.603z" />
              </svg>
              Chat on WhatsApp
            </a>
          </div>

          {/* Features Row */}
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs sm:text-[13px] text-slate-300 font-bold font-sans">
            <span className="flex items-center gap-1.5"><span className="text-[#25D366]">&#10003;</span> 4.6 Google Rating</span>
            <span className="flex items-center gap-1.5"><span className="text-[#25D366]">&#10003;</span> 10,000+ Students</span>
            <span className="flex items-center gap-1.5"><span className="text-[#25D366]">&#10003;</span> Govt Certified</span>
            <span className="flex items-center gap-1.5"><span className="text-[#25D366]">&#10003;</span> 200+ Hiring Partners</span>
          </div>

        </div>
      </section>
    </div>
  );
}
