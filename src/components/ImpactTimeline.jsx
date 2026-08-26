const trajectoryItems = [
    {
        period: "2024",
        title: "Autonomy simulation tooling",
        description:
            "Built Unreal Engine and CARLA tools for reproducible environment variation, consolidating setup workflows for synthetic perception testing.",
    },
    {
        period: "2025",
        title: "Scientific & simulation software",
        description:
            "Worked on research-heavy simulation modules, molecular and biological prototypes, testing, performance, and technical interfaces.",
    },
    {
        period: "2025–2026",
        title: "ML systems & model evaluation",
        description:
            "Developed data and evaluation pipelines with time-aware validation, calibrated holdouts, dataset QA, and deployable model outputs.",
    },
    {
        period: "2026–Present",
        title: "ORTUS & interacting systems",
        description:
            "Building a browser environment for running, perturbing, and comparing exploratory models while keeping interpretation boundaries visible.",
    },
];

export const TrajectorySection = () => {
    return (
        <section id="trajectory" className="relative px-4 py-24">
            <div className="container mx-auto max-w-5xl">
                <div className="mb-12 text-center">
                    <p className="font-mono text-sm uppercase tracking-wide text-muted-foreground">
                        What I&apos;ve worked on
                    </p>
                    <h2 className="mt-2 text-3xl font-black uppercase tracking-widest md:text-5xl">
                        Trajectory
                    </h2>
                    <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                        A progression I can see in retrospect—from simulation infrastructure toward tools for
                        building and evaluating dynamic models.
                    </p>
                </div>

                <ol className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    {trajectoryItems.map((item, index) => (
                        <li key={item.title} className="gradient-border flex h-full gap-5 p-6 text-left">
                            <span
                                className="flex h-10 w-10 shrink-0 items-center justify-center border-2 border-foreground bg-primary font-mono text-sm font-bold text-primary-foreground"
                                aria-hidden="true"
                            >
                                {String(index + 1).padStart(2, "0")}
                            </span>
                            <div className="min-w-0">
                                <span className="font-mono text-xs uppercase tracking-wide text-muted-foreground">
                                    {item.period}
                                </span>
                                <h3 className="mt-2 text-lg font-semibold uppercase tracking-wide">
                                    {item.title}
                                </h3>
                                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                                    {item.description}
                                </p>
                            </div>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    );
};
