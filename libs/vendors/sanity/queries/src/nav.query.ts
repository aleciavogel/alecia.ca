import { linkableReferencePartial } from './links.query'

export const navCardQueryPartial = `
  _type == 'nav.card' => {
    ...,
    ${linkableReferencePartial},
    'image': image.asset->url,
    'alt': image.alt
  }
`

export const navIconsQueryPartial = `
  _type == 'nav.icons' => {
    ...,
    ${linkableReferencePartial}
  }
`
