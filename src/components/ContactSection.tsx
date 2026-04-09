import { mutedClass } from '../utils/constants'

export const ContactSection = () => (
  <section className="flex flex-col gap-6" id="contact">
    <div className="grid grid-cols-1 items-center gap-3 rounded-[6px] border border-[rgba(116,99,150,0.12)] bg-[#f9f9f9] p-4 sm:grid-cols-[160px,1fr] sm:p-5">
      <div className="overflow-hidden rounded-[6px] border border-border">
        <img
          className="h-[140px] w-full object-cover sm:h-[150px]"
          src="/connect.jpg"
          alt="Angela at the carnival"
          loading="lazy"
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <h3 className="text-[30px] leading-[1.15]">Let&apos;s connect!</h3>
        <p className={mutedClass}>My inbox and LinkedIn DMs are always open, let&apos;s grab coffee sometime (๑ᵔ⤙ᵔ๑)</p>
      </div>
    </div>
  </section>
)
