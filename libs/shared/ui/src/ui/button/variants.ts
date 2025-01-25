import { cva } from 'class-variance-authority'

import { cn } from '@alecia/util/styles'

const buttonVariants = cva(
  cn(
    'inline-flex items-center justify-center',
    'whitespace-nowrap text-sm font-medium',
    'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring',
    'disabled:pointer-events-none disabled:opacity-50',
  ),
  {
    variants: {
      variant: {
        default: cn(
          'animated-flat-shadow',
          'border-2 border-primary-600 dark:border-primary-300',
          'text-white dark:text-primary-900',
          'bg-primary-600 dark:bg-primary-300',
          'hover:bg-primary-500 hover:border-primary-500',
          'dark:hover:bg-primary-200 dark:hover:border-primary-200',
          'shadow-primary-800 dark:shadow-primary-500',
          'hover:shadow-primary-800 dark:hover:shadow-primary-500',
        ),
        outline: cn(
          'animated-flat-shadow',
          'border-2 border-primary-800 dark:border-primary-300',
          'text-primary-800 dark:text-primary-300 bg-white dark:bg-gray-900',
          'shadow-primary-800 dark:shadow-primary-300',
          'hover:shadow-primary-800 dark:hover:shadow-primary-300',
        ),
        destructive: cn(
          'animated-flat-shadow',
          'border-2 border-red-600 dark:border-red-300',
          'text-white dark:text-red-900 bg-red-600 dark:bg-red-300',
          'shadow-flat shadow-red-800 dark:shadow-red-400 active:shadow-none',
          'hover:bg-red-500 hover:border-red-500 dark:hover:bg-red-200 dark:hover:border-red-200',
          'shadow-red-800 dark:shadow-red-500',
          'hover:shadow-red-800 dark:hover:shadow-red-500',
        ),
        secondary: cn(
          'animated-flat-shadow',
          'border-2 border-accent-600 dark:border-accent-300',
          'text-white dark:text-accent-900 bg-accent-600 dark:bg-accent-300',
          'shadow-accent-800 dark:shadow-accent-400',
          'hover:shadow-accent-800 dark:hover:shadow-accent-400',
          'hover:bg-accent-500 hover:border-accent-500 dark:hover:bg-accent-200 dark:hover:border-accent-200',
        ),
        ghost: 'hover:text-primary-600 dark:hover:text-primary-300',
      },
      size: {
        default: 'h-9 rounded px-4 py-2 gap-2 [&>svg]:size-4',
        sm: 'h-8 rounded px-3 text-xs gap-1 [&>svg]:size-3',
        lg: 'h-10 rounded px-8 [&>svg]:size-5 gap-3',
        icon: 'h-9 w-9',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

export default buttonVariants
