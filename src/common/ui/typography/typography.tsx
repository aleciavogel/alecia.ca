import type { ElementType, ReactNode } from 'react'
import type { VariantProps } from 'class-variance-authority'

import { cn } from '@alecia/util/styles'

import typographyVariants, { typographyVariantMap } from './variants'

interface TypographyProps extends VariantProps<typeof typographyVariants> {
  children: ReactNode
  className?: string
  as?: ElementType
  id?: string
}

const Typography = ({
  className,
  variant = 'p',
  size,
  weight,
  color,
  align,
  as,
  children,
  ...props
}: TypographyProps) => {
  const DefaultComponent = typographyVariantMap[variant ?? 'p'] ?? 'p'
  const Component = as ?? DefaultComponent
  const child =
    Component === 'blockquote' ? (
      <div className="leading-tight px-0 lg:px-4 py-12">{children}</div>
    ) : (
      children
    )

  return (
    <Component
      className={cn(typographyVariants({ variant, weight, align, color, size, className }))}
      {...props}
    >
      {child}
    </Component>
  )
}

export default Typography
