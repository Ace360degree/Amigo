import { createFileRoute } from "@tanstack/react-router";
import Location from "../pages/Location";

export const Route = createFileRoute("/locations/")({
  head: () => ({
    meta: [
      { title: "Aviation & Tech Institutes Across Mumbai Locations | Amigo Academy" },
      { name: "description", content: "Explore Amigo Academy course training centers across Powai, Bhandup, Mulund, Chembur, Vikhroli, and Kanjurmarg." }
    ],
    links: [
      { rel: "canonical", href: "https://staging.amigoacademy.in/locations" }
    ]
  }),
  component: Location,
});
