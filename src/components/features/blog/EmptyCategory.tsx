import { type FC } from 'react'
import Link from 'next/link'

import AleciaIdeaSvg from '@/components/vectors/AleciaIdeaSvg'

const EmptyCategory: FC = () => {
  return (
    <div className="grid grid-cols-6 gap-8 items-center">
      <div className="col-span-2">
        <AleciaIdeaSvg className="block w-full" />
      </div>
      <div className="col-span-4">
        <h2 className="font-serif text-6xl text-primary-600 dark:text-primary-400 mb-2">
          No articles here yet!
        </h2>
        <p className="text-lg text-body">
          Your patience is appreciated while I brainstorm some new ideas for this section. In the
          meantime, feel free to check out my{' '}
          <Link href="/blog" className="zigzag-link">
            other posts
          </Link>
          !
        </p>
      </div>
    </div>
  )
}

export default EmptyCategory
