import { useEffect, useRef } from "react";

const FPS = 30;
const FRAME_INTERVAL = 1000 / FPS;
const MAX_BRANCHES = 12;
const MIN_BRANCHES = 3;
const MAX_START_BRANCHES = 6;
const SPEED_RANGE = { min: 18, max: 44 };
const TURN_RANGE = { min: 0.4, max: 0.9 };
const SPLIT_PROBABILITY = 0.35;
const SPLIT_DELAY = { min: 1.4, max: 3.2 };
const MARGIN_RATIO = 0.22;

const createRng = (seed) => {
    let value = seed % 2147483647;
    if (value <= 0) value += 2147483646;
    return () => {
        value = (value * 16807) % 2147483647;
        return (value - 1) / 2147483646;
    };
};

const randRange = (rng, min, max) => min + (max - min) * rng();

const getDoodleStyle = (ctx) => {
    const styles = getComputedStyle(document.documentElement);
    const stroke = styles.getPropertyValue("--doodle-stroke").trim() || "#1c4a30";
    const opacity = parseFloat(styles.getPropertyValue("--doodle-opacity")) || 0.18;
    ctx.strokeStyle = stroke;
    ctx.globalAlpha = opacity;
};

const initBranches = (rng, width, height) => {
    const count = Math.max(
        MIN_BRANCHES,
        Math.min(MAX_START_BRANCHES, Math.round(width / 280))
    );
    const spacing = width / (count + 1);

    return Array.from({ length: count }, (_, index) => {
        const x = spacing * (index + 1) + randRange(rng, -spacing * 0.3, spacing * 0.3);
        const y = randRange(rng, height * 0.72, height * 0.9);
        const angle = randRange(rng, -Math.PI * 0.85, -Math.PI * 0.15);

        return {
            x,
            y,
            angle,
            speed: randRange(rng, SPEED_RANGE.min, SPEED_RANGE.max),
            turnRate: randRange(rng, TURN_RANGE.min, TURN_RANGE.max),
            splitTimer: randRange(rng, SPLIT_DELAY.min, SPLIT_DELAY.max),
        };
    });
};

export const AnimatedForestBackground = () => {
    const canvasRef = useRef(null);
    const rafRef = useRef(0);
    const stateRef = useRef({
        ctx: null,
        width: 0,
        height: 0,
        margin: 0,
        lastFrame: 0,
        branches: [],
        seed: Math.floor(Date.now() / 1000),
        rng: createRng(Math.floor(Date.now() / 1000)),
        paused: false,
        reducedMotion: false,
    });

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return undefined;

        const ctx = canvas.getContext("2d");
        if (!ctx) return undefined;

        const state = stateRef.current;
        state.ctx = ctx;

        const drawStatic = () => {
            const { width, height, margin, seed } = state;
            if (!width || !height) return;

            ctx.clearRect(0, 0, width, height);
            getDoodleStyle(ctx);

            const rng = createRng(seed);
            const staticBranches = initBranches(rng, width, height);
            const bounds = {
                minX: -margin,
                maxX: width + margin,
                minY: -margin,
                maxY: height + margin,
            };
            const steps = Math.max(120, Math.round(Math.min(width, height) / 5));

            for (let i = 0; i < steps; i += 1) {
                staticBranches.forEach((branch) => {
                    const drift = (rng() - 0.5) * branch.turnRate * 0.03;
                    let angle = branch.angle + drift;
                    const step = branch.speed * 0.03;

                    let nx = branch.x + Math.cos(angle) * step;
                    let ny = branch.y + Math.sin(angle) * step;

                    if (nx < bounds.minX || nx > bounds.maxX) {
                        angle = Math.PI - angle;
                        nx = branch.x + Math.cos(angle) * step;
                    }

                    if (ny < bounds.minY || ny > bounds.maxY) {
                        angle = -angle;
                        ny = branch.y + Math.sin(angle) * step;
                    }

                    const midX = (branch.x + nx) / 2;
                    const midY = (branch.y + ny) / 2;
                    const curveOffset = step * randRange(rng, -0.6, 0.6);
                    const cx = midX + Math.cos(angle + Math.PI / 2) * curveOffset;
                    const cy = midY + Math.sin(angle + Math.PI / 2) * curveOffset;

                    ctx.beginPath();
                    ctx.moveTo(branch.x, branch.y);
                    ctx.quadraticCurveTo(cx, cy, nx, ny);
                    ctx.stroke();

                    branch.x = nx;
                    branch.y = ny;
                    branch.angle = angle;
                });
            }
        };

        const resize = () => {
            const width = window.innerWidth || 0;
            const height = window.innerHeight || 0;
            const dpr = Math.min(window.devicePixelRatio || 1, 1.5);

            canvas.width = width * dpr;
            canvas.height = height * dpr;
            canvas.style.width = `${width}px`;
            canvas.style.height = `${height}px`;

            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
            ctx.clearRect(0, 0, width, height);
            ctx.lineWidth = 2;
            ctx.lineCap = "round";
            ctx.lineJoin = "round";

            state.width = width;
            state.height = height;
            state.margin = Math.max(140, Math.round(Math.min(width, height) * MARGIN_RATIO));
            state.branches = initBranches(state.rng, width, height);
            getDoodleStyle(ctx);

            if (state.reducedMotion) {
                drawStatic();
            }
        };

        const onVisibility = () => {
            state.paused = document.hidden;
            state.lastFrame = performance.now();
        };

        const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
        const onMotionChange = () => {
            state.reducedMotion = motionQuery.matches;
            if (state.reducedMotion) {
                if (rafRef.current) {
                    cancelAnimationFrame(rafRef.current);
                    rafRef.current = 0;
                }
                drawStatic();
            } else if (!rafRef.current) {
                state.lastFrame = performance.now();
                rafRef.current = requestAnimationFrame(tick);
            }
        };

        const observer = new MutationObserver(() => {
            getDoodleStyle(ctx);
            if (state.reducedMotion) {
                drawStatic();
            }
        });

        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ["class"],
        });

        const tick = (time) => {
            if (state.reducedMotion) {
                rafRef.current = 0;
                return;
            }
            rafRef.current = requestAnimationFrame(tick);

            if (state.paused) return;
            if (!state.lastFrame) state.lastFrame = time;
            const elapsed = time - state.lastFrame;
            if (elapsed < FRAME_INTERVAL) return;

            const delta = Math.min(elapsed / 1000, 0.05);
            state.lastFrame = time;

            const { width, height, margin, rng } = state;
            const bounds = {
                minX: -margin,
                maxX: width + margin,
                minY: -margin,
                maxY: height + margin,
            };

            state.branches.forEach((branch) => {
                const drift = (rng() - 0.5) * branch.turnRate * delta;
                let angle = branch.angle + drift;
                const step = branch.speed * delta;

                let nx = branch.x + Math.cos(angle) * step;
                let ny = branch.y + Math.sin(angle) * step;

                if (nx < bounds.minX || nx > bounds.maxX) {
                    angle = Math.PI - angle;
                    nx = branch.x + Math.cos(angle) * step;
                }

                if (ny < bounds.minY || ny > bounds.maxY) {
                    angle = -angle;
                    ny = branch.y + Math.sin(angle) * step;
                }

                const midX = (branch.x + nx) / 2;
                const midY = (branch.y + ny) / 2;
                const curveOffset = step * randRange(rng, -0.6, 0.6);
                const cx = midX + Math.cos(angle + Math.PI / 2) * curveOffset;
                const cy = midY + Math.sin(angle + Math.PI / 2) * curveOffset;

                ctx.beginPath();
                ctx.moveTo(branch.x, branch.y);
                ctx.quadraticCurveTo(cx, cy, nx, ny);
                ctx.stroke();

                branch.x = nx;
                branch.y = ny;
                branch.angle = angle;
                branch.splitTimer -= delta;

                if (branch.splitTimer <= 0) {
                    if (state.branches.length < MAX_BRANCHES && rng() < SPLIT_PROBABILITY) {
                        const splitAngle = angle + randRange(rng, -1.1, 1.1);
                        state.branches.push({
                            x: nx,
                            y: ny,
                            angle: splitAngle,
                            speed: branch.speed * randRange(rng, 0.85, 1.1),
                            turnRate: branch.turnRate,
                            splitTimer: randRange(rng, SPLIT_DELAY.min, SPLIT_DELAY.max),
                        });
                    }
                    branch.splitTimer = randRange(rng, SPLIT_DELAY.min, SPLIT_DELAY.max);
                }
            });
        };

        state.reducedMotion = motionQuery.matches;
        resize();
        window.addEventListener("resize", resize);
        document.addEventListener("visibilitychange", onVisibility);
        motionQuery.addEventListener("change", onMotionChange);
        if (!state.reducedMotion) {
            rafRef.current = requestAnimationFrame(tick);
        }

        return () => {
            cancelAnimationFrame(rafRef.current);
            window.removeEventListener("resize", resize);
            document.removeEventListener("visibilitychange", onVisibility);
            motionQuery.removeEventListener("change", onMotionChange);
            observer.disconnect();
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 z-0 pointer-events-none"
            aria-hidden="true"
        />
    );
};
