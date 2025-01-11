import { internalLinkQueryPartial } from './links.query'

export const blogDropdownQueryPartial = `
  _type == 'dropdown.blog' => {
    ...,
    links[]{
      _type == 'reference' => @->{
        ...,
        "slug": '/blog?category=' + slug.current,
        "icon": icon.name
      }
    }
  }
`

export const aboutDropdownQueryPartial = `
  _type == 'dropdown.about' => {
    ...,
    'image': image.asset->url,
    links[]{
      ${internalLinkQueryPartial}
    }
  }
`

export const promoDropdownQueryPartial = `
  _type == 'dropdown.promo' => {
    ...,
    links[]{
      ${internalLinkQueryPartial}
    }
  }
`

export const quoteDropdownQueryPartial = `
  _type == 'dropdown.quote' => {
    ...,
    links[]{
      ${internalLinkQueryPartial}
    }
  }
`
