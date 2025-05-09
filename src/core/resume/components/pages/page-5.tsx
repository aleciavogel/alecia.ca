import type { FC } from 'react'
import { Page } from '@react-pdf/renderer'

import BrandsSection from '@alecia/core/resume/components/template/brands'
import ResumeBackground from '@alecia/core/resume/components/template/resume-background'
import ResumeWrapper from '@alecia/core/resume/components/template/resume-wrapper'
import VolunteeringSection from '@alecia/core/resume/components/template/volunteering-section'
import { COLORS, styles, VOLUNTEERING } from '@alecia/core/resume/constants'

const ResumePageFive: FC = () => {
  return (
    <Page wrap size="A4" style={{ ...styles.page, ...styles.bgIndigo }}>
      <ResumeBackground color={COLORS.bgGrey} />
      <ResumeWrapper>
        <VolunteeringSection experiences={VOLUNTEERING} showBorder={true} />
        <BrandsSection />
      </ResumeWrapper>
    </Page>
  )
}

export default ResumePageFive
