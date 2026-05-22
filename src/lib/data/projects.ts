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
    slug: 'scalable-payment-gateway',
    title: 'Scalable Payment Gateway',
    description: 'A robust microservices-based architecture built to handle concurrent transactions with 99.99% uptime, leveraging Redis for distributed caching and PostgreSQL for ACID compliant ledgering.',
    techStack: ['Node.js', 'Go', 'Redis', 'PostgreSQL', 'Docker', 'Kubernetes'],
    liveUrl: '#',
    githubUrl: '#',
    category: 'serious',
    year: '2024'
  },
  {
    id: '4',
    slug: 'ai-document-analyzer',
    title: 'AI Document Analyzer Pipeline',
    description: 'A machine learning pipeline utilizing PyTorch and NLP models to extract structured insights and sentiment from unstructured financial PDFs automatically.',
    techStack: ['Python', 'PyTorch', 'AWS', 'Terraform', 'Pandas'],
    liveUrl: '#',
    githubUrl: '#',
    category: 'serious',
    year: '2025'
  },
  {
    id: '5',
    slug: 'checkout-os-simulation',
    title: 'Checkout OS Simulation',
    description: 'An interactive simulator testing high-throughput payment checkouts, mocking card validation and 3DS authorization steps.',
    techStack: ['Next.js', 'Framer Motion', 'Tailwind CSS'],
    liveUrl: '#',
    githubUrl: '#',
    category: 'learning',
    year: '2025',
    association: 'Functional'
  },
  {
    id: '6',
    slug: 'ai-figma-token-pipeline',
    title: 'AI Figma Token Pipeline',
    description: 'Generates tailwind-compatible theme CSS styles directly from visual design layer properties with code extraction.',
    techStack: ['Figma API', 'OpenAI API', 'NodeJS'],
    liveUrl: '#',
    githubUrl: '#',
    category: 'learning',
    year: '2024',
    association: 'Concept'
  },
  {
    id: '7',
    slug: 'fluid-money-visualizer',
    title: 'Fluid Money Visualizer',
    description: 'A responsive visualizer mapping localized transaction volumes and latency across network nodes.',
    techStack: ['React', 'D3.js', 'Canvas API'],
    liveUrl: '#',
    githubUrl: '#',
    category: 'learning',
    year: '2024',
    association: 'Functional'
  }
]
