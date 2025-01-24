import type { ReactNode } from 'react'

import { cn } from '@alecia/util'

const DEFAULT_DELAY = 0.07
const DEFAULT_SPEED = 1

interface GalleryPetScrollWrapperProps {
  index: number
  className?: string
  children: ReactNode
}

const GroupItemScrollWrapper = ({ children, className, index }: GalleryPetScrollWrapperProps) => (
  <div
    data-scroll
    data-scroll-speed={DEFAULT_SPEED}
    // TODO: Not sure if the delay actually makes any difference tbh
    data-scroll-delay={((index + 1) * DEFAULT_DELAY).toFixed(2)}
    className={cn(className)}
  >
    {children}
  </div>
)

export default GroupItemScrollWrapper
