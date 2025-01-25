'use client'

import { DarkModeToggleHoverLayer } from '@alecia/dark-mode/toggle'
import MenuToggleHoverLayer from '@alecia/site-layout-ui/menu-toggle/hover-layer'
import SiteLogoHoverLayer from '@alecia/site-layout-ui/site-logo/hover-layer'
import StickyHeader from '@alecia/site-layout-ui/sticky-header'
import MenuSheetTrigger from '@alecia/ui-kit/ui/menu-sheet/trigger'
import { cn } from '@alecia/util/styles'

import { StickyNavProps } from './sticky-nav'

export const StickyNavHoverLayer = ({ className }: StickyNavProps) => {
  return (
    <StickyHeader isHoverLayer className={cn('z-[100]', className)}>
      <SiteLogoHoverLayer />
      <div className="space-y-3">
        <MenuSheetTrigger>
          <MenuToggleHoverLayer />
        </MenuSheetTrigger>
        <DarkModeToggleHoverLayer />
      </div>
    </StickyHeader>
  )
}

export default StickyNavHoverLayer
