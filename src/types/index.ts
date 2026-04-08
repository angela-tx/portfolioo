export type LinkItem = {
  label: string
  url: string
}

export type FeaturedProject = {
  id: string
  title: string
  description: string
  image: string
}

export type ExperienceItem = {
  role: string
  dates: string
  detail: string
  link?: string
  company?: string
}

export type GalleryItem = {
  title: string
  image: string
  link?: string
}

export type ProjectStory = {
  id: string
  title: string
  navTitle: string
  headline: string
  hero: string
  meta: {
    role: string
    tools: string
    links: LinkItem[]
    year: string
  }
  summary: string
  sections: {
    title: string
    text?: string
    bullets?: string[]
    quote?: string
    inlineVisual?: { src: string; alt: string }
  }[]
  gallery?: { src: string; alt: string }[]
  closing?: string
}
