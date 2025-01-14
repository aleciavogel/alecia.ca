'use client'

import type { ComponentProps, ElementRef } from 'react'
import { forwardRef } from 'react'
import { faCheck } from '@fortawesome/pro-solid-svg-icons/faCheck'
import { FontAwesomeIcon, type FontAwesomeIconProps } from '@fortawesome/react-fontawesome'
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'

import { cn } from '@alecia/util'

export interface IndicatorProps {
  indicatorWrapperClassName?: string
  iconClassName?: string
  indicatorIcon?: FontAwesomeIconProps['icon']
}

export const RadioCardIndicator = forwardRef<
  ElementRef<typeof RadioGroupPrimitive.Indicator>,
  IndicatorProps & Omit<ComponentProps<typeof RadioGroupPrimitive.Indicator>, 'className'>
>(({ indicatorWrapperClassName, iconClassName, indicatorIcon = faCheck, ...props }, ref) => (
  <div className={cn('indicator', indicatorWrapperClassName)}>
    <RadioGroupPrimitive.Indicator
      ref={ref}
      className={cn('flex items-center justify-center')}
      {...props}
    >
      <FontAwesomeIcon icon={indicatorIcon} className={cn('h-3 w-3', iconClassName)} />
    </RadioGroupPrimitive.Indicator>
  </div>
))

RadioCardIndicator.displayName = 'RadioCardIndicator'
