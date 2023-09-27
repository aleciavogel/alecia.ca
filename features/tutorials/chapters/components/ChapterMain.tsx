import { type FC } from 'react'

import { cn } from '@/common/lib/utils'
import SiteHeader from '@/features/_layout/header/components/SiteHeader'

interface ChapterMainProps {
  children: React.ReactNode
  className?: string
}

const ChapterMain: FC<ChapterMainProps> = ({ children, className = '' }) => {
  return (
    <div
      id="chapter-main"
      className={cn(
        // This is the main container for the chapter page
        'min-h-screen',
        'z-40 h-full',
        'relative overflow-hidden',
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
