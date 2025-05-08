'use client'

import MenuSheetTrigger from '@alecia/common/ui/menu-sheet/trigger'
import { DarkModeToggleHoverLayer } from '@alecia/core/dark-mode/components/toggle'
import MenuToggleHoverLayer from '@alecia/core/layout/components/menu-toggle/hover-layer'
import SiteLogoHoverLayer from '@alecia/core/layout/components/site-logo/hover-layer'
import StickyHeader from '@alecia/core/layout/components/sticky-header'
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
