import type { HTMLAttributes } from 'react'
import { forwardRef } from 'react'
import { type VariantProps } from 'class-variance-authority'

import { cn } from '@alecia/util/styles'

import alertVariants from './variants'

const Alert = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
>(({ className, variant, ...props }, ref) => (
  <div ref={ref} role="alert" className={cn(alertVariants({ variant }), className)} {...props} />
))
Alert.displayName = 'Alert'

export default alertVariants
