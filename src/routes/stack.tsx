import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/portfolio-shell";

export const Route = createFileRoute("/stack")({
  head: () => ({
    meta: [
      { title: "Stack — Wacky Hojilla" },
      {
        name: "description",
        content: "Tools and technologies Wacky Hojilla uses day to day.",
      },
      { property: "og:title", content: "Stack — Wacky Hojilla" },
      {
        property: "og:description",
        content: "Tools and technologies Wacky Hojilla uses day to day.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: StackPage,
});

const stack = [
  { name: "TypeScript", detail: "Language" },
  { name: "React", detail: "Frontend" },
  { name: "Node.js", detail: "Backend" },
];

function StackPage() {
  return (
    <>
      <PageHeader
        index="09 — stack"
        title="Stack"
        blurb="Tools and technologies I use day to day."
      />
      <ul className="mt-12">
        {stack.map((s) => (
          <li
            key={s.name}
            className="flex items-center justify-between gap-4 border-b border-border py-5"
          >
            <span className="text-[15px] font-bold">{s.name}</span>
            <span className="text-xs text-muted-foreground">{s.detail}</span>
          </li>
        ))}
      </ul>
    </>
  );
}
