# Guide: Managing & Adding Projects

Because this portfolio utilizes a **Data-Driven Architecture**, the UI logic is completely decoupled from the content data. You do not need to modify any React components (`ProjectCard.tsx` or `Projects.tsx`) to add, edit, or remove projects.

Below are the steps for managing your content, from the simplest immediate method to future scalable upgrades.

## 1. The Native Way: Updating the Data Array (Current Method)

All of your project data lives in a single, centralized file: **`src/lib/data/projects.ts`**.

To add a new Case Study or Additional Work, open the file and append a new object to the `projects` array. 

### Example of adding a new Case Study:
```typescript
import { Project } from '@/types'

export const projects: Project[] = [
  // ... existing projects ...

  // ADD YOUR NEW PROJECT HERE:
  {
    id: 'unique-id-here', // Must be unique
    slug: 'new-project-slug',
    title: 'Your New Case Study',
    description: 'A detailed description of the problem you solved, the architecture you designed, and the impact it had.',
    techStack: ['Next.js', 'React', 'Tailwind CSS', 'Framer Motion'],
    liveUrl: 'https://your-live-link.com',       // Optional: Adds a "Visit Website" button
    githubUrl: 'https://github.com/your-repo',   // Optional: Adds a "Repository" button
    imageUrl: '/projects/new-image.png',         // Optional: For future image integration
    featured: true,                              // Optional
    category: 'case-study',                      // CRITICAL: 'case-study' renders it as a large modal card. 'additional' renders it in the bottom grid.
    year: '2026',
    association: 'Company or Personal'           // Optional: Shows up as a small badge
  }
]
```

Once saved, the Next.js application will automatically parse this new entry. If the `category` is set to `'case-study'`, it will render as a large, featured postcard with the spring-animated overlay modal. If set to `'additional'`, it will automatically append to the asymmetrical grid at the bottom.

---

## 2. Future Upgrades (Scaling the Architecture)

If your portfolio grows and you need more robust ways to manage content, the architecture is designed to support these drop-in replacements seamlessly:

### Upgrading to MDX (Markdown)
If you wish to write extensive, multi-page case studies with inline images and code blocks:
1. Create a `content/projects/` directory.
2. Author your projects as `.mdx` files with frontmatter (title, category, techStack).
3. Utilize libraries like `next-mdx-remote` or `contentlayer` inside Server Components to read these local files and pass the structured frontmatter directly into the existing `<ProjectCard />` components.

### Upgrading to a Headless CMS
If you prefer managing content via an external dashboard (like Sanity.io, Supabase, or Contentful) without touching code:
1. Define the identical `Project` schema within your chosen CMS.
2. Inside `src/app/page.tsx` (or `src/components/sections/Projects.tsx`), swap the static import (`import { projects } from '@/lib/data/projects'`) with a server-side `fetch()` call connecting to your CMS endpoint.
3. The UI components will render the remote data identically, requiring zero visual rewrites.
