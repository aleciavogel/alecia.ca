'use client'

import { useEffect, useState } from 'react'
import { IconName } from '@fortawesome/fontawesome-svg-core'

const ICONS: string[] = [
  'faTransporter',
  'faTransporter1',
  'faTransporter2',
  'faTransporter3',
  'faTransporter4',
  'faTransporter5',
  'faTransporter6',
  'faTransporter7',
  'faTransporterEmpty',
].reverse()

const FRAME_LENGTH = 50

export type AnimationDirection = 'forward' | 'backward' | 'none'

export const useTeleportAnimation = (animationDirection: Omit<AnimationDirection, 'none'>) => {
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

  return {
    teleportIcon: ICONS[currentIcon] as IconName,
  }
}
