import type { FC } from 'react'
import React from 'react'

import { cn } from '@alecia/util'

import { Copyright } from './copyright'
import { FooterSocialLinks } from './footer-social-links'

export const FooterBottom: FC = () => {
  return (
    <div className={cn('container relative mx-auto space-y-4')}>
      <p className="text-white text-xs lg:text-sm text-center md:absolute-center">
        <Copyright />
      </p>
      <div id="footer-links" className="space-x-6 text-2xl text-center md:text-right">
        <FooterSocialLinks />
      </div>
    </div>
  )
}
