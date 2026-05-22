'use client'

import * as React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, FileText } from 'lucide-react'

export function Hero() {
  return (
    <section className="w-full max-w-2xl pt-10 pb-16">
      
      {/* Title / Name reveal */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <h1 className="text-4xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl">
          Rishikesh
        </h1>
        <p className="mt-2 text-md font-medium text-zinc-500 dark:text-zinc-400">
          Lead Product Engineer, Fintech Developer
        </p>
      </motion.div>

      {/* Copy / Tagline */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        className="mt-6 space-y-4 text-base leading-relaxed text-zinc-600 dark:text-zinc-400"
      >
        <p>
          <span className="font-mono text-xs font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
            About me ·
          </span>{' '}
          I ship robust 0-1 web platforms, architect pixel-perfect design systems, and craft performant user experiences. 
          Currently obsessed with building interactive dashboards and exploring what{' '}
          <span className="rounded-md border border-orange-500/10 bg-orange-500/10 px-1.5 py-0.5 font-mono text-xs font-medium text-orange-600 dark:bg-orange-950/20 dark:text-orange-300">
            AI + UI engineering
          </span>{' '}
          can achieve.
        </p>
        
        <p>
          Over the past 6 years, I have engineered systems that handle millions of interactions, aligning designers and developers on shared frontend tokens.
        </p>
      </motion.div>

      {/* Actions */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="mt-8 flex flex-wrap items-center gap-4 text-sm"
      >
        <Link
          href="/about"
          className="group flex items-center gap-1.5 font-medium text-zinc-800 hover:text-zinc-950 dark:text-zinc-200 dark:hover:text-zinc-50"
        >
          More about me
          <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1 stroke-[1.5]" />
        </Link>
        
        <div className="h-4 w-px bg-zinc-200 dark:bg-zinc-800" />
        
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-lg border border-orange-500/20 bg-orange-500/10 px-3 py-1.5 text-sm font-medium text-orange-600 transition-colors duration-200 hover:bg-orange-500/20 dark:border-orange-500/20 dark:bg-orange-500/10 dark:text-orange-400 dark:hover:bg-orange-500/20"
        >
          <FileText className="h-4 w-4 stroke-[2]" />
          Download Resume
        </a>
      </motion.div>

    </section>
  )
}
