import { useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Emblem } from "@/components/Emblem";
import { philosophies, philosophyNames } from "@/data/philosophies";

export const Route = createFileRoute("/schools")({
  head: () => ({
    meta: [
      { title: "All 57 schools of philosophy — PhiloSorter" },
      {
        name: "description",
        content:
          "Browse every result in PhiloSorter: 57 philosophical schools with a defining quote, thinker and summary, from Platonism to Hoppeanism.",
      },
      { property: "og:title", content: "All 57 schools — PhiloSorter" },
      {
        property: "og:description",
        content: "Every philosophical school in the flowchart, with quotes, thinkers and summaries.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Schools,
});

function Schools() {
  const [query, setQuery] = useState("");

  const shown = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return philosophyNames;
    return philosophyNames.filter((name) => {
      const s = philosophies[name];
      return (
        name.toLowerCase().includes(q) ||
        s.thinker.toLowerCase().includes(q) ||
        s.tradition.toLowerCase().includes(q) ||
        s.blurb.toLowerCase().includes(q)
      );
    });
  }, [query]);

  return (
    <main className="mx-auto w-full max-w-5xl px-5 py-14">
      <p className="eyebrow">The index</p>
      <h1 className="mt-2 text-5xl">All {philosophyNames.length} schools</h1>
      <p className="mt-3 max-w-xl text-muted-foreground">
        Every possible result in the flowchart, alphabetically.
      </p>

      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search a school, thinker or idea…"
        aria-label="Search schools"
        className="mt-6 w-full max-w-md rounded-lg border border-border bg-card px-4 py-3 outline-none placeholder:text-muted-foreground focus:border-primary"
      />

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {shown.map((name) => {
          const s = philosophies[name];
          return (
            <article
              key={name}
              className="flex gap-4 rounded-xl border border-border bg-card p-4"
            >
              <div className="h-16 w-24 shrink-0 overflow-hidden rounded-md border border-border">
                <Emblem colors={s.colors} pattern={s.pattern} title={name} className="h-full w-full" />
              </div>
              <div className="min-w-0">
                <h2 className="text-2xl leading-tight">{name}</h2>
                <p className="eyebrow mt-1">{s.tradition}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.blurb}</p>
                <p className="mt-2 text-sm text-primary">{s.thinker}</p>
              </div>
            </article>
          );
        })}
      </div>

      {shown.length === 0 && (
        <p className="mt-10 text-muted-foreground">Nothing matches “{query}”.</p>
      )}

      <div className="mt-12 flex flex-wrap gap-3">
        <Link to="/" className="plinth-button">
          Take the quiz
        </Link>
        <Link to="/about" className="ghost-button">
          About
        </Link>
      </div>
    </main>
  );
}
