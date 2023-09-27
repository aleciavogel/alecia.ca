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
    if (variant === 'chevron') return 'clipped-container-chevron'
    if (variant === 'angled-left') return 'clipped-container-angled-left'
    if (variant === 'angled-right') return 'clipped-container-angled-right'
    if (variant === 'default') return 'clipped-container'
    return 'clipped-container'
  }

  return (
    <div className={cn(getClassName(), className)}>
      <StickyHeader hasColor={true} />
    </div>
  )
}

export default ClippedContainer
