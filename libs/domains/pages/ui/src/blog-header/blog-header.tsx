import type { FC } from 'react'
import React from 'react'

import { AleciaCouchIllustration, Typography } from '@alecia/ui-kit'
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
        'px-8 md:px-20 pt-32',
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
          'grid grid-cols-1 md:grid-cols-3',
          'gap-6 md:gap-10 lg:gap-16 pb-8',
        )}
      >
        <div className="col-span-1 h-full flex items-center max-md:justify-center">
          <div className="text-center md:text-left max-w-[400px]">
            {pretitle ? (
              <Typography variant="pretitle" className="mb-2">
                {pretitle}
              </Typography>
            ) : null}
            <h1 className="w-full font-serif text-5xl md:text-6xl lg:text-8xl mb-2">{title}</h1>
            {subtitle ? <p className="text-left md:text-lg text-white/80">{subtitle}</p> : null}
          </div>
        </div>
        <div className="col-span-2 relative h-full z-[100]">
          <AleciaCouchIllustration className={cn('w-full z-[100] absolute top-0 right-0')} />
        </div>
      </div>
    </header>
  )
}
