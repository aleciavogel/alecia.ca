import { internalLinkQueryPartial } from '@alecia/sanity-common'

export const navAboutQueryPartial = `
  _type == 'nav.about' => {
    links[]{
      ${internalLinkQueryPartial}
    },
    'image': image.asset->url,
    'alt': image.alt,
  }`

export const navExploreQueryPartial = `
  _type == 'nav.explore' => {
    links[]{
      ${internalLinkQueryPartial}
    }
  }`
