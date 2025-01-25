import { stegaClean } from 'next-sanity'

import { NavIconsBlockType } from '@alecia/block-types'
import { cn } from '@alecia/util/styles'

import IconNavLink from '../icon-nav-link'
import TeleportNavLink from '../icon-nav-link/teleport'

type LinksType = NavIconsBlockType['links']

interface IconNavListProps {
  links: LinksType
}

const IconNavList = ({ links }: IconNavListProps) => (
  <ul className={cn('flex flex-col gap-6 max-md:text-center')}>
    {links?.map((link, index) =>
      link?.icon && stegaClean(link.icon) === 'faTransporterEmpty' ? (
        <TeleportNavLink key={`icon-nav${link?._id}-${index}`} {...link} />
      ) : (
        <IconNavLink key={`icon-nav${link?._id}-${index}`} {...link} />
      ),
    )}
  </ul>
)

export default IconNavList
