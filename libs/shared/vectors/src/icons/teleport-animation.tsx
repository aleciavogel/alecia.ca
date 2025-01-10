'use client'

import { type FC, useEffect, useState } from 'react'
import { type IconProp } from '@fortawesome/fontawesome-svg-core'
import {
  faQuestion,
  faTransporter,
  faTransporter1,
  faTransporter2,
  faTransporter3,
  faTransporter4,
  faTransporter5,
  faTransporter6,
  faTransporter7,
  faTransporterEmpty,
} from '@fortawesome/pro-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ICONS: IconProp[] = [
  faTransporter,
  faTransporter1,
  faTransporter2,
  faTransporter3,
  faTransporter4,
  faTransporter5,
  faTransporter6,
  faTransporter7,
  faTransporterEmpty,
].reverse()

const FRAME_LENGTH = 50

interface TeleportAnimationProps {
  animationDirection: Omit<AnimationDirection, 'none'>
  className?: string
}

export type AnimationDirection = 'forward' | 'backward' | 'none'

export const TeleportAnimation: FC<TeleportAnimationProps> = ({ animationDirection, ...props }) => {
  const [currentIcon, setCurrentIcon] = useState<number>(0)

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null

    if (animationDirection === 'forward') {
      interval = setInterval(() => {
        setCurrentIcon((prev) => {
          if (prev !== ICONS.length - 1) {
            return (prev + 1) % ICONS.length
          }
          if (interval !== null) {
            clearInterval(interval)
          }
          return prev
        })
      }, FRAME_LENGTH)
    } else if (animationDirection === 'backward') {
      interval = setInterval(() => {
        setCurrentIcon((prev) => {
          if (prev !== 0) {
            return prev - 1
          }
          if (interval !== null) {
            clearInterval(interval)
          }
          return prev
        })
      }, FRAME_LENGTH)
    }

    return () => {
      if (interval !== null) {
        clearInterval(interval)
      }
    }
  }, [animationDirection])

  return <FontAwesomeIcon icon={ICONS[currentIcon] ?? faQuestion} {...props} />
}
