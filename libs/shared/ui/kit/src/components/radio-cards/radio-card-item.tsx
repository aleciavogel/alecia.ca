'use client'

import type { ComponentProps, ElementRef } from 'react'
import { forwardRef } from 'react'
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'

import { cn } from '@alecia/util'

import { type IndicatorProps, RadioCardIndicator } from './radio-card-indicator'

type ExcludedRootProps = 'asChild' | 'color'

interface RadioCardItemProps
  extends IndicatorProps,
    Omit<ComponentProps<typeof RadioGroupPrimitive.Item>, ExcludedRootProps> {
  showIcon?: boolean
}

export const RadioCardItem = forwardRef<
  ElementRef<typeof RadioGroupPrimitive.Item>,
  RadioCardItemProps
>(
  (
    {
      showIcon = true,
      className,
      children,
      indicatorWrapperClassName,
      iconClassName,
      indicatorIcon,
      ...props
    },
    ref,
  ) => {
    return (
      <RadioGroupPrimitive.Item
        ref={ref}
        className={cn('group radio-card-item', className)}
        asChild={false}
        {...props}
      >
        <div className="flex gap-x-3">
          {showIcon ? (
            <RadioCardIndicator {...{ indicatorWrapperClassName, iconClassName, indicatorIcon }} />
          ) : null}
          <span className="flex-grow">{children}</span>
        </div>
      </RadioGroupPrimitive.Item>
    )
  },
)

RadioCardItem.displayName = 'RadioCardItem'
