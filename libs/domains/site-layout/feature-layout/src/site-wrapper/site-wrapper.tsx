import type { ReactNode } from 'react'

import Footer from '@alecia/site-navigation/footer-nav'
import StaticNav from '@alecia/site-navigation/static-nav'
import { StickyNav, StickyNavHoverLayer } from '@alecia/site-navigation/sticky-nav'
import { cn } from '@alecia/util/styles'

interface AngledWrapperProps {
  children?: ReactNode
  primaryColor?: string
  accentColor?: string
  bodyColor?: string
  showStaticNav?: boolean
}

const SiteWrapper = ({ children, showStaticNav = true }: AngledWrapperProps) => (
  <div data-scroll-container id="site-wrapper" className={cn('relative h-full min-h-full w-full')}>
    <StickyNav />
    <StickyNavHoverLayer />

    {showStaticNav ? <StaticNav /> : null}

    {children}
    <Footer />
  </div>
)

export default SiteWrapper
