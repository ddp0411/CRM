# IndusFlow AI Product And Tech Plan

## Product Understanding

IndusFlow AI is a multi-tenant industrial operating system for manufacturing, fabrication, engineering, contracting, and operations-led businesses. The core platform combines CRM, project execution, production operations, warehouse and inventory, HRMS, finance, reporting, and an AI assistant layer.

The app is organization-based, role-aware, module-driven, and designed for dense daily operational work. The first screen after login is the application shell, not a marketing page.

## Recommended Stack

Web app:
- Next.js App Router, React, TypeScript
- Tailwind CSS and local shadcn-style primitives
- Recharts for operational dashboards
- Future auth-aware SSR with Supabase helpers

Mobile app:
- Expo React Native for Android and iOS
- EAS Build and EAS Submit for release pipelines
- Shared API contracts, design tokens, and selected UI primitives from the monorepo

Backend:
- Phase 1 API: Supabase Postgres, Auth, Storage, Row Level Security, Edge Functions where useful
- Phase 2 service layer: NestJS or Django REST Framework if domain logic outgrows Supabase functions
- Workers: Redis plus queue workers for reports, notifications, AI jobs, imports, and exports

Database:
- PostgreSQL as the system of record
- Supabase managed Postgres for early speed
- Strict tenant isolation using `organization_id`, RLS policies, and service-role-only admin operations
- Database migrations, seed data, branching, and staged environments

AI layer:
- OpenAI APIs for assistant, summarization, report generation, document Q&A, and structured extraction
- RAG over project files, invoices, quotes, and operational documents
- Per-tenant AI credit tracking and audit logs

Infrastructure:
- AWS production deployment
- Route 53, ACM, CloudFront, WAF, S3, ECS Fargate, ALB, Secrets Manager, CloudWatch
- Supabase for managed Postgres/Auth/Storage unless an enterprise customer requires dedicated AWS RDS
- Terraform or AWS CDK for infrastructure as code
- GitHub Actions for CI/CD

Payments:
- Stripe or Razorpay depending on target billing geography
- Subscription plans, invoices, renewals, usage metering, AI credit packs

## Route Map

```text
/login
/home
/dashboard
/leads
/projects
/projects/[id]
/production
/tasks
/warehouse
/attendance
/finance
/reports
/ai-studio
/settings
```

## MVP Sequence

Phase 0 - Foundation:
- Monorepo, branching, formatting, docs, app shell, route map
- Static web UI using production-shaped mock data

Phase 1 - Core SaaS:
- Supabase project, migrations, RLS, auth, organizations, roles, module toggles
- Leads, projects, tasks, users, departments
- File storage and activity logs

Phase 2 - Operations:
- Production items, BOM, QC, warehouse, stock movement, vendors, purchase requests
- Attendance, leave, payroll foundation
- Finance overview, invoices, expenses, payments

Phase 3 - AI:
- AI Studio, prompt library, project assistant, document Q&A
- Report generation, SQL builder with guarded access, predictive alerts
- AI usage metering and credits

Phase 4 - Mobile:
- Expo app with login, home, attendance punch, tasks, approvals, notifications
- Native location/photo capture with privacy controls
- EAS build, internal testing, app store release

Phase 5 - Enterprise Hardening:
- SSO, audit exports, fine-grained permissions, SLA observability
- Disaster recovery, tenant-level backups, SOC2-ready controls
- Marketplace integrations and workflow automation

## Data Model Backbone

Every business table includes:

```text
id
organization_id
created_by
created_at
updated_at
deleted_at
```

Initial core tables:
- organizations
- organization_modules
- users
- roles
- permissions
- role_permissions
- departments
- leads
- lead_activities
- projects
- project_members
- project_files
- project_tasks
- production_items
- inventory_items
- stock_movements
- attendance_logs
- leave_requests
- invoices
- expenses
- payments
- reports
- ai_conversations
- ai_usage_events
- audit_logs

## Branching Strategy

Use trunk-based development with protected `main` and short-lived branches:

```text
main
feature/<scope>
fix/<scope>
chore/<scope>
release/<version>
hotfix/<scope>
```

Rules:
- `main` is protected and deployable.
- Every branch merges through pull request review.
- CI must pass before merge.
- Feature branches stay small and focused.
- Releases are tagged with semantic versions.
- Database migrations are reviewed with rollback notes.

## Environments

```text
local
development
staging
production
```

Environment practices:
- Separate Supabase projects or branches for dev/staging/prod.
- No shared production secrets in local files.
- Seed data for local and staging only.
- Production deploys require CI, build, migration review, and release notes.

## Security And Compliance Baseline

- Tenant isolation enforced in database policies, not only application code.
- Least-privilege service keys.
- MFA for administrators.
- Audit logs for auth, settings, finance, payroll, AI, imports, exports.
- Signed URLs for private files.
- Rate limiting for auth, AI, imports, and exports.
- Backups, restore drills, and incident runbooks.

## First Web Milestone Acceptance

- App shell matches the PDF mood board: dark sidebar, blue active state, dense white work area.
- Routes exist for all major modules.
- Home, dashboard, leads, projects, project detail, tasks, and AI Studio have credible production-shaped layouts.
- Other modules have complete first-pass pages with tables, metrics, filters, and actions.
- Web app builds successfully.
- Local dev server runs for visual review.
