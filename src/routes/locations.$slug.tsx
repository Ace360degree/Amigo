import { createFileRoute } from "@tanstack/react-router";
import MumbaiSEODetail from "../pages/MumbaiSEODetail";
import { fetchSEOPageBySlug } from "../services/wordpress";

export const Route = createFileRoute("/locations/$slug")({
  loader: async ({ params }) => {
    const post = await fetchSEOPageBySlug(params.slug);
    return { post, slug: params.slug };
  },
  head: ({ loaderData }) => {
    const title = loaderData?.post?.title?.rendered
      ? `${loaderData.post.title.rendered} | Amigo Academy`
      : "Location Details | Amigo Academy";
    return {
      meta: [
        { title },
        { name: "description", content: `Find aviation, air hostess, ground staff, and tech training near ${loaderData?.slug || "your location"} at Amigo Academy.` }
      ],
      links: [
        { rel: "canonical", href: `https://staging.amigoacademy.in/locations/${loaderData?.slug || ""}` }
      ]
    };
  },
  component: MumbaiSEODetail,
});
