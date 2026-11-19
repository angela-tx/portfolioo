import { useEffect, useRef, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { projectStories } from '../data'
import { projectCardContent } from '../data/projectCardContent'
import { StorySection } from '../components/StorySection'

export const ProjectPage = () => {
  const { slug } = useParams()
  const story = projectStories.find((item) => item.id === slug)
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (!slug) return
    const html = document.documentElement
    const body = document.body
    const previousHtmlBehavior = html.style.scrollBehavior
    const previousBodyBehavior = body.style.scrollBehavior

    html.style.scrollBehavior = 'auto'
    body.style.scrollBehavior = 'auto'
    window.scrollTo({ top: 0, left: 0 })

    // Restore whatever was set inline before this effect
    return () => {
      html.style.scrollBehavior = previousHtmlBehavior
      body.style.scrollBehavior = previousBodyBehavior
    }
  }, [slug])

  if (!story) {
    return <Navigate to="/work" replace />
  }

  const caseStudyTitle = projectCardContent[story.id]?.title ?? story.headline
  const isBlueprint = story.id === 'blueprint'
  const heroWrapperClass = isBlueprint
    ? 'overflow-hidden rounded-[6px]'
    : 'overflow-hidden rounded-[6px] border border-[#d8d6ea] bg-white shadow-soft'

  const handleVideoToggle = async () => {
    const video = videoRef.current
    if (!video) return

    if (video.paused || video.ended) {
      try {
        await video.play()
      } catch {
        setIsPlaying(false)
      }
    } else {
      video.pause()
    }
  }

  const handleLoadedMetadata = () => {
    const video = videoRef.current
    if (video && Number.isFinite(video.duration) && video.duration > 0) {
      setProgress(video.currentTime / video.duration)
    }
  }

  const handleTimeUpdate = () => {
    const video = videoRef.current
    if (video && Number.isFinite(video.duration) && video.duration > 0) {
      setProgress(video.currentTime / video.duration)
    }
  }

  const handleSeek = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const video = videoRef.current
    if (!video || !Number.isFinite(video.duration) || video.duration <= 0) return
    const rect = event.currentTarget.getBoundingClientRect()
    const ratio = Math.min(Math.max((event.clientX - rect.left) / rect.width, 0), 1)
    video.currentTime = ratio * video.duration
    setProgress(ratio)
  }

  const handleWheelSeek = (event: React.WheelEvent<HTMLVideoElement>) => {
    const video = videoRef.current
    if (!video || !Number.isFinite(video.duration) || video.duration <= 0) return
    const deltaSeconds = event.deltaY > 0 ? -5 : 5
    const newTime = Math.min(Math.max(video.currentTime + deltaSeconds, 0), video.duration)
    video.currentTime = newTime
    setProgress(newTime / video.duration)
  }

  const achievementLabel =
    story.id === 'banana-art-lab'
      ? 'stream winner - flui design competition'
      : story.id === 'encore'
      ? 'stream winner - stormhacks'
      : story.id === 'blueprint'
      ? 'top conference - sauder cus 2026'
      : story.id === 'marketing-association-membership-portal'
      ? 'top club - sauder cus 2026'
      : story.id === 'safespace'
      ? '1st place advanced & best pitch - UXathon'
      : ''

  const compactMetadata = (
    <div className="flex flex-wrap items-start gap-x-8 gap-y-4">
      <div className="flex shrink-0 flex-col gap-2">
        <span className="font-body text-[11px] uppercase tracking-[0.12em] text-muted">Year</span>
        <span className="font-body text-[16px] text-primary">{story.meta.year}</span>
      </div>
      <div className="flex flex-col gap-2">
        <span className="font-body text-[11px] uppercase tracking-[0.12em] text-muted">Links</span>
        <div className="flex flex-wrap items-center gap-2">
          {story.meta.links.map((link) => (
            <a
              key={link.url}
              className="group inline-flex min-h-[44px] items-start font-body text-[14px] text-primary focus-visible:outline-none"
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="inline-flex h-[26px] items-center justify-center gap-1 rounded-[6px] bg-[#f4f2fa] px-3 transition-colors duration-200 group-hover:bg-[#ebe8f5] group-focus-visible:ring-2 group-focus-visible:ring-[#65638f] group-focus-visible:ring-offset-2">
                {link.label}
                <span aria-hidden="true">↗</span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  )

  return (
    <div className="flex flex-col gap-12">
      <div className="flex flex-col gap-8">
        <div className="flex flex-wrap items-center justify-between gap-3 text-[12px] uppercase tracking-[0.12em] text-muted">
          <div className="flex flex-wrap items-center gap-3">
            <Link className="inline-flex items-center gap-2 font-body text-primary no-underline hover:text-accent" to="/work">
              <svg className="h-[14px] w-[14px]" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M19 12H5M11 18l-6-6 6-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              all projects
            </Link>
          </div>
          {achievementLabel ? (
            <span className="inline-flex items-center gap-2 font-body text-[12px] uppercase tracking-[0.12em] text-muted">
              <svg
                className="h-[14px] w-[14px]"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M4 22h16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {achievementLabel}
            </span>
          ) : null}
        </div>

        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <h1 className="max-w-[920px] text-[clamp(38px,5vw,68px)] leading-[1.05] text-title">{caseStudyTitle}</h1>
            {compactMetadata}
          </div>

          <div className="border-t border-[#d8d6ea] pt-6">
            <p className="max-w-[840px] font-body text-[17px] leading-[1.7] text-primary">{story.summary}</p>
          </div>
        </div>
      </div>

      <div className={heroWrapperClass}>
        {isBlueprint ? (
          <>
            <figure className="flex flex-col gap-3">
              <div className="relative aspect-[16/9] w-full group">
                <video
                  ref={videoRef}
                  key={story.id}
                  className="h-full w-full cursor-pointer object-cover"
                  src="/blueprint-closing.mp4"
                poster="/project-blueprint.webp"
                playsInline
                onClick={handleVideoToggle}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onLoadedMetadata={handleLoadedMetadata}
                onTimeUpdate={handleTimeUpdate}
                onEnded={() => setIsPlaying(false)}
                onWheel={handleWheelSeek}
              />
                {!isPlaying ? (
                  <button
                    type="button"
                    onClick={handleVideoToggle}
                    className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-black/65 text-white shadow-lg transition hover:bg-black/80"
                    aria-label="Play video"
                  >
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path d="M7 4.5L19 12L7 19.5V4.5Z" fill="currentColor" />
                    </svg>
                  </button>
                ) : null}
                <div className="pointer-events-auto absolute inset-x-0 bottom-12 flex w-full items-center gap-3 bg-white/45 px-4 py-2 opacity-0 transition-opacity duration-200 backdrop-blur-sm group-hover:opacity-100 group-focus-within:opacity-100">
                  <div className="flex items-center gap-3 w-full">
                    <button
                      type="button"
                      onClick={handleVideoToggle}
                      className="flex h-8 w-8 items-center justify-center rounded-full bg-[rgba(12,10,29,0.08)] text-primary transition hover:bg-[rgba(12,10,29,0.12)]"
                      aria-label={isPlaying ? 'Pause video' : 'Play video'}
                    >
                      {isPlaying ? (
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                          <path d="M7 5h3v14H7zM14 5h3v14h-3z" fill="currentColor" />
                        </svg>
                      ) : (
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                          <path d="M7 5l12 7-12 7V5z" fill="currentColor" />
                        </svg>
                      )}
                    </button>
                    <div
                      className="relative h-2 flex-1 cursor-pointer overflow-hidden rounded-full bg-[rgba(12,10,29,0.12)]"
                      onClick={handleSeek}
                      aria-label="Seek video"
                    >
                      <div
                        className="h-full rounded-full bg-[#65638f] transition-[width] duration-150"
                        style={{ width: `${Math.min(Math.max(progress, 0), 1) * 100}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <figcaption className="text-left text-[14px] text-primary">
                Conference recap video by Ali Hosseini with BizTech media
              </figcaption>
            </figure>
          </>
        ) : (
          <img className="h-full w-full object-cover" src={story.hero} alt={`${caseStudyTitle} hero`} loading="lazy" />
        )}
      </div>

      <StorySection story={story} />
    </div>
  )
}
