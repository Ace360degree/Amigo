import { createFileRoute } from "@tanstack/react-router";
import Blog from "../pages/Blog";
import { fetchBlogPosts } from "../services/wordpress";

export const Route = createFileRoute("/blog/")({
  loader: async () => {
    const posts = await fetchBlogPosts();
    return { posts };
  },
  head: () => ({
    meta: [
      { title: "Aviation & Career Insights Blog | Amigo Academy" },
      { name: "description", content: "Read expert articles, career advice, cabin crew guides, airport ground handling tips, and industry trends on the Amigo Academy blog." }
    ],
    links: [
      { rel: "canonical", href: "https://staging.amigoacademy.in/blog" }
    ]
  }),
  component: Blog,
});
