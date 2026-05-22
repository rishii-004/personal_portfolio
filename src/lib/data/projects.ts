import { Project } from '@/types'

export const projects: Project[] = [
  {
    id: '1',
    slug: 'movement-of-money',
    title: 'Movement of Money',
    description: 'A comprehensive interactive data visualization dashboard mapping SaaS and payment gateway transaction flows globally, analyzing load distributions and transaction times.',
    techStack: ['Next.js', 'TypeScript', 'D3.js', 'Framer Motion', 'Tailwind CSS'],
    liveUrl: '#',
    githubUrl: '#',
    imageUrl: '/projects/money-movement.png',
    featured: true,
    category: 'case-study',
    year: '2025',
    association: 'Cashfree Payments'
  },
  {
    id: '2',
    slug: 'reflect-analytics',
    title: 'Reflect 2025',
    description: 'A gorgeous developer-focused analytics dashboard tracking performance bottlenecks and layout shifts in real-time with ultra-premium glassmorphism UI.',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Recharts', 'Node.js'],
    liveUrl: '#',
    githubUrl: '#',
    imageUrl: '/projects/reflect.png',
    featured: true,
    category: 'case-study',
    year: '2025'
}
]
