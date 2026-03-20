import { Link } from 'react-router-dom'
import type { FeaturedProject } from '../types'
import { mutedClass } from '../utils/constants'

export const ProjectCard = ({ project }: { project: FeaturedProject }) => (
  <Link
    className="group flex flex-col gap-3 overflow-hidden rounded-[6px] border border-[rgba(116,99,150,0.12)] bg-white transition duration-200 ease-out hover:-translate-y-1 hover:border-[rgba(116,99,150,0.24)] hover:shadow-[0_24px_60px_rgba(32,24,63,0.12)] hover:saturate-[1.02] animate-fade-in-up"
    to={`/work/${project.id}`}
    aria-label={`Open ${project.title}`}
  >
    <div className="relative overflow-hidden">
      <img className="h-[220px] w-full object-cover" src={project.image} alt={project.title} loading="lazy" />
    </div>
    <div className="px-4 pb-4">
      <h3 className="mt-[2px] mb-[6px] text-[21px] font-normal tracking-[-0.02em] text-primary font-display">
        {project.title}
      </h3>
      <p className={`${mutedClass} text-[14px]`}>{project.description}</p>
    </div>
  </Link>
)
