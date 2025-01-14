import type { FC, ReactNode } from 'react'
import React from 'react'
import classnames from 'classnames'

import { CalendlyScheduleButton } from '@alecia/calendly-ui'
import { Typography, ZigZagAccent } from '@alecia/ui-kit'
import { cn } from '@alecia/util'

interface ContactHeaderProps {
  pretitle?: string | null
  title?: string | null
  subtitle?: string | null
  children: ReactNode
}

export const ContactHeader: FC<ContactHeaderProps> = ({
  pretitle = 'Pretitle',
  title = 'Untitled',
  subtitle,
  children,
}) => (
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
        'grid grid-cols-1 lg:grid-cols-2',
        'gap-6 md:gap-10 pb-8',
      )}
    >
      <div className={cn('relative h-full flex items-center', classnames('md:just-start'))}>
        <div>
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
          <div className="text-left space-y-6">
            <p className="text-left md:text-lg lg:text-2xl text-white/90">
              Interested in working together? Send me a note or schedule a mutually convenient time
              to meet!
            </p>
            <CalendlyScheduleButton label="Book A Meeting" />
          </div>
        </div>
      </div>
      <div className="relative h-full">
        <div className="z-[100] absolute top-0 right-0 w-full">{children}</div>
      </div>
    </div>
  </header>
)
