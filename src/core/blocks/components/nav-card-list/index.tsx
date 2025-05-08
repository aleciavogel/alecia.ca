import { NavCardBlockType } from '@alecia/block-types'
import { cn } from '@alecia/util/styles'

import { NavCardListItem } from './nav-card-list-item'

type NavCardListProps = Pick<NavCardBlockType, 'links'>

const NavCardList = ({ links = [] }: NavCardListProps) => (
  <ul className={cn('flex flex-col space-y-8')}>
    {links?.map((link) => (
      <NavCardListItem key={link._id} {...link} />
    ))}
  </ul>
)

export default NavCardList
