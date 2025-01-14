import type { FC } from 'react'
import React from 'react'
import classnames from 'classnames'

import { Typography } from '@alecia/ui-kit'
import * as illustrations from '@alecia/ui-kit/components/vectors/illustrations'
import { cn } from '@alecia/util'

interface SimpleHeaderProps {
  pretitle?: string
  title?: string
  subtitle?: string
  headerIllustration?: keyof typeof illustrations | 'none'
}

const DEFAULT_ILLUSTRATION = 'AleciaCouchIllustration'

export const SimpleHeader: FC<SimpleHeaderProps> = ({
  pretitle = 'Pretitle',
  title = 'Untitled',
  subtitle,
  headerIllustration = 'AleciaCouchIllustration',
}) => {
  const svgKey = headerIllustration !== 'none' ? headerIllustration : DEFAULT_ILLUSTRATION
  const IllustrationSVG = illustrations[svgKey ?? DEFAULT_ILLUSTRATION]
  const hasHeaderIllustration = headerIllustration !== 'none'

  return (
    <header
      className={cn(
        'relative',
        'flex items-center justify-items-center',
        'px-8 md:px-20 pt-24',
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
          classnames({ 'md:grid-cols-2': hasHeaderIllustration }),
          'grid grid-cols-1 ',
          'gap-6 md:gap-10 lg:gap-16 pb-8',
        )}
      >
        <div
          className={cn(
            'col-span-1 h-full flex items-center justify-center',
            classnames('md:just-start'),
          )}
        >
          <div
            className={cn(
              'text-center',
              classnames({ 'max-w-[400px] md:text-left': hasHeaderIllustration }),
            )}
          >
            {pretitle ? (
              <Typography variant="pretitle" className="mb-2">
                {pretitle}
              </Typography>
            ) : null}
            <h1 className="w-full font-serif text-5xl md:text-6xl lg:text-8xl mb-2">{title}</h1>
            {subtitle ? <p className="text-left md:text-lg text-white/80">{subtitle}</p> : null}
          </div>
        </div>
        {hasHeaderIllustration ? (
          <div className="col-span-1 relative h-full z-[100]">
            <IllustrationSVG
              className={cn(
                'z-[100] absolute top-0 right-0',
                classnames({
                  'w-[90%]': svgKey !== 'AleciaCouchIllustration',
                  'w-[120%]': svgKey === 'AleciaCouchIllustration',
                }),
              )}
            />
          </div>
        ) : null}
      </div>
    </header>
  )
}
