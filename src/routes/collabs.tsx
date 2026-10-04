import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/portfolio-shell";

export const Route = createFileRoute("/collabs")({
  head: () => ({
    meta: [
      { title: "Collabs — Wacky Hojilla" },
      {
        name: "description",
        content: "Collaborations with brands and builders, by Wacky Hojilla.",
      },
      { property: "og:title", content: "Collabs — Wacky Hojilla" },
      {
        property: "og:description",
        content: "Collaborations with brands and builders, by Wacky Hojilla.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CollabsPage,
});

function CollabsPage() {
  return (
    <PageHeader
      index="05 — collabs"
      title="Collabs"
      blurb="I team up with brands and builders on interesting ideas. If you have something in mind, reach out."
    />
  );
}
