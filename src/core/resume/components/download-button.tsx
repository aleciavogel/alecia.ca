'use client'

import { useEffect, useState } from 'react'
import { faDownload } from '@fortawesome/pro-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { PDFDownloadLink } from '@react-pdf/renderer'

import { buttonVariants } from '@alecia/common/ui/button'
import { Spinner } from '@alecia/common/ui/spinner'
import { cn } from '@alecia/util/styles'

import ResumeDocument from './pages'

const ResumeDownloadButton = () => {
  const [canRender, setCanRender] = useState(false)
  const currentDate = new Date()
  const formattedDate = `${currentDate.getFullYear()}-${
    currentDate.getMonth() + 1
  }-${currentDate.getDate()}`

  useEffect(() => {
    setCanRender(true)
  }, [])

  if (!canRender) {
    return null
  }

  return (
    <div className="uppercase text-xs font-bold tracking-relaxed">
      <PDFDownloadLink
        document={<ResumeDocument />}
        fileName={`Alecia Vogel - Resume (${formattedDate}).pdf`}
      >
        {({ loading }) => {
          if (loading) {
            return (
              <div className={cn(buttonVariants({ variant: 'default', size: 'lg' }))}>
                <Spinner className="mr-1.5 size-4 text-inherit" />
                <span>Generating resume...</span>
              </div>
            )
          }

          return (
            <div className={cn(buttonVariants({ variant: 'default', size: 'lg' }))}>
              <FontAwesomeIcon icon={faDownload} className="h-3 w-3 mr-2" />
              <span>Download PDF</span>
            </div>
          )
        }}
      </PDFDownloadLink>
    </div>
  )
}

export default ResumeDownloadButton
