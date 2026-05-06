import React from 'react'
import Link from 'next/link'

import ZigZagAccent from '@alecia/common/graphics/zigzags/zigzag-accent'
import Typography from '@alecia/common/ui/typography'
import { cn } from '@alecia/util/styles'

interface SimpleHeaderProps {
  pretitleLink?: string
  pretitle?: string | null
  title?: string | null
  lastUpdated?: string | null
  timeToRead?: number | null
  centered?: boolean
}

const ProjectHeader = ({
  pretitleLink,
  pretitle = 'Pretitle',
  title = 'Untitled',
  lastUpdated,
  timeToRead,
  centered = false,
}: SimpleHeaderProps) => (
  <header
    className={cn(
      'relative',
      'flex items-center',
      'pt-48 lg:pt-32',
      'transition-dark-mode',
      'hero-padding',
      // 'bg-primary-800 dark:bg-primary-900',
      'after:z-[-1] after:content-[""] after:absolute after:inset-0',
      'after:bg-gradient-to-b after:from-primary-950 after:to-fuchsia-600',
    )}
  >
    <div className="page-container page-content-block w-full text-white pb-8">
      <div className={cn('text-center', { 'md:text-left': !centered })}>
        {pretitle && pretitleLink ? (
          <Link href={pretitleLink}>
            <Typography
              variant="pretitle"
              className="mb-2 text-primary-200 hover:text-accent-300 inline-block"
            >
              {pretitle}
            </Typography>
          </Link>
        ) : null}
        {pretitle && !pretitleLink ? (
          <Typography variant="pretitle" className="mb-2">
            {pretitle}
          </Typography>
        ) : null}
        <h1 className="w-full font-serif text-5xl md:text-6xl lg:text-8xl mb-2">{title}</h1>
        <ZigZagAccent
          className={cn('fill-primary-300 w-[175px] my-8 mx-auto', { 'md:mx-0': !centered })}
        />
        {(lastUpdated || timeToRead) && (
          <p
            className={cn('text-sm text-white text-center flex items-center gap-2 flex-wrap', {
              'md:text-left': !centered,
              'justify-center': centered,
            })}
          >
            {lastUpdated && (
              <span>
                {'Last updated '}
                <time dateTime={lastUpdated}>
                  {new Date(lastUpdated).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
              </span>
            )}
            {lastUpdated && timeToRead ? <span>&middot;</span> : null}
            {timeToRead ? <span>{timeToRead} min read</span> : null}
          </p>
        )}
      </div>
    </div>
  </header>
)

export default ProjectHeader
