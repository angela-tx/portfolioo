import { Link, Navigate, useParams } from 'react-router-dom'
import { projectStories } from '../data'
import { StorySection } from '../components/StorySection'
import { ContactSection } from '../components/ContactSection'

export const ProjectPage = () => {
  const { slug } = useParams()
  const story = projectStories.find((item) => item.id === slug)

  if (!story) {
    return <Navigate to="/work" replace />
  }

  const currentIndex = projectStories.findIndex((p) => p.id === story.id)
  const prev = projectStories[currentIndex - 1]
  const next = projectStories[currentIndex + 1]

  return (
    <div className="flex flex-col gap-[72px]">
      <div className="flex items-center gap-2 font-body text-muted">
        <Link className="text-primary no-underline" to="/work">
          All Projects
        </Link>
        <span className="text-muted">/</span>
        <span>{story.title}</span>
      </div>

      <StorySection story={story} />

      <div className="flex items-center justify-between -mt-6 mb-2">
        {prev ? (
          <Link to={`/work/${prev.id}`} className="font-body font-semibold text-primary underline-offset-4 hover:text-accent">
            ‹ {prev.title}
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link to={`/work/${next.id}`} className="font-body font-semibold text-primary underline-offset-4 hover:text-accent">
            {next.title} ›
          </Link>
        ) : (
          <span />
        )}
      </div>

      <section className="flex flex-col gap-4">
        <div className="w-full rounded-[8px] border border-[rgba(116,99,150,0.12)] shadow-soft">
          <img
            className="h-full w-full rounded-[8px] object-cover"
            src="https://framerusercontent.com/images/Hw4716zakmU1LcG3JpyrWAo88.png?width=1800&height=1012"
            alt="Blueprint stage visuals"
            loading="lazy"
          />
        </div>
      </section>

      <ContactSection />
    </div>
  )
}
