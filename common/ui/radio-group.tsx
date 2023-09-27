'use client'

import * as React from 'react'
import { CheckIcon } from '@radix-ui/react-icons'
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'

import { cn } from '@/common/lib/utils'

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => {
  return <RadioGroupPrimitive.Root className={cn('grid gap-2', className)} {...props} ref={ref} />
})
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName

// Allowing for custom icons
interface RadioGroupItemIconProp {
  children?: React.ReactNode
  iconClassName?: string
  circleClassName?: string
}

const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item> & RadioGroupItemIconProp
>(({ className, children, circleClassName, iconClassName, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={cn(
        'aspect-square rounded-full shadow', // Base styles for the container
        'h-4 w-4', // Sizing
        'border border-accent-500 dark:border-accent-300', // Border
        'text-primary-600 dark:text-primary-200', // Text
        // Focus styles
        'focus:outline-none',
        'focus-visible:ring-1 focus-visible:ring-ring',
        'disabled:cursor-not-allowed disabled:opacity-60', // Disabled styles
        className,
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator
        className={cn('flex items-center justify-center', circleClassName)}
      >
        {children !== undefined ? (
          children
        ) : (
          <CheckIcon className={cn('h-3.5 w-3.5', iconClassName ?? 'fill-primary-400')} />
        )}
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  )
})
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName

export { RadioGroup, RadioGroupItem }
