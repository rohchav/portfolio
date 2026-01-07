import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { allProjects } from "../data/projects";
import { ImageLightbox } from "../components/ImageLightbox";
import { NotFound } from "./NotFound";

const buildLinks = (links) => {
    const items = [];
    if (links.live) items.push({ label: "Live Demo", href: links.live });
    if (links.repo) items.push({ label: "GitHub Repo", href: links.repo });
    if (links.external) items.push({ label: "Project Page", href: links.external });
    return items;
};

export const ProjectCaseStudy = () => {
    const { slug } = useParams();
    const project = allProjects.find((item) => item.slug === slug);
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);

    if (!project) {
        return <NotFound />;
    }

    const links = buildLinks(project.links);

    return (
        <div className="min-h-screen text-foreground px-4 py-24">
            <div className="container mx-auto max-w-5xl space-y-12">
                <div className="flex flex-wrap items-center justify-between gap-4">
                    <Link
                        to="/"
                        className="px-3 py-1 border-2 border-foreground bg-card text-foreground font-mono uppercase tracking-wide text-sm shadow-[2px_2px_0_hsl(var(--foreground))] transition-transform duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5"
                    >
                        Back to Home
                    </Link>
                    <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                            <span
                                key={tag}
                                className="px-3 py-1 border-2 border-foreground bg-primary text-foreground font-mono uppercase tracking-wide text-xs shadow-[2px_2px_0_hsl(var(--foreground))]"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8">
                    <div className="space-y-6">
                        <div>
                            <p className="font-mono uppercase tracking-wide text-sm text-muted-foreground">
                                Case Study
                            </p>
                            <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tight mt-2">
                                {project.title}
                            </h1>
                            <p className="text-lg text-muted-foreground mt-4">
                                {project.subtitle}
                            </p>
                        </div>

                        <p className="text-muted-foreground">{project.summary}</p>

                        <div className="flex flex-wrap gap-3">
                            {links.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    className="px-4 py-2 border-2 border-foreground bg-primary text-foreground font-mono uppercase tracking-wide text-sm shadow-[3px_3px_0_hsl(var(--foreground))] transition-transform duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5"
                                    target={link.href.startsWith("http") ? "_blank" : undefined}
                                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="gradient-border p-6 space-y-4">
                        <div className="border-2 border-foreground bg-background p-4 space-y-3">
                            <p className="font-mono uppercase text-xs text-muted-foreground">
                                Demo Preview
                            </p>
                            <button
                                type="button"
                                onClick={() => setIsLightboxOpen(true)}
                                className="aspect-video border-2 border-foreground bg-card overflow-hidden block cursor-zoom-in"
                                aria-label={`Open full image of ${project.title}`}
                            >
                                <img
                                    src={project.image}
                                    alt={project.imageAlt}
                                    className="h-full w-full object-cover"
                                    loading="eager"
                                />
                            </button>
                            {links.length ? (
                                <div className="flex flex-wrap gap-2">
                                    {links.slice(0, 1).map((link) => (
                                        <a
                                            key={link.href}
                                            href={link.href}
                                            className="px-3 py-1 border-2 border-foreground bg-primary text-foreground font-mono uppercase tracking-wide text-xs shadow-[2px_2px_0_hsl(var(--foreground))] transition-transform duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5"
                                            target={link.href.startsWith("http") ? "_blank" : undefined}
                                            rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                                        >
                                            {link.label}
                                        </a>
                                    ))}
                                </div>
                            ) : null}
                        </div>

                        <div className="border-2 border-foreground bg-card p-4 text-left space-y-2">
                            <p className="font-mono uppercase text-xs text-muted-foreground">
                                Featured Metrics
                            </p>
                            <div className="space-y-2">
                                {project.metrics.map((metric) => (
                                    <div key={metric.label} className="flex items-center justify-between">
                                        <span className="text-sm font-semibold uppercase tracking-wide">
                                            {metric.label}
                                        </span>
                                        <span className="text-sm font-mono">{metric.value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="border-2 border-foreground bg-primary p-4 text-left">
                            <p className="font-mono uppercase text-xs text-foreground">
                                Tools Used
                            </p>
                            <p className="text-sm text-foreground mt-2">
                                {project.stack.join(", ")}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="gradient-border p-6 text-left space-y-3">
                        <h2 className="font-semibold uppercase tracking-wide text-lg">Problem</h2>
                        <ul className="text-sm text-muted-foreground space-y-2">
                            {project.problem.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="gradient-border p-6 text-left space-y-3">
                        <h2 className="font-semibold uppercase tracking-wide text-lg">Approach</h2>
                        <ul className="text-sm text-muted-foreground space-y-2">
                            {project.approach.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="gradient-border p-6 text-left space-y-3">
                        <h2 className="font-semibold uppercase tracking-wide text-lg">Impact</h2>
                        <ul className="text-sm text-muted-foreground space-y-2">
                            {project.impact.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <ImageLightbox
                open={isLightboxOpen}
                src={project.image}
                alt={project.imageAlt}
                onClose={() => setIsLightboxOpen(false)}
            />
        </div>
    );
};
