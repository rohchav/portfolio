import { Briefcase, Code, LineChart } from "lucide-react";

const resumeUrl = `${import.meta.env.BASE_URL}RC_Resume.docx`;

export const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-5xl font-black uppercase tracking-widest mb-12 text-center">
                    About <span className="text-primary"> Me</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-bold">
                            Aspiring Software Engineer & ML Builder
                        </h3>

                        <p className="text-muted-foreground">
                            I build production-grade systems and full-stack applications with
                            C++, Python, and JavaScript/TypeScript, owning architecture, TDD,
                            CI/CD, and cloud deployments on Azure.
                        </p>

                        <p className="text-muted-foreground">
                            My work spans ML and simulation, from MCMC graph compression and
                            forecasting models to perception pipelines and physics-based tools.
                            I focus on automation that improves reliability, uptime, and
                            developer velocity.
                        </p>

                         <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
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
                                    <LineChart className="h-6 w-6 text-foreground" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg uppercase tracking-wide"> Machine Learning & Data </h4>
                                    <p className="text-muted-foreground">
                                        Forecasting, classification, and experimentation with
                                        scikit-learn, TensorFlow, PyTorch, Pandas, and SQL.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 border-2 border-foreground bg-primary">
                                    <Code className="h-6 w-6 text-foreground" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg uppercase tracking-wide"> Software Development </h4>
                                    <p className="text-muted-foreground">
                                        C++/Python/JS systems with test-driven development,
                                        CI/CD pipelines, and performance-focused refactors.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                             <div className="flex items-start gap-4">
                                <div className="p-3 border-2 border-foreground bg-primary">
                                    <Briefcase className="h-6 w-6 text-foreground" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg uppercase tracking-wide"> Cloud & Automation </h4>
                                    <p className="text-muted-foreground">
                                        Azure + Power Automate workflows, Dockerized services,
                                        Linux tooling, and cross-team delivery.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
