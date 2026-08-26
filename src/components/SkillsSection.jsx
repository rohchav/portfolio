import { SkillsMatrix } from "./SkillsMatrix";

export const SkillsSection = () => {
    return (
        <section id="skills" className="relative px-4 py-24">
            <div className="container mx-auto max-w-5xl">
                <div className="mb-12 text-center">
                    <p className="font-mono text-sm uppercase tracking-wide text-muted-foreground">
                        Supporting the work
                    </p>
                    <h2 className="mt-2 text-3xl font-black uppercase tracking-widest md:text-5xl">
                        Technical <span className="text-accent-ink">Toolkit</span>
                    </h2>
                </div>
                <SkillsMatrix />
            </div>
        </section>
    );
};
