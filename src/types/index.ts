export interface Project {
  id: string
  slug: string
  title: string
  description: string
  techStack: string[]
  liveUrl?: string
  githubUrl?: string
  imageUrl?: string
  featured?: boolean
  category: 'case-study' | 'serious' | 'learning' | 'additional'
  year: string
  association?: string
}

export interface Experience {
  id: string
  role: string
  company: string
  location: string
  duration: string
  description: string[]
  techStack?: string[]
}

export interface NavItem {
  label: string
  href: string
  icon: string // Lucide icon name
}
