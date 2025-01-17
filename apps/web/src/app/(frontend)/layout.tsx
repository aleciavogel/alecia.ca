import type { ReactNode } from 'react'
import { config } from '@fortawesome/fontawesome-svg-core'
import type { Metadata, Viewport } from 'next'
import { draftMode } from 'next/headers'
import * as twColors from 'tailwindcss/colors'

import { VisualEditingControls } from '@alecia/sanity-ui'
import { Providers } from '@alecia/site-layout'
import { eksellLarge, eksellSmall, silka } from '@alecia/ui-kit'

import 'locomotive-scroll/dist/locomotive-scroll.min.css'
import '@fortawesome/fontawesome-svg-core/styles.css'
import '@alecia/ui-kit/styles/global.css'
import './global.css'
config.autoAddCss = false

export const metadata: Metadata = {
  title: 'Alecia.ca',
  description:
    'The personal website of Alecia Vogel, a senior full-stack developer in Edmonton, AB.',
}

export const viewport: Viewport = {
  themeColor: twColors.violet[600],
}

interface RootLayoutProps {
  children: ReactNode
}

export default async function RootLayout({ children }: RootLayoutProps) {
  const isDraftMode = (await draftMode()).isEnabled

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        id="root"
        className={`${eksellLarge.variable} ${eksellSmall.variable} ${silka.variable} overscroll-none primary-violet accent-pink body-gray`}
      >
        <Providers>{children}</Providers>
        {isDraftMode ? <VisualEditingControls /> : null}
      </body>
    </html>
  )
}
