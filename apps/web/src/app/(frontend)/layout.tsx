import type { ReactNode } from 'react'
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

export const metadata: Metadata = {
  title: 'Alecia.ca',
  description:
    'The personal website of Alecia Vogel, a senior full-stack developer in Edmonton, AB.',
}

export const viewport: Viewport = {
  themeColor: twColors.indigo[600],
}

interface RootLayoutProps {
  children: ReactNode
  sandbox: ReactNode
}

export default async function RootLayout({ children, sandbox }: RootLayoutProps) {
  const isDraftMode = (await draftMode()).isEnabled

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        id="root"
        className={`${eksellLarge.variable} ${eksellSmall.variable} ${silka.variable} overscroll-none primary-violet accent-pink body-gray`}
      >
        <Providers>
          {sandbox}
          {children}
        </Providers>
        {isDraftMode ? <VisualEditingControls /> : null}
      </body>
    </html>
  )
}
