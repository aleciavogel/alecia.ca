import type { HTMLProps } from 'react'

import { cn } from '@alecia/util/styles'

const Separator = ({ className, ...props }: HTMLProps<HTMLHRElement>) => (
  <hr
    className={cn('border-0 mx-auto zigzag-base w-[50px] zigzag-bg-primary', className)}
    {...props}
  />
)

export default Separator
