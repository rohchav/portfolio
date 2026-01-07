const MAX_LEVEL = 4;

const skillMatrix = [
    {
        group: "Languages",
        skills: [
            { name: "C++", level: 4 },
            { name: "Python", level: 4 },
            { name: "JavaScript/TypeScript", level: 3 },
            { name: "SQL", level: 3 },
        ],
    },
    {
        group: "ML & Data",
        skills: [
            { name: "scikit-learn", level: 4 },
            { name: "TensorFlow", level: 3 },
            { name: "PyTorch", level: 3 },
            { name: "Pandas/NumPy", level: 4 },
        ],
    },
    {
        group: "Cloud & Tooling",
        skills: [
            { name: "Azure", level: 3 },
            { name: "Docker", level: 3 },
            { name: "Linux", level: 4 },
            { name: "CI/CD", level: 3 },
        ],
    },
];

export const SkillsMatrix = () => {
    return (
        <div className="gradient-border p-6 text-left space-y-6">
            <div className="flex items-center justify-between">
                <h3 className="font-semibold uppercase tracking-wide text-lg">
                    Skills Matrix
                </h3>
                <span className="font-mono uppercase text-xs text-muted-foreground">
                    Depth Snapshot
                </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {skillMatrix.map((group) => (
                    <div key={group.group} className="space-y-3">
                        <h4 className="font-semibold uppercase tracking-wide text-sm">
                            {group.group}
                        </h4>
                        <div className="space-y-3">
                            {group.skills.map((skill) => (
                                <div key={skill.name} className="space-y-2">
                                    <div className="flex items-center justify-between text-sm">
                                        <span className="font-mono">{skill.name}</span>
                                        <span className="text-xs text-muted-foreground">
                                            {skill.level}/{MAX_LEVEL}
                                        </span>
                                    </div>
                                    <div className="flex gap-1">
                                        {Array.from({ length: MAX_LEVEL }).map((_, index) => (
                                            <span
                                                key={`${skill.name}-${index}`}
                                                className={
                                                    index < skill.level
                                                        ? "h-2 flex-1 bg-primary border-2 border-foreground"
                                                        : "h-2 flex-1 bg-card border-2 border-foreground"
                                                }
                                            />
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
