import { createFileRoute } from "@tanstack/react-router";
import Branches from "../pages/Branches";

export const Route = createFileRoute("/branches")({
  head: () => ({
    meta: [
      { title: "All Amigo Academy Branches in Mumbai | Ghatkopar, Andheri, Thane" },
      { name: "description", content: "Explore all Amigo Academy branches in Mumbai. Locate your nearest branch in Ghatkopar East, Andheri West, or Thane West." }
    ],
    links: [
      { rel: "canonical", href: "https://staging.amigoacademy.in/branches" }
    ]
  }),
  component: Branches,
});
