import type { AnchorHTMLAttributes, HTMLAttributes, Ref } from 'react'
import { forwardRef } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import Link from 'next/link'

import { cn } from '@alecia/util'

export const badgeVariants = cva(
  cn(
    'space-x-2 px-1 py-1',
    'text-xs font-medium',
    'uppercase tracking-widest',
    'inline-flex items-center',
    'rounded-md border-2',
    'transition-all',
    'focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
    'border-transparent',
  ),
  {
    variants: {
      variant: {
        default: cn('bg-primary-100 text-primary-700'),
        white: 'text-primary-700 bg-white border-primary-600 opacity-90',
        secondary: cn('bg-accent-100 text-accent-700'),
        destructive: cn('bg-red-600 text-white'),
        outline: cn(
          'text-primary-600 border-primary-600 dark:text-primary-300 dark:border-primary-300',
        ),
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

export interface BadgeProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  href?: string
}

export const Badge = forwardRef<HTMLDivElement | HTMLAnchorElement, BadgeProps>(
  ({ className, variant, href, ...props }, ref) => {
    // Use a <Link> component if you want to make the badge clickable

    if (href) {
      // Extract props specific to <a> tag
      const anchorProps = props as AnchorHTMLAttributes<HTMLAnchorElement>

      return (
        <Link
          href={href}
          ref={ref as Ref<HTMLAnchorElement>}
          className={cn(badgeVariants({ variant }), className)}
          {...anchorProps}
        />
      )
    }

    // Extract props specific to <div> tag
    const divProps = props as HTMLAttributes<HTMLDivElement>

    return (
      <div
        ref={ref as Ref<HTMLDivElement>}
        className={cn(badgeVariants({ variant }), className)}
        {...divProps}
      />
    )
  },
)

Badge.displayName = 'Badge'
