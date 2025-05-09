import { Document } from '@react-pdf/renderer'

import ResumeFrontPage from './page-1'
import ResumePageTwo from './page-2'
import ResumePageThree from './page-3'
import ResumePageFour from './page-4'
import ResumePageFive from './page-5'

const ResumeDocument = () => {
  return (
    <Document title="Alecia Vogel - Resume">
      <ResumeFrontPage />

      <ResumePageTwo />

      <ResumePageThree />

      <ResumePageFour />

      <ResumePageFive />
    </Document>
  )
}

export default ResumeDocument
