import type { ReactElement } from 'react'
import type { ProjectStory } from '../types'
import { mutedClass } from '../utils/constants'

export const StorySection = ({ story }: { story: ProjectStory }) => (
  <article className="flex flex-col gap-16 pt-2 lg:gap-20">
    <div className="flex flex-col gap-12">
      {story.sections.flatMap((block) => {
        const items: ReactElement[] = []

        if (story.id === 'blueprint' && block.title === 'Looking back') {
          items.push(
            <figure key="blueprint-win-image" className="flex flex-col gap-3">
              <img
                className="w-full rounded-[6px] border border-border object-cover"
                src="/CommerceNightWin.JPG"
                alt="Winning Conference of the Year!"
                loading="lazy"
              />
              <figcaption className={`${mutedClass} text-[14px] text-center`}>
                Winning Conference of the Year!
              </figcaption>
            </figure>,
          )
        }

        items.push(
          <div
            key={block.title}
            className="grid grid-cols-1 gap-6 rounded-[6px] border border-border bg-white px-6 py-7 shadow-soft md:grid-cols-12"
          >
            <div className="md:col-span-4 lg:col-span-3">
              <h3 className="text-[22px] leading-[1.2] text-primary">{block.title}</h3>
            </div>
            <div className="md:col-span-8 lg:col-span-8 md:col-start-5 lg:col-start-5 flex flex-col gap-4">
              {block.quote ? (
                <blockquote className="relative pl-5 font-body italic text-primary">
                  <span className="absolute left-0 top-0 h-full w-[3px] rounded-full bg-[#e7e8f2]" aria-hidden="true" />
                  {block.quote}
                </blockquote>
              ) : null}
              {block.text ? <p className={`${mutedClass} text-[16px] leading-[1.7]`}>{block.text}</p> : null}
              {block.bullets ? (
                <ul className="grid list-disc gap-2 pl-5">
                  {block.bullets.map((item) => (
                    <li key={item} className="font-body text-[15px] text-primary">
                      {item}
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          </div>,
        )

        return items
      })}
    </div>

    {story.gallery ? (
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {story.gallery.map((image) => (
          <figure key={image.src} className="flex flex-col gap-3">
            <img
              className="w-full rounded-[6px] border border-border object-cover shadow-soft"
              src={image.src}
              alt={image.alt}
              loading="lazy"
            />
            <figcaption className={`${mutedClass} text-[14px]`}>{image.alt}</figcaption>
          </figure>
        ))}
      </div>
    ) : null}

    {story.closing ? <p className="text-center font-body text-[16px] font-semibold text-primary">{story.closing}</p> : null}
  </article>
)
