import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { allProjects } from "../data/projects";
import { ImageLightbox } from "./ImageLightbox";

export const ProjectsSection = () => {
    const [activeTag, setActiveTag] = useState("All");
    const [lightbox, setLightbox] = useState({ src: "", alt: "" });
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);

    const openLightbox = (src, alt) => {
        setLightbox({ src, alt });
        setIsLightboxOpen(true);
    };

    const closeLightbox = () => {
        setIsLightboxOpen(false);
    };

    const tags = useMemo(() => {
        const uniqueTags = new Set();
        allProjects.forEach((project) => {
            project.tags.forEach((tag) => uniqueTags.add(tag));
        });
        return ["All", ...Array.from(uniqueTags)];
    }, []);

    const filteredProjects = useMemo(() => {
        if (activeTag === "All") return allProjects;
        return allProjects.filter((project) => project.tags.includes(activeTag));
    }, [activeTag]);

    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-5xl font-black uppercase tracking-widest mb-12 text-center">
                    Featured <span className="text-primary">Projects</span>
                </h2>

                <div className="flex flex-wrap justify-center gap-3 mb-10">
                    {tags.map((tag) => (
                        <button
                            key={tag}
                            type="button"
                            onClick={() => setActiveTag(tag)}
                            className={
                                activeTag === tag
                                    ? "px-3 py-1 border-2 border-foreground bg-primary text-foreground font-mono uppercase tracking-wide text-xs shadow-[2px_2px_0_hsl(var(--foreground))]"
                                    : "px-3 py-1 border-2 border-foreground bg-card text-foreground font-mono uppercase tracking-wide text-xs shadow-[2px_2px_0_hsl(var(--foreground))] transition-transform duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5"
                            }
                        >
                            {tag}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {filteredProjects.map((project) => {
                        const primaryLink =
                            project.links.live ||
                            project.links.repo ||
                            project.links.external;
                        const primaryLabel = project.links.live
                            ? "Live Demo"
                            : project.links.repo
                            ? "View Repo"
                            : "Learn More";

                        return (
                            <div
                                key={project.title}
                                className="gradient-border p-6 card-hover text-left flex flex-col h-full"
                            >
                                <button
                                    type="button"
                                    onClick={() => openLightbox(project.image, project.imageAlt)}
                                    className="border-2 border-foreground bg-card aspect-video overflow-hidden block cursor-zoom-in"
                                    aria-label={`Open full image of ${project.title}`}
                                >
                                    <img
                                        src={project.image}
                                        alt={project.imageAlt}
                                        className="h-full w-full object-cover"
                                        loading="lazy"
                                    />
                                </button>
                                <h3 className="text-lg font-semibold mt-4">{project.title}</h3>
                                <p className="text-sm text-muted-foreground mt-2">
                                    {project.summary}
                                </p>

                                <div className="flex flex-wrap gap-2 mt-4">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-3 py-1 border-2 border-foreground bg-primary text-foreground font-mono uppercase tracking-wide text-xs shadow-[2px_2px_0_hsl(var(--foreground))]"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex flex-wrap gap-3 mt-auto pt-6">
                                    <Link
                                        to={project.links.caseStudy}
                                        className="px-3 py-1 border-2 border-foreground bg-card text-foreground font-mono uppercase tracking-wide text-sm shadow-[2px_2px_0_hsl(var(--foreground))] transition-transform duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5"
                                    >
                                        Case Study
                                    </Link>
                                    {primaryLink ? (
                                        <a
                                            href={primaryLink}
                                            className="px-3 py-1 border-2 border-foreground bg-primary text-foreground font-mono uppercase tracking-wide text-sm shadow-[2px_2px_0_hsl(var(--foreground))] transition-transform duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5"
                                            target={primaryLink.startsWith("http") ? "_blank" : undefined}
                                            rel={primaryLink.startsWith("http") ? "noopener noreferrer" : undefined}
                                        >
                                            {primaryLabel}
                                        </a>
                                    ) : null}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            <ImageLightbox
                open={isLightboxOpen}
                src={lightbox.src}
                alt={lightbox.alt}
                onClose={closeLightbox}
            />
        </section>
    );
};
