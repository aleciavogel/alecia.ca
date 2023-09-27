import { type FC } from 'react'

import PageMain from '@/features/page-containers/components/page-main'
import { AleciaIdeaVector } from '@/common/vectors'
import Link from 'next/link'

const ComingSoonMain: FC = () => {
  return (
    <PageMain variant="chevron" className="bg-gray-100">
      <div className="px-16 md:px-20 grid grid-cols-6 gap-8">
        <div className="col-span-6 md:col-span-2">
          <AleciaIdeaVector className="block w-full" />
        </div>
        <div className="col-span-6 md:col-span-4">
          <h2 className="font-serif text-2xl md:text-4xl lg:text-6xl text-primary-600 dark:text-primary-400 mb-2">
            Coming soon!
          </h2>
          <p className="text-base md:text-lg text-body">
            Your patience is appreciated while I brainstorm some new ideas for this section. In the
            meantime, feel free to check out my{' '}
            <Link href="/blog" className="zigzag-link">
              blog
            </Link>
            !
          </p>
        </div>
      </div>
    </PageMain>
  )
}

export default ComingSoonMain
