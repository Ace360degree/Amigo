import React, { useState, useEffect, useMemo } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import innerBlogImg from "../assets/img/innerblogimg.png";
import innerBlogImg1 from "../assets/img/innerblogimg2.png";
import imgAviation1 from "../assets/img/BlogInsights1.png";
import imgAviation2 from "../assets/img/BlogInsights2.png";
import imgAviation3 from "../assets/img/BlogInsights3.png";
import imgAi1 from "../assets/img/BlogInsights4.png";
import { fetchBlogPostBySlug, fetchBlogPosts, WPPost } from "../services/wordpress";
import { submitCounsellorForm } from "../services/api";

interface TOCItem {
  id: string;
  text: string;
  level: number;
}

function FAQAccordionItem({ index, question, answer }: { index: number; question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(index === 0);

  return (
    <div className={`bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.03)] border transition-all duration-300 ${isOpen ? "border-blue-200/80 shadow-[0_8px_30px_rgba(37,99,235,0.08)]" : "border-slate-100/90"}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-6 py-5 text-left cursor-pointer group"
      >
        <div className="flex items-center gap-4 pr-4">
          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0 transition-colors ${isOpen ? "bg-[#1e3a8a] text-white" : "bg-[#eff6ff] text-[#1e3a8a]"}`}>
            {index + 1}
          </div>
          <span className="text-sm sm:text-base font-sans font-bold text-[#0b2f61] leading-snug">
            {question}
          </span>
        </div>
        
        <div className="text-slate-400 shrink-0">
          <svg
            className={`w-4 h-4 text-[#1e3a8a] transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
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
          <div className="bg-[#f8fafc] border-l-4 border-[#1e3a8a] p-4 rounded-r-xl">
            <p className="text-slate-600 font-sans text-xs sm:text-sm leading-relaxed font-medium">
              {answer}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default function InnerBlog() {
  const navigate = useNavigate();
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<WPPost | null>(null);
  const [allPosts, setAllPosts] = useState<WPPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeTocId, setActiveTocId] = useState<string>("");

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    course: ""
  });

  useEffect(() => {
    fetchBlogPosts().then((posts) => setAllPosts(posts)).catch(() => { });
  }, []);

  useEffect(() => {
    if (slug) {
      setLoading(true);
      fetchBlogPostBySlug(slug)
        .then((data) => {
          setPost(data);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Error loading post:", err);
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, [slug]);

  const parsedBlog = useMemo(() => {
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
            answer: "Freshers can expect ₹25,000 to ₹40,000 per month in domestic airlines, and up to ₹80,000 to ₹1.5 Lakh per month in international airlines."
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
    
    // Extract FAQs if present in HTML body
    const extractedFaqs: { question: string; answer: string }[] = [];
    const faqHeadingEl = Array.from(doc.querySelectorAll("h2, h3")).find(
      h => h.textContent?.toLowerCase().includes("frequently asked") || h.textContent?.toLowerCase().includes("faq")
    );

    if (faqHeadingEl) {
      let currentEl = faqHeadingEl.nextElementSibling;
      let currentQ = "";
      let currentA = "";

      while (currentEl) {
        const text = currentEl.textContent?.trim() || "";
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
    const tocList: TOCItem[] = [];

    headings.forEach((heading, idx) => {
      const text = heading.textContent || `Section ${idx + 1}`;
      const id = heading.id || `heading-${idx}`;
      heading.id = id;
      tocList.push({
        id,
        text,
        level: heading.tagName === "H2" ? 2 : 3
      });
    });

    // Detect and format "Quick answer" paragraph and any subsequent paragraphs before the first H2 into a styled callout box matching design image
    const allParagraphs = Array.from(doc.querySelectorAll("p"));
    const quickAnswerEl = allParagraphs.find(p => p.textContent?.trim().toLowerCase().startsWith("quick answer"));
    let quickAnswerHtml = "";

    if (quickAnswerEl) {
      const card = doc.createElement("div");
      card.className = "quick-answer-card";
      
      const badge = doc.createElement("div");
      badge.className = "quick-answer-title";
      badge.innerHTML = `<span class="w-5 h-5 rounded-full bg-amber-100 border border-amber-300 text-amber-600 flex items-center justify-center text-xs font-bold shrink-0">?</span> Quick answer`;
      card.appendChild(badge);

      let curr: Element | null = quickAnswerEl;
      const elementsToMove: Element[] = [];

      while (curr && curr.tagName !== "H2") {
        const next: Element | null = curr.nextElementSibling;
        elementsToMove.push(curr);
        if (!next || next.tagName === "H2") break;
        curr = next;
      }

      elementsToMove.forEach((el, idx) => {
        if (idx === 0) {
          el.innerHTML = el.innerHTML
            .replace(/<strong>\s*quick answer\s*:?\s*<\/strong>/i, "")
            .replace(/^quick answer\s*[:.-]?\s*/i, "")
            .trim();
        }
        card.appendChild(el);
      });
      quickAnswerHtml = card.outerHTML;
    }

    const imgs = Array.from(doc.querySelectorAll("img")).map(img => img.src);
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
          answer: "Yes! Scholarships up to ₹50,000 are available based on eligibility check."
        },
        {
          question: "Do you offer placement assistance?",
          answer: "Yes, 100% placement support with mock interviews, grooming sessions, and direct campus recruitment."
        }
      ]
    };
  }, [post]);

  const scrollToHeading = (id: string) => {
    setActiveTocId(id);
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -90;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || formData.phone.length !== 10 || !formData.course) return;

    setIsSubmitting(true);
    try {
      await submitCounsellorForm({
        name: formData.name,
        phone: formData.phone,
        course: formData.course,
        form_location: `Blog Inner Page: ${post?.title?.rendered || slug || 'General Blog'}`
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
    return (
      <div className="flex flex-col items-center justify-center py-40 min-h-[50vh] bg-white">
        <div className="w-12 h-12 border-4 border-[#e31e24] border-t-transparent rounded-full animate-spin"></div>
        <p className="text-slate-500 font-sans font-bold mt-4">Loading article...</p>
      </div>
    );
  }

  const dateStr = post ? new Date(post.date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric"
  }) : "May 24, 2026";

  const authorName = post?._embedded?.author?.[0]?.name || "Amigo Academy";
  const words = post?.content?.rendered ? post.content.rendered.replace(/<[^>]+>/g, "").split(/\s+/).length : 600;
  const readTime = post ? `${Math.max(1, Math.ceil(words / 200))} min read` : "8 min read";
  const featuredImage = 
    post?._embedded?.["wp:featuredmedia"]?.[0]?.source_url || 
    post?.featured_media_src_url || 
    post?.jetpack_featured_media_url || 
    (parsedBlog.imgs && parsedBlog.imgs[0]) || 
    innerBlogImg;
  const relatedPosts = allPosts.filter(p => p.slug !== slug).slice(0, 5);

  const renderCounsellorForm = () => (
    <div className="bg-white border-4 border-[#0b192c] rounded-[24px] p-6 shadow-md text-center">
      <h3 className="text-xl sm:text-2xl font-extrabold text-[#0b2f61] font-sans leading-tight mb-1">
        Talk to Our Career<br />Counsellor
      </h3>
      <p className="text-slate-400 text-xs font-medium font-sans mb-6">
        Get free guidance &amp; course details.
      </p>

      {formSubmitted ? (
        <div className="bg-emerald-50 border border-emerald-300 p-4 rounded-xl text-center text-xs font-bold text-emerald-800">
          ✓ Thank you! Our expert will call you shortly.
        </div>
      ) : (
        <form onSubmit={handleFormSubmit} className="space-y-4 text-left">
          <div>
            <label className="block text-[11px] font-bold text-slate-700 mb-1">Full Name</label>
            <input
              type="text"
              required
              placeholder="Enter your full name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full bg-white border border-slate-200 text-slate-800 text-xs px-3.5 py-3 rounded-lg focus:outline-none focus:border-[#0b2f61] placeholder-slate-400 font-medium"
            />
          </div>
          <div>
            <label className="block text-[11px] font-bold text-slate-700 mb-1">Mobile Number</label>
            <input
              type="tel"
              required
              placeholder="Enter your mobile number"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full bg-white border border-slate-200 text-slate-800 text-xs px-3.5 py-3 rounded-lg focus:outline-none focus:border-[#0b2f61] placeholder-slate-400 font-medium"
            />
          </div>
          <div>
            <label className="block text-[11px] font-bold text-slate-700 mb-1">Select Course</label>
            <select
              required
              value={formData.course}
              onChange={(e) => setFormData({ ...formData, course: e.target.value })}
              className="w-full bg-white border border-slate-200 text-slate-800 text-xs px-3.5 py-3 rounded-lg focus:outline-none focus:border-[#0b2f61] font-medium cursor-pointer"
            >
              <option value="" disabled>Choose a course</option>
              <option value="Cabin Crew (Air Hostess) & Hospitality Management">Cabin Crew (Air Hostess) &amp; Hospitality Management</option>
              <option value="Airport Ground Staff & Hospitality Management">Airport Ground Staff &amp; Hospitality Management</option>
              <option value="AI & Data Science">AI &amp; Data Science</option>
            </select>
          </div>

          <button
            type="submit"
            disabled={isSubmitting || !formData.name.trim() || formData.phone.length !== 10 || !formData.course}
            className="w-full bg-[#DF1818] hover:bg-[#c41212] disabled:bg-slate-300 disabled:text-slate-400 disabled:cursor-not-allowed text-white font-extrabold text-xs py-3.5 rounded-full shadow-md transition-all active:scale-[0.95] cursor-pointer mt-4 flex items-center justify-center gap-2"
          >
            <span>{isSubmitting ? "Submitting..." : "Secure Your Spot Now"}</span>
            <span>➔</span>
          </button>

          <p className="text-[10px] text-slate-400 text-center font-medium mt-3">
            Our expert will call you shortly.
          </p>
        </form>
      )}
    </div>
  );

  const renderTableOfContents = () => {
    if (parsedBlog.toc.length === 0) return null;
    return (
      <div className="bg-white border border-slate-200/90 rounded-[20px] p-6 shadow-sm text-left">
        <h3 className="text-lg sm:text-xl font-extrabold text-[#0b2f61] font-outfit mb-4">
          Table of Contents
        </h3>
        <ul className="space-y-3 text-sm sm:text-[15px] font-semibold text-[#1e3a8a]">
          {parsedBlog.toc.map((item) => (
            <li key={item.id} className={item.level === 3 ? "pl-3" : ""}>
              <button
                onClick={() => scrollToHeading(item.id)}
                className={`text-left hover:underline transition-colors cursor-pointer leading-snug ${activeTocId === item.id ? "text-[#DF1818] font-bold" : ""}`}
              >
                {item.text}
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div className="flex flex-col bg-white text-slate-800 font-sans">
      {/* Top Header & Main Article Grid */}
      <section className="pt-8 sm:pt-12 pb-12 bg-white border-b border-slate-100">
        <div className="max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-8">

          {/* Breadcrumbs */}
          <div className="flex items-center gap-1.5 text-xs font-sans text-slate-400 mb-6">
            <Link to="/" className="hover:text-[#e31e24] transition-colors">Home</Link>
            <span>&gt;</span>
            <Link to="/blog" className="hover:text-[#e31e24] transition-colors">Blog</Link>
            <span>&gt;</span>
            <span className="font-bold text-[#e31e24] truncate max-w-[200px] sm:max-w-md">
              {post ? post.title.rendered : "How to Become an Air Hostess After 12th"}
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

            {/* Left Main Article Column (8 Cols) */}
            <div className="lg:col-span-8 flex flex-col text-left">
              <h1 className="max-w-[680px] text-[32px] sm:text-[36px] lg:text-[40px] font-extrabold text-[#0b2f61] font-outfit leading-[1.03] tracking-[-0.025em] mb-5">
                {post ? (
                  post.title.rendered
                ) : (
                  <>
                    How to Become an <br className="hidden sm:inline" />
                    Air Hostess <span className="text-[#d97706] font-extrabold">After 12th</span>
                  </>
                )}
              </h1>

              <div className="flex flex-wrap items-center justify-between gap-4 py-2 mb-6">
                <div className="flex flex-col text-left">
                  <span className="text-sm sm:text-base font-extrabold text-[#0b2f61] font-sans">
                    By Amigo Academy Academic Team
                  </span>
                  <div className="text-xs text-slate-400 font-semibold flex items-center mt-1">
                    <span>{dateStr}</span>
                    <span className="mx-2">•</span>
                    <span>{readTime}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="p-2 text-slate-600">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z" />
                    </svg>
                  </span>
                  {/* Facebook */}
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-7 h-7 rounded-full bg-[#0b2f61] text-white flex items-center justify-center hover:opacity-90 transition-opacity"
                    aria-label="Facebook"
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>

                  {/* X */}
                  <a
                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-7 h-7 rounded-full bg-black text-white flex items-center justify-center hover:opacity-90 transition-opacity"
                    aria-label="X"
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>

                  {/* LinkedIn */}
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-7 h-7 rounded-full bg-[#0077b5] text-white flex items-center justify-center hover:opacity-90 transition-opacity"
                    aria-label="LinkedIn"
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>

                  {/* Copy Link */}
                  <button
                    onClick={() => {
                      if (navigator.clipboard) {
                        navigator.clipboard.writeText(window.location.href);
                        alert("Article link copied to clipboard!");
                      }
                    }}
                    className="w-7 h-7 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center hover:bg-slate-200 transition-colors"
                    title="Copy Link"
                  >
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Featured Image (First Image) */}
              <div className="w-full rounded-[12px] overflow-hidden shadow-sm mt-3 mb-5">
                <img
                  src={featuredImage}
                  alt={post ? post.title.rendered : "Air Hostess Training"}
                  className="w-full h-[280px] sm:h-[400px] object-cover"
                />
              </div>

              {/* Body Content */}
              <div className="mt-6 font-sans text-slate-700 text-sm sm:text-base leading-relaxed space-y-8">
                {parsedBlog.isFallback ? (
                  <>
                    <div id="eligibility" className="scroll-mt-24">
                      <h2 className="text-xl sm:text-2xl font-bold text-[#0b2f61] mb-3 tracking-tight">
                        1. Cabin Crew Eligibility Criteria
                      </h2>
                      <p className="mb-3">
                        Airlines have specific criteria for candidate selection. Below are the standard entry-level requirements for Air Hostess and Cabin Crew positions:
                      </p>
                      <ul className="list-disc pl-6 space-y-2 text-slate-600 font-medium">
                        <li><strong>Education:</strong> Minimum 10+2 / 12th pass (from any recognized stream).</li>
                        <li><strong>Age Limit:</strong> Typically 17 to 24 years at entry level.</li>
                        <li><strong>Height Criteria:</strong> Minimum 155 cm for females, 170 cm for males.</li>
                        <li><strong>Communication:</strong> Fluency in spoken English & Hindi.</li>
                        <li><strong>Fitness:</strong> Medically fit with clear complexion and no visible tattoos in uniform.</li>
                      </ul>
                    </div>

                    <div id="skills" className="scroll-mt-24">
                      <h2 className="text-xl sm:text-2xl font-bold text-[#0b2f61] mb-3 tracking-tight">
                        2. Essential Skills Required
                      </h2>
                      <p className="mb-3">
                        Beyond basic eligibility, top domestic and international airlines evaluate candidates on:
                      </p>
                      <ul className="list-disc pl-6 space-y-1.5 text-slate-600 font-medium">
                        <li>Professional Grooming & Presentation</li>
                        <li>Customer Service Mindset & Empathy</li>
                        <li>Crisis Management & Emergency Handling</li>
                        <li>Teamwork & Coordination under pressure</li>
                      </ul>
                    </div>

                    <div id="duties" className="scroll-mt-24">
                      <h2 className="text-xl sm:text-2xl font-bold text-[#0b2f61] mb-3 tracking-tight">
                        3. Responsibilities & Job Roles
                      </h2>
                      <p className="mb-3">
                        Air Hostesses are primary safety officers on-board. Key duties include pre-flight safety briefings, passenger assistance, in-flight food and beverage service, and emergency evacuation management.
                      </p>
                    </div>

                    <div id="selection" className="scroll-mt-24">
                      <h2 className="text-xl sm:text-2xl font-bold text-[#0b2f61] mb-3 tracking-tight">
                        4. Airline Selection Process
                      </h2>
                      <p className="mb-3">
                        The selection interview process consists of height/weight assessment, grooming check, group discussion (GD), personal interview (PI), and medical test.
                      </p>
                    </div>

                    <div id="training" className="scroll-mt-24">
                      <h2 className="text-xl sm:text-2xl font-bold text-[#0b2f61] mb-3 tracking-tight">
                        5. Training & Certification
                      </h2>
                      <p className="mb-3">
                        Enrolling in a 6-month Maharashtra Government Certified Aviation & Hospitality program ensures hands-on mock cabin experience, English communication drills, and guaranteed interview preparation.
                      </p>
                    </div>

                    <div className="w-full rounded-2xl overflow-hidden my-8 shadow-sm">
                      <img src={innerBlogImg1} alt="Cabin Crew Training" className="w-full h-auto object-cover" />
                    </div>

                    <div id="salary" className="scroll-mt-24">
                      <h2 className="text-xl sm:text-2xl font-bold text-[#0b2f61] mb-3 tracking-tight">
                        6. Cabin Crew Salary Structure
                      </h2>
                      <p className="mb-4">
                        Average starting packages for Cabin Crew in India:
                      </p>

                      <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm mb-6">
                        <table className="w-full text-left border-collapse">
                          <thead>
                            <tr className="bg-[#0b2f61] text-white text-xs sm:text-sm uppercase tracking-wider">
                              <th className="p-3.5 font-extrabold">Airline Type</th>
                              <th className="p-3.5 font-extrabold">Monthly Salary (Freshers)</th>
                              <th className="p-3.5 font-extrabold">Experienced (3+ Years)</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-slate-100 text-xs sm:text-sm font-semibold text-slate-700 bg-white">
                            <tr className="hover:bg-slate-50">
                              <td className="p-3.5 font-bold text-[#0b2f61]">Domestic Airlines</td>
                              <td className="p-3.5">₹35,000 – ₹55,000</td>
                              <td className="p-3.5">₹70,000 – ₹1,10,000</td>
                            </tr>
                            <tr className="hover:bg-slate-50">
                              <td className="p-3.5 font-bold text-[#0b2f61]">International Airlines</td>
                              <td className="p-3.5">₹80,000 – ₹1,40,000</td>
                              <td className="p-3.5">₹1,80,000 – ₹2,80,000</td>
                            </tr>
                            <tr className="hover:bg-slate-50">
                              <td className="p-3.5 font-bold text-[#0b2f61]">VIP / Private Charters</td>
                              <td className="p-3.5">₹60,000 – ₹90,000</td>
                              <td className="p-3.5">₹1,50,000+</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <div id="steps" className="scroll-mt-24">
                      <h2 className="text-xl sm:text-2xl font-bold text-[#0b2f61] mb-3 tracking-tight">
                        7. Step-by-Step Career Roadmap
                      </h2>
                      <div className="space-y-3 pl-2 border-l-2 border-[#e31e24]">
                        <div className="pl-4">
                          <h4 className="font-bold text-[#0b2f61]">Step 1: Check Eligibility & Height</h4>
                          <p className="text-xs sm:text-sm text-slate-600">Ensure 12th completion and physical fitness criteria.</p>
                        </div>
                        <div className="pl-4">
                          <h4 className="font-bold text-[#0b2f61]">Step 2: Join Amigo Academy</h4>
                          <p className="text-xs sm:text-sm text-slate-600">Gain practical mock-cabin training and grooming guidance.</p>
                        </div>
                        <div className="pl-4">
                          <h4 className="font-bold text-[#0b2f61]">Step 3: Clear Airline Placement Drives</h4>
                          <p className="text-xs sm:text-sm text-slate-600">Attend direct campus interviews organized by our placement team.</p>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    {parsedBlog.quickAnswerHtml && (
                      <div
                        className="wp-content max-w-none mb-6"
                        dangerouslySetInnerHTML={{ __html: parsedBlog.quickAnswerHtml }}
                      />
                    )}

                    {/* Mobile-only Counsellor Form and TOC */}
                    <div className="block lg:hidden my-8 space-y-6">
                      {renderCounsellorForm()}
                      {renderTableOfContents()}
                    </div>

                    <div
                      className="wp-content max-w-none"
                      dangerouslySetInnerHTML={{ __html: parsedBlog.bodyHtml || "" }}
                    />
                  </>
                )}
              </div>
            </div>

            {/* Right Sticky Sidebar (4 Cols) Matching Design Screenshot */}
            <div className="lg:col-span-4 space-y-8 lg:sticky lg:top-24">

              {/* Widget 1: Talk to Our Career Counsellor (Form matching exact design image) */}
              <div className="hidden lg:block">
                {renderCounsellorForm()}
              </div>

              {/* Widget 2: Table of Contents (Positioned ABOVE Related Guides) */}
              <div className="hidden lg:block">
                {renderTableOfContents()}
              </div>

              {/* Widget 3: Related Guides */}
              <div className="bg-white border border-slate-200/90 rounded-[20px] p-6 shadow-sm text-left space-y-5">
                <h3 className="text-base font-extrabold text-[#0b2f61] font-outfit mb-2">
                  Related Guides
                </h3>

                <div className="space-y-5">
                  {(relatedPosts.length > 0 ? relatedPosts : [
                    {
                      id: 101,
                      title: { rendered: "Cabin crew eligibility after 12th" },
                      slug: "cabin-crew-eligibility-skills-requirements-explained",
                      date: "2026-06-15",
                      readTime: "5 min read",
                      _embedded: { "wp:featuredmedia": [{ source_url: imgAviation2 }] }
                    },
                    {
                      id: 102,
                      title: { rendered: "Air Hostess Height Requirement in India" },
                      slug: "air-hostess-height-requirement-in-india",
                      date: "2026-08-01",
                      readTime: "15 min read",
                      _embedded: { "wp:featuredmedia": [{ source_url: imgAviation1 }] }
                    },
                    {
                      id: 103,
                      title: { rendered: "Cabin crew interview tips and common mistakes" },
                      slug: "cabin-crew-interview-tips",
                      date: "2026-08-05",
                      readTime: "7 min read",
                      _embedded: { "wp:featuredmedia": [{ source_url: imgAviation3 }] }
                    },
                    {
                      id: 104,
                      title: { rendered: "Air Hostess vs Airport Ground Staff" },
                      slug: "airport-ground-staff-career-guide-roles-salary-growth",
                      date: "2026-05-24",
                      readTime: "8 min read",
                      _embedded: { "wp:featuredmedia": [{ source_url: imgAi1 }] }
                    },
                    {
                      id: 105,
                      title: { rendered: "Air Hostess / Cabin Crew course" },
                      slug: "how-to-become-a-cabin-crew-after-12th",
                      date: "2026-07-10",
                      readTime: "6 min read",
                    }
                  ]).map((item: any) => {
                    const thumb = 
                      item._embedded?.["wp:featuredmedia"]?.[0]?.source_url || 
                      item.featured_media_src_url || 
                      item.jetpack_featured_media_url || 
                      imgAviation3;
                    return (
                      <div
                        key={item.id}
                        onClick={() => {
                          navigate(`/${item.slug}`);
                          window.scrollTo({ top: 0, behavior: "smooth" });
                        }}
                        className="bg-white rounded-xl border border-slate-100 overflow-hidden shadow-xs hover:shadow-md transition-all cursor-pointer group"
                      >
                        <div className="h-36 w-full overflow-hidden">
                          <img src={thumb} alt={item.title.rendered} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                        </div>
                        <div className="p-3.5 flex flex-col">
                          <h4 className="text-xs font-bold text-[#0b2f61] group-hover:text-[#DF1818] transition-colors leading-snug line-clamp-2">
                            {item.title.rendered}
                          </h4>
                          <span className="text-[10px] text-slate-400 font-semibold mt-2">
                            {new Date(item.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })} • {item.readTime || "5 min read"}
                          </span>
                        </div>
                      </div>
                    );
                  })}

                  <button
                    onClick={() => {
                      navigate("/career-guides");
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className="w-full bg-[#DF1818] hover:bg-[#c41212] text-white font-extrabold text-xs uppercase py-3 rounded-xl transition-all cursor-pointer mt-2"
                  >
                    View all Blogs
                  </button>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Dynamic FAQs Section matching exact design image */}
      {parsedBlog.faqs && parsedBlog.faqs.length > 0 && (
        <section className="py-16 sm:py-20 bg-[#EFF6FF] border-b border-blue-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0b2f61] mb-3 font-sans tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm font-semibold mb-10 max-w-xl mx-auto">
              Got questions? We've got answers. Find out everything you need to know about our courses.
            </p>

            <div className="space-y-4 text-left">
              {parsedBlog.faqs.map((faq, idx) => (
                <FAQAccordionItem key={idx} index={idx} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Batch open urgency footer section (Reused from Contact.tsx) */}
      <section
        style={{ backgroundColor: "#0d1b3d" }}
        className="py-16 px-6 text-center text-white relative overflow-hidden"
      >
        {/* Top badge */}
        <div className="flex justify-center mb-7">
          <span
            style={{
              border: "1px solid rgba(240,161,58,0.4)",
              color: "#f0a13a",
              backgroundColor: "rgba(240,161,58,0.05)",
            }}
            className="inline-flex items-center gap-2 text-xs font-bold tracking-wide px-4 py-2 rounded-full"
          >
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M11.3 1.046a1 1 0 01.7 1.169L10.98 8h4.02a1 1 0 01.76 1.65l-8 9.5a1 1 0 01-1.752-.815L6.02 12H2a1 1 0 01-.76-1.65l8-9.5a1 1 0 011.06-.304z" />
            </svg>
            Limited seats per batch — apply early to secure your spot
          </span>
        </div>

        {/* Headline */}
        <h1
          style={{ color: "#ffffff" }}
          className="font-extrabold text-3xl sm:text-5xl leading-tight max-w-4xl mx-auto mb-5"
        >
          Start Your Journey from the Branch That's Closest to You
        </h1>

        {/* Certification badge */}
        <div className="flex justify-center mb-8">
          <span
            style={{
              border: "1px solid rgba(255,255,255,0.1)",
              color: "#f0a13a",
              backgroundColor: "rgba(255,255,255,0.05)",
            }}
            className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-full"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 1L2 5v2h16V5l-8-4zM4 9v7H2v2h16v-2h-2V9h-2v7h-2V9h-2v7H8V9H6v7H4V9H4z" />
            </svg>
            Maharashtra govt certified — only aviation institute in Maharashtra
          </span>
        </div>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <button
            onClick={() => window.dispatchEvent(new CustomEvent("openEligibilityModal"))}
            style={{ backgroundColor: "#e0392f", color: "#ffffff" }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-sm font-bold px-6 py-3.5 rounded-full transition-colors cursor-pointer"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Check my eligibility now
          </button>

          <button
            onClick={() => window.dispatchEvent(new CustomEvent("openEligibilityModal"))}
            style={{ backgroundColor: "#e0392f", color: "#ffffff" }}
            className="w-full sm:w-auto inline-flex items-center justify-center text-sm font-bold px-8 py-3.5 rounded-full transition-colors cursor-pointer"
          >
            Start my career
          </button>

          <a
            href="https://wa.me/919987588932"
            target="_blank"
            rel="noopener noreferrer"
            style={{ backgroundColor: "#25d366", color: "#ffffff" }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-sm font-bold px-6 py-3.5 rounded-full transition-colors"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 004.74 1.21h.005c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.87 9.87 0 0012.04 2zm5.8 14.05c-.24.68-1.4 1.3-1.93 1.38-.5.08-1.12.11-1.8-.11-.42-.13-.96-.31-1.65-.61-2.9-1.25-4.79-4.17-4.94-4.36-.14-.2-1.18-1.57-1.18-3 0-1.42.75-2.12 1.01-2.41.27-.29.58-.36.78-.36.19 0 .39 0 .56.01.18.01.42-.07.66.5.24.58.82 2 .89 2.15.07.15.12.32.02.52-.1.2-.15.32-.29.49-.15.17-.31.38-.44.51-.15.15-.3.31-.13.6.17.29.75 1.24 1.62 2.01 1.11.99 2.05 1.3 2.34 1.44.29.15.46.13.63-.08.18-.2.75-.87.95-1.17.2-.29.4-.24.66-.15.27.1 1.7.8 1.99.94.29.15.48.22.55.34.07.13.07.72-.17 1.4z" />
            </svg>
            Chat on WhatsApp
          </a>
        </div>

        {/* Trust indicators */}
        <div
          style={{ color: "#8fdca0" }}
          className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-medium"
        >
          {["4.6 Google rating", "10,000+ students Trained", "Certified Courses", "200+ hiring partners"].map(
            (item, i) => (
              <span key={i} className="flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 text-[#25d366]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                {item}
              </span>
            )
          )}
        </div>
      </section>
    </div>
  );
}
