import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/portfolio-shell";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — Wacky Hojilla" },
      {
        name: "description",
        content: "Writing from Wacky Hojilla on building and shipping software.",
      },
      { property: "og:title", content: "Blog — Wacky Hojilla" },
      {
        property: "og:description",
        content: "Writing from Wacky Hojilla on building and shipping software.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BlogPage,
});

const posts = [
  {
    title: "Being Cringe Is Part of Putting Yourself Out There",
    date: "Aug 2026",
  },
  { title: "Build Competitors, Not Copies", date: "Aug 2026" },
];

function BlogPage() {
  return (
    <>
      <PageHeader
        index="02 — blog"
        title="Blog"
        blurb="Notes on building, shipping, and everything in between."
      />
      <ul className="mt-12">
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
    </>
  );
}
