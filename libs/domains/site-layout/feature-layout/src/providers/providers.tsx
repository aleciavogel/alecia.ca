'use client'

import type { FC } from 'react'
import React from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { DarkModeProvider } from '@alecia/dark-mode'
import { ScrollProvider } from '@alecia/site-scroll'

interface ProvidersProps {
  children: React.ReactNode
}

const queryClient = new QueryClient()

export const Providers: FC<ProvidersProps> = ({ children }) => (
  <QueryClientProvider client={queryClient}>
    <ScrollProvider>
      <DarkModeProvider>{children}</DarkModeProvider>
    </ScrollProvider>
  </QueryClientProvider>
)
