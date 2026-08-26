import { useEffect, useRef, useState } from "react";

const AGENT_COUNT = 72;
const FRAME_INTERVAL = 1000 / 30;
const NEIGHBOR_RADIUS = 0.16;
const SEPARATION_RADIUS = 0.045;
const DEFAULT_CONTROLS = {
    stickTogether: 58,
    matchDirection: 72,
    keepDistance: 64,
};

const createRng = (seed) => {
    let value = seed % 2147483647;
    if (value <= 0) value += 2147483646;
    return () => {
        value = (value * 16807) % 2147483647;
        return (value - 1) / 2147483646;
    };
};

const createAgents = (seed) => {
    const rng = createRng(seed);
    return Array.from({ length: AGENT_COUNT }, () => {
        const angle = rng() * Math.PI * 2;
        const speed = 0.045 + rng() * 0.035;
        return {
            x: 0.04 + rng() * 0.92,
            y: 0.06 + rng() * 0.88,
            vx: Math.cos(angle) * speed,
            vy: Math.sin(angle) * speed,
        };
    });
};

const wrappedDelta = (value) => {
    if (value > 0.5) return value - 1;
    if (value < -0.5) return value + 1;
    return value;
};

const limitSpeed = (vx, vy) => {
    const speed = Math.hypot(vx, vy);
    const minimum = 0.035;
    const maximum = 0.115;

    if (speed === 0) return { vx: minimum, vy: 0 };
    if (speed < minimum) {
        const scale = minimum / speed;
        return { vx: vx * scale, vy: vy * scale };
    }
    if (speed > maximum) {
        const scale = maximum / speed;
        return { vx: vx * scale, vy: vy * scale };
    }
    return { vx, vy };
};

const stepFlock = (agents, controls, delta, aspectRatio) => {
    const cohesionWeight = (controls.stickTogether / 100) * 0.42;
    const alignmentWeight = (controls.matchDirection / 100) * 1.7;
    const separationWeight = (controls.keepDistance / 100) * 0.34;
    const aspect = Math.max(0.6, aspectRatio);

    const next = agents.map((agent, index) => {
        let cohesionX = 0;
        let cohesionY = 0;
        let alignmentX = 0;
        let alignmentY = 0;
        let separationX = 0;
        let separationY = 0;
        let neighborCount = 0;

        agents.forEach((other, otherIndex) => {
            if (index === otherIndex) return;

            const dx = wrappedDelta(other.x - agent.x);
            const dy = wrappedDelta(other.y - agent.y);
            const scaledDy = dy / aspect;
            const distance = Math.hypot(dx, scaledDy);
            if (distance >= NEIGHBOR_RADIUS) return;

            neighborCount += 1;
            cohesionX += dx;
            cohesionY += dy;
            alignmentX += other.vx;
            alignmentY += other.vy;

            if (distance < SEPARATION_RADIUS && distance > 0.0001) {
                const pressure = (SEPARATION_RADIUS - distance) / SEPARATION_RADIUS;
                separationX -= (dx / distance) * pressure;
                separationY -= (dy / distance) * pressure;
            }
        });

        let ax = separationX * separationWeight;
        let ay = separationY * separationWeight;

        if (neighborCount > 0) {
            ax += (cohesionX / neighborCount) * cohesionWeight;
            ay += (cohesionY / neighborCount) * cohesionWeight;
            ax += (alignmentX / neighborCount - agent.vx) * alignmentWeight;
            ay += (alignmentY / neighborCount - agent.vy) * alignmentWeight;
        }

        const velocity = limitSpeed(agent.vx + ax * delta, agent.vy + ay * delta);
        return {
            x: (agent.x + velocity.vx * delta + 1) % 1,
            y: (agent.y + velocity.vy * delta + 1) % 1,
            vx: velocity.vx,
            vy: velocity.vy,
        };
    });

    agents.splice(0, agents.length, ...next);
};

const readCanvasColors = () => {
    const styles = getComputedStyle(document.documentElement);
    return {
        agent: styles.getPropertyValue("--simulation-agent").trim() || "#047857",
        neighbor: styles.getPropertyValue("--simulation-neighbor").trim() || "rgb(4 120 87 / 0.16)",
    };
};

const drawFlock = (state, agents) => {
    const { ctx, width, height } = state;
    if (!ctx || !width || !height) return;

    const colors = readCanvasColors();
    ctx.clearRect(0, 0, width, height);
    ctx.strokeStyle = colors.neighbor;
    ctx.lineWidth = 1;

    for (let index = 0; index < agents.length; index += 1) {
        for (let otherIndex = index + 1; otherIndex < agents.length; otherIndex += 1) {
            const first = agents[index];
            const second = agents[otherIndex];
            const rawX = second.x - first.x;
            const rawY = second.y - first.y;
            if (Math.abs(rawX) > 0.5 || Math.abs(rawY) > 0.5) continue;
            if (Math.hypot(rawX, rawY / Math.max(0.6, width / height)) > 0.075) continue;

            ctx.beginPath();
            ctx.moveTo(first.x * width, first.y * height);
            ctx.lineTo(second.x * width, second.y * height);
            ctx.stroke();
        }
    }

    ctx.fillStyle = colors.agent;
    const size = width < 480 ? 5 : 6.5;
    agents.forEach((agent) => {
        const x = agent.x * width;
        const y = agent.y * height;
        const angle = Math.atan2(agent.vy * height, agent.vx * width);

        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(angle);
        ctx.beginPath();
        ctx.moveTo(size * 1.7, 0);
        ctx.lineTo(-size, size * 0.78);
        ctx.lineTo(-size * 0.48, 0);
        ctx.lineTo(-size, -size * 0.78);
        ctx.closePath();
        ctx.fill();
        ctx.restore();
    });
};

const FlockControl = ({ label, value, onChange }) => (
    <label className="block space-y-2">
        <span className="flex items-center justify-between gap-4 text-sm font-semibold uppercase tracking-wide">
            <span>{label}</span>
            <output className="font-mono text-muted-foreground">{value}%</output>
        </span>
        <input
            type="range"
            min="0"
            max="100"
            step="1"
            value={value}
            onChange={(event) => onChange(Number(event.target.value))}
            className="w-full"
        />
    </label>
);

export const FlockPlayground = () => {
    const [stickTogether, setStickTogether] = useState(DEFAULT_CONTROLS.stickTogether);
    const [matchDirection, setMatchDirection] = useState(DEFAULT_CONTROLS.matchDirection);
    const [keepDistance, setKeepDistance] = useState(DEFAULT_CONTROLS.keepDistance);
    const canvasRef = useRef(null);
    const animationRef = useRef(0);
    const agentsRef = useRef(createAgents(17));
    const controlsRef = useRef(DEFAULT_CONTROLS);
    const stateRef = useRef({
        ctx: null,
        width: 0,
        height: 0,
        lastFrame: 0,
        visible: true,
        hidden: false,
        reducedMotion: false,
    });

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return undefined;

        const ctx = canvas.getContext("2d");
        if (!ctx) return undefined;

        const state = stateRef.current;
        state.ctx = ctx;
        const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

        const resize = () => {
            const bounds = canvas.getBoundingClientRect();
            const width = Math.max(1, bounds.width);
            const height = Math.max(1, bounds.height);
            const dpr = Math.min(window.devicePixelRatio || 1, 2);

            canvas.width = Math.round(width * dpr);
            canvas.height = Math.round(height * dpr);
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
            state.width = width;
            state.height = height;
            drawFlock(state, agentsRef.current);
        };

        const tick = (time) => {
            animationRef.current = requestAnimationFrame(tick);
            if (state.reducedMotion || state.hidden || !state.visible) return;
            if (!state.lastFrame) state.lastFrame = time;

            const elapsed = time - state.lastFrame;
            if (elapsed < FRAME_INTERVAL) return;

            const delta = Math.min(elapsed / 1000, 0.06);
            state.lastFrame = time;
            stepFlock(
                agentsRef.current,
                controlsRef.current,
                delta,
                state.width / Math.max(1, state.height)
            );
            drawFlock(state, agentsRef.current);
        };

        const onVisibilityChange = () => {
            state.hidden = document.hidden;
            state.lastFrame = performance.now();
        };

        const onMotionChange = () => {
            state.reducedMotion = motionQuery.matches;
            state.lastFrame = performance.now();
            if (state.reducedMotion) {
                stepFlock(
                    agentsRef.current,
                    controlsRef.current,
                    0.35,
                    state.width / Math.max(1, state.height)
                );
                drawFlock(state, agentsRef.current);
            } else if (!animationRef.current) {
                animationRef.current = requestAnimationFrame(tick);
            }
        };

        const resizeObserver = new ResizeObserver(resize);
        const intersectionObserver = new IntersectionObserver(
            ([entry]) => {
                state.visible = entry.isIntersecting;
                state.lastFrame = performance.now();
            },
            { rootMargin: "160px" }
        );
        const themeObserver = new MutationObserver(() => drawFlock(state, agentsRef.current));

        state.reducedMotion = motionQuery.matches;
        state.hidden = document.hidden;
        resizeObserver.observe(canvas);
        intersectionObserver.observe(canvas);
        themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
        document.addEventListener("visibilitychange", onVisibilityChange);
        motionQuery.addEventListener("change", onMotionChange);
        resize();

        if (state.reducedMotion) {
            stepFlock(agentsRef.current, controlsRef.current, 0.35, state.width / state.height);
            drawFlock(state, agentsRef.current);
        } else {
            animationRef.current = requestAnimationFrame(tick);
        }

        return () => {
            cancelAnimationFrame(animationRef.current);
            resizeObserver.disconnect();
            intersectionObserver.disconnect();
            themeObserver.disconnect();
            document.removeEventListener("visibilitychange", onVisibilityChange);
            motionQuery.removeEventListener("change", onMotionChange);
        };
    }, []);

    useEffect(() => {
        controlsRef.current = { stickTogether, matchDirection, keepDistance };
        const state = stateRef.current;
        if (state.reducedMotion && state.ctx) {
            stepFlock(
                agentsRef.current,
                controlsRef.current,
                0.35,
                state.width / Math.max(1, state.height)
            );
            drawFlock(state, agentsRef.current);
        }
    }, [keepDistance, matchDirection, stickTogether]);

    const reset = () => {
        setStickTogether(DEFAULT_CONTROLS.stickTogether);
        setMatchDirection(DEFAULT_CONTROLS.matchDirection);
        setKeepDistance(DEFAULT_CONTROLS.keepDistance);
        controlsRef.current = DEFAULT_CONTROLS;
        agentsRef.current = createAgents(17);
        drawFlock(stateRef.current, agentsRef.current);
    };

    return (
        <section id="flock-playground" className="relative px-4 py-24">
            <div className="container mx-auto max-w-5xl space-y-8">
                <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
                    <div className="text-left">
                        <p className="font-mono text-sm uppercase tracking-wide text-muted-foreground">
                            Interactive model
                        </p>
                        <h2 className="mt-2 text-3xl font-black uppercase tracking-widest md:text-5xl">
                            Flock <span className="text-accent-ink">Playground</span>
                        </h2>
                        <p className="mt-3 max-w-2xl text-muted-foreground">
                            Change a few simple behaviors and watch the group reorganize.
                        </p>
                    </div>
                    <button
                        type="button"
                        onClick={reset}
                        className="self-start border-2 border-foreground bg-card px-4 py-2 font-mono text-sm uppercase tracking-wide text-foreground shadow-[3px_3px_0_hsl(var(--foreground))] transition-transform duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5 md:self-auto"
                    >
                        Reset
                    </button>
                </div>

                <div className="grid grid-cols-1 gap-6 lg:grid-cols-[0.72fr_1.28fr]">
                    <div className="gradient-border space-y-7 p-6 text-left">
                        <FlockControl label="Stick Together" value={stickTogether} onChange={setStickTogether} />
                        <FlockControl label="Match Direction" value={matchDirection} onChange={setMatchDirection} />
                        <FlockControl label="Keep Distance" value={keepDistance} onChange={setKeepDistance} />

                        <div className="border-l-4 border-accent-ink pl-4 text-sm leading-relaxed text-muted-foreground">
                            These controls change cohesion, alignment, and separation—the local steering rules
                            each agent follows.
                        </div>
                    </div>

                    <figure className="gradient-border p-3 sm:p-4">
                        <div className="relative aspect-[4/3] overflow-hidden border-2 border-foreground bg-card sm:aspect-[16/10]">
                            <canvas
                                ref={canvasRef}
                                className="absolute inset-0 h-full w-full"
                                role="img"
                                aria-label="Animated flock of agents responding to local cohesion, alignment, and separation rules"
                            >
                                A flock of moving agents reorganizes in response to the three controls.
                            </canvas>
                            <span className="pointer-events-none absolute left-3 top-3 border-2 border-foreground bg-background px-2 py-1 font-mono text-[10px] uppercase tracking-wide sm:text-xs">
                                {AGENT_COUNT} agents · local neighbors
                            </span>
                        </div>
                        <figcaption className="px-1 pb-1 pt-4 text-sm leading-relaxed text-muted-foreground">
                            No bird knows the shape of the flock—the larger pattern emerges from local interactions.
                            Motion is paused when this section is offscreen and frozen when reduced motion is preferred.
                        </figcaption>
                    </figure>
                </div>
            </div>
        </section>
    );
};
