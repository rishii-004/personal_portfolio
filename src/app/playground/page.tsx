'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, Play, Sparkles, Code, Cpu } from 'lucide-react'
import Link from 'next/link'

interface Experiment {
  id: string
  title: string
  description: string
  date: string
  tech: string[]
  icon: typeof Sparkles
  status: 'functional' | 'concept' | 'archived'
}

const experiments: Experiment[] = [
  {
    id: 'exp-1',
    title: 'Checkout OS Simulation',
    description: 'An interactive simulator testing high-throughput payment checkouts, mocking card validation and 3DS authorization steps.',
    date: 'Feb 2025',
    tech: ['Next.js', 'Framer Motion', 'Tailwind CSS'],
    icon: Cpu,
    status: 'functional'
  },
  {
    id: 'exp-2',
    title: 'AI Figma Token Pipeline',
    description: 'Generates tailwind-compatible theme CSS styles directly from visual design layer properties with code extraction.',
    date: 'Dec 2024',
    tech: ['Figma API', 'OpenAI API', 'NodeJS'],
    icon: Code,
    status: 'concept'
  },
  {
    id: 'exp-3',
    title: 'Fluid Money Visualizer',
    description: 'A responsive visualizer mapping localized transaction volumes and latency across network nodes.',
    date: 'Oct 2024',
    tech: ['React', 'D3.js', 'Canvas API'],
    icon: Cpu,
    status: 'functional'
  }
]

export default function PlaygroundPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="mx-auto w-full max-w-2xl pt-10 pb-16"
    >
      {/* Back button */}
      <Link
        href="/"
        className="group inline-flex items-center gap-1.5 text-sm text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors mb-8"
      >
        <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5 stroke-[1.5]" />
        Back
      </Link>

      <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
        Playground
      </h1>
      <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
        A sandbox for small frontend tools, research demos, and design system experiments.
      </p>

      {/* Grid of Experiments */}
      <div className="mt-10 flex flex-col gap-6">
        {experiments.map((exp, index) => {
          const Icon = exp.icon
          
          return (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-2xl border border-zinc-200/60 bg-zinc-50/50 p-6 transition-all duration-300 hover:border-zinc-300 hover:bg-zinc-100/60 dark:border-zinc-800/60 dark:bg-zinc-950/50 dark:hover:border-zinc-700 dark:hover:bg-zinc-900/60"
            >
              <div className="flex items-center justify-between text-xs font-mono text-zinc-400 dark:text-zinc-500">
                <span>{exp.date}</span>
                <span className="inline-flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  {exp.status}
                </span>
              </div>

              <div className="mt-4 flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-zinc-200/40 text-zinc-600 dark:bg-zinc-900/50 dark:text-zinc-400 group-hover:bg-orange-500/10 group-hover:text-orange-500 transition-colors duration-300">
                  <Icon className="h-5 w-5 stroke-[1.5]" />
                </span>
                
                <div>
                  <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-orange-500 dark:group-hover:text-orange-400 transition-colors">
                    {exp.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
                    {exp.description}
                  </p>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between pt-4 border-t border-zinc-200/40 dark:border-zinc-900/40">
                <div className="flex flex-wrap gap-1">
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded bg-zinc-200/30 px-1.5 py-0.5 text-[10px] font-mono text-zinc-500 dark:bg-zinc-900/30 dark:text-zinc-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                
                <button className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-700 hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-zinc-50">
                  <Play className="h-3 w-3 fill-current" />
                  Launch Sandbox
                </button>
              </div>
            </motion.div>
          )
        })}
      </div>

    </motion.div>
  )
}
