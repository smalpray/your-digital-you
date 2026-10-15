import { Outlet, Link, useRouterState } from "@tanstack/react-router";
import { House, UserRound, Laptop, Library, MessageSquare, Sun, Moon, Volume2 } from "lucide-react";

const navMain = [
  { label: "Home", icon: House, to: "/" },
  { label: "About me", icon: UserRound, to: "/about" },
  { label: "Gear", icon: Laptop, to: "/gear" },
  { label: "Resources", icon: Library, to: "/resources" },
];

const navProjects = [
  { label: "Projects", to: "/projects" },
  { label: "Experience", to: "/experience" },
  { label: "Stack", to: "/stack" },
  { label: "Certifications", to: "/certifications" },
  { label: "Recommendations", to: "/recommendations" },
  { label: "Affiliations", to: "/affiliations" },
];

function Sidebar() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isActive = (to: string) => pathname === to;
  const linkClass = (to: string) =>
    `flex items-center gap-2.5 rounded-md px-1 py-1.5 text-[13px] transition-colors ${
      isActive(to) ? "text-muted-foreground" : "text-foreground hover:text-muted-foreground"
    }`;

  return (
    <aside className="fixed inset-y-0 left-0 z-40 hidden w-64 flex-col justify-between border-r border-border bg-sidebar px-5 py-6 lg:flex">
      <div>
        <Link
          to="/"
          className="text-sm font-bold tracking-tight"
          activeProps={{ className: "text-sm font-bold tracking-tight" }}
        >
          Wacky Hojilla
        </Link>

        <nav className="mt-8 flex flex-col gap-1">
          {navMain.map(({ label, icon: Icon, to }) => (
            <Link key={to} to={to} className={linkClass(to)}>
              <Icon className="size-3.5 text-muted-foreground" />
              {label}
            </Link>
          ))}
        </nav>

        <div className="my-4 h-px bg-sidebar-border" />

        <nav className="flex flex-col gap-2.5">
          {navProjects.map(({ label, to }) => (
            <Link
              key={to}
              to={to}
              className={`rounded-md px-1 text-[13px] transition-colors ${
                isActive(to)
                  ? "text-muted-foreground"
                  : "text-foreground hover:text-muted-foreground"
              }`}
            >
              {label}
            </Link>
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

export function PageHeader({
  index,
  title,
  blurb,
}: {
  index: string;
  title: string;
  blurb: string;
}) {
  return (
    <section>
      <h2 className="text-sm text-muted-foreground">{index}</h2>
      <h1 className="mt-8 text-3xl font-bold tracking-tight md:text-4xl">{title}</h1>
      <p className="mt-4 max-w-md text-[15px] leading-relaxed text-muted-foreground">{blurb}</p>
    </section>
  );
}

export function PortfolioShell() {
  return (
    <div className="min-h-screen bg-background font-mono text-foreground">
      <Sidebar />

      {/* Mobile top bar */}
      <header className="flex items-center justify-between border-b border-border px-5 py-4 lg:hidden">
        <Link to="/" className="text-sm font-bold">
          Wacky Hojilla
        </Link>
        <a href="mailto:hello@wackyhojilla.com" className="text-xs text-muted-foreground">
          hello@wackyhojilla.com
        </a>
      </header>

      <main className="relative lg:pl-64">
        <div className="page-dots pointer-events-none absolute right-0 top-0 h-72 w-96 opacity-40 [mask-image:linear-gradient(to_bottom_left,black,transparent)]" />

        <div className="mx-auto max-w-4xl px-6 py-16 md:px-10 md:py-24">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
