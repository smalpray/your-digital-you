import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, ArrowRight, Link } from "@tanstack/react-router";
import profileAsset from "@/assets/profile.png.asset.json";

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

const posts = [
  { title: "Being Cringe Is Part of Putting Yourself Out There", date: "Aug 2026" },
  { title: "Build Competitors, Not Copies", date: "Aug 2026" },
];

function Index() {
  return (
    <>
      {/* Hero */}
      <section className="grid items-center gap-10 md:grid-cols-[300px_1fr] md:gap-14">
        <img
          src={profileAsset.url}
          alt="Wacky Hojilla"
          className="w-full max-w-[300px] opacity-95 mix-blend-screen [mask-image:radial-gradient(ellipse_at_center,black_60%,transparent_100%)]"
        />

        <div>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
            Wacky Hojilla
          </h1>

          <p className="mt-6 max-w-md text-[15px] leading-relaxed text-foreground">
            I'm a full-stack engineer. I build modern web & mobile apps, and
            these days I'm focused on generative AI.
          </p>

          <p className="mt-4 max-w-md text-[15px] leading-relaxed text-foreground">
            Right now I'm building cool new stuff every day. I love turning
            rough ideas into things people actually use.
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
            <div className="mt-2 text-[10px] tracking-widest text-muted-foreground">
              {label}
            </div>
          </div>
        ))}
      </section>

      {/* Dotted divider */}
      <div className="dot-grid mt-20 h-10 w-full opacity-70 [mask-image:linear-gradient(to_bottom,black,transparent)]" />

      {/* Blog */}
      <section className="mt-10">
        <div className="flex items-baseline justify-between">
          <h2 className="text-sm text-muted-foreground">01 — blog</h2>
          <Link
            to="/blog"
            className="text-[11px] tracking-widest text-muted-foreground transition-colors hover:text-foreground"
          >
            ALL POSTS
            <ArrowRight className="ml-1 inline size-3" />
          </Link>
        </div>

        <ul className="mt-6">
          {posts.map((post) => (
            <li key={post.title}>
              <Link
                to="/blog"
                className="group flex items-center justify-between gap-4 border-b border-border py-5"
              >
                <span className="text-[15px] font-bold transition-colors group-hover:text-muted-foreground">
                  {post.title}
                </span>
                <span className="shrink-0 text-xs text-muted-foreground">
                  {post.date}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
