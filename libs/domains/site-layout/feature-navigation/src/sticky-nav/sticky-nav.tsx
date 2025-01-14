import React, { type FC } from 'react'

import { DarkModeToggle } from '@alecia/dark-mode'
import { MenuToggle, SiteLogo, StickyHeader } from '@alecia/site-layout-ui'
import { cn } from '@alecia/util'

export interface StickyNavProps {
  className?: string
}

export const StickyNav: FC<StickyNavProps> = ({ className }) => (
  <StickyHeader className={cn('text-white', className)}>
    <SiteLogo />
    <div className="space-y-3">
      <MenuToggle />
      {/*<SearchTrigger />*/}
      <DarkModeToggle />
    </div>
  </StickyHeader>
)
