'use client'

import { ReactNode } from 'react'

interface ExperimentWrapperProps {
  children: ReactNode
}

// NOTE: Not sure if I'll move forward with this...
function InterceptedExperimentWrapper({ children }: ExperimentWrapperProps) {
  return <div className="fixed h-screen w-screen bg-red-600">{children}</div>
}

export default InterceptedExperimentWrapper
