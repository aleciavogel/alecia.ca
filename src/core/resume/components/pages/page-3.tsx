import type { FC } from 'react'
import { Page } from '@react-pdf/renderer'

import ExperienceSection from '@alecia/core/resume/components/template/experience-section'
import ResumeBackground from '@alecia/core/resume/components/template/resume-background'
import ResumeWrapper from '@alecia/core/resume/components/template/resume-wrapper'
import { COLORS, styles, WORK_EXPERIENCES_CONTINUED } from '@alecia/core/resume/constants'

const ResumePageThree: FC = () => {
  return (
    <Page wrap size="A4" style={{ ...styles.page, ...styles.bgIndigo }}>
      <ResumeBackground color={COLORS.bgGrey} />
      <ResumeWrapper>
        <ExperienceSection
          showTitle={false}
          showBorder={false}
          experiences={WORK_EXPERIENCES_CONTINUED}
        />
      </ResumeWrapper>
    </Page>
  )
}

export default ResumePageThree
