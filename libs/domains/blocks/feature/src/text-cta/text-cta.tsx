import type { FC } from 'react'
import { stegaClean } from '@sanity/client/stega'
import { PortableTextBlock } from 'next-sanity'

import { IconButtonLink, Typography } from '@alecia/ui-kit'
import { cn } from '@alecia/util'

import { IntroPortableText } from '../text-intro'
import type { TextCTAProps } from './types'

export const TextCTA: FC<TextCTAProps> = ({
  title = 'Untitled',
  pretitle = 'Pretitle',
  body,
  link,
  shouldUseLinkIcon,
  linkIcon,
  icon,
}) => (
  <div
    className={cn(
      'flex flex-col md:flex-row md:justify-center gap-10 md:gap-20',
      'page-content-block',
      'relative',
    )}
  >
    <div className="h-full md:flex md:max-w-[430px] md:items-center md:justify-self-stretch">
      <div className="max-md:text-center">
        {pretitle ? (
          <Typography variant="blockPretitle" className="mb-4">
            {pretitle}
          </Typography>
        ) : null}
        <Typography variant="blockTitle" className="text-primary-700 dark:text-primary-300 mb-6">
          {title}
        </Typography>

        {link ? (
          <IconButtonLink
            href={stegaClean(link.slug) ?? '#'}
            variant="outline"
            size="lg"
            iconName={shouldUseLinkIcon ? linkIcon : icon?.name}
          >
            {link.label}
          </IconButtonLink>
        ) : null}
      </div>
    </div>
    <div className="flex-grow space-y-6 max-w-screen-sm">
      <IntroPortableText value={body as PortableTextBlock[]} />
    </div>
  </div>
)
