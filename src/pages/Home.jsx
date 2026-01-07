import { AnimatedForestBackground } from "../components/AnimatedForestBackground";
import { NavBar } from "../components/NavBar";
import { HeroSection } from "../components/HeroSection";
import { InteractiveLab } from "../components/InteractiveLab";
import { AboutSection } from "../components/AboutSection";
import { ImpactTimeline } from "../components/ImpactTimeline";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";

export const Home = () => {
    return (
        <div className="min-h-screen text-foreground overflow-x-hidden relative">
            <AnimatedForestBackground />
            <div className="relative z-10">
                {/* NavBar */}
                <NavBar />
                {/* Main Content */}
                <main>
                    <HeroSection />
                    <InteractiveLab />
                    <AboutSection />
                    <ImpactTimeline />
                    <SkillsSection />
                    <ProjectsSection />
                    <ContactSection />
                </main>

                {/* Footer */}
                <Footer />
            </div>
        </div>
    );
};
