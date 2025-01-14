import type { FC } from 'react'

import { cn } from '@alecia/util'

interface FilenameBarProps {
  title?: string | null
  className?: string
}

export const FilenameBar: FC<FilenameBarProps> = ({ title, className }) => (
  <div
    className={cn(
      'relative',
      'text-white text-sm',
      'rounded-t-md',
      'text-center',
      'bg-primary-700 dark:bg-primary-600',
      'overflow-hidden',
      'py-0.5 px-[1em]',
      'w-full min-h-[25px]',
      'grid grid-cols-3',
      className,
    )}
  >
    <div className="h-full flex items-center">
      <div
        className={cn(
          'rounded-full h-[12px] w-[12px]',
          'bg-[#ff606c]',
          'shadow-[#ffbd44_20px_0_0,#00ca4e_40px_0_0]',
        )}
      />
    </div>
    <div>{title ? <span className="leading-relaxed">{title}</span> : null}</div>
    <div>{/*  Extra controls will go here */}</div>
  </div>
)
