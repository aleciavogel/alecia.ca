import { stegaClean } from '@sanity/client/stega'
import Link from 'next/link'

import { cn } from '@alecia/util/styles'

import FormattedDate from './formatted-date'
import ShareLinks from './share-links'

interface ArticleInfoProps {
  date: string
  timeToRead: number
}

const ArticleInfo = ({ date, timeToRead }: ArticleInfoProps) => (
  <aside
    className={cn(
      'pointer-events-auto',
      'px-16 mx-auto',
      'w-full max-w-screen-md',
      'text-center text-sm text-body',
    )}
  >
    <p>
      {'By '}
      <Link
        href={'/about'}
        className={cn(
          'text-primary-600 dark:text-primary-400 dark:hover:text-accent-400 zigzag-link',
        )}
      >
        Alecia Vogel
      </Link>
    </p>
    <div className="mt-3 flex gap-2 justify-center">
      <div>
        <FormattedDate
          dateTime={stegaClean(date ?? '')}
          className="text-primary-600 dark:text-primary-400"
        />
      </div>

      <span>&#xB7;</span>
      <div>
        <span>{timeToRead} min</span>
      </div>
    </div>

    <ShareLinks />
    <hr className="zigzag-base zigzag-bg-primary border-0 w-[100px] mx-auto mt-12" />
  </aside>
)

export default ArticleInfo
