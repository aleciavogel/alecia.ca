import { type FC } from 'react'

import { cn } from '@/common/lib/utils'
import { StickyHeader } from '@/features/site-nav'
import type { ClippedContainerType } from '../types'

interface ClippedContainerProps {
  variant?: ClippedContainerType
  className?: string
}

const ClippedContainer: FC<ClippedContainerProps> = ({ variant = 'chevron', className = '' }) => {
  const getClassName = (): string => {
    if (variant === 'default') return 'clipped-container'

    return `clipped-container-${variant}`
  }

  return (
    <div className={cn(getClassName(), className)}>
      <StickyHeader hasColor={true} />
    </div>
  )
}

export default ClippedContainer
