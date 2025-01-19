import type { FC, ReactNode } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import classNames from 'classnames'

import { calcWavyBorderMask, cn } from '@alecia/util'

import { StickyNav } from '../sticky-nav'

export const pageVariants = cva(
  cn(
    'absolute top-0 left-0',
    'h-full w-full',
    'transition-all duration-200 ease-in-out',
    'z-[-1]',
    'pointer-events-none',
    'border-0 border-transparent',
    'bg-primary-100 dark:bg-gray-900',
  ),
  {
    variants: {
      variant: {
        angled: 'clip-angled',
        rectangular: 'clip-rect',
        'angled-reverse': 'clip-angled-inverse',
        chevron: 'clip-chevron',
      },
    },
    defaultVariants: {
      variant: 'angled',
    },
  },
)

const WAVY_BORDER_MASK = { mask: calcWavyBorderMask({ position: 'bottom' }) }

interface PageContentsProps extends VariantProps<typeof pageVariants> {
  children: ReactNode
  className?: string
}

export const PageContents: FC<PageContentsProps> = ({ children, variant, className }) => (
  <main
    className={cn(
      'w-full',
      'relative overflow-hidden',
      classNames({
        'pt-[110px]': variant !== 'rectangular',
        'pt-20': variant === 'rectangular',
      }),
      '-mt-[var(--triangle-height)]',
      'mb-[-25px]',
      'pb-28',
      'h-full min-h-[500px]',
      'z-40',
      'flex flex-col gap-24 lg:gap-36',
      className,
    )}
  >
    {children}

    <div className={cn(pageVariants({ variant }))} style={WAVY_BORDER_MASK}>
      <StickyNav className="text-primary-600 dark:text-primary-400" />
    </div>
  </main>
)
