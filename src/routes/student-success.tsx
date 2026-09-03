import { createFileRoute } from "@tanstack/react-router";
import StudentSuccess from "../pages/StudentSuccess";

export const Route = createFileRoute("/student-success")({
  head: () => ({
    meta: [
      { title: "Student Success Stories & Placements | Amigo Academy" },
      { name: "description", content: "Read success stories and testimonials from Amigo Academy alumni working as Air Hostesses, Flight Attendants, and Airport Staff globally." }
    ],
    links: [
      { rel: "canonical", href: "https://staging.amigoacademy.in/student-success" }
    ]
  }),
  component: StudentSuccess,
});
