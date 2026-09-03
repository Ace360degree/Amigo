import { createFileRoute } from "@tanstack/react-router";
import AndheriBranch from "../pages/AndheriBranch";

export const Route = createFileRoute("/andheri-branch")({
  head: () => ({
    meta: [
      { title: "Amigo Academy Andheri West Branch | Aviation & Tech Classes" },
      { name: "description", content: "Visit Amigo Academy Andheri West Branch at Time Chambers, SV Road. Air Hostess & Ground Staff training near Andheri station." }
    ],
    links: [
      { rel: "canonical", href: "https://staging.amigoacademy.in/andheri-branch" }
    ]
  }),
  component: AndheriBranch,
});
