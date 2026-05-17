'use client'

import * as React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, Github, ExternalLink, X } from 'lucide-react'
import { Project } from '@/types'
import { cn } from '@/lib/utils'

interface ProjectCardProps {
  project: Project
  onOpenModal?: (project: Project) => void
}

export function ProjectCard({ project, onOpenModal }: ProjectCardProps) {
  const isCaseStudy = project.category === 'case-study'

  if (isCaseStudy && onOpenModal) {
    return (
      <motion.button
        onClick={() => onOpenModal(project)}
        className="group relative w-full text-left cursor-pointer rounded-xl border border-zinc-200/50 bg-zinc-50/40 p-5 transition-all duration-300 hover:border-zinc-300 hover:bg-zinc-100/60 dark:border-zinc-800/40 dark:bg-zinc-950/40 dark:hover:border-zinc-700 dark:hover:bg-zinc-900/60"
        whileHover={{ scale: 1.015 }}
        whileTap={{ scale: 0.995 }}
      >
        <div className="flex items-center justify-between text-xs font-mono text-zinc-400 dark:text-zinc-500">
          <span>{project.year}</span>
          {project.association && (
            <span className="rounded bg-zinc-200/50 px-1.5 py-0.5 dark:bg-zinc-800/50 text-[10px]">
              {project.association}
            </span>
          )}
        </div>
        
        <h3 className="mt-3 text-lg font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 group-hover:text-orange-500 dark:group-hover:text-orange-400 transition-colors duration-200">
          {project.title}
        </h3>
        
        <p className="mt-2 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400 line-clamp-2">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded bg-zinc-200/40 px-1.5 py-0.5 text-[10px] font-mono text-zinc-500 dark:bg-zinc-900/50 dark:text-zinc-400"
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.button>
    )
  }

  // Additional work (renders with link targets)
  return (
    <div
      className="group relative flex w-full flex-col justify-between rounded-xl border border-zinc-200/30 bg-zinc-50/20 p-5 transition-all duration-300 hover:border-zinc-200 hover:bg-zinc-50 dark:border-zinc-900/30 dark:bg-zinc-950/20 dark:hover:border-zinc-800 dark:hover:bg-zinc-900/40"
    >
      <div>
        <div className="flex items-center justify-between text-xs font-mono text-zinc-400 dark:text-zinc-500">
          <span>{project.year}</span>
        </div>
        
        <h3 className="mt-3 text-base font-semibold text-zinc-900 dark:text-zinc-100">
          {project.title}
        </h3>
        
        <p className="mt-1.5 text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
          {project.description}
        </p>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <div className="flex flex-wrap gap-1">
          {project.techStack.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="rounded bg-zinc-200/30 px-1.5 py-0.5 text-[9px] font-mono text-zinc-500 dark:bg-zinc-900/30 dark:text-zinc-500"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex items-center gap-2">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
              title="GitHub Repository"
            >
              <Github className="h-4 w-4 stroke-[1.5]" />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
              title="Live Demo"
            >
              <ExternalLink className="h-4 w-4 stroke-[1.5]" />
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

interface ProjectModalProps {
  project: Project
  onClose: () => void
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  React.useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-zinc-950/60 backdrop-blur-sm"
      />

      {/* Modal Dialog */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        transition={{ type: 'spring', duration: 0.4 }}
        className="relative z-10 w-full max-w-lg overflow-hidden rounded-2xl border border-zinc-200 bg-white p-6 shadow-2xl transition-colors duration-300 dark:border-zinc-800 dark:bg-zinc-950"
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-lg p-1.5 text-zinc-400 hover:bg-zinc-100 hover:text-zinc-900 dark:hover:bg-zinc-900 dark:hover:text-zinc-50"
          aria-label="Close details"
        >
          <X className="h-4 w-4 stroke-[1.5]" />
        </button>

        <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 dark:text-zinc-500">
          <span>{project.year}</span>
          {project.association && (
            <>
              <span>·</span>
              <span className="rounded bg-zinc-100 px-1.5 py-0.5 dark:bg-zinc-900">
                {project.association}
              </span>
            </>
          )}
        </div>

        <h3 className="mt-4 text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
          {project.title}
        </h3>

        <p className="mt-4 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
          {project.description}
        </p>

        <div className="mt-6">
          <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
            Tech Stack
          </h4>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-lg bg-zinc-100 px-2.5 py-1 text-xs font-mono text-zinc-600 dark:bg-zinc-900 dark:text-zinc-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-8 flex items-center gap-3">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-zinc-950 py-2.5 text-sm font-semibold text-zinc-50 hover:bg-zinc-800 transition-colors dark:bg-zinc-50 dark:text-zinc-950 dark:hover:bg-zinc-200"
            >
              Visit Website
              <ArrowUpRight className="h-4 w-4 stroke-[1.5]" />
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-zinc-200 px-4 py-2.5 text-sm font-semibold text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900 transition-colors dark:border-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-zinc-100"
            >
              <Github className="h-4 w-4 stroke-[1.5]" />
              Repository
            </a>
          )}
        </div>
      </motion.div>
    </div>
  )
}
