'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, Clock } from 'lucide-react'
import Link from 'next/link'

interface Post {
  id: string
  title: string
  date: string
  readTime: string
  category: string
  excerpt: string
}

const posts: Post[] = [
  {
    id: '1',
    title: 'Why Minimalist Software Feels Premium',
    date: 'Jan 15, 2026',
    readTime: '4 min read',
    category: 'Design & Philosophy',
    excerpt: 'An investigation into how generous whitespace, crisp system fonts, and high-performance micro-interactions shape perceived software quality.'
  },
  {
    id: '2',
    title: 'Designing Token Systems that Scale in React',
    date: 'Nov 04, 2025',
    readTime: '6 min read',
    category: 'Engineering',
    excerpt: 'Practical advice on building shared design token pipelines between multi-disciplinary design tools and React component styles.'
  },
  {
    id: '3',
    title: 'Exploring Scroll-Linked Interactions in Tailwind CSS',
    date: 'Sep 12, 2025',
    readTime: '3 min read',
    category: 'Frontend Research',
    excerpt: 'How to utilize pure CSS scroll animations and basic Javascript state listeners to construct performant scrolling experiences without breaking performance.'
  }
]

export default function WritingPage() {
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
        Writing
      </h1>
      <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
        Personal notes and essays documenting research, product styling, and design system engineering.
      </p>

      {/* Writing Feed list */}
      <div className="mt-10 flex flex-col gap-8">
        {posts.map((post, index) => (
          <motion.article
            key={post.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group flex flex-col gap-2 cursor-pointer pb-6 border-b border-zinc-200/40 dark:border-zinc-800/40 last:border-0"
          >
            <div className="flex items-center justify-between text-xs font-mono text-zinc-400 dark:text-zinc-500">
              <span>{post.date}</span>
              <span className="flex items-center gap-1 text-[11px]">
                <Clock className="h-3 w-3" />
                {post.readTime}
              </span>
            </div>

            <h3 className="mt-2 text-lg font-semibold tracking-tight text-zinc-900 group-hover:text-orange-500 dark:text-zinc-100 dark:group-hover:text-orange-400 transition-colors duration-200">
              {post.title}
            </h3>

            <p className="text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
              {post.excerpt}
            </p>

            <span className="mt-2 text-xs font-mono font-semibold text-zinc-400 group-hover:text-zinc-950 dark:text-zinc-500 dark:group-hover:text-zinc-100 transition-colors">
              {post.category} · Read Article →
            </span>
          </motion.article>
        ))}
      </div>

    </motion.div>
  )
}
