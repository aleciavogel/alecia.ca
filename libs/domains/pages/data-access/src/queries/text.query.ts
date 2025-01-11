import { internalLinkQueryPartial } from '@alecia/sanity-common'

export const textCtaQueryPartial = `
  _type == 'text.cta' => {
    ...,
    'linkIcon': link.item->icon.name,
    link {
      ${internalLinkQueryPartial}
    }
  }`
