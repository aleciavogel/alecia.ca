import type { ReactNode } from 'react'
import { config } from '@fortawesome/fontawesome-svg-core'
import type { Metadata, Viewport } from 'next'
import { draftMode } from 'next/headers'

import { settingsQuery } from '@alecia/sanity-queries/settings.query'
import { SettingsQueryResult } from '@alecia/sanity-types/sanity.types'
import VisualEditingControls from '@alecia/sanity-ui/visual-editing-controls'
import { getData } from '@alecia/sanity-util/server-utils/get-data'
import Providers from '@alecia/site-layout/providers'
import { eksellLarge, eksellSmall, silka } from '@alecia/ui-kit/fonts'

import 'locomotive-scroll/dist/locomotive-scroll.min.css'
import '@alecia/ui-kit/styles/global.css'
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
  const isDraftMode = draftMode().isEnabled
  const settings = await getData<SettingsQueryResult>(settingsQuery, {}, ['settings'])

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        id="root"
        className={`${eksellLarge.variable} ${eksellSmall.variable} ${silka.variable} overscroll-none primary-violet accent-pink body-gray`}
      >
        <Providers settings={settings}>{children}</Providers>
        {isDraftMode ? <VisualEditingControls /> : null}
      </body>
    </html>
  )
}
