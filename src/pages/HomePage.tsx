import { Link } from 'react-router-dom'
import { featuredProjects, experiences, funGallery } from '../data'
import { projectCardContent } from '../data/projectCardContent'
import { ProjectCard } from '../components/ProjectCard'
import { ContactSection } from '../components/ContactSection'
import { HomeCursorTrail } from '../components/HomeCursorTrail'

export const HomePage = () => (
  <div className="flex flex-col">
    <HomeCursorTrail />
    <section className="grid gap-5 pt-2">
      <div className="w-full">
        <h1
          className="mt-1 text-[clamp(64px,8vw,96px)] text-title leading-[1.05] animate-fade-in-up"
          style={{ animationDelay: '40ms' }}
        >
          Angela Huang
        </h1>
        <div className="mt-5 flex flex-col gap-4 text-[17px] font-geist tracking-[-0.02em] leading-[1.6]">
          <p className="text-[#3f4d5f] animate-fade-in-up" style={{ animationDelay: '120ms' }}>
            I’m a storyteller who loves turning ideas into products people enjoy. Outside of work, you can find me on a mountain or in the dance studio ٩(ᵔᴗᵔ )و
          </p>
          <p className="text-[#3f4d5f] animate-fade-in-up" style={{ animationDelay: '160ms' }}>
            Check out my conference interview:{' '}
            <a
              className="font-body text-[#3f4d5f] hover:text-[#65638f] italic underline-offset-4"
              href="https://globalnews.ca/video/11648924/ubc-biztechs-2026-blueprint-conference"
              target="_blank"
              rel="noreferrer"
            >
              Global News
            </a>
          </p>
        </div>
      </div>
    </section>

    <section className="flex flex-col gap-6 mt-16">
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

    <section className="flex flex-col gap-5 mt-6 mb-10">
      <div className="flex flex-col gap-2">
        <h2 className="font-display text-[30px] text-title">experience</h2>
        <div className="h-[1px] w-full bg-[#d8d6ea]" />
      </div>
      <div className="relative flex flex-col">
        <span className="absolute bottom-4 left-[7px] top-4 w-px bg-[#d8d6ea]" aria-hidden="true" />
        {experiences.map((item, index) => {
          const company = item.company ?? item.role.split('@')[1]?.trim() ?? ''
          const title = item.role.split('@')[0]?.trim() || item.role

          const content = (
            <article
              className="group relative grid grid-cols-[16px_minmax(0,1fr)] items-start gap-x-3 py-3.5 animate-fade-in-up md:grid-cols-[16px_minmax(0,1fr)_auto] md:items-center"
              style={{ animationDelay: `${150 + index * 40}ms` }}
            >
              <span
                className="absolute inset-y-1 left-6 right-0 rounded-[6px] bg-transparent transition-colors duration-200 group-hover:bg-[#f4f2fa] group-focus-within:bg-[#f4f2fa]"
                aria-hidden="true"
              />
              <div className="relative flex justify-center pt-[2px]">
                <span className="bg-white text-[16px] leading-none text-[#65638f]" aria-hidden="true">✦</span>
              </div>
              <div className="relative flex min-w-0 flex-col gap-0.5 px-2">
                <span className="font-geist text-[11px] font-medium uppercase tracking-[0.09em] text-[#65638f]">
                  {company || 'Independent'}
                </span>
                <span className="font-geist text-[16px] font-medium tracking-[-0.01em] text-title">{title}</span>
              </div>
              <div className="relative col-start-2 mt-1 flex items-center gap-2 px-2 md:col-start-3 md:mt-0 md:justify-self-end">
                <span className="whitespace-nowrap font-geist text-[12px] text-[#718398]">{item.dates}</span>
                {item.link ? (
                  <span className="text-[13px] text-[#65638f] transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true">
                    ↗
                  </span>
                ) : null}
              </div>
            </article>
          )

          return item.link ? (
            <a
              href={item.link}
              target="_blank"
              rel="noreferrer"
              className="block rounded-[6px] outline-none focus-visible:ring-2 focus-visible:ring-[#65638f] focus-visible:ring-offset-2"
              key={item.role}
            >
              {content}
            </a>
          ) : (
            <div key={item.role}>{content}</div>
          )
        })}
      </div>
    </section>

    <section className="flex flex-col gap-2 mt-4">
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
                    <p className="font-body text-[14px] font-medium text-[#65638f]">{item.title}</p>
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

    <div className="mt-[72px]">
      <ContactSection />
    </div>
  </div>
)
