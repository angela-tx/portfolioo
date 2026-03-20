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
    <div className="flex flex-col gap-8">
      <div className="flex items-center gap-2 font-body text-muted">
        <Link className="text-primary no-underline" to="/work">
          All Projects
        </Link>
        <span className="text-muted">/</span>
        <span>{story.navTitle}</span>
      </div>

      <StorySection story={story} />

      <div className="flex items-center justify-between -mt-6 mb-2">
        {prev ? (
          <Link to={`/work/${prev.id}`} className="font-body font-semibold text-primary underline-offset-4 hover:text-accent">
            ‹ {prev.navTitle}
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link to={`/work/${next.id}`} className="font-body font-semibold text-primary underline-offset-4 hover:text-accent">
            {next.navTitle} ›
          </Link>
        ) : (
          <span />
        )}
      </div>


      <ContactSection />
    </div>
  )
}
