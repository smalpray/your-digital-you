import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/portfolio-shell";
import { projects } from "@/lib/projects";

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

function ProjectsPage() {
  return (
    <>
      <PageHeader
        index="07 — projects"
        title="Projects"
        blurb="A selection of platforms and internal tools I've worked on."
      />
      <div className="mt-12 grid gap-8">
        {projects.map((project, index) => (
          <a
            key={project.name}
            href={project.href}
            target="_blank"
            rel="noreferrer"
            className="block overflow-hidden rounded-2xl border border-border transition-colors hover:border-muted-foreground/50"
          >
            <article>
              <img
                src={project.image}
                alt={project.imageAlt}
                className="aspect-video w-full object-cover"
              />
              <div className="p-5 sm:p-6">
                <div className="flex flex-wrap items-baseline justify-between gap-3">
                  <h2 className="text-lg font-bold">{project.name}</h2>
                  <span className="text-xs text-muted-foreground">{project.category}</span>
                </div>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
                <p className="mt-5 text-[10px] tracking-widest text-muted-foreground">
                  {String(index + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
                </p>
              </div>
            </article>
          </a>
        ))}
      </div>
    </>
  );
}
