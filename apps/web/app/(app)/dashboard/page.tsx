import Link from "next/link";
import { CalendarDays, Plus, Settings2 } from "lucide-react";
import { DashboardCharts } from "@/components/dashboard-charts";
import { MetricCard } from "@/components/metric-card";
import { PageHeader } from "@/components/page-header";
import { StatusBadge } from "@/components/status-badge";
import { dashboardMetrics, meetings } from "@/lib/mock-data";

const topProjects = [
  ["P-1256", "Steel Fabrication Plant", "78%", "INR 8.5L"],
  ["P-1255", "Conveyor System Setup", "64%", "INR 6.2L"],
  ["P-1254", "Hydraulic Press Unit", "52%", "INR 3.0L"],
  ["P-1252", "CNC Machine Installation", "83%", "INR 2.8L"]
];

const recentActivity = [
  ["New lead added", "Sterling Tools Pvt. Ltd.", "10:15 AM", "New Lead"],
  ["PO-2309 approved", "By Admin", "09:48 AM", "Approved"],
  ["Material request submitted", "MR-1056", "Yesterday", "Pending"],
  ["Invoice INV-1024 created", "By Finance Team", "Yesterday", "Received"]
];

export default function DashboardPage() {
  return (
    <>
      <PageHeader
        eyebrow="Dashboard"
        title="Real-Time Analytics"
        description="A role-aware command center for revenue, projects, leads, tasks, attendance, inventory, and finance."
        actions={
          <>
            <button className="focus-ring inline-flex h-10 items-center gap-2 rounded-md border border-slate-200 bg-white px-3 text-sm font-bold text-slate-700"><CalendarDays className="h-4 w-4" />22 May - 29 May 2026</button>
            <button className="focus-ring inline-flex h-10 items-center gap-2 rounded-md border border-slate-200 bg-white px-3 text-sm font-bold text-slate-700"><Settings2 className="h-4 w-4" />Customize</button>
            <button className="focus-ring inline-flex h-10 items-center gap-2 rounded-md bg-blue-600 px-3 text-sm font-bold text-white"><Plus className="h-4 w-4" />Add Widget</button>
          </>
        }
      />

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-6">
        {dashboardMetrics.map((metric) => (
          <MetricCard key={metric.label} metric={metric} />
        ))}
      </div>

      <div className="mt-4">
        <DashboardCharts />
      </div>

      <div className="mt-4 grid gap-4 xl:grid-cols-3">
        <section className="app-card p-4">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-bold text-slate-950">Top Performing Projects</h2>
            <Link href="/projects" className="text-xs font-bold text-blue-700">View All</Link>
          </div>
          <div className="mt-4 space-y-4">
            {topProjects.map(([id, name, progress, budget]) => (
              <div key={id} className="grid grid-cols-[1fr_auto] gap-3">
                <div className="min-w-0">
                  <p className="truncate text-sm font-bold text-slate-800">{name}</p>
                  <div className="mt-2 h-2 rounded-full bg-slate-100">
                    <div className="h-2 rounded-full bg-blue-600" style={{ width: progress }} />
                  </div>
                </div>
                <div className="text-right text-xs">
                  <p className="font-bold text-blue-700">{id}</p>
                  <p className="mt-2 text-slate-500">{budget}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="app-card p-4">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-bold text-slate-950">Recent Activity</h2>
            <button className="text-xs font-bold text-blue-700">View All</button>
          </div>
          <div className="mt-4 space-y-3">
            {recentActivity.map(([title, meta, time, status]) => (
              <div key={title} className="flex items-center justify-between gap-3 rounded-md bg-slate-50 p-3">
                <div className="min-w-0">
                  <p className="truncate text-sm font-bold text-slate-800">{title}</p>
                  <p className="mt-1 truncate text-xs text-slate-500">{meta} - {time}</p>
                </div>
                <StatusBadge value={status} />
              </div>
            ))}
          </div>
        </section>

        <section className="app-card p-4">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-bold text-slate-950">Upcoming Meetings</h2>
            <button className="text-xs font-bold text-blue-700">Calendar</button>
          </div>
          <div className="mt-4 space-y-3">
            {meetings.map((meeting) => (
              <div key={meeting.title} className="rounded-md border border-slate-100 p-3">
                <p className="text-sm font-bold text-slate-800">{meeting.title}</p>
                <p className="mt-1 text-xs text-slate-500">{meeting.meta}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
