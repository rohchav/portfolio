import { useState } from "react";
import { ArrowDown, ArrowRight, Github } from "lucide-react";
import { Link } from "react-router-dom";
import { ImageLightbox } from "./ImageLightbox";

const currentCapabilities = [
    {
        title: "Runnable worlds",
        copy: "Seven production templates cover local-interaction agents, grids, spatial populations, and one bounded template-owned neural graph. The Explore catalog packages those runtimes into eleven world definitions.",
    },
    {
        title: "Investigation workflow",
        copy: "World supports setup, playback, model-state metrics, template-defined perturbations, bounded local experiments, run summaries, and side-by-side comparison.",
    },
    {
        title: "Reproducible artifacts",
        copy: "Seeded execution, validated scenario recipes, exact snapshot export and restore, bounded metric histories, and explicit intervention records keep runs inspectable.",
    },
    {
        title: "Bounded authoring & Atlas",
        copy: "Workshop can author and inspect structural schemas, but it does not compile them. Atlas has one in-memory Flocking parameter-space preview—not saved discovery or regime detection.",
    },
];

const architectureSteps = [
    { label: "Template + scenario", note: "Validated model recipe" },
    { label: "Run setup", note: "Parameters, seed, initial state" },
    { label: "Simulation runtime", note: "Ordered steps + seeded RNG" },
    { label: "Run state", note: "Clock, entities, metrics, events" },
    { label: "Projections", note: "Canvas frames + UI readouts" },
    { label: "Explore", note: "Experiments + comparison" },
];

const currentIdeas = [
    "Local interactions across mobile-agent, grid, population, and template-owned network models",
    "Seeded stochastic runs, varied initial conditions, and template-defined heterogeneity",
    "Controlled model perturbations and bounded parameter sweeps",
    "Run comparison with explicit configuration, metric, and interpretation limits",
];

const futureIdeas = [
    "True multi-scale execution with explicit aggregation, disaggregation, and cross-scale coupling",
    "Reusable continuous-field, reaction-diffusion, and adaptive or temporal network model families",
    "Persistent investigations built from canonical observations and provenance-bearing evidence",
    "Sensitivity, identifiability, regime analysis, and broader audited Worker execution",
];

const engineeringChallenges = [
    {
        title: "Determinism without hidden randomness",
        copy: "The engine owns system order, commands, modeled time, and named seeded RNG streams. Simulation code is statically checked against direct random-number calls.",
    },
    {
        title: "Runtime and interface separation",
        copy: "Production Flocking runs in a Worker and publishes bounded render packets and UI projections. The other six templates still use the documented main-thread path rather than a fictional universal runtime.",
    },
    {
        title: "Artifact and provenance boundaries",
        copy: "Scenarios, broad read views, exact snapshots, experiment outputs, and comparison summaries have different schemas and lifecycles so a convenient UI object is not mistaken for an exact run record.",
    },
    {
        title: "Validation and failure behavior",
        copy: "Zod guards imported and runtime-facing artifacts; focused Vitest suites, Playwright workflows, bounded storage, cancellation, and explicit Worker failure states test the paths around the engine.",
    },
];

export const OrtusCaseStudy = ({ project }) => {
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);

    return (
        <div className="min-h-screen px-4 py-20 text-foreground sm:py-24">
            <main className="container mx-auto max-w-5xl space-y-20">
                <header className="space-y-10">
                    <div className="flex flex-wrap items-center justify-between gap-4">
                        <Link
                            to="/"
                            className="border-2 border-foreground bg-card px-3 py-1 font-mono text-sm uppercase tracking-wide text-foreground shadow-[2px_2px_0_hsl(var(--foreground))] transition-transform duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5"
                        >
                            Back to Home
                        </Link>
                        <span className="border-2 border-foreground bg-primary px-3 py-1 font-mono text-xs uppercase tracking-wide text-primary-foreground shadow-[2px_2px_0_hsl(var(--foreground))]">
                            Flagship case study
                        </span>
                    </div>

                    <div className="grid grid-cols-1 items-end gap-8 lg:grid-cols-[0.78fr_1.22fr]">
                        <div className="text-left">
                            <p className="font-mono text-sm uppercase tracking-[0.2em] text-muted-foreground">
                                Modeling · Simulation · Scientific tooling
                            </p>
                            <h1 className="mt-3 text-5xl font-black tracking-[-0.055em] sm:text-6xl md:text-7xl">
                                ORTUS
                            </h1>
                            <p className="mt-5 text-xl font-semibold leading-snug md:text-2xl">
                                {project.subtitle}
                            </p>
                            <p className="mt-5 leading-relaxed text-muted-foreground">
                                A place to run, perturb, and compare exploratory models while keeping the
                                boundary between software behavior and real-world evidence visible.
                            </p>
                            <a
                                href={project.links.repo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="cosmic-button mt-7 inline-flex items-center gap-2"
                            >
                                <Github className="h-4 w-4" aria-hidden="true" />
                                View Repository
                            </a>
                        </div>

                        <figure className="gradient-border p-3 sm:p-4">
                            <button
                                type="button"
                                onClick={() => setIsLightboxOpen(true)}
                                className="block w-full cursor-zoom-in border-2 border-foreground bg-card"
                                style={{ aspectRatio: "1917 / 931" }}
                                aria-label="Open full ORTUS Flocking World screenshot"
                            >
                                <img
                                    src={project.image}
                                    alt={project.imageAlt}
                                    className="h-full w-full object-contain"
                                    loading="eager"
                                />
                            </button>
                            <figcaption className="px-1 pt-3 font-mono text-xs uppercase tracking-wide text-muted-foreground">
                                Flocking / Boids running in the current World interface
                            </figcaption>
                        </figure>
                    </div>
                </header>

                <section aria-labelledby="what-is-ortus" className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                    <div className="gradient-border p-6 text-left sm:p-8">
                        <p className="font-mono text-xs uppercase tracking-wide text-muted-foreground">A · Plain language</p>
                        <h2 id="what-is-ortus" className="mt-2 text-2xl font-black uppercase tracking-wide sm:text-3xl">
                            What is ORTUS?
                        </h2>
                        <p className="mt-5 leading-relaxed text-muted-foreground">
                            ORTUS is a browser-based environment for setting up and running exploratory
                            simulations. It brings the model, controls, live world, measurements, perturbations,
                            and comparison tools into one inspectable workflow.
                        </p>
                    </div>
                    <div className="gradient-border p-6 text-left sm:p-8">
                        <p className="font-mono text-xs uppercase tracking-wide text-muted-foreground">B · Motivation</p>
                        <h2 className="mt-2 text-2xl font-black uppercase tracking-wide sm:text-3xl">
                            The question behind it
                        </h2>
                        <p className="mt-5 text-lg font-semibold leading-relaxed">
                            How can people build, observe, perturb, and compare models whose larger patterns
                            develop from interacting parts?
                        </p>
                    </div>
                </section>

                <section aria-labelledby="current-ortus" className="space-y-8">
                    <div className="max-w-3xl text-left">
                        <p className="font-mono text-xs uppercase tracking-wide text-muted-foreground">C · Implemented</p>
                        <h2 id="current-ortus" className="mt-2 text-3xl font-black uppercase tracking-wide md:text-4xl">
                            What exists today
                        </h2>
                        <p className="mt-4 leading-relaxed text-muted-foreground">
                            These are current repository capabilities, not roadmap promises. Runnable behavior is
                            narrower than the surrounding structural services by design.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        {currentCapabilities.map((item) => (
                            <div key={item.title} className="gradient-border h-full p-6 text-left">
                                <h3 className="text-lg font-semibold uppercase tracking-wide">{item.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.copy}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section aria-labelledby="ortus-architecture" className="space-y-8">
                    <div className="max-w-3xl text-left">
                        <p className="font-mono text-xs uppercase tracking-wide text-muted-foreground">D · System design</p>
                        <h2 id="ortus-architecture" className="mt-2 text-3xl font-black uppercase tracking-wide md:text-4xl">
                            Architecture
                        </h2>
                        <p className="mt-4 leading-relaxed text-muted-foreground">
                            A portfolio-level view of the implemented path. Exact snapshots and research evidence
                            remain separate from the lightweight projections used to draw the interface.
                        </p>
                    </div>

                    <div className="gradient-border p-5 sm:p-7">
                        <ol className="flex flex-col items-stretch gap-3 lg:flex-row lg:items-center lg:gap-2">
                            {architectureSteps.map((step, index) => (
                                <li
                                    key={step.label}
                                    className="flex flex-col items-stretch gap-3 lg:min-w-0 lg:flex-1 lg:flex-row lg:items-center lg:gap-2"
                                >
                                    <div className="flex min-h-28 flex-1 flex-col justify-between border-2 border-foreground bg-card p-4 text-left">
                                        <span className="font-mono text-xs text-accent-ink">0{index + 1}</span>
                                        <div>
                                            <h3 className="text-sm font-bold uppercase tracking-wide">{step.label}</h3>
                                            <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{step.note}</p>
                                        </div>
                                    </div>
                                    {index < architectureSteps.length - 1 ? (
                                        <span className="flex justify-center" aria-hidden="true">
                                            <ArrowDown className="h-5 w-5 lg:hidden" />
                                            <ArrowRight className="hidden h-5 w-5 lg:block" />
                                        </span>
                                    ) : null}
                                </li>
                            ))}
                        </ol>
                    </div>
                </section>

                <section aria-labelledby="systems-ideas" className="space-y-8">
                    <div className="max-w-3xl text-left">
                        <p className="font-mono text-xs uppercase tracking-wide text-muted-foreground">E · Scope</p>
                        <h2 id="systems-ideas" className="mt-2 text-3xl font-black uppercase tracking-wide md:text-4xl">
                            Ideas in the product
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                        <div className="gradient-border p-6 text-left sm:p-8">
                            <span className="border-2 border-foreground bg-primary px-3 py-1 font-mono text-xs uppercase tracking-wide text-primary-foreground">
                                Implemented now
                            </span>
                            <ul className="mt-6 space-y-3 pl-5 text-sm leading-relaxed text-muted-foreground list-disc">
                                {currentIdeas.map((idea) => <li key={idea}>{idea}</li>)}
                            </ul>
                        </div>
                        <div className="gradient-border p-6 text-left sm:p-8">
                            <span className="border-2 border-foreground bg-card px-3 py-1 font-mono text-xs uppercase tracking-wide">
                                Planned directions
                            </span>
                            <ul className="mt-6 space-y-3 pl-5 text-sm leading-relaxed text-muted-foreground list-disc">
                                {futureIdeas.map((idea) => <li key={idea}>{idea}</li>)}
                            </ul>
                        </div>
                    </div>
                </section>

                <section aria-labelledby="scientific-honesty">
                    <div className="border-2 border-foreground border-l-[10px] border-l-accent-ink bg-card p-6 text-left shadow-[6px_6px_0_hsl(var(--foreground))] sm:p-10">
                        <p className="font-mono text-xs uppercase tracking-wide text-muted-foreground">F · Scientific principle</p>
                        <h2 id="scientific-honesty" className="mt-2 text-2xl font-black uppercase tracking-wide sm:text-3xl">
                            Model behavior is not world evidence
                        </h2>
                        <blockquote className="mt-6 max-w-4xl text-xl font-semibold leading-relaxed sm:text-2xl">
                            A pattern in a run is evidence about that model under that configuration. Connecting
                            it to a real system requires data, provenance, calibration, validation, alternatives,
                            and domain review.
                        </blockquote>
                    </div>
                </section>

                <section aria-labelledby="engineering-challenges" className="space-y-8">
                    <div className="max-w-3xl text-left">
                        <p className="font-mono text-xs uppercase tracking-wide text-muted-foreground">G · Engineering</p>
                        <h2 id="engineering-challenges" className="mt-2 text-3xl font-black uppercase tracking-wide md:text-4xl">
                            Challenges behind the interface
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        {engineeringChallenges.map((item) => (
                            <div key={item.title} className="gradient-border h-full p-6 text-left">
                                <h3 className="text-lg font-semibold uppercase tracking-wide">{item.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.copy}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section aria-labelledby="ortus-future" className="gradient-border p-6 text-left sm:p-10">
                    <p className="font-mono text-xs uppercase tracking-wide text-muted-foreground">H · Next questions</p>
                    <h2 id="ortus-future" className="mt-2 text-3xl font-black uppercase tracking-wide md:text-4xl">
                        Where it is going
                    </h2>
                    <p className="mt-5 max-w-3xl leading-relaxed text-muted-foreground">
                        The near-term work is to audit and harden the new Flocking runtime integration, then use
                        measured comprehension and performance to decide what earns deeper implementation.
                        Longer-term directions include reusable model families, stronger observation and evidence
                        workflows, richer network behavior, and genuine cross-scale modeling. Those remain future
                        work until their runtime, validation, and audit boundaries exist in code.
                    </p>
                    <div className="mt-8 flex flex-wrap gap-4">
                        <a
                            href={project.links.repo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="cosmic-button inline-flex items-center gap-2"
                        >
                            <Github className="h-4 w-4" aria-hidden="true" />
                            Inspect the Source
                        </a>
                        <Link
                            to="/"
                            className="border-2 border-foreground bg-card px-6 py-2 font-mono font-semibold uppercase tracking-widest text-foreground shadow-[4px_4px_0_hsl(var(--foreground))] transition-transform duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5"
                        >
                            Back to Portfolio
                        </Link>
                    </div>
                </section>
            </main>

            <ImageLightbox
                open={isLightboxOpen}
                src={project.image}
                alt={project.imageAlt}
                onClose={() => setIsLightboxOpen(false)}
            />
        </div>
    );
};
