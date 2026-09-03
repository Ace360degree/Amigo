import { createFileRoute } from "@tanstack/react-router";
import TermsConditions from "../pages/TermsConditions";

export const Route = createFileRoute("/terms-and-conditions")({
  head: () => ({
    meta: [
      { title: "Terms and Conditions | Amigo Academy Pvt Ltd" },
      { name: "description", content: "Terms and conditions for enrollment, admission procedures, and platform usage at Amigo Academy." }
    ],
    links: [
      { rel: "canonical", href: "https://staging.amigoacademy.in/terms-and-conditions" }
    ]
  }),
  component: TermsConditions,
});
