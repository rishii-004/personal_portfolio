'use client'

import * as React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { projects } from '@/lib/data/projects'
import { Project } from '@/types'
import { ProjectCard, ProjectModal } from '@/components/ui/ProjectCard'

export default function PlaygroundPage() {
  const [selectedProject, setSelectedProject] = React.useState<Project | null>(null)

  const seriousProjects = projects.filter(p => p.category === 'serious')
  const learningProjects = projects.filter(p => p.category === 'learning')

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-2xl pt-10 pb-16"
    >
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
        A sandbox for my backend infrastructure tests, machine learning pipelines, and smaller UI experiments.
      </p>

      {/* Serious Projects Section */}
      <div className="mt-12">
        <h2 className="text-sm font-mono font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-6 border-b border-zinc-200/40 dark:border-zinc-800/40 pb-3">
          Flagship Projects
        </h2>
        <div className="flex flex-col gap-4">
          {seriousProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectCard project={project} onOpenModal={setSelectedProject} />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Learning & Small Projects Section */}
      <div className="mt-14">
        <h2 className="text-sm font-mono font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-6 border-b border-zinc-200/40 dark:border-zinc-800/40 pb-3">
          Experiments & Mini-Projects
        </h2>
        <div className="flex flex-col gap-4">
          {learningProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectCard project={project} onOpenModal={setSelectedProject} />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Dynamic Overlay Dialog with backdrop scroll locks */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>

    </motion.div>
  )
}
