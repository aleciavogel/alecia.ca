'use client'

import { type FC, useEffect, useState } from 'react'
import ScrollProvider from './features/site-scroll/ScrollProvider'
import DarkModeProvider from './features/site-theme/DarkModeProvider'
import { TooltipProvider } from '@radix-ui/react-tooltip'

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
    <ScrollProvider>
      <DarkModeProvider>
        <TooltipProvider>{children}</TooltipProvider>
      </DarkModeProvider>
    </ScrollProvider>
  )
}

export default Providers
