'use client'

import { ReactNode, useEffect, useState } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { usePathname } from 'next/navigation'

import { MenuSheetPortal, MenuSheetRoot as MenuSheet } from '@alecia/common/ui/menu-sheet'
import DarkModeProvider from '@alecia/core/dark-mode/components/provider'
import FullscreenMenu from '@alecia/core/layout/components/fullscreen-menu'
import ScrollProvider from '@alecia/core/scroll/provider'
import { SettingsQueryResult } from '@alecia/vendors/sanity/types/sanity.types'

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
