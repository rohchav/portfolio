const toolkit = [
    {
        group: "Modeling",
        skills: ["Agent-based modeling", "Seeded simulation", "Networks & graphs", "Uncertainty", "Experiment design"],
    },
    {
        group: "Engineering",
        skills: ["Python", "C++", "TypeScript", "React / Next.js", "PostgreSQL", "Docker", "Linux"],
    },
    {
        group: "ML / Evaluation",
        skills: ["Pandas / NumPy", "scikit-learn", "LightGBM", "JAX", "MLflow", "Vitest / Playwright"],
    },
];

export const SkillsMatrix = () => {
    return (
        <div className="gradient-border space-y-6 p-6 text-left sm:p-8">
            <div className="flex flex-wrap items-center justify-between gap-3">
                <h3 className="font-semibold uppercase tracking-wide text-lg">Working Toolkit</h3>
                <span className="font-mono uppercase text-xs text-muted-foreground">
                    Tools used across current projects
                </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {toolkit.map((group) => (
                    <div key={group.group} className="space-y-3">
                        <h4 className="font-semibold uppercase tracking-wide text-sm">{group.group}</h4>
                        <div className="flex flex-wrap gap-2">
                            {group.skills.map((skill) => (
                                <span
                                    key={skill}
                                    className="px-3 py-2 border-2 border-foreground bg-card font-mono text-xs shadow-[2px_2px_0_hsl(var(--foreground))]"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
