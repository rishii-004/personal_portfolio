# Phase 4 Documentation — Subpage Routes & Interactive Widgets

## Objective
Establish the multi-route page system, introducing a customized scroll-driven "Text Unblur" on `/about`, developer sandboxes on `/playground`, notes index on `/writing`, and the ultra-premium signature/geo-lookup Postcard generator widget on `/hello`.

## Actions & Implementations

1. **Scroll-Driven "Text Unblur" (`/about`)**:
   - Programmed paragraphs to start in a blurred state (`filter: blur(6px)`, low opacity) and smoothly ease into crystal clear legibility (`filter: blur(0px)`, full opacity) as the user scrolls them into the center viewport using lightweight, viewport-tracked Framer Motion parameters.

2. **Playground Sandbox & Writing Index (`/playground` & `/writing`)**:
   - Engineered `/playground` to showcase smaller code prototypes and visual dashboard experiments, styled in asymmetric cards with sandbox launch capabilities.
   - Built a clean, typographical feed inside `/writing` indexing notes, philosophical essays, publish dates, and categories.

3. **Premium Postcard Generator Widget (`/hello`)**:
   - **IP Geolocation**: Built a dynamic geolocation look-up calling a public IP API (`ipapi.co`) to greet visitors with their current city/country (e.g. `"Welcome from Noida, IN"`), falling back cleanly to custom city tags if offline.
   - **Vibe Intent pills**: Users can click option tags (*Hiring*, *Curiosity*, *Referred*, *Just Vibing*) to morph the postcard's handwritten cursive greeting text with dynamic transition eases.
   - **Interactive Signature Input**: Typing a name live-updates a signature signed in cursive script font at the bottom of the stamp card.
   - **Interactive Digital Stamp**: Users can submit or click the Stamp button to stamp and visual overlay the postcard card with a spring-loaded `SENT` success stamp.

## Files Created/Modified
- `src/app/about/page.tsx` — Built the unblur text scrolling About page.
- `src/app/playground/page.tsx` — Built the asymmetric sandboxes grid.
- `src/app/writing/page.tsx` — Built the notes feed index.
- `src/app/hello/page.tsx` — Engineered the premium, customizable postcard greeting widget.
