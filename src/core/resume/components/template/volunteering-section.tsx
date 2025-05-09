import { Text, View } from '@react-pdf/renderer'

import ExperienceItem from '@alecia/core/resume/components/template/experience-item'
import { styles, tw } from '@alecia/core/resume/constants'
import type { ExperienceItem as ExperienceItemType } from '@alecia/core/resume/types'

interface Props {
  experiences: ExperienceItemType[]
  showBorder?: boolean
}

const VolunteeringSection = ({ experiences, showBorder = false }: Props) => {
  const borderStyles = showBorder ? styles.borderBottom : {}
  const sectionStyles = [tw('mt-2'), styles.section, borderStyles]

  return (
    <View style={sectionStyles}>
      <Text style={tw('text-base mb-2')}>Volunteering</Text>

      {experiences.map((experience, index) => (
        <ExperienceItem key={`exp-${index}`} {...experience} />
      ))}
    </View>
  )
}

export default VolunteeringSection
