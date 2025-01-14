import type { FC } from 'react'
import classnames from 'classnames'
import Link from 'next/link'

import { ReadMoreArrowIcon, type TagProps } from '@alecia/ui-kit'
import { cn } from '@alecia/util'

interface HeroHeaderProps {
  title?: string | null
  subtitle?: string | null
  tag?: TagProps
  coverImage?: string | null
}

export const HeroHeader: FC<HeroHeaderProps> = ({ title, subtitle, tag, coverImage }) => {
  const sectionStyle = coverImage
    ? {
        backgroundImage: `url(${coverImage})`,
      }
    : {}

  return (
    <section
      className={cn(
        'relative z-0 flex items-center justify-items-center px-14',
        'transition-colors duration-300 ease-in-out',
        'hero-padding h-screen box-content',
        'bg-primary-700 dark:bg-primary-900',
        classnames({
          'bg-center bg-cover': coverImage,
          'after:content-[""] after:absolute after:inset-0 after:bg-primary-900 after:z-[-1] after:opacity-75':
            coverImage,
        }),
      )}
      style={sectionStyle}
    >
      <div
        className={cn(
          'mx-auto space-y-2 md:space-y-4',
          'text-center lg:text-left',
          'sm:max-w-screen-sm md:max-w-screen-md lg:max-w-[640px] w-full',
          'py-[30px]',
        )}
      >
        {tag ? (
          <div className="mx-auto text-center">
            <Link
              href={tag.href ?? '#'}
              className={cn(
                'uppercase font-bold tracking-wider',
                'text-lg sm:text-base md:text-xl',
                'text-accent-300 hover:text-accent-500 transition-colors duration-300',
                'text-center',
              )}
            >
              {tag.text}
            </Link>
          </div>
        ) : null}

        <h1
          className={cn(
            'font-serif capitalize text-white leading-snug',
            'text-3xl md:text-5xl lg:text-7xl',
            'text-center',
            'drop-shadow-lg',
          )}
        >
          {title}
        </h1>
        <p className="text-white/90 text-lg md:text-2xl text-center max-w-[600px] mx-auto drop-shadow-lg">
          {subtitle}
        </p>
      </div>

      <div className="absolute pb-4 bottom-[var(--triangle-height)] left-0 w-full pointer-events-none text-white">
        <ReadMoreArrowIcon className="animate-bounce h-6 w-6 text-white mx-auto" />
      </div>
    </section>
  )
}
