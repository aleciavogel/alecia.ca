import React, { type FC } from 'react'

import { cn } from '@alecia/util'

import { FooterBio } from './footer-bio'
import { FooterIllustration } from './footer-illustration'
import { FooterNav } from './footer-nav'

export const FooterInfo: FC = () => (
  <div className={cn('container mx-auto px-0 flex-wrap md:flex-nowrap flex items-center gap-6')}>
    <FooterIllustration />
    <FooterBio />
    <FooterNav />
  </div>
)
