'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

interface TechItem {
  name: string
  icon: string
  invertDark?: boolean
}

interface TechCategory {
  title: string
  items: TechItem[]
}

const techStack: TechCategory[] = [
  {
    title: 'Backend',
    items: [
      { name: 'Python', icon: 'python/python-original' },
      { name: 'Go', icon: 'go/go-original' },
      { name: 'Node.js', icon: 'nodejs/nodejs-original' },
      { name: 'Express', icon: 'express/express-original', invertDark: true },
      { name: 'PostgreSQL', icon: 'postgresql/postgresql-original' },
      { name: 'Redis', icon: 'redis/redis-original' },
      { name: 'MongoDB', icon: 'mongodb/mongodb-original' }
    ]
  },
  {
    title: 'Tools & DevOps',
    items: [
      { name: 'Docker', icon: 'docker/docker-original' },
      { name: 'Kubernetes', icon: 'kubernetes/kubernetes-plain' },
      { name: 'AWS', icon: 'amazonwebservices/amazonwebservices-original-wordmark', invertDark: true },
      { name: 'Terraform', icon: 'terraform/terraform-original' },
      { name: 'Git', icon: 'git/git-original' },
      { name: 'Linux', icon: 'linux/linux-original' }
    ]
  },
  {
    title: 'ML & AI',
    items: [
      { name: 'PyTorch', icon: 'pytorch/pytorch-original' },
      { name: 'TensorFlow', icon: 'tensorflow/tensorflow-original' },
      { name: 'Pandas', icon: 'pandas/pandas-original' },
      { name: 'Scikit-Learn', icon: 'scikitlearn/scikitlearn-original' },
      { name: 'Jupyter', icon: 'jupyter/jupyter-original' }
    ]
  },
  {
    title: 'Frontend (Minimal)',
    items: [
      { name: 'React', icon: 'react/react-original' },
      { name: 'Next.js', icon: 'nextjs/nextjs-original', invertDark: true },
      { name: 'Tailwind CSS', icon: 'tailwindcss/tailwindcss-original' }
    ]
  }
]

export default function TechStackPage() {
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
        Tech Stack
      </h1>
      <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
        A curated list of the technologies, tools, and software I use to build things, focusing on Backend, DevOps, and Machine Learning.
      </p>

      <div className="mt-12 flex flex-col gap-10">
        {techStack.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex flex-col gap-5"
          >
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 border-b border-zinc-200/40 dark:border-zinc-800/40 pb-2 text-right">
              {category.title}
            </h3>
            {/* Side-by-side columns grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {category.items.map(item => (
                <div
                  key={item.name}
                  className="group flex items-center gap-4 rounded-xl border border-zinc-200/40 bg-zinc-50/50 p-4 transition-colors hover:bg-zinc-100/80 dark:border-zinc-800/40 dark:bg-zinc-900/50 dark:hover:bg-zinc-800/80"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/50 dark:bg-zinc-800/50 group-hover:bg-white dark:group-hover:bg-zinc-800 shadow-sm border border-zinc-200/50 dark:border-zinc-700/50 transition-colors">
                    <Image
                      src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${item.icon}.svg`}
                      alt={`${item.name} logo`}
                      width={20}
                      height={20}
                      className={`opacity-90 group-hover:opacity-100 transition-opacity ${item.invertDark ? 'dark:invert' : ''}`}
                    />
                  </div>
                  <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 transition-colors">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
