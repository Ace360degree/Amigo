import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { useState, useEffect, useMemo } from 'react';
import { useParams, useNavigate, Link } from '@tanstack/react-router';
import Swal from 'sweetalert2';
import { S as SEO } from './SEO-DZzBR_S9.mjs';
import { a as fetchSEOPageBySlug, s as submitCounsellorForm } from './router-CBeBCufh.mjs';

const course1Img = "/assets/cabin-crew-kgzB6WNJ.png";
const course2Img = "/assets/airport-BxJebqGl.png";
const course3Img = "/assets/ai-D-KgBOX1.png";
const train1Img = "/assets/train1-CzR29Zrk.png";
const train2Img = "/assets/train2-BjxmB6do.png";
const train3Img = "/assets/train3-B9xfC7Aa.png";
const train4Img = "/assets/train4-BmAT6XHM.png";
const train5Img = "/assets/train5-Cpn5dO5x.png";
const decodeHTMLEntities = (text) => {
  const textArea = document.createElement("textarea");
  textArea.innerHTML = text;
  return textArea.value;
};
function FAQAccordionItem({ index, question, answer }) {
  const [isOpen, setIsOpen] = useState(index === 0);
  return /* @__PURE__ */ jsxs("div", { className: `bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.02)] border transition-all duration-300 ${isOpen ? "border-[#1C3E8A] shadow-[0_8px_30px_rgba(28,62,138,0.06)]" : "border-slate-100"}`, children: [
    /* @__PURE__ */ jsxs(
      "button",
      {
        onClick: () => setIsOpen(!isOpen),
        className: "w-full flex items-center justify-between px-6 py-5 text-left cursor-pointer group focus:outline-none",
        children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 pr-4", children: [
            /* @__PURE__ */ jsx("div", { className: `w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0 transition-colors ${isOpen ? "bg-[#1C3E8A] text-white" : "bg-[#eff6ff] text-[#1C3E8A]"}`, children: index + 1 }),
            /* @__PURE__ */ jsx("span", { className: "text-sm sm:text-base font-sans font-bold text-[#112A46] leading-snug", children: question })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "text-slate-400 shrink-0", children: /* @__PURE__ */ jsx(
            "svg",
            {
              className: `w-4 h-4 text-[#1C3E8A] transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`,
              fill: "none",
              viewBox: "0 0 24 24",
              stroke: "currentColor",
              strokeWidth: 2.5,
              children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M19 9l-7 7-7-7" })
            }
          ) })
        ]
      }
    ),
    isOpen && /* @__PURE__ */ jsx("div", { className: "px-6 pb-6 pt-1", children: /* @__PURE__ */ jsx("div", { className: "bg-[#f8fafc] border-l-4 border-[#1C3E8A] p-4 rounded-r-xl", children: /* @__PURE__ */ jsx("p", { className: "text-slate-600 font-sans text-xs sm:text-sm leading-relaxed font-semibold", children: answer }) }) })
  ] });
}
function MumbaiSEODetail() {
  var _a, _b;
  const { slug } = useParams({ strict: false });
  const navigate = useNavigate();
  const [seoPage, setSeoPage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    course: ""
  });
  const [formSubmitting, setFormSubmitting] = useState(false);
  useEffect(() => {
    if (slug) {
      setLoading(true);
      fetchSEOPageBySlug(slug).then((data) => {
        setSeoPage(data);
        setLoading(false);
      }).catch((err) => {
        console.error("Error loading SEO page:", err);
        setLoading(false);
      });
    } else {
      setLoading(false);
    }
  }, [slug]);
  const locationDefaults = useMemo(() => {
    const rawSlug = slug || "";
    const cleanSlug = rawSlug.toLowerCase().replace(/\/$/, "");
    let area = "Kurla";
    if (cleanSlug) {
      if (cleanSlug.includes("powai")) area = "Powai";
      else if (cleanSlug.includes("mulund")) area = "Mulund";
      else if (cleanSlug.includes("bhandup")) area = "Bhandup";
      else if (cleanSlug.includes("vikhroli")) area = "Vikhroli";
      else if (cleanSlug.includes("kanjurmarg")) area = "Kanjurmarg";
      else if (cleanSlug.includes("chembur")) area = "Chembur";
      else if (cleanSlug.includes("kurla")) area = "Kurla";
      else {
        const parts = cleanSlug.split("-");
        const nearIndex = parts.indexOf("near");
        if (nearIndex !== -1 && nearIndex < parts.length - 1) {
          area = parts.slice(nearIndex + 1).map((p) => p.charAt(0).toUpperCase() + p.slice(1)).join(" ");
        } else {
          area = parts.map((p) => p.charAt(0).toUpperCase() + p.slice(1)).join(" ");
        }
      }
    }
    let branchName = "Ghatkopar";
    let branchAddress = "107 & 108, Sai Infotech, Patel Chowk, Opposite Railway Station, Pant Nagar, Ghatkopar East, Mumbai, Maharashtra \u2013 400077";
    let branchMapSrc = "https://maps.google.com/maps?q=Amigo%20Academy%20Ghatkopar%20Sai%20Infotech%20Mumbai&t=&z=16&ie=UTF8&iwloc=&output=embed";
    let branchMapHref = "https://maps.google.com/maps?q=Amigo%20Academy%20Ghatkopar%20Sai%20Infotech%20Mumbai";
    let branchLink = "/ghatkopar-branch";
    let branchPhone = "+919987588932";
    const lowerArea = area.toLowerCase();
    const lowerSlug = cleanSlug;
    if (lowerArea.includes("thane") || lowerSlug.includes("thane") || lowerArea.includes("kalyan") || lowerSlug.includes("kalyan") || lowerArea.includes("dombivli") || lowerSlug.includes("dombivli") || lowerArea.includes("bhiwandi") || lowerSlug.includes("bhiwandi") || lowerArea.includes("kalwa") || lowerSlug.includes("kalwa") || lowerArea.includes("mumbra") || lowerSlug.includes("mumbra") || lowerArea.includes("diwa") || lowerSlug.includes("diva")) {
      branchName = "Thane";
      branchAddress = "A204, 2nd Floor, Thakor Niwas CHS, Above Tip Top Mithaiwala, Jambli Naka, Thane West, Thane, Maharashtra 400602";
      branchMapSrc = "https://maps.google.com/maps?q=Thakor+Niwas+Jambli+Naka+Thane+West+Maharashtra&t=&z=16&ie=UTF8&iwloc=&output=embed";
      branchMapHref = "https://maps.google.com/?q=Thakor+Niwas+Jambli+Naka+Thane+West+Maharashtra";
      branchLink = "/thane-branch";
    } else if (lowerArea.includes("andheri") || lowerSlug.includes("andheri") || lowerArea.includes("bandra") || lowerSlug.includes("bandra") || lowerArea.includes("borivali") || lowerSlug.includes("borivali") || lowerArea.includes("kandivali") || lowerSlug.includes("kandivali") || lowerArea.includes("malad") || lowerSlug.includes("malad") || lowerArea.includes("goregaon") || lowerSlug.includes("goregaon") || lowerArea.includes("juhu") || lowerSlug.includes("juhu") || lowerArea.includes("vile parle") || lowerSlug.includes("vile-parle") || lowerArea.includes("santacruz") || lowerSlug.includes("santacruz") || lowerArea.includes("dahisar") || lowerSlug.includes("dahisar") || lowerArea.includes("jogeshwari") || lowerSlug.includes("jogeshwari")) {
      branchName = "Andheri";
      branchAddress = "902, 9th Floor, Time Chambers, Swami Vivekanand Rd, Andheri West, Mumbai, Maharashtra 400058";
      branchMapSrc = "https://maps.google.com/maps?q=Time+Chambers+Swami+Vivekanand+Road+Andheri+West+Mumbai&t=&z=16&ie=UTF8&iwloc=&output=embed";
      branchMapHref = "https://maps.google.com/?q=Time+Chambers+Swami+Vivekanand+Road+Andheri+West+Mumbai";
      branchLink = "/andheri-branch";
    }
    let travelTimeText = `2 Stops / ~5 Mins from ${area} (Central Line)`;
    let travelTimeShort = "About 5 Minutes";
    let areasCovered = "Kurla East, Kurla West, Nehru Nagar, Kamani, Kalina, Chunabhatti";
    let reachTrain = `${area} to ${branchName} station is easily accessible via local train. Our centre is located close to the station for easy commuting.`;
    let reachMetro = `${branchName} branch is conveniently connected via local metro and transport hubs.`;
    let reachRoad = `BEST buses and auto-rickshaws connect ${area} to our ${branchName} branch throughout the day.`;
    let reachExtra = `Students from ${area} can seamlessly reach our ${branchName} branch within minutes.`;
    if (area === "Powai") {
      travelTimeText = "JVLR / LBS Marg connection (~15 Mins)";
      travelTimeShort = "About 15 Minutes";
      areasCovered = "Hiranandani, Powai Lake, Chandivali, IIT Bombay, Rambaug";
      reachTrain = "Take a local Central Line train from Kanjurmarg or Vikhroli nearby to Ghatkopar. (Approx 5 mins commute).";
      reachMetro = "Take Metro Line 1 from Saki Naka or Marol to Ghatkopar. The journey takes under 10 minutes.";
      reachRoad = "Auto or cab rides via JVLR and LBS Marg take roughly 15 to 20 minutes outside peak traffic hours.";
      reachExtra = "BEST bus routes link Hiranandani Powai directly to Ghatkopar East regularly.";
    } else if (area === "Mulund") {
      travelTimeText = "5 Stops / ~12 Mins from Mulund (Central Line)";
      travelTimeShort = "About 12 Minutes";
      areasCovered = "Mulund East, Mulund West, Devidayal Road, LBS Marg, Nahur";
      reachTrain = "Take a local Central Line train from Mulund to Ghatkopar. (Approx 12 mins commute).";
      reachMetro = "Mulund has direct connectivity via EEH to the Eastern Freeway or Mumbai Metro Line 4 connection hubs.";
      reachRoad = "Drive via Eastern Express Highway or LBS Marg. (Approx 20 mins travel time).";
      reachExtra = "Fast local trains can further reduce travel time during peak morning and evening hours.";
    } else if (area === "Bhandup") {
      travelTimeText = "3 Stops / ~7 Mins from Bhandup (Central Line)";
      travelTimeShort = "About 7 Minutes";
      areasCovered = "Bhandup East, Bhandup West, LBS Marg, Tembhipada, Juhu Nagar";
      reachTrain = "Take a local Central Line train from Bhandup to Ghatkopar. (Approx 7 mins travel time).";
      reachMetro = "Use the Metro Line 4 corridor connections from LBS Marg to travel smoothly.";
      reachRoad = "Drive via LBS Marg or EEH to Ghatkopar East. (Approx 15 mins travel time).";
      reachExtra = "BEST buses run throughout LBS Marg connecting Bhandup to Ghatkopar East regularly.";
    }
    return {
      area,
      branchName,
      branchAddress,
      branchMapSrc,
      branchMapHref,
      branchLink,
      branchPhone,
      travelTimeText,
      travelTimeShort,
      areasCovered,
      reachTrain,
      reachMetro,
      reachRoad,
      reachExtra
    };
  }, [slug]);
  const parsedContent = useMemo(() => {
    var _a2, _b2;
    if (!seoPage || !seoPage.content || !seoPage.content.rendered) {
      return null;
    }
    const parser = new DOMParser();
    const doc = parser.parseFromString(seoPage.content.rendered, "text/html");
    const paragraphs = Array.from(doc.querySelectorAll("p")).map((p) => {
      var _a3;
      return ((_a3 = p.textContent) == null ? void 0 : _a3.trim()) || "";
    }).filter((t) => t.length > 0);
    let heroText = "";
    let quickAnswerText = "";
    if (paragraphs.length === 1) {
      quickAnswerText = paragraphs[0];
    } else if (paragraphs.length >= 2) {
      heroText = paragraphs[0];
      quickAnswerText = paragraphs[1];
    }
    const tableData = [];
    const table = doc.querySelector("table");
    if (table) {
      const rows = Array.from(table.querySelectorAll("tr"));
      rows.forEach((row) => {
        var _a3, _b3;
        const cells = Array.from(row.querySelectorAll("td, th"));
        if (cells.length >= 2) {
          tableData.push({
            label: ((_a3 = cells[0].textContent) == null ? void 0 : _a3.trim()) || "",
            value: ((_b3 = cells[1].textContent) == null ? void 0 : _b3.trim()) || ""
          });
        }
      });
    }
    let cabinCrewTitle = "";
    let cabinCrewDesc = "";
    let groundStaffTitle = "";
    let groundStaffDesc = "";
    let aiTitle = "";
    let aiDesc = "";
    const headings = Array.from(doc.querySelectorAll("h2, h3"));
    headings.forEach((heading) => {
      var _a3, _b3, _c, _d;
      const text = ((_a3 = heading.textContent) == null ? void 0 : _a3.toLowerCase()) || "";
      let nextSibling = heading.nextElementSibling;
      let descText = "";
      while (nextSibling && nextSibling.tagName === "P") {
        descText += nextSibling.textContent + " ";
        nextSibling = nextSibling.nextElementSibling;
      }
      descText = descText.trim();
      if (text.includes("cabin crew") || text.includes("air hostess")) {
        cabinCrewTitle = ((_b3 = heading.textContent) == null ? void 0 : _b3.trim()) || "";
        cabinCrewDesc = descText;
      } else if (text.includes("ground staff")) {
        groundStaffTitle = ((_c = heading.textContent) == null ? void 0 : _c.trim()) || "";
        groundStaffDesc = descText;
      } else if (text.includes("ai & data science") || text.includes("data science") || text.includes("ai course")) {
        aiTitle = ((_d = heading.textContent) == null ? void 0 : _d.trim()) || "";
        aiDesc = descText;
      }
    });
    const transitItems = [];
    const transitHeading = headings.find((h) => {
      var _a3;
      return (_a3 = h.textContent) == null ? void 0 : _a3.toLowerCase().includes("reach");
    });
    if (transitHeading) {
      let currentEl = transitHeading.nextElementSibling;
      while (currentEl) {
        const isNextHeading = ["H1", "H2", "H3", "H4"].includes(currentEl.tagName);
        if (isNextHeading) break;
        const text = ((_a2 = currentEl.textContent) == null ? void 0 : _a2.trim()) || "";
        if (currentEl.tagName === "UL" || currentEl.tagName === "OL") {
          const items = Array.from(currentEl.querySelectorAll("li"));
          items.forEach((li) => {
            var _a3;
            const liText = ((_a3 = li.textContent) == null ? void 0 : _a3.trim()) || "";
            if (liText.length > 0) {
              const colonIndex = liText.indexOf(":");
              if (colonIndex !== -1) {
                transitItems.push({
                  title: liText.substring(0, colonIndex).trim(),
                  desc: liText.substring(colonIndex + 1).trim()
                });
              } else {
                transitItems.push({
                  title: "Route Details",
                  desc: liText
                });
              }
            }
          });
        } else if (currentEl.tagName === "P") {
          if (text.length > 0) {
            const colonIndex = text.indexOf(":");
            if (colonIndex !== -1) {
              transitItems.push({
                title: text.substring(0, colonIndex).trim(),
                desc: text.substring(colonIndex + 1).trim()
              });
            } else {
              transitItems.push({
                title: "Route Details",
                desc: text
              });
            }
          }
        }
        currentEl = currentEl.nextElementSibling;
      }
    }
    let whyConsiderText = "";
    const whyHeading = headings.find((h) => {
      var _a3;
      return (_a3 = h.textContent) == null ? void 0 : _a3.toLowerCase().includes("why consider");
    });
    if (whyHeading) {
      let nextEl = whyHeading.nextElementSibling;
      while (nextEl && nextEl.tagName === "P") {
        whyConsiderText += nextEl.textContent + " ";
        nextEl = nextEl.nextElementSibling;
      }
      whyConsiderText = whyConsiderText.trim();
    }
    const faqData = [];
    const faqHeading = headings.find((h) => {
      var _a3, _b3;
      return ((_a3 = h.textContent) == null ? void 0 : _a3.toLowerCase().includes("faq")) || ((_b3 = h.textContent) == null ? void 0 : _b3.toLowerCase().includes("questions"));
    });
    if (faqHeading) {
      let currentEl = faqHeading.nextElementSibling;
      let currentQ = "";
      let currentA = "";
      while (currentEl) {
        const text = ((_b2 = currentEl.textContent) == null ? void 0 : _b2.trim()) || "";
        const isNextHeading = ["H1", "H2", "H3", "H4"].includes(currentEl.tagName);
        if (isNextHeading) break;
        if (text.startsWith("Q:") || text.startsWith("Q.") || text.toLowerCase().startsWith("question")) {
          if (currentQ && currentA) {
            faqData.push({ question: currentQ, answer: currentA });
            currentA = "";
          }
          currentQ = text.replace(/^Q\s*[:.-]\s*/i, "").trim();
        } else if (text.startsWith("A:") || text.startsWith("A.") || text.toLowerCase().startsWith("answer")) {
          currentA = text.replace(/^A\s*[:.-]\s*/i, "").trim();
        } else if (currentQ && !currentA) {
          currentA = text;
        } else if (currentQ && currentA) {
          currentA += " " + text;
        }
        currentEl = currentEl.nextElementSibling;
      }
      if (currentQ && currentA) {
        faqData.push({ question: currentQ, answer: currentA });
      }
    }
    return {
      heroText,
      quickAnswerText,
      tableData,
      cabinCrewTitle,
      cabinCrewDesc,
      groundStaffTitle,
      groundStaffDesc,
      aiTitle,
      aiDesc,
      transitItems,
      whyConsiderText,
      faqData
    };
  }, [seoPage]);
  const locationInfo = useMemo(() => {
    return {
      area: locationDefaults.area,
      branchName: locationDefaults.branchName,
      branchAddress: locationDefaults.branchAddress,
      branchMapSrc: locationDefaults.branchMapSrc,
      branchMapHref: locationDefaults.branchMapHref,
      branchLink: locationDefaults.branchLink,
      branchPhone: locationDefaults.branchPhone,
      heroText: (parsedContent == null ? void 0 : parsedContent.heroText) || `Amigo Academy's ${locationDefaults.branchName} centre is easily accessible from ${locationDefaults.area}. Government certified aviation training and industry-oriented AI & Data Science courses with practical training and placement support.`,
      quickAnswerText: (parsedContent == null ? void 0 : parsedContent.quickAnswerText) || `The nearest Amigo Academy centre is our ${locationDefaults.branchName} branch, convenient for students from ${locationDefaults.area}.`,
      travelTimeText: locationDefaults.travelTimeText,
      travelTimeShort: locationDefaults.travelTimeShort,
      areasCovered: locationDefaults.areasCovered,
      cabinCrewTitle: (parsedContent == null ? void 0 : parsedContent.cabinCrewTitle) || `Air Hostess Course in ${locationDefaults.area}`,
      cabinCrewDesc: (parsedContent == null ? void 0 : parsedContent.cabinCrewDesc) || `Students from ${locationDefaults.area} take our Air Hostess / Cabin Crew course at the ${locationDefaults.branchName} centre. It runs six months and is Maharashtra Government Certified, covering grooming, communication, in-flight service, safety procedures and interview preparation.`,
      groundStaffTitle: (parsedContent == null ? void 0 : parsedContent.groundStaffTitle) || `Airport Ground Staff Course in ${locationDefaults.area}`,
      groundStaffDesc: (parsedContent == null ? void 0 : parsedContent.groundStaffDesc) || `The Airport Ground Staff course appeals to ${locationDefaults.area} students who want to start earning sooner. Six months, Maharashtra Government Certified, covering check-in, passenger handling, baggage services and airport operations.`,
      aiTitle: (parsedContent == null ? void 0 : parsedContent.aiTitle) || `AI & Data Science Course in ${locationDefaults.area}`,
      aiDesc: (parsedContent == null ? void 0 : parsedContent.aiDesc) || `Our AI & Data Science course is the longest of the three at twelve months, covering Python, machine learning, data visualisation and Generative AI with live projects. It is industry-oriented professional training, not a government-certified qualification.`,
      transitItems: (parsedContent == null ? void 0 : parsedContent.transitItems) && parsedContent.transitItems.length > 0 ? parsedContent.transitItems : [
        { title: "By Train", desc: locationDefaults.reachTrain },
        { title: "By Metro", desc: locationDefaults.reachMetro },
        { title: "By Road", desc: locationDefaults.reachRoad },
        ...locationDefaults.reachExtra ? [{ title: "Route Junction", desc: locationDefaults.reachExtra }] : []
      ],
      whyConsiderText: (parsedContent == null ? void 0 : parsedContent.whyConsiderText) || "Maharashtra Government Certified aviation courses ensuring your qualification holds weight across the industry. Practical training with mock cabins, grooming sessions, and live projects for hands-on experience.",
      faqs: [
        ...(parsedContent == null ? void 0 : parsedContent.faqData) && parsedContent.faqData.length > 0 ? parsedContent.faqData : [
          {
            question: `Is there an Amigo Academy branch in ${locationDefaults.area}?`,
            answer: `Amigo Academy does not have a centre directly in ${locationDefaults.area}. Our nearest branch is ${locationDefaults.branchName}, and that is where students from ${locationDefaults.area} attend.`
          },
          {
            question: `How long does it take to reach the ${locationDefaults.branchName} branch from ${locationDefaults.area}?`,
            answer: `Our ${locationDefaults.branchName} centre is conveniently connected from ${locationDefaults.area} by train, bus, or road.`
          },
          {
            question: `Can I attend classes if I work in ${locationDefaults.area} during the day?`,
            answer: `Yes. Our ${locationDefaults.branchName} branch runs morning, afternoon and evening batches. Classes are two hours a day, five days a week, so an evening batch works alongside a job or another course. Speak to a counsellor about which batch has seats.`
          }
        ],
        {
          question: "What is the height requirement for cabin crew?",
          answer: "Airline cabin crew requirements vary by airline and by recruitment drive. Some airlines specify a minimum height; others use reach or other physical criteria. Amigo Academy's admission criteria are separate from an airline's final hiring criteria \u2014 we give you an honest assessment during counselling and tell you which airline requirements to target. Our cabin crew height and eligibility guide has the current detail. Why the numbers are not on this page: specific airline height figures would need re-verifying across fourteen area pages every time a carrier changes its requirements. They live in the dedicated height guide instead, where they can be sourced and dated once. The locked dual-standard rule \u2014 state both the airline standard and Amigo's own criteria, never imply the lower figure guarantees selection \u2014 still governs that guide."
        },
        {
          question: "What salary can I expect after training?",
          answer: "Starting salaries vary considerably by employer, role, location and experience, and differ across the three programmes. Our salary guides carry current indicative ranges for cabin crew, airport ground staff and AI & Data Science roles. Same reasoning as the height answer: quoting figures on fourteen area pages creates fourteen places to update. The ranges belong on the dedicated salary guides, which the area page links to. It also keeps the area page doing its actual job \u2014 location, course, commute, decision \u2014 rather than becoming a second salary guide."
        },
        {
          question: "Do you provide placement assistance?",
          answer: "Yes. We provide dedicated placement support including mock interviews, resume building and introductions to hiring partners across aviation and technology. We do not guarantee a job, because final selection rests with the employer, but we keep putting your profile forward."
        }
      ]
    };
  }, [locationDefaults, parsedContent]);
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim() || formData.phone.length !== 10 || !formData.course || formSubmitting) {
      return;
    }
    setFormSubmitting(true);
    try {
      await submitCounsellorForm({
        name: formData.name,
        phone: formData.phone,
        course: formData.course,
        form_location: `SEO Location Page: ${locationInfo.area}`
      });
      setFormData({ name: "", phone: "", course: "" });
      Swal.fire({
        title: "Application Submitted!",
        text: `Thank you, ${formData.name}. Redirecting to confirmation page...`,
        icon: "success",
        confirmButtonColor: "#1C3E8A",
        timer: 2e3,
        timerProgressBar: true,
        showConfirmButton: false
      }).then(() => {
        navigate({ to: "/thank-you" });
      });
    } catch (error) {
      console.error("SEO form submit error:", error);
      Swal.fire({
        title: "Submission Failed",
        text: "Failed to submit enquiry. Please try again.",
        icon: "error",
        confirmButtonColor: "#DF1818"
      });
    } finally {
      setFormSubmitting(false);
    }
  };
  const handleCTA = () => {
    window.dispatchEvent(new CustomEvent("openEligibilityModal"));
  };
  const currentMonthYear = useMemo(() => {
    return (/* @__PURE__ */ new Date()).toLocaleDateString("en-US", { month: "long", year: "numeric" });
  }, []);
  if (loading) {
    return /* @__PURE__ */ jsxs("div", { className: "bg-white min-h-screen flex flex-col items-center justify-center py-20", children: [
      /* @__PURE__ */ jsx("div", { className: "w-12 h-12 border-4 border-[#1C3E8A] border-t-transparent rounded-full animate-spin" }),
      /* @__PURE__ */ jsx("p", { className: "text-slate-500 font-sans font-bold mt-4", children: "Loading details..." })
    ] });
  }
  return /* @__PURE__ */ jsxs("div", { className: "bg-white min-h-screen text-slate-800 font-sans antialiased", children: [
    /* @__PURE__ */ jsx(
      SEO,
      {
        title: ((_a = seoPage == null ? void 0 : seoPage.title) == null ? void 0 : _a.rendered) ? decodeHTMLEntities(seoPage.title.rendered) : `Air Hostess & Aviation Training near ${locationInfo.area}`,
        description: locationInfo.heroText,
        keywords: `Aviation Course ${locationInfo.area}, Cabin Crew Training ${locationInfo.area}, Airport Ground Staff ${locationInfo.area}`,
        schema: {
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": `Amigo Academy - ${locationInfo.area} Hub`,
          "description": locationInfo.heroText,
          "address": {
            "@type": "PostalAddress",
            "addressLocality": locationInfo.area,
            "addressRegion": "Mumbai, Maharashtra",
            "addressCountry": "IN"
          }
        }
      }
    ),
    /* @__PURE__ */ jsxs("nav", { className: "max-w-7xl mx-auto px-6 sm:px-8 pt-8 pb-2 flex items-center space-x-2 text-xs sm:text-sm font-sans font-semibold text-slate-400 text-left", children: [
      /* @__PURE__ */ jsx(Link, { to: "/", className: "hover:text-[#DF1818] transition-colors", children: "Home" }),
      /* @__PURE__ */ jsx("span", { children: ">" }),
      /* @__PURE__ */ jsx(Link, { to: "/locations", className: "hover:text-[#DF1818] transition-colors", children: "Locations" }),
      /* @__PURE__ */ jsx("span", { children: ">" }),
      /* @__PURE__ */ jsx("span", { className: "text-slate-900 font-bold", children: locationInfo.area })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "max-w-7xl mx-auto px-6 sm:px-8 py-8 sm:py-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start", children: [
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-7 space-y-6 text-left", children: [
        /* @__PURE__ */ jsx("h1", { className: "text-[34px] sm:text-[44px] lg:text-[50px] font-outfit font-extrabold text-[#112A46] leading-tight", children: ((_b = seoPage == null ? void 0 : seoPage.title) == null ? void 0 : _b.rendered) ? /* @__PURE__ */ jsx(Fragment, { children: (() => {
          const decoded = decodeHTMLEntities(seoPage.title.rendered);
          return decoded.toLowerCase().includes("near") ? /* @__PURE__ */ jsxs(Fragment, { children: [
            decoded.substring(0, decoded.toLowerCase().lastIndexOf("near") + 4),
            " ",
            /* @__PURE__ */ jsx("span", { className: "text-[#D97706] block sm:inline", children: decoded.substring(decoded.toLowerCase().lastIndexOf("near") + 4) })
          ] }) : decoded;
        })() }) : /* @__PURE__ */ jsxs(Fragment, { children: [
          "Cabin Crew (Air Hostess) & Hospitality Management, Airport Ground Staff & Hospitality Management & AI & Data Science Courses",
          " ",
          /* @__PURE__ */ jsxs("span", { className: "text-[#D97706] block sm:inline", children: [
            "Near ",
            locationInfo.area
          ] })
        ] }) }),
        /* @__PURE__ */ jsx("p", { className: "text-slate-500 font-sans font-medium text-sm sm:text-base leading-relaxed max-w-xl", children: locationInfo.heroText }),
        /* @__PURE__ */ jsx("div", { className: "pt-2", children: /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: handleCTA,
            className: "inline-flex items-center gap-2 bg-[#DF1818] hover:bg-[#c41212] text-white font-sans font-bold text-xs sm:text-sm px-8 py-4 rounded-full shadow-[0_8px_20px_rgba(223,24,24,0.25)] hover:shadow-[0_12px_24px_rgba(223,24,24,0.35)] transition-all duration-300 active:scale-95 whitespace-nowrap focus:outline-none cursor-pointer",
            children: [
              /* @__PURE__ */ jsx("span", { children: "Check My Eligibility" }),
              /* @__PURE__ */ jsx("span", { className: "font-bold", children: "\xA0\u2794" })
            ]
          }
        ) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "lg:col-span-5 w-full", children: /* @__PURE__ */ jsxs("div", { className: "bg-white border-4 border-[#112A46] rounded-[24px] p-6 sm:p-8 text-[#112A46] shadow-xl text-center", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-xl sm:text-2xl font-outfit font-extrabold text-[#112A46] mb-1", children: "Talk to Our Career Counsellor" }),
        /* @__PURE__ */ jsx("p", { className: "text-slate-400 font-sans text-xs font-semibold mb-6", children: "Get free guidance & course details." }),
        /* @__PURE__ */ jsxs("form", { onSubmit: handleFormSubmit, className: "space-y-4 text-left", children: [
          /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
            /* @__PURE__ */ jsx("label", { className: "text-[10px] font-bold tracking-wider text-slate-500 uppercase block", children: "Full Name" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "text",
                required: true,
                placeholder: "Enter your full name",
                value: formData.name,
                onChange: (e) => setFormData({ ...formData, name: e.target.value }),
                className: "w-full bg-white border border-slate-200 focus:border-[#112A46] rounded-lg px-4 py-3 text-xs sm:text-sm font-semibold text-slate-800 outline-none transition-all placeholder:text-slate-400"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
            /* @__PURE__ */ jsx("label", { className: "text-[10px] font-bold tracking-wider text-slate-500 uppercase block", children: "Mobile Number" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "text",
                required: true,
                placeholder: "Enter your mobile number",
                minLength: 10,
                maxLength: 10,
                value: formData.phone,
                onChange: (e) => setFormData({ ...formData, phone: e.target.value.replace(/\D/g, "") }),
                className: "w-full bg-white border border-slate-200 focus:border-[#112A46] rounded-lg px-4 py-3 text-xs sm:text-sm font-semibold text-slate-800 outline-none transition-all placeholder:text-slate-400"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
            /* @__PURE__ */ jsx("label", { className: "text-[10px] font-bold tracking-wider text-slate-500 uppercase block", children: "Select Course" }),
            /* @__PURE__ */ jsxs(
              "select",
              {
                required: true,
                value: formData.course,
                onChange: (e) => setFormData({ ...formData, course: e.target.value }),
                className: "w-full bg-white border border-slate-200 focus:border-[#112A46] rounded-lg px-4 py-3 text-xs sm:text-sm font-semibold text-slate-700 outline-none transition-all cursor-pointer appearance-none",
                children: [
                  /* @__PURE__ */ jsx("option", { value: "", disabled: true, children: "Choose a course" }),
                  /* @__PURE__ */ jsx("option", { value: "Cabin Crew (Air Hostess) & Hospitality Management", children: "Cabin Crew (Air Hostess) & Hospitality Management" }),
                  /* @__PURE__ */ jsx("option", { value: "Airport Ground Staff & Hospitality Management", children: "Airport Ground Staff & Hospitality Management" }),
                  /* @__PURE__ */ jsx("option", { value: "AI & Data Science", children: "AI & Data Science" })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsx("div", { className: "pt-2", children: /* @__PURE__ */ jsx(
            "button",
            {
              type: "submit",
              disabled: !formData.name.trim() || formData.phone.length !== 10 || !formData.course,
              className: "w-full py-4 bg-[#DF1818] hover:bg-[#c41212] disabled:bg-slate-300 disabled:text-slate-400 disabled:cursor-not-allowed text-white rounded-full text-xs sm:text-sm font-bold shadow-lg active:scale-[0.98] transition-all flex items-center justify-center cursor-pointer gap-2",
              children: "Secure Your Spot Now \u2794"
            }
          ) })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-[10px] text-slate-400 text-center font-medium mt-3", children: "Our expert will call you shortly." })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "max-w-7xl mx-auto px-6 sm:px-8 pb-10", children: /* @__PURE__ */ jsxs("div", { className: "bg-[#DBEAFE]/70 border border-blue-200/60 rounded-[24px] p-6 sm:p-8 text-left space-y-6 shadow-sm", children: [
      /* @__PURE__ */ jsxs("h2", { className: "text-xl sm:text-2xl font-outfit font-extrabold text-[#112A46]", children: [
        "Quick Answer \u2013 For ",
        locationInfo.area,
        " Students"
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-slate-600 font-sans text-sm sm:text-base font-semibold leading-relaxed", children: locationInfo.quickAnswerText }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6 pt-2 items-start", children: [
        /* @__PURE__ */ jsxs("div", { className: "lg:col-span-2 flex items-start gap-3", children: [
          /* @__PURE__ */ jsx("div", { className: "text-amber-500 shrink-0 pt-0.5", children: /* @__PURE__ */ jsxs("svg", { className: "w-5 h-5", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2.5, children: [
            /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" }),
            /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M15 11a3 3 0 11-6 0 3 3 0 016 0z" })
          ] }) }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-0.5", children: [
            /* @__PURE__ */ jsx("p", { className: "text-slate-500 font-sans text-xs font-semibold", children: "Nearest Branch" }),
            /* @__PURE__ */ jsx("p", { className: "font-outfit font-bold text-[#112A46] text-sm sm:text-base", children: locationInfo.branchName })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "lg:col-span-3 flex items-start gap-3", children: [
          /* @__PURE__ */ jsx("div", { className: "text-amber-500 shrink-0 pt-0.5", children: /* @__PURE__ */ jsx("svg", { className: "w-5 h-5", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2.5, children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" }) }) }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-0.5", children: [
            /* @__PURE__ */ jsx("p", { className: "text-slate-500 font-sans text-xs font-semibold", children: "Travel Time" }),
            /* @__PURE__ */ jsx("p", { className: "font-outfit font-bold text-[#112A46] text-sm sm:text-base", children: locationInfo.travelTimeShort })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "lg:col-span-4 flex items-start gap-3", children: [
          /* @__PURE__ */ jsx("div", { className: "text-amber-500 shrink-0 pt-0.5", children: /* @__PURE__ */ jsx("svg", { className: "w-5 h-5", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2.5, children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" }) }) }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
            /* @__PURE__ */ jsx("p", { className: "text-slate-500 font-sans text-xs font-semibold", children: "Courses Available" }),
            /* @__PURE__ */ jsxs("ul", { className: "list-disc pl-4 space-y-1 font-outfit font-bold text-[#112A46] text-xs sm:text-sm", children: [
              /* @__PURE__ */ jsx("li", { children: "Cabin Crew (Air Hostess) & Hospitality Management" }),
              /* @__PURE__ */ jsx("li", { children: "Airport Ground Staff & Hospitality Management" }),
              /* @__PURE__ */ jsx("li", { children: "AI & Data Science" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "lg:col-span-3 flex items-start gap-3", children: [
          /* @__PURE__ */ jsx("div", { className: "text-amber-500 shrink-0 pt-0.5", children: /* @__PURE__ */ jsx("svg", { className: "w-5 h-5", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2.5, children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" }) }) }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
            /* @__PURE__ */ jsx("p", { className: "text-slate-500 font-sans text-xs font-semibold", children: "Courses Duration" }),
            /* @__PURE__ */ jsxs("ul", { className: "list-disc pl-4 space-y-1 font-outfit font-bold text-[#112A46] text-xs sm:text-sm", children: [
              /* @__PURE__ */ jsx("li", { children: "6 Months" }),
              /* @__PURE__ */ jsx("li", { children: "6 Months" }),
              /* @__PURE__ */ jsx("li", { children: "12 Months" })
            ] })
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs("section", { className: "max-w-7xl mx-auto px-6 sm:px-8 pb-16 grid grid-cols-1 lg:grid-cols-12 gap-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-7 text-left space-y-4", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-2xl font-outfit font-extrabold text-[#112A46]", children: "Quick Facts" }),
        /* @__PURE__ */ jsx("div", { className: "overflow-x-auto rounded-2xl border border-slate-200 shadow-sm", children: /* @__PURE__ */ jsx("table", { className: "w-full text-left border-collapse bg-white", children: /* @__PURE__ */ jsx("tbody", { className: "divide-y divide-slate-100 text-xs sm:text-sm font-semibold text-slate-700", children: parsedContent && parsedContent.tableData.length > 0 ? parsedContent.tableData.map((row, idx) => /* @__PURE__ */ jsxs("tr", { className: "hover:bg-slate-50", children: [
          /* @__PURE__ */ jsx("td", { className: "p-3 bg-slate-50 font-bold text-[#112A46] w-1/3", children: row.label }),
          /* @__PURE__ */ jsx("td", { className: "p-3", children: row.value })
        ] }, idx)) : /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsxs("tr", { className: "hover:bg-slate-50", children: [
            /* @__PURE__ */ jsx("td", { className: "p-3 bg-slate-50 font-bold text-[#112A46] w-1/3", children: "Address" }),
            /* @__PURE__ */ jsx("td", { className: "p-3", children: locationInfo.branchAddress })
          ] }),
          /* @__PURE__ */ jsxs("tr", { className: "hover:bg-slate-50", children: [
            /* @__PURE__ */ jsx("td", { className: "p-3 bg-slate-50 font-bold text-[#112A46]", children: "Travel Info" }),
            /* @__PURE__ */ jsx("td", { className: "p-3", children: locationInfo.travelTimeText })
          ] }),
          /* @__PURE__ */ jsxs("tr", { className: "hover:bg-slate-50", children: [
            /* @__PURE__ */ jsx("td", { className: "p-3 bg-slate-50 font-bold text-[#112A46]", children: "Areas Covered" }),
            /* @__PURE__ */ jsx("td", { className: "p-3", children: locationInfo.areasCovered })
          ] }),
          /* @__PURE__ */ jsxs("tr", { className: "hover:bg-slate-50", children: [
            /* @__PURE__ */ jsx("td", { className: "p-3 bg-slate-50 font-bold text-[#112A46]", children: "Courses" }),
            /* @__PURE__ */ jsx("td", { className: "p-3", children: /* @__PURE__ */ jsxs("ul", { className: "list-disc pl-4 space-y-0.5", children: [
              /* @__PURE__ */ jsx("li", { children: "Cabin Crew (Air Hostess) & Hospitality Management" }),
              /* @__PURE__ */ jsx("li", { children: "Airport Ground Staff & Hospitality Management" }),
              /* @__PURE__ */ jsx("li", { children: "AI & Data Science" })
            ] }) })
          ] }),
          /* @__PURE__ */ jsxs("tr", { className: "hover:bg-slate-50", children: [
            /* @__PURE__ */ jsx("td", { className: "p-3 bg-slate-50 font-bold text-[#112A46]", children: "Duration" }),
            /* @__PURE__ */ jsx("td", { className: "p-3", children: "6 to 12 Months" })
          ] }),
          /* @__PURE__ */ jsxs("tr", { className: "hover:bg-slate-50", children: [
            /* @__PURE__ */ jsx("td", { className: "p-3 bg-slate-50 font-bold text-[#112A46]", children: "Eligibility" }),
            /* @__PURE__ */ jsx("td", { className: "p-3", children: "12th Pass / Graduate (Aviation), Any stream (AI)" })
          ] }),
          /* @__PURE__ */ jsxs("tr", { className: "hover:bg-slate-50", children: [
            /* @__PURE__ */ jsx("td", { className: "p-3 bg-slate-50 font-bold text-[#112A46]", children: "Certification" }),
            /* @__PURE__ */ jsx("td", { className: "p-3", children: "Maharashtra Government Certified (Aviation) / Industry-Oriented Professional Training (AI)" })
          ] }),
          /* @__PURE__ */ jsxs("tr", { className: "hover:bg-slate-50", children: [
            /* @__PURE__ */ jsx("td", { className: "p-3 bg-slate-50 font-bold text-[#112A46]", children: "Timings" }),
            /* @__PURE__ */ jsx("td", { className: "p-3", children: "Flexible Morning/Afternoon Batches" })
          ] }),
          /* @__PURE__ */ jsxs("tr", { className: "hover:bg-slate-50", children: [
            /* @__PURE__ */ jsx("td", { className: "p-3 bg-slate-50 font-bold text-[#112A46]", children: "Scholarship" }),
            /* @__PURE__ */ jsx("td", { className: "p-3", children: "Upto 50% Available" })
          ] }),
          /* @__PURE__ */ jsxs("tr", { className: "hover:bg-slate-50", children: [
            /* @__PURE__ */ jsx("td", { className: "p-3 bg-slate-50 font-bold text-[#112A46]", children: "Placement" }),
            /* @__PURE__ */ jsx("td", { className: "p-3", children: "100% Placement Assistance Provided" })
          ] }),
          /* @__PURE__ */ jsxs("tr", { className: "hover:bg-slate-50", children: [
            /* @__PURE__ */ jsx("td", { className: "p-3 bg-slate-50 font-bold text-[#112A46]", children: "Counselling" }),
            /* @__PURE__ */ jsx("td", { className: "p-3", children: "Free Walk-in Career Counselling" })
          ] })
        ] }) }) }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-5 text-left space-y-4", children: [
        /* @__PURE__ */ jsxs("h3", { className: "text-2xl font-outfit font-extrabold text-[#112A46]", children: [
          locationInfo.branchName,
          " Branch (Nearest to ",
          locationInfo.area,
          ")"
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-white border border-[#E1E5ED] rounded-[24px] p-6 shadow-md flex flex-col justify-between h-[calc(100%-2rem)]", children: [
          /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsx("div", { className: "w-full rounded-2xl overflow-hidden border border-slate-200 shadow-sm aspect-[1.3] relative bg-neutral-100", children: /* @__PURE__ */ jsx(
              "iframe",
              {
                src: locationInfo.branchMapSrc,
                width: "100%",
                height: "100%",
                style: { border: 0 },
                allowFullScreen: true,
                loading: "lazy",
                referrerPolicy: "no-referrer-when-downgrade",
                title: `${locationInfo.branchName} campus map location`,
                className: "absolute inset-0 w-full h-full"
              }
            ) }),
            /* @__PURE__ */ jsxs("p", { className: "text-slate-600 font-sans text-xs sm:text-sm font-semibold leading-relaxed", children: [
              /* @__PURE__ */ jsx("strong", { children: "Address:" }),
              " ",
              locationInfo.branchAddress
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "pt-6 space-y-3", children: [
            /* @__PURE__ */ jsx(
              "a",
              {
                href: locationInfo.branchMapHref,
                target: "_blank",
                rel: "noreferrer",
                className: "w-full py-4 bg-[#DF1818] hover:bg-[#c41212] text-white rounded-full text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 shadow-md",
                children: "Get Directions \u{1F9ED}"
              }
            ),
            /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
              /* @__PURE__ */ jsx(
                "a",
                {
                  href: "tel:+919987588932",
                  className: "py-3 bg-white border border-[#E1E5ED] text-slate-700 hover:text-[#DF1818] hover:border-[#DF1818] rounded-full text-xs sm:text-sm font-extrabold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm",
                  children: "\u{1F4DE} Call Now"
                }
              ),
              /* @__PURE__ */ jsx(
                "a",
                {
                  href: "https://wa.me/919987588932",
                  target: "_blank",
                  rel: "noreferrer",
                  className: "py-3 bg-[#25d366] hover:bg-[#20ba5a] text-white rounded-full text-xs sm:text-sm font-extrabold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm",
                  children: "\u{1F4AC} WhatsApp"
                }
              )
            ] })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "bg-slate-50 py-12 border-y border-neutral-100 px-6", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "bg-white border border-neutral-200/60 rounded-[20px] p-6 text-center shadow-sm", children: [
        /* @__PURE__ */ jsx("p", { className: "text-3xl sm:text-[38px] font-outfit font-extrabold text-[#1C3E8A] mb-1", children: "10,000+" }),
        /* @__PURE__ */ jsx("p", { className: "text-slate-500 font-sans text-xs sm:text-[13px] font-bold", children: "Students Trained" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-white border border-neutral-200/60 rounded-[20px] p-6 text-center shadow-sm", children: [
        /* @__PURE__ */ jsx("p", { className: "text-3xl sm:text-[38px] font-outfit font-extrabold text-[#1C3E8A] mb-1", children: "4.6/5" }),
        /* @__PURE__ */ jsx("p", { className: "text-slate-500 font-sans text-xs sm:text-[13px] font-bold", children: "Google Rating" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-white border border-neutral-200/60 rounded-[20px] p-6 text-center shadow-sm", children: [
        /* @__PURE__ */ jsx("p", { className: "text-3xl sm:text-[38px] font-outfit font-extrabold text-[#1C3E8A] mb-1", children: "3" }),
        /* @__PURE__ */ jsx("p", { className: "text-slate-500 font-sans text-xs sm:text-[13px] font-bold", children: "Branches" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-white border border-neutral-200/60 rounded-[20px] p-6 text-center shadow-sm", children: [
        /* @__PURE__ */ jsx("p", { className: "text-3xl sm:text-[38px] font-outfit font-extrabold text-[#1C3E8A] mb-1", children: "200+" }),
        /* @__PURE__ */ jsx("p", { className: "text-slate-500 font-sans text-xs sm:text-[13px] font-bold", children: "Hiring Partners" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "bg-white py-16 sm:py-24 px-6 border-b border-neutral-100", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto space-y-16", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-3xl sm:text-[40px] font-outfit font-extrabold text-[#112A46] leading-tight mb-4", children: "Our Premium Courses" }),
        /* @__PURE__ */ jsx("p", { className: "text-slate-500 font-sans text-xs sm:text-sm font-semibold max-w-2xl mx-auto", children: "Industry-aligned curriculum designed to make you job-ready in 6 to 12 months." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-[24px] border border-[#E1E5ED] shadow-sm overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-6 p-6 sm:p-8 relative", children: [
        /* @__PURE__ */ jsx("div", { className: "lg:col-span-4 rounded-xl overflow-hidden h-64 lg:h-full", children: /* @__PURE__ */ jsx("img", { src: course1Img, alt: "Air Hostess Course", className: "w-full h-full object-cover" }) }),
        /* @__PURE__ */ jsxs("div", { className: "lg:col-span-8 flex flex-col justify-between text-left space-y-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row sm:items-start justify-between gap-3", children: [
              /* @__PURE__ */ jsx("h3", { className: "text-xl sm:text-2xl font-outfit font-extrabold text-[#112A46]", children: locationInfo.cabinCrewTitle }),
              /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center gap-2 shrink-0", children: [
                /* @__PURE__ */ jsx("span", { className: "bg-[#DCE7FC] text-[#1C3E8A] text-[11px] font-bold px-3 py-1 rounded-full", children: "6 Months" }),
                /* @__PURE__ */ jsx("span", { className: "bg-[#DCE7FC] text-[#1C3E8A] text-[11px] font-bold px-3 py-1 rounded-full", children: "Maharashtra Government Certified" })
              ] })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-slate-500 font-sans text-sm font-medium leading-relaxed", children: locationInfo.cabinCrewDesc }),
            /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm font-semibold text-slate-600", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx("span", { className: "text-green-500", children: "\u2714" }),
                " Communication Skills"
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx("span", { className: "text-green-500", children: "\u2714" }),
                " Grooming & Etiquette"
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx("span", { className: "text-green-500", children: "\u2714" }),
                " In-flight Safety"
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx("span", { className: "text-green-500", children: "\u2714" }),
                " Mock Interviews"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "pt-2", children: /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => {
                navigate({ to: "/career-guide/cabin-crew" });
                window.scrollTo({ top: 0, behavior: "smooth" });
              },
              className: "bg-[#112A46] hover:bg-[#0b1d31] text-white font-sans font-bold text-xs sm:text-sm px-6 py-3 rounded-lg transition-all cursor-pointer",
              children: "View Syllabus"
            }
          ) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-[24px] border border-[#E1E5ED] shadow-sm overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-6 p-6 sm:p-8 relative", children: [
        /* @__PURE__ */ jsx("div", { className: "lg:col-span-4 rounded-xl overflow-hidden h-64 lg:h-full", children: /* @__PURE__ */ jsx("img", { src: course2Img, alt: "Airport Ground Staff Course", className: "w-full h-full object-cover" }) }),
        /* @__PURE__ */ jsxs("div", { className: "lg:col-span-8 flex flex-col justify-between text-left space-y-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row sm:items-start justify-between gap-3", children: [
              /* @__PURE__ */ jsx("h3", { className: "text-xl sm:text-2xl font-outfit font-extrabold text-[#112A46]", children: locationInfo.groundStaffTitle }),
              /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center gap-2 shrink-0", children: [
                /* @__PURE__ */ jsx("span", { className: "bg-[#DCE7FC] text-[#1C3E8A] text-[11px] font-bold px-3 py-1 rounded-full", children: "6 Months" }),
                /* @__PURE__ */ jsx("span", { className: "bg-[#DCE7FC] text-[#1C3E8A] text-[11px] font-bold px-3 py-1 rounded-full", children: "Maharashtra Government Certified" })
              ] })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-slate-500 font-sans text-sm font-medium leading-relaxed", children: locationInfo.groundStaffDesc }),
            /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm font-semibold text-slate-600", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx("span", { className: "text-green-500", children: "\u2714" }),
                " Terminal Operations"
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx("span", { className: "text-green-500", children: "\u2714" }),
                " Airline Ticketing"
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx("span", { className: "text-green-500", children: "\u2714" }),
                " Passenger Handling"
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx("span", { className: "text-green-500", children: "\u2714" }),
                " Aviation Security"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "pt-2", children: /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => {
                navigate({ to: "/career-guide/airport-ground-staff" });
                window.scrollTo({ top: 0, behavior: "smooth" });
              },
              className: "bg-[#112A46] hover:bg-[#0b1d31] text-white font-sans font-bold text-xs sm:text-sm px-6 py-3 rounded-lg transition-all cursor-pointer",
              children: "View Syllabus"
            }
          ) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-[24px] border border-[#E1E5ED] shadow-sm overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-6 p-6 sm:p-8 relative", children: [
        /* @__PURE__ */ jsx("div", { className: "lg:col-span-4 rounded-xl overflow-hidden h-64 lg:h-full", children: /* @__PURE__ */ jsx("img", { src: course3Img, alt: "AI Course", className: "w-full h-full object-cover" }) }),
        /* @__PURE__ */ jsxs("div", { className: "lg:col-span-8 flex flex-col justify-between text-left space-y-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row sm:items-start justify-between gap-3", children: [
              /* @__PURE__ */ jsx("h3", { className: "text-xl sm:text-2xl font-outfit font-extrabold text-[#112A46]", children: locationInfo.aiTitle }),
              /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center gap-2 shrink-0", children: [
                /* @__PURE__ */ jsx("span", { className: "bg-[#FEF3C7] text-[#92400E] text-[11px] font-bold px-3 py-1 rounded-full", children: "12 Months" }),
                /* @__PURE__ */ jsx("span", { className: "bg-[#FEF3C7] text-[#92400E] text-[11px] font-bold px-3 py-1 rounded-full", children: "Industry-Oriented Professional Training" })
              ] })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-slate-500 font-sans text-sm font-medium leading-relaxed", children: locationInfo.aiDesc }),
            /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm font-semibold text-slate-600", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx("span", { className: "text-green-500", children: "\u2714" }),
                " Python Programming"
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx("span", { className: "text-green-500", children: "\u2714" }),
                " Machine Learning"
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx("span", { className: "text-green-500", children: "\u2714" }),
                " Data Visualization"
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx("span", { className: "text-green-500", children: "\u2714" }),
                " Live Projects"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "pt-2", children: /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => {
                navigate({ to: "/career-guide/ai-data-science" });
                window.scrollTo({ top: 0, behavior: "smooth" });
              },
              className: "bg-[#112A46] hover:bg-[#0b1d31] text-white font-sans font-bold text-xs sm:text-sm px-6 py-3 rounded-lg transition-all cursor-pointer",
              children: "View Syllabus"
            }
          ) })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "bg-white py-16 sm:py-24 px-6 border-b border-neutral-100 text-center", children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto space-y-12", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl sm:text-[40px] font-outfit font-extrabold text-[#112A46] leading-tight", children: "Train on a Real Mock Aircraft" }),
      /* @__PURE__ */ jsx("div", { className: "max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-md", children: /* @__PURE__ */ jsx(
        "img",
        {
          src: train1Img,
          alt: "Train on a Real Mock Aircraft Main Cabin",
          className: "w-full h-auto object-cover max-h-[500px]"
        }
      ) }),
      /* @__PURE__ */ jsx("p", { className: "text-slate-600 font-sans text-sm sm:text-base font-semibold max-w-4xl mx-auto leading-relaxed", children: "Every Amigo Academy branch has a mock aircraft cabin. Students practise in-flight service, safety procedures, emergency drills and passenger handling inside it rather than only reading about them \u2014 so the aircraft environment is familiar before an interview, not new on the day." }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center space-y-3", children: [
          /* @__PURE__ */ jsx("div", { className: "rounded-2xl overflow-hidden w-full h-44 border border-slate-100 shadow-sm", children: /* @__PURE__ */ jsx("img", { src: train2Img, alt: "In flight Service Practice", className: "w-full h-full object-cover" }) }),
          /* @__PURE__ */ jsx("h4", { className: "font-outfit font-bold text-[#112A46] text-sm sm:text-base", children: "In flight Service Practice" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center space-y-3", children: [
          /* @__PURE__ */ jsx("div", { className: "rounded-2xl overflow-hidden w-full h-44 border border-slate-100 shadow-sm", children: /* @__PURE__ */ jsx("img", { src: train3Img, alt: "Safety Demonstrations", className: "w-full h-full object-cover" }) }),
          /* @__PURE__ */ jsx("h4", { className: "font-outfit font-bold text-[#112A46] text-sm sm:text-base", children: "Safety Demonstrations" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center space-y-3", children: [
          /* @__PURE__ */ jsx("div", { className: "rounded-2xl overflow-hidden w-full h-44 border border-slate-100 shadow-sm", children: /* @__PURE__ */ jsx("img", { src: train4Img, alt: "Emergency Drill Training", className: "w-full h-full object-cover" }) }),
          /* @__PURE__ */ jsx("h4", { className: "font-outfit font-bold text-[#112A46] text-sm sm:text-base", children: "Emergency Drill Training" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center space-y-3", children: [
          /* @__PURE__ */ jsx("div", { className: "rounded-2xl overflow-hidden w-full h-44 border border-slate-100 shadow-sm", children: /* @__PURE__ */ jsx("img", { src: train5Img, alt: "Passenger Handling and Communication", className: "w-full h-full object-cover" }) }),
          /* @__PURE__ */ jsx("h4", { className: "font-outfit font-bold text-[#112A46] text-sm sm:text-base", children: "Passenger Handling and Communication" })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "bg-slate-50/50 py-16 sm:py-24 px-6 border-b border-slate-100 text-center", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto space-y-12", children: [
      /* @__PURE__ */ jsxs("h2", { className: "text-3xl font-outfit font-extrabold text-[#112A46]", children: [
        "How to Reach from ",
        locationInfo.area
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-6 justify-center", children: locationInfo.transitItems.map((item, idx) => /* @__PURE__ */ jsxs(
        "div",
        {
          className: "bg-white rounded-3xl p-8 flex flex-col items-center text-center shadow-sm border border-neutral-100 space-y-4 w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.33%-16px)] max-w-sm",
          children: [
            /* @__PURE__ */ jsx("h4", { className: "font-outfit font-bold text-[#112A46] text-base uppercase tracking-wider", children: item.title }),
            /* @__PURE__ */ jsx("p", { className: "text-slate-500 text-xs sm:text-sm leading-relaxed font-semibold", children: item.desc })
          ]
        },
        idx
      )) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "hidden bg-slate-50/50 py-16 sm:py-24 px-6 border-b border-slate-100 text-center", children: /* @__PURE__ */ jsxs("div", { className: "max-w-5xl mx-auto bg-white rounded-3xl p-8 sm:p-12 border border-slate-100 shadow-sm", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-outfit font-extrabold text-[#112A46] mb-12", children: "What Makes Amigo Different" }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-10 text-left", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4", children: [
          /* @__PURE__ */ jsx("div", { className: "shrink-0 pt-1", children: /* @__PURE__ */ jsx("svg", { className: "w-8 h-8 text-[#D97706]", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" }) }) }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
            /* @__PURE__ */ jsx("h4", { className: "font-outfit font-bold text-[#112A46] text-lg", children: "Maharashtra Govt Certified Aviation Courses" }),
            /* @__PURE__ */ jsx("p", { className: "text-slate-500 text-xs sm:text-sm leading-relaxed font-semibold", children: "A recognised qualification for our Air Hostess / Cabin Crew and Airport Ground Staff programmes." })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4", children: [
          /* @__PURE__ */ jsx("div", { className: "shrink-0 pt-1", children: /* @__PURE__ */ jsx("svg", { className: "w-8 h-8 text-[#D97706]", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" }) }) }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
            /* @__PURE__ */ jsx("h4", { className: "font-outfit font-bold text-[#112A46] text-lg", children: "Easy EMI Options" }),
            /* @__PURE__ */ jsx("p", { className: "text-slate-500 text-xs sm:text-sm leading-relaxed font-semibold", children: "Scholarship up to \u20B950,000 plus flexible zero-interest EMI on all courses." })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4", children: [
          /* @__PURE__ */ jsx("div", { className: "shrink-0 pt-1", children: /* @__PURE__ */ jsx("svg", { className: "w-8 h-8 text-[#D97706]", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2-2v10a2 2 0 002 2z" }) }) }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
            /* @__PURE__ */ jsx("h4", { className: "font-outfit font-bold text-[#112A46] text-lg", children: "Strong Placement Support" }),
            /* @__PURE__ */ jsx("p", { className: "text-slate-500 text-xs sm:text-sm leading-relaxed font-semibold", children: "Active hiring connections across aviation and technology, including IndiGo, Air India, Emirates, Mumbai Airport and IT and AI employers. We keep putting your profile forward." })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4", children: [
          /* @__PURE__ */ jsx("div", { className: "shrink-0 pt-1", children: /* @__PURE__ */ jsx("svg", { className: "w-8 h-8 text-[#D97706]", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" }) }) }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
            /* @__PURE__ */ jsx("h4", { className: "font-outfit font-bold text-[#112A46] text-lg", children: "Lifetime Career Support" }),
            /* @__PURE__ */ jsx("p", { className: "text-slate-500 text-xs sm:text-sm leading-relaxed font-semibold", children: "Support does not stop at graduation. Ongoing career counselling and job connections at every stage." })
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "hidden bg-white py-16 sm:py-24 px-6 border-b border-slate-100 text-center", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto space-y-6", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-outfit font-extrabold text-[#112A46]", children: "Career & Placement Support" }),
      /* @__PURE__ */ jsx("p", { className: "text-slate-600 font-sans font-semibold text-sm sm:text-base leading-relaxed max-w-3xl mx-auto", children: "We provide dedicated placement assistance, mock interviews, resume building and soft-skills training to help students prepare for opportunities with airlines, airports, aviation companies and technology employers. Final selection depends on the employer's eligibility requirements and recruitment process." })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "bg-slate-50/70 py-16 sm:py-24 px-6 border-b border-slate-100 text-center", children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto space-y-12", children: [
      /* @__PURE__ */ jsxs("h2", { className: "text-3xl sm:text-[38px] font-outfit font-extrabold text-[#112A46]", children: [
        "Why Consider Amigo Academy from ",
        locationInfo.area,
        "?"
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6 text-left", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-2xl p-6 sm:p-8 border border-slate-100 shadow-sm space-y-4 flex flex-col justify-start", children: [
          /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-500", children: /* @__PURE__ */ jsx("svg", { className: "w-6 h-6", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" }) }) }),
          /* @__PURE__ */ jsx("h3", { className: "font-outfit font-bold text-[#112A46] text-lg", children: "Government Approved" }),
          /* @__PURE__ */ jsx("p", { className: "text-slate-500 text-xs sm:text-sm font-medium leading-relaxed", children: "Our Air Hostess / Cabin Crew and Airport Ground Staff programmes are Maharashtra Government Certified ensuring your qualification holds weight across the industry." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-2xl p-6 sm:p-8 border border-slate-100 shadow-sm space-y-4 flex flex-col justify-start", children: [
          /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-500", children: /* @__PURE__ */ jsx("svg", { className: "w-6 h-6", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" }) }) }),
          /* @__PURE__ */ jsx("h3", { className: "font-outfit font-bold text-[#112A46] text-lg", children: "Placement Support" }),
          /* @__PURE__ */ jsx("p", { className: "text-slate-500 text-xs sm:text-sm font-medium leading-relaxed", children: "Dedicated placement cell support you through applications and interviews. Final selection rests with the employer." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-2xl p-6 sm:p-8 border border-slate-100 shadow-sm space-y-4 flex flex-col justify-start", children: [
          /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-500", children: /* @__PURE__ */ jsx("svg", { className: "w-6 h-6", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 19l9 2-9-18-9 18 9-2zm0 0v-8" }) }) }),
          /* @__PURE__ */ jsx("h3", { className: "font-outfit font-bold text-[#112A46] text-lg", children: "Practical Training" }),
          /* @__PURE__ */ jsx("p", { className: "text-slate-500 text-xs sm:text-sm font-medium leading-relaxed", children: "Mock cabins, grooming sessions, and live projects for hands-on experience." })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto space-y-6 pt-4 text-center", children: [
        /* @__PURE__ */ jsxs("p", { className: "text-slate-600 font-sans font-medium text-sm sm:text-base leading-relaxed", children: [
          "For a student still deciding between an aviation career and a technology career, being able to sit down with a counsellor and compare both honestly, in one visit, saves a lot of time. All three of our programmes run from the same ",
          locationInfo.branchName,
          " centre, so you are not travelling to two places to make one decision."
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-slate-600 font-sans font-medium text-sm sm:text-base leading-relaxed", children: "The short commute also matters more than students expect. Even a six-month course means well over a hundred trips to class, and the AI & Data Science programme runs twice that. Two stops is sustainable. Ninety minutes each way usually is not." })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "bg-[#EFF6FF] py-16 sm:py-24 px-6 border-b border-slate-100", children: /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto space-y-12", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center space-y-4", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-3xl sm:text-[40px] font-outfit font-extrabold text-[#112A46] leading-tight", children: "Frequently Asked Questions" }),
        /* @__PURE__ */ jsx("p", { className: "text-slate-500 font-sans text-xs sm:text-sm font-semibold", children: "Got questions? We've got answers. Find out everything you need to know about our courses." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "space-y-4 text-left", children: locationInfo.faqs.map((faq, idx) => /* @__PURE__ */ jsx(FAQAccordionItem, { index: idx, question: faq.question, answer: faq.answer }, idx)) }),
      /* @__PURE__ */ jsx("div", { className: "flex justify-center pt-8", children: /* @__PURE__ */ jsxs("div", { className: "bg-white border border-[#E1E5ED] px-6 py-3 rounded-full flex items-center gap-3 shadow-sm text-xs font-bold text-[#112A46]", children: [
        /* @__PURE__ */ jsx("span", { className: "text-[#ffd300]", children: "\u2605\u2605\u2605\u2605\u2605" }),
        /* @__PURE__ */ jsx("span", { children: "4.6/5" }),
        /* @__PURE__ */ jsx("span", { className: "text-slate-300", children: "|" }),
        /* @__PURE__ */ jsx("span", { className: "text-slate-500 font-semibold", children: "Based on 740+ Reviews" })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-6 px-6 border-b border-slate-100 text-center", children: /* @__PURE__ */ jsxs("p", { className: "text-xs sm:text-sm text-slate-400 font-semibold font-sans", children: [
      "Reviewed by the Amigo Academy Academic Team \xB7 Last updated ",
      currentMonthYear
    ] }) })
  ] });
}

export { MumbaiSEODetail as M };
//# sourceMappingURL=MumbaiSEODetail-C4UD3n43.mjs.map
