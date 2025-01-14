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
    {links?.map((link) =>
      stegaClean(link.icon) === 'faTransporterEmpty' ? (
        <TeleportNavLink key={link._key} {...link} />
      ) : (
        <IconNavLink key={link._key} {...link} />
      ),
    )}
  </ul>
)
