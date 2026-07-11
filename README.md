# Industrial AI

Industrial AI is an AI-native industrial SaaS platform for CRM, project execution, production operations, warehouse, HRMS, finance, reporting, and AI-assisted workflows.

## Current Milestone

- Monorepo initialized on `feature/web-app-shell`.
- Web app first, using Next.js App Router with mock operational data.
- Mobile app, backend, database, and production infrastructure are planned but intentionally sequenced after web UX validation.

## Workspace

```text
apps/
  web/       Next.js web application
  mobile/    Future Expo React Native app
packages/
  ui/        Future shared design system package
  config/    Future shared tooling/config package
docs/
  product-and-tech-plan.md
```

## Commands

```bash
npm install
npm run dev:web
npm run build:web
npm run typecheck
```

## Branching

Development starts from short-lived feature branches. This milestone uses:

```text
feature/web-app-shell
```

See [docs/product-and-tech-plan.md](docs/product-and-tech-plan.md) for the end-to-end SaaS plan.
