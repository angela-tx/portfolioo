import { Link } from 'react-router-dom'
import { featuredProjects, experiences, funGallery, leadership } from '../data'
import { projectCardContent } from '../data/projectCardContent'
import { ProjectCard } from '../components/ProjectCard'
import { ContactSection } from '../components/ContactSection'
import { HomeCursorTrail } from '../components/HomeCursorTrail'
import { TimelineSection } from '../components/TimelineSection'

export const HomePage = () => (
  <div className="flex flex-col gap-12">
    <HomeCursorTrail />
    <section className="grid gap-5 pt-2">
      <div className="grid w-full items-start gap-7 md:grid-cols-[minmax(0,1fr)_202px] lg:grid-cols-[minmax(0,1fr)_220px]">
        <div>
          <h1
            className="mt-1 text-[clamp(64px,8vw,96px)] text-title leading-[1.05] animate-fade-in-up"
            style={{ animationDelay: '40ms' }}
          >
            Angela Huang
          </h1>
          <div className="mt-5 flex flex-col gap-4 text-[17px] font-geist tracking-[-0.02em] leading-[1.6]">
            <p className="text-primary animate-fade-in-up" style={{ animationDelay: '120ms' }}>
              I’m a storyteller who loves turning ideas into products people enjoy.
              <span className="block">Outside of work, you can find me on a mountain or in the dance studio ٩(ᵔᴗᵔ )و</span>
            </p>
            <p className="text-primary animate-fade-in-up" style={{ animationDelay: '160ms' }}>
              <a
                className="font-body text-primary hover:text-[#65638f] italic underline-offset-4"
                href="https://globalnews.ca/video/11648924/ubc-biztechs-2026-blueprint-conference"
                target="_blank"
                rel="noreferrer"
              >
                Check out my interview on Global News!
              </a>
            </p>
          </div>
        </div>
        <div
          className="mt-1 w-fit justify-self-end rotate-[2deg] shadow-[0_12px_28px_rgba(35,57,93,0.12)] animate-fade-in-up"
          style={{ animationDelay: '80ms' }}
        >
          <img
            className="h-[202px] w-[152px] object-cover object-center md:h-[248px] md:w-[188px] lg:h-[274px] lg:w-[208px]"
            src="/angela-pic.JPG"
            alt="Angela Huang"
            width="750"
            height="1000"
            draggable={false}
            onContextMenu={(event) => event.preventDefault()}
          />
        </div>
      </div>
    </section>

    <TimelineSection items={experiences} showTimeline={false} title="experience" />

    <section className="flex flex-col gap-6">
      <div className="flex flex-col gap-1">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h2 className="text-[30px]">featured projects</h2>
          </div>
          <Link className="font-body text-primary underline-offset-4 hover:text-accent" to="/work">
            view all
          </Link>
        </div>
        <div className="home-divider-blue relative h-[1px] w-full flex-none overflow-hidden" />
      </div>
      <div className="grid w-full grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-5">
        {featuredProjects.slice(0, 2).map((project) => {
          const cardContent = projectCardContent[project.id]

          return (
            <ProjectCard
              key={project.id}
              project={project}
              displayTitle={cardContent.title}
              supportingLine={cardContent.accolade}
              supportingIcon={cardContent.icon}
              projectMetadataSupportingStyle
              showCategory={false}
              showDescription={false}
            />
          )
        })}
      </div>
    </section>

    <TimelineSection items={leadership} title="leadership" />

    <section className="flex flex-col gap-2">
      <div className="flex flex-col gap-1">
        <div className="flex flex-wrap items-center gap-3">
          <div>
            <h2 className="text-[30px]">more fun stuff I've been a part of:</h2>
          </div>
        </div>
        <div className="home-divider-lavender relative h-[1px] w-full flex-none overflow-hidden" />
      </div>
      <div className="group relative flex overflow-hidden pt-6 pb-10" style={{ containerType: 'inline-size' }}>
        {[0, 1].map((copyIdx) => (
          <div
            key={copyIdx}
            className="flex shrink-0 animate-marquee gap-8 pl-8"
            aria-hidden={copyIdx === 1}
          >
            {funGallery.map((item, index) => {
              const rotationClass = index % 2 === 0 ? '-rotate-[2deg] hover:rotate-0' : 'rotate-[2deg] hover:rotate-0'

              const content = (
                <div className={`flex h-full flex-col bg-white p-[10px] pb-[14px] shadow-xl transition-transform duration-300 ease-out hover:scale-[1.03] hover:z-20 ${rotationClass}`}>
                  <img className="aspect-square w-full object-cover" src={item.image} alt={item.title} loading="lazy" />
                  <div className="mt-2 flex flex-grow items-center justify-center text-center">
                    <p className="font-body text-[14px] font-medium text-primary">{item.title}</p>
                  </div>
                </div>
              )

              const isInternal = item.link?.startsWith('/')
              const itemStyle = { width: 'calc((100cqi - 64px) / 3)' }

              if (isInternal) {
                return (
                  <Link
                    key={item.title}
                    style={itemStyle}
                    className="relative block shrink-0 z-0 hover:z-20"
                    to={item.link!}
                  >
                    {content}
                  </Link>
                )
              } else if (item.link) {
                return (
                  <a
                    key={item.title}
                    style={itemStyle}
                    className="relative block shrink-0 z-0 hover:z-20"
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {content}
                  </a>
                )
              } else {
                return (
                  <div key={item.title} style={itemStyle} className="relative block shrink-0 z-0 hover:z-20">
                    {content}
                  </div>
                )
              }
            })}
          </div>
        ))}
      </div>
    </section>

    <div>
      <ContactSection />
    </div>
  </div>
)
