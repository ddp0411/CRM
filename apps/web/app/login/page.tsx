import Link from "next/link";
import { Building2, KeyRound, Mail, ShieldCheck, Sparkles } from "lucide-react";

export default function LoginPage() {
  return (
    <main className="grid min-h-screen bg-[#06182f] lg:grid-cols-[1fr_520px]">
      <section className="flex min-h-[42vh] flex-col justify-between px-6 py-8 text-white sm:px-10 lg:min-h-screen">
        <div className="flex items-center gap-3">
          <div className="grid h-11 w-11 place-items-center rounded-lg bg-blue-600">
            <Building2 className="h-5 w-5" />
          </div>
          <div>
            <p className="text-xl font-bold">IndusFlow AI</p>
            <p className="text-sm text-blue-200">Smart Industrial Suite</p>
          </div>
        </div>

        <div className="max-w-2xl py-10">
          <p className="mb-4 inline-flex rounded-md bg-blue-500/15 px-3 py-1 text-sm font-bold text-blue-100 ring-1 ring-blue-300/20">AI-native industrial workspace</p>
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl">Manage sales, operations, workforce, and intelligence in one place.</h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-blue-100">CRM, projects, production, warehouse, HRMS, finance, reporting, and AI assistance for manufacturing and industrial teams.</p>
        </div>

        <div className="grid gap-3 text-sm text-blue-100 sm:grid-cols-3">
          <div className="rounded-lg border border-white/10 bg-white/5 p-3">
            <ShieldCheck className="mb-2 h-4 w-4 text-emerald-300" />
            Tenant isolated
          </div>
          <div className="rounded-lg border border-white/10 bg-white/5 p-3">
            <Sparkles className="mb-2 h-4 w-4 text-violet-300" />
            AI assisted
          </div>
          <div className="rounded-lg border border-white/10 bg-white/5 p-3">
            <Building2 className="mb-2 h-4 w-4 text-cyan-300" />
            Industrial ready
          </div>
        </div>
      </section>

      <section className="flex items-center justify-center bg-white px-6 py-10">
        <div className="w-full max-w-sm">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-slate-950">Sign in</h2>
            <p className="mt-2 text-sm text-slate-600">Access your organization workspace.</p>
          </div>

          <form className="space-y-4">
            <label className="block">
              <span className="text-sm font-bold text-slate-700">Email or username</span>
              <span className="mt-2 flex h-11 items-center gap-2 rounded-md border border-slate-200 px-3">
                <Mail className="h-4 w-4 text-slate-400" />
                <input className="min-w-0 flex-1 outline-none" placeholder="ramesh@company.com" />
              </span>
            </label>
            <label className="block">
              <span className="text-sm font-bold text-slate-700">Password</span>
              <span className="mt-2 flex h-11 items-center gap-2 rounded-md border border-slate-200 px-3">
                <KeyRound className="h-4 w-4 text-slate-400" />
                <input className="min-w-0 flex-1 outline-none" placeholder="Enter password" type="password" />
              </span>
            </label>
            <label className="block">
              <span className="text-sm font-bold text-slate-700">Organization code</span>
              <input className="mt-2 h-11 w-full rounded-md border border-slate-200 px-3 outline-none" placeholder="Optional" />
            </label>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 font-semibold text-slate-600">
                <input type="checkbox" className="h-4 w-4 rounded border-slate-300" />
                Remember me
              </label>
              <button className="font-bold text-blue-700" type="button">Forgot password?</button>
            </div>

            <Link href="/home" className="inline-flex h-11 w-full items-center justify-center rounded-md bg-blue-600 text-sm font-bold text-white">
              Login
            </Link>
            <button className="h-11 w-full rounded-md border border-slate-200 text-sm font-bold text-slate-700" type="button">Login with SSO</button>
            <button className="h-11 w-full rounded-md border border-slate-200 text-sm font-bold text-slate-700" type="button">Login with OTP</button>
          </form>
        </div>
      </section>
    </main>
  );
}
