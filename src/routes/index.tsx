import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, ArrowRight, Boxes, Triangle, Play } from "lucide-react";
import profileImage from "@/assets/profile.png";
import { projects } from "@/lib/projects";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Wacky Hojilla — Full-Stack Engineer" },
      {
        name: "description",
        content:
          "Portfolio of Wacky Hojilla — full-stack engineer building modern web and mobile apps.",
      },
      { property: "og:title", content: "Wacky Hojilla — Full-Stack Engineer" },
      {
        property: "og:description",
        content:
          "Full-stack engineer building modern web & mobile apps. Shipping cool new stuff every day.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Wacky Hojilla — Full-Stack Engineer",
      },
      {
        name: "twitter:description",
        content:
          "Full-stack engineer building modern web & mobile apps. Shipping cool new stuff every day.",
      },
    ],
  }),
  component: Index,
});

const socials = [
  { label: "github", href: "https://github.com" },
  { label: "linkedin", href: "https://linkedin.com" },
  { label: "instagram", href: "https://instagram.com" },
  { label: "x", href: "https://x.com" },
];

const badges = [
  { icon: Boxes, name: "GitHub", subtitle: "AMBASSADOR" },
  { icon: Triangle, name: "AMD AI", subtitle: "AMBASSADOR" },
  { icon: Play, name: "StellarPH", subtitle: "PH100 · 2025" },
];

const stats = [
  { value: "300K+", label: "COMMUNITY" },
  { value: "8+ yrs", label: "SHIPPING" },
  { value: "11", label: "HACKATHON WINS" },
];

function Index() {
  return (
    <>
      {/* Hero */}
      <section className="grid items-center gap-10 md:grid-cols-[300px_1fr] md:gap-14">
        <div className="relative w-full max-w-[300px] overflow-hidden">
          <img
            src={profileImage}
            alt="Wacky Hojilla"
            className="h-[240px] w-full object-cover object-center opacity-100 grayscale sm:h-[280px]"
          />
        </div>

        <div>
          <h1 className="font-pixel text-4xl  tracking-tight md:text-5xl">Wacky Hojilla</h1>

          <p className="mt-6 max-w-md text-[15px] leading-relaxed text-foreground">
            I'm a full-stack developer building modern web applications, scalable systems, and
            intuitive user interfaces from frontend to backend.
          </p>

          <p className="mt-4 max-w-md text-[15px] leading-relaxed text-foreground">
            I turn ideas into practical digital solutions, exploring new technologies and AI to
            build smarter, more efficient applications.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 text-[13px]">
            {socials.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                {label}
                <ArrowUpRight className="ml-1 inline size-3" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Badges */}
      <section className="mt-20 grid grid-cols-1 divide-y divide-border border-y border-border sm:grid-cols-3 sm:divide-x sm:divide-y-0">
        {badges.map(({ icon: Icon, name, subtitle }) => (
          <div key={name} className="flex items-center gap-3 px-5 py-5">
            <Icon className="size-5 shrink-0 text-foreground" />
            <div>
              <div className="text-sm font-bold">{name}</div>
              <div className="mt-0.5 text-[10px] tracking-widest text-muted-foreground">
                {subtitle}
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Stats */}
      <section className="grid grid-cols-1 divide-y divide-border sm:grid-cols-3 sm:divide-x">
        {stats.map(({ value, label }) => (
          <div key={label} className="px-5 py-7">
            <div className="text-2xl font-bold">
              {value}
              <ArrowUpRight className="ml-1 inline size-3.5 text-muted-foreground" />
            </div>
            <div className="mt-2 text-[10px] tracking-widest text-muted-foreground">{label}</div>
          </div>
        ))}
      </section>

      {/* Dotted divider */}
      <div className="dot-grid mt-20 h-10 w-full opacity-70 [mask-image:linear-gradient(to_bottom,black,transparent)]" />

      <section id="about" className="mt-16 scroll-mt-8">
        <div className="flex items-baseline justify-between">
          <h2 className="text-sm text-muted-foreground">01 — about me</h2>
          <Link
            to="/about"
            className="text-[11px] tracking-widest text-muted-foreground transition-colors hover:text-foreground"
          >
            MORE ABOUT ME
            <ArrowRight className="ml-1 inline size-3" />
          </Link>
        </div>
        <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
          I’m a full-stack developer passionate about building thoughtful products, intuitive
          interfaces, and reliable digital experiences. I work across frontend and backend to turn
          ideas into practical, maintainable applications.
        </p>
      </section>

      <section id="projects" className="mt-20 scroll-mt-8">
        <div className="flex items-baseline justify-between">
          <h2 className="text-sm text-muted-foreground">02 — projects</h2>
          <Link
            to="/projects"
            className="text-[11px] tracking-widest text-muted-foreground transition-colors hover:text-foreground"
          >
            ALL PROJECTS
            <ArrowRight className="ml-1 inline size-3" />
          </Link>
        </div>
        <div className="relative mx-auto mt-8 h-[280px] w-full max-w-[760px] sm:h-[380px]">
          {projects.map((project, index) => {
            const positions = [
              "left-[35%] top-[55%] -rotate-12",
              "left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2",
              "left-[65%] top-[55%] rotate-12",
            ];
            const transform =
              index === 0
                ? "-translate-x-1/2 -translate-y-1/2"
                : index === 2
                  ? "-translate-x-1/2 -translate-y-1/2"
                  : "";

            return (
              <a
                key={project.name}
                href={project.href}
                target="_blank"
                rel="noreferrer"
                className={`absolute ${positions[index]} ${transform} w-[72%] overflow-hidden rounded-2xl border border-white/10 bg-card shadow-2xl transition duration-300 hover:z-30 hover:scale-[1.03]`}
                aria-label={`${project.name} — ${project.category}`}
              >
                <div className="relative aspect-video">
                  <img
                    src={project.image}
                    alt={project.imageAlt}
                    className="size-full object-cover"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/55 to-transparent px-3 pb-3 pt-10 sm:px-5 sm:pb-5">
                    <p className="text-xs font-bold text-white sm:text-base">{project.name}</p>
                    <p className="mt-1 text-[9px] text-white/70 sm:text-xs">{project.category}</p>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </section>

      <section id="experience" className="mt-20 scroll-mt-8">
        <div className="flex items-baseline justify-between">
          <h2 className="text-sm text-muted-foreground">03 — experience</h2>
          <Link
            to="/experience"
            className="text-[11px] tracking-widest text-muted-foreground transition-colors hover:text-foreground"
          >
            FULL HISTORY
            <ArrowRight className="ml-1 inline size-3" />
          </Link>
        </div>
        <p className="mt-6 max-w-2xl border-b border-border py-5 text-[15px] leading-relaxed text-muted-foreground">
          I work across frontend interfaces and backend systems, focusing on useful, reliable
          applications that solve real problems.
        </p>
      </section>
    </>
  );
}
