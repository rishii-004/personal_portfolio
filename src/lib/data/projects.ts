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
  },
  {
    id: '3',
    slug: 'finance-icons',
    title: 'Finance Icons Plugin',
    description: 'Figma plugin providing 136 beautiful, hand-crafted fintech & payment-centric SVG icons ready to be drop-in integrated.',
    techStack: ['Figma API', 'React', 'TypeScript', 'Tailwind CSS'],
    liveUrl: '#',
    githubUrl: '#',
    imageUrl: '/projects/icons.png',
    featured: false,
    category: 'additional',
    year: '2025'
  },
  {
    id: '4',
    slug: 'ai-playground',
    title: 'AI Workflow Playground',
    description: 'Internal generative playground building tools to speed up designer-to-developer token generation and code extraction.',
    techStack: ['Next.js', 'Tailwind v4', 'OpenAI API', 'Framer Motion'],
    liveUrl: '#',
    githubUrl: '#',
    imageUrl: '/projects/playground.png',
    featured: false,
    category: 'additional',
    year: '2024',
    association: 'Personal'
  },
  {
    id: '5',
    slug: 'checkout-os',
    title: 'Checkout OS Demo',
    description: 'A high-performance sandboxed simulation of cashflow checkout architectures with micro-animations supporting card tokenization flows.',
    techStack: ['Next.js', 'React', 'Framer Motion', 'Tailwind CSS'],
    liveUrl: '#',
    githubUrl: '#',
    imageUrl: '/projects/checkout.png',
    featured: false,
    category: 'additional',
    year: '2024'
  }
]
