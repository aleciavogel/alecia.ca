import type { FC, ReactNode } from 'react'
import { type VariantProps } from 'class-variance-authority'

import { Footer, StaticNav, StickyNav, StickyNavHoverLayer } from '@alecia/site-navigation'
import { cn } from '@alecia/util'

import { type pageVariants } from '../page-contents'

interface AngledWrapperProps extends VariantProps<typeof pageVariants> {
  children?: ReactNode
  primaryColor?: string
  accentColor?: string
  bodyColor?: string
}

export const SiteWrapper: FC<AngledWrapperProps> = ({
  children,
  primaryColor = 'violet',
  accentColor = 'pink',
  bodyColor = 'gray',
}) => (
  <div
    data-scroll-container
    id="site-wrapper"
    className={cn(
      'relative h-full min-h-full w-full',
      `primary-${primaryColor} accent-${accentColor} body-${bodyColor}`,
    )}
  >
    <StickyNav />
    <StickyNavHoverLayer />

    <StaticNav />

    {children}
    <Footer />
  </div>
)
