import { internalLinkQueryPartial } from './links.query'

export const navIconsQueryPartial = `
  _type == 'nav.icons' => {
    links[]{
      ${internalLinkQueryPartial}
    },
    'image': image.asset->url,
    'alt': image.alt,
  }`

export const navCardQueryPartial = `
  _type == 'nav.card' => {
    links[]{
      ${internalLinkQueryPartial}
    }
  }`
