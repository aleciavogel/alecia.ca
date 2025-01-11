import groq from 'groq'

import { internalLinkQueryPartial } from './link-internal.query'
import { linkListQueryPartial } from './link-list.query'

export const settingsQuery = groq`
  *[_type == 'settings'][0]{
    ...,
    mainMenu{
      items[]{
        ${internalLinkQueryPartial},
        ${linkListQueryPartial},
        _type == 'dropdown.about' => {
          ...,
          'image': image.asset->url,
          links[]{
            ${internalLinkQueryPartial}
          }
        },
        _type == 'dropdown.blog' => {
          ...,
          links[]{
            _type == 'reference' => @->{
              ...,
              "slug": '/blog?category=' + slug.current,
              "icon": icon.name
            }
          }
        },
        _type == 'dropdown.promo' => {
          ...,
          links[]{
            ${internalLinkQueryPartial}
          }
        },
        _type == 'dropdown.quote' => {
          ...,
          links[]{
            ${internalLinkQueryPartial}
          }
        }
      }
    },
    secondaryMenu{
      items[]{
        ...,
        ${linkListQueryPartial},
      }
    },
    'ogimage': image.asset->url + '?w=1200'
  }
`
