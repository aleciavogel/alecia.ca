import type { FC, ReactNode } from 'react'

import { Footer, StaticNav, StickyNav, StickyNavHoverLayer } from '@alecia/site-navigation'
import { cn } from '@alecia/util'

interface AngledWrapperProps {
  children?: ReactNode
  primaryColor?: string
  accentColor?: string
  bodyColor?: string
}

export const SiteWrapper: FC<AngledWrapperProps> = ({ children }) => (
  <div data-scroll-container id="site-wrapper" className={cn('relative h-full min-h-full w-full')}>
    <StickyNav />
    <StickyNavHoverLayer />

    <StaticNav />

    {children}
    <Footer />
  </div>
)
