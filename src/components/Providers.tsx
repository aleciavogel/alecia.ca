'use client'

import { ThemeProvider } from 'next-themes'
import { type FC, useEffect, useState } from 'react'

interface ProvidersProps {
  children: React.ReactNode
}

const Providers: FC<ProvidersProps> = ({ children }) => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [setMounted])

  if (!mounted) {
    return null
  }

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </ThemeProvider>
  )
}

export default Providers
