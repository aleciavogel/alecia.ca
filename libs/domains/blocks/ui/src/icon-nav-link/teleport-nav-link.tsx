'use client'

import { FC, useState } from 'react'

import { useTeleportAnimation } from '@alecia/animations'

import { IconNavLink, IconNavLinkProps } from './icon-nav-link'

export const TeleportNavLink: FC<IconNavLinkProps> = (props) => {
  const [isHovering, setIsHovering] = useState<boolean>(false)
  const { teleportIcon } = useTeleportAnimation(isHovering ? 'forward' : 'backward')

  const handleMouseEnter = (): void => {
    setIsHovering(true)
  }

  const handleMouseLeave = (): void => {
    setIsHovering(false)
  }

  return (
    <IconNavLink
      {...props}
      icon={teleportIcon}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    />
  )
}
