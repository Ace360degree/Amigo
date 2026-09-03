import { createFileRoute } from "@tanstack/react-router";
import InnerBlog from "../pages/InnerBlog";
import { fetchBlogPostBySlug } from "../services/wordpress";

export const Route = createFileRoute("/blog/$slug")({
  loader: async ({ params }) => {
    const post = await fetchBlogPostBySlug(params.slug);
    return { post, slug: params.slug };
  },
  head: ({ loaderData }) => {
    const title = loaderData?.post?.title?.rendered
      ? `${loaderData.post.title.rendered} | Amigo Academy Blog`
      : "Blog Post | Amigo Academy";
    const excerpt = loaderData?.post?.excerpt?.rendered
      ? loaderData.post.excerpt.rendered.replace(/<[^>]+>/g, "").trim()
      : "Read full article on Amigo Academy Blog.";
    return {
      meta: [
        { title },
        { name: "description", content: excerpt }
      ],
      links: [
        { rel: "canonical", href: `https://staging.amigoacademy.in/blog/${loaderData?.slug || ""}` }
      ]
    };
  },
  component: InnerBlog,
});
