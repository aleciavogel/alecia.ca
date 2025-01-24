import { courseListQueryPartial } from './courses.query'
import { galleryPetsQueryPartial } from './gallery-pets.query'
import { imageWithTextQueryPartial } from './image-with-text.query'
import { navCardQueryPartial, navIconsQueryPartial } from './nav.query'
import {
  blockquoteQueryPartial,
  textAsideListQueryPartial,
  textCtaQueryPartial,
} from './text.query'

export const modulesQueryPartial = `
  ...,
  ${navIconsQueryPartial},
  ${navCardQueryPartial},
  ${galleryPetsQueryPartial},
  ${textCtaQueryPartial},
  ${textAsideListQueryPartial},
  ${courseListQueryPartial},
  ${imageWithTextQueryPartial},
  ${blockquoteQueryPartial}
`
