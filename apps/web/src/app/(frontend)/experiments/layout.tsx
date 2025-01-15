import { ReactNode } from 'react'

interface ExperimentLayoutProps {
  children: ReactNode
  modal: ReactNode
}

export default function ExperimentLayout({ children, modal }: ExperimentLayoutProps) {
  return (
    <>
      {children}
      {modal}
    </>
  )
}
