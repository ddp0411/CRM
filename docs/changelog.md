# Changelog

All notable changes to IndusFlow AI will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/)
and this project adheres to [Semantic Versioning](https://semver.org/).

> **Update this file** after every merged PR that ships a user-facing change,
> every completed phase milestone, and every hotfix to production.
> Use the `/update-docs-and-commit` slash command when committing with Claude Code.

---

## [Unreleased]

### In Progress
- Phase 0: Foundation setup (monorepo, Docker, CI/CD, JWT auth shell)

---

## [0.1.0] — Phase 0: Foundation

> Target: Weeks 1–3 | Status: 🚀 In Progress

### Added
- Monorepo scaffold with Turborepo, npm workspaces
- Root `package.json`, `turbo.json`, `tsconfig.base.json`
- Commitlint + Husky for conventional commit enforcement
- `.env.example` with all required environment variables documented
- `docker-compose.yml` — api, web, ai, postgres (pgvector), redis, celery, celery-beat
- `Makefile` with 23 commands (dev, test, lint, migrate, shell, psql, etc.)
- GitHub Actions CI skeleton (lint + test on every PR)
- `CLAUDE.md` — project context, design system, constraints, repo etiquette
- `docs/PRD.md` — v1.1 Product Requirements Document (31 sections, 1,639 lines)
- `docs/TRD.md` — Technical Requirements Document
- `docs/architecture.md` — System design and data flow
- `docs/changelog.md` — This file
- `docs/project_status.md` — Current phase tracking
- Shared packages scaffolded: `@indusflow/types`, `@indusflow/api-client`,
  `@indusflow/ui`, `@indusflow/auth`, `@indusflow/config`,
  `@indusflow/constants`, `@indusflow/permissions`, `@indusflow/validations`

### Infrastructure
- `apps/web/` — Next.js 14 App Router project initialized
- `apps/mobile/` — Expo SDK 51 project initialized
- `apps/backend/` — Django 4.2 project with all 24 module folders created
- `apps/ai-services/` — FastAPI project initialized
- `apps/admin-portal/` — Django admin with Unfold initialized
- Branch protection rules on `main` (2 approvals) and `develop` (1 approval)
- Staging environment on AWS (auto-deploy from `develop`)

---

<!--
TEMPLATE FOR FUTURE ENTRIES — copy this block when adding a new entry:

## [X.Y.Z] — Phase N: Name

> Target: Weeks X–Y | Released: YYYY-MM-DD

### Added
- New features or capabilities

### Changed
- Changes to existing functionality

### Fixed
- Bug fixes (reference issue/PR number where possible)

### Removed
- Features or APIs removed

### Security
- Security patches or hardening (always document these)

### Infrastructure
- Deployment, CI/CD, config, dependency changes
-->

---

## [0.2.0] — Phase 1: Core Platform

> Target: Weeks 4–9 | Status: ⏳ Planned

### Planned
- Organization CRUD + module toggle system (`crm_enabled`, `projects_enabled`, etc.)
- Full RBAC: Role, Permission, UserRole, ModuleAccess models
- `/api/v1/me/modules/` endpoint — drives all sidebar visibility
- Dynamic sidebar (role + org module based)
- Department management
- Home page with all widgets (punch card, tasks, quick actions, announcements, leave balance)
- Notification system (in-app + email via Celery)
- Audit log middleware (all POST/PUT/DELETE logged)
- Settings module APIs (organization settings, users, roles)

---

## [0.3.0] — Phase 2: Dashboards

> Target: Weeks 10–12 | Status: ⏳ Planned

### Planned
- Role-based dashboard APIs (Admin, Sales, HR, Finance, Operations)
- KPI aggregation endpoints
- All 5 role-based dashboards on frontend with real data

---

## [0.4.0] — Phase 3: CRM / Leads

> Target: Weeks 13–18 | Status: ⏳ Planned

### Planned
- Full leads module (CRUD, lifecycle state machine, notes, attachments)
- Follow-up scheduler with Celery reminder emails
- Lead → Project atomic conversion
- Lead Kanban view
- S3 attachment upload

---

## [1.0.0] — Phase 4: Projects (MVP)

> Target: Weeks 19–27 | Status: ⏳ Planned

### Planned
- Full project workspace with 13 sub-modules
- Kanban with dnd-kit drag-and-drop
- GST invoice generation + PDF export
- Purchase Request multi-step approval workflow
- TipTap rich text notes
- Project financials (budget vs actual)
- Project AI Studio tab (project-scoped assistant)

---

## [1.1.0] — Phase 5: Production / Operations

> Target: Weeks 28–33 | Status: ⏳ Planned

---

## [1.2.0] — Phase 6: HRMS

> Target: Weeks 34–40 | Status: ⏳ Planned

---

## [1.3.0] — Phase 7: Warehouse / Inventory

> Target: Weeks 41–46 | Status: ⏳ Planned

---

## [1.4.0] — Phase 8: Procurement

> Target: Weeks 47–49 | Status: ⏳ Planned

---

## [1.5.0] — Phase 9: Finance

> Target: Weeks 50–54 | Status: ⏳ Planned

---

## [1.6.0] — Phase 10: Reports & Analytics

> Target: Weeks 55–58 | Status: ⏳ Planned

---

## [1.7.0] — Phase 11: AI Studio

> Target: Weeks 59–65 | Status: ⏳ Planned

---

## [2.0.0] — Phase 12: SaaS Billing + Launch

> Target: Weeks 66–72 | Status: ⏳ Planned
