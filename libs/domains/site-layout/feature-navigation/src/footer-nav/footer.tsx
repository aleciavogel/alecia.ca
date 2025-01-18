import React, { type FC } from 'react'

import { FooterSeparator, WavyText } from '@alecia/site-layout-ui'

import { FooterBottom, FooterInfo } from './partials'

export const Footer: FC = () => (
  <div className="footer-gradient w-full pt-20 pb-4 lg:pb-5 text-white">
    <div className="h-24 mb-10 md:mb-0 w-full text-primary-500/60 overflow-hidden">
      <WavyText className="-translate-x-72 absolute z-10 w-[150%]" />
    </div>

    <footer className="px-8 md:px-4 pt-8 pb-4 w-full z-50">
      <FooterInfo />
      <FooterSeparator />
      <FooterBottom />
    </footer>
  </div>
)
