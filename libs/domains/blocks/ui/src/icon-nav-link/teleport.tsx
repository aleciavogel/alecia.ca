'use client'

import { ComponentPropsWithoutRef, useState } from 'react'

import useTeleportAnimation from '@alecia/animations/hooks/use-teleport-animation'
import { NavIconsBlockType } from '@alecia/block-types'

import IconNavLink from '.'

type IconNavLinkType = NonNullable<NavIconsBlockType['links']>[number] &
  ComponentPropsWithoutRef<'a'>

const TeleportNavLink = (props: IconNavLinkType) => {
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
