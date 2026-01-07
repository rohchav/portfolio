import { Cloud, Code, LineChart } from "lucide-react";
import { SkillsMatrix } from "./SkillsMatrix";

const skillAreas = [
    {
        title: "Software Engineering",
        description: "Production-ready systems with strong architecture and testing.",
        items: ["C++, Python, JavaScript/TypeScript", "TDD, CI/CD, and refactoring", "Performance + reliability focus"],
        icon: Code,
    },
    {
        title: "Data & Machine Learning",
        description: "Modeling, experimentation, and analytics at scale.",
        items: ["Pandas, NumPy, scikit-learn, SQL", "TensorFlow, PyTorch, JAX", "MLflow + evaluation workflows"],
        icon: LineChart,
    },
    {
        title: "Cloud & Tooling",
        description: "Automation and deployment across modern cloud stacks.",
        items: ["Azure + Power Automate", "Docker, Linux, Git", "AWS/GCP exposure, Jira"],
        icon: Cloud,
    },
];

export const SkillsSection = () => {
    return (
        <section id="skills" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-5xl font-black uppercase tracking-widest mb-12 text-center">
                    Skills <span className="text-primary"> & Expertise</span>
                </h2>

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
                                        <h3 className="font-semibold text-lg uppercase tracking-wide">
                                            {area.title}
                                        </h3>
                                        <p className="text-sm text-muted-foreground mt-2">
                                            {area.description}
                                        </p>
                                        <ul className="mt-4 space-y-1 text-sm text-muted-foreground list-disc list-inside">
                                            {area.items.map((item) => (
                                                <li key={item}>{item}</li>
                                            ))}
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
