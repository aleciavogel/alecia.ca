import { type FC } from 'react'

import { cn } from '@/lib/utils'
import type { TutorialPartData } from '@/types/tutorials'
import MDXWrapper from '@/components/features/mdx'

const ChapterContent: FC<TutorialPartData> = ({ content }) => {
  return (
    <div className={cn('flex-1 py-16 px-16 md:px-20', 'tutorial-content', 'h- overflow-y-scroll')}>
      <MDXWrapper source={content} />
    </div>
  )
}

export default ChapterContent
