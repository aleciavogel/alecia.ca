import type { JSX, ReactNode } from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/pro-solid-svg-icons'
import type { Metadata } from 'next'

import '@fortawesome/fontawesome-svg-core/styles.css'
library.add(fas, fab)

export const metadata: Metadata = {
  title: 'Sanity Studio | Alecia.ca',
  description: 'Dashboard for Alecia.ca',
}

const RootLayout = ({
  children,
}: Readonly<{
  children: ReactNode
}>): JSX.Element => (
  <html lang="en">
    <body>{children}</body>
  </html>
)
export default RootLayout
