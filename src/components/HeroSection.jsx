import { ArrowDown } from "lucide-react";


export const HeroSection = () => {
    return (
    <section 
        id="hero" 
        className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
        <div className="container max-w-4xl mx-auto text-center z-10">
            <div className="space-y-6">
                <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tight">
                    <span className="opacity-0 animate-fade-in">Hi, I&apos;m</span>
                    <span className="text-primary opacity-0 animate-fade-in-delay-1"> Rohit</span>
                    <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2"> Chavan</span>
                </h1>

                <p className="text-base md:text-lg font-medium text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
                    I build production-grade software and ML systems that improve reliability and
                    developer velocity. Experienced across C++, Python, and JavaScript/TypeScript
                    with cloud deployments on Azure.
                </p>

                <div className="pt-4 opacity-0 animate-fade-in-delay-4">
                    <a href="#projects" className="cosmic-button">
                        View My Work
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
}
