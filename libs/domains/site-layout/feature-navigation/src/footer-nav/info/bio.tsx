import React from 'react'
import { type PortableTextBlock } from 'next-sanity'

import { settingsQuery } from '@alecia/sanity-queries/settings.query'
import { SettingsQueryResult } from '@alecia/sanity-types/sanity.types'
import { getData } from '@alecia/sanity-util/server-utils/get-data'
import FooterPortableText from '@alecia/site-layout-ui/footer/portable-text'
import { Typography } from '@alecia/ui-kit/ui/typography'
import { cn } from '@alecia/util/styles'

const FooterBio = async () => {
  const data = await getData<SettingsQueryResult>(settingsQuery, {}, ['settings'])
  const footerName = data?.footerName ?? 'Alecia Vogel'
  const footerBio =
    (data?.footerBio as PortableTextBlock[] | undefined) ?? ([] as PortableTextBlock[])

  return (
    <div className="w-full flex-grow md:max-w-[280px] lg:max-w-[400px]">
      <Typography
        variant="footer-bio-name"
        className={cn('mb-2 text-center md:text-left text-primary-400 mt-0')}
      >
        {footerName}
      </Typography>
      <div
        className={cn(
          'text-white text-sm lg:text-lg leading-relaxed max-md:text-center',
          'md:mb-3 mx-auto md:mx-0',
          'max-sm:px-10 sm:max-md:px-16 ',
          'w-full',
          'max-w-[400px] md:max-w-[320px]',
        )}
      >
        {footerBio.length ? (
          <FooterPortableText value={footerBio} />
        ) : (
          <p className="text-white text-sm lg:text-lg leading-relaxed md:mb-3 max-md:text-center max-sm:px-10 sm:max-md:px-16 w-full sm:w-3/4 mx-auto md:mx-0">
            is a <strong className="font-bold">full stack web developer</strong> and{' '}
            <strong className="font-bold">digital product designer</strong> living in downtown
            Edmonton.
          </p>
        )}
      </div>
      <hr className="zigzag-base zigzag-bg-primary border-0 w-[100px] mx-auto my-8 md:hidden" />
    </div>
  )
}

export default FooterBio
