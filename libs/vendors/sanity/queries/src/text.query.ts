import { internalLinkQueryPartial } from './links.query'

export const textCtaQueryPartial = `
  _type == 'text.cta' => {
    ...,
    'linkIcon': link.item->icon.name,
    link {
      ${internalLinkQueryPartial}
    }
  }
`

export const textAsideListQueryPartial = `
  _type == 'text.aside-list' => {
    ...,
    'listItems': listItems[],
  }
`

export const blockquoteQueryPartial = `
  _type == 'text.blockquote' => {
    ...
  }
`
