import { internalLinkQueryPartial } from './links.query'

export const textCtaQueryPartial = `
  _type == 'text.cta' => {
    ...,
    'linkIcon': link.item->icon.name,
    link {
      ${internalLinkQueryPartial}
    }
  }`
