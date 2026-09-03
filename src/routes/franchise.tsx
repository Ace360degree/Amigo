import { createFileRoute } from "@tanstack/react-router";
import Franchise from "../pages/Franchise";

export const Route = createFileRoute("/franchise")({
  head: () => ({
    meta: [
      { title: "Franchise Opportunities | Partner with Amigo Academy" },
      { name: "description", content: "Become an Amigo Academy franchise partner. High ROI aviation & vocational training franchise opportunity in India." }
    ],
    links: [
      { rel: "canonical", href: "https://staging.amigoacademy.in/franchise" }
    ]
  }),
  component: Franchise,
});
