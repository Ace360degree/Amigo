import { createFileRoute } from "@tanstack/react-router";
import DynamicSlugRoute from "../pages/DynamicSlugRoute";
import { fetchBlogPostBySlug, fetchSEOPageBySlug } from "../services/wordpress";

export const Route = createFileRoute("/$slug")({
  loader: async ({ params }) => {
    const slug = params.slug;
    try {
      const blogPost = await fetchBlogPostBySlug(slug);
      if (blogPost && blogPost.content && blogPost.content.rendered !== "") {
        return { type: "blog" as const, post: blogPost, slug };
      }
    } catch { }

    try {
      const seoPage = await fetchSEOPageBySlug(slug);
      return { type: "seo" as const, post: seoPage, slug };
    } catch {
      return { type: "seo" as const, post: null, slug };
    }
  },
  head: ({ loaderData }) => {
    const post = loaderData?.post;
    const slug = loaderData?.slug || "";
    const rawTitle = post?.title?.rendered || "";
    const cleanTitle = rawTitle.replace(/<[^>]+>/g, "").trim();

    const title = cleanTitle
      ? `${cleanTitle} | Amigo Academy`
      : `Air Hostess, Cabin Crew & Ground Staff Training near ${slug.replace(/-/g, " ")} | Amigo Academy`;

    const rawExcerpt = post?.excerpt?.rendered || "";
    const cleanExcerpt = rawExcerpt.replace(/<[^>]+>/g, "").trim();
    const description = cleanExcerpt || `Join Amigo Academy for premier Aviation, Cabin Crew & Ground Staff training near ${slug.replace(/-/g, " ")}. Guaranteed placement assistance & scholarships available.`;

    return {
      meta: [
        { title },
        { name: "description", content: description }
      ],
      links: [
        { rel: "canonical", href: `https://staging.amigoacademy.in/${slug}` }
      ]
    };
  },
  component: DynamicSlugRoute,
});
