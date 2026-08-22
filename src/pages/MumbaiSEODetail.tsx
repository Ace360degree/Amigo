import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { fetchSEOPageBySlug, WPPost } from "../services/wordpress";
import { submitForm } from "../services/api";

// Import brand logos and student photos for placement support section
import placementbrandy1 from "../assets/img/placementbrandy1.png";
import placementbrandy2 from "../assets/img/placementbrandy2.png";
import placementbrandy3 from "../assets/img/placementbrandy3.png";
import placementbrandy4 from "../assets/img/placementbrandy4.png";
import placementbrandy5 from "../assets/img/placementbrandy5.png";
import placementbrandy6 from "../assets/img/placementbrandy6.png";
import placementbrandy7 from "../assets/img/placementbrandy7.png";
import placementbrandy8 from "../assets/img/placementbrandy8.png";
import placementbrandy9 from "../assets/img/placementbrandy9.png";
import placementbrandy10 from "../assets/img/placementbrandy10.png";
import placementbrandy11 from "../assets/img/placementbrandy11.png";
import placementbrandy12 from "../assets/img/placementbrandy12.png";

// Re-use images for courses
import course1Img from "../assets/img/branches/1.png";
import course2Img from "../assets/img/branches/2.png";
import course3Img from "../assets/img/branches/3.png";

// Facade/Building image for Ghatkopar branch
import branchFacadeImg from "../assets/img/branchesimg1a.png";

function FAQAccordionItem({ index, question, answer }: { index: number; question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={`bg-white border rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? "border-[#1C3E8A] shadow-md" : "border-[#E1E5ED]"}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-6 py-5 text-left cursor-pointer focus:outline-none"
      >
        <div className="flex items-center space-x-4">
          <span className="w-8 h-8 rounded-full bg-[#1C3E8A]/10 text-[#1C3E8A] flex items-center justify-center font-bold text-sm">
            {index}
          </span>
          <span className="font-sans font-bold text-[#112A46] text-sm sm:text-base leading-snug">
            {question}
          </span>
        </div>
        <span className="text-[#1C3E8A] transition-transform duration-300 font-bold ml-2">
          {isOpen ? "▲" : "▼"}
        </span>
      </button>
      {isOpen && (
        <div className="px-6 pb-6 pt-1 text-slate-500 font-sans text-xs sm:text-sm font-semibold leading-relaxed border-t border-slate-50">
          {answer}
        </div>
      )}
    </div>
  );
}

export default function MumbaiSEODetail() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [seoPage, setSeoPage] = useState<WPPost | null>(null);
  const [loading, setLoading] = useState(true);

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

  // Determine queryText and locationText
  const displayTitle = seoPage ? seoPage.title.rendered : "";
  let queryText = "Best Aviation Institute Near";
  let locationText = "Bhandup";

  if (displayTitle) {
    const nearIndex = displayTitle.toLowerCase().indexOf("near");
    if (nearIndex !== -1) {
      queryText = displayTitle.substring(0, nearIndex + 4);
      locationText = displayTitle.substring(nearIndex + 4).trim();
    } else {
      queryText = displayTitle;
      locationText = "";
    }
  } else {
    // Parsing slug e.g. "best-aviation-institute-near-bhandup"
    const slugText = slug || "";
    const parts = slugText.split("-");
    const nearIndex = parts.indexOf("near");

    if (nearIndex !== -1) {
      const queryParts = parts.slice(0, nearIndex);
      const locationParts = parts.slice(nearIndex + 1);

      queryText = queryParts
        .map((p) => (p === "ai" ? "AI & Data Science" : p.charAt(0).toUpperCase() + p.slice(1)))
        .join(" ");
      locationText = locationParts.map((p) => p.charAt(0).toUpperCase() + p.slice(1)).join(" ");
    }

    // Adjust display text for specific course/query strings
    if (queryText.toLowerCase().includes("ai data science")) {
      queryText = "AI & Data Science Course Near";
    } else if (queryText.toLowerCase() === "best courses after 12th") {
      queryText = "Best Courses After 12th Near";
    } else if (queryText.toLowerCase() === "aviation courses") {
      queryText = "Aviation Courses Near";
    } else if (queryText.toLowerCase() === "aviation career guidance") {
      queryText = "Aviation Career Guidance Near";
    } else if (queryText.toLowerCase() === "cabin crew course") {
      queryText = "Cabin Crew Course Near";
    } else if (queryText.toLowerCase() === "air hostess course") {
      queryText = "Air Hostess Course Near";
    } else if (queryText.toLowerCase() === "airport ground staff course") {
      queryText = "Airport Ground Staff Course Near";
    } else if (!queryText.endsWith("Near")) {
      queryText += " Near";
    }
  }

  // Form states
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    course: "",
  });

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || formData.phone.length !== 10 || !formData.course) {
      return;
    }

    const res = await submitForm({
      action: "counsellor",
      name: formData.name,
      phone: formData.phone,
      course: formData.course,
      form_location: `SEO Page: ${locationText || slug || "General"}`,
    });

    if (res.success) {
      Swal.fire({
        title: "Application Submitted!",
        text: `Thank you, ${formData.name}. Redirecting to confirmation page...`,
        icon: "success",
        confirmButtonColor: "#1C3E8A",
        timer: 2000,
        timerProgressBar: true,
        showConfirmButton: false,
      }).then(() => {
        navigate("/thank-you");
      });
    } else {
      Swal.fire({
        title: "Submission Failed",
        text: res.message || "Failed to submit request. Please try again.",
        icon: "error",
        confirmButtonColor: "#DF1818",
      });
    }
  };

  const handleCTA = () => {
    window.dispatchEvent(new CustomEvent("openEligibilityModal"));
  };

  const hiringPartners = [
    placementbrandy1,
    placementbrandy2,
    placementbrandy3,
    placementbrandy4,
    placementbrandy5,
    placementbrandy6,
    placementbrandy7,
    placementbrandy8,
    placementbrandy9,
    placementbrandy10,
    placementbrandy11,
    placementbrandy12,
  ];

  return (
    <div className="bg-white min-h-screen">
      
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 py-10 sm:py-16 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        
        {/* Left Column Content */}
        <div className="lg:col-span-7 space-y-6 text-left">
          
          {/* Breadcrumbs */}
          <nav className="flex items-center space-x-2 text-xs sm:text-sm font-sans font-semibold text-slate-500">
            <Link to="/" className="hover:text-[#DF1818] transition-colors">Home</Link>
            <span>&gt;</span>
            <span className="text-slate-500">India</span>
            <span>&gt;</span>
            <Link to="/mumbai" className="hover:text-[#DF1818] transition-colors">Mumbai</Link>
            <span>&gt;</span>
            <span className="text-[#DF1818] font-bold">{locationText}</span>
          </nav>

          <h1 className="text-4xl sm:text-[46px] lg:text-[54px] font-outfit font-extrabold text-[#112A46] leading-tight">
            {queryText}{" "}
            <span className="text-[#D97706] block sm:inline">{locationText}</span>
          </h1>

          <p className="text-slate-600 font-sans font-medium text-sm sm:text-base leading-relaxed max-w-xl">
            Amigo Academy offers career-focused aviation training at our Ghatkopar branch for students living in and around {locationText}. Explore professional courses in Cabin Crew and Airport Ground Staff with practical training and dedicated placement support.
          </p>

          <div className="pt-2">
            <button
              onClick={handleCTA}
              className="inline-flex items-center gap-2 bg-[#DF1818] hover:bg-[#c41212] text-white font-sans font-bold text-xs sm:text-sm px-8 py-4 rounded-full shadow-[0_8px_20px_rgba(223,24,24,0.25)] hover:shadow-[0_12px_24px_rgba(223,24,24,0.35)] transition-all duration-300 active:scale-95 whitespace-nowrap focus:outline-none cursor-pointer"
            >
              <span>Contact Us</span>
              <span className="font-bold">&nbsp;&#10132;</span>
            </button>
          </div>
        </div>

        {/* Right Column Form */}
        <div className="lg:col-span-5 w-full">
          <div className="bg-[#1e293b] rounded-[24px] p-6 sm:p-8 text-white shadow-2xl text-left">
            <h2 className="text-xl sm:text-2xl font-outfit font-extrabold text-white mb-2">
              Talk to Our Counsellor
            </h2>
            <p className="text-slate-300 font-sans text-xs sm:text-sm font-semibold mb-6">
              Fill the form and our team will contact you.
            </p>

            <form onSubmit={handleFormSubmit} className="space-y-4">
              
              {/* Name */}
              <div className="space-y-1">
                <label className="text-[10px] font-bold tracking-wider text-slate-300 uppercase block">Name *</label>
                <input
                  type="text"
                  required
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-slate-800/80 border border-slate-700 focus:border-[#DF1818] rounded-xl px-4 py-3 text-sm font-semibold text-white outline-none transition-all placeholder:text-slate-500"
                />
              </div>

              {/* Phone */}
              <div className="space-y-1">
                <label className="text-[10px] font-bold tracking-wider text-slate-300 uppercase block">Phone Number *</label>
                <input
                  type="text"
                  required
                  placeholder="+91"
                  minLength={10}
                  maxLength={10}
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value.replace(/\D/g, "") })}
                  className="w-full bg-slate-800/80 border border-slate-700 focus:border-[#DF1818] rounded-xl px-4 py-3 text-sm font-semibold text-white outline-none transition-all placeholder:text-slate-500"
                />
              </div>

              {/* Course */}
              <div className="space-y-1">
                <label className="text-[10px] font-bold tracking-wider text-slate-300 uppercase block">Select Service *</label>
                <select
                  required
                  value={formData.course}
                  onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                  className="w-full bg-slate-800/80 border border-slate-700 focus:border-[#DF1818] rounded-xl px-4 py-3 text-sm font-semibold text-white outline-none transition-all cursor-pointer text-slate-300 appearance-none"
                >
                  <option value="" disabled>Select course</option>
                  <option value="Air Hostess / Cabin Crew">Air Hostess / Cabin Crew</option>
                  <option value="Airport Ground Staff & Hospitality Management">Airport Ground Staff & Hospitality</option>
                  <option value="AI & Data Science">AI & Data Science</option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={!formData.name.trim() || formData.phone.length !== 10 || !formData.course}
                  className="w-full py-4 bg-[#DF1818] hover:bg-[#c41212] disabled:bg-slate-700 disabled:text-slate-500 disabled:cursor-not-allowed text-white rounded-xl text-xs sm:text-sm font-black uppercase tracking-wider shadow-lg active:scale-[0.98] transition-all flex items-center justify-center cursor-pointer"
                >
                  SEND REQUEST
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Trust Stats Bar */}
      <section className="bg-slate-50 py-12 border-y border-neutral-100 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="bg-white border border-neutral-200/60 rounded-[20px] p-6 text-center shadow-sm">
            <p className="text-3xl sm:text-[38px] font-outfit font-extrabold text-[#1C3E8A] mb-1">10,000+</p>
            <p className="text-slate-500 font-sans text-xs sm:text-[13px] font-bold">Students Trained</p>
          </div>

          <div className="bg-white border border-neutral-200/60 rounded-[20px] p-6 text-center shadow-sm">
            <p className="text-3xl sm:text-[38px] font-outfit font-extrabold text-[#1C3E8A] mb-1">4.6/5</p>
            <p className="text-slate-500 font-sans text-xs sm:text-[13px] font-bold">Google Rating (790+ Reviews)</p>
          </div>

          <div className="bg-white border border-neutral-200/60 rounded-[20px] p-6 text-center shadow-sm">
            <p className="text-3xl sm:text-[38px] font-outfit font-extrabold text-[#1C3E8A] mb-1">3</p>
            <p className="text-slate-500 font-sans text-xs sm:text-[13px] font-bold">Branches in Mumbai</p>
          </div>

          <div className="bg-white border border-neutral-200/60 rounded-[20px] p-6 text-center shadow-sm">
            <p className="text-3xl sm:text-[38px] font-outfit font-extrabold text-[#1C3E8A] mb-1">200+</p>
            <p className="text-slate-500 font-sans text-xs sm:text-[13px] font-bold">Hiring Partners</p>
          </div>

        </div>
      </section>

      {/* Dynamic WP Content Section */}
      {seoPage && seoPage.content.rendered && (
        <section className="bg-white py-16 px-6 border-b border-neutral-100">
          <div className="max-w-4xl mx-auto font-sans text-slate-600 text-sm sm:text-[15px] leading-relaxed">
            <div 
              className="prose prose-slate max-w-none 
                prose-headings:text-[#1C3E8A] prose-headings:font-bold prose-headings:font-outfit
                prose-h2:text-2xl prose-h2:font-extrabold prose-h2:mb-4 prose-h2:mt-8
                prose-p:mb-4
                prose-ul:list-disc prose-ul:pl-6 prose-ul:space-y-1.5 prose-ul:mb-4
                prose-li:text-slate-600 prose-li:font-semibold
                prose-strong:text-[#1C3E8A] prose-strong:font-bold
                prose-img:rounded-[24px] prose-img:shadow-md prose-img:my-6"
              dangerouslySetInnerHTML={{ __html: seoPage.content.rendered }}
            />
          </div>
        </section>
      )}

      {/* Courses Near Location Section */}
      <section className="bg-slate-50/50 py-16 sm:py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-[40px] font-outfit font-extrabold text-[#112A46] leading-tight mb-4">
              Courses for Students Near {locationText}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 1: Air Hostess */}
            <div className="bg-white rounded-[24px] border border-[#E1E5ED] shadow-sm flex flex-col justify-between overflow-hidden">
              <div>
                <div className="w-full h-48 sm:h-52 overflow-hidden">
                  <img src={course1Img} alt="Air Hostess / Cabin Crew" className="w-full h-full object-cover" />
                </div>
                <div className="p-6 text-left space-y-4">
                  <h3 className="text-lg sm:text-xl font-outfit font-extrabold text-[#1C3E8A]">Air Hostess / Cabin Crew</h3>
                  <p className="text-slate-500 font-sans text-xs sm:text-sm font-semibold leading-relaxed">
                    If you dream of working with leading domestic or international airlines, this programme prepares you with the professional skills, confidence, communication, grooming, and industry knowledge required to begin your aviation career.
                  </p>
                  <div>
                    <h4 className="text-xs font-bold text-[#112A46] uppercase tracking-wider mb-2">Course Highlights</h4>
                    <ul className="text-slate-500 font-sans text-xs font-semibold space-y-1.5 list-disc pl-4">
                      <li>12-Month Programme</li>
                      <li>Maharashtra Government Certified</li>
                      <li>Practical Training</li>
                      <li>Interview Preparation</li>
                      <li>Placement Support</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#112A46] uppercase tracking-wider mb-1">Career Opportunities</h4>
                    <p className="text-slate-500 font-sans text-xs font-semibold leading-normal">
                      Cabin Crew • Air Hostess • Flight Steward • In-flight Customer Service
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-6 pt-0">
                <button
                  onClick={() => { navigate("/career-guide/cabin-crew"); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                  className="w-full bg-[#DF1818] hover:bg-[#c41212] text-white font-sans font-bold text-xs sm:text-sm py-3.5 rounded-xl shadow-md transition-all active:scale-[0.98] cursor-pointer"
                >
                  Explore Air Hostess / Cabin Crew Course
                </button>
              </div>
            </div>

            {/* Card 2: Airport Ground Staff */}
            <div className="bg-white rounded-[24px] border border-[#E1E5ED] shadow-sm flex flex-col justify-between overflow-hidden">
              <div>
                <div className="w-full h-48 sm:h-52 overflow-hidden">
                  <img src={course2Img} alt="Airport Ground Staff" className="w-full h-full object-cover" />
                </div>
                <div className="p-6 text-left space-y-4">
                  <h3 className="text-lg sm:text-xl font-outfit font-extrabold text-[#1C3E8A]">Airport Ground Staff</h3>
                  <p className="text-slate-500 font-sans text-xs sm:text-sm font-semibold leading-relaxed">
                    Airports depend on skilled professionals to ensure smooth passenger experiences and efficient daily operations. This programme prepares students for customer service, check-in, passenger handling, baggage services, and airport operations.
                  </p>
                  <div>
                    <h4 className="text-xs font-bold text-[#112A46] uppercase tracking-wider mb-2">Course Highlights</h4>
                    <ul className="text-slate-500 font-sans text-xs font-semibold space-y-1.5 list-disc pl-4">
                      <li>12-Month Programme</li>
                      <li>Industry-Oriented Curriculum</li>
                      <li>Practical Projects</li>
                      <li>Career Guidance</li>
                      <li>Placement Support</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#112A46] uppercase tracking-wider mb-1">Career Opportunities</h4>
                    <p className="text-slate-500 font-sans text-xs font-semibold leading-normal">
                      Airport Ground Staff • Passenger Service Executive • Check-in Executive • Customer Service Executive
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-6 pt-0">
                <button
                  onClick={() => { navigate("/career-guide/airport-ground-staff"); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                  className="w-full bg-[#DF1818] hover:bg-[#c41212] text-white font-sans font-bold text-xs sm:text-sm py-3.5 rounded-xl shadow-md transition-all active:scale-[0.98] cursor-pointer"
                >
                  Explore Airport Ground Staff Course
                </button>
              </div>
            </div>

            {/* Card 3: AI & Data Science */}
            <div className="bg-white rounded-[24px] border border-[#E1E5ED] shadow-sm flex flex-col justify-between overflow-hidden">
              <div>
                <div className="w-full h-48 sm:h-52 overflow-hidden">
                  <img src={course3Img} alt="AI & Data Science" className="w-full h-full object-cover" />
                </div>
                <div className="p-6 text-left space-y-4">
                  <h3 className="text-lg sm:text-xl font-outfit font-extrabold text-[#1C3E8A]">AI & Data Science</h3>
                  <p className="text-slate-500 font-sans text-xs sm:text-sm font-semibold leading-relaxed">
                    Technology is shaping the future of every industry. Our AI & Data Science programme helps students build practical knowledge in Artificial Intelligence, Machine Learning, Python, and Data Science through industry-oriented learning.
                  </p>
                  <div>
                    <h4 className="text-xs font-bold text-[#112A46] uppercase tracking-wider mb-2">Course Highlights</h4>
                    <ul className="text-slate-500 font-sans text-xs font-semibold space-y-1.5 list-disc pl-4">
                      <li>12-Month Programme</li>
                      <li>Industry-Oriented Curriculum</li>
                      <li>Practical Projects</li>
                      <li>Career Guidance</li>
                      <li>Placement Support</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#112A46] uppercase tracking-wider mb-1">Career Opportunities</h4>
                    <p className="text-slate-500 font-sans text-xs font-semibold leading-normal">
                      AI Associate • Data Analyst • Junior Data Scientist • Machine Learning Associate
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-6 pt-0">
                <button
                  onClick={() => { navigate("/career-guide/ai-data-science"); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                  className="w-full bg-[#DF1818] hover:bg-[#c41212] text-white font-sans font-bold text-xs sm:text-sm py-3.5 rounded-xl shadow-md transition-all active:scale-[0.98] cursor-pointer"
                >
                  Explore AI & Data Science Course
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* What Makes Amigo Different Section */}
      <section className="bg-white py-16 sm:py-24 px-6 border-t border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-[40px] font-outfit font-extrabold text-[#112A46] leading-tight">
              What Makes Amigo Different?
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Checklist Column */}
            <div className="lg:col-span-6 space-y-6 text-left">
              {[
                { title: "Maharashtra Govt Certified", desc: "Maharashtra Govt-certified — a recognized qualification trusted by employers across India." },
                { title: "Strong Placement Support", desc: "Active hiring connections across aviation and tech. We push your profile until selected." },
                { title: "Easy EMI Options", desc: "Scholarship up to ₹50,000 plus flexible zero-interest EMI on all courses." },
                { title: "Lifetime Career Support", desc: "Support doesn't stop at graduation. Ongoing career counselling and job connections." },
                { title: "Free Career Counselling", desc: "Talk to an academy mentor today for free guidance on the right course and career path." },
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-[#1C3E8A]/10 text-[#1C3E8A] flex items-center justify-center font-bold text-sm shrink-0">
                    ✓
                  </div>
                  <div>
                    <h3 className="font-outfit font-bold text-[#112A46] text-base mb-1">{item.title}</h3>
                    <p className="text-slate-500 font-sans text-xs sm:text-[13px] font-semibold leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Graphic Column */}
            <div className="lg:col-span-6 flex flex-col items-center">
              <div className="relative w-full max-w-[500px] aspect-[4/3] rounded-[24px] overflow-hidden shadow-lg border border-slate-100 group">
                <img
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800"
                  alt="Amigo Academy Classroom"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-[#DF1818] text-white flex items-center justify-center shadow-lg cursor-pointer hover:scale-110 active:scale-95 transition-transform" onClick={handleCTA}>
                    <span className="text-lg ml-1">▶</span>
                  </div>
                </div>
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
                  <button
                    onClick={handleCTA}
                    className="bg-[#DF1818] hover:bg-[#c41212] text-white font-sans font-bold text-xs sm:text-sm px-6 py-3 rounded-full shadow-lg active:scale-95 transition-all whitespace-nowrap cursor-pointer"
                  >
                    Check My Eligibility Now &nbsp;➔
                  </button>
                </div>
              </div>

              {/* seats badge */}
              <div className="mt-8 bg-[#FFF9EB] border border-[#FFE0A3] text-[#B25E00] text-xs font-bold px-6 py-2.5 rounded-full flex items-center gap-2">
                <span>⚡</span>
                <span>LIMITED SEATS — APPLY EARLY TO SECURE YOUR SPOT</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Nearest Branch Section */}
      <section className="bg-slate-50/50 py-16 sm:py-24 px-6 border-t border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-[40px] font-outfit font-extrabold text-[#112A46] leading-tight">
              Nearest Amigo Academy Branch
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column Description */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <h3 className="text-2xl sm:text-3xl font-outfit font-extrabold text-[#1C3E8A]">Ghatkopar Branch</h3>
              <p className="text-slate-600 font-sans font-semibold text-sm sm:text-base leading-relaxed">
                The Ghatkopar branch is the nearest Amigo Academy centre for students from {locationText} and nearby areas.
              </p>
              
              <ul className="space-y-3 font-sans font-semibold text-xs sm:text-sm text-slate-500">
                <li className="flex items-center gap-2">
                  <span className="text-[#DF1818] font-bold">✓</span> Convenient connectivity from {locationText}
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#DF1818] font-bold">✓</span> Accessible by local train, bus and road
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#DF1818] font-bold">✓</span> Visit the branch to learn about courses, eligibility, fees and upcoming batches
                </li>
              </ul>

              <div className="pt-4">
                <button
                  onClick={() => { navigate("/ghatkopar-branch"); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                  className="bg-[#DF1818] hover:bg-[#c41212] text-white font-sans font-bold text-xs sm:text-sm px-8 py-4 rounded-full shadow-lg active:scale-95 transition-all cursor-pointer"
                >
                  Contact Branch &nbsp;➔
                </button>
              </div>
            </div>

            {/* Right Column Image */}
            <div className="lg:col-span-6">
              <div className="rounded-[24px] overflow-hidden shadow-lg border border-slate-100 aspect-[4/3] max-w-[500px] mx-auto">
                <img src={branchFacadeImg} alt="Ghatkopar Branch Building" className="w-full h-full object-cover" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Placement Support Section */}
      <section className="bg-white py-16 sm:py-24 px-6 border-t border-slate-100">
        <div className="max-w-7xl mx-auto text-center space-y-12">
          
          <div className="space-y-4 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-[40px] font-outfit font-extrabold text-[#112A46] leading-tight">
              Career &amp; Placement Support
            </h2>
            <p className="text-slate-500 font-sans text-xs sm:text-sm font-semibold leading-relaxed">
              We provide dedicated placement assistance, mock interviews, resume building, and soft-skills training to help students prepare for opportunities with airlines, airports, and aviation companies.
            </p>
            <p className="text-slate-400 font-sans text-[10px] sm:text-xs italic leading-normal">
              Final selection depends on the employer's eligibility requirements and recruitment process.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg sm:text-xl font-outfit font-extrabold text-[#1C3E8A]">
              Airlines &amp; IT Companies That Hire Our Students
            </h3>
            <p className="text-slate-500 font-sans text-xs font-semibold">
              From full-service and low-cost carriers to airport ground handling and technology employers.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {hiringPartners.map((logo, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#E1E5ED] rounded-[20px] p-5 flex items-center justify-center shadow-sm min-h-[90px]"
              >
                <img src={logo} alt={`Hiring Partner Logo ${idx + 1}`} className="max-h-8 max-w-full object-contain" />
              </div>
            ))}
          </div>

          <p className="text-[10px] text-slate-400 font-medium max-w-2xl mx-auto leading-relaxed">
            Company names are listed as employers where Amigo Academy students have been placed or where hiring drives are conducted. All trademarks belong to their respective owners.
          </p>

        </div>
      </section>

      {/* FAQs Section */}
      <section className="bg-slate-50/50 py-16 sm:py-24 px-6 border-t border-slate-100">
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
            <FAQAccordionItem
              index={1}
              question="What salary can I expect after air hostess training?"
              answer="After Air Hostess training, freshers can typically expect around ₹25,000–₹40,000 per month, depending on the airline, role, and location. With experience, earnings can increase significantly."
            />
            <FAQAccordionItem
              index={2}
              question="What is the eligibility for air hostess course after 12th?"
              answer="To apply for the Air Hostess course, you need to have completed 12th grade (any stream), be between 17 to 26 years of age, and meet the physical and communication standards set by the airlines."
            />
            <FAQAccordionItem
              index={3}
              question="Which is the best air hostess course in Mumbai with placement support?"
              answer="Amigo Academy offers the leading Govt-certified Air Hostess and Cabin Crew program in Mumbai. We provide intensive hands-on classroom training, professional grooming, mock interviews, and 100% genuine placement support."
            />
            <FAQAccordionItem
              index={4}
              question="Best AI and Data Science course in Mumbai after 12th."
              answer="Amigo Academy offers a comprehensive 12-month AI & Data Science training program covering Python, machine learning, and generative AI tools, complete with industry projects and placement assistance."
            />
            <FAQAccordionItem
              index={5}
              question="Do you provide placement for airport ground staff course?"
              answer="Yes, we provide 100% placement support and have direct campus drives with major airlines and airport operators for ground staff and customer service roles."
            />
            <FAQAccordionItem
              index={6}
              question="Are your courses government recognised with EMI options?"
              answer="Yes, our courses are Maharashtra Government Certified, and we offer flexible zero-interest EMI options to ensure quality training remains affordable."
            />
          </div>

          {/* Seats badge */}
          <div className="flex justify-center pt-6">
            <div className="bg-[#FFF9EB] border border-[#FFE0A3] text-[#B25E00] text-xs font-bold px-6 py-2.5 rounded-full flex items-center gap-2">
              <span>⚡</span>
              <span>LIMITED SEATS — APPLY EARLY TO SECURE YOUR SPOT</span>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
