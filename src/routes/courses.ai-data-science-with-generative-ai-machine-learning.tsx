import { createFileRoute } from "@tanstack/react-router";
import AIDataScienceCourse from "../pages/AI-DataScienceCourse";

export const Route = createFileRoute("/courses/ai-data-science-with-generative-ai-machine-learning")({
  head: () => ({
    meta: [
      { title: "AI & Data Science with Generative AI & Machine Learning | Amigo Academy" },
      { name: "description", content: "Master Python, Machine Learning, Deep Learning, and Generative AI with hands-on projects and placement support at Amigo Academy." }
    ],
    links: [
      { rel: "canonical", href: "https://staging.amigoacademy.in/courses/ai-data-science-with-generative-ai-machine-learning" }
    ]
  }),
  component: AIDataScienceCourse,
});
