import { BrainCircuit, Code2, Network } from "lucide-react";
import { SkillsMatrix } from "./SkillsMatrix";

const skillAreas = [
    {
        title: "Complex Systems & Simulation",
        description: "Modeling interacting systems and the behavior that emerges from them.",
        items: [
            "Agent-based models, networks, stochasticity",
            "Feedback, interventions, parameter sweeps",
            "Multi-scale and regime-oriented modeling",
        ],
        icon: Network,
    },
    {
        title: "Scientific Software Engineering",
        description: "Building reproducible, inspectable tools around computational models.",
        items: [
            "Python, C++, TypeScript/JavaScript",
            "React, Next.js, APIs, data pipelines",
            "Testing, CI/CD, performance, accessibility",
        ],
        icon: Code2,
    },
    {
        title: "Model Evaluation & ML",
        description: "Testing models without confusing predictive performance with explanation.",
        items: [
            "Pandas, NumPy, scikit-learn, SQL",
            "LightGBM, PyTorch, TensorFlow, JAX",
            "Time-aware validation, calibration, uncertainty",
        ],
        icon: BrainCircuit,
    },
];

export const SkillsSection = () => {
    return (
        <section id="skills" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <div className="text-center mb-12">
                    <p className="font-mono uppercase tracking-wide text-sm text-muted-foreground">
                        Technical practice
                    </p>
                    <h2 className="text-3xl md:text-5xl font-black uppercase tracking-widest mt-2">
                        Skills <span className="text-primary">& Expertise</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {skillAreas.map((area) => {
                        const Icon = area.icon;
                        return (
                            <div key={area.title} className="gradient-border p-6 card-hover text-left">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 border-2 border-foreground bg-primary">
                                        <Icon className="h-6 w-6 text-foreground" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg uppercase tracking-wide">{area.title}</h3>
                                        <p className="text-sm text-muted-foreground mt-2">{area.description}</p>
                                        <ul className="mt-4 space-y-2 text-sm text-muted-foreground list-disc pl-5">
                                            {area.items.map((item) => <li key={item}>{item}</li>)}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="mt-10">
                    <SkillsMatrix />
                </div>
            </div>
        </section>
    );
};
