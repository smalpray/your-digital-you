import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/portfolio-shell";

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [
      { title: "Shop — Wacky Hojilla" },
      {
        name: "description",
        content: "Digital products, templates, and tools by Wacky Hojilla.",
      },
      { property: "og:title", content: "Shop — Wacky Hojilla" },
      {
        property: "og:description",
        content: "Digital products, templates, and tools by Wacky Hojilla.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ShopPage,
});

function ShopPage() {
  return (
    <PageHeader
      index="01 — shop"
      title="Shop"
      blurb="Digital products, templates, and tools I've built. Everything here ships with lifetime updates."
    />
  );
}
