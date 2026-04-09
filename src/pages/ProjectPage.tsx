import { useEffect, useRef, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { projectStories } from '../data'
import { StorySection } from '../components/StorySection'
import { ContactSection } from '../components/ContactSection'

export const ProjectPage = () => {
  const { slug } = useParams()
  const story = projectStories.find((item) => item.id === slug)
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [duration, setDuration] = useState(0)

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

  useEffect(() => {
    // reset video when navigating between projects
    if (videoRef.current) {
      videoRef.current.pause()
      videoRef.current.currentTime = 0
    }
    setIsPlaying(false)
    setProgress(0)
    setDuration(0)
  }, [story?.id])

  if (!story) {
    return <Navigate to="/work" replace />
  }

  const currentIndex = projectStories.findIndex((p) => p.id === story.id)
  const prev = projectStories[currentIndex - 1]
  const next = projectStories[currentIndex + 1]
  const isBlueprint = story.id === 'blueprint'
  const heroWrapperClass = isBlueprint
    ? 'overflow-hidden rounded-[6px]'
    : 'overflow-hidden rounded-[6px] border border-border bg-white shadow-soft'

  const handleVideoToggle = () => {
    if (!videoRef.current) return
    if (videoRef.current.paused) {
      videoRef.current.play()
      setIsPlaying(true)
    } else {
      videoRef.current.pause()
      setIsPlaying(false)
    }
  }

  const handleVideoEnded = () => setIsPlaying(false)
  const handleLoadedMetadata = () => {
    if (videoRef.current?.duration) {
      setDuration(videoRef.current.duration)
    }
  }

  const handleTimeUpdate = () => {
    if (videoRef.current && duration) {
      setProgress(videoRef.current.currentTime / duration)
    }
  }

  const handleSeek = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!videoRef.current || !duration) return
    const rect = event.currentTarget.getBoundingClientRect()
    const ratio = Math.min(Math.max((event.clientX - rect.left) / rect.width, 0), 1)
    videoRef.current.currentTime = ratio * duration
    setProgress(ratio)
  }

  const handleWheelSeek = (event: React.WheelEvent<HTMLVideoElement>) => {
    if (!videoRef.current || !duration) return
    const deltaSeconds = event.deltaY > 0 ? -5 : 5
    const newTime = Math.min(Math.max(videoRef.current.currentTime + deltaSeconds, 0), duration)
    videoRef.current.currentTime = newTime
    setProgress(newTime / duration)
  }

  return (
    <div className="flex flex-col gap-12">
      <div className="flex flex-col gap-8">
        <div className="flex flex-wrap items-center justify-between gap-3 text-[12px] uppercase tracking-[0.12em] text-muted">
          <div className="flex flex-wrap items-center gap-3">
            <Link className="font-body text-primary no-underline hover:text-accent" to="/work">
              all projects
            </Link>
            <span className="text-primary">/</span>
            <span className="font-body text-primary">{story.navTitle}</span>
          </div>
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
            {story.id === 'banana-art-lab'
              ? 'stream winner - flui design competition 2025'
              : story.id === 'encore'
              ? 'stream winner - stormhacks 2025'
              : story.id === 'blueprint'
              ? 'top conference - sauder cus 2026'
              : ''}
          </span>
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
            <span className="font-body text-[11px] uppercase tracking-[0.12em] text-muted">Skills</span>
            <span className="whitespace-pre-line font-body text-[16px] text-primary">
              {story.id === 'blueprint'
                ? 'Leadership\nProject management\nRoadmap alignment'
                : story.id === 'safespace'
                ? 'Product design\nFeature scoping\nUser research'
                : story.id === 'encore'
                ? '0→1 product ideation\nPitching & storytelling\nUser journey mapping'
                : story.id === 'banana-art-lab'
                ? 'Brand positioning\nCommunication\nCompetitive analysis'
                : story.id === 'doomagotchi'
                ? 'Storytelling\nPrototyping\nProduct strategy'
                : 'placeholder'}
            </span>
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

      <div className={heroWrapperClass}>
        {isBlueprint ? (
          <>
            <div className="relative aspect-[16/9] w-full">
              <video
                ref={videoRef}
                className="h-full w-full cursor-pointer object-cover"
                src="/blueprint-closing.mp4"
              poster="/BluePrintStage.jpg"
              playsInline
              onClick={handleVideoToggle}
              onLoadedMetadata={handleLoadedMetadata}
              onTimeUpdate={handleTimeUpdate}
              onEnded={handleVideoEnded}
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
              <div className="pointer-events-auto absolute inset-x-0 bottom-0 flex w-full items-center gap-3 bg-white/65 px-4 py-2 opacity-0 transition-opacity duration-200 backdrop-blur-sm group-hover:opacity-100">
                <div className="flex items-center gap-3">
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
                      className="h-full rounded-full bg-[rgb(143,128,173)] transition-[width] duration-150"
                      style={{ width: `${Math.min(Math.max(progress, 0), 1) * 100}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="px-2 pt-2">
              <div
                className="relative h-2 w-full cursor-pointer overflow-hidden rounded-full bg-[rgba(12,10,29,0.12)]"
                onClick={handleSeek}
                aria-label="Seek video"
              >
                <div
                  className="h-full rounded-full bg-[rgb(143,128,173)] transition-[width] duration-150"
                  style={{ width: `${Math.min(Math.max(progress, 0), 1) * 100}%` }}
                />
              </div>
            </div>
            <p className="px-2 pt-3 text-left text-[14px] text-muted">
              Conference recap video by Ali Hosseini with BizTech media
            </p>
          </>
        ) : (
          <img className="h-full w-full object-cover" src={story.hero} alt={`${story.headline} hero`} loading="lazy" />
        )}
      </div>

      <StorySection story={story} />

      <div className="flex flex-col gap-6 border-t border-border pt-8 lg:flex-row lg:items-center lg:justify-between">
        {prev ? (
          <Link
            to={`/work/${prev.id}`}
            className='group flex flex-col items-start gap-2 text-primary no-underline font-["Instrument Sans","Inter",system-ui,sans-serif]'
          >
            <span className='text-[11px] uppercase tracking-[0.14em] text-muted font-["Instrument Sans","Inter",system-ui,sans-serif]'>
              Previous
            </span>
            <span className='text-[18px] font-normal leading-tight font-["Instrument Sans","Inter",system-ui,sans-serif]'>
              {prev.navTitle}
            </span>
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link
            to={`/work/${next.id}`}
            className='group flex flex-col items-end gap-2 text-primary no-underline font-["Instrument Sans","Inter",system-ui,sans-serif]'
          >
            <span className='text-[11px] uppercase tracking-[0.14em] text-muted font-["Instrument Sans","Inter",system-ui,sans-serif]'>
              Next
            </span>
            <span className='text-[18px] font-normal leading-tight font-["Instrument Sans","Inter",system-ui,sans-serif]'>
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
