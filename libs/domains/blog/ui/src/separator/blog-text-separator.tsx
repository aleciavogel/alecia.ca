import type { FC, HTMLProps } from 'react'

import { cn } from '@alecia/util'

// TODO: move to UI kit?
export const BlogSeparator: FC<HTMLProps<HTMLHRElement>> = ({ className, ...props }) => (
  <hr
    className={cn('border-0 mx-auto zigzag-base w-[50px] zigzag-bg-primary', className)}
    {...props}
  />
)
