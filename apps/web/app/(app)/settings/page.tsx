import { Building2, KeyRound, Lock, Plus, Puzzle, ShieldCheck, Users } from "lucide-react";
import { PageHeader } from "@/components/page-header";

const settings = [
  ["Company Profile", "Logo, GST details, address, timezone, payroll settings", Building2],
  ["Users And Roles", "User creation, role assignment, permission management", Users],
  ["Module Management", "Enable CRM, HRMS, ERP, AI Studio, finance, or reports", Puzzle],
  ["Security", "MFA, password policies, login restrictions, sessions", Lock],
  ["Integrations", "Email, WhatsApp, SMS, APIs, webhooks", KeyRound],
  ["Audit Logs", "User actions, settings changes, login history", ShieldCheck]
];

export default function SettingsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Settings"
        title="Organization Administration"
        description="Manage company profile, users, permissions, departments, module visibility, integrations, security, and audit logs."
        actions={<button className="focus-ring inline-flex h-10 items-center gap-2 rounded-md bg-blue-600 px-3 text-sm font-bold text-white"><Plus className="h-4 w-4" />Invite User</button>}
      />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {settings.map(([title, description, Icon]) => (
          <section key={title as string} className="app-card p-5">
            <div className="grid h-11 w-11 place-items-center rounded-lg bg-blue-50 text-blue-700">
              <Icon className="h-5 w-5" />
            </div>
            <h2 className="mt-4 text-base font-bold text-slate-950">{title as string}</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">{description as string}</p>
            <button className="mt-4 text-sm font-bold text-blue-700">Open</button>
          </section>
        ))}
      </div>

      <section className="app-card mt-4 p-5">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-base font-bold text-slate-950">Module Visibility</h2>
            <p className="mt-1 text-sm text-slate-600">Current tenant modules enabled from organization configuration.</p>
          </div>
          <span className="rounded-md bg-emerald-50 px-3 py-1 text-sm font-bold text-emerald-700 ring-1 ring-emerald-100">All modules enabled</span>
        </div>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {["CRM", "Projects", "Production", "Warehouse", "Attendance", "Finance", "Reports", "AI Studio"].map((module) => (
            <label key={module} className="flex items-center justify-between rounded-md border border-slate-200 bg-slate-50 px-3 py-3 text-sm font-bold text-slate-700">
              {module}
              <input type="checkbox" defaultChecked className="h-4 w-4 rounded border-slate-300" />
            </label>
          ))}
        </div>
      </section>
    </>
  );
}
