import { Link } from 'react-router-dom'
import type { FeaturedProject } from '../types'
import { mutedClass } from '../utils/constants'

const categoryClass: Record<FeaturedProject['category'], string> = {
  Leadership: 'border-pink-200 bg-pink-100 text-pink-700',
  Product: 'border-sky-200 bg-sky-100 text-sky-700',
  Marketing: 'border-emerald-200 bg-emerald-100 text-emerald-700',
}

export const ProjectCard = ({ project, animate = true }: { project: FeaturedProject; animate?: boolean }) => (
  <Link
    className={`group flex flex-col gap-3 transition-all duration-300 ease-out ${animate ? 'animate-fade-in-up' : ''}`}
    to={`/work/${project.id}`}
    aria-label={`Open ${project.title}`}
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
          aria-label={project.title}
        />
      ) : (
        <img
          className="h-[240px] w-full object-cover transition-all duration-300 group-hover:opacity-85"
          src={project.image}
          alt={project.title}
          loading="lazy"
        />
      )}
    </div>
    <div className="px-1 pb-4">
      <div className="flex items-center justify-between transition-colors duration-300 group-hover:text-[rgb(143,128,173)]">
        <h3 className="mb-[6px] mt-[2px] text-[18px] font-geist transition-colors duration-300 group-hover:text-[rgb(143,128,173)]">
          {project.title}
        </h3>
        <span className="opacity-0 transition-all duration-300 group-hover:opacity-100 shrink-0 -translate-y-[4px]">
          <svg 
            display="block" 
            role="presentation" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6"
          >
            <path 
              d="M 16.5 15.75 C 16.5 16.164 16.164 16.5 15.75 16.5 L 0.75 16.5 C 0.336 16.5 0 16.164 0 15.75 L 0 0.75 C 0 0.336 0.336 0 0.75 0 L 15.75 0 C 16.164 0 16.5 0.336 16.5 0.75 Z" 
              fill="transparent" 
              transform="translate(3.75 3.75)"
            />
            <path 
              d="M 16.5 15.75 C 16.5 16.164 16.164 16.5 15.75 16.5 L 0.75 16.5 C 0.336 16.5 0 16.164 0 15.75 L 0 0.75 C 0 0.336 0.336 0 0.75 0 L 15.75 0 C 16.164 0 16.5 0.336 16.5 0.75 Z" 
              fill="transparent" 
              stroke="currentColor" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="1.5" 
              transform="translate(3.75 3.75)"
            />
            <path 
              d="M 6 0 L 0 6" 
              fill="transparent" 
              stroke="currentColor" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="1.5" 
              transform="translate(9 9)"
            />
            <path 
              d="M 0 0 L 4.5 0 L 4.5 4.5" 
              fill="transparent" 
              stroke="currentColor" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="1.5" 
              transform="translate(10.5 9)"
            />
          </svg>
        </span>
      </div>
      <p className={`${mutedClass} text-[13px]`}>{project.description}</p>
      <span className={`mt-2 inline-flex w-fit rounded-sm border px-2 py-0.5 font-geist text-[9px] font-medium uppercase tracking-[0.08em] shadow-sm ${categoryClass[project.category]}`}>
        {project.category}
      </span>
    </div>
  </Link>
)
