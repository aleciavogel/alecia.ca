'use client'

import React, { FC } from 'react'

import { DarkModeToggleHoverLayer } from '@alecia/dark-mode'
import {
  MenuSheetTrigger,
  MenuToggleHoverLayer,
  SiteLogoHoverLayer,
  StickyHeader,
} from '@alecia/site-layout-ui'
import { cn } from '@alecia/util'

import { StickyNavProps } from './sticky-nav'

export const StickyNavHoverLayer: FC<StickyNavProps> = ({ className }) => {
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
