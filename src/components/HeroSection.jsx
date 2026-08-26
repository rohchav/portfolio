import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
    return (
        <section
            id="hero"
            className="relative min-h-screen flex flex-col items-center justify-center px-4"
        >
            <div className="container max-w-5xl mx-auto text-center z-10">
                <div className="space-y-7">
                    <p className="font-mono text-xs md:text-sm uppercase tracking-[0.28em] text-muted-foreground opacity-0 animate-fade-in">
                        Software Developer · Complex Systems · Simulation
                    </p>

                    <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tight leading-[0.95]">
                        <span className="opacity-0 animate-fade-in-delay-1">I build tools for</span>
                        <br />
                        <span className="text-gradient opacity-0 animate-fade-in-delay-2">
                            understanding complex systems
                        </span>
                    </h1>

                    <p className="text-base md:text-xl font-medium text-muted-foreground max-w-3xl mx-auto opacity-0 animate-fade-in-delay-3">
                        I design simulation engines, model-evaluation workflows, and interactive scientific
                        software that turn local rules, uncertainty, feedback, and data into reproducible
                        experiments and interpretable behavior.
                    </p>

                    <div className="pt-4 flex flex-wrap justify-center gap-4 opacity-0 animate-fade-in-delay-4">
                        <a href="#projects" className="cosmic-button">
                            Explore My Work
                        </a>
                        <a
                            href="https://github.com/rohchav/ORTUS"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-2 border-2 border-foreground bg-card text-foreground font-mono font-semibold uppercase tracking-widest shadow-[4px_4px_0_hsl(var(--foreground))] transition-transform duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5"
                        >
                            View ORTUS
                        </a>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce">
                <span className="text-xs font-mono uppercase tracking-widest text-foreground mb-2">
                    Scroll
                </span>
                <ArrowDown className="h-5 w-5 text-foreground" />
            </div>
        </section>
    );
};
