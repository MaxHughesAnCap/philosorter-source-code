import { createFileRoute, Link } from "@tanstack/react-router";
import { philosophyNames } from "@/data/philosophies";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About PhiloSorter — how the flowchart works" },
      {
        name: "description",
        content:
          "How PhiloSorter sorts you into one of 57 philosophical schools with a short branching flowchart of questions.",
      },
      { property: "og:title", content: "About PhiloSorter" },
      {
        property: "og:description",
        content: "How the philosophy flowchart quiz works, and what it is and isn't.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});

function About() {
  return (
    <main className="mx-auto w-full max-w-2xl px-5 py-14">
      <p className="eyebrow">About</p>
      <h1 className="mt-2 text-5xl">What this is</h1>

      <div className="mt-8 space-y-5 text-[1.02rem] leading-relaxed text-muted-foreground">
        <p>
          PhiloSorter is a flowchart, not a scored test. Every answer moves you down one branch, so
          you reach a single school in five to eight questions rather than being averaged into a
          blurred position between all of them.
        </p>
        <p>
          The tree splits first by the question that interests you most — reality, knowledge, the
          good life, or legitimate authority — and then by the commitments that actually divide
          thinkers inside that field. Answering honestly matters more than answering cleverly.
        </p>
        <p>
          There are <span className="text-foreground">{philosophyNames.length}</span> possible
          results. Each carries a quote, the thinker most associated with it, and a short summary of
          the position. The emblems are invented for this site: geometric marks built from a palette
          chosen to fit each school, not historical symbols.
        </p>
        <p>
          Summaries are compressed to a few lines, which no serious tradition deserves. Treat a
          result as a reading suggestion rather than a verdict, and go argue with the primary texts.
        </p>
      </div>

      <div className="mt-10 flex flex-wrap gap-3">
        <Link to="/" className="plinth-button">
          Take the quiz
        </Link>
        <Link to="/schools" className="ghost-button">
          Browse all schools
        </Link>
      </div>
    </main>
  );
}
