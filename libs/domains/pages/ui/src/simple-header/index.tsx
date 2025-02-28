import React from 'react'
import classnames from 'classnames'
import Link from 'next/link'
import { stegaClean } from 'next-sanity'

import { Illustrations } from '@alecia/constants/images'
import ZigZagAccent from '@alecia/graphics/zigzags/zigzag-accent'
import Typography from '@alecia/ui-kit/ui/typography'
import { cn } from '@alecia/util/styles'

import IllustrationSVG from '../illustration-svg'

interface SimpleHeaderProps {
  pretitleLink?: string
  pretitle?: string | null
  title?: string | null
  subtitle?: string | null
  headerIllustration?: string | null
  reverse?: boolean
}

const DEFAULT_ILLUSTRATION: Illustrations = Illustrations.AleciaCouch

const SimpleHeader = ({
  pretitleLink,
  pretitle = 'Pretitle',
  title = 'Untitled',
  subtitle,
  headerIllustration = 'none',
  reverse = false,
}: SimpleHeaderProps) => {
  const svgKey =
    stegaClean(headerIllustration) !== 'none'
      ? (stegaClean(headerIllustration) as Illustrations)
      : DEFAULT_ILLUSTRATION
  const Comp = IllustrationSVG(svgKey ?? DEFAULT_ILLUSTRATION)
  const hasHeaderIllustration =
    headerIllustration !== 'none' && headerIllustration !== undefined && headerIllustration !== null

  const headerClassNames = cn(
    'z-[100] md:absolute md:bottom-0 md:right-0 w-[90%] -mb-[43%]',
    classnames({
      'w-[100%] md:w-[120%]': [
        Illustrations.HammondSleeping,
        Illustrations.AleciaCouch,
        Illustrations.SadieHammondCookies,
      ].includes(svgKey),
      'w-[100%] md:w-[120%] -mb-[70%] md:-mb-[43%]': [Illustrations.HammondSleeping].includes(
        svgKey,
      ),
      'w-[110%] md:-mb-[50%] -mb-[65%]': [Illustrations.PhoebeYarn].includes(svgKey),
      'w-[100%] md:-mb-[30%]': [Illustrations.PhoebeLaptop].includes(svgKey),
      'w-[120%] md:-mb-[48%]': [Illustrations.PhoebeSleeping].includes(svgKey),
      '-mb-[75%] md:-mb-[35%]': [Illustrations.SadieHammondCookies].includes(svgKey),
      'w-[100%] -mb-[65%] md:-mb-[55%]': [Illustrations.HammondScience].includes(svgKey),
    }),
  )

  return (
    <header
      className={cn(
        'relative',
        'flex items-center justify-items-center',
        'px-8 md:px-20 pt-48 lg:pt-32',
        'transition-dark-mode',
        'hero-padding',
        // 'bg-primary-800 dark:bg-primary-900',
        'after:z-[-1] after:content-[""] after:absolute after:inset-0',
        'after:bg-gradient-to-b after:from-primary-950 after:to-fuchsia-600',
      )}
    >
      <div
        className={cn(
          'page-container page-content-block',
          'w-full text-white',
          classnames({ 'md:grid-cols-2': hasHeaderIllustration }),
          'grid grid-cols-1 ',
          'gap-6 md:gap-10 lg:gap-4 pb-8',
        )}
      >
        {hasHeaderIllustration && reverse ? (
          <div className="relative h-full z-[100]">
            <Comp className={headerClassNames} />
          </div>
        ) : null}
        <div className={cn('h-full flex items-center', classnames('md:just-start'))}>
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
            {subtitle ? (
              <p className="text-center md:text-left md:text-lg lg:text-2xl text-white/90 max-w-[400px]">
                {subtitle}
              </p>
            ) : null}
          </div>
        </div>
        {hasHeaderIllustration && !reverse ? (
          <div className="relative h-full z-[100]">
            <Comp className={headerClassNames} />
          </div>
        ) : null}
      </div>
    </header>
  )
}

export default SimpleHeader
