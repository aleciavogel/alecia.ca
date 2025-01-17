import { courseListQueryPartial } from './courses.query'
import { galleryPetsQueryPartial } from './gallery-pets.query'
import { navCardQueryPartial, navIconsQueryPartial } from './nav.query'
import { textAsideListQueryPartial, textCtaQueryPartial } from './text.query'

export const modulesQueryPartial = `
  ...,
  ${navIconsQueryPartial},
  ${navCardQueryPartial},
  ${galleryPetsQueryPartial},
  ${textCtaQueryPartial},
  ${textAsideListQueryPartial},
  ${courseListQueryPartial}
`
