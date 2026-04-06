import { useEffect } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { projectStories } from '../data'
import { StorySection } from '../components/StorySection'
import { ContactSection } from '../components/ContactSection'

export const ProjectPage = () => {
  const { slug } = useParams()
  const story = projectStories.find((item) => item.id === slug)

  useEffect(() => {
    if (!slug) return
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }, [slug])

  if (!story) {
    return <Navigate to="/work" replace />
  }

  const currentIndex = projectStories.findIndex((p) => p.id === story.id)
  const prev = projectStories[currentIndex - 1]
  const next = projectStories[currentIndex + 1]

  return (
    <div className="flex flex-col gap-12">
      <div className="flex flex-col gap-8">
        <div className="flex flex-wrap items-center gap-3 text-[12px] uppercase tracking-[0.12em] text-muted">
          <Link className="font-body text-primary no-underline hover:text-accent" to="/work">
            all projects
          </Link>
          <span className="text-border">/</span>
          <span className="font-body text-primary">{story.navTitle}</span>
        </div>

        <div className="flex flex-col gap-4">
          <h1 className="max-w-[920px] text-[clamp(38px,5vw,68px)] leading-[1.05] text-primary">{story.headline}</h1>
          <p className="max-w-[840px] font-body text-[17px] leading-[1.7] text-muted">{story.summary}</p>
        </div>

        <div className="grid grid-cols-1 gap-6 border-t border-border pt-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-2">
            <span className="font-body text-[11px] uppercase tracking-[0.12em] text-muted">Role</span>
            <span className="font-body text-[16px] text-primary">{story.meta.role}</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="font-body text-[11px] uppercase tracking-[0.12em] text-muted">Tools</span>
            <span className="font-body text-[16px] text-primary">{story.meta.tools}</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="font-body text-[11px] uppercase tracking-[0.12em] text-muted">Links</span>
            <div className="flex flex-wrap gap-2">
              {story.meta.links.map((link) => (
                <a
                  key={link.url}
                  className="font-body text-[15px] text-muted underline-offset-4 hover:text-accent"
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <span className="font-body text-[11px] uppercase tracking-[0.12em] text-muted">Year</span>
            <span className="font-body text-[16px] text-primary">{story.meta.year}</span>
          </div>
        </div>
      </div>

      <div className="overflow-hidden rounded-[6px] border border-border bg-white shadow-soft">
        <img className="h-full w-full object-cover" src={story.hero} alt={`${story.headline} hero`} loading="lazy" />
      </div>

      <StorySection story={story} />

      <div className="flex flex-col gap-6 border-t border-border pt-8 lg:flex-row lg:items-center lg:justify-between">
        {prev ? (
          <Link
            to={`/work/${prev.id}`}
            className="group flex flex-col items-start gap-2 font-body text-primary no-underline"
          >
            <span className="text-[11px] uppercase tracking-[0.14em] text-muted group-hover:text-accent transition-colors">Previous</span>
            <span className="text-[18px] font-normal leading-tight group-hover:-translate-x-[6px] transition-transform">
              {prev.navTitle}
            </span>
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link
            to={`/work/${next.id}`}
            className="group flex flex-col items-end gap-2 font-body text-primary no-underline"
          >
            <span className="text-[11px] uppercase tracking-[0.14em] text-muted group-hover:text-accent transition-colors">Next</span>
            <span className="text-[18px] font-normal leading-tight group-hover:translate-x-[6px] transition-transform">
              {next.navTitle}
            </span>
          </Link>
        ) : (
          <span />
        )}
      </div>

      <ContactSection />
    </div>
  )
}
