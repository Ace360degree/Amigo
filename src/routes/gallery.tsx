import { createFileRoute } from "@tanstack/react-router";
import Gallery from "../pages/Gallery";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Photo & Video Gallery | Life at Amigo Academy" },
      { name: "description", content: "Explore campus life, cabin simulator sessions, Convocation events, and practical grooming workshops at Amigo Academy." }
    ],
    links: [
      { rel: "canonical", href: "https://staging.amigoacademy.in/gallery" }
    ]
  }),
  component: Gallery,
});
