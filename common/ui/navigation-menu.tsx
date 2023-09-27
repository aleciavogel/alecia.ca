'use client'

import * as React from 'react'
import { ChevronDownIcon } from '@radix-ui/react-icons'
import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu'
import { cva } from 'class-variance-authority'

import { cn } from '@/common/lib/utils'

const NavigationMenu = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Root
    ref={ref}
    className={cn('relative flex max-w-max flex-1 items-center justify-center', className)}
    {...props}
  >
    {children}
    <NavigationMenuViewport />
  </NavigationMenuPrimitive.Root>
))
NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName

/**
 * This is the list that appears as the group of links at the top of the page
 */
const NavigationMenuList = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.List>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.List
    ref={ref}
    className={cn('group flex flex-1 list-none items-center justify-center space-x-1', className)}
    {...props}
  />
))
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName

const NavigationMenuItem = NavigationMenuPrimitive.Item

// Styles for the menu trigger buttons
const navigationMenuTriggerStyle = cva(
  cn(
    // Base styles
    'h-9 w-max rounded-md px-4 py-2', // Sizing
    'group inline-flex items-center justify-center', // Flexbox
    'rounded-md focus:outline-none', // Other container styles
    'text-sm font-medium', // Base Font style
    // Colors
    'text-white/70 hover:text-white focus:text-white', // Text
    'bg-primary-800 hover:bg-primary-700 focus:bg-primary-600', // Light mode bg
    'dark:bg-primary-900 dark:hover:bg-primary-800 dark:focus:bg-primary-700', // Dark mode bg
    'data-[active]:bg-primary-600 dark:data-[active]:bg-primary-700', // Bg when button is active
    'data-[state=open]:bg-primary-600 dark:data-[state=open]:bg-primary-700', // Bg when menu is open
    // Disabled
    'disabled:opacity-50 disabled:pointer-events-none', // Opacity and pointer events
    // Transition
    'transition-colors duration-300', // Only transition bg and text colors
  ),
)

const NavigationMenuTrigger = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Trigger
    ref={ref}
    className={cn(navigationMenuTriggerStyle(), 'group', className)}
    {...props}
  >
    {children}{' '}
    <ChevronDownIcon
      className={cn(
        'relative top-[1px]', // Position
        'h-3 w-3', // Sizing
        'ml-1', // Margin & padding
        'group-data-[state=open]:rotate-180', // When open, rotate the icon
        'transition duration-300', // Transition
      )}
      aria-hidden="true"
    />
  </NavigationMenuPrimitive.Trigger>
))
NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName

const NavigationMenuContent = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Content>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Content
    ref={ref}
    className={cn(
      'md:absolute left-0 top-0', // Positioning
      'w-full md:w-auto', // Sizing
      'data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out', // Animation
      'data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out', // Fade in/out
      'data-[motion=from-end]:slide-in-from-right-52 data-[motion=to-end]:slide-out-to-right-52', // Slide in/out (right)
      'data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-start]:slide-out-to-left-52', // Slide in/out (left)
      className,
    )}
    {...props}
  />
))
NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName

const NavigationMenuLink = NavigationMenuPrimitive.Link

const NavigationMenuViewport = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Viewport>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Viewport>
>(({ className, ...props }, ref) => (
  <div className={cn('absolute left-0 top-full flex justify-center')}>
    <NavigationMenuPrimitive.Viewport
      className={cn(
        // Base styles
        'w-full md:w-[var(--radix-navigation-menu-viewport-width)]', // Width
        'h-[var(--radix-navigation-menu-viewport-height)]', // Height
        'relative origin-top-center', // Positioning
        'mt-1.5', // Margin
        'border border-white border-opacity-100', // Border
        'overflow-hidden rounded-md shadow-lg', // Other container styles
        'bg-primary-800 dark:bg-primary-900',
        'data-[state=open]:animate-in data-[state=closed]:animate-out', // Animation
        'data-[state=open]:zoom-in-90 data-[state=closed]:zoom-out-95', // Zoom in/out
        'data-[state=open]:fade-in data-[state=closed]:fade-out', // Fade in/out
        className,
      )}
      ref={ref}
      {...props}
    />
  </div>
))
NavigationMenuViewport.displayName = NavigationMenuPrimitive.Viewport.displayName

const NavigationMenuIndicator = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Indicator>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Indicator>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Indicator
    ref={ref}
    className={cn(
      'top-full flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in',
      className,
    )}
    {...props}
  >
    <div className="relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-white/70 shadow-md" />
  </NavigationMenuPrimitive.Indicator>
))
NavigationMenuIndicator.displayName = NavigationMenuPrimitive.Indicator.displayName

export {
  navigationMenuTriggerStyle,
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
}
