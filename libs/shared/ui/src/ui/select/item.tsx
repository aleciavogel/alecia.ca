'use client'

import type { ComponentPropsWithoutRef, ElementRef } from 'react'
import { forwardRef } from 'react'
import { CheckIcon } from '@radix-ui/react-icons'
import * as SelectPrimitive from '@radix-ui/react-select'

import { cn } from '@alecia/util/styles'

const SelectItem = forwardRef<
  ElementRef<typeof SelectPrimitive.Item>,
  ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(
      'relative flex items-center ',
      'w-full',
      'cursor-default select-none',
      'rounded-sm',
      'py-1.5 pl-2 pr-8',
      'text-sm',
      'outline-none',
      'focus:bg-accent-600/10 dark:focus:bg-primary-900 focus:text-body',
      'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      className,
    )}
    {...props}
  >
    <span className="absolute right-2 flex h-3.5 w-3.5 items-center justify-center">
      <SelectPrimitive.ItemIndicator>
        <CheckIcon className="h-4 w-4" />
      </SelectPrimitive.ItemIndicator>
    </span>
    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
))

SelectItem.displayName = 'SelectItem'

export default SelectItem
