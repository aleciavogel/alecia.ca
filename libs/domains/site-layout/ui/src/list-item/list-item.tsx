'use client'

import { type FC } from 'react'
import { type IconProp } from '@fortawesome/fontawesome-svg-core'
import { IconName } from '@fortawesome/pro-regular-svg-icons'
import { fas as faSolidIcons } from '@fortawesome/pro-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { stegaClean } from '@sanity/client/stega'

import { StaticNavListItem } from './static-nav-list-item'

export interface ListItemProps {
  label: string
  iconName?: string
  href: string
  description?: string
}

export const ListItem: FC<ListItemProps> = ({ label, iconName, href, description }) => (
  <StaticNavListItem href={href} title={label}>
    <div className="text-sm text-white/90 font-medium leading-none">
      {iconName ? (
        <FontAwesomeIcon icon={['fas', stegaClean(iconName) as IconName]} className="mr-2" />
      ) : null}
      {label}
    </div>
    {description ? (
      <p className="line-clamp-2 text-sm leading-snug text-white/60">{description}</p>
    ) : null}
  </StaticNavListItem>
)
