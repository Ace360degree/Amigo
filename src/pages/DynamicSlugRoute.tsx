import React, { useEffect, useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import { fetchBlogPostBySlug, fetchSEOPageBySlug } from "../services/wordpress";
import InnerBlog from "./InnerBlog";
import MumbaiSEODetail from "./MumbaiSEODetail";

export default function DynamicSlugRoute() {
  const { slug } = useParams<{ slug: string }>();
  const [routeType, setRouteType] = useState<"blog" | "seo" | "loading" | "404">("loading");

  useEffect(() => {
    if (!slug) {
      setRouteType("404");
      return;
    }

    setRouteType("loading");
    
    // Check blog first
    fetchBlogPostBySlug(slug).then((blogPost) => {
      // If we got a blog post and it has content (not just fallback shell)
      if (blogPost && blogPost.content.rendered !== "") {
        setRouteType("blog");
      } else {
        // Check SEO page next
        fetchSEOPageBySlug(slug).then((seoPage) => {
          if (seoPage && seoPage.content.rendered !== "") {
            setRouteType("seo");
          } else {
            // Check if it's one of the static mock blogs
            const mockBlogSlugs = [
              "how-to-become-a-cabin-crew-after-12th",
              "cabin-crew-eligibility-skills-requirements-explained",
              "airport-ground-staff-career-guide-roles-salary-growth",
              "top-ai-skills-to-learn-in-2026-for-a-future-ready-career"
            ];
            if (mockBlogSlugs.includes(slug)) {
              setRouteType("blog");
            } else {
              // Default fallback to SEO detail template (which generates content from slug)
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
    return (
      <div className="flex flex-col items-center justify-center py-40 min-h-[50vh] bg-white">
        <div className="w-12 h-12 border-4 border-[#e31e24] border-t-transparent rounded-full animate-spin"></div>
        <p className="text-slate-500 font-sans font-bold mt-4">Loading...</p>
      </div>
    );
  }

  if (routeType === "blog") {
    return <InnerBlog />;
  }

  if (routeType === "seo") {
    return <MumbaiSEODetail />;
  }

  return <Navigate to="/" replace />;
}
