'use client'

import type { ComponentPropsWithoutRef } from 'react'
import { forwardRef } from 'react'

import { cn } from '@alecia/util/styles'

const HoverCardArrow = forwardRef<HTMLDivElement, ComponentPropsWithoutRef<'div'>>((props, ref) => (
  <div
    ref={ref}
    {...props}
    className={cn(
      'transition-none',
      'relative',
      'absolute h-0 w-0 -top-[22px] left-8',
      'border-[12px] border-transparent border-solid',
      'border-b-white dark:border-b-gray-900',

      /** pseudo-element for the border */
      'after:absolute after:h-0 after:w-0',
      'after:border-[15px] after:border-transparent after:border-solid',
      'after:border-b-primary-800 dark:after:border-b-primary-300',
      'after:contents[""]',
      'after:-top-[18px] after:-left-[15px]',
      'after:z-[-1]',
    )}
  />
))

HoverCardArrow.displayName = 'HoverCardArrow'

export default HoverCardArrow
