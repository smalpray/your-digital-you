import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/portfolio-shell";

export const Route = createFileRoute("/consulting")({
  head: () => ({
    meta: [
      { title: "Consulting — Wacky Hojilla" },
      {
        name: "description",
        content: "Advisory sessions on architecture, product, and shipping.",
      },
      { property: "og:title", content: "Consulting — Wacky Hojilla" },
      {
        property: "og:description",
        content: "Advisory sessions on architecture, product, and shipping.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ConsultingPage,
});

function ConsultingPage() {
  return (
    <PageHeader
      index="06 — consulting"
      title="Consulting"
      blurb="One-off advisory sessions on architecture, product, and shipping."
    />
  );
}
