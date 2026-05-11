import { mutedClass } from '../utils/constants'
import { ContactSection } from '../components/ContactSection'

export const AboutPage = () => (
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
        I believe that being curious about life outside of work makes me a better thinker & teammate. That's why when I'm not working, I like to:
      </p>
        <div className="flex flex-col gap-8 animate-fade-in-up" style={{ animationDelay: '120ms' }}>
        <div className="flex flex-col gap-2">
          <ul className="grid list-none gap-2 pl-0 font-body">
            <li>🩰 Take dance drop-ins</li>
            <li>✈️ Travel! Next up: Shanghai ᢉ𐭩</li>
            <li>👩🏻‍🍳 Try to be MasterChef</li>
            <li>⛰️ Hike (shoutout British Columbia mountains)</li>
            <li>🧘🏻‍♀️ Journal</li>
          </ul>
        </div>
      </div>

    </section>

    <ContactSection />
  </div>
)
