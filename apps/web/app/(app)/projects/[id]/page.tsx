import Link from "next/link";
import { ArrowLeft, Bot, Download, FileText, MoreVertical, Plus, Upload } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { StatusBadge } from "@/components/status-badge";
import { projectDetailTabs } from "@/lib/mock-data";

const files = [
  ["Project Onboarding Document.pdf", "Amit Verma", "18 May 2026, 10:30 AM", "2.45 MB"],
  ["Client Requirements.pdf", "Amit Verma", "18 May 2026, 10:32 AM", "1.32 MB"],
  ["Scope Of Work.docx", "Ramesh Kumar", "18 May 2026, 11:05 AM", "845 KB"],
  ["Project Timeline.xlsx", "Priya Sharma", "18 May 2026, 11:20 AM", "1.12 MB"],
  ["Technical Specifications.pdf", "Amit Verma", "18 May 2026, 11:45 AM", "3.21 MB"]
];

export default async function ProjectDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  return (
    <>
      <div className="mb-4">
        <Link href="/projects" className="inline-flex items-center gap-2 text-sm font-bold text-blue-700">
          <ArrowLeft className="h-4 w-4" />
          Back to Projects
        </Link>
      </div>

      <PageHeader
        eyebrow={`Project ${id.toUpperCase()}`}
        title="Steel Fabrication Plant"
        description="Dedicated workspace for documents, tasks, quotes, orders, invoices, purchase requests, inventory, manpower, financials, checklists, AI Studio, and details."
        actions={
          <>
            <button className="focus-ring inline-flex h-10 items-center gap-2 rounded-md border border-slate-200 bg-white px-3 text-sm font-bold text-slate-700">Edit Project</button>
            <button className="focus-ring grid h-10 w-10 place-items-center rounded-md border border-slate-200 bg-white text-slate-700" aria-label="More actions"><MoreVertical className="h-4 w-4" /></button>
          </>
        }
      />

      <section className="app-card overflow-hidden">
        <div className="border-b border-slate-200 p-4">
          <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
            <div className="flex min-w-0 gap-4">
              <div className="grid h-20 w-20 shrink-0 place-items-center rounded-lg bg-blue-50 text-blue-700">
                <FileText className="h-8 w-8" />
              </div>
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <h2 className="truncate text-lg font-bold text-slate-950">Steel Fabrication Plant</h2>
                  <StatusBadge value="In Progress" />
                </div>
                <div className="mt-2 flex flex-wrap gap-x-4 gap-y-2 text-sm text-slate-600">
                  <span><b>Project ID:</b> P-1256</span>
                  <span><b>Client:</b> ABC Corp</span>
                  <span><b>Manager:</b> Ramesh Kumar</span>
                  <span><b>Phone:</b> +91 98765 43210</span>
                </div>
              </div>
            </div>
            <button className="focus-ring inline-flex h-10 items-center gap-2 rounded-md bg-blue-600 px-3 text-sm font-bold text-white">
              <Upload className="h-4 w-4" />
              Upload Files
            </button>
          </div>
        </div>

        <div className="border-b border-slate-200 px-4 pt-3">
          <div className="flex gap-2 overflow-x-auto">
            {projectDetailTabs.map((tab, index) => (
              <button key={tab} className={`whitespace-nowrap rounded-t-md border border-b-0 px-3 py-2 text-sm font-bold ${index === 0 ? "border-blue-200 bg-blue-50 text-blue-700" : "border-transparent text-slate-500 hover:bg-slate-50"}`}>
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-0 xl:grid-cols-[1fr_320px]">
          <div className="overflow-x-auto p-4">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex gap-2">
                <button className="rounded-md bg-blue-50 px-3 py-2 text-sm font-bold text-blue-700">Onboarding Doc</button>
                <button className="rounded-md px-3 py-2 text-sm font-bold text-slate-600">Contract</button>
              </div>
              <button className="inline-flex h-9 items-center gap-2 rounded-md border border-blue-200 bg-blue-50 px-3 text-sm font-bold text-blue-700"><Plus className="h-4 w-4" />Add Category</button>
            </div>

            <table className="min-w-[760px] w-full text-left text-sm">
              <thead className="bg-slate-50 text-xs uppercase text-slate-500">
                <tr>
                  <th className="px-4 py-3">File Name</th>
                  <th className="px-4 py-3">Uploaded By</th>
                  <th className="px-4 py-3">Uploaded On</th>
                  <th className="px-4 py-3">File Size</th>
                  <th className="px-4 py-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {files.map(([name, owner, date, size]) => (
                  <tr key={name} className="hover:bg-slate-50">
                    <td className="px-4 py-4 font-bold text-slate-800">{name}</td>
                    <td className="px-4 py-4 text-slate-600">{owner}</td>
                    <td className="px-4 py-4 text-slate-600">{date}</td>
                    <td className="px-4 py-4 text-slate-600">{size}</td>
                    <td className="px-4 py-4 text-right">
                      <button className="inline-grid h-8 w-8 place-items-center rounded-md text-slate-500 hover:bg-slate-100" aria-label={`Download ${name}`}>
                        <Download className="h-4 w-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <aside className="border-t border-slate-200 bg-slate-50 p-4 xl:border-l xl:border-t-0">
            <div className="flex items-center gap-2">
              <Bot className="h-5 w-5 text-violet-600" />
              <h2 className="text-sm font-bold text-slate-950">Project AI</h2>
            </div>
            <div className="mt-3 space-y-3">
              {["Summarize onboarding documents", "Identify missing contract details", "Show delayed tasks", "Estimate budget risk"].map((prompt) => (
                <button key={prompt} className="focus-ring w-full rounded-md border border-slate-200 bg-white p-3 text-left text-sm font-semibold text-slate-700">
                  {prompt}
                </button>
              ))}
            </div>
            <div className="mt-4 rounded-md bg-white p-3">
              <h3 className="text-sm font-bold text-slate-950">Financial Snapshot</h3>
              <div className="mt-3 space-y-3 text-sm">
                <div className="flex justify-between"><span className="text-slate-500">Budget</span><b>INR 8.5L</b></div>
                <div className="flex justify-between"><span className="text-slate-500">Used</span><b>62%</b></div>
                <div className="flex justify-between"><span className="text-slate-500">Open PRs</span><b>4</b></div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
