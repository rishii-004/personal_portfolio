import { Experience } from '@/types'

export const experiences: Experience[] = [
  {
    id: '1',
    role: 'Lead Product Engineer & Designer',
    company: 'Cashfree Payments',
    location: 'Noida, IN',
    duration: '2022 — Present',
    description: [
      'Led the frontend design and engineering of payment gateway interfaces processing over 50M+ transactions monthly.',
      'Designed and engineered Checkout OS components, reducing developer integration friction by 35%.',
      'Architected standard reusable UI patterns, aligning product pods on top of a shared Figma-to-code design system.',
      'Mentored and grew a talented multi-disciplinary team of 8 product designers and frontend developers.'
    ],
    techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion']
  },
  {
    id: '2',
    role: 'Senior Product Designer',
    company: 'Fintech Hub',
    location: 'Bangalore, IN',
    duration: '2020 — 2022',
    description: [
      'Designed SaaS dashboard modules for institutional cash flow forecasting and payment tracking.',
      'Developed pixel-perfect interactive dashboard wireframes and rapidly deployed React-based high-fidelity prototypes.',
      'Built a customized SVG icons repository that achieved 10k+ active installations.'
    ],
    techStack: ['Figma API', 'React', 'Tailwind CSS', 'Framer Motion']
  },
  {
    id: '3',
    role: 'Visual Communication Lead',
    company: 'Advertising Agency X',
    location: 'Mumbai, IN',
    duration: '2016 — 2020',
    description: [
      'Built design stories and interactive visual models for major enterprise fintech campaigns.',
      'Refined the muscle of selling ideas to rooms full of skeptics, directly shaping how I design software solutions today.',
      'Explored photography, composition, and visual rhythm, feeding into clean software interfaces.'
    ]
  }
]
