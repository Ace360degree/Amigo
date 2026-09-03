import { createFileRoute } from "@tanstack/react-router";
import AirHostessCabinCrew from "../pages/AirHostessCabinCrew";

export const Route = createFileRoute("/courses/air-hostess-cabin-crew-hospitality-management")({
  head: () => ({
    meta: [
      { title: "Air Hostess & Cabin Crew Hospitality Management Course | Amigo Academy" },
      { name: "description", content: "Professional Air Hostess and Cabin Crew training course in Mumbai. 100% placement assistance, mock flight simulator training, and soft skills grooming." }
    ],
    links: [
      { rel: "canonical", href: "https://staging.amigoacademy.in/courses/air-hostess-cabin-crew-hospitality-management" }
    ]
  }),
  component: AirHostessCabinCrew,
});
