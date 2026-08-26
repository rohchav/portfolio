import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { allProjects } from "../data/projects";
import { ImageLightbox } from "./ImageLightbox";

const SystemsPreview = ({ title }) => (
    <div className="aspect-video border-2 border-foreground bg-background p-5 overflow-hidden" aria-label={`${title} systems preview`}>
        <div className="h-full grid grid-cols-6 grid-rows-4 gap-2">
            {Array.from({ length: 24 }).map((_, index) => (
                <span
                    key={index}
                    className={
                        [2, 3, 8, 9, 10, 14, 15, 20].includes(index)
                            ? "border-2 border-foreground bg-primary"
                            : "border-2 border-foreground bg-card"
                    }
                />
            ))}
        </div>
    </div>
);

export const ProjectsSection = () => {
    const [activeTag, setActiveTag] = useState("All");
    const [lightbox, setLightbox] = useState({ src: "", alt: "" });
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);

    const openLightbox = (src, alt) => {
        if (!src) return;
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
                <div className="text-center mb-12">
                    <p className="font-mono uppercase tracking-wide text-sm text-muted-foreground">
                        Selected systems
                    </p>
                    <h2 className="text-3xl md:text-5xl font-black uppercase tracking-widest mt-2">
                        Featured <span className="text-primary">Projects</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
                        Projects connected by a common question: how do you represent a dynamic system,
                        test its behavior, and make the result understandable without hiding uncertainty?
                    </p>
                </div>

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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {filteredProjects.map((project) => {
                        const primaryLink = project.links.live || project.links.repo || project.links.external;
                        const primaryLabel = project.links.live
                            ? "Live Demo"
                            : project.links.repo
                            ? "View Repo"
                            : "Learn More";

                        return (
                            <article
                                key={project.title}
                                className={`gradient-border p-6 card-hover text-left flex flex-col h-full ${
                                    project.featured && activeTag === "All" ? "md:col-span-2" : ""
                                }`}
                            >
                                <div className={project.featured && activeTag === "All" ? "grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-6" : ""}>
                                    <div>
                                        {project.image ? (
                                            <button
                                                type="button"
                                                onClick={() => openLightbox(project.image, project.imageAlt)}
                                                className="border-2 border-foreground bg-card aspect-video overflow-hidden block cursor-zoom-in w-full"
                                                aria-label={`Open full image of ${project.title}`}
                                            >
                                                <img
                                                    src={project.image}
                                                    alt={project.imageAlt}
                                                    className="h-full w-full object-cover"
                                                    loading="lazy"
                                                />
                                            </button>
                                        ) : (
                                            <SystemsPreview title={project.title} />
                                        )}
                                    </div>

                                    <div className="flex flex-col h-full">
                                        <div className="flex items-center gap-3 mt-4 md:mt-0">
                                            <h3 className="text-xl font-bold uppercase tracking-wide">{project.title}</h3>
                                            {project.featured ? (
                                                <span className="px-2 py-1 border-2 border-foreground bg-primary font-mono uppercase text-[10px] shadow-[2px_2px_0_hsl(var(--foreground))]">
                                                    Flagship
                                                </span>
                                            ) : null}
                                        </div>
                                        <p className="text-sm text-muted-foreground mt-3">{project.summary}</p>

                                        <div className="flex flex-wrap gap-2 mt-4">
                                            {project.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="px-3 py-1 border-2 border-foreground bg-card text-foreground font-mono uppercase tracking-wide text-xs"
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
                                </div>
                            </article>
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
