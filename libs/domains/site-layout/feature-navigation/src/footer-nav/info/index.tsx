import React, { type FC } from 'react'

import { cn } from '@alecia/util/styles'

import FooterBio from './bio'
import FooterIllustration from './illustration'
import FooterNav from './nav'

const FooterInfo: FC = () => (
  <div className={cn('container mx-auto px-0 flex-wrap md:flex-nowrap flex items-center gap-6')}>
    <FooterIllustration />
    <FooterBio />
    <FooterNav />
  </div>
)

export default FooterInfo
