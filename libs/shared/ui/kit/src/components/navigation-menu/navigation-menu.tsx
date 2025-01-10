'use client'

import type { ComponentPropsWithoutRef, ElementRef } from 'react'
import { forwardRef } from 'react'
import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu'

import { cn } from '@alecia/util'

import { NavigationMenuViewport } from './navigation-menu-viewport'

export const NavigationMenu = forwardRef<
  ElementRef<typeof NavigationMenuPrimitive.Root>,
  ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Root
    ref={ref}
    className={cn('relative z-[101] flex max-w-max flex-1 items-center justify-center', className)}
    {...props}
  >
    {children}
    <NavigationMenuViewport />
  </NavigationMenuPrimitive.Root>
))

NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName
