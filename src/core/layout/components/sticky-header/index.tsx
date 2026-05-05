import type { ReactNode } from 'react'

import { cn } from '@alecia/util/styles'

interface SiteHeaderProps {
  className?: string
  isHoverLayer?: boolean
  children: ReactNode
}

const StickyHeader = ({ children, className, isHoverLayer = false }: SiteHeaderProps) => (
  <div
    data-scroll
    data-scroll-sticky
    data-scroll-target="#site-wrapper"
    aria-hidden={!isHoverLayer}
    className={cn(
      'z-10 fixed top-0 left-0',
      'w-full flex items-start justify-between',
      'px-3 md:px-6 py-4 md:py-6',
      'text-base',
      'pointer-events-none',
      className,
    )}
  >
    {children}
  </div>
)

export default StickyHeader
