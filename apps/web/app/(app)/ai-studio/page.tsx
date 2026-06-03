import { ArrowRight, Bot, BrainCircuit, Database, FileText, Gauge, MessageSquareText, Plus, ShieldCheck, Sparkles, WandSparkles } from "lucide-react";
import { PageHeader } from "@/components/page-header";

const tools = [
  ["Smart Insights", "Get instant insights from business data.", BrainCircuit],
  ["Data Analyzer", "Analyze reports and extract trends.", Gauge],
  ["Document Summarizer", "Summarize contracts, reports, and files.", FileText],
  ["Predictive Insights", "Forecast risks and future trends.", Sparkles],
  ["Content Generator", "Generate emails, notes, and proposals.", WandSparkles],
  ["SQL Query Builder", "Generate guarded SQL from plain language.", Database]
];

const prompts = [
  "Sales performance summary",
  "Project status report",
  "Inventory low stock alert",
  "Pending tasks overview",
  "Financial summary"
];

export default function AIStudioPage() {
  return (
    <>
      <PageHeader
        eyebrow="AI Studio"
        title="Intelligent Business Assistant"
        description="Ask questions, summarize documents, generate reports, inspect data, and automate recurring industrial workflows."
        actions={
          <>
            <button className="focus-ring inline-flex h-10 items-center gap-2 rounded-md border border-slate-200 bg-white px-3 text-sm font-bold text-slate-700"><FileText className="h-4 w-4" />Prompt Library</button>
            <button className="focus-ring inline-flex h-10 items-center gap-2 rounded-md bg-blue-600 px-3 text-sm font-bold text-white"><Plus className="h-4 w-4" />New Chat</button>
          </>
        }
      />

      <div className="grid gap-4 xl:grid-cols-[1.2fr_0.8fr]">
        <section className="overflow-hidden rounded-lg border border-violet-100 bg-white shadow-sm">
          <div className="bg-violet-50 p-5">
            <div className="flex items-center justify-between gap-4">
              <div>
                <h2 className="text-lg font-bold text-slate-950">Hello Ramesh Kumar</h2>
                <p className="mt-1 text-sm text-slate-600">How can I help you today?</p>
              </div>
              <div className="grid h-14 w-14 place-items-center rounded-lg bg-violet-600 text-white">
                <Bot className="h-7 w-7" />
              </div>
            </div>
            <div className="mt-5 rounded-lg bg-white p-3 ring-1 ring-violet-100">
              <textarea className="min-h-24 w-full resize-none outline-none" placeholder="Ask anything about your business, data, reports, projects, inventory, finance, or HR..." />
              <div className="flex flex-wrap items-center justify-between gap-2 border-t border-slate-100 pt-3">
                <div className="flex flex-wrap gap-2">
                  <button className="rounded-md border border-slate-200 px-3 py-2 text-xs font-bold text-slate-700">Attach File</button>
                  <button className="rounded-md border border-slate-200 px-3 py-2 text-xs font-bold text-slate-700">Add Context</button>
                  <button className="rounded-md border border-slate-200 px-3 py-2 text-xs font-bold text-slate-700">Deep Research</button>
                </div>
                <button className="grid h-10 w-10 place-items-center rounded-md bg-blue-600 text-white" aria-label="Send prompt">
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {["Summarize this month's sales", "Show overdue tasks", "Inventory low stock alert", "Project progress update"].map((prompt) => (
                <button key={prompt} className="rounded-md bg-white px-3 py-2 text-xs font-bold text-slate-700 ring-1 ring-violet-100">{prompt}</button>
              ))}
            </div>
          </div>

          <div className="grid gap-4 p-5 md:grid-cols-2 xl:grid-cols-3">
            {tools.map(([title, description, Icon]) => (
              <button key={title as string} className="focus-ring rounded-lg border border-slate-200 bg-white p-4 text-left hover:border-blue-200 hover:bg-blue-50">
                <Icon className="h-5 w-5 text-blue-600" />
                <h3 className="mt-3 text-sm font-bold text-slate-950">{title as string}</h3>
                <p className="mt-1 text-xs leading-5 text-slate-500">{description as string}</p>
              </button>
            ))}
          </div>
        </section>

        <aside className="space-y-4">
          <section className="app-card p-4">
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-bold text-slate-950">Popular Prompt Templates</h2>
              <button className="text-xs font-bold text-blue-700">View All</button>
            </div>
            <div className="mt-3 space-y-2">
              {prompts.map((prompt) => (
                <button key={prompt} className="focus-ring flex h-12 w-full items-center justify-between rounded-md border border-slate-200 px-3 text-left text-sm font-bold text-slate-700">
                  {prompt}
                  <ArrowRight className="h-4 w-4 text-slate-400" />
                </button>
              ))}
            </div>
          </section>

          <section className="app-card p-4">
            <h2 className="text-sm font-bold text-slate-950">Usage Overview</h2>
            <div className="mt-4 grid grid-cols-2 gap-3">
              {[
                ["Queries Asked", "248"],
                ["Reports Generated", "42"],
                ["Documents Processed", "18"],
                ["Automations Created", "07"]
              ].map(([label, value]) => (
                <div key={label} className="rounded-md bg-slate-50 p-3">
                  <p className="text-xs font-semibold text-slate-500">{label}</p>
                  <p className="mt-2 text-2xl font-bold text-slate-950">{value}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 rounded-md bg-violet-50 p-3">
              <div className="flex items-center justify-between text-sm font-bold text-violet-800">
                <span>AI credits used</span>
                <span>750 / 1000</span>
              </div>
              <div className="mt-2 h-2 rounded-full bg-white">
                <div className="h-2 rounded-full bg-violet-600" style={{ width: "75%" }} />
              </div>
            </div>
          </section>

          <section className="app-card flex items-start gap-3 p-4">
            <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
            <div>
              <h2 className="text-sm font-bold text-slate-950">Your Data Is Secure</h2>
              <p className="mt-1 text-sm leading-6 text-slate-600">Tenant data is isolated and AI activity will be logged per organization.</p>
            </div>
          </section>

          <section className="app-card p-4">
            <h2 className="text-sm font-bold text-slate-950">Recent Chats</h2>
            <div className="mt-3 space-y-3">
              {["Monthly sales performance summary", "Overdue tasks and approvals", "Inventory items below reorder level"].map((chat) => (
                <div key={chat} className="flex items-center gap-3 rounded-md bg-slate-50 p-3">
                  <MessageSquareText className="h-4 w-4 text-violet-600" />
                  <p className="min-w-0 truncate text-sm font-semibold text-slate-700">{chat}</p>
                </div>
              ))}
            </div>
          </section>
        </aside>
      </div>
    </>
  );
}
