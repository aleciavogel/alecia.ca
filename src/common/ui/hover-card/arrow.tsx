'use client'

import type { ComponentPropsWithoutRef } from 'react'
import { forwardRef } from 'react'

import { cn } from '@alecia/util/styles'

import * as HoverCardPrimitive from '../popper/hover-card'

const HoverCardArrow = forwardRef<HTMLDivElement, ComponentPropsWithoutRef<'div'>>((props, ref) => (
  <HoverCardPrimitive.Arrow asChild>
    <div
      ref={ref}
      {...props}
      className={cn(
        'transition-none',
        'absolute',
        'h-0 w-0 bg-transparent',
        'border-[12px] border-transparent border-solid',
        'border-t-white dark:border-t-gray-900',

        /** pseudo-element for the border */
        'after:absolute after:h-0 after:w-0 after:top-[-9px] after:-right-[15px]',
        'after:border-[15px] after:border-transparent after:border-solid',
        'after:border-t-primary-800 dark:after:border-t-primary-300',
        'after:contents[""]',
        'after:z-[-1]',
      )}
    />
  </HoverCardPrimitive.Arrow>
))

HoverCardArrow.displayName = 'HoverCardArrow'

export default HoverCardArrow
