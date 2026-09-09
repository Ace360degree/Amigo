import { createFileRoute } from "@tanstack/react-router";
import GhatkoparBranch from "../pages/GhatkoparBranch";

export const Route = createFileRoute("/ghatkopar-branch")({
  head: () => ({
    meta: [
      { title: "Amigo Academy Ghatkopar East Branch | Aviation Academy" },
      { name: "description", content: "Visit Amigo Academy Ghatkopar East Branch at Sai Infotech, Opp Railway Station. Air Hostess, Ground Staff & Hospitality courses." }
    ],
    links: [
      { rel: "canonical", href: "https://amigoacademy.in/ghatkopar-branch" }
    ]
  }),
  component: GhatkoparBranch,
});
