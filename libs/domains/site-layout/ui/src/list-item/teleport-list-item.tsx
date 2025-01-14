'use client'

import { type FC, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { useTeleportAnimation } from '@alecia/animations'

import { ListItemProps } from './list-item'
import { StaticNavListItem } from './static-nav-list-item'

/**
 * Plays a teleport animation on hover
 */
export const TeleportListItem: FC<ListItemProps> = ({ label, href, description }) => {
  const [isHovering, setIsHovering] = useState<boolean>(false)
  const { teleportIcon } = useTeleportAnimation(isHovering ? 'forward' : 'backward')

  const handleMouseEnter = (): void => {
    setIsHovering(true)
  }

  const handleMouseLeave = (): void => {
    setIsHovering(false)
  }

  return (
    <StaticNavListItem
      href={href}
      title={label}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="text-sm text-white/90 font-medium leading-none">
        <FontAwesomeIcon icon={teleportIcon} className="mr-2" />
        {label}
      </div>
      {description ? (
        <p className="line-clamp-2 text-sm leading-snug text-white/60">{description}</p>
      ) : null}
    </StaticNavListItem>
  )
}
