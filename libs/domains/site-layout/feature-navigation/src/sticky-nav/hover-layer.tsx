'use client'

import React, { FC, useState } from 'react'

import { DarkModeToggleHoverLayer } from '@alecia/dark-mode'
import {
  FullscreenMenu,
  MenuSheet,
  MenuSheetTrigger,
  MenuToggleHoverLayer,
  SiteLogoHoverLayer,
  StickyHeader,
} from '@alecia/site-layout-ui'
import { cn } from '@alecia/util'

import { StickyNavProps } from './sticky-nav'

export const StickyNavHoverLayer: FC<StickyNavProps> = ({ className }) => {
  const [open, setOpen] = useState(false)

  return (
    <StickyHeader isHoverLayer className={cn('z-[100]', className)}>
      <SiteLogoHoverLayer />
      <div className="space-y-3">
        <MenuSheet open={open} onOpenChange={setOpen}>
          <MenuSheetTrigger>
            <MenuToggleHoverLayer />
          </MenuSheetTrigger>
          <FullscreenMenu open={open} />
        </MenuSheet>
        <DarkModeToggleHoverLayer />
      </div>
    </StickyHeader>
  )
}
