import type { FC } from 'react'
import { type IconProp } from '@fortawesome/fontawesome-svg-core'
import * as solidIcons from '@fortawesome/pro-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { stegaClean } from '@sanity/client/stega'

import { cn } from '@alecia/util'

interface IconProps {
  className?: string
  name?: string | null
}

export const Icon: FC<IconProps> = (props) => {
  const iconName = props.name ? (stegaClean(props.name) as keyof typeof solidIcons) : undefined
  const iconProp = iconName ? (solidIcons[iconName] as IconProp) : undefined

  if (!iconProp) return null

  return (
    <FontAwesomeIcon
      icon={iconProp}
      className={cn('transition-all duration-200 ease-in-out', props.className)}
    />
  )
}
