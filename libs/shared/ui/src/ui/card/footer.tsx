import type { ComponentPropsWithoutRef } from 'react'
import { forwardRef } from 'react'

import { cn } from '@alecia/util/styles'

const CardFooter = forwardRef<HTMLDivElement, ComponentPropsWithoutRef<'div'>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('flex items-center p-6 pt-0', className)} {...props} />
  ),
)

CardFooter.displayName = 'CardFooter'

export default CardFooter
