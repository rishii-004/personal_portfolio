'use client'

import * as React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { Home, User, PenTool, LayoutGrid, Hand, LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'
import { ThemeToggle } from './ThemeToggle'

interface NavItem {
  label: string
  href: string
  icon: LucideIcon
}

const navItems: NavItem[] = [
  { label: 'Home', href: '/', icon: Home },
  { label: 'About', href: '/about', icon: User },
  { label: 'Writing', href: '/writing', icon: PenTool },
  { label: 'Playground', href: '/playground', icon: LayoutGrid },
  { label: 'Hello', href: '/hello', icon: Hand },
]

export function Navbar() {
  const pathname = usePathname()

  return (
    <>
      {/* Desktop Vertical Glassmorphic Navbar (Middle-Left Floating) */}
      <motion.nav 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="fixed left-6 top-1/2 z-50 hidden -translate-y-1/2 flex-col items-center gap-6 rounded-2xl border border-zinc-200/50 bg-zinc-50/40 p-3 shadow-lg shadow-zinc-200/20 backdrop-blur-md transition-colors duration-300 dark:border-zinc-800/50 dark:bg-zinc-950/40 dark:shadow-black/40 md:flex"
      >
        <div className="flex flex-col gap-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            const Icon = item.icon
            
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative flex h-9 w-9 items-center justify-center rounded-xl text-zinc-500 transition-colors hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50",
                  isActive && "text-zinc-950 dark:text-zinc-50"
                )}
                title={item.label}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute inset-0 rounded-xl bg-zinc-200/50 dark:bg-zinc-800/50"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <Icon className="relative z-10 h-4.5 w-4.5 stroke-[1.5]" />
              </Link>
            )
          })}
        </div>
        
        <div className="h-px w-6 bg-zinc-200 dark:bg-zinc-800" />
        
        <ThemeToggle />
      </motion.nav>

      {/* Mobile Horizontal Navbar (Bottom Floating Capsule) */}
      <motion.nav 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="fixed bottom-6 left-1/2 z-50 flex -translate-x-1/2 items-center gap-4 rounded-full border border-zinc-200/60 bg-zinc-50/50 px-4 py-2.5 shadow-xl shadow-zinc-200/30 backdrop-blur-md transition-colors duration-300 dark:border-zinc-800/60 dark:bg-zinc-950/50 dark:shadow-black/50 md:hidden"
      >
        {navItems.map((item) => {
          const isActive = pathname === item.href
          const Icon = item.icon
          
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "relative flex h-9 w-9 items-center justify-center rounded-full text-zinc-500 transition-colors hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50",
                isActive && "text-zinc-950 dark:text-zinc-50"
              )}
            >
              {isActive && (
                <motion.div
                  layoutId="activeIndicatorMobile"
                  className="absolute inset-0 rounded-full bg-zinc-200/60 dark:bg-zinc-800/60"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              <Icon className="relative z-10 h-4.5 w-4.5 stroke-[1.5]" />
            </Link>
          )
        })}
        
        <div className="h-5 w-px bg-zinc-200 dark:bg-zinc-800" />
        
        <ThemeToggle />
      </motion.nav>
    </>
  )
}
