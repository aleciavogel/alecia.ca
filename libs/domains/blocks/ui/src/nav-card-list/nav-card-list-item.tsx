import type { FC } from 'react'

import { CenteredNavLink } from '..'

export interface NavCardLinkProps {
  _id?: string
  label?: string
  subtitle?: string
  slug?: string | null
}

export const NavCardListItem: FC<NavCardLinkProps> = ({ slug, label, subtitle }) => (
  <li>
    <CenteredNavLink href={slug ?? '#'} title={label ?? ''} description={subtitle ?? ''} />
  </li>
)
