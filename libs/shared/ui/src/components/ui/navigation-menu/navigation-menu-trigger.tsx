'use client'

import type { ComponentPropsWithoutRef, ElementRef } from 'react'
import { forwardRef } from 'react'
import { ChevronDownIcon } from '@radix-ui/react-icons'
import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu'
import { cva } from 'class-variance-authority'

import { cn } from '@alecia/util'

export const navigationMenuTriggerStyle = cva(
  cn(
    'h-9 w-max rounded-md px-4 py-2',
    'group inline-flex items-center justify-center',
    'rounded-md focus:outline-none',
    'text-sm',
    'text-white/70 hover:text-white focus:text-white',
    'bg-transparent',
    'hover:bg-primary-800 focus:bg-primary-700',
    'dark:data-[active]:bg-primary-700',
    'data-[state=open]:bg-primary-700',
    'disabled:opacity-50 disabled:pointer-events-none',
    'transition-colors duration-200',
  ),
)

export const NavigationMenuTrigger = forwardRef<
  ElementRef<typeof NavigationMenuPrimitive.Trigger>,
  ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Trigger
    ref={ref}
    className={cn(navigationMenuTriggerStyle(), 'group', className)}
    {...props}
  >
    {children}
    <ChevronDownIcon
      className="relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180"
      aria-hidden="true"
    />
  </NavigationMenuPrimitive.Trigger>
))

NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName
