import type { FC } from 'react'
import { Page } from '@react-pdf/renderer'

import ExperienceSection from '@alecia/core/resume/components/template/experience-section'
import ResumeBackground from '@alecia/core/resume/components/template/resume-background'
import ResumeWrapper from '@alecia/core/resume/components/template/resume-wrapper'
import SkillsSection from '@alecia/core/resume/components/template/skills-section'
import { LAST_WORK_EXPERIENCE, OTHER_WORK_EXPERIENCE, styles } from '@alecia/core/resume/constants'

const ResumePageFour: FC = () => {
  return (
    <Page wrap size="A4" style={{ ...styles.page, ...styles.bgGrey }}>
      <ResumeBackground />
      <ResumeWrapper>
        <ExperienceSection showBorder={true} showTitle={false} experiences={LAST_WORK_EXPERIENCE} />
        <ExperienceSection
          sectionTitle="Other Professional Experience"
          experiences={OTHER_WORK_EXPERIENCE}
          showBorder={true}
        />
        <SkillsSection />
      </ResumeWrapper>
    </Page>
  )
}

export default ResumePageFour
