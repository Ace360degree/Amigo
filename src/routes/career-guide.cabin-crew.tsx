import { createFileRoute } from "@tanstack/react-router";
import CabinCrew from "../pages/CabinCrew";

export const Route = createFileRoute("/career-guide/cabin-crew")({
  head: () => ({
    meta: [
      { title: "Air Hostess & Cabin Crew Career Guide | Amigo Academy" },
      { name: "description", content: "Complete guide on how to become an Air Hostess or Cabin Crew member after 12th. Eligibility, salary expectations, physical requirements & hiring process." }
    ],
    links: [
      { rel: "canonical", href: "https://staging.amigoacademy.in/career-guide/cabin-crew" }
    ]
  }),
  component: CabinCrew,
});
