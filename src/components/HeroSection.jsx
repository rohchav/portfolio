import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
    return (
        <section
            id="hero"
            className="relative flex min-h-[92svh] flex-col items-center justify-center px-4 pb-16 pt-32"
        >
            <div className="container z-10 mx-auto max-w-5xl text-left">
                <div className="max-w-4xl space-y-7">
                    <p className="font-mono text-xs uppercase tracking-[0.28em] text-muted-foreground opacity-0 animate-fade-in md:text-sm">
                        Software developer · Scientific &amp; computational tools
                    </p>

                    <h1 className="text-5xl font-black tracking-[-0.055em] leading-[0.9] opacity-0 animate-fade-in-delay-1 sm:text-6xl md:text-8xl">
                        Rohit Chavan
                    </h1>

                    <h2 className="max-w-4xl text-2xl font-bold leading-tight opacity-0 animate-fade-in-delay-2 sm:text-3xl md:text-5xl">
                        Software developer working across simulation, modeling, and machine learning.
                    </h2>

                    <p className="max-w-3xl text-base font-medium leading-relaxed text-muted-foreground opacity-0 animate-fade-in-delay-3 md:text-xl">
                        I&apos;m especially interested in complex systems—how local interactions, uncertainty,
                        feedback, and changing environments produce larger-scale behavior—and in building
                        software that makes those dynamics easier to explore.
                    </p>

                    <div className="flex flex-wrap gap-4 pt-4 opacity-0 animate-fade-in-delay-4">
                        <a href="#projects" className="cosmic-button">
                            View Featured Work
                        </a>
                        <a
                            href="https://github.com/rohchav/ORTUS"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="border-2 border-foreground bg-card px-6 py-2 font-mono font-semibold uppercase tracking-widest text-foreground shadow-[4px_4px_0_hsl(var(--foreground))] transition-transform duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5"
                        >
                            View ORTUS
                        </a>
                    </div>
                </div>
            </div>

            <a
                href="#projects"
                className="mt-14 flex flex-col items-center font-mono text-xs uppercase tracking-widest text-muted-foreground"
                aria-label="Scroll to featured work"
            >
                Work
                <ArrowDown className="mt-2 h-5 w-5" aria-hidden="true" />
            </a>
        </section>
    );
};
