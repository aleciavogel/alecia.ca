import { type FC } from 'react'

import { cn } from '@/common/lib/utils'
import type { ClippedContainerType } from '@/features/site-layout/layouts/types'
import ClippedContainer from './clipped-container'

interface PageMainProps {
  variant?: ClippedContainerType
  className?: string
  children: React.ReactNode
  stickyClassName?: string
}

const PageMain: FC<PageMainProps> = ({
  variant = 'chevron',
  className,
  stickyClassName,
  children,
  ...props
}) => {
  return (
    <main
      className={cn('relative overflow-hidden pb-16 pt-48 mt-[-152px] z-40 h-full', className)}
      {...props}
    >
      {children}
      <ClippedContainer variant={variant} className={stickyClassName} />
    </main>
  )
}

export default PageMain
