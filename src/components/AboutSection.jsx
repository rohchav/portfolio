import { BrainCircuit, Code2, Network } from "lucide-react";

const resumeUrl = `${import.meta.env.BASE_URL}RC_Resume.docx`;

export const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-5xl font-black uppercase tracking-widest mb-12 text-center">
                    About <span className="text-primary">Me</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                    <div className="space-y-6 text-left">
                        <p className="font-mono uppercase tracking-wide text-sm text-muted-foreground">
                            Current focus
                        </p>
                        <h3 className="text-2xl md:text-3xl font-bold">
                            Software developer focused on complex systems, simulation, and model-centered tools.
                        </h3>

                        <p className="text-muted-foreground">
                            My work sits between software engineering and computational modeling. I build systems
                            that make dynamic behavior inspectable: agent-based simulations, experiment pipelines,
                            model evaluation, interactive visualizations, and the infrastructure needed to run them
                            reliably.
                        </p>

                        <p className="text-muted-foreground">
                            My main project is ORTUS, a browser-based complex-systems sandbox for exploring how
                            interacting mechanisms, constraints, feedback, stochasticity, adaptation, and history
                            produce system-level behavior. Across my other projects, the same theme keeps showing up:
                            represent a system well, test it honestly, and build an interface that helps people reason
                            about what the model is actually saying.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <a href="#contact" className="cosmic-button">
                                Get In Touch
                            </a>
                            <a
                                href={resumeUrl}
                                download="Rohit_Chavan_Resume.docx"
                                className="px-6 py-2 border-2 border-foreground bg-card text-foreground font-mono font-semibold uppercase tracking-widest shadow-[4px_4px_0_hsl(var(--foreground))] transition-transform duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5"
                            >
                                Download Resume
                            </a>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 border-2 border-foreground bg-primary">
                                    <Network className="h-6 w-6 text-foreground" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg uppercase tracking-wide">Complex Systems & Simulation</h4>
                                    <p className="text-muted-foreground mt-2">
                                        Agent-based models, networks, stochastic processes, emergence, feedback,
                                        interventions, parameter sweeps, and multi-scale modeling.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 border-2 border-foreground bg-primary">
                                    <BrainCircuit className="h-6 w-6 text-foreground" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg uppercase tracking-wide">Model Evaluation & Data</h4>
                                    <p className="text-muted-foreground mt-2">
                                        Reproducible experiments, uncertainty, calibration, holdout evaluation,
                                        feature pipelines, and evidence-aware interpretation.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 border-2 border-foreground bg-primary">
                                    <Code2 className="h-6 w-6 text-foreground" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg uppercase tracking-wide">Software Engineering</h4>
                                    <p className="text-muted-foreground mt-2">
                                        Python, C++, TypeScript/JavaScript, React, testing, CI/CD, performance work,
                                        APIs, cloud tooling, and production-oriented architecture.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
