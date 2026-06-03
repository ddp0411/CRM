export type Tone = "blue" | "green" | "amber" | "red" | "violet" | "cyan" | "slate";

export type Metric = {
  label: string;
  value: string;
  delta?: string;
  tone: Tone;
};

export type TableColumn = {
  key: string;
  label: string;
};

export type ModuleTableRow = Record<string, string>;

export type ModulePageData = {
  eyebrow: string;
  title: string;
  description: string;
  tabs: string[];
  filters: string[];
  metrics: Metric[];
  primaryAction: string;
  columns: TableColumn[];
  rows: ModuleTableRow[];
  insights: string[];
};

export const dashboardMetrics: Metric[] = [
  { label: "Total Revenue", value: "INR 24.85L", delta: "+12.3%", tone: "violet" },
  { label: "Active Projects", value: "18", delta: "+8.1%", tone: "blue" },
  { label: "Total Leads", value: "128", delta: "+16.3%", tone: "green" },
  { label: "Pending Tasks", value: "32", delta: "+6.7%", tone: "amber" },
  { label: "Low Stock Items", value: "14", delta: "+27.3%", tone: "red" },
  { label: "Attendance Today", value: "87%", delta: "+5.4%", tone: "cyan" }
];

export const todayTasks = [
  { title: "Follow up with Sterling Tools Pvt. Ltd.", priority: "High", time: "11:00 AM" },
  { title: "Prepare quotation for ABC Corp", priority: "Medium", time: "01:30 PM" },
  { title: "Review BOM for project P-1256", priority: "High", time: "03:00 PM" },
  { title: "Confirm delivery for PO-2311", priority: "Low", time: "04:30 PM" }
];

export const announcements = [
  { title: "Plant maintenance shutdown on 25 May", meta: "2h ago" },
  { title: "Production head townhall at 4 PM", meta: "4h ago" },
  { title: "April payroll has been processed", meta: "1d ago" }
];

export const meetings = [
  { title: "Sales team daily standup", meta: "Today, 10:30 AM" },
  { title: "Client presentation - ABC Corp", meta: "Today, 03:00 PM" },
  { title: "Project review - P-1256", meta: "Tomorrow, 11:00 AM" }
];

const leadRows: ModuleTableRow[] = [
  { id: "L-1256", name: "Sterling Tools Pvt. Ltd.", company: "Sterling Tools", owner: "Ramesh Kumar", status: "New Lead", priority: "High", followUp: "23 May 2026" },
  { id: "L-1255", name: "ABC Corp", company: "ABC Corp", owner: "Priya Sharma", status: "Contacted", priority: "High", followUp: "22 May 2026" },
  { id: "L-1254", name: "Precision Works", company: "Precision Works", owner: "Ramesh Kumar", status: "Contacted", priority: "Medium", followUp: "24 May 2026" },
  { id: "L-1253", name: "MechTech Solutions", company: "MechTech", owner: "Ankit Verma", status: "New Lead", priority: "Medium", followUp: "25 May 2026" },
  { id: "L-1252", name: "BuildWell Infra", company: "BuildWell", owner: "Sanjay Shah", status: "Qualified", priority: "High", followUp: "21 May 2026" },
  { id: "L-1251", name: "Global Engineering", company: "Global Engineering", owner: "Amit Verma", status: "Converted", priority: "Low", followUp: "24 May 2026" }
];

const projectRows: ModuleTableRow[] = [
  { id: "P-1256", name: "Steel Fabrication Plant", client: "ABC Corp", manager: "Ramesh Kumar", status: "In Progress", priority: "High", due: "18 Jun 2026" },
  { id: "P-1255", name: "Conveyor System Setup", client: "Sterling Tools", manager: "Priya Sharma", status: "In Progress", priority: "Medium", due: "27 Jun 2026" },
  { id: "P-1254", name: "Hydraulic Press Unit", client: "MechTech", manager: "Amit Verma", status: "In Progress", priority: "High", due: "10 Jul 2026" },
  { id: "P-1253", name: "Industrial Shed Construction", client: "BuildWell", manager: "Ankit Verma", status: "Completed", priority: "Low", due: "02 Jun 2026" },
  { id: "P-1252", name: "CNC Machine Installation", client: "Global Engineering", manager: "Sanjay Shah", status: "On Hold", priority: "Medium", due: "21 Jul 2026" }
];

const productionRows: ModuleTableRow[] = [
  { id: "PRD-401", item: "Base plate fabrication", project: "P-1256", stage: "Fabrication", supervisor: "Karan Mehta", deadline: "12 Jun 2026", status: "In Production" },
  { id: "PRD-402", item: "Electrical panel assembly", project: "P-1256", stage: "Assembly", supervisor: "Nitin Bansal", deadline: "14 Jun 2026", status: "QC Pending" },
  { id: "PRD-403", item: "Conveyor drive mount", project: "P-1255", stage: "Machining", supervisor: "Asha Iyer", deadline: "18 Jun 2026", status: "Material Ready" },
  { id: "PRD-404", item: "Hydraulic cylinder frame", project: "P-1254", stage: "Welding", supervisor: "Harish Rao", deadline: "20 Jun 2026", status: "Delayed" }
];

const warehouseRows: ModuleTableRow[] = [
  { id: "SKU-1029", item: "MS Plate 12 mm", category: "Raw Material", quantity: "248", unit: "Sheets", warehouse: "Pune Main", status: "In Stock" },
  { id: "SKU-1030", item: "Bearing 6205", category: "Mechanical", quantity: "16", unit: "Pcs", warehouse: "Pune Main", status: "Low Stock" },
  { id: "SKU-1031", item: "Copper Cable 4 sqmm", category: "Electrical", quantity: "420", unit: "Meters", warehouse: "Nashik", status: "In Stock" },
  { id: "SKU-1032", item: "Hydraulic Oil HLP 68", category: "Consumable", quantity: "8", unit: "Drums", warehouse: "Pune Main", status: "Reorder" }
];

const attendanceRows: ModuleTableRow[] = [
  { id: "EMP-101", name: "Ramesh Kumar", department: "Sales", shift: "General", status: "Present", punchIn: "09:04 AM", punchOut: "--" },
  { id: "EMP-102", name: "Priya Sharma", department: "Projects", shift: "General", status: "Present", punchIn: "09:11 AM", punchOut: "--" },
  { id: "EMP-103", name: "Karan Mehta", department: "Production", shift: "Morning", status: "Late", punchIn: "09:42 AM", punchOut: "--" },
  { id: "EMP-104", name: "Sanjay Shah", department: "Finance", shift: "General", status: "On Leave", punchIn: "--", punchOut: "--" }
];

const financeRows: ModuleTableRow[] = [
  { id: "INV-2031", party: "ABC Corp", type: "Invoice", amount: "INR 4,80,000", status: "Pending", due: "08 Jun 2026", owner: "Sanjay Shah" },
  { id: "EXP-1041", party: "MechPro Vendors", type: "Expense", amount: "INR 86,000", status: "Approved", due: "05 Jun 2026", owner: "Nisha Rao" },
  { id: "PAY-3091", party: "Sterling Tools", type: "Receipt", amount: "INR 2,45,000", status: "Received", due: "01 Jun 2026", owner: "Sanjay Shah" },
  { id: "INV-2032", party: "BuildWell Infra", type: "Invoice", amount: "INR 7,20,000", status: "Overdue", due: "28 May 2026", owner: "Nisha Rao" }
];

const reportRows: ModuleTableRow[] = [
  { id: "RPT-01", name: "P&L Summary", category: "Finance", owner: "Finance", schedule: "Monthly", status: "Ready" },
  { id: "RPT-02", name: "Project Status Report", category: "Operations", owner: "Projects", schedule: "Weekly", status: "Scheduled" },
  { id: "RPT-03", name: "Inventory Movement", category: "Warehouse", owner: "Inventory", schedule: "Daily", status: "Ready" },
  { id: "RPT-04", name: "Attendance Summary", category: "HR", owner: "HR", schedule: "Monthly", status: "Draft" }
];

export const modules: Record<string, ModulePageData> = {
  leads: {
    eyebrow: "CRM",
    title: "Lead Management",
    description: "Track every industrial inquiry from source to conversion with owner, priority, status, and follow-up visibility.",
    tabs: ["All Leads", "My Leads", "Follow Ups", "Unassigned", "Converted", "Lost"],
    filters: ["All Sources", "All Status", "All Users", "All Priority"],
    metrics: [
      { label: "Total Leads", value: "128", delta: "+16.3%", tone: "green" },
      { label: "Follow Ups Today", value: "14", delta: "+4", tone: "amber" },
      { label: "Qualified", value: "32", delta: "+9.2%", tone: "blue" },
      { label: "Converted", value: "18", delta: "+5.1%", tone: "violet" }
    ],
    primaryAction: "New Lead",
    columns: [
      { key: "id", label: "Lead ID" },
      { key: "name", label: "Lead Name" },
      { key: "company", label: "Company" },
      { key: "owner", label: "Assigned To" },
      { key: "status", label: "Status" },
      { key: "priority", label: "Priority" },
      { key: "followUp", label: "Follow Up" }
    ],
    rows: leadRows,
    insights: ["3 high-priority leads need follow-up today.", "2 proposal-stage leads can be moved to projects.", "Website leads are converting 18% faster this month."]
  },
  projects: {
    eyebrow: "Projects",
    title: "Project Management",
    description: "Plan, assign, and monitor execution projects from lead conversion to delivery and maintenance.",
    tabs: ["All Projects", "My Projects", "In Progress", "On Hold", "Completed", "Maintenance"],
    filters: ["All Status", "All Clients", "All Managers", "All Types"],
    metrics: [
      { label: "Active Projects", value: "18", delta: "+8.1%", tone: "blue" },
      { label: "At Risk", value: "3", delta: "+1", tone: "red" },
      { label: "Completed", value: "4", delta: "+2", tone: "green" },
      { label: "Budget Used", value: "62%", delta: "-3.4%", tone: "violet" }
    ],
    primaryAction: "New Project",
    columns: [
      { key: "id", label: "Project ID" },
      { key: "name", label: "Project Name" },
      { key: "client", label: "Client" },
      { key: "manager", label: "Manager" },
      { key: "status", label: "Status" },
      { key: "priority", label: "Priority" },
      { key: "due", label: "Due Date" }
    ],
    rows: projectRows,
    insights: ["P-1256 has 4 pending approvals.", "CNC Machine Installation is blocked by material allocation.", "Two projects crossed 80% budget consumption."]
  },
  production: {
    eyebrow: "Operations",
    title: "Production And Operations",
    description: "Track production items, stage progress, supervisors, QC, materials, and dispatch readiness.",
    tabs: ["Dashboard", "Production Orders", "Work Orders", "BOM", "QC", "Maintenance"],
    filters: ["All Stages", "All Supervisors", "All Projects", "All Status"],
    metrics: [
      { label: "Active Items", value: "42", delta: "+6", tone: "blue" },
      { label: "Pending QC", value: "9", delta: "+3", tone: "amber" },
      { label: "Delayed", value: "4", delta: "+2", tone: "red" },
      { label: "Dispatch Ready", value: "11", delta: "+5", tone: "green" }
    ],
    primaryAction: "New Work Order",
    columns: [
      { key: "id", label: "Production ID" },
      { key: "item", label: "Item" },
      { key: "project", label: "Project" },
      { key: "stage", label: "Stage" },
      { key: "supervisor", label: "Supervisor" },
      { key: "deadline", label: "Deadline" },
      { key: "status", label: "Status" }
    ],
    rows: productionRows,
    insights: ["Electrical panel assembly needs QC sign-off.", "Hydraulic cylinder frame is delayed by 2 days.", "MS Plate allocation is sufficient for current orders."]
  },
  warehouse: {
    eyebrow: "Warehouse",
    title: "Warehouse And Inventory",
    description: "Control stock, transfers, low-stock alerts, material requests, vendors, and warehouse locations.",
    tabs: ["Stock Overview", "Inward", "Outward", "Purchase Orders", "Vendors", "Transfers", "Audit Logs"],
    filters: ["All Categories", "All Warehouses", "All Status", "All Vendors"],
    metrics: [
      { label: "Items Tracked", value: "1,248", delta: "+32", tone: "blue" },
      { label: "Low Stock", value: "14", delta: "+5", tone: "red" },
      { label: "Incoming", value: "28", delta: "+7", tone: "green" },
      { label: "Transfers", value: "11", delta: "+2", tone: "cyan" }
    ],
    primaryAction: "Stock In",
    columns: [
      { key: "id", label: "SKU" },
      { key: "item", label: "Item Name" },
      { key: "category", label: "Category" },
      { key: "quantity", label: "Qty" },
      { key: "unit", label: "Unit" },
      { key: "warehouse", label: "Warehouse" },
      { key: "status", label: "Status" }
    ],
    rows: warehouseRows,
    insights: ["Bearing 6205 is below reorder threshold.", "Hydraulic oil reorder should be approved today.", "Copper cable consumption is trending 11% higher."]
  },
  attendance: {
    eyebrow: "HRMS",
    title: "Attendance And Payroll",
    description: "Manage daily attendance, leave balances, payroll readiness, holidays, overtime, and shift compliance.",
    tabs: ["Attendance", "Leaves", "Payroll", "Holiday Calendar", "Overtime", "Reports"],
    filters: ["All Departments", "All Shifts", "All Status", "Today"],
    metrics: [
      { label: "Present Today", value: "136", delta: "87%", tone: "green" },
      { label: "On Leave", value: "12", delta: "8%", tone: "amber" },
      { label: "Late Entries", value: "6", delta: "5%", tone: "red" },
      { label: "Payroll Ready", value: "92%", delta: "+4%", tone: "blue" }
    ],
    primaryAction: "Add Leave",
    columns: [
      { key: "id", label: "Employee ID" },
      { key: "name", label: "Employee" },
      { key: "department", label: "Department" },
      { key: "shift", label: "Shift" },
      { key: "status", label: "Status" },
      { key: "punchIn", label: "Punch In" },
      { key: "punchOut", label: "Punch Out" }
    ],
    rows: attendanceRows,
    insights: ["6 late entries require manager confirmation.", "Payroll lock is scheduled for Friday.", "Production morning shift is fully staffed."]
  },
  finance: {
    eyebrow: "Finance",
    title: "Business Financials",
    description: "Monitor invoices, expenses, payments, budgets, GST readiness, receivables, and cash flow.",
    tabs: ["Overview", "Invoices", "Expenses", "Payments", "Budgets", "Reports", "Settings"],
    filters: ["All Types", "All Status", "This Month", "All Owners"],
    metrics: [
      { label: "Revenue", value: "INR 24.85L", delta: "+12.3%", tone: "green" },
      { label: "Expenses", value: "INR 12.65L", delta: "-4.2%", tone: "blue" },
      { label: "Receivables", value: "INR 8.2L", delta: "+2", tone: "amber" },
      { label: "Overdue", value: "INR 1.4L", delta: "+1", tone: "red" }
    ],
    primaryAction: "Create Invoice",
    columns: [
      { key: "id", label: "Ref ID" },
      { key: "party", label: "Party" },
      { key: "type", label: "Type" },
      { key: "amount", label: "Amount" },
      { key: "status", label: "Status" },
      { key: "due", label: "Due" },
      { key: "owner", label: "Owner" }
    ],
    rows: financeRows,
    insights: ["BuildWell invoice is overdue by 6 days.", "Expense ratio improved by 4.2% this month.", "Three invoices are ready for GST PDF export."]
  },
  reports: {
    eyebrow: "Reports",
    title: "Reports And Analytics",
    description: "Generate board-ready financial, operational, HR, project, inventory, and AI-assisted reports.",
    tabs: ["Executive", "Sales", "Projects", "Inventory", "HR", "Finance", "Export Center"],
    filters: ["All Categories", "All Owners", "All Schedules", "This Month"],
    metrics: [
      { label: "Reports Ready", value: "18", delta: "+5", tone: "green" },
      { label: "Scheduled", value: "9", delta: "+2", tone: "blue" },
      { label: "Exports", value: "42", delta: "+13", tone: "violet" },
      { label: "AI Alerts", value: "7", delta: "+3", tone: "amber" }
    ],
    primaryAction: "New Report",
    columns: [
      { key: "id", label: "Report ID" },
      { key: "name", label: "Report Name" },
      { key: "category", label: "Category" },
      { key: "owner", label: "Owner" },
      { key: "schedule", label: "Schedule" },
      { key: "status", label: "Status" }
    ],
    rows: reportRows,
    insights: ["Project status report is scheduled for Monday.", "Inventory movement has 3 unusual consumption spikes.", "Finance summary is ready for export."]
  }
};

export const kanbanColumns = [
  {
    name: "To Do",
    count: 14,
    tone: "blue" as Tone,
    tasks: [
      ["Site survey report review", "Steel Fabrication Plant", "High"],
      ["Prepare material list", "Hydraulic Press Unit", "Medium"],
      ["Vendor quotation follow up", "Conveyor System Setup", "Medium"]
    ]
  },
  {
    name: "In Progress",
    count: 10,
    tone: "green" as Tone,
    tasks: [
      ["Base plate fabrication", "Steel Fabrication Plant", "High"],
      ["Electrical panel assembly", "Electrical Panel Manufacturing", "Medium"],
      ["Welding quality check", "Cooling Tower Installation", "Low"]
    ]
  },
  {
    name: "Review",
    count: 6,
    tone: "amber" as Tone,
    tasks: [
      ["Drawing approval", "Steel Structure Fabrication", "High"],
      ["Inspection report review", "Hydraulic Press Unit", "Medium"],
      ["Material test certificate review", "Power Pack Unit", "Low"]
    ]
  },
  {
    name: "Completed",
    count: 20,
    tone: "green" as Tone,
    tasks: [
      ["Project kickoff meeting", "Steel Fabrication Plant", "Low"],
      ["Work order confirmation", "Conveyor System Setup", "Low"],
      ["Site safety checklist", "Steel Structure Fabrication", "Low"]
    ]
  },
  {
    name: "Overdue",
    count: 8,
    tone: "red" as Tone,
    tasks: [
      ["Submit fabrication drawing", "Steel Fabrication Plant", "High"],
      ["Payment follow up", "ABC Corp", "Medium"],
      ["Delivery schedule update", "Electrical Panel Manufacturing", "High"]
    ]
  }
];

export const projectDetailTabs = [
  "Files",
  "Notes",
  "Tasks",
  "Quotes",
  "Orders",
  "Invoices",
  "Purchase Request",
  "Inventory",
  "Manpower",
  "Financials",
  "Checklists",
  "AI Studio",
  "Details"
];
