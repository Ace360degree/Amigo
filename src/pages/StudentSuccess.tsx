import React from "react";
import heroImg from "../assets/img/StudentSuccesshero.png";
import decisionImg from "../assets/img/StudentSuccess1.png";
import student1 from "../assets/img/placementstudent3.png";
import student2 from "../assets/img/placementstudent2.png";
import student3 from "../assets/img/placementstudent7.png";
import student4 from "../assets/img/placementstudent4.png";

const students = [
    {
        name: "Reema Mascarenhas",
        course: "Cabin Crew (Air Hostess & Hospitality Management)",
        branch: "Thane",
        placedAt: "Air India",
        quote: "Grooming sessions changed how I carried myself in the interview.",
        image: student1
    },
    {
        name: "Waqas Shaikh",
        course: "Airport Ground Staff & Hospitality Management",
        branch: "Andheri",
        placedAt: "Air India",
        quote: "My trainer pushed my profile until I got the offer letter.",
        image: student2
    },
    {
        name: "Bhumika Jadhav",
        course: "Cabin Crew (Air Hostess & Hospitality Management)",
        branch: "Thane",
        placedAt: "Quess",
        quote: "The mock interviews made the real airline round feel familiar.",
        image: student3
    },
    {
        name: "Mehwish Sayyed",
        course: "Airport Ground Staff & Hospitality Management",
        branch: "Ghatkopar",
        placedAt: "Vistara Air",
        quote: "The mock interviews made the real airline round feel familiar.",
        image: student4
    }
];

export default function StudentSuccess() {
    return (
        <div className="flex flex-col bg-white">
            <section className="w-full bg-white min-h-[420px] sm:min-h-[500px] lg:min-h-[600px] relative flex items-center overflow-hidden">

                {/* Desktop Background Image Container */}
                <div className="hidden lg:block absolute top-0 right-0 h-full w-[65%] z-0">
                    {/* Gradient overlay to blend image seamlessly into the white background on the left */}
                    <div className="absolute top-0 left-0 bottom-0 w-32 md:w-48 lg:w-64 bg-gradient-to-r from-white via-white/90 to-transparent z-10"></div>

                    <img
                        src={heroImg}
                        alt="Student Success Stories"
                        className="w-full h-full object-cover object-[center_top] lg:object-[center_20%]"
                    />
                </div>

                {/* Mobile Background Image Container */}
                <div className="block lg:hidden absolute inset-0 z-0 w-full h-full">
                    <img
                        src={new URL("../assets/img/mobileherostudentsuccess.png", import.meta.url).href}
                        alt="Student Success Stories Mobile"
                        className="w-full h-full object-cover object-[right_center]"
                        onError={(e) => {
                            e.currentTarget.style.display = "none";
                        }}
                    />
                </div>

                <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 relative z-20">
                    <div className="w-[50%] sm:w-[50%] lg:w-full max-w-xl lg:max-w-lg xl:max-w-xl py-12 lg:py-24 text-left">
                        <h1 className="text-xl sm:text-3xl lg:text-[54px] font-extrabold text-[#0f2a4a] leading-[1.2] lg:leading-[1.15] tracking-tight mb-4 lg:mb-6 font-sans">
                            Student Success Stories
                        </h1>
                        <p className="text-slate-600 text-[20px] sm:text-[15.5px] leading-relaxed mb-6 lg:mb-10 font-medium">
                            Every student's journey is unique, but they all begin with the same goal—to build a better future. Explore inspiring success stories from Amigo Academy students who turned their ambitions into careers through dedication, learning, and the right guidance.
                        </p>

                        <button className="bg-[#e31e24] hover:bg-[#c9181d] text-white font-bold text-[9px] sm:text-xs lg:text-[14px] py-2.5 px-4 sm:py-3.5 sm:px-8 rounded-full transition-colors duration-200 shadow-[0_4px_14px_rgba(227,30,36,0.25)] hover:shadow-[0_6px_20px_rgba(227,30,36,0.35)] flex items-center justify-center gap-2 lg:gap-3 w-fit">
                            Read Success Stories
                            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </button>
                    </div>
                </div>

            </section>

            {/* Decision Section */}
            <section className="py-20 lg:py-28 bg-white relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                        {/* Text Content */}
                        <div className="w-full lg:w-1/2 flex flex-col justify-center lg:pr-8">
                            <div className="w-12 h-[3px] bg-amber-400 mb-6 lg:mb-8 rounded-full"></div>

                            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-[#0f2a4a] leading-tight font-sans tracking-tight mb-6">
                                Every Success Begins<br className="hidden sm:block lg:hidden xl:block" /> with a Decision
                            </h2>

                            <div className="space-y-6 text-slate-500 font-medium text-[15px] sm:text-[15.5px] leading-relaxed">
                                <p>
                                    Behind every success story is a student who chose to learn, grow, and work towards a career with determination.
                                </p>
                                <p>
                                    At Amigo Academy, we're proud to be part of that journey by providing practical training, honest guidance, and dedicated placement support that helps students move confidently towards their professional goals.
                                </p>
                            </div>
                        </div>

                        {/* Image Content */}
                        <div className="w-full lg:w-1/2">
                            <div className="rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(15,42,74,0.1)] relative group border border-slate-100">
                                <img
                                    src={decisionImg}
                                    alt="Every Success Begins with a Decision"
                                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                                />
                                {/* Optional subtle overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent pointer-events-none"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Meet Our Students Section */}
            <section className="py-20 lg:py-28 bg-[#f4f7f9] relative">
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Header */}
                    <div className="text-center max-w-3xl mx-auto mb-20 lg:mb-24">
                        <div className="w-12 h-[3px] bg-amber-400 mx-auto mb-6 rounded-full"></div>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f2a4a] leading-tight font-sans tracking-tight mb-6">
                            Meet Our Students
                        </h2>
                        <p className="text-slate-500 font-medium text-[15px] sm:text-[15.5px] leading-relaxed">
                            Discover how students from different backgrounds have built careers in aviation and technology after completing their training at Amigo Academy. Each story reflects a personal journey of learning, preparation, and achievement.
                        </p>
                    </div>

                    {/* Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8 pt-8">
                        {students.map((student, idx) => (
                            <div key={idx} className="bg-white rounded-[1.5rem] p-6 xl:p-8 shadow-[0_10px_40px_rgba(15,42,74,0.04)] border border-slate-100 relative mt-12 flex flex-col hover:shadow-[0_20px_50px_rgba(15,42,74,0.08)] transition-all duration-300">

                                {/* Avatar */}
                                <div className="absolute -top-12 left-1/2 -translate-x-1/2">
                                    <div className="relative">
                                        <img
                                            src={student.image}
                                            alt={student.name}
                                            className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg bg-slate-50"
                                        />
                                        <div className="absolute top-1 -right-2 w-7 h-7 bg-amber-400 rounded-full flex items-center justify-center border-2 border-white shadow-sm">
                                            <svg className="w-3.5 h-3.5 text-amber-900" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                                <h3 className="text-lg font-bold text-[#0f2a4a] text-center mt-14 mb-8 font-sans">
                                    {student.name}
                                </h3>

                                <div className="space-y-5 mb-8 flex-1">
                                    <div className="flex items-start gap-4">
                                        <svg className="w-5 h-5 text-slate-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                                        </svg>
                                        <div>
                                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">Course</p>
                                            <p className="text-[13px] font-bold text-[#0f2a4a]">{student.course}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <svg className="w-5 h-5 text-slate-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                        </svg>
                                        <div>
                                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">Branch</p>
                                            <p className="text-[13px] font-bold text-[#0f2a4a]">{student.branch}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <svg className="w-5 h-5 text-slate-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.118l-6.5.495a1.99 1.99 0 0 1-1.393-.414v-2.072c0-.528.243-1.018.653-1.328l3.6-2.736A1.5 1.5 0 0 0 15 13.253V10.5h-5.25v2.753c0 .528.243 1.018.653 1.328l3.6 2.736c.41.31.653.8.653 1.328v2.072a1.99 1.99 0 0 1-1.393.414l-6.5-.495A2.002 2.002 0 0 1 3.75 18.4V14.15c0-.98.718-1.822 1.688-1.942a77.302 77.302 0 0 1 13.124 0c.97.12 1.688.96 1.688 1.942ZM15 7.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                        </svg>
                                        <div>
                                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">Placed At</p>
                                            <p className="text-[13px] font-bold text-[#0f2a4a]">{student.placedAt}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="border-t border-slate-100 pt-6 mt-auto">
                                    <p className="text-slate-500 text-[13px] leading-[1.7] font-medium">
                                        {student.quote}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 lg:py-28 bg-white relative">
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 xl:gap-24">

                        {/* Feature 1 */}
                        <div className="flex flex-col">
                            <div className="w-16 h-16 bg-[#040f26] rounded-2xl flex items-center justify-center mb-8 shadow-[0_10px_30px_rgba(4,15,38,0.2)]">
                                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-[#0f2a4a] mb-6 font-sans">
                                From Classroom<br />to Career
                            </h3>
                            <div className="space-y-6 text-slate-500 text-[14px] leading-relaxed font-medium">
                                <p>
                                    Every success story begins in the classroom. Through industry-focused training, practical learning, and continuous support, students prepare themselves for opportunities that help shape their professional future.
                                </p>
                                <p>
                                    Whether they pursue careers in aviation or technology, every student's journey reflects the value of commitment, preparation, and continuous learning.
                                </p>
                            </div>
                        </div>

                        {/* Feature 2 */}
                        <div className="flex flex-col">
                            <div className="w-16 h-16 bg-[#040f26] rounded-2xl flex items-center justify-center mb-8 shadow-[0_10px_30px_rgba(4,15,38,0.2)]">
                                <svg className="w-8 h-8 text-amber-400" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 22a1 1 0 0 1-1-1v-3H8a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2h-3v3a1 1 0 0 1-1 1zm8-18h-2V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v1H4a2 2 0 0 0-2 2v2c0 2.22 1.48 4.14 3.52 4.77 1.34 3.73 4.96 6.23 9.07 5.76A6.979 6.979 0 0 0 20 12.87V12a1 1 0 0 0-2 0v.87c0 2.65-2.02 4.93-4.66 5.1-2.91.19-5.34-2.12-5.34-5.01V4h10v10a1 1 0 0 0 2 0V6a2 2 0 0 0-2-2zM4 9V6h2v4.88C4.81 10.42 4 9.28 4 9z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-[#0f2a4a] mb-6 font-sans">
                                Success Beyond<br />Placement
                            </h3>
                            <div className="space-y-6 text-slate-500 text-[14px] leading-relaxed font-medium">
                                <p>
                                    Success means different things to different students. For some, it's securing their first job. For others, it's building confidence, developing professional skills, or achieving a long-term career goal.
                                </p>
                                <p>
                                    Every milestone represents progress, and every achievement inspires future students to begin their own journey.
                                </p>
                            </div>
                        </div>

                        {/* Feature 3 */}
                        <div className="flex flex-col">
                            <div className="w-16 h-16 bg-[#040f26] rounded-2xl flex items-center justify-center mb-8 shadow-[0_10px_30px_rgba(4,15,38,0.2)]">
                                <svg className="w-8 h-8 text-white translate-x-[2px]" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M3.4 20.4l17.45-7.48c.81-.35.81-1.49 0-1.84L3.4 3.6c-.66-.29-1.39.2-1.39.91L2 9.12c0 .5.37.93.87.99L17 12 2.87 13.88c-.5.07-.87.5-.87 1l.01 4.61c0 .71.73 1.2 1.39.91z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-[#0f2a4a] mb-6 font-sans">
                                Start Your Success<br />Story
                            </h3>
                            <div className="space-y-6 text-slate-500 text-[14px] leading-relaxed font-medium mb-10">
                                <p>
                                    Every successful career starts with the first step. If you're ready to explore your opportunities in aviation or technology, our team is here to guide you towards the course that matches your goals and aspirations.
                                </p>
                            </div>
                            <button className="bg-[#e31e24] hover:bg-[#c9181d] text-white font-bold text-[14px] py-4 px-8 rounded-full transition-colors duration-200 shadow-[0_4px_14px_rgba(227,30,36,0.25)] hover:shadow-[0_6px_20px_rgba(227,30,36,0.35)] flex items-center justify-center gap-3 w-fit mt-auto">
                                Contact Now
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </button>
                        </div>

                    </div>
                </div>
            </section>

            {/* Stats Banner Section */}
            <section className="pb-20 lg:pb-28 bg-white relative">
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-[#eff6ff] rounded-3xl p-8 lg:p-12 border border-blue-100 shadow-sm">

                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 lg:gap-0 lg:divide-x divide-blue-200/80">

                            {/* Stat 1 */}
                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 lg:justify-center lg:px-6">
                                <svg className="w-9 h-9 text-[#0f2a4a] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
                                </svg>
                                <div>
                                    <h4 className="text-[22px] lg:text-2xl font-extrabold text-[#0f2a4a] font-sans">10,000+</h4>
                                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-0.5">Students Trained</p>
                                </div>
                            </div>

                            {/* Stat 2 */}
                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 lg:justify-center lg:px-6">
                                <svg className="w-9 h-9 text-[#0f2a4a] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
                                </svg>
                                <div>
                                    <h4 className="text-[22px] lg:text-2xl font-extrabold text-[#0f2a4a] font-sans">3</h4>
                                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-0.5">Mumbai Branches</p>
                                </div>
                            </div>

                            {/* Stat 3 */}
                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 lg:justify-center lg:px-6">
                                <svg className="w-9 h-9 text-[#0f2a4a] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 10.5v10.125c0 1.035-.84 1.875-1.875 1.875H5.625a1.875 1.875 0 0 1-1.875-1.875V10.5m16.5 0v-4.125c0-1.035-.84-1.875-1.875-1.875h-3.75a1.875 1.875 0 0 0-1.875-1.875h-3.75a1.875 1.875 0 0 0-1.875 1.875h-3.75c-1.035 0-1.875.84-1.875 1.875V10.5m16.5 0-8.25 4.5-8.25-4.5" />
                                </svg>
                                <div>
                                    <h4 className="text-[22px] lg:text-2xl font-extrabold text-[#0f2a4a] font-sans">500+</h4>
                                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-0.5">Placement Partners</p>
                                </div>
                            </div>

                            {/* Stat 4 */}
                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 lg:justify-center lg:px-6">
                                <svg className="w-9 h-9 text-[#0f2a4a] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
                                </svg>
                                <div>
                                    <h4 className="text-[22px] lg:text-2xl font-extrabold text-[#0f2a4a] font-sans">95%</h4>
                                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-0.5">Placement Assistance</p>
                                </div>
                            </div>

                            {/* Stat 5 */}
                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 lg:justify-center lg:px-6">
                                <svg className="w-9 h-9 text-[#0f2a4a] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                                </svg>
                                <div>
                                    <h4 className="text-[22px] lg:text-2xl font-extrabold text-[#0f2a4a] font-sans">Since 2017</h4>
                                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-0.5">Building Careers</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}
