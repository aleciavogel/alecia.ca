import { type FC } from 'react'

import { cn } from '@/lib/utils'
import { Tutorials } from '@/config/tutorials'
import { getTutorialTOC } from '@/lib/tutorials'
import SidebarLink from './SidebarLink'

interface ChapterSidebarProps {
  className?: string
  course: string
  chapter: string
}

const ChapterSidebar: FC<ChapterSidebarProps> = ({ className = '', course, chapter }) => {
  const { title: courseTitle } = Tutorials[course]
  const toc = getTutorialTOC(course)

  return (
    <aside
      id="chapter-sidebar"
      className={cn('relative', 'border-l border-l-primary-400 dark:border-l-primary-900')}
    >
      <div
        className={cn('w-[375px] max-h-screen', 'pl-6 py-6 pr-24')}
        data-scroll
        data-scroll-sticky
        data-scroll-speed="1"
        data-scroll-target="#chapter-sidebar"
      >
        <h2
          className={cn('text-accent-600 font-bold dark:text-accent-300 text-base tracking-loose')}
        >
          {courseTitle}
        </h2>
        <ul className="space-y-3 mt-3">
          {toc.map(({ title, part }, index) => {
            return (
              <SidebarLink
                key={`sidebar-${index}`}
                title={title}
                part={part}
                current={chapter === part.split('/')[1]}
              />
            )
          })}
        </ul>
      </div>
    </aside>
  )
}

export default ChapterSidebar
