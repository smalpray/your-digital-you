import { createFileRoute } from "@tanstack/react-router";
import {
  ShoppingBag,
  PenLine,
  Laptop,
  Library,
  MessageSquare,
  Sun,
  Moon,
  Volume2,
  ArrowUpRight,
  ArrowRight,
  Boxes,
  Triangle,
  Play,
} from "lucide-react";
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

const navMain = [
  { label: "Shop", icon: ShoppingBag },
  { label: "Blog", icon: PenLine },
  { label: "Gear", icon: Laptop },
  { label: "Resources", icon: Library },
];

const navSecondary = ["Collabs", "Consulting"];

const navProjects = [
  "Projects",
  "Experience",
  "Stack",
  "Certifications",
  "Recommendations",
  "Affiliations",
];

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

function Sidebar() {
  return (
    <aside className="fixed inset-y-0 left-0 z-40 hidden w-64 flex-col justify-between border-r border-border bg-sidebar px-5 py-6 lg:flex">
      <div>
        <div className="text-sm font-bold tracking-tight">Wacky Hojilla</div>

        <nav className="mt-8 flex flex-col gap-1">
          {navMain.map(({ label, icon: Icon }) => (
            <a
              key={label}
              href="#"
              className="flex items-center gap-2.5 rounded-md px-1 py-1.5 text-[13px] text-foreground transition-colors hover:text-muted-foreground"
            >
              <Icon className="size-3.5 text-muted-foreground" />
              {label}
            </a>
          ))}
        </nav>

        <div className="my-4 h-px bg-sidebar-border" />

        <nav className="flex flex-col gap-1">
          {navSecondary.map((label) => (
            <a
              key={label}
              href="#"
              className="flex items-center gap-2.5 rounded-md px-1 py-1.5 text-[13px] text-foreground transition-colors hover:text-muted-foreground"
            >
              <span className="text-[10px] text-muted-foreground">⌥</span>
              {label}
            </a>
          ))}
        </nav>

        <div className="my-4 h-px bg-sidebar-border" />

        <nav className="flex flex-col gap-2.5">
          {navProjects.map((label) => (
            <a
              key={label}
              href="#"
              className="rounded-md px-1 text-[13px] text-foreground transition-colors hover:text-muted-foreground"
            >
              {label}
            </a>
          ))}
        </nav>
      </div>

      <div>
        <div className="flex flex-col gap-2">
          <a
            href="#"
            className="flex items-center gap-2 text-[13px] text-foreground hover:text-muted-foreground"
          >
            Ask anything
            <span className="rounded border border-border bg-card px-1.5 py-0.5 text-[10px] text-muted-foreground">
              Alt + K
            </span>
          </a>
          <a
            href="#"
            className="flex items-center gap-2 text-[13px] text-foreground hover:text-muted-foreground"
          >
            Typing test
            <span className="rounded border border-border bg-card px-1.5 py-0.5 text-[10px] text-muted-foreground">
              Alt + J
            </span>
          </a>
        </div>

        <div className="my-4 h-px bg-sidebar-border" />

        <div className="flex items-center gap-2.5">
          <div className="flex size-8 items-center justify-center rounded-full border border-border bg-card text-[11px] font-bold">
            W
          </div>
        </div>

        <p className="mt-3 text-[12px] text-foreground">
          <span className="font-bold">1 person</span> viewing now
        </p>

        <a
          href="#"
          className="mt-2 flex items-center gap-2 text-[12px] text-muted-foreground hover:text-foreground"
        >
          <MessageSquare className="size-3.5" />
          community chat
        </a>

        <div className="my-4 h-px bg-sidebar-border" />

        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 rounded-full border border-border bg-card p-1">
            <span className="flex size-6 items-center justify-center rounded-full text-muted-foreground">
              <MessageSquare className="size-3" />
            </span>
            <span className="flex size-6 items-center justify-center rounded-full text-muted-foreground">
              <Sun className="size-3" />
            </span>
            <span className="flex size-6 items-center justify-center rounded-full bg-accent text-foreground">
              <Moon className="size-3" />
            </span>
          </div>
          <span className="flex size-8 items-center justify-center rounded-full border border-border bg-card text-muted-foreground">
            <Volume2 className="size-3.5" />
          </span>
        </div>

        <p className="mt-4 text-[12px] leading-relaxed text-muted-foreground">
          For work, collabs & everything else, reach me at
        </p>
        <a
          href="mailto:hello@wackyhojilla.com"
          className="mt-2 block text-[13px] font-bold underline-offset-2 hover:underline"
        >
          hello@wackyhojilla.com
        </a>
      </div>
    </aside>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background font-mono text-foreground">
      <Sidebar />

      {/* Mobile top bar */}
      <header className="flex items-center justify-between border-b border-border px-5 py-4 lg:hidden">
        <span className="text-sm font-bold">Wacky Hojilla</span>
        <a href="mailto:hello@wackyhojilla.com" className="text-xs text-muted-foreground">
          hello@wackyhojilla.com
        </a>
      </header>

      <main className="relative lg:pl-64">
        <div className="page-dots pointer-events-none absolute right-0 top-0 h-72 w-96 opacity-40 [mask-image:linear-gradient(to_left,black,transparent)] [mask-image:linear-gradient(to_bottom_left,black,transparent)]" />

        <div className="mx-auto max-w-4xl px-6 py-16 md:px-10 md:py-24">
          {/* Hero */}
          <section className="grid items-center gap-10 md:grid-cols-[300px_1fr] md:gap-14">
            <img
              src={profileAsset.url}
              alt="Wacky Hojilla"
              className="w-full max-w-[300px] mix-blend-screen opacity-95 [mask-image:radial-gradient(ellipse_at_center,black_60%,transparent_100%)]"
            />

            <div>
              <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
                Wacky Hojilla
              </h1>

              <p className="mt-6 max-w-md text-[15px] leading-relaxed text-foreground">
                I'm a full-stack engineer. I build modern web & mobile
                apps, and these days I'm focused on generative AI.
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
              <a
                href="#"
                className="text-[11px] tracking-widest text-muted-foreground transition-colors hover:text-foreground"
              >
                ALL POSTS
                <ArrowRight className="ml-1 inline size-3" />
              </a>
            </div>

            <ul className="mt-6">
              {posts.map((post) => (
                <li key={post.title}>
                  <a
                    href="#"
                    className="group flex items-center justify-between gap-4 border-b border-border py-5"
                  >
                    <span className="text-[15px] font-bold transition-colors group-hover:text-muted-foreground">
                      {post.title}
                    </span>
                    <span className="shrink-0 text-xs text-muted-foreground">
                      {post.date}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>
    </div>
  );
}
