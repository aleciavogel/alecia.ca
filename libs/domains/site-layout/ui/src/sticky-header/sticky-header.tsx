import type { FC, ReactNode } from 'react'

import { cn } from '@alecia/util'

interface SiteHeaderProps {
  className?: string
  isHoverLayer?: boolean
  children: ReactNode
}

export const StickyHeader: FC<SiteHeaderProps> = ({
  children,
  className,
  isHoverLayer = false,
}) => (
  <div
    data-scroll
    data-scroll-sticky
    data-scroll-target="#site-wrapper"
    aria-hidden={!isHoverLayer}
    className={cn(
      'z-10 fixed top-0 left-0',
      'w-full flex items-start justify-between',
      'py-4 px-3 md:py-6 md:px-6',
      'text-base',
      'pointer-events-none',
      className,
    )}
  >
    {children}
  </div>
)
