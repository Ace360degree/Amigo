import { createFileRoute } from "@tanstack/react-router";
import Home from "../pages/Home";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Amigo Academy - Leading Aviation, Hospitality & AI Institute in Mumbai" },
      { name: "description", content: "Join Amigo Academy for premier Aviation, Hospitality & AI Data Science training programs in Mumbai. Guaranteed placement assistance & up to ₹50,000 scholarship." },
      { name: "keywords", content: "Air Hostess Training, Cabin Crew Course, Airport Ground Staff, AI Data Science, Amigo Academy Mumbai" }
    ],
    links: [
      { rel: "canonical", href: "https://staging.amigoacademy.in/" }
    ]
  }),
  component: Home,
});
