import { createFileRoute } from "@tanstack/react-router";
import Courses from "../pages/Courses";

export const Route = createFileRoute("/courses/")({
  head: () => ({
    meta: [
      { title: "All Courses | Aviation, Hospitality & Tech | Amigo Academy" },
      { name: "description", content: "Explore job-ready training programs in Air Hostess (Cabin Crew), Airport Ground Staff, and AI Data Science with Machine Learning." }
    ],
    links: [
      { rel: "canonical", href: "https://staging.amigoacademy.in/courses" }
    ]
  }),
  component: Courses,
});
