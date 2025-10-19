# Portfolio Website with Light Java Backend

## Overview
This project is a **full-stack portfolio website** built with a **Next.js (App Router)** frontend and a **Java 21 / Spring Boot** backend.  
It demonstrates real-world deployment skills with attention to **i18n (EN/DE)**, **dark/light theming**, **accessibility**, and **SEO** — all running on free-tier hosting.

---

## Vision & Outcomes
**Goal:** Build and deploy a credible, low-cost public portfolio that proves full-stack competence and deployment readiness.

**Key outcomes:**
- Frontend and backend both deployed publicly (e.g., Vercel + Render).
- Frontend fetches real data from backend endpoints over HTTPS.
- Implements i18n, theming, SEO, accessibility, and basic observability.

**Non-goals for v1:**
- No CMS — all content is managed as Markdown or MDX.
- No authentication or user accounts (may be added later).

---

## High-level Architecture
- **Frontend (Next.js + TypeScript + Tailwind)**  
  Uses the App Router with static and dynamic routes, client-side fetching for projects and contact data, i18n routing (EN/DE), and a light/dark theme toggle.  
  Hosted on **Vercel (Hobby plan)**.

- **Backend (Spring Boot + Java 21)**  
  Exposes minimal REST endpoints such as `/api/health`, `/api/projects`, `/api/projects/{slug}`, and `/api/contact`.  
  Data starts as in-memory storage and can later move to PostgreSQL.  
  Hosted on **Render (Free plan)**.

**Data flow:**
1. Frontend loads static shell and localized content.
2. Fetches projects list from backend (`/api/projects`).
3. Handles contact form submissions via backend POST endpoint.

---

## Core Features
- **Multi-language support:** English and German with localized routing.
- **Theme toggle:** Dark/light mode that respects system preferences and persists.
- **Dynamic content:** Projects data and contact form powered by backend APIs.
- **Accessibility:** Keyboard navigation, focus management, and color contrast compliance.
- **SEO:** Metadata API, sitemap, Open Graph tags.
- **Deployment-ready:** Runs entirely on free-tier services.

---

## API Summary
| Endpoint | Method | Description |
|-----------|--------|-------------|
| `/api/health` | GET | Returns app status and uptime info. |
| `/api/version` | GET | Returns build version and commit data. |
| `/api/projects` | GET | Lists available projects. |
| `/api/projects/{slug}` | GET | Returns detailed information about one project. |
| `/api/contact` | POST | Validates and processes contact messages. |

---

## Future Improvements
- Add PostgreSQL database and Flyway migrations.
- Enable contact message persistence or email forwarding.
- Extend with a blog or RSS feed powered by Markdown files.
- Add lightweight analytics (Plausible or Vercel Web Analytics).

---

## Definition of Done (v1)
- Frontend and backend deployed publicly.
- Lighthouse score ≥ 95 (Performance, SEO, Best Practices, Accessibility).
- i18n and theme toggle functioning.
- Contact form functional with validation.
- README clearly explains project scope and purpose.

---

## Author
**Ashley Fletcher**  
📍 Based in Germany | 💻 42 Heilbronn Student  
GitHub: [ashleyfletcher76](https://github.com/ashleyfletcher76)
