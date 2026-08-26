import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
    { name: "Work", href: "#projects" },
    { name: "Playground", href: "#flock-playground" },
    { name: "About", href: "#about" },
    { name: "Trajectory", href: "#trajectory" },
    { name: "Toolkit", href: "#skills" },
    { name: "Contact", href: "#contact" },
];

export const NavBar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuButtonRef = useRef(null);
    const mobileMenuRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 10);
        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (!isMenuOpen) return undefined;

        const previousOverflow = document.body.style.overflow;
        const firstLink = mobileMenuRef.current?.querySelector("a");
        document.body.style.overflow = "hidden";
        firstLink?.focus();

        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                setIsMenuOpen(false);
                window.requestAnimationFrame(() => menuButtonRef.current?.focus());
                return;
            }

            if (event.key !== "Tab") return;

            const links = Array.from(mobileMenuRef.current?.querySelectorAll("a") ?? []);
            const focusable = [...links, menuButtonRef.current].filter(Boolean);
            const first = focusable[0];
            const last = focusable[focusable.length - 1];

            if (event.shiftKey && document.activeElement === first) {
                event.preventDefault();
                last?.focus();
            } else if (!event.shiftKey && document.activeElement === last) {
                event.preventDefault();
                first?.focus();
            }
        };

        document.addEventListener("keydown", handleKeyDown);
        return () => {
            document.body.style.overflow = previousOverflow;
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [isMenuOpen]);

    const navigateFromMobileMenu = (event, href) => {
        event.preventDefault();
        setIsMenuOpen(false);

        window.requestAnimationFrame(() => {
            const target = document.querySelector(href);
            if (!target) return;

            window.history.pushState(null, "", href);
            target.scrollIntoView({
                behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
                block: "start",
            });
        });
    };

    return (
        <nav
            aria-label="Primary navigation"
            className={cn(
                "fixed w-full z-40 transition-all duration-150 bg-background border-b-2 border-foreground",
                isScrolled ? "py-3 shadow-[4px_4px_0_hsl(var(--foreground))]" : "py-5"
            )}
        >
            <div className="container flex items-center justify-between gap-4">
                <a href="#hero" className="text-lg md:text-xl font-black uppercase tracking-widest text-foreground">
                    <span className="text-glow">Rohit Chavan</span>
                    <span className="hidden xl:inline font-mono text-xs ml-3 text-muted-foreground">Simulation + Software</span>
                </a>

                <div className="hidden lg:flex items-center">
                    <div className="flex space-x-2 xl:space-x-3">
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

                <div className="flex items-center gap-3 lg:hidden">
                    <ThemeToggle className="z-50" />
                    <button
                        ref={menuButtonRef}
                        type="button"
                        onClick={() => setIsMenuOpen((prev) => !prev)}
                        className="z-50 border-2 border-foreground bg-primary p-2 text-primary-foreground shadow-[2px_2px_0_hsl(var(--foreground))]"
                        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                        aria-expanded={isMenuOpen}
                        aria-controls="mobile-navigation"
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {isMenuOpen ? (
                    <div
                        id="mobile-navigation"
                        ref={mobileMenuRef}
                        className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-background px-6 lg:hidden"
                    >
                        <div className="flex w-full max-w-sm flex-col space-y-4 text-base">
                            {navItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="border-2 border-foreground bg-card px-4 py-2 font-mono uppercase tracking-widest text-foreground shadow-[3px_3px_0_hsl(var(--foreground))]"
                                    onClick={(event) => navigateFromMobileMenu(event, item.href)}
                                >
                                    {item.name}
                                </a>
                            ))}
                        </div>
                    </div>
                ) : null}
            </div>
        </nav>
    );
};
