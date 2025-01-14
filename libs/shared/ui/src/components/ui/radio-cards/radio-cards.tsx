'use client'

import type { ComponentProps, ElementRef } from 'react'
import { forwardRef } from 'react'
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'

import { cn } from '@alecia/util'

type ExcludedRootProps = 'asChild' | 'color'
type RadioCardsRootProps = Omit<ComponentProps<typeof RadioGroupPrimitive.Root>, ExcludedRootProps>

export const RadioCards = forwardRef<
  ElementRef<typeof RadioGroupPrimitive.Root>,
  RadioCardsRootProps
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Root
      ref={ref}
      className={cn('grid grid-cols-1 md:grid-cols-2 gap-6 text-sm pr-[5px]', className)}
      {...props}
    />
  )
})

RadioCards.displayName = 'RadioCards'
