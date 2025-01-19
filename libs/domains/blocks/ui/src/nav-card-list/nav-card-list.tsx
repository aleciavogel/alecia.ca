import type { FC, JSX } from 'react'

import { cn } from '@alecia/util'

import { NavCardLinkProps, NavCardListItem } from './nav-card-list-item'

interface NavCardListProps {
  links?: NavCardLinkProps[] | null
}

export const NavCardList: FC<NavCardListProps> = ({ links = [] }): JSX.Element => (
  <ul className={cn('flex flex-col space-y-8')}>
    {links?.map((link) => (
      <NavCardListItem key={link._id} {...link} />
    ))}
  </ul>
)
