import React from "react";
import { useNavigate } from "react-router-dom";

export default function Franchise() {
    const navigate = useNavigate();

    const handleCTA = () => {
        navigate("/contact");
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div className="flex flex-col bg-white">

            {/* Franchise Hero Section */}
            <section className="w-full bg-white min-h-[520px] lg:h-[550px] relative overflow-hidden flex items-center border-b border-neutral-100">

                {/* Split Background Image on the Right */}
                <div className="absolute top-0 right-0 h-full w-full lg:w-[50%] z-0">
                    <img
                        src={new URL("../assets/img/Franchisehero.png", import.meta.url).href}
                        alt="Partner With Amigo Academy - Franchise Opportunity"
                        className="h-full w-full object-cover lg:object-left"
                        onError={(e) => {
                            // Fallback mockup image
                            e.currentTarget.src = "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800";
                        }}
                    />

                </div>

                {/* Content Container */}
                <div className="max-w-7xl mx-auto w-full px-6 sm:px-8 relative z-20 flex items-center h-full py-12 lg:py-0">
                    <div className="max-w-[540px] space-y-6 text-left">

                        {/* Title */}
                        <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-outfit font-extrabold text-[#0b2f61] leading-[1.15] tracking-tight">
                            Partner With Amigo Academy – <span className="text-[#dfaa29]">Franchise Opportunity</span>
                        </h1>

                        {/* Paragraphs */}
                        <div className="space-y-4 font-sans font-semibold text-slate-600 text-xs sm:text-[13.5px] leading-relaxed">
                            <p>
                                Aviation and technology education is one of India's fastest-growing industries. Amigo Academy offers entrepreneurs the opportunity to build a successful education business using a trusted, Maharashtra Government Certified brand.
                            </p>
                            <p>
                                Founded in 2017, with over 10,000+ students trained, a 4.6★ reputation and three established Mumbai branches, we provide the support, systems and expertise to help our franchise partners succeed.
                            </p>
                        </div>

                        {/* CTA Button */}
                        <div className="pt-2">
                            <button
                                onClick={handleCTA}
                                className="inline-flex items-center justify-center gap-2 bg-[#e31e24] hover:bg-[#c2141a] text-white font-sans font-bold text-xs sm:text-sm px-8 py-3.5 rounded-full shadow-[0_8px_20px_rgba(227,30,36,0.15)] transition-all duration-300 active:scale-95 whitespace-nowrap focus:outline-none cursor-pointer"
                            >
                                Enroll Now To Avail Scholarship &rarr;
                            </button>
                        </div>

                    </div>
                </div>
            </section>

            {/* Why Partner With Amigo Academy Section */}
            <section className="bg-[#f4f7fa] py-20 sm:py-24 border-t border-slate-100/80">
                <div className="max-w-7xl mx-auto px-6">

                    {/* Badge & Headings */}
                    <div className="flex flex-col items-center text-center mb-16">
                        <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-amber-200 bg-amber-50/60 text-[10px] sm:text-xs font-bold text-amber-700 uppercase tracking-widest mb-4">
                            <span>Why Amigo</span>
                        </div>

                        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f2a4a] leading-tight font-sans tracking-tight mb-3">
                            Why Partner With Amigo Academy
                        </h2>
                        <p className="text-slate-500 font-semibold font-sans text-xs sm:text-sm max-w-2xl leading-relaxed">
                            A certified brand, proven courses and complete operational support — everything a franchise partner needs to build a credible education business.
                        </p>
                    </div>

                    {/* Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                icon: (
                                    <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                                    </svg>
                                ),
                                category: "CERTIFICATION",
                                title: "Maharashtra Government Certified",
                                desc: "Trusted and recognised aviation training that parents and students believe in.",
                                points: ["Government-certified programs", "Credible, recognised brand"]
                            },
                            {
                                icon: (
                                    <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.504-1.125-1.125-1.125h-6.75a1.125 1.125 0 00-1.125 1.125v3.375m9 0h-9M9 10.5a3 3 0 116 0 3 3 0 01-6 0z" />
                                    </svg>
                                ),
                                category: "TRACK RECORD",
                                title: "Established Brand",
                                desc: "A career academy built and proven in Mumbai since 2017.",
                                points: ["Founded in 2017", "10,000+ students trained", "4.6★ rating • 790+ reviews"]
                            },
                            {
                                icon: (
                                    <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84a50.58 50.58 0 00-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                                    </svg>
                                ),
                                category: "PROGRAMS",
                                title: "High-Demand Courses",
                                desc: "Three job-focused courses with real hiring demand in every city.",
                                points: ["Air Hostess / Cabin Crew", "Airport Ground Staff", "AI & Data Science"]
                            },
                            {
                                icon: (
                                    <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.43l-1.003.828c-.293.241-.438.613-.43.992a7.723 7.723 0 010 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.43l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.991l-1.004-.827a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.645-.869l.214-1.28z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                ),
                                category: "SUPPORT",
                                title: "Complete Business Support",
                                desc: "You are never left to figure out operations alone.",
                                points: ["Setup guidance", "Curriculum & faculty support", "Placement process", "Marketing assistance"]
                            },
                            {
                                icon: (
                                    <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                                    </svg>
                                ),
                                category: "OPPORTUNITY",
                                title: "Growing Industry",
                                desc: "Aviation and AI hiring continues to expand across India.",
                                points: ["Rising aviation demand", "Rising AI & Data Science demand", "Long-term opportunity"]
                            },
                            {
                                icon: (
                                    <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                    </svg>
                                ),
                                category: "PARTNERSHIP",
                                title: "Honest, Long-Term Partnership",
                                desc: "We grow with partners who care about real student outcomes.",
                                points: ["Transparent processes", "Head-office guidance", "Shared growth roadmap"]
                            }
                        ].map((card, idx) => (
                            <div
                                key={idx}
                                className="bg-white rounded-3xl border border-slate-100 shadow-[0_20px_40px_rgba(15,42,74,0.06)] p-8 text-left transition-all duration-300 hover:shadow-[0_30px_60px_rgba(15,42,74,0.12)] hover:-translate-y-1 flex flex-col justify-between"
                            >
                                <div>
                                    {/* Icon Wrapper */}
                                    <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center mb-5">
                                        {card.icon}
                                    </div>

                                    {/* Category */}
                                    <span className="text-[10px] sm:text-xs font-bold text-[#e31e24] tracking-widest uppercase block mb-2.5 font-sans">
                                        {card.category}
                                    </span>

                                    {/* Title */}
                                    <h3 className="font-sans font-bold text-[#0f2a4a] text-base sm:text-lg mb-3">
                                        {card.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-slate-400 font-sans font-semibold text-xs sm:text-[13px] leading-relaxed mb-6">
                                        {card.desc}
                                    </p>
                                </div>

                                {/* Points */}
                                <div className="border-t border-slate-100/60 pt-4 space-y-3.5">
                                    {card.points.map((point, pIdx) => (
                                        <div key={pIdx} className="flex items-start space-x-2.5">
                                            <div className="w-4 h-4 rounded-full bg-amber-50 flex items-center justify-center text-amber-600 flex-shrink-0 mt-0.5">
                                                <svg className="w-2.5 h-2.5 text-amber-700" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                                </svg>
                                            </div>
                                            <span className="text-slate-500 font-sans font-semibold text-xs sm:text-[13px] leading-snug pt-0.5">
                                                {point}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/* Why Invest in Education Section */}
            <section className="bg-[#f4f7fa] py-20 sm:py-24 border-t border-slate-100/80">
                <div className="max-w-7xl mx-auto px-6">

                    {/* Badge & Headings */}
                    <div className="flex flex-col items-center text-center mb-16">
                        <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-amber-200 bg-amber-50/60 text-[10px] sm:text-xs font-bold text-amber-700 uppercase tracking-widest mb-4">
                            <span>Business Opportunity</span>
                        </div>

                        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f2a4a] leading-tight font-sans tracking-tight mb-3">
                            Why Invest in Education?
                        </h2>
                        <p className="text-slate-500 font-semibold font-sans text-xs sm:text-sm max-w-2xl leading-relaxed">
                            Education franchises combine steady demand with long-term brand value — and aviation and AI training sit right at the centre of that growth.
                        </p>
                    </div>

                    {/* Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                icon: (
                                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 2.22m6.16 6.16a7.72 7.72 0 11-10.92 10.92m10.92-10.92a7.72 7.72 0 00-10.92 10.92m0 0H2.25v-2.25" />
                                    </svg>
                                ),
                                title: "Fast Growing Industry",
                                desc: "Aviation and technology education is one of India's fastest-expanding sectors."
                            },
                            {
                                icon: (
                                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-10.5h16.5M2.25 9h19.5M4.5 21V9m15 12V9M6.75 21V9m10.5 12V9M9 21V9m6 12V9m-3 12V9" />
                                    </svg>
                                ),
                                title: "Stable Business Model",
                                desc: "Structured courses, defined batches and predictable operating costs."
                            },
                            {
                                icon: (
                                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                                    </svg>
                                ),
                                title: "Recurring Admissions",
                                desc: "New batches every quarter create a steady, repeating admission cycle."
                            },
                            {
                                icon: (
                                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                                    </svg>
                                ),
                                title: "High Demand Careers",
                                desc: "Students enrol because airlines, airports and tech firms are actively hiring."
                            },
                            {
                                icon: (
                                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.504-1.125-1.125-1.125h-6.75a1.125 1.125 0 00-1.125 1.125v3.375m9 0h-9M9 10.5a3 3 0 116 0 3 3 0 01-6 0z" />
                                    </svg>
                                ),
                                title: "Student Success",
                                desc: "Placement outcomes drive referrals — your strongest local marketing channel."
                            },
                            {
                                icon: (
                                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                                    </svg>
                                ),
                                title: "Long-Term Growth",
                                desc: "An education brand compounds in value year after year in its city."
                            }
                        ].map((item, idx) => (
                            <div
                                key={idx}
                                className="bg-white rounded-3xl border border-slate-100/80 shadow-[0_20px_40px_rgba(15,42,74,0.06)] p-6 sm:p-7 flex items-center text-left transition-all duration-300 hover:shadow-[0_30px_60px_rgba(15,42,74,0.12)] hover:-translate-y-1"
                            >
                                {/* Icon Wrapper */}
                                <div className="w-12 h-12 rounded-2xl bg-[#0b2f61] flex items-center justify-center mr-4 sm:mr-5 flex-shrink-0 shadow-sm">
                                    {item.icon}
                                </div>

                                {/* Text Details */}
                                <div>
                                    <h3 className="font-sans font-bold text-[#0f2a4a] text-sm sm:text-base mb-1">
                                        {item.title}
                                    </h3>
                                    <p className="text-slate-400 font-sans font-semibold text-xs sm:text-[13px] leading-normal">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/* Franchise Support Section */}
            <section className="bg-[#f4f7fa] py-20 sm:py-24 border-t border-slate-100/80">
                <div className="max-w-7xl mx-auto px-6">

                    {/* Badge & Headings */}
                    <div className="flex flex-col items-center text-center mb-16">
                        <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-amber-200 bg-amber-50/60 text-[10px] sm:text-xs font-bold text-amber-700 uppercase tracking-widest mb-4">
                            <span>End-to-End Guidance</span>
                        </div>

                        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f2a4a] leading-tight font-sans tracking-tight mb-3">
                            Franchise Support
                        </h2>
                        <p className="text-slate-500 font-semibold font-sans text-xs sm:text-sm max-w-2xl leading-relaxed">
                            From the first floor plan to your first placed batch, our head office team stays involved at every stage.
                        </p>
                    </div>

                    {/* Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                icon: (
                                    <svg viewBox="0 0 24 24" className="w-6 h-6 stroke-[#1e2a4a] fill-none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                        <rect x="4" y="3" width="16" height="18" />
                                        <line x1="9" y1="7" x2="9" y2="7.01" />
                                        <line x1="15" y1="7" x2="15" y2="7.01" />
                                        <line x1="9" y1="11" x2="9" y2="11.01" />
                                        <line x1="15" y1="11" x2="15" y2="11.01" />
                                        <line x1="9" y1="15" x2="9" y2="15.01" />
                                        <line x1="15" y1="15" x2="15" y2="15.01" />
                                        <rect x="10" y="17" width="4" height="4" />
                                    </svg>
                                ),
                                title: "Business Setup",
                                desc: "Centre planning, layout, infrastructure checklist and launch readiness."
                            },
                            {
                                icon: (
                                    <svg viewBox="0 0 24 24" className="w-6 h-6 stroke-[#1e2a4a] fill-none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="12" cy="12" r="3" />
                                        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
                                    </svg>
                                ),
                                title: "Training & Operations",
                                desc: "Day-to-day operating systems, batch planning and reporting formats."
                            },
                            {
                                icon: (
                                    <svg viewBox="0 0 24 24" className="w-6 h-6 stroke-[#1e2a4a] fill-none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M2 4h6a4 4 0 0 1 4 4v12a3 3 0 0 0-3-3H2z" />
                                        <path d="M22 4h-6a4 4 0 0 0-4 4v12a3 3 0 0 1 3-3h7z" />
                                    </svg>
                                ),
                                title: "Curriculum Support",
                                desc: "Our structured, industry-aligned course content for all three programs."
                            },
                            {
                                icon: (
                                    <svg viewBox="0 0 24 24" className="w-6 h-6 stroke-[#1e2a4a] fill-none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M3 11v2a1 1 0 0 0 1 1h2l3.5 5V5L6 10H4a1 1 0 0 0-1 1z" />
                                        <path d="M13 8a4 4 0 0 1 0 8" />
                                        <path d="M17.5 5a8 8 0 0 1 0 14" />
                                    </svg>
                                ),
                                title: "Marketing Support",
                                desc: "Campaign templates, creatives and local lead-generation guidance."
                            },
                            {
                                icon: (
                                    <svg viewBox="0 0 24 24" className="w-6 h-6 stroke-[#1e2a4a] fill-none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M15 20v-1a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v1" />
                                        <circle cx="8.5" cy="7" r="4" />
                                        <line x1="19" y1="8" x2="19" y2="14" />
                                        <line x1="16" y1="11" x2="22" y2="11" />
                                    </svg>
                                ),
                                title: "Admission Guidance",
                                desc: "Counselling scripts, enquiry handling and conversion best practices."
                            },
                            {
                                icon: (
                                    <svg viewBox="0 0 24 24" className="w-6 h-6 stroke-[#1e2a4a] fill-none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                        <rect x="2" y="7" width="20" height="14" rx="2" />
                                        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                                        <line x1="2" y1="13" x2="22" y2="13" />
                                    </svg>
                                ),
                                title: "Placement Process",
                                desc: "Our placement workflow, employer approach and interview preparation model."
                            },
                            {
                                icon: (
                                    <svg viewBox="0 0 24 24" className="w-6 h-6 stroke-[#1e2a4a] fill-none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                                        <circle cx="9" cy="7" r="4" />
                                        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                                    </svg>
                                ),
                                title: "Faculty Training",
                                desc: "Trainer onboarding, teaching standards and grooming methodology."
                            },
                            {
                                icon: (
                                    <svg viewBox="0 0 24 24" className="w-6 h-6 stroke-[#1e2a4a] fill-none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                        <rect x="2" y="4" width="14" height="10" rx="1" />
                                        <line x1="6" y1="18" x2="12" y2="18" />
                                        <rect x="17" y="9" width="5" height="9" rx="1" />
                                    </svg>
                                ),
                                title: "Technology Support",
                                desc: "Systems for enquiries, student records and batch administration."
                            },
                            {
                                icon: (
                                    <svg viewBox="0 0 24 24" className="w-6 h-6 stroke-[#1e2a4a] fill-none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M12 2a10 10 0 1 0 0 20c1.1 0 2-.9 2-2 0-.5-.2-1-.5-1.3-.3-.4-.5-.8-.5-1.3 0-1.1.9-2 2-2h2.4c2 0 3.6-1.6 3.6-3.6C21 6.6 17 2 12 2z" />
                                        <circle cx="6.5" cy="11.5" r="1.2" />
                                        <circle cx="9.5" cy="7.5" r="1.2" />
                                        <circle cx="14.5" cy="7.5" r="1.2" />
                                        <circle cx="17.5" cy="11.5" r="1.2" />
                                    </svg>
                                ),
                                title: "Branding Assistance",
                                desc: "Brand guidelines, signage and collateral so every centre looks the same."
                            }
                        ].map((card, idx) => (
                            <div
                                key={idx}
                                className="bg-white rounded-3xl border border-slate-100 shadow-[0_20px_40px_rgba(15,42,74,0.06)] p-8 text-left transition-all duration-300 hover:shadow-[0_30px_60px_rgba(15,42,74,0.12)] hover:-translate-y-1 flex flex-col justify-between"
                            >
                                <div>
                                    {/* Icon Badge */}
                                    <div className="w-14 h-14 rounded-2xl bg-[#f5e0a3] flex items-center justify-center mb-6 shadow-sm">
                                        {card.icon}
                                    </div>

                                    {/* Title */}
                                    <h3 className="font-sans font-bold text-[#0f2a4a] text-base sm:text-lg mb-2">
                                        {card.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-slate-400 font-sans font-semibold text-xs sm:text-[13px] leading-relaxed">
                                        {card.desc}
                                    </p>
                                </div>

                                {/* Horizontal Accent Indicator Line */}
                                <div className="w-8 h-[3px] bg-[#dfaa29] rounded-full mt-6" />

                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/* Our Proven Success (Track Record) Section */}
            <section className="bg-[#f4f7fa] py-20 sm:py-24 border-t border-slate-100/80">
                <div className="max-w-7xl mx-auto px-6">

                    {/* Badge & Headings */}
                    <div className="flex flex-col items-center text-center mb-16">
                        <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-amber-200 bg-amber-50/60 text-[10px] sm:text-xs font-bold text-amber-700 uppercase tracking-widest mb-4">
                            <span>Track Record</span>
                        </div>

                        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f2a4a] leading-tight font-sans tracking-tight mb-3">
                            Our Proven Success
                        </h2>
                        <p className="text-slate-500 font-semibold font-sans text-xs sm:text-sm max-w-2xl leading-relaxed">
                            Numbers that give franchise partners confidence in the brand they are investing in.
                        </p>
                    </div>

                    {/* Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                stat: "2017",
                                label: "Founded",
                                sublabel: "PROVEN SINCE DAY ONE"
                            },
                            {
                                stat: "10,000+",
                                label: "Students Trained",
                                sublabel: "ACROSS MUMBAI BRANCHES"
                            },
                            {
                                stat: "4.6★",
                                label: "Google Rating",
                                sublabel: "VERIFIED STUDENT REVIEWS"
                            },
                            {
                                stat: "790+",
                                label: "Reviews",
                                sublabel: "REAL STUDENT FEEDBACK"
                            },
                            {
                                stat: "3",
                                label: "Mumbai Branches",
                                sublabel: "GHATKOPAR • ANDHERI • THANE"
                            },
                            {
                                stat: "200+",
                                label: "Hiring Partners",
                                sublabel: "AVIATION & TECHNOLOGY"
                            }
                        ].map((card, idx) => (
                            <div
                                key={idx}
                                className="bg-white rounded-3xl border border-slate-100 shadow-[0_20px_40px_rgba(15,42,74,0.06)] py-10 px-8 flex flex-col items-center text-center transition-all duration-300 hover:shadow-[0_30px_60px_rgba(15,42,74,0.12)] hover:-translate-y-1"
                            >
                                {/* Large Stat Number */}
                                <h3 className="font-sans font-extrabold text-[#0b2f61] text-4xl sm:text-[44px] leading-none mb-3 tracking-tight">
                                    {card.stat}
                                </h3>

                                {/* Label */}
                                <span className="font-sans font-bold text-[#0f2a4a]/90 text-sm sm:text-base mb-1">
                                    {card.label}
                                </span>

                                {/* Sublabel */}
                                <span className="font-sans font-extrabold text-slate-400 text-[10px] tracking-widest uppercase mb-4">
                                    {card.sublabel}
                                </span>

                                {/* Horizontal Accent Indicator Line */}
                                <div className="w-10 h-[3px] bg-[#dfaa29] rounded-full mt-1.5" />

                            </div>
                        ))}
                    </div>

                </div>
            </section>
        
            {/* Franchise Journey Section */}
            <section className="bg-white py-20 sm:py-24 border-t border-slate-100/80">
                <div className="max-w-7xl mx-auto px-6">

                    {/* Badge & Headings */}
                    <div className="flex flex-col items-center text-center mb-20">
                        <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-amber-200 bg-amber-50/60 text-[10px] sm:text-xs font-bold text-amber-700 uppercase tracking-widest mb-4">
                            <span>Simple & Transparent</span>
                        </div>

                        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f2a4a] leading-tight font-sans tracking-tight mb-3">
                            Franchise Journey
                        </h2>
                        <p className="text-slate-500 font-semibold font-sans text-xs sm:text-sm max-w-2xl leading-relaxed">
                            Six clear steps from your first enquiry to the day your centre opens its doors.
                        </p>
                    </div>

                    {/* Timeline Wrapper */}
                    <div className="relative">
                        {/* Horizontal Line behind nodes on desktop */}
                        <div className="absolute top-[26px] left-[8%] right-[8%] h-[3px] bg-gradient-to-r from-[#0b2f61] via-[#0b2f61] to-[#dfaa29] lg:block hidden z-0" />

                        {/* Steps Container Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 relative z-10">
                            {[
                                {
                                    step: "STEP 1",
                                    title: "Submit Franchise Enquiry",
                                    desc: "Share your details, city and preferred location through the form below.",
                                    iconImg: new URL("../assets/img/Franchiseicons1.png", import.meta.url).href
                                },
                                {
                                    step: "STEP 2",
                                    title: "Discussion With Franchise Team",
                                    desc: "We understand your goals and answer every question openly.",
                                    iconImg: new URL("../assets/img/Franchiseicons2.png", import.meta.url).href
                                },
                                {
                                    step: "STEP 3",
                                    title: "Location Evaluation",
                                    desc: "We assess demand, competition and suitability of your proposed location.",
                                    iconImg: new URL("../assets/img/Franchiseicons3.png", import.meta.url).href
                                },
                                {
                                    step: "STEP 4",
                                    title: "Business Proposal",
                                    desc: "You receive a clear proposal covering investment, model and returns.",
                                    iconImg: new URL("../assets/img/Franchiseicons4.png", import.meta.url).href
                                },
                                {
                                    step: "STEP 5",
                                    title: "Training & Setup",
                                    desc: "Faculty training, curriculum handover and complete centre setup support.",
                                    iconImg: new URL("../assets/img/Franchiseicons5.png", import.meta.url).href
                                },
                                {
                                    step: "STEP 6",
                                    title: "Launch Your Centre",
                                    desc: "Marketing launch, first admissions and ongoing head-office support.",
                                    iconImg: new URL("../assets/img/Franchiseicons6.png", import.meta.url).href
                                }
                            ].map((card, idx) => (
                                <div key={idx} className="flex flex-col items-center">

                                    {/* Timeline Circle Node */}
                                    <img
                                        src={card.iconImg}
                                        alt={card.title}
                                        className="w-14 h-14 object-contain mb-6 relative z-10 hover:scale-110 transition-transform duration-300"
                                        onError={(e) => {
                                            e.currentTarget.src = "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=100";
                                        }}
                                    />

                                    {/* Card Container */}
                                    <div className="bg-white rounded-3xl border border-slate-100 shadow-[0_20px_40px_rgba(15,42,74,0.06)] p-6 flex flex-col items-center text-center transition-all duration-300 hover:shadow-[0_30px_60px_rgba(15,42,74,0.12)] hover:-translate-y-1 w-full min-h-[220px]">
                                        <span className="text-[10px] sm:text-xs font-bold text-[#e31e24] tracking-widest uppercase mb-3 font-sans">
                                            {card.step}
                                        </span>
                                        <h3 className="font-sans font-bold text-[#0f2a4a] text-[13.5px] sm:text-[14.5px] mb-3 leading-snug">
                                            {card.title}
                                        </h3>
                                        <p className="text-slate-400 font-sans font-semibold text-xs sm:text-[12.5px] leading-relaxed">
                                            {card.desc}
                                        </p>
                                    </div>

                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </section>

        </div>
    );
}


