import { Link } from 'react-router-dom'
import type { ExperienceItem } from '../types'

type TimelineSectionProps = {
  className?: string
  items: ExperienceItem[]
  showTimeline?: boolean
  title: string
}

export const TimelineSection = ({ className = '', items, showTimeline = true, title }: TimelineSectionProps) => (
  <section className={`flex flex-col gap-5 ${className}`}>
    <div className="flex flex-col gap-2">
      <h2 className="font-display text-[30px] text-title">{title}</h2>
      <div className="h-[1px] w-full bg-[#d8d6ea]" />
    </div>
    <div className="relative flex flex-col">
      {showTimeline ? (
        <span className="absolute bottom-1 left-[7px] top-1 w-px bg-[#d8d6ea]" aria-hidden="true" />
      ) : null}
      {items.map((item, index) => {
        const company = item.company ?? item.role.split('@')[1]?.trim() ?? ''
        const roleText = item.role.split('@')[0]?.trim() || item.role
        const [role, ...contextParts] = roleText.split('|')
        const roleContext = contextParts.join('|').trim()
        const content = (
          <article
            className={`group relative grid items-start gap-x-3 py-3.5 animate-fade-in-up md:items-center ${
              showTimeline
                ? 'grid-cols-[16px_6px_minmax(0,1fr)] md:grid-cols-[16px_6px_minmax(0,1fr)_auto]'
                : 'grid-cols-[34px_minmax(0,1fr)] md:grid-cols-[34px_minmax(0,1fr)_auto]'
            }`}
            style={{ animationDelay: `${150 + index * 40}ms` }}
          >
            <span
              className={`absolute inset-y-1 right-0 rounded-[6px] bg-transparent transition-colors duration-200 group-hover:bg-[#f4f2fa] group-focus-within:bg-[#f4f2fa] ${showTimeline ? 'left-6' : 'left-0'}`}
              aria-hidden="true"
            />
            {showTimeline ? (
              <div className="relative flex justify-center pt-[2px]">
                <span className="bg-white text-[16px] leading-none text-[#65638f]" aria-hidden="true">✦</span>
              </div>
            ) : null}
            <div
              className={`relative flex h-8 items-center justify-center self-center ${showTimeline ? 'w-[6px]' : 'w-[34px]'}`}
              aria-hidden="true"
            >
              {item.logo ? <img className="max-h-6 max-w-8 object-contain" src={item.logo} alt="" /> : null}
            </div>
            <div className="relative flex min-w-0 flex-col gap-0.5 px-2">
              <span className="font-geist text-[11px] font-medium uppercase tracking-[0.09em] text-muted">
                {company || 'Independent'}
              </span>
              <span className="font-geist text-[16px] font-medium tracking-[-0.01em] text-primary">
                {role.trim()}
                {roleContext ? <span className="text-muted"> | {roleContext}</span> : null}
              </span>
            </div>
            <div
              className={`relative mt-1 flex items-center justify-self-end gap-2 px-2 md:mt-0 ${
                showTimeline ? 'col-start-3 md:col-start-4' : 'col-start-2 md:col-start-3'
              }`}
            >
              <span className="whitespace-nowrap text-right font-geist text-[12px] text-muted">{item.dates}</span>
              {item.link ? (
                <span className="text-[13px] text-[#65638f] transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true">
                  ↗
                </span>
              ) : null}
            </div>
          </article>
        )
        const linkClassName =
          'block rounded-[6px] outline-none focus-visible:ring-2 focus-visible:ring-[#65638f] focus-visible:ring-offset-2'

        if (item.link?.startsWith('/')) {
          return (
            <Link className={linkClassName} key={item.role} to={item.link}>
              {content}
            </Link>
          )
        }

        return item.link ? (
          <a className={linkClassName} href={item.link} key={item.role} target="_blank" rel="noreferrer">
            {content}
          </a>
        ) : (
          <div key={item.role}>{content}</div>
        )
      })}
    </div>
  </section>
)
