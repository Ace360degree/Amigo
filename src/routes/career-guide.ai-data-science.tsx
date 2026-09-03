import { createFileRoute } from "@tanstack/react-router";
import AiDataScience from "../pages/AiDataScience";

export const Route = createFileRoute("/career-guide/ai-data-science")({
  head: () => ({
    meta: [
      { title: "AI & Data Science Career Guide | Amigo Academy" },
      { name: "description", content: "Explore high-paying career opportunities in Artificial Intelligence, Machine Learning, and Data Science with Generative AI skills." }
    ],
    links: [
      { rel: "canonical", href: "https://staging.amigoacademy.in/career-guide/ai-data-science" }
    ]
  }),
  component: AiDataScience,
});
