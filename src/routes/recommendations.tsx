import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/portfolio-shell";

export const Route = createFileRoute("/recommendations")({
  head: () => ({
    meta: [
      { title: "Recommendations — Wacky Hojilla" },
      {
        name: "description",
        content: "Recommendations and kind words from collaborators.",
      },
      { property: "og:title", content: "Recommendations — Wacky Hojilla" },
      {
        property: "og:description",
        content: "Recommendations and kind words from collaborators.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: RecommendationsPage,
});

function RecommendationsPage() {
  return (
    <PageHeader
      index="11 — recommendations"
      title="Recommendations"
      blurb="Kind words from people I've worked with."
    />
  );
}
