'use client'

import * as React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from 'next-themes'
import { 
  Home, 
  User, 
  PenTool, 
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
  { label: 'Writing', href: '/writing', icon: PenTool, colorClass: 'text-purple-500 dark:text-purple-400', hoverBgClass: 'hover:bg-purple-500/10' },
  { label: 'Playground', href: '/playground', icon: LayoutGrid, colorClass: 'text-amber-500 dark:text-amber-400', hoverBgClass: 'hover:bg-amber-500/10' },
  { label: 'Connect', href: '/hello', icon: Hand, colorClass: 'text-rose-500 dark:text-rose-400', hoverBgClass: 'hover:bg-rose-500/10' },
]

export function Navbar() {
  const pathname = usePathname()
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)
  const [isHovered, setIsHovered] = React.useState(false)

  React.useEffect(() => setMounted(true), [])
  const isDark = mounted && resolvedTheme === 'dark'

  return (
    <>
      {/* Desktop Vertical Glassmorphic Navbar (Middle-Right Floating, Expandable to the Left) */}
      <motion.nav
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        initial={{ width: 60, opacity: 0, x: 20 }}
        animate={{ width: isHovered ? 160 : 60, opacity: 1, x: 0 }}
        transition={{ 
          width: { type: 'spring', bounce: 0.15, duration: 0.5 },
          opacity: { duration: 0.4 },
          x: { duration: 0.4 }
        }}
        className="fixed right-6 top-1/2 z-50 hidden -translate-y-1/2 flex-col items-end gap-3 overflow-hidden rounded-2xl border border-zinc-200/50 bg-zinc-50/40 hover:bg-zinc-200/60 p-3 shadow-lg shadow-zinc-200/20 backdrop-blur-md transition-colors duration-300 dark:border-zinc-800/50 dark:bg-zinc-950/40 dark:hover:bg-zinc-800/60 dark:shadow-black/40 md:flex"
      >
        
        {/* Profile Avatar & Name */}
        <div className="mb-1 flex w-full flex-row-reverse items-center px-[2px]">
          <img 
            src="https://github.com/rishii-004.png" 
            alt="Profile Avatar" 
            className="h-8 w-8 shrink-0 rounded-full border border-zinc-200 object-cover shadow-sm dark:border-zinc-700"
          />
          <motion.span
            initial={false}
            animate={{ 
              opacity: isHovered ? 1 : 0, 
              x: isHovered ? 0 : 8 
            }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="mr-3 whitespace-nowrap text-sm font-semibold tracking-tight text-zinc-900 dark:text-zinc-100"
          >
            Rishikesh
          </motion.span>
        </div>

        <div className="mx-auto h-px w-6 shrink-0 bg-zinc-200 dark:bg-zinc-800" />

        {/* Page Links */}
        <div className="flex w-full flex-col gap-1.5">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            const Icon = item.icon

            return (
              <Link key={item.href} href={item.href} className={cn(
                "relative flex h-9 w-full items-center rounded-xl outline-none transition-colors duration-200",
                item.colorClass,
                item.hoverBgClass
              )}>
                {isActive && (
                  <motion.div
                    layoutId="activeIndicatorDesktop"
                    className="absolute inset-0 z-0 rounded-xl bg-zinc-200/50 dark:bg-zinc-800/50"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <div className="relative z-10 flex w-full flex-row-reverse items-center px-[9px]">
                  <Icon className="h-[18px] w-[18px] shrink-0 stroke-[1.5]" />
                  <motion.span
                    initial={false}
                    animate={{ 
                      opacity: isHovered ? 1 : 0, 
                      x: isHovered ? 0 : 8 
                    }}
                    transition={{ duration: 0.2, ease: 'easeOut' }}
                    className="mr-3 whitespace-nowrap text-sm font-medium tracking-tight"
                  >
                    {item.label}
                  </motion.span>
                </div>
              </Link>
            )
          })}
        </div>

        <div className="mx-auto h-px w-6 shrink-0 bg-zinc-200 dark:bg-zinc-800" />

        {/* Integrated Theme Toggle */}
        <button
          onClick={() => setTheme(isDark ? 'light' : 'dark')}
          className="relative flex h-9 w-full items-center rounded-xl text-zinc-500 outline-none transition-colors hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50"
          aria-label="Toggle visual theme"
        >
          <div className="relative z-10 flex w-full flex-row-reverse items-center px-[9px]">
            <div className="flex h-[18px] w-[18px] shrink-0 items-center justify-center">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={isDark ? 'dark' : 'light'}
                  initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                  transition={{ duration: 0.2 }}
                >
                  {isDark ? (
                    <Sun className="h-[18px] w-[18px] stroke-[1.5]" />
                  ) : (
                    <Moon className="h-[18px] w-[18px] stroke-[1.5]" />
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
            
            <motion.span
              initial={false}
              animate={{ 
                opacity: isHovered ? 1 : 0, 
                x: isHovered ? 0 : 8 
              }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="mr-3 whitespace-nowrap text-sm font-medium tracking-tight"
            >
              Theme
            </motion.span>
          </div>
        </button>
      </motion.nav>

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
