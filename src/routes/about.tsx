import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/portfolio-shell";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About me — Wacky Hojilla" },
      {
        name: "description",
        content: "A bit about Wacky Hojilla, the builder behind the work.",
      },
      { property: "og:title", content: "About me — Wacky Hojilla" },
      {
        property: "og:description",
        content: "A bit about Wacky Hojilla, the builder behind the work.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHeader
        index="01 — about me"
        title="About me"
        blurb="I build products, ship systems, and turn ambitious ideas into polished experiences people actually use."
      />
      <div className="mt-10 max-w-2xl space-y-5 text-[15px] leading-relaxed text-foreground">
        <p>
          I’m a full-stack developer passionate about building thoughtful products, intuitive
          interfaces, and reliable digital experiences.
        </p>

        <p>
          I work across the stack, from designing user experiences and developing frontend
          interfaces to building backend systems and integrating APIs. I focus on creating solutions
          that balance functionality, usability, and performance.
        </p>

        <p>
          My goal is to turn ideas into practical, scalable, and maintainable applications that
          solve real problems and deliver meaningful value.
        </p>
      </div>
    </>
  );
}
