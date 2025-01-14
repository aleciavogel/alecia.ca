import { defineQuery } from 'next-sanity'

import { internalLinkQueryPartial, linkListQueryPartial } from './links.query'

export const settingsQuery = defineQuery(`
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
`)
