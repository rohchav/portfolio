import { Moon, Sun } from "lucide-react"; 
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils"

export const ThemeToggle = ({ className = "" }) => {
    const [isDarkMode, setIsDarkMode] = useState(true);

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme === "dark") {
            setIsDarkMode(true);
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
            setIsDarkMode(false);
        }
    }, []);

    const toggleTheme = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
            setIsDarkMode(false);
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
            setIsDarkMode(true);
        }
    };

    return (
        <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className={cn(
                "inline-flex items-center justify-center shrink-0 p-2 border-2 border-foreground bg-primary text-foreground shadow-[2px_2px_0_hsl(var(--foreground))] transition-transform duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5",
                "focus:outline-none",
                className
            )}
        >
            {isDarkMode ? (
                <Sun className="h-6 w-6 text-foreground" />
            ) : (
                <Moon className="h-6 w-6 text-foreground" />
            )}
        </button>
    )
}
