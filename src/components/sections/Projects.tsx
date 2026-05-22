'use client'

import * as React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Project } from '@/types'
import { projects } from '@/lib/data/projects'
import { ProjectCard, ProjectModal } from '../ui/ProjectCard'

export function Projects() {
  const [selectedProject, setSelectedProject] = React.useState<Project | null>(null)

  const caseStudies = projects.filter((p) => p.category === 'case-study')
  return (
    <section id="projects" className="w-full max-w-2xl py-12">
      
      {/* Case Studies Header */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.5 }}
        className="border-b border-zinc-200/40 pb-3 dark:border-zinc-800/40"
      >
        <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
          Case Studies
        </h2>
      </motion.div>

      {/* Case Studies Container */}
      <div className="mt-6 flex flex-col gap-6">
        {caseStudies.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <ProjectCard project={project} onOpenModal={setSelectedProject} />
          </motion.div>
        ))}
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

    </section>
  )
}
