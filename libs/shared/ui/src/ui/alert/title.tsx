import type { HTMLAttributes } from 'react'
import { forwardRef } from 'react'

import { cn } from '@alecia/util/styles'

const AlertTitle = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLHeadingElement>>(
  ({ className, children, ...props }, ref) => (
    <h5
      ref={ref}
      className={cn('mb-1 font-medium leading-none tracking-tight', className)}
      {...props}
    >
      {children}
    </h5>
  ),
)
AlertTitle.displayName = 'AlertTitle'

export default AlertTitle
