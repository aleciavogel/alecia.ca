import React, { type FC } from 'react'

import ZigZagAccent from '@alecia/graphics/zigzags/zigzag-accent'
import Typography from '@alecia/ui-kit/ui/typography'
import { cn } from '@alecia/util/styles'

export interface ImageHeaderIntroProps {
  pretitle?: string
  title?: string
  subtitle?: string
}

export const ImageHeaderIntro: FC<ImageHeaderIntroProps> = ({
  title = 'Untitled',
  subtitle,
  pretitle = 'Pretitle',
}) => (
  <div
    className={cn(
      'text-center md:text-left',
      'pt-10 md:pt-10 lg:pt-5',
      // 'border-2 border-solid border-red-100',
    )}
  >
    <Typography variant="pretitle" className="mb-2 md:mb-4">
      {pretitle}
    </Typography>
    <Typography variant="home-title" className="mb-2">
      {title}
    </Typography>
    {subtitle ? (
      <Typography variant="subtitle" className="px-6 md:px-0">
        {subtitle}
      </Typography>
    ) : null}
    <ZigZagAccent className="fill-primary-300 w-[175px] mt-8 mx-auto md:mx-0" />
  </div>
)
