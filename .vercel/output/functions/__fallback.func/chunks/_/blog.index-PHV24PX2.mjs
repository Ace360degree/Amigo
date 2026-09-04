import process from 'node:process';globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import { jsxs, jsx } from 'react/jsx-runtime';
import React from 'react';
import { useNavigate, Link } from '@tanstack/react-router';
import { c as fetchBlogPosts } from './router-CBeBCufh.mjs';
import 'sweetalert2';
import 'axios';

const Bloghero = "/assets/blogheroimgy-BOLOHnlB.png";
const imgAviation1 = "/assets/BlogInsights1-BzHtIe3n.png";
const imgAviation2 = "/assets/BlogInsights2-UBurU-Me.png";
const imgAviation3 = "/assets/BlogInsights3-DIqunwMd.png";
const imgAi1 = "/assets/BlogInsights4-Ctd1Qdpx.png";
const imgCareer1 = "/assets/BlogInsights7-DnvHuf65.png";
const imgStory1 = "/assets/BlogInsights10-CHXmQZjX.png";
const decodeHTMLEntities = (text) => {
  if (!text) return "";
  const textArea = document.createElement("textarea");
  textArea.innerHTML = text;
  return textArea.value;
};
function Blog() {
  const navigate = useNavigate();
  const [categories, setCategories] = React.useState([]);
  const [allPostsList, setAllPostsList] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    fetchBlogPosts().then((posts) => {
      const formattedPosts = [];
      const groups = {};
      posts.forEach((post) => {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        const catNameRaw = ((_d = (_c = (_b = (_a = post._embedded) == null ? void 0 : _a["wp:term"]) == null ? void 0 : _b[0]) == null ? void 0 : _c[0]) == null ? void 0 : _d.name) || "Aviation Insights";
        const catName = decodeHTMLEntities(catNameRaw);
        const featuredMedia = ((_g = (_f = (_e = post._embedded) == null ? void 0 : _e["wp:featuredmedia"]) == null ? void 0 : _f[0]) == null ? void 0 : _g.source_url) || post.featured_media_src_url || post.jetpack_featured_media_url || "";
        const words = post.content.rendered ? post.content.rendered.replace(/<[^>]+>/g, "").split(/\s+/).length : 200;
        const readTimeVal = `${Math.max(1, Math.ceil(words / 200))} min read`;
        const dateObj = new Date(post.date);
        const formattedDate = dateObj.toLocaleDateString("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric"
        });
        let fallbackImage = imgAviation1;
        if (catName.toLowerCase().includes("ai") || catName.toLowerCase().includes("tech")) {
          fallbackImage = imgAi1;
        } else if (catName.toLowerCase().includes("career")) {
          fallbackImage = imgCareer1;
        } else if (catName.toLowerCase().includes("story") || catName.toLowerCase().includes("update")) {
          fallbackImage = imgStory1;
        }
        let firstInlineImg = "";
        if ((_h = post.content) == null ? void 0 : _h.rendered) {
          const match = post.content.rendered.match(/<img[^>]+src=["']([^"']+)["']/i);
          if (match && match[1]) {
            firstInlineImg = match[1].replace(/&amp;/g, "&");
          }
        }
        const postImage = (featuredMedia ? featuredMedia.replace(/&amp;/g, "&") : "") || firstInlineImg || fallbackImage;
        const item = {
          title: decodeHTMLEntities(post.title.rendered),
          slug: post.slug,
          date: formattedDate,
          readTime: readTimeVal,
          image: postImage
        };
        formattedPosts.push(item);
        if (!groups[catName]) {
          groups[catName] = [];
        }
        groups[catName].push(item);
      });
      const groupedList = Object.keys(groups).map((catTitle) => ({
        title: catTitle,
        posts: groups[catTitle]
      }));
      setCategories(groupedList);
      setAllPostsList(formattedPosts);
      setLoading(false);
    }).catch((err) => {
      console.error(err);
      setLoading(false);
    });
  }, []);
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col bg-white", children: [
    /* @__PURE__ */ jsxs("section", { className: "relative w-full min-h-[420px] sm:min-h-[500px] lg:min-h-[600px] bg-white overflow-hidden flex items-center", children: [
      /* @__PURE__ */ jsxs("div", { className: "hidden lg:block absolute inset-y-0 right-0 w-[50%] h-full z-0", children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            src: Bloghero,
            alt: "Amigo Academy Blog",
            className: "w-full h-full object-cover object-right"
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent z-10" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "block lg:hidden absolute inset-0 z-0 w-full h-full", children: /* @__PURE__ */ jsx(
        "img",
        {
          src: new URL("../assets/img/mobileheroblog.png", globalThis._importMeta_.url).href,
          alt: "Amigo Academy Blog Mobile",
          className: "w-full h-full object-cover object-[right_center]",
          onError: (e) => {
            e.currentTarget.style.display = "none";
          }
        }
      ) }),
      /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto w-full px-6 pt-6 pb-20 sm:pt-12 sm:pb-32 lg:py-24 relative z-20 grid grid-cols-1 lg:grid-cols-12 gap-8", children: /* @__PURE__ */ jsxs("div", { className: "w-[50%] sm:w-[50%] lg:w-full lg:col-span-6 flex flex-col space-y-3 sm:space-y-6 text-left items-start justify-center", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1.5 text-xs sm:text-[13px] font-sans font-medium text-slate-400", children: [
          /* @__PURE__ */ jsx(Link, { to: "/", className: "hover:text-[#DF1818] transition-colors focus:outline-none", children: "Home" }),
          /* @__PURE__ */ jsx("span", { className: "text-slate-400 mx-1 select-none", children: ">" }),
          /* @__PURE__ */ jsx("span", { className: "font-bold text-[#DF1818] tracking-tight", children: "Blog" })
        ] }),
        /* @__PURE__ */ jsxs("h1", { className: "text-xl sm:text-3xl lg:text-[54px] font-sans font-extrabold tracking-tight text-[#0f2a4a] leading-[1.2] lg:leading-[1.12]", children: [
          "Insights, Stories ",
          /* @__PURE__ */ jsx("br", {}),
          "& Resources"
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-slate-600 text-[10px] sm:text-base leading-relaxed font-sans max-w-xl", children: "Stay informed with articles covering aviation, Artificial Intelligence, career development, student success stories, and updates from Amigo Academy. Whether you're exploring career opportunities, preparing for interviews, or looking for industry insights, our blog is here to help you learn beyond the classroom." }),
        /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: () => {
              const element = document.getElementById("blogPosts");
              element == null ? void 0 : element.scrollIntoView({ behavior: "smooth" });
            },
            className: "bg-[#e31e24] hover:bg-[#c2141a] text-white font-sans font-bold text-[9px] sm:text-xs lg:text-sm px-4 py-2.5 sm:px-6 sm:py-3.5 rounded-full shadow-md hover:shadow-lg transition-all active:scale-95 flex items-center gap-2 group focus:outline-none",
            children: [
              "Explore Latest Articles",
              /* @__PURE__ */ jsx("svg", { className: "w-3.5 h-3.5 transition-transform group-hover:translate-x-1", fill: "none", stroke: "currentColor", strokeWidth: 2.5, viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" }) })
            ]
          }
        )
      ] }) })
    ] }),
    /* @__PURE__ */ jsx("section", { id: "blogPosts", className: "py-20 bg-white", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20", children: loading ? /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center py-20", children: [
      /* @__PURE__ */ jsx("div", { className: "w-12 h-12 border-4 border-[#e31e24] border-t-transparent rounded-full animate-spin" }),
      /* @__PURE__ */ jsx("p", { className: "text-slate-500 font-sans font-bold mt-4", children: "Loading articles..." })
    ] }) : categories.map((category, catIdx) => /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl sm:text-3xl font-extrabold text-[#1c355e] mb-8 font-sans tracking-tight", children: category.title }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: category.posts.map((post, postIdx) => /* @__PURE__ */ jsxs(
        "div",
        {
          onClick: () => {
            navigate({ to: `/${post.slug}` });
            window.scrollTo({ top: 0, behavior: "smooth" });
          },
          className: "bg-white rounded-[20px] shadow-[0_2px_12px_rgba(0,0,0,0.06)] border border-slate-100/60 overflow-hidden flex flex-col group hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] transition-shadow duration-300 cursor-pointer",
          children: [
            /* @__PURE__ */ jsx("div", { className: "h-[180px] sm:h-[200px] w-full overflow-hidden", children: /* @__PURE__ */ jsx(
              "img",
              {
                src: post.image,
                alt: post.title,
                className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              }
            ) }),
            /* @__PURE__ */ jsxs("div", { className: "p-6 flex flex-col flex-1", children: [
              /* @__PURE__ */ jsx("h3", { className: "text-[15px] sm:text-[16px] font-bold text-[#0f2a4a] mb-4 leading-[1.4] line-clamp-2", children: post.title }),
              /* @__PURE__ */ jsxs("div", { className: "mt-auto text-[12px] text-slate-500 font-medium flex items-center", children: [
                /* @__PURE__ */ jsx("span", { children: post.date }),
                /* @__PURE__ */ jsx("span", { className: "mx-2", children: "\u2022" }),
                /* @__PURE__ */ jsx("span", { children: post.readTime })
              ] })
            ] })
          ]
        },
        postIdx
      )) })
    ] }, catIdx)) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-12 lg:py-20 bg-white", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsx("div", { className: "bg-gradient-to-r from-[#122e5a] to-[#1c4485] rounded-3xl p-10 lg:p-16 text-center shadow-lg relative overflow-hidden", children: /* @__PURE__ */ jsxs("div", { className: "relative z-10 max-w-3xl mx-auto flex flex-col items-center", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl sm:text-4xl lg:text-[42px] font-bold text-white mb-6 font-sans tracking-tight", children: "Your Dream Career Starts Here" }),
      /* @__PURE__ */ jsx("p", { className: "text-blue-100 text-[15px] sm:text-base leading-[1.8] mb-10 max-w-2xl", children: "Get expert guidance, industry-focused training, and placement support to help you move confidently towards your career goals." }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full sm:w-auto", children: [
        /* @__PURE__ */ jsxs("button", { onClick: () => window.location.href = "tel:+919987588932", className: "w-full sm:w-auto bg-white text-[#122e5a] font-bold text-[14px] sm:text-[15px] py-4 px-8 rounded-lg shadow-md hover:bg-slate-50 transition-colors inline-flex justify-center items-center gap-2 group cursor-pointer", children: [
          "Talk to Counselor Now",
          /* @__PURE__ */ jsx("svg", { className: "w-4 h-4 transition-transform group-hover:translate-x-1", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: "2.5", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M14 5l7 7m0 0l-7 7m7-7H3" }) })
        ] }),
        /* @__PURE__ */ jsxs("button", { className: "w-full sm:w-auto bg-transparent border border-white/40 text-white hover:bg-white/10 font-bold text-[14px] sm:text-[15px] py-4 px-8 rounded-lg transition-colors inline-flex justify-center items-center gap-2", children: [
          /* @__PURE__ */ jsx("svg", { className: "w-5 h-5", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: "2", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" }) }),
          "Download Brochure (PDF)"
        ] })
      ] })
    ] }) }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-16 lg:py-24 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl sm:text-4xl font-extrabold text-[#1c355e] mb-12 font-sans tracking-tight", children: "More Articles You May Like" }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left", children: (allPostsList.length > 0 ? allPostsList.slice(0, 3) : [
        {
          title: "Airport Ground Staff Career Guide: Roles, Salary & Growth",
          slug: "airport-ground-staff-career-guide-roles-salary-growth",
          date: "May 16, 2026",
          readTime: "5 min read",
          image: imgAviation3
        },
        {
          title: "Top AI Skills to Learn in 2026 for a Future-Ready Career",
          slug: "top-ai-skills-to-learn-in-2026",
          date: "Aug 12, 2026",
          readTime: "5 min read",
          image: imgAi1
        },
        {
          title: "Cabin Crew Eligibility, Skills & Requirements Explained",
          slug: "cabin-crew-eligibility-skills-requirements-explained",
          date: "May 20, 2026",
          readTime: "5 min read",
          image: imgAviation2
        }
      ]).map((post, idx) => /* @__PURE__ */ jsxs(
        "div",
        {
          onClick: () => {
            navigate({ to: `/${post.slug}` });
            window.scrollTo({ top: 0, behavior: "smooth" });
          },
          className: "bg-white rounded-[20px] shadow-[0_2px_12px_rgba(0,0,0,0.06)] border border-slate-100/60 overflow-hidden flex flex-col group hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] transition-shadow duration-300 cursor-pointer",
          children: [
            /* @__PURE__ */ jsx("div", { className: "h-[180px] sm:h-[200px] w-full overflow-hidden", children: /* @__PURE__ */ jsx(
              "img",
              {
                src: post.image,
                alt: post.title,
                className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              }
            ) }),
            /* @__PURE__ */ jsxs("div", { className: "p-6 flex flex-col flex-1", children: [
              /* @__PURE__ */ jsx("h3", { className: "text-[15px] sm:text-[16px] font-bold text-[#0f2a4a] mb-4 leading-[1.4] line-clamp-2", children: post.title }),
              /* @__PURE__ */ jsxs("div", { className: "mt-auto text-[12px] text-slate-500 font-medium flex items-center", children: [
                /* @__PURE__ */ jsx("span", { children: post.date }),
                /* @__PURE__ */ jsx("span", { className: "mx-2", children: "\u2022" }),
                /* @__PURE__ */ jsx("span", { children: post.readTime })
              ] })
            ] })
          ]
        },
        idx
      )) })
    ] }) })
  ] });
}
const SplitComponent = Blog;

export { SplitComponent as component };
//# sourceMappingURL=blog.index-PHV24PX2.mjs.map
