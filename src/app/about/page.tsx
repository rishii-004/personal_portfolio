'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
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
      className="w-full max-w-2xl pt-10 pb-16"
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

    </motion.div>
  )
}
