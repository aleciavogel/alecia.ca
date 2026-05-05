import type { ReactNode } from 'react'
import { config } from '@fortawesome/fontawesome-svg-core'
import type { Metadata, Viewport } from 'next'
import { draftMode } from 'next/headers'

import { SandPackCSS } from '@alecia/core/code-editor/components/sandpack-css'
import Providers from '@alecia/core/theming/components/providers'
import { dankMono, eksellLarge, eksellSmall, silka } from '@alecia/fonts'
import VisualEditingControls from '@alecia/vendors/sanity/components/visual-editing-controls'
import { settingsQuery } from '@alecia/vendors/sanity/queries/settings.query'
import { sanityFetch, SanityLive } from '@alecia/vendors/sanity/util/server/live'

import '@alecia/styles/global.css'
import './global.css'
config.autoAddCss = false

export const metadata: Metadata = {
  title: {
    template: `%s | alecia.ca`,
    default: 'Home | alecia.ca',
  },
  description:
    'The personal website of Alecia Vogel, a senior full-stack developer in Edmonton, AB.',
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
        {isDraftMode ? <VisualEditingControls /> : null}
        <SanityLive />
      </body>
    </html>
  )
}
