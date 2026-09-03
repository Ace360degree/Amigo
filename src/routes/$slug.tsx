import { createFileRoute } from "@tanstack/react-router";
import DynamicSlugRoute from "../pages/DynamicSlugRoute";
import { fetchSEOPageBySlug } from "../services/wordpress";

export const Route = createFileRoute("/$slug")({
  loader: async ({ params }) => {
    const post = await fetchSEOPageBySlug(params.slug);
    return { post, slug: params.slug };
  },
  head: ({ loaderData }) => {
    const title = loaderData?.post?.title?.rendered
      ? `${loaderData.post.title.rendered} | Amigo Academy`
      : "Amigo Academy Mumbai";
    return {
      meta: [
        { title },
        { name: "description", content: `Aviation, Cabin Crew, and Airport Ground Staff training programs near ${loaderData?.slug || "Mumbai"}.` }
      ],
      links: [
        { rel: "canonical", href: `https://staging.amigoacademy.in/${loaderData?.slug || ""}` }
      ]
    };
  },
  component: DynamicSlugRoute,
});
