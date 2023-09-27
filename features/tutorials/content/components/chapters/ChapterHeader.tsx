import { type FC } from 'react'

import { cn } from '@/common/lib/utils'
import type { TutorialPartData } from '@/features/tutorials/types'
import { Tutorials } from '@/features/tutorials/constants'
import DemoLink from '@/components/features/tutorials/DemoLink'
import GithubLink from '@/components/features/tutorials/GithubLink'

const ChapterHeader: FC<TutorialPartData> = ({
  id,
  frontMatter: { title, githubHref, demoHref },
}) => {
  const [course] = id.split('/')
  const { title: courseTitle } = Tutorials[course]

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
          'mx-auto',
          'w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg',
          'text-left',
        )}
      >
        <div className="space-y-2 md:space-y-4">
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
            {title}
          </h1>

          <div className="space-x-3">
            {githubHref !== undefined && <GithubLink githubHref={githubHref} />}
            {demoHref !== undefined && <DemoLink demoHref={demoHref} />}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ChapterHeader
