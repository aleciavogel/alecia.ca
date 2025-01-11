'use client'

import React, { type FC } from 'react'
import { ThemeProvider } from 'next-themes'

interface ProvidersProps {
  children: React.ReactNode
}

export const DarkModeProvider: FC<ProvidersProps> = ({ children }) => (
  <ThemeProvider
    attribute="class"
    defaultTheme="system"
    enableSystem
    disableTransitionOnChange={false}
  >
    {children}
  </ThemeProvider>
)
