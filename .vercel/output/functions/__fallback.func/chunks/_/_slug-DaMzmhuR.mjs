import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { useParams, Navigate } from '@tanstack/react-router';
import { f as fetchBlogPostBySlug, a as fetchSEOPageBySlug } from './router-CBeBCufh.mjs';
import { I as InnerBlog } from './InnerBlog-Ca7kf7XB.mjs';
import { M as MumbaiSEODetail } from './MumbaiSEODetail-C4UD3n43.mjs';
import 'sweetalert2';
import 'axios';
import './SEO-DZzBR_S9.mjs';

function DynamicSlugRoute() {
  const { slug } = useParams({ strict: false });
  const [routeType, setRouteType] = useState("loading");
  useEffect(() => {
    if (!slug) {
      setRouteType("404");
      return;
    }
    setRouteType("loading");
    fetchBlogPostBySlug(slug).then((blogPost) => {
      if (blogPost && blogPost.content.rendered !== "") {
        setRouteType("blog");
      } else {
        fetchSEOPageBySlug(slug).then((seoPage) => {
          if (seoPage && seoPage.content.rendered !== "") {
            setRouteType("seo");
          } else {
            const mockBlogSlugs = [
              "how-to-become-a-cabin-crew-after-12th",
              "cabin-crew-eligibility-skills-requirements-explained",
              "airport-ground-staff-career-guide-roles-salary-growth",
              "top-ai-skills-to-learn-in-2026-for-a-future-ready-career"
            ];
            if (mockBlogSlugs.includes(slug)) {
              setRouteType("blog");
            } else {
              setRouteType("seo");
            }
          }
        }).catch(() => {
          setRouteType("seo");
        });
      }
    }).catch(() => {
      setRouteType("seo");
    });
  }, [slug]);
  if (routeType === "loading") {
    return /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center py-40 min-h-[50vh] bg-white", children: [
      /* @__PURE__ */ jsx("div", { className: "w-12 h-12 border-4 border-[#e31e24] border-t-transparent rounded-full animate-spin" }),
      /* @__PURE__ */ jsx("p", { className: "text-slate-500 font-sans font-bold mt-4", children: "Loading..." })
    ] });
  }
  if (routeType === "blog") {
    return /* @__PURE__ */ jsx(InnerBlog, {});
  }
  if (routeType === "seo") {
    return /* @__PURE__ */ jsx(MumbaiSEODetail, {});
  }
  return /* @__PURE__ */ jsx(Navigate, { to: "/", replace: true });
}
const SplitComponent = DynamicSlugRoute;

export { SplitComponent as component };
//# sourceMappingURL=_slug-DaMzmhuR.mjs.map
