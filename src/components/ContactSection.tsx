import { mutedClass } from '../utils/constants'

export const ContactSection = () => (
  <section className="flex flex-col gap-6" id="contact">
    <div className="grid grid-cols-1 items-center gap-5 rounded-[6px] border border-[rgba(116,99,150,0.12)] bg-white p-6 shadow-soft sm:grid-cols-[210px,1fr]">
      <div className="overflow-hidden rounded-[6px] border border-border">
        <img
          className="h-full w-full object-cover"
          src="/connect.jpg"
          alt="Angela at the carnival"
          loading="lazy"
        />
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-[32px] font-normal text-primary font-display">Let&apos;s connect!</h3>
        <p className={mutedClass}>My inbox and LinkedIn DMs are always open, let&apos;s grab coffee sometime (๑ᵔ⤙ᵔ๑)</p>
      </div>
    </div>
  </section>
)
