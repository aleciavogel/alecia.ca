import { Page, View } from '@react-pdf/renderer'

import ContactInfo from '@alecia/core/resume/components/template/contact-info'
import ExperienceSection from '@alecia/core/resume/components/template/experience-section'
import ResumeBackground from '@alecia/core/resume/components/template/resume-background'
import ResumeWrapper from '@alecia/core/resume/components/template/resume-wrapper'
import Title from '@alecia/core/resume/components/template/title'

import { styles, WORK_EXPERIENCES } from '../../constants'

const ResumePageTwo = () => {
  return (
    <Page wrap size="A4" style={{ ...styles.page, ...styles.bgGrey }}>
      <ResumeBackground />
      <ResumeWrapper>
        <View style={{ ...styles.topRow, ...styles.borderBottom }}>
          <Title />
          <ContactInfo />
        </View>
        <ExperienceSection experiences={WORK_EXPERIENCES} />
      </ResumeWrapper>
    </Page>
  )
}

export default ResumePageTwo
