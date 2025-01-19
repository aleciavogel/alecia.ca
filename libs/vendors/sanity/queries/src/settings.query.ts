import { defineQuery } from 'next-sanity'

import {
  aboutDropdownQueryPartial,
  blogDropdownQueryPartial,
  promoDropdownQueryPartial,
  quoteDropdownQueryPartial,
} from './dropdown.query'
import {
  internalLinkQueryPartial,
  linkListQueryPartial,
  socialLinkQueryPartial,
} from './links.query'

export const settingsQuery = defineQuery(`
  *[_type == 'settings'][0]{
    ...,
    mainMenu{
      items[]{
        ${internalLinkQueryPartial},
        ${linkListQueryPartial},
        ${aboutDropdownQueryPartial},
        ${blogDropdownQueryPartial},
        ${promoDropdownQueryPartial},
        ${quoteDropdownQueryPartial}
      }
    },
    secondaryMenu{
      items[]{
        ...,
        ${linkListQueryPartial},
      }
    },
    'fullscreenMenu': fullscreenMenu[]{
      ...,
      ${internalLinkQueryPartial}
    },
    social[] {
      ${socialLinkQueryPartial}
    },
    'ogimage': image.asset->url + '?w=1200'
  }
`)
