'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { Hero } from '@/components/sections/Hero'
import { Projects } from '@/components/sections/Projects'
import { ExperienceTimeline } from '@/components/sections/Experience'

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="flex flex-col gap-8"
    >
      <Hero />
      <Projects />
      <ExperienceTimeline />
    </motion.div>
  )
}
