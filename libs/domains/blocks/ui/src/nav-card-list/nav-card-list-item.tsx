import type { FC } from 'react'

import { CenteredNavLink } from '..'

export interface NavCardLinkProps {
  _key?: string
  label?: string
  subtitle?: string
  slug?: string | null
}

export const NavCardListItem: FC<NavCardLinkProps> = ({ slug, label, subtitle }) => (
  <CenteredNavLink href={slug ?? '#'} title={label ?? ''} description={subtitle ?? ''} />
)
