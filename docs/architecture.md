# Architecture — IndusFlow AI

> Keep this file updated after every major architectural decision or new module addition.
> This is the document Claude Code reads to understand how the system is structured.

---

## System Overview

IndusFlow AI is a **multi-tenant SaaS platform** built as a monorepo.
Five separate applications share packages and communicate over well-defined interfaces.

```
┌─────────────────────────────────────────────────────────────┐
│                        CLIENTS                              │
│          apps/web (Next.js)    apps/mobile (Expo)           │
└──────────────────────┬──────────────────────────────────────┘
                       │ HTTPS REST + WebSocket
┌──────────────────────▼──────────────────────────────────────┐
│                  apps/backend (Django + DRF)                 │
│   24 domain modules  │  JWT Auth  │  RBAC  │  Celery tasks  │
└──────┬───────────────┴─────────────────────────┬────────────┘
       │ Internal HTTP (X-Internal-Token)         │ async tasks
┌──────▼──────────────┐                ┌──────────▼───────────┐
│  apps/ai-services   │                │    Redis + Celery     │
│  (FastAPI)          │                │    (task broker)      │
│  LangChain agents   │                └──────────────────────┘
│  RAG pipeline       │
│  SQL agent          │
│  Streaming via WS   │
└─────────────────────┘
       │
┌──────▼──────────────────────────────────────────────────────┐
│                PostgreSQL 15 + pgvector                      │
│   Shared DB for Django + AI services. Row-level org isolation│
└─────────────────────────────────────────────────────────────┘
```

---

## Monorepo Structure

```
indusflow-ai/
├── apps/
│   ├── web/                  Next.js 14 (App Router)
│   ├── mobile/               Expo SDK 51 + React Native
│   ├── backend/              Django 4.2 LTS + DRF
│   │   ├── config/           Django project (settings, urls, celery, asgi)
│   │   ├── modules/          24 domain apps (one per business domain)
│   │   └── shared/           BaseModel, mixins, permissions, utils
│   ├── ai-services/          FastAPI — AI agents, RAG, streaming
│   └── admin-portal/         Django admin with Unfold (super-admin)
├── packages/
│   ├── types/                @indusflow/types — all TS interfaces
│   ├── api-client/           @indusflow/api-client — TanStack Query hooks
│   ├── ui/                   Design tokens + shared base components
│   ├── auth/                 Shared JWT utilities (web + mobile)
│   ├── config/               ESLint, Tailwind, TS base configs
│   ├── constants/            Status codes, module keys, route names
│   ├── permissions/          Frontend permission check utilities
│   └── validations/          Zod schemas shared across web + mobile
├── infrastructure/
│   ├── docker/               Dockerfile.api, Dockerfile.web, Dockerfile.worker, Dockerfile.ai
│   ├── nginx/                Reverse proxy config
│   ├── kubernetes/           K8s manifests (Phase 12+)
│   └── terraform/            AWS IaC (Phase 12+)
└── docs/
    ├── architecture.md       ← this file
    ├── changelog.md
    ├── project_status.md
    ├── PRD.md
    ├── TRD.md
    ├── api/                  API contracts per module
    ├── db-design/            Database schema per module
    ├── flows/                User and system flow diagrams
    └── uiux/                 UI mockups and design references
```

---

## Service Architecture

### apps/backend — Django REST API

**Purpose:** Core business logic, authentication, RBAC, all domain modules.

```
config/
├── settings/base.py          Shared settings (INSTALLED_APPS, DRF, JWT, Celery)
├── settings/dev.py           Local dev overrides (DEBUG=True, console email)
├── settings/staging.py       Staging overrides
├── settings/prod.py          Production overrides (S3, RDS, ElastiCache)
├── urls.py                   Root URL config — includes all module URLs
├── celery.py                 Celery app config + task autodiscovery
└── asgi.py                   ASGI config for Django Channels (WebSocket)

modules/
├── core/                     BaseModel lives here, shared abstract models
├── organizations/            Organization model, module toggle system
├── authentication/           JWT login, refresh, logout, OTP
├── users/                    User profiles, avatar, preferences
├── roles_permissions/        Role, Permission, RolePermission, UserRole, ModuleAccess
├── dashboard/                KPI aggregation APIs per role
├── crm/                      Lead lifecycle, follow-ups, lead→project conversion
├── projects/                 Project workspace + all 13 sub-modules
├── production/               Production orders, BOM, QC, machine logs
├── warehouse/                Inventory, GRN, stock movements, locations
├── procurement/              Vendors, POs, procurement workflow
├── finance/                  Invoices, expenses, payments, budgets, GST
├── attendance/               Punch in/out, GPS, selfie, shifts
├── payroll/                  Salary structure, monthly run, payslips
├── leaves/                   Leave applications, approvals, balances
├── tasks/                    Cross-module task management
├── reports/                  Report generation engine, scheduled delivery
├── notifications/            In-app, email, push notification dispatch
├── ai_studio/                AI conversation storage, credit tracking
├── audit_logs/               Immutable audit trail middleware
├── files/                    Polymorphic file attachments (S3)
├── comments/                 Threaded comments on any record
├── approvals/                Generic approval workflow engine
├── integrations/             Stripe, WhatsApp, Google Calendar connectors
└── analytics/                Cross-module analytics aggregations

shared/
├── models.py                 BaseModel (UUID pk, org FK, timestamps, soft delete)
├── mixins.py                 OrganizationQuerysetMixin (enforces org isolation)
├── permissions.py            RBAC permission classes for DRF
├── middleware.py             Audit log middleware (logs POST/PUT/DELETE)
├── pagination.py             StandardResultsSetPagination (25 per page)
├── exceptions.py             Custom exception handler (standard envelope)
├── utils.py                  Shared utilities
└── constants.py              Shared Python constants
```

### apps/ai-services — FastAPI AI Service

**Purpose:** All AI workloads. Separated from Django for async performance and independent scaling.

```
ai-services/
├── main.py                   FastAPI app, router registration
├── routers/
│   ├── chat.py               Streaming chat endpoint (WebSocket)
│   ├── sql_agent.py          Natural language → read-only SQL
│   ├── rag.py                Document upload, embedding, Q&A
│   ├── reports.py            AI-generated report endpoint
│   └── insights.py           Per-module AI insights (leads, projects, etc.)
├── agents/
│   ├── sql_agent.py          LangChain SQL agent (org-scoped, read-only)
│   ├── rag_agent.py          LangChain RAG pipeline with pgvector
│   └── report_agent.py       LangGraph multi-step report generation
├── core/
│   ├── auth.py               X-Internal-Token validation
│   ├── db.py                 PostgreSQL + pgvector connection
│   └── openai.py             OpenAI client (GPT-4o + embeddings)
└── models/
    └── schemas.py            Pydantic request/response models
```

**Communication with Django:**
- Django calls FastAPI at `http://ai-services:8001/` via `httpx`
- All requests include `X-Internal-Token` header
- FastAPI returns structured JSON or streams tokens over WebSocket
- Both services share the same PostgreSQL instance

### apps/web — Next.js Web Application

**Purpose:** Primary user interface for desktop/laptop users.

```
src/
├── app/
│   ├── (auth)/               Login, forgot-password (public routes)
│   │   ├── login/page.tsx
│   │   └── forgot-password/page.tsx
│   └── (dashboard)/          Protected routes (require valid JWT)
│       ├── layout.tsx        Sidebar + header shell
│       ├── home/page.tsx
│       ├── dashboard/page.tsx
│       ├── leads/page.tsx
│       ├── projects/
│       │   ├── page.tsx      Project list
│       │   └── [id]/page.tsx Project detail workspace
│       ├── production/page.tsx
│       ├── warehouse/page.tsx
│       ├── attendance/page.tsx
│       ├── finance/page.tsx
│       ├── reports/page.tsx
│       ├── ai-studio/page.tsx
│       └── settings/page.tsx
├── components/
│   ├── ui/                   ShadCN base components
│   ├── layout/               Sidebar, Header, Breadcrumbs
│   ├── modules/              Module-specific components (one folder per module)
│   └── shared/               Tables, Forms, Charts, Modals, Skeletons
├── hooks/                    Custom React hooks
├── lib/                      API base client, utils, constants
├── store/                    Zustand stores (auth.ts, org.ts, ui.ts)
├── types/                    Local TS types (imports from @indusflow/types)
└── middleware.ts              Auth middleware — redirects to /login if no JWT
```

### apps/mobile — Expo React Native

**Purpose:** Mobile app for field workers (attendance punch, tasks, leads on the go).

**Priority screens (MVP):**
- Home (GPS punch + selfie, task summary, quick actions)
- My Tasks (kanban)
- Leads (list + detail)
- Attendance (personal history, leave application)
- AI Assistant (voice + text)
- Payslip Viewer

---

## Frontend Component Architecture

### packages/ui — Shared design tokens

```
src/
├── tokens.ts          Color values, spacing scale, typography scale
└── index.ts           Exports (web uses ShadCN on top; mobile uses Gluestack)
```

### packages/api-client — TanStack Query hooks

One hook file per module. Each file exports typed query + mutation hooks.

```
src/
├── auth.ts            useLogin, useLogout, useRefreshToken, useMe, useMyModules
├── leads.ts           useLeads, useLead, useCreateLead, useUpdateLead, useConvertLead
├── projects.ts        useProjects, useProject, useCreateProject, useProjectTasks, ...
├── production.ts      useProductionOrders, useProductionOrder, ...
├── warehouse.ts       useInventoryItems, useStockIn, useStockOut, ...
├── attendance.ts      usePunchIn, usePunchOut, useMyAttendance, ...
├── finance.ts         useInvoices, useExpenses, usePayments, ...
└── ...                (one file per module)
```

### packages/types — TypeScript interfaces

```
src/
├── auth.ts            AuthTokens, JWTPayload, LoginRequest
├── organization.ts    Organization, ModuleVisibility
├── user.ts            User, UserRole, UserProfile
├── common.ts          BaseEntity, PaginatedResponse, ApiResponse
├── leads.ts           Lead, LeadStatus, LeadNote, LeadFollowUp
├── projects.ts        Project, ProjectTask, ProjectStage, Quote, Invoice
├── production.ts      ProductionOrder, BOM, QCReport, MachineLog
├── warehouse.ts       InventoryItem, StockTransaction, GRN, Vendor
├── attendance.ts      AttendanceRecord, Leave, LeaveBalance, Payroll
├── finance.ts         FinanceInvoice, Expense, Payment, Budget
└── ai.ts              AIConversation, AIMessage, AIDocument
```

---

## Database Architecture

### Multi-tenancy strategy
- Phase 1 (current): Shared database, row-level isolation via `organization_id` FK
- Phase 2 (500+ orgs): `django-tenants` schema-per-tenant (zero app logic changes)

### BaseModel (every table inherits this)
```python
class BaseModel(models.Model):
    id           = UUIDField(primary_key=True, default=uuid.uuid4)
    organization = ForeignKey(Organization, on_delete=CASCADE)
    created_at   = DateTimeField(auto_now_add=True)
    updated_at   = DateTimeField(auto_now=True)
    created_by   = ForeignKey(User, null=True, related_name='+')
    is_deleted   = BooleanField(default=False)   # soft delete only
    class Meta: abstract = True
```

### RBAC tables
```
Organization       → id, name, slug, plan, module_flags (crm_enabled, etc.)
User               → id, org_id, email, full_name, role, department_id
Role               → id, org_id, name
Permission         → id, role_id, module, action (view/create/edit/delete/export/approve)
UserRole           → id, user_id, role_id
ModuleAccess       → id, role_id, module_key, is_enabled
```

### Key domain tables (abbreviated)
```
Lead               → id, org_id, company_name, status, assigned_to, converted_project_id
Project            → id, org_id, project_id, lead_id, assigned_manager, status, budget
ProjectTask        → id, project_id, title, stage, priority, assigned_to
ProductionOrder    → id, org_id, project_id, stage, batch_number, supervisor
InventoryItem      → id, org_id, sku, quantity, min_stock_level, warehouse_id
AttendanceRecord   → id, org_id, user_id, date, punch_in, punch_out, gps_in, gps_out
Leave              → id, org_id, user_id, type, from_date, to_date, status
Payroll            → id, org_id, user_id, month, year, gross, net, status
FinanceInvoice     → id, org_id, project_id, line_items (JSONB), total, status
AIConversation     → id, org_id, user_id, messages (JSONB), context_type
AIDocument         → id, org_id, source_id, content_chunks (JSONB), embedding_ids
```

### pgvector (AI document embeddings)
```sql
-- Enabled via migration:
CREATE EXTENSION IF NOT EXISTS vector;

-- ai_document_chunks table:
id             UUID PK
organization_id UUID FK
document_id    UUID FK
content        TEXT
embedding      vector(1536)   -- OpenAI text-embedding-3-small dimension
```

---

## AI Layer Architecture

```
User message (WebSocket)
         │
         ▼
FastAPI /chat endpoint
         │
         ▼
Intent classifier (LangChain)
    ├── "data question"    → SQL Agent
    │                         └── read-only PostgreSQL query (org-scoped)
    ├── "document Q&A"     → RAG Pipeline
    │                         └── pgvector similarity search → GPT-4o answer
    ├── "report request"   → Report Agent (LangGraph)
    │                         └── multi-step: query → aggregate → format
    ├── "summary"          → Summarization chain
    └── "general"          → Direct GPT-4o with context injection
         │
         ▼
Context injection
    ├── Organization context (plan, enabled modules)
    ├── User role + permissions
    └── Module context (if inside a project: inject project data)
         │
         ▼
Streaming tokens → Django Channels WebSocket → Frontend
```

### RAG Pipeline
```
Upload document (PDF/DOCX/TXT)
    → PyMuPDF / python-docx text extraction
    → Chunk (512 tokens, 50 token overlap)
    → OpenAI text-embedding-3-small → vector(1536)
    → Store in pgvector (with org_id + document_id metadata)

Query:
    → Embed query → pgvector similarity search (filtered by org_id)
    → Top 5 chunks → GPT-4o with source citation → stream response
```

### SQL Agent security
```python
BLOCKED_KEYWORDS = ["INSERT", "UPDATE", "DELETE", "DROP", "TRUNCATE", "ALTER", "CREATE"]

def validate_query(sql: str) -> None:
    upper = sql.upper()
    for keyword in BLOCKED_KEYWORDS:
        if keyword in upper:
            raise ValueError(f"SQL agent cannot execute {keyword} statements")

# Every query also has org filter injected:
# "SELECT ... FROM leads WHERE organization_id = '{org_id}' AND ..."
```

---

## Real-time Architecture (Django Channels)

```
WebSocket connection: ws://localhost:8000/ws/
Authentication: JWT token passed as query param on connect (?token=...)

Channel groups:
  org_{org_id}          → org-wide broadcasts (announcements, payroll processed)
  user_{user_id}        → personal notifications (task assigned, leave approved)
  project_{project_id}  → project-level updates (new comment, task moved)
  ai_{conversation_id}  → AI response streaming (token by token)

Consumers:
  NotificationConsumer  → handles in-app notification delivery
  AIStreamConsumer      → proxies FastAPI streaming tokens to frontend
  TaskUpdateConsumer    → real-time kanban card movements
```

---

## Celery Task Architecture

```
Queues and their purpose:
  default       → general tasks (email notifications, file processing)
  ai            → AI report generation, embedding creation (can be slow)
  payroll       → monthly payroll runs (heavy, isolated from default)
  reports       → scheduled report generation and email delivery
  notifications → push notifications, WhatsApp messages

Scheduled tasks (django-celery-beat):
  Every 5 min   → check_low_stock_alerts
  Hourly        → process_overdue_tasks
  Daily 6am     → send_daily_attendance_reminders
  Monthly 1st   → trigger_payroll_run (if auto-payroll enabled)
  Weekly Sunday → generate_weekly_reports
```

---

## Infrastructure Architecture

### Local development
```
Docker Compose services:
  postgres      pgvector/pgvector:pg15         port 5432
  redis         redis:7-alpine                 port 6379
  api           Django (runserver)             port 8000
  ai            FastAPI (uvicorn --reload)     port 8001
  web           Next.js (next dev)             port 3000
  celery        Celery worker (-Q all)
  celery-beat   Celery scheduler
```

### Production (AWS)
```
Frontend:       Vercel (Next.js) — auto-deploy from main branch
Backend API:    AWS ECS Fargate — Docker container, auto-scaling
AI Service:     AWS ECS Fargate — separate service, scales independently
Database:       AWS RDS PostgreSQL Multi-AZ — db.t3.medium (prod)
Cache/Broker:   AWS ElastiCache Redis cluster
File Storage:   AWS S3 + CloudFront CDN
Email:          AWS SES
Reverse proxy:  Nginx (for backend routing)
Monitoring:     Sentry (errors) + AWS CloudWatch (metrics)
Secrets:        AWS Secrets Manager
SSL:            AWS ACM
```

---

## Key Data Flows

### 1. Login flow
```
POST /api/v1/auth/login/  { email, password }
    → Validate credentials
    → Fetch Organization (check is_active, plan)
    → Fetch User role + permissions
    → Generate JWT (access: 60min, refresh: 7 days)
    → Return tokens + /me/modules/ response
    → Frontend: store JWT in memory, render sidebar from modules
```

### 2. Lead → Project conversion
```
User clicks "Convert to Project" on a qualified lead
    → POST /api/v1/crm/leads/{id}/convert/
    → Atomic transaction:
        1. Create Project (copy lead client data)
        2. Set lead.converted_project_id = project.id
        3. Set lead.is_converted = True
        4. Set lead.status = "converted"
        5. Create audit log entry
    → Response: { project_id, project_url }
    → Frontend: redirect to new project workspace
```

### 3. Attendance punch-in (mobile)
```
User taps "Punch In" on mobile app
    → expo-location captures GPS coordinates
    → expo-camera captures selfie (JPEG, compressed)
    → POST /api/v1/attendance/punch-in/
        { gps_lat, gps_lng, selfie_base64, device_id }
    → Backend:
        1. Validate geofence (if enabled for org)
        2. Upload selfie to S3 (attendance/{org}/{user}/{date}.jpg)
        3. Create AttendanceRecord (punch_in=now, gps_in=point)
        4. Check if late (compare to shift start time)
    → Response: { status: "punched_in", is_late: bool }
```

### 4. AI streaming chat
```
User types message in AI Studio
    → Frontend opens WebSocket to ws://backend/ws/ai/{conversation_id}/
    → Django AIStreamConsumer receives message
    → Django POSTs to FastAPI: POST http://ai-services:8001/chat/
        Headers: X-Internal-Token, X-Org-Id, X-User-Id, X-User-Role
    → FastAPI:
        1. Classify intent
        2. Inject context
        3. Call OpenAI streaming API
        4. Stream tokens back to Django via HTTP chunked response
    → Django proxies tokens → WebSocket → Frontend
    → Frontend renders tokens as they arrive (streaming effect)
    → On completion: save full conversation to AIConversation model
```

### 5. API request lifecycle
```
Any authenticated request:
    → Nginx routes to Django
    → JWTAuthentication middleware validates token
    → OrganizationQuerysetMixin enforces org filter on queryset
    → RBAC permission class checks role has required action
    → AuditLogMiddleware records POST/PUT/DELETE actions
    → DRF ViewSet processes request
    → Standard envelope response: { success, data, error }
```

---

## Security Architecture

```
Authentication:   JWT (simplejwt) — access 60min, refresh 7 days, rotation on refresh
Authorization:    Role + module + action checked on every endpoint
Isolation:        OrganizationQuerysetMixin — no cross-tenant data possible
Transport:        TLS 1.2+ enforced on all environments except local
Storage:          AWS RDS encrypted at rest, S3 AES-256
Secrets:          AWS Secrets Manager (prod), .env (local only, never committed)
Rate limiting:    DRF throttling per org plan (100/500/2000 req/min)
Audit:            Every POST/PUT/DELETE logged with user, org, old_value, new_value
CORS:             Restricted to known origins via CORS_ALLOWED_ORIGINS env var
File uploads:     Pre-signed S3 POST URLs — bucket never publicly writable
```
