import type { FeaturedProject, ExperienceItem, GalleryItem, ProjectStory } from '../types'

export const featuredProjects: FeaturedProject[] = [
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

export const allProjects: FeaturedProject[] = [
  ...featuredProjects,
  {
    id: 'banana-art-lab',
    title: 'Art Studio Website Redesign',
    description: 'Full branding and website redesign for a local client',
    image:
      'https://framerusercontent.com/images/iq5snVem8c1ZI1yvUJIGDUo1Z0.png?width=1580&height=956',
  },
]

export const experiences: ExperienceItem[] = [
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

export const funGallery: GalleryItem[] = [
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

export const projectStories: ProjectStory[] = [
  {
    id: 'blueprint',
    title: 'Club Event',
    navTitle: 'BluePrint Conference',
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
    title: 'UXathon - 1st Place, Best Pitch',
    navTitle: 'safespace',
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
    title: 'StormHacks Winner (2/220 Projects)',
    navTitle: 'Encore',
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
    title: 'FLUI Design Competition - Best Visual Design',
    navTitle: 'Art Studio Website Redesign',
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

export const navItems = [
  { to: '/about', label: 'about me' },
  { to: '/work', label: 'projects' },
]
