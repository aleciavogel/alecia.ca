'use client'

import type { ComponentPropsWithoutRef, ElementRef } from 'react'
import { forwardRef } from 'react'
import * as SheetPrimitive from '@radix-ui/react-dialog'

import { cn } from '@alecia/util'

import { MenuSheetPortal } from './menu-sheet-portal'

type SheetContentProps = ComponentPropsWithoutRef<typeof SheetPrimitive.Content>

export const MenuSheetContent = forwardRef<
  ElementRef<typeof SheetPrimitive.Content>,
  SheetContentProps
>(({ className, children, ...props }, ref) => (
  <MenuSheetPortal forceMount>
    <SheetPrimitive.Content
      ref={ref}
      className={cn('fixed inset-0 p-0 m-0 z-50', className)}
      {...props}
    >
      {children}
    </SheetPrimitive.Content>
  </MenuSheetPortal>
))

MenuSheetContent.displayName = 'MenuSheetContent'
