import { createFileRoute } from "@tanstack/react-router";
import CareerGuides from "../pages/CareerGuides";

export const Route = createFileRoute("/career-guides")({
  head: () => ({
    meta: [
      { title: "Career Guides | Aviation, Hospitality & Tech | Amigo Academy" },
      { name: "description", content: "Comprehensive career guidance for Air Hostess, Ground Staff, and AI Data Science paths after 12th and Graduation." }
    ],
    links: [
      { rel: "canonical", href: "https://staging.amigoacademy.in/career-guides" }
    ]
  }),
  component: CareerGuides,
});
