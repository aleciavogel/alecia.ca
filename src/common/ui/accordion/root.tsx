'use client'

import type { ComponentPropsWithoutRef, ElementRef } from 'react'
import { forwardRef } from 'react'
import * as AccordionPrimitive from '@radix-ui/react-accordion'

import { cn } from '@alecia/util/styles'

const Accordion = forwardRef<
  ElementRef<typeof AccordionPrimitive.Root>,
  ComponentPropsWithoutRef<typeof AccordionPrimitive.Root>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Root
    ref={ref}
    className={cn('space-y-8 max-w-screen-sm', className)}
    {...props}
  />
))

Accordion.displayName = 'Accordion'

export default Accordion
