import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { useState, useEffect, useMemo } from 'react';
import { useNavigate, useParams, Link } from '@tanstack/react-router';
import { c as fetchBlogPosts, f as fetchBlogPostBySlug, s as submitCounsellorForm } from './router-CBeBCufh.mjs';

const innerBlogImg = "/assets/innerblogimg-CEuEPE_5.png";
const innerBlogImg1 = "/assets/innerblogimg2-3I5D_p3V.png";
const decodeHTMLEntities = (text) => {
  if (!text) return "";
  const textArea = document.createElement("textarea");
  textArea.innerHTML = text;
  return textArea.value;
};
function FAQAccordionItem({ index, question, answer }) {
  const [isOpen, setIsOpen] = useState(index === 0);
  return /* @__PURE__ */ jsxs("div", { className: `bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.03)] border transition-all duration-300 ${isOpen ? "border-blue-200/80 shadow-[0_8px_30px_rgba(37,99,235,0.08)]" : "border-slate-100/90"}`, children: [
    /* @__PURE__ */ jsxs(
      "button",
      {
        onClick: () => setIsOpen(!isOpen),
        className: "w-full flex items-center justify-between px-6 py-5 text-left cursor-pointer group",
        children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 pr-4", children: [
            /* @__PURE__ */ jsx("div", { className: `w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0 transition-colors ${isOpen ? "bg-[#1e3a8a] text-white" : "bg-[#eff6ff] text-[#1e3a8a]"}`, children: index + 1 }),
            /* @__PURE__ */ jsx("span", { className: "text-sm sm:text-base font-sans font-bold text-[#0b2f61] leading-snug", children: question })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "text-slate-400 shrink-0", children: /* @__PURE__ */ jsx(
            "svg",
            {
              className: `w-4 h-4 text-[#1e3a8a] transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`,
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
    isOpen && /* @__PURE__ */ jsx("div", { className: "px-6 pb-6 pt-1", children: /* @__PURE__ */ jsx("div", { className: "bg-[#f8fafc] border-l-4 border-[#1e3a8a] p-4 rounded-r-xl", children: /* @__PURE__ */ jsx("p", { className: "text-slate-600 font-sans text-xs sm:text-sm leading-relaxed font-medium", children: answer }) }) })
  ] });
}
function InnerBlog() {
  var _a, _b, _c, _d, _e, _f, _g;
  useNavigate();
  const { slug } = useParams({ strict: false });
  const [post, setPost] = useState(null);
  const [allPosts, setAllPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeTocId, setActiveTocId] = useState("");
  const [isTocMobileOpen, setIsTocMobileOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    course: ""
  });
  useEffect(() => {
    fetchBlogPosts().then((posts) => setAllPosts(posts)).catch(() => {
    });
  }, []);
  useEffect(() => {
    if (slug) {
      setLoading(true);
      fetchBlogPostBySlug(slug).then((data) => {
        setPost(data);
        setLoading(false);
      }).catch((err) => {
        console.error("Error loading post:", err);
        setLoading(false);
      });
    } else {
      setLoading(false);
    }
  }, [slug]);
  const parsedBlog = useMemo(() => {
    var _a2;
    if (!post || !post.content || !post.content.rendered) {
      return {
        isFallback: true,
        toc: [
          { id: "eligibility", text: "1. Cabin Crew Eligibility Criteria", level: 2 },
          { id: "skills", text: "2. Essential Skills Required", level: 2 },
          { id: "duties", text: "3. Responsibilities & Job Roles", level: 2 },
          { id: "selection", text: "4. Airline Selection Process", level: 2 },
          { id: "training", text: "5. Training & Certification", level: 2 },
          { id: "salary", text: "6. Cabin Crew Salary Structure", level: 2 },
          { id: "steps", text: "7. Step-by-Step Career Roadmap", level: 2 }
        ],
        quickAnswerHtml: "",
        bodyHtml: "",
        imgs: [],
        faqs: [
          {
            question: "What is the age limit for Air Hostess / Cabin Crew?",
            answer: "For most domestic and international airlines, candidates aged 17 to 24 years are preferred for entry-level cabin crew positions."
          },
          {
            question: "Can I become an Air Hostess after 12th?",
            answer: "Yes! 12th pass (from any recognized board) is the minimum educational qualification needed to enroll in Amigo Academy's Cabin Crew program."
          },
          {
            question: "Is there a height requirement for Cabin Crew?",
            answer: "Yes, female candidates typically require a minimum height of 155 cm to 157 cm (or reach 212 cm arm reach), while male candidates require 170 cm."
          },
          {
            question: "What is the starting salary for an Air Hostess in India?",
            answer: "Freshers can expect \u20B925,000 to \u20B940,000 per month in domestic airlines, and up to \u20B980,000 to \u20B91.5 Lakh per month in international airlines."
          },
          {
            question: "Is Amigo Academy's course government certified?",
            answer: "Yes! Amigo Academy's Aviation courses are Maharashtra Government Certified."
          }
        ]
      };
    }
    const parser = new DOMParser();
    const doc = parser.parseFromString(post.content.rendered, "text/html");
    const extractedFaqs = [];
    const faqHeadingEl = Array.from(doc.querySelectorAll("h2, h3")).find(
      (h) => {
        var _a3, _b2;
        return ((_a3 = h.textContent) == null ? void 0 : _a3.toLowerCase().includes("frequently asked")) || ((_b2 = h.textContent) == null ? void 0 : _b2.toLowerCase().includes("faq"));
      }
    );
    if (faqHeadingEl) {
      let currentEl = faqHeadingEl.nextElementSibling;
      let currentQ = "";
      let currentA = "";
      while (currentEl) {
        const text = ((_a2 = currentEl.textContent) == null ? void 0 : _a2.trim()) || "";
        const isNextHeading = ["H1", "H2", "H3", "H4"].includes(currentEl.tagName);
        if (isNextHeading) break;
        if (text.startsWith("Q:") || text.startsWith("Q :-") || text.startsWith("Q.")) {
          if (currentQ && currentA) {
            extractedFaqs.push({ question: currentQ, answer: currentA });
            currentA = "";
          }
          currentQ = text.replace(/^Q\s*[:.-]\s*/i, "").trim();
        } else if (text.startsWith("A:") || text.startsWith("A :-") || text.startsWith("A.")) {
          currentA = text.replace(/^A\s*[:.-]\s*/i, "").trim();
        } else if (currentQ && !currentA) {
          currentA = text;
        } else if (currentQ && currentA) {
          currentA += " " + text;
        }
        const next = currentEl.nextElementSibling;
        currentEl.remove();
        currentEl = next;
      }
      if (currentQ && currentA) {
        extractedFaqs.push({ question: currentQ, answer: currentA });
      }
      faqHeadingEl.remove();
    }
    const headings = doc.querySelectorAll("h2, h3");
    const tocList = [];
    headings.forEach((heading, idx) => {
      const text = decodeHTMLEntities(heading.textContent || `Section ${idx + 1}`);
      const id = heading.id || `heading-${idx}`;
      heading.id = id;
      tocList.push({
        id,
        text,
        level: heading.tagName === "H2" ? 2 : 3
      });
    });
    const allParagraphs = Array.from(doc.querySelectorAll("p"));
    const quickAnswerEl = allParagraphs.find((p) => {
      var _a3;
      return (_a3 = p.textContent) == null ? void 0 : _a3.trim().toLowerCase().startsWith("quick answer");
    });
    let quickAnswerHtml = "";
    if (quickAnswerEl) {
      const card = doc.createElement("div");
      card.className = "quick-answer-card";
      const badge = doc.createElement("div");
      badge.className = "quick-answer-title";
      badge.innerHTML = `<span class="w-5 h-5 rounded-full bg-amber-100 border border-amber-300 text-amber-600 flex items-center justify-center text-xs font-bold shrink-0">?</span> Quick answer`;
      card.appendChild(badge);
      let curr = quickAnswerEl;
      const elementsToMove = [];
      while (curr && curr.tagName !== "H2") {
        const next = curr.nextElementSibling;
        elementsToMove.push(curr);
        if (!next || next.tagName === "H2") break;
        curr = next;
      }
      elementsToMove.forEach((el, idx) => {
        if (idx === 0) {
          el.innerHTML = el.innerHTML.replace(/<strong>\s*quick answer\s*:?\s*<\/strong>/i, "").replace(/^quick answer\s*[:.-]?\s*/i, "").trim();
        }
        card.appendChild(el);
      });
      quickAnswerHtml = card.outerHTML;
    }
    const imgs = Array.from(doc.querySelectorAll("img")).map((img) => img.src);
    const contentHtml = doc.body.innerHTML;
    return {
      isFallback: false,
      toc: tocList,
      quickAnswerHtml,
      bodyHtml: contentHtml,
      imgs,
      faqs: extractedFaqs.length > 0 ? extractedFaqs : [
        {
          question: "What is the admission process for this course?",
          answer: "Call us at +919987588932 or fill the enquiry form to schedule a free counselling call and branch walk-in assessment."
        },
        {
          question: "Are scholarship options available?",
          answer: "Yes! Scholarships up to \u20B950,000 are available based on eligibility check."
        },
        {
          question: "Do you offer placement assistance?",
          answer: "Yes, 100% placement support with mock interviews, grooming sessions, and direct campus recruitment."
        }
      ]
    };
  }, [post]);
  const scrollToHeading = (id) => {
    setActiveTocId(id);
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -90;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };
  const handleFormSubmit = async (e) => {
    var _a2;
    e.preventDefault();
    if (!formData.name.trim() || formData.phone.length !== 10 || !formData.course) return;
    setIsSubmitting(true);
    try {
      await submitCounsellorForm({
        name: formData.name,
        phone: formData.phone,
        course: formData.course,
        form_location: `Blog Inner Page: ${((_a2 = post == null ? void 0 : post.title) == null ? void 0 : _a2.rendered) || slug || "General Blog"}`
      });
      setFormSubmitted(true);
    } catch (err) {
      console.error("Failed to submit blog counsellor form:", err);
      alert("Failed to submit enquiry. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
  if (loading) {
    return /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center py-40 min-h-[50vh] bg-white", children: [
      /* @__PURE__ */ jsx("div", { className: "w-12 h-12 border-4 border-[#e31e24] border-t-transparent rounded-full animate-spin" }),
      /* @__PURE__ */ jsx("p", { className: "text-slate-500 font-sans font-bold mt-4", children: "Loading article..." })
    ] });
  }
  const dateStr = post ? new Date(post.date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric"
  }) : "May 24, 2026";
  ((_c = (_b = (_a = post == null ? void 0 : post._embedded) == null ? void 0 : _a.author) == null ? void 0 : _b[0]) == null ? void 0 : _c.name) || "Amigo Academy";
  const words = ((_d = post == null ? void 0 : post.content) == null ? void 0 : _d.rendered) ? post.content.rendered.replace(/<[^>]+>/g, "").split(/\s+/).length : 600;
  const readTime = post ? `${Math.max(1, Math.ceil(words / 200))} min read` : "8 min read";
  const featuredImage = ((_g = (_f = (_e = post == null ? void 0 : post._embedded) == null ? void 0 : _e["wp:featuredmedia"]) == null ? void 0 : _f[0]) == null ? void 0 : _g.source_url) || (post == null ? void 0 : post.featured_media_src_url) || (post == null ? void 0 : post.jetpack_featured_media_url) || parsedBlog.imgs && parsedBlog.imgs[0] || innerBlogImg;
  allPosts.filter((p) => p.slug !== slug).slice(0, 5);
  const renderCounsellorForm = () => /* @__PURE__ */ jsxs("div", { className: "bg-white border-4 border-[#0b192c] rounded-[24px] p-6 shadow-md text-center", children: [
    /* @__PURE__ */ jsxs("h3", { className: "text-xl sm:text-2xl font-extrabold text-[#0b2f61] font-sans leading-tight mb-1", children: [
      "Talk to Our Career",
      /* @__PURE__ */ jsx("br", {}),
      "Counsellor"
    ] }),
    /* @__PURE__ */ jsx("p", { className: "text-slate-400 text-xs font-medium font-sans mb-6", children: "Get free guidance & course details." }),
    formSubmitted ? /* @__PURE__ */ jsx("div", { className: "bg-emerald-50 border border-emerald-300 p-4 rounded-xl text-center text-xs font-bold text-emerald-800", children: "\u2713 Thank you! Our expert will call you shortly." }) : /* @__PURE__ */ jsxs("form", { onSubmit: handleFormSubmit, className: "space-y-4 text-left", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { className: "block text-[11px] font-bold text-slate-700 mb-1", children: "Full Name" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "text",
            required: true,
            placeholder: "Enter your full name",
            value: formData.name,
            onChange: (e) => setFormData({ ...formData, name: e.target.value }),
            className: "w-full bg-white border border-slate-200 text-slate-800 text-xs px-3.5 py-3 rounded-lg focus:outline-none focus:border-[#0b2f61] placeholder-slate-400 font-medium"
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { className: "block text-[11px] font-bold text-slate-700 mb-1", children: "Mobile Number" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "tel",
            required: true,
            placeholder: "Enter your mobile number",
            value: formData.phone,
            onChange: (e) => setFormData({ ...formData, phone: e.target.value }),
            className: "w-full bg-white border border-slate-200 text-slate-800 text-xs px-3.5 py-3 rounded-lg focus:outline-none focus:border-[#0b2f61] placeholder-slate-400 font-medium"
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { className: "block text-[11px] font-bold text-slate-700 mb-1", children: "Select Course" }),
        /* @__PURE__ */ jsxs(
          "select",
          {
            required: true,
            value: formData.course,
            onChange: (e) => setFormData({ ...formData, course: e.target.value }),
            className: "w-full bg-white border border-slate-200 text-slate-800 text-xs px-3.5 py-3 rounded-lg focus:outline-none focus:border-[#0b2f61] font-medium cursor-pointer",
            children: [
              /* @__PURE__ */ jsx("option", { value: "", disabled: true, children: "Choose a course" }),
              /* @__PURE__ */ jsx("option", { value: "Cabin Crew (Air Hostess) & Hospitality Management", children: "Cabin Crew (Air Hostess) & Hospitality Management" }),
              /* @__PURE__ */ jsx("option", { value: "Airport Ground Staff & Hospitality Management", children: "Airport Ground Staff & Hospitality Management" }),
              /* @__PURE__ */ jsx("option", { value: "AI & Data Science", children: "AI & Data Science" })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxs(
        "button",
        {
          type: "submit",
          disabled: isSubmitting || !formData.name.trim() || formData.phone.length !== 10 || !formData.course,
          className: "w-full bg-[#DF1818] hover:bg-[#c41212] disabled:bg-slate-300 disabled:text-slate-400 disabled:cursor-not-allowed text-white font-extrabold text-xs py-3.5 rounded-full shadow-md transition-all active:scale-[0.95] cursor-pointer mt-4 flex items-center justify-center gap-2",
          children: [
            /* @__PURE__ */ jsx("span", { children: isSubmitting ? "Submitting..." : "Secure Your Spot Now" }),
            /* @__PURE__ */ jsx("span", { children: "\u2794" })
          ]
        }
      ),
      /* @__PURE__ */ jsx("p", { className: "text-[10px] text-slate-400 text-center font-medium mt-3", children: "Our expert will call you shortly." })
    ] })
  ] });
  const renderTableOfContents = (isMobile = false) => {
    if (parsedBlog.toc.length === 0) return null;
    if (isMobile) {
      return /* @__PURE__ */ jsxs("div", { className: "bg-white border border-slate-200/90 rounded-[20px] p-5 shadow-sm text-left transition-all", children: [
        /* @__PURE__ */ jsxs(
          "button",
          {
            type: "button",
            onClick: () => setIsTocMobileOpen(!isTocMobileOpen),
            className: "w-full flex items-center justify-between font-outfit text-left cursor-pointer group",
            children: [
              /* @__PURE__ */ jsx("h3", { className: "text-base sm:text-lg font-extrabold text-[#0b2f61] font-outfit", children: "Table of Contents" }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1.5 text-xs text-[#1e3a8a] font-bold", children: [
                /* @__PURE__ */ jsx("span", { children: isTocMobileOpen ? "Hide" : "Show" }),
                /* @__PURE__ */ jsx(
                  "svg",
                  {
                    className: `w-4 h-4 text-[#1e3a8a] transition-transform duration-300 ${isTocMobileOpen ? "rotate-180" : ""}`,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    stroke: "currentColor",
                    strokeWidth: 2.5,
                    children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M19 9l-7 7-7-7" })
                  }
                )
              ] })
            ]
          }
        ),
        isTocMobileOpen && /* @__PURE__ */ jsx("ul", { className: "space-y-3 text-sm font-semibold text-[#1e3a8a] mt-4 pt-4 border-t border-slate-100", children: parsedBlog.toc.map((item) => /* @__PURE__ */ jsx("li", { className: item.level === 3 ? "pl-3" : "", children: /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => scrollToHeading(item.id),
            className: `text-left hover:underline transition-colors cursor-pointer leading-snug ${activeTocId === item.id ? "text-[#DF1818] font-bold" : ""}`,
            children: item.text
          }
        ) }, item.id)) })
      ] });
    }
    return /* @__PURE__ */ jsxs("div", { className: "bg-white border border-slate-200/90 rounded-[20px] p-6 shadow-sm text-left", children: [
      /* @__PURE__ */ jsx("h3", { className: "text-lg sm:text-xl font-extrabold text-[#0b2f61] font-outfit mb-4", children: "Table of Contents" }),
      /* @__PURE__ */ jsx("ul", { className: "space-y-3 text-sm sm:text-[15px] font-semibold text-[#1e3a8a]", children: parsedBlog.toc.map((item) => /* @__PURE__ */ jsx("li", { className: item.level === 3 ? "pl-3" : "", children: /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => scrollToHeading(item.id),
          className: `text-left hover:underline transition-colors cursor-pointer leading-snug ${activeTocId === item.id ? "text-[#DF1818] font-bold" : ""}`,
          children: item.text
        }
      ) }, item.id)) })
    ] });
  };
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col bg-white text-slate-800 font-sans", children: [
    /* @__PURE__ */ jsx("section", { className: "pt-8 sm:pt-12 pb-12 bg-white border-b border-slate-100", children: /* @__PURE__ */ jsxs("div", { className: "max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1.5 text-xs font-sans text-slate-400 mb-6", children: [
        /* @__PURE__ */ jsx(Link, { to: "/", className: "hover:text-[#e31e24] transition-colors", children: "Home" }),
        /* @__PURE__ */ jsx("span", { children: ">" }),
        /* @__PURE__ */ jsx(Link, { to: "/blog", className: "hover:text-[#e31e24] transition-colors", children: "Blog" }),
        /* @__PURE__ */ jsx("span", { children: ">" }),
        /* @__PURE__ */ jsx("span", { className: "font-bold text-[#e31e24] truncate max-w-[200px] sm:max-w-md", children: post ? decodeHTMLEntities(post.title.rendered) : "How to Become an Air Hostess After 12th" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-8 items-start", children: [
        /* @__PURE__ */ jsxs("div", { className: "lg:col-span-8 flex flex-col text-left", children: [
          /* @__PURE__ */ jsx("h1", { className: "max-w-[680px] text-[32px] sm:text-[36px] lg:text-[40px] font-extrabold text-[#0b2f61] font-outfit leading-[1.03] tracking-[-0.025em] mb-5", children: post ? decodeHTMLEntities(post.title.rendered) : /* @__PURE__ */ jsxs(Fragment, { children: [
            "How to Become an ",
            /* @__PURE__ */ jsx("br", { className: "hidden sm:inline" }),
            "Air Hostess ",
            /* @__PURE__ */ jsx("span", { className: "text-[#d97706] font-extrabold", children: "After 12th" })
          ] }) }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center justify-between gap-4 py-2 mb-6", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex flex-col text-left", children: [
              /* @__PURE__ */ jsx("span", { className: "text-sm sm:text-base font-extrabold text-[#0b2f61] font-sans", children: "By Amigo Academy Academic Team" }),
              /* @__PURE__ */ jsxs("div", { className: "text-xs text-slate-400 font-semibold flex items-center mt-1", children: [
                /* @__PURE__ */ jsx("span", { children: dateStr }),
                /* @__PURE__ */ jsx("span", { className: "mx-2", children: "\u2022" }),
                /* @__PURE__ */ jsx("span", { children: readTime })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx("span", { className: "p-2 text-slate-600", children: /* @__PURE__ */ jsx("svg", { className: "w-4 h-4 fill-current", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { d: "M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z" }) }) }),
              /* @__PURE__ */ jsx(
                "a",
                {
                  href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`,
                  target: "_blank",
                  rel: "noreferrer",
                  className: "w-7 h-7 rounded-full bg-[#0b2f61] text-white flex items-center justify-center hover:opacity-90 transition-opacity",
                  "aria-label": "Facebook",
                  children: /* @__PURE__ */ jsx("svg", { className: "w-3.5 h-3.5 fill-current", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { d: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" }) })
                }
              ),
              /* @__PURE__ */ jsx(
                "a",
                {
                  href: `https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}`,
                  target: "_blank",
                  rel: "noreferrer",
                  className: "w-7 h-7 rounded-full bg-black text-white flex items-center justify-center hover:opacity-90 transition-opacity",
                  "aria-label": "X",
                  children: /* @__PURE__ */ jsx("svg", { className: "w-3.5 h-3.5 fill-current", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" }) })
                }
              ),
              /* @__PURE__ */ jsx(
                "a",
                {
                  href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`,
                  target: "_blank",
                  rel: "noreferrer",
                  className: "w-7 h-7 rounded-full bg-[#0077b5] text-white flex items-center justify-center hover:opacity-90 transition-opacity",
                  "aria-label": "LinkedIn",
                  children: /* @__PURE__ */ jsx("svg", { className: "w-3.5 h-3.5 fill-current", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" }) })
                }
              ),
              /* @__PURE__ */ jsx(
                "button",
                {
                  onClick: () => {
                    if (navigator.clipboard) {
                      navigator.clipboard.writeText(window.location.href);
                      alert("Article link copied to clipboard!");
                    }
                  },
                  className: "w-7 h-7 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center hover:bg-slate-200 transition-colors",
                  title: "Copy Link",
                  children: /* @__PURE__ */ jsx("svg", { className: "w-3.5 h-3.5", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2, children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" }) })
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "w-full rounded-[12px] overflow-hidden shadow-sm mt-3 mb-5", children: /* @__PURE__ */ jsx(
            "img",
            {
              src: featuredImage,
              alt: post ? decodeHTMLEntities(post.title.rendered) : "Air Hostess Training",
              className: "w-full h-[280px] sm:h-[400px] object-cover"
            }
          ) }),
          /* @__PURE__ */ jsx("div", { className: "mt-6 font-sans text-slate-700 text-sm sm:text-base leading-relaxed space-y-8", children: parsedBlog.isFallback ? /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsxs("div", { className: "block lg:hidden my-8 space-y-6", children: [
              renderCounsellorForm(),
              renderTableOfContents(true)
            ] }),
            /* @__PURE__ */ jsxs("div", { id: "eligibility", className: "scroll-mt-24", children: [
              /* @__PURE__ */ jsx("h2", { className: "text-xl sm:text-2xl font-bold text-[#0b2f61] mb-3 tracking-tight", children: "1. Cabin Crew Eligibility Criteria" }),
              /* @__PURE__ */ jsx("p", { className: "mb-3", children: "Airlines have specific criteria for candidate selection. Below are the standard entry-level requirements for Air Hostess and Cabin Crew positions:" }),
              /* @__PURE__ */ jsxs("ul", { className: "list-disc pl-6 space-y-2 text-slate-600 font-medium", children: [
                /* @__PURE__ */ jsxs("li", { children: [
                  /* @__PURE__ */ jsx("strong", { children: "Education:" }),
                  " Minimum 10+2 / 12th pass (from any recognized stream)."
                ] }),
                /* @__PURE__ */ jsxs("li", { children: [
                  /* @__PURE__ */ jsx("strong", { children: "Age Limit:" }),
                  " Typically 17 to 24 years at entry level."
                ] }),
                /* @__PURE__ */ jsxs("li", { children: [
                  /* @__PURE__ */ jsx("strong", { children: "Height Criteria:" }),
                  " Minimum 155 cm for females, 170 cm for males."
                ] }),
                /* @__PURE__ */ jsxs("li", { children: [
                  /* @__PURE__ */ jsx("strong", { children: "Communication:" }),
                  " Fluency in spoken English & Hindi."
                ] }),
                /* @__PURE__ */ jsxs("li", { children: [
                  /* @__PURE__ */ jsx("strong", { children: "Fitness:" }),
                  " Medically fit with clear complexion and no visible tattoos in uniform."
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { id: "skills", className: "scroll-mt-24", children: [
              /* @__PURE__ */ jsx("h2", { className: "text-xl sm:text-2xl font-bold text-[#0b2f61] mb-3 tracking-tight", children: "2. Essential Skills Required" }),
              /* @__PURE__ */ jsx("p", { className: "mb-3", children: "Beyond basic eligibility, top domestic and international airlines evaluate candidates on:" }),
              /* @__PURE__ */ jsxs("ul", { className: "list-disc pl-6 space-y-1.5 text-slate-600 font-medium", children: [
                /* @__PURE__ */ jsx("li", { children: "Professional Grooming & Presentation" }),
                /* @__PURE__ */ jsx("li", { children: "Customer Service Mindset & Empathy" }),
                /* @__PURE__ */ jsx("li", { children: "Crisis Management & Emergency Handling" }),
                /* @__PURE__ */ jsx("li", { children: "Teamwork & Coordination under pressure" })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { id: "duties", className: "scroll-mt-24", children: [
              /* @__PURE__ */ jsx("h2", { className: "text-xl sm:text-2xl font-bold text-[#0b2f61] mb-3 tracking-tight", children: "3. Responsibilities & Job Roles" }),
              /* @__PURE__ */ jsx("p", { className: "mb-3", children: "Air Hostesses are primary safety officers on-board. Key duties include pre-flight safety briefings, passenger assistance, in-flight food and beverage service, and emergency evacuation management." })
            ] }),
            /* @__PURE__ */ jsxs("div", { id: "selection", className: "scroll-mt-24", children: [
              /* @__PURE__ */ jsx("h2", { className: "text-xl sm:text-2xl font-bold text-[#0b2f61] mb-3 tracking-tight", children: "4. Airline Selection Process" }),
              /* @__PURE__ */ jsx("p", { className: "mb-3", children: "The selection interview process consists of height/weight assessment, grooming check, group discussion (GD), personal interview (PI), and medical test." })
            ] }),
            /* @__PURE__ */ jsxs("div", { id: "training", className: "scroll-mt-24", children: [
              /* @__PURE__ */ jsx("h2", { className: "text-xl sm:text-2xl font-bold text-[#0b2f61] mb-3 tracking-tight", children: "5. Training & Certification" }),
              /* @__PURE__ */ jsx("p", { className: "mb-3", children: "Enrolling in a 6-month Maharashtra Government Certified Aviation & Hospitality program ensures hands-on mock cabin experience, English communication drills, and guaranteed interview preparation." })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "w-full rounded-2xl overflow-hidden my-8 shadow-sm", children: /* @__PURE__ */ jsx("img", { src: innerBlogImg1, alt: "Cabin Crew Training", className: "w-full h-auto object-cover" }) }),
            /* @__PURE__ */ jsxs("div", { id: "salary", className: "scroll-mt-24", children: [
              /* @__PURE__ */ jsx("h2", { className: "text-xl sm:text-2xl font-bold text-[#0b2f61] mb-3 tracking-tight", children: "6. Cabin Crew Salary Structure" }),
              /* @__PURE__ */ jsx("p", { className: "mb-4", children: "Average starting packages for Cabin Crew in India:" }),
              /* @__PURE__ */ jsx("div", { className: "overflow-x-auto rounded-2xl border border-slate-200 shadow-sm mb-6", children: /* @__PURE__ */ jsxs("table", { className: "w-full text-left border-collapse", children: [
                /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "bg-[#0b2f61] text-white text-xs sm:text-sm uppercase tracking-wider", children: [
                  /* @__PURE__ */ jsx("th", { className: "p-3.5 font-extrabold", children: "Airline Type" }),
                  /* @__PURE__ */ jsx("th", { className: "p-3.5 font-extrabold", children: "Monthly Salary (Freshers)" }),
                  /* @__PURE__ */ jsx("th", { className: "p-3.5 font-extrabold", children: "Experienced (3+ Years)" })
                ] }) }),
                /* @__PURE__ */ jsxs("tbody", { className: "divide-y divide-slate-100 text-xs sm:text-sm font-semibold text-slate-700 bg-white", children: [
                  /* @__PURE__ */ jsxs("tr", { className: "hover:bg-slate-50", children: [
                    /* @__PURE__ */ jsx("td", { className: "p-3.5 font-bold text-[#0b2f61]", children: "Domestic Airlines" }),
                    /* @__PURE__ */ jsx("td", { className: "p-3.5", children: "\u20B935,000 \u2013 \u20B955,000" }),
                    /* @__PURE__ */ jsx("td", { className: "p-3.5", children: "\u20B970,000 \u2013 \u20B91,10,000" })
                  ] }),
                  /* @__PURE__ */ jsxs("tr", { className: "hover:bg-slate-50", children: [
                    /* @__PURE__ */ jsx("td", { className: "p-3.5 font-bold text-[#0b2f61]", children: "International Airlines" }),
                    /* @__PURE__ */ jsx("td", { className: "p-3.5", children: "\u20B980,000 \u2013 \u20B91,40,000" }),
                    /* @__PURE__ */ jsx("td", { className: "p-3.5", children: "\u20B91,80,000 \u2013 \u20B92,80,000" })
                  ] }),
                  /* @__PURE__ */ jsxs("tr", { className: "hover:bg-slate-50", children: [
                    /* @__PURE__ */ jsx("td", { className: "p-3.5 font-bold text-[#0b2f61]", children: "VIP / Private Charters" }),
                    /* @__PURE__ */ jsx("td", { className: "p-3.5", children: "\u20B960,000 \u2013 \u20B990,000" }),
                    /* @__PURE__ */ jsx("td", { className: "p-3.5", children: "\u20B91,50,000+" })
                  ] })
                ] })
              ] }) })
            ] }),
            /* @__PURE__ */ jsxs("div", { id: "steps", className: "scroll-mt-24", children: [
              /* @__PURE__ */ jsx("h2", { className: "text-xl sm:text-2xl font-bold text-[#0b2f61] mb-3 tracking-tight", children: "7. Step-by-Step Career Roadmap" }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-3 pl-2 border-l-2 border-[#e31e24]", children: [
                /* @__PURE__ */ jsxs("div", { className: "pl-4", children: [
                  /* @__PURE__ */ jsx("h4", { className: "font-bold text-[#0b2f61]", children: "Step 1: Check Eligibility & Height" }),
                  /* @__PURE__ */ jsx("p", { className: "text-xs sm:text-sm text-slate-600", children: "Ensure 12th completion and physical fitness criteria." })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "pl-4", children: [
                  /* @__PURE__ */ jsx("h4", { className: "font-bold text-[#0b2f61]", children: "Step 2: Join Amigo Academy" }),
                  /* @__PURE__ */ jsx("p", { className: "text-xs sm:text-sm text-slate-600", children: "Gain practical mock-cabin training and grooming guidance." })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "pl-4", children: [
                  /* @__PURE__ */ jsx("h4", { className: "font-bold text-[#0b2f61]", children: "Step 3: Clear Airline Placement Drives" }),
                  /* @__PURE__ */ jsx("p", { className: "text-xs sm:text-sm text-slate-600", children: "Attend direct campus interviews organized by our placement team." })
                ] })
              ] })
            ] })
          ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
            parsedBlog.quickAnswerHtml && /* @__PURE__ */ jsx(
              "div",
              {
                className: "wp-content max-w-none mb-6",
                dangerouslySetInnerHTML: { __html: parsedBlog.quickAnswerHtml }
              }
            ),
            /* @__PURE__ */ jsxs("div", { className: "block lg:hidden my-8 space-y-6", children: [
              renderCounsellorForm(),
              renderTableOfContents(true)
            ] }),
            /* @__PURE__ */ jsx(
              "div",
              {
                className: "wp-content max-w-none",
                dangerouslySetInnerHTML: { __html: parsedBlog.bodyHtml || "" }
              }
            )
          ] }) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "lg:col-span-4 space-y-8 lg:sticky lg:top-24", children: [
          /* @__PURE__ */ jsx("div", { className: "hidden lg:block", children: renderCounsellorForm() }),
          /* @__PURE__ */ jsx("div", { className: "hidden lg:block", children: renderTableOfContents() })
        ] })
      ] })
    ] }) }),
    parsedBlog.faqs && parsedBlog.faqs.length > 0 && /* @__PURE__ */ jsx("section", { className: "py-16 sm:py-20 bg-[#EFF6FF] border-b border-blue-100", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl sm:text-4xl font-extrabold text-[#0b2f61] mb-3 font-sans tracking-tight", children: "Frequently Asked Questions" }),
      /* @__PURE__ */ jsx("p", { className: "text-slate-500 text-xs sm:text-sm font-semibold mb-10 max-w-xl mx-auto", children: "Got questions? We've got answers. Find out everything you need to know about our courses." }),
      /* @__PURE__ */ jsx("div", { className: "space-y-4 text-left", children: parsedBlog.faqs.map((faq, idx) => /* @__PURE__ */ jsx(FAQAccordionItem, { index: idx, question: faq.question, answer: faq.answer }, idx)) })
    ] }) }),
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
              children: "Start Your Journey from the Branch That's Closest to You"
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
                "Maharashtra govt certified \u2014 only aviation institute in Maharashtra"
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
              style: { color: "#8fdca0" },
              className: "flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-medium",
              children: ["4.6 Google rating", "10,000+ students Trained", "Certified Courses", "200+ hiring partners"].map(
                (item, i) => /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1.5", children: [
                  /* @__PURE__ */ jsx("svg", { className: "w-3.5 h-3.5 text-[#25d366]", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ jsx("path", { fillRule: "evenodd", d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z", clipRule: "evenodd" }) }),
                  item
                ] }, i)
              )
            }
          )
        ]
      }
    )
  ] });
}

export { InnerBlog as I };
//# sourceMappingURL=InnerBlog-Ca7kf7XB.mjs.map
