import type { FC } from 'react'
import React from 'react'

import { cn } from '@alecia/util/styles'

import Copyright from './copyright'
import FooterSocialLinks from './social-links'

const FooterBottom: FC = () => {
  return (
    <div className={cn('container relative mx-auto space-y-4')}>
      <p className="text-white text-xs lg:text-sm text-center md:absolute-center">
        <Copyright />
      </p>

      <FooterSocialLinks className="text-2xl text-center md:text-right" id="footer-social-links" />
    </div>
  )
}

export default FooterBottom
