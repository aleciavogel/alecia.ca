import { cva } from 'class-variance-authority'

import { cn } from '@alecia/util/styles'

export const pageVariants = cva(
  cn(
    'absolute top-0 left-0',
    'h-full w-full',
    'transition-all duration-200 ease-in-out',
    'z-[-1]',
    'pointer-events-none',
    'bg-primary-100 dark:bg-gray-900',
    'border-none box-content',
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
