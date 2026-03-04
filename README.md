# YourLocalPaints

**SEO-first, high-converting painting services platform** built with Next.js 16 App Router, GSAP scroll animations, and a fully automated location-based routing system.

![Overall Demo](public/gifs/overall.webp)

🌐 **Live:** [paints.yourlocalservice.co](https://paints.yourlocalservice.co)

---

## Tech Stack

![Next.js](https://img.shields.io/badge/Next.js_16-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![GSAP](https://img.shields.io/badge/GSAP-88CE02?style=for-the-badge&logo=greensock&logoColor=black)
![Spring Boot](https://img.shields.io/badge/Spring_Boot-6DB33F?style=for-the-badge&logo=springboot&logoColor=white)
![AWS S3](https://img.shields.io/badge/AWS_S3-FF9900?style=for-the-badge&logo=amazons3&logoColor=white)

---

## Features

### Scroll Animations + Canvas Frame Sequence
GSAP ScrollTrigger drives a 120-frame WebP sequence rendered on `<canvas>` — a paint roller animation that plays as the user scrolls through the hero section.

![Scroll Animations](public/gifs/scroll-animations-demonstration.webp)

---

### Data-Driven Location Routing
13 cities across US + Canada (FL, TX, CA, ON, BC) — zero manual pages. Each city gets a unique route (`/{country}/{region}/{city}`), unique SEO metadata, city-injected copy, and JSON-LD structured data. Adding a new city requires editing a single file.

![Dynamic Routes + SEO Metadata](public/gifs/dynamic-route-demo-plus-showcasing-how-meta-changes-in-dev-panel.webp)

---

### Quote Form with S3 Upload
Multi-select service buttons, real-time validation, and direct-to-S3 image upload via presigned URLs. Images show as live previews before submission.

![Quote Form Demo](public/gifs/quote-submission-demo.webp)

---

## Architecture

### Server / Client Boundary
Every route page and marketing section (Hero, Services, FAQ, Gallery, etc.) is a **React Server Component** by default. `"use client"` is used only where needed:

- `QuoteForm.client.tsx` — form state, validation, S3 upload
- `*Animations.tsx` wrappers — GSAP never runs on the server
- `BeforeAfterCard.tsx` — custom `clipPath` drag slider (mouse + touch)

### SEO Infrastructure (`src/lib/seo/`)
Every indexable page gets:
- `generateMetadata()` with unique title + description per city
- Canonical URL
- OpenGraph + Twitter card tags
- JSON-LD schemas: `LocalBusiness`, `Service`, `FAQPage`, `BreadcrumbList`
- Auto-generated `sitemap.xml` and `robots.txt`

### Data Layer (`src/data/`)
| File | Purpose |
|------|---------|
| `locations.ts` | Single source of truth for all cities — drives routes, sitemap, and static generation |
| `site.ts` | Business config: name, phone, services, social links |
| `content.ts` | Copy templates with `{city}` / `{region}` placeholders |

```ts
// Adding a new city: one entry in locations.ts
{ country: 'us', region: 'ca', city: 'san-diego', cityName: 'San Diego' }
// → generates /us/ca/san-diego with full SEO + content automatically
```

---

## Related Repos

| Repo | Description |
|------|-------------|
| [yourlocalservice-spingboot-backend](https://github.com/NikitaaOvramenko/yourlocalservice-spingboot-backend) | Spring Boot backend — form submissions, email, S3 presigned URLs |
| [TCS-Junk-Removal](https://github.com/NikitaaOvramenko/TCS-Junk-Removal) | Sister project — same YourLocal(Service) pattern, junk removal vertical |

---

## Local Development

```bash
npm i
npm run dev
```

`.env`:
```
NEXT_PUBLIC_API_URL=http://localhost:8080
```
