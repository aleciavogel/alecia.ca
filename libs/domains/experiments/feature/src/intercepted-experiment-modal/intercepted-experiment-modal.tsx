'use client'

import { ReactNode } from 'react'

interface ExperimentWrapperProps {
  children: ReactNode
}

export function InterceptedExperimentWrapper({ children }: ExperimentWrapperProps) {
  return <div className="fixed h-screen w-screen bg-red-600">{children}</div>
}
