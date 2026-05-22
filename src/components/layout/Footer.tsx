'use client'

import * as React from 'react'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="mt-auto w-full border-t border-zinc-200/50 bg-zinc-50/20 py-10 transition-colors duration-300 dark:border-zinc-800/30 dark:bg-zinc-950/20">
      <div className="flex max-w-2xl flex-col items-center justify-between gap-6 px-6 text-zinc-500 sm:flex-row sm:gap-0 text-sm">
        
        {/* Left Side: Copyright & Version */}
        <div className="flex flex-col items-center gap-1 sm:items-start">
          <p className="dark:text-zinc-400">
            © {currentYear} · Minimalist Developer Portfolio
          </p>
          <span className="text-xs text-zinc-400 dark:text-zinc-500 font-mono">
            v1.0.0 · Built with Next.js & Tailwind v4
          </span>
        </div>

        {/* Right Side: Contact Mail & Socials */}
        <div className="flex flex-col items-center gap-2 sm:items-end">
          <a 
            href="mailto:rishikesh.inno@gmail.com"
            className="text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50 transition-colors duration-200"
          >
            rishikesh.inno@gmail.com
          </a>
          
          <div className="flex items-center gap-4 text-xs font-mono">
            <Link 
              href="https://linkedin.com/in/dineshkumarsenapati/" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-0.5 hover:text-zinc-950 dark:hover:text-zinc-100 transition-colors"
            >
              LinkedIn
              <ArrowUpRight className="h-3 w-3 stroke-[1.5]" />
            </Link>
            <Link 
              href="https://github.com/rishii-004" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-0.5 hover:text-zinc-950 dark:hover:text-zinc-100 transition-colors"
            >
              GitHub
              <ArrowUpRight className="h-3 w-3 stroke-[1.5]" />
            </Link>
          </div>
        </div>

      </div>
    </footer>
  )
}
