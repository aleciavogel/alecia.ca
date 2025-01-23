import type { ElementType, FC, ReactNode } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@alecia/util'

/**
 * IMPORTANT: if you add a variant to this, you HAVE to update the typographyVariantMap
 * below, or you will get an "Error: Unsupported Server Component type: undefined" error
 * when you try to use the Typography component.
 */
export const typographyVariants = cva('font-normal leading-snug transition-dark-mode', {
  variants: {
    variant: {
      h1: 'scroll-m-20 font-serif text-3xl md:text-6xl text-primary',
      h2: 'scroll-m-20 font-serif text-2xl md:text-5xl text-primary',
      h3: 'scroll-m-20 font-serif-small text-xl md:text-4xl text-primary',
      h4: 'scroll-m-20 font-serif-small text-lg md:text-2xl text-primary',
      h5: 'scroll-m-20 font-sans-serif font-bold text-base md:text-lg text-primary',
      h6: 'scroll-m-20 font-sans-serif font-semibold text-sm md:text-base',
      p: 'text-sm md:text-base leading-relaxed text-body',
      blockquote: cn(
        'text-center',
        'w-full sm:max-w-screen-sm lg:max-w-screen-md',
        'text-2xl sm:text-5xl font-normal font-serif',
        'py-10 sm:px-10',
        'mx-auto sm:my-16',
        'text-primary-600 dark:text-primary-400',
        // Before and after pseudo-elements (both are the same)
        "after:content-[''] after:block after:relative after:mx-auto after:zigzag-base after:max-w-[300px] after:zigzag-bg-primary",
        "before:content-[''] before:block before:relative before:mx-auto before:zigzag-base before:max-w-[300px] before:zigzag-bg-primary",
      ),
      author: 'text-sm md:text-lg font-sans-serif mt-3',
      ul: 'my-6 ml-6 list-disc [&>li]:mt-2',
      ol: 'my-6 ml-6 list-decimal [&>li]:mt-2',
      lead: 'text-sm md:text-xl text-muted-foreground',
      large: 'text-lg font-semibold',
      small: 'text-xs md:text-sm leading-none',
      strike: 'text-accent',
      'mini-title': 'font-semibold uppercase text-accent-600 dark:text-accent-300',
      'footer-bio-name':
        'font-serif text-3xl min-[300px]:text-4xl min-[400px]:text-5xl md:text-4xl lg:text-5xl',
      'footer-nav-title': 'font-semibold text-primary-300 uppercase',
      pretitle: cn(
        'font-semibold',
        'text-primary-200',
        'text-base min-[970px]:text-lg',
        'uppercase tracking-widest',
      ),
      'home-title': cn(
        'font-serif-small md:font-serif',
        'text-4xl min-[800px]:text-5xl min-[970px]:text-6xl xl:text-7xl',
      ),
      subtitle: 'text-base sm:text-lg md:text-xl lg:text-2xl text-primary-100',
      blockPretitle: cn('font-semibold uppercase text-primary-800 dark:text-primary-500'),
      blockTitle: cn(
        'scroll-m-20 font-serif text-4xl  md:text-5xl lg:text-7xl  text-primary',
        'text-primary-800 dark:text-primary-300',
      ),
      galleryTitle: cn(
        'scroll-m-20 font-serif text-2xl  md:text-3xl lg:text-5xl',
        'text-primary-800 dark:text-primary-300',
      ),
      galleryLabel: cn('font-semibold uppercase text-white tracking-widest'),
    },
    size: {
      default: '',
      xs: 'text-xs',
      sm: 'text-sm',
      lg: 'text-lg',
      xl: 'text-xl',
      '2xl': 'text-lg md:text-2xl',
      '3xl': 'text-lg md:text-3xl',
      '4xl': 'text-xl md:text-4xl',
      '5xl': 'text-2xl md:text-5xl',
      '6xl': 'text-3xl md:text-6xl',
    },
    weight: {
      default: '',
      light: 'font-light',
      normal: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold',
    },
    align: {
      default: '',
      left: 'text-left',
      center: 'text-center',
      right: 'text-right',
    },
    color: {
      default: '',
      body: 'text-body',
      primary: 'text-primary',
      accent: 'text-accent',
      muted: 'text-primary-900/30',
    },
  },
  defaultVariants: {
    variant: 'p',
    size: 'default',
    weight: 'default',
    align: 'default',
    color: 'default',
  },
})

interface TypographyProps extends VariantProps<typeof typographyVariants> {
  children: ReactNode
  className?: string
  as?: ElementType
  id?: string
}

export const typographyVariantMap: Record<string, ElementType> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  p: 'p',
  blockquote: 'blockquote',
  author: 'p',
  ul: 'ul',
  ol: 'ol',
  li: 'li',
  lead: 'p',
  large: 'div',
  small: 'small',
  strike: 'del',
  'mini-title': 'p',
  'footer-nav-title': 'h3',
  'footer-bio-name': 'h2',
  'home-title': 'h1',
  blockPretitle: 'p',
  blockTitle: 'h2',
  galleryTitle: 'h2',
}

export const Typography: FC<TypographyProps> = ({
  className,
  variant = 'p',
  size,
  weight,
  color,
  align,
  as,
  children,
  ...props
}) => {
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
