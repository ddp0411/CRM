"use client";

import { useSyncExternalStore } from "react";
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Cell, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const revenueData = [
  { day: "1 May", revenue: 40, expense: 16 },
  { day: "6 May", revenue: 52, expense: 21 },
  { day: "11 May", revenue: 44, expense: 18 },
  { day: "16 May", revenue: 61, expense: 29 },
  { day: "21 May", revenue: 56, expense: 25 },
  { day: "26 May", revenue: 78, expense: 34 },
  { day: "31 May", revenue: 92, expense: 42 }
];

const projectData = [
  { name: "In Progress", value: 10, color: "#0B6BFF" },
  { name: "Completed", value: 4, color: "#00B894" },
  { name: "On Hold", value: 3, color: "#F59E0B" },
  { name: "Not Started", value: 1, color: "#EF4444" }
];

const expenseData = [
  { name: "Raw Material", value: 42 },
  { name: "Labor", value: 26 },
  { name: "Vendors", value: 18 },
  { name: "Logistics", value: 14 }
];

const subscribe = () => () => {};
const getClientSnapshot = () => true;
const getServerSnapshot = () => false;

export function DashboardCharts() {
  const mounted = useSyncExternalStore(subscribe, getClientSnapshot, getServerSnapshot);

  if (!mounted) {
    return (
      <div className="grid gap-4 xl:grid-cols-[1.4fr_0.8fr_0.8fr]">
        {["Revenue Overview", "Projects By Status", "Top Expense Categories"].map((title) => (
          <section key={title} className="app-card p-4">
            <h2 className="text-sm font-bold text-slate-950">{title}</h2>
            <div className="mt-4 h-72 animate-pulse rounded-md bg-slate-100" />
          </section>
        ))}
      </div>
    );
  }

  return (
    <div className="grid gap-4 xl:grid-cols-[1.4fr_0.8fr_0.8fr]">
      <section className="app-card p-4">
        <div className="mb-4 flex items-center justify-between gap-3">
          <h2 className="text-sm font-bold text-slate-950">Revenue Overview</h2>
          <span className="rounded-md bg-slate-100 px-2 py-1 text-xs font-bold text-slate-600">This Month</span>
        </div>
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={revenueData} margin={{ left: -24, right: 8, top: 8, bottom: 0 }}>
              <defs>
                <linearGradient id="revenue" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#0B6BFF" stopOpacity={0.25} />
                  <stop offset="100%" stopColor="#0B6BFF" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="expense" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#00B894" stopOpacity={0.22} />
                  <stop offset="100%" stopColor="#00B894" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid stroke="#E2E8F0" strokeDasharray="3 3" />
              <XAxis dataKey="day" tick={{ fontSize: 12 }} stroke="#94A3B8" />
              <YAxis tick={{ fontSize: 12 }} stroke="#94A3B8" />
              <Tooltip />
              <Area type="monotone" dataKey="revenue" stroke="#0B6BFF" strokeWidth={3} fill="url(#revenue)" />
              <Area type="monotone" dataKey="expense" stroke="#00B894" strokeWidth={3} fill="url(#expense)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </section>

      <section className="app-card p-4">
        <h2 className="text-sm font-bold text-slate-950">Projects By Status</h2>
        <div className="mt-4 h-64">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={projectData} innerRadius={58} outerRadius={88} paddingAngle={3} dataKey="value">
                {projectData.map((entry) => (
                  <Cell key={entry.name} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="space-y-2">
          {projectData.map((item) => (
            <div key={item.name} className="flex items-center justify-between text-sm">
              <span className="flex items-center gap-2 text-slate-600">
                <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: item.color }} />
                {item.name}
              </span>
              <span className="font-bold text-slate-950">{item.value}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="app-card p-4">
        <h2 className="text-sm font-bold text-slate-950">Top Expense Categories</h2>
        <div className="mt-4 h-72">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={expenseData} layout="vertical" margin={{ left: 10, right: 8, top: 8, bottom: 0 }}>
              <CartesianGrid stroke="#E2E8F0" strokeDasharray="3 3" />
              <XAxis type="number" hide />
              <YAxis type="category" dataKey="name" tick={{ fontSize: 12 }} width={90} stroke="#64748B" />
              <Tooltip />
              <Bar dataKey="value" fill="#7C3AED" radius={[0, 6, 6, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </section>
    </div>
  );
}
