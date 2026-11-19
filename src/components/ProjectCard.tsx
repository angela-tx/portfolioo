import { Link } from 'react-router-dom'
import type { FeaturedProject } from '../types'
import { mutedClass } from '../utils/constants'

const categoryClass: Record<FeaturedProject['category'], string> = {
  Leadership: 'border-pink-200 bg-pink-100 text-pink-700',
  Product: 'border-sky-200 bg-sky-100 text-sky-700',
  Marketing: 'border-emerald-200 bg-emerald-100 text-emerald-700',
  Work: 'border-pink-200 bg-pink-100 text-pink-700',
}

type ProjectCardProps = {
  project: FeaturedProject
  animate?: boolean
  displayTitle?: string
  supportingLine?: string
  supportingIcon?: 'trophy' | 'folder' | 'suitcase'
  projectMetadataSupportingStyle?: boolean
  showCategory?: boolean
  showDescription?: boolean
}

const SupportingIcon = ({
  type,
  projectMetadataStyle,
}: {
  type: 'trophy' | 'folder' | 'suitcase'
  projectMetadataStyle: boolean
}) => {
  const path = {
    trophy: 'M6 9H4.5a2.5 2.5 0 0 1 0-5H6M18 9h1.5a2.5 2.5 0 0 0 0-5H18M4 22h16M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22M18 2H6v7a6 6 0 0 0 12 0V2Z',
    folder: 'M3 6.5h6l2 2h10v9.5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6.5Zm0 0V6a2 2 0 0 1 2-2h4l2 2.5',
    suitcase: 'M9 6V4.5A1.5 1.5 0 0 1 10.5 3h3A1.5 1.5 0 0 1 15 4.5V6M4 6h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Zm-2 6h20M9.5 12v2h5v-2',
  }[type]

  return (
    <svg
      className={projectMetadataStyle ? 'h-[14px] w-[14px] shrink-0' : 'mt-[3px] h-3.5 w-3.5 shrink-0'}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path d={path} stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export const ProjectCard = ({
  project,
  animate = true,
  displayTitle = project.title,
  supportingLine,
  supportingIcon = 'trophy',
  projectMetadataSupportingStyle = false,
  showCategory = true,
  showDescription = true,
}: ProjectCardProps) => (
  <Link
    className={`group flex flex-col gap-3 transition-all duration-300 ease-out ${animate ? 'animate-fade-in-up' : ''}`}
    to={`/work/${project.id}`}
    aria-label={`Open ${displayTitle}`}
  >
    <div className="relative overflow-hidden rounded-none">
      {project.image.toLowerCase().endsWith('.webm') ? (
        <video
          className="h-[240px] w-full object-cover transition-all duration-300 group-hover:opacity-85"
          src={project.image}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          aria-label={displayTitle}
        />
      ) : (
        <img
          className="h-[240px] w-full object-cover transition-all duration-300 group-hover:opacity-85"
          src={project.image}
          alt={displayTitle}
          loading="lazy"
        />
      )}
    </div>
    <div className="px-1 pb-4">
      <div className="flex items-start justify-between transition-colors duration-300 group-hover:text-[#65638f]">
        <h3 className="mb-[6px] mt-[2px] text-[18px] font-geist text-primary transition-colors duration-300 group-hover:text-[#65638f]">
          {displayTitle}
        </h3>
      </div>
      {supportingLine ? (
        <p
          className={
            projectMetadataSupportingStyle
              ? 'inline-flex items-center gap-2 font-body text-[12px] uppercase tracking-[0.08em] text-muted'
              : `${mutedClass} flex items-start gap-1.5 text-[13px]`
          }
        >
          <SupportingIcon type={supportingIcon} projectMetadataStyle={projectMetadataSupportingStyle} />
          <span>{supportingLine}</span>
        </p>
      ) : showDescription ? (
        <p className={`${mutedClass} text-[13px]`}>{project.description}</p>
      ) : null}
      {showCategory ? (
        <span className={`mt-2 inline-flex w-fit rounded-sm border px-2 py-0.5 font-geist text-[9px] font-medium uppercase tracking-[0.08em] shadow-sm ${categoryClass[project.category]}`}>
          {project.category}
        </span>
      ) : null}
    </div>
  </Link>
)
