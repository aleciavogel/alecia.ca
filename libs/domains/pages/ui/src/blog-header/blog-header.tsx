import type { FC } from 'react'
import React from 'react'

import { AleciaCouchIllustration, Typography, ZigZagAccent } from '@alecia/ui-kit'
import { cn } from '@alecia/util'

interface BlogHeaderProps {
  pretitle?: string | null
  title?: string | null
  subtitle?: string | null
}

export const BlogHeader: FC<BlogHeaderProps> = ({
  pretitle = 'Pretitle',
  title = 'Untitled',
  subtitle,
}) => {
  return (
    <header
      className={cn(
        'relative',
        'flex items-center justify-items-center',
        'md:px-20 pt-32',
        'transition-dark-mode',
        'hero-padding',
        // 'bg-primary-800 dark:bg-primary-900',
        'after:z-[-1] after:content-[""] after:absolute after:inset-0',
        'after:bg-gradient-to-b after:from-primary-950 after:to-fuchsia-600',
      )}
    >
      <div
        className={cn(
          'page-container',
          'w-full text-white',
          'md:grid md:grid-cols-3',
          'gap-6 md:gap-10 lg:gap-16 md:pb-8',
        )}
      >
        <div className="md:col-span-1 h-full flex items-center max-md:justify-center">
          <div className="text-center md:text-left md:max-w-[400px]">
            {pretitle ? (
              <Typography variant="pretitle" className="mb-2">
                {pretitle}
              </Typography>
            ) : null}
            <h1 className="w-full font-serif text-8xl md:text-6xl lg:text-8xl mb-2">{title}</h1>
            <ZigZagAccent className="fill-primary-300 w-[175px] my-8" />
          </div>
        </div>
        <div className="md:col-span-2 relative h-full z-[100] max-md:page-content-block pointer-events-none">
          <AleciaCouchIllustration
            className={cn('w-full z-[100] md:absolute md:top-0 md:right-0 max-md:-mb-[50%]')}
          />
        </div>
      </div>
    </header>
  )
}
