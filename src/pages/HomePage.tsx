import { Link } from 'react-router-dom'
import { featuredProjects, experiences, funGallery } from '../data'
import { mutedClass } from '../utils/constants'
import { ProjectCard } from '../components/ProjectCard'
import { ContactSection } from '../components/ContactSection'

export const HomePage = () => (
  <div className="flex flex-col gap-[72px]">
    <section className="grid gap-5 pt-2">
      <div className="max-w-[760px]">
        <h1
          className="mb-2 mt-1 font-display text-[clamp(40px,5vw,66px)] font-normal leading-[1.05] tracking-[-0.04em] text-primary animate-fade-in-up"
          style={{ animationDelay: '40ms' }}
        >
          Angela Huang
        </h1>
        <p
          className="font-display text-[15px] uppercase tracking-[0.08em] text-muted animate-fade-in-up"
          style={{ animationDelay: '80ms' }}
        >
          ✧ Product, marketing, and community impact
        </p>
        <p
          className={`${mutedClass} mt-3 max-w-[860px] text-[18px] text-primary animate-fade-in-up`}
          style={{ animationDelay: '120ms' }}
        >
          Hi! I’m currently a Marketing Tranformation Intern @ Hootsuite, where I get to manage projects, optimize marketing channels and make my teammates&apos; lives easier. Professional world aside, I&apos;m also a competitive dancer (´｡• ◡ •｡`)
        </p>
        <p
          className={`${mutedClass} mt-3 animate-fade-in-up`}
          style={{ animationDelay: '160ms' }}
        >
          Check out my conference interview:{' '}
          <a
            className="font-semibold text-accent hover:text-[#5b50b5]"
            href="https://globalnews.ca/video/11648924/ubc-biztechs-2026-blueprint-conference"
            target="_blank"
            rel="noreferrer"
          >
            Global News
          </a>
        </p>
      </div>
    </section>

    <section className="flex flex-col gap-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="font-display text-[30px] font-normal text-primary">Featured Projects</h2>
        </div>
        <Link className="font-body font-semibold text-primary underline-offset-4 hover:text-accent" to="/work">
          View all
        </Link>
      </div>
      <div className="grid w-full grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-5">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>

    <section className="flex flex-col gap-6">
      <div>
        <h2 className="font-display text-[30px] font-normal text-primary">Experience</h2>
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-4">
        {experiences.map((item) => (
          <div
            key={item.role}
            className="flex flex-col gap-2 rounded-[8px] border border-[rgba(116,99,150,0.12)] bg-white p-[18px] shadow-soft animate-fade-in-up"
          >
            <div className="inline-flex w-fit items-center rounded-[6px] bg-accent-soft px-[10px] py-[6px] text-[12px] font-bold tracking-[0.08em] text-primary">
              {item.dates}
            </div>
            <h3 className="text-[18px] font-normal text-primary font-display">{item.role}</h3>
            <p className={mutedClass}>{item.detail}</p>
          </div>
        ))}
      </div>
    </section>

    <section className="flex flex-col gap-6">
      <div className="flex flex-wrap items-center gap-3">
        <div>
          <h2 className="font-display text-[30px] font-normal text-primary">more fun stuff I've been a part of:</h2>
        </div>
      </div>
      <div className="group relative flex overflow-hidden py-10" style={{ containerType: 'inline-size' }}>
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
                    <p className="font-body text-[14px] font-medium text-[#746396]">{item.title}</p>
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

    <ContactSection />
  </div>
)
