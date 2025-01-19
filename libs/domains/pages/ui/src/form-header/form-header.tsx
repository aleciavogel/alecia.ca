import type { FC, ReactNode } from 'react'
import React from 'react'
import classnames from 'classnames'

import { Typography, ZigZagAccent } from '@alecia/ui-kit'
import { cn } from '@alecia/util'

interface FormHeaderProps {
  pretitle?: string | null
  title?: string | null
  subtitle?: string | null
  buttons?: ReactNode
  children: ReactNode
}

const DEFAULT_SUBTITLE =
  'Interested in working together? Any comments or requests? Send me a note or schedule some one-on-one time!'

export const FormHeader: FC<FormHeaderProps> = ({
  pretitle = 'Pretitle',
  title = 'Untitled',
  subtitle = DEFAULT_SUBTITLE,
  buttons,
  children,
}) => (
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
        'grid grid-cols-1 lg:grid-cols-2',
        'gap-10 pb-8',
      )}
    >
      <div className={cn('relative h-full flex items-center max-lg:justify-center')}>
        <div>
          {pretitle ? (
            <Typography variant="pretitle" className="mb-3 max-lg:text-center ">
              {pretitle}
            </Typography>
          ) : null}
          <h1 className="max-lg:text-center w-full font-serif text-5xl md:text-6xl lg:text-8xl mb-2">
            {title}
          </h1>
          <ZigZagAccent className="fill-primary-300 w-[175px] my-8 max-lg:mx-auto" />
          <div className="max-lg:text-center space-y-6 max-w-[400px]">
            <p className="max-lg:text-center md:text-lg lg:text-2xl text-white/90 max-md:px-2">
              {subtitle}
            </p>
            <div>{buttons}</div>
          </div>
        </div>
      </div>
      <div className="relative h-full">
        <div className="z-[100] relative lg:absolute lg:top-0 lg:right-0 lg:w-full max-lg:-mb-72 max-lg:px-2">
          {children}
        </div>
      </div>
    </div>
  </header>
)
