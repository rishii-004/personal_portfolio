# Phase 2 Documentation — Foundation & Base Layouts

## Objective
Establish the site's layout container structure, integrating a unified, glassmorphic floating Navbar, Theme Toggle switcher, global Footer, and a robust Light/Dark mode context provider.

## Actions & Implementations

1. **Light/Dark Mode Theme Provider**:
   - Created `ThemeProvider.tsx` wrapping `next-themes` with hydration suppression, enabling seamless theme switching.
   - Designed a spring-animated custom `ThemeToggle` using Framer Motion to morph between Sun and Moon symbols gracefully.

2. **Unified Navigation Capsule (`Navbar`)**:
   - Designed a responsive, glassmorphic capsule that floats on the **middle-left edge** (`fixed left-6 top-1/2 -translate-y-1/2`) on desktops to replicate Dinesh's signature dock.
   - Built a sleek bottom horizontal capsule (`fixed bottom-6 left-1/2 -translate-x-1/2`) for mobile and tablet views to keep key content viewport real estate clear.
   - Integrated dynamic active item styling indicators using Framer Motion (`layoutId="activeIndicator"`) for smooth indicator slides between page links.

3. **Global Layout Wrapper & Footer**:
   - Refined `src/app/layout.tsx` to wrap all pages in the `Navbar` dock, global content container, and a custom `Footer`.
   - The `Footer` dynamically displays the current year, social links (LinkedIn, GitHub), and custom developer/attribution info.

## Files Created/Modified
- `src/components/layout/ThemeProvider.tsx` — Wrapped light/dark mode provider context.
- `src/components/layout/ThemeToggle.tsx` — Built spring theme-switch buttons.
- `src/components/layout/Navbar.tsx` — Engineered responsive vertical/horizontal floating capsule navigation.
- `src/components/layout/Footer.tsx` — Created a semantic, modern footer.
- `src/app/layout.tsx` — Linked layout wrappers around child page content.
