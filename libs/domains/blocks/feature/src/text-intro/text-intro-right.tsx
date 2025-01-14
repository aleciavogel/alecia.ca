import type { FC } from 'react'
import type { PortableTextBlock } from 'next-sanity'

import { Typography } from '@alecia/ui-kit'
import { cn } from '@alecia/util'

import { IntroPortableText } from './intro-portable-text'

interface IntroTextRightProps {
  _type: 'text.intro'
  leadText?: string
  body?: PortableTextBlock[]
}

export const TextIntroRight: FC<IntroTextRightProps> = ({
  leadText = 'Lead text will go here',
  body = [],
}) => (
  <div className={cn('px-8 md:px-20 container grid grid-cols-2 py-12')}>
    <div />
    <div className={cn('w-full')}>
      <div className={cn('max-w-screen-sm space-y-6')}>
        <Typography
          variant="p"
          className="text-base md:text-2xl font-medium text-primary-950 dark:text-primary-300 md:leading-relaxed"
        >
          {leadText}
        </Typography>
        <IntroPortableText value={body} />
      </div>
    </div>
  </div>
)
