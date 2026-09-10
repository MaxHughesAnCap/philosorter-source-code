export interface Option {
  label: string;
  /** "q:<nodeId>" to continue, "r:<School name>" to finish. */
  to: string;
}

export interface QuizNode {
  question: string;
  options: Option[];
}

export const quiz: Record<string, QuizNode> = {
  root: {
    question: "Which question keeps you up at night?",
    options: [
      { label: "What is ultimately real?", to: "q:m1" },
      { label: "What can we actually know?", to: "q:k1" },
      { label: "How should I live?", to: "q:e1" },
      { label: "What makes authority legitimate?", to: "q:p1" },
    ],
  },

  // ── Metaphysics ─────────────────────────────────────────────
  m1: {
    question: "Is the deepest reality something beyond the physical world?",
    options: [
      { label: "Yes", to: "q:m2" },
      { label: "No", to: "q:m10" },
    ],
  },
  m2: {
    question: "Is it a single unity that everything else flows from?",
    options: [
      { label: "Yes", to: "q:m3" },
      { label: "No", to: "q:m6" },
    ],
  },
  m3: {
    question: "Is your own self ultimately identical with that unity?",
    options: [
      { label: "Yes — separateness is appearance", to: "r:Advaita Vedanta" },
      { label: "No", to: "q:m4" },
    ],
  },
  m4: {
    question: "Does that unity unfold by strict necessity, without choice or purpose?",
    options: [
      { label: "Yes", to: "r:Spinozism" },
      { label: "No", to: "q:m5" },
    ],
  },
  m5: {
    question: "Does everything emanate from an ineffable source we can climb back toward?",
    options: [
      { label: "Yes, by ascent", to: "r:Neoplatonism" },
      { label: "No, by yielding to its flow", to: "r:Taoism" },
    ],
  },
  m6: {
    question: "Do perfect, unchanging Forms exist independently of any mind?",
    options: [
      { label: "Yes", to: "q:m7" },
      { label: "No", to: "q:m8" },
    ],
  },
  m7: {
    question: "Are the things around us mere shadows of those Forms?",
    options: [
      { label: "Yes", to: "r:Platonism" },
      { label: "No — form lives inside each thing", to: "r:Aristotelianism" },
    ],
  },
  m8: {
    question: "Is history the self-development of a rational Spirit?",
    options: [
      { label: "Yes", to: "r:Absolute idealism" },
      { label: "No", to: "q:m9" },
    ],
  },
  m9: {
    question: "Is reality made of countless mind-like units, each mirroring the whole?",
    options: [
      { label: "Yes", to: "r:Leibnizian monadology" },
      { label: "No", to: "q:m9b" },
    ],
  },
  m9b: {
    question: "Does anything exist while nobody perceives it?",
    options: [
      { label: "No — to be is to be perceived", to: "r:Berkeleyan idealism" },
      { label: "Yes — mind and matter are two substances", to: "r:Cartesian dualism" },
    ],
  },
  m10: {
    question: "Do things have a fixed essence of their own?",
    options: [
      { label: "Yes", to: "q:m11" },
      { label: "No", to: "q:m13" },
    ],
  },
  m11: {
    question: "Is everything, mind included, made of matter?",
    options: [
      { label: "Yes", to: "q:m12" },
      { label: "No — thinking is a separate substance", to: "r:Cartesian dualism" },
    ],
  },
  m12: {
    question: "Are colour, meaning and value only conventions laid over particles in the void?",
    options: [
      { label: "Yes", to: "r:Atomism" },
      { label: "No — matter organised gives rise to the rest", to: "r:Materialism" },
    ],
  },
  m13: {
    question: "Are there no stable things at all, only events becoming?",
    options: [
      { label: "Yes, reality is process", to: "r:Process philosophy" },
      { label: "Things exist, but only in dependence on conditions", to: "r:Madhyamaka Buddhism" },
    ],
  },

  // ── Epistemology ────────────────────────────────────────────
  k1: {
    question: "Can we reach objective knowledge at all?",
    options: [
      { label: "Yes", to: "q:k2" },
      { label: "Only ever from some perspective", to: "q:k10" },
      { label: "No — judgement should be suspended", to: "r:Pyrrhonism" },
    ],
  },
  k2: {
    question: "Does knowledge rest ultimately on the senses?",
    options: [
      { label: "Yes", to: "q:k3" },
      { label: "No", to: "q:k7" },
    ],
  },
  k3: {
    question: "Is the mind a blank slate written on by experience?",
    options: [
      { label: "Yes", to: "q:k4" },
      { label: "No", to: "q:k6" },
    ],
  },
  k4: {
    question: "Is a claim meaningful only if experience could verify it?",
    options: [
      { label: "Yes", to: "r:Logical positivism" },
      { label: "No", to: "q:k5" },
    ],
  },
  k5: {
    question: "Is a belief true because it works when you act on it?",
    options: [
      { label: "Yes", to: "r:Pragmatism" },
      { label: "No — it is true by matching experience", to: "r:Empiricism" },
    ],
  },
  k6: {
    question: "Do we ever observe causation itself?",
    options: [
      { label: "No — only succession, and habit does the rest", to: "r:Humean scepticism" },
      { label: "Theories are guesses we can only try to refute", to: "r:Critical rationalism" },
    ],
  },
  k7: {
    question: "Does the mind impose the very structure in which experience appears?",
    options: [
      { label: "Yes — and things in themselves stay hidden", to: "r:Kantianism" },
      { label: "No", to: "q:k8" },
    ],
  },
  k8: {
    question: "Should we drop theories and describe lived experience as it presents itself?",
    options: [
      { label: "Yes", to: "r:Phenomenology" },
      { label: "No", to: "q:k9" },
    ],
  },
  k9: {
    question: "Are most philosophical problems confusions about how we use words?",
    options: [
      { label: "Yes", to: "r:Ordinary language philosophy" },
      { label: "No — reason alone reaches necessary truth", to: "r:Rationalism" },
    ],
  },
  k10: {
    question: "Have grand narratives of reason and progress lost their credibility?",
    options: [
      { label: "Yes", to: "q:k11" },
      { label: "No — but every claim serves some will", to: "r:Perspectivism" },
    ],
  },
  k11: {
    question: "Is knowledge above all an instrument of domination to be exposed?",
    options: [
      { label: "Yes", to: "r:Critical theory" },
      { label: "No — what remains is play and difference", to: "r:Postmodernism" },
    ],
  },

  // ── Ethics ──────────────────────────────────────────────────
  e1: {
    question: "Is there a given moral order you ought to conform to?",
    options: [
      { label: "Yes", to: "q:e2" },
      { label: "Yes, and it is sacred", to: "q:e15" },
      { label: "No — values must be created", to: "q:e10" },
    ],
  },
  e2: {
    question: "Does morality come down to outcomes — how much good is produced?",
    options: [
      { label: "Yes", to: "r:Utilitarianism" },
      { label: "No", to: "q:e3" },
    ],
  },
  e3: {
    question: "Does it come down to duties that bind whatever the consequences?",
    options: [
      { label: "Yes", to: "r:Kantian deontology" },
      { label: "No", to: "q:e4" },
    ],
  },
  e4: {
    question: "Is the point to become a certain kind of person rather than to follow rules?",
    options: [
      { label: "Yes", to: "q:e5" },
      { label: "No", to: "q:e8" },
    ],
  },
  e5: {
    question: "Is character formed above all through family, ritual and social role?",
    options: [
      { label: "Yes", to: "r:Confucianism" },
      { label: "No", to: "q:e6" },
    ],
  },
  e6: {
    question: "Should you accept whatever is outside your control and hold virtue as the only good?",
    options: [
      { label: "Yes", to: "r:Stoicism" },
      { label: "No", to: "q:e7" },
    ],
  },
  e7: {
    question: "Is a quiet life of modest pleasure among friends the highest aim?",
    options: [
      { label: "Yes", to: "r:Epicureanism" },
      { label: "No — excellence is the aim", to: "r:Virtue ethics" },
    ],
  },
  e8: {
    question: "Do moral demands arise from concrete relationships and dependence?",
    options: [
      { label: "Yes", to: "r:Care ethics" },
      { label: "No", to: "q:e8b" },
    ],
  },
  e8b: {
    question: "Should convention be stripped away by living bare and shameless in accord with nature?",
    options: [
      { label: "Yes", to: "r:Cynicism" },
      { label: "No — trust nature, but inwardly", to: "r:Transcendentalism" },
    ],
  },
  e10: {
    question: "Once the old values collapse, does anything have value?",
    options: [
      { label: "No", to: "r:Nihilism" },
      { label: "Yes", to: "q:e11" },
    ],
  },
  e11: {
    question: "Is your own reasoned self-interest the moral purpose of your life?",
    options: [
      { label: "Yes", to: "q:e12" },
      { label: "No", to: "q:e13" },
    ],
  },
  e12: {
    question: "Is that grounded in an objective reality knowable by reason?",
    options: [
      { label: "Yes", to: "r:Objectivism" },
      { label: "No — every cause above me is a spook", to: "r:Egoism (Stirnerite)" },
    ],
  },
  e13: {
    question: "Does the world's silence call for revolt rather than despair?",
    options: [
      { label: "Yes — live it without appeal", to: "r:Absurdism" },
      { label: "No — I am my choices and answerable for them", to: "r:Existentialism" },
    ],
  },
  e15: {
    question: "Can faith and reason be joined into one order?",
    options: [
      { label: "Yes", to: "q:e16" },
      { label: "No — it takes a leap", to: "r:Fideism" },
    ],
  },
  e16: {
    question: "Is that order legible in nature, as law written into what we are for?",
    options: [
      { label: "Yes", to: "r:Thomism" },
      { label: "No — the will must be healed before the mind sees", to: "r:Augustinianism" },
    ],
  },

  // ── Political philosophy ────────────────────────────────────
  p1: {
    question: "Can a state ever be legitimate?",
    options: [
      { label: "Yes", to: "q:p2" },
      { label: "No", to: "q:p10" },
    ],
  },
  p2: {
    question: "What comes first in politics?",
    options: [
      { label: "Rights that exist before any government", to: "q:p3" },
      { label: "Order and security", to: "r:Hobbesian absolutism" },
      { label: "The community that formed us", to: "q:p8" },
    ],
  },
  p3: {
    question: "Should the state do more than protect rights and enforce contracts?",
    options: [
      { label: "No", to: "q:p4" },
      { label: "Yes", to: "q:p6" },
    ],
  },
  p4: {
    question: "Should land and natural resources be the one thing taxed?",
    options: [
      { label: "Yes", to: "r:Georgism" },
      { label: "No", to: "q:p5" },
    ],
  },
  p5: {
    question: "Is the night-watchman state the outer limit of what can be justified?",
    options: [
      { label: "Yes", to: "r:Nozickian minarchism" },
      { label: "No — a limited constitutional state is fine", to: "r:Classical liberalism" },
    ],
  },
  p6: {
    question: "Are rules just only when every inequality helps the worst off?",
    options: [
      { label: "Yes", to: "r:Rawlsian liberalism" },
      { label: "No", to: "q:p7" },
    ],
  },
  p7: {
    question: "Is exploitation built into who owns the means of production?",
    options: [
      { label: "Yes", to: "r:Marxism" },
      { label: "No — freedom means nobody can dominate you", to: "r:Civic republicanism" },
    ],
  },
  p8: {
    question: "Is inherited tradition wiser than any reformer's blueprint?",
    options: [
      { label: "Yes", to: "q:p9" },
      { label: "No, but the unencumbered individual is a fiction", to: "r:Communitarianism" },
    ],
  },
  p9: {
    question: "Is modernity itself a fall away from a sacred order?",
    options: [
      { label: "Yes", to: "r:Traditionalism" },
      { label: "No — reform slowly and keep what works", to: "r:Burkean conservatism" },
    ],
  },
  p10: {
    question: "Is private property in land and capital legitimate?",
    options: [
      { label: "Yes", to: "q:p11" },
      { label: "Only possession through use", to: "r:Mutualism" },
    ],
  },
  p11: {
    question: "Is democracy itself the deeper problem?",
    options: [
      { label: "Yes — covenant communities instead", to: "r:Hoppeanism" },
      { label: "No — just abolish the coercive monopoly", to: "r:Rothbardianism" },
    ],
  },
};
