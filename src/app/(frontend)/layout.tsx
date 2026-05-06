import type { ReactNode } from 'react'
import { config } from '@fortawesome/fontawesome-svg-core'
import type { Metadata, Viewport } from 'next'
import { draftMode } from 'next/headers'
import { Image as SanityImage } from 'sanity'

import { SITE_BASE_URL } from '@alecia/constants/routes'
import { SandPackCSS } from '@alecia/core/code-editor/components/sandpack-css'
import Providers from '@alecia/core/theming/components/providers'
import { dankMono, eksellLarge, eksellSmall, silka } from '@alecia/fonts'
import { refreshAction } from '@alecia/vendors/sanity/actions/refresh'
import VisualEditingControls from '@alecia/vendors/sanity/components/visual-editing-controls'
import { settingsQuery } from '@alecia/vendors/sanity/queries/settings.query'
import { urlForOpenGraphImage } from '@alecia/vendors/sanity/util/client/sanity-image-utils'
import { sanityFetch, SanityLive } from '@alecia/vendors/sanity/util/server/live'

import '@alecia/styles/global.css'
import './global.css'
config.autoAddCss = false

export async function generateMetadata(): Promise<Metadata> {
  const { data: settings } = await sanityFetch({ query: settingsQuery, stega: false })

  const ogImageUrl = settings?.ogimage
    ? urlForOpenGraphImage(settings.ogimage as SanityImage)
    : undefined

  return {
    metadataBase: new URL('https://' + SITE_BASE_URL),
    title: {
      template: `%s | alecia.ca`,
      default: 'Home | alecia.ca',
    },
    description:
      'The personal website of Alecia Vogel, a senior full-stack developer in Edmonton, AB.',
    applicationName: settings?.title ?? 'alecia.ca',
    generator: 'Next.js',
    keywords: ['edmonton', 'web development', 'full-stack developer'],
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: '/',
      types: {
        'application/rss+xml': '/blog/feed.xml',
      },
    },
    openGraph: {
      type: 'website',
      siteName: settings?.title ?? 'alecia.ca',
      locale: 'en_CA',
      images: ogImageUrl
        ? [
            {
              url: ogImageUrl,
              width: 1200,
              height: 627,
              alt: settings?.title ?? 'alecia.ca',
            },
          ]
        : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      creator: '@aleciavogel',
    },
  }
}

export const viewport: Viewport = {
  themeColor: '#7c3aed',
}

interface RootLayoutProps {
  children: ReactNode
}

export default async function RootLayout({ children }: RootLayoutProps) {
  const isDraftMode = (await draftMode()).isEnabled
  const { data: settings } = await sanityFetch({ query: settingsQuery })

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <SandPackCSS />
      </head>
      <body
        id="root"
        className={`${eksellLarge.variable} ${eksellSmall.variable} ${silka.variable} ${dankMono.variable} overscroll-none primary-violet accent-pink body-gray`}
      >
        <Providers settings={settings}>{children}</Providers>
        {isDraftMode ? (
          <>
            <VisualEditingControls />
            <SanityLive revalidateSyncTags={refreshAction} />
          </>
        ) : null}
      </body>
    </html>
  )
}
