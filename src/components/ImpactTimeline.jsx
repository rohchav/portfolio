const timelineItems = [
    {
        period: "2025 - Present",
        title: "CloudOps Workflow Integration",
        highlights: [
            "Built automated monitoring pipelines with Azure + Power Automate.",
            "Managed 5+ Jira sprints and 15+ user stories for reliable rollout.",
        ],
    },
    {
        period: "2025 - Present",
        title: "Plasma Parameter Estimation",
        highlights: [
            "Reduced duplication by 40% across four simulation modules.",
            "Resolved 75% of unit/integration failures to stabilize CI/CD.",
        ],
    },
    {
        period: "2024",
        title: "Autonomy Simulation Toolkit",
        highlights: [
            "Cut manual scene setup time by 90% with asset variation tooling.",
            "Unified 10+ tools into a single UI panel for stakeholders.",
        ],
    },
    {
        period: "2021 - 2024",
        title: "ML Research & Projects",
        highlights: [
            "Forecasted NFL outcomes at 80% accuracy using Random Forests.",
            "Built CNN classifiers and graph-compression research workflows.",
        ],
    },
];

export const ImpactTimeline = () => {
    return (
        <section id="impact" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-5xl font-black uppercase tracking-widest mb-12 text-center">
                    Impact <span className="text-primary">Timeline</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {timelineItems.map((item) => (
                        <div key={item.title} className="gradient-border p-6 text-left space-y-4">
                            <div className="flex items-center justify-between">
                                <span className="font-mono uppercase tracking-wide text-xs text-muted-foreground">
                                    {item.period}
                                </span>
                                <span className="px-2 py-1 border-2 border-foreground bg-primary text-foreground font-mono uppercase text-xs shadow-[2px_2px_0_hsl(var(--foreground))]">
                                    Impact
                                </span>
                            </div>
                            <h3 className="font-semibold uppercase tracking-wide text-lg">
                                {item.title}
                            </h3>
                            <ul className="text-sm text-muted-foreground space-y-2">
                                {item.highlights.map((highlight) => (
                                    <li key={highlight}>{highlight}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
