import type { ProjectStory } from '../types'
import { overlineClass, mutedClass } from '../utils/constants'

export const StorySection = ({ story }: { story: ProjectStory }) => (
  <article className="flex flex-col gap-[18px] pt-2">
    <div className="flex flex-col gap-2">
      <div className="inline-flex items-center rounded-[6px] bg-accent-soft px-[10px] py-[6px] text-[12px] font-bold tracking-[0.08em] text-primary">
        {story.badge}
      </div>
      <div className="flex flex-col gap-2">
        <p className={overlineClass}>{story.title}</p>
        <h3 className="text-[34px]">{story.headline}</h3>
        <p className={`${mutedClass} mt-1`}>{story.summary}</p>
      </div>
    </div>

    <div>
      <img
        className="w-full rounded-lg border border-border object-cover"
        src={story.hero}
        alt={`${story.title} hero`}
        loading="lazy"
      />
    </div>

    <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-[10px] border-y border-border py-3">
      <div>
        <p className="mb-1 font-body text-[11px] uppercase tracking-[0.08em] text-muted">Role</p>
        <p className="font-body text-[16px] font-semibold text-primary">{story.meta.role}</p>
      </div>
      <div>
        <p className="mb-1 font-body text-[11px] uppercase tracking-[0.08em] text-muted">Tools</p>
        <p className="font-body text-[16px] font-semibold text-primary">{story.meta.tools}</p>
      </div>
      <div>
        <p className="mb-1 font-body text-[11px] uppercase tracking-[0.08em] text-muted">Links</p>
        <div className="flex flex-wrap gap-2">
          {story.meta.links.map((link) => (
            <a key={link.url} className="font-body text-[15px] font-medium text-muted hover:text-accent" href={link.url} target="_blank" rel="noreferrer">
              {link.label}
            </a>
          ))}
        </div>
      </div>
      <div>
        <p className="mb-1 font-body text-[11px] uppercase tracking-[0.08em] text-muted">Year</p>
        <p className="font-body text-[16px] font-semibold text-primary">{story.meta.year}</p>
      </div>
    </div>

    <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-4">
      {story.sections.map((block) => (
        <div key={block.title} className="flex flex-col gap-2">
          <h4 className="text-[18px]">{block.title}</h4>
          {block.quote ? (
            <blockquote className="border-l-4 border-accent pl-3 font-display italic text-primary">{block.quote}</blockquote>
          ) : null}
          {block.text ? <p className={mutedClass}>{block.text}</p> : null}
          {block.bullets ? (
            <ul className="grid list-disc gap-2 pl-4">
              {block.bullets.map((item) => (
                <li key={item} className="font-body text-primary">
                  {item}
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      ))}
    </div>

    {story.gallery ? (
      <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-[10px]">
        {story.gallery.map((image) => (
          <figure key={image.src} className="flex flex-col gap-2">
            <img
              className="w-full rounded-lg border border-border object-cover"
              src={image.src}
              alt={image.alt}
              loading="lazy"
            />
            <figcaption className={mutedClass}>{image.alt}</figcaption>
          </figure>
        ))}
      </div>
    ) : null}

    {story.closing ? <p className="text-center font-body font-bold text-primary">{story.closing}</p> : null}
  </article>
)
