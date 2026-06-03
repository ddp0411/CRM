import { Bot, CalendarDays, Camera, Clock, FilePlus2, MapPin, Plus, Receipt, Timer, UserCheck } from "lucide-react";
import { announcements, meetings, todayTasks } from "@/lib/mock-data";
import { PageHeader } from "@/components/page-header";
import { StatusBadge } from "@/components/status-badge";

const quickActions = [
  ["Create Lead", FilePlus2],
  ["Add Task", Plus],
  ["Raise Leave", CalendarDays],
  ["Create Invoice", Receipt],
  ["Add Expense", Receipt],
  ["Request Material", Plus],
  ["New Project", FilePlus2],
  ["Attendance", UserCheck]
];

export default function HomePage() {
  return (
    <>
      <PageHeader
        eyebrow="Home"
        title="Good Morning, Ramesh"
        description="Sterling Tools workspace is ready for today's sales, project, attendance, and operations activity."
        actions={<button className="focus-ring inline-flex h-10 items-center gap-2 rounded-md border border-slate-200 bg-white px-3 text-sm font-bold text-slate-700"><CalendarDays className="h-4 w-4" />22 May 2026</button>}
      />

      <div className="grid gap-4 xl:grid-cols-[1.1fr_1fr_1fr]">
        <section className="app-card p-4">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm font-bold text-emerald-700">Ready to start your day?</p>
              <p className="mt-1 text-xs text-slate-500">Punch in to record your attendance</p>
            </div>
            <button className="grid h-9 w-9 place-items-center rounded-md bg-slate-100 text-slate-600" aria-label="Capture selfie">
              <Camera className="h-4 w-4" />
            </button>
          </div>
          <button className="mt-4 inline-flex h-11 w-full items-center justify-center gap-2 rounded-md bg-emerald-600 text-sm font-bold text-white sm:w-48">
            <UserCheck className="h-4 w-4" />
            Punch In
          </button>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <div className="rounded-md bg-slate-50 p-3">
              <div className="flex items-center gap-2 text-sm font-bold text-slate-800">
                <Clock className="h-4 w-4 text-blue-600" />
                Current Shift
              </div>
              <p className="mt-2 text-sm text-slate-600">General Shift, 9:00 AM - 6:00 PM</p>
            </div>
            <div className="rounded-md bg-red-50 p-3">
              <div className="flex items-center gap-2 text-sm font-bold text-red-700">
                <Timer className="h-4 w-4" />
                Not Punched In
              </div>
              <p className="mt-2 flex items-center gap-1 text-sm text-red-600"><MapPin className="h-4 w-4" />Pune, Maharashtra</p>
            </div>
          </div>
        </section>

        <section className="app-card p-4">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-bold text-slate-950">My Tasks Today</h2>
            <button className="text-xs font-bold text-blue-700">View All</button>
          </div>
          <div className="mt-3 space-y-3">
            {todayTasks.map((task) => (
              <div key={task.title} className="grid grid-cols-[1fr_auto_auto] items-center gap-3 rounded-md border border-slate-100 p-3">
                <p className="min-w-0 truncate text-sm font-semibold text-slate-700">{task.title}</p>
                <StatusBadge value={task.priority} />
                <span className="text-xs font-semibold text-slate-500">{task.time}</span>
              </div>
            ))}
          </div>
          <button className="mt-3 inline-flex h-9 items-center gap-2 rounded-md text-sm font-bold text-blue-700">
            <Plus className="h-4 w-4" />
            Add Task
          </button>
        </section>

        <section className="app-card p-4">
          <h2 className="text-sm font-bold text-slate-950">Quick Actions</h2>
          <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4 xl:grid-cols-3">
            {quickActions.map(([label, Icon]) => (
              <button key={label as string} className="focus-ring flex min-h-20 flex-col items-center justify-center gap-2 rounded-md border border-slate-200 bg-white px-2 text-center text-xs font-bold text-slate-700 hover:border-blue-200 hover:bg-blue-50">
                <Icon className="h-5 w-5 text-blue-600" />
                <span>{label as string}</span>
              </button>
            ))}
          </div>
        </section>
      </div>

      <div className="mt-4 grid gap-4 xl:grid-cols-[0.9fr_0.9fr_1fr]">
        <section className="app-card p-4">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-bold text-slate-950">My Attendance</h2>
            <button className="text-xs font-bold text-blue-700">View Details</button>
          </div>
          <div className="mt-4 grid grid-cols-4 gap-2">
            {[
              ["22", "Present", "text-emerald-700"],
              ["2", "Absent", "text-red-700"],
              ["1", "Late", "text-amber-700"],
              ["1", "On Leave", "text-blue-700"]
            ].map(([value, label, color]) => (
              <div key={label} className="rounded-md bg-slate-50 p-3 text-center">
                <p className={`text-xl font-bold ${color}`}>{value}</p>
                <p className="mt-1 truncate text-xs font-semibold text-slate-500">{label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="app-card p-4">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-bold text-slate-950">Announcements</h2>
            <button className="text-xs font-bold text-blue-700">View All</button>
          </div>
          <div className="mt-3 space-y-3">
            {announcements.map((item) => (
              <div key={item.title} className="rounded-md bg-slate-50 p-3">
                <p className="text-sm font-semibold text-slate-800">{item.title}</p>
                <p className="mt-1 text-xs text-slate-500">{item.meta}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="app-card p-4">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-bold text-slate-950">Upcoming Meetings</h2>
            <button className="text-xs font-bold text-blue-700">View Calendar</button>
          </div>
          <div className="mt-3 space-y-3">
            {meetings.map((item) => (
              <div key={item.title} className="flex gap-3 rounded-md border border-slate-100 p-3">
                <CalendarDays className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" />
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold text-slate-800">{item.title}</p>
                  <p className="mt-1 text-xs text-slate-500">{item.meta}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-[1fr_1fr]">
        <section className="app-card p-4">
          <h2 className="text-sm font-bold text-slate-950">Leave Balance</h2>
          <div className="mt-4 space-y-4">
            {[
              ["Casual Leave", "12 / 12 days", "bg-emerald-500"],
              ["Sick Leave", "10 / 10 days", "bg-cyan-500"],
              ["Paid Leave", "15 / 15 days", "bg-violet-500"],
              ["Comp Off", "4 / 6 days", "bg-amber-500"]
            ].map(([label, value, color]) => (
              <div key={label}>
                <div className="mb-1 flex items-center justify-between text-sm">
                  <span className="font-semibold text-slate-700">{label}</span>
                  <span className="font-bold text-slate-950">{value}</span>
                </div>
                <div className="h-2 rounded-full bg-slate-100">
                  <div className={`h-2 rounded-full ${color}`} style={{ width: label === "Comp Off" ? "66%" : "100%" }} />
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="app-card p-4">
          <div className="flex items-center gap-2">
            <Bot className="h-5 w-5 text-violet-600" />
            <h2 className="text-sm font-bold text-slate-950">AI Assistant</h2>
          </div>
          <div className="mt-3 flex min-h-12 items-center rounded-md bg-violet-50 px-3 text-sm text-slate-600">
            Ask anything about your work, projects, tasks, reports, or inventory.
          </div>
          <div className="mt-3 grid gap-2">
            {["Show my pending tasks", "List leads with no follow-up", "Check stock of MS Plate 12 mm", "Generate sales report for this month"].map((prompt) => (
              <button key={prompt} className="focus-ring flex h-10 items-center justify-between rounded-md border border-slate-200 px-3 text-left text-sm font-semibold text-slate-700">
                {prompt}
                <span className="text-blue-700">Ask</span>
              </button>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
