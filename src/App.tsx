import { Link, Navigate, Outlet, Route, Routes, useParams } from 'react-router-dom'
import './App.css'

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
  {
    title: 'hiker in nature',
    image:
      'https://framerusercontent.com/images/IABhnZYKUneXiw5yHAcVBE34twA.png?width=1138&height=1201',
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
  <svg className="icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <path
      fill="currentColor"
      d="M5.5 3A1.5 1.5 0 1 0 5.5 6 1.5 1.5 0 0 0 5.5 3ZM4 8h3v9H4Zm5 0h3v1.3c.4-.7 1.3-1.4 2.7-1.4 2 0 3.3 1.3 3.3 3.9V17h-3v-5c0-1.2-.5-2-1.6-2-1 0-1.7.7-1.7 2V17H9Z"
    />
  </svg>
)

const IconMail = () => (
  <svg className="icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
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
  <Link className="project-card fade-in" to={`/work/${project.id}`} aria-label={`Open ${project.title}`}>
    <div className="project-image">
      <img src={project.image} alt={project.title} loading="lazy" />
    </div>
    <div className="project-copy">
      <p className="overline">Project</p>
      <h3>{project.title}</h3>
      <p className="muted">{project.description}</p>
      <span className="view-link">View</span>
    </div>
  </Link>
)

const ContactSection = () => (
  <section className="section contact" id="contact">
    <div className="connect-card">
      <div className="connect-image">
        {/* Replace with your preferred portrait if available */}
        <img
          src="https://framerusercontent.com/images/M7NZySSFmGcjnSecqOyhD935TQ.jpeg?scale-down-to=1024&width=8733&height=5822"
          alt="Angela at an event"
          loading="lazy"
        />
      </div>
      <div className="connect-copy">
        <h3>Let&apos;s connect!</h3>
        <p className="muted">My inbox and LinkedIn DMs are always open, let&apos;s grab coffee sometime (๑ᵔ⤙ᵔ๑)</p>
        <div className="cta-row">
          <a className="button primary" href="mailto:hello@angelatxhuang.com">
            Email
          </a>
          <a className="button ghost" href="https://www.linkedin.com" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  </section>
)

const StorySection = ({ story }: { story: ProjectStory }) => (
  <article className="story">
    <div className="story-heading">
      <div className="chip">{story.badge}</div>
      <div className="story-title">
        <p className="overline">{story.title}</p>
        <h3>{story.headline}</h3>
        <p className="story-summary">{story.summary}</p>
      </div>
    </div>

    <div className="story-hero">
      <img src={story.hero} alt={`${story.title} hero`} loading="lazy" />
    </div>

    <div className="story-meta">
      <div>
        <p className="meta-label">Role</p>
        <p className="meta-value">{story.meta.role}</p>
      </div>
      <div>
        <p className="meta-label">Tools</p>
        <p className="meta-value">{story.meta.tools}</p>
      </div>
      <div>
        <p className="meta-label">Links</p>
        <div className="meta-links">
          {story.meta.links.map((link) => (
            <a key={link.url} href={link.url} target="_blank" rel="noreferrer">
              {link.label}
            </a>
          ))}
        </div>
      </div>
      <div>
        <p className="meta-label">Year</p>
        <p className="meta-value">{story.meta.year}</p>
      </div>
    </div>

    <div className="story-body">
      {story.sections.map((block) => (
        <div key={block.title} className="story-block">
          <h4>{block.title}</h4>
          {block.quote ? <blockquote>{block.quote}</blockquote> : null}
          {block.text ? <p>{block.text}</p> : null}
          {block.bullets ? (
            <ul>
              {block.bullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          ) : null}
        </div>
      ))}
    </div>

    {story.gallery ? (
      <div className="story-gallery">
        {story.gallery.map((image) => (
          <figure key={image.src}>
            <img src={image.src} alt={image.alt} loading="lazy" />
            <figcaption className="muted">{image.alt}</figcaption>
          </figure>
        ))}
      </div>
    ) : null}

    {story.closing ? <p className="closing">{story.closing}</p> : null}
  </article>
)

const HomePage = () => (
  <div className="page-shell">
    <section className="hero">
      <div className="hero-text">
        <h1>Angela Huang</h1>
        <p className="tagline">✧ Product, marketing, and community impact</p>
        <p className="intro">
          Hi! I’m currently a Marketing Tranformation Intern @ Hootsuite, where I get to research, innovate workflows and
          make my teammates&apos; lives easier. Professional world aside, I&apos;m also a competitive dancer (´｡• ◡ •｡`)
        </p>
        <p className="muted">
          Check out my conference interview:{' '}
          <a
            href="https://globalnews.ca/video/11648924/ubc-biztechs-2026-blueprint-conference"
            target="_blank"
            rel="noreferrer"
          >
            Global News
          </a>
        </p>
      </div>
    </section>

    <section className="section">
      <div className="section-heading">
        <div>
          <p className="overline">featured projects</p>
          <h2>Selected work</h2>
        </div>
        <Link className="text-link" to="/work">
          View all
        </Link>
      </div>
      <div className="grid projects-grid">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>

    <section className="section">
      <p className="overline">experience</p>
      <h2>Where I&apos;ve been</h2>
      <div className="timeline">
        {experiences.map((item) => (
          <div key={item.role} className="timeline-card fade-in">
            <div className="chip muted-chip">{item.dates}</div>
            <h3>{item.role}</h3>
            <p className="muted">{item.detail}</p>
          </div>
        ))}
      </div>
    </section>

    <section className="section fun">
      <div className="section-heading">
        <div>
          <p className="overline">More fun stuff I&apos;ve been a part of</p>
          <h2>Moments</h2>
        </div>
      </div>
      <div className="grid fun-grid">
        {funGallery.map((item) => {
          const isInternal = item.link?.startsWith('/')
          const content = (
            <>
              <img src={item.image} alt={item.title} loading="lazy" />
              <div className="fun-copy">
                <p className="label">{item.title}</p>
              </div>
            </>
          )
          return isInternal ? (
            <Link key={item.title} className="fun-card fade-in" to={item.link!}>
              {content}
            </Link>
          ) : (
            <a
              key={item.title}
              className="fun-card fade-in"
              href={item.link ?? '#contact'}
              target={item.link ? '_blank' : undefined}
              rel={item.link ? 'noreferrer' : undefined}
            >
              {content}
            </a>
          )
        })}
      </div>
    </section>

    <ContactSection />
  </div>
)

const AboutPage = () => (
  <div className="page-shell">
    <section className="section">
      <p className="overline">aboutme(˶ᵔᵕᵔ˶)</p>
      <h1>Nice to meet you or welcome back!</h1>
      <p className="muted">Here&apos;s what I&apos;ve been up to:</p>
    </section>

    <section className="section about">
      <div className="about-text">
        <div className="about-card">
          <p className="label">event director @ ubc biztech</p>
          <p className="strong">leading events for vancouver&apos;s tech community ᢉ𐭩</p>
        </div>
        <div className="about-list">
          <p className="label">What I do when I&apos;m not working:</p>
          <ul>
            <li>🩰 Hang out in the studio</li>
            <li>✈️ Travel</li>
            <li>👩🏻‍🍳 On my MasterChef journey</li>
            <li>⛰️ Hike (shoutout British Columbia mountains)</li>
            <li>📖 Journal</li>
          </ul>
        </div>
      </div>
      <div className="about-visual">
        <figure>
          <img
            src="https://framerusercontent.com/images/M7NZySSFmGcjnSecqOyhD935TQ.jpeg?scale-down-to=1024&width=8733&height=5822"
            alt="Event director highlight"
            loading="lazy"
          />
        </figure>
      </div>
    </section>

    <section className="section">
      <div className="figure-wide">
        <img
          src="https://framerusercontent.com/images/IABhnZYKUneXiw5yHAcVBE34twA.png?width=1138&height=1201"
          alt="hiker in nature"
          loading="lazy"
        />
      </div>
    </section>

    <ContactSection />
  </div>
)

const WorkPage = () => (
  <div className="page-shell">
    <section className="section">
      <p className="overline">work&projectportfolio</p>
      <h1>Thanks for being here and building with me ^_^</h1>
    </section>
    <section className="section">
      <p className="overline">all projects</p>
      <div className="grid projects-grid">
        {allProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>

    <section className="section">
      <div className="figure-wide">
        <img
          src="https://framerusercontent.com/images/IABhnZYKUneXiw5yHAcVBE34twA.png?width=1138&height=1201"
          alt="hiker in nature"
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
    <div className="page-shell">
      <div className="crumbs">
        <Link to="/work">All Projects</Link>
        <span className="divider">/</span>
        <span>{story.title}</span>
      </div>

      <StorySection story={story} />

      <div className="case-nav">
        {prev ? (
          <Link to={`/work/${prev.id}`} className="text-link">
            ‹ {prev.title}
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link to={`/work/${next.id}`} className="text-link">
            {next.title} ›
          </Link>
        ) : (
          <span />
        )}
      </div>

      <section className="section">
        <div className="figure-wide">
          <img
            src="https://framerusercontent.com/images/IABhnZYKUneXiw5yHAcVBE34twA.png?width=1138&height=1201"
            alt="hiker in nature"
            loading="lazy"
          />
        </div>
      </section>

      <ContactSection />
    </div>
  )
}

const Footer = () => (
  <footer className="site-footer">
    <div className="footer-inner">
      <span className="footer-name">Angela Huang</span>
      <nav className="footer-nav" aria-label="Footer">
        <Link to="/">home</Link>
        <Link to="/about">about me</Link>
        <Link to="/work">projects</Link>
      </nav>
    </div>
  </footer>
)

const Layout = () => (
  <div className="page">
    <header className="top-nav">
      <div className="nav-inner">
        <div className="nav-left">
          <Link className="brand" to="/" aria-label="Back to home">
            <span className="wing">🪽</span>
          </Link>
          <span className="nav-divider" aria-hidden="true">
            |
          </span>
          <nav className="nav-links" aria-label="Primary">
            {navItems.map((item) => (
              <Link key={item.to} to={item.to}>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="nav-right">
          <a href="https://www.linkedin.com" aria-label="LinkedIn" target="_blank" rel="noreferrer">
            <IconLinkedIn />
          </a>
          <a href="mailto:hello@angelatxhuang.com" aria-label="Email">
            <IconMail />
          </a>
        </div>
      </div>
    </header>

    <main className="content">
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
