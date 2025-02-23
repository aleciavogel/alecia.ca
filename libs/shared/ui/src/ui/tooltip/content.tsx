'use client'

import type { ComponentPropsWithoutRef, ElementRef } from 'react'
import { forwardRef } from 'react'
import * as TooltipPrimitive from '@radix-ui/react-tooltip'

import { cn } from '@alecia/util/styles'

const TooltipContent = forwardRef<
  ElementRef<typeof TooltipPrimitive.Content>,
  ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <TooltipPrimitive.Content
    ref={ref}
    sideOffset={sideOffset}
    className={cn(
      'z-50 overflow-hidden rounded-md',
      'px-3 py-1.5',
      'bg-primary-800 dark:bg-primary-900',
      'border border-white',
      'text-xs text-white',
      'animate-in data-[state=closed]:animate-out',
      'fade-in-0 data-[state=closed]:fade-out-0',
      'zoom-in-95 data-[state=closed]:zoom-out-95',
      'data-[side=bottom]:slide-in-from-top-2',
      'data-[side=left]:slide-in-from-right-2',
      'data-[side=right]:slide-in-from-left-2',
      'data-[side=top]:slide-in-from-bottom-2',
      className,
    )}
    {...props}
  />
))

TooltipContent.displayName = TooltipPrimitive.Content.displayName

export default TooltipContent
