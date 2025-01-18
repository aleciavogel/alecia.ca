'use client'

import type { ComponentPropsWithoutRef, ElementRef } from 'react'
import { forwardRef } from 'react'
import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu'

import { cn } from '@alecia/util'

export const NavigationMenuViewport = forwardRef<
  ElementRef<typeof NavigationMenuPrimitive.Viewport>,
  ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Viewport>
>(({ className, ...props }, ref) => (
  <div className={cn('absolute left-0 top-full flex justify-center')}>
    <NavigationMenuPrimitive.Viewport
      ref={ref}
      className={cn(
        'w-full md:w-[var(--radix-navigation-menu-viewport-width)]',
        'h-[var(--radix-navigation-menu-viewport-height)]',
        'relative origin-top-center mt-1.5',
        'border border-primary-600 border-opacity-100',
        'overflow-hidden rounded-md shadow-lg',
        'bg-primary-800 dark:bg-primary-900',
        'data-[state=open]:animate-in data-[state=closed]:animate-out',
        'data-[state=open]:zoom-in-90 data-[state=closed]:zoom-out-95',
        'data-[state=open]:fade-in data-[state=closed]:fade-out',
        className,
      )}
      {...props}
    />
  </div>
))

NavigationMenuViewport.displayName = NavigationMenuPrimitive.Viewport.displayName
