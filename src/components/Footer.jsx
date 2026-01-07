export const Footer = () => {
    return (
        <footer className="py-10 px-4 border-t-2 border-foreground bg-card">
            <div className="container mx-auto max-w-5xl text-center space-y-2">
                <p className="text-sm text-muted-foreground font-mono uppercase tracking-wide">
                    (c) {new Date().getFullYear()} Rohit Chavan. All rights reserved.
                </p>
                <p className="text-xs text-muted-foreground font-mono uppercase tracking-wide">
                    Built with React, Vite, and Tailwind CSS.
                </p>
            </div>
        </footer>
    );
};
