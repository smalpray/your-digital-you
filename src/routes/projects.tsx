import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/portfolio-shell";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Wacky Hojilla" },
      {
        name: "description",
        content: "Selected projects built by Wacky Hojilla.",
      },
      { property: "og:title", content: "Projects — Wacky Hojilla" },
      {
        property: "og:description",
        content: "Selected projects built by Wacky Hojilla.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProjectsPage,
});

const projects = [
  { name: "Project One", detail: "Web app" },
  { name: "Project Two", detail: "Mobile app" },
  { name: "Project Three", detail: "AI tool" },
];

function ProjectsPage() {
  return (
    <>
      <PageHeader
        index="07 — projects"
        title="Projects"
        blurb="Selected things I've built."
      />
      <ul className="mt-12">
        {projects.map((p) => (
          <li
            key={p.name}
            className="flex items-center justify-between gap-4 border-b border-border py-5"
          >
            <span className="text-[15px] font-bold">{p.name}</span>
            <span className="text-xs text-muted-foreground">{p.detail}</span>
          </li>
        ))}
      </ul>
    </>
  );
}
