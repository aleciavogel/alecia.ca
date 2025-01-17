'use client'

import { FC, useEffect, useState } from 'react'
import React from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { usePathname } from 'next/navigation'

import { DarkModeProvider } from '@alecia/dark-mode'
import { FullscreenMenu, MenuSheet, MenuSheetPortal } from '@alecia/site-layout-ui'
import { ScrollProvider } from '@alecia/site-scroll'

interface ProvidersProps {
  children: React.ReactNode
}

const queryClient = new QueryClient()

export const Providers: FC<ProvidersProps> = ({ children }) => {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <QueryClientProvider client={queryClient}>
      <ScrollProvider>
        <DarkModeProvider>
          <MenuSheet open={open} onOpenChange={setOpen}>
            {children}
            <MenuSheetPortal forceMount>
              <FullscreenMenu open={open} />
            </MenuSheetPortal>
          </MenuSheet>
        </DarkModeProvider>
      </ScrollProvider>
    </QueryClientProvider>
  )
}
