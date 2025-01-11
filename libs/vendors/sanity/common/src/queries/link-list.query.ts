import { internalLinkQueryPartial } from './link-internal.query'

export const linkListQueryPartial = `
  _type == 'link.list' => {
    links[]{
      ${internalLinkQueryPartial}
    }
  }
`
