import { Github, Linkedin, Mail, Phone } from "lucide-react";

const contactLinks = [
    {
        label: "Email",
        value: "roh.chavan11@gmail.com",
        href: "mailto:roh.chavan11@gmail.com",
        icon: Mail,
    },
    {
        label: "Phone",
        value: "(346) 386-6949",
        href: "tel:+13463866949",
        icon: Phone,
    },
    {
        label: "LinkedIn",
        value: "linkedin.com/in/rohchav",
        href: "https://www.linkedin.com/in/rohchav/",
        icon: Linkedin,
    },
    {
        label: "GitHub",
        value: "github.com/rohchav",
        href: "https://github.com/rohchav",
        icon: Github,
    },
];

export const ContactSection = () => {
    return (
        <section id="contact" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-5xl font-black uppercase tracking-widest mb-4 text-center">
                    Let&apos;s <span className="text-primary">Connect</span>
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto text-center mb-12 font-medium">
                    Interested in collaborating or learning more about my work? Reach out
                    and I&apos;ll get back to you soon.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {contactLinks.map((link) => {
                        const Icon = link.icon;
                        return (
                            <a
                                key={link.label}
                                href={link.href}
                                className="gradient-border p-6 card-hover text-left"
                                target={link.href.startsWith("http") ? "_blank" : undefined}
                                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                            >
                                <div className="flex items-start gap-4">
                                    <div className="p-3 border-2 border-foreground bg-primary">
                                        <Icon className="h-6 w-6 text-foreground" />
                                    </div>
                                    <div className="min-w-0">
                                        <h3 className="font-semibold text-lg uppercase tracking-wide">
                                            {link.label}
                                        </h3>
                                        <p className="text-sm text-muted-foreground mt-1 font-mono break-all">
                                            {link.value}
                                        </p>
                                    </div>
                                </div>
                            </a>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
