'use client'

import { ReactNode, useEffect, useState } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { usePathname } from 'next/navigation'

import DarkModeProvider from '@alecia/dark-mode/provider'
import { SettingsQueryResult } from '@alecia/sanity-types/sanity.types'
import ScrollProvider from '@alecia/scroll/provider'
import FullscreenMenu from '@alecia/site-layout-ui/fullscreen-menu'
import { MenuSheetPortal, MenuSheetRoot as MenuSheet } from '@alecia/ui-kit/ui/menu-sheet'

interface ProvidersProps {
  children: ReactNode
  settings: SettingsQueryResult
}

const queryClient = new QueryClient()

const Providers = ({ children, settings }: ProvidersProps) => {
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

export default Providers
