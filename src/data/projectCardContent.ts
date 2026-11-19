type SupportingIcon = 'trophy' | 'folder' | 'suitcase'

export const projectCardContent: Record<string, { title: string; accolade?: string; icon?: SupportingIcon }> = {
  'banana-art-lab': {
    title: 'Banana Art Lab: end-to-end branding and website redesign for a local art studio',
    accolade: 'Stream Winner - FLUI Design Competition',
  },
  safespace: {
    title: 'safespace: designing a journaling app that uses NFC technology',
    accolade: '1st Place Advanced & Best Pitch - UXathon',
  },
  'bakd-cookies-consulting': {
    title: 'BAK’D: developing marketing strategy for a business with 16K+ followers',
    accolade: 'Project',
    icon: 'folder',
  },
  'marketing-association-membership-portal': {
    title: 'MA Portal: building an event registration hub for 400+ club members',
    accolade: 'Top Club - Sauder CUS 2026',
  },
  encore: {
    title: 'Encore: making a companion app to enhance the live music experience',
    accolade: 'Stream winner - StormHacks',
  },
  blueprint: {
    title: "BluePrint: leading Vancouver's largest collegiate tech conference for 900+ members",
    accolade: 'Top Conference - Sauder CUS 2026',
  },
  doomagotchi: {
    title: 'Doomagotchi: a counterintuitive SillyHacks browser pet',
    accolade: 'Project',
    icon: 'folder',
  },
  hootsuite: {
    title: 'Hootsuite: analysing enterprise messaging and recommending lead-nurturing systems',
    accolade: 'Professional Work',
    icon: 'suitcase',
  },
}
