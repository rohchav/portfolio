import bioSimScreenshot from "../assets/bio_sim_ss.png";
import magnaScreenshot from "../assets/magna_proj_ss.png";
import youKnowBallScreenshot from "../assets/you_know_ball_ss.png";

const projects = [
    {
        slug: "multi-scale-bio-simulator",
        title: "Multi-Scale Bio Simulator",
        subtitle: "Quantum chemistry visuals in a live React sandbox",
        summary:
            "React-based bio-sim MVP streaming typed quantum/chemical events into a live sandbox, with orbital visualization and cached density sampling.",
        tags: ["React", "Simulation", "Visualization", "Physics"],
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
            "Make complex quantum interactions understandable without requiring heavy desktop tooling.",
            "Deliver immediate, visual feedback to support research and teaching workflows.",
        ],
        approach: [
            "Built a typed event pipeline that feeds a React-based simulation sandbox.",
            "Implemented phase-colored particle rendering and density caching for smooth interactions.",
            "Designed the architecture to scale toward a C++ backend and richer multi-electron models.",
        ],
        impact: [
            "Enabled rapid iteration on bonding visuals and teaching narratives.",
            "Established a scalable pipeline for future research-grade simulations.",
        ],
        stack: ["React", "JavaScript", "Physics Visualization", "Prompt Engineering"],
    },
    {
        slug: "you-know-ball",
        title: "You Know Ball",
        subtitle: "Time-aware sports prediction at scale",
        summary:
            "End-to-end ML pipeline on 23K+ game records using PostgreSQL and LightGBM, reaching 0.751 AUC with time-aware splits.",
        tags: ["LightGBM", "PostgreSQL", "ML Pipeline", "Python"],
        links: {
            repo: "https://github.com/rohchav/ball_predictor",
            caseStudy: "/projects/you-know-ball",
        },
        image: youKnowBallScreenshot,
        imageAlt: "You Know Ball project dashboard preview",
        metrics: [
            { label: "Dataset", value: "23K+ games" },
            { label: "AUC", value: "0.751" },
            { label: "Log Loss", value: "0.593" },
        ],
        problem: [
            "Forecast game outcomes with limited signal while preventing data leakage.",
            "Scale data ingestion and feature engineering across 18 seasons.",
        ],
        approach: [
            "Built a PostgreSQL-backed pipeline to curate and version game-level features.",
            "Trained LightGBM ensembles with time-aware splits and calibration.",
            "Tracked metrics (AUC, log loss, Brier) to balance accuracy and reliability.",
        ],
        impact: [
            "Delivered a repeatable pipeline for future sports analytics experiments.",
            "Validated model reliability with calibrated metrics on holdout data.",
        ],
        stack: ["Python", "LightGBM", "PostgreSQL", "Pandas", "MLflow"],
    },
    {
        slug: "simulation-asset-variation-toolkit",
        title: "Simulation Asset Variation Toolkit",
        subtitle: "Synthetic data generation for autonomy testing",
        summary:
            "Unreal Engine + CARLA tool for probabilistic asset variation and XML save/load, cutting manual setup time by 90%.",
        tags: ["Unreal Engine", "CARLA", "Computer Vision", "Tooling"],
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
            "Manual simulation scene setup slowed ML perception testing.",
            "Teams needed consistent, shareable variation presets for rapid iteration.",
        ],
        approach: [
            "Created a bulk-processing tool for scale/texture/rotation variability.",
            "Unified 10+ tools into a single UI panel with secure deployment.",
            "Integrated XML persistence for reproducible simulation configurations.",
        ],
        impact: [
            "Reduced manual setup time by 90% and accelerated data generation.",
            "Improved stakeholder review cadence through consistent tooling.",
        ],
        stack: ["Unreal Engine", "CARLA", "Computer Vision", "UX Tooling"],
    },
];

export const allProjects = projects;
