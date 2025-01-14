import type { FC, ReactNode } from 'react'

import { cn } from '@alecia/util'

const DEFAULT_DELAY = 0.07
const DEFAULT_SPEED = 1

interface GalleryPetScrollWrapperProps {
  index: number
  className?: string
  children: ReactNode
}

export const GalleryPetScrollWrapper: FC<GalleryPetScrollWrapperProps> = ({
  children,
  className,
  index,
}) => (
  <div
    data-scroll
    data-scroll-speed={DEFAULT_SPEED}
    data-scroll-delay={((index + 1) * DEFAULT_DELAY).toFixed(2)}
    className={cn(className)}
  >
    {children}
  </div>
)
