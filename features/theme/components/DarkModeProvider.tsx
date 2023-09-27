'use client'

import { ThemeProvider } from 'next-themes'
import { type FC } from 'react'

interface ProvidersProps {
  children: React.ReactNode
}

const DarkModeProvider: FC<ProvidersProps> = ({ children }) => (
  <ThemeProvider attribute="class" defaultTheme="light">
    {children}
  </ThemeProvider>
)

export default DarkModeProvider
