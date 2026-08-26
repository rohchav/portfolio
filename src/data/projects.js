import bioSimScreenshot from "../assets/bio_sim_ss.png";
import magnaScreenshot from "../assets/magna_proj_ss.png";
import youKnowBallScreenshot from "../assets/you_know_ball_ss.png";

const projects = [
    {
        slug: "ortus",
        title: "ORTUS",
        subtitle: "A browser-based sandbox for complex-systems investigation",
        summary:
            "Deterministic TypeScript simulation platform for exploring agent interactions, networks, uncertainty, interventions, experiments, and model behavior without overstating what the model proves about the real world.",
        tags: ["Complex Systems", "Agent-Based Modeling", "TypeScript", "Simulation"],
        featured: true,
        links: {
            repo: "https://github.com/rohchav/ORTUS",
            caseStudy: "/projects/ortus",
        },
        image: null,
        imageAlt: "ORTUS complex-systems simulation sandbox",
        metrics: [
            { label: "Worlds", value: "11 runnable models" },
            { label: "Runtime", value: "Seeded + deterministic" },
            { label: "Research Tools", value: "Experiments, compare, Atlas" },
        ],
        problem: [
            "Complex-systems tools often make it difficult to move from an intuitive model idea to a reproducible investigation.",
            "Simulation interfaces can blur the line between model behavior and evidence about the real world.",
        ],
        approach: [
            "Built a deterministic simulation engine with seeded randomness, snapshots, metrics, interventions, experiments, and bounded run comparisons.",
            "Designed a World/Workshop/Lab/Atlas product architecture for running, authoring, investigating, and mapping model behavior.",
            "Added explicit scientific boundaries around interpretation, causality, uncertainty, validation, and model-vs-world claims.",
            "Expanded the platform through runnable starter worlds, guided investigations, performance architecture, and accessibility-focused UI audits.",
        ],
        impact: [
            "Created a reusable foundation for studying emergence, feedback, networks, stochasticity, adaptation, and path-dependent behavior across multiple model families.",
            "Turned complex-systems concepts into inspectable software workflows rather than isolated simulations.",
        ],
        stack: ["Next.js", "React", "TypeScript", "Vitest", "Playwright", "Zod", "Zustand"],
    },
    {
        slug: "multi-scale-bio-simulator",
        title: "Multi-Scale Bio Simulator",
        subtitle: "Interactive scientific visualization across biological scales",
        summary:
            "React-based simulation MVP for turning structured quantum and chemical events into live visual feedback, with an architecture intended to grow from molecular interactions toward richer multi-scale biological models.",
        tags: ["Simulation", "Scientific Computing", "React", "Visualization"],
        links: {
            live: "https://quantum-view.vercel.app/",
            caseStudy: "/projects/multi-scale-bio-simulator",
        },
        image: bioSimScreenshot,
        imageAlt: "Multi-Scale Bio Simulator interface preview",
        metrics: [
            { label: "Live Feedback", value: "Real-time event stream" },
            { label: "Visualizer", value: "H-H orbital sigma/sigma*" },
            { label: "Performance", value: "Cached marching cubes" },
        ],
        problem: [
            "Make complex molecular behavior easier to inspect without requiring heavyweight desktop tooling.",
            "Create an architecture that can eventually connect multiple biological and physical scales.",
        ],
        approach: [
            "Built a structured event pipeline feeding a React-based simulation sandbox.",
            "Implemented phase-colored particle rendering and cached density sampling for responsive orbital exploration.",
            "Designed the system to evolve toward richer physics engines and multi-scale biological representations.",
        ],
        impact: [
            "Established a visual experimentation layer for reasoning about bonding and molecular structure.",
            "Provided a prototype architecture for future cross-scale scientific simulation work.",
        ],
        stack: ["React", "JavaScript", "Scientific Visualization", "Simulation Architecture"],
    },
    {
        slug: "you-know-ball",
        title: "You Know Ball",
        subtitle: "Time-aware sports prediction at scale",
        summary:
            "End-to-end ML pipeline on 23K+ NBA games across 18 seasons using PostgreSQL and LightGBM, with time-aware validation and calibrated holdout evaluation.",
        tags: ["Model Evaluation", "LightGBM", "PostgreSQL", "Python"],
        links: {
            repo: "https://github.com/rohchav/ball_predictor",
            caseStudy: "/projects/you-know-ball",
        },
        image: youKnowBallScreenshot,
        imageAlt: "You Know Ball project dashboard preview",
        metrics: [
            { label: "Dataset", value: "23K+ games" },
            { label: "AUC", value: "0.751" },
            { label: "Brier", value: "0.203" },
        ],
        problem: [
            "Forecast game outcomes while preventing temporal leakage and preserving realistic evaluation.",
            "Scale ingestion and feature engineering across 18 seasons of changing team context.",
        ],
        approach: [
            "Built a PostgreSQL-backed ETL pipeline for reproducible pregame features.",
            "Trained LightGBM ensembles with time-aware splits and calibrated holdout testing.",
            "Tracked AUC, log loss, and Brier score to evaluate discrimination and probability quality.",
        ],
        impact: [
            "Produced a repeatable experimentation pipeline rather than a one-off prediction model.",
            "Made evaluation quality and uncertainty central to the project architecture.",
        ],
        stack: ["Python", "LightGBM", "PostgreSQL", "Pandas", "MLflow"],
    },
    {
        slug: "simulation-asset-variation-toolkit",
        title: "Simulation Asset Variation Toolkit",
        subtitle: "Synthetic environment variation for autonomy testing",
        summary:
            "Unreal Engine + CARLA tooling for probabilistic scene variation and reproducible save/load workflows, reducing manual setup time by 90% for autonomy simulation experiments.",
        tags: ["Simulation", "Unreal Engine", "CARLA", "Tooling"],
        links: {
            external: "https://capstone.cse.msu.edu/2024-08/projects/magna-wfg4adas/",
            caseStudy: "/projects/simulation-asset-variation-toolkit",
        },
        image: magnaScreenshot,
        imageAlt: "Simulation Asset Variation Toolkit interface preview",
        metrics: [
            { label: "Setup Time", value: "-90%" },
            { label: "Assets", value: "Probabilistic variation" },
            { label: "Workflow", value: "XML save/load" },
        ],
        problem: [
            "Manual scene configuration slowed synthetic-data and perception testing workflows.",
            "Teams needed reproducible variation presets instead of repeated hand-authored environments.",
        ],
        approach: [
            "Created bulk controls for scale, texture, and rotation variability.",
            "Consolidated more than ten scene tools into a unified interface.",
            "Added XML persistence so simulation configurations could be saved and reproduced.",
        ],
        impact: [
            "Reduced manual setup time by 90% and accelerated environment generation.",
            "Improved repeatability and stakeholder review through reusable simulation configurations.",
        ],
        stack: ["Unreal Engine", "CARLA", "Synthetic Data", "Simulation Tooling"],
    },
];

export const allProjects = projects;
