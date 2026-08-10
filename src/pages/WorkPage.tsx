import { useState } from 'react'
import { allProjects } from '../data'
import { overlineClass, mutedClass } from '../utils/constants'
import { ProjectCard } from '../components/ProjectCard'
import { ContactSection } from '../components/ContactSection'
import type { FeaturedProject } from '../types'

type ProjectFilter = 'All' | FeaturedProject['category']

const projectFilters: ProjectFilter[] = ['All', 'Marketing', 'Product', 'Work']

export const WorkPage = () => {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>('All')
  const visibleProjects =
    activeFilter === 'All'
      ? allProjects
      : allProjects.filter((project) => project.category === activeFilter)

  return (
    <div className="flex flex-col gap-[72px]">
      <section className="flex flex-col gap-5">
        <h1
          className="max-w-[760px] text-[clamp(44px,5.5vw,66px)] leading-[1.05] animate-fade-in-up"
          style={{ animationDelay: '40ms' }}
        >
          project portfolio
        </h1>
        <p
          className={`${mutedClass} max-w-[720px] animate-fade-in-up`}
          style={{ animationDelay: '80ms' }}
        >
          Thanks for being here and building with me ^_^
        </p>
      </section>
      <section className="flex flex-col gap-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className={overlineClass}>projects</p>
          <div className="flex flex-wrap justify-end gap-2" role="list" aria-label="Filter projects by category">
            {projectFilters.map((filter) => {
              const isActive = activeFilter === filter
              return (
                <button
                  key={filter}
                  className={`rounded-sm border px-2.5 py-1 font-geist text-[11px] font-medium uppercase tracking-[0.08em] transition-colors duration-200 ${
                    isActive
                      ? 'border-[rgb(143,128,173)] bg-[rgba(143,128,173,0.12)] text-[rgb(116,99,150)]'
                      : 'border-border bg-white text-muted hover:border-[rgba(143,128,173,0.45)] hover:text-[rgb(116,99,150)]'
                  }`}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setActiveFilter(filter)}
                >
                  {filter}
                </button>
              )
            })}
          </div>
        </div>
        <div
          key={activeFilter}
          className="grid w-full grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-5 animate-fade-in-up"
        >
          {visibleProjects.map((project) => (
            <ProjectCard key={project.id} project={project} animate={false} />
          ))}
        </div>
      </section>

      <ContactSection />
    </div>
  )
}
