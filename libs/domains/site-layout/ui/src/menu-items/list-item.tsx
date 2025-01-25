'use client'

import { type FC } from 'react'
import { IconName } from '@fortawesome/pro-regular-svg-icons'
import { stegaClean } from '@sanity/client/stega'

import Icon from '@alecia/ui-kit/ui/icon'

import StaticNavListItem from './static'

export interface ListItemProps {
  label: string
  iconName?: string
  href: string
  description?: string
}

const ListItem: FC<ListItemProps> = ({ label, iconName, href, description }) => (
  <StaticNavListItem href={href} title={label}>
    <div className="text-sm text-white/90 font-medium leading-none">
      {iconName ? <Icon name={stegaClean(iconName) as IconName} className="mr-2" /> : null}
      {label}
    </div>
    {description ? (
      <p className="line-clamp-2 text-sm leading-snug text-white/60">{description}</p>
    ) : null}
  </StaticNavListItem>
)

export default ListItem
