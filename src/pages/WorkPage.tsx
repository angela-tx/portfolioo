import { allProjects } from '../data'
import { overlineClass, mutedClass } from '../utils/constants'
import { ProjectCard } from '../components/ProjectCard'
import { ContactSection } from '../components/ContactSection'

export const WorkPage = () => (
  <div className="flex flex-col gap-[72px]">
    <section className="flex flex-col gap-5">
      <h1
        className="max-w-[760px] font-display text-[clamp(34px,4vw,48px)] font-normal leading-[1.05] text-primary animate-fade-in-up"
        style={{ animationDelay: '40ms' }}
      >
        work & project portfolio
      </h1>
      <p
        className={`${mutedClass} max-w-[720px] animate-fade-in-up`}
        style={{ animationDelay: '80ms' }}
      >
        A collection of select projects, reflections, and case studies ^_^
      </p>
    </section>
    <section className="flex flex-col gap-6">
      <p className={overlineClass}>all projects</p>
      <div className="grid w-full grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-5">
        {allProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>

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
