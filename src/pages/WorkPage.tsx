import { allProjects } from '../data'
import { overlineClass, mutedClass } from '../utils/constants'
import { ProjectCard } from '../components/ProjectCard'
import { ContactSection } from '../components/ContactSection'

export const WorkPage = () => (
  <div className="flex flex-col gap-[72px]">
    <section className="flex flex-col gap-5">
      <h1
        className="max-w-[760px] text-[clamp(44px,5.5vw,66px)] leading-[1.05] animate-fade-in-up"
        style={{ animationDelay: '40ms' }}
      >
        work & project portfolio
      </h1>
      <p
        className={`${mutedClass} max-w-[720px] animate-fade-in-up`}
        style={{ animationDelay: '80ms' }}
      >
        Thanks for being here and building with me ^_^
      </p>
    </section>
    <section className="flex flex-col gap-6">
      <p className={overlineClass}>all projects</p>
      <div className="grid w-full grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-5">
        {allProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>

    <ContactSection />
  </div>
)
