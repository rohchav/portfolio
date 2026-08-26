const timelineItems = [
    {
        period: "2026 - Present",
        title: "ORTUS · Complex Systems Modeling",
        highlights: [
            "Building a deterministic browser simulation sandbox for agent interactions, networks, uncertainty, interventions, and experiments.",
            "Developing World, Workshop, Lab, and Atlas workflows around model exploration while keeping model-vs-world evidence boundaries explicit.",
        ],
    },
    {
        period: "2025 - Present",
        title: "Simulation & Scientific Software",
        highlights: [
            "Worked across simulation infrastructure, computational tooling, and model-facing interfaces in Python, C++, React, and TypeScript.",
            "Focused on reproducibility, testing, performance, and the translation of technical models into usable workflows.",
        ],
    },
    {
        period: "2025 - 2026",
        title: "Data-Driven Modeling",
        highlights: [
            "Built a time-aware NBA prediction pipeline spanning 23K+ games and 18 seasons with calibrated holdout evaluation.",
            "Used model evaluation as a design constraint: leakage prevention, probability quality, uncertainty, and reproducible feature generation.",
        ],
    },
    {
        period: "2024",
        title: "Autonomy Simulation Toolkit",
        highlights: [
            "Built probabilistic Unreal Engine + CARLA environment-variation tooling for synthetic testing workflows.",
            "Reduced manual simulation setup time by 90% and added reusable configuration persistence.",
        ],
    },
];

export const ImpactTimeline = () => {
    return (
        <section id="impact" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <div className="text-center mb-12">
                    <p className="font-mono uppercase tracking-wide text-sm text-muted-foreground">Trajectory</p>
                    <h2 className="text-3xl md:text-5xl font-black uppercase tracking-widest mt-2">
                        Current <span className="text-primary">Focus</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {timelineItems.map((item) => (
                        <div key={item.title} className="gradient-border p-6 text-left space-y-4">
                            <span className="font-mono uppercase tracking-wide text-xs text-muted-foreground">
                                {item.period}
                            </span>
                            <h3 className="font-semibold uppercase tracking-wide text-lg">{item.title}</h3>
                            <ul className="text-sm text-muted-foreground space-y-2 list-disc pl-5">
                                {item.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
