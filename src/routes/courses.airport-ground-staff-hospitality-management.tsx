import { createFileRoute } from "@tanstack/react-router";
import AviationHospitality from "../pages/AviationHospitality";

export const Route = createFileRoute("/courses/airport-ground-staff-hospitality-management")({
  head: () => ({
    meta: [
      { title: "Airport Ground Staff & Hospitality Management Course | Amigo Academy" },
      { name: "description", content: "Certified Airport Ground Staff & Hospitality Management course in Mumbai. Learn passenger handling, baggage service, ticketing & airport operations." }
    ],
    links: [
      { rel: "canonical", href: "https://staging.amigoacademy.in/courses/airport-ground-staff-hospitality-management" }
    ]
  }),
  component: AviationHospitality,
});
