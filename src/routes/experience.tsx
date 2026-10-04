import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/portfolio-shell";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Experience — Wacky Hojilla" },
      {
        name: "description",
        content: "Work history and experience of Wacky Hojilla.",
      },
      { property: "og:title", content: "Experience — Wacky Hojilla" },
      {
        property: "og:description",
        content: "Work history and experience of Wacky Hojilla.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ExperiencePage,
});

const roles = [
  { role: "Company A", detail: "Engineer · 2024 — present" },
  { role: "Company B", detail: "Developer · 2022 — 2024" },
  { role: "Company C", detail: "Intern · 2021 — 2022" },
];

function ExperiencePage() {
  return (
    <>
      <PageHeader
        index="08 — experience"
        title="Experience"
        blurb="Where I've worked and what I shipped."
      />
      <ul className="mt-12">
        {roles.map((r) => (
          <li
            key={r.role}
            className="flex items-center justify-between gap-4 border-b border-border py-5"
          >
            <span className="text-[15px] font-bold">{r.role}</span>
            <span className="text-xs text-muted-foreground">{r.detail}</span>
          </li>
        ))}
      </ul>
    </>
  );
}
