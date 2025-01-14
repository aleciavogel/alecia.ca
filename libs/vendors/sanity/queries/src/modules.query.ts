import { galleryPetsQueryPartial } from './gallery-pets.query'
import { navCardQueryPartial, navIconsQueryPartial } from './nav.query'
import { textCtaQueryPartial } from './text.query'

export const modulesQueryPartial = `
  ...,
  ${navIconsQueryPartial},
  ${navCardQueryPartial},
  ${galleryPetsQueryPartial},
  ${textCtaQueryPartial}
`
