import { allProjects } from '../data'
import { projectCardContent } from '../data/projectCardContent'
import { overlineClass } from '../utils/constants'
import { ProjectCard } from '../components/ProjectCard'
import { ContactSection } from '../components/ContactSection'

export const WorkPage = () => {
  return (
    <div className="min-w-0 flex flex-col gap-[72px]">
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
      <section className="min-w-0 flex flex-col gap-6">
        <p className={overlineClass}>projects</p>
        <div className="grid min-w-0 w-full grid-cols-1 gap-5 animate-fade-in-up sm:grid-cols-2">
          {allProjects.map((project) => {
            const cardContent = projectCardContent[project.id]

            return (
              <div key={project.id} className="min-w-0">
                <ProjectCard
                  project={project}
                  animate={false}
                  displayTitle={cardContent.title}
                  supportingLine={cardContent.accolade}
                  supportingIcon={cardContent.icon}
                  projectMetadataSupportingStyle
                  showCategory={false}
                  showDescription={false}
                />
              </div>
            )
          })}
        </div>
      </section>

      <ContactSection />
    </div>
  )
}
