import type { FC, JSX } from 'react'
import { stegaClean } from 'next-sanity'

import { InternalLinkProps } from '@alecia/types'
import { cn } from '@alecia/util'

import { IconNavLink, TeleportNavLink } from '../icon-nav-link'

interface IconNavListProps {
  links: InternalLinkProps[] | null
}

export const IconNavList: FC<IconNavListProps> = ({ links }): JSX.Element => (
  <ul className={cn('flex flex-col gap-6 max-md:text-center')}>
    {links?.map((link, index) =>
      link?.icon && stegaClean(link.icon) === 'faTransporterEmpty' ? (
        <TeleportNavLink key={`icon-nav${link?._key}-${index}`} {...link} />
      ) : (
        <IconNavLink key={`icon-nav${link?._key}-${index}`} {...link} />
      ),
    )}
  </ul>
)
