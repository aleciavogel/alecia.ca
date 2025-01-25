import type { ComponentPropsWithoutRef } from 'react'
import { forwardRef } from 'react'

import { cn } from '@alecia/util/styles'

const CardTitle = forwardRef<HTMLHeadingElement, ComponentPropsWithoutRef<'h3'>>(
  ({ className, children, ...props }, ref) => (
    <h3 ref={ref} className={cn('font-semibold leading-none tracking-tight', className)} {...props}>
      {children}
    </h3>
  ),
)

CardTitle.displayName = 'CardTitle'

export default CardTitle
