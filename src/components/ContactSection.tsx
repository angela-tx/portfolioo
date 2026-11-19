import { mutedClass } from '../utils/constants'

type ContactSectionProps = {
  compactOnMobile?: boolean
}

export const ContactSection = ({ compactOnMobile = false }: ContactSectionProps) => (
  <section className="flex flex-col gap-6" id="contact">
    <div className="grid grid-cols-[80px_minmax(0,1fr)] items-center gap-4 rounded-none bg-[#f7fafc] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.82),0_14px_34px_rgba(72,96,120,0.1)] backdrop-blur-[16px] supports-[backdrop-filter:blur(1px)]:bg-white/[0.55] sm:grid-cols-[140px_minmax(0,1fr)] sm:gap-7 sm:p-8">
      <div className="h-20 w-20 overflow-hidden rounded-none sm:h-[140px] sm:w-[140px]">
        <img
          className="h-full w-full object-cover"
          src="/connect.jpg"
          alt="Angela at the carnival"
          loading="lazy"
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <h3 className="text-[26px] leading-[1.15] text-[#23395D] sm:text-[30px]">
          Let&apos;s connect!
        </h3>
        <p
          className={
            compactOnMobile
              ? 'font-body text-[14px] leading-[1.6] text-primary sm:text-[15px] lg:whitespace-nowrap'
              : `${mutedClass} lg:whitespace-nowrap`
          }
        >
          My inbox and LinkedIn DMs are always open, let&apos;s grab coffee sometime (๑ᵔ⤙ᵔ๑)
        </p>
      </div>
    </div>
  </section>
)
