import { Link } from 'react-router-dom'
import { featuredProjects, experiences, funGallery } from '../data'
import { ProjectCard } from '../components/ProjectCard'
import { ContactSection } from '../components/ContactSection'

export const HomePage = () => (
  <div className="flex flex-col">
    <section className="grid gap-5 pt-2">
      <div className="max-w-[760px]">
        <h1
          className="mb-4 mt-1 text-[clamp(64px,8vw,96px)] text-[rgb(116,99,150)] leading-[1.05] animate-fade-in-up"
          style={{ animationDelay: '40ms' }}
        >
          Angela Huang
        </h1>
        <p
          className="text-[18px] text-[rgb(143,128,173)] animate-fade-in-up"
          style={{ animationDelay: '80ms' }}
        >
          ✧ Product, marketing, and community impact
        </p>
        <p
          className={`mt-9 max-w-[860px] text-[18px] font-geist tracking-[-0.02em] leading-[1.6] text-black animate-fade-in-up`}
          style={{ animationDelay: '120ms' }}
        >
          Hi! I’m currently a Marketing Tranformation Intern @ Hootsuite, where I get to research, innovate workflows and make my teammates&apos; lives easier. Professional world aside, I&apos;m also a competitive dancer (´｡• ◡ •｡`)
        </p>
        <p
          className="mt-6 font-geist text-[18px] tracking-[-0.02em] leading-[1.6] text-black animate-fade-in-up"
          style={{ animationDelay: '160ms' }}
        >
          Check out my conference interview:{' '}
          <a
            className="font-body text-black hover:text-[#5b50b5] italic underline-offset-4"
            href="https://globalnews.ca/video/11648924/ubc-biztechs-2026-blueprint-conference"
            target="_blank"
            rel="noreferrer"
          >
            Global News
          </a>
        </p>
      </div>
    </section>

    <section className="flex flex-col gap-6 mt-[72px]">
      <div className="flex flex-col gap-1">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h2 className="text-[30px]">featured projects</h2>
          </div>
          <Link className="font-body text-primary underline-offset-4 hover:text-accent" to="/work">
            view all
          </Link>
        </div>
        <div className="relative h-[1px] w-full flex-none overflow-hidden bg-[#9f80ff4d]" />
      </div>
      <div className="grid w-full grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-5">
        {featuredProjects.slice(0, 2).map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>

    <section className="flex flex-col gap-8 mt-6 mb-8">
      <div className="flex flex-col gap-2">
        <h2 className="font-display text-[30px] text-primary">experience</h2>
        <div className="h-[1px] w-full bg-[#E5E5E5]" />
      </div>
      <div className="overflow-hidden rounded-[8px] border border-[#e5e5e5]">
        {experiences.map((item, index) => (
          <div
            key={item.role}
            className="grid grid-cols-1 gap-1 px-4 py-3 animate-fade-in-up sm:grid-cols-[140px,1fr,120px] sm:items-center sm:gap-3"
            style={{ animationDelay: `${150 + index * 50}ms` }}
          >
            <p className="font-geist text-[14px] text-[#A1A1A1] whitespace-nowrap">{item.company ?? item.role.split('@')[1]?.trim() ?? ''}</p>
            {item.link ? (
              <a
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="w-fit no-underline font-geist text-[14px] tracking-tight text-[#333333] transition-colors duration-200 hover:text-[rgb(143,128,173)] whitespace-nowrap"
              >
                {item.role.split('@')[0]?.trim() || item.role}
              </a>
            ) : (
              <p className="font-geist text-[14px] tracking-tight text-[#333333] whitespace-nowrap">
                {item.role.split('@')[0]?.trim() || item.role}
              </p>
            )}
            <p className="font-geist text-[14px] text-[#A1A1A1] whitespace-nowrap text-right">{item.dates}</p>
            {index < experiences.length - 1 ? <div className="col-span-full h-[1px] bg-[#e5e5e5] sm:col-span-2" /> : null}
          </div>
        ))}
      </div>
    </section>

    <section className="flex flex-col gap-2 mt-4">
      <div className="flex flex-col gap-1">
        <div className="flex flex-wrap items-center gap-3">
          <div>
            <h2 className="text-[30px]">more fun stuff I've been a part of:</h2>
          </div>
        </div>
        <div className="relative h-[1px] w-full flex-none overflow-hidden bg-[#9f80ff4d]" />
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

    <div className="mt-[72px]">
      <ContactSection />
    </div>
  </div>
)
