import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/layout/ThemeProvider'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Portfolio | Minimalist Developer Portfolio',
  description: 'A modern, minimalist developer portfolio website showcasing technical skills, experience, and projects.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-zinc-50 text-zinc-900 transition-colors duration-300 dark:bg-zinc-950 dark:text-zinc-50">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col overflow-x-hidden">
            {/* Very subtle ambient background glow */}
            <div className="fixed top-0 left-0 -z-10 h-full w-full pointer-events-none">
              <div className="absolute top-[10%] left-[-10%] h-[800px] w-[800px] rounded-full bg-orange-500/5 blur-[120px] dark:bg-orange-400/5" />
            </div>

            <Navbar />
            <div className="flex-grow flex flex-col w-full md:pl-[14vw]">
              <main className="flex-grow flex flex-col justify-start px-6 py-16">
                {children}
              </main>
              <Footer />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
