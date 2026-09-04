import { jsx, jsxs } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { Link } from '@tanstack/react-router';
import { d as fetchSEOPages } from './router-CBeBCufh.mjs';
import 'sweetalert2';
import 'axios';

const decodeHTMLEntities = (text) => {
  const textArea = document.createElement("textarea");
  textArea.innerHTML = text;
  return textArea.value;
};
function Location() {
  const [seoPages, setSeoPages] = useState([]);
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
  return /* @__PURE__ */ jsx("div", { className: "bg-white min-h-screen py-10 sm:py-16", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-6 sm:px-8", children: [
    /* @__PURE__ */ jsxs("nav", { className: "flex items-center space-x-2 text-xs sm:text-sm font-sans font-semibold text-slate-500 mb-8 sm:mb-12 justify-center md:justify-start", children: [
      /* @__PURE__ */ jsx(Link, { to: "/", className: "hover:text-[#DF1818] transition-colors", children: "Home" }),
      /* @__PURE__ */ jsx("span", { children: ">" }),
      /* @__PURE__ */ jsx("span", { className: "text-slate-500", children: "India" }),
      /* @__PURE__ */ jsx("span", { children: ">" }),
      /* @__PURE__ */ jsx("span", { className: "text-[#DF1818] font-bold", children: "Locations" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "text-center max-w-3xl mx-auto mb-12 sm:mb-16", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-4xl sm:text-5xl lg:text-6xl font-outfit font-extrabold text-[#1C3E8A] leading-tight mb-6", children: "Locations" }),
      /* @__PURE__ */ jsxs("p", { className: "text-slate-600 font-sans font-medium text-sm sm:text-base md:text-lg leading-relaxed", children: [
        "Explore Amigo Academy aviation and technology training across locations.",
        /* @__PURE__ */ jsx("br", {}),
        "Find the course and location most convenient for you."
      ] })
    ] }),
    loading ? /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center py-20", children: [
      /* @__PURE__ */ jsx("div", { className: "w-12 h-12 border-4 border-[#1C3E8A] border-t-transparent rounded-full animate-spin" }),
      /* @__PURE__ */ jsx("p", { className: "text-slate-500 font-sans font-bold mt-4", children: "Loading regions..." })
    ] }) : /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto", children: seoPages.map((page) => /* @__PURE__ */ jsx(
      Link,
      {
        to: `/${page.slug}`,
        className: "w-full text-center py-4 px-6 bg-white border border-[#E1E5ED] rounded-xl text-slate-600 hover:text-[#1C3E8A] hover:border-[#1C3E8A] font-sans font-semibold text-xs sm:text-sm transition-all duration-300 hover:shadow-md active:scale-[0.99] block",
        children: decodeHTMLEntities(page.title.rendered)
      },
      page.id
    )) })
  ] }) });
}
const SplitComponent = Location;

export { SplitComponent as component };
//# sourceMappingURL=locations.index-CHrQPHQc.mjs.map
