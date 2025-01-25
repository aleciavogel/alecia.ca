import type { ComponentProps } from 'react'

import { cn } from '@alecia/util/styles'

const TextArea = ({ ref, className, ...props }: ComponentProps<'textarea'>) => {
  return (
    <textarea
      className={cn(
        'flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      ref={ref}
      {...props}
    />
  )
}

export default TextArea
