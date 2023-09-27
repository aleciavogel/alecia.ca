import { type FC } from 'react'
import Link from 'next/link'

import type { Tutorial } from '@/features/tutorials/types'
import { cn } from '@/common/lib/utils'

interface TutorialItemProps extends Tutorial {
  id: string
}

const TutorialItem: FC<TutorialItemProps> = ({ id, title, description }) => {
  return (
    <div
      className={cn(
        'bg-white dark:bg-transparent',
        'col-span-6 md:col-span-3',
        'rounded-lg overflow-hidden border shadow-lg',
        'relative',
      )}
    >
      <div className="p-4">
        <div className="dark:text-body space-y-3 h-full">
          <div className="mb-4 space-y-3">
            <Link href={`/learn-to-code/${id}/1-introduction`}>
              <h2 className="line-clamp-3 md:line-clamp-2 text-2xl mb-1 text-primary-600 dark:text-primary-300 hover:text-accent-600 dark:hover:text-accent-300 transition-colors duration-300 ease-in-out">
                {title}
              </h2>
            </Link>
            <p className="line-clamp-4 md:line-clamp-3 max-w-[460px]">{description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TutorialItem
