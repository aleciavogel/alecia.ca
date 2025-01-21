import type { FC } from 'react'
import React from 'react'
import Link from 'next/link'

import { Typography, ZigZagAccent } from '@alecia/ui-kit'
import { cn } from '@alecia/util'

interface SimpleHeaderProps {
  pretitleLink?: string
  pretitle?: string | null
  title?: string | null
}

export const ProjectHeader: FC<SimpleHeaderProps> = ({
  pretitleLink,
  pretitle = 'Pretitle',
  title = 'Untitled',
}) => (
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
    <div className="page-container max-xl:page-content-block w-full text-white pb-8">
      <div className="text-center md:text-left">
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
        <ZigZagAccent className="fill-primary-300 w-[175px] my-8 mx-auto md:mx-0" />
      </div>
    </div>
  </header>
)
