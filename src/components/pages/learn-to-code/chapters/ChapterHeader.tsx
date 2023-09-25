import { type FC } from 'react'

import { cn } from '@/lib/utils'
import type { TutorialPartData } from '@/types/tutorials'
import { Tutorials } from '@/config/tutorials'

const ChapterHeader: FC<TutorialPartData> = ({ id, frontMatter: { title } }) => {
  const [course, fileSlug] = id.split('/')
  const { title: courseTitle } = Tutorials[course]
  const [partNumber] = fileSlug.split('-')[0]

  return (
    <section
      className={cn(
        'relative z-0 flex items-center justify-items-center px-20 pt-28 pb-16 sm:pt-32',
        'transition-colors duration-300 ease-in-out',
        'bg-primary-800 dark:bg-primary-900',
      )}
      role="banner"
      aria-labelledby="page-title"
    >
      <div
        className={cn(
          'mx-auto space-y-2 md:space-y-4 text-left lg:text-center sm:max-w-screen-sm md:max-w-screen-md',
        )}
      >
        <div>
          <p className="text-xl md:text-3xl text-accent-300 font-bold hover:text-accent-500 transition-colors duration-300">
            {courseTitle}
          </p>
        </div>
        <h1
          id="page-title"
          className={cn(
            'font-serif text-3xl md:text-5xl lg:text-8xl capitalize text-white leading-snug',
          )}
        >
          {partNumber}. {title}
        </h1>
      </div>
    </section>
  )
}

export default ChapterHeader
