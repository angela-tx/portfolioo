import { allProjects } from '../data'
import { projectCardContent } from '../data/projectCardContent'
import { overlineClass } from '../utils/constants'
import { ProjectCard } from '../components/ProjectCard'
import { ContactSection } from '../components/ContactSection'
import { HomeCursorTrail } from '../components/HomeCursorTrail'

export const WorkPage = () => {
  return (
    <div className="min-w-0 flex flex-col gap-[72px]">
      <HomeCursorTrail />
      <div className="flex flex-col gap-8">
        <section className="flex flex-col gap-5">
          <h1
            className="max-w-[760px] text-[clamp(44px,5.5vw,66px)] leading-[1.05] animate-fade-in-up"
            style={{ animationDelay: '40ms' }}
          >
            project portfolio
          </h1>
          <p
            className="max-w-[720px] font-body text-[15px] leading-[1.6] text-primary animate-fade-in-up sm:text-[17px]"
            style={{ animationDelay: '80ms' }}
          >
            Thanks for being here and building with me ^_^
          </p>
        </section>
        <section className="min-w-0 flex flex-col gap-6 border-t border-[#d8d6ea] pt-8">
          <p className={overlineClass}>projects</p>
          <div className="grid min-w-0 w-full grid-cols-2 gap-3 animate-fade-in-up sm:gap-5">
            {allProjects.map((project) => {
            const cardContent = projectCardContent[project.id]

            return (
              <div key={project.id} className="min-w-0">
                <ProjectCard
                  project={project}
                  animate={false}
                  compactOnMobile
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
      </div>

      <ContactSection />
    </div>
  )
}
