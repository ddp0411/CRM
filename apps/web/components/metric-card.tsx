import type { Metric, Tone } from "@/lib/mock-data";
import { cn } from "@/lib/utils";

const toneClasses: Record<Tone, string> = {
  blue: "bg-blue-50 text-blue-700 ring-blue-100",
  green: "bg-emerald-50 text-emerald-700 ring-emerald-100",
  amber: "bg-amber-50 text-amber-700 ring-amber-100",
  red: "bg-red-50 text-red-700 ring-red-100",
  violet: "bg-violet-50 text-violet-700 ring-violet-100",
  cyan: "bg-cyan-50 text-cyan-700 ring-cyan-100",
  slate: "bg-slate-50 text-slate-700 ring-slate-100"
};

export function MetricCard({ metric }: { metric: Metric }) {
  return (
    <section className="app-card p-4">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="truncate text-xs font-semibold uppercase text-slate-500">{metric.label}</p>
          <p className="mt-2 text-2xl font-bold text-slate-950">{metric.value}</p>
        </div>
        {metric.delta ? (
          <span className={cn("rounded-md px-2 py-1 text-xs font-bold ring-1", toneClasses[metric.tone])}>
            {metric.delta}
          </span>
        ) : null}
      </div>
      <div className="mt-4 h-1.5 rounded-full bg-slate-100">
        <div className={cn("h-1.5 rounded-full", metric.tone === "red" ? "bg-red-500" : metric.tone === "amber" ? "bg-amber-500" : metric.tone === "green" ? "bg-emerald-500" : "bg-blue-500")} style={{ width: "68%" }} />
      </div>
    </section>
  );
}
