import React from "react";
import { Link, useLocation } from "react-router-dom";

interface BreadcrumbItem {
  label: string;
  path?: string;
}

// Map custom routes to structured breadcrumb hierarchies
const routeMap: Record<string, BreadcrumbItem[]> = {
  "/about-us": [{ label: "About Us" }],
  "/contact": [{ label: "Contact Us" }],
  "/scholarship": [{ label: "Scholarship" }],
  "/placement": [{ label: "Placements" }],
  "/franchise": [{ label: "Franchise" }],
  "/career-guides": [{ label: "Career Guides" }],
  "/career-guide/cabin-crew": [
    { label: "Career Guides", path: "/career-guides" },
    { label: "Cabin Crew" },
  ],
  "/career-guide/airport-ground-staff": [
    { label: "Career Guides", path: "/career-guides" },
    { label: "Airport Ground Staff" },
  ],
  "/career-guide/ai-data-science": [
    { label: "Career Guides", path: "/career-guides" },
    { label: "AI & Data Science" },
  ],
  "/branches": [{ label: "Branches" }],
  "/andheri-branch": [
    { label: "Branches", path: "/branches" },
    { label: "Andheri Branch" },
  ],
  "/thane-branch": [
    { label: "Branches", path: "/branches" },
    { label: "Thane Branch" },
  ],
  "/ghatkopar-branch": [
    { label: "Branches", path: "/branches" },
    { label: "Ghatkopar Branch" },
  ],
  "/student-success": [{ label: "Student Success" }],
  "/gallery": [{ label: "Gallery" }],
  "/blog": [{ label: "Blog" }],
  "/terms-and-conditions": [{ label: "Terms & Conditions" }],
  "/refund-policy": [{ label: "Refund Policy" }],
  "/privacy-policy": [{ label: "Privacy Policy" }],
  "/courses": [{ label: "Courses" }],
  "/courses/air-hostess-cabin-crew-hospitality-management": [
    { label: "Courses", path: "/courses" },
    { label: "Air Hostess & Cabin Crew" },
  ],
  "/courses/airport-ground-staff-hospitality-management": [
    { label: "Courses", path: "/courses" },
    { label: "Airport Ground Staff & Hospitality" },
  ],
  "/courses/ai-data-science-with-generative-ai-machine-learning": [
    { label: "Courses", path: "/courses" },
    { label: "AI & Data Science" },
  ],
  "/mumbai": [{ label: "Mumbai Branches" }],
};

export default function Breadcrumbs() {
  const { pathname } = useLocation();

  // Do not show breadcrumbs on Home or Thank You page
  if (pathname === "/" || pathname === "/thank-you" || pathname === "") {
    return null;
  }

  // Determine items based on mapped route or dynamic path
  let items: BreadcrumbItem[] = [];

  const cleanPath = pathname.toLowerCase().replace(/\/$/, "");

  if (routeMap[cleanPath]) {
    items = routeMap[cleanPath];
  } else {
    // Generate fallback breadcrumbs from URL segments
    const segments = pathname.split("/").filter(Boolean);
    items = segments.map((seg, idx) => {
      const formattedLabel = seg
        .replace(/-/g, " ")
        .replace(/\b\w/g, (char) => char.toUpperCase());

      // If it's not the last segment, build its path
      const isLast = idx === segments.length - 1;
      const subPath = isLast
        ? undefined
        : "/" + segments.slice(0, idx + 1).join("/");

      return { label: formattedLabel, path: subPath };
    });
  }

  return (
    <nav
      aria-label="Breadcrumb"
      className="bg-[#f8fafc] border-b border-slate-200/70 py-2.5 px-4 sm:px-6 lg:px-8 relative z-20"
    >
      <div className="max-w-7xl mx-auto flex items-center flex-wrap gap-1.5 text-xs sm:text-[13px] font-sans font-medium text-slate-500">
        {/* Home Link */}
        <Link
          to="/"
          className="flex items-center gap-1 hover:text-[#0b2f61] transition-colors focus:outline-none"
        >
          <svg className="w-3.5 h-3.5 text-slate-400 fill-current" viewBox="0 0 24 24">
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
          </svg>
          <span>Home</span>
        </Link>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <React.Fragment key={index}>
              <span className="text-slate-300 mx-0.5 select-none">/</span>
              {isLast || !item.path ? (
                <span className="font-bold text-[#0b2f61] font-outfit tracking-tight">
                  {item.label}
                </span>
              ) : (
                <Link
                  to={item.path}
                  className="hover:text-[#0b2f61] transition-colors focus:outline-none"
                >
                  {item.label}
                </Link>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </nav>
  );
}
