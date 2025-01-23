import type { ReactNode } from 'react'
import { config } from '@fortawesome/fontawesome-svg-core'
import type { Metadata, Viewport } from 'next'
import { draftMode } from 'next/headers'

import { VisualEditingControls } from '@alecia/sanity-ui'
import { getSettings } from '@alecia/settings-data-access/server'
import { Providers } from '@alecia/site-layout'
import { eksellLarge, eksellSmall, silka } from '@alecia/ui-kit'

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
  const settings = await getSettings()

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
