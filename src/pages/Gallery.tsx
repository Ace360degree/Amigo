import React from "react";
import heroImg from "../assets/img/Galleryheroimg1.png";
import cardImg1 from "../assets/img/Galleryclassroomy1.png";
import cardImg2 from "../assets/img/Galleryclassroomy2.png";
import cardImg3 from "../assets/img/Galleryclassroomy3.png";
import cardImg4 from "../assets/img/Galleryclassroomy4.png";
import group1 from "../assets/img/Gallerygroup1.png";
import group2 from "../assets/img/Gallerygroup2.png";
import group3 from "../assets/img/Gallerygroup3.png";
import group4 from "../assets/img/Gallerygroup4.png";
import group5 from "../assets/img/Gallerygroup5.png";
import group6 from "../assets/img/Gallerygroup6.png";
import group7 from "../assets/img/Gallerygroup7.png";
import group8 from "../assets/img/Gallerygroup8.png";
import bannerImg from "../assets/img/Gallerybannerimgy.png";

const galleryCards = [
    {
        title: "Classroom Training",
        desc: "Take a look inside our classrooms where students build practical knowledge, develop professional skills, and prepare for careers in aviation and technology.",
        linkText: "View Classroom Gallery",
        image: cardImg1,
        color: "text-red-500",
        bgColor: "bg-red-50",
        icon: (
            <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72l5 2.73 5-2.73v3.72z" />
            </svg>
        )
    },
    {
        title: "Workshops & Events",
        desc: "From interactive workshops to academy events, our students regularly participate in activities that encourage learning, confidence, and professional development beyond the classroom.",
        linkText: "View Events Gallery",
        image: cardImg2,
        color: "text-indigo-600",
        bgColor: "bg-indigo-100",
        icon: (
            <svg className="w-5 h-5 text-indigo-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 002 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2z" />
            </svg>
        )
    },
    {
        title: "Student Activities",
        desc: "Learning is about more than academics. Explore moments that capture student participation, celebrations, teamwork, and life at Amigo Academy.",
        linkText: "View Student Activities",
        image: cardImg3,
        color: "text-green-600",
        bgColor: "bg-green-100",
        icon: (
            <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05.02.01.03.03.04.04 1.14.83 1.93 1.94 1.93 3.41V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
            </svg>
        )
    },
    {
        title: "Placements & Achievements",
        desc: "Celebrate the success of our students as they take the next step in their careers. Explore memorable moments that reflect the hard work and dedication of our students and the academy.",
        linkText: "View Placement Gallery",
        image: cardImg4,
        color: "text-orange-500",
        bgColor: "bg-orange-100",
        icon: (
            <svg className="w-5 h-5 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94A5.01 5.01 0 0011 15.9V19H7v2h10v-2h-4v-3.1a5.01 5.01 0 003.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm14 0c0 1.3-.84 2.4-2 2.82V7h2v1z" />
            </svg>
        )
    }
];

export default function Gallery() {
    return (
        <div className="flex flex-col bg-white">
            <section className="relative w-full min-h-[420px] sm:min-h-[500px] lg:min-h-[600px] bg-white overflow-hidden flex items-center">

                {/* Desktop Background Image Container (Visible on large screens, faded behind overlay) */}
                <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-3/5 h-full z-0">
                    <img
                        src={heroImg}
                        alt="Amigo Academy Aviation Classroom"
                        className="w-full h-full object-cover object-center"
                    />
                </div>

                {/* Mobile Background Image Container */}
                <div className="block lg:hidden absolute inset-0 z-0 w-full h-full">
                    <img
                        src={new URL("../assets/img/mobileheroGallery.png", import.meta.url).href}
                        alt="Amigo Academy Aviation Classroom Mobile"
                        className="w-full h-full object-cover object-[right_center]"
                        onError={(e) => {
                            e.currentTarget.style.display = "none";
                        }}
                    />
                </div>

                {/* Content Area */}
                <div className="max-w-7xl mx-auto w-full px-6 pt-6 pb-20 sm:pt-12 sm:pb-32 lg:py-24 relative z-20 grid grid-cols-1 lg:grid-cols-12 gap-8">

                    {/* Left Column: Heading and Text */}
                    <div className="w-[50%] sm:w-[50%] lg:w-full lg:col-span-6 flex flex-col space-y-3 sm:space-y-6 text-left items-start justify-center">

                        <h1 className="text-xl sm:text-3xl lg:text-[54px] font-sans font-extrabold tracking-tight text-[#0f2a4a] leading-[1.2] lg:leading-[1.12]">
                            Gallery
                        </h1><br />

                        <p className="text-slate-600 text-[10px] sm:text-base leading-relaxed font-sans max-w-xl">
                            Explore moments from life at Amigo Academy through our gallery. From classroom training and workshops to student activities, placements, and academy events, see how our students learn, grow, and prepare for successful careers in aviation and technology.
                        </p>

                    </div>

                </div>

            </section>

            {/* Glimpse Section */}
            <section className="py-16 sm:py-20 lg:py-28 bg-[#fafafa]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Header */}
                    <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
                        <div className="w-10 h-1 bg-amber-400 mx-auto mb-6 rounded-full"></div>
                        <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-[#0f2a4a] mb-6 font-sans tracking-tight">
                            A Glimpse into Life at Amigo Academy
                        </h2>
                        <p className="text-slate-600 font-medium text-[15px] sm:text-base leading-[1.8]">
                            Every journey begins with learning, and every milestone deserves to be remembered. Our gallery showcases moments from across our campuses, giving you a closer look at the learning environment, practical training, student activities, and experiences that shape life at Amigo Academy.
                        </p>
                    </div>

                    {/* Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
                        {galleryCards.map((card, idx) => (
                            <div key={idx} className="bg-white rounded-2xl overflow-visible shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-slate-100 flex flex-col group hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-shadow duration-300">

                                <div className="relative">
                                    <img
                                        src={card.image}
                                        alt={card.title}
                                        className="w-full h-48 object-cover rounded-t-2xl"
                                    />

                                    {/* Icon Badge */}
                                    <div className="absolute left-6 -bottom-6 w-12 h-12 rounded-full border-[3px] border-white flex items-center justify-center z-10 bg-white shadow-sm">
                                        <div className={`w-full h-full rounded-full flex items-center justify-center ${card.bgColor}`}>
                                            {card.icon}
                                        </div>
                                    </div>
                                </div>

                                <div className="p-6 pt-10 flex-1 flex flex-col">
                                    <h3 className="text-[19px] font-bold text-[#0f2a4a] mb-4 font-sans">
                                        {card.title}
                                    </h3>
                                    <p className="text-slate-500 text-[14px] leading-[1.7] mb-8 font-medium">
                                        {card.desc}
                                    </p>

                                    <a href="#" className={`mt-auto inline-flex items-center text-[13px] font-bold tracking-wide ${card.color} hover:opacity-80 transition-opacity`}>
                                        {card.linkText}
                                        <svg className="w-4 h-4 ml-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </a>
                                </div>

                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/* Photo Grid Section */}
            <section className="py-20 lg:py-28 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Header */}
                    <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
                        <div className="w-10 h-1 bg-amber-400 mx-auto mb-6 rounded-full"></div>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f2a4a] mb-4 font-sans tracking-tight">
                            Our Gallery
                        </h2>
                        <p className="text-slate-500 text-[15px] leading-relaxed font-medium">
                            A collection of moments from classrooms, training sessions, events, and placements at Amigo Academy.
                        </p>
                    </div>

                    {/* Photo Grid - 4 column grid with variable spans */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">

                        {/* Row 1: wide | narrow | narrow */}
                        <div className="sm:col-span-2 overflow-hidden rounded-xl">
                            <img src={group1} alt="Gallery 1" className="w-full h-52 md:h-64 object-cover hover:scale-105 transition-transform duration-500" />
                        </div>
                        <div className="overflow-hidden rounded-xl">
                            <img src={group2} alt="Gallery 2" className="w-full h-52 md:h-64 object-cover hover:scale-105 transition-transform duration-500" />
                        </div>
                        <div className="overflow-hidden rounded-xl">
                            <img src={group3} alt="Gallery 3" className="w-full h-52 md:h-64 object-cover hover:scale-105 transition-transform duration-500" />
                        </div>

                        {/* Row 2: narrow | wide | narrow */}
                        <div className="overflow-hidden rounded-xl">
                            <img src={group4} alt="Gallery 4" className="w-full h-52 md:h-64 object-cover hover:scale-105 transition-transform duration-500" />
                        </div>
                        <div className="sm:col-span-2 overflow-hidden rounded-xl">
                            <img src={group5} alt="Gallery 5" className="w-full h-52 md:h-64 object-cover hover:scale-105 transition-transform duration-500" />
                        </div>
                        <div className="overflow-hidden rounded-xl">
                            <img src={group6} alt="Gallery 6" className="w-full h-52 md:h-64 object-cover hover:scale-105 transition-transform duration-500" />
                        </div>

                        {/* Row 3: equal single columns */}
                        <div className="overflow-hidden rounded-xl">
                            <img src={group7} alt="Gallery 7" className="w-full h-52 md:h-64 object-cover hover:scale-105 transition-transform duration-500" />
                        </div>
                        <div className="overflow-hidden rounded-xl">
                            <img src={group8} alt="Gallery 8" className="w-full h-52 md:h-64 object-cover object-center hover:scale-105 transition-transform duration-500" />
                        </div>

                    </div>

                </div>
            </section>

            {/* Banner Section */}
            <section className="py-14 sm:py-16 lg:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-[#fdf8f0] rounded-3xl overflow-hidden flex flex-col lg:flex-row items-stretch shadow-sm border border-amber-100">

                        {/* Left: Image */}
                        <div className="w-full lg:w-[45%] flex-shrink-0">
                            <img
                                src={bannerImg}
                                alt="Amigo Academy Branch"
                                className="w-full h-56 sm:h-64 lg:h-full object-cover"
                            />
                        </div>

                        {/* Right: Content */}
                        <div className="flex-1 flex flex-col justify-center px-5 sm:px-8 py-10 sm:py-12 lg:px-12 lg:py-14">
                            <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-extrabold text-[#0f2a4a] leading-tight mb-5 font-sans">
                                Experience Amigo Academy<br className="hidden lg:block" /> Before You Visit
                            </h2>
                            <p className="text-slate-500 text-[15px] leading-[1.8] font-medium mb-8 max-w-lg">
                                Pictures can tell you a lot about an academy, but nothing compares to experiencing it in person. Visit one of our branches, meet our team, explore the learning environment, and discover how Amigo Academy helps students prepare for successful careers.
                            </p>
                            <div>
                                <button className="bg-[#e31e24] hover:bg-[#c9181d] text-white font-bold text-[14px] py-4 px-8 rounded-full transition-colors duration-200 shadow-[0_4px_14px_rgba(227,30,36,0.25)] hover:shadow-[0_6px_20px_rgba(227,30,36,0.35)] inline-flex items-center gap-3">
                                    Visit Our Branch
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

        </div>
    );
}
