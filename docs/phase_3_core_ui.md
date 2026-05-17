# Phase 3 Documentation — Core UI & Dynamic Showcase

## Objective
Build the landing page core content blocks, featuring a bold Hero intro, a data-driven Project showcase (handling overlay modals for Case Studies and asymmetric grids for minor projects), and an interactive career Experience timeline.

## Actions & Implementations

1. **Centralized Data Abstraction**:
   - Structured exact TypeScript interfaces (`Project`, `Experience`) inside `src/types/index.ts`.
   - Created centralized static data files (`projects.ts`, `experience.ts`) in `src/lib/data/` to keep page data completely isolated from visual templates, supporting future headless CMS / MDX drop-in transitions.

2. **Hero & Prototyping Headline**:
   - Built a sleek `Hero.tsx` introductory heading with premium spring fade reveals.
   - Used custom Tailwind amber badges (`bg-orange-500/10 text-orange-600`) to highlight primary developer skills and actions.

3. **Double-Categorized Project System**:
   - **Case Studies (Featured Projects)**: Built a spring-animated card overlay modal. Clicking opens a premium detailed overlay Dialog, locked scroll bars, and action links.
   - **Additional Work**: Renders smaller projects dynamically in an **asymmetric CSS Grid** with direct GitHub/Live link icons.
   - Created reusable primitive `ProjectCard.tsx` and detail modal wrappers.

4. **Chronological Experience Timeline**:
   - Implemented a dotted vertical timeline layout (`Experience.tsx`) representing carrier milestones.
   - Supports role tags, durational clock counts, geo-tags, bullet detail arrays, and list highlight tags.

## Files Created/Modified
- `src/types/index.ts` — Defined data schemas.
- `src/lib/data/projects.ts` — Built projects database.
- `src/lib/data/experience.ts` — Built career history data.
- `src/components/ui/ProjectCard.tsx` — Created reusable Card and Details modal.
- `src/components/sections/Hero.tsx` — Setup landing page introduction section.
- `src/components/sections/Projects.tsx` — Setup dynamically mapped Projects list.
- `src/components/sections/Experience.tsx` — Setup dotted career timeline list.
- `src/app/page.tsx` — Unified landing layout composition page.
