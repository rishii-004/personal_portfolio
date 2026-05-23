'use client'

import * as React from 'react'
import Link from 'next/link'
import {
  Home,
  User,
  Layers,
  LayoutGrid,
  Hand,
  Sun,
  Moon,
  LucideIcon,
} from 'lucide-react'
import { useTheme } from 'next-themes'

const springy = 'cubic-bezier(0.34, 1.56, 0.64, 1)'

interface NavItem {
  label: string
  href: string
  icon: LucideIcon
  color: string
}

const navItems: NavItem[] = [
  { label: 'Home', href: '/', icon: Home, color: '#2DD4BF' },
  { label: 'About', href: '/about', icon: User, color: '#A78BFA' },
  { label: 'Tech Stack', href: '/tech-stack', icon: Layers, color: '#FBBF24' },
  { label: 'Playground', href: '/playground', icon: LayoutGrid, color: '#60A5FA' },
  { label: 'Connect', href: '/hello', icon: Hand, color: '#FB7185' },
]

const themeIdx = navItems.length

export function SidebarNav() {
  const { setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)
  const [hoveredIdx, setHoveredIdx] = React.useState<number | null>(null)

  React.useEffect(() => setMounted(true), []) // eslint-disable-line react-hooks/set-state-in-effect
  const isDark = mounted && resolvedTheme === 'dark'

  const getPush = (idx: number, hovered: number): number => {
    const dist = Math.abs(idx - hovered)
    if (dist === 0) return 0
    const dir = idx < hovered ? -1 : 1
    if (dist === 1) return dir * 7
    if (dist === 2) return dir * 3
    return 0
  }

  return (
    <nav
      className="fixed right-6 top-1/2 z-50 hidden -translate-y-1/2 flex-col items-end gap-1 md:flex"
      onMouseLeave={() => setHoveredIdx(null)}
    >
      {/* Avatar */}
      <div className="mb-0.5 flex items-center px-1">
        <img
          src="https://github.com/rishii-004.png"
          alt="Profile"
          className="h-9 w-9 rounded-full border-2 border-zinc-200 object-cover dark:border-zinc-700"
        />
      </div>

      {/* Nav links */}
      {navItems.map((item, idx) => {
        const isHovered = hoveredIdx === idx
        const push = hoveredIdx !== null ? getPush(idx, hoveredIdx) : 0
        const Icon = item.icon

        return (
          <Link
            key={item.href}
            href={item.href}
            className="relative outline-none"
            onMouseEnter={() => setHoveredIdx(idx)}
            style={{
              transform: `translateY(${push}px)`,
              transition: `transform 0.25s ease`,
            }}
          >
            <div className="flex flex-row-reverse items-center">
              {/* Label pill */}
              <div
                className="overflow-hidden whitespace-nowrap"
                style={{
                  maxWidth: isHovered ? '130px' : '0px',
                  opacity: isHovered ? 1 : 0,
                  transform: isHovered ? 'scale(1.08)' : 'scale(0.88)',
                  transition:
                    'max-width 0.25s ease, opacity 0.25s ease, transform 0.25s ease',
                }}
              >
                <span
                  className="block rounded-[7px] px-[10px] py-[4px] text-sm font-semibold"
                  style={{
                    backgroundColor: `${item.color}35`,
                    color: item.color,
                    textShadow: isHovered ? `0 0 12px ${item.color}80` : 'none',
                  }}
                >
                  {item.label}
                </span>
              </div>

              {/* Icon */}
              <div
                className="flex h-9 w-9 items-center justify-center rounded-xl"
                style={{
                  transform: isHovered ? 'scale(1.35)' : 'scale(1)',
                  transition: `transform 0.35s ${springy}`,
                  color: item.color,
                  filter: isHovered
                    ? `drop-shadow(0 0 8px ${item.color})`
                    : 'drop-shadow(0 0 0px transparent)',
                }}
              >
                <Icon className="h-[18px] w-[18px] stroke-2" />
              </div>
            </div>
          </Link>
        )
      })}

      {/* Divider */}
      <div className="my-0.5 h-px w-8 bg-zinc-300 dark:bg-zinc-700" />

      {/* Theme toggle */}
      {mounted && (
        <button
          className="relative outline-none"
          onMouseEnter={() => setHoveredIdx(themeIdx)}
          onClick={() => setTheme(isDark ? 'light' : 'dark')}
          aria-label="Toggle visual theme"
          style={{
            transform:
              hoveredIdx !== null
                ? `translateY(${getPush(themeIdx, hoveredIdx)}px)`
                : 'translateY(0px)',
            transition: `transform 0.25s ease`,
          }}
        >
          <div className="flex flex-row-reverse items-center">
            {/* Label pill */}
            <div
              className="overflow-hidden whitespace-nowrap"
              style={{
                maxWidth: hoveredIdx === themeIdx ? '130px' : '0px',
                opacity: hoveredIdx === themeIdx ? 1 : 0,
                transform:
                  hoveredIdx === themeIdx ? 'scale(1.08)' : 'scale(0.88)',
                transition:
                  'max-width 0.25s ease, opacity 0.25s ease, transform 0.25s ease',
              }}
            >
              <span
                className="block rounded-[7px] px-[10px] py-[4px] text-sm font-semibold"
                style={{
                  backgroundColor: '#A1A1AA35',
                  color: '#A1A1AA',
                  textShadow:
                    hoveredIdx === themeIdx
                      ? '0 0 12px #A1A1AA80'
                      : 'none',
                }}
              >
                Theme
              </span>
            </div>

            {/* Icon */}
            <div
              className="flex h-9 w-9 items-center justify-center rounded-xl"
              style={{
                transform:
                  hoveredIdx === themeIdx ? 'scale(1.35)' : 'scale(1)',
                transition: `transform 0.35s ${springy}`,
                color: '#A1A1AA',
                filter:
                  hoveredIdx === themeIdx
                    ? 'drop-shadow(0 0 8px #A1A1AA)'
                    : 'drop-shadow(0 0 0px transparent)',
              }}
            >
              {isDark ? (
                <Sun className="h-[18px] w-[18px] stroke-2" />
              ) : (
                <Moon className="h-[18px] w-[18px] stroke-2" />
              )}
            </div>
          </div>
        </button>
      )}
    </nav>
  )
}
