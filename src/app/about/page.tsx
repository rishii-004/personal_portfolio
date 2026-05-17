'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import Link from 'next/link'

const blurParagraphs = [
  "My background is a bit unusual. I started in visual communication and design research before transitioning into full-stack product engineering. This blend of disciplines allows me to think critically about how design communicates, not just how it functions under the hood.",
  "In engineering, I explore rapid high-fidelity prototyping, developer tooling, and shared token systems. I love bridges between creative ideas and production-ready code. I lead design system integration for product pods, aligning multi-functional teams onto core layouts and assets.",
  "Outside of screen work, I dabble in photography, audio synthesis, and travel. All of these side ventures feed into my core engineering work: composition, rhythmic discipline, and the habit of noticing subtle details that others might walk past.",
  "Lately, I've been experimenting with how LLMs and generative agents are redefining frontend developer workflows. I'm exploring new sandboxes and canvas-based prototyping, and if you are curious about this space, I'd love to chat and think through it together."
]

export default function AboutPage() {
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
        About Me
      </h1>

      {/* Main Paragraphs with Scroll-driven Unblur transitions */}
      <div className="mt-10 space-y-10">
        {blurParagraphs.map((paragraph, index) => (
          <motion.p
            key={index}
            initial={{ filter: 'blur(6px)', opacity: 0.25, y: 10 }}
            whileInView={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="text-base leading-relaxed text-zinc-600 dark:text-zinc-400 font-sans"
          >
            {paragraph}
          </motion.p>
        ))}
      </div>

      {/* Additional link section */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-12 pt-8 border-t border-zinc-200/40 dark:border-zinc-800/40"
      >
        <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
          Connect / Links
        </h3>
        
        <div className="mt-4 flex flex-col gap-3 text-sm text-zinc-600 dark:text-zinc-400">
          <Link
            href="/hello"
            className="group flex items-center justify-between rounded-xl border border-zinc-200/60 bg-zinc-50/50 p-4 transition-colors hover:bg-zinc-100 dark:border-zinc-800/60 dark:bg-zinc-950/50 dark:hover:bg-zinc-900"
          >
            <span>Before you go — here's a postcard for you</span>
            <ArrowUpRight className="h-4 w-4 stroke-[1.5] text-zinc-400 group-hover:text-zinc-950 dark:group-hover:text-zinc-100 transition-colors" />
          </Link>
          
          <a
            href="mailto:rishikesh.inno@gmail.com"
            className="flex items-center justify-between rounded-xl border border-zinc-200/40 bg-transparent p-4 transition-colors hover:bg-zinc-100/50 dark:border-zinc-800/20 dark:hover:bg-zinc-900/40"
          >
            <span>Get in touch via Email</span>
            <span className="text-xs font-mono text-zinc-400 dark:text-zinc-500 hover:underline">
              rishikesh.inno@gmail.com
            </span>
          </a>
        </div>
      </motion.div>

    </motion.div>
  )
}
