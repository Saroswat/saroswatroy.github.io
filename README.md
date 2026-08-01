# Saroswat Roy: AI Engineering Portfolio

A dark-first, accessible portfolio for an AI Engineer and Data Scientist working across agentic systems, NLP, explainable AI, responsible deployment and real-world IT operations.

**Live portfolio:** [saroswat-roy-portfolio.saroswat.chatgpt.site](https://saroswat-roy-portfolio.saroswat.chatgpt.site)

## Product scope

- Editorial home page and professional narrative
- Searchable, filterable project archive
- Typed evidence-based project case studies
- Experience, education, skills and certification routes
- Downloadable, print-ready resume PDF
- Accessible contact flow with a direct email fallback
- Dark/light themes with saved preference
- Open Graph, JSON-LD, sitemap and robots metadata
- Security headers, reduced-motion support and responsive layouts

## Technology

Next.js 16, React 19, TypeScript, Tailwind CSS 4, Vinext and Cloudflare Worker-compatible output.

## Local development

```powershell
npm ci
npm run dev
```

## Validation

```powershell
npm run lint
npm run typecheck
npm test
npm run build
```

## Environment

Copy `.env.example` to `.env.local` when needed.

- `NEXT_PUBLIC_SITE_URL`: canonical production origin, without a trailing slash.
- `NEXT_PUBLIC_CONTACT_EMAIL`: optional public contact-address override.

No private API key is required. The contact form composes a message in the visitor's email client and the site uses no analytics or advertising trackers.

## Project information

Project summaries and measurements are drawn from the linked source repositories and saved experiment outputs. Public links are included where they are available.

## Rights

All rights reserved. See `LICENSE`.
