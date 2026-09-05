import React from "react";
import { renderToString } from "react-dom/server";
import { createRouter, RouterProvider, createMemoryHistory } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import { fetchBlogPosts, fetchSEOPages, toSlug, mockBlogPosts, mockSeoLinks } from "./services/wordpress";

export async function getAllRoutePaths(): Promise<string[]> {
  const staticRoutes = [
    "/",
    "/about-us",
    "/contact",
    "/scholarship",
    "/placement",
    "/franchise",
    "/career-guides",
    "/career-guide/cabin-crew",
    "/career-guide/airport-ground-staff",
    "/career-guide/ai-data-science",
    "/andheri-branch",
    "/thane-branch",
    "/ghatkopar-branch",
    "/student-success",
    "/gallery",
    "/blog",
    "/terms-and-conditions",
    "/refund-policy",
    "/privacy-policy",
    "/courses",
    "/courses/air-hostess-cabin-crew-hospitality-management",
    "/courses/airport-ground-staff-hospitality-management",
    "/courses/ai-data-science-with-generative-ai-machine-learning",
    "/branches",
    "/thank-you",
    "/locations",
  ];

  const dynamicRoutes: string[] = [];

  // Fetch WordPress blog posts
  try {
    const posts = await fetchBlogPosts();
    posts.forEach((post) => {
      if (post.slug) {
        dynamicRoutes.push(`/${post.slug}`);
        dynamicRoutes.push(`/blog/${post.slug}`);
      }
    });
  } catch (err) {
    console.warn("Failed to fetch dynamic blog posts during SSG path discovery:", err);
    mockBlogPosts.forEach((post) => {
      dynamicRoutes.push(`/${post.slug}`);
      dynamicRoutes.push(`/blog/${post.slug}`);
    });
  }

  // Fetch WordPress SEO & Location pages
  try {
    const seoPages = await fetchSEOPages();
    seoPages.forEach((page) => {
      if (page.slug) {
        dynamicRoutes.push(`/locations/${page.slug}`);
        dynamicRoutes.push(`/${page.slug}`);
      }
    });
  } catch (err) {
    console.warn("Failed to fetch dynamic SEO pages during SSG path discovery:", err);
    mockSeoLinks.forEach((title) => {
      const slug = toSlug(title);
      dynamicRoutes.push(`/locations/${slug}`);
      dynamicRoutes.push(`/${slug}`);
    });
  }

  // Deduplicate routes
  return Array.from(new Set([...staticRoutes, ...dynamicRoutes]));
}

export interface RenderResult {
  html: string;
  title: string;
  description: string;
  canonical: string;
}

export async function renderRoute(url: string): Promise<RenderResult> {
  const memoryHistory = createMemoryHistory({ initialEntries: [url] });
  const router = createRouter({
    routeTree,
    history: memoryHistory,
  });

  await router.load();

  const appHtml = renderToString(<RouterProvider router={router} />);

  // Defaults
  let title = "Amigo Academy - Aviation, Cabin Crew & AI Training Institute";
  let description = "Join Amigo Academy for premier Aviation, Hospitality & AI Data Science training programs in Mumbai. Guaranteed placement assistance & up to ₹50,000 scholarship.";
  let canonical = `https://staging.amigoacademy.in${url === "/" ? "" : url}`;

  // Extract head data from matched routes
  const matches = router.state.matches;
  for (const match of matches) {
    if (match.meta) {
      for (const m of match.meta) {
        if (!m) continue;
        if ('title' in m && m.title) {
          title = m.title;
        }
        if ('name' in m && m.name === "description" && 'content' in m && m.content) {
          description = m.content;
        }
      }
    }
    if (match.links) {
      for (const l of match.links) {
        if (!l) continue;
        if (l.rel === "canonical" && l.href) {
          canonical = l.href;
        }
      }
    }
  }

  return {
    html: appHtml,
    title,
    description,
    canonical,
  };
}
