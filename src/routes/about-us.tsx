import { createFileRoute } from "@tanstack/react-router";
import About from "../pages/About";

export const Route = createFileRoute("/about-us")({
  head: () => ({
    meta: [
      { title: "About Us | Amigo Academy Pvt Ltd" },
      { name: "description", content: "Learn about Amigo Academy's mission, Govt certification, leadership team, and history of excellence in aviation and technology education since 2017." }
    ],
    links: [
      { rel: "canonical", href: "https://staging.amigoacademy.in/about-us" }
    ]
  }),
  component: About,
});
