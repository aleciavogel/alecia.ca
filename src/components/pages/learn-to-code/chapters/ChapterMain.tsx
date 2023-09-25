import { type FC } from 'react'

import { cn } from '@/lib/utils'
import SiteHeader from '@/components/layout/SiteHeader'

interface ChapterMainProps {
  children: React.ReactNode
  className?: string
}

const ChapterMain: FC<ChapterMainProps> = ({ children, className = '' }) => {
  return (
    <div
      className={cn(
        // This is the main container for the chapter page
        'z-40 h-full',
        'relative overflow-hidden',
        'pb-16 pt-48 -mt-[var(--triangleHeight)]',
      )}
    >
      <div
        className={cn(
          // The main content and the sidebar will be the children here,
          // and they will be flex items. The sidebar will be a sticky
          // element with an inner scroll container so that the table of
          // contents follows you as you complete the exercises.
          'flex',
        )}
      >
        {children}
      </div>

      <div className={cn('clipped-container', className)}>
        <SiteHeader hasColor={true} />
      </div>
    </div>
  )
}

export default ChapterMain
