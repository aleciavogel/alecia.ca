import type { ComponentPropsWithoutRef } from 'react'
import { forwardRef } from 'react'

import { cn } from '@alecia/util'

export const CardContent = forwardRef<HTMLDivElement, ComponentPropsWithoutRef<'div'>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('p-6 pt-0', className)} {...props} />
  ),
)

CardContent.displayName = 'CardContent'
