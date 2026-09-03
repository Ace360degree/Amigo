import { createFileRoute } from "@tanstack/react-router";
import Placement from "../pages/Placement";

export const Route = createFileRoute("/placement")({
  head: () => ({
    meta: [
      { title: "Placement Statistics & Hiring Partners | Amigo Academy" },
      { name: "description", content: "Explore 10,000+ student placements across top airlines (IndiGo, Air India, Emirates) and airport ground handling agencies." }
    ],
    links: [
      { rel: "canonical", href: "https://staging.amigoacademy.in/placement" }
    ]
  }),
  component: Placement,
});
