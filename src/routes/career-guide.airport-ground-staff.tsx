import { createFileRoute } from "@tanstack/react-router";
import AirportGroundStaff from "../pages/AirportGroundStaff";

export const Route = createFileRoute("/career-guide/airport-ground-staff")({
  head: () => ({
    meta: [
      { title: "Airport Ground Staff Career Guide | Amigo Academy" },
      { name: "description", content: "Learn about Airport Ground Handling careers, duties, passenger service management, cargo operations, and airline recruitment after 12th." }
    ],
    links: [
      { rel: "canonical", href: "https://staging.amigoacademy.in/career-guide/airport-ground-staff" }
    ]
  }),
  component: AirportGroundStaff,
});
