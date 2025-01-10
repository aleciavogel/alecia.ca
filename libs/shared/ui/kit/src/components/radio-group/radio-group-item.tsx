'use client'

import type { ComponentPropsWithoutRef, ElementRef } from 'react'
import { forwardRef } from 'react'
import { CheckIcon } from '@radix-ui/react-icons'
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'

import { cn } from '@alecia/util'

export const RadioGroupItem = forwardRef<
  ElementRef<typeof RadioGroupPrimitive.Item>,
  ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ className, ...props }, ref) => (
  <RadioGroupPrimitive.Item
    ref={ref}
    className={cn(
      'aspect-square h-4 w-4 rounded-full border border-primary text-primary-600 dark:text-primary-300 shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
      className,
    )}
    {...props}
  >
    <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
      <CheckIcon className="h-3.5 w-3.5 fill-primary-600 dark:fill-primary-300" />
    </RadioGroupPrimitive.Indicator>
  </RadioGroupPrimitive.Item>
))

RadioGroupItem.displayName = 'RadioGroupItem'
