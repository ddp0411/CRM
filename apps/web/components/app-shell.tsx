"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Bell,
  Bot,
  Boxes,
  BriefcaseBusiness,
  Building2,
  CalendarCheck,
  ChartNoAxesCombined,
  CheckSquare,
  ChevronDown,
  CircleHelp,
  FileBarChart,
  Home,
  Menu,
  PackageSearch,
  PanelLeft,
  Search,
  Settings,
  ShieldCheck,
  Sparkles,
  Users
} from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/home", label: "Home", icon: Home },
  { href: "/dashboard", label: "Dashboard", icon: ChartNoAxesCombined },
  { href: "/leads", label: "Leads", icon: Users },
  { href: "/projects", label: "Projects", icon: BriefcaseBusiness },
  { href: "/production", label: "Production", icon: Building2 },
  { href: "/tasks", label: "My Tasks", icon: CheckSquare },
  { href: "/warehouse", label: "Warehouse", icon: PackageSearch },
  { href: "/attendance", label: "Attendance", icon: CalendarCheck },
  { href: "/finance", label: "Finance", icon: Boxes },
  { href: "/reports", label: "Reports", icon: FileBarChart },
  { href: "/ai-studio", label: "AI Studio", icon: Sparkles },
  { href: "/settings", label: "Settings", icon: Settings }
];

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-[#edf3f8]">
      <aside className="fixed inset-y-0 left-0 z-30 hidden w-64 flex-col bg-[#06182f] text-white lg:flex">
        <div className="flex h-20 items-center gap-3 border-b border-white/10 px-5">
          <div className="grid h-10 w-10 place-items-center rounded-lg bg-blue-600">
            <PanelLeft className="h-5 w-5" />
          </div>
          <div className="min-w-0">
            <p className="truncate text-lg font-bold">IndusFlow AI</p>
            <p className="text-xs text-blue-200">Smart Industrial Suite</p>
          </div>
        </div>

        <nav className="flex-1 space-y-1 overflow-y-auto px-3 py-4">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = pathname === item.href || (item.href === "/projects" && pathname.startsWith("/projects/"));

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex h-10 items-center gap-3 rounded-md px-3 text-sm font-semibold text-blue-100 transition hover:bg-white/10 hover:text-white",
                  active && "bg-blue-600 text-white shadow-sm"
                )}
              >
                <Icon className="h-4 w-4 shrink-0" />
                <span className="truncate">{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="p-4">
          <div className="rounded-lg border border-white/10 bg-white/5 p-4">
            <div className="flex items-center gap-2 text-sm font-bold">
              <CircleHelp className="h-4 w-4" />
              Need Help?
            </div>
            <p className="mt-2 text-xs leading-5 text-blue-100">Chat with IndusFlow AI Assistant</p>
            <Link href="/ai-studio" className="mt-3 inline-flex h-9 items-center justify-center rounded-md bg-blue-600 px-4 text-xs font-bold text-white">
              Start Chat
            </Link>
          </div>
        </div>
      </aside>

      <div className="lg:pl-64">
        <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/95 backdrop-blur">
          <div className="flex h-16 items-center gap-3 px-4 sm:px-6 lg:px-8">
            <button className="focus-ring grid h-10 w-10 place-items-center rounded-md border border-slate-200 bg-white text-slate-700 lg:hidden" aria-label="Open navigation">
              <Menu className="h-5 w-5" />
            </button>

            <div className="hidden h-10 min-w-0 flex-1 max-w-xl items-center gap-2 rounded-md border border-slate-200 bg-slate-50 px-3 sm:flex">
              <Search className="h-4 w-4 text-slate-400" />
              <input className="min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-slate-400" placeholder="Search for anything..." />
            </div>

            <div className="ml-auto flex items-center gap-2">
              <Link href="/ai-studio" className="hidden h-10 items-center gap-2 rounded-md bg-violet-50 px-3 text-sm font-bold text-violet-700 ring-1 ring-violet-100 sm:inline-flex">
                <Bot className="h-4 w-4" />
                Ask IndusFlow AI
              </Link>
              <button className="focus-ring relative grid h-10 w-10 place-items-center rounded-md border border-slate-200 bg-white text-slate-700" aria-label="Notifications">
                <Bell className="h-4 w-4" />
                <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500" />
              </button>
              <div className="hidden items-center gap-3 rounded-md border border-slate-200 bg-white px-2 py-1.5 sm:flex">
                <div className="grid h-8 w-8 place-items-center rounded-md bg-slate-900 text-xs font-bold text-white">RK</div>
                <div className="min-w-0">
                  <p className="truncate text-sm font-bold text-slate-950">Ramesh Kumar</p>
                  <p className="truncate text-xs text-slate-500">Sales Executive</p>
                </div>
                <ChevronDown className="h-4 w-4 text-slate-400" />
              </div>
            </div>
          </div>
        </header>

        <main className="mx-auto w-full max-w-[1560px] px-4 py-5 pb-24 sm:px-6 lg:px-8 lg:pb-8">
          {children}
        </main>
      </div>

      <nav className="fixed inset-x-0 bottom-0 z-30 border-t border-slate-200 bg-white px-2 py-2 shadow-[0_-10px_30px_rgba(15,23,42,0.08)] lg:hidden">
        <div className="flex gap-2 overflow-x-auto">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex min-w-20 flex-col items-center gap-1 rounded-md px-2 py-2 text-xs font-semibold text-slate-500",
                  active && "bg-blue-50 text-blue-700"
                )}
              >
                <Icon className="h-4 w-4" />
                <span className="max-w-16 truncate">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>

      <div className="fixed right-4 top-20 z-10 hidden items-center gap-2 rounded-md border border-emerald-200 bg-emerald-50 px-3 py-2 text-xs font-bold text-emerald-700 xl:flex">
        <ShieldCheck className="h-4 w-4" />
        Tenant: Sterling Tools
      </div>
    </div>
  );
}
