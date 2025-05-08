import { NavCardBlockType } from '@alecia/block-types'

import CenteredNavLink from './centered-nav-link'

type NavCardLink = NonNullable<NavCardBlockType['links']>[number]

export const NavCardListItem = ({ slug, label, subtitle }: NavCardLink) => (
  <li>
    <CenteredNavLink href={slug ?? '#'} title={label ?? ''} description={subtitle ?? ''} />
  </li>
)
