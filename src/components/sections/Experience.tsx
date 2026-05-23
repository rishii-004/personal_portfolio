'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { experiences } from '@/lib/data/experience'
import { Calendar, MapPin, Briefcase } from 'lucide-react'

export function ExperienceTimeline() {
  return (
    <section id="experience" className="w-full max-w-2xl py-12">
      
      {/* Experience Header */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.5 }}
        className="border-b border-zinc-200/40 pb-3 dark:border-zinc-800/40"
      >
        <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-right bg-gradient-to-l from-sky-500 via-zinc-400 to-zinc-400 bg-clip-text text-transparent dark:from-amber-300 dark:via-zinc-500 dark:to-zinc-500">
          Experience History
        </h2>
      </motion.div>

      {/* Experience Timeline */}
      <div className="mt-8 relative border-l border-zinc-200/60 dark:border-zinc-800/60 ml-3.5 space-y-10">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative pl-7 group"
          >
            {/* Timeline Bullet node */}
            <span className="absolute left-0 top-1.5 -translate-x-1/2 flex h-7 w-7 items-center justify-center rounded-full border border-zinc-200 bg-white shadow-sm transition-colors duration-300 group-hover:border-sky-500 dark:border-zinc-800 dark:bg-zinc-950 dark:group-hover:border-amber-300">
              <Briefcase className="h-3 w-3 text-zinc-400 dark:text-zinc-500 group-hover:text-sky-500 dark:group-hover:text-amber-300 transition-colors" />
            </span>

            {/* Content Container */}
            <div className="flex flex-col gap-1.5">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-0">
                <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100 leading-tight">
                  {exp.role}
                </h3>
                <span className="inline-flex items-center gap-1 text-xs font-mono text-zinc-400 dark:text-zinc-500">
                  <Calendar className="h-3 w-3" />
                  {exp.duration}
                </span>
              </div>

              <div className="flex items-center gap-3 text-xs font-medium text-zinc-500 dark:text-zinc-400">
                <span className="text-zinc-800 dark:text-zinc-300">{exp.company}</span>
                <span className="h-3 w-px bg-zinc-200 dark:bg-zinc-800" />
                <span className="inline-flex items-center gap-1 font-mono text-[11px]">
                  <MapPin className="h-3 w-3" />
                  {exp.location}
                </span>
              </div>

              {/* Descriptions bullet points */}
              <ul className="mt-3 space-y-1.5 text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed list-none">
                {exp.description.map((desc, i) => (
                  <li key={i} className="relative pl-3.5 before:absolute before:left-0 before:top-2 before:h-1 before:w-1 before:rounded-full before:bg-zinc-300 dark:before:bg-zinc-700">
                    {desc}
                  </li>
                ))}
              </ul>

              {/* Technologies used */}
              {exp.techStack && (
                <div className="mt-3.5 flex flex-wrap gap-1">
                  {exp.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded bg-zinc-100 px-1.5 py-0.5 text-[10px] font-mono text-zinc-500 dark:bg-zinc-900/50 dark:text-zinc-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  )
}
