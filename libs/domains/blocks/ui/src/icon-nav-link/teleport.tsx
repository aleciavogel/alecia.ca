'use client'

import { useState } from 'react'

import useTeleportAnimation from '@alecia/animations/hooks/use-teleport-animation'

import IconNavLink from '.'
import { IconNavLinkProps } from './types'

const TeleportNavLink = (props: IconNavLinkProps) => {
  const [isHovering, setIsHovering] = useState<boolean>(false)
  const { teleportIcon } = useTeleportAnimation(isHovering)

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

export default TeleportNavLink
