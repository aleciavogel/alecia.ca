import React, { type FC } from 'react'

import { FooterSeparator, WavyText } from '@alecia/site-layout-ui'

import { FooterBottom, FooterInfo } from './partials'

export const Footer: FC = () => (
  <div className="footer-gradient w-full pt-20 pb-4 lg:pb-5 text-white relative">
    <div className="-mb-[9%] w-full text-primary-500/60 overflow-hidden max-md:absolute max-md:left-0 max-md:top-[150px]">
      <WavyText className="z-10 -translate-x-6 md:-translate-x-[10%] w-[200%] md:w-[125%]" />
    </div>

    <footer className="px-8 md:px-4 pt-8 pb-4 w-full z-50">
      <FooterInfo />
      <FooterSeparator />
      <FooterBottom />
    </footer>
  </div>
)
