import { CalendarDays, List, Plus, Rows3, Search } from "lucide-react";
import { kanbanColumns } from "@/lib/mock-data";
import { PageHeader } from "@/components/page-header";
import { StatusBadge } from "@/components/status-badge";

export default function TasksPage() {
  return (
    <>
      <PageHeader
        eyebrow="Tasks"
        title="My Tasks"
        description="Kanban and list views for every employee to manage assigned work, priority, due dates, comments, and checklist progress."
        actions={
          <>
            <button className="focus-ring inline-flex h-10 items-center gap-2 rounded-md border border-blue-200 bg-blue-50 px-3 text-sm font-bold text-blue-700"><Rows3 className="h-4 w-4" />Kanban View</button>
            <button className="focus-ring inline-flex h-10 items-center gap-2 rounded-md border border-slate-200 bg-white px-3 text-sm font-bold text-slate-700"><List className="h-4 w-4" />List View</button>
            <button className="focus-ring inline-flex h-10 items-center gap-2 rounded-md bg-blue-600 px-3 text-sm font-bold text-white"><Plus className="h-4 w-4" />New Task</button>
          </>
        }
      />

      <section className="app-card overflow-hidden">
        <div className="flex flex-col gap-3 border-b border-slate-200 p-4 xl:flex-row xl:items-center">
          <div className="flex h-10 min-w-0 flex-1 items-center gap-2 rounded-md border border-slate-200 bg-slate-50 px-3">
            <Search className="h-4 w-4 text-slate-400" />
            <input className="min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-slate-400" placeholder="Search tasks..." />
          </div>
          <div className="grid gap-2 sm:grid-cols-2 xl:flex">
            {["All Priority", "All Projects", "All Categories", "All Assignees"].map((filter) => (
              <button key={filter} className="h-10 rounded-md border border-slate-200 bg-white px-3 text-sm font-bold text-slate-600">{filter}</button>
            ))}
            <button className="inline-flex h-10 items-center justify-center gap-2 rounded-md border border-slate-200 bg-white px-3 text-sm font-bold text-slate-600"><CalendarDays className="h-4 w-4" />May 2026</button>
          </div>
        </div>

        <div className="grid gap-4 overflow-x-auto p-4 xl:grid-cols-5">
          {kanbanColumns.map((column) => (
            <section key={column.name} className="min-w-72 rounded-lg border border-slate-200 bg-slate-50">
              <div className="flex items-center justify-between border-b border-slate-200 px-3 py-3">
                <div className="flex items-center gap-2">
                  <h2 className="text-sm font-bold text-slate-900">{column.name}</h2>
                  <span className="rounded-md bg-white px-2 py-1 text-xs font-bold text-slate-600">{column.count}</span>
                </div>
                <button className="grid h-7 w-7 place-items-center rounded-md bg-white text-slate-500" aria-label={`Add task to ${column.name}`}>
                  <Plus className="h-4 w-4" />
                </button>
              </div>
              <div className="space-y-3 p-3">
                {column.tasks.map(([title, project, priority]) => (
                  <article key={title} className="rounded-md border border-slate-200 bg-white p-3">
                    <p className="text-sm font-bold text-slate-900">{title}</p>
                    <p className="mt-2 truncate text-xs font-semibold text-slate-500">{project}</p>
                    <div className="mt-3 flex items-center justify-between">
                      <span className="text-xs font-semibold text-slate-500">22 May 2026</span>
                      <StatusBadge value={priority} />
                    </div>
                  </article>
                ))}
                <button className="flex h-10 w-full items-center justify-center gap-2 rounded-md text-sm font-bold text-blue-700">
                  <Plus className="h-4 w-4" />
                  Add Task
                </button>
              </div>
            </section>
          ))}
        </div>
      </section>
    </>
  );
}
