'use client'

import { type FC, useState } from 'react'

import useTeleportAnimation from '@alecia/animations/hooks/use-teleport-animation'
import Icon from '@alecia/ui-kit/ui/icon'

import type { ListItemProps } from './list-item'
import StaticNavListItem from './static'

/**
 * Plays a teleport animation on hover
 */
const TeleportListItem: FC<ListItemProps> = ({ label, href, description }) => {
  const [isHovering, setIsHovering] = useState<boolean>(false)
  const { teleportIcon } = useTeleportAnimation(isHovering)

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
        <Icon name={teleportIcon} className="mr-2" />
        {label}
      </div>
      {description ? (
        <p className="line-clamp-2 text-sm leading-snug text-white/60">{description}</p>
      ) : null}
    </StaticNavListItem>
  )
}

export default TeleportListItem
