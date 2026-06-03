import { Filter, Import, MoreVertical, Plus, Search, SlidersHorizontal } from "lucide-react";
import type { ModulePageData } from "@/lib/mock-data";
import { MetricCard } from "@/components/metric-card";
import { PageHeader } from "@/components/page-header";
import { StatusBadge } from "@/components/status-badge";

export function ModulePage({ data }: { data: ModulePageData }) {
  return (
    <>
      <PageHeader
        eyebrow={data.eyebrow}
        title={data.title}
        description={data.description}
        actions={
          <>
            <button className="focus-ring inline-flex h-10 items-center gap-2 rounded-md border border-slate-200 bg-white px-3 text-sm font-bold text-slate-700">
              <Import className="h-4 w-4" />
              Import
            </button>
            <button className="focus-ring inline-flex h-10 items-center gap-2 rounded-md bg-blue-600 px-3 text-sm font-bold text-white">
              <Plus className="h-4 w-4" />
              {data.primaryAction}
            </button>
          </>
        }
      />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {data.metrics.map((metric) => (
          <MetricCard key={metric.label} metric={metric} />
        ))}
      </div>

      <section className="mt-5 overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
        <div className="border-b border-slate-200 px-4 pt-3">
          <div className="flex gap-5 overflow-x-auto">
            {data.tabs.map((tab, index) => (
              <button
                key={tab}
                className={`whitespace-nowrap border-b-2 px-1 pb-3 text-sm font-bold ${index === 0 ? "border-blue-600 text-blue-700" : "border-transparent text-slate-500"}`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-3 border-b border-slate-200 p-4 xl:flex-row xl:items-center">
          <div className="flex h-10 min-w-0 flex-1 items-center gap-2 rounded-md border border-slate-200 bg-slate-50 px-3">
            <Search className="h-4 w-4 text-slate-400" />
            <input className="min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-slate-400" placeholder="Search by name, code, client, or owner..." />
          </div>
          <div className="grid gap-2 sm:grid-cols-2 xl:flex">
            {data.filters.map((filter) => (
              <button key={filter} className="focus-ring inline-flex h-10 items-center justify-between gap-4 rounded-md border border-slate-200 bg-white px-3 text-sm font-semibold text-slate-600">
                {filter}
                <SlidersHorizontal className="h-4 w-4 text-slate-400" />
              </button>
            ))}
            <button className="focus-ring inline-flex h-10 items-center justify-center gap-2 rounded-md border border-slate-200 bg-white px-3 text-sm font-bold text-slate-700">
              <Filter className="h-4 w-4" />
              Filter
            </button>
          </div>
        </div>

        <div className="grid gap-0 xl:grid-cols-[1fr_320px]">
          <div className="overflow-x-auto">
            <table className="min-w-[840px] w-full text-left text-sm">
              <thead className="bg-slate-50 text-xs uppercase text-slate-500">
                <tr>
                  {data.columns.map((column) => (
                    <th key={column.key} className="px-4 py-3 font-bold">
                      {column.label}
                    </th>
                  ))}
                  <th className="px-4 py-3 text-right font-bold">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {data.rows.map((row) => (
                  <tr key={row.id} className="hover:bg-slate-50/80">
                    {data.columns.map((column) => {
                      const value = row[column.key];
                      const isBadge = ["status", "priority"].includes(column.key);
                      return (
                        <td key={column.key} className="whitespace-nowrap px-4 py-3 text-slate-700">
                          {isBadge ? <StatusBadge value={value} /> : <span className={column.key === "id" ? "font-bold text-blue-700" : ""}>{value}</span>}
                        </td>
                      );
                    })}
                    <td className="px-4 py-3 text-right">
                      <button className="focus-ring inline-grid h-8 w-8 place-items-center rounded-md text-slate-500 hover:bg-slate-100" aria-label="Row actions">
                        <MoreVertical className="h-4 w-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <aside className="border-t border-slate-200 bg-slate-50 p-4 xl:border-l xl:border-t-0">
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-bold text-slate-950">AI Insights</h2>
              <span className="rounded-md bg-violet-100 px-2 py-1 text-xs font-bold text-violet-700">Live</span>
            </div>
            <div className="mt-3 space-y-3">
              {data.insights.map((insight) => (
                <div key={insight} className="rounded-md border border-slate-200 bg-white p-3 text-sm leading-5 text-slate-700">
                  {insight}
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
