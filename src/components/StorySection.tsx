import { useEffect, useState, type ReactElement } from 'react'
import type { ProjectStory } from '../types'
import { mutedClass } from '../utils/constants'

export const StorySection = ({ story }: { story: ProjectStory }) => {
  const [activeImage, setActiveImage] = useState<{ src: string; alt: string } | null>(null)
  const isSafespace = story.id === 'safespace'
  const isEncore = story.id === 'encore'
  const isBanana = story.id === 'banana-art-lab'
  const isDoom = story.id === 'doomagotchi'

  const safespaceLabels: Record<string, string> = {
    'The given prompt': 'the given prompt',
    'To further undertand the prompt, our team explored:': 'discovery',
    'Instead of asking: What did you accomplish today? It asks: Did you take time for your wellness goals today? to make recovery intentional':
      'solution',
    'What I learned when designing this product': 'takeaways',
  }

  const encoreLabels: Record<string, string> = {
    'Each of our team members have gone to the same concerts this summer, yet we didn’t realize until after.': 'problem',
    'Ticketing platforms currently optimize for sales, while social platforms optimize for post-event updates.': 'solution',
    'What I learned from my first time at SFU ◡̈': 'takeaways',
  }

  const bananaLabels: Record<string, string> = {
    'Pain points': 'problem',
    'We approached this as both a UX and positioning problem.': 'discovery',
    Impact: 'impact',
  }

  const doomLabels: Record<string, string> = {
    overview: 'overview',
  }


  const safespaceSteps = [
    'Tap phone on NFC journal sticker',
    'safespace launches',
    'Journaling UI appears',
    'Guided prompts + focus mode',
    'Time logged to monthly goal',
  ]

  const encoreSteps = [
    'Discover',
    'Signal Intent',
    'Connect & Share Information',
    'Coordinate',
    'Experience Together',
  ]

  useEffect(() => {
    if (!activeImage) return

    const originalOverflow = document.body.style.overflow
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setActiveImage(null)
    }

    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = originalOverflow
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [activeImage])

  const showJourney = isEncore || isSafespace
  const steps = isSafespace ? safespaceSteps : encoreSteps
  let journeyInserted = false
  let growthInserted = false
  const galleryAspectClass =
    story.id === 'encore' ||
    story.id === 'safespace' ||
    story.id === 'blueprint' ||
    story.id === 'banana-art-lab' ||
    story.id === 'doomagotchi'
      ? 'aspect-[16/9]'
      : ''

  const renderJourney = () => (
    <div className="flex flex-col gap-3 pt-2 -mt-8" key="journey-block">
      <span className="text-[11px] uppercase tracking-[0.12em] text-muted">user journey</span>
      <div className="relative w-full py-4">
        <div className="absolute inset-x-0 top-[27px] h-[1px] bg-[rgba(12,10,29,0.08)]" aria-hidden="true" />
        <div className="relative grid w-full grid-cols-1 gap-5 sm:grid-cols-5">
          {steps.map((step) => (
            <div key={step} className="flex flex-col items-center gap-2 text-center">
              <span className="relative inline-flex h-[18px] w-[18px] items-center justify-center rounded-full border border-[rgba(143,128,173,0.38)] bg-white shadow-[0_4px_12px_rgba(12,10,29,0.08)]">
                <span className="absolute inset-x-[calc(100%+4px)] top-1/2 hidden h-[1px] -translate-y-1/2 bg-[rgba(143,128,173,0.2)] sm:block" aria-hidden="true" />
                <span className="block h-[10px] w-[10px] rounded-full bg-[rgb(143,128,173)]" />
              </span>
              <span className="text-[12px] font-medium tracking-[-0.01em] text-primary">{step}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )

  return (
    <article className="flex flex-col gap-16 pt-2 lg:gap-20">
      <div className="flex flex-col gap-12">
        {story.sections.flatMap((block) => {
          const items: ReactElement[] = []

          const isBlueprint = story.id === 'blueprint'
          const isBlueprintMC = isBlueprint && block.title === 'MCing for the first time at a large-scale event'

          if (isSafespace || isEncore || isBanana || isDoom || isBlueprint) {
            const label =
              (isSafespace
                ? safespaceLabels[block.title]
                : isEncore
                ? encoreLabels[block.title]
                : isBanana
                ? bananaLabels[block.title]
                : isDoom
                ? doomLabels[block.title]
                : isBlueprint
                ? ''
                : undefined) ?? 'takeaways'
            const labelText = label?.trim().toLowerCase()
            const titleText = block.title.trim().toLowerCase()
            const showLabel =
              !!label &&
              !(isSafespace && label === 'the given prompt') &&
              !isBlueprintMC &&
              (labelText !== titleText || (isBanana && label === 'impact') || (isDoom && label === 'overview'))
            if (label === 'takeaways') {
              if (showJourney && !journeyInserted && !isSafespace) {
                items.push(renderJourney())
                journeyInserted = true
              }
              if (!growthInserted && isEncore) {
                items.push(
                  <div className="flex flex-col gap-2 pt-4" key="growth-strategy">
                    <span className="text-[11px] uppercase tracking-[0.12em] text-muted">growth strategy</span>
                    <h3 className='font-["Instrument Sans","Inter",system-ui,sans-serif] text-[22px] leading-[1.25] text-primary'>
                      Rather than mass user acquisition, we focus on getting people you already know onto the platform.
                    </h3>
                    <p className={`${mutedClass} text-[15px] leading-[1.65]`}>
                      Our North Star Metric is the % of users who successfully connect with at least one person at an event. This is similar to other social apps, where there's a cold start risk of no friends on the platform leading to no value. To support this, we would focus on a "group invite" strategy, where a shareable event link lets someone add their friends so users immediately see people they know in attendance.
                    </p>
                  </div>,
                )
                growthInserted = true
              }
            }

            if (isBanana && block.title.startsWith('After meeting with our client')) {
              // Do not render label; render as standard text/bullets block
              const bananaBullets = (
                <ul className="grid list-disc gap-2 pl-5">
                  {block.bullets?.map((item) => (
                    <li key={item} className="font-body text-[15px] text-primary">
                      {item}
                    </li>
                  ))}
                </ul>
              )

              items.push(
                <div key={block.title} className="flex flex-col gap-2 rounded-[10px] bg-white/90">
                  <span className="text-[11px] uppercase tracking-[0.12em] text-muted">problem</span>
                  <h3 className='text-[22px] leading-[1.25] text-primary font-["Instrument Sans","Inter",system-ui,sans-serif]'>
                    {block.title}
                  </h3>
                  {bananaBullets}
                </div>,
              )
              return items
            }
            items.push(
              <div
                key={block.title}
                className={isBlueprintMC ? 'flex flex-col gap-2' : 'flex flex-col gap-2 rounded-[10px] bg-white/90'}
              >
                {showLabel ? (
                  <span className="text-[11px] uppercase tracking-[0.12em] text-muted">{label}</span>
                ) : null}
                {!(isSafespace && label === 'the given prompt') && !isBlueprintMC && !(isBanana && label === 'impact') && !(isDoom && label === 'overview') ? (
                  <h3
                    className={
                      isSafespace || isBlueprint
                        ? 'text-[22px] leading-[1.25] text-primary'
                        : 'text-[22px] leading-[1.25] text-primary font-["Instrument Sans","Inter",system-ui,sans-serif]'
                    }
                  >
                    {block.title}
                  </h3>
                ) : null}
                {block.quote ? (
                  <blockquote className="relative pl-5 font-body italic text-primary">
                    <span className="absolute left-0 top-0 h-full w-[3px] rounded-full bg-[#e7e8f2]" aria-hidden="true" />
                    {block.quote}
                  </blockquote>
                ) : null}
                {block.text ? <p className={`${mutedClass} text-[16px] leading-[1.6]`}>{block.text}</p> : null}
                {block.inlineVisual ? (
                  <figure className={`mt-3 overflow-hidden ${isBlueprintMC ? 'rounded-b-[6px] rounded-t-[6px]' : 'rounded-[12px]'}`}>
                    <img
                      className="w-full object-cover"
                      src={block.inlineVisual.src}
                      alt={block.inlineVisual.alt}
                      draggable={false}
                      loading="lazy"
                    />
                    {block.inlineCaption ? (
                      <figcaption className={`${mutedClass} mt-2 text-[14px] text-left`}>{block.inlineCaption}</figcaption>
                    ) : null}
                  </figure>
                ) : null}
                {block.bullets ? (
                  <ul className="grid list-disc gap-2 pl-5">
                    {block.bullets.map((item) => (
                      <li key={item} className="font-body text-[15px] text-primary">
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>,
            )
            if (isSafespace && block.title === 'Instead of asking: What did you accomplish today? It asks: Did you take time for your wellness goals today? to make recovery intentional' && !journeyInserted) {
              items.push(renderJourney())
              journeyInserted = true
            }
          } else {
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
          }

          return items
        })}
      </div>

      {story.gallery ? (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {story.gallery.map((image) => (
            <figure
              key={image.src}
              className="group flex cursor-zoom-in flex-col gap-3 outline-none focus:outline-none focus-visible:outline-none focus:ring-0 focus-visible:ring-0 focus-within:ring-0 focus-within:ring-offset-0 active:outline-none"
              role="button"
              tabIndex={0}
              onClick={() => setActiveImage(image)}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault()
                  setActiveImage(image)
                }
              }}
            >
              <img
                className={`w-full rounded-[6px] object-cover shadow-soft ${galleryAspectClass}`}
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

      {activeImage ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={activeImage.alt}
          onClick={() => setActiveImage(null)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-4xl rounded-[10px] bg-white shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              className="h-full w-full rounded-[10px] object-contain"
              src={activeImage.src}
              alt={activeImage.alt}
            />
          </div>
        </div>
      ) : null}
    </article>
  )
}
