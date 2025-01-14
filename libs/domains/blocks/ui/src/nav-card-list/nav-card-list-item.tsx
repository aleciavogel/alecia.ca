import type { FC } from 'react'

import { LinkInternal } from '@alecia/sanity-types'

import { CenteredNavLink } from '../centered-nav-link'

export interface NavCardLinkProps extends LinkInternal {
  _key?: string
  slug?: string | null
}

export const NavCardListItem: FC<NavCardLinkProps> = ({ _key, slug, label, subtitle }) => (
  <li key={_key}>
    <CenteredNavLink href={slug ?? '#'} title={label ?? ''} description={subtitle ?? ''} />
  </li>
)
