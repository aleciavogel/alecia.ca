import { faDribbble, faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'

import type { SocialLink } from './types'

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Follow me on GitHub',
    url: 'https://github.com/aleciavogel',
    icon: faGithub,
  },
  {
    label: 'Connect with me on LinkedIn',
    url: 'https://linkedin.com/in/alecia-vogel',
    icon: faLinkedin,
  },
  {
    label: 'View my work on Dribbble',
    url: 'https://dribbble.com/aleciavogel',
    icon: faDribbble,
  },
  {
    label: 'Follow me on Twitter',
    url: 'https://twitter.com/aleciavogel',
    icon: faTwitter,
  },
]
