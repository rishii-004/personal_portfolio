'use client'

import * as React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from 'next-themes'
import { 
  Home, 
  User, 
  Layers, 
  LayoutGrid, 
  Hand, 
  Sun, 
  Moon,
  LucideIcon 
} from 'lucide-react'
import { cn } from '@/lib/utils'

interface NavItem {
  label: string
  href: string
  icon: LucideIcon
  colorClass: string
  hoverBgClass: string
}

const navItems: NavItem[] = [
  { label: 'Home', href: '/', icon: Home, colorClass: 'text-blue-500 dark:text-blue-400', hoverBgClass: 'hover:bg-blue-500/10' },
  { label: 'About', href: '/about', icon: User, colorClass: 'text-emerald-500 dark:text-emerald-400', hoverBgClass: 'hover:bg-emerald-500/10' },
  { label: 'Tech Stack', href: '/tech-stack', icon: Layers, colorClass: 'text-purple-500 dark:text-purple-400', hoverBgClass: 'hover:bg-purple-500/10' },
  { label: 'Playground', href: '/playground', icon: LayoutGrid, colorClass: 'text-amber-500 dark:text-amber-400', hoverBgClass: 'hover:bg-amber-500/10' },
  { label: 'Connect', href: '/hello', icon: Hand, colorClass: 'text-rose-500 dark:text-rose-400', hoverBgClass: 'hover:bg-rose-500/10' },
]

export function Navbar() {
  const pathname = usePathname()
  const { setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => setMounted(true), [])
  const isDark = mounted && resolvedTheme === 'dark'

  return (
    <>
      {/* Mobile Horizontal Navbar (Bottom Floating Capsule) */}
      <motion.nav
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="fixed bottom-6 left-1/2 z-50 flex -translate-x-1/2 items-center gap-1.5 rounded-full border border-zinc-200/60 bg-zinc-50/50 hover:bg-zinc-200/60 px-3 py-2.5 shadow-xl shadow-zinc-200/30 backdrop-blur-md transition-colors duration-300 dark:border-zinc-800/60 dark:bg-zinc-950/50 dark:hover:bg-zinc-800/60 dark:shadow-black/50 md:hidden"
      >
        {navItems.map((item) => {
          const isActive = pathname === item.href
          const Icon = item.icon

          return (
            <Link key={item.href} href={item.href} className="relative outline-none">
              <div
                className={cn(
                  "relative z-10 flex h-11 w-11 items-center justify-center rounded-full transition-colors duration-300",
                  item.colorClass,
                  item.hoverBgClass
                )}
              >
                <Icon className="h-5 w-5 stroke-[1.5]" />
              </div>
              {isActive && (
                <motion.div
                  layoutId="activeNavMobile"
                  className="absolute inset-0 z-0 rounded-full bg-zinc-200/60 dark:bg-zinc-800/60"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
          )
        })}

        <div className="mx-1 h-5 w-px bg-zinc-200 dark:bg-zinc-800" />

        <button
          onClick={() => setTheme(isDark ? 'light' : 'dark')}
          className="relative outline-none"
          aria-label="Toggle visual theme"
        >
          <div className="relative z-10 flex h-11 w-11 items-center justify-center rounded-full text-zinc-500 transition-colors duration-300 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={isDark ? 'dark' : 'light'}
                initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                transition={{ duration: 0.2 }}
                className="flex items-center justify-center"
              >
                {isDark ? (
                  <Sun className="h-5 w-5 stroke-[1.5]" />
                ) : (
                  <Moon className="h-5 w-5 stroke-[1.5]" />
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </button>
      </motion.nav>
    </>
  )
}
