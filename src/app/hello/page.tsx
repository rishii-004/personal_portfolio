'use client'

import * as React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, Send, Sparkles, MapPin, Check, Github, Linkedin, Mail } from 'lucide-react'
import Link from 'next/link'

type Vibe = 'hiring' | 'curiosity' | 'referred' | 'vibing'

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
    key: 'curiosity',
    label: '✨ Curiosity',
    postcardText: "Hello there!\n\nI was exploring minimalist websites and stumbled across your portfolio. Your UI layouts, vertical navbar, and subtle micro-interactions are absolutely gorgeous."
  },
  {
    key: 'referred',
    label: '🤝 Referred',
    postcardText: "Hi Rishikesh,\n\nA mutual colleague recommended your frontend design systems and prototyping capabilities. Stamping this card to start a conversation!"
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

  const currentVibe = vibeOptions.find((v) => v.key === selectedVibe) || vibeOptions[3]

  const handleStamp = (e: React.FormEvent) => {
    e.preventDefault()
    setStamped(true)
    setTimeout(() => {
      setStamped(false)
    }, 4000)
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

      {/* Choice Pills */}
      <div className="mt-8 flex flex-wrap gap-2">
        {vibeOptions.map((option) => (
          <button
            key={option.key}
            onClick={() => setSelectedVibe(option.key)}
            className={`rounded-full px-4 py-1.5 text-xs font-medium border transition-all duration-300 ${
              selectedVibe === option.key
                ? 'border-zinc-900 bg-zinc-950 text-zinc-50 dark:border-zinc-50 dark:bg-zinc-50 dark:text-zinc-950'
                : 'border-zinc-200 bg-transparent text-zinc-600 hover:border-zinc-300 hover:text-zinc-900 dark:border-zinc-800 dark:text-zinc-400 dark:hover:border-zinc-700 dark:hover:text-zinc-100'
            }`}
          >
            {option.label}
          </button>
        ))}
      </div>

      {/* Postcard Container */}
      <div className="mt-8 perspective-1000">
        <motion.div
          animate={stamped ? { rotateY: [0, 5, -5, 0], scale: [1, 1.02, 0.98, 1] } : {}}
          transition={{ duration: 0.8 }}
          className="relative w-full rounded-2xl border border-zinc-200/80 bg-white p-6 shadow-xl transition-all duration-300 dark:border-zinc-800/80 dark:bg-zinc-950 dark:shadow-black/40 sm:p-8"
        >
          {/* Grid Layout inside postcard */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-5">
            
            {/* Left Column: Written Content */}
            <div className="sm:col-span-3 flex flex-col justify-between min-h-[220px]">
              <div className="relative">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={selectedVibe}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.2 }}
                    className="text-sm italic leading-relaxed text-zinc-600 dark:text-zinc-400 whitespace-pre-line"
                  >
                    {currentVibe.postcardText}
                  </motion.p>
                </AnimatePresence>
              </div>

              {/* Personalization name signature */}
              <div className="mt-6 pt-4 border-t border-dashed border-zinc-200 dark:border-zinc-800">
                <span className="text-[10px] font-mono text-zinc-400 dark:text-zinc-500 uppercase tracking-wider block">
                  Sender Signature
                </span>
                <span className="text-xl font-medium tracking-tight italic font-serif text-orange-600 dark:text-orange-400 block mt-1 min-h-[28px]">
                  {visitorName || 'stranger'}
                </span>
              </div>
            </div>

            {/* Separator Line */}
            <div className="hidden sm:block sm:col-span-1 justify-self-center h-full w-px border-l border-dashed border-zinc-200 dark:border-zinc-800" />

            {/* Right Column: Address and Stamp */}
            <div className="sm:col-span-1 flex flex-col justify-between items-center sm:items-end">
              {/* Stamp Wrapper */}
              <motion.div
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="relative h-18 w-14 shrink-0 rounded border-2 border-dashed border-zinc-300 bg-zinc-50/50 p-1 dark:border-zinc-800 dark:bg-zinc-900 flex flex-col items-center justify-between"
              >
                <div className="flex flex-col items-center text-[7px] font-mono text-zinc-400 tracking-tighter uppercase leading-none">
                  <span>POSTAL</span>
                  <span>SERVICE</span>
                </div>
                <Sparkles className="h-4 w-4 text-orange-500 animate-pulse" />
                <span className="text-[7px] font-mono text-zinc-400">1.0.0</span>

                {/* Stamped visual indicator overlay */}
                <AnimatePresence>
                  {stamped && (
                    <motion.div
                      initial={{ scale: 3, opacity: 0, rotate: -20 }}
                      animate={{ scale: 1, opacity: 1, rotate: -15 }}
                      exit={{ opacity: 0 }}
                      transition={{ type: 'spring', stiffness: 200 }}
                      className="absolute inset-0 flex items-center justify-center rounded border-2 border-emerald-500/80 bg-emerald-500/10 text-[8px] font-bold font-mono text-emerald-600 uppercase tracking-widest"
                    >
                      SENT
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Mock Address lines */}
              <div className="mt-8 sm:mt-0 flex flex-col gap-2 w-full text-left text-[9px] font-mono text-zinc-400 dark:text-zinc-500">
                <span className="border-b border-zinc-200 dark:border-zinc-800 pb-1">To: Rishikesh</span>
                <span className="border-b border-zinc-200 dark:border-zinc-800 pb-1">Fintech PG Pod</span>
                <span className="border-b border-zinc-200 dark:border-zinc-800 pb-1">{location}</span>
              </div>

            </div>

          </div>
        </motion.div>
      </div>

      {/* Input personalization field */}
      <form onSubmit={handleStamp} className="mt-8 flex flex-col sm:flex-row gap-3">
        <input
          type="text"
          value={visitorName}
          onChange={(e) => setVisitorName(e.target.value.slice(0, 24))}
          placeholder="Type your name to sign the postcard..."
          className="flex-grow rounded-xl border border-zinc-200 bg-zinc-50/50 px-4 py-2.5 text-sm text-zinc-800 outline-none transition-all focus:border-zinc-400 focus:bg-white dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-200 dark:focus:border-zinc-600 dark:focus:bg-zinc-900"
          required
        />
        <button
          type="submit"
          disabled={stamped}
          className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-zinc-950 px-5 py-2.5 text-sm font-semibold text-zinc-50 hover:bg-zinc-800 disabled:opacity-50 disabled:hover:bg-zinc-950 transition-all dark:bg-zinc-50 dark:text-zinc-950 dark:hover:bg-zinc-200 dark:disabled:hover:bg-zinc-50"
        >
          {stamped ? (
            <>
              <Check className="h-4 w-4 stroke-[2]" />
              Sent Successfully!
            </>
          ) : (
            <>
              <Send className="h-4 w-4 stroke-[1.5]" />
              Stamp & Send Card
            </>
          )}
        </button>
      </form>

    </motion.div>
  )
}
