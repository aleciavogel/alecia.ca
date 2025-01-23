import type { FC, ReactNode } from 'react'
import { type VariantProps } from 'class-variance-authority'
import classNames from 'classnames'

import { pageVariants } from '@alecia/pages-constants'
import { calcWavyBorderMask, cn } from '@alecia/util'

import { StickyNav } from '../sticky-nav'

const WAVY_BORDER_MASK = { mask: calcWavyBorderMask({ position: 'bottom' }) }

interface PageContentsProps extends VariantProps<typeof pageVariants> {
  children: ReactNode
  className?: string
  isWavy?: boolean
}

export const PageContents: FC<PageContentsProps> = ({
  children,
  variant,
  className,
  isWavy = true,
}) => (
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
      'min-h-[500px]',
      'z-40',
      'flex flex-col gap-24 lg:gap-36',
      'box-content',
      'border-none',
      'border-0',
      className,
    )}
  >
    {children}

    <div className={cn(pageVariants({ variant }))} style={isWavy ? WAVY_BORDER_MASK : undefined}>
      <StickyNav className="text-primary-600 dark:text-primary-400" />
    </div>
  </main>
)
