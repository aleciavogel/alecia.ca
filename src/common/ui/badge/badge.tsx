import type { AnchorHTMLAttributes, HTMLAttributes, Ref } from 'react'
import { forwardRef } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import Link from 'next/link'

import { cn } from '@alecia/util/styles'

import badgeVariants from './variants'

export interface BadgeProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  href?: string
}

const Badge = forwardRef<HTMLDivElement | HTMLAnchorElement, BadgeProps>(
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

export default Badge
