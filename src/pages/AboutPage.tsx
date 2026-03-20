import { mutedClass } from '../utils/constants'
import { ContactSection } from '../components/ContactSection'

export const AboutPage = () => (
  <div className="flex flex-col gap-[72px]">
    <section className="flex flex-col gap-5">
      <h1
        className="max-w-[760px] font-display text-[clamp(34px,4vw,48px)] font-normal leading-[1.05] text-primary animate-fade-in-up"
        style={{ animationDelay: '40ms' }}
      >
        About — Nice to meet you or welcome back!
      </h1>
      <p
        className={`${mutedClass} max-w-[720px] animate-fade-in-up`}
        style={{ animationDelay: '80ms' }}
      >
        Here&apos;s what I&apos;ve been up to:
      </p>
    </section>

    <section className="grid grid-cols-1 gap-7 md:grid-cols-[1.1fr,0.9fr]">
      <div className="flex flex-col gap-4">
        <div className="rounded-[8px] border border-[rgba(116,99,150,0.12)] bg-white p-[18px] shadow-soft">
          <p className="font-body text-[11px] font-bold uppercase tracking-[0.08em] text-muted">event director @ ubc biztech</p>
          <p className="mt-2 font-body font-bold text-primary">leading events for vancouver&apos;s tech community ᢉ𐭩</p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="font-body text-[11px] font-bold uppercase tracking-[0.08em] text-muted">What I do when I&apos;m not working:</p>
          <ul className="grid list-none gap-2 pl-0 font-body">
            <li>🩰 Hang out in the studio</li>
            <li>✈️ Travel</li>
            <li>👩🏻‍🍳 On my MasterChef journey</li>
            <li>⛰️ Hike (shoutout British Columbia mountains)</li>
            <li>📖 Journal</li>
          </ul>
        </div>
      </div>
      <div className="rounded-[8px] border border-border shadow-soft">
        <img
          className="h-full w-full rounded-[8px] object-cover"
          src="https://framerusercontent.com/images/M7NZySSFmGcjnSecqOyhD935TQ.jpeg?scale-down-to=1024&width=8733&height=5822"
          alt="Event director highlight"
          loading="lazy"
        />
      </div>
    </section>

    <section className="flex flex-col gap-4">
      <div className="w-full rounded-[8px] border border-[rgba(116,99,150,0.12)] shadow-soft">
        <img
          className="h-full w-full rounded-[8px] object-cover"
          src="https://framerusercontent.com/images/Hw4716zakmU1LcG3JpyrWAo88.png?width=1800&height=1012"
          alt="Blueprint stage visuals"
          loading="lazy"
        />
      </div>
    </section>

    <ContactSection />
  </div>
)
