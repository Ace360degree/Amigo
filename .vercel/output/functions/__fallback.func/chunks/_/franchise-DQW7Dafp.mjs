import process from 'node:process';globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import { jsxs, jsx } from 'react/jsx-runtime';
import React from 'react';
import { useNavigate, Link } from '@tanstack/react-router';
import { b as submitContactForm } from './router-CBeBCufh.mjs';
import Swal from 'sweetalert2';
import 'axios';

function Franchise() {
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = React.useState(1);
  const [name, setName] = React.useState("");
  const [mobile, setMobile] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [city, setCity] = React.useState("");
  const [prefLocation, setPrefLocation] = React.useState("");
  const [businessExp, setBusinessExp] = React.useState("");
  const [investment, setInvestment] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);
    try {
      await submitContactForm({
        enquiry_type: "Franchise",
        name,
        phone: mobile,
        email,
        city,
        preferred_location: prefLocation,
        business_experience: businessExp,
        investment_range: investment,
        message
      });
      setName("");
      setMobile("");
      setEmail("");
      setCity("");
      setPrefLocation("");
      setBusinessExp("");
      setInvestment("");
      setMessage("");
      Swal.fire({
        title: "Enquiry Submitted!",
        text: "Thank you for your interest in Amigo Academy Franchise. Redirecting to confirmation page...",
        icon: "success",
        confirmButtonColor: "#1C3E8A",
        timer: 2e3,
        timerProgressBar: true,
        showConfirmButton: false
      }).then(() => {
        navigate({ to: "/thank-you" });
      });
    } catch (error) {
      console.error("Franchise submit error:", error);
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
  const handleCTA = () => {
    const el = document.getElementById("franchise-enquiry");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col bg-white", children: [
    /* @__PURE__ */ jsxs("section", { className: "w-full bg-white min-h-[600px] lg:h-[650px] relative overflow-hidden flex items-center border-b border-neutral-100", children: [
      /* @__PURE__ */ jsxs("div", { className: "hidden lg:block absolute top-0 right-0 h-full w-[50%] z-0", children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            src: new URL("../assets/img/Franchisehero.png", globalThis._importMeta_.url).href,
            alt: "Partner With Amigo Academy - Franchise Opportunity",
            className: "h-full w-full object-cover object-center",
            onError: (e) => {
              e.currentTarget.src = "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800";
            }
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent z-10" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "block lg:hidden absolute inset-0 z-0 w-full h-full", children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            src: new URL("../assets/img/mobilefranchise.png", globalThis._importMeta_.url).href,
            alt: "Partner With Amigo Academy - Franchise Opportunity Mobile",
            className: "w-full h-full object-cover object-right",
            onError: (e) => {
              e.currentTarget.src = "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800";
            }
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-white via-white/95 via-40% to-transparent z-10" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto w-full px-6 sm:px-8 relative z-20 flex items-center h-full py-16 lg:py-0", children: /* @__PURE__ */ jsxs("div", { className: "w-[60%] sm:w-[55%] lg:w-full max-w-[540px] space-y-4 sm:space-y-6 text-left", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1.5 text-xs sm:text-[13px] font-sans font-medium text-slate-400", children: [
          /* @__PURE__ */ jsx(Link, { to: "/", className: "hover:text-[#DF1818] transition-colors focus:outline-none", children: "Home" }),
          /* @__PURE__ */ jsx("span", { className: "text-slate-400 mx-1 select-none", children: ">" }),
          /* @__PURE__ */ jsx("span", { className: "font-bold text-[#DF1818] tracking-tight", children: "Franchise" })
        ] }),
        /* @__PURE__ */ jsxs("h1", { className: "text-xl sm:text-3xl lg:text-[44px] font-outfit font-extrabold text-[#0b2f61] leading-[1.25] tracking-tight", children: [
          "Partner With Amigo Academy \u2013 ",
          /* @__PURE__ */ jsx("br", {}),
          /* @__PURE__ */ jsx("span", { className: "text-[#dfaa29]", children: "Franchise Opportunity" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-3 sm:space-y-4 font-sans font-semibold text-slate-600 text-[10px] sm:text-[13.5px] leading-relaxed", children: [
          /* @__PURE__ */ jsx("p", { children: "Aviation and technology education is one of India's fastest-growing industries. Amigo Academy offers entrepreneurs the opportunity to build a successful education business using a trusted, Certified brand." }),
          /* @__PURE__ */ jsx("p", { children: "Founded in 2017, with over 10,000+ students trained, a 4.6\u2605 reputation and three established Branches, we provide the support, systems and expertise to help our franchise partners succeed." })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "pt-1", children: /* @__PURE__ */ jsx(
          "button",
          {
            onClick: handleCTA,
            className: "inline-flex items-center justify-center gap-2 bg-[#e31e24] hover:bg-[#c2141a] text-white font-sans font-bold text-[9px] sm:text-xs lg:text-sm px-4 py-2.5 sm:px-6 sm:py-3 lg:px-8 lg:py-3.5 rounded-full shadow-[0_8px_20px_rgba(227,30,36,0.15)] transition-all duration-300 active:scale-95 whitespace-nowrap focus:outline-none cursor-pointer",
            children: "Enquire About a Franchise \u2192"
          }
        ) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "bg-[#f4f7fa] py-20 sm:py-24 border-t border-slate-100/80", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center text-center mb-16", children: [
        /* @__PURE__ */ jsx("div", { className: "inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-amber-200 bg-amber-50/60 text-[10px] sm:text-xs font-bold text-amber-700 uppercase tracking-widest mb-4", children: /* @__PURE__ */ jsx("span", { children: "Why Amigo" }) }),
        /* @__PURE__ */ jsx("h2", { className: "text-3xl sm:text-4xl font-extrabold text-[#0f2a4a] leading-tight font-sans tracking-tight mb-3", children: "Why Partner With Amigo Academy" }),
        /* @__PURE__ */ jsx("p", { className: "text-slate-500 font-semibold font-sans text-xs sm:text-sm max-w-2xl leading-relaxed", children: "A certified brand, proven courses and complete operational support \u2014 everything a franchise partner needs to build a credible education business." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", children: [
        {
          icon: /* @__PURE__ */ jsx("svg", { className: "w-5 h-5 text-amber-600", fill: "none", stroke: "currentColor", strokeWidth: "2", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" }) }),
          category: "CERTIFICATION",
          title: "Certified course",
          desc: "Trusted and recognised aviation training that parents and students believe in.",
          points: ["Certified programs", "Credible, recognised brand"]
        },
        {
          icon: /* @__PURE__ */ jsx("svg", { className: "w-5 h-5 text-amber-600", fill: "none", stroke: "currentColor", strokeWidth: "2", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.504-1.125-1.125-1.125h-6.75a1.125 1.125 0 00-1.125 1.125v3.375m9 0h-9M9 10.5a3 3 0 116 0 3 3 0 01-6 0z" }) }),
          category: "TRACK RECORD",
          title: "Established Brand",
          desc: "A career academy built and proven in Mumbai since 2017.",
          points: ["Founded in 2017", "10,000+ students trained", "4.6 across 740+ Google reviews"]
        },
        {
          icon: /* @__PURE__ */ jsx("svg", { className: "w-5 h-5 text-amber-600", fill: "none", stroke: "currentColor", strokeWidth: "2", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84a50.58 50.58 0 00-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" }) }),
          category: "PROGRAMS",
          title: "High-Demand Courses",
          desc: "Three job-focused courses with real hiring demand in every city.",
          points: ["Cabin Crew (Air Hostess) & Hospitality Management", "Airport Ground Staff & Hospitality Management", "AI & Data Science"]
        },
        {
          icon: /* @__PURE__ */ jsxs("svg", { className: "w-5 h-5 text-amber-600", fill: "none", stroke: "currentColor", strokeWidth: "2", viewBox: "0 0 24 24", children: [
            /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.43l-1.003.828c-.293.241-.438.613-.43.992a7.723 7.723 0 010 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.43l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.991l-1.004-.827a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.645-.869l.214-1.28z" }),
            /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z" })
          ] }),
          category: "SUPPORT",
          title: "Complete Business Support",
          desc: "You are never left to figure out operations alone.",
          points: ["Setup guidance", "Curriculum & faculty support", "Placement process", "Marketing assistance"]
        },
        {
          icon: /* @__PURE__ */ jsx("svg", { className: "w-5 h-5 text-amber-600", fill: "none", stroke: "currentColor", strokeWidth: "2", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" }) }),
          category: "OPPORTUNITY",
          title: "Growing Industry",
          desc: "Aviation and AI hiring continues to expand across India.",
          points: ["Rising aviation demand", "Rising AI & Data Science demand", "Long-term opportunity"]
        },
        {
          icon: /* @__PURE__ */ jsx("svg", { className: "w-5 h-5 text-amber-600", fill: "none", stroke: "currentColor", strokeWidth: "2", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" }) }),
          category: "PARTNERSHIP",
          title: "Honest, Long-Term Partnership",
          desc: "We grow with partners who care about real student outcomes.",
          points: ["Transparent processes", "Head-office guidance", "Shared growth roadmap"]
        }
      ].map((card, idx) => /* @__PURE__ */ jsxs(
        "div",
        {
          className: "bg-white rounded-3xl border border-slate-100 shadow-[0_20px_40px_rgba(15,42,74,0.06)] p-8 text-left transition-all duration-300 hover:shadow-[0_30px_60px_rgba(15,42,74,0.12)] hover:-translate-y-1 flex flex-col justify-between",
          children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center mb-5", children: card.icon }),
              /* @__PURE__ */ jsx("span", { className: "text-[10px] sm:text-xs font-bold text-[#e31e24] tracking-widest uppercase block mb-2.5 font-sans", children: card.category }),
              /* @__PURE__ */ jsx("h3", { className: "font-sans font-bold text-[#0f2a4a] text-base sm:text-lg mb-3", children: card.title }),
              /* @__PURE__ */ jsx("p", { className: "text-slate-400 font-sans font-semibold text-xs sm:text-[13px] leading-relaxed mb-6", children: card.desc })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "border-t border-slate-100/60 pt-4 space-y-3.5", children: card.points.map((point, pIdx) => /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-2.5", children: [
              /* @__PURE__ */ jsx("div", { className: "w-4 h-4 rounded-full bg-amber-50 flex items-center justify-center text-amber-600 flex-shrink-0 mt-0.5", children: /* @__PURE__ */ jsx("svg", { className: "w-2.5 h-2.5 text-amber-700", fill: "none", stroke: "currentColor", strokeWidth: "3", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M4.5 12.75l6 6 9-13.5" }) }) }),
              /* @__PURE__ */ jsx("span", { className: "text-slate-500 font-sans font-semibold text-xs sm:text-[13px] leading-snug pt-0.5", children: point })
            ] }, pIdx)) })
          ]
        },
        idx
      )) })
    ] }) }),
    false,
    /* @__PURE__ */ jsx("section", { className: "bg-[#f4f7fa] py-20 sm:py-24 border-t border-slate-100/80", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center text-center mb-16", children: [
        /* @__PURE__ */ jsx("div", { className: "inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-amber-200 bg-amber-50/60 text-[10px] sm:text-xs font-bold text-amber-700 uppercase tracking-widest mb-4", children: /* @__PURE__ */ jsx("span", { children: "End-to-End Guidance" }) }),
        /* @__PURE__ */ jsx("h2", { className: "text-3xl sm:text-4xl font-extrabold text-[#0f2a4a] leading-tight font-sans tracking-tight mb-3", children: "Franchise Support" }),
        /* @__PURE__ */ jsx("p", { className: "text-slate-500 font-semibold font-sans text-xs sm:text-sm max-w-2xl leading-relaxed", children: "From the first floor plan to your first placed batch, our head office team stays involved at every stage." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", children: [
        {
          icon: /* @__PURE__ */ jsxs("svg", { viewBox: "0 0 24 24", className: "w-6 h-6 stroke-[#1e2a4a] fill-none", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", children: [
            /* @__PURE__ */ jsx("rect", { x: "4", y: "3", width: "16", height: "18" }),
            /* @__PURE__ */ jsx("line", { x1: "9", y1: "7", x2: "9", y2: "7.01" }),
            /* @__PURE__ */ jsx("line", { x1: "15", y1: "7", x2: "15", y2: "7.01" }),
            /* @__PURE__ */ jsx("line", { x1: "9", y1: "11", x2: "9", y2: "11.01" }),
            /* @__PURE__ */ jsx("line", { x1: "15", y1: "11", x2: "15", y2: "11.01" }),
            /* @__PURE__ */ jsx("line", { x1: "9", y1: "15", x2: "9", y2: "15.01" }),
            /* @__PURE__ */ jsx("line", { x1: "15", y1: "15", x2: "15", y2: "15.01" }),
            /* @__PURE__ */ jsx("rect", { x: "10", y: "17", width: "4", height: "4" })
          ] }),
          title: "Business Setup",
          desc: "Centre planning, layout, infrastructure checklist and launch readiness."
        },
        {
          icon: /* @__PURE__ */ jsxs("svg", { viewBox: "0 0 24 24", className: "w-6 h-6 stroke-[#1e2a4a] fill-none", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", children: [
            /* @__PURE__ */ jsx("circle", { cx: "12", cy: "12", r: "3" }),
            /* @__PURE__ */ jsx("path", { d: "M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" })
          ] }),
          title: "Training & Operations",
          desc: "Day-to-day operating systems, batch planning and reporting formats."
        },
        {
          icon: /* @__PURE__ */ jsxs("svg", { viewBox: "0 0 24 24", className: "w-6 h-6 stroke-[#1e2a4a] fill-none", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", children: [
            /* @__PURE__ */ jsx("path", { d: "M2 4h6a4 4 0 0 1 4 4v12a3 3 0 0 0-3-3H2z" }),
            /* @__PURE__ */ jsx("path", { d: "M22 4h-6a4 4 0 0 0-4 4v12a3 3 0 0 1 3-3h7z" })
          ] }),
          title: "Curriculum Support",
          desc: "Our structured, industry-aligned course content for all three programs."
        },
        {
          icon: /* @__PURE__ */ jsxs("svg", { viewBox: "0 0 24 24", className: "w-6 h-6 stroke-[#1e2a4a] fill-none", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", children: [
            /* @__PURE__ */ jsx("path", { d: "M3 11v2a1 1 0 0 0 1 1h2l3.5 5V5L6 10H4a1 1 0 0 0-1 1z" }),
            /* @__PURE__ */ jsx("path", { d: "M13 8a4 4 0 0 1 0 8" }),
            /* @__PURE__ */ jsx("path", { d: "M17.5 5a8 8 0 0 1 0 14" })
          ] }),
          title: "Marketing Support",
          desc: "Campaign templates, creatives and local lead-generation guidance."
        },
        {
          icon: /* @__PURE__ */ jsxs("svg", { viewBox: "0 0 24 24", className: "w-6 h-6 stroke-[#1e2a4a] fill-none", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", children: [
            /* @__PURE__ */ jsx("path", { d: "M15 20v-1a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v1" }),
            /* @__PURE__ */ jsx("circle", { cx: "8.5", cy: "7", r: "4" }),
            /* @__PURE__ */ jsx("line", { x1: "19", y1: "8", x2: "19", y2: "14" }),
            /* @__PURE__ */ jsx("line", { x1: "16", y1: "11", x2: "22", y2: "11" })
          ] }),
          title: "Admission Guidance",
          desc: "Counselling scripts, enquiry handling and conversion best practices."
        },
        {
          icon: /* @__PURE__ */ jsxs("svg", { viewBox: "0 0 24 24", className: "w-6 h-6 stroke-[#1e2a4a] fill-none", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", children: [
            /* @__PURE__ */ jsx("rect", { x: "2", y: "7", width: "20", height: "14", rx: "2" }),
            /* @__PURE__ */ jsx("path", { d: "M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" }),
            /* @__PURE__ */ jsx("line", { x1: "2", y1: "13", x2: "22", y2: "13" })
          ] }),
          title: "Placement Process",
          desc: "Our placement workflow, employer approach and interview preparation model."
        },
        {
          icon: /* @__PURE__ */ jsxs("svg", { viewBox: "0 0 24 24", className: "w-6 h-6 stroke-[#1e2a4a] fill-none", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", children: [
            /* @__PURE__ */ jsx("path", { d: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" }),
            /* @__PURE__ */ jsx("circle", { cx: "9", cy: "7", r: "4" }),
            /* @__PURE__ */ jsx("path", { d: "M23 21v-2a4 4 0 0 0-3-3.87" }),
            /* @__PURE__ */ jsx("path", { d: "M16 3.13a4 4 0 0 1 0 7.75" })
          ] }),
          title: "Faculty Training",
          desc: "Trainer onboarding, teaching standards and grooming methodology."
        },
        {
          icon: /* @__PURE__ */ jsxs("svg", { viewBox: "0 0 24 24", className: "w-6 h-6 stroke-[#1e2a4a] fill-none", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", children: [
            /* @__PURE__ */ jsx("rect", { x: "2", y: "4", width: "14", height: "10", rx: "1" }),
            /* @__PURE__ */ jsx("line", { x1: "6", y1: "18", x2: "12", y2: "18" }),
            /* @__PURE__ */ jsx("rect", { x: "17", y: "9", width: "5", height: "9", rx: "1" })
          ] }),
          title: "Technology Support",
          desc: "Systems for enquiries, student records and batch administration."
        },
        {
          icon: /* @__PURE__ */ jsxs("svg", { viewBox: "0 0 24 24", className: "w-6 h-6 stroke-[#1e2a4a] fill-none", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", children: [
            /* @__PURE__ */ jsx("path", { d: "M12 2a10 10 0 1 0 0 20c1.1 0 2-.9 2-2 0-.5-.2-1-.5-1.3-.3-.4-.5-.8-.5-1.3 0-1.1.9-2 2-2h2.4c2 0 3.6-1.6 3.6-3.6C21 6.6 17 2 12 2z" }),
            /* @__PURE__ */ jsx("circle", { cx: "6.5", cy: "11.5", r: "1.2" }),
            /* @__PURE__ */ jsx("circle", { cx: "9.5", cy: "7.5", r: "1.2" }),
            /* @__PURE__ */ jsx("circle", { cx: "14.5", cy: "7.5", r: "1.2" }),
            /* @__PURE__ */ jsx("circle", { cx: "17.5", cy: "11.5", r: "1.2" })
          ] }),
          title: "Branding Assistance",
          desc: "Brand guidelines, signage and collateral so every centre looks the same."
        }
      ].map((card, idx) => /* @__PURE__ */ jsxs(
        "div",
        {
          className: "bg-white rounded-3xl border border-slate-100 shadow-[0_20px_40px_rgba(15,42,74,0.06)] p-8 text-left transition-all duration-300 hover:shadow-[0_30px_60px_rgba(15,42,74,0.12)] hover:-translate-y-1 flex flex-col justify-between",
          children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("div", { className: "w-14 h-14 rounded-2xl bg-[#f5e0a3] flex items-center justify-center mb-6 shadow-sm", children: card.icon }),
              /* @__PURE__ */ jsx("h3", { className: "font-sans font-bold text-[#0f2a4a] text-base sm:text-lg mb-2", children: card.title }),
              /* @__PURE__ */ jsx("p", { className: "text-slate-400 font-sans font-semibold text-xs sm:text-[13px] leading-relaxed", children: card.desc })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "w-8 h-[3px] bg-[#dfaa29] rounded-full mt-6" })
          ]
        },
        idx
      )) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "bg-[#f4f7fa] py-20 sm:py-24 border-t border-slate-100/80", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center text-center mb-16", children: [
        /* @__PURE__ */ jsx("div", { className: "inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-amber-200 bg-amber-50/60 text-[10px] sm:text-xs font-bold text-amber-700 uppercase tracking-widest mb-4", children: /* @__PURE__ */ jsx("span", { children: "Track Record" }) }),
        /* @__PURE__ */ jsx("h2", { className: "text-3xl sm:text-4xl font-extrabold text-[#0f2a4a] leading-tight font-sans tracking-tight mb-3", children: "Our Proven Success" }),
        /* @__PURE__ */ jsx("p", { className: "text-slate-500 font-semibold font-sans text-xs sm:text-sm max-w-2xl leading-relaxed", children: "Numbers that give franchise partners confidence in the brand they are investing in." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", children: [
        {
          stat: "2017",
          label: "Founded",
          sublabel: "PROVEN SINCE DAY ONE"
        },
        {
          stat: "10,000+",
          label: "Students Trained",
          sublabel: "ACROSS BRANCHES"
        },
        {
          stat: "4.6\u2605",
          label: "Google Rating",
          sublabel: "VERIFIED STUDENT REVIEWS"
        },
        {
          stat: "740+",
          label: "Reviews",
          sublabel: "REAL STUDENT FEEDBACK"
        },
        {
          stat: "3",
          label: "Branches",
          sublabel: "GHATKOPAR \u2022 ANDHERI \u2022 THANE"
        },
        {
          stat: "200+",
          label: "Hiring Partners",
          sublabel: "AVIATION & TECHNOLOGY"
        }
      ].map((card, idx) => /* @__PURE__ */ jsxs(
        "div",
        {
          className: "bg-white rounded-3xl border border-slate-100 shadow-[0_20px_40px_rgba(15,42,74,0.06)] py-10 px-8 flex flex-col items-center text-center transition-all duration-300 hover:shadow-[0_30px_60px_rgba(15,42,74,0.12)] hover:-translate-y-1",
          children: [
            /* @__PURE__ */ jsx("h3", { className: "font-sans font-extrabold text-[#0b2f61] text-4xl sm:text-[44px] leading-none mb-3 tracking-tight", children: card.stat }),
            /* @__PURE__ */ jsx("span", { className: "font-sans font-bold text-[#0f2a4a]/90 text-sm sm:text-base mb-1", children: card.label }),
            /* @__PURE__ */ jsx("span", { className: "font-sans font-extrabold text-slate-400 text-[10px] tracking-widest uppercase mb-4", children: card.sublabel }),
            /* @__PURE__ */ jsx("div", { className: "w-10 h-[3px] bg-[#dfaa29] rounded-full mt-1.5" })
          ]
        },
        idx
      )) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "bg-white py-20 sm:py-24 border-t border-slate-100/80", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center text-center mb-20", children: [
        /* @__PURE__ */ jsx("div", { className: "inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-amber-200 bg-amber-50/60 text-[10px] sm:text-xs font-bold text-amber-700 uppercase tracking-widest mb-4", children: /* @__PURE__ */ jsx("span", { children: "Simple & Transparent" }) }),
        /* @__PURE__ */ jsx("h2", { className: "text-3xl sm:text-4xl font-extrabold text-[#0f2a4a] leading-tight font-sans tracking-tight mb-3", children: "Franchise Journey" }),
        /* @__PURE__ */ jsx("p", { className: "text-slate-500 font-semibold font-sans text-xs sm:text-sm max-w-2xl leading-relaxed", children: "Six clear steps from your first enquiry to the day your centre opens its doors." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute top-[26px] left-[8%] right-[8%] h-[3px] bg-gradient-to-r from-[#0b2f61] via-[#0b2f61] to-[#dfaa29] lg:block hidden z-0" }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 relative z-10", children: [
          {
            step: "STEP 1",
            title: "Submit Franchise Enquiry",
            desc: "Share your details, city and preferred location through the form below.",
            iconImg: new URL("../assets/img/Franchiseicons1.png", globalThis._importMeta_.url).href
          },
          {
            step: "STEP 2",
            title: "Discussion With Franchise Team",
            desc: "We understand your goals and answer every question openly.",
            iconImg: new URL("../assets/img/Franchiseicons2.png", globalThis._importMeta_.url).href
          },
          {
            step: "STEP 3",
            title: "Location Evaluation",
            desc: "We assess demand, competition and suitability of your proposed location.",
            iconImg: new URL("../assets/img/Franchiseicons3.png", globalThis._importMeta_.url).href
          },
          {
            step: "STEP 4",
            title: "Business Proposal",
            desc: "You receive a clear proposal covering investment, model and returns.",
            iconImg: new URL("../assets/img/Franchiseicons4.png", globalThis._importMeta_.url).href
          },
          {
            step: "STEP 5",
            title: "Training & Setup",
            desc: "Faculty training, curriculum handover and complete centre setup support.",
            iconImg: new URL("../assets/img/Franchiseicons5.png", globalThis._importMeta_.url).href
          },
          {
            step: "STEP 6",
            title: "Launch Your Centre",
            desc: "Marketing launch, first admissions and ongoing head-office support.",
            iconImg: new URL("../assets/img/Franchiseicons6.png", globalThis._importMeta_.url).href
          }
        ].map((card, idx) => /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center", children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              src: card.iconImg,
              alt: card.title,
              className: "w-14 h-14 object-contain mb-6 relative z-10 hover:scale-110 transition-transform duration-300",
              onError: (e) => {
                e.currentTarget.src = "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=100";
              }
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-3xl border border-slate-100 shadow-[0_20px_40px_rgba(15,42,74,0.06)] p-6 flex flex-col items-center text-center transition-all duration-300 hover:shadow-[0_30px_60px_rgba(15,42,74,0.12)] hover:-translate-y-1 w-full min-h-[220px]", children: [
            /* @__PURE__ */ jsx("span", { className: "text-[10px] sm:text-xs font-bold text-[#e31e24] tracking-widest uppercase mb-3 font-sans", children: card.step }),
            /* @__PURE__ */ jsx("h3", { className: "font-sans font-bold text-[#0f2a4a] text-[13.5px] sm:text-[14.5px] mb-3 leading-snug", children: card.title }),
            /* @__PURE__ */ jsx("p", { className: "text-slate-400 font-sans font-semibold text-xs sm:text-[12.5px] leading-relaxed", children: card.desc })
          ] })
        ] }, idx)) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 lg:py-28 bg-[#f4f7f9] relative overflow-hidden", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center max-w-3xl mx-auto mb-16", children: [
        /* @__PURE__ */ jsx("div", { className: "inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-amber-200 bg-amber-50 text-[10px] sm:text-xs font-bold text-amber-800 uppercase tracking-widest mb-4", children: /* @__PURE__ */ jsx("span", { children: "ALL THREE COURSES" }) }),
        /* @__PURE__ */ jsx("h2", { className: "text-3xl sm:text-4xl font-extrabold text-[#0f2a4a] leading-tight font-sans tracking-tight mb-4", children: "Courses Offered Through Franchise" }),
        /* @__PURE__ */ jsx("p", { className: "text-slate-500 font-semibold font-sans text-xs sm:text-[14.5px] max-w-2xl mx-auto leading-relaxed", children: "Every franchise centre delivers the same three job-focused programs, with our curriculum and placement process." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-3xl p-6 lg:p-8 shadow-[0_10px_40px_rgba(15,42,74,0.05)] border border-slate-100 hover:shadow-[0_20px_50px_rgba(15,42,74,0.08)] transition-all duration-300 flex flex-col h-full", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center px-4 py-2 rounded-lg bg-[#fef3c7] text-[10px] font-bold text-[#92400e] uppercase tracking-widest mb-6 w-full border border-amber-200/60 shadow-sm relative overflow-hidden", children: [
            /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-amber-100/50 to-transparent" }),
            /* @__PURE__ */ jsx("span", { className: "relative z-10", children: "FRANCHISE PROGRAM" })
          ] }),
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-[#0f2a4a] font-sans mb-3", children: "Cabin Crew (Air Hostess) & Hospitality Management" }),
          /* @__PURE__ */ jsx("p", { className: "text-slate-500 text-[13px] leading-relaxed mb-6 font-medium", children: "In-flight service, safety, grooming and communication training for airline roles." }),
          /* @__PURE__ */ jsx("ul", { className: "space-y-3 mb-8 flex-1", children: [
            "Career Opportunities",
            "Industry Training",
            "Placement Support"
          ].map((feature, idx) => /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsx("div", { className: "w-5 h-5 rounded-full bg-amber-50 border border-amber-100 flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ jsx("svg", { className: "w-3 h-3 text-amber-500", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: "3", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M5 13l4 4L19 7" }) }) }),
            /* @__PURE__ */ jsx("span", { className: "text-[#0f2a4a] text-sm font-semibold", children: feature })
          ] }, idx)) }),
          /* @__PURE__ */ jsx("button", { onClick: handleCTA, className: "w-full bg-[#e31e24] hover:bg-[#c9181d] text-white font-bold text-sm py-3.5 px-6 rounded-full transition-colors duration-200 shadow-[0_4px_14px_rgba(227,30,36,0.25)] hover:shadow-[0_6px_20px_rgba(227,30,36,0.35)] cursor-pointer", children: "Enquire About Franchise" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-3xl p-6 lg:p-8 shadow-[0_10px_40px_rgba(15,42,74,0.05)] border border-slate-100 hover:shadow-[0_20px_50px_rgba(15,42,74,0.08)] transition-all duration-300 flex flex-col h-full", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center px-4 py-2 rounded-lg bg-[#fef3c7] text-[10px] font-bold text-[#92400e] uppercase tracking-widest mb-6 w-full border border-amber-200/60 shadow-sm relative overflow-hidden", children: [
            /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-amber-100/50 to-transparent" }),
            /* @__PURE__ */ jsx("span", { className: "relative z-10", children: "FRANCHISE PROGRAM" })
          ] }),
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-[#0f2a4a] font-sans mb-3", children: "Airport Ground Staff & Hospitality Management" }),
          /* @__PURE__ */ jsx("p", { className: "text-slate-500 text-[13px] leading-relaxed mb-6 font-medium", children: "Check-in, passenger handling and ground operations training for airport jobs." }),
          /* @__PURE__ */ jsx("ul", { className: "space-y-3 mb-8 flex-1", children: [
            "Airport Operations",
            "Customer Service",
            "Placement Support"
          ].map((feature, idx) => /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsx("div", { className: "w-5 h-5 rounded-full bg-amber-50 border border-amber-100 flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ jsx("svg", { className: "w-3 h-3 text-amber-500", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: "3", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M5 13l4 4L19 7" }) }) }),
            /* @__PURE__ */ jsx("span", { className: "text-[#0f2a4a] text-sm font-semibold", children: feature })
          ] }, idx)) }),
          /* @__PURE__ */ jsx("button", { onClick: handleCTA, className: "w-full bg-[#e31e24] hover:bg-[#c9181d] text-white font-bold text-sm py-3.5 px-6 rounded-full transition-colors duration-200 shadow-[0_4px_14px_rgba(227,30,36,0.25)] hover:shadow-[0_6px_20px_rgba(227,30,36,0.35)] cursor-pointer", children: "Enquire About Franchise" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-3xl p-6 lg:p-8 shadow-[0_10px_40px_rgba(15,42,74,0.05)] border border-slate-100 hover:shadow-[0_20px_50px_rgba(15,42,74,0.08)] transition-all duration-300 flex flex-col h-full", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center px-4 py-2 rounded-lg bg-[#fef3c7] text-[10px] font-bold text-[#92400e] uppercase tracking-widest mb-6 w-full border border-amber-200/60 shadow-sm relative overflow-hidden", children: [
            /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-amber-100/50 to-transparent" }),
            /* @__PURE__ */ jsx("span", { className: "relative z-10", children: "FRANCHISE PROGRAM" })
          ] }),
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-[#0f2a4a] font-sans mb-3", children: "AI & Data Science" }),
          /* @__PURE__ */ jsx("p", { className: "text-slate-500 text-[13px] leading-relaxed mb-6 font-medium", children: "Practical AI and analytics training with real projects and interview preparation." }),
          /* @__PURE__ */ jsx("ul", { className: "space-y-3 mb-8 flex-1", children: [
            "Artificial Intelligence",
            "Programming",
            "Machine Learning",
            "Industry Projects"
          ].map((feature, idx) => /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsx("div", { className: "w-5 h-5 rounded-full bg-amber-50 border border-amber-100 flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ jsx("svg", { className: "w-3 h-3 text-amber-500", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: "3", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M5 13l4 4L19 7" }) }) }),
            /* @__PURE__ */ jsx("span", { className: "text-[#0f2a4a] text-sm font-semibold", children: feature })
          ] }, idx)) }),
          /* @__PURE__ */ jsx("button", { onClick: handleCTA, className: "w-full bg-[#e31e24] hover:bg-[#c9181d] text-white font-bold text-sm py-3.5 px-6 rounded-full transition-colors duration-200 shadow-[0_4px_14px_rgba(227,30,36,0.25)] hover:shadow-[0_6px_20px_rgba(227,30,36,0.35)] cursor-pointer", children: "Enquire About Franchise" })
        ] })
      ] })
    ] }) }),
    false,
    /* @__PURE__ */ jsx("section", { id: "franchise-enquiry", className: "py-20 lg:py-28 bg-[#F1F4F9] relative", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center max-w-3xl mx-auto mb-12", children: [
        /* @__PURE__ */ jsx("div", { className: "inline-flex items-center px-4 py-1.5 rounded-full border border-amber-200 bg-[#fef9c3] text-[10px] sm:text-xs font-bold text-[#92400e] uppercase tracking-widest mb-4", children: /* @__PURE__ */ jsx("span", { children: "FRANCHISE ENQUIRY" }) }),
        /* @__PURE__ */ jsx("h2", { className: "text-3xl sm:text-4xl font-extrabold text-[#0f2a4a] leading-tight font-sans tracking-tight mb-4", children: "Enquire About a Franchise" }),
        /* @__PURE__ */ jsx("p", { className: "text-slate-500 font-semibold font-sans text-sm sm:text-[15px] max-w-2xl mx-auto leading-relaxed", children: "Share your details and preferred location. Our franchise team will discuss the opportunity with you directly." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch", children: [
        /* @__PURE__ */ jsx("div", { className: "lg:col-span-7 bg-white rounded-3xl p-6 md:p-10 shadow-[0_10px_40px_rgba(15,42,74,0.05)] border border-slate-100 flex flex-col justify-between", children: /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "space-y-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
            /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsx("label", { className: "text-[11px] font-bold text-[#0f2a4a] uppercase tracking-wider", children: "Name" }),
              /* @__PURE__ */ jsx("input", { type: "text", required: true, value: name, onChange: (e) => setName(e.target.value), placeholder: "Your full name", className: "w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-amber-400 focus:ring-4 focus:ring-amber-500/10 transition-all outline-none text-[13px] text-slate-700 placeholder:text-slate-400 bg-white" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsx("label", { className: "text-[11px] font-bold text-[#0f2a4a] uppercase tracking-wider", children: "Mobile" }),
              /* @__PURE__ */ jsx("input", { type: "tel", required: true, pattern: "[0-9]{10}", maxLength: 10, value: mobile, onChange: (e) => setMobile(e.target.value.replace(/\D/g, "")), placeholder: "10-digit mobile number", className: "w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-amber-400 focus:ring-4 focus:ring-amber-500/10 transition-all outline-none text-[13px] text-slate-700 placeholder:text-slate-400 bg-white" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsx("label", { className: "text-[11px] font-bold text-[#0f2a4a] uppercase tracking-wider", children: "Email" }),
              /* @__PURE__ */ jsx("input", { type: "email", required: true, value: email, onChange: (e) => setEmail(e.target.value), placeholder: "you@example.com", className: "w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-amber-400 focus:ring-4 focus:ring-amber-500/10 transition-all outline-none text-[13px] text-slate-700 placeholder:text-slate-400 bg-white" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsx("label", { className: "text-[11px] font-bold text-[#0f2a4a] uppercase tracking-wider", children: "City" }),
              /* @__PURE__ */ jsx("input", { type: "text", required: true, value: city, onChange: (e) => setCity(e.target.value), placeholder: "e.g. Mumbai", className: "w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-amber-400 focus:ring-4 focus:ring-amber-500/10 transition-all outline-none text-[13px] text-slate-700 placeholder:text-slate-400 bg-white" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsx("label", { className: "text-[11px] font-bold text-[#0f2a4a] uppercase tracking-wider", children: "Preferred Location" }),
              /* @__PURE__ */ jsx("input", { type: "text", required: true, value: prefLocation, onChange: (e) => setPrefLocation(e.target.value), placeholder: "Area or locality for the centre", className: "w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-amber-400 focus:ring-4 focus:ring-amber-500/10 transition-all outline-none text-[13px] text-slate-700 placeholder:text-slate-400 bg-white" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsx("label", { className: "text-[11px] font-bold text-[#0f2a4a] uppercase tracking-wider", children: "Business Experience" }),
              /* @__PURE__ */ jsxs("select", { value: businessExp, onChange: (e) => setBusinessExp(e.target.value), className: "w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-amber-400 focus:ring-4 focus:ring-amber-500/10 transition-all outline-none text-[13px] text-slate-700 bg-white", children: [
                /* @__PURE__ */ jsx("option", { value: "", children: "No business experience" }),
                /* @__PURE__ */ jsx("option", { value: "1-3", children: "1-3 Years" }),
                /* @__PURE__ */ jsx("option", { value: "3-5", children: "3-5 Years" }),
                /* @__PURE__ */ jsx("option", { value: "5+", children: "5+ Years" })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsx("label", { className: "text-[11px] font-bold text-[#0f2a4a] uppercase tracking-wider", children: "Investment Range" }),
              /* @__PURE__ */ jsxs("select", { value: investment, onChange: (e) => setInvestment(e.target.value), className: "w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-amber-400 focus:ring-4 focus:ring-amber-500/10 transition-all outline-none text-[13px] text-slate-700 bg-white", children: [
                /* @__PURE__ */ jsx("option", { value: "", children: "Below \u20B910 Lakh" }),
                /* @__PURE__ */ jsx("option", { value: "10-20", children: "\u20B910 Lakh - \u20B920 Lakh" }),
                /* @__PURE__ */ jsx("option", { value: "20+", children: "Above \u20B920 Lakh" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-2 mt-2", children: [
            /* @__PURE__ */ jsx("label", { className: "text-[11px] font-bold text-[#0f2a4a] uppercase tracking-wider", children: "Message" }),
            /* @__PURE__ */ jsx("textarea", { rows: 4, value: message, onChange: (e) => setMessage(e.target.value), placeholder: "Tell us about your background and why you want to partner with Amigo Academy.", className: "w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-amber-400 focus:ring-4 focus:ring-amber-500/10 transition-all outline-none text-[13px] text-slate-700 placeholder:text-slate-400 bg-white resize-none" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "pt-4", children: [
            /* @__PURE__ */ jsxs("button", { type: "submit", disabled: loading, className: "w-full bg-[#e31e24] hover:bg-[#c9181d] text-white font-bold text-[15px] py-4 px-6 rounded-full transition-colors duration-200 shadow-[0_4px_14px_rgba(227,30,36,0.25)] hover:shadow-[0_6px_20px_rgba(227,30,36,0.35)] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50", children: [
              /* @__PURE__ */ jsx("svg", { className: "w-5 h-5", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: "2", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 19l9 2-9-18-9 18 9-2zm0 0v-8" }) }),
              "Enquire About Franchise"
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-2 mt-4", children: [
              /* @__PURE__ */ jsx("svg", { className: "w-4 h-4 text-emerald-500", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: "2", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" }) }),
              /* @__PURE__ */ jsx("span", { className: "text-xs font-semibold text-slate-500", children: "Our franchise team will contact you within one business day." })
            ] })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxs("div", { className: "lg:col-span-5 bg-gradient-to-b from-[#0e3c88] via-[#0b357b] to-[#072d6b] rounded-[36px] p-8 md:p-10 shadow-2xl relative overflow-hidden text-white border border-blue-400/20 flex flex-col justify-between h-full", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-white/10 to-transparent opacity-50 pointer-events-none" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { className: "text-3xl font-extrabold text-white mb-3 tracking-tight relative z-10", children: "How to apply" }),
            /* @__PURE__ */ jsxs("p", { className: "text-blue-100/90 text-base leading-relaxed mb-8 relative z-10 max-w-md", children: [
              "Prefer to talk first? ",
              /* @__PURE__ */ jsx("br", {}),
              " Call or WhatsApp +919987588932 and select \u201CFranchise\u201D as your enquiry type."
            ] }),
            /* @__PURE__ */ jsx("ul", { className: "space-y-4.5 relative z-10", children: [
              "Submit the franchise enquiry form with your details and preferred location",
              "Our franchise team reaches out to discuss the opportunity and answer questions",
              "We share the details and \u2014 if it's a fit \u2014 the next steps to get started",
              "We review the location and basic requirements to see if the opportunity is a good fit",
              "We discuss the franchise model, investment, setup and support in detail",
              "Once everything is agreed, we complete the documentation and franchise agreement",
              "We help you set up the academy, including branding, infrastructure and operations",
              "Our team provides training and guidance to help your staff get ready",
              "Your Amigo Academy branch is launched with continued support from our team"
            ].map((item, idx) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-4", children: [
              /* @__PURE__ */ jsx("div", { className: "mt-1 flex-shrink-0", children: /* @__PURE__ */ jsx("div", { className: "w-5 h-5 rounded-full border border-amber-400/90 flex items-center justify-center bg-amber-400/10", children: /* @__PURE__ */ jsx("svg", { className: "w-3.5 h-3.5 text-amber-400", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: "2.5", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M5 13l4 4L19 7" }) }) }) }),
              /* @__PURE__ */ jsx("span", { className: "text-blue-50/95 text-[15px] font-normal leading-relaxed", children: item })
            ] }, idx)) })
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 lg:py-28 bg-[#f4f7f9] relative", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-16", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-3xl sm:text-4xl font-extrabold text-[#0f2a4a] leading-tight font-sans tracking-tight mb-4", children: "Frequently Asked Questions" }),
        /* @__PURE__ */ jsx("p", { className: "text-slate-500 font-medium font-sans text-sm sm:text-[15px] max-w-2xl mx-auto", children: "Got questions? We've got answers. Find out everything you need to know about our courses." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "space-y-4 mb-16", children: [
        {
          id: 1,
          question: "What kind of partner is Amigo Academy looking for?",
          answer: "We're looking for committed, growth-oriented partners who share our focus on quality education, student success, and building a trusted local presence."
        },
        {
          id: 2,
          question: "Which courses can a franchise offer?",
          answer: "Our franchises offer three core programs: Cabin Crew (Air Hostess) & Hospitality Management, Airport Ground Staff & Hospitality Management, and AI & Data Science, all designed with industry-relevant curriculum."
        },
        {
          id: 3,
          question: "How do I start a franchise enquiry?",
          answer: "Simply fill out the enquiry form above, and our franchise development team will get in touch with you within one business day to discuss the opportunity."
        },
        {
          id: 4,
          question: "Is Amigo Academy certified?",
          answer: "Yes, our programs and curriculum meet industry standards and we hold relevant accreditations that validate the quality of our training."
        }
      ].map((faq) => {
        const isOpen = openFaq === faq.id;
        return /* @__PURE__ */ jsxs(
          "div",
          {
            className: `bg-white border transition-all duration-300 rounded-xl cursor-pointer ${isOpen ? "border-slate-200 shadow-md p-6" : "border-slate-100 shadow-sm hover:shadow-md p-5"}`,
            onClick: () => setOpenFaq(isOpen ? null : faq.id),
            children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between gap-4", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
                  /* @__PURE__ */ jsx("div", { className: `w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold transition-colors ${isOpen ? "bg-[#1e40af] text-white" : "bg-[#eff6ff] text-[#1e40af]"}`, children: faq.id }),
                  /* @__PURE__ */ jsx("h4", { className: `text-[15px] sm:text-base font-bold transition-colors ${isOpen ? "text-[#0f2a4a]" : "text-[#1e293b]"}`, children: faq.question })
                ] }),
                /* @__PURE__ */ jsx("div", { className: "flex-shrink-0", children: isOpen ? /* @__PURE__ */ jsx("svg", { className: "w-5 h-5 text-[#1e40af]", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: "2.5", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M5 15l7-7 7 7" }) }) : /* @__PURE__ */ jsx("svg", { className: "w-5 h-5 text-[#1e40af]", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: "2.5", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M19 9l-7 7-7-7" }) }) })
              ] }),
              /* @__PURE__ */ jsx(
                "div",
                {
                  className: `grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100 mt-6" : "grid-rows-[0fr] opacity-0 mt-0"}`,
                  children: /* @__PURE__ */ jsx("div", { className: "overflow-hidden", children: /* @__PURE__ */ jsx("div", { className: "bg-[#f8fafc] border-l-4 border-[#1e40af] p-5 rounded-r-lg", children: /* @__PURE__ */ jsx("p", { className: "text-slate-500 text-[14px] leading-relaxed", children: faq.answer }) }) })
                }
              )
            ]
          },
          faq.id
        );
      }) }),
      /* @__PURE__ */ jsx("div", { className: "mt-10 text-center", children: /* @__PURE__ */ jsxs(
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
    ] }) })
  ] });
}
const SplitComponent = Franchise;

export { SplitComponent as component };
//# sourceMappingURL=franchise-DQW7Dafp.mjs.map
