import { useMemo, useState } from "react";

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

export const InteractiveLab = () => {
    const [dataQuality, setDataQuality] = useState(78);
    const [featureStrength, setFeatureStrength] = useState(68);
    const [conceptDrift, setConceptDrift] = useState(22);

    const metrics = useMemo(() => {
        const base = clamp(
            dataQuality * 0.55 + featureStrength * 0.5 - conceptDrift * 0.35,
            0,
            100
        );
        const reliability = clamp(base + (featureStrength - conceptDrift) * 0.2, 0, 100);
        const precision = clamp(base * 0.85 + featureStrength * 0.25, 0, 100);
        const recall = clamp(base * 0.7 + dataQuality * 0.25, 0, 100);

        return {
            base: Math.round(base),
            reliability: Math.round(reliability),
            precision: Math.round(precision),
            recall: Math.round(recall),
        };
    }, [dataQuality, featureStrength, conceptDrift]);

    const reset = () => {
        setDataQuality(78);
        setFeatureStrength(68);
        setConceptDrift(22);
    };

    return (
        <section id="lab" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl space-y-8">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                    <div>
                        <p className="font-mono uppercase tracking-wide text-sm text-muted-foreground">
                            Live Lab
                        </p>
                        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-widest">
                            Model Signal <span className="text-primary">Mixer</span>
                        </h2>
                    </div>
                    <button
                        type="button"
                        onClick={reset}
                        className="px-4 py-2 border-2 border-foreground bg-card text-foreground font-mono uppercase tracking-wide text-sm shadow-[3px_3px_0_hsl(var(--foreground))] transition-transform duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5"
                    >
                        Reset Sliders
                    </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-6">
                    <div className="gradient-border p-6 space-y-6 text-left">
                        <div className="space-y-4">
                            <label className="space-y-2 block">
                                <div className="flex items-center justify-between text-sm font-semibold uppercase tracking-wide">
                                    <span>Data Quality</span>
                                    <span className="font-mono">{dataQuality}%</span>
                                </div>
                                <input
                                    type="range"
                                    min="0"
                                    max="100"
                                    value={dataQuality}
                                    onChange={(event) => setDataQuality(Number(event.target.value))}
                                    className="w-full"
                                    style={{ accentColor: "hsl(var(--primary))" }}
                                />
                            </label>

                            <label className="space-y-2 block">
                                <div className="flex items-center justify-between text-sm font-semibold uppercase tracking-wide">
                                    <span>Feature Strength</span>
                                    <span className="font-mono">{featureStrength}%</span>
                                </div>
                                <input
                                    type="range"
                                    min="0"
                                    max="100"
                                    value={featureStrength}
                                    onChange={(event) => setFeatureStrength(Number(event.target.value))}
                                    className="w-full"
                                    style={{ accentColor: "hsl(var(--primary))" }}
                                />
                            </label>

                            <label className="space-y-2 block">
                                <div className="flex items-center justify-between text-sm font-semibold uppercase tracking-wide">
                                    <span>Concept Drift</span>
                                    <span className="font-mono">{conceptDrift}%</span>
                                </div>
                                <input
                                    type="range"
                                    min="0"
                                    max="100"
                                    value={conceptDrift}
                                    onChange={(event) => setConceptDrift(Number(event.target.value))}
                                    className="w-full"
                                    style={{ accentColor: "hsl(var(--primary))" }}
                                />
                            </label>
                        </div>

                        <div className="border-2 border-foreground bg-card p-4">
                            <p className="font-mono uppercase text-xs text-muted-foreground">
                                Output Signal
                            </p>
                            <div className="mt-3 flex items-center justify-between">
                                <span className="text-sm font-semibold uppercase tracking-wide">
                                    Reliability Score
                                </span>
                                <span className="text-2xl font-black text-primary">
                                    {metrics.base}
                                </span>
                            </div>
                            <div className="mt-3 h-2 border-2 border-foreground bg-background">
                                <div
                                    className="h-full bg-primary"
                                    style={{ width: `${metrics.base}%` }}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="gradient-border p-6 space-y-5 text-left">
                        <h3 className="font-semibold uppercase tracking-wide text-lg">
                            Model Readout
                        </h3>
                        <div className="space-y-4">
                            {[
                                { label: "Reliability", value: metrics.reliability },
                                { label: "Precision", value: metrics.precision },
                                { label: "Recall", value: metrics.recall },
                            ].map((item) => (
                                <div key={item.label} className="space-y-2">
                                    <div className="flex items-center justify-between text-sm font-semibold uppercase tracking-wide">
                                        <span>{item.label}</span>
                                        <span className="font-mono">{item.value}%</span>
                                    </div>
                                    <div className="h-2 border-2 border-foreground bg-background">
                                        <div
                                            className="h-full bg-primary"
                                            style={{ width: `${item.value}%` }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                        <p className="text-sm text-muted-foreground">
                            This quick mixer mirrors how data quality, feature strength, and
                            drift affect real-world model reliability.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
