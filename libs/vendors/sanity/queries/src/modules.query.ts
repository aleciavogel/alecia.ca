import { galleryPetsQueryPartial } from './gallery-pets.query'
import { navAboutQueryPartial, navExploreQueryPartial } from './nav.query'
import { textCtaQueryPartial } from './text.query'

export const modulesQueryPartial = `
  ...,
  ${navAboutQueryPartial},
  ${navExploreQueryPartial},
  ${galleryPetsQueryPartial},
  ${textCtaQueryPartial}
`
