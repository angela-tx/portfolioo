import { useState } from 'react'
import { allProjects } from '../data'
import { overlineClass } from '../utils/constants'
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
      <section className="-mb-2 flex flex-col gap-5">
        <h1
          className="max-w-[760px] text-[clamp(44px,5.5vw,66px)] leading-[1.05] animate-fade-in-up"
          style={{ animationDelay: '40ms' }}
        >
          project portfolio
        </h1>
        <p
          className="max-w-[720px] font-body text-[17px] leading-[1.6] text-[#3f4d5f] animate-fade-in-up"
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
                      ? 'border-[#d8d6ea] bg-[#f4f2fa] text-[#65638f]'
                      : 'border-border bg-white text-muted hover:border-[#d8d6ea] hover:text-[#65638f]'
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
          className="grid w-full grid-cols-1 gap-5 animate-fade-in-up sm:grid-cols-2"
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
