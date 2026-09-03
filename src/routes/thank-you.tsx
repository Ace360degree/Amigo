import { createFileRoute } from "@tanstack/react-router";
import ThankYou from "../pages/ThankYou";

export const Route = createFileRoute("/thank-you")({
  head: () => ({
    meta: [
      { title: "Thank You | Inquiry Submitted | Amigo Academy" },
      { name: "description", content: "Thank you for contacting Amigo Academy. Our academic counselors will reach out to you shortly." }
    ],
    links: [
      { rel: "canonical", href: "https://staging.amigoacademy.in/thank-you" }
    ]
  }),
  component: ThankYou,
});
