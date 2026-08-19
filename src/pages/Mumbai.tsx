import React from "react";
import { Link } from "react-router-dom";

export default function Mumbai() {
  const seoLinks = [
    "Best Aviation Institute Near Bhandup",
    "Best Aviation Institute Near Powai",
    "Best Aviation Institute Near Mulund",
    "Best Aviation Institute Near Vikhroli",
    "Best Aviation Institute Near Kanjurmarg",
    "Best Aviation Institute Near Chembur",
    "Air Hostess Course Near Bhandup",
    "Air Hostess Course Near Powai",
    "Air Hostess Course Near Mulund",
    "Cabin Crew Course Near Bhandup",
    "Cabin Crew Course Near Powai",
    "Cabin Crew Course Near Vikhroli",
    "Airport Ground Staff Course Near Bhandup",
    "Airport Ground Staff Course Near Powai",
    "Airport Ground Staff Course Near Mulund",
    "Best Aviation Institute Near Bhandup",
    "Airport Ground Staff Course Near Vikhroli",
    "Airport Ground Staff Course Near Kanjurmarg",
    "Airport Ground Staff Course Near Chembur",
    "AI & Data Science Course Near Bhandup",
    "AI & Data Science Course Near Powai",
    "AI & Data Science Course Near Mulund",
    "AI & Data Science Course Near Vikhroli",
    "AI & Data Science Course Near Kanjurmarg",
    "AI & Data Science Course Near Chembur",
    "Best Courses After 12th Near Bhandup",
    "Aviation Courses Near Powai",
    "Aviation Courses Near Mulund",
    "Aviation Career Guidance Near Bhandup",
    "Aviation Career Guidance Near Powai",
    "Aviation Career Guidance Near Mulund"
  ];

  const toSlug = (text: string) => {
    return text
      .toLowerCase()
      .replace(/&/g, "and")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)+/g, "");
  };

  return (
    <div className="bg-white min-h-screen py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Breadcrumbs */}
        <nav className="flex items-center space-x-2 text-xs sm:text-sm font-sans font-semibold text-slate-500 mb-8 sm:mb-12 justify-center md:justify-start">
          <Link to="/" className="hover:text-[#DF1818] transition-colors">Home</Link>
          <span>&gt;</span>
          <span className="text-slate-500">India</span>
          <span>&gt;</span>
          <span className="text-[#DF1818] font-bold">Mumbai</span>
        </nav>

        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-outfit font-extrabold text-[#1C3E8A] leading-tight mb-6">
            Mumbai
          </h1>
          <p className="text-slate-600 font-sans font-medium text-sm sm:text-base md:text-lg leading-relaxed">
            Explore Amigoz Academy aviation and technology training across Mumbai.
            <br />
            Find the course and location most convenient for you.
          </p>
        </div>

        {/* Link Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {seoLinks.map((linkText, index) => (
            <Link
              key={index}
              to={`/mumbai/${toSlug(linkText)}`}
              className="w-full text-center py-4 px-6 bg-white border border-[#E1E5ED] rounded-xl text-slate-600 hover:text-[#1C3E8A] hover:border-[#1C3E8A] font-sans font-semibold text-xs sm:text-sm transition-all duration-300 hover:shadow-md active:scale-[0.99] block"
            >
              {linkText}
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
}
