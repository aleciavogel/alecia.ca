// CSS to import
import 'locomotive-scroll/dist/locomotive-scroll.min.css'
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'
import 'prismjs/plugins/command-line/prism-command-line.css'
import '@/common/styles/prismjs.css'
import '@/common/styles/global.css'

import { eksellLarge, eksellSmall, silka } from '@/common/fonts'
import Providers from './Providers'
import { type FC } from 'react'

export const metadata = {
  title: 'Alecia.ca',
  description: 'My personal website',
}

interface RootLayoutProps {
  children: React.ReactNode
}

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body
        className={`${eksellLarge.variable} ${eksellSmall.variable} ${silka.variable} ${silka.className}`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}

export default RootLayout
