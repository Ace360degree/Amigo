import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useNavigate } from '@tanstack/react-router';
import { S as SEO } from './SEO-DZzBR_S9.mjs';
import { s as submitCounsellorForm } from './router-CBeBCufh.mjs';
import Swal from 'sweetalert2';
import { S as Studentpf1, a as Studentimg1, b as Studentpf3, c as Studentimg3, d as Studentpf2, e as Studentimg2 } from './Studentpf3-BszBCtiH.mjs';
import { S as Studentpf4, a as Student4, b as Studentpf5, c as Student5 } from './Studentpf5-Bc2yn57C.mjs';
import 'axios';

const courseCabin = "/assets/course-cabiny1-BwEbvYbX.png";
const courseGround = "/assets/course-groundy1-BrTIKsEk.png";
const courseAi = "/assets/course-aiy1-C9gq0wxM.png";
const differentClassroom = "/assets/different-classroom-D_r_SD8R.png";
const cabinCrewBanner = "/assets/cabincrew-CDKk4jqq.png";
const cabinCrewMobileBanner = "/assets/cabincrew-mobile-CuyEib-L.png";
const groundStaffBanner = "/assets/airportgroundstaff-DStN0AQn.png";
const groundStaffMobileBanner = "/assets/airportgroundstaff-mobile-CzWQoSal.png";
const aidsBanner = "/assets/aids-CYyD1MMl.png";
const aidsMobileBanner = "/assets/aids-mobile-CZiRe03w.png";
const gReview1 = "/assets/1-CDylrEYA.png";
const gReview2 = "/assets/2-CL-BbNtu.png";
const gReview3 = "/assets/3-HULsfph7.png";
const gReview4 = "/assets/4-CDxlMOlF.png";
const gReview5 = "/assets/5-nv-Y630e.png";
const gReview6 = "/assets/6-Btwwjt-O.png";
const gReview7 = "/assets/7-CU0ZQZxK.png";
const gReview8 = "/assets/8-DKAB1CFH.png";
const brandAirIndia = "/assets/brandAirIndia-DrYD-jUE.png";
const brandQatar = "/assets/brandQatar-CQtQ4gnG.png";
const brandEmirates = "/assets/brandEmirates-m8Ck6uZJ.png";
const brandSpiceJet = "/assets/brandSpiceJet-CaJ2u8Rb.png";
const newsImage1 = "/assets/newsImage1-B71OvjmW.png";
const newsImage2 = "/assets/newsImage2-C6Ia_wQE.png";
const newsImage3 = "/assets/newsImage3-BzMjohDn.png";
const newsImage4 = "/assets/newsImage4-CaJNJ4Rp.png";
const newsFeatured = "/assets/newsFeatured-VnCoQomw.png";
function Home({ setCurrentPage } = {}) {
  const navigate = useNavigate();
  const [mobileNumber, setMobileNumber] = useState("");
  const [fullName, setFullName] = useState("");
  const [selectedCourse, setSelectedCourse] = useState("");
  const [selectedBranch, setSelectedBranch] = useState("");
  const [selectedAge, setSelectedAge] = useState("");
  const [selectedGender, setSelectedGender] = useState("");
  const [activeGuide, setActiveGuide] = useState("");
  const [activeFaq, setActiveFaq] = useState(null);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const heroSlides = [
    {
      id: "cabin-crew",
      tagline: "Your Aviation Dream",
      highlightTagline: "Starts Here",
      courseName: "Cabin Crew (Air Hostess) & Hospitality Management",
      desktopImg: cabinCrewBanner,
      mobileImg: cabinCrewMobileBanner
    },
    {
      id: "ground-staff",
      tagline: "Your Airport Career",
      highlightTagline: "Starts Here",
      courseName: "Airport Ground Staff & Hospitality Management",
      desktopImg: groundStaffBanner,
      mobileImg: groundStaffMobileBanner
    },
    {
      id: "ai-data-science",
      tagline: "Your Tech & AI Career",
      highlightTagline: "Starts Here",
      courseName: "AI & Data Science",
      desktopImg: aidsBanner,
      mobileImg: aidsMobileBanner
    }
  ];
  useEffect(() => {
    const slideTimer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5e3);
    return () => clearInterval(slideTimer);
  }, []);
  const [loading, setLoading] = useState(false);
  const handleApply = async (e) => {
    e.preventDefault();
    if (!mobileNumber || !fullName || !selectedCourse || !selectedBranch || !selectedAge || !selectedGender || loading) {
      Swal.fire({
        title: "Incomplete Form",
        text: "Please fill in all required fields.",
        icon: "warning",
        confirmButtonColor: "#DF1818"
      });
      return;
    }
    setLoading(true);
    try {
      await submitCounsellorForm({
        name: fullName,
        phone: mobileNumber,
        course: selectedCourse,
        branch: selectedBranch,
        age: selectedAge,
        gender: selectedGender,
        form_location: "Home Page Hero Form"
      });
      setMobileNumber("");
      setFullName("");
      setSelectedCourse("");
      setSelectedBranch("");
      setSelectedAge("");
      setSelectedGender("");
      Swal.fire({
        title: "Application Submitted!",
        text: "Thank you for contacting us. Redirecting to confirmation page...",
        icon: "success",
        confirmButtonColor: "#1C3E8A",
        timer: 2e3,
        timerProgressBar: true,
        showConfirmButton: false
      }).then(() => {
        navigate({ to: "/thank-you" });
      });
    } catch (error) {
      console.error("Home form submit error:", error);
      Swal.fire({
        title: "Submission Failed",
        text: "Failed to submit enquiry. Please try again.",
        icon: "error",
        confirmButtonColor: "#DF1818"
      });
    } finally {
      setLoading(false);
    }
  };
  const coursesList = [
    "Cabin Crew (Air Hostess) & Hospitality Management",
    "Airport Ground Staff & Hospitality Management",
    "AI & Data Science"
  ];
  const branchesList = [
    "Ghatkopar",
    "Andheri",
    "Thane"
  ];
  return /* @__PURE__ */ jsxs("div", { className: "relative bg-neutral-50", children: [
    /* @__PURE__ */ jsx(
      SEO,
      {
        title: "Amigo Academy - Aviation, Cabin Crew & AI Training Institute",
        description: "Amigo Academy is Mumbai's premier institute for Air Hostess, Cabin Crew Training, Airport Ground Staff, Aviation Hospitality, and AI & Data Science courses with 100% placement assistance.",
        keywords: "Amigo Academy, Cabin Crew Training, Air Hostess Course Mumbai, Airport Ground Staff Training, Aviation Academy Mumbai, AI Data Science Course",
        schema: {
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Amigo Academy",
          "url": "https://staging.amigoacademy.in",
          "logo": "https://staging.amigoacademy.in/assets/img/hero-crew.png",
          "description": "Premier aviation, cabin crew, ground staff, and AI training institute in Mumbai.",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Mumbai",
            "addressRegion": "Maharashtra",
            "addressCountry": "IN"
          },
          "sameAs": [
            "https://www.facebook.com/amigoacademy",
            "https://www.instagram.com/amigoacademy"
          ]
        }
      }
    ),
    /* @__PURE__ */ jsxs("section", { className: "relative w-full min-h-[460px] sm:min-h-[520px] lg:min-h-[620px] bg-white overflow-hidden flex items-center", children: [
      heroSlides.map((slide, idx) => {
        const isActive = idx === currentSlide;
        return /* @__PURE__ */ jsxs(
          "div",
          {
            className: `absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out flex items-center ${isActive ? "opacity-100 z-10 pointer-events-auto" : "opacity-0 z-0 pointer-events-none"}`,
            children: [
              /* @__PURE__ */ jsxs("div", { className: "hidden lg:block absolute right-0 top-0 bottom-0 w-3/5 h-full z-0", children: [
                /* @__PURE__ */ jsx(
                  "img",
                  {
                    src: slide.desktopImg,
                    alt: slide.courseName,
                    className: "w-full h-full object-cover object-center"
                  }
                ),
                /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-white via-white/20 to-transparent z-10" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "block lg:hidden absolute inset-0 z-0 w-full h-full", children: [
                /* @__PURE__ */ jsx(
                  "img",
                  {
                    src: slide.mobileImg,
                    alt: `${slide.courseName} Mobile`,
                    className: "w-full h-full object-cover object-right"
                  }
                ),
                /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-white via-white/95 via-45% to-transparent z-10" })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto w-full px-6 pt-6 pb-20 sm:pb-24 lg:py-20 relative z-20 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center", children: /* @__PURE__ */ jsxs("div", { className: "lg:col-span-7 flex flex-col space-y-4 sm:space-y-6 text-left items-start justify-center", children: [
                /* @__PURE__ */ jsxs("h1", { className: "text-[22px] sm:text-3xl lg:text-[54px] font-sans font-extrabold tracking-tight text-[#0f2a4a] leading-[1.3] sm:leading-[1.3] lg:leading-[1.25]", children: [
                  slide.tagline,
                  /* @__PURE__ */ jsx("br", {}),
                  /* @__PURE__ */ jsx("span", { className: "block mt-2 lg:mt-3 text-[#e9ad36]", children: slide.highlightTagline })
                ] }),
                /* @__PURE__ */ jsx("div", { className: "text-[#0f2a4a] font-sans font-extrabold text-xs sm:text-base lg:text-xl max-w-xl border-l-4 border-[#e31e24] pl-3 py-1 bg-slate-50/60 rounded-r-lg", children: slide.courseName }),
                /* @__PURE__ */ jsxs(
                  "button",
                  {
                    onClick: () => window.dispatchEvent(new CustomEvent("openEligibilityModal")),
                    className: "bg-[#e31e24] hover:bg-[#c2141a] text-white font-sans font-bold text-[10px] sm:text-xs lg:text-sm px-5 py-3 lg:px-7 lg:py-3.5 rounded-full shadow-md hover:shadow-lg transition-all active:scale-95 flex items-center gap-2 group focus:outline-none cursor-pointer mt-2",
                    children: [
                      "Enroll Now To Avail Scholarship",
                      /* @__PURE__ */ jsx("svg", { className: "w-3.5 h-3.5 lg:w-4 lg:h-4 transition-transform group-hover:translate-x-1", fill: "none", stroke: "currentColor", strokeWidth: 2.5, viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" }) })
                    ]
                  }
                )
              ] }) })
            ]
          },
          slide.id
        );
      }),
      /* @__PURE__ */ jsxs("div", { className: "absolute bottom-5 left-6 lg:left-12 z-30 flex items-center gap-4", children: [
        /* @__PURE__ */ jsx("div", { className: "flex items-center gap-2", children: heroSlides.map((_, idx) => /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => setCurrentSlide(idx),
            className: `h-2.5 rounded-full transition-all duration-300 cursor-pointer ${idx === currentSlide ? "w-8 bg-[#e31e24]" : "w-2.5 bg-slate-300 hover:bg-slate-400"}`,
            "aria-label": `Go to slide ${idx + 1}`
          },
          idx
        )) }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1.5", children: [
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length),
              className: "w-8 h-8 rounded-full bg-white/90 border border-slate-200 shadow-sm flex items-center justify-center text-slate-700 hover:bg-white hover:text-[#e31e24] transition-all cursor-pointer",
              "aria-label": "Previous Slide",
              children: /* @__PURE__ */ jsx("svg", { className: "w-4 h-4", fill: "none", stroke: "currentColor", strokeWidth: 2.5, viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M15.75 19.5L8.25 12l7.5-7.5" }) })
            }
          ),
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length),
              className: "w-8 h-8 rounded-full bg-white/90 border border-slate-200 shadow-sm flex items-center justify-center text-slate-700 hover:bg-white hover:text-[#e31e24] transition-all cursor-pointer",
              "aria-label": "Next Slide",
              children: /* @__PURE__ */ jsx("svg", { className: "w-4 h-4", fill: "none", stroke: "currentColor", strokeWidth: 2.5, viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M8.25 4.5l7.5 7.5-7.5 7.5" }) })
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { id: "eligibilityForm", className: "max-w-7xl mx-auto w-full px-6 -mt-20 lg:-mt-28 relative z-30", children: /* @__PURE__ */ jsx("div", { className: "bg-white rounded-3xl border border-neutral-100 shadow-xl p-6 sm:p-8 max-w-5xl mx-auto", children: /* @__PURE__ */ jsxs("form", { onSubmit: handleApply, className: "flex flex-col space-y-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "relative flex items-center", children: [
          /* @__PURE__ */ jsx("span", { className: "absolute left-4 text-slate-400", children: /* @__PURE__ */ jsx("svg", { className: "w-5 h-5", fill: "none", stroke: "currentColor", strokeWidth: 2, viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" }) }) }),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "tel",
              required: true,
              placeholder: "Mobile Number",
              value: mobileNumber,
              onChange: (e) => setMobileNumber(e.target.value),
              className: "w-full bg-slate-50 border border-slate-100 focus:border-slate-300 focus:bg-white text-neutral-800 text-sm pl-11 pr-6 py-3.5 rounded-xl focus:outline-none transition-all placeholder-slate-400 font-semibold"
            }
          ),
          /* @__PURE__ */ jsx("span", { className: "absolute right-3.5 top-3.5 text-red-500 font-bold", children: "*" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "relative flex items-center", children: [
          /* @__PURE__ */ jsx("span", { className: "absolute left-4 text-slate-400", children: /* @__PURE__ */ jsx("svg", { className: "w-5 h-5", fill: "none", stroke: "currentColor", strokeWidth: 2, viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" }) }) }),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "text",
              required: true,
              placeholder: "Full Name",
              value: fullName,
              onChange: (e) => setFullName(e.target.value),
              className: "w-full bg-slate-50 border border-slate-100 focus:border-slate-300 focus:bg-white text-neutral-800 text-sm pl-11 pr-6 py-3.5 rounded-xl focus:outline-none transition-all placeholder-slate-400 font-semibold"
            }
          ),
          /* @__PURE__ */ jsx("span", { className: "absolute right-3.5 top-3.5 text-red-500 font-bold", children: "*" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "relative flex items-center", children: [
          /* @__PURE__ */ jsx("span", { className: "absolute left-4 text-slate-400 pointer-events-none", children: /* @__PURE__ */ jsxs("svg", { className: "w-5 h-5", fill: "none", stroke: "currentColor", strokeWidth: 2, viewBox: "0 0 24 24", children: [
            /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 14l9-5-9-5-9 5 9 5z" }),
            /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" })
          ] }) }),
          /* @__PURE__ */ jsxs(
            "select",
            {
              required: true,
              value: selectedCourse,
              onChange: (e) => setSelectedCourse(e.target.value),
              className: "w-full bg-slate-50 border border-slate-100 focus:border-slate-300 focus:bg-white text-slate-700 text-sm pl-11 pr-8 py-3.5 rounded-xl focus:outline-none transition-all appearance-none cursor-pointer font-semibold",
              children: [
                /* @__PURE__ */ jsx("option", { value: "", disabled: true, children: "Course" }),
                coursesList.map((c, i) => /* @__PURE__ */ jsx("option", { value: c, children: c }, i))
              ]
            }
          ),
          /* @__PURE__ */ jsx("span", { className: "absolute right-7 text-red-500 font-bold pointer-events-none", children: "*" }),
          /* @__PURE__ */ jsx("span", { className: "absolute right-3.5 text-slate-400 pointer-events-none", children: /* @__PURE__ */ jsx("svg", { className: "w-4 h-4", fill: "none", stroke: "currentColor", strokeWidth: 2, viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M19 9l-7 7-7-7" }) }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-4 gap-4 items-center", children: [
        /* @__PURE__ */ jsxs("div", { className: "relative flex items-center", children: [
          /* @__PURE__ */ jsx("span", { className: "absolute left-4 text-slate-400 pointer-events-none", children: /* @__PURE__ */ jsxs("svg", { className: "w-5 h-5", fill: "none", stroke: "currentColor", strokeWidth: 2, viewBox: "0 0 24 24", children: [
            /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" }),
            /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M15 11a3 3 0 11-6 0 3 3 0 016 0z" })
          ] }) }),
          /* @__PURE__ */ jsxs(
            "select",
            {
              required: true,
              value: selectedBranch,
              onChange: (e) => setSelectedBranch(e.target.value),
              className: "w-full bg-slate-50 border border-slate-100 focus:border-slate-300 focus:bg-white text-slate-700 text-sm pl-11 pr-8 py-3.5 rounded-xl focus:outline-none transition-all appearance-none cursor-pointer font-semibold",
              children: [
                /* @__PURE__ */ jsx("option", { value: "", disabled: true, children: "Branch" }),
                branchesList.map((b, i) => /* @__PURE__ */ jsx("option", { value: b, children: b }, i))
              ]
            }
          ),
          /* @__PURE__ */ jsx("span", { className: "absolute right-7 text-red-500 font-bold pointer-events-none", children: "*" }),
          /* @__PURE__ */ jsx("span", { className: "absolute right-3.5 text-slate-400 pointer-events-none", children: /* @__PURE__ */ jsx("svg", { className: "w-4 h-4", fill: "none", stroke: "currentColor", strokeWidth: 2, viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M19 9l-7 7-7-7" }) }) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "relative flex items-center", children: [
          /* @__PURE__ */ jsx("span", { className: "absolute left-4 text-slate-400 pointer-events-none", children: /* @__PURE__ */ jsx("svg", { className: "w-5 h-5", fill: "none", stroke: "currentColor", strokeWidth: 2, viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" }) }) }),
          /* @__PURE__ */ jsxs(
            "select",
            {
              required: true,
              value: selectedAge,
              onChange: (e) => setSelectedAge(e.target.value),
              className: "w-full bg-slate-50 border border-slate-100 focus:border-slate-300 focus:bg-white text-slate-700 text-sm pl-11 pr-8 py-3.5 rounded-xl focus:outline-none transition-all appearance-none cursor-pointer font-semibold",
              children: [
                /* @__PURE__ */ jsx("option", { value: "", disabled: true, children: "Age" }),
                /* @__PURE__ */ jsx("option", { value: "15", children: "15 Years" }),
                /* @__PURE__ */ jsx("option", { value: "16", children: "16 Years" }),
                /* @__PURE__ */ jsx("option", { value: "17", children: "17 Years" }),
                /* @__PURE__ */ jsx("option", { value: "18", children: "18 Years" }),
                /* @__PURE__ */ jsx("option", { value: "19", children: "19 Years" }),
                /* @__PURE__ */ jsx("option", { value: "20", children: "20 Years" }),
                /* @__PURE__ */ jsx("option", { value: "21", children: "21 Years" }),
                /* @__PURE__ */ jsx("option", { value: "22", children: "22 Years" }),
                /* @__PURE__ */ jsx("option", { value: "23", children: "23 Years" }),
                /* @__PURE__ */ jsx("option", { value: "24", children: "24 Years" }),
                /* @__PURE__ */ jsx("option", { value: "25", children: "25 Years" }),
                /* @__PURE__ */ jsx("option", { value: "26+", children: "26+ Years" })
              ]
            }
          ),
          /* @__PURE__ */ jsx("span", { className: "absolute right-7 text-red-500 font-bold pointer-events-none", children: "*" }),
          /* @__PURE__ */ jsx("span", { className: "absolute right-3.5 text-slate-400 pointer-events-none", children: /* @__PURE__ */ jsx("svg", { className: "w-4 h-4", fill: "none", stroke: "currentColor", strokeWidth: 2, viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M19 9l-7 7-7-7" }) }) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "relative flex items-center", children: [
          /* @__PURE__ */ jsx("span", { className: "absolute left-4 text-slate-400 pointer-events-none", children: /* @__PURE__ */ jsx("svg", { className: "w-5 h-5", fill: "none", stroke: "currentColor", strokeWidth: 2, viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" }) }) }),
          /* @__PURE__ */ jsxs(
            "select",
            {
              required: true,
              value: selectedGender,
              onChange: (e) => setSelectedGender(e.target.value),
              className: "w-full bg-slate-50 border border-slate-100 focus:border-slate-300 focus:bg-white text-slate-700 text-sm pl-11 pr-8 py-3.5 rounded-xl focus:outline-none transition-all appearance-none cursor-pointer font-semibold",
              children: [
                /* @__PURE__ */ jsx("option", { value: "", disabled: true, children: "Gender" }),
                /* @__PURE__ */ jsx("option", { value: "Male", children: "Male" }),
                /* @__PURE__ */ jsx("option", { value: "Female", children: "Female" }),
                /* @__PURE__ */ jsx("option", { value: "Other", children: "Other" })
              ]
            }
          ),
          /* @__PURE__ */ jsx("span", { className: "absolute right-7 text-red-500 font-bold pointer-events-none", children: "*" }),
          /* @__PURE__ */ jsx("span", { className: "absolute right-3.5 text-slate-400 pointer-events-none", children: /* @__PURE__ */ jsx("svg", { className: "w-4 h-4", fill: "none", stroke: "currentColor", strokeWidth: 2, viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M19 9l-7 7-7-7" }) }) })
        ] }),
        /* @__PURE__ */ jsxs(
          "button",
          {
            type: "submit",
            className: "w-full bg-red-600 hover:bg-red-700 text-white font-sans font-bold text-sm py-3.5 px-6 rounded-xl transition-all duration-200 active:scale-95 shadow-sm hover:shadow-md flex items-center justify-center gap-2 focus:outline-none cursor-pointer whitespace-nowrap",
            children: [
              "APPLY NOW",
              /* @__PURE__ */ jsx("svg", { className: "w-4 h-4", fill: "none", stroke: "currentColor", strokeWidth: 2.5, viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" }) })
            ]
          }
        )
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "max-w-7xl mx-auto w-full px-6 pt-10 pb-16 relative z-20", children: /* @__PURE__ */ jsx("div", { className: "bg-[#1E417A] rounded-[2rem] shadow-[0_15px_30px_rgba(30,65,122,0.18)] py-8 px-6 max-w-5xl mx-auto text-white", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-y-6 md:gap-y-0 items-center justify-center text-center", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center border-r border-b border-white/10 pb-6 md:pb-0 md:border-b-0 md:border-r md:border-white/15", children: [
        /* @__PURE__ */ jsxs("span", { className: "text-3xl sm:text-4xl font-extrabold text-[#DDAB30] tracking-tight flex items-center", children: [
          "4.6",
          /* @__PURE__ */ jsx("span", { className: "text-2xl sm:text-3xl ml-0.5 font-normal", children: "\u2605" })
        ] }),
        /* @__PURE__ */ jsx("span", { className: "text-[10px] sm:text-xs font-bold tracking-widest text-slate-200 mt-2 uppercase", children: "Google Rating" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center border-b border-slate-100/10 pb-6 md:pb-0 md:border-b-0 md:border-r md:border-white/15", children: [
        /* @__PURE__ */ jsx("span", { className: "text-3xl sm:text-4xl font-extrabold text-[#DDAB30] tracking-tight", children: "10,000+" }),
        /* @__PURE__ */ jsx("span", { className: "text-[10px] sm:text-xs font-bold tracking-widest text-slate-200 mt-2 uppercase", children: "Students Trained" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center border-r border-white/10 pt-6 md:pt-0 md:border-r md:border-white/15", children: [
        /* @__PURE__ */ jsx("span", { className: "text-3xl sm:text-4xl font-extrabold text-[#DDAB30] tracking-tight", children: "200+" }),
        /* @__PURE__ */ jsx("span", { className: "text-[10px] sm:text-xs font-bold tracking-widest text-slate-200 mt-2 uppercase", children: "Hiring Partners" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center pt-6 md:pt-0", children: [
        /* @__PURE__ */ jsx("span", { className: "text-3xl sm:text-4xl font-extrabold text-[#DDAB30] tracking-tight", children: "Certified" }),
        /* @__PURE__ */ jsx("span", { className: "text-[10px] sm:text-xs font-bold tracking-widest text-slate-200 mt-2 uppercase", children: "Courses" })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxs("section", { className: "max-w-7xl mx-auto w-full px-6 pt-8 pb-16 relative z-20", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center max-w-2xl mx-auto mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-3xl sm:text-4xl font-extrabold text-[#0f2a4a] leading-tight", children: "Career-Ready Popular Courses" }),
        /* @__PURE__ */ jsx("p", { className: "text-slate-500 text-sm sm:text-base mt-3 leading-relaxed font-sans", children: "Choose from our wide range of industry-leading programs designed for your success" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-[2rem] border border-neutral-100 shadow-[0_12px_30px_rgba(0,0,0,0.03)] overflow-hidden flex flex-col justify-between group hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] transition-all duration-300", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("div", { className: "w-full h-52 overflow-hidden relative", children: /* @__PURE__ */ jsx(
              "img",
              {
                src: courseCabin,
                alt: "Air Hostess / Cabin Crew Training",
                className: "w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
              }
            ) }),
            /* @__PURE__ */ jsxs("div", { className: "p-6 sm:p-7 flex flex-col space-y-4", children: [
              /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-[#0f2a4a] leading-snug font-sans", children: "Cabin Crew (Air Hostess) & Hospitality Management" }),
              /* @__PURE__ */ jsx("p", { className: "text-slate-500 text-xs sm:text-sm leading-relaxed font-sans", children: "6-month cabin crew training across Ghatkopar, Andheri & Thane. Professional grooming, aviation training, interview preparation & dedicated placement support with easy EMI and scholarships up to \u20B950,000." })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "px-6 sm:px-7 pb-7 flex flex-col space-y-5", children: [
            /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-2 text-white", children: [
              /* @__PURE__ */ jsxs("div", { className: "bg-[#1e417a] py-2 px-3 rounded-lg flex items-center gap-1.5 text-[10px] sm:text-xs font-semibold font-sans", children: [
                /* @__PURE__ */ jsxs("svg", { className: "w-3.5 h-3.5 min-w-[14px] shrink-0", fill: "none", stroke: "currentColor", strokeWidth: "2.5", viewBox: "0 0 24 24", children: [
                  /* @__PURE__ */ jsx("rect", { x: "3", y: "4", width: "18", height: "18", rx: "2", ry: "2" }),
                  /* @__PURE__ */ jsx("line", { x1: "16", y1: "2", x2: "16", y2: "6" }),
                  /* @__PURE__ */ jsx("line", { x1: "8", y1: "2", x2: "8", y2: "6" }),
                  /* @__PURE__ */ jsx("line", { x1: "3", y1: "10", x2: "21", y2: "10" })
                ] }),
                "6 Months"
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "bg-[#1e417a] py-2 px-3 rounded-lg flex items-center gap-1.5 text-[10px] sm:text-xs font-semibold font-sans", children: [
                /* @__PURE__ */ jsx("svg", { className: "w-3.5 h-3.5 min-w-[14px] shrink-0", fill: "none", stroke: "currentColor", strokeWidth: "2.5", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" }) }),
                "5 Days a Week"
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "bg-[#1e417a] py-2 px-3 rounded-lg flex items-center gap-1.5 text-[10px] sm:text-xs font-semibold font-sans", children: [
                /* @__PURE__ */ jsxs("svg", { className: "w-3.5 h-3.5 min-w-[14px] shrink-0", fill: "none", stroke: "currentColor", strokeWidth: "2.5", viewBox: "0 0 24 24", children: [
                  /* @__PURE__ */ jsx("circle", { cx: "12", cy: "12", r: "10" }),
                  /* @__PURE__ */ jsx("polyline", { points: "12 6 12 12 16 14" })
                ] }),
                "2 Hours"
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "bg-[#1e417a] py-2 px-3 rounded-lg flex items-center gap-1.5 text-[10px] sm:text-xs font-semibold font-sans", children: [
                /* @__PURE__ */ jsxs("svg", { className: "w-3.5 h-3.5 min-w-[14px] shrink-0", fill: "none", stroke: "currentColor", strokeWidth: "2.5", viewBox: "0 0 24 24", children: [
                  /* @__PURE__ */ jsx("circle", { cx: "12", cy: "12", r: "5" }),
                  /* @__PURE__ */ jsx("line", { x1: "12", y1: "1", x2: "12", y2: "3" }),
                  /* @__PURE__ */ jsx("line", { x1: "12", y1: "21", x2: "12", y2: "23" }),
                  /* @__PURE__ */ jsx("line", { x1: "4.22", y1: "4.22", x2: "5.64", y2: "5.64" }),
                  /* @__PURE__ */ jsx("line", { x1: "18.36", y1: "18.36", x2: "19.78", y2: "19.78" }),
                  /* @__PURE__ */ jsx("line", { x1: "1", y1: "12", x2: "3", y2: "12" }),
                  /* @__PURE__ */ jsx("line", { x1: "21", y1: "12", x2: "23", y2: "12" }),
                  /* @__PURE__ */ jsx("line", { x1: "4.22", y1: "19.78", x2: "5.64", y2: "18.36" }),
                  /* @__PURE__ */ jsx("line", { x1: "18.36", y1: "5.64", x2: "19.78", y2: "4.22" })
                ] }),
                /* @__PURE__ */ jsx("span", { children: "Morn / Aft / Eve" })
              ] })
            ] }),
            /* @__PURE__ */ jsxs(
              "button",
              {
                onClick: () => navigate({ to: "/courses/air-hostess-cabin-crew-hospitality-management" }),
                className: "text-[#1e417a] hover:text-[#0b2f61] font-bold text-xs sm:text-sm flex items-center gap-1 w-fit group/btn focus:outline-none transition-colors",
                children: [
                  "Explore Now",
                  /* @__PURE__ */ jsx("svg", { className: "w-4 h-4 transition-transform group-hover/btn:translate-x-1", fill: "none", stroke: "currentColor", strokeWidth: 2.5, viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" }) })
                ]
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-[2rem] border border-neutral-100 shadow-[0_12px_30px_rgba(0,0,0,0.03)] overflow-hidden flex flex-col justify-between group hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] transition-all duration-300", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("div", { className: "w-full h-52 overflow-hidden relative", children: /* @__PURE__ */ jsx(
              "img",
              {
                src: courseGround,
                alt: "Airport Ground Staff Training",
                className: "w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
              }
            ) }),
            /* @__PURE__ */ jsxs("div", { className: "p-6 sm:p-7 flex flex-col space-y-4", children: [
              /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-[#0f2a4a] leading-snug font-sans", children: "Airport Ground Staff & Hospitality Management" }),
              /* @__PURE__ */ jsx("p", { className: "text-slate-500 text-xs sm:text-sm leading-relaxed font-sans", children: "6-month airport ground staff training across Ghatkopar, Andheri & Thane. Ground operations, passenger handling, interview preparation & dedicated placement support with easy EMI and scholarships up to \u20B950,000." })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "px-6 sm:px-7 pb-7 flex flex-col space-y-5", children: [
            /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-2 text-white", children: [
              /* @__PURE__ */ jsxs("div", { className: "bg-[#1e417a] py-2 px-3 rounded-lg flex items-center gap-1.5 text-[10px] sm:text-xs font-semibold font-sans", children: [
                /* @__PURE__ */ jsxs("svg", { className: "w-3.5 h-3.5 min-w-[14px] shrink-0", fill: "none", stroke: "currentColor", strokeWidth: "2.5", viewBox: "0 0 24 24", children: [
                  /* @__PURE__ */ jsx("rect", { x: "3", y: "4", width: "18", height: "18", rx: "2", ry: "2" }),
                  /* @__PURE__ */ jsx("line", { x1: "16", y1: "2", x2: "16", y2: "6" }),
                  /* @__PURE__ */ jsx("line", { x1: "8", y1: "2", x2: "8", y2: "6" }),
                  /* @__PURE__ */ jsx("line", { x1: "3", y1: "10", x2: "21", y2: "10" })
                ] }),
                "6 Months"
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "bg-[#1e417a] py-2 px-3 rounded-lg flex items-center gap-1.5 text-[10px] sm:text-xs font-semibold font-sans", children: [
                /* @__PURE__ */ jsx("svg", { className: "w-3.5 h-3.5 min-w-[14px] shrink-0", fill: "none", stroke: "currentColor", strokeWidth: "2.5", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" }) }),
                "5 Days a Week"
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "bg-[#1e417a] py-2 px-3 rounded-lg flex items-center gap-1.5 text-[10px] sm:text-xs font-semibold font-sans", children: [
                /* @__PURE__ */ jsxs("svg", { className: "w-3.5 h-3.5 min-w-[14px] shrink-0", fill: "none", stroke: "currentColor", strokeWidth: "2.5", viewBox: "0 0 24 24", children: [
                  /* @__PURE__ */ jsx("circle", { cx: "12", cy: "12", r: "10" }),
                  /* @__PURE__ */ jsx("polyline", { points: "12 6 12 12 16 14" })
                ] }),
                "2 Hours"
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "bg-[#1e417a] py-2 px-3 rounded-lg flex items-center gap-1.5 text-[10px] sm:text-xs font-semibold font-sans", children: [
                /* @__PURE__ */ jsxs("svg", { className: "w-3.5 h-3.5 min-w-[14px] shrink-0", fill: "none", stroke: "currentColor", strokeWidth: "2.5", viewBox: "0 0 24 24", children: [
                  /* @__PURE__ */ jsx("circle", { cx: "12", cy: "12", r: "5" }),
                  /* @__PURE__ */ jsx("line", { x1: "12", y1: "1", x2: "12", y2: "3" }),
                  /* @__PURE__ */ jsx("line", { x1: "12", y1: "21", x2: "12", y2: "23" }),
                  /* @__PURE__ */ jsx("line", { x1: "4.22", y1: "4.22", x2: "5.64", y2: "5.64" }),
                  /* @__PURE__ */ jsx("line", { x1: "18.36", y1: "18.36", x2: "19.78", y2: "19.78" }),
                  /* @__PURE__ */ jsx("line", { x1: "1", y1: "12", x2: "3", y2: "12" }),
                  /* @__PURE__ */ jsx("line", { x1: "21", y1: "12", x2: "23", y2: "12" }),
                  /* @__PURE__ */ jsx("line", { x1: "4.22", y1: "19.78", x2: "5.64", y2: "18.36" }),
                  /* @__PURE__ */ jsx("line", { x1: "18.36", y1: "5.64", x2: "19.78", y2: "4.22" })
                ] }),
                /* @__PURE__ */ jsx("span", { children: "Morn / Aft / Eve" })
              ] })
            ] }),
            /* @__PURE__ */ jsxs(
              "button",
              {
                onClick: () => navigate({ to: "/courses/airport-ground-staff-hospitality-management" }),
                className: "text-[#1e417a] hover:text-[#0b2f61] font-bold text-xs sm:text-sm flex items-center gap-1 w-fit group/btn focus:outline-none transition-colors",
                children: [
                  "Explore Now",
                  /* @__PURE__ */ jsx("svg", { className: "w-4 h-4 transition-transform group-hover/btn:translate-x-1", fill: "none", stroke: "currentColor", strokeWidth: 2.5, viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" }) })
                ]
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-[2rem] border border-neutral-100 shadow-[0_12px_30px_rgba(0,0,0,0.03)] overflow-hidden flex flex-col justify-between group hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] transition-all duration-300", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("div", { className: "w-full h-52 overflow-hidden relative", children: /* @__PURE__ */ jsx(
              "img",
              {
                src: courseAi,
                alt: "AI & Data Science Course",
                className: "w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
              }
            ) }),
            /* @__PURE__ */ jsxs("div", { className: "p-6 sm:p-7 flex flex-col space-y-4", children: [
              /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-[#0f2a4a] leading-snug font-sans", children: "AI & Data Science with Generative AI & Machine Learning" }),
              /* @__PURE__ */ jsx("p", { className: "text-slate-500 text-xs sm:text-sm leading-relaxed font-sans", children: "12-month AI & Data Science training across Ghatkopar, Andheri & Thane. Coding, Generative AI, machine learning, real projects & dedicated placement support with easy EMI and scholarships up to \u20B950,000." })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "px-6 sm:px-7 pb-7 flex flex-col space-y-5", children: [
            /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-2 text-white", children: [
              /* @__PURE__ */ jsxs("div", { className: "bg-[#1e417a] py-2 px-3 rounded-lg flex items-center gap-1.5 text-[10px] sm:text-xs font-semibold font-sans", children: [
                /* @__PURE__ */ jsxs("svg", { className: "w-3.5 h-3.5 min-w-[14px] shrink-0", fill: "none", stroke: "currentColor", strokeWidth: "2.5", viewBox: "0 0 24 24", children: [
                  /* @__PURE__ */ jsx("rect", { x: "3", y: "4", width: "18", height: "18", rx: "2", ry: "2" }),
                  /* @__PURE__ */ jsx("line", { x1: "16", y1: "2", x2: "16", y2: "6" }),
                  /* @__PURE__ */ jsx("line", { x1: "8", y1: "2", x2: "8", y2: "6" }),
                  /* @__PURE__ */ jsx("line", { x1: "3", y1: "10", x2: "21", y2: "10" })
                ] }),
                "12 Months"
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "bg-[#1e417a] py-2 px-3 rounded-lg flex items-center gap-1.5 text-[10px] sm:text-xs font-semibold font-sans", children: [
                /* @__PURE__ */ jsx("svg", { className: "w-3.5 h-3.5 min-w-[14px] shrink-0", fill: "none", stroke: "currentColor", strokeWidth: "2.5", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" }) }),
                /* @__PURE__ */ jsx("span", { children: "Flexible Schedule" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "bg-[#1e417a] py-2 px-3 rounded-lg flex items-center gap-1.5 text-[10px] sm:text-xs font-semibold font-sans", children: [
                /* @__PURE__ */ jsxs("svg", { className: "w-3.5 h-3.5 min-w-[14px] shrink-0", fill: "none", stroke: "currentColor", strokeWidth: "2.5", viewBox: "0 0 24 24", children: [
                  /* @__PURE__ */ jsx("circle", { cx: "12", cy: "12", r: "10" }),
                  /* @__PURE__ */ jsx("polyline", { points: "12 6 12 12 16 14" })
                ] }),
                "2 Hours"
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "bg-[#1e417a] py-2 px-3 rounded-lg flex items-center gap-1.5 text-[10px] sm:text-xs font-semibold font-sans", children: [
                /* @__PURE__ */ jsxs("svg", { className: "w-3.5 h-3.5 min-w-[14px] shrink-0", fill: "none", stroke: "currentColor", strokeWidth: "2.5", viewBox: "0 0 24 24", children: [
                  /* @__PURE__ */ jsx("circle", { cx: "12", cy: "12", r: "5" }),
                  /* @__PURE__ */ jsx("line", { x1: "12", y1: "1", x2: "12", y2: "3" }),
                  /* @__PURE__ */ jsx("line", { x1: "12", y1: "21", x2: "12", y2: "23" }),
                  /* @__PURE__ */ jsx("line", { x1: "4.22", y1: "4.22", x2: "5.64", y2: "5.64" }),
                  /* @__PURE__ */ jsx("line", { x1: "18.36", y1: "18.36", x2: "19.78", y2: "19.78" }),
                  /* @__PURE__ */ jsx("line", { x1: "1", y1: "12", x2: "3", y2: "12" }),
                  /* @__PURE__ */ jsx("line", { x1: "21", y1: "12", x2: "23", y2: "12" }),
                  /* @__PURE__ */ jsx("line", { x1: "4.22", y1: "19.78", x2: "5.64", y2: "18.36" }),
                  /* @__PURE__ */ jsx("line", { x1: "18.36", y1: "5.64", x2: "19.78", y2: "4.22" })
                ] }),
                /* @__PURE__ */ jsx("span", { children: "Morn / Aft / Eve" })
              ] })
            ] }),
            /* @__PURE__ */ jsxs(
              "button",
              {
                onClick: () => navigate({ to: "/courses/ai-data-science-with-generative-ai-machine-learning" }),
                className: "text-[#1e417a] hover:text-[#0b2f61] font-bold text-xs sm:text-sm flex items-center gap-1 w-fit group/btn focus:outline-none transition-colors",
                children: [
                  "Explore Now",
                  /* @__PURE__ */ jsx("svg", { className: "w-4 h-4 transition-transform group-hover/btn:translate-x-1", fill: "none", stroke: "currentColor", strokeWidth: 2.5, viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" }) })
                ]
              }
            )
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "max-w-7xl mx-auto w-full px-6 pt-10 pb-16 relative z-20", children: [
      /* @__PURE__ */ jsx("div", { className: "text-center max-w-2xl mx-auto mb-16", children: /* @__PURE__ */ jsx("h2", { className: "text-3xl sm:text-4xl font-extrabold text-[#0f2a4a] leading-tight", children: "What Makes Amigo Different?" }) }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-6xl mx-auto", children: [
        /* @__PURE__ */ jsxs("div", { className: "lg:col-span-6 flex flex-col space-y-8", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-4 text-left", children: [
            /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-2xl bg-blue-50/70 border border-blue-100/30 flex items-center justify-center text-indigo-900 shrink-0", children: /* @__PURE__ */ jsxs("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", className: "w-5 h-5 text-[#1e417a]", children: [
              /* @__PURE__ */ jsx("circle", { cx: "12", cy: "8", r: "5" }),
              /* @__PURE__ */ jsx("path", { d: "M8.5 12.5L7 22l5-3 5 3-1.5-9.5" })
            ] }) }),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-col space-y-1", children: [
              /* @__PURE__ */ jsx("h3", { className: "text-base sm:text-lg font-bold text-[#0f2a4a] flex items-center gap-1.5 font-sans", children: "Certified course" }),
              /* @__PURE__ */ jsx("p", { className: "text-slate-500 text-xs sm:text-sm leading-relaxed font-sans font-semibold", children: "Certified course \u2014 a recognized qualification trusted by employers across India." })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-4 text-left", children: [
            /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-2xl bg-blue-50/70 border border-blue-100/30 flex items-center justify-center text-indigo-900 shrink-0", children: /* @__PURE__ */ jsxs("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", className: "w-5 h-5 text-[#1e417a]", children: [
              /* @__PURE__ */ jsx("rect", { x: "3", y: "7", width: "18", height: "12", rx: "2" }),
              /* @__PURE__ */ jsx("path", { d: "M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" }),
              /* @__PURE__ */ jsx("path", { d: "M3 12h18" })
            ] }) }),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-col space-y-1", children: [
              /* @__PURE__ */ jsx("h3", { className: "text-base sm:text-lg font-bold text-[#0f2a4a] flex items-center gap-1.5 font-sans", children: "Strong Placement Support" }),
              /* @__PURE__ */ jsx("p", { className: "text-slate-500 text-xs sm:text-sm leading-relaxed font-sans font-semibold", children: "Active hiring connections across aviation and tech \u2014 including IndiGo, Air India, Emirates, Mumbai Airport and IT & AI companies. We push your profile for better visibility and stronger placement opportunities." })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-4 text-left", children: [
            /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-2xl bg-blue-50/70 border border-blue-100/30 flex items-center justify-center text-indigo-900 shrink-0", children: /* @__PURE__ */ jsxs("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", className: "w-5 h-5 text-[#1e417a]", children: [
              /* @__PURE__ */ jsx("rect", { x: "2", y: "6", width: "20", height: "14", rx: "2.5" }),
              /* @__PURE__ */ jsx("path", { d: "M2 11h20" })
            ] }) }),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-col space-y-1", children: [
              /* @__PURE__ */ jsx("h3", { className: "text-base sm:text-lg font-bold text-[#0f2a4a] flex items-center gap-1.5 font-sans", children: "Easy EMI Options" }),
              /* @__PURE__ */ jsx("p", { className: "text-slate-500 text-xs sm:text-sm leading-relaxed font-sans font-semibold", children: "Scholarship up to \u20B950,000 plus flexible zero-interest EMI on all courses. Quality education without financial pressure." })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-4 text-left", children: [
            /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-2xl bg-blue-50/70 border border-blue-100/30 flex items-center justify-center text-indigo-900 shrink-0", children: /* @__PURE__ */ jsx("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", className: "w-5 h-5 text-[#1e417a]", children: /* @__PURE__ */ jsx("path", { d: "M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M18.4 5.6l-2.8 2.8M8.4 15.6l-2.8 2.8" }) }) }),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-col space-y-1", children: [
              /* @__PURE__ */ jsx("h3", { className: "text-base sm:text-lg font-bold text-[#0f2a4a] flex items-center gap-1.5 font-sans", children: "Lifetime Career Support" }),
              /* @__PURE__ */ jsx("p", { className: "text-slate-500 text-xs sm:text-sm leading-relaxed font-sans font-semibold", children: "Support doesn't stop at graduation. Ongoing career counselling and job connections at every stage." })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-4 text-left", children: [
            /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-2xl bg-blue-50/70 border border-blue-100/30 flex items-center justify-center text-indigo-900 shrink-0", children: /* @__PURE__ */ jsx("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", className: "w-5 h-5 text-[#1e417a]", children: /* @__PURE__ */ jsx("path", { d: "M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" }) }) }),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-col space-y-1", children: [
              /* @__PURE__ */ jsx("h3", { className: "text-base sm:text-lg font-bold text-[#0f2a4a] flex items-center gap-1.5 font-sans", children: "Free Career Counselling" }),
              /* @__PURE__ */ jsx("p", { className: "text-slate-500 text-xs sm:text-sm leading-relaxed font-sans font-semibold", children: "Talk to an academy mentor today for free guidance on the right course and career path." })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "lg:col-span-6 relative", children: /* @__PURE__ */ jsxs("div", { className: "relative rounded-[2rem] overflow-visible shadow-[0_20px_50px_rgba(0,0,0,0.08)] bg-white max-w-lg mx-auto lg:max-w-none", children: [
          /* @__PURE__ */ jsx("div", { className: "rounded-[2rem] overflow-hidden w-full h-[320px] sm:h-[400px]", children: /* @__PURE__ */ jsx(
            "img",
            {
              src: differentClassroom,
              alt: "Amigo Academy Different Classroom",
              className: "w-full h-full object-cover"
            }
          ) }),
          /* @__PURE__ */ jsx("div", { className: "absolute -bottom-6 left-1/2 -translate-x-1/2 md:left-10 md:translate-x-0 z-20 whitespace-nowrap", children: /* @__PURE__ */ jsxs(
            "button",
            {
              onClick: () => window.dispatchEvent(new CustomEvent("openEligibilityModal")),
              className: "bg-[#e31e24] hover:bg-[#c2141a] text-white font-sans font-bold text-xs sm:text-sm px-6 sm:px-8 py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all active:scale-95 flex items-center gap-2 focus:outline-none cursor-pointer",
              children: [
                "Check My Eligibility Now",
                /* @__PURE__ */ jsx("svg", { className: "w-4 h-4", fill: "none", stroke: "currentColor", strokeWidth: 2.5, viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" }) })
              ]
            }
          ) })
        ] }) })
      ] }),
      isVideoModalOpen && createPortal(
        /* @__PURE__ */ jsx(
          "div",
          {
            onClick: () => setIsVideoModalOpen(false),
            className: "fixed inset-0 z-[99999] flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/80 backdrop-blur-lg w-screen h-screen",
            children: /* @__PURE__ */ jsxs(
              "div",
              {
                onClick: (e) => e.stopPropagation(),
                className: "relative w-full max-w-5xl bg-black rounded-3xl overflow-visible shadow-2xl border border-white/10",
                children: [
                  /* @__PURE__ */ jsx(
                    "button",
                    {
                      onClick: () => setIsVideoModalOpen(false),
                      className: "absolute -top-4 -right-4 sm:-top-5 sm:-right-5 z-50 w-10 h-10 sm:w-12 sm:h-12 bg-white text-neutral-900 hover:bg-[#e31e24] hover:text-white rounded-full flex items-center justify-center text-lg sm:text-xl font-bold shadow-2xl transition-all duration-200 focus:outline-none cursor-pointer border-2 border-white/20 active:scale-95",
                      "aria-label": "Close modal",
                      children: "\u2715"
                    }
                  ),
                  /* @__PURE__ */ jsx("div", { className: "relative w-full pt-[56.25%] rounded-3xl overflow-hidden bg-black", children: /* @__PURE__ */ jsx(
                    "iframe",
                    {
                      className: "absolute inset-0 w-full h-full border-0 rounded-3xl",
                      src: "https://www.youtube.com/embed/j04rbjw2B9M?si=0gO4vXb6kcrM3xO6&autoplay=1",
                      title: "YouTube video player",
                      allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
                      referrerPolicy: "strict-origin-when-cross-origin",
                      allowFullScreen: true
                    }
                  ) })
                ]
              }
            )
          }
        ),
        document.body
      )
    ] }),
    /* @__PURE__ */ jsx("section", { className: "max-w-7xl mx-auto w-full px-6 pt-10 pb-16 relative z-20", children: /* @__PURE__ */ jsxs("div", { className: "bg-[#1E417A] rounded-[2rem] shadow-[0_20px_50px_rgba(30,65,122,0.22)] py-12 px-6 sm:px-10 md:px-12 max-w-5xl mx-auto text-white text-center", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-4xl sm:text-5xl font-extrabold tracking-wider font-sans uppercase text-white", children: "SCHOLARSHIP" }),
      /* @__PURE__ */ jsx("p", { className: "text-slate-100 text-sm sm:text-lg mt-3 font-semibold font-sans tracking-wide", children: "Get Up to \u20B950,000 Off Your Course Fee" }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col items-center justify-center text-center space-y-4", children: [
          /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-full bg-white/10 flex items-center justify-center", children: /* @__PURE__ */ jsx("svg", { className: "w-5 h-5 text-[#DDAB30]", fill: "none", stroke: "currentColor", strokeWidth: "2.5", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("polyline", { points: "20 6 9 17 4 12" }) }) }),
          /* @__PURE__ */ jsx("span", { className: "text-xs sm:text-sm font-bold leading-snug font-sans max-w-[150px]", children: "Scholarship up to \u20B950,000" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col items-center justify-center text-center space-y-4", children: [
          /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-full bg-white/10 flex items-center justify-center", children: /* @__PURE__ */ jsxs("svg", { className: "w-5 h-5 text-blue-400", fill: "none", stroke: "currentColor", strokeWidth: "2.5", viewBox: "0 0 24 24", children: [
            /* @__PURE__ */ jsx("rect", { x: "2", y: "6", width: "20", height: "14", rx: "2", ry: "2" }),
            /* @__PURE__ */ jsx("line", { x1: "2", y1: "11", x2: "22", y2: "11" })
          ] }) }),
          /* @__PURE__ */ jsx("span", { className: "text-xs sm:text-sm font-bold leading-snug font-sans max-w-[150px]", children: "Zero-interest EMI" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col items-center justify-center text-center space-y-4", children: [
          /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-full bg-white/10 flex items-center justify-center", children: /* @__PURE__ */ jsxs("svg", { className: "w-5 h-5 text-emerald-400", fill: "none", stroke: "currentColor", strokeWidth: "2.5", viewBox: "0 0 24 24", children: [
            /* @__PURE__ */ jsx("circle", { cx: "12", cy: "12", r: "10" }),
            /* @__PURE__ */ jsx("circle", { cx: "12", cy: "12", r: "6" }),
            /* @__PURE__ */ jsx("circle", { cx: "12", cy: "12", r: "2" })
          ] }) }),
          /* @__PURE__ */ jsx("span", { className: "text-xs sm:text-sm font-bold leading-snug font-sans max-w-[150px]", children: "Available on all courses" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col items-center justify-center text-center space-y-4", children: [
          /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-full bg-white/10 flex items-center justify-center", children: /* @__PURE__ */ jsxs("svg", { className: "w-5 h-5 text-purple-400", fill: "none", stroke: "currentColor", strokeWidth: "2.5", viewBox: "0 0 24 24", children: [
            /* @__PURE__ */ jsx("circle", { cx: "12", cy: "12", r: "10" }),
            /* @__PURE__ */ jsx("line", { x1: "12", y1: "16", x2: "12", y2: "12" }),
            /* @__PURE__ */ jsx("line", { x1: "12", y1: "8", x2: "12.01", y2: "8" })
          ] }) }),
          /* @__PURE__ */ jsx("span", { className: "text-xs sm:text-sm font-bold leading-snug font-sans max-w-[150px]", children: "Limited per batch" })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-10", children: /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => window.dispatchEvent(new CustomEvent("openEligibilityModal")),
          className: "bg-[#e31e24] hover:bg-[#c2141a] text-white font-sans font-bold text-sm sm:text-base px-8 sm:px-12 py-4 rounded-2xl shadow-[0_8px_25px_rgba(227,30,36,0.35)] hover:shadow-[0_12px_30px_rgba(227,30,36,0.5)] transition-all active:scale-95 uppercase focus:outline-none cursor-pointer",
          children: "CHECK MY ELIGIBILITY NOW \u2192"
        }
      ) }),
      /* @__PURE__ */ jsxs("div", { className: "mt-8 flex items-center justify-center gap-1.5 text-[10px] sm:text-xs font-bold text-slate-300 uppercase tracking-wider font-sans", children: [
        /* @__PURE__ */ jsx("span", { children: "\u2728" }),
        /* @__PURE__ */ jsx("span", { children: "Certified course" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-4", children: /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => navigate({ to: "/scholarship" }),
          className: "text-white hover:text-[#DDAB30] text-xs sm:text-sm font-bold underline transition-colors focus:outline-none",
          children: "View full scholarship details"
        }
      ) })
    ] }) }),
    /* @__PURE__ */ jsxs("section", { className: "max-w-7xl mx-auto w-full px-4 sm:px-6 pt-10 pb-16 relative z-20", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center max-w-3xl mx-auto mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#0f2a4a] leading-tight font-sans", children: "4.6 Stars on Google!" }),
        /* @__PURE__ */ jsx("div", { className: "flex justify-center gap-1.5 text-[#0f2a4a] my-3", children: [...Array(5)].map((_, i) => /* @__PURE__ */ jsx("svg", { className: "w-5 h-5 fill-current", viewBox: "0 0 20 20", children: /* @__PURE__ */ jsx("path", { d: "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" }) }, i)) }),
        /* @__PURE__ */ jsx("p", { className: "text-[#556987] font-semibold text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed", children: "Based on 4.6 across 740+ Google reviews, students consistently praise our placement support, practical training, and career guidance." }),
        /* @__PURE__ */ jsx("p", { className: "text-[#556987] font-semibold text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed mt-2", children: "Real reviews from trainees who built their careers with Amigo Academy" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 max-w-7xl mx-auto items-stretch", children: [
        {
          name: "Nadim Shaikh",
          timeAgo: "5 months ago",
          text: "I had a wonderful experience with Amigo Academy. The team is very professional, supportive, and dedicated to providing quality training and guidance. The environment is positive, and they truly focus on students' growth and confidence. I highly recommend Amigo Academy to anyone looking for the right learning platform.",
          img: gReview1
        },
        {
          name: "Kajal Gupta",
          timeAgo: "6 months ago",
          text: "Amigo academy provides reliable placement assistance along with excellent training. The support continues even after course completion.",
          img: gReview2
        },
        {
          name: "Kashif Qureshi",
          timeAgo: "6 months ago",
          text: "Had a great experience at Amigo Academy Ghatkopar! The trainers are knowledgeable and supportive, with practical sessions that build real confidence for aviation careers. Infrastructure is modern with AC classrooms, and placement assistance helped a lot. Highly recommend for hospitality training\u20145 stars!",
          img: gReview3
        },
        {
          name: "Nikita Thorat",
          timeAgo: "1 year ago",
          text: "Amigo Academy in Ghatkopar is an outstanding institution that truly sets the benchmark in aviation and hospitality training. The faculty members are exceptionally knowledgeable, supportive, and passionate about student success. Their teaching methods are practical, engaging, and designed to prepare students thoroughly for real-world.",
          img: gReview4
        },
        {
          name: "Aaliya Bhat",
          timeAgo: "2 months ago",
          text: "Amazing institute, skilled professionals and placements!! Def recommend to do a course from here. The faculty is v sweet and helpful\u{1F497}",
          img: gReview5
        },
        {
          name: "Jorison Konjengbam",
          timeAgo: "1 year ago",
          text: "I am so grateful and thankful to the trainer and management of the Academy, this training helps me to understand more about my dream career and getting ready for the future, I am truly appreciate with the class plan and the lecture. Best Academy for Aviation and Hospitality in Mumbai",
          img: gReview6
        },
        {
          name: "Kartik Salve",
          timeAgo: "1 year ago",
          text: "Amigo Academy is a good place to learn and sharpen your skills. I had a good experience and beautiful memories at Amigo Academy. The trainers were helpful and explain the concept in detail. I learned many new things and the classes were easy to understand. I'm happy, I joined Amigo and would tell others to enrol too.",
          img: gReview7
        },
        {
          name: "Dhanashri Patil",
          timeAgo: "1 year ago",
          text: "I am so glad to share the review for Mumbai's best aviation and my favourite Amigo Academy. Initially I used to get nervous easily due to lack of confidence but gradually with the help of modules taught in Amigo Academy, it helped me to improve my communication skills, grooming, personality and I started gaining confidence too! Thank you so much Amigo Academy.",
          img: gReview8
        }
      ].map((rev, idx) => /* @__PURE__ */ jsxs(
        "div",
        {
          onClick: () => window.open("https://www.google.com/search?q=Amigo+Academy", "_blank", "noopener,noreferrer"),
          className: "bg-white rounded-[24px] border border-neutral-100 shadow-[0_8px_25px_rgba(0,0,0,0.03)] hover:shadow-[0_14px_35px_rgba(0,0,0,0.08)] hover:-translate-y-1 p-6 sm:p-7 flex flex-col justify-between items-start text-left h-full transition-all duration-300 cursor-pointer group",
          children: [
            /* @__PURE__ */ jsxs("div", { className: "w-full flex flex-col space-y-3", children: [
              /* @__PURE__ */ jsx("div", { className: "flex gap-0.5 text-[#f59e0b]", children: [...Array(5)].map((_, i) => /* @__PURE__ */ jsx("svg", { className: "w-4 h-4 fill-current", viewBox: "0 0 20 20", children: /* @__PURE__ */ jsx("path", { d: "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" }) }, i)) }),
              /* @__PURE__ */ jsx("p", { className: "text-[#0f2a4a] text-xs sm:text-[13px] font-bold font-sans leading-relaxed", children: rev.text })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "w-full flex items-center gap-3 pt-6 mt-6 border-t border-slate-50", children: [
              /* @__PURE__ */ jsx(
                "img",
                {
                  src: rev.img,
                  alt: rev.name,
                  className: "w-10 h-10 rounded-full object-cover shrink-0 shadow-sm"
                }
              ),
              /* @__PURE__ */ jsxs("div", { className: "flex flex-col text-left", children: [
                /* @__PURE__ */ jsx("h4", { className: "text-xs sm:text-sm font-bold text-[#0f2a4a] leading-tight font-sans", children: rev.name }),
                /* @__PURE__ */ jsxs("p", { className: "text-slate-400 text-[10.5px] sm:text-xs font-semibold mt-0.5 font-sans", children: [
                  "Google Review \u2022 ",
                  rev.timeAgo
                ] })
              ] })
            ] })
          ]
        },
        idx
      )) }),
      /* @__PURE__ */ jsxs("div", { className: "mt-20 max-w-4xl mx-auto flex flex-col items-center justify-center text-center px-4", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-[#0f2a4a] leading-tight font-sans tracking-tight", children: "Trusted by 10,000+ Students" }),
        /* @__PURE__ */ jsx("p", { className: "text-[#556987] text-xs sm:text-sm font-semibold font-sans leading-relaxed max-w-2xl mt-3 mb-8", children: "Choosing the right academy can decide your entire career. Join thousands who trusted Amigo and got placed." }),
        /* @__PURE__ */ jsx("div", { className: "flex flex-wrap justify-center gap-3 mb-8", children: ["Verified Google Reviews", "Placement Support", "Certified Courses", "10,000+ Students Trained"].map((pill, idx) => /* @__PURE__ */ jsx(
          "span",
          {
            className: "bg-[#f0f4fa]/70 border border-[#d3e4f6] text-[#1e3e66] text-xs font-bold px-5 py-2.5 rounded-full font-sans shadow-sm",
            children: pill
          },
          idx
        )) }),
        /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: () => window.dispatchEvent(new CustomEvent("openEligibilityModal")),
            className: "bg-[#e31e24] hover:bg-[#c2141a] text-white font-sans font-bold text-xs sm:text-sm px-8 py-4 rounded-full shadow-[0_8px_25px_rgba(227,30,36,0.25)] hover:shadow-[0_12px_30px_rgba(227,30,36,0.35)] transition-all active:scale-95 flex items-center gap-2 cursor-pointer",
            children: [
              "Check Upcoming Batch & Placement Options",
              /* @__PURE__ */ jsx("svg", { className: "w-4 h-4", fill: "none", stroke: "currentColor", strokeWidth: 2.5, viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" }) })
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "hidden max-w-7xl mx-auto w-full px-6 pt-16 pb-16 relative z-20", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center max-w-2xl mx-auto mb-16", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-3xl sm:text-4xl font-extrabold text-[#0f2a4a] leading-tight font-sans", children: "Student Success Stories" }),
        /* @__PURE__ */ jsx("p", { className: "text-slate-500 text-sm sm:text-base mt-3 leading-relaxed font-sans font-semibold", children: "Hear directly from our alumni who are now flying high in their careers." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex flex-wrap justify-center gap-8 max-w-7xl mx-auto", children: [
        {
          name: "Jasmine Soni",
          role: "Cabin Crew Emirates",
          batch: "Aviation Batch 2023",
          quote: "Amigo Air Hostess Academy completely transformed my career path. The practical training and expert guidance helped me land my dream job as a Cabin Crew Member within months of graduating.",
          videoImg: Studentimg1,
          avatarImg: Studentpf1,
          badge: "SELECTED FOR INDIGO",
          overlayText: ""
        },
        {
          name: "Swati Patil",
          role: "Airport Ground Staff",
          batch: "Travel & Tourism 2022",
          quote: "The comprehensive curriculum covers every aspect of the industry. The instructors are real professionals who know what airlines are looking for. I am now happily working at International Airport.",
          videoImg: Studentimg3,
          avatarImg: Studentpf3,
          badge: "",
          overlayText: "Swati Patil - Speak Up!"
        },
        {
          name: "Hardik Chari",
          role: "Gust Service Exclusive",
          batch: "Batch 2024",
          quote: '"Gust Service Exclusive Course Mumbai \u2014 zero to high-paying job. Placement team is exceptional."',
          videoImg: Studentimg2,
          avatarImg: Studentpf2,
          badge: "JOB ASSISTANCE",
          overlayText: ""
        },
        {
          name: "Isaac Edward",
          role: "Passenger Service Excusive",
          batch: "Batch 2025",
          quote: 'ROHAN S. "6-month course + placement team = best move after 12th. Got placed at Mumbai Airport within 5 months."',
          videoImg: Student4,
          avatarImg: Studentpf4,
          badge: "",
          overlayText: "Isaac Edward"
        },
        {
          name: "Ashwini Patil",
          role: "Cabin Crew",
          batch: "Batch 2024",
          quote: "Best air hostess course Mumbai \u2014 flying international in 5 months. Grooming and mock interviews made all the difference.",
          videoImg: Student5,
          avatarImg: Studentpf5,
          badge: "",
          overlayText: "Congratulations ASHWINI PATIL - Cabin Crew Vistara"
        }
      ].map((story, idx) => /* @__PURE__ */ jsxs("div", { className: "w-full md:w-[350px] lg:w-[370px] flex flex-col bg-white rounded-3xl border border-neutral-100 shadow-[0_12px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300", children: [
        /* @__PURE__ */ jsxs("div", { className: "relative w-full h-52 bg-slate-100 flex items-center justify-center", children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              src: story.videoImg,
              alt: story.name,
              className: "absolute inset-0 w-full h-full object-cover rounded-t-3xl"
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-slate-900/20 rounded-t-3xl" }),
          story.badge && /* @__PURE__ */ jsx("div", { className: "absolute bottom-4 left-4 bg-black/60 text-white font-bold text-[9px] px-2 py-1 rounded tracking-wider uppercase", children: story.badge }),
          story.overlayText && /* @__PURE__ */ jsx("div", { className: "absolute bottom-4 left-4 max-w-[200px] text-left", children: /* @__PURE__ */ jsx("span", { className: "text-white/80 font-sans font-bold text-[10px] bg-black/40 px-2.5 py-1 rounded backdrop-blur-[2px] truncate block", children: story.overlayText }) }),
          /* @__PURE__ */ jsx("div", { className: "absolute -bottom-5 right-6 z-20 w-12 h-12 rounded-full border-4 border-white bg-white overflow-hidden shadow-md", children: /* @__PURE__ */ jsx(
            "img",
            {
              src: story.avatarImg,
              alt: story.name,
              className: "w-full h-full object-cover"
            }
          ) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "p-6 sm:p-7 pt-8 text-left flex flex-col space-y-4 flex-grow", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { className: "text-base sm:text-lg font-extrabold text-[#0f2a4a] leading-tight", children: story.name }),
            /* @__PURE__ */ jsxs("p", { className: "text-blue-600 font-bold text-[11px] sm:text-xs tracking-wide mt-1", children: [
              story.role,
              " ",
              /* @__PURE__ */ jsx("span", { className: "text-slate-300 font-normal mx-1", children: "\u2022" }),
              " ",
              story.batch
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "border-l-2 border-[#dbeafe] pl-3 flex-grow", children: /* @__PURE__ */ jsxs("p", { className: "text-slate-500 font-semibold font-sans italic text-xs sm:text-sm leading-relaxed", children: [
            '"',
            story.quote,
            '"'
          ] }) })
        ] })
      ] }, idx)) })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "max-w-4xl mx-auto w-full px-6 pt-16 pb-20 relative z-20", children: [
      /* @__PURE__ */ jsx("div", { className: "flex justify-center mb-6", children: /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-1.5 bg-[#eff6ff] border border-[#dbeafe] text-[#2563eb] text-[10px] sm:text-xs font-extrabold tracking-wider uppercase px-4 py-1.5 rounded-full", children: [
        /* @__PURE__ */ jsx("svg", { className: "w-3.5 h-3.5", fill: "none", stroke: "currentColor", strokeWidth: 2.5, viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M11.48 3.499c.15-.427.76-.427.91 0l1.838 5.234 5.589.444c.456.036.638.6.291.902l-4.223 3.666 1.34 5.378c.11.442-.38.8-.755.536l-4.877-3.487-4.878 3.487c-.374.264-.866-.094-.755-.536l1.34-5.378-4.223-3.666c-.347-.302-.165-.866.291-.902l5.589-.444 1.838-5.234z" }) }),
        "Industry Insights"
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: "text-center max-w-2xl mx-auto mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-3xl sm:text-4xl font-extrabold text-[#0f2a4a] leading-tight font-sans", children: "Career Guides & Advice" }),
        /* @__PURE__ */ jsx("p", { className: "text-slate-500 text-sm sm:text-base mt-3 leading-relaxed font-sans font-semibold", children: "Expert tips and professional resources grouped by category to help you excel." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "space-y-4", children: [
        {
          id: "cabin-crew",
          title: "\u2708\uFE0F CABIN CREW (AIR HOSTESS) & HOSPITALITY MANAGEMENT",
          articles: [
            { title: "How to prepare for Cabin Crew interview in 2026", duration: "5 min read" },
            { title: "Essential grooming tips for airline recruitment", duration: "4 min read" },
            { title: "Cabin crew salary guide & career paths", duration: "6 min read" }
          ]
        },
        {
          id: "ground-staff",
          title: "\u{1F6C2} AIRPORT GROUND STAFF & HOSPITALITY MANAGEMENT",
          articles: [
            { title: "Introduction to airport operations & customer services", duration: "4 min read" },
            { title: "What to expect as a Passenger Service Executive", duration: "5 min read" },
            { title: "Aviation security & check-in agent checklist", duration: "6 min read" }
          ]
        },
        {
          id: "ai-data",
          title: "\u{1F916} AI & DATA SCIENCE",
          articles: [
            { title: "Top 10 Generative AI skills demanded by employers", duration: "5 min read" },
            { title: "Building a standout portfolio as a Data Scientist", duration: "7 min read" },
            { title: "AI & Machine Learning certification roadmap", duration: "6 min read" }
          ]
        }
      ].map((cat) => {
        const isOpen = activeGuide === cat.id;
        return /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-2xl border border-neutral-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] overflow-hidden transition-all duration-300", children: [
          /* @__PURE__ */ jsxs(
            "button",
            {
              onClick: () => setActiveGuide(isOpen ? "" : cat.id),
              className: "w-full flex items-center justify-between p-5 hover:bg-slate-50/50 transition-colors focus:outline-none",
              children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
                  /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-xl bg-[#eff6ff] flex items-center justify-center text-[#2563eb] shrink-0", children: /* @__PURE__ */ jsx("svg", { className: "w-5 h-5", fill: "none", stroke: "currentColor", strokeWidth: 2, viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" }) }) }),
                  /* @__PURE__ */ jsx("span", { className: "text-[#0f2a4a] text-sm sm:text-base font-extrabold font-sans tracking-wide", children: cat.title })
                ] }),
                /* @__PURE__ */ jsx("svg", { className: `w-5 h-5 text-slate-400 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`, fill: "none", stroke: "currentColor", strokeWidth: 2.5, viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M19 9l-7 7-7-7" }) })
              ]
            }
          ),
          isOpen && /* @__PURE__ */ jsx("div", { className: "border-t border-slate-50 bg-slate-50/30 p-5 space-y-3", children: cat.articles.map((art, aIdx) => /* @__PURE__ */ jsxs(
            "div",
            {
              onClick: () => {
                navigate({ to: "/how-to-become-a-cabin-crew-after-12th" });
                window.scrollTo({ top: 0, behavior: "smooth" });
              },
              className: "flex items-center justify-between p-3 bg-white border border-neutral-100 rounded-xl hover:border-blue-100 hover:shadow-sm transition-all cursor-pointer group",
              children: [
                /* @__PURE__ */ jsx("span", { className: "text-slate-700 font-semibold font-sans text-xs sm:text-sm group-hover:text-blue-600 transition-colors", children: art.title }),
                /* @__PURE__ */ jsx("span", { className: "text-slate-400 font-bold text-[10px] sm:text-xs", children: art.duration })
              ]
            },
            aIdx
          )) })
        ] }, cat.id);
      }) }),
      /* @__PURE__ */ jsx("div", { className: "text-center mt-10", children: /* @__PURE__ */ jsxs(
        "button",
        {
          onClick: () => navigate({ to: "/career-guides" }),
          className: "text-[#1E417A] hover:text-[#0b2f61] font-bold text-xs sm:text-sm flex items-center gap-1.5 mx-auto group transition-colors focus:outline-none",
          children: [
            "Explore All Industry Advice",
            /* @__PURE__ */ jsx("svg", { className: "w-4 h-4 transition-transform group-hover:translate-x-0.5", fill: "none", stroke: "currentColor", strokeWidth: 2.5, viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M9 5l7 7-7 7" }) })
          ]
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "max-w-7xl mx-auto w-full px-6 pt-12 pb-16 relative z-20", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center max-w-2xl mx-auto mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-3xl sm:text-4xl font-extrabold text-[#0f2a4a] leading-tight font-sans", children: "Our Students Work With" }),
        /* @__PURE__ */ jsx("p", { className: "text-slate-500 text-sm sm:text-base mt-3 leading-relaxed font-sans font-semibold", children: "Elite global brands that trust Amigo graduates." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "w-full overflow-hidden relative py-4 mb-16", children: /* @__PURE__ */ jsx("div", { className: "animate-marquee whitespace-nowrap flex items-center gap-12 sm:gap-16", children: [
        { img: brandAirIndia, name: "Air India" },
        { img: brandQatar, name: "Qatar Airways" },
        { img: brandEmirates, name: "Emirates" },
        { img: brandSpiceJet, name: "SpiceJet" },
        { img: brandAirIndia, name: "Air India" },
        { img: brandQatar, name: "Qatar Airways" },
        { img: brandEmirates, name: "Emirates" },
        { img: brandSpiceJet, name: "SpiceJet" }
      ].map((brand, idx) => /* @__PURE__ */ jsx("div", { className: "w-32 sm:w-40 h-16 inline-flex items-center justify-center shrink-0 transition-transform hover:scale-105 duration-300", children: /* @__PURE__ */ jsx(
        "img",
        {
          src: brand.img,
          alt: brand.name,
          className: "max-w-full max-h-full object-contain"
        }
      ) }, idx)) }) })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "max-w-4xl mx-auto w-full px-6 pt-16 pb-20 relative z-20 flex flex-col items-center", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center max-w-2xl mx-auto mb-16", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-3xl sm:text-4xl font-extrabold text-[#0f2a4a] leading-tight font-sans", children: "Frequently Asked Questions" }),
        /* @__PURE__ */ jsx("p", { className: "text-slate-500 text-sm sm:text-base mt-3 leading-relaxed font-sans font-semibold", children: "Got questions? We've got answers. Find out everything you need to know about our courses." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "space-y-4 max-w-3xl w-full mx-auto", children: [
        {
          q: "What salary can I expect after air hostess training?",
          a: "After Air Hostess training, freshers can typically expect upto 9 LPA, depending on the airline, role, and location. With experience, earnings can increase significantly."
        },
        {
          q: "What is the eligibility for air hostess course after 12th.",
          a: "Candidates must be between 17 to 26 years of age and have cleared their 10+2 examinations in any stream with a minimum aggregate of 50%. Good communication skills, a pleasing personality, and basic physical fitness are also required."
        },
        {
          q: "Which is the best air hostess course in Mumbai with placement support.",
          a: "Amigo Academy offers the leading Gov-certified Air Hostess and Cabin Crew program in Mumbai. We provide intensive hands-on classroom training, professional grooming, mock interviews, and 100% genuine placement support until you are selected."
        },
        {
          q: "Best AI and Data Science course in Mumbai after 10th.",
          a: "Our 12-month AI & Data Science course is ideal for 10th Pass looking to enter tech. It features practical training in Machine Learning, Generative AI, and databases, backed by placement support and flexible EMI options."
        },
        {
          q: "Do you provide placement for airport ground staff course.",
          a: "Yes, we have robust recruitment partnerships with major airlines and airport operators. Our dedicated placement cell arranges direct campus interviews with IndiGo, Air India, Emirates, SpiceJet, and Akasa Air to ensure rapid placements."
        },
        {
          q: "Are your courses certified with EMI options.",
          a: "Yes, our aviation and hospitality programs are Certified courses. We offer transparent pricing with easy zero-interest EMI options, along with scholarship opportunities up to \u20B950,000 to assist qualified students."
        }
      ].map((faq, idx) => {
        const isOpen = activeFaq === idx;
        return /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-2xl border border-neutral-100 shadow-[0_4px_20px_rgba(0,0,0,0.015)] overflow-hidden p-2 transition-all duration-300", children: [
          /* @__PURE__ */ jsxs(
            "button",
            {
              onClick: () => setActiveFaq(isOpen ? null : idx),
              className: "w-full flex items-center justify-between p-4 text-left hover:bg-slate-50/50 transition-colors focus:outline-none gap-4",
              children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
                  /* @__PURE__ */ jsx("div", { className: `w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs sm:text-sm shrink-0 transition-colors ${isOpen ? "bg-[#0f2a4a] text-white" : "bg-[#f0f4fa] text-[#0f2a4a]"}`, children: idx + 1 }),
                  /* @__PURE__ */ jsx("span", { className: "text-[#0f2a4a] text-sm sm:text-base font-extrabold font-sans", children: faq.q })
                ] }),
                /* @__PURE__ */ jsx("svg", { className: `w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`, fill: "none", stroke: "currentColor", strokeWidth: 2.5, viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M19 9l-7 7-7-7" }) })
              ]
            }
          ),
          isOpen && /* @__PURE__ */ jsx("div", { className: "p-4 pt-0", children: /* @__PURE__ */ jsx("div", { className: "bg-[#f8fafc] border-l-4 border-[#0f2a4a] rounded-r-xl p-4", children: /* @__PURE__ */ jsx("p", { className: "text-slate-500 font-semibold font-sans text-xs sm:text-sm leading-relaxed", children: faq.a }) }) })
        ] }, idx);
      }) }),
      /* @__PURE__ */ jsx("div", { className: "mt-12 text-center", children: /* @__PURE__ */ jsxs(
        "button",
        {
          onClick: () => {
            navigate({ to: "/contact" });
            window.scrollTo({ top: 0, behavior: "smooth" });
          },
          className: "inline-flex items-center gap-2 bg-[#fffbf0] border border-[#ffecd1] px-6 py-3 rounded-full shadow-[0_4px_10px_rgba(255,236,209,0.2)] hover:scale-105 transition-all cursor-pointer",
          children: [
            /* @__PURE__ */ jsx("span", { className: "text-[#e31e24] font-bold text-xs sm:text-sm", children: "\u2728" }),
            /* @__PURE__ */ jsx("span", { className: "text-[#0b2f61] font-sans font-bold text-[10px] sm:text-xs tracking-wider uppercase", children: "If you have anymore question, please contact us" })
          ]
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "hidden max-w-7xl mx-auto w-full px-6 pt-16 pb-20 relative z-20", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center max-w-2xl mx-auto mb-16", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-3xl sm:text-4xl font-extrabold text-[#0f2a4a] leading-tight font-sans", children: "Latest News & Updates" }),
        /* @__PURE__ */ jsx("p", { className: "text-slate-500 text-sm sm:text-base mt-3 leading-relaxed font-sans font-semibold", children: "Hear from our successful students, industry experts, and campus highlights shaping the future of aviation & hospitality careers." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto items-stretch", children: [
        /* @__PURE__ */ jsx("div", { className: "lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6", children: [
          {
            img: newsImage1,
            title: "Cabin Crew Job Opportunities and...",
            desc: "Explore current airline hiring trends, career paths, and how...",
            meta: "08 MINUTES \u2014 PLACEMENT CELL"
          },
          {
            img: newsImage2,
            title: "Inside Our Training Campus: A Day in...",
            desc: "A look into our modern classrooms, practical sessions,...",
            meta: "06 MINUTES \u2014 CAMPUS LIFE"
          },
          {
            img: newsImage3,
            title: "Placement Day Highlights: Landing Your",
            desc: "See how students attend interviews and secure jobs with...",
            meta: "05 MINUTES \u2014 HR TEAM"
          },
          {
            img: newsImage4,
            title: "Life After Training: Alumni Success Stories",
            desc: "A glimpse into the professional lives of Amigo graduates working",
            meta: "10 MINUTES \u2014 ALUMNI NETWORK"
          }
        ].map((post, idx) => /* @__PURE__ */ jsxs("div", { className: "flex gap-4 items-center bg-white p-4 rounded-2xl border border-neutral-100 shadow-[0_4px_20px_rgba(0,0,0,0.015)] hover:shadow-md transition-all duration-300", children: [
          /* @__PURE__ */ jsx("div", { className: "w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden shrink-0", children: /* @__PURE__ */ jsx(
            "img",
            {
              src: post.img,
              alt: post.title,
              className: "w-full h-full object-cover"
            }
          ) }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col text-left space-y-1", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-sm sm:text-base font-extrabold text-[#0f2a4a] leading-snug font-sans line-clamp-1", children: post.title }),
            /* @__PURE__ */ jsx("p", { className: "text-slate-400 text-xs leading-normal font-sans line-clamp-2", children: post.desc }),
            /* @__PURE__ */ jsx("span", { className: "text-[9px] sm:text-[10px] font-bold text-slate-400 tracking-wider uppercase pt-1", children: post.meta })
          ] })
        ] }, idx)) }),
        /* @__PURE__ */ jsx("div", { className: "lg:col-span-4 flex", children: /* @__PURE__ */ jsxs("div", { className: "relative w-full rounded-2xl overflow-hidden flex flex-col justify-end p-6 sm:p-8 min-h-[350px] lg:min-h-none bg-slate-900 group shadow-md hover:shadow-xl transition-all duration-300", children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              src: newsFeatured,
              alt: "Featured Post",
              className: "absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent" }),
          /* @__PURE__ */ jsxs("div", { className: "relative z-10 text-left space-y-3", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-lg sm:text-xl font-extrabold text-white leading-snug font-sans", children: "Why 2026 Is The Best Time To Start Your Aviation Career" }),
            /* @__PURE__ */ jsx("span", { className: "text-xs font-bold text-slate-300 uppercase tracking-wider block", children: "05 April 2026" })
          ] })
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "max-w-7xl mx-auto w-full px-6 pt-12 pb-20 relative z-20", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center max-w-2xl mx-auto mb-10", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl sm:text-3xl font-extrabold text-[#0f2a4a] leading-tight font-sans", children: "Follow our Journey - Instagram" }),
        /* @__PURE__ */ jsx("p", { className: "text-slate-500 text-xs sm:text-sm mt-2 font-semibold font-sans", children: "Stay updated with our latest campus moments, student celebrations, and live updates on Instagram." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 max-w-6xl mx-auto items-stretch mb-16", children: [
        { url: "https://www.instagram.com/p/DbVRoCkjokA/", type: "embed" },
        { url: "https://www.instagram.com/reel/DLXbyzcBSF_/", type: "embed" },
        { url: "https://www.instagram.com/p/DbVRZRRDrda/", type: "embed" },
        { url: "https://www.instagram.com/reel/DM71KtVBKbP/", type: "embed" },
        { url: "https://www.instagram.com/amigozacademy", type: "cta" }
      ].map((item, idx) => {
        if (item.type === "embed") {
          const match = item.url.match(/\/(p|reel)\/([^/?]+)/);
          const embedPath = match ? `${match[1]}/${match[2]}` : "";
          return /* @__PURE__ */ jsx("div", { className: "aspect-square rounded-2xl overflow-hidden shadow-sm border border-slate-100 bg-white relative", children: /* @__PURE__ */ jsx(
            "iframe",
            {
              src: `https://www.instagram.com/${embedPath}/embed`,
              title: `Instagram post ${idx + 1}`,
              className: "w-full h-[calc(100%+60px)] -mt-[56px] border-0",
              scrolling: "no"
            }
          ) }, idx);
        } else {
          return /* @__PURE__ */ jsxs(
            "a",
            {
              href: item.url,
              target: "_blank",
              rel: "noreferrer",
              className: "aspect-square rounded-2xl bg-[#1E417A] hover:bg-[#12284C] text-white flex flex-col items-center justify-center p-4 shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-300 cursor-pointer",
              children: [
                /* @__PURE__ */ jsx("svg", { className: "w-8 h-8 sm:w-10 sm:h-10 text-white mb-2 fill-none", stroke: "currentColor", strokeWidth: 1.5, viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M11.48 3.499c.15-.427.76-.427.91 0l1.838 5.234 5.589.444c.456.036.638.6.291.902l-4.223 3.666 1.34 5.378c.11.442-.38.8-.755.536l-4.877-3.487-4.878 3.487c-.374.264-.866-.094-.755-.536l1.34-5.378-4.223-3.666c-.347-.302-.165-.866.291-.902l5.589-.444 1.838-5.234z" }) }),
                /* @__PURE__ */ jsx("span", { className: "text-[10px] sm:text-xs font-sans font-extrabold tracking-wide uppercase", children: "@amigozacademy" })
              ]
            },
            idx
          );
        }
      }) })
    ] }),
    /* @__PURE__ */ jsxs(
      "section",
      {
        style: { backgroundColor: "#0d1b3d" },
        className: "py-16 px-6 text-center text-white relative overflow-hidden",
        children: [
          /* @__PURE__ */ jsx("div", { className: "flex justify-center mb-7", children: /* @__PURE__ */ jsxs(
            "span",
            {
              style: {
                border: "1px solid rgba(240,161,58,0.4)",
                color: "#f0a13a",
                backgroundColor: "rgba(240,161,58,0.05)"
              },
              className: "inline-flex items-center gap-2 text-xs font-bold tracking-wide px-4 py-2 rounded-full",
              children: [
                /* @__PURE__ */ jsx("svg", { className: "w-3.5 h-3.5", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ jsx("path", { d: "M11.3 1.046a1 1 0 01.7 1.169L10.98 8h4.02a1 1 0 01.76 1.65l-8 9.5a1 1 0 01-1.752-.815L6.02 12H2a1 1 0 01-.76-1.65l8-9.5a1 1 0 011.06-.304z" }) }),
                "Limited seats per batch \u2014 apply early to secure your spot"
              ]
            }
          ) }),
          /* @__PURE__ */ jsx(
            "h1",
            {
              style: { color: "#ffffff" },
              className: "font-extrabold text-3xl sm:text-5xl leading-tight max-w-4xl mx-auto mb-5",
              children: "2026 batches are filling fast \u2014 Secure Your Spot Now!"
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "flex justify-center mb-8", children: /* @__PURE__ */ jsxs(
            "span",
            {
              style: {
                border: "1px solid rgba(255,255,255,0.1)",
                color: "#f0a13a",
                backgroundColor: "rgba(255,255,255,0.05)"
              },
              className: "inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-full",
              children: [
                /* @__PURE__ */ jsx("svg", { className: "w-4 h-4", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ jsx("path", { d: "M10 1L2 5v2h16V5l-8-4zM4 9v7H2v2h16v-2h-2V9h-2v7h-2V9h-2v7H8V9H6v7H4V9H4z" }) }),
                "Certified course"
              ]
            }
          ) }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row items-center justify-center gap-4 mb-8", children: [
            /* @__PURE__ */ jsxs(
              "button",
              {
                onClick: () => window.dispatchEvent(new CustomEvent("openEligibilityModal")),
                style: { backgroundColor: "#e0392f", color: "#ffffff" },
                className: "w-full sm:w-auto inline-flex items-center justify-center gap-2 text-sm font-bold px-6 py-3.5 rounded-full transition-colors cursor-pointer",
                children: [
                  /* @__PURE__ */ jsx("svg", { className: "w-4 h-4", fill: "none", stroke: "currentColor", strokeWidth: 2.5, viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M13 10V3L4 14h7v7l9-11h-7z" }) }),
                  "Check my eligibility now"
                ]
              }
            ),
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: () => window.dispatchEvent(new CustomEvent("openEligibilityModal")),
                style: { backgroundColor: "#e0392f", color: "#ffffff" },
                className: "w-full sm:w-auto inline-flex items-center justify-center text-sm font-bold px-8 py-3.5 rounded-full transition-colors cursor-pointer",
                children: "Start my career"
              }
            ),
            /* @__PURE__ */ jsxs(
              "a",
              {
                href: "https://wa.me/919987588932",
                target: "_blank",
                rel: "noopener noreferrer",
                style: { backgroundColor: "#25d366", color: "#ffffff" },
                className: "w-full sm:w-auto inline-flex items-center justify-center gap-2 text-sm font-bold px-6 py-3.5 rounded-full transition-colors",
                children: [
                  /* @__PURE__ */ jsx("svg", { className: "w-4 h-4", fill: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { d: "M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 004.74 1.21h.005c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.87 9.87 0 0012.04 2zm5.8 14.05c-.24.68-1.4 1.3-1.93 1.38-.5.08-1.12.11-1.8-.11-.42-.13-.96-.31-1.65-.61-2.9-1.25-4.79-4.17-4.94-4.36-.14-.2-1.18-1.57-1.18-3 0-1.42.75-2.12 1.01-2.41.27-.29.58-.36.78-.36.19 0 .39 0 .56.01.18.01.42-.07.66.5.24.58.82 2 .89 2.15.07.15.12.32.02.52-.1.2-.15.32-.29.49-.15.17-.31.38-.44.51-.15.15-.3.31-.13.6.17.29.75 1.24 1.62 2.01 1.11.99 2.05 1.3 2.34 1.44.29.15.46.13.63-.08.18-.2.75-.87.95-1.17.2-.29.4-.24.66-.15.27.1 1.7.8 1.99.94.29.15.48.22.55.34.07.13.07.72-.17 1.4z" }) }),
                  "Chat on WhatsApp"
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsx(
            "div",
            {
              style: { color: "#ffffff" },
              className: "flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-medium",
              children: ["4.6 Google rating", "10,000+ students Trained", "Certified Courses", "200+ hiring partners"].map(
                (item, i) => /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1.5 font-bold", children: [
                  /* @__PURE__ */ jsx("svg", { className: "w-3.5 h-3.5 text-[#25d366]", fill: "none", stroke: "currentColor", strokeWidth: 3, viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M5 13l4 4L19 7" }) }),
                  item
                ] }, i)
              )
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "mt-8 flex justify-center", children: /* @__PURE__ */ jsxs(
            "button",
            {
              onClick: () => window.dispatchEvent(new CustomEvent("openEligibilityModal")),
              className: "inline-flex items-center gap-2.5 px-7 py-3 rounded-full border border-white/40 text-white hover:bg-white/10 hover:border-white/80 transition-all text-sm font-semibold cursor-pointer shadow-md active:scale-95 focus:outline-none",
              children: [
                /* @__PURE__ */ jsx("svg", { className: "w-4 h-4 text-white", fill: "none", stroke: "currentColor", strokeWidth: 2, viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M7.5 12l4.5 4.5m0 0l4.5-4.5M12 16.5V3" }) }),
                /* @__PURE__ */ jsx("span", { children: "Download Brochure (PDF)" })
              ]
            }
          ) })
        ]
      }
    )
  ] });
}
const SplitComponent = Home;

export { SplitComponent as component };
//# sourceMappingURL=index-C1fXYK_u.mjs.map
