import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/portfolio-shell";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: "Resources — Wacky Hojilla" },
      {
        name: "description",
        content: "Notes, links, and references from Wacky Hojilla.",
      },
      { property: "og:title", content: "Resources — Wacky Hojilla" },
      {
        property: "og:description",
        content: "Notes, links, and references from Wacky Hojilla.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ResourcesPage,
});

function ResourcesPage() {
  return (
    <PageHeader
      index="04 — resources"
      title="Resources"
      blurb="Notes, links, and references I keep coming back to."
    />
  );
}
