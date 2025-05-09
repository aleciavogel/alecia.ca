'use client'

import { useEffect, useState } from 'react'
import { Font, PDFViewer } from '@react-pdf/renderer'

import ResumeDocument from './pages'

Font.registerHyphenationCallback((word) => [word])

const ResumeTemplate = () => {
  const [canRender, setCanRender] = useState(false)

  useEffect(() => {
    setCanRender(true)
  }, [])

  if (!canRender) {
    return null
  }

  return (
    <div className="w-full h-full pt-8">
      <PDFViewer width="500px" height="600px" showToolbar={false} className="mx-auto">
        <ResumeDocument />
      </PDFViewer>
    </div>
  )
}

export default ResumeTemplate
