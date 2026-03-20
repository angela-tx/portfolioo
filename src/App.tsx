import { Link, Navigate, Outlet, Route, Routes, useParams } from 'react-router-dom'

const overlineClass = 'font-body uppercase tracking-[0.12em] text-[12px] font-semibold text-muted'
const mutedClass = 'text-muted font-body text-[15px] leading-[1.7]'

type LinkItem = {
  label: string
  url: string
}

type FeaturedProject = {
  id: string
  title: string
  description: string
  image: string
}

type ExperienceItem = {
  role: string
  dates: string
  detail: string
  link?: string
}

type GalleryItem = {
  title: string
  image: string
  link?: string
}

type ProjectStory = {
  id: string
  title: string
  badge: string
  headline: string
  hero: string
  meta: {
    role: string
    tools: string
    links: LinkItem[]
    year: string
  }
  summary: string
  sections: {
    title: string
    text?: string
    bullets?: string[]
    quote?: string
  }[]
  gallery?: { src: string; alt: string }[]
  closing?: string
}

const featuredProjects: FeaturedProject[] = [
  {
    id: 'blueprint',
    title: 'BluePrint Conference',
    description: "Leading Vancouver's largest student-run tech conference",
    image:
      'https://framerusercontent.com/images/zjpBEVbnTiJIddmrKVdwIbvS4Y0.png?width=883&height=660',
  },
  {
    id: 'safespace',
    title: 'safespace',
    description: 'Wellness app that integrates into the physical space',
    image:
      'https://framerusercontent.com/images/y33rZrsEcRw5CJn1yFi6h0y7WAI.png?width=1213&height=756',
  },
  {
    id: 'encore',
    title: 'Encore',
    description: 'Making the concert experience more social and connected',
    image:
      'https://framerusercontent.com/images/uzBFPAHFbCanqGuqOMYsBvay5Y.png?width=1894&height=1048',
  },
]

const allProjects: FeaturedProject[] = [
  ...featuredProjects,
  {
    id: 'banana-art-lab',
    title: 'Art Studio Website Redesign',
    description: 'Full branding and website redesign for a local client',
    image:
      'https://framerusercontent.com/images/iq5snVem8c1ZI1yvUJIGDUo1Z0.png?width=1580&height=956',
  },
]

const experiences: ExperienceItem[] = [
  {
    role: 'Marketing Transformation Intern @ Hootsuite',
    dates: 'Jan 2026 – Present',
    detail: '🚀 Enterprise acceleration',
    link: 'https://www.hootsuite.com/',
  },
  {
    role: 'Tech Director & Consultant @ UBC Marketing Association',
    dates: 'Sep 2025 – Present',
    detail: '💻 Web development & GTM strategy for local companies',
    link: 'https://www.ubcma.ca/about',
  },
  {
    role: 'Project Manager @ UBC BizTech',
    dates: 'Oct 2024 – Present',
    detail: '💼 Event logistics',
    link: 'https://www.ubcbiztech.com/events/blueprint2026',
  },
  {
    role: 'Digital Marketing @ Wun2Free Entertainment',
    dates: 'Mar 2023 – Dec 2025',
    detail: '📲 Social media growth',
    link: 'https://www.tiktok.com/@playsidegg',
  },
]

const funGallery: GalleryItem[] = [
  {
    title: 'blueprint tech conference',
    image:
      'https://framerusercontent.com/images/oFGebZy66V3occrMSMGRir6KqA.jpg?width=1177&height=1315',
    link: '/work/blueprint',
  },
  {
    title: 'dance battle!',
    image:
      'https://framerusercontent.com/images/CUzUeA0K3WyA7lgV9fR1O4GvI.jpg?width=1206&height=1379',
    link: 'https://www.instagram.com/unlimiteddanceclub/',
  },
  {
    title: 'gateways marketing conference',
    image:
      'https://framerusercontent.com/images/TnpJjuLwMqGhY3xUFUpo3Rsc1vg.jpeg?width=1206&height=1504',
    link: 'https://www.ubcma.ca/',
  },
  {
    title: 'choreographed a piece 💃',
    image:
      'https://framerusercontent.com/images/TocUasee81AlT5G4znB7ru5mE.jpg?width=1206&height=1420',
  },
]

const projectStories: ProjectStory[] = [
  {
    id: 'blueprint',
    title: 'BluePrint Conference',
    badge: 'Club Event',
    headline: "BluePrint – Vancouver's Largest Student-Led Tech Conference",
    hero:
      'https://framerusercontent.com/images/Vcg9T1IEU4PlJIkPb56gxv4LQKQ.jpg?width=5514&height=3676',
    meta: {
      role: 'Project Manager',
      tools: 'Notion, Excel, Figma',
      links: [
        {
          label: 'Event Website',
          url: 'https://www.ubcbiztech.com/events/blueprint2026',
        },
        {
          label: 'Global News Interview',
          url: 'https://globalnews.ca/video/11648924/ubc-biztechs-2026-blueprint-conference',
        },
      ],
      year: '2026',
    },
    summary:
      "BluePrint is a technology conference hosted by UBC's largest tech club with 200+ attendees, 70 delegates, and 50 executives. Our mission is to help students find their place in tech through workshops, networking, and mentor chats.",
    sections: [
      {
        title: 'What I was responsible for',
        text: 'My role sat at the intersection of creative strategy, execution, and people.',
        bullets: [
          'Designing practical career workshops for students with Microsoft, TELUS, and Asana',
          'Coordinating across marketing, engineering, design, and sponsorship teams to align priorities',
          'Communicating day-of roles so everyone knew where to be 🏃‍♀️',
          'Acting as the central point of contact over 8 months',
        ],
      },
      {
        title: 'Learning about leadership',
        text: "I thought the hardest part would be logistics, but it turned out to be responsibility. When things go wrong, people look to you. When things go right, you make space for the team to be proud of what they’ve built. I learned that being a leader is less about having all the answers and more about creating enough clarity that others can do their best work, even when everything feels urgent.",
      },
      {
        title: 'Accessibility, inclusion, and impact',
        text: "Representation played a heavy influence throughout my planning. Some outcomes I'm proud of include:",
        bullets: [
          'Interntionally sending female-identifying reps to the news, amplifying underrepresented voices',
          'Marketing the event to students of all backgrounds and skill levels, with the only requirement being an interest in business or technology',
          'Creating space for each attendee to make intentional connections, as boothing helps them learn about the company, but small chats make long-lasting connections',
        ],
      },
      {
        title: 'Looking back',
        text: 'I’m incredibly grateful for the commitment that BizTech brought to the table each day. What makes our club special isn’t just the scale of what we do, but rather the intention behind it. That shared ambition is what drew me in, and it’s what made leading BluePrint both incredibly rewarding and incredibly hard.',
      },
    ],
    gallery: [
      {
        src: 'https://framerusercontent.com/images/585IrOTUVapK1qVLEIyA8HzbIpY.jpg?width=5867&height=3113',
        alt: 'The BizTech 2025/26 team',
      },
      {
        src: 'https://framerusercontent.com/images/Hw4716zakmU1LcG3JpyrWAo88.png',
        alt: 'Blueprint stage visuals',
      },
    ],
    closing:
      'Happy to have had the chance to build under pressure, learn from one another, and grow alongside people who make the work worth it 💙',
  },
  {
    id: 'safespace',
    title: 'safespace',
    badge: 'UXathon - 1st Place, Best Pitch',
    headline: 'safespace – a habit app that integrates into the physical space',
    hero:
      'https://framerusercontent.com/images/aiyO6sx5qCCyXHuyCMZc5qQvZg8.jpeg?width=1348&height=744',
    meta: {
      role: 'Product Manager, Designer',
      tools: 'Figma, Google Slides, NFCs',
      links: [
        {
          label: 'Prototype',
          url: 'https://www.figma.com/proto/aCJg2mqV3BmTS1veJaiiNl/SafeSpace-UXHub?page-id=124%3A6328&node-id=124-6375&viewport=-1206%2C-271%2C0.29&t=yvS7S6NuAP8mLcxm-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=124%3A6329&show-proto-sidebar=1',
        },
        {
          label: 'Devpost',
          url: 'https://devpost.com/software/safe-space-your-wellness-companion',
        },
      ],
      year: '2026',
    },
    summary:
      'We live in a culture that rewards being “always on.” Students track workouts, study time, and habits. But almost no one tracks recovery. We enable users to reframe how they set goals by focusing on recovery metrics, rather than productivity.',
    sections: [
      {
        title: 'The given prompt',
        quote:
          'In a world that rewards being “always on,” how might we design an experience that helps people set and keep boundaries to make recovery time feel socially safe, rewarding, and easy to sustain?',
      },
      {
        title: 'Insights',
        text: 'To further undertand the problem, our team explored:',
        bullets: [
          'Market research: how our target audience approaches goal-setting',
          'Psychology: passive (scrolling, avoidance) vs intentional rest',
          'A core value proposition: shifting our messaging from working to wellness',
        ],
      },
      {
        title: 'Making recovery intentional',
        text: 'Instead of asking: What did you accomplish today? It asks: Did you take time for your wellness goals today?',
        bullets: [
          'A core feature is our NFC journal sticker. When placed on a notebook or in a designated goal space, it acts as a physical barrier for intentional rest.',
          'The sticker automatically launches safespace when you tap your phone and opens to a guided page with prompts and a focus timer.',
          'Example user flow: tap phone on NFC journal sticker → safespace launches → journaling UI appears with prompts & focus mode enabled → time is logged to monthly recovery goal',
          'Keeping in mind accessible and cozy design choices!',
        ],
      },
      {
        title: 'What I learned when designing this product',
        bullets: [
          'Focusing on a narrow segment clarified the core problem',
          'For an MVP: Quality of features > quantity',
          'Conducting early user research grounded our assumptions and validated the problem',
        ],
      },
    ],
    gallery: [
      {
        src: 'https://framerusercontent.com/images/pv2HzEbAegTYhvuDKawZps2d4I.png',
        alt: 'safespace research snapshot',
      },
      {
        src: 'https://framerusercontent.com/images/zCWaxyVmI6AWrjGda4b03NN3iZk.png?width=2034&height=1106',
        alt: 'safespace journaling UI',
      },
    ],
  },
  {
    id: 'encore',
    title: 'Encore',
    badge: 'StormHacks Winner (2/220 Projects)',
    headline: 'Encore – Your Concert Companion App',
    hero:
      'https://framerusercontent.com/images/JHtBElTyJhcpvlMJnQcgljkZdpQ.png?width=2230&height=1250',
    meta: {
      role: 'PM, UI/UX Designer',
      tools: 'TypeScript, CSS, Figma, Firebase, Ticketmaster API',
      links: [
        {
          label: 'Devpost',
          url: 'https://devpost.com/software/encore-vzilag',
        },
      ],
      year: '2025',
    },
    summary:
      'Live music is one of the fastest-growing spending categories among students. But while concerts are inherently social, the digital experience around them is not.',
    sections: [
      {
        title: 'Two common pain points',
        text: "Each of our team members went to at least one concert this summer, often to the same artists, yet we didn't realize until after. Encore is our answer to two common pain points concert-goers face:",
        bullets: [
          'Discovery gap: Not knowing who in your network is going to the same show',
          'Chaos: Being unable to connect once you’ve arrived at the crowded venue',
        ],
      },
      {
        title: 'Friction in the ticketing experience',
        text: 'In the current ecosystem, ticketing platforms optimize for checkout speed, while social platforms optimize for post-event updates. Our app bridges this gap by allowing users to:',
        bullets: [
          'Explore shows in your area with live data from Ticketmaster',
          'See which of your friends are attending',
          'Mark your status as attending or interested',
          'Optionally share seat information to find nearby friends',
        ],
      },
      {
        title: 'Reducing friction in the journey',
        text: 'We focused on reducing friction at key moments in the user journey: Discover → Signal Intent → Connect & Share Information → Coordinate → Experience Together',
      },
      {
        title: 'For our ideal user ◡̈',
        text: 'What I learned from my first time at SFU!',
        bullets: [
          'Forestry is an important major',
          'The power of networking = free poke bowls',
          'Redbull gives you wings',
        ],
      },
    ],
    gallery: [
      {
        src: 'https://framerusercontent.com/images/6mJCiZMw9W0djWdgELk5MoFqSQU.png?width=2224&height=1248',
        alt: 'Encore flows and states',
      },
    ],
  },
  {
    id: 'banana-art-lab',
    title: 'Art Studio Website Redesign',
    badge: 'FLUI Design Competition - Best Visual Design',
    headline: 'Banana Art Lab – Website Brand and UX Redesign',
    hero:
      'https://framerusercontent.com/images/ganHUOUIHXSUJsM0ERwLHZeRdU.png?width=1982&height=860',
    meta: {
      role: 'UI/UX Designer, Researcher',
      tools: 'Figma',
      links: [
        {
          label: 'Slide Deck',
          url: 'https://www.figma.com/deck/iqoHbuOJ1O5ApfDLUp9SuP/FLUI-PPT?node-id=32-704&t=SOzqfqaPbv168vFA-1',
        },
        {
          label: 'Prototype',
          url: 'https://www.figma.com/proto/eB8OacJactPKIiabV4I4xw/FLUI-Figma-File?node-id=128-7611&t=7JX3hA9zYiBpWjh8-1&scaling=scale-down&content-scaling=fixed&page-id=116%3A1902&starting-point-node-id=128%3A7611',
        },
      ],
      year: '2025',
    },
    summary:
      "Banana Art Lab's website lacked clarity and ease of use, making it difficult for prospective customers to book DIY workshops, ultimately hindering business growth.",
    sections: [
      {
        title: 'Pain points',
        text: 'After meeting with our client, we clarified the objectives, limitations, and 3 core problems to influence our product design.',
        bullets: [
          'A faulty booking system',
          'Inconsistent branding & visual identity',
          "Interface that wasn't user-friendly",
        ],
      },
      {
        title: 'UX + positioning approach',
        text: 'Instead of only fixing the booking system, our team aligned brand and conversion flow to support one goal: making it easy and trustworthy to book.',
        bullets: [
          'Developing a refined GTM strategy aligned with their target audience',
          'Revamping website pages including Hero, About, Gallery, and Booking',
          'Redesigning branding (logo, colour palette, messaging) to reflect positioning',
          'Improving usability through simpler navigation flows',
        ],
      },
      {
        title: 'Impact',
        text: 'With these changes, Banana Art Lab is now set to attract more customers, promote a unified brand image, and drive business growth through an engaging digital experience.',
      },
    ],
    gallery: [
      {
        src: 'https://framerusercontent.com/images/5S4KMP0yKQjBPVYjcaOKeGfc0.png',
        alt: 'Branding exploration for Banana Art Lab',
      },
      {
        src: 'https://framerusercontent.com/images/vF51QpUFindesuQKQFHYginVtI.png?width=1988&height=1112',
        alt: 'Booking flow preview',
      },
    ],
  },
]

const navItems = [
  { to: '/about', label: 'about me' },
  { to: '/work', label: 'projects' },
]

const IconLinkedIn = () => (
  <svg className="h-[17px] w-[17px]" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <path
      fill="currentColor"
      d="M5.5 3A1.5 1.5 0 1 0 5.5 6 1.5 1.5 0 0 0 5.5 3ZM4 8h3v9H4Zm5 0h3v1.3c.4-.7 1.3-1.4 2.7-1.4 2 0 3.3 1.3 3.3 3.9V17h-3v-5c0-1.2-.5-2-1.6-2-1 0-1.7.7-1.7 2V17H9Z"
    />
  </svg>
)

const IconMail = () => (
  <svg className="h-[17px] w-[17px]" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <path
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      d="M4.5 7.75a1.75 1.75 0 0 1 1.75-1.75h11.5A1.75 1.75 0 0 1 19.5 7.75v8.5a1.75 1.75 0 0 1-1.75 1.75H6.25A1.75 1.75 0 0 1 4.5 16.25Z"
    />
    <path
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      d="m6 8 5.6 3.7a1 1 0 0 0 1.1 0L18.3 8"
    />
  </svg>
)

const ProjectCard = ({ project }: { project: FeaturedProject }) => (
  <Link
    className="group flex flex-col gap-3 overflow-hidden rounded-[6px] border border-[rgba(116,99,150,0.12)] bg-white transition duration-200 ease-out hover:-translate-y-1 hover:border-[rgba(116,99,150,0.24)] hover:shadow-[0_24px_60px_rgba(32,24,63,0.12)] hover:saturate-[1.02] animate-fade-in-up"
    to={`/work/${project.id}`}
    aria-label={`Open ${project.title}`}
  >
    <div className="relative overflow-hidden">
      <img className="h-[220px] w-full object-cover" src={project.image} alt={project.title} loading="lazy" />
    </div>
    <div className="px-4 pb-4">
      <h3 className="mt-[2px] mb-[6px] text-[21px] font-normal tracking-[-0.02em] text-primary font-display">
        {project.title}
      </h3>
      <p className={`${mutedClass} text-[14px]`}>{project.description}</p>
    </div>
  </Link>
)

const ContactSection = () => (
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

const StorySection = ({ story }: { story: ProjectStory }) => (
  <article className="flex flex-col gap-[18px] pt-2">
    <div className="flex flex-col gap-2">
      <div className="inline-flex items-center rounded-[6px] bg-accent-soft px-[10px] py-[6px] text-[12px] font-bold tracking-[0.08em] text-primary">
        {story.badge}
      </div>
      <div className="flex flex-col gap-2">
        <p className={overlineClass}>{story.title}</p>
        <h3 className="text-[34px] font-normal tracking-[-0.02em] text-primary font-display">{story.headline}</h3>
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
          <h4 className="text-[18px] font-normal tracking-[-0.01em] text-primary font-display">{block.title}</h4>
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

const HomePage = () => (
  <div className="flex flex-col gap-[72px]">
    <section className="grid gap-5 pt-2">
      <div className="max-w-[760px]">
        <h1
          className="mb-2 mt-1 font-display text-[clamp(40px,5vw,66px)] font-normal leading-[1.05] tracking-[-0.04em] text-primary animate-fade-in-up"
          style={{ animationDelay: '40ms' }}
        >
          Angela Huang
        </h1>
        <p
          className="font-display text-[15px] uppercase tracking-[0.08em] text-muted animate-fade-in-up"
          style={{ animationDelay: '80ms' }}
        >
          ✧ Product, marketing, and community impact
        </p>
        <p
          className={`${mutedClass} mt-3 max-w-[860px] text-[18px] text-primary animate-fade-in-up`}
          style={{ animationDelay: '120ms' }}
        >
          Hi! I’m currently a Marketing Tranformation Intern @ Hootsuite, where I get to manage projects, optimize marketing channels and make my teammates&apos; lives easier. Professional world aside, I&apos;m also a competitive dancer (´｡• ◡ •｡`)
        </p>
        <p
          className={`${mutedClass} mt-3 animate-fade-in-up`}
          style={{ animationDelay: '160ms' }}
        >
          Check out my conference interview:{' '}
          <a
            className="font-semibold text-accent hover:text-[#5b50b5]"
            href="https://globalnews.ca/video/11648924/ubc-biztechs-2026-blueprint-conference"
            target="_blank"
            rel="noreferrer"
          >
            Global News
          </a>
        </p>
      </div>
    </section>

    <section className="flex flex-col gap-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="font-display text-[30px] font-normal text-primary">Featured Projects</h2>
        </div>
        <Link className="font-body font-semibold text-primary underline-offset-4 hover:text-accent" to="/work">
          View all
        </Link>
      </div>
      <div className="grid w-full grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-5">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>

    <section className="flex flex-col gap-6">
      <div>
        <h2 className="font-display text-[30px] font-normal text-primary">Experience</h2>
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-4">
        {experiences.map((item) => (
          <div
            key={item.role}
            className="flex flex-col gap-2 rounded-[8px] border border-[rgba(116,99,150,0.12)] bg-white p-[18px] shadow-soft animate-fade-in-up"
          >
            <div className="inline-flex w-fit items-center rounded-[6px] bg-accent-soft px-[10px] py-[6px] text-[12px] font-bold tracking-[0.08em] text-primary">
              {item.dates}
            </div>
            <h3 className="text-[18px] font-normal text-primary font-display">{item.role}</h3>
            <p className={mutedClass}>{item.detail}</p>
          </div>
        ))}
      </div>
    </section>

    <section className="flex flex-col gap-6">
      <div className="flex flex-wrap items-center gap-3">
        <div>
          <h2 className="font-display text-[30px] font-normal text-primary">Moments</h2>
        </div>
      </div>
      <div className="group relative flex w-[calc(100%+80px)] -mx-[40px] overflow-hidden py-10" style={{ containerType: 'inline-size' }}>
        {[0, 1].map((copyIdx) => (
          <div
            key={copyIdx}
            className="flex shrink-0 animate-marquee gap-10 pl-[40px]"
            aria-hidden={copyIdx === 1}
          >
            {funGallery.map((item, index) => {
              const rotationClass = index % 2 === 0 ? '-rotate-[2deg] hover:-rotate-[4deg]' : 'rotate-[2deg] hover:rotate-[4deg]'
              
              const content = (
                <div className={`flex h-full flex-col rounded-[4px] bg-white p-[16px] pb-[24px] shadow-[0_0_20px_rgba(0,0,0,0.1)] transition-transform duration-300 ease-out hover:scale-[1.03] hover:z-20 ${rotationClass}`}>
                  <img className="aspect-square w-full object-cover rounded-[2px]" src={item.image} alt={item.title} loading="lazy" />
                  <div className="mt-4 flex flex-grow items-center justify-center text-center">
                    <p className="font-body text-[18px] font-medium text-[#746396]">{item.title}</p>
                  </div>
                </div>
              )

              const isInternal = item.link?.startsWith('/')
              const itemStyle = { width: 'calc((100cqi - 80px) / 3)' }

              if (isInternal) {
                return (
                  <Link
                    key={item.title}
                    style={itemStyle}
                    className="relative block shrink-0 z-0 hover:z-20"
                    to={item.link!}
                  >
                    {content}
                  </Link>
                )
              } else if (item.link) {
                return (
                  <a
                    key={item.title}
                    style={itemStyle}
                    className="relative block shrink-0 z-0 hover:z-20"
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {content}
                  </a>
                )
              } else {
                return (
                  <div key={item.title} style={itemStyle} className="relative block shrink-0 z-0 hover:z-20">
                    {content}
                  </div>
                )
              }
            })}
          </div>
        ))}
      </div>
    </section>

    <ContactSection />
  </div>
)

const AboutPage = () => (
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

const WorkPage = () => (
  <div className="flex flex-col gap-[72px]">
    <section className="flex flex-col gap-5">
      <h1
        className="max-w-[760px] font-display text-[clamp(34px,4vw,48px)] font-normal leading-[1.05] text-primary animate-fade-in-up"
        style={{ animationDelay: '40ms' }}
      >
        work & project portfolio
      </h1>
      <p
        className={`${mutedClass} max-w-[720px] animate-fade-in-up`}
        style={{ animationDelay: '80ms' }}
      >
        A collection of select projects, reflections, and case studies ^_^
      </p>
    </section>
    <section className="flex flex-col gap-6">
      <p className={overlineClass}>all projects</p>
      <div className="grid w-full grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-5">
        {allProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
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

const ProjectPage = () => {
  const { slug } = useParams()
  const story = projectStories.find((item) => item.id === slug)

  if (!story) {
    return <Navigate to="/work" replace />
  }

  const currentIndex = projectStories.findIndex((p) => p.id === story.id)
  const prev = projectStories[currentIndex - 1]
  const next = projectStories[currentIndex + 1]

  return (
    <div className="flex flex-col gap-[72px]">
      <div className="flex items-center gap-2 font-body text-muted">
        <Link className="text-primary no-underline" to="/work">
          All Projects
        </Link>
        <span className="text-muted">/</span>
        <span>{story.title}</span>
      </div>

      <StorySection story={story} />

      <div className="flex items-center justify-between -mt-6 mb-2">
        {prev ? (
          <Link to={`/work/${prev.id}`} className="font-body font-semibold text-primary underline-offset-4 hover:text-accent">
            ‹ {prev.title}
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link to={`/work/${next.id}`} className="font-body font-semibold text-primary underline-offset-4 hover:text-accent">
            {next.title} ›
          </Link>
        ) : (
          <span />
        )}
      </div>

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
}

const Footer = () => (
  <footer className="mt-16 border-t border-border py-4">
    <div className="mx-auto flex w-[min(800px,calc(100%-160px))] items-center justify-between text-muted">
      <span className="font-body text-muted">Angela Huang</span>
      <nav className="inline-flex items-center gap-4" aria-label="Footer">
        <Link className="text-muted no-underline hover:text-primary" to="/">
          home
        </Link>
        <Link className="text-muted no-underline hover:text-primary" to="/about">
          about me
        </Link>
        <Link className="text-muted no-underline hover:text-primary" to="/work">
          projects
        </Link>
      </nav>
    </div>
  </footer>
)

const Layout = () => (
  <div className="min-h-screen bg-white text-primary">
    <header className="sticky top-0 z-10 border-b border-[rgba(232,227,243,0.8)] bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex w-[min(800px,calc(100%-160px))] flex-col items-start justify-between gap-4 py-[14px] lg:flex-row lg:items-center">
        <div className="inline-flex items-center gap-2.5">
          <Link className="inline-flex items-center gap-2 text-accent no-underline" to="/" aria-label="Back to home">
            <span className="text-sm">🪽</span>
          </Link>
          <span className="text-[14px] text-[rgba(97,90,117,0.5)]" aria-hidden="true">
            |
          </span>
          <nav className="flex flex-wrap items-center gap-2" aria-label="Primary">
            {navItems.map((item) => (
              <Link
                key={item.to}
                className="rounded-[6px] px-3 py-2 text-[15px] font-semibold tracking-[-0.01em] text-primary transition duration-200 ease-out hover:-translate-y-[1px] hover:bg-[rgba(109,99,206,0.08)] hover:text-accent no-underline"
                to={item.to}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="inline-flex items-center gap-2.5">
          <a
            className="inline-flex rounded-[6px] p-2 text-primary transition duration-200 ease-out hover:bg-[rgba(109,99,206,0.08)]"
            href="https://www.linkedin.com"
            aria-label="LinkedIn"
            target="_blank"
            rel="noreferrer"
          >
            <IconLinkedIn />
          </a>
          <a
            className="inline-flex rounded-[6px] p-2 text-primary transition duration-200 ease-out hover:bg-[rgba(109,99,206,0.08)]"
            href="mailto:hello@angelatxhuang.com"
            aria-label="Email"
          >
            <IconMail />
          </a>
        </div>
      </div>
    </header>

    <main className="mx-auto flex w-[min(800px,calc(100%-160px))] flex-col gap-[88px] pt-3 pb-24">
      <Outlet />
    </main>
    <Footer />
  </div>
)

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="work" element={<WorkPage />} />
        <Route path="work/:slug" element={<ProjectPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}

export default App
