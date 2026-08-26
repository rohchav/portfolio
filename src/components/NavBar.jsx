import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
    { name: "Lab", href: "#lab" },
    { name: "About", href: "#about" },
    { name: "Focus", href: "#impact" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
];

export const NavBar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 10);
        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed w-full z-40 transition-all duration-150 bg-background border-b-2 border-foreground",
                isScrolled ? "py-3 shadow-[4px_4px_0_hsl(var(--foreground))]" : "py-5"
            )}
        >
            <div className="container flex items-center justify-between gap-4">
                <a href="#hero" className="text-lg md:text-xl font-black uppercase tracking-widest text-foreground">
                    <span className="text-glow">Rohit Chavan</span>
                    <span className="hidden lg:inline font-mono text-xs ml-3 text-muted-foreground">Complex Systems + Software</span>
                </a>

                <div className="hidden md:flex items-center">
                    <div className="flex space-x-3 lg:space-x-5">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="px-3 py-1 border-2 border-foreground bg-card text-foreground font-mono text-xs uppercase tracking-widest shadow-[2px_2px_0_hsl(var(--foreground))] transition-transform duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5"
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                    <ThemeToggle className="ml-5" />
                </div>

                <div className="flex items-center gap-3 md:hidden">
                    <ThemeToggle className="z-50" />
                    <button
                        onClick={() => setIsMenuOpen((prev) => !prev)}
                        className="p-2 border-2 border-foreground bg-primary text-foreground z-50 shadow-[2px_2px_0_hsl(var(--foreground))]"
                        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                        aria-expanded={isMenuOpen}
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                <div
                    className={cn(
                        "fixed inset-0 bg-background z-40 flex flex-col items-center justify-center transition-all duration-150 md:hidden",
                        isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                    )}
                >
                    <div className="flex flex-col space-y-6 text-lg">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="px-4 py-2 border-2 border-foreground bg-card text-foreground font-mono uppercase tracking-widest shadow-[3px_3px_0_hsl(var(--foreground))]"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
};
