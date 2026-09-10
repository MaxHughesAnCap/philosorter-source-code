import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Emblem } from "@/components/Emblem";
import { getSchool, philosophyNames } from "@/data/philosophies";
import { quiz } from "@/data/quiz";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PhiloSorter — find your philosophy in a few questions" },
      {
        name: "description",
        content:
          "A branching flowchart quiz that sorts you into one of 57 philosophical schools, from Platonism and Stoicism to Objectivism and Hoppeanism.",
      },
      { property: "og:title", content: "PhiloSorter — find your philosophy" },
      {
        property: "og:description",
        content:
          "Answer a handful of branching questions and land on one of 57 schools of philosophy, each with a quote, emblem and summary.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

type Screen = "home" | "quiz" | "result";

function Home() {
  const [screen, setScreen] = useState<Screen>("home");
  const [path, setPath] = useState<string[]>(["root"]);
  const [result, setResult] = useState<string | null>(null);

  const nodeId = path[path.length - 1] ?? "root";
  const node = quiz[nodeId];

  const start = () => {
    setPath(["root"]);
    setResult(null);
    setScreen("quiz");
  };

  const choose = (to: string) => {
    if (to.startsWith("r:")) {
      setResult(to.slice(2));
      setScreen("result");
    } else {
      setPath((p) => [...p, to.slice(2)]);
    }
  };

  const back = () => {
    if (screen === "result") {
      setResult(null);
      setScreen("quiz");
      return;
    }
    if (path.length === 1) {
      setScreen("home");
      return;
    }
    setPath((p) => p.slice(0, -1));
  };

  const surprise = () => {
    const name = philosophyNames[Math.floor(Math.random() * philosophyNames.length)] ?? "Platonism";
    setResult(name);
    setScreen("result");
  };

  return (
    <div className="min-h-screen">
      <header className="mx-auto flex w-full max-w-5xl items-center justify-between px-5 py-6">
        <button onClick={() => setScreen("home")} className="text-2xl font-normal">
          <span className="font-display">Philo</span>
          <span className="font-display text-primary">Sorter</span>
        </button>
        <nav className="flex items-center gap-4 text-sm text-muted-foreground">
          <Link to="/schools" className="hover:text-foreground">
            Schools
          </Link>
          <Link to="/about" className="hover:text-foreground">
            About
          </Link>
        </nav>
      </header>

      {screen === "home" && <HomeScreen onStart={start} onSurprise={surprise} />}
      {screen === "quiz" && node && (
        <QuizScreen
          question={node.question}
          options={node.options}
          step={path.length}
          onChoose={choose}
          onBack={back}
        />
      )}
      {screen === "result" && result && (
        <ResultScreen name={result} onRestart={start} onBack={back} />
      )}
    </div>
  );
}

function HomeScreen({ onStart, onSurprise }: { onStart: () => void; onSurprise: () => void }) {
  const preview = ["Platonism", "Stoicism", "Kantianism", "Absurdism", "Rothbardianism", "Taoism"];

  return (
    <main className="mx-auto w-full max-w-5xl px-5 pb-20">
      <section className="pt-8 sm:pt-16">
        <p className="eyebrow">A flowchart, not a scored test</p>
        <h1 className="mt-3 max-w-3xl text-6xl leading-[0.95] sm:text-8xl">
          Find the philosophy you were already arguing for.
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
          Six or so branching questions about reality, knowledge, the good life and legitimate
          authority. One of {philosophyNames.length} schools at the end of the path.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <button onClick={onStart} className="plinth-button text-lg">
            Begin
          </button>
          <button onClick={onSurprise} className="ghost-button">
            Show me a random school
          </button>
        </div>
      </section>

      <div className="rule-line mt-14" />

      <section className="mt-10">
        <p className="eyebrow">Some of what is waiting at the ends</p>
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {preview.map((name) => {
            const s = getSchool(name);
            return (
              <div key={name} className="rounded-xl border border-border bg-card p-4">
                <div className="h-20 w-full overflow-hidden rounded-md border border-border">
                  <Emblem
                    colors={s.colors}
                    pattern={s.pattern}
                    title={name}
                    className="h-full w-full"
                  />
                </div>
                <h2 className="mt-3 text-2xl leading-tight">{name}</h2>
                <p className="eyebrow mt-1">{s.tradition}</p>
              </div>
            );
          })}
        </div>
        <Link to="/schools" className="ghost-button mt-6">
          See all {philosophyNames.length} schools
        </Link>
      </section>
    </main>
  );
}

function QuizScreen({
  question,
  options,
  step,
  onChoose,
  onBack,
}: {
  question: string;
  options: { label: string; to: string }[];
  step: number;
  onChoose: (to: string) => void;
  onBack: () => void;
}) {
  return (
    <main className="mx-auto w-full max-w-2xl px-5 pb-20 pt-6">
      <p className="eyebrow">Question {step}</p>
      <h1 className="mt-3 text-4xl leading-tight sm:text-5xl">{question}</h1>

      <div className="mt-8 space-y-3">
        {options.map((option) => (
          <button key={option.label} className="choice" onClick={() => onChoose(option.to)}>
            <span className="text-primary">→</span>
            <span>{option.label}</span>
          </button>
        ))}
      </div>

      <button onClick={onBack} className="ghost-button mt-8">
        Back
      </button>
    </main>
  );
}

function ResultScreen({
  name,
  onRestart,
  onBack,
}: {
  name: string;
  onRestart: () => void;
  onBack: () => void;
}) {
  const s = getSchool(name);

  return (
    <main className="mx-auto w-full max-w-2xl px-5 pb-20 pt-6">
      <p className="eyebrow">You landed on</p>
      <h1 className="mt-2 text-5xl leading-tight sm:text-6xl">{name}</h1>
      <p className="eyebrow mt-2">{s.tradition}</p>

      <div className="mt-6 overflow-hidden rounded-xl border border-border">
        <Emblem colors={s.colors} pattern={s.pattern} title={name} className="h-48 w-full" />
      </div>

      <blockquote className="mt-7 border-l-2 border-primary pl-5 font-display text-2xl leading-snug">
        “{s.quote}”
        <footer className="mt-2 font-sans text-sm text-muted-foreground">— {s.thinker}</footer>
      </blockquote>

      <p className="mt-6 leading-relaxed text-muted-foreground">{s.blurb}</p>

      <div className="mt-9 flex flex-wrap gap-3">
        <button onClick={onRestart} className="plinth-button">
          Start again
        </button>
        <button onClick={onBack} className="ghost-button">
          Change last answer
        </button>
        <Link to="/schools" className="ghost-button">
          Browse all schools
        </Link>
      </div>
    </main>
  );
}
