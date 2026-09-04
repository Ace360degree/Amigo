import { jsxs, jsx } from 'react/jsx-runtime';
import { useState } from 'react';
import { useNavigate, Link } from '@tanstack/react-router';
import { s as submitCounsellorForm } from './router-CBeBCufh.mjs';
import 'sweetalert2';
import 'axios';

const aviationHero = "/assets/aviation-hero-De-pvCVr.png";
const aviationHeroMobile = "/assets/aviation-hero-mobile-DIbvZ1gf.png";
const course9 = "/assets/9-BnPomQeQ.png";
const course10 = "/assets/10-DiGLVTrS.png";
const course11 = "/assets/11-DBYO6hx_.png";
const course12 = "/assets/12-COwgUmKQ.png";
const course13 = "/assets/13-CvRZdMhM.png";
const course14 = "/assets/14-CQKbp4Pe.png";
const course15 = "/assets/15-DRiwmun-.png";
const highlights = [
  {
    title: "Practical Curriculum",
    description: "Check-in, Boarding, Baggage, Ramp, Customer service",
    iconType: "badge"
  },
  {
    title: "High-Demand Career Field",
    description: "Growing Demand for AI & Data Science Professionals Across India",
    iconType: "users"
  },
  {
    title: "Dedicated Placement Support",
    description: "Profile Pushed to Airlines & Aviation Employers",
    iconType: "grad"
  },
  {
    title: "Strong Project Portfolio",
    description: "Build 8\u201310 Real Data Projects to Strengthen Your Resume & Interviews",
    iconType: "card"
  },
  {
    title: "Interactive Offline Classroom Batches",
    description: "In-Person Learning at 4 Branches with Expert Guidance",
    iconType: "users"
  },
  {
    title: "Strong Career Growth Potential",
    description: "Competitive Salaries Based on Skills, Projects & Employer Requirements",
    iconType: "grad"
  },
  {
    title: "Scholarship Opportunities",
    description: "Scholarships up to \u20B950,000 Available",
    iconType: "card"
  },
  {
    title: "Zero-Interest EMI Options",
    description: "Flexible Payment Plans to Make the Course Affordable",
    iconType: "card"
  }
];
const learnCards = [
  {
    image: course9,
    title: "Airport Operations & Ground Handling"
  },
  {
    image: course10,
    title: "Passenger Check-in & Boarding"
  },
  {
    image: course11,
    title: "Baggage & Cargo Handling"
  },
  {
    image: course12,
    title: "Customer Service & Communication"
  },
  {
    image: course13,
    title: "Grooming & Personality Development"
  },
  {
    image: course14,
    title: "Airport Safety & Security"
  },
  {
    image: course15,
    title: "Interview Preparation & Job Readiness"
  }
];
const criteriaCards = [
  {
    title: "Educational Qualification",
    tag: "Required",
    details: "12th Pass",
    note: "Any stream \u2014 Science, Commerce or Arts"
  },
  {
    title: "Age Criteria",
    tag: "Required",
    details: "17 to 25 Years",
    note: "Relaxation possible based on experience and role"
  },
  {
    title: "Height Requirement",
    tag: "Essential",
    details: "No height requirement",
    note: "Open to all body types"
  },
  {
    title: "Gender",
    tag: "Required",
    details: "Open to All",
    note: "Male and female candidates welcome"
  },
  {
    title: "Communication",
    tag: "Essential",
    details: "Basic English",
    note: "We train you further during the course"
  },
  {
    title: "Certification",
    tag: "Essential",
    details: "Certified course",
    note: "Certified course"
  }
];
const faqItems = [
  {
    question: "What is the duration of the airport ground staff course at Amigo Academy?",
    answer: "The airport ground staff course is a 6-month program, held 5 days a week for 2 hours a day. Morning, afternoon, and evening batches are available at our Ghatkopar, Andheri & Thane branches."
  },
  {
    question: "What is the eligibility for the airport ground staff course?",
    answer: "The basic eligibility is 12th pass from any recognized board in any stream. Candidates aged 17 to 25 years can apply."
  },
  {
    question: "Is the airport ground staff course government certified?",
    answer: "Yes, Amigo Academy offers Certified courses, offering recognized credentials trusted by employers."
  },
  {
    question: "What is the salary of airport ground staff in India?",
    answer: "Starting salaries generally range from \u20B92.5 LPA to \u20B94.5 LPA depending on the airline, role, and location, with rapid growth opportunities as you gain experience."
  },
  {
    question: "What kind of placement support does Amigo Academy provide for ground staff?",
    answer: "We provide placement support including resume building, mock interviews, grooming sessions, and direct interview scheduling."
  },
  {
    question: "Is there a height requirement for airport ground staff?",
    answer: "No, unlike cabin crew roles, airport ground staff roles have no height requirement and are open to all body types."
  },
  {
    question: "Can boys join the airport ground staff course?",
    answer: "Yes, male and female candidates are equally eligible for all aviation and airport management roles."
  },
  {
    question: "Where are Amigo Academy's branches for the ground staff course?",
    answer: "Our campus branches are located at Ghatkopar, Andheri & Thane in Mumbai."
  },
  {
    question: "What jobs can I get after the airport ground staff course?",
    answer: "Roles include Customer Service Executive, Passenger Service Agent, Check-in Staff, Boarding Gate Agent, Baggage & Ramp Handler, and Airport Operations Coordinator."
  },
  {
    question: "What is the difference between airport ground staff and cabin crew?",
    answer: "Cabin crew work inside the aircraft during flights, while ground staff handle airport-side passenger services, check-in, baggage, and ground operations."
  },
  {
    question: "Are EMI or scholarship options available?",
    answer: "Yes, Amigo Academy offers scholarships up to \u20B950,000 along with zero-interest monthly EMI options to make the course affordable."
  },
  {
    question: "How do I enrol or check my eligibility?",
    answer: "You can click 'Check My Eligibility' on our website or contact our counselling team for instant guidance."
  },
  {
    question: "Is airport ground staff a good career after 12th?",
    answer: "Yes! It offers fast entry into the expanding aviation sector with immediate employment opportunities after 12th."
  },
  {
    question: "Does the airport ground staff course include interview preparation?",
    answer: "Yes, comprehensive interview preparation, mock interviews, spoken English training, and personality development are core parts of the 6-month program."
  }
];
function AviationHospitality() {
  const navigate = useNavigate();
  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    age: "",
    qualification: "",
    branch: "",
    gender: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!formState.name.trim() || formState.phone.trim().length < 7) return;
    setIsSubmitting(true);
    try {
      await submitCounsellorForm({
        name: formState.name,
        phone: formState.phone,
        age: formState.age || void 0,
        qualification: formState.qualification || void 0,
        branch: formState.branch || void 0,
        gender: formState.gender || void 0,
        course: "Airport Ground Staff & Hospitality Management",
        form_location: "Airport Ground Staff Course Page"
      });
      navigate({ to: "/thank-you" });
    } catch (err) {
      console.error("AviationHospitality form submit error:", err);
      alert("Failed to submit enquiry. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "bg-[#f5f7fb] text-neutral-900 font-sans", children: [
    /* @__PURE__ */ jsxs("section", { className: "hidden sm:flex w-full bg-[#f1f5f9] h-[650px] relative overflow-hidden items-center border-b border-neutral-200/50", children: [
      /* @__PURE__ */ jsxs("div", { className: "absolute top-0 right-0 h-full w-full lg:w-[48%] z-0", children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            src: aviationHero,
            alt: "Airport Ground Staff & Hospitality Management",
            className: "h-full w-full object-cover object-center",
            onError: (e) => {
              e.currentTarget.src = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800";
            }
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-[#f1f5f9] from-0% via-[#f1f5f9]/40 via-[22%] to-transparent z-10 lg:block hidden" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto w-full px-4 sm:px-6 md:px-8 relative z-20 flex items-center h-full", children: /* @__PURE__ */ jsxs("div", { className: "max-w-[650px] text-left", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1.5 text-xs sm:text-[13px] font-sans font-medium text-slate-400 mb-6", children: [
          /* @__PURE__ */ jsx(Link, { to: "/", className: "hover:text-[#DF1818] transition-colors focus:outline-none", children: "Home" }),
          /* @__PURE__ */ jsx("span", { className: "text-slate-400 mx-1 select-none", children: ">" }),
          /* @__PURE__ */ jsx(Link, { to: "/courses", className: "hover:text-[#DF1818] transition-colors focus:outline-none", children: "Courses" }),
          /* @__PURE__ */ jsx("span", { className: "text-slate-400 mx-1 select-none", children: ">" }),
          /* @__PURE__ */ jsx("span", { className: "font-bold text-[#DF1818] tracking-tight", children: "Airport Ground Staff & Hospitality Management" })
        ] }),
        /* @__PURE__ */ jsx("h1", { className: "text-[38px] sm:text-[42px] lg:text-[46px] font-outfit font-extrabold text-[#0b2f61] leading-[1.1] tracking-tight", children: "Airport Ground Staff & Hospitality Management" }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center gap-2 mt-4 text-[15px] sm:text-[16px] font-semibold", children: [
          /* @__PURE__ */ jsx("span", { className: "text-[#0b2f61]", children: "12 Month" }),
          /* @__PURE__ */ jsx("span", { className: "text-[#6b7280]", children: "\u2022" }),
          /* @__PURE__ */ jsx("span", { className: "text-[#0b2f61]", children: "Certificate Program" }),
          /* @__PURE__ */ jsx("span", { className: "text-[#6b7280]", children: "\u2022" }),
          /* @__PURE__ */ jsx("span", { className: "text-[#e31e24]", children: "Practical Training" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-8 bg-white/70 backdrop-blur-sm p-6 rounded-2xl border border-slate-200/60 shadow-sm max-w-xl", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-[18px] font-bold text-[#0b2f61] mb-4", children: "Course Overview" }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-3 text-xs sm:text-sm text-[#42526a]", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsx("span", { className: "text-[#0b2f61] font-bold", children: "\u25F7" }),
              /* @__PURE__ */ jsxs("p", { children: [
                /* @__PURE__ */ jsx("span", { className: "font-semibold text-slate-700", children: "Timing:" }),
                /* @__PURE__ */ jsx("span", { className: "ml-2 font-bold text-[#0b2f61]", children: "Morning / Afternoon / Evening" })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsx("span", { className: "text-[#0b2f61] font-bold", children: "\u2316" }),
              /* @__PURE__ */ jsxs("p", { children: [
                /* @__PURE__ */ jsx("span", { className: "font-semibold text-slate-700", children: "Our Branches:" }),
                /* @__PURE__ */ jsx("span", { className: "ml-2 font-medium text-[#0b2f61]", children: "Ghatkopar, Andheri & Thane" })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsx("span", { className: "text-[#0b2f61] font-bold", children: "\u25A4" }),
              /* @__PURE__ */ jsxs("p", { children: [
                /* @__PURE__ */ jsx("span", { className: "font-semibold text-slate-700", children: "Duration:" }),
                /* @__PURE__ */ jsx("span", { className: "ml-2 font-medium text-[#0b2f61]", children: "6 Months (5 Days/Week, 2 Hours/Day)" })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsx("span", { className: "text-[#0b2f61] font-bold", children: "\u25A7" }),
              /* @__PURE__ */ jsxs("p", { children: [
                /* @__PURE__ */ jsx("span", { className: "font-semibold text-slate-700", children: "Eligibility:" }),
                /* @__PURE__ */ jsx("span", { className: "ml-2 font-medium text-[#0b2f61]", children: "12th Pass" })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsx("span", { className: "text-[#0b2f61] font-bold", children: "\u2659" }),
              /* @__PURE__ */ jsxs("p", { children: [
                /* @__PURE__ */ jsx("span", { className: "font-semibold text-slate-700", children: "Age:" }),
                /* @__PURE__ */ jsx("span", { className: "ml-2 font-medium text-[#0b2f61]", children: "17 to 27 Years" })
              ] })
            ] })
          ] })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "sm:hidden w-full bg-[#f8fafc] border-b border-neutral-200/50", children: [
      /* @__PURE__ */ jsxs("div", { className: "relative w-full h-[430px] overflow-hidden bg-[#f1f5f9]", children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            src: aviationHeroMobile,
            alt: "Aviation & Hospitality Management",
            className: "absolute inset-0 h-full w-full object-cover object-center"
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "absolute inset-y-0 left-0 z-10 px-5 flex flex-col justify-center max-w-[280px]", children: [
          /* @__PURE__ */ jsxs("h1", { className: "text-[26px] font-extrabold text-[#0b2f61] leading-[1.16] tracking-tight", children: [
            "Aviation &",
            /* @__PURE__ */ jsx("br", {}),
            "Hospitality",
            /* @__PURE__ */ jsx("br", {}),
            "Management"
          ] }),
          /* @__PURE__ */ jsxs("ul", { className: "mt-5 space-y-2.5 text-[13px] font-bold", children: [
            /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2 text-[#0b2f61]", children: [
              /* @__PURE__ */ jsx("span", { className: "text-[#0b2f61] font-extrabold", children: "\u2022" }),
              " 6 Months"
            ] }),
            /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2 text-[#0b2f61]", children: [
              /* @__PURE__ */ jsx("span", { className: "text-[#0b2f61] font-extrabold", children: "\u2022" }),
              " Certificate Program"
            ] }),
            /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2 text-[#e31e24]", children: [
              /* @__PURE__ */ jsx("span", { className: "text-[#e31e24] font-extrabold", children: "\u2022" }),
              " Practical Training"
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-white px-5 py-7 border-b border-slate-100", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-[19px] font-extrabold text-[#0b2f61] mb-5", children: "Course Overview" }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-4 text-xs", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between gap-3 text-[#42526a]", children: [
            /* @__PURE__ */ jsx("span", { className: "font-semibold text-slate-700", children: "Timing:" }),
            /* @__PURE__ */ jsx("span", { className: "text-[#0b2f61] font-bold", children: "Morning / Afternoon / Evening" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between gap-3 text-[#42526a]", children: [
            /* @__PURE__ */ jsx("span", { className: "font-semibold text-slate-700", children: "Our Branches:" }),
            /* @__PURE__ */ jsx("span", { className: "text-[#0b2f61] font-medium text-right", children: "Ghatkopar, Andheri & Thane" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between gap-3 text-[#42526a]", children: [
            /* @__PURE__ */ jsx("span", { className: "font-semibold text-slate-700", children: "Duration:" }),
            /* @__PURE__ */ jsx("span", { className: "text-[#0b2f61] font-medium text-right", children: "6 Months (5 Days/Week, 2 Hours/Day)" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between gap-3 text-[#42526a]", children: [
            /* @__PURE__ */ jsx("span", { className: "font-semibold text-slate-700", children: "Eligibility:" }),
            /* @__PURE__ */ jsx("span", { className: "text-[#0b2f61] font-medium", children: "12th Pass" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between gap-3 text-[#42526a]", children: [
            /* @__PURE__ */ jsx("span", { className: "font-semibold text-slate-700", children: "Age:" }),
            /* @__PURE__ */ jsx("span", { className: "text-[#0b2f61] font-medium", children: "17 to 27 Years" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "mx-auto max-w-7xl px-4 sm:px-6 md:px-8 mt-8 sm:-mt-14 relative z-10 pb-16", children: /* @__PURE__ */ jsxs("div", { className: "rounded-[32px] bg-white border border-slate-100 shadow-[0_15px_45px_rgba(0,0,0,0.06)] p-6 sm:p-10 md:p-12", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-[#0b2f61] text-center mb-8 sm:mb-10", children: "Course Highlights" }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6", children: highlights.map((item, index) => /* @__PURE__ */ jsxs(
        "div",
        {
          className: "rounded-[20px] bg-[#FFF9EA] border border-[#FBECC8]/60 p-5 flex items-start gap-4 transition-all duration-300 hover:shadow-md",
          children: [
            /* @__PURE__ */ jsx("div", { className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-[#2563eb] shadow-sm", children: /* @__PURE__ */ jsxs("svg", { className: "h-5 w-5", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, children: [
              /* @__PURE__ */ jsx("circle", { cx: "12", cy: "8", r: "6" }),
              /* @__PURE__ */ jsx("path", { d: "M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" })
            ] }) }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h3", { className: "text-sm font-extrabold text-[#0b2f61] leading-snug mb-1", children: item.title }),
              /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-500 font-medium leading-relaxed", children: item.description })
            ] })
          ]
        },
        index
      )) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "bg-[#f4f6fb] py-12 px-4 sm:px-6 md:px-8 border-t border-neutral-100", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-7xl", children: /* @__PURE__ */ jsxs("div", { className: "rounded-[28px] sm:rounded-[36px] bg-[#183a7d] px-6 sm:px-12 py-10 sm:py-12 shadow-[0_20px_50px_rgba(24,58,125,0.18)] text-white", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-left", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl sm:text-[34px] font-extrabold leading-tight tracking-tight text-white", children: "Kickstart Your Career In 6 Months" }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 text-xs sm:text-sm text-slate-200/90 font-normal", children: "Get Batch timings and Seat availability" })
      ] }),
      /* @__PURE__ */ jsxs("form", { className: "mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5", onSubmit: handleFormSubmit, children: [
        /* @__PURE__ */ jsx("div", { className: "relative flex items-center bg-white rounded-full h-[50px] px-4 shadow-sm", children: /* @__PURE__ */ jsx(
          "input",
          {
            type: "tel",
            required: true,
            placeholder: "Mobile Number *",
            value: formState.phone,
            onChange: (e) => setFormState({ ...formState, phone: e.target.value }),
            className: "w-full text-xs sm:text-sm text-slate-800 placeholder-slate-400 font-semibold focus:outline-none bg-transparent"
          }
        ) }),
        /* @__PURE__ */ jsx("div", { className: "relative flex items-center bg-white rounded-full h-[50px] px-4 shadow-sm", children: /* @__PURE__ */ jsx(
          "input",
          {
            type: "text",
            required: true,
            placeholder: "Full Name *",
            value: formState.name,
            onChange: (e) => setFormState({ ...formState, name: e.target.value }),
            className: "w-full text-xs sm:text-sm text-slate-800 placeholder-slate-400 font-semibold focus:outline-none bg-transparent"
          }
        ) }),
        /* @__PURE__ */ jsx("div", { className: "relative flex items-center bg-white rounded-full h-[50px] px-4 shadow-sm", children: /* @__PURE__ */ jsxs(
          "select",
          {
            value: formState.age,
            onChange: (e) => setFormState({ ...formState, age: e.target.value }),
            className: "w-full text-xs sm:text-sm text-slate-500 font-semibold focus:outline-none bg-transparent appearance-none cursor-pointer",
            children: [
              /* @__PURE__ */ jsx("option", { value: "", disabled: true, hidden: true, children: "Age" }),
              /* @__PURE__ */ jsx("option", { value: "17", children: "17 Years" }),
              /* @__PURE__ */ jsx("option", { value: "18", children: "18 Years" }),
              /* @__PURE__ */ jsx("option", { value: "19", children: "19 Years" }),
              /* @__PURE__ */ jsx("option", { value: "20", children: "20 Years" }),
              /* @__PURE__ */ jsx("option", { value: "21", children: "21 Years" }),
              /* @__PURE__ */ jsx("option", { value: "22", children: "22 Years" }),
              /* @__PURE__ */ jsx("option", { value: "23", children: "23 Years" }),
              /* @__PURE__ */ jsx("option", { value: "24", children: "24 Years" }),
              /* @__PURE__ */ jsx("option", { value: "25", children: "25 Years" })
            ]
          }
        ) }),
        /* @__PURE__ */ jsx("div", { className: "relative flex items-center bg-white rounded-full h-[50px] px-4 shadow-sm", children: /* @__PURE__ */ jsxs(
          "select",
          {
            value: formState.qualification,
            onChange: (e) => setFormState({ ...formState, qualification: e.target.value }),
            className: "w-full text-xs sm:text-sm text-slate-500 font-semibold focus:outline-none bg-transparent appearance-none cursor-pointer",
            children: [
              /* @__PURE__ */ jsx("option", { value: "", disabled: true, hidden: true, children: "Qualification" }),
              /* @__PURE__ */ jsx("option", { value: "12th", children: "12th Pass" }),
              /* @__PURE__ */ jsx("option", { value: "undergraduate", children: "Undergraduate" }),
              /* @__PURE__ */ jsx("option", { value: "graduate", children: "Graduate" })
            ]
          }
        ) }),
        /* @__PURE__ */ jsx("div", { className: "relative flex items-center bg-white rounded-full h-[50px] px-4 shadow-sm", children: /* @__PURE__ */ jsxs(
          "select",
          {
            value: formState.branch,
            onChange: (e) => setFormState({ ...formState, branch: e.target.value }),
            className: "w-full text-xs sm:text-sm text-slate-500 font-semibold focus:outline-none bg-transparent appearance-none cursor-pointer",
            children: [
              /* @__PURE__ */ jsx("option", { value: "", disabled: true, hidden: true, children: "Preferred Branch" }),
              /* @__PURE__ */ jsx("option", { value: "Ghatkopar", children: "Ghatkopar" }),
              /* @__PURE__ */ jsx("option", { value: "Andheri", children: "Andheri" }),
              /* @__PURE__ */ jsx("option", { value: "Thane", children: "Thane" })
            ]
          }
        ) }),
        /* @__PURE__ */ jsx("div", { className: "relative flex items-center bg-white rounded-full h-[50px] px-4 shadow-sm", children: /* @__PURE__ */ jsxs(
          "select",
          {
            value: formState.gender,
            onChange: (e) => setFormState({ ...formState, gender: e.target.value }),
            className: "w-full text-xs sm:text-sm text-slate-500 font-semibold focus:outline-none bg-transparent appearance-none cursor-pointer",
            children: [
              /* @__PURE__ */ jsx("option", { value: "", disabled: true, hidden: true, children: "Gender" }),
              /* @__PURE__ */ jsx("option", { value: "female", children: "Female" }),
              /* @__PURE__ */ jsx("option", { value: "male", children: "Male" }),
              /* @__PURE__ */ jsx("option", { value: "other", children: "Other" })
            ]
          }
        ) }),
        /* @__PURE__ */ jsx("div", { className: "md:col-span-3 flex justify-center pt-2", children: /* @__PURE__ */ jsxs(
          "button",
          {
            type: "submit",
            disabled: isSubmitting,
            className: "w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#e31e24] hover:bg-[#c2141a] disabled:bg-slate-400 text-white font-bold text-sm px-10 py-3.5 rounded-full shadow-lg transition-all active:scale-95 cursor-pointer",
            children: [
              /* @__PURE__ */ jsx("span", { children: isSubmitting ? "Submitting..." : "Enrol Now" }),
              /* @__PURE__ */ jsx("span", { className: "text-base font-extrabold", children: "\u2794" })
            ]
          }
        ) })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "bg-[#f9fafb] py-16 sm:py-24 px-4 sm:px-6 md:px-8 border-t border-neutral-100", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-6xl", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl sm:text-4xl font-extrabold text-[#111827] text-center mb-12 sm:mb-16 font-sans", children: "What Will You Learn?" }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8", children: learnCards.map((item, idx) => /* @__PURE__ */ jsxs(
        "div",
        {
          className: "bg-white rounded-[24px] overflow-hidden border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col justify-between group",
          children: [
            /* @__PURE__ */ jsx("div", { className: "h-[200px] sm:h-[210px] w-full overflow-hidden relative bg-slate-100", children: /* @__PURE__ */ jsx(
              "img",
              {
                src: item.image,
                alt: item.title,
                className: "w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              }
            ) }),
            /* @__PURE__ */ jsx("div", { className: "p-5 sm:p-6 flex flex-col justify-center flex-1 bg-white min-h-[90px]", children: /* @__PURE__ */ jsx("h3", { className: "text-[15px] sm:text-[16px] font-bold text-[#1f2937] leading-snug font-sans", children: item.title }) })
          ]
        },
        idx
      )) }),
      /* @__PURE__ */ jsx("div", { className: "mt-14 flex justify-center", children: /* @__PURE__ */ jsxs(
        "button",
        {
          type: "button",
          onClick: () => window.dispatchEvent(new CustomEvent("openEligibilityModal")),
          className: "inline-flex items-center justify-center gap-2.5 bg-[#DF1818] hover:bg-[#c41212] text-white font-sans font-bold text-sm sm:text-base px-8 py-3.5 rounded-full shadow-[0_8px_20px_rgba(223,24,24,0.28)] hover:shadow-[0_12px_28px_rgba(223,24,24,0.38)] transition-all duration-300 active:scale-95 cursor-pointer",
          children: [
            /* @__PURE__ */ jsx("span", { children: "Explore Airport Ground Staff Course" }),
            /* @__PURE__ */ jsx("span", { className: "font-bold", children: "\xA0\u2794" })
          ]
        }
      ) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "bg-white py-16 sm:py-20 px-4 sm:px-6 md:px-8 border-t border-neutral-100", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl", children: [
      /* @__PURE__ */ jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 rounded-full bg-[#e6f7f0] px-4 py-1.5 text-xs font-semibold text-[#0d9488] border border-[#ccf0e1]", children: [
        /* @__PURE__ */ jsx("svg", { className: "w-4 h-4 text-[#0d9488]", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" }) }),
        /* @__PURE__ */ jsx("span", { children: "Quick Eligibility Check" })
      ] }) }),
      /* @__PURE__ */ jsx("h2", { className: "mt-4 text-3xl sm:text-[40px] font-extrabold text-[#0b2f61] text-center leading-tight", children: "Do You Meet the Eligibility Criteria?" }),
      /* @__PURE__ */ jsx("p", { className: "mx-auto mt-3 max-w-2xl text-xs sm:text-sm leading-relaxed text-slate-500 text-center", children: "Check if you qualify for our 6-month Airport Ground Staff & Hospitality Management program." }),
      /* @__PURE__ */ jsx("div", { className: "mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left", children: criteriaCards.map((item) => {
        const isRequired = item.tag === "Required";
        return /* @__PURE__ */ jsxs(
          "div",
          {
            className: "rounded-[22px] border border-slate-100/90 bg-white p-6 sm:p-7 shadow-[0_8px_30px_rgba(0,0,0,0.03)] flex flex-col justify-between",
            children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between gap-2 mb-4", children: [
                  /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-full bg-[#f0f4fd] flex items-center justify-center text-[#2563eb]", children: /* @__PURE__ */ jsxs("svg", { className: "w-5 h-5", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [
                    /* @__PURE__ */ jsx("path", { d: "M22 10v6M2 10l10-5 10 5-10 5z" }),
                    /* @__PURE__ */ jsx("path", { d: "M6 12v5c3 3 9 3 12 0v-5" })
                  ] }) }),
                  /* @__PURE__ */ jsx(
                    "span",
                    {
                      className: `text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${isRequired ? "bg-[#fff1f2] text-[#f43f5e] border-[#fecdd3]" : "bg-[#fff7ed] text-[#ea580c] border-[#ffedd5]"}`,
                      children: item.tag
                    }
                  )
                ] }),
                /* @__PURE__ */ jsx("h3", { className: "text-base sm:text-[17px] font-bold text-[#0b2f61]", children: item.title }),
                /* @__PURE__ */ jsx("p", { className: "mt-1.5 text-xs sm:text-sm font-medium text-slate-600", children: item.details })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "mt-6 pt-4 border-t border-slate-100 flex items-start gap-2.5", children: [
                /* @__PURE__ */ jsx("svg", { className: "w-4 h-4 text-[#10b981] shrink-0 mt-0.5", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.5", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" }) }),
                /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-500 leading-relaxed", children: item.note })
              ] })
            ]
          },
          item.title
        );
      }) }),
      /* @__PURE__ */ jsxs("div", { className: "mt-8 min-h-[255px] rounded-[16px] border border-slate-100 bg-white px-6 py-10 shadow-[0_8px_30px_rgba(0,0,0,0.03)] flex flex-col items-center justify-center gap-3 text-center", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "text-[19px] sm:text-[21px] font-extrabold text-[#17213a]", children: "Not Sure If You Qualify?" }),
          /* @__PURE__ */ jsx("p", { className: "mt-2 text-xs sm:text-sm text-slate-500", children: "Don't worry! Our counselors will evaluate your profile and suggest the best career path in aviation for you." })
        ] }),
        /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: () => window.dispatchEvent(new CustomEvent("openEligibilityModal")),
            className: "mt-8 shrink-0 rounded-full bg-[#ed1c24] hover:bg-[#cb151c] text-white px-[72px] py-3.5 text-sm font-bold shadow-[0_10px_20px_rgba(237,28,36,0.2)] transition-all inline-flex items-center gap-8 cursor-pointer",
            children: [
              /* @__PURE__ */ jsx("span", { children: "Check My Eligibility" }),
              /* @__PURE__ */ jsx("span", { children: "\u2794" })
            ]
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "bg-[#f4f6fb] py-12 px-4 sm:px-6 md:px-8", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-7xl", children: /* @__PURE__ */ jsxs("div", { className: "rounded-[28px] sm:rounded-[36px] bg-[#0b2f61] px-6 sm:px-12 py-10 sm:py-14 text-center text-white shadow-xl", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl sm:text-[34px] font-extrabold text-white leading-tight", children: "Still have questions?" }),
      /* @__PURE__ */ jsxs("p", { className: "mx-auto mt-2 max-w-xl text-xs sm:text-sm leading-relaxed text-slate-200/90 font-normal", children: [
        "Our expert counselors are here to help you make the right career decision.",
        /* @__PURE__ */ jsx("br", { className: "hidden sm:block" }),
        "Get personalized guidance in under 60 seconds."
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-8 flex flex-wrap items-center justify-center gap-4", children: [
        /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: () => window.location.href = "tel:+919987588932",
            className: "rounded-full bg-white hover:bg-slate-50 text-[#0b2f61] font-bold px-7 py-3 text-sm shadow-md transition-all inline-flex items-center gap-2 cursor-pointer",
            children: [
              /* @__PURE__ */ jsx("span", { children: "Talk to Counselor Now" }),
              /* @__PURE__ */ jsx("span", { children: "\u2794" })
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: () => window.dispatchEvent(new CustomEvent("openEligibilityModal")),
            className: "rounded-full border border-white/60 hover:bg-white/10 text-white font-bold px-7 py-3 text-sm transition-all inline-flex items-center gap-2 cursor-pointer",
            children: [
              /* @__PURE__ */ jsx("svg", { className: "w-4 h-4", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" }) }),
              /* @__PURE__ */ jsx("span", { children: "Download Brochure (PDF)" })
            ]
          }
        )
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "bg-white py-16 sm:py-20 px-4 sm:px-6 md:px-8 border-t border-neutral-100", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-4xl text-center", children: [
      /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-1.5 rounded-full bg-[#eff6ff] px-4 py-1.5 text-xs font-semibold text-[#2563eb] border border-[#dbeafe]", children: [
        /* @__PURE__ */ jsx("svg", { className: "w-4 h-4 text-[#2563eb]", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M12 18h.01" }) }),
        /* @__PURE__ */ jsx("span", { children: "Common Questions Answered" })
      ] }),
      /* @__PURE__ */ jsx("h2", { className: "mt-4 text-2xl sm:text-[34px] font-extrabold text-[#0b2f61] leading-tight max-w-3xl mx-auto", children: "Frequently Asked Questions \u2013 Aviation, Hospitality & Travel Management Training" }),
      /* @__PURE__ */ jsx("p", { className: "mx-auto mt-2 max-w-xl text-xs sm:text-sm text-slate-500", children: "Got questions? We have answers. Still confused? Speak to our counselor in 60 seconds." }),
      /* @__PURE__ */ jsx("div", { className: "mt-10 space-y-3.5 text-left", children: faqItems.map((faq, index) => /* @__PURE__ */ jsxs(
        "details",
        {
          open: index === 0,
          className: "group rounded-[18px] border border-slate-100/90 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.02)] overflow-hidden transition-all duration-200",
          children: [
            /* @__PURE__ */ jsxs("summary", { className: "flex cursor-pointer list-none items-center justify-between gap-4 p-4 sm:p-5 text-sm font-extrabold text-[#0b2f61] select-none", children: [
              /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-3.5", children: [
                /* @__PURE__ */ jsx("span", { className: "flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#f0f4fd] text-xs font-bold text-[#2563eb] group-open:bg-[#0b2f61] group-open:text-white transition-colors", children: index + 1 }),
                /* @__PURE__ */ jsx("span", { className: "group-open:text-[#0b2f61] transition-colors", children: faq.question })
              ] }),
              /* @__PURE__ */ jsx(
                "svg",
                {
                  className: "h-4 w-4 shrink-0 text-slate-400 transition-transform duration-300 group-open:rotate-180",
                  viewBox: "0 0 24 24",
                  fill: "none",
                  stroke: "currentColor",
                  strokeWidth: 2.5,
                  children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M19.5 8.25l-7.5 7.5-7.5-7.5" })
                }
              )
            ] }),
            /* @__PURE__ */ jsx("div", { className: "px-4 pb-4 sm:px-5 sm:pb-5", children: /* @__PURE__ */ jsx("div", { className: "rounded-xl border-l-4 border-[#0b2f61] bg-[#f8fafc] p-4 text-xs sm:text-sm leading-relaxed text-slate-600", children: faq.answer }) })
          ]
        },
        faq.question
      )) }),
      /* @__PURE__ */ jsx("div", { className: "mt-10 text-center", children: /* @__PURE__ */ jsxs(
        "button",
        {
          onClick: () => {
            window.location.href = "/contact";
          },
          className: "inline-flex items-center gap-2 bg-[#fffbf0] border border-[#ffecd1] px-6 py-3 rounded-full shadow-[0_4px_10px_rgba(255,236,209,0.2)] hover:scale-105 transition-all cursor-pointer",
          children: [
            /* @__PURE__ */ jsx("span", { className: "text-[#e31e24] font-bold text-xs sm:text-sm", children: "\u2728" }),
            /* @__PURE__ */ jsx("span", { className: "text-[#0b2f61] font-sans font-bold text-[10px] sm:text-xs tracking-wider uppercase", children: "If you have anymore question, please contact us" })
          ]
        }
      ) }),
      /* @__PURE__ */ jsx("div", { className: "mt-16 pt-12 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center", children: [
        { value: "1,200+", label: "Students Enrolled" },
        { value: "200+", label: "Hiring Partners" },
        { value: "120+", label: "Students Trained" }
      ].map((stat) => /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { className: "text-3xl sm:text-4xl font-extrabold text-[#0b2f61]", children: stat.value }),
        /* @__PURE__ */ jsx("div", { className: "mt-1.5 text-xs font-medium text-slate-500", children: stat.label })
      ] }, stat.label)) })
    ] }) })
  ] });
}
const SplitComponent = AviationHospitality;

export { SplitComponent as component };
//# sourceMappingURL=courses.airport-ground-staff-hospitality-management-ClCluwFJ.mjs.map
