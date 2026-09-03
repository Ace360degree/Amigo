import { createFileRoute } from "@tanstack/react-router";
import RefundPolicy from "../pages/RefundPolicy";

export const Route = createFileRoute("/refund-policy")({
  head: () => ({
    meta: [
      { title: "Refund Policy | Amigo Academy Pvt Ltd" },
      { name: "description", content: "Refund and cancellation guidelines for admission registration fees at Amigo Academy." }
    ],
    links: [
      { rel: "canonical", href: "https://staging.amigoacademy.in/refund-policy" }
    ]
  }),
  component: RefundPolicy,
});
