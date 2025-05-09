import type { ButtonHTMLAttributes } from 'react'
import { forwardRef } from 'react'
import { Slot, Slottable } from '@radix-ui/react-slot'
import { type VariantProps } from 'class-variance-authority'

import { cn } from '@alecia/util/styles'

import { Spinner } from '../spinner'
import buttonVariants from './variants'

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  loading?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, disabled, loading, children, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        disabled={disabled || loading}
        {...props}
      >
        {loading && <Spinner className="mr-1.5 size-4 text-inherit" />}
        <Slottable>{children}</Slottable>
      </Comp>
    )
  },
)

Button.displayName = 'Button'

export default Button
