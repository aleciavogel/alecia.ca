'use client'

import type { ReactNode } from 'react'

import { useParallax } from '@alecia/core/scroll/hooks/use-parallax'
import { cn } from '@alecia/util/styles'

const DEFAULT_SPEED = 1

interface GalleryPetScrollWrapperProps {
  index: number
  className?: string
  children: ReactNode
}

const GroupItemScrollWrapper = ({ children, className }: GalleryPetScrollWrapperProps) => {
  const ref = useParallax<HTMLDivElement>({ speed: DEFAULT_SPEED })

  return (
    <div ref={ref} className={cn(className)}>
      {children}
    </div>
  )
}

export default GroupItemScrollWrapper
