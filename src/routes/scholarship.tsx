import { createFileRoute } from "@tanstack/react-router";
import Scholarship from "../pages/Scholarship";

export const Route = createFileRoute("/scholarship")({
  head: () => ({
    meta: [
      { title: "Scholarship Test & Financial Assistance | Amigo Academy" },
      { name: "description", content: "Apply for up to ₹50,000 scholarship at Amigo Academy for Aviation, Cabin Crew & Ground Staff training. Check eligibility today." }
    ],
    links: [
      { rel: "canonical", href: "https://staging.amigoacademy.in/scholarship" }
    ]
  }),
  component: Scholarship,
});
