import React, { useState, useEffect, useMemo } from "react";
import { useNavigate, useParams, Link, useMatch } from "@tanstack/react-router";
import Swal from "sweetalert2";
import { fetchSEOPageBySlug, WPPost } from "../services/wordpress";
import { submitCounsellorForm } from "../services/api";

// Import exact premium course images from location asset folder
import course1Img from "../assets/img/location/cabin-crew.png";
import course2Img from "../assets/img/location/airport.png";
import course3Img from "../assets/img/location/ai.png";

// Helper to decode HTML entities (like &#038; to &)
const decodeHTMLEntities = (text: string) => {
  if (!text) return "";
  if (typeof window === "undefined" || typeof document === "undefined") {
    return text
      .replace(/&#038;/g, "&")
      .replace(/&amp;/g, "&")
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">")
      .replace(/&quot;/g, '"')
      .replace(/&#039;/g, "'");
  }
  const textArea = document.createElement("textarea");
  textArea.innerHTML = text;
  return textArea.value;
};

function FAQAccordionItem({ index, question, answer }: { index: number; question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(index === 0);

  return (
    <div className={`bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.02)] border transition-all duration-300 ${isOpen ? "border-[#1C3E8A] shadow-[0_8px_30px_rgba(28,62,138,0.06)]" : "border-slate-100"}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-6 py-5 text-left cursor-pointer group focus:outline-none"
      >
        <div className="flex items-center gap-4 pr-4">
          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0 transition-colors ${isOpen ? "bg-[#1C3E8A] text-white" : "bg-[#eff6ff] text-[#1C3E8A]"}`}>
            {index + 1}
          </div>
          <span className="text-sm sm:text-base font-sans font-bold text-[#112A46] leading-snug">
            {question}
          </span>
        </div>
        <div className="text-slate-400 shrink-0">
          <svg
            className={`w-4 h-4 text-[#1C3E8A] transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>

      {isOpen && (
        <div className="px-6 pb-6 pt-1">
          <div className="bg-[#f8fafc] border-l-4 border-[#1C3E8A] p-4 rounded-r-xl">
            <p className="text-slate-600 font-sans text-xs sm:text-sm leading-relaxed font-semibold">
              {answer}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default function MumbaiSEODetail() {
  const { slug } = useParams({ strict: false }) as { slug?: string };
  const navigate = useNavigate();
  const match = useMatch({ strict: false }) as { loaderData?: { post?: WPPost } } | undefined;
  const initialSeoPage = match?.loaderData?.post || null;

  const [seoPage, setSeoPage] = useState<WPPost | null>(initialSeoPage);
  const [loading, setLoading] = useState(!initialSeoPage);

  // Form states
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    course: "",
  });
  const [formSubmitting, setFormSubmitting] = useState(false);

  // Fetch SEO Page
  useEffect(() => {
    if (slug) {
      if (initialSeoPage && initialSeoPage.slug === slug) {
        setSeoPage(initialSeoPage);
        setLoading(false);
        return;
      }
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

  // Derive location name and details dynamically (Local Fallbacks/Defaults)
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
          area = parts.slice(nearIndex + 1).map(p => p.charAt(0).toUpperCase() + p.slice(1)).join(" ");
        } else {
          area = parts.map(p => p.charAt(0).toUpperCase() + p.slice(1)).join(" ");
        }
      }
    }

    let travelTimeText = "2 Stops / ~5 Mins from Kurla (Central Line)";
    let travelTimeShort = "About 5 Minutes";
    let areasCovered = "Kurla East, Kurla West, Nehru Nagar, Kamani, Kalina, Chunabhatti";
    let reachTrain = "Kurla to Ghatkopar is two stops on the Central Line, via Vidyavihar. The journey takes roughly five minutes. Our centre is directly opposite Ghatkopar station, so the walk from the platform is under two minutes.";
    let reachMetro = "Ghatkopar is the eastern terminus of Metro Line 1, so students coming from Saki Naka, Marol or Andheri side can reach us without changing to a train.";
    let reachRoad = "BEST buses run along LBS Marg between Kurla and Ghatkopar throughout the day. By auto the trip is typically 10 to 15 minutes, depending on traffic at Kurla junction.";
    let reachExtra = "Kurla is a major junction, so students arriving on the Harbour Line from Chembur, Govandi or Mankhurd can change at Kurla for the Central Line to Ghatkopar.";

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
      travelTimeText,
      travelTimeShort,
      areasCovered,
      reachTrain,
      reachMetro,
      reachRoad,
      reachExtra
    };
  }, [slug]);

  // Parse WordPress HTML body content using DOMParser
  const parsedContent = useMemo(() => {
    if (!seoPage || !seoPage.content || !seoPage.content.rendered) {
      return null;
    }

    if (typeof DOMParser === "undefined") {
      return null;
    }

    const parser = new DOMParser();
    const doc = parser.parseFromString(seoPage.content.rendered, "text/html");

    // Extract all paragraphs, filtering out empty ones
    const paragraphs = Array.from(doc.querySelectorAll("p"))
      .map(p => p.textContent?.trim() || "")
      .filter(t => t.length > 0);

    let heroText = "";
    let quickAnswerText = "";

    if (paragraphs.length === 1) {
      // If only one paragraph exists, it is the Quick Answer text
      quickAnswerText = paragraphs[0];
    } else if (paragraphs.length >= 2) {
      heroText = paragraphs[0];
      quickAnswerText = paragraphs[1];
    }

    // Extract table rows from first table found (Quick Facts)
    const tableData: { label: string; value: string }[] = [];
    const table = doc.querySelector("table");
    if (table) {
      const rows = Array.from(table.querySelectorAll("tr"));
      rows.forEach(row => {
        const cells = Array.from(row.querySelectorAll("td, th"));
        if (cells.length >= 2) {
          tableData.push({
            label: cells[0].textContent?.trim() || "",
            value: cells[1].textContent?.trim() || "",
          });
        }
      });
    }

    // Extract course section details from course headings (h2)
    let cabinCrewTitle = "";
    let cabinCrewDesc = "";
    let groundStaffTitle = "";
    let groundStaffDesc = "";
    let aiTitle = "";
    let aiDesc = "";

    const headings = Array.from(doc.querySelectorAll("h2, h3"));
    headings.forEach(heading => {
      const text = heading.textContent?.toLowerCase() || "";
      let nextSibling = heading.nextElementSibling;
      let descText = "";
      while (nextSibling && nextSibling.tagName === "P") {
        descText += nextSibling.textContent + " ";
        nextSibling = nextSibling.nextElementSibling;
      }
      descText = descText.trim();

      if (text.includes("cabin crew") || text.includes("air hostess")) {
        cabinCrewTitle = heading.textContent?.trim() || "";
        cabinCrewDesc = descText;
      } else if (text.includes("ground staff")) {
        groundStaffTitle = heading.textContent?.trim() || "";
        groundStaffDesc = descText;
      } else if (text.includes("ai & data science") || text.includes("data science") || text.includes("ai course")) {
        aiTitle = heading.textContent?.trim() || "";
        aiDesc = descText;
      }
    });

    // Extract Transit details
    const transitItems: { title: string; desc: string }[] = [];

    const transitHeading = headings.find(h => h.textContent?.toLowerCase().includes("reach"));
    if (transitHeading) {
      let currentEl = transitHeading.nextElementSibling;
      while (currentEl) {
        const isNextHeading = ["H1", "H2", "H3", "H4"].includes(currentEl.tagName);
        if (isNextHeading) break;

        const text = currentEl.textContent?.trim() || "";

        if (currentEl.tagName === "UL" || currentEl.tagName === "OL") {
          const items = Array.from(currentEl.querySelectorAll("li"));
          items.forEach(li => {
            const liText = li.textContent?.trim() || "";
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

    // Extract Why Consider details
    let whyConsiderText = "";
    const whyHeading = headings.find(h => h.textContent?.toLowerCase().includes("why consider"));
    if (whyHeading) {
      let nextEl = whyHeading.nextElementSibling;
      while (nextEl && nextEl.tagName === "P") {
        whyConsiderText += nextEl.textContent + " ";
        nextEl = nextEl.nextElementSibling;
      }
      whyConsiderText = whyConsiderText.trim();
    }

    // Extract FAQs
    const faqData: { question: string; answer: string }[] = [];
    const faqHeading = headings.find(h => h.textContent?.toLowerCase().includes("faq") || h.textContent?.toLowerCase().includes("questions"));
    if (faqHeading) {
      let currentEl = faqHeading.nextElementSibling;
      let currentQ = "";
      let currentA = "";

      while (currentEl) {
        const text = currentEl.textContent?.trim() || "";
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

  // Combined Location details from WP content parser with local fallbacks
  const locationInfo = useMemo(() => {
    return {
      area: locationDefaults.area,
      heroText: parsedContent?.heroText || `Amigo Academy's Ghatkopar centre is just 2 stops from Kurla on the Central Line, about 5 minutes away. Government certified aviation training and industry-oriented AI & Data Science courses with practical training and placement support.`,
      quickAnswerText: parsedContent?.quickAnswerText || `The nearest Amigo Academy centre is our Ghatkopar branch, just 2 stops away on the Central Line, taking about 5 minutes.`,
      travelTimeText: locationDefaults.travelTimeText,
      travelTimeShort: locationDefaults.travelTimeShort,
      areasCovered: locationDefaults.areasCovered,
      cabinCrewTitle: parsedContent?.cabinCrewTitle || `Cabin Crew (Air Hostess) & Hospitality Management Near ${locationDefaults.area}`,
      cabinCrewDesc: parsedContent?.cabinCrewDesc || `Students from ${locationDefaults.area} take our Air Hostess / Cabin Crew course at the Ghatkopar centre, two stops up the Central Line. It runs six months and is Maharashtra Government Certified, covering grooming, communication, in-flight service, safety procedures and interview preparation.`,
      groundStaffTitle: parsedContent?.groundStaffTitle || `Airport Ground Staff Course Near ${locationDefaults.area}`,
      groundStaffDesc: parsedContent?.groundStaffDesc || `The Airport Ground Staff course appeals to ${locationDefaults.area} students who want to start earning sooner. Six months, Maharashtra Government Certified, covering check-in, passenger handling, baggage services and airport operations.`,
      aiTitle: parsedContent?.aiTitle || `AI & Data Science Course Near ${locationDefaults.area}`,
      aiDesc: parsedContent?.aiDesc || `Our AI & Data Science course is the longest of the three at twelve months, covering Python, machine learning, data visualisation and Generative AI with live projects. It is industry-oriented professional training, not a government-certified qualification.`,
      transitItems: parsedContent?.transitItems && parsedContent.transitItems.length > 0 ? parsedContent.transitItems : [
        { title: "By Train", desc: locationDefaults.reachTrain },
        { title: "By Metro", desc: locationDefaults.reachMetro },
        { title: "By Road", desc: locationDefaults.reachRoad },
        ...(locationDefaults.reachExtra ? [{ title: "Route Junction", desc: locationDefaults.reachExtra }] : [])
      ],
      whyConsiderText: parsedContent?.whyConsiderText || "Maharashtra Government Certified aviation courses ensuring your qualification holds weight across the industry. Practical training with mock cabins, grooming sessions, and live projects for hands-on experience.",
      faqs: [
        ...(parsedContent?.faqData && parsedContent.faqData.length > 0 ? parsedContent.faqData : [
          {
            question: `Is there an Amigo Academy branch in ${locationDefaults.area}?`,
            answer: `Amigo Academy does not have a centre in ${locationDefaults.area}. Our nearest branch is Ghatkopar, two stops away on the Central Line, and that is where students from ${locationDefaults.area} attend. We would rather tell you that plainly than list an address we do not have.`
          },
          {
            question: `How long does it take to reach the Ghatkopar branch from ${locationDefaults.area}?`,
            answer: "About five minutes by local train, or 10 to 15 minutes by auto along LBS Marg. Our centre is opposite Ghatkopar station."
          },
          {
            question: `Can I attend classes if I work in ${locationDefaults.area} during the day?`,
            answer: "Yes. Our Ghatkopar branch runs morning, afternoon and evening batches. Classes are two hours a day, five days a week, so an evening batch works alongside a job or another course. Speak to a counsellor about which batch has seats."
          }
        ]),
        {
          question: "What is the height requirement for cabin crew?",
          answer: "Airline cabin crew requirements vary by airline and by recruitment drive. Some airlines specify a minimum height; others use reach or other physical criteria. Amigo Academy's admission criteria are separate from an airline's final hiring criteria — we give you an honest assessment during counselling and tell you which airline requirements to target. Our cabin crew height and eligibility guide has the current detail. Why the numbers are not on this page: specific airline height figures would need re-verifying across fourteen area pages every time a carrier changes its requirements. They live in the dedicated height guide instead, where they can be sourced and dated once. The locked dual-standard rule — state both the airline standard and Amigo's own criteria, never imply the lower figure guarantees selection — still governs that guide."
        },
        {
          question: "What salary can I expect after training?",
          answer: "Starting salaries vary considerably by employer, role, location and experience, and differ across the three programmes. Our salary guides carry current indicative ranges for cabin crew, airport ground staff and AI & Data Science roles. Same reasoning as the height answer: quoting figures on fourteen area pages creates fourteen places to update. The ranges belong on the dedicated salary guides, which the area page links to. It also keeps the area page doing its actual job — location, course, commute, decision — rather than becoming a second salary guide."
        },
        {
          question: "Do you provide placement assistance?",
          answer: "Yes. We provide dedicated placement support including mock interviews, resume building and introductions to hiring partners across aviation and technology. We do not guarantee a job, because final selection rests with the employer, but we keep putting your profile forward."
        }
      ]
    };
  }, [locationDefaults, parsedContent]);

  const handleFormSubmit = async (e: React.FormEvent) => {
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
        timer: 2000,
        timerProgressBar: true,
        showConfirmButton: false,
      }).then(() => {
        navigate({ to: "/thank-you" as any });
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

  // Dynamic Date calculations (Month Year)
  const currentMonthYear = useMemo(() => {
    return new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" });
  }, []);

  if (loading) {
    return (
      <div className="bg-white min-h-screen flex flex-col items-center justify-center py-20">
        <div className="w-12 h-12 border-4 border-[#1C3E8A] border-t-transparent rounded-full animate-spin"></div>
        <p className="text-slate-500 font-sans font-bold mt-4">Loading details...</p>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen text-slate-800 font-sans antialiased">

      {/* Block 3: Breadcrumb */}
      <nav className="max-w-7xl mx-auto px-6 sm:px-8 pt-8 pb-2 flex items-center space-x-2 text-xs sm:text-sm font-sans font-semibold text-slate-400 text-left">
        <Link to="/" className="hover:text-[#DF1818] transition-colors">Home</Link>
        <span>&gt;</span>
        <Link to="/locations" className="hover:text-[#DF1818] transition-colors">Locations</Link>
        <span>&gt;</span>
        <span className="text-slate-900 font-bold">{locationInfo.area}</span>
      </nav>

      {/* Block 4: H1 + hero paragraph + counsellor form */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 py-8 sm:py-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Content */}
        <div className="lg:col-span-7 space-y-6 text-left">
          <h1 className="text-[34px] sm:text-[44px] lg:text-[50px] font-outfit font-extrabold text-[#112A46] leading-tight">
            {seoPage?.title?.rendered ? (
              <>
                {(() => {
                  const decoded = decodeHTMLEntities(seoPage.title.rendered);
                  return decoded.toLowerCase().includes("near") ? (
                    <>
                      {decoded.substring(0, decoded.toLowerCase().lastIndexOf("near") + 4)}{" "}
                      <span className="text-[#D97706] block sm:inline">
                        {decoded.substring(decoded.toLowerCase().lastIndexOf("near") + 4)}
                      </span>
                    </>
                  ) : (
                    decoded
                  );
                })()}
              </>
            ) : (
              <>
                Cabin Crew (Air Hostess) &amp; Hospitality Management, Airport Ground Staff &amp; Hospitality Management &amp; AI &amp; Data Science Courses{" "}
                <span className="text-[#D97706] block sm:inline">Near {locationInfo.area}</span>
              </>
            )}
          </h1>

          <p className="text-slate-500 font-sans font-medium text-sm sm:text-base leading-relaxed max-w-xl">
            {locationInfo.heroText}
          </p>

          <div className="pt-2">
            <button
              onClick={handleCTA}
              className="inline-flex items-center gap-2 bg-[#DF1818] hover:bg-[#c41212] text-white font-sans font-bold text-xs sm:text-sm px-8 py-4 rounded-full shadow-[0_8px_20px_rgba(223,24,24,0.25)] hover:shadow-[0_12px_24px_rgba(223,24,24,0.35)] transition-all duration-300 active:scale-95 whitespace-nowrap focus:outline-none cursor-pointer"
            >
              <span>Check My Eligibility</span>
              <span className="font-bold">&nbsp;&#10132;</span>
            </button>
          </div>
        </div>

        {/* Right Counsellor Form */}
        <div className="lg:col-span-5 w-full">
          <div className="bg-white border-4 border-[#112A46] rounded-[24px] p-6 sm:p-8 text-[#112A46] shadow-xl text-center">
            <h3 className="text-xl sm:text-2xl font-outfit font-extrabold text-[#112A46] mb-1">
              Talk to Our Career Counsellor
            </h3>
            <p className="text-slate-400 font-sans text-xs font-semibold mb-6">
              Get free guidance &amp; course details.
            </p>

            <form onSubmit={handleFormSubmit} className="space-y-4 text-left">
              {/* Name */}
              <div className="space-y-1">
                <label className="text-[10px] font-bold tracking-wider text-slate-500 uppercase block">Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-white border border-slate-200 focus:border-[#112A46] rounded-lg px-4 py-3 text-xs sm:text-sm font-semibold text-slate-800 outline-none transition-all placeholder:text-slate-400"
                />
              </div>

              {/* Phone */}
              <div className="space-y-1">
                <label className="text-[10px] font-bold tracking-wider text-slate-500 uppercase block">Mobile Number</label>
                <input
                  type="text"
                  required
                  placeholder="Enter your mobile number"
                  minLength={10}
                  maxLength={10}
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value.replace(/\D/g, "") })}
                  className="w-full bg-white border border-slate-200 focus:border-[#112A46] rounded-lg px-4 py-3 text-xs sm:text-sm font-semibold text-slate-800 outline-none transition-all placeholder:text-slate-400"
                />
              </div>

              {/* Course */}
              <div className="space-y-1">
                <label className="text-[10px] font-bold tracking-wider text-slate-500 uppercase block">Select Course</label>
                <select
                  required
                  value={formData.course}
                  onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                  className="w-full bg-white border border-slate-200 focus:border-[#112A46] rounded-lg px-4 py-3 text-xs sm:text-sm font-semibold text-slate-700 outline-none transition-all cursor-pointer appearance-none"
                >
                  <option value="" disabled>Choose a course</option>
                  <option value="Cabin Crew (Air Hostess) & Hospitality Management">Cabin Crew (Air Hostess) & Hospitality Management</option>
                  <option value="Airport Ground Staff & Hospitality Management">Airport Ground Staff & Hospitality Management</option>
                  <option value="AI & Data Science">AI & Data Science</option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={!formData.name.trim() || formData.phone.length !== 10 || !formData.course}
                  className="w-full py-4 bg-[#DF1818] hover:bg-[#c41212] disabled:bg-slate-300 disabled:text-slate-400 disabled:cursor-not-allowed text-white rounded-full text-xs sm:text-sm font-bold shadow-lg active:scale-[0.98] transition-all flex items-center justify-center cursor-pointer gap-2"
                >
                  Secure Your Spot Now ➔
                </button>
              </div>
            </form>
            <p className="text-[10px] text-slate-400 text-center font-medium mt-3">
              Our expert will call you shortly.
            </p>
          </div>
        </div>
      </section>

      {/* Block 4b: Quick Answer callout */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 pb-10">
        <div className="bg-[#EFF6FF] border border-blue-200 rounded-[20px] p-6 text-left">
          <h4 className="font-outfit font-extrabold text-[#112A46] text-lg sm:text-xl mb-2">
            Quick Answer – For {locationInfo.area} Students
          </h4>
          <p className="text-slate-600 font-sans text-sm sm:text-base font-semibold leading-relaxed">
            {locationInfo.quickAnswerText}
          </p>
        </div>
      </section>

      {/* Block 4c: Quick Facts table & Block 4d: Nearest branch block */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 pb-16 grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Quick Facts Table (Left 7 Cols) */}
        <div className="lg:col-span-7 text-left space-y-4">
          <h3 className="text-2xl font-outfit font-extrabold text-[#112A46]">Quick Facts</h3>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
            <table className="w-full text-left border-collapse bg-white">
              <tbody className="divide-y divide-slate-100 text-xs sm:text-sm font-semibold text-slate-700">
                {parsedContent && parsedContent.tableData.length > 0 ? (
                  parsedContent.tableData.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50">
                      <td className="p-3 bg-slate-50 font-bold text-[#112A46] w-1/3">{row.label}</td>
                      <td className="p-3">{row.value}</td>
                    </tr>
                  ))
                ) : (
                  <>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3 bg-slate-50 font-bold text-[#112A46] w-1/3">Address</td>
                      <td className="p-3">107 &amp; 108, Sai Infotech, Patel Chowk, Opposite Railway Station, Pant Nagar, Ghatkopar East, Mumbai, Maharashtra – 400077</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3 bg-slate-50 font-bold text-[#112A46]">Travel Info</td>
                      <td className="p-3">{locationInfo.travelTimeText}</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3 bg-slate-50 font-bold text-[#112A46]">Areas Covered</td>
                      <td className="p-3">{locationInfo.areasCovered}</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3 bg-slate-50 font-bold text-[#112A46]">Courses</td>
                      <td className="p-3">
                        <ul className="list-disc pl-4 space-y-0.5">
                          <li>Cabin Crew (Air Hostess) &amp; Hospitality Management</li>
                          <li>Airport Ground Staff &amp; Hospitality Management</li>
                          <li>AI &amp; Data Science</li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3 bg-slate-50 font-bold text-[#112A46]">Duration</td>
                      <td className="p-3">6 to 12 Months</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3 bg-slate-50 font-bold text-[#112A46]">Eligibility</td>
                      <td className="p-3">12th Pass / Graduate (Aviation), Any stream (AI)</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3 bg-slate-50 font-bold text-[#112A46]">Certification</td>
                      <td className="p-3">Maharashtra Government Certified (Aviation) / Industry-Oriented Professional Training (AI)</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3 bg-slate-50 font-bold text-[#112A46]">Timings</td>
                      <td className="p-3">Flexible Morning/Afternoon Batches</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3 bg-slate-50 font-bold text-[#112A46]">Scholarship</td>
                      <td className="p-3">Upto 50% Available</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3 bg-slate-50 font-bold text-[#112A46]">Placement</td>
                      <td className="p-3">100% Placement Assistance Provided</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3 bg-slate-50 font-bold text-[#112A46]">Counselling</td>
                      <td className="p-3">Free Walk-in Career Counselling</td>
                    </tr>
                  </>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Nearest Branch Block with Interactive Google Map (Right 5 Cols) */}
        <div className="lg:col-span-5 text-left space-y-4">
          <h3 className="text-2xl font-outfit font-extrabold text-[#112A46]">Ghatkopar Branch (Nearest to {locationInfo.area})</h3>
          <div className="bg-white border border-[#E1E5ED] rounded-[24px] p-6 shadow-md flex flex-col justify-between h-[calc(100%-2rem)]">
            <div className="space-y-4">
              
              {/* Interactive Google Map iframe */}
              <div className="w-full rounded-2xl overflow-hidden border border-slate-200 shadow-sm aspect-[1.3] relative bg-neutral-100">
                <iframe
                  src="https://maps.google.com/maps?q=Amigo%20Academy%20Ghatkopar%20Sai%20Infotech%20Mumbai&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ghatkopar campus map location"
                  className="absolute inset-0 w-full h-full"
                ></iframe>
              </div>

              <p className="text-slate-600 font-sans text-xs sm:text-sm font-semibold leading-relaxed">
                <strong>Address:</strong> 107 &amp; 108, Sai Infotech, Patel Chowk, Opposite Railway Station, Pant Nagar, Ghatkopar East, Mumbai, Maharashtra – 400077
              </p>
            </div>

            <div className="pt-6 space-y-3">
              <a
                href="https://maps.google.com/maps?q=Amigo%20Academy%20Ghatkopar%20Sai%20Infotech%20Mumbai"
                target="_blank"
                rel="noreferrer"
                className="w-full py-4 bg-[#DF1818] hover:bg-[#c41212] text-white rounded-full text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 shadow-md"
              >
                Get Directions 🧭
              </a>

              <div className="grid grid-cols-2 gap-3">
                <a
                  href="tel:+919987588932"
                  className="py-3 bg-white border border-[#E1E5ED] text-slate-700 hover:text-[#DF1818] hover:border-[#DF1818] rounded-full text-xs sm:text-sm font-extrabold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                >
                  📞 Call Now
                </a>
                <a
                  href="https://wa.me/919987588932"
                  target="_blank"
                  rel="noreferrer"
                  className="py-3 bg-[#25d366] hover:bg-[#20ba5a] text-white rounded-full text-xs sm:text-sm font-extrabold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                >
                  💬 WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Block 5: Stats Bar (Locked) */}
      <section className="bg-slate-50 py-12 border-y border-neutral-100 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white border border-neutral-200/60 rounded-[20px] p-6 text-center shadow-sm">
            <p className="text-3xl sm:text-[38px] font-outfit font-extrabold text-[#1C3E8A] mb-1">10,000+</p>
            <p className="text-slate-500 font-sans text-xs sm:text-[13px] font-bold">Students Trained</p>
          </div>

          <div className="bg-white border border-neutral-200/60 rounded-[20px] p-6 text-center shadow-sm">
            <p className="text-3xl sm:text-[38px] font-outfit font-extrabold text-[#1C3E8A] mb-1">4.6/5</p>
            <p className="text-slate-500 font-sans text-xs sm:text-[13px] font-bold">Google Rating</p>
          </div>

          <div className="bg-white border border-neutral-200/60 rounded-[20px] p-6 text-center shadow-sm">
            <p className="text-3xl sm:text-[38px] font-outfit font-extrabold text-[#1C3E8A] mb-1">3</p>
            <p className="text-slate-500 font-sans text-xs sm:text-[13px] font-bold">Branches</p>
          </div>

          <div className="bg-white border border-neutral-200/60 rounded-[20px] p-6 text-center shadow-sm">
            <p className="text-3xl sm:text-[38px] font-outfit font-extrabold text-[#1C3E8A] mb-1">200+</p>
            <p className="text-slate-500 font-sans text-xs sm:text-[13px] font-bold">Hiring Partners</p>
          </div>
        </div>
      </section>

      {/* Block 6: Three Course H2 sections with area keyword */}
      <section className="bg-white py-16 sm:py-24 px-6 border-b border-neutral-100">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-[40px] font-outfit font-extrabold text-[#112A46] leading-tight mb-4">
              Our Premium Courses
            </h2>
            <p className="text-slate-500 font-sans text-xs sm:text-sm font-semibold max-w-2xl mx-auto">
              Industry-aligned curriculum designed to make you job-ready in 6 to 12 months.
            </p>
          </div>

          {/* Course 1: Cabin Crew */}
          <div className="bg-white rounded-[24px] border border-[#E1E5ED] shadow-sm overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-6 p-6 sm:p-8 relative">
            <div className="lg:col-span-4 rounded-xl overflow-hidden h-64 lg:h-full">
              <img src={course1Img} alt="Air Hostess Course" className="w-full h-full object-cover" />
            </div>
            <div className="lg:col-span-8 flex flex-col justify-between text-left space-y-6">
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl sm:text-2xl font-outfit font-extrabold text-[#112A46]">
                    {locationInfo.cabinCrewTitle}
                  </h3>
                  <span className="bg-blue-50 text-blue-600 text-[10px] font-extrabold uppercase px-3 py-1 rounded-full shrink-0">
                    6 Months
                  </span>
                </div>
                
                <p className="text-slate-500 font-sans text-sm font-medium leading-relaxed">
                  {locationInfo.cabinCrewDesc}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm font-semibold text-slate-600">
                  <div className="flex items-center gap-2">
                    <span className="text-green-500">✔</span> Communication Skills
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-500">✔</span> Grooming &amp; Etiquette
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-500">✔</span> In-flight Safety
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-500">✔</span> Mock Interviews
                  </div>
                </div>
              </div>
              <div className="pt-2">
                <button
                  onClick={() => { navigate({ to: "/career-guide/cabin-crew" as any }); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                  className="bg-[#112A46] hover:bg-[#0b1d31] text-white font-sans font-bold text-xs sm:text-sm px-6 py-3 rounded-lg transition-all cursor-pointer"
                >
                  View Syllabus
                </button>
              </div>
            </div>
          </div>

          {/* Course 2: Airport Ground Staff */}
          <div className="bg-white rounded-[24px] border border-[#E1E5ED] shadow-sm overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-6 p-6 sm:p-8 relative">
            <div className="lg:col-span-4 rounded-xl overflow-hidden h-64 lg:h-full">
              <img src={course2Img} alt="Airport Ground Staff Course" className="w-full h-full object-cover" />
            </div>
            <div className="lg:col-span-8 flex flex-col justify-between text-left space-y-6">
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl sm:text-2xl font-outfit font-extrabold text-[#112A46]">
                    {locationInfo.groundStaffTitle}
                  </h3>
                  <span className="bg-blue-50 text-blue-600 text-[10px] font-extrabold uppercase px-3 py-1 rounded-full shrink-0">
                    6 Months
                  </span>
                </div>

                <p className="text-slate-500 font-sans text-sm font-medium leading-relaxed">
                  {locationInfo.groundStaffDesc}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm font-semibold text-slate-600">
                  <div className="flex items-center gap-2">
                    <span className="text-green-500">✔</span> Terminal Operations
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-500">✔</span> Airline Ticketing
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-500">✔</span> Passenger Handling
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-500">✔</span> Aviation Security
                  </div>
                </div>
              </div>
              <div className="pt-2">
                <button
                  onClick={() => { navigate({ to: "/career-guide/airport-ground-staff" as any }); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                  className="bg-[#112A46] hover:bg-[#0b1d31] text-white font-sans font-bold text-xs sm:text-sm px-6 py-3 rounded-lg transition-all cursor-pointer"
                >
                  View Syllabus
                </button>
              </div>
            </div>
          </div>

          {/* Course 3: AI & Data Science */}
          <div className="bg-white rounded-[24px] border border-[#E1E5ED] shadow-sm overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-6 p-6 sm:p-8 relative">
            <div className="lg:col-span-4 rounded-xl overflow-hidden h-64 lg:h-full">
              <img src={course3Img} alt="AI Course" className="w-full h-full object-cover" />
            </div>
            <div className="lg:col-span-8 flex flex-col justify-between text-left space-y-6">
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl sm:text-2xl font-outfit font-extrabold text-[#112A46]">
                    {locationInfo.aiTitle}
                  </h3>
                  <span className="bg-amber-50 text-amber-600 text-[10px] font-extrabold uppercase px-3 py-1 rounded-full shrink-0">
                    12 Months
                  </span>
                </div>

                <p className="text-slate-500 font-sans text-sm font-medium leading-relaxed">
                  {locationInfo.aiDesc}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm font-semibold text-slate-600">
                  <div className="flex items-center gap-2">
                    <span className="text-green-500">✔</span> Python Programming
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-500">✔</span> Machine Learning
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-500">✔</span> Data Visualization
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-500">✔</span> Live Projects
                  </div>
                </div>
              </div>
              <div className="pt-2">
                <button
                  onClick={() => { navigate({ to: "/career-guide/ai-data-science" as any }); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                  className="bg-[#112A46] hover:bg-[#0b1d31] text-white font-sans font-bold text-xs sm:text-sm px-6 py-3 rounded-lg transition-all cursor-pointer"
                >
                  View Syllabus
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Block: What Makes Amigo Different (Static) */}
      <section className="bg-slate-50/50 py-16 sm:py-24 px-6 border-b border-slate-100 text-center">
        <div className="max-w-5xl mx-auto bg-white rounded-3xl p-8 sm:p-12 border border-slate-100 shadow-sm">
          <h2 className="text-3xl font-outfit font-extrabold text-[#112A46] mb-12">
            What Makes Amigo Different
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left">
            {/* Feature 1 */}
            <div className="flex items-start gap-4">
              <div className="shrink-0 pt-1">
                <svg className="w-8 h-8 text-[#D97706]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <div className="space-y-1">
                <h4 className="font-outfit font-bold text-[#112A46] text-lg">
                  Maharashtra Govt Certified Aviation Courses
                </h4>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-semibold">
                  A recognised qualification for our Air Hostess / Cabin Crew and Airport Ground Staff programmes.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-start gap-4">
              <div className="shrink-0 pt-1">
                <svg className="w-8 h-8 text-[#D97706]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <div className="space-y-1">
                <h4 className="font-outfit font-bold text-[#112A46] text-lg">
                  Easy EMI Options
                </h4>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-semibold">
                  Scholarship up to ₹50,000 plus flexible zero-interest EMI on all courses.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex items-start gap-4">
              <div className="shrink-0 pt-1">
                <svg className="w-8 h-8 text-[#D97706]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2-2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="space-y-1">
                <h4 className="font-outfit font-bold text-[#112A46] text-lg">
                  Strong Placement Support
                </h4>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-semibold">
                  Active hiring connections across aviation and technology, including IndiGo, Air India, Emirates, Mumbai Airport and IT and AI employers. We keep putting your profile forward.
                </p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="flex items-start gap-4">
              <div className="shrink-0 pt-1">
                <svg className="w-8 h-8 text-[#D97706]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                </svg>
              </div>
              <div className="space-y-1">
                <h4 className="font-outfit font-bold text-[#112A46] text-lg">
                  Lifetime Career Support
                </h4>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-semibold">
                  Support does not stop at graduation. Ongoing career counselling and job connections at every stage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Block: Career & Placement Support (Static) */}
      <section className="bg-white py-16 sm:py-24 px-6 border-b border-slate-100 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-3xl font-outfit font-extrabold text-[#112A46]">
            Career &amp; Placement Support
          </h2>
          <p className="text-slate-600 font-sans font-semibold text-sm sm:text-base leading-relaxed max-w-3xl mx-auto">
            We provide dedicated placement assistance, mock interviews, resume building and soft-skills training to help students prepare for opportunities with airlines, airports, aviation companies and technology employers. Final selection depends on the employer's eligibility requirements and recruitment process.
          </p>
        </div>
      </section>

      {/* Block 7: How to Reach Transit Block */}
      <section className="bg-slate-50/50 py-16 sm:py-24 px-6 border-t border-b border-slate-100 text-center">
        <div className="max-w-7xl mx-auto space-y-12">
          <h2 className="text-3xl font-outfit font-extrabold text-[#112A46]">
            How to Reach from {locationInfo.area}
          </h2>

          <div className="flex flex-wrap gap-6 justify-center">
            {locationInfo.transitItems.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-8 flex flex-col items-center text-center shadow-sm border border-neutral-100 space-y-4 w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.33%-16px)] max-w-sm"
              >
                <h4 className="font-outfit font-bold text-[#112A46] text-base uppercase tracking-wider">
                  {item.title}
                </h4>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-semibold">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Block 8: Why Consider Amigo Academy? */}
      <section className="bg-white py-16 sm:py-24 px-6 border-b border-slate-100 text-center">
        <div className="max-w-5xl mx-auto space-y-12">
          <h2 className="text-3xl font-outfit font-extrabold text-[#112A46]">
            Why Consider Amigo Academy from {locationInfo.area}?
          </h2>

          <div className="max-w-3xl mx-auto bg-slate-50/50 rounded-2xl p-6 sm:p-8 border border-neutral-100 text-center">
            <p className="text-slate-600 font-sans font-semibold text-sm sm:text-base leading-relaxed">
              {locationInfo.whyConsiderText}
            </p>
          </div>
        </div>
      </section>

      {/* Block 13: FAQs — 3 area-specific then 3 standard */}
      <section className="bg-[#EFF6FF] py-16 sm:py-24 px-6 border-b border-slate-100">
        <div className="max-w-3xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl sm:text-[40px] font-outfit font-extrabold text-[#112A46] leading-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-500 font-sans text-xs sm:text-sm font-semibold">
              Got questions? We've got answers. Find out everything you need to know about our courses.
            </p>
          </div>

          <div className="space-y-4 text-left">
            {locationInfo.faqs.map((faq, idx) => (
              <FAQAccordionItem key={idx} index={idx} question={faq.question} answer={faq.answer} />
            ))}
          </div>

          {/* Rating Badge */}
          <div className="flex justify-center pt-8">
            <div className="bg-white border border-[#E1E5ED] px-6 py-3 rounded-full flex items-center gap-3 shadow-sm text-xs font-bold text-[#112A46]">
              <span className="text-[#ffd300]">★★★★★</span>
              <span>4.6/5</span>
              <span className="text-slate-300">|</span>
              <span className="text-slate-500 font-semibold">Based on 740+ Reviews</span>
            </div>
          </div>
        </div>
      </section>

      {/* Block 14: Reviewed-by line + updated date */}
      <section className="py-6 px-6 border-b border-slate-100 text-center">
        <p className="text-xs sm:text-sm text-slate-400 font-semibold font-sans">
          Reviewed by the Amigo Academy Academic Team · Last updated {currentMonthYear}
        </p>
      </section>

      {/* Block 15: Related pages */}
      <section className="bg-slate-50/20 py-16 px-6 text-left">
        <div className="max-w-4xl mx-auto space-y-6">
          <h4 className="text-lg font-outfit font-extrabold text-[#112A46]">Related Resources</h4>
          <p className="text-slate-500 font-sans text-sm font-semibold leading-relaxed">
            Interested in learning more? Read our guides on the{" "}
            <Link to="/career-guide/cabin-crew" className="text-[#DF1818] hover:underline">Air Hostess / Cabin Crew course</Link>,{" "}
            <Link to="/career-guide/airport-ground-staff" className="text-[#DF1818] hover:underline">Airport Ground Staff course</Link>, and the{" "}
            <Link to="/career-guide/ai-data-science" className="text-[#DF1818] hover:underline">AI &amp; Data Science course</Link>. You can also review details on{" "}
            <Link to="/career-guides" className="text-[#DF1818] hover:underline">Air hostess course fees in Mumbai</Link> and{" "}
            <Link to="/career-guides" className="text-[#DF1818] hover:underline">Cabin crew eligibility after 12th</Link>.
          </p>
          <div className="flex flex-wrap gap-3 pt-4">
            <Link to="/scholarship" className="px-4 py-2 bg-white border border-slate-200 text-slate-500 hover:text-[#DF1818] rounded-full text-xs font-semibold shadow-sm transition-all">
              Amigo Academy Scholarship
            </Link>
            <Link to="/ghatkopar-branch" className="px-4 py-2 bg-white border border-slate-200 text-slate-500 hover:text-[#DF1818] rounded-full text-xs font-semibold shadow-sm transition-all">
              Ghatkopar Branch
            </Link>
            <Link to="/locations" className="px-4 py-2 bg-white border border-slate-200 text-slate-500 hover:text-[#DF1818] rounded-full text-xs font-semibold shadow-sm transition-all">
              All areas we serve
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
