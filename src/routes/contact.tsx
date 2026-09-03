import { createFileRoute } from "@tanstack/react-router";
import Contact from "../pages/Contact";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us | Amigo Academy Branches in Mumbai" },
      { name: "description", content: "Get in touch with Amigo Academy. Contact our Ghatkopar, Andheri, and Thane branches for course inquiries, counseling sessions, and campus visits." }
    ],
    links: [
      { rel: "canonical", href: "https://staging.amigoacademy.in/contact" }
    ]
  }),
  component: Contact,
});
