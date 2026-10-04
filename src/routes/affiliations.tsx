import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/portfolio-shell";

export const Route = createFileRoute("/affiliations")({
  head: () => ({
    meta: [
      { title: "Affiliations — Wacky Hojilla" },
      {
        name: "description",
        content: "Communities and programs Wacky Hojilla is part of.",
      },
      { property: "og:title", content: "Affiliations — Wacky Hojilla" },
      {
        property: "og:description",
        content: "Communities and programs Wacky Hojilla is part of.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AffiliationsPage,
});

function AffiliationsPage() {
  return (
    <PageHeader
      index="12 — affiliations"
      title="Affiliations"
      blurb="Communities and programs I'm part of."
    />
  );
}
