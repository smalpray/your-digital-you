import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/portfolio-shell";

export const Route = createFileRoute("/certifications")({
  head: () => ({
    meta: [
      { title: "Certifications — Wacky Hojilla" },
      {
        name: "description",
        content: "Courses and certifications earned by Wacky Hojilla.",
      },
      { property: "og:title", content: "Certifications — Wacky Hojilla" },
      {
        property: "og:description",
        content: "Courses and certifications earned by Wacky Hojilla.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CertificationsPage,
});

function CertificationsPage() {
  return (
    <PageHeader
      index="10 — certifications"
      title="Certifications"
      blurb="Courses and certificates I've earned."
    />
  );
}
