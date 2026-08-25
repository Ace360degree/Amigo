import React, { useState, useEffect } from "react";
import heroImg from "../assets/img/Galleryheroimg1.png";
import cardImg1 from "../assets/img/Galleryclassroomy1.png";
import cardImg2 from "../assets/img/Galleryclassroomy2.png";
import cardImg3 from "../assets/img/Galleryclassroomy3.png";
import cardImg4 from "../assets/img/Galleryclassroomy4.png";
import bannerImg from "../assets/img/Gallerybannerimgy.png";

// Dynamically import all images in src/assets/img/gallery using Vite's import.meta.glob
const galleryImagesGlob = import.meta.glob("../assets/img/gallery/**/*.{png,jpg,jpeg,webp,svg}", {
    eager: true,
    import: "default",
}) as Record<string, string>;

// Helper to get array of image URLs by subfolder path match
const getImagesFromFolder = (folderName?: string): string[] => {
    const urls: string[] = [];
    Object.entries(galleryImagesGlob).forEach(([path, url]) => {
        const pathLower = path.toLowerCase();
        if (folderName) {
            // Match specific subfolder like '/gallery/classroom/'
            if (pathLower.includes(`/gallery/${folderName.toLowerCase()}/`)) {
                urls.push(url);
            }
        } else {
            // Match ONLY root gallery files (e.g. Gallerygroup1.png) and exclude subfolders
            const parts = path.split("/gallery/");
            if (parts.length > 1 && !parts[1].includes("/")) {
                urls.push(url);
            }
        }
    });
    return urls;
};

// All images across all gallery folders for a comprehensive global slideshow option
const getAllGalleryImagesCombined = (): string[] => {
    return Object.values(galleryImagesGlob);
};

const galleryCards = [
    {
        id: "Classroom",
        title: "Classroom Training",
        desc: "Take a look inside our classrooms where students build practical knowledge, develop professional skills, and prepare for careers in aviation and technology.",
        linkText: "View Classroom Gallery",
        image: cardImg1,
        folderName: "Classroom",
        color: "text-red-500",
        bgColor: "bg-red-100",
        icon: (
            <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72l5 2.73 5-2.73v3.72z" />
            </svg>
        )
    },
    {
        id: "Events",
        title: "Workshops & Events",
        desc: "From interactive workshops to academy events, our students regularly participate in activities that encourage learning, confidence, and professional development beyond the classroom.",
        linkText: "View Events Gallery",
        image: cardImg2,
        folderName: "Events",
        color: "text-indigo-600",
        bgColor: "bg-indigo-100",
        icon: (
            <svg className="w-5 h-5 text-indigo-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 002 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2z" />
            </svg>
        )
    },
    {
        id: "Student Activities",
        title: "Student Activities",
        desc: "Learning is about more than academics. Explore moments that capture student participation, celebrations, teamwork, and life at Amigo Academy.",
        linkText: "View Student Activities Gallery",
        image: cardImg3,
        folderName: "Student Activities",
        color: "text-green-600",
        bgColor: "bg-green-100",
        icon: (
            <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05.02.01.03.03.04.04 1.14.83 1.93 1.94 1.93 3.41V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
            </svg>
        )
    },
    {
        id: "Placements",
        title: "Placements & Achievements",
        desc: "Celebrate the success of our students as they take the next step in their careers. Explore memorable moments that reflect the hard work and dedication of our students and the academy.",
        linkText: "View Placement Gallery",
        image: cardImg4,
        folderName: "Placements",
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
    // Popup state
    const [modalState, setModalState] = useState<{
        isOpen: boolean;
        title: string;
        images: string[];
        currentIndex: number;
    }>({
        isOpen: false,
        title: "",
        images: [],
        currentIndex: 0,
    });

    const openPopup = (title: string, images: string[], initialIndex: number = 0) => {
        if (!images || images.length === 0) return;
        setModalState({
            isOpen: true,
            title,
            images,
            currentIndex: initialIndex,
        });
    };

    const closePopup = () => {
        setModalState((prev) => ({ ...prev, isOpen: false }));
    };

    const handlePrev = (e: React.MouseEvent) => {
        e.stopPropagation();
        setModalState((prev) => ({
            ...prev,
            currentIndex: (prev.currentIndex - 1 + prev.images.length) % prev.images.length,
        }));
    };

    const handleNext = (e: React.MouseEvent) => {
        e.stopPropagation();
        setModalState((prev) => ({
            ...prev,
            currentIndex: (prev.currentIndex + 1) % prev.images.length,
        }));
    };

    // Keyboard arrow keys navigation for lightbox
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!modalState.isOpen) return;
            if (e.key === "Escape") closePopup();
            if (e.key === "ArrowLeft") {
                setModalState((prev) => ({
                    ...prev,
                    currentIndex: (prev.currentIndex - 1 + prev.images.length) % prev.images.length,
                }));
            }
            if (e.key === "ArrowRight") {
                setModalState((prev) => ({
                    ...prev,
                    currentIndex: (prev.currentIndex + 1) % prev.images.length,
                }));
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [modalState.isOpen]);

    // Images strictly located directly inside src/assets/img/gallery/ for "Our Gallery" section
    const ourGalleryImages = getImagesFromFolder();
    // Combined slideshow of all images across all folders
    const allGalleryImagesCombined = getAllGalleryImagesCombined();

    return (
        <div className="flex flex-col bg-white">
            <section className="relative w-full min-h-[420px] sm:min-h-[500px] lg:min-h-[600px] bg-white overflow-hidden flex items-center">

                {/* Desktop Background Image Container */}
                <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-3/5 h-full z-0">
                    <img
                        src={heroImg}
                        alt="Amigo Academy Aviation Classroom"
                        className="w-full h-full object-cover object-center"
                    />
                    {/* Gradient overlay to fade left edge into white without covering contents */}
                    <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent z-10" />
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
            <section className="py-12 sm:py-16 lg:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Header */}
                    <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
                        <div className="w-12 h-1 bg-[#fbbf24] mx-auto mb-4 rounded-full"></div>
                        <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-[#0f2a4a] mb-4 font-sans tracking-tight">
                            A Glimpse into Life at Amigo Academy
                        </h2>
                        <p className="text-slate-500 font-normal text-xs sm:text-[13px] sm:leading-relaxed leading-normal">
                            Every journey begins with learning, and every milestone deserves to be remembered. Our gallery showcases moments from across our campuses, giving you a closer look at the learning environment, practical training, student activities, and experiences that shape life at Amigo Academy.
                        </p>
                    </div>

                    {/* Cards Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 mb-10 sm:mb-12">
                        {galleryCards.map((card, idx) => {
                            const folderImgs = getImagesFromFolder(card.folderName);
                            const imagesToDisplay = folderImgs.length > 0 ? folderImgs : [card.image];

                            return (
                                <div
                                    key={idx}
                                    onClick={() => openPopup(card.title, imagesToDisplay, 0)}
                                    className="bg-white rounded-2xl overflow-hidden shadow-[0_2px_15px_rgba(0,0,0,0.04)] border border-slate-100 flex flex-col group hover:shadow-[0_12px_28px_rgba(15,42,74,0.08)] hover:-translate-y-1 transition-all duration-300 cursor-pointer relative"
                                >
                                    <div className="relative overflow-hidden">
                                        <img
                                            src={card.image}
                                            alt={card.title}
                                            className="w-full h-44 sm:h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                            <span className="bg-white/95 backdrop-blur-sm text-[#0f2a4a] font-bold text-xs px-3.5 py-1.5 rounded-full shadow-md">
                                                Click to View ({imagesToDisplay.length})
                                            </span>
                                        </div>

                                        {/* Icon Badge - Positioned overlapping bottom-left of card image */}
                                        <div className="absolute -bottom-4 left-5 w-9 h-9 rounded-full border-2 border-white flex items-center justify-center z-10 bg-white shadow-sm group-hover:scale-110 transition-transform duration-300">
                                            <div className={`w-full h-full rounded-full flex items-center justify-center ${card.bgColor}`}>
                                                {card.icon}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="p-5 pt-7 flex-1 flex flex-col">
                                        <h3 className="text-base font-bold text-[#0f2a4a] mb-2 font-sans group-hover:text-[#e31e24] transition-colors">
                                            {card.title}
                                        </h3>
                                        <p className="text-slate-500 text-xs leading-relaxed mb-4 font-normal flex-1">
                                            {card.desc}
                                        </p>

                                        <button
                                            type="button"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                openPopup(card.title, imagesToDisplay, 0);
                                            }}
                                            className={`mt-auto inline-flex items-center text-xs font-bold ${card.color} group-hover:translate-x-1 transition-transform`}
                                        >
                                            {card.linkText}
                                            <svg className="w-3.5 h-3.5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Photo Grid - Displaying images with exact span pattern from reference screenshot */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
                        {ourGalleryImages.map((imgSrc, index) => {
                            // Exact column span matching the reference screenshot layout:
                            // Row 1: Image 0 (wide / span 2), Image 1 (span 1), Image 2 (span 1)
                            // Row 2: Image 3 (span 1), Image 4 (wide / span 2), Image 5 (span 1)
                            // Row 3: Image 6 (span 1), Image 7 (span 1)
                            const pos = index % 8;
                            const spanClass = (pos === 0 || pos === 4)
                                ? "col-span-1 md:col-span-2"
                                : "col-span-1 md:col-span-1";

                            return (
                                <div
                                    key={index}
                                    onClick={() => openPopup("Our Gallery", allGalleryImagesCombined, index)}
                                    className={`${spanClass} relative overflow-hidden rounded-xl sm:rounded-2xl group cursor-pointer shadow-sm hover:shadow-lg transition-all duration-300 h-48 sm:h-56 md:h-64 border border-slate-100`}
                                >
                                    <img
                                        src={imgSrc}
                                        alt={`Gallery item ${index + 1}`}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                        <div className="w-9 h-9 rounded-full bg-white/90 text-[#0f2a4a] flex items-center justify-center shadow-md transform scale-75 group-hover:scale-100 transition-transform duration-300">
                                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                </div>
            </section>


            {/* Banner Section */}
            <section className="py-16 lg:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-[#fdf8f0] rounded-3xl overflow-hidden flex flex-col lg:flex-row items-stretch shadow-sm border border-amber-100">

                        {/* Left: Image */}
                        <div className="w-full lg:w-[45%] flex-shrink-0">
                            <img
                                src={bannerImg}
                                alt="Amigo Academy Branch"
                                className="w-full h-64 lg:h-full object-cover"
                            />
                        </div>

                        {/* Right: Content */}
                        <div className="flex-1 flex flex-col justify-center px-8 py-12 lg:px-12 lg:py-14">
                            <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-extrabold text-[#0f2a4a] leading-tight mb-5 font-sans">
                                Experience Amigo Academy<br className="hidden lg:block" /> Before You Visit
                            </h2>
                            <p className="text-slate-500 text-[15px] leading-[1.8] font-medium mb-8 max-w-lg">
                                Pictures can tell you a lot about an academy, but nothing compares to experiencing it in person. Visit one of our branches, meet our team, explore the learning environment, and discover how Amigo Academy helps students prepare for successful careers.
                            </p>
                            <div>
                                <button className="bg-[#e31e24] hover:bg-[#c9181d] text-white font-bold text-[14px] py-4 px-8 rounded-full transition-colors duration-200 shadow-[0_4px_14px_rgba(227,30,36,0.25)] hover:shadow-[0_6px_20px_rgba(227,30,36,0.35)] inline-flex items-center gap-3" onClick={() => window.location.href = '/branches'}>
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

            {/* Lightbox Image Popup Modal */}
            {modalState.isOpen && (
                <div
                    onClick={closePopup}
                    className="fixed inset-0 z-[110] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 transition-all duration-300 animate-fadeIn"
                >
                    {/* Header Controls */}
                    <div className="absolute top-4 left-4 right-4 sm:top-6 sm:left-6 sm:right-6 flex items-center justify-between z-20 text-white">
                        <div className="flex items-center gap-3">
                            <span className="font-extrabold text-base sm:text-lg tracking-tight bg-white/10 px-4 py-1.5 rounded-full backdrop-blur-md border border-white/10">
                                {modalState.title}
                            </span>
                            <span className="text-xs sm:text-sm font-semibold opacity-75">
                                {modalState.currentIndex + 1} of {modalState.images.length}
                            </span>
                        </div>

                        {/* Close button */}
                        <button
                            onClick={closePopup}
                            type="button"
                            className="bg-white/10 hover:bg-white/20 text-white p-2.5 rounded-full transition-colors backdrop-blur-md border border-white/10 cursor-pointer"
                            aria-label="Close image popup"
                        >
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    {/* Navigation Buttons */}
                    {modalState.images.length > 1 && (
                        <>
                            <button
                                type="button"
                                onClick={handlePrev}
                                className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/25 text-white p-3 sm:p-4 rounded-full transition-all backdrop-blur-md border border-white/10 z-20 cursor-pointer hover:scale-110 active:scale-95"
                                aria-label="Previous image"
                            >
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>

                            <button
                                type="button"
                                onClick={handleNext}
                                className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/25 text-white p-3 sm:p-4 rounded-full transition-all backdrop-blur-md border border-white/10 z-20 cursor-pointer hover:scale-110 active:scale-95"
                                aria-label="Next image"
                            >
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </>
                    )}

                    {/* Image Viewport */}
                    <div
                        onClick={(e) => e.stopPropagation()}
                        className="relative max-w-5xl max-h-[80vh] flex items-center justify-center overflow-hidden rounded-2xl shadow-2xl"
                    >
                        <img
                            src={modalState.images[modalState.currentIndex]}
                            alt={`${modalState.title} - ${modalState.currentIndex + 1}`}
                            className="max-w-full max-h-[78vh] object-contain transition-all duration-300 select-none rounded-xl"
                        />
                    </div>
                </div>
            )}
        </div>
    );
}

