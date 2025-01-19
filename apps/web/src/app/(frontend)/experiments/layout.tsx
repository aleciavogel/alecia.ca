import { ReactNode } from 'react'

interface ExperimentLayoutProps {
  children: ReactNode
  // modal: ReactNode
}

// TODO: Intercept the modal prop
export default function ExperimentLayout({
  children,
}: // modal
ExperimentLayoutProps) {
  return (
    <>
      {children}
      {/*{modal}*/}
    </>
  )
}
