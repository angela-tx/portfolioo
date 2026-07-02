import { useEffect, useRef, useState } from 'react'
import { mutedClass } from '../utils/constants'
import { ContactSection } from '../components/ContactSection'
import { aboutGallery } from '../data'

export const AboutPage = () => {
  const itemRefs = useRef<(HTMLElement | null)[]>([])
  const [visibleItems, setVisibleItems] = useState<boolean[]>(() => aboutGallery.map(() => false))

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      setVisibleItems(aboutGallery.map(() => true))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return

          const index = Number((entry.target as HTMLElement).dataset.galleryIndex)
          const rowStart = Math.floor(index / 3) * 3
          setVisibleItems((current) => {
            if (current[rowStart]) return current

            const next = [...current]
            aboutGallery.slice(rowStart, rowStart + 3).forEach((_, itemOffset) => {
              next[rowStart + itemOffset] = true
            })
            return next
          })
          observer.unobserve(entry.target)
        })
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.12 },
    )

    itemRefs.current.forEach((item) => {
      if (item) observer.observe(item)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="flex flex-col gap-[72px]">
      <section className="flex flex-col gap-5">
        <h1
          className="max-w-[760px] text-[clamp(48px,6vw,72px)] leading-[1.05] animate-fade-in-up"
          style={{ animationDelay: '40ms' }}
        >
          about me (˶ᵔ ᵕ ᵔ˶)
        </h1>
        <p
          className={`${mutedClass} max-w-[720px] animate-fade-in-up`}
          style={{ animationDelay: '80ms' }}
        >
          I believe that gaining perspective from life outside of work makes me a better thinker & teammate. Here are highlights of what I do in my free time!
        </p>
      </section>

      <section className="flex flex-col gap-8">
        <div className="columns-1 gap-3 border-y border-[rgba(116,99,150,0.14)] py-6 sm:columns-2 lg:columns-3">
          {aboutGallery.map((item, index) => {
            const frameClass =
              index % 6 === 0
                ? 'aspect-[4/5]'
                : index % 6 === 1
                  ? 'aspect-square'
                  : index % 6 === 2
                    ? 'aspect-[5/4]'
                    : index % 6 === 3
                      ? 'aspect-[2/3]'
                      : index % 6 === 4
                        ? 'aspect-[3/4]'
                        : 'aspect-[6/5]'

            return (
              <figure
                key={item.image}
                ref={(element) => {
                  itemRefs.current[index] = element
                }}
                className={`group mb-2 break-inside-avoid transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  visibleItems[index]
                    ? 'translate-y-0 opacity-100 blur-0'
                    : 'translate-y-6 opacity-0 blur-[3px]'
                }`}
                data-gallery-index={index}
                style={{ transitionDelay: `${(index % 3) * 90}ms` }}
              >
                <div className="overflow-hidden bg-surface">
                  <img
                    className={`${frameClass} w-full object-cover grayscale-[8%] transition duration-500 ease-out group-hover:grayscale-0`}
                    src={item.image}
                    alt={item.caption}
                    loading="lazy"
                  />
                </div>
                <figcaption className="pt-1">
                  <span className="font-body text-[12px] font-medium tracking-[0.01em] text-[#746396]">
                    {item.caption}
                  </span>
                </figcaption>
              </figure>
            )
          })}
        </div>
      </section>

      <ContactSection />
    </div>
  )
}
