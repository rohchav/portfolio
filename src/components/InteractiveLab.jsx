import { useMemo, useState } from "react";

const GRID_WIDTH = 12;
const GRID_HEIGHT = 8;
const STEPS = 18;

const createRng = (seed) => {
    let value = seed % 2147483647;
    if (value <= 0) value += 2147483646;
    return () => {
        value = (value * 16807) % 2147483647;
        return (value - 1) / 2147483646;
    };
};

const indexOf = (x, y) => y * GRID_WIDTH + x;

const neighbors = (x, y) => [
    [(x - 1 + GRID_WIDTH) % GRID_WIDTH, y],
    [(x + 1) % GRID_WIDTH, y],
    [x, (y - 1 + GRID_HEIGHT) % GRID_HEIGHT],
    [x, (y + 1) % GRID_HEIGHT],
];

const runSystem = (influence, noise, seed) => {
    const rng = createRng(seed);
    let cells = Array.from({ length: GRID_WIDTH * GRID_HEIGHT }, () => (rng() > 0.5 ? 1 : 0));
    let flips = 0;

    for (let step = 0; step < STEPS; step += 1) {
        const next = [...cells];

        for (let y = 0; y < GRID_HEIGHT; y += 1) {
            for (let x = 0; x < GRID_WIDTH; x += 1) {
                const index = indexOf(x, y);
                const neighborValues = neighbors(x, y).map(([nx, ny]) => cells[indexOf(nx, ny)]);
                const localMean = neighborValues.reduce((sum, value) => sum + value, 0) / neighborValues.length;
                const localPreference = localMean >= 0.5 ? 1 : 0;

                let value = cells[index];
                if (rng() < influence / 100) value = localPreference;
                if (rng() < noise / 100) value = value === 1 ? 0 : 1;

                if (value !== cells[index]) flips += 1;
                next[index] = value;
            }
        }

        cells = next;
    }

    const positive = cells.reduce((sum, value) => sum + value, 0);
    const share = positive / cells.length;
    const consensus = Math.round(Math.max(share, 1 - share) * 100);
    const normalizedActivity = Math.round(
        Math.min(100, (flips / (cells.length * STEPS)) * 220)
    );

    return {
        cells,
        consensus,
        activity: normalizedActivity,
        state: consensus >= 80 ? "Ordered" : consensus >= 65 ? "Coherent" : "Mixed",
    };
};

export const InteractiveLab = () => {
    const [influence, setInfluence] = useState(72);
    const [noise, setNoise] = useState(9);
    const [seed, setSeed] = useState(17);

    const result = useMemo(() => runSystem(influence, noise, seed), [influence, noise, seed]);

    const reset = () => {
        setInfluence(72);
        setNoise(9);
        setSeed(17);
    };

    return (
        <section id="lab" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl space-y-8">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                    <div className="text-left">
                        <p className="font-mono uppercase tracking-wide text-sm text-muted-foreground">
                            Live Systems Lab
                        </p>
                        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-widest">
                            Local Rules, <span className="text-primary">Global Pattern</span>
                        </h2>
                        <p className="text-muted-foreground mt-3 max-w-2xl">
                            A small deterministic cellular model: each cell can copy its neighbors, while noise
                            occasionally disrupts that local agreement. Change the balance and watch system-level
                            order emerge—or disappear.
                        </p>
                    </div>
                    <button
                        type="button"
                        onClick={reset}
                        className="px-4 py-2 border-2 border-foreground bg-card text-foreground font-mono uppercase tracking-wide text-sm shadow-[3px_3px_0_hsl(var(--foreground))] transition-transform duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5"
                    >
                        Reset System
                    </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-6">
                    <div className="gradient-border p-6 space-y-6 text-left">
                        <label className="space-y-2 block">
                            <div className="flex items-center justify-between text-sm font-semibold uppercase tracking-wide">
                                <span>Neighbor Influence</span>
                                <span className="font-mono">{influence}%</span>
                            </div>
                            <input
                                type="range"
                                min="0"
                                max="100"
                                value={influence}
                                onChange={(event) => setInfluence(Number(event.target.value))}
                                className="w-full"
                                style={{ accentColor: "hsl(var(--primary))" }}
                            />
                        </label>

                        <label className="space-y-2 block">
                            <div className="flex items-center justify-between text-sm font-semibold uppercase tracking-wide">
                                <span>Noise</span>
                                <span className="font-mono">{noise}%</span>
                            </div>
                            <input
                                type="range"
                                min="0"
                                max="40"
                                value={noise}
                                onChange={(event) => setNoise(Number(event.target.value))}
                                className="w-full"
                                style={{ accentColor: "hsl(var(--primary))" }}
                            />
                        </label>

                        <div className="space-y-2">
                            <div className="flex items-center justify-between text-sm font-semibold uppercase tracking-wide">
                                <span>Seed</span>
                                <span className="font-mono">{seed}</span>
                            </div>
                            <div className="flex gap-2">
                                {[17, 41, 83].map((value) => (
                                    <button
                                        key={value}
                                        type="button"
                                        onClick={() => setSeed(value)}
                                        className={
                                            seed === value
                                                ? "flex-1 px-3 py-2 border-2 border-foreground bg-primary font-mono text-sm shadow-[2px_2px_0_hsl(var(--foreground))]"
                                                : "flex-1 px-3 py-2 border-2 border-foreground bg-card font-mono text-sm shadow-[2px_2px_0_hsl(var(--foreground))]"
                                        }
                                    >
                                        {value}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                            <div className="border-2 border-foreground bg-card p-4">
                                <p className="font-mono uppercase text-xs text-muted-foreground">Consensus</p>
                                <p className="text-3xl font-black text-primary mt-2">{result.consensus}%</p>
                            </div>
                            <div className="border-2 border-foreground bg-card p-4">
                                <p className="font-mono uppercase text-xs text-muted-foreground">Activity</p>
                                <p className="text-3xl font-black text-primary mt-2">{result.activity}%</p>
                            </div>
                        </div>
                    </div>

                    <div className="gradient-border p-6 space-y-5 text-left">
                        <div className="flex items-center justify-between gap-4">
                            <div>
                                <p className="font-mono uppercase text-xs text-muted-foreground">System State</p>
                                <h3 className="text-xl font-bold uppercase tracking-wide mt-1">{result.state}</h3>
                            </div>
                            <span className="px-3 py-1 border-2 border-foreground bg-primary font-mono uppercase text-xs shadow-[2px_2px_0_hsl(var(--foreground))]">
                                {STEPS} steps
                            </span>
                        </div>

                        <div
                            className="grid gap-1 border-2 border-foreground bg-background p-3"
                            style={{ gridTemplateColumns: `repeat(${GRID_WIDTH}, minmax(0, 1fr))` }}
                            role="img"
                            aria-label={`Cellular system with ${result.consensus}% consensus`}
                        >
                            {result.cells.map((cell, index) => (
                                <span
                                    key={`${seed}-${index}`}
                                    className={
                                        cell
                                            ? "aspect-square border border-foreground bg-primary"
                                            : "aspect-square border border-foreground bg-card"
                                    }
                                />
                            ))}
                        </div>

                        <p className="text-sm text-muted-foreground">
                            The point is not the toy model itself; it is the modeling pattern. Simple local update
                            rules can generate macro-level structure, and changing stochasticity or interaction
                            strength can move the system between qualitatively different regimes.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
