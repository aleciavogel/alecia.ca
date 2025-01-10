import type { JSX, ReactNode } from 'react'
import type { Metadata } from 'next'

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
