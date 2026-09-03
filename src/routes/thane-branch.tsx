import { createFileRoute } from "@tanstack/react-router";
import ThaneBranch from "../pages/ThaneBranch";

export const Route = createFileRoute("/thane-branch")({
  head: () => ({
    meta: [
      { title: "Amigo Academy Thane West Branch | Air Hostess Institute" },
      { name: "description", content: "Visit Amigo Academy Thane West Branch near Thane Railway Station. Expert aviation training, mock cabin crew setups & placement cell." }
    ],
    links: [
      { rel: "canonical", href: "https://staging.amigoacademy.in/thane-branch" }
    ]
  }),
  component: ThaneBranch,
});
