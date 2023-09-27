'use client'

import * as React from 'react'
import * as TooltipPrimitive from '@radix-ui/react-tooltip'

import { cn } from '@/common/lib/utils'

const TooltipProvider = TooltipPrimitive.Provider

const Tooltip = TooltipPrimitive.Root

const TooltipTrigger = TooltipPrimitive.Trigger

const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <TooltipPrimitive.Content
    ref={ref}
    sideOffset={sideOffset}
    className={cn(
      'z-50 overflow-hidden rounded-md', // Base styles
      'px-3 py-1.5', // Margin + Padding
      'bg-primary-800 dark:bg-primary-900', // Background color
      'border border-white',
      'text-xs text-white', // Text styles
      'animate-in data-[state=closed]:animate-out', // Animation
      'fade-in-0 data-[state=closed]:fade-out-0', // Fading
      'zoom-in-95 data-[state=closed]:zoom-out-95', // Zoom
      'data-[side=bottom]:slide-in-from-top-2', // Slide in from top
      'data-[side=left]:slide-in-from-right-2', // Slide in from right
      'data-[side=right]:slide-in-from-left-2', // Slide in from left
      'data-[side=top]:slide-in-from-bottom-2', // Slide in from bottom
      className,
    )}
    {...props}
  />
))
TooltipContent.displayName = TooltipPrimitive.Content.displayName

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider }
