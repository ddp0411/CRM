import { cn } from "@/lib/utils";

const toneByValue: Record<string, string> = {
  high: "bg-red-50 text-red-700 ring-red-200",
  overdue: "bg-red-50 text-red-700 ring-red-200",
  delayed: "bg-red-50 text-red-700 ring-red-200",
  "low stock": "bg-red-50 text-red-700 ring-red-200",
  reorder: "bg-red-50 text-red-700 ring-red-200",
  medium: "bg-amber-50 text-amber-700 ring-amber-200",
  "on hold": "bg-amber-50 text-amber-700 ring-amber-200",
  late: "bg-amber-50 text-amber-700 ring-amber-200",
  pending: "bg-amber-50 text-amber-700 ring-amber-200",
  low: "bg-emerald-50 text-emerald-700 ring-emerald-200",
  completed: "bg-emerald-50 text-emerald-700 ring-emerald-200",
  converted: "bg-emerald-50 text-emerald-700 ring-emerald-200",
  qualified: "bg-emerald-50 text-emerald-700 ring-emerald-200",
  present: "bg-emerald-50 text-emerald-700 ring-emerald-200",
  approved: "bg-emerald-50 text-emerald-700 ring-emerald-200",
  received: "bg-emerald-50 text-emerald-700 ring-emerald-200",
  "in stock": "bg-emerald-50 text-emerald-700 ring-emerald-200",
  "in progress": "bg-blue-50 text-blue-700 ring-blue-200",
  contacted: "bg-blue-50 text-blue-700 ring-blue-200",
  "new lead": "bg-blue-50 text-blue-700 ring-blue-200",
  "in production": "bg-blue-50 text-blue-700 ring-blue-200",
  "qc pending": "bg-violet-50 text-violet-700 ring-violet-200",
  review: "bg-violet-50 text-violet-700 ring-violet-200",
  "on leave": "bg-slate-100 text-slate-700 ring-slate-200"
};

export function StatusBadge({ value }: { value: string }) {
  const tone = toneByValue[value.toLowerCase()] ?? "bg-slate-100 text-slate-700 ring-slate-200";

  return (
    <span className={cn("inline-flex whitespace-nowrap rounded-md px-2 py-1 text-xs font-semibold ring-1", tone)}>
      {value}
    </span>
  );
}
