import type { FeaturedProject, ExperienceItem, GalleryItem, ProjectStory } from '../types'

export const featuredProjects: FeaturedProject[] = [
  {
    id: 'blueprint',
    title: 'BluePrint Conference',
    description: "Leading Vancouver's largest student-run tech conference",
    image:
      '/project-blueprint.webp',
  },
  {
    id: 'safespace',
    title: 'safespace',
    description: 'Wellness app that integrates into the physical space',
    image:
      '/project-safespace.webp',
  },
  {
    id: 'encore',
    title: 'Encore',
    description: 'Making the concert experience more social and connected',
    image:
      '/project-encore.webp',
  },
]

export const allProjects: FeaturedProject[] = [
  ...featuredProjects,
  {
    id: 'banana-art-lab',
    title: 'Art Studio Website Redesign',
    description: 'Full branding and website redesign for a local client',
    image:
      '/BananaArtLab.webm',
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
    role: 'Software Engineer & Marketing Consultant @ UBC Marketing Association',
    dates: 'Sep 2025 – Present',
    detail: '💻 Web development & GTM strategy',
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
    image: '/carousel-blueprint.webp',
    link: '/work/blueprint',
  },
  {
    title: 'dance battle!',
    image: '/carousel-udcbattle.webp',
    link: 'https://www.instagram.com/unlimiteddanceclub/',
  },
  {
    title: 'gateways marketing conference',
    image: '/carousel-gateways.webp',
    link: 'https://www.ubcma.ca/',
  },
  {
    title: 'choreographed a piece 💃',
    image: '/carousel-pug.webp',
  },
]

export const projectStories: ProjectStory[] = [
  {
    id: 'blueprint',
    title: 'Club Event',
    navTitle: 'BluePrint Conference',
    headline: "BluePrint – Vancouver's Largest Student-Led Tech Conference",
    hero:
      '/BluePrintStage.jpg',
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
      "BluePrint is a tech conference I led for UBC's largest tech club with 850+ members. Our mission was to help students find their place in the industry through workshops, networking, and mentor chats.",
    sections: [
      {
        title: 'My role sat at the intersection of creative strategy, execution, and people. Some of my responsibilities included:',
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
        title: 'MCing for the first time at a large-scale event',
        inlineVisual: {
          src: '/blueprint-mc.webp',
          alt: 'MCing at Blueprint',
        },
        inlineCaption: 'MCing for the first time at a large-scale event',
      },
      {
        title: 'Accessibility, inclusion, and impact',
        text: "Representation played a heavy influence throughout my planning. I'm proud of:",
        bullets: [
          'Intentionally sending female-identifying reps to the news, amplifying underrepresented voices',
          'Marketing the event to students of all backgrounds and skill levels, with the only requirement being an interest in business or technology',
          'Creating space for each attendee to make lasting connections, as company booths help them learn about the company, but small chats make real connections',
        ],
      },
      {
        title: 'Looking back',
        text: 'I’m incredibly grateful for the commitment that BizTech brought to the table each day. What makes our club special isn’t just the scale of what we do, but rather the intention behind it. That shared ambition is what drew me in, and it’s what made leading BluePrint both incredibly rewarding and incredibly hard.',
      },
    ],
    gallery: [
      {
        src: '/blueprint-commercenight.webp',
        alt: 'Winning Top Conference in my business school!',
      },
      {
        src: '/blueprint-slide.webp',
        alt: 'Our engineering team\'s tech',
      },
    ],
    closing: '',
  },
  {
    id: 'safespace',
    title: 'UXathon - 1st Place, Best Pitch',
    navTitle: 'safespace',
    headline: 'safespace – a habit app that integrates into the physical space',
    hero:
      '/Safespace-cover.webp',
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
        title: 'To further undertand the problem, our team explored:',
        text: 'A core feature is our NFC journal sticker. When placed on a notebook or in a designated goal space, it acts as a physical barrier for intentional rest. The sticker automatically launches safespace when you tap your phone and opens to a guided page with prompts and a focus timer.',
      },
      {
        title: 'Instead of asking: What did you accomplish today? It asks: Did you take time for your wellness goals today? to make recovery intentional',
        text: 'The focus is our NFC sticker. When placed on a notebook or in another designated goal space, it acts as a physical barrier for intentional rest. The NFC automatically launches safespace when you tap your phone and opens to a guided page with prompts and a focus timer.',
        inlineVisual: {
          src: '/Safespace-screens.webp',
          alt: 'Safespace screens',
        },
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
        src: '/Safespace-slide.webp',
        alt: 'Research pitch slide',
      },
      {
        src: '/Safespace-slidestyle.webp',
        alt: 'Brand style guide (essential for a design competition)',
      },
    ],
  },
  {
    id: 'encore',
    title: 'StormHacks Winner (2/220 Projects)',
    navTitle: 'Encore',
    headline: 'Encore – Your Concert Companion App',
    hero:
      '/encore-cover.webp',
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
        title: 'Each of our team members have gone to the same concerts this summer, yet we didn’t realize until after.',
        text: "Encore is our answer to two common pain points music-lovers face: (1) Not knowing who in your network is going to the same show, (2) Being unable to find each other once you’ve arrived at the crowded venue."
      },
      {
        title: 'Ticketing platforms currently optimize for sales, while social platforms optimize for post-event updates.',
        text: 'Our app bridges this social connection gap by allowing users to:',
        inlineVisual: {
          src: '/Encore-screens.webp',
          alt: 'Encore mobile screens',
        },
      },

      {
        title: 'What I learned from my first time at SFU ◡̈',
        bullets: [
          'Forestry is an important major',
          'The power of networking = free poke bowls',
          'Redbull gives you wings',
        ],
      },
  ],
  gallery: [
    {
      src: '/Encore-flow.webp',
      alt: 'Pitch slide',
    },
    {
      src: '/Encore-win.webp',
      alt: 'Our team :)',
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
        title: 'After meeting with our client, we clarified the objectives, limitations, and 3 pain points to influence our product design.',
        bullets: [
          'A faulty booking system',
          'Inconsistent branding & visual identity',
          "Interface that wasn't user-friendly",
        ],
      },
      {
        title: 'We approached this as both a UX and positioning problem.',
        text: 'Instead of only fixing the booking system, our team aligned brand and conversion flow to support one goal: making it easy and trustworthy to book. The actions included:',
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
        src: '/artstudio-research.webp',
        alt: 'FigJam notes from our client meeting',
      },
      {
        src: '/artstudio-slide.webp',
        alt: 'Hi-fi comparison with the original',
      },
    ],
  },
]

export const navItems = [
  { to: '/about', label: 'about me' },
  { to: '/work', label: 'projects' },
]
