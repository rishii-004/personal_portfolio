# GEMINI.md - Engineering Standards & Guidelines

This document serves as the persistent development rules and engineering guidelines for this minimalist Next.js portfolio. All development decisions must strictly adhere to these rules.

## 1. Project Philosophy
- **Minimalist:** Clean aesthetics, premium feel, avoid overdesigning.
- **Fast:** Prioritize load times, Core Web Vitals, and zero layout shifts.
- **Scalable:** Built to cleanly accommodate future content and features.
- **Maintainable:** Simple abstractions, readable code, self-documenting logic.
- **Accessible & SEO-Friendly:** Inclusive to all users and highly discoverable.
- **Subtle Animations Only:** Motion should feel premium and purposeful, never distracting.
- **Simplicity First:** Avoid unnecessary dependencies and overengineering. Prefer native solutions.

## 2. Development Rules
- **Check Existing Architecture:** Always review current patterns and files before introducing new ones.
- **Component Reusability:** Build reusable primitives over one-off implementations.
- **DRY (Don't Repeat Yourself):** Abstract duplicate logic into shared hooks or utility functions.
- **Small & Focused:** Keep components small, modular, and focused on a single responsibility.
- **Flat Structure:** Avoid deeply nested component trees.
- **Avoid Monoliths:** Break large files down into manageable pieces.
- **Composition over Complexity:** Use React composition (`children` prop) to avoid complex props.
- **Consistent Naming:** Follow established conventions (PascalCase for components, camelCase for utils).
- **Beginner-Friendly:** Write code that is easy to understand without sacrificing performance.

## 3. Folder Structure Rules
- `src/app`: Strictly for Next.js App Router pages, layouts, and route-specific components.
- `src/components/ui`: Generic, reusable primitive components (buttons, badges, inputs).
- `src/components/layout`: Structural site components (Navbar, Footer, Providers).
- `src/components/sections`: Page-specific sections (Hero, About, Projects).
- `src/hooks`: Custom React hooks.
- `src/lib/utils`: General helper functions (e.g., `cn` for Tailwind).
- `src/lib/data`: Centralized static data arrays (e.g., `projects.ts`).
- `src/types`: TypeScript interfaces and type definitions.
- `src/styles` / `globals.css`: Global CSS and Tailwind configuration.

*New files must be strictly categorized into these directories.*

## 4. Component Rules
- **Structure:** Separate logic from UI.
- **Naming:** File names must match the component name (e.g., `ProjectCard.tsx`).
- **Typing:** Strictly type all props using TypeScript interfaces. No `any`.
- **Accessibility:** Ensure proper contrast, aria-labels, and focus management.
- **Responsive:** Mobile-first design. All components must look good on all screen sizes.
- **Animations:** Keep them fast, subtle, and respect `prefers-reduced-motion`.
- **Server vs Client:** Default to **React Server Components (RSC)**. Use `"use client"` only when interactivity, state, or DOM APIs are strictly necessary.
- **Dynamic Data:** Avoid hardcoded content inside UI components. Accept data via props.

## 5. Styling Rules
- **Tailwind CSS:** Use Tailwind for all styling. Avoid inline styles (`style={{}}`).
- **Design Tokens:** Use configured Tailwind theme variables (e.g., `bg-background`, `text-foreground`). Avoid magic values (e.g., `w-[123px]`).
- **Spacing:** Stick to standard Tailwind scales to maintain spacing consistency.
- **Typography:** Maintain a clear, consistent heading hierarchy using configured sans/mono fonts.
- **Dark Mode:** Support dark mode universally using Tailwind `.dark` configuration.
- **Transitions:** Use utility classes (`transition-colors`, `duration-300`) for smooth interactive states.

## 6. Performance Rules
- **Images:** Always use `next/image` with proper `width`, `height`, and `alt` attributes. Use `priority` for above-the-fold assets.
- **JavaScript Payload:** Minimize client-side JS by keeping heavy libraries out of `"use client"` boundaries when possible.
- **Rendering:** Prefer Static Site Generation (SSG) via Server Components.
- **Lighthouse Goals:** Maintain 95+ scores across Performance, Accessibility, Best Practices, and SEO.

## 7. SEO Rules
- **Metadata:** Export `Metadata` in `layout.tsx` and `page.tsx` files.
- **Semantic HTML:** Use proper tags (`<main>`, `<section>`, `<article>`, `<nav>`).
- **Headings:** Strictly one `<h1>` per page. Follow hierarchical order (`h2`, `h3`).
- **Alt Text:** Required for all non-decorative images.
- **OpenGraph:** Include OpenGraph and Twitter card metadata for sharing.
- **Crawlers:** Ensure `sitemap.ts` and `robots.ts` exist before production launch.

## 8. Accessibility Rules
- **Keyboard Navigation:** All interactive elements must be focusable and triggerable via Enter/Space.
- **Focus States:** Clearly define `:focus-visible` styles with visible rings.
- **Reduced Motion:** Utilize Tailwind's `motion-reduce:` for users who prefer less movement.
- **Contrast:** Ensure all text passes WCAG AA contrast standards (4.5:1).

## 9. Project Showcase Architecture Rules
- **Data-Driven:** The project system must be entirely driven by structured data.
- **Schema:**
  ```typescript
  export interface Project {
    id: string;
    title: string;
    description: string;
    techStack: string[];
    liveUrl?: string;
    githubUrl?: string;
    imageUrl?: string;
    featured?: boolean;
  }
  ```
- **Dynamic Rendering:** Project cards must map over the data array. Avoid hardcoding UI for individual projects.
- **Separation of Concerns:** Project data must live in `src/lib/data/projects.ts`, completely separate from `ProjectCard.tsx` or `ProjectsSection.tsx`.
- **Future-Proofing:** Architecture must allow a drop-in replacement of the static array with a headless CMS fetch call or an MDX file parser without needing to rewrite UI components.

## 10. Git & Workflow Rules
- **Small Commits:** Keep commits atomic, focusing on one feature or fix at a time.
- **Commit Naming:** Use conventional commits (e.g., `feat: add hero section`, `fix: header padding`).
- **Branch Naming:** `feature/feature-name` or `fix/issue-description`.
- **No Direct Large Changes:** Break down massive architectural shifts into smaller changes. No direct large unreviewed commits to main.

## 11. Dependency Rules
- **Native First:** Prefer Next.js and React native APIs over installing external packages.
- **Strict Evaluation:** Before adding an npm package, evaluate its bundle size impact, maintenance status, and necessity.
- **Maintainability > Trends:** Choose stable, well-documented, native solutions over trendy but immature tooling.

## 12. Future Scalability Rules
- **Blog / MDX:** Add a `content/` folder for MDX parsing. Do not alter the existing UI structure.
- **CMS:** Swap the static data arrays to CMS fetch calls in Server Components. 
- **Analytics:** Drop analytics scripts natively into the root layout.
- **Additions:** New features (filtering, multilingual) must match the existing minimalist aesthetic, preserve simplicity, and not degrade performance.

## 13. Code Quality Checklist
Before merging or finalizing any changes, verify:
- [ ] Responsive across mobile, tablet, and desktop.
- [ ] Fully accessible (keyboard navigable, semantic HTML, proper contrast).
- [ ] Strictly typed with no `any` types.
- [ ] No residual `console.log` statements.
- [ ] No unused files, imports, or variables.
- [ ] No duplicate code; abstracted properly.
- [ ] Images optimized via `next/image`.
- [ ] Dark mode and light mode styled and verified.
- [ ] Tested successfully on mobile viewports.

## 14. Documentation Rules
- **Phase Documentation**: For every architectural phase or significant workflow completion, a dedicated documentation markdown file must be created/updated in the `docs/` directory (e.g., `docs/phase_X_description.md`).
- **Traceability**: The documentation must clearly detail:
  - Phase objectives.
  - Implementations & design patterns used.
  - Complete list of created, modified, or deleted files.
- **Maintainability**: Ensure documentation paths and configurations reflect the current architecture standards of `GEMINI.md`.
