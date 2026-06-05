**# IndusFlow AI — Product Requirements Document (PRD)**

| Field | Value |
|---|---|
| Document | Product Requirements Document |
| Version | 1.1 |
| Status | Draft — Pending Approval |
| Author | IndusFlow AI Team |
| Created | 2025 |
| Last Updated | 2025 |
| Supersedes | PRD v1.0 (initial draft) |

---

## Table of Contents

1. [Product Overview](#1-product-overview)
2. [Target Users](#2-target-users)
3. [Multi-Tenant SaaS Model](#3-multi-tenant-saas-model)
4. [Subscription Plans](#4-subscription-plans)
5. [User Roles & Access Levels](#5-user-roles--access-levels)
6. [Sidebar Navigation](#6-sidebar-navigation)
7. [Home Module](#7-home-module)
8. [Dashboard Module](#8-dashboard-module)
9. [Leads / CRM Module](#9-leads--crm-module)
10. [Projects Module](#10-projects-module)
11. [Production / Operations Module](#11-production--operations-module)
12. [My Tasks Module](#12-my-tasks-module)
13. [Warehouse / Inventory Module](#13-warehouse--inventory-module)
14. [Procurement Module](#14-procurement-module)
15. [Attendance & HRMS Module](#15-attendance--hrms-module)
16. [Finance Module](#16-finance-module)
17. [Reports & Analytics Module](#17-reports--analytics-module)
18. [AI Studio Module](#18-ai-studio-module)
19. [Settings Module](#19-settings-module)
20. [Mobile Application](#20-mobile-application)
21. [Cross-Cutting Systems](#21-cross-cutting-systems)
22. [Notifications System](#22-notifications-system)
23. [Core Product Workflows](#23-core-product-workflows)
24. [Data Management Principles](#24-data-management-principles)
25. [Security & Compliance](#25-security--compliance)
26. [Non-Functional Requirements](#26-non-functional-requirements)
27. [Repository Structure](#27-repository-structure)
28. [Development Roadmap](#28-development-roadmap)
29. [Acceptance Criteria](#29-acceptance-criteria)
30. [Future Scope](#30-future-scope)
31. [Glossary](#31-glossary)

---

## 1. Product Overview

### Product Name
IndusFlow AI

### Product Type
AI-Native Multi-Tenant Industrial ERP + CRM + HRMS SaaS Platform

### Product Vision
IndusFlow AI is an AI-powered industrial operating platform designed for manufacturing industries, industrial businesses, fabrication companies, engineering firms, and smart manufacturing enterprises.

The platform unifies CRM, ERP, HRMS, Production Management, Warehouse Management, Procurement, Finance, Analytics, and AI Automation into one SaaS ecosystem — accessible on web and mobile.

### Problem Statement
Industrial businesses operate using disconnected software systems for sales, operations, HR, finance, production, and inventory management. This causes:

- Poor operational visibility across departments
- Manual, error-prone workflows
- Delayed inter-department communication
- Inefficient project execution and tracking
- Inventory mismatches and procurement delays
- Scattered reporting with no unified analytics
- Lack of centralized access control
- No AI-assisted decision-making

IndusFlow AI solves this by centralizing all operations into a modern, AI-native platform built specifically for the industrial sector.

### Core Objectives

- Centralize all industrial operations into one platform
- Streamline CRM and project delivery workflows
- Improve manufacturing and production visibility
- Simplify inventory and procurement tracking
- Automate HR, attendance, and payroll workflows
- Enforce role-based access control at every level
- Provide AI-powered insights, automation, and decision support
- Support scalable multi-company SaaS architecture
- Deliver full feature parity on web and mobile

---

## 2. Target Users

### Industries
- Manufacturing companies and units
- Smart manufacturing and automation businesses
- Industrial engineering firms
- Fabrication plants and workshops
- Heavy machinery and equipment businesses
- Industrial service providers and contractors

### Primary User Personas

| Persona | Role | Primary Need |
|---|---|---|
| Business Owner | Strategic oversight | Dashboard, reports, AI insights |
| Operations Manager | Day-to-day execution | Projects, production, tasks |
| Sales Executive | Pipeline management | Leads, follow-ups, quotations |
| Project Manager | Project delivery | Project workspace, tasks, financials |
| Production Manager | Manufacturing control | Production orders, QC, machines |
| HR Manager | People management | Attendance, leaves, payroll |
| Finance Executive | Financial control | Invoices, expenses, P&L |
| Warehouse Manager | Inventory control | Stock, GRN, material requests |
| Employee | Personal access | Own tasks, attendance, payslips |

---

## 3. Multi-Tenant SaaS Model

### Organization-Based Architecture
The platform is designed as a multi-company SaaS system. Each client company operates as an independent **Organization** with complete data isolation.

Examples of organizations:
- IndusFlow Demo Org
- Sterling Industries Pvt Ltd
- ABC Manufacturing Co.
- Delta Steel Works

### Per-Organization Isolation
Each organization has fully isolated:
- Users and departments
- Projects, leads, and clients
- Inventory and warehouse data
- Financial records and invoices
- Attendance and payroll data
- AI conversations and documents
- Audit logs and activity history
- Notifications and settings

### Organization Administration
Each organization has:
- One or more organization admins
- Role-based team structure
- Department-wise access segmentation
- Configurable module visibility
- Organization branding (logo, name, color)
- Timezone and currency settings
- GST number and address

### Module Visibility
Organizations can enable or disable modules based on:
- Subscription plan entitlements
- Business requirements
- Organization admin preferences

The sidebar dynamically renders only enabled modules for each user's role.

---

## 4. Subscription Plans

### Plan Tiers

| Feature | Starter | Professional | Enterprise |
|---|---|---|---|
| Users | Up to 10 | Up to 50 | Unlimited |
| Organizations | 1 | 1 | Multiple (reseller) |
| Storage | 2 GB | 10 GB | Custom |
| CRM (Leads) | Yes | Yes | Yes |
| Projects | Yes | Yes | Yes |
| Production | No | Yes | Yes |
| Warehouse | No | Yes | Yes |
| Procurement | No | Yes | Yes |
| Finance | No | Yes | Yes |
| HRMS (Attendance + Payroll) | Basic | Full | Full |
| Reports & Analytics | Basic | Advanced | Advanced + Custom |
| AI Studio | 100 queries/month | 1,000 queries/month | Unlimited |
| API Access | No | Yes | Yes |
| Custom Roles | No | Yes | Yes |
| SLA | None | Email support | Dedicated support |
| White-labeling | No | No | Yes |

### Plan Enforcement Rules
- Module access is blocked at the API level if the organization's plan does not include it
- AI credit usage is tracked per organization per month
- Storage limits are enforced on file uploads
- User limits are enforced at the invitation level
- Downgrading a plan disables modules but does not delete data
- Organizations exceeding limits receive in-app warnings before enforcement

### Billing Cycle
- Monthly and annual billing options
- Annual billing offers 2 months free
- Stripe handles all payment processing
- Failed payments trigger a 7-day grace period before suspension

---

## 5. User Roles & Access Levels

### Super Admin (Platform Level)
Platform-wide access managed through the internal Django admin portal:
- Organization management and provisioning
- Subscription and billing management
- Platform-wide monitoring and analytics
- Support ticket management
- Feature flag management

### Organization Admin
Organization-wide control:
- User creation, invitation, and deactivation
- Role and permission management
- Department creation and management
- Module enable/disable
- Organization settings and branding
- All module access (read + write + delete)

### Manager (Configurable per department)
- Access to their department's module data
- Team member oversight
- Approval authority for leaves, expenses, purchase requests
- Report generation for their scope

### Sales Executive
- Leads module (own leads + team leads based on config)
- Quotation creation
- Follow-up scheduling
- Assigned project visibility (read-only)

### Project Manager
- Full project workspace access
- Task assignment and management
- Manpower allocation
- Production tracking
- Inventory request creation

### Production Manager
- Production orders (full access)
- Machine log management
- Quality control
- Dispatch tracking

### Warehouse Manager
- Inventory (full access)
- GRN processing
- Stock transfers
- Low stock management

### HR Manager
- All employee attendance records
- Leave approval and management
- Payroll processing
- Employee profiles

### Finance Executive
- Invoices, expenses, receivables, payables
- Budget tracking
- Financial reports

### Employee
Restricted to personal data only:
- Own attendance records
- Own leave applications and balance
- Own payslip download
- Assigned tasks only
- Cannot view other employees' data

### Permission Model
Each role has configurable permissions per module:

| Permission | Description |
|---|---|
| View | Can read records |
| Create | Can create new records |
| Edit | Can modify existing records |
| Delete | Soft-delete only |
| Export | Can export data (PDF, Excel, CSV) |
| Approve | Can approve pending items |

---

## 6. Sidebar Navigation

### Navigation Items (in order)

1. Home
2. Dashboard
3. Leads
4. Projects
5. Production / Operations
6. My Tasks
7. Warehouse / Inventory
8. Procurement
9. Attendance
10. Finance
11. Reports & Analytics
12. AI Studio
13. Settings

### Sidebar Behavior
- No expandable nested menus — flat, single-level sidebar
- Role-based visibility: each user sees only modules their role permits
- Module-based visibility: each organization sees only modules enabled in their plan
- Dynamic rendering driven by the `/api/me/modules/` endpoint response
- Clean enterprise UI — no icons-only collapsed mode on desktop
- Mobile sidebar: slide-in drawer from the left

### Module Visibility API Contract

```
GET /api/me/modules/

Response:
{
  "home": true,
  "dashboard": true,
  "leads": true,
  "projects": true,
  "production": false,
  "tasks": true,
  "warehouse": false,
  "procurement": false,
  "attendance": true,
  "finance": false,
  "reports": true,
  "ai_studio": true,
  "settings": true
}
```

The frontend renders sidebar items based entirely on this response. No hardcoded visibility logic on the frontend.

---

## 7. Home Module

### Purpose
Universal landing page for all users. Provides quick access to daily workflow, key metrics, and essential actions.

### Home Widgets

#### Attendance Card
- Punch In / Punch Out button
- Current shift status and timing
- Today's attendance summary
- Location verification indicator

#### My Tasks Today
- Tasks due today
- Overdue tasks count
- Quick "Mark Complete" action

#### Quick Actions Panel
Shortcut buttons for most common actions:
- Create Lead
- Add Task
- Raise Leave Request
- Create Expense
- Request Material

#### Announcements
- Organization-wide notices
- HR policy updates
- Operational alerts
- Pinned messages from admins

#### Meetings & Calendar
- Today's scheduled meetings
- Upcoming events (next 3 days)
- Calendar quick-view

#### Leave Balance Card
- Casual Leave remaining
- Sick Leave remaining
- Paid Leave remaining
- Comp-off balance

#### AI Assistant Widget (floating)
- Always-visible chat trigger
- Contextual prompts based on current module
- Quick analytics queries
- Task summaries

### Home Access
- Visible to all roles
- Widget visibility is role-dependent (e.g., Leave Balance hidden for Super Admin)

---

## 8. Dashboard Module

### Purpose
High-level business visibility and operational intelligence for managers and leadership.

### Role-Based Dashboard Views

#### Admin / Business Owner Dashboard
- Revenue overview (MTD, YTD, trend)
- Active and overdue projects count
- Lead conversion funnel
- Attendance rate (organization-wide)
- Pending approvals count
- Top 5 alerts requiring action

#### Sales Dashboard
- Lead pipeline (by stage)
- Lead conversion rate
- Follow-up due today
- Won vs lost this month
- Sales team performance

#### HR Dashboard
- Attendance trend (30 days)
- Leave requests pending approval
- Headcount summary by department
- Upcoming payroll processing date

#### Finance Dashboard
- Receivables vs payables
- Cash flow trend
- Overdue invoices
- Expense summary by category

#### Operations Dashboard
- Active production orders
- Delayed orders count
- Machine downtime events
- QC pass/fail rate
- Dispatch pending

### Dashboard Access
- Admin, Manager, and Leadership roles only
- Employees do not have dashboard access
- Dashboard data reflects only the user's organization

---

## 9. Leads / CRM Module

### Purpose
Manage the complete sales and lead lifecycle from first contact to project conversion.

### Lead Views
- All Leads (list + kanban)
- My Leads (assigned to current user)
- Follow-ups Due
- Qualified Leads
- Lost Leads
- Converted Leads

### Lead Fields

| Field | Type | Notes |
|---|---|---|
| Lead ID | Auto | Format: IF-LEAD-001 |
| Lead Name | Text | Contact person name |
| Company Name | Text | |
| Email | Email | |
| Phone | Phone | |
| Source | Enum | Website, Referral, Cold Call, Exhibition, Social Media, Other |
| Status | Enum | See lifecycle below |
| Priority | Enum | Low, Medium, High, Urgent |
| Assigned To | User FK | |
| Industry | Text | Manufacturing, Engineering, etc. |
| Estimated Value | Decimal | Budget/deal value |
| Requirements | Rich Text | |
| Follow-up Date | Date | |
| Converted Project | Project FK | Nullable — set on conversion |
| Is Converted | Boolean | |
| Created By | User FK | |
| Created At | Datetime | |

### Lead Lifecycle

```
New → Contacted → Follow-Up → Quotation Shared → Negotiation → Won / Lost
```

State transition rules:
- Only forward transitions allowed from the UI
- Won leads can be re-opened as Active if deal falls through before project starts
- Lost leads are soft-deleted and viewable in Lost tab

### Lead Sub-Features
- Notes (call notes, meeting notes, email notes)
- Follow-up scheduler with reminder emails (Celery)
- File attachments (S3)
- Activity timeline (auto-logged on every action)
- AI Insights tab (lead summary, suggested next action)
- Quotation creation from lead

### Lead to Project Conversion
- Triggered by "Convert to Project" button on qualified lead
- Atomic operation: creates project + links lead history
- Lead marked as converted, status frozen
- Converted lead remains visible with link to created project

---

## 10. Projects Module

### Purpose
Full project execution workspace for managing finalized industrial projects from kickoff to completion.

### Project Views
- All Projects (grid / list / kanban)
- My Projects
- By Status: In Progress, On Hold, Completed, Cancelled, Maintenance

### Project Fields

| Field | Type | Notes |
|---|---|---|
| Project ID | Auto | Format: IF-PROJ-001 |
| Project Name | Text | |
| Client Name | Text | |
| Client Phone | Phone | |
| Client Email | Email | |
| Source Lead | Lead FK | Nullable |
| Assigned Manager | User FK | |
| Team Members | M2M Users | |
| Status | Enum | Planning, In Progress, On Hold, Completed, Cancelled, Maintenance |
| Priority | Enum | Low, Medium, High, Critical |
| Start Date | Date | |
| End Date | Date | |
| Budget | Decimal | |
| Address / Site | Text | |
| Description | Rich Text | |

### Project Internal Modules

Each project has a tabbed workspace with the following sub-modules:

#### Details
- Full project information
- Client contact details
- Team members
- Timeline and budget overview

#### Files
- Document upload (contracts, drawings, BOQs)
- Version history
- File categories
- Download and share

#### Notes
- Rich text notes (TipTap editor)
- Pinned notes
- Authored and timestamped

#### Tasks
- Kanban board (To Do / In Progress / Review / Completed / Overdue)
- Task assignment, priority, due date
- Sub-tasks support
- Comments on tasks

#### Quotes
- Line-item quotation builder
- GST calculation
- PDF export
- Version history
- Approval workflow (draft → sent → approved → rejected)

#### Orders
- Sales orders
- Work orders
- Purchase orders linked to this project

#### Invoices
- GST invoice generation
- Line items with tax breakdown
- PDF export
- Payment status tracking

#### Purchase Requests
- Material request creation
- Multi-step approval workflow
- Links to warehouse inventory

#### Manpower
- Team allocation per phase
- Attendance linked to project

#### Financials
- Budget vs actual spend
- Expense tracking
- Invoice summary
- Cost breakdown by category

#### Checklists
- Custom quality and delivery checklists
- Completion tracking

#### AI Studio (project-scoped)
- AI assistant with project context injected
- Ask questions about this specific project's data
- AI-generated project summary

---

## 11. Production / Operations Module

### Purpose
Manage manufacturing workflows, work orders, and shop-floor operations.

### Production Order Fields
- Production ID (auto: IF-PROD-001)
- Product name
- Linked project (nullable)
- Batch number
- Assigned supervisor
- Quantity
- Target deadline
- Current stage
- Status

### Production Stages

```
Planning → Material Allocation → Fabrication → Assembly → Quality Check → Dispatch → Completed
```

### Features

#### Work Orders
- Create and assign work orders
- Stage-wise progress tracking
- Supervisor assignment per stage

#### Bill of Materials (BOM)
- Define materials required per product
- Link to inventory items
- Track material consumption per production order

#### Material Consumption Tracking
- Log actual vs planned material usage
- Auto-deduct from warehouse inventory on confirmation

#### Machine Management
- Machine register (name, type, location)
- Runtime logging per production order
- Breakdown reporting
- Maintenance scheduling

#### Quality Control
- Configurable QC checklist per product type
- Inspector assignment
- Pass / Fail result with notes
- QC report generation (PDF)

#### Dispatch Tracking
- Dispatch date and vehicle details
- Delivery confirmation
- Links to project and invoice

#### Production Dashboard
- Active orders count and status breakdown
- Delayed orders (past deadline)
- QC pending items
- Machine downtime summary

---

## 12. My Tasks Module

### Purpose
Centralized personal task management across all modules and projects.

### Task Views
- Kanban (To Do / In Progress / Review / Completed / Overdue)
- List view (sortable, filterable)
- Calendar view (due date based)

### Task Fields
- Title
- Description
- Assigned to (user)
- Priority (Low / Medium / High / Urgent)
- Due date
- Status
- Parent task (for sub-tasks)
- Linked module (Project / Lead / Production / General)
- Tags

### Task Features
- Comments (with @mentions)
- File attachments
- Activity history
- Recurring tasks (daily / weekly / monthly)
- Task import from project kanban

### Task Statuses
```
To Do → In Progress → Review → Completed
                    ↘ Overdue (auto, when past due date)
```

---

## 13. Warehouse / Inventory Module

### Purpose
Manage inventory, stock movements, warehouse locations, and material requests.

### Inventory Item Fields
- Item ID (auto: IF-ITEM-001)
- Name
- SKU
- Category
- Unit of measurement
- Current quantity
- Minimum stock level (for alerts)
- Warehouse location (warehouse + rack + bin)
- Cost price
- Status (Active / Discontinued)

### Features

#### Stock Management
- Stock In (purchase / GRN)
- Stock Out (consumption / issue)
- Stock transfer between warehouses
- Real-time quantity tracking

#### Warehouse & Locations
- Multiple warehouses per organization
- Rack and bin level tracking
- Warehouse transfer workflows

#### GRN (Goods Received Note)
- Created on stock receipt from vendor
- Links to purchase order
- Partial receipt support
- Auto-updates inventory on save

#### Material Requests
- Raised from project Purchase Requests
- Approved by warehouse manager
- Auto-deducts from inventory on issue

#### Low Stock Alerts
- Celery periodic task checks stock levels
- In-app + email alert when item falls below minimum level
- Alert dismissed when stock is replenished

#### Barcode Support (mobile)
- Camera-based barcode scanning for item lookup
- Scan-to-issue workflow on mobile app

---

## 14. Procurement Module

### Purpose
Manage vendor relationships, purchase orders, and procurement workflows separate from warehouse operations.

### Vendor Management
- Vendor profile (name, contact, email, phone, GST, address)
- Payment terms
- Vendor rating and notes
- Purchase history per vendor

### Purchase Order (PO) Management

**PO Fields:**
- PO number (auto: IF-PO-001)
- Vendor
- Line items (item, quantity, unit price, tax)
- Total amount
- Expected delivery date
- Linked project (nullable)
- Status: Draft → Sent → Acknowledged → Partially Received → Completed → Cancelled

**PO Workflow:**
```
Draft → Approval → Sent to Vendor → GRN Created → Completed
```

### Procurement Features
- PO creation from project Purchase Requests
- PO PDF generation and email to vendor
- Partial delivery tracking
- Price comparison across vendors for same item
- Procurement spend analytics by vendor and category

---

## 15. Attendance & HRMS Module

### Purpose
Manage employee attendance, leave workflows, shift management, and payroll processing.

### Attendance Features

#### Punch In / Punch Out
- Web: button-based with GPS verification
- Mobile: GPS + selfie capture
- Geofencing: configurable radius check (optional per organization)
- Late arrival and early departure flagging
- Overtime auto-calculation

#### Shifts
- Multiple shift definitions per organization
- Employee-to-shift assignment
- Shift schedule calendar

#### Attendance Records
- Daily attendance per employee
- Punch in/out times, GPS coordinates, selfie URLs
- Status: Present / Absent / Half Day / On Leave / Holiday
- Manual correction by HR (with audit log)

### Leave Management

#### Leave Types
- Casual Leave
- Sick Leave
- Paid Leave
- Comp-off

#### Leave Workflow
```
Employee Applies → Manager Reviews → Approved / Rejected → Balance Updated
```

#### Leave Balance
- Per-employee annual balance per leave type
- Auto-deducted on approval
- Balance carry-forward rules (configurable)

#### Holiday Calendar
- Organization-wide holiday list
- State-wise holiday templates
- Public holidays excluded from leave count

### Payroll

#### Salary Structure
- Configurable components: Basic, HRA, DA, Special Allowance, PF, Professional Tax, TDS
- JSONB structure for flexibility per employee

#### Monthly Payroll Run
- Triggered by HR Manager (or scheduled)
- Celery async task processes all employees
- Calculates: gross = components sum, deductions = PF + PT + TDS, net = gross - deductions
- Generates payslip PDF per employee (stored in S3)
- Status: Draft → Processed → Paid

#### Employee Access
- Own payslip view and download only
- Cannot see any other employee's payroll data

---

## 16. Finance Module

### Purpose
Centralized financial management for invoices, expenses, payments, and budget tracking.

### Features

#### Invoices
- Organization-level invoice management (separate from project invoices)
- GST-compliant invoice generation
- PDF export
- Payment status: Unpaid / Partially Paid / Paid / Overdue

#### Expenses
- Expense categories (configurable)
- Receipt upload (S3)
- Linked to project or department
- Approval workflow for expenses above configurable threshold

#### Payments
- Receivables tracking (amounts owed to the organization)
- Payables tracking (amounts owed to vendors)
- Payment recording with reference number
- Overdue payment alerts

#### Budget Management
- Budget allocation by department or project
- Actual spend tracking
- Budget vs actual reports
- Overspend alerts

#### GST Reports
- GSTR-1 summary (outward supplies)
- GSTR-2 summary (inward supplies)
- Tax liability report

#### Financial Analytics
- P&L summary
- Cash flow statement
- Expense breakdown by category
- Month-over-month comparison

---

## 17. Reports & Analytics Module

### Purpose
Business intelligence center for pre-built reports, scheduled exports, and custom report building.

### Pre-Built Report Categories

| Category | Reports |
|---|---|
| Sales | Lead pipeline, conversion rate, revenue by source, follow-up performance |
| Projects | Project status, overdue tasks, budget vs actual, delivery timelines |
| Production | Order fulfillment rate, QC pass/fail, machine utilization, delay analysis |
| Inventory | Stock levels, consumption trends, low stock history, GRN summary |
| HR | Attendance summary, leave utilization, payroll summary, headcount |
| Finance | P&L, cash flow, invoice aging, expense breakdown |

### Report Features
- Date range filters on all reports
- Export to PDF, Excel (.xlsx), and CSV
- Scheduled reports: configure email delivery (daily / weekly / monthly)
- Charts: bar, line, pie, funnel per report type
- Role-based report visibility

### Custom Report Builder
- Field selector (choose columns from any module)
- Filter builder (add conditions per field)
- Group by support
- Save as named report
- Share report with team

### AI-Generated Reports
- Natural language query: "Show me all projects delayed more than 2 weeks"
- AI generates the report and visualisation
- Results downloadable

---

## 18. AI Studio Module

### Purpose
AI-powered operational intelligence and automation embedded throughout the platform.

### AI Chat Interface

#### Global Chat (full-page AI Studio)
- Streaming responses via WebSocket (Django Channels)
- Conversation history stored per organization and user
- Context-aware: user's role and module permissions respected
- AI never returns data outside the user's organization

#### Project-Scoped Chat
- Available inside each project's AI Studio tab
- Project data (tasks, financials, team, timeline) injected as context
- Questions answered with project-specific data only

#### Home Widget Chat
- Floating widget on Home page
- Quick queries: "What's overdue today?", "Summarize last week's attendance"

### AI Capabilities

#### SQL Agent ("Ask Your Data")
- Natural language to SQL translation
- Executes READ-ONLY queries on the organization's PostgreSQL data
- Returns formatted results + optional chart
- Examples:
  - "How many leads were converted this month?"
  - "Which project has the highest expenses?"
  - "Show me top 5 vendors by purchase volume"

#### Document Q&A (RAG)
- Upload documents: contracts, BOQs, technical drawings, manuals
- Documents chunked, embedded (OpenAI), stored in pgvector
- Questions answered with citations to the source document
- Supported formats: PDF, DOCX, TXT
- Example: "What are the warranty terms in this contract?"

#### Module AI Insights
- Leads: AI-suggested next action, lead scoring, summary
- Projects: AI-generated project health summary, risk flags
- Production: bottleneck detection, delay prediction
- Finance: anomaly detection in expenses, cash flow forecast

#### AI Automation Builder
- Trigger types: scheduled (cron), event-based (new lead, status change), threshold-based (stock below X)
- Action types: send notification, create task, generate report, send email
- No-code visual builder
- Active automations dashboard with last-run status

#### AI Report Generation
- "Generate a monthly performance report for all projects"
- AI aggregates data, writes narrative, adds charts
- Output: formatted PDF report

### AI Credit Model
- Each AI query consumes credits (1 credit per standard query, 3 for document Q&A, 5 for report generation)
- Credit balance displayed in UI
- Starter: 100 credits/month, Professional: 1,000/month, Enterprise: unlimited
- Credit top-up available

### Technical Notes (for TRD)
- LLM: OpenAI GPT-4o (primary), Claude API (planned for long-context documents)
- Orchestration: LangChain + LangGraph
- Embeddings: OpenAI text-embedding-3-small
- Vector store: pgvector (same PostgreSQL instance)
- Streaming: OpenAI streaming API → Django Channels → WebSocket → Frontend

---

## 19. Settings Module

### Purpose
Organization-wide configuration and administration.

### Settings Sections

#### Organization Settings
- Company name, logo, address
- Timezone, currency, date format
- GST number and tax configuration
- Default language

#### Users
- Invite new users (email invitation)
- Active / Inactive user management
- Role assignment
- Department assignment
- Password reset trigger

#### Roles & Permissions
- Create custom roles
- Assign permissions per module per role (View / Create / Edit / Delete / Export / Approve)
- Role duplication
- System roles (Admin, Employee) cannot be deleted

#### Module Visibility
- Enable / disable modules per organization
- Preview impact before saving (shows which roles lose access)

#### Departments
- Create and rename departments
- Assign department heads
- Department-wise user grouping

#### Notifications
- Configure which events trigger notifications
- Email notification templates (editable)
- Notification preferences per user

#### Audit Logs
- Complete activity history
- Filter by user, module, action type, date range
- Export to CSV
- Read-only (no delete)

#### Integrations (Phase 11+)
- Stripe (billing — auto-configured)
- WhatsApp Business (notifications)
- Google Calendar (meeting sync)

---

## 20. Mobile Application

### Platform
React Native + Expo SDK 51 (managed workflow), targeting Android 8+ and iOS 14+.

### Priority Screens (MVP)

| Screen | Key Features |
|---|---|
| Home | Punch in/out with GPS + selfie, task summary, quick actions |
| My Tasks | Kanban view, task detail, comments |
| Leads | Lead list, lead detail, add note, follow-up |
| Attendance | Personal attendance history, leave application |
| AI Assistant | Voice + text chat, streaming responses |
| Payslip Viewer | Monthly payslips, PDF download |
| Inventory (barcode) | Barcode scan for item lookup, stock check |

### Mobile-Only Features
- GPS punch with geofencing validation
- Selfie capture on attendance (expo-camera)
- Push notifications (expo-notifications)
- Biometric login: Face ID / fingerprint (expo-local-authentication)
- Barcode scanning for inventory (expo-barcode-scanner)
- Offline attendance queue (sync when connected)
- Secure JWT storage (expo-secure-store — replaces localStorage)

### Mobile Access Rules
- All data access enforced by the same backend API as web
- No mobile-specific data bypass
- JWT tokens stored in expo-secure-store (encrypted)
- Session expires same as web (configurable per organization)

### Build and Distribution
- Android: Google Play Store (AAB via EAS Build)
- iOS: Apple App Store (IPA via EAS Build)
- OTA updates: EAS Update for JS-only changes (no store review)
- Internal testing: EAS Preview builds

---

## 21. Cross-Cutting Systems

These are standalone backend modules that all other modules depend on. Their behavior is specified here once rather than repeated per module.

### Files System

**Purpose:** Centralized file management for all modules.

**Behavior:**
- Files can be attached to any record (project, lead, task, production order, etc.) via polymorphic association
- Supported formats: PDF, DOCX, XLSX, images (JPG, PNG, WebP), DWG (view only)
- File size limit: 50 MB per file, 2 GB per organization (Starter), 10 GB (Professional)
- All files stored in AWS S3 — never on local filesystem in production
- Virus scan on upload (AWS Macie or ClamAV)
- Soft-delete: deleted files go to trash, permanently removed after 30 days
- File versioning: new upload of same-named file creates a version, previous version preserved

### Comments System

**Purpose:** Threaded discussion on any record.

**Behavior:**
- Comments can be added to: leads, tasks, projects, production orders, purchase requests, expenses, and leaves
- Supports @mention of team members (triggers notification)
- Rich text: bold, italic, links, inline code
- File attachment on comments
- Edit window: 15 minutes after posting
- Delete: soft-delete, replaced with "Comment deleted" placeholder
- Real-time: new comments appear via WebSocket without page refresh

### Approvals Engine

**Purpose:** Reusable multi-step approval workflow for any approvable entity.

**Approvable entities:**
- Leave requests
- Expense claims (above threshold)
- Purchase requests
- Quotations
- Production order stage transitions
- Payroll runs

**Approval workflow:**
```
Pending → Under Review → Approved / Rejected
                       ↘ Revision Requested → Resubmitted
```

**Rules:**
- Approval chain is configurable per organization (single or multi-level)
- Approver receives in-app + email notification
- Submitter receives notification on every status change
- Rejected items require a rejection reason (mandatory)
- All approval actions are audit-logged with timestamp and approver identity
- Approved items cannot be un-approved without a new workflow instance

---

## 22. Notifications System

### Notification Channels
- In-app (bell icon, notification center)
- Email (SendGrid / Postmark)
- Push notifications (mobile — Expo Notifications)
- WhatsApp (future scope — Phase 12)

### Notification Triggers

| Event | Who Gets Notified |
|---|---|
| New lead assigned | Assigned sales exec |
| Follow-up due | Lead owner |
| Leave request submitted | Manager |
| Leave approved / rejected | Employee |
| Task assigned | Assignee |
| Task overdue | Assignee + Project Manager |
| Purchase request submitted | Warehouse Manager |
| Low stock alert | Warehouse Manager |
| Invoice overdue | Finance Executive |
| Payroll processed | All employees in organization |
| New comment @mention | Mentioned user |
| Production order delayed | Production Manager |

### Notification Preferences
- Users can disable specific notification types per channel
- Organization admin can set organization-wide defaults
- Notifications are not deletable — marked as read only

---

## 23. Core Product Workflows

### Workflow 1: Lead to Project

```
Lead Created
→ Follow-Up Scheduled
→ Quotation Created & Sent
→ Quotation Approved by Client
→ Lead Converted to Project
→ Project Kickoff
→ Production Order Created (if manufacturing)
→ Materials Requested from Warehouse
→ Production Execution
→ QC Check
→ Dispatch
→ Invoice Raised
→ Payment Received
→ Project Completed
→ Maintenance Phase (optional)
```

### Workflow 2: Inventory & Procurement

```
Material Required (from project PR or production BOM)
→ Check Warehouse Stock
→ If sufficient: Issue from Warehouse
→ If insufficient: Create Purchase Request
→ PR Approval
→ Purchase Order Created
→ PO Sent to Vendor
→ Goods Received (GRN)
→ Stock Updated
→ Material Issued to Production
```

### Workflow 3: Attendance to Payroll

```
Employee Punches In (GPS verified)
→ Attendance Recorded
→ Daily: Auto-calculate late, overtime, absent
→ Month End: HR triggers Payroll Run
→ Celery processes all employees
→ Payslips Generated (PDF, S3)
→ Payslips Available to Employees
→ Finance records salary payment
```

### Workflow 4: Leave Request

```
Employee Submits Leave Request
→ Manager Notified
→ Manager Approves / Rejects
→ Employee Notified
→ If Approved: Leave Balance Deducted, Attendance Marked
→ Holiday Calendar Checked (public holidays excluded)
```

---

## 24. Data Management Principles

### Organization Isolation
- Every query at the backend is filtered by `organization_id` via `OrganizationQuerysetMixin`
- No query can return data across organizations — enforced at ORM level
- Cross-organization data leaks are treated as critical security bugs

### Soft Delete Strategy
- No hard deletes from the frontend or API — ever
- All records have `is_deleted = BooleanField(default=False)`
- Deleted records: remain in database, excluded from all queries, visible only in audit logs
- Files are soft-deleted from the database, physically deleted from S3 after 30 days
- Account deletion (GDPR): full data wipe after 30-day cooling period

### Audit Logging
The platform maintains a complete audit trail:
- Logged events: every POST, PUT, PATCH, DELETE request
- Captured fields: user, organization, module, record_id, action, old_value, new_value, IP address, timestamp
- Audit logs are immutable — no edit or delete API
- Retention: 2 years

### UUID Primary Keys
- All models use UUID v4 as primary key
- Prevents sequential ID enumeration attacks
- Safe to expose in URLs and API responses

---

## 25. Security & Compliance

### Authentication
- JWT access tokens (60-minute expiry) + refresh tokens (7-day expiry)
- Refresh token rotation on every use
- Token blacklist on logout
- Optional: OTP-based 2FA per organization

### Authorization
- Role-based access control enforced at every API endpoint
- Module access enforced at API + frontend level
- Organization isolation enforced at ORM level

### Data Security
- All data encrypted in transit (TLS 1.2+)
- Database encryption at rest (AWS RDS encrypted volumes)
- S3 files encrypted at rest (AES-256)
- Secrets stored in AWS Secrets Manager — never in source code

### GDPR Compliance
- Data export: organization admin can export all org data as ZIP
- Data deletion: GDPR right-to-be-forgotten endpoint (30-day delay)
- Data processing agreement in terms of service

### API Security
- Rate limiting per subscription plan (100/500/2000 req/min)
- SQL injection protection via Django ORM (no raw SQL except analytics)
- CORS restricted to known origins
- All file uploads scanned before storage

---

## 26. Non-Functional Requirements

### Performance

| Metric | Target |
|---|---|
| API response time (P95) | < 300ms for standard CRUD |
| API response time (P95) | < 2s for dashboard aggregations |
| Page load (web, first paint) | < 2s on 10 Mbps connection |
| AI chat first token | < 1.5s |
| File upload | < 5s for files up to 10 MB |
| Report generation | < 10s for standard reports |
| Payroll processing (Celery) | < 60s for 100 employees |

### Scalability

| Metric | Target |
|---|---|
| Concurrent organizations | 500+ (Phase 1 architecture) |
| Users per organization | Up to 500 |
| Records per organization | 1M+ rows per module |
| File storage | Unlimited (S3) |
| AI queries | 100+ concurrent (FastAPI async) |

### Availability
- Production uptime SLA: 99.5% (Starter), 99.9% (Professional/Enterprise)
- Planned maintenance windows: Sundays 2–4 AM IST
- RDS Multi-AZ for failover (production)
- Zero-downtime deployments via ECS rolling updates

### Backup & Recovery
- RDS automated daily snapshots, 30-day retention
- Point-in-time recovery enabled on RDS (production)
- S3 cross-region replication for file uploads
- Recovery Time Objective (RTO): 4 hours
- Recovery Point Objective (RPO): 24 hours

### Browser & Device Support

| Platform | Minimum Version |
|---|---|
| Chrome | 110+ |
| Firefox | 110+ |
| Safari | 16+ |
| Edge | 110+ |
| iOS | 14+ |
| Android | 8 (API 26)+ |

---

## 27. Repository Structure

The platform is built as a monorepo using Turborepo, with the following finalized structure:

```
indusflow-ai/                          ← Monorepo root
│
├── apps/
│   ├── web/                           ← Next.js 14 (App Router) — web dashboard
│   ├── mobile/                        ← Expo SDK 51 — Android & iOS app
│   ├── backend/                       ← Django 4.2 LTS + DRF — REST API
│   │   ├── config/                    ← Django project settings
│   │   │   ├── settings/
│   │   │   │   ├── base.py
│   │   │   │   ├── dev.py
│   │   │   │   ├── staging.py
│   │   │   │   └── prod.py
│   │   │   ├── urls.py
│   │   │   ├── asgi.py
│   │   │   ├── wsgi.py
│   │   │   └── celery.py
│   │   ├── modules/                   ← Django apps (one per module)
│   │   │   ├── core/
│   │   │   ├── organizations/
│   │   │   ├── authentication/
│   │   │   ├── users/
│   │   │   ├── roles_permissions/
│   │   │   ├── dashboard/
│   │   │   ├── crm/
│   │   │   ├── projects/
│   │   │   ├── production/
│   │   │   ├── warehouse/
│   │   │   ├── procurement/
│   │   │   ├── finance/
│   │   │   ├── attendance/
│   │   │   ├── payroll/
│   │   │   ├── leaves/
│   │   │   ├── tasks/
│   │   │   ├── reports/
│   │   │   ├── notifications/
│   │   │   ├── ai_studio/
│   │   │   ├── audit_logs/
│   │   │   ├── files/
│   │   │   ├── comments/
│   │   │   ├── approvals/
│   │   │   ├── integrations/
│   │   │   └── analytics/
│   │   └── shared/
│   │       ├── mixins/
│   │       ├── permissions/
│   │       ├── middleware/
│   │       ├── utils/
│   │       ├── services/
│   │       ├── constants/
│   │       └── exceptions/
│   ├── ai-services/                   ← FastAPI — AI agents, RAG, streaming
│   └── admin-portal/                  ← Django admin (Unfold) — super admin
│
├── packages/
│   ├── ui/                            ← Shared design tokens + base components
│   ├── types/                         ← @indusflow/types — all TS interfaces
│   ├── api-client/                    ← @indusflow/api-client — TanStack Query hooks
│   ├── auth/                          ← @indusflow/auth — shared JWT utilities
│   ├── config/                        ← ESLint, Tailwind, TS base configs
│   ├── constants/                     ← Status codes, module keys, routes
│   ├── permissions/                   ← Frontend permission check utilities
│   └── validations/                   ← Zod schemas shared across web + mobile
│
├── infrastructure/
│   ├── docker/                        ← Dockerfiles (api, web, worker, ai)
│   ├── nginx/                         ← Nginx reverse proxy config
│   ├── kubernetes/                    ← K8s manifests (Phase 12+)
│   ├── terraform/                     ← AWS infrastructure as code (Phase 12)
│   └── scripts/                       ← Deployment and utility scripts
│
├── docs/
│   ├── architecture/                  ← ADR, system design docs
│   ├── api/                           ← API contracts
│   ├── flows/                         ← User and system flow diagrams
│   ├── db-design/                     ← Database schema docs
│   └── uiux/                          ← Design references
│
├── .github/
│   └── workflows/                     ← CI/CD pipelines
│
├── .env.example
├── docker-compose.yml
├── turbo.json
├── package.json
└── README.md
```

---

## 28. Development Roadmap

Estimated timeline: 72 weeks for a 2–4 person team to full v2.0.

### Phase 0 — Foundation (Weeks 1–3) → `v0.1.0`
- Django project + PostgreSQL + Redis + Celery
- JWT authentication (login, refresh, logout)
- BaseModel with org FK, UUID PK, soft delete
- Next.js 14 App Router shell
- Authentication pages (login, forgot password)
- Sidebar layout shell
- Docker Compose dev environment
- GitHub Actions CI (lint + test)
- Staging environment on AWS

**Deliverable:** Login works. CI is green. Staging URL is live.

### Phase 1 — Core Platform (Weeks 4–9) → `v0.2.0`
- Organization CRUD + module toggle system
- Full RBAC: roles, permissions, `ModuleAccess`
- `/api/me/modules/` endpoint
- Dynamic sidebar (role + module based)
- Department management
- Home page with all widgets
- Notification system (in-app + email)
- Audit log middleware

**Deliverable:** Multi-tenant login. Admin creates users with roles. Sidebar is dynamic.

### Phase 2 — Dashboards (Weeks 10–12) → `v0.3.0`
- Dashboard APIs per role
- KPI aggregation endpoints
- All 5 role-based dashboards built on frontend

**Deliverable:** Each role sees their relevant dashboard with real data.

### Phase 3 — CRM / Leads (Weeks 13–18) → `v0.4.0`
- Full leads module (CRUD, lifecycle, notes, attachments)
- Follow-up Celery reminders
- Lead → Project conversion

**Deliverable:** Complete sales cycle from lead to project.

### Phase 4 — Projects Module (Weeks 19–27) → `v1.0.0` (MVP)
- Full project workspace with all 13 sub-modules
- Kanban with dnd-kit
- GST invoice generation
- PR approval workflow

**Deliverable:** MVP. Auth + RBAC + Home + Leads + Projects all working.

### Phase 5 — Production (Weeks 28–33) → `v1.1.0`
- Production orders, BOM, material consumption
- QC checklists, machine logs, dispatch tracking

### Phase 6 — HRMS (Weeks 34–40) → `v1.2.0`
- Attendance (GPS + selfie), leaves, payroll
- Payslip PDF generation

### Phase 7 — Warehouse (Weeks 41–46) → `v1.3.0`
- Inventory, GRN, stock movements, low stock alerts
- Barcode scanning (mobile)

### Phase 8 — Procurement (Weeks 47–49) → `v1.4.0`
- Vendor management, PO lifecycle, procurement analytics

### Phase 9 — Finance (Weeks 50–54) → `v1.5.0`
- Invoices, expenses, payments, budgets, GST reports

### Phase 10 — Reports & Analytics (Weeks 55–58) → `v1.6.0`
- Pre-built reports, scheduled delivery, custom builder, exports

### Phase 11 — AI Studio (Weeks 59–65) → `v1.7.0`
- Full AI chat (streaming), SQL agent, RAG, automations
- AI Studio tab in every project

### Phase 12 — SaaS Billing + Polish + Launch (Weeks 66–72) → `v2.0.0`
- Stripe billing, subscription enforcement
- Mobile app (React Native + Expo)
- Onboarding wizard
- Full mobile responsiveness pass
- Security audit (OWASP)
- Performance testing (k6)
- E2E tests (Playwright)
- Production monitoring (Sentry + CloudWatch)

---

## 29. Acceptance Criteria

The platform is production-ready when all of the following are verified:

### Foundation & Auth
- [ ] Users can register, log in, and log out with JWT
- [ ] Refresh tokens rotate and expire correctly
- [ ] Password reset flow works end-to-end via email

### Multi-Tenancy
- [ ] Two organizations created with same email addresses cannot see each other's data
- [ ] API returns 404 (not 403) when requesting another org's record by UUID
- [ ] Organization admin cannot access super admin portal

### RBAC
- [ ] Employee cannot access Dashboard, Finance, or HR routes
- [ ] Manager can approve leaves; Employee cannot
- [ ] Disabling a module removes it from sidebar and returns 403 on API
- [ ] Custom role with only "View" on Leads cannot create a lead

### CRM
- [ ] Lead creation, edit, and soft-delete work correctly
- [ ] Lead status transitions follow defined state machine (no backward jumps from Won/Lost)
- [ ] Lead → Project conversion creates project and links lead ID atomically

### Projects
- [ ] Project kanban drag-and-drop persists task stage changes
- [ ] GST invoice PDF generates correctly with tax breakdown
- [ ] PR approval workflow notifies approver and rejects with mandatory reason

### AI Studio
- [ ] SQL agent returns correct answer to "How many leads were won this month?"
- [ ] SQL agent cannot execute UPDATE or DELETE statements
- [ ] RAG returns answer with source document citation
- [ ] AI responses never include data from another organization

### Performance
- [ ] Dashboard loads in under 2 seconds with 1,000 project records
- [ ] Payroll run for 50 employees completes within 60 seconds

### Security
- [ ] API returns 401 on expired JWT
- [ ] API returns 403 when role lacks permission (not 404 or 500)
- [ ] No secrets found in Git history (gitleaks scan passes)

---

## 30. Future Scope

| Feature | Description |
|---|---|
| IoT Integrations | Machine sensor data → real-time production dashboard |
| Predictive Maintenance | AI model predicts machine failure from runtime logs |
| AI Forecasting | Sales and inventory demand forecasting |
| OCR Document Reading | Auto-extract data from uploaded invoices and BOQs |
| Voice Assistant | Voice queries in AI Studio (web and mobile) |
| WhatsApp Integration | Notifications and simple commands via WhatsApp Business |
| AI Scheduling | AI-optimized production scheduling |
| AI Procurement | Suggest vendors and reorder quantities based on history |
| Multi-Language | Hindi, Gujarati, Marathi language support |
| Public API | Webhook + REST API for third-party integrations |
| Partner Portal | Reseller / partner organization management |

---

## 31. Glossary

| Term | Definition |
|---|---|
| BOM | Bill of Materials — list of raw materials, components, and quantities needed to manufacture a product |
| BOQ | Bill of Quantities — document listing materials, costs, and quantities for a construction or engineering project |
| GRN | Goods Received Note — document confirming receipt of goods from a vendor against a purchase order |
| PO | Purchase Order — formal document issued to a vendor authorizing a purchase at agreed terms |
| PR | Purchase Request — internal request to procure materials, raised by a project or production team |
| QC | Quality Control — inspection process to verify a product meets defined standards |
| GST | Goods and Services Tax — Indian indirect tax applied to supply of goods and services |
| GSTR | GST Return — periodic tax filing document submitted to the Indian GST portal |
| HRMS | Human Resource Management System — software for managing employee records, attendance, leaves, and payroll |
| JWT | JSON Web Token — compact, URL-safe token used for stateless authentication |
| RBAC | Role-Based Access Control — access management system where permissions are assigned to roles, not individual users |
| SaaS | Software as a Service — software delivery model where applications are hosted in the cloud and accessed via subscription |
| Multi-Tenancy | Architecture where a single software instance serves multiple independent organizations (tenants) |
| UUID | Universally Unique Identifier — 128-bit identifier used as primary key to prevent sequential enumeration |
| ORM | Object-Relational Mapper — tool that converts between database tables and programming language objects (Django uses one) |
| ERP | Enterprise Resource Planning — integrated management of core business processes |
| CRM | Customer Relationship Management — system for managing sales leads and customer interactions |
| RAG | Retrieval-Augmented Generation — AI technique that retrieves relevant documents to answer questions |
| pgvector | PostgreSQL extension for storing and querying vector embeddings (used for RAG) |
| EAS | Expo Application Services — Expo's cloud build and deployment service for React Native apps |
| OTA | Over-The-Air update — app update delivered to users without going through the app store |
| TRD | Technical Requirements Document — engineering companion to the PRD, covering architecture and implementation |
| ADR | Architecture Decision Record — document capturing a significant architectural decision and its rationale |
| CI/CD | Continuous Integration / Continuous Deployment — automated pipeline for testing and deploying code |
| P95 | 95th percentile — a performance benchmark meaning 95% of requests are faster than this value |



**TRD**
# IndusFlow AI — Technical Requirements Document (TRD)

| Field | Value |
|---|---|
| Document | Technical Requirements Document |
| Version | 1.0 |
| Status | Draft — Pending Approval |
| Author | IndusFlow AI Engineering Team |
| Created | 2025 |
| Last Updated | 2025 |
| Companion | PRD v1.1 |

---

## Table of Contents

1. [Architecture Decision Log](#1-architecture-decision-log)
2. [Tech Stack & Versions](#2-tech-stack--versions)
3. [System Architecture Overview](#3-system-architecture-overview)
4. [Monorepo Structure](#4-monorepo-structure)
5. [Backend Architecture](#5-backend-architecture)
6. [Database Architecture](#6-database-architecture)
7. [Multi-Tenancy Implementation](#7-multi-tenancy-implementation)
8. [RBAC Implementation](#8-rbac-implementation)
9. [Authentication Architecture](#9-authentication-architecture)
10. [API Architecture & Standards](#10-api-architecture--standards)
11. [Inter-Service Communication](#11-inter-service-communication)
12. [AI Layer Architecture](#12-ai-layer-architecture)
13. [File Storage Architecture](#13-file-storage-architecture)
14. [Real-Time Architecture](#14-real-time-architecture)
15. [Background Jobs Architecture](#15-background-jobs-architecture)
16. [Frontend Architecture](#16-frontend-architecture)
17. [Mobile Architecture](#17-mobile-architecture)
18. [Admin Portal Architecture](#18-admin-portal-architecture)
19. [Infrastructure & Deployment](#19-infrastructure--deployment)
20. [Environment Configuration](#20-environment-configuration)
21. [CI/CD Pipeline](#21-cicd-pipeline)
22. [Security Architecture](#22-security-architecture)
23. [Monitoring & Observability](#23-monitoring--observability)
24. [Testing Strategy](#24-testing-strategy)
25. [Code Standards & Conventions](#25-code-standards--conventions)
26. [Technical Acceptance Criteria](#26-technical-acceptance-criteria)

---

## 1. Architecture Decision Log

All key architectural decisions are recorded here. These are final — changes require a team discussion and version bump.

| Decision | Choice | Rejected Alternative | Reason |
|---|---|---|---|
| API framework | Django REST Framework (DRF) 3.15 | Django Ninja | More mature ecosystem, better multi-tenant RBAC integrations, drf-spectacular for OpenAPI, simplejwt integrations |
| Database | PostgreSQL 15 + pgvector on AWS RDS | Neon PostgreSQL | Production reliability, Multi-AZ failover, pgvector full support, no cold starts |
| Cache & broker | Redis 7 on AWS ElastiCache | Upstash Redis | Consistent low latency, same VPC as app, cluster mode for HA |
| File storage | AWS S3 + CloudFront | Cloudflare R2 | Single cloud vendor (AWS), django-storages native support, IAM integration |
| Frontend deployment | Vercel | AWS Amplify | Zero-config preview deployments per PR, Next.js native support |
| AI service | FastAPI (separate service) | Django async views | Better async streaming, independent scaling, LangChain fits FastAPI model |
| Django↔AI communication | Internal HTTP + shared PostgreSQL | Redis pub/sub | Simpler, FastAPI reads same DB directly, Django calls FastAPI via httpx |
| Admin portal | Django admin + Unfold UI | Next.js admin app | Ship in a day, no extra frontend build, secure by default |
| Monorepo tooling | Turborepo | Nx | Simpler config for mixed JS + Python repo |
| Backend inner folder | `modules/` | `apps/` | Avoids confusing double `apps/` path |
| Mobile framework | Expo SDK 51 (managed) | Bare React Native | No Xcode required for builds, EAS for CI/CD, OTA updates |
| ORM | Django ORM | SQLAlchemy | Django-native, migrations built-in, excellent for multi-tenant FK filtering |
| Task queue | Celery 5 + Redis | Django Q, RQ | Battle-tested, named queues, beat scheduler, Flower monitoring |
| Real-time | Django Channels 4 | Server-Sent Events | WebSocket support for AI streaming + notifications + live updates |
| Auth | djangorestframework-simplejwt | Djoser, Auth0 | Lightweight, stateless, mobile-compatible, refresh rotation built-in |

---

## 2. Tech Stack & Versions

### Backend

| Package | Version | Purpose |
|---|---|---|
| Python | 3.12 | Runtime |
| Django | 4.2 LTS | Web framework |
| djangorestframework | 3.15.x | REST API layer |
| djangorestframework-simplejwt | 5.3.x | JWT authentication |
| django-filter | 24.x | Query filtering |
| drf-spectacular | 0.27.x | OpenAPI 3 schema + Swagger UI |
| django-cors-headers | 4.x | CORS headers |
| django-channels | 4.x | WebSocket / ASGI |
| channels-redis | 4.x | Channel layer backend |
| celery | 5.4.x | Task queue |
| django-celery-beat | 2.6.x | Periodic tasks |
| django-celery-results | 2.5.x | Task result backend |
| django-redis | 5.4.x | Cache backend |
| django-storages | 1.14.x | S3 file storage |
| boto3 | 1.34.x | AWS SDK |
| psycopg2-binary | 2.9.x | PostgreSQL adapter |
| pgvector | 0.3.x | Vector embeddings |
| Pillow | 10.x | Image processing |
| WeasyPrint | 61.x | PDF generation |
| openpyxl | 3.1.x | Excel export |
| ruff | 0.4.x | Python linter + formatter |
| pytest-django | 4.8.x | Test framework |
| pytest-cov | 5.x | Coverage reporting |
| factory-boy | 3.3.x | Test data factories |

### AI Services (FastAPI)

| Package | Version | Purpose |
|---|---|---|
| Python | 3.12 | Runtime |
| FastAPI | 0.111.x | Async API framework |
| uvicorn | 0.30.x | ASGI server |
| langchain | 0.2.x | LLM orchestration |
| langgraph | 0.1.x | Agent graphs |
| langchain-openai | 0.1.x | OpenAI integration |
| langchain-community | 0.2.x | Community tools |
| openai | 1.30.x | OpenAI SDK |
| pgvector | 0.3.x | Vector DB |
| sqlalchemy | 2.0.x | DB access for AI service |
| httpx | 0.27.x | HTTP client |

### Frontend Web

| Package | Version | Purpose |
|---|---|---|
| Node.js | 20 LTS | Runtime |
| Next.js | 14.2.x | React framework |
| TypeScript | 5.4.x | Type safety |
| React | 18.3.x | UI library |
| Tailwind CSS | 3.4.x | Styling |
| shadcn/ui | latest | Headless components |
| @tanstack/react-query | 5.x | Server state management |
| zustand | 4.5.x | Client state management |
| react-hook-form | 7.x | Form management |
| zod | 3.23.x | Schema validation |
| axios | 1.7.x | HTTP client |
| framer-motion | 11.x | Animations |
| @tanstack/react-table | 8.x | Data tables |
| recharts | 2.x | Charts |
| @tiptap/react | 2.x | Rich text editor |
| @dnd-kit/core | 6.x | Drag and drop |
| date-fns | 3.x | Date utilities |
| @react-pdf/renderer | 3.x | PDF generation |
| eslint | 8.x | JS linting |
| prettier | 3.x | Code formatting |

### Mobile

| Package | Version | Purpose |
|---|---|---|
| Expo SDK | 51 | Mobile framework |
| React Native | 0.74.x | Native runtime |
| Expo Router | 3.x | File-based routing |
| NativeWind | 4.x | Tailwind for RN |
| Gluestack UI | 1.x | Native components |
| React Native Reanimated | 3.x | Animations |
| expo-location | 17.x | GPS |
| expo-camera | 14.x | Camera / selfie |
| expo-notifications | 0.28.x | Push notifications |
| expo-secure-store | 13.x | Encrypted storage |
| expo-local-authentication | 13.x | Biometrics |
| EAS CLI | latest | Build + submit |

---

## 3. System Architecture Overview

```
┌─────────────────────────────────────────────────────────┐
│                    Client Layer                          │
│   Next.js Web App          Expo Mobile App              │
│   (Vercel)                 (iOS / Android)               │
└──────────────────────┬──────────────────────────────────┘
                       │ HTTPS / WSS
┌──────────────────────▼──────────────────────────────────┐
│                   API Gateway (Nginx)                    │
│   /api/*  → Django (8000)                               │
│   /ws/*   → Django Channels (8000)                      │
│   /ai/*   → FastAPI AI Service (8001) [internal only]   │
└──────────┬──────────────────────────────────────────────┘
           │
┌──────────▼──────────────────┐   ┌─────────────────────┐
│    Django Backend            │   │  FastAPI AI Service  │
│    DRF + Channels            │   │  LangChain/LangGraph │
│    Celery Workers            │   │  RAG Pipeline        │
│    Celery Beat               │◄──►  Streaming responses │
└──────────┬──────────────────┘   └──────────┬──────────┘
           │                                  │
┌──────────▼──────────────────────────────────▼──────────┐
│                     Data Layer (AWS)                     │
│   RDS PostgreSQL 15 + pgvector                          │
│   ElastiCache Redis 7                                   │
│   S3 + CloudFront (files)                               │
└─────────────────────────────────────────────────────────┘
```

### Key Architectural Principles

1. Every API request is organization-scoped — no query returns cross-tenant data
2. Django handles all business logic; FastAPI handles only AI workloads
3. FastAPI reads the shared PostgreSQL database directly (same connection string)
4. Django calls FastAPI via internal HTTP using `httpx` (not over the public internet)
5. All file uploads go to S3 — never to the local filesystem in any environment
6. WebSocket connections are managed by Django Channels via Redis channel layer
7. Celery workers run as separate Docker containers but share the same codebase

---

## 4. Monorepo Structure

```
indusflow-ai/
│
├── apps/
│   ├── web/                     ← Next.js 14 (App Router)
│   │   ├── src/
│   │   │   ├── app/             ← Route groups
│   │   │   │   ├── (auth)/      ← login, register, forgot-password
│   │   │   │   └── (dashboard)/ ← protected routes
│   │   │   ├── components/
│   │   │   │   ├── ui/          ← shadcn base components
│   │   │   │   ├── layout/      ← Sidebar, Header, Breadcrumbs
│   │   │   │   ├── modules/     ← per-module components
│   │   │   │   └── shared/      ← Tables, Forms, Charts, Modals
│   │   │   ├── hooks/           ← Custom React hooks
│   │   │   ├── lib/             ← API client, utils, constants
│   │   │   ├── store/           ← Zustand stores
│   │   │   ├── types/           ← Local TS types (extends shared)
│   │   │   └── middleware.ts    ← Auth route protection
│   │   ├── public/
│   │   ├── next.config.ts
│   │   ├── tailwind.config.ts
│   │   └── package.json
│   │
│   ├── mobile/                  ← Expo SDK 51
│   │   ├── app/
│   │   │   ├── (auth)/
│   │   │   └── (app)/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── store/
│   │   ├── app.json
│   │   ├── eas.json
│   │   └── package.json
│   │
│   ├── backend/                 ← Django 4.2 LTS
│   │   ├── config/
│   │   │   ├── settings/
│   │   │   │   ├── base.py
│   │   │   │   ├── dev.py
│   │   │   │   ├── staging.py
│   │   │   │   └── prod.py
│   │   │   ├── urls.py
│   │   │   ├── asgi.py
│   │   │   ├── wsgi.py
│   │   │   └── celery.py
│   │   ├── modules/             ← Django apps (one per domain)
│   │   │   ├── core/
│   │   │   ├── organizations/
│   │   │   ├── authentication/
│   │   │   ├── users/
│   │   │   ├── roles_permissions/
│   │   │   ├── dashboard/
│   │   │   ├── crm/
│   │   │   ├── projects/
│   │   │   ├── production/
│   │   │   ├── warehouse/
│   │   │   ├── procurement/
│   │   │   ├── finance/
│   │   │   ├── attendance/
│   │   │   ├── payroll/
│   │   │   ├── leaves/
│   │   │   ├── tasks/
│   │   │   ├── reports/
│   │   │   ├── notifications/
│   │   │   ├── ai_studio/
│   │   │   ├── audit_logs/
│   │   │   ├── files/
│   │   │   ├── comments/
│   │   │   ├── approvals/
│   │   │   ├── integrations/
│   │   │   └── analytics/
│   │   ├── shared/
│   │   │   ├── models.py        ← BaseModel
│   │   │   ├── mixins.py        ← OrganizationQuerysetMixin
│   │   │   ├── permissions.py   ← RBAC permission classes
│   │   │   ├── pagination.py
│   │   │   ├── throttling.py
│   │   │   ├── exceptions.py
│   │   │   ├── renderers.py     ← Standard JSON response format
│   │   │   ├── middleware/
│   │   │   │   └── audit.py     ← Audit log middleware
│   │   │   ├── utils/
│   │   │   ├── services/
│   │   │   └── constants.py
│   │   ├── requirements/
│   │   │   ├── base.txt
│   │   │   ├── dev.txt
│   │   │   ├── staging.txt
│   │   │   └── prod.txt
│   │   └── manage.py
│   │
│   ├── ai-services/             ← FastAPI AI service
│   │   ├── main.py
│   │   ├── routers/
│   │   │   ├── chat.py
│   │   │   ├── sql_agent.py
│   │   │   └── rag.py
│   │   ├── agents/
│   │   ├── chains/
│   │   ├── tools/
│   │   ├── db/                  ← SQLAlchemy models (reads shared DB)
│   │   ├── config.py
│   │   └── requirements.txt
│   │
│   └── admin-portal/            ← Django admin + Unfold UI
│       └── (extends backend Django admin)
│
├── packages/
│   ├── ui/                      ← @indusflow/ui
│   ├── types/                   ← @indusflow/types
│   ├── api-client/              ← @indusflow/api-client
│   ├── auth/                    ← @indusflow/auth
│   ├── config/                  ← @indusflow/config
│   ├── constants/               ← @indusflow/constants
│   ├── permissions/             ← @indusflow/permissions
│   └── validations/             ← @indusflow/validations
│
├── infrastructure/
│   ├── docker/
│   │   ├── Dockerfile.api
│   │   ├── Dockerfile.ai
│   │   ├── Dockerfile.web
│   │   └── Dockerfile.worker
│   ├── nginx/
│   │   └── nginx.conf
│   ├── kubernetes/              ← Phase 12+
│   ├── terraform/               ← Phase 12
│   └── scripts/
│
├── docs/
├── .github/workflows/
├── docker-compose.yml
├── turbo.json
├── package.json
├── tsconfig.base.json
├── .env.example
└── README.md
```

---

## 5. Backend Architecture

### Django Module Structure

Every Django module (app) follows this internal structure:

```
modules/crm/
├── __init__.py
├── models.py          ← Domain models
├── serializers.py     ← DRF serializers (input + output contracts)
├── views.py           ← DRF ViewSets
├── urls.py            ← URL routing
├── filters.py         ← django-filter FilterSets
├── permissions.py     ← Module-specific permission classes
├── services.py        ← Business logic (not in views, not in models)
├── tasks.py           ← Celery tasks for this module
├── signals.py         ← Django signals (use sparingly)
├── admin.py           ← Django admin registration
├── apps.py            ← AppConfig
├── migrations/
└── tests/
    ├── test_models.py
    ├── test_views.py
    └── test_services.py
```

### BaseModel Pattern

All models inherit from `BaseModel`. This is non-negotiable.

```python
# shared/models.py
import uuid
from django.db import models
from django.conf import settings


class BaseModel(models.Model):
    id = models.UUIDField(
        primary_key=True,
        default=uuid.uuid4,
        editable=False
    )
    organization = models.ForeignKey(
        'organizations.Organization',
        on_delete=models.CASCADE,
        related_name='+'
    )
    created_by = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        null=True,
        blank=True,
        on_delete=models.SET_NULL,
        related_name='+'
    )
    updated_by = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        null=True,
        blank=True,
        on_delete=models.SET_NULL,
        related_name='+'
    )
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    is_deleted = models.BooleanField(default=False)

    class Meta:
        abstract = True
        ordering = ['-created_at']

    def soft_delete(self, user=None):
        self.is_deleted = True
        self.updated_by = user
        self.save(update_fields=['is_deleted', 'updated_by', 'updated_at'])
```

### OrganizationQuerysetMixin Pattern

Every ViewSet uses this mixin. No exceptions.

```python
# shared/mixins.py
from rest_framework.exceptions import PermissionDenied


class OrganizationQuerysetMixin:
    """
    Automatically filters all querysets to the request user's organization.
    Also excludes soft-deleted records.
    Apply to every ViewSet — never use .all() without this mixin.
    """

    def get_queryset(self):
        qs = super().get_queryset()
        if not hasattr(self.request, 'user') or not self.request.user.is_authenticated:
            return qs.none()
        return qs.filter(
            organization=self.request.user.organization,
            is_deleted=False
        )

    def perform_create(self, serializer):
        serializer.save(
            organization=self.request.user.organization,
            created_by=self.request.user
        )

    def perform_update(self, serializer):
        serializer.save(updated_by=self.request.user)

    def perform_destroy(self, instance):
        instance.soft_delete(user=self.request.user)
```

### Standard ViewSet Structure

```python
# modules/crm/views.py
from rest_framework import viewsets, filters, status
from rest_framework.decorators import action
from rest_framework.response import Response
from django_filters.rest_framework import DjangoFilterBackend
from shared.mixins import OrganizationQuerysetMixin
from shared.permissions import HasModulePermission
from .models import Lead
from .serializers import LeadSerializer, LeadCreateSerializer
from .filters import LeadFilter


class LeadViewSet(OrganizationQuerysetMixin, viewsets.ModelViewSet):
    queryset = Lead.objects.select_related('assigned_to', 'organization')
    serializer_class = LeadSerializer
    permission_classes = [HasModulePermission]
    filter_backends = [DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter]
    filterset_class = LeadFilter
    search_fields = ['lead_name', 'company_name', 'email']
    ordering_fields = ['created_at', 'follow_up_date', 'priority']
    ordering = ['-created_at']

    def get_serializer_class(self):
        if self.action in ['create', 'update', 'partial_update']:
            return LeadCreateSerializer
        return LeadSerializer

    @action(detail=True, methods=['post'], url_path='convert-to-project')
    def convert_to_project(self, request, pk=None):
        lead = self.get_object()
        # business logic lives in services.py
        from .services import LeadService
        project = LeadService.convert_to_project(lead, request.user)
        return Response({'project_id': str(project.id)}, status=status.HTTP_201_CREATED)
```

---

## 6. Database Architecture

### PostgreSQL Configuration

```
Engine:    PostgreSQL 15
Extension: pgvector (for AI embeddings)
Encoding:  UTF-8
Timezone:  UTC (stored in UTC, converted at application layer)
Collation: en_US.UTF-8
```

### Key Database Tables

#### organizations

```sql
CREATE TABLE organizations (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name            VARCHAR(255) NOT NULL,
    slug            VARCHAR(100) UNIQUE NOT NULL,
    logo_url        VARCHAR(500),
    plan            VARCHAR(50) NOT NULL DEFAULT 'starter',
    is_active       BOOLEAN NOT NULL DEFAULT TRUE,
    timezone        VARCHAR(100) NOT NULL DEFAULT 'Asia/Kolkata',
    currency        VARCHAR(10) NOT NULL DEFAULT 'INR',
    gst_number      VARCHAR(20),
    address         TEXT,
    -- Module toggles
    crm_enabled         BOOLEAN DEFAULT TRUE,
    projects_enabled    BOOLEAN DEFAULT TRUE,
    production_enabled  BOOLEAN DEFAULT FALSE,
    warehouse_enabled   BOOLEAN DEFAULT FALSE,
    procurement_enabled BOOLEAN DEFAULT FALSE,
    finance_enabled     BOOLEAN DEFAULT FALSE,
    hrms_enabled        BOOLEAN DEFAULT TRUE,
    reports_enabled     BOOLEAN DEFAULT TRUE,
    ai_enabled          BOOLEAN DEFAULT TRUE,
    -- AI usage
    ai_credits_used     INTEGER DEFAULT 0,
    ai_credits_limit    INTEGER DEFAULT 100,
    -- Meta
    created_at      TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at      TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
```

#### users

```sql
CREATE TABLE users (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    organization_id UUID NOT NULL REFERENCES organizations(id) ON DELETE CASCADE,
    email           VARCHAR(254) UNIQUE NOT NULL,
    password        VARCHAR(128) NOT NULL,
    full_name       VARCHAR(255) NOT NULL,
    phone           VARCHAR(20),
    avatar_url      VARCHAR(500),
    department_id   UUID REFERENCES departments(id) ON DELETE SET NULL,
    employee_id     VARCHAR(50),
    date_joined     TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    last_login      TIMESTAMPTZ,
    is_active       BOOLEAN NOT NULL DEFAULT TRUE,
    is_deleted      BOOLEAN NOT NULL DEFAULT FALSE,
    created_at      TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at      TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_users_org ON users(organization_id) WHERE is_deleted = FALSE;
CREATE INDEX idx_users_email ON users(email);
```

#### roles

```sql
CREATE TABLE roles (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    organization_id UUID NOT NULL REFERENCES organizations(id) ON DELETE CASCADE,
    name            VARCHAR(100) NOT NULL,
    description     TEXT,
    is_system       BOOLEAN NOT NULL DEFAULT FALSE,  -- system roles can't be deleted
    created_at      TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    UNIQUE(organization_id, name)
);
```

#### permissions

```sql
CREATE TABLE permissions (
    id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    role_id     UUID NOT NULL REFERENCES roles(id) ON DELETE CASCADE,
    module      VARCHAR(50) NOT NULL,  -- 'crm', 'projects', 'finance', etc.
    can_view    BOOLEAN NOT NULL DEFAULT FALSE,
    can_create  BOOLEAN NOT NULL DEFAULT FALSE,
    can_edit    BOOLEAN NOT NULL DEFAULT FALSE,
    can_delete  BOOLEAN NOT NULL DEFAULT FALSE,
    can_export  BOOLEAN NOT NULL DEFAULT FALSE,
    can_approve BOOLEAN NOT NULL DEFAULT FALSE,
    UNIQUE(role_id, module)
);
```

#### user_roles

```sql
CREATE TABLE user_roles (
    id      UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    role_id UUID NOT NULL REFERENCES roles(id) ON DELETE CASCADE,
    UNIQUE(user_id, role_id)
);
```

#### module_access

```sql
CREATE TABLE module_access (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    organization_id UUID NOT NULL REFERENCES organizations(id) ON DELETE CASCADE,
    role_id         UUID NOT NULL REFERENCES roles(id) ON DELETE CASCADE,
    module          VARCHAR(50) NOT NULL,
    is_enabled      BOOLEAN NOT NULL DEFAULT TRUE,
    UNIQUE(organization_id, role_id, module)
);
```

### pgvector Setup

```sql
-- Run once on database initialization
CREATE EXTENSION IF NOT EXISTS vector;

-- AI document embeddings table
CREATE TABLE ai_document_chunks (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    organization_id UUID NOT NULL REFERENCES organizations(id) ON DELETE CASCADE,
    source_type     VARCHAR(50) NOT NULL,  -- 'project_file', 'contract', 'manual'
    source_id       UUID NOT NULL,
    chunk_index     INTEGER NOT NULL,
    content         TEXT NOT NULL,
    embedding       vector(1536),          -- OpenAI text-embedding-3-small dimension
    metadata        JSONB,
    created_at      TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_ai_chunks_org ON ai_document_chunks(organization_id);
CREATE INDEX idx_ai_chunks_embedding ON ai_document_chunks
    USING ivfflat (embedding vector_cosine_ops) WITH (lists = 100);
```

### Migration Strategy

```bash
# One migration per module — never cross-module migrations
python manage.py makemigrations crm
python manage.py makemigrations projects

# Name migrations descriptively
python manage.py makemigrations crm --name add_lead_priority_field

# Never edit applied migrations — create a new one
# Never use RunPython for data that can be a fixture
```

---

## 7. Multi-Tenancy Implementation

### Isolation Guarantee

```python
# shared/mixins.py
# OrganizationQuerysetMixin (see Section 5) is the enforcement layer.
# RULE: Every ViewSet MUST use this mixin. No .all() without org filter. Ever.

# BAD — never do this:
def get_queryset(self):
    return Lead.objects.all()

# BAD — still wrong (leaks soft-deleted records):
def get_queryset(self):
    return Lead.objects.filter(organization=self.request.user.organization)

# GOOD — use the mixin:
class LeadViewSet(OrganizationQuerysetMixin, viewsets.ModelViewSet):
    queryset = Lead.objects.select_related('assigned_to')
    ...
```

### Cross-Tenant Leak Prevention

```python
# shared/permissions.py
from rest_framework.permissions import BasePermission


class IsOrganizationMember(BasePermission):
    """Ensure the requested object belongs to the user's organization."""

    def has_object_permission(self, request, view, obj):
        if hasattr(obj, 'organization_id'):
            return str(obj.organization_id) == str(request.user.organization_id)
        return False
```

### Tenant Resolution

```python
# The organization is resolved from the JWT token at login time.
# JWT payload includes: user_id, organization_id, role_ids
# Middleware attaches organization to request.user on every request.

# modules/authentication/backends.py
class OrganizationJWTAuthentication(JWTAuthentication):
    def authenticate(self, request):
        result = super().authenticate(request)
        if result is None:
            return None
        user, token = result
        # Attach organization to user for convenience
        if not hasattr(user, '_organization_cache'):
            user._organization_cache = user.organization
        return user, token
```

---

## 8. RBAC Implementation

### Permission Check Flow

```python
# shared/permissions.py
from rest_framework.permissions import BasePermission


class HasModulePermission(BasePermission):
    """
    Checks: 1) module is enabled for org, 2) role has required action permission.
    ViewSets must set: module_name and required_permission attributes.
    """

    action_to_permission = {
        'list': 'can_view',
        'retrieve': 'can_view',
        'create': 'can_create',
        'update': 'can_edit',
        'partial_update': 'can_edit',
        'destroy': 'can_delete',
        'export': 'can_export',
        'approve': 'can_approve',
    }

    def has_permission(self, request, view):
        if not request.user or not request.user.is_authenticated:
            return False

        module = getattr(view, 'module_name', None)
        if not module:
            return True  # No module restriction on this view

        org = request.user.organization

        # 1. Check module is enabled for organization
        module_toggle = f'{module}_enabled'
        if not getattr(org, module_toggle, True):
            return False

        # 2. Check user role has required permission for this action
        required = self.action_to_permission.get(view.action, 'can_view')
        return request.user.has_module_permission(module, required)
```

### User.has_module_permission Helper

```python
# modules/users/models.py
class User(AbstractBaseUser, PermissionsMixin):
    # ... fields ...

    def has_module_permission(self, module: str, action: str) -> bool:
        """Check if this user's role grants action on module."""
        from modules.roles_permissions.models import Permission
        return Permission.objects.filter(
            role__user_roles__user=self,
            module=module,
            **{action: True}
        ).exists()

    def get_module_access(self) -> dict:
        """Returns the /me/modules/ response dict."""
        from modules.roles_permissions.services import RBACService
        return RBACService.get_module_access(self)
```

---

## 9. Authentication Architecture

### JWT Configuration

```python
# config/settings/base.py
from datetime import timedelta

SIMPLE_JWT = {
    'ACCESS_TOKEN_LIFETIME': timedelta(minutes=60),
    'REFRESH_TOKEN_LIFETIME': timedelta(days=7),
    'ROTATE_REFRESH_TOKENS': True,
    'BLACKLIST_AFTER_ROTATION': True,
    'UPDATE_LAST_LOGIN': True,
    'ALGORITHM': 'HS256',
    'AUTH_HEADER_TYPES': ('Bearer',),
    'USER_ID_FIELD': 'id',
    'USER_ID_CLAIM': 'user_id',
    'TOKEN_OBTAIN_SERIALIZER': 'modules.authentication.serializers.CustomTokenObtainPairSerializer',
}
```

### Custom Token with Organization Context

```python
# modules/authentication/serializers.py
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer


class CustomTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        # Add organization context to token payload
        token['organization_id'] = str(user.organization_id)
        token['organization_name'] = user.organization.name
        token['full_name'] = user.full_name
        return token

    def validate(self, attrs):
        data = super().validate(attrs)
        # Add user context to login response
        data['user'] = {
            'id': str(self.user.id),
            'email': self.user.email,
            'full_name': self.user.full_name,
            'organization_id': str(self.user.organization_id),
        }
        return data
```

### Login Flow

```
POST /api/v1/auth/login/
  → Validate email + password
  → Resolve organization (via user.organization_id)
  → Generate access + refresh JWT (includes org context)
  → Return tokens + user object

POST /api/v1/auth/token/refresh/
  → Validate refresh token
  → Rotate: blacklist old, issue new pair
  → Return new access + refresh tokens

POST /api/v1/auth/logout/
  → Blacklist the refresh token
  → Return 200

GET /api/v1/auth/me/
  → Return current user + org + modules access

GET /api/v1/me/modules/
  → Return module visibility dict for sidebar rendering
```

---

## 10. API Architecture & Standards

### URL Structure

```
/api/v1/auth/            ← Authentication endpoints
/api/v1/me/              ← Current user context
/api/v1/organizations/   ← Org settings
/api/v1/users/           ← User management
/api/v1/roles/           ← RBAC
/api/v1/leads/           ← CRM
/api/v1/projects/        ← Projects
/api/v1/production/      ← Production
/api/v1/warehouse/       ← Inventory
/api/v1/procurement/     ← Procurement
/api/v1/finance/         ← Finance
/api/v1/attendance/      ← Attendance
/api/v1/payroll/         ← Payroll
/api/v1/leaves/          ← Leave management
/api/v1/tasks/           ← Tasks
/api/v1/reports/         ← Reports
/api/v1/notifications/   ← Notifications
/api/v1/ai/              ← AI Studio (proxies to FastAPI)
/api/v1/files/           ← File management
/api/v1/comments/        ← Comments
/api/v1/approvals/       ← Approvals engine
/api/schema/             ← OpenAPI schema
/api/schema/swagger-ui/  ← Swagger UI
/api/schema/redoc/       ← ReDoc
```

### Standard Response Format

All API responses follow this envelope:

```python
# shared/renderers.py
from rest_framework.renderers import JSONRenderer
import json


class StandardRenderer(JSONRenderer):
    """Wraps all responses in a standard envelope."""

    def render(self, data, accepted_media_type=None, renderer_context=None):
        response = renderer_context.get('response')
        status_code = response.status_code if response else 200

        if status_code >= 400:
            wrapped = {
                'success': False,
                'error': data.get('detail', data) if isinstance(data, dict) else data,
                'code': data.get('code', 'error') if isinstance(data, dict) else 'error',
            }
        else:
            wrapped = {
                'success': True,
                'data': data,
                'message': None,
            }

        return super().render(wrapped, accepted_media_type, renderer_context)
```

**Success response:**
```json
{
  "success": true,
  "data": { "id": "uuid", "lead_name": "ABC Corp" },
  "message": null
}
```

**List response (paginated):**
```json
{
  "success": true,
  "data": {
    "count": 120,
    "next": "/api/v1/leads/?page=2",
    "previous": null,
    "results": [...]
  },
  "message": null
}
```

**Error response:**
```json
{
  "success": false,
  "error": "Authentication credentials were not provided.",
  "code": "not_authenticated"
}
```

### Pagination

```python
# shared/pagination.py
from rest_framework.pagination import PageNumberPagination


class StandardPagination(PageNumberPagination):
    page_size = 25
    page_size_query_param = 'page_size'
    max_page_size = 200
    page_query_param = 'page'
```

### API Versioning

- Current version: `v1`
- Version in URL path: `/api/v1/`
- Breaking changes require a new version (`v2`)
- Non-breaking additions (new fields, new endpoints) do not require versioning
- Deprecated endpoints remain for 2 major versions before removal

---

## 11. Inter-Service Communication

### Django ↔ FastAPI Communication Pattern

FastAPI AI services are called by Django via internal HTTP using `httpx`. Both services share the same PostgreSQL database — FastAPI reads data directly without going through Django's API.

```python
# modules/ai_studio/services.py
import httpx
from django.conf import settings


AI_SERVICE_BASE_URL = settings.AI_SERVICE_URL  # e.g., http://ai-service:8001


class AIStudioService:
    """Proxy calls from Django to the FastAPI AI service."""

    @staticmethod
    async def stream_chat(
        org_id: str,
        user_id: str,
        conversation_id: str,
        message: str,
        context_type: str = 'global'
    ):
        """Stream AI chat response. Used by Django Channels consumer."""
        async with httpx.AsyncClient() as client:
            async with client.stream(
                'POST',
                f'{AI_SERVICE_BASE_URL}/ai/v1/chat/stream',
                json={
                    'org_id': org_id,
                    'user_id': user_id,
                    'conversation_id': conversation_id,
                    'message': message,
                    'context_type': context_type,
                },
                headers={'X-Internal-Token': settings.AI_INTERNAL_TOKEN},
                timeout=60.0
            ) as response:
                async for chunk in response.aiter_text():
                    yield chunk

    @staticmethod
    async def run_sql_agent(org_id: str, query: str) -> dict:
        """Execute natural language SQL query via AI service."""
        async with httpx.AsyncClient(timeout=30.0) as client:
            response = await client.post(
                f'{AI_SERVICE_BASE_URL}/ai/v1/sql-agent',
                json={'org_id': org_id, 'query': query},
                headers={'X-Internal-Token': settings.AI_INTERNAL_TOKEN},
            )
            response.raise_for_status()
            return response.json()
```

### Internal Authentication

All Django → FastAPI calls use a shared internal token, never exposed to clients:

```python
# FastAPI middleware
from fastapi import Request, HTTPException
from starlette.middleware.base import BaseHTTPMiddleware


class InternalAuthMiddleware(BaseHTTPMiddleware):
    async def dispatch(self, request: Request, call_next):
        token = request.headers.get('X-Internal-Token')
        if token != settings.AI_INTERNAL_TOKEN:
            raise HTTPException(status_code=401, detail='Unauthorized')
        return await call_next(request)
```

### FastAPI Database Access

FastAPI connects to the same PostgreSQL instance using SQLAlchemy (async):

```python
# ai-services/db/session.py
from sqlalchemy.ext.asyncio import create_async_engine, AsyncSession
from sqlalchemy.orm import sessionmaker
from config import settings

engine = create_async_engine(
    settings.DATABASE_URL.replace('postgresql://', 'postgresql+asyncpg://'),
    pool_size=10,
    max_overflow=20,
)

AsyncSessionLocal = sessionmaker(engine, class_=AsyncSession, expire_on_commit=False)
```

---

## 12. AI Layer Architecture

### FastAPI Service Structure

```
ai-services/
├── main.py              ← FastAPI app + middleware
├── routers/
│   ├── chat.py          ← Streaming chat endpoint
│   ├── sql_agent.py     ← NL-to-SQL agent
│   ├── rag.py           ← Document Q&A
│   └── automation.py    ← AI automation triggers
├── agents/
│   ├── chat_agent.py    ← LangGraph chat agent
│   ├── sql_agent.py     ← SQL agent with org-scoped tools
│   └── rag_agent.py     ← RAG pipeline agent
├── tools/
│   ├── erp_tools.py     ← Tools: get_leads, get_projects, etc.
│   └── sql_tools.py     ← Read-only SQL execution tool
├── chains/
│   └── summarize.py     ← Summarization chains
├── db/
│   ├── session.py       ← SQLAlchemy async session
│   └── queries.py       ← Org-scoped read queries
├── embeddings/
│   └── pipeline.py      ← Chunk → embed → store pipeline
└── config.py
```

### RAG Pipeline

```python
# ai-services/embeddings/pipeline.py
from langchain_openai import OpenAIEmbeddings
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain_community.vectorstores import PGVector


class RAGPipeline:
    def __init__(self, org_id: str):
        self.org_id = org_id
        self.embeddings = OpenAIEmbeddings(model='text-embedding-3-small')
        self.text_splitter = RecursiveCharacterTextSplitter(
            chunk_size=512,
            chunk_overlap=50,
        )

    async def ingest_document(self, content: str, source_type: str, source_id: str):
        """Chunk, embed, and store a document."""
        chunks = self.text_splitter.split_text(content)
        metadatas = [
            {
                'org_id': self.org_id,
                'source_type': source_type,
                'source_id': source_id,
                'chunk_index': i,
            }
            for i, _ in enumerate(chunks)
        ]
        vectorstore = PGVector(
            connection_string=settings.DATABASE_URL,
            embedding_function=self.embeddings,
            collection_name=f'org_{self.org_id}',
        )
        await vectorstore.aadd_texts(chunks, metadatas=metadatas)

    async def query(self, question: str, source_id: str = None) -> list:
        """Similarity search filtered to this org (and optionally a specific doc)."""
        vectorstore = PGVector(
            connection_string=settings.DATABASE_URL,
            embedding_function=self.embeddings,
            collection_name=f'org_{self.org_id}',
        )
        filter_dict = {'org_id': self.org_id}
        if source_id:
            filter_dict['source_id'] = source_id
        return await vectorstore.asimilarity_search(
            question, k=5, filter=filter_dict
        )
```

### SQL Agent (Read-Only)

```python
# ai-services/tools/sql_tools.py
from langchain_community.tools.sql_database.tool import QuerySQLDataBaseTool
from langchain_community.utilities import SQLDatabase


def get_org_sql_agent(org_id: str):
    """
    Creates a read-only SQL agent scoped to one organization.
    CRITICAL: Only SELECT is allowed. The agent CANNOT INSERT, UPDATE, or DELETE.
    """
    db = SQLDatabase.from_uri(
        settings.DATABASE_URL,
        include_tables=[
            'leads', 'projects', 'project_tasks',
            'production_orders', 'inventory_items',
            'attendance_records', 'finance_invoices',
        ]
    )
    query_tool = QuerySQLDataBaseTool(db=db)
    # System prompt always injects org_id filter
    return query_tool, org_id
```

### Streaming Chat via WebSocket

```python
# Django Channels consumer
# modules/ai_studio/consumers.py
import json
from channels.generic.websocket import AsyncWebsocketConsumer
from .services import AIStudioService


class AIChatConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        user = self.scope['user']
        if not user.is_authenticated:
            await self.close()
            return
        self.org_id = str(user.organization_id)
        self.user_id = str(user.id)
        await self.accept()

    async def receive(self, text_data):
        data = json.loads(text_data)
        message = data.get('message', '')
        conversation_id = data.get('conversation_id')

        # Stream tokens back as they arrive from FastAPI
        async for token in AIStudioService.stream_chat(
            org_id=self.org_id,
            user_id=self.user_id,
            conversation_id=conversation_id,
            message=message,
        ):
            await self.send(text_data=json.dumps({
                'type': 'token',
                'content': token
            }))

        await self.send(text_data=json.dumps({'type': 'done'}))
```

---

## 13. File Storage Architecture

### AWS S3 Configuration

```python
# config/settings/base.py
import os

# S3 Storage (production + staging)
AWS_ACCESS_KEY_ID = os.environ['AWS_ACCESS_KEY_ID']
AWS_SECRET_ACCESS_KEY = os.environ['AWS_SECRET_ACCESS_KEY']
AWS_STORAGE_BUCKET_NAME = os.environ['AWS_STORAGE_BUCKET_NAME']
AWS_S3_REGION_NAME = os.environ.get('AWS_S3_REGION_NAME', 'ap-south-1')
AWS_S3_CUSTOM_DOMAIN = os.environ.get('AWS_CLOUDFRONT_DOMAIN')  # Optional CDN
AWS_DEFAULT_ACL = 'private'  # Never public by default
AWS_S3_FILE_OVERWRITE = False
AWS_S3_OBJECT_PARAMETERS = {
    'CacheControl': 'max-age=86400',
}
AWS_QUERYSTRING_AUTH = True  # Signed URLs for private files
AWS_QUERYSTRING_EXPIRE = 3600  # Signed URL expiry: 1 hour

DEFAULT_FILE_STORAGE = 'storages.backends.s3boto3.S3Boto3Storage'
```

### S3 Path Convention

```
s3://bucket-name/
└── organizations/
    └── {org_id}/
        ├── projects/{project_id}/files/
        ├── leads/{lead_id}/attachments/
        ├── attendance/selfies/{date}/
        ├── payroll/{year}/{month}/payslips/
        ├── invoices/{invoice_id}/
        └── ai-documents/{source_id}/
```

### Generating Signed Upload URLs (Frontend uploads directly to S3)

```python
# modules/files/views.py
import boto3
from rest_framework.decorators import api_view
from rest_framework.response import Response


@api_view(['POST'])
def get_upload_url(request):
    """
    Returns a pre-signed S3 URL for direct frontend-to-S3 upload.
    The frontend uploads directly — file never passes through Django server.
    """
    s3 = boto3.client('s3', region_name=settings.AWS_S3_REGION_NAME)
    file_name = request.data['file_name']
    content_type = request.data['content_type']
    org_id = str(request.user.organization_id)

    key = f'organizations/{org_id}/uploads/{uuid4()}/{file_name}'

    presigned = s3.generate_presigned_post(
        Bucket=settings.AWS_STORAGE_BUCKET_NAME,
        Key=key,
        Fields={'Content-Type': content_type},
        Conditions=[
            {'Content-Type': content_type},
            ['content-length-range', 1, 52428800],  # Max 50MB
        ],
        ExpiresIn=300,  # 5 minute window to upload
    )
    return Response({'upload_url': presigned, 'key': key})
```

---

## 14. Real-Time Architecture

### Django Channels Configuration

```python
# config/settings/base.py
CHANNEL_LAYERS = {
    'default': {
        'BACKEND': 'channels_redis.core.RedisChannelLayer',
        'CONFIG': {
            'hosts': [os.environ.get('REDIS_URL', 'redis://localhost:6379/0')],
            'capacity': 1500,
            'expiry': 10,
        },
    },
}

# config/asgi.py
from channels.routing import ProtocolTypeRouter, URLRouter
from channels.auth import AuthMiddlewareStack
from modules.ai_studio.routing import websocket_urlpatterns as ai_ws
from modules.notifications.routing import websocket_urlpatterns as notif_ws

application = ProtocolTypeRouter({
    'http': get_asgi_application(),
    'websocket': AuthMiddlewareStack(
        URLRouter(ai_ws + notif_ws)
    ),
})
```

### WebSocket URL Conventions

```
ws://host/ws/ai/chat/          ← AI streaming chat
ws://host/ws/notifications/    ← Real-time in-app notifications
ws://host/ws/tasks/            ← Live task updates
ws://host/ws/production/{id}/  ← Live production order tracking
```

---

## 15. Background Jobs Architecture

### Celery Configuration

```python
# config/celery.py
from celery import Celery
from django.conf import settings

app = Celery('indusflow')
app.config_from_object('django.conf:settings', namespace='CELERY')
app.autodiscover_tasks()

# Named queues — each has dedicated workers
app.conf.task_routes = {
    'modules.payroll.tasks.*':       {'queue': 'payroll'},
    'modules.ai_studio.tasks.*':     {'queue': 'ai'},
    'modules.reports.tasks.*':       {'queue': 'reports'},
    'modules.notifications.tasks.*': {'queue': 'notifications'},
    '*':                              {'queue': 'default'},
}

# Worker concurrency per queue (configured in docker-compose)
# default: 4 workers
# payroll: 2 workers (CPU-intensive)
# ai: 2 workers (IO-bound, awaits OpenAI)
# reports: 2 workers
# notifications: 4 workers (fast, IO-bound)
```

### Celery Beat Periodic Tasks

```python
# config/celery.py
from celery.schedules import crontab

app.conf.beat_schedule = {
    'check-low-stock-daily': {
        'task': 'modules.warehouse.tasks.check_low_stock_alerts',
        'schedule': crontab(hour=8, minute=0),  # 8 AM IST daily
    },
    'send-followup-reminders': {
        'task': 'modules.crm.tasks.send_followup_reminders',
        'schedule': crontab(hour=9, minute=0),  # 9 AM IST daily
    },
    'process-overdue-tasks': {
        'task': 'modules.tasks.tasks.mark_overdue_tasks',
        'schedule': crontab(hour=0, minute=30),  # 12:30 AM IST
    },
    'send-scheduled-reports': {
        'task': 'modules.reports.tasks.send_scheduled_reports',
        'schedule': crontab(hour=7, minute=0),  # 7 AM IST
    },
}
```

### Celery Task Pattern

```python
# modules/payroll/tasks.py
from celery import shared_task
from celery.utils.log import get_task_logger

logger = get_task_logger(__name__)


@shared_task(
    bind=True,
    queue='payroll',
    max_retries=3,
    default_retry_delay=60,
    soft_time_limit=300,  # 5 min soft limit
    time_limit=360,       # 6 min hard limit
)
def process_monthly_payroll(self, org_id: str, month: int, year: int, triggered_by: str):
    """
    Process monthly payroll for all active employees in an organization.
    Retry on transient failures. Do not retry on validation errors.
    """
    try:
        from .services import PayrollService
        result = PayrollService.process_monthly_payroll(org_id, month, year, triggered_by)
        logger.info(f'Payroll processed: org={org_id} month={month}/{year} count={result["count"]}')
        return result
    except PayrollValidationError as exc:
        # Don't retry validation errors
        logger.error(f'Payroll validation failed: {exc}')
        raise
    except Exception as exc:
        logger.warning(f'Payroll task failed, retrying: {exc}')
        raise self.retry(exc=exc)
```

---

## 16. Frontend Architecture

### Next.js App Router Structure

```
src/app/
├── (auth)/
│   ├── login/page.tsx
│   ├── forgot-password/page.tsx
│   └── layout.tsx           ← Auth layout (no sidebar)
└── (dashboard)/
    ├── layout.tsx            ← Dashboard layout (sidebar + header)
    ├── home/page.tsx
    ├── dashboard/page.tsx
    ├── leads/
    │   ├── page.tsx          ← Lead list
    │   └── [id]/page.tsx     ← Lead detail
    ├── projects/
    │   ├── page.tsx
    │   └── [id]/
    │       ├── page.tsx      ← Project workspace
    │       ├── tasks/page.tsx
    │       ├── files/page.tsx
    │       ├── invoices/page.tsx
    │       └── ai/page.tsx
    └── settings/page.tsx
```

### TanStack Query Pattern

```typescript
// hooks/useLeads.ts
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { leadsApi } from '@/lib/api/leads'
import type { Lead, CreateLeadInput } from '@indusflow/types'

// Query keys are centralized
export const leadKeys = {
  all: ['leads'] as const,
  list: (filters?: Record<string, unknown>) => [...leadKeys.all, 'list', filters] as const,
  detail: (id: string) => [...leadKeys.all, 'detail', id] as const,
}

export function useLeads(filters?: Record<string, unknown>) {
  return useQuery({
    queryKey: leadKeys.list(filters),
    queryFn: () => leadsApi.list(filters),
    staleTime: 5 * 60 * 1000, // 5 minutes
  })
}

export function useCreateLead() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (data: CreateLeadInput) => leadsApi.create(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: leadKeys.all })
    },
  })
}
```

### Zustand Store Pattern

```typescript
// store/auth.ts
import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { User, Organization } from '@indusflow/types'

interface AuthState {
  user: User | null
  organization: Organization | null
  modules: Record<string, boolean>
  accessToken: string | null
  refreshToken: string | null
  setAuth: (user: User, org: Organization, tokens: { access: string; refresh: string }) => void
  setModules: (modules: Record<string, boolean>) => void
  clearAuth: () => void
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      organization: null,
      modules: {},
      accessToken: null,
      refreshToken: null,
      setAuth: (user, organization, { access, refresh }) =>
        set({ user, organization, accessToken: access, refreshToken: refresh }),
      setModules: (modules) => set({ modules }),
      clearAuth: () =>
        set({ user: null, organization: null, modules: {}, accessToken: null, refreshToken: null }),
    }),
    {
      name: 'indusflow-auth',
      partialize: (state) => ({
        accessToken: state.accessToken,
        refreshToken: state.refreshToken,
      }),
    }
  )
)
```

### API Client Pattern

```typescript
// lib/api/client.ts
import axios from 'axios'
import { useAuthStore } from '@/store/auth'

export const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: { 'Content-Type': 'application/json' },
})

// Attach JWT to every request
apiClient.interceptors.request.use((config) => {
  const token = useAuthStore.getState().accessToken
  if (token) config.headers.Authorization = `Bearer ${token}`
  return config
})

// Auto-refresh on 401
apiClient.interceptors.response.use(
  (res) => res,
  async (error) => {
    if (error.response?.status === 401) {
      const { refreshToken, setAuth, clearAuth } = useAuthStore.getState()
      if (refreshToken) {
        try {
          const { data } = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/token/refresh/`, {
            refresh: refreshToken,
          })
          setAuth(useAuthStore.getState().user!, useAuthStore.getState().organization!, {
            access: data.data.access,
            refresh: data.data.refresh,
          })
          error.config.headers.Authorization = `Bearer ${data.data.access}`
          return apiClient(error.config)
        } catch {
          clearAuth()
          window.location.href = '/login'
        }
      }
    }
    return Promise.reject(error)
  }
)
```

### TypeScript Strict Mode

```json
// tsconfig.json (extends tsconfig.base.json)
{
  "extends": "../../tsconfig.base.json",
  "compilerOptions": {
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "noUncheckedIndexedAccess": true,
    "jsx": "preserve",
    "paths": {
      "@/*": ["./src/*"],
      "@indusflow/types": ["../../packages/types/src"],
      "@indusflow/ui": ["../../packages/ui/src"]
    }
  }
}
```

---

## 17. Mobile Architecture

### Expo Configuration

```json
// app.json
{
  "expo": {
    "name": "IndusFlow AI",
    "slug": "indusflow-ai",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/icon.png",
    "userInterfaceStyle": "automatic",
    "splash": { "image": "./assets/splash.png", "resizeMode": "contain" },
    "ios": {
      "supportsTablet": false,
      "bundleIdentifier": "com.indusflowai.app",
      "infoPlist": {
        "NSLocationWhenInUseUsageDescription": "Used for attendance GPS verification.",
        "NSCameraUsageDescription": "Used to capture attendance selfies.",
        "NSFaceIDUsageDescription": "Used for biometric login."
      }
    },
    "android": {
      "package": "com.indusflowai.app",
      "permissions": ["ACCESS_FINE_LOCATION", "CAMERA"],
      "adaptiveIcon": { "foregroundImage": "./assets/adaptive-icon.png" }
    },
    "plugins": [
      "expo-router",
      "expo-secure-store",
      ["expo-location", { "locationAlwaysAndWhenInUsePermission": false }],
      "expo-local-authentication"
    ]
  }
}
```

### EAS Build Profiles

```json
// eas.json
{
  "cli": { "version": ">= 10.0.0" },
  "build": {
    "development": {
      "developmentClient": true,
      "distribution": "internal",
      "env": { "APP_ENV": "development" }
    },
    "preview": {
      "distribution": "internal",
      "env": { "APP_ENV": "staging" }
    },
    "production": {
      "distribution": "store",
      "env": { "APP_ENV": "production" }
    }
  },
  "submit": {
    "production": {
      "android": { "serviceAccountKeyPath": "./service-account.json", "track": "internal" },
      "ios": { "appleId": "apple@indusflowai.com", "ascAppId": "1234567890" }
    }
  }
}
```

---

## 18. Admin Portal Architecture

### Technology
Django admin with **Unfold UI** (`django-unfold`) — a modern Material Design skin for Django admin.

```python
# config/settings/base.py
INSTALLED_APPS = [
    'unfold',                          # Must be before django.contrib.admin
    'unfold.contrib.filters',
    'unfold.contrib.forms',
    'django.contrib.admin',
    # ... other apps
]

UNFOLD = {
    'SITE_TITLE': 'IndusFlow AI — Platform Admin',
    'SITE_HEADER': 'IndusFlow AI',
    'SITE_URL': '/',
    'SHOW_HISTORY': True,
    'SHOW_VIEW_ON_SITE': False,
}
```

### Access
- URL: `admin.indusflowai.com` (production) / `localhost:8000/admin/` (dev)
- Only `is_staff=True` users can access
- Super admin users have `is_superuser=True`
- All organization admins have `is_staff=False` — they use the main app

---

## 19. Infrastructure & Deployment

### AWS Services

| Service | Purpose | Environment |
|---|---|---|
| ECS Fargate | Django + FastAPI containers | Staging + Production |
| RDS PostgreSQL 15 | Primary database | Staging + Production |
| ElastiCache Redis 7 | Cache + Celery broker | Staging + Production |
| S3 | File storage | All environments |
| CloudFront | CDN for S3 assets | Production |
| SES | Transactional email | Staging + Production |
| ACM | SSL certificates | Production |
| Secrets Manager | Environment secrets | Staging + Production |
| CloudWatch | Metrics + logs | All environments |
| ECR | Docker image registry | Staging + Production |

### Docker Services

```yaml
# docker-compose.yml (local dev)
services:
  postgres:
    image: pgvector/pgvector:pg15
    environment:
      POSTGRES_DB: indusflow
      POSTGRES_USER: indusflow
      POSTGRES_PASSWORD: ${DB_PASSWORD}
    ports: ["5432:5432"]
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U indusflow"]
      interval: 10s

  redis:
    image: redis:7-alpine
    ports: ["6379:6379"]

  api:
    build:
      context: .
      dockerfile: infrastructure/docker/Dockerfile.api
    command: python manage.py runserver 0.0.0.0:8000
    volumes: [./apps/backend:/app]
    ports: ["8000:8000"]
    env_file: .env
    depends_on: [postgres, redis]

  ai:
    build:
      context: .
      dockerfile: infrastructure/docker/Dockerfile.ai
    command: uvicorn main:app --host 0.0.0.0 --port 8001 --reload
    volumes: [./apps/ai-services:/app]
    ports: ["8001:8001"]
    env_file: .env
    depends_on: [postgres]

  celery-worker:
    build:
      dockerfile: infrastructure/docker/Dockerfile.worker
    command: celery -A config worker -l INFO -Q default,ai,payroll,reports,notifications -c 4
    volumes: [./apps/backend:/app]
    env_file: .env
    depends_on: [postgres, redis]

  celery-beat:
    build:
      dockerfile: infrastructure/docker/Dockerfile.worker
    command: celery -A config beat -l INFO --scheduler django_celery_beat.schedulers:DatabaseScheduler
    volumes: [./apps/backend:/app]
    env_file: .env
    depends_on: [postgres, redis]

  web:
    build:
      dockerfile: infrastructure/docker/Dockerfile.web
    command: npm run dev
    volumes: [./apps/web:/app, /app/node_modules]
    ports: ["3000:3000"]
    env_file: .env
    depends_on: [api]
```

### Production ECS Task Definitions

| Service | CPU | Memory | Min Tasks | Max Tasks |
|---|---|---|---|---|
| api (Django) | 512 | 1024 MB | 2 | 10 |
| ai-services (FastAPI) | 1024 | 2048 MB | 1 | 5 |
| celery-worker-default | 256 | 512 MB | 1 | 4 |
| celery-worker-payroll | 512 | 1024 MB | 1 | 2 |
| celery-beat | 256 | 512 MB | 1 | 1 |

---

## 20. Environment Configuration

All environment variables required to run the platform:

```bash
# ─── Django Core ───────────────────────────────────────────
DJANGO_SECRET_KEY=                  # 50+ char random string (required)
DJANGO_DEBUG=False                  # True only in dev
DJANGO_SETTINGS_MODULE=config.settings.dev
DJANGO_ALLOWED_HOSTS=localhost,127.0.0.1

# ─── Database ──────────────────────────────────────────────
DB_NAME=indusflow
DB_USER=indusflow
DB_PASSWORD=                        # required
DB_HOST=postgres                    # docker service name in dev
DB_PORT=5432

# ─── Redis ─────────────────────────────────────────────────
REDIS_URL=redis://redis:6379/0      # Cache
CELERY_BROKER_URL=redis://redis:6379/1
CELERY_RESULT_BACKEND=redis://redis:6379/2

# ─── JWT ───────────────────────────────────────────────────
JWT_ACCESS_TOKEN_LIFETIME_MINUTES=60
JWT_REFRESH_TOKEN_LIFETIME_DAYS=7

# ─── AWS ───────────────────────────────────────────────────
AWS_ACCESS_KEY_ID=                  # required for staging/prod
AWS_SECRET_ACCESS_KEY=              # required for staging/prod
AWS_STORAGE_BUCKET_NAME=indusflow-uploads-dev
AWS_S3_REGION_NAME=ap-south-1
AWS_CLOUDFRONT_DOMAIN=              # optional CDN domain

# ─── Email ─────────────────────────────────────────────────
EMAIL_BACKEND=django.core.mail.backends.console.EmailBackend  # dev only
SENDGRID_API_KEY=                   # required for staging/prod
DEFAULT_FROM_EMAIL=noreply@indusflowai.com

# ─── AI Services ───────────────────────────────────────────
OPENAI_API_KEY=                     # required
OPENAI_MODEL=gpt-4o
OPENAI_EMBEDDING_MODEL=text-embedding-3-small
AI_SERVICE_URL=http://ai-service:8001
AI_INTERNAL_TOKEN=                  # shared secret for Django↔FastAPI

# ─── Stripe (Phase 12) ─────────────────────────────────────
STRIPE_PUBLIC_KEY=pk_test_
STRIPE_SECRET_KEY=sk_test_
STRIPE_WEBHOOK_SECRET=whsec_

# ─── Frontend ──────────────────────────────────────────────
NEXT_PUBLIC_API_URL=http://localhost:8000/api
NEXT_PUBLIC_WS_URL=ws://localhost:8000/ws
NEXT_PUBLIC_APP_NAME=IndusFlow AI
NEXT_PUBLIC_APP_ENV=development

# ─── CORS ──────────────────────────────────────────────────
CORS_ALLOWED_ORIGINS=http://localhost:3000,http://127.0.0.1:3000

# ─── Monitoring ────────────────────────────────────────────
SENTRY_DSN=                         # required for staging/prod
SENTRY_ENVIRONMENT=development
```

---

## 21. CI/CD Pipeline

### GitHub Actions Workflows

#### `ci.yml` — Runs on every PR

```yaml
name: CI

on:
  pull_request:
    branches: [develop, main]

jobs:
  backend:
    runs-on: ubuntu-latest
    services:
      postgres:
        image: pgvector/pgvector:pg15
        env:
          POSTGRES_DB: indusflow_test
          POSTGRES_USER: indusflow
          POSTGRES_PASSWORD: test
        options: >-
          --health-cmd pg_isready
          --health-interval 10s
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-python@v5
        with:
          python-version: '3.12'
          cache: 'pip'
      - run: pip install -r apps/backend/requirements/dev.txt
      - run: ruff check apps/backend/
      - run: ruff format --check apps/backend/
      - run: pytest apps/backend/ --cov=modules --cov-report=xml -x
        env:
          DB_HOST: localhost
          DB_NAME: indusflow_test
          DB_USER: indusflow
          DB_PASSWORD: test
          DJANGO_SETTINGS_MODULE: config.settings.testing

  frontend:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
      - run: npm ci
      - run: npm run typecheck --workspace=apps/web
      - run: npm run lint --workspace=apps/web
      - run: npm run build --workspace=apps/web
```

#### `deploy-staging.yml` — Auto-deploys `develop` to staging

```yaml
name: Deploy to Staging

on:
  push:
    branches: [develop]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Configure AWS credentials
        uses: aws-actions/configure-aws-credentials@v4
        with:
          aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}
          aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
          aws-region: ap-south-1
      - name: Build and push Docker images to ECR
        run: |
          aws ecr get-login-password | docker login --username AWS --password-stdin $ECR_REGISTRY
          docker build -f infrastructure/docker/Dockerfile.api -t $ECR_REGISTRY/indusflow-api:staging .
          docker push $ECR_REGISTRY/indusflow-api:staging
      - name: Deploy to ECS staging
        run: |
          aws ecs update-service --cluster indusflow-staging --service api --force-new-deployment
      - name: Deploy frontend to Vercel
        run: npx vercel --token=${{ secrets.VERCEL_TOKEN }} --prod
```

#### `deploy-production.yml` — Manual gate, deploys tagged releases

```yaml
name: Deploy to Production

on:
  workflow_dispatch:           # Manual trigger only
    inputs:
      version:
        description: 'Release tag (e.g., v1.0.0)'
        required: true

jobs:
  deploy:
    runs-on: ubuntu-latest
    environment: production    # Requires manual approval in GitHub
    steps:
      - uses: actions/checkout@v4
        with:
          ref: ${{ github.event.inputs.version }}
      # ... build + push + deploy steps
```

---

## 22. Security Architecture

### Rate Limiting

```python
# shared/throttling.py
from rest_framework.throttling import UserRateThrottle


class OrganizationRateThrottle(UserRateThrottle):
    """Rate limits per organization plan tier."""

    def get_cache_key(self, request, view):
        if request.user.is_authenticated:
            return f'throttle_org_{request.user.organization_id}'
        return None

    def get_rate(self):
        if not hasattr(self, 'request'):
            return '100/min'
        plan = self.request.user.organization.plan
        rates = {
            'starter': '100/min',
            'professional': '500/min',
            'enterprise': '2000/min',
        }
        return rates.get(plan, '100/min')
```

### CORS Configuration

```python
# config/settings/base.py
CORS_ALLOWED_ORIGINS = os.environ.get(
    'CORS_ALLOWED_ORIGINS',
    'http://localhost:3000'
).split(',')
CORS_ALLOW_CREDENTIALS = True
CORS_ALLOWED_HEADERS = [
    'accept', 'accept-encoding', 'authorization',
    'content-type', 'dnt', 'origin', 'user-agent',
    'x-csrftoken', 'x-requested-with',
]
```

### Security Headers (Nginx)

```nginx
# infrastructure/nginx/nginx.conf
add_header X-Frame-Options "SAMEORIGIN" always;
add_header X-Content-Type-Options "nosniff" always;
add_header X-XSS-Protection "1; mode=block" always;
add_header Referrer-Policy "strict-origin-when-cross-origin" always;
add_header Content-Security-Policy "default-src 'self'; ..." always;
add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
```

---

## 23. Monitoring & Observability

### Sentry (Error Tracking)

```python
# config/settings/base.py
import sentry_sdk
from sentry_sdk.integrations.django import DjangoIntegration
from sentry_sdk.integrations.celery import CeleryIntegration

sentry_sdk.init(
    dsn=os.environ.get('SENTRY_DSN'),
    environment=os.environ.get('SENTRY_ENVIRONMENT', 'development'),
    integrations=[DjangoIntegration(), CeleryIntegration()],
    traces_sample_rate=0.1,         # 10% performance monitoring
    profiles_sample_rate=0.1,
    send_default_pii=False,         # GDPR — never send PII to Sentry
)
```

### CloudWatch Metrics

Custom metrics pushed for:
- API response time P95 per endpoint
- Celery task success/failure rates per queue
- AI credit usage per organization
- Active WebSocket connections
- S3 upload success/failure rate

### Health Check Endpoints

```python
# GET /api/health/     ← Basic liveness probe
# GET /api/ready/      ← Readiness probe (checks DB + Redis)

# modules/core/views.py
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from django.db import connection
from django_redis import get_redis_connection


@api_view(['GET'])
@permission_classes([AllowAny])
def health_check(request):
    return Response({'status': 'ok'})


@api_view(['GET'])
@permission_classes([AllowAny])
def readiness_check(request):
    checks = {}
    try:
        connection.ensure_connection()
        checks['database'] = 'ok'
    except Exception:
        checks['database'] = 'error'
    try:
        get_redis_connection('default').ping()
        checks['redis'] = 'ok'
    except Exception:
        checks['redis'] = 'error'

    status_code = 200 if all(v == 'ok' for v in checks.values()) else 503
    return Response({'status': checks}, status=status_code)
```

---

## 24. Testing Strategy

### Test Stack

| Tool | Purpose |
|---|---|
| pytest-django | Test runner |
| factory-boy | Test data factories |
| pytest-cov | Coverage reports |
| responses | Mock HTTP calls |
| freezegun | Mock datetime |
| Playwright | E2E browser tests |

### Test Organization

```
modules/crm/tests/
├── factories.py          ← factory-boy factories for test data
├── test_models.py        ← Model logic, field validation, soft delete
├── test_serializers.py   ← Serializer validation, output shape
├── test_views.py         ← API endpoint tests (the most important)
└── test_services.py      ← Business logic unit tests
```

### Test Factory Pattern

```python
# modules/crm/tests/factories.py
import factory
from factory.django import DjangoModelFactory
from modules.organizations.tests.factories import OrganizationFactory
from modules.users.tests.factories import UserFactory
from ..models import Lead


class LeadFactory(DjangoModelFactory):
    class Meta:
        model = Lead

    organization = factory.SubFactory(OrganizationFactory)
    lead_name = factory.Faker('name')
    company_name = factory.Faker('company')
    email = factory.Faker('email')
    phone = factory.Faker('phone_number')
    source = 'website'
    status = 'new'
    assigned_to = factory.SubFactory(UserFactory)
    created_by = factory.SubFactory(UserFactory)
```

### API Test Pattern

```python
# modules/crm/tests/test_views.py
import pytest
from rest_framework.test import APIClient
from rest_framework import status
from .factories import LeadFactory
from modules.users.tests.factories import UserFactory


@pytest.mark.django_db
class TestLeadViewSet:
    def setup_method(self):
        self.client = APIClient()
        self.user = UserFactory()
        self.client.force_authenticate(user=self.user)

    def test_list_returns_only_own_org_leads(self):
        """Critical: users must never see another org's leads."""
        own_lead = LeadFactory(organization=self.user.organization)
        other_lead = LeadFactory()  # Different org

        response = self.client.get('/api/v1/leads/')

        assert response.status_code == status.HTTP_200_OK
        ids = [r['id'] for r in response.data['data']['results']]
        assert str(own_lead.id) in ids
        assert str(other_lead.id) not in ids

    def test_create_lead_assigns_organization(self):
        payload = {'lead_name': 'Test Lead', 'company_name': 'ACME', 'status': 'new'}
        response = self.client.post('/api/v1/leads/', payload)
        assert response.status_code == status.HTTP_201_CREATED
        assert response.data['data']['organization'] == str(self.user.organization_id)

    def test_delete_is_soft(self):
        lead = LeadFactory(organization=self.user.organization)
        response = self.client.delete(f'/api/v1/leads/{lead.id}/')
        assert response.status_code == status.HTTP_204_NO_CONTENT
        lead.refresh_from_db()
        assert lead.is_deleted is True  # soft deleted, not gone
```

### Coverage Requirements

| Scope | Minimum Coverage |
|---|---|
| shared/ (BaseModel, mixins, permissions) | 95% |
| modules/authentication/ | 95% |
| modules/organizations/ | 90% |
| modules/roles_permissions/ | 90% |
| All other modules | 80% |
| Overall | 85% |

---

## 25. Code Standards & Conventions

### Python (Backend)

```toml
# pyproject.toml
[tool.ruff]
target-version = "py312"
line-length = 100
select = ["E", "F", "W", "I", "N", "UP", "B", "A", "C4", "T20"]
ignore = ["E501"]

[tool.ruff.format]
quote-style = "double"
indent-style = "space"

[tool.pytest.ini_options]
DJANGO_SETTINGS_MODULE = "config.settings.testing"
python_files = ["test_*.py"]
addopts = "--strict-markers --tb=short"
```

### TypeScript (Frontend)

```json
// .eslintrc.json (web)
{
  "extends": ["next/core-web-vitals", "plugin:@typescript-eslint/recommended"],
  "rules": {
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/no-unused-vars": "error",
    "prefer-const": "error",
    "no-console": ["warn", { "allow": ["warn", "error"] }]
  }
}
```

### Commit Convention

```
type(scope): description

Types:   feat, fix, chore, docs, refactor, test, perf, style, revert
Scopes:  core, auth, leads, projects, production, warehouse, attendance,
         payroll, finance, reports, ai-studio, notifications, billing,
         audit, deps, ci, infra, web, mobile

Examples:
  feat(leads): add lead kanban view with drag-and-drop
  fix(attendance): resolve GPS coordinates not saving on punch-in
  chore(deps): upgrade django to 4.2.16
  test(projects): add unit tests for invoice GST calculation
```

### File Naming

| Context | Convention | Example |
|---|---|---|
| Python modules | snake_case | `lead_service.py` |
| React components | PascalCase | `LeadCard.tsx` |
| React hooks | camelCase with `use` prefix | `useLeads.ts` |
| API files | camelCase | `leadsApi.ts` |
| Store files | camelCase | `authStore.ts` |
| Type files | camelCase | `leadTypes.ts` |

---

## 26. Technical Acceptance Criteria
Backend

 BaseModel is the parent of every model in all modules
 OrganizationQuerysetMixin is applied to every ViewSet — no raw .all() queries
 All API responses follow the standard envelope format (success, data, error)
 All endpoints return 401 (not 500) when JWT is missing or expired
 All endpoints return 403 (not 404) when role lacks permission
 Cross-tenant test: user from Org A cannot retrieve any record from Org B via any endpoint
 Soft delete test: deleted records do not appear in any list endpoint
 pgvector extension installed and ai_document_chunks table created on migration
 No N+1 queries on any list endpoint — select_related / prefetch_related applied where needed
 All list endpoints support pagination — unbounded .all() responses are not possible

Authentication

 Login returns access token (60 min) + refresh token (7 days)
 Refresh rotates the token pair and blacklists the old refresh token
 Logout blacklists the refresh token and returns 200
 /api/v1/me/ returns correct user profile, role, and organization
 /api/v1/me/modules/ returns correct module dict based on user's role and org plan
 Downgrading an org plan disables the correct modules in /api/v1/me/modules/ immediately
 Deactivated user receives 401 on next request even with a valid unexpired JWT

RBAC

 Employee cannot GET /api/v1/dashboard/ — returns 403
 Employee cannot GET /api/v1/finance/ — returns 403
 Employee can only retrieve their own attendance records — not other employees'
 Employee can only retrieve their own payslips — not other employees'
 Custom role with view only on leads cannot POST /api/v1/leads/ — returns 403
 Custom role with view only on leads cannot DELETE /api/v1/leads/{id}/ — returns 403
 Disabling a module via settings returns 403 on all that module's endpoints for all users
 Organization admin cannot access /admin/ super admin portal — returns 403

AI Services

 Django → FastAPI internal calls use X-Internal-Token header
 FastAPI rejects any request without the internal token with 401
 SQL agent cannot execute INSERT, UPDATE, or DELETE statements — raises exception if attempted
 SQL agent results are scoped to org_id — raw SQL always includes WHERE organization_id = %s
 RAG similarity search filtered by org_id — cross-org document leaks impossible
 RAG response includes source document reference (document name + chunk index)
 AI streaming response arrives as WebSocket tokens within 1.5s of first token
 AI conversation history stored per user per organization — not shared across users

Real-time / WebSockets

 WebSocket connection established successfully on authenticated session
 WebSocket connection rejected with 4001 close code when JWT is invalid
 In-app notification delivered via WebSocket within 2s of triggering event
 New task comment appears in real-time without page refresh
 WebSocket disconnects cleanly on logout — no lingering connections
 Multiple browser tabs on the same account all receive notifications simultaneously

File Storage

 Files upload directly to AWS S3 — nothing written to local filesystem in staging or production
 Pre-signed S3 URLs generated for file downloads — direct S3 bucket access not public
 File size limit enforced at 50 MB — upload returns 400 above limit
 Soft-deleted files removed from S3 after 30 days via lifecycle rule
 File access scoped to organization — user cannot access another org's S3 file URL
 Local dev uses S3 (or MinIO fallback) — MEDIA_ROOT local storage never used in production

Celery

 Failed Celery tasks retry with exponential backoff (max 3 retries)
 Payroll processing task queued to payroll queue — not the default queue
 AI processing tasks queued to ai queue — not blocking default queue
 celery-beat scheduled tasks fire at configured intervals without drift
 Celery task failure sends error to Sentry with full traceback
 Task result backend (Redis) stores results — tasks do not expire silently

Frontend (Web)

 TypeScript strict: true enabled — zero any types in the entire codebase
 Auth middleware redirects unauthenticated users to /login before rendering any dashboard route
 Sidebar renders only modules present in /api/v1/me/modules/ response — no hardcoded visibility
 All data fetching uses TanStack Query — no raw fetch or axios calls outside the API client
 All forms validated with Zod schema before submission — invalid forms never reach the API
 TanStack Query loading and error states handled on every page — no unhandled loading/error renders
 Dashboard loads with skeleton placeholders — no layout shift on data arrival
 All pages are responsive at 375px, 768px, and 1280px breakpoints

Mobile

 JWT stored in expo-secure-store — not in AsyncStorage or localStorage
 GPS coordinates captured and sent on punch in/out
 Geofencing validation rejects punch if outside configured radius — error shown to user
 Selfie capture works on both iOS 14+ and Android 8+
 Biometric login (Face ID / fingerprint) works and falls back to PIN gracefully
 Push notifications delivered within 5s of server event
 Barcode scanner identifies inventory items correctly on both platforms
 Offline attendance punch queues locally and syncs on reconnection

Security

 gitleaks scan passes — no secrets, API keys, or credentials found in Git history
 API rate limiting returns 429 (not 500) when threshold is exceeded
 CORS blocks requests from origins not in CORS_ALLOWED_ORIGINS — returns 403
 All S3 uploads use pre-signed POST — bucket is not publicly writable
 DJANGO_SECRET_KEY value differs between local, staging, and production environments
 DEBUG = False in staging and production — verified in CI deploy step

Performance

 GET /api/v1/leads/ with 1,000 records responds in under 300ms
 GET /api/v1/dashboard/ with full KPI aggregation responds in under 2s
 GET /api/v1/projects/ with 500 projects responds in under 300ms
 Payroll processing for 100 employees completes Celery task in under 60s
 AI first token response within 1.5s of sending WebSocket message
 Next.js pages achieve Lighthouse performance score of 80+ on desktop
 No single database query takes over 100ms — verified via Django Debug Toolbar in dev

Monitoring & Health

 GET /api/health/ returns { "status": "ok", "db": "ok", "redis": "ok" } within 200ms
 Sentry captures unhandled exceptions in production — verified with a test error
 Sentry captures Celery task failures with full traceback
 Django request logs include: method, path, status code, response time, user ID, org ID
 AWS CloudWatch alarms configured for: CPU > 80%, memory > 80%, error rate > 1%
