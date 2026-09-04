import { jsxs, jsx } from 'react/jsx-runtime';
import { useState } from 'react';
import { createPortal } from 'react-dom';
import { useNavigate, Link } from '@tanstack/react-router';
import { s as submitCounsellorForm } from './router-CBeBCufh.mjs';
import 'sweetalert2';
import 'axios';

const aiCourse = "/assets/aicourse-BTWqvoP7.png";
const aiCourseMobile = "/assets/aicourse-mobile-DNHbbI79.png";
const course16 = "/assets/16-Dt2uptAm.png";
const course17 = "/assets/17-DaWlnTT8.png";
const course18 = "/assets/18-DRhh_R8_.png";
const course19 = "/assets/19-mrzhT06b.png";
const course20 = "/assets/20-Csai7OWu.png";
const course21 = "/assets/21-BgG1MdQu.png";
const course22 = "/assets/22-BHX_zUUh.png";
const course23 = "/assets/23-Tg3Y9Dg_.png";
const course24 = "/assets/24-C3JzfY2r.png";
const course25 = "/assets/25-jsz4v9P8.png";
const course26 = "/assets/26-CFB2SMTG.png";
const highlights = [
  {
    title: "Practical Curriculum",
    description: "Coding, Generative AI, Machine Learning & 9+ Real Projects",
    iconType: "badge"
  },
  {
    title: "High-Demand Career Field",
    description: "Growing Demand for AI & Data Science Professionals Across India",
    iconType: "users"
  },
  {
    title: "Dedicated Placement Support",
    description: "Profile Pushed to Tech & Analytics Employers Across Mumbai",
    iconType: "grad"
  },
  {
    title: "Strong Project Portfolio",
    description: "Build 9-10 Real Data Projects to Strengthen Your Resume & Interviews",
    iconType: "card"
  },
  {
    title: "Interactive Offline Classroom Batches",
    description: "In-Person Learning at 3 Branches with Expert Guidance",
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
    image: course16,
    title: "Introduction to Artificial Intelligence & Data"
  },
  {
    image: course17,
    title: "Programming for Data Science"
  },
  {
    image: course18,
    title: "Data Analysis with Pandas & NumPy"
  },
  {
    image: course19,
    title: "Data Visualization & Storytelling"
  },
  {
    image: course20,
    title: "Machine Learning Fundamentals"
  },
  {
    image: course21,
    title: "Deep Learning Concepts"
  },
  {
    image: course22,
    title: "Generative AI & Modern AI Tools"
  },
  {
    image: course23,
    title: "Statistics & Mathematical Foundations"
  },
  {
    image: course24,
    title: "Real-World Projects & Case Studies"
  },
  {
    image: course25,
    title: "Career Preparation & Job Readiness"
  },
  {
    image: course26,
    title: "Big Data & Cloud Basics"
  }
];
const criteriaCards = [
  {
    title: "Educational Qualification",
    tag: "REQUIRED",
    details: "10th Pass",
    note: "Science, IT, and Commerce backgrounds welcome \u2014 open to beginners interested in data and AI",
    badgeType: "REQUIRED"
  },
  {
    title: "Age Criteria",
    tag: "REQUIRED",
    details: "15 Years & Above",
    note: "Ideal for students, job seekers, and career switchers",
    badgeType: "REQUIRED"
  },
  {
    title: "Basic Computer Knowledge",
    tag: "ESSENTIAL",
    details: "Comfortable with computers and internet",
    note: "No prior coding experience needed",
    badgeType: "ESSENTIAL"
  },
  {
    title: "Analytical & Logical Thinking",
    tag: "ESSENTIAL",
    details: "Interest in data, numbers, and problem-solving",
    note: "We build your analytical skills throughout the course",
    badgeType: "ESSENTIAL"
  },
  {
    title: "Communication Skills",
    tag: "ESSENTIAL",
    details: "Basic English understanding",
    note: "Ability to present and explain data findings clearly",
    badgeType: "ESSENTIAL"
  },
  {
    title: "No Advanced Technical Background Required",
    tag: "BACKGROUND",
    details: "Beginners are welcome",
    note: "Step-by-step learning approach, suitable for career switchers too",
    badgeType: "BACKGROUND"
  }
];
const faqItems = [
  {
    question: "What is the duration of the AI & Data Science course?",
    answer: "The AI & Data Science course is a 12-month (1 year) program, held 5 days a week for 2 hours a day. Morning, afternoon, and evening batches are available at our Ghatkopar, Andheri & Thane branches."
  },
  {
    question: "What is the eligibility for the AI & Data Science course?",
    answer: "The basic eligibility is 10th pass from any recognized board. Candidates aged 15 years & above can apply."
  },
  {
    question: "What will I learn in the AI & Data Science course?",
    answer: "You will learn programming, Data Analysis with Pandas & NumPy, Data Visualization, Machine Learning, Deep Learning, Generative AI, Statistics, and Real-World Industry Projects."
  },
  {
    question: "What is the salary after a data science course in India?",
    answer: "Starting salaries for entry-level AI & Data Science roles range from \u20B94 LPA to \u20B98 LPA, with fast growth potential as you gain project experience."
  },
  {
    question: "Are there data science jobs in Mumbai?",
    answer: "Yes, Mumbai is home to major IT firms, tech startups, banks, and analytics hubs actively hiring AI & Data Science professionals."
  },
  {
    question: "Do I need coding experience to join the AI & Data Science course?",
    answer: "No prior coding experience is required. We teach programming fundamentals from scratch step-by-step."
  },
  {
    question: "What makes a good AI & Data Science course for beginners?",
    answer: "A good course offers structured offline classroom training, hands-on real-world projects, expert mentorship, and dedicated placement support."
  },
  {
    question: "Can I do the AI & Data Science course after 10th?",
    answer: "Yes! 10th pass students can enroll and build a career in technology."
  },
  {
    question: "Does Amigo Academy provide placement support for data science students?",
    answer: "Yes, we provide 100% placement assistance including resume building, GitHub portfolio building, mock interviews, and recruiter connections."
  },
  {
    question: "Where are Amigo Academy's branches for the AI & Data Science course?",
    answer: "Our training campuses are located in Ghatkopar, Andheri & Thane."
  },
  {
    question: "Is AI & Data Science a good career in 2026?",
    answer: "Yes, AI and Machine Learning are among the highest-demand skills globally with expanding opportunities across all industries."
  },
  {
    question: "How do I enroll or check my eligibility?",
    answer: "You can click 'Check My Eligibility' or contact our counseling team for immediate guidance."
  },
  {
    question: "What is the difference between AI, Machine Learning and Data Science?",
    answer: "Data Science focuses on analyzing data to extract insights, Machine Learning involves algorithms that learn from data, and AI is the broader field of building intelligent systems."
  },
  {
    question: "Does the AI & Data Science course cover Generative AI?",
    answer: "Yes, our updated curriculum includes Generative AI concepts, LLM tools, prompt engineering, and modern AI application development."
  }
];
function AIDataScienceCourse() {
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = useState(0);
  const [storyIndex, setStoryIndex] = useState(0);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
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
        course: "AI & Data Science",
        form_location: "AI & Data Science Course Page"
      });
      navigate({ to: "/thank-you" });
    } catch (err) {
      console.error("AIDataScienceCourse form submit error:", err);
      alert("Failed to submit enquiry. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
  const handleCTA = () => {
    window.dispatchEvent(new CustomEvent("openEligibilityModal"));
  };
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col bg-white text-slate-800 font-sans", children: [
    /* @__PURE__ */ jsxs("section", { className: "hidden sm:flex w-full bg-[#f1f5f9] h-[650px] relative overflow-hidden items-center border-b border-neutral-200/50", children: [
      /* @__PURE__ */ jsxs("div", { className: "absolute top-0 right-0 h-full w-full lg:w-[48%] z-0", children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            src: aiCourse,
            alt: "AI & Data Science with Generative AI & Machine Learning",
            className: "h-full w-full object-cover object-center"
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
          /* @__PURE__ */ jsx("span", { className: "font-bold text-[#DF1818] tracking-tight", children: "AI & Data Science with Generative AI & Machine Learning" })
        ] }),
        /* @__PURE__ */ jsxs("h1", { className: "text-[38px] sm:text-[42px] lg:text-[46px] font-outfit font-extrabold text-[#0b2f61] leading-[1.1] tracking-tight", children: [
          "AI & Data Science with",
          /* @__PURE__ */ jsx("br", {}),
          "Generative AI &",
          /* @__PURE__ */ jsx("br", {}),
          "Machine Learning"
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center gap-2 mt-4 text-[15px] sm:text-[16px] font-semibold", children: [
          /* @__PURE__ */ jsx("span", { className: "text-[#0b2f61]", children: "12 Month" }),
          /* @__PURE__ */ jsx("span", { className: "text-[#6b7280]", children: "\u2022" }),
          /* @__PURE__ */ jsx("span", { className: "text-[#0b2f61]", children: "Certificate Program" }),
          /* @__PURE__ */ jsx("span", { className: "text-[#6b7280]", children: "\u2022" }),
          /* @__PURE__ */ jsx("span", { className: "text-[#e31e24]", children: "Live Projects" })
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
                /* @__PURE__ */ jsx("span", { className: "ml-2 font-medium text-[#0b2f61]", children: "12 Months (5 Days/Week, 2 Hours/Day)" })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsx("span", { className: "text-[#0b2f61] font-bold", children: "\u25A7" }),
              /* @__PURE__ */ jsxs("p", { children: [
                /* @__PURE__ */ jsx("span", { className: "font-semibold text-slate-700", children: "Eligibility:" }),
                /* @__PURE__ */ jsx("span", { className: "ml-2 font-medium text-[#0b2f61]", children: "10th Pass" })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsx("span", { className: "text-[#0b2f61] font-bold", children: "\u2659" }),
              /* @__PURE__ */ jsxs("p", { children: [
                /* @__PURE__ */ jsx("span", { className: "font-semibold text-slate-700", children: "Age:" }),
                /* @__PURE__ */ jsx("span", { className: "ml-2 font-medium text-[#0b2f61]", children: "15 Years & Above" })
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
            src: aiCourseMobile,
            alt: "AI & Data Science with Generative AI & Machine Learning",
            className: "absolute inset-0 h-full w-full object-cover object-center"
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "absolute inset-y-0 left-0 z-10 px-5 flex flex-col justify-center max-w-[280px]", children: [
          /* @__PURE__ */ jsxs("h1", { className: "text-[24px] font-extrabold text-[#0b2f61] leading-[1.16] tracking-tight", children: [
            "AI & Data Science",
            /* @__PURE__ */ jsx("br", {}),
            "with Generative AI",
            /* @__PURE__ */ jsx("br", {}),
            "& Machine Learning"
          ] }),
          /* @__PURE__ */ jsxs("ul", { className: "mt-5 space-y-2.5 text-[13px] font-bold", children: [
            /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2 text-[#0b2f61]", children: [
              /* @__PURE__ */ jsx("span", { className: "text-[#0b2f61] font-extrabold", children: "\u2022" }),
              " 12 Month"
            ] }),
            /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2 text-[#0b2f61]", children: [
              /* @__PURE__ */ jsx("span", { className: "text-[#0b2f61] font-extrabold", children: "\u2022" }),
              " Certificate Program"
            ] }),
            /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2 text-[#e31e24]", children: [
              /* @__PURE__ */ jsx("span", { className: "text-[#e31e24] font-extrabold", children: "\u2022" }),
              " Live Projects"
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
            /* @__PURE__ */ jsx("span", { className: "text-[#0b2f61] font-medium text-right", children: "12 Months (5 Days/Wk, 2 Hrs/Day)" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between gap-3 text-[#42526a]", children: [
            /* @__PURE__ */ jsx("span", { className: "font-semibold text-slate-700", children: "Eligibility:" }),
            /* @__PURE__ */ jsx("span", { className: "text-[#0b2f61] font-medium", children: "10th Pass" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between gap-3 text-[#42526a]", children: [
            /* @__PURE__ */ jsx("span", { className: "font-semibold text-slate-700", children: "Age:" }),
            /* @__PURE__ */ jsx("span", { className: "text-[#0b2f61] font-medium", children: "15 Years & Above" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "py-16 px-4 sm:px-6 md:px-8 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl sm:text-3xl font-extrabold text-[#0b2f61] text-center mb-10 font-outfit", children: "Course Highlights" }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: highlights.map((item, idx) => /* @__PURE__ */ jsxs(
        "div",
        {
          className: "rounded-2xl bg-[#FFFBEB] border border-[#FDE68A]/60 p-6 flex items-start gap-4 transition-all duration-300 hover:shadow-md text-left",
          children: [
            /* @__PURE__ */ jsx("div", { className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-[#2563eb] shadow-sm", children: /* @__PURE__ */ jsx("svg", { className: "h-5 w-5 text-[#2563eb]", fill: "none", stroke: "currentColor", strokeWidth: 2, viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 14l9-5-9-5-9 5 9 5z" }) }) }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h3", { className: "text-sm font-extrabold text-[#0b2f61] leading-snug mb-1", children: item.title }),
              /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-600 font-medium leading-relaxed", children: item.description })
            ] })
          ]
        },
        idx
      )) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "bg-[#f4f6fb] py-12 px-4 sm:px-6 md:px-8 border-t border-neutral-100", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-7xl", children: /* @__PURE__ */ jsxs("div", { className: "rounded-[28px] sm:rounded-[36px] bg-[#183a7d] px-6 sm:px-12 py-10 sm:py-12 shadow-[0_20px_50px_rgba(24,58,125,0.18)] text-white", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-left", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl sm:text-[34px] font-extrabold leading-tight tracking-tight text-white", children: "Kickstart Your Career In 12 Months" }),
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
              /* @__PURE__ */ jsx("option", { value: "10th", children: "10th Pass" }),
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
          className: "bg-white rounded-[24px] overflow-hidden border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col justify-between group text-left",
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
          onClick: handleCTA,
          className: "inline-flex items-center justify-center gap-2.5 bg-[#DF1818] hover:bg-[#c41212] text-white font-sans font-bold text-sm sm:text-base px-8 py-3.5 rounded-full shadow-[0_8px_20px_rgba(223,24,24,0.28)] hover:shadow-[0_12px_28px_rgba(223,24,24,0.38)] transition-all duration-300 active:scale-95 cursor-pointer",
          children: [
            /* @__PURE__ */ jsx("span", { children: "Enroll Now to Start" }),
            /* @__PURE__ */ jsx("span", { className: "font-bold", children: "\xA0\u2794" })
          ]
        }
      ) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 px-4 sm:px-6 md:px-8 bg-[#f8fafc] border-t border-b border-slate-100", children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto text-center", children: [
      /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200/60 mb-4", children: [
        /* @__PURE__ */ jsx("span", { children: "\u{1F6E1}" }),
        " Quick Eligibility Check"
      ] }),
      /* @__PURE__ */ jsx("h2", { className: "text-3xl sm:text-4xl font-extrabold text-[#0b2f61] mb-3 font-outfit", children: "Do You Meet the Eligibility Criteria?" }),
      /* @__PURE__ */ jsx("p", { className: "text-slate-500 text-xs sm:text-sm font-semibold max-w-xl mx-auto mb-14", children: "Check if you qualify for our 12-month AI & Data Science with Generative AI & Machine Learning." }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 text-left", children: criteriaCards.map((c, idx) => /* @__PURE__ */ jsxs(
        "div",
        {
          className: "bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm flex flex-col justify-between space-y-4",
          children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-3", children: [
                /* @__PURE__ */ jsx("span", { className: "text-xl", children: "\u{1F393}" }),
                /* @__PURE__ */ jsx(
                  "span",
                  {
                    className: `text-[10px] font-extrabold px-2.5 py-1 rounded-md uppercase tracking-wider ${c.badgeType === "REQUIRED" ? "bg-rose-50 text-rose-600 border border-rose-100" : c.badgeType === "ESSENTIAL" ? "bg-amber-50 text-amber-600 border border-amber-100" : "bg-indigo-50 text-indigo-600 border border-indigo-100"}`,
                    children: c.tag
                  }
                )
              ] }),
              /* @__PURE__ */ jsx("h3", { className: "text-sm font-extrabold text-[#0b2f61] mb-1", children: c.title }),
              /* @__PURE__ */ jsx("p", { className: "text-xs font-bold text-slate-700 mb-3", children: c.details })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2 pt-3 border-t border-slate-100 text-[11px] text-slate-500 font-medium leading-relaxed", children: [
              /* @__PURE__ */ jsx("span", { className: "text-emerald-500 font-bold text-xs", children: "\u2713" }),
              /* @__PURE__ */ jsx("span", { children: c.note })
            ] })
          ]
        },
        idx
      )) }),
      /* @__PURE__ */ jsxs("div", { className: "mt-8 min-h-[255px] rounded-[16px] border border-slate-100 bg-white px-6 py-10 shadow-[0_8px_30px_rgba(0,0,0,0.03)] mx-auto flex flex-col items-center justify-center text-center", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-[19px] sm:text-[21px] font-extrabold text-[#17213a]", children: "Not Sure If You Qualify?" }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 text-xs sm:text-sm text-slate-500 max-w-xl mx-auto", children: "Don't worry! Our counsellors will evaluate your profile and suggest the best career path in Data Science for you." }),
        /* @__PURE__ */ jsx("div", { className: "mt-8", children: /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: handleCTA,
            className: "inline-flex items-center gap-8 bg-[#ed1c24] hover:bg-[#cb151c] text-white font-bold text-sm px-[72px] py-3.5 rounded-full shadow-[0_10px_20px_rgba(237,28,36,0.2)] transition-all active:scale-95 cursor-pointer",
            children: [
              /* @__PURE__ */ jsx("span", { children: "Check My Eligibility" }),
              /* @__PURE__ */ jsx("span", { className: "text-base font-bold", children: "\u2794" })
            ]
          }
        ) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 px-4 sm:px-6 md:px-8 bg-[#f8fafc] border-t border-slate-100", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto text-center", children: [
      /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-blue-50 text-[#0b2f61] text-xs font-bold border border-blue-100 mb-4", children: [
        /* @__PURE__ */ jsx("span", { children: "\u2753" }),
        " Common Questions Answered"
      ] }),
      /* @__PURE__ */ jsx("h2", { className: "text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0b2f61] mb-3 font-outfit", children: "Frequently Asked Questions \u2013 AI & Data Science Course" }),
      /* @__PURE__ */ jsx("p", { className: "text-slate-500 text-xs sm:text-sm font-semibold max-w-xl mx-auto mb-14", children: "Got questions? We have answers. Still confused? Speak to our counselor in 60 seconds." }),
      /* @__PURE__ */ jsx("div", { className: "space-y-3 text-left", children: faqItems.map((faq, idx) => {
        const isOpen = openFaq === idx;
        return /* @__PURE__ */ jsxs(
          "div",
          {
            className: "bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-sm transition-all",
            children: [
              /* @__PURE__ */ jsxs(
                "button",
                {
                  onClick: () => setOpenFaq(isOpen ? null : idx),
                  className: "w-full flex items-center justify-between p-5 text-left font-bold text-xs sm:text-sm text-[#0b2f61] gap-4 cursor-pointer",
                  children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                      /* @__PURE__ */ jsx("span", { className: "w-6 h-6 rounded-full bg-blue-50 text-[#0b2f61] flex items-center justify-center text-xs shrink-0 font-extrabold", children: idx + 1 }),
                      /* @__PURE__ */ jsx("span", { children: faq.question })
                    ] }),
                    /* @__PURE__ */ jsx(
                      "svg",
                      {
                        className: `h-4 w-4 shrink-0 text-[#0b2f61] transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: 2.5,
                        children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M19.5 8.25l-7.5 7.5-7.5-7.5" })
                      }
                    )
                  ]
                }
              ),
              isOpen && /* @__PURE__ */ jsx("div", { className: "px-5 pb-5", children: /* @__PURE__ */ jsx("div", { className: "rounded-xl border-l-4 border-[#0b2f61] bg-[#f8fafc] p-4 text-xs sm:text-sm font-medium leading-relaxed text-slate-600", children: faq.answer }) })
            ]
          },
          idx
        );
      }) }),
      /* @__PURE__ */ jsxs("div", { className: "mt-16 pt-12 border-t border-slate-200/80 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("div", { className: "text-3xl sm:text-4xl font-extrabold text-[#0b2f61]", children: "1,200+" }),
          /* @__PURE__ */ jsx("div", { className: "mt-1.5 text-xs font-medium text-slate-500", children: "Students Enrolled" })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("div", { className: "text-3xl sm:text-4xl font-extrabold text-[#0b2f61]", children: "200+" }),
          /* @__PURE__ */ jsx("div", { className: "mt-1.5 text-xs font-medium text-slate-500", children: "Hiring Partners" })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("div", { className: "text-3xl sm:text-4xl font-extrabold text-[#0b2f61]", children: "120+" }),
          /* @__PURE__ */ jsx("div", { className: "mt-1.5 text-xs font-medium text-slate-500", children: "Students Trained" })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-16 px-4 sm:px-6 md:px-8 bg-white", children: /* @__PURE__ */ jsx("div", { className: "max-w-5xl mx-auto", children: /* @__PURE__ */ jsxs("div", { className: "rounded-3xl bg-[#183a7d] p-8 sm:p-12 text-white text-center space-y-6 shadow-xl", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl sm:text-4xl font-extrabold font-outfit text-white", children: "Still have questions?" }),
      /* @__PURE__ */ jsx("p", { className: "text-xs sm:text-sm text-white max-w-xl mx-auto font-medium", children: "Our expert counselors are here to help you make the right career decision. Get personalized guidance in under 60 seconds." }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row items-center justify-center gap-4 pt-2", children: [
        /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: () => window.location.href = "tel:+919987588932",
            className: "w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-[#183a7d] hover:bg-slate-100 font-bold text-xs sm:text-sm px-8 py-3.5 rounded-full shadow-md transition-all cursor-pointer",
            children: [
              /* @__PURE__ */ jsx("span", { children: "Talk to Counselor Now" }),
              /* @__PURE__ */ jsx("span", { className: "text-base font-extrabold", children: "\u2794" })
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: handleCTA,
            className: "w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-transparent text-white border border-white/40 hover:bg-white/10 font-bold text-xs sm:text-sm px-8 py-3.5 rounded-full shadow-md transition-all cursor-pointer",
            children: [
              /* @__PURE__ */ jsx("svg", { className: "w-4 h-4 text-white", fill: "none", stroke: "currentColor", strokeWidth: 2, viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M7.5 12l4.5 4.5m0 0l4.5-4.5M12 16.5V3" }) }),
              /* @__PURE__ */ jsx("span", { children: "Download Brochure (PDF)" })
            ]
          }
        )
      ] })
    ] }) }) }),
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
  ] });
}
const SplitComponent = AIDataScienceCourse;

export { SplitComponent as component };
//# sourceMappingURL=courses.ai-data-science-with-generative-ai-machine-learning-XUNMrf4J.mjs.map
