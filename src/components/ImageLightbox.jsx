import { useEffect } from "react";
import { X } from "lucide-react";

export const ImageLightbox = ({ open, src, alt, onClose }) => {
    useEffect(() => {
        if (!open) return undefined;

        const handleKey = (event) => {
            if (event.key === "Escape") {
                onClose();
            }
        };

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        document.addEventListener("keydown", handleKey);

        return () => {
            document.body.style.overflow = previousOverflow;
            document.removeEventListener("keydown", handleKey);
        };
    }, [open, onClose]);

    if (!open || !src) return null;

    return (
        <div
            className="fixed inset-0 z-[60] bg-background/90 flex items-center justify-center p-4"
            role="dialog"
            aria-modal="true"
            aria-label="Image preview"
            onClick={onClose}
        >
            <div
                className="relative border-2 border-foreground bg-card shadow-[6px_6px_0_hsl(var(--foreground))] max-w-5xl w-full"
                onClick={(event) => event.stopPropagation()}
            >
                <button
                    type="button"
                    onClick={onClose}
                    className="absolute -top-4 -right-4 border-2 border-foreground bg-primary text-foreground p-2 shadow-[3px_3px_0_hsl(var(--foreground))] transition-transform duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5"
                    aria-label="Close image"
                >
                    <X className="h-4 w-4" />
                </button>
                <img
                    src={src}
                    alt={alt || "Project screenshot"}
                    className="w-full max-h-[80vh] object-contain"
                />
            </div>
        </div>
    );
};
