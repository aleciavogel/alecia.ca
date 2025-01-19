'use client'

import { useEffect, useState } from 'react'
import React from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { usePathname } from 'next/navigation'

import { DarkModeProvider } from '@alecia/dark-mode'
import { SettingsQueryResult } from '@alecia/sanity-types'
import { FullscreenMenu, MenuSheet, MenuSheetPortal } from '@alecia/site-layout-ui'
import { ScrollProvider } from '@alecia/site-scroll'

interface ProvidersProps {
  children: React.ReactNode
  settings: SettingsQueryResult
}

const queryClient = new QueryClient()

export const Providers = ({ children, settings }: ProvidersProps) => {
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
              <FullscreenMenu
                open={open}
                fullScreenMenu={settings?.fullscreenMenu ? settings.fullscreenMenu : []}
                social={settings?.social ? settings.social : []}
              />
            </MenuSheetPortal>
            <SpeedInsights />
          </MenuSheet>
        </DarkModeProvider>
      </ScrollProvider>
    </QueryClientProvider>
  )
}
