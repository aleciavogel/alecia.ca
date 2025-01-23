'use client'

import { animated } from '@react-spring/web'
import classnames from 'classnames'
import Link from 'next/link'

import { useScrollListener } from '@alecia/site-scroll'
import { ReadMoreArrowIcon, type TagProps } from '@alecia/ui-kit'
import { cn } from '@alecia/util'

interface HeroHeaderProps {
  title?: string | null
  subtitle?: string | null
  tag?: TagProps
  coverImage?: string | null
  coverImageAlt?: string | null
  coverImageWidth?: number
  coverImageHeight?: number
}

export const HeroHeader = ({ title, subtitle, tag, coverImage }: HeroHeaderProps) => {
  const { scrollYProgress } = useScrollListener({})

  return (
    <section
      data-scroll-container
      className={cn(
        'relative z-0 flex items-center justify-items-center page-content-padding',
        'transition-colors duration-300 ease-in-out',
        'hero-padding h-screen box-content',
        'bg-primary-700 dark:bg-primary-900',
        classnames({
          'after:content-[""] after:absolute after:inset-0 after:bg-primary-900 after:z-[-1] after:opacity-80':
            coverImage,
        }),
      )}
    >
      {coverImage ? (
        <animated.div
          data-scroll
          data-scroll-speed="-1.5"
          className="absolute inset-0 h-full z-[-1] bg-cover bg-center"
          style={{
            backgroundImage: `url(${coverImage})`,
            opacity: `${100 - scrollYProgress * 2}%`,
          }}
        />
      ) : null}
      <div
        data-scroll
        data-scroll-speed="1"
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
                'text-sm md:text-xl',
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
        <p className="text-white/90 text-base sm:text-lg md:text-2xl text-center max-w-[600px] mx-auto drop-shadow-lg">
          {subtitle}
        </p>
      </div>

      <div className="absolute pb-4 bottom-[var(--triangle-height)] left-0 w-full pointer-events-none text-white">
        <ReadMoreArrowIcon className="animate-bounce h-6 w-6 text-white mx-auto" />
      </div>
    </section>
  )
}
