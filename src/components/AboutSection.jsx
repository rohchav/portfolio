const resumeUrl = `${import.meta.env.BASE_URL}Rohit%20Chavan%20Resume.docx`;

export const AboutSection = () => {
    return (
        <section id="about" className="relative px-4 py-24">
            <div className="container mx-auto max-w-5xl">
                <div className="gradient-border p-6 text-left sm:p-10 md:p-12">
                    <p className="font-mono text-sm uppercase tracking-wide text-muted-foreground">
                        About · Current focus
                    </p>
                    <h2 className="mt-3 max-w-4xl text-3xl font-black tracking-tight sm:text-4xl md:text-5xl">
                        I build software for working with dynamic systems.
                    </h2>

                    <div className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg">
                        <p>
                            My experience spans simulation platforms, model-evaluation pipelines, scientific
                            computing, automation, and interactive technical products. I care about modular
                            architecture, reproducible workflows, careful validation, and interfaces that make
                            technical behavior easier to inspect.
                        </p>
                        <p>
                            Recently, I&apos;ve been developing ORTUS and exploring how software can help people
                            build, perturb, and compare models of interacting systems. My other projects range
                            from biological visualization to time-aware sports prediction and autonomy tooling;
                            the connecting thread is an interest in representing change clearly and testing it
                            honestly.
                        </p>
                    </div>

                    <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                        <a href="#contact" className="cosmic-button text-center">
                            Get In Touch
                        </a>
                        <a
                            href={resumeUrl}
                            download="Rohit_Chavan_Resume.docx"
                            className="border-2 border-foreground bg-card px-6 py-2 text-center font-mono font-semibold uppercase tracking-widest text-foreground shadow-[4px_4px_0_hsl(var(--foreground))] transition-transform duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5"
                        >
                            Download Resume
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};
