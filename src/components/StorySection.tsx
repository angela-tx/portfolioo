import type { ProjectStory } from '../types'
import { overlineClass, mutedClass } from '../utils/constants'

export const StorySection = ({ story }: { story: ProjectStory }) => (
  <article className="flex flex-col gap-5 pt-2 lg:gap-6">
    <div className="flex flex-col gap-3">
      <p className={overlineClass}>{story.title}</p>
      <h3 className="text-[clamp(30px,3.5vw,44px)] leading-[1.08]">{story.headline}</h3>
      <p className={`${mutedClass} mt-1 max-w-[960px]`}>{story.summary}</p>
    </div>

    <div className="overflow-hidden rounded-[6px] border border-border shadow-soft">
      <img
        className="w-full object-cover"
        src={story.hero}
        alt={`${story.headline} hero`}
        loading="lazy"
      />
    </div>

    <div className="rounded-[6px] border border-border bg-surface px-5 py-6 shadow-soft font-instrument">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="mb-1 font-body text-[11px] uppercase tracking-[0.08em] text-muted">Role</p>
          <p className="text-[16px] font-normal text-primary">{story.meta.role}</p>
        </div>
        <div>
          <p className="mb-1 font-body text-[11px] uppercase tracking-[0.08em] text-muted">Tools</p>
          <p className="text-[16px] font-normal text-primary">{story.meta.tools}</p>
        </div>
        <div>
          <p className="mb-1 font-body text-[11px] uppercase tracking-[0.08em] text-muted">Links</p>
          <div className="flex flex-wrap gap-2">
            {story.meta.links.map((link) => (
              <a key={link.url} className="text-[15px] font-normal text-muted underline-offset-4 hover:text-accent" href={link.url} target="_blank" rel="noreferrer">
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <div>
          <p className="mb-1 font-body text-[11px] uppercase tracking-[0.08em] text-muted">Year</p>
          <p className="text-[16px] font-normal text-primary">{story.meta.year}</p>
        </div>
      </div>
    </div>

    <div className="flex flex-col gap-4">
      {story.sections.map((block) => (
        <div key={block.title} className="flex flex-col gap-3 rounded-[6px] border border-border bg-white px-5 py-6 shadow-soft">
          <h4 className="text-[19px] leading-[1.25]">{block.title}</h4>
          {block.quote ? (
            <blockquote className="border-l-4 border-accent pl-3 font-body italic text-primary">{block.quote}</blockquote>
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
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {story.gallery.map((image) => (
          <figure key={image.src} className="flex flex-col gap-2">
            <img
              className="w-full rounded-[6px] border border-border object-cover shadow-soft"
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
