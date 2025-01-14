import React, { type FC } from 'react'

import { FooterSeparator } from '@alecia/site-layout-ui'
import { WavyDescriptiveText } from '@alecia/ui-kit'
import { cn } from '@alecia/util'

import { FooterBottom, FooterInfo } from './partials'

export const Footer: FC = () => (
  <div className="footer-gradient w-full pt-20 pb-4 lg:pb-20 text-white">
    {/* PreFooter Content */}

    <div className="mb-10 md:mb-0 w-full text-primary-500/60 overflow-hidden">
      <WavyDescriptiveText className="w-[200%] md:w-full" />
    </div>

    <footer className="px-8 md:px-4 pt-8 pb-4 w-full z-50">
      <FooterInfo />
      <FooterSeparator />
      <FooterBottom />
    </footer>
  </div>
)
