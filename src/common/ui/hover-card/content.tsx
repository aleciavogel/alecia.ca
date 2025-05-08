'use client'

import type { ComponentPropsWithoutRef, ElementRef } from 'react'
import { forwardRef } from 'react'
import { clsx } from 'clsx'

import { cn } from '@alecia/util/styles'

import * as HoverCardPrimitive from '../popper/hover-card'
import HoverCardArrow from './arrow'

const HoverCardContent = forwardRef<
  ElementRef<typeof HoverCardPrimitive.Content>,
  ComponentPropsWithoutRef<typeof HoverCardPrimitive.Content>
>(({ className, align = 'start', sideOffset = 20, children, ...props }, ref) => (
  <HoverCardPrimitive.Content
    ref={ref}
    align={align}
    sideOffset={sideOffset}
    className={cn(
      'z-30 w-[400px]',
      'rounded-md',
      'bg-white dark:bg-gray-900 text-primary-800',
      'text-primary-800 dark:text-primary-300',
      className,
    )}
    {...props}
  >
    <HoverCardArrow />
    <div
      className={clsx(
        cn(
          'border-2 border-primary-800 dark:border-primary-300',
          'rounded-md overflow-hidden h-full w-full',
          'shadow-primary-800 dark:shadow-primary-300',
        ),
        'shadow-flat',
      )}
    >
      {children}
    </div>
  </HoverCardPrimitive.Content>
))

HoverCardContent.displayName = 'HoverCardContent'

export default HoverCardContent
