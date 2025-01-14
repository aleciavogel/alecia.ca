'use client'

import type { FC } from 'react'
import React from 'react'

import { DarkModeProvider } from '@alecia/dark-mode'

import { ScrollProvider } from '../scroll-provider'

interface ProvidersProps {
  children: React.ReactNode
}

export const Providers: FC<ProvidersProps> = ({ children }) => (
  <ScrollProvider>
    <DarkModeProvider>{children}</DarkModeProvider>
  </ScrollProvider>
)
