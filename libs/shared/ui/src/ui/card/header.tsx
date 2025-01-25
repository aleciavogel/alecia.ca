import type { ComponentPropsWithoutRef } from 'react'
import { forwardRef } from 'react'

import { cn } from '@alecia/util/styles'

const CardHeader = forwardRef<HTMLDivElement, ComponentPropsWithoutRef<'div'>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('flex flex-col space-y-1.5 p-6', className)} {...props} />
  ),
)

CardHeader.displayName = 'CardHeader'

export default CardHeader
