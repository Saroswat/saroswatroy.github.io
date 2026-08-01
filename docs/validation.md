# Validation record

Validated locally on 1 August 2026 before publication.

## Automated checks

- `npm run lint`: passed
- `npm run typecheck`: passed
- `npm test`: 4 tests passed
- `npm run build`: passed
- `npm audit --omit=dev`: 0 known vulnerabilities
- Route and asset sweep: 22 of 22 URLs returned HTTP 200

## Lighthouse (desktop)

| Category | Score |
| --- | ---: |
| Performance | 100 |
| Accessibility | 100 |
| Best Practices | 96 |
| SEO | 100 |

Key metrics: 0.5 s FCP, 0.6 s LCP, 0 CLS and 40 ms TBT.

## Browser and responsive QA

The homepage, projects, contact and resume journeys were inspected in the in-app browser. Automated structural checks covered landmarks, labels, image alternatives, duplicate IDs, button and link names, heading order, language metadata and skip-link behaviour.

Responsive behaviour was verified without horizontal overflow at 320 x 568, 390 x 844, 768 x 1024, 1366 x 768 and 1920 x 1080. The mobile navigation, theme switcher, project search and contact-form validation were exercised interactively.

The generated two-page resume PDF was rendered to images and visually reviewed for clipping, overflow and layout defects.
