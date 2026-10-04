import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/portfolio-shell";

export const Route = createFileRoute("/gear")({
  head: () => ({
    meta: [
      { title: "Gear — Wacky Hojilla" },
      {
        name: "description",
        content: "The hardware and everyday tools Wacky Hojilla actually uses.",
      },
      { property: "og:title", content: "Gear — Wacky Hojilla" },
      {
        property: "og:description",
        content: "The hardware and everyday tools Wacky Hojilla actually uses.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: GearPage,
});

function GearPage() {
  return (
    <PageHeader
      index="03 — gear"
      title="Gear"
      blurb="The hardware and everyday tools I actually use for work."
    />
  );
}
