import React, { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { fetchSEOPages, WPPost } from "../services/wordpress";

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

export default function Location() {
  const [seoPages, setSeoPages] = useState<WPPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSEOPages().then((pages) => {
      setSeoPages(pages);
      setLoading(false);
    }).catch((err) => {
      console.error("Error loading SEO pages:", err);
      setLoading(false);
    });
  }, []);

  return (
    <div className="bg-white min-h-screen py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Breadcrumbs */}
        <nav className="flex items-center space-x-2 text-xs sm:text-sm font-sans font-semibold text-slate-500 mb-8 sm:mb-12 justify-center md:justify-start">
          <Link to="/" className="hover:text-[#DF1818] transition-colors">Home</Link>
          <span>&gt;</span>
          <span className="text-slate-500">India</span>
          <span>&gt;</span>
          <span className="text-[#DF1818] font-bold">Locations</span>
        </nav>

        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-outfit font-extrabold text-[#1C3E8A] leading-tight mb-6">
            Locations
          </h1>
          <p className="text-slate-600 font-sans font-medium text-sm sm:text-base md:text-lg leading-relaxed">
            Explore Amigo Academy aviation and technology training across locations.
            <br />
            Find the course and location most convenient for you.
          </p>
        </div>

        {/* Link Grid */}
        {loading ? (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="w-12 h-12 border-4 border-[#1C3E8A] border-t-transparent rounded-full animate-spin"></div>
            <p className="text-slate-500 font-sans font-bold mt-4">Loading regions...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
            {seoPages.map((page) => (
              <Link
                key={page.id}
                to={`/${page.slug}` as any}
                className="w-full text-center py-4 px-6 bg-white border border-[#E1E5ED] rounded-xl text-slate-600 hover:text-[#1C3E8A] hover:border-[#1C3E8A] font-sans font-semibold text-xs sm:text-sm transition-all duration-300 hover:shadow-md active:scale-[0.99] block"
              >
                {decodeHTMLEntities(page.title.rendered)}
              </Link>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}
