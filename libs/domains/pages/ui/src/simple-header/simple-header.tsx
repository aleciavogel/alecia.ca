import type { FC } from 'react'
import React from 'react'
import classnames from 'classnames'
import { stegaClean } from 'next-sanity'

import { Typography, ZigZagAccent } from '@alecia/ui-kit'
import * as illustrations from '@alecia/ui-kit/components/vectors/illustrations'
import { cn } from '@alecia/util'

interface SimpleHeaderProps {
  pretitle?: string | null
  title?: string | null
  subtitle?: string | null
  headerIllustration?: keyof typeof illustrations | 'none'
}

const DEFAULT_ILLUSTRATION = 'AleciaCouchIllustration'

export const SimpleHeader: FC<SimpleHeaderProps> = ({
  pretitle = 'Pretitle',
  title = 'Untitled',
  subtitle,
  headerIllustration = 'none',
}) => {
  const svgKey =
    headerIllustration !== 'none' ? stegaClean(headerIllustration) : DEFAULT_ILLUSTRATION
  const IllustrationSVG = illustrations[stegaClean(svgKey) ?? DEFAULT_ILLUSTRATION]
  const hasHeaderIllustration = headerIllustration !== 'none'

  return (
    <header
      className={cn(
        'relative',
        'flex items-center justify-items-center',
        'px-8 md:px-20 pt-24 lg:pt-32',
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
          'gap-6 md:gap-10 lg:gap-4 pb-8',
        )}
      >
        <div className={cn('h-full flex items-center', classnames('md:just-start'))}>
          <div
            className={classnames({
              'md:text-left': hasHeaderIllustration,
              'text-center': hasHeaderIllustration,
            })}
          >
            {pretitle ? (
              <Typography variant="pretitle" className="mb-2">
                {pretitle}
              </Typography>
            ) : null}
            <h1 className="w-full font-serif text-5xl md:text-6xl lg:text-8xl mb-2">{title}</h1>
            <ZigZagAccent className="fill-primary-300 w-[175px] my-8" />
            {subtitle ? (
              <p className="text-left md:text-lg lg:text-2xl text-white/90 max-w-[400px]">
                {subtitle}
              </p>
            ) : null}
          </div>
        </div>
        {hasHeaderIllustration ? (
          <div className="relative h-full z-[100]">
            <IllustrationSVG
              className={cn(
                'z-[100] absolute bottom-0 right-0 -mb-[43%]',
                classnames({
                  'w-[90%]': ![
                    'HammondSleepingIllustration',
                    'AleciaCouchIllustration',
                    'SadieHammondCookiesIllustration',
                  ].includes(svgKey),
                  'w-[120%]': [
                    'HammondSleepingIllustration',
                    'AleciaCouchIllustration',
                    'SadieHammondCookiesIllustration',
                  ].includes(svgKey),
                  '-mb-[35%]': svgKey === 'SadieHammondCookiesIllustration',
                }),
              )}
            />
          </div>
        ) : null}
      </div>
    </header>
  )
}
