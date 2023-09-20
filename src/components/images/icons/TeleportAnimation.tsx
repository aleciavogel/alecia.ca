'use client'
import { type FC, useState, useEffect } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { type IconProp } from '@fortawesome/fontawesome-svg-core'
import {
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

interface Props {
  animationDirection: Omit<AnimationDirection, 'none'>
  className?: string
}

type AnimationDirection = 'forward' | 'backward' | 'none'

const TeleportAnimation: FC<Props> = ({ animationDirection, ...props }) => {
  // I want to mimic what the CSS keyframes and reverse animation does for when
  // someone hovers over the parent element that wraps this component.
  // Basically, just cycle through the icons in the array one by one until every
  // frame has played once, then stop. If the user hovers away, tne frames should
  // start from the current frame and go backwards, stopping once at the beginning
  // frame again.
  const [currentIcon, setCurrentIcon] = useState<number>(0)

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null

    if (animationDirection === 'forward') {
      interval = setInterval(() => {
        setCurrentIcon((prev) => {
          if (prev !== ICONS.length - 1) {
            return (prev + 1) % ICONS.length
          } else {
            if (interval !== null) {
              clearInterval(interval)
            }
            return prev
          }
        })
      }, FRAME_LENGTH)
    } else if (animationDirection === 'backward') {
      if (interval !== null) {
        clearInterval(interval)
      }

      interval = setInterval(() => {
        setCurrentIcon((prev) => {
          if (prev !== 0) {
            return prev - 1
          } else {
            if (interval !== null) {
              clearInterval(interval)
            }
            return prev
          }
        })
      }, FRAME_LENGTH)
    }

    return () => {
      if (interval !== null) {
        clearInterval(interval)
      }
    }
  }, [animationDirection])

  return <FontAwesomeIcon icon={ICONS[currentIcon]} {...props} />
}

export default TeleportAnimation
