'use client'

import * as React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, Send, MapPin, Check, Github, Linkedin, Mail } from 'lucide-react'
import Link from 'next/link'

type Vibe = 'hiring' | 'vibing'

interface VibeOption {
  key: Vibe
  label: string
  postcardText: string
}

  const vibeOptions: VibeOption[] = [
    {
      key: 'hiring',
      label: '💼 Hiring',
      postcardText: "Dear Rishikesh,\n\nI was impressed by your portfolio and clean architecture standards. I'd love to chat about potential design and engineering opportunities within my team."
    },
    {
      key: 'vibing',
      label: '☕ Just vibing',
      postcardText: "Hey stranger,\n\nJust stopping by to appreciate the smooth transitions and dark mode layouts. Grab a cup of coffee and keep shipping awesome platforms!"
    }
  ]

export default function HelloPage() {
  const [visitorName, setVisitorName] = React.useState('')
  const [selectedVibe, setSelectedVibe] = React.useState<Vibe>('vibing')
  const [location, setLocation] = React.useState('Earth')
  const [stamped, setStamped] = React.useState(false)

  // Basic geolocation fetch
  React.useEffect(() => {
    fetch('https://ipapi.co/json/')
      .then((res) => res.json())
      .then((data) => {
        if (data.city && data.country_code) {
          setLocation(`${data.city}, ${data.country_code}`)
        }
      })
      .catch(() => {
        // FallbackCity or Earth
        setLocation('Noida, IN')
      })
  }, [])

  const currentVibe = vibeOptions.find((v) => v.key === selectedVibe) || vibeOptions[0]

  const handleStamp = (e: React.FormEvent) => {
    e.preventDefault()
    setStamped(true)
    setTimeout(() => {
      setStamped(false)
    }, 4000)
  }

  const vibeSubjects: Record<Vibe, string> = {
    hiring: 'Opportunity to Connect',
    vibing: 'Just Stopping By'
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-2xl pt-10 pb-16"
    >
      {/* Back button */}
      <Link
        href="/"
        className="group inline-flex items-center gap-1.5 text-sm text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors mb-8"
      >
        <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5 stroke-[1.5]" />
        Back
      </Link>

      <div className="flex flex-col gap-1.5">
        <span className="inline-flex items-center gap-1.5 text-xs font-mono text-orange-500 dark:text-orange-400">
          <MapPin className="h-3 w-3" />
          Welcome from {location}
        </span>
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
          Let's connect.
        </h1>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-lg">
          Select why you are visiting, type your name, and send a customized high-fidelity digital postcard!
        </p>

        {/* Social Links */}
        <div className="mt-4 flex gap-4">
          <a href="https://github.com/rishii-004" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center rounded-full border border-zinc-200/60 bg-zinc-50/50 p-2.5 text-zinc-700 transition-colors hover:bg-zinc-200 hover:text-black dark:border-zinc-800/60 dark:bg-zinc-950/50 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-white shadow-sm backdrop-blur-md">
            <Github className="h-5 w-5 stroke-[1.5]" />
          </a>
          <a href="https://linkedin.com/in/dineshkumarsenapati/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center rounded-full border border-zinc-200/60 bg-zinc-50/50 p-2.5 text-[#0A66C2] transition-colors hover:border-[#0A66C2]/30 hover:bg-[#0A66C2]/10 dark:border-zinc-800/60 dark:bg-zinc-950/50 dark:text-[#4facff] dark:hover:border-[#4facff]/30 dark:hover:bg-[#4facff]/10 shadow-sm backdrop-blur-md">
            <Linkedin className="h-5 w-5 stroke-[1.5]" />
          </a>
          <a href="mailto:rishikesh.inno@gmail.com" className="flex items-center justify-center rounded-full border border-zinc-200/60 bg-zinc-50/50 p-2.5 text-rose-500 transition-colors hover:border-rose-500/30 hover:bg-rose-500/10 dark:border-zinc-800/60 dark:bg-zinc-950/50 dark:text-rose-400 dark:hover:border-rose-400/30 dark:hover:bg-rose-400/10 shadow-sm backdrop-blur-md">
            <Mail className="h-5 w-5 stroke-[1.5]" />
          </a>
        </div>
      </div>

      <div className="mt-8 flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
        <div className="flex-1 flex justify-center lg:justify-start">
        <motion.div
          animate={stamped ? { rotateZ: [0, 0.5, -0.5, 0], scale: [1, 1.01, 0.99, 1] } : {}}
          transition={{ duration: 0.8 }}
          className="relative mx-auto w-full max-w-[340px] rounded-[2.5rem] border-[3px] border-zinc-300 bg-white shadow-xl dark:border-zinc-600 dark:bg-zinc-950 dark:shadow-black/50"
        >
          {/* Side buttons */}
          <div className="absolute -left-[7px] top-20 flex flex-col gap-2">
            <div className="h-6 w-[5px] rounded-r bg-zinc-300 dark:bg-zinc-600" />
            <div className="h-8 w-[5px] rounded-r bg-zinc-300 dark:bg-zinc-600" />
          </div>
          <div className="absolute -right-[7px] top-28 flex flex-col gap-2">
            <div className="h-10 w-[5px] rounded-l bg-zinc-300 dark:bg-zinc-600" />
          </div>

          {/* Status bar */}
          <div className="relative flex items-center justify-between px-6 pt-4 pb-2">
            <span className="text-[11px] font-mono font-semibold text-zinc-800 dark:text-zinc-200">9:41</span>
            <div className="absolute left-1/2 -translate-x-1/2 h-[18px] w-[80px] rounded-full bg-zinc-900 dark:bg-zinc-100" />
            <div className="flex items-center gap-1">
              <span className="text-[9px] font-mono font-semibold text-zinc-800 dark:text-zinc-200">5G</span>
              <svg className="h-3 w-4 text-zinc-800 dark:text-zinc-200" viewBox="0 0 16 12" fill="currentColor">
                <rect x="11" y="4" width="2" height="6" rx="0.5" />
                <rect x="8" y="2" width="2" height="8" rx="0.5" />
                <rect x="5" y="0" width="2" height="10" rx="0.5" />
              </svg>
            </div>
          </div>

          {/* Email Content */}
          <div className="px-5 pb-2">
            <div className="space-y-0.5 pb-3 border-b border-zinc-100 dark:border-zinc-800">
              <div className="flex items-baseline gap-2">
                <span className="text-[10px] font-mono text-zinc-400 w-8 shrink-0">To:</span>
                <span className="text-xs font-medium text-zinc-800 dark:text-zinc-200">Rishikesh</span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-[10px] font-mono text-zinc-400 w-8 shrink-0">From:</span>
                <span className="text-xs font-medium text-orange-600 dark:text-orange-400">
                  {visitorName || 'stranger'}
                </span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-[10px] font-mono text-zinc-400 w-8 shrink-0">Subj:</span>
                <span className="text-xs font-medium text-zinc-600 dark:text-zinc-400">{vibeSubjects[selectedVibe]}</span>
              </div>
            </div>

            <div className="py-4 min-h-[160px]">
              <AnimatePresence mode="wait">
                <motion.p
                  key={selectedVibe}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.2 }}
                  className="text-xs leading-relaxed text-zinc-600 dark:text-zinc-400 whitespace-pre-line"
                >
                  {currentVibe.postcardText}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="px-5 pb-4">
            <form onSubmit={handleStamp}>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={visitorName}
                  onChange={(e) => setVisitorName(e.target.value.slice(0, 24))}
                  placeholder="Your name..."
                  className="flex-grow rounded-lg border border-zinc-200 bg-zinc-50/50 px-3 py-2 text-xs text-zinc-800 outline-none transition-all focus:border-zinc-400 focus:bg-white dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200 dark:focus:border-zinc-600 dark:focus:bg-zinc-800"
                  required
                />
                <button
                  type="submit"
                  disabled={stamped}
                  className="inline-flex items-center justify-center gap-1 rounded-lg bg-zinc-950 px-4 py-2 text-xs font-semibold text-zinc-50 hover:bg-zinc-800 disabled:opacity-50 disabled:hover:bg-zinc-950 transition-all dark:bg-zinc-50 dark:text-zinc-950 dark:hover:bg-zinc-200 dark:disabled:hover:bg-zinc-50"
                >
                  {stamped ? (
                    <Check className="h-3.5 w-3.5 stroke-[2]" />
                  ) : (
                    <Send className="h-3.5 w-3.5 stroke-[1.5]" />
                  )}
                </button>
              </div>
            </form>
          </div>

          {/* Sent overlay */}
          <AnimatePresence>
            {stamped && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 flex items-center justify-center bg-white/90 dark:bg-zinc-950/90 backdrop-blur-sm rounded-[2.3rem]"
              >
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  className="flex flex-col items-center gap-2"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200, delay: 0.1 }}
                    className="rounded-full bg-emerald-500/10 p-3"
                  >
                    <Check className="h-8 w-8 text-emerald-500 stroke-[2]" />
                  </motion.div>
                  <span className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">Email Sent!</span>
                  <span className="text-[10px] text-zinc-500">Your message has been delivered.</span>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Home indicator */}
          <div className="flex justify-center pb-3">
            <div className="h-1 w-28 rounded-full bg-zinc-300 dark:bg-zinc-700" />
          </div>
        </motion.div>
      </div>

        <div className="w-full lg:w-auto lg:min-w-[200px] lg:sticky lg:top-24 shrink-0">
          <div className="flex flex-col gap-2">
            {vibeOptions.map((option) => (
              <button
                key={option.key}
                onClick={() => setSelectedVibe(option.key)}
                className={`flex items-center gap-3 rounded-xl px-4 py-2.5 text-sm font-medium border transition-all duration-300 ${
                  selectedVibe === option.key
                    ? 'border-zinc-900 bg-zinc-950 text-zinc-50 dark:border-zinc-50 dark:bg-zinc-50 dark:text-zinc-950'
                    : 'border-zinc-200 bg-transparent text-zinc-600 hover:border-zinc-300 hover:text-zinc-900 dark:border-zinc-800 dark:text-zinc-400 dark:hover:border-zinc-700 dark:hover:text-zinc-100'
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      </div>

    </motion.div>
  )
}
