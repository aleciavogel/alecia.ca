import * as React from 'react'
import { notFound } from 'next/navigation'

import { CalendlyScheduleButton } from '@alecia/calendly-ui'
import { ContactFormCard } from '@alecia/contact'
import { RenderedBlocks } from '@alecia/pages'
import { getPage } from '@alecia/pages-data-access/server'
import { FormHeader } from '@alecia/pages-ui'
import { SiteWrapper } from '@alecia/site-layout'
import { FooterSocialLinks, PageContents } from '@alecia/site-navigation'
import { Typography } from '@alecia/ui-kit'

// TODO: pull metadata from sanity
export const metadata = {
  title: 'Get In Touch | alecia.ca',
  description: 'Contact me to discuss your project or to learn more about my work.',
}

export default async function ContactPage() {
  const page = await getPage('contact')

  if (!page) notFound()

  return (
    <SiteWrapper>
      <FormHeader
        pretitle={page.pretitle}
        title={page.title}
        subtitle={page.subtitle}
        buttons={<CalendlyScheduleButton label="Book a time" />}
      >
        <ContactFormCard />
      </FormHeader>
      <PageContents className="pt-80 lg:pt-28 pb-32 lg:pb-48">
        <div className="space-y-6 page-content-padding max-lg:hidden">
          <Typography variant="blockPretitle" className="text-primary-900">
            Connect with me
          </Typography>
          <div className="space-x-6 text-4xl text-primary-600 dark:text-primary-300 max-md:text-center">
            <FooterSocialLinks />
          </div>
        </div>
        <RenderedBlocks modules={page.modules} />
      </PageContents>
    </SiteWrapper>
  )
}
