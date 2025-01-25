'use client'

import type { FC, HTMLAttributes } from 'react'

import { cn } from '@alecia/util/styles'

const SheetHeader: FC<HTMLAttributes<HTMLDivElement>> = ({ className, ...props }) => (
  <div className={cn('flex flex-col space-y-2 text-center sm:text-left', className)} {...props} />
)

SheetHeader.displayName = 'SheetHeader'

export default SheetHeader
