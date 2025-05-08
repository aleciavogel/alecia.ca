import { cva } from 'class-variance-authority'

import { cn } from '@alecia/util/styles'

const badgeVariants = cva(
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

export default badgeVariants
