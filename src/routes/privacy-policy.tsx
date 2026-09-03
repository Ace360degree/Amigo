import { createFileRoute } from "@tanstack/react-router";
import PrivacyPolicy from "../pages/PrivacyPolicy";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | Amigo Academy Pvt Ltd" },
      { name: "description", content: "Privacy policy explaining data collection, protection, and student inquiry handling at Amigo Academy." }
    ],
    links: [
      { rel: "canonical", href: "https://staging.amigoacademy.in/privacy-policy" }
    ]
  }),
  component: PrivacyPolicy,
});
