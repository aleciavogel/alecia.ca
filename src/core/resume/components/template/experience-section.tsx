import type { FC } from 'react'
import { Text, View } from '@react-pdf/renderer'

import { styles, tw } from '@alecia/core/resume/constants'
import type { ExperienceItem as ExperienceItemType } from '@alecia/core/resume/types'

import ExperienceItem from './experience-item'

interface Props {
  experiences: ExperienceItemType[]
  showBorder?: boolean
  sectionTitle?: string
  showTitle?: boolean
}

const ExperienceSection: FC<Props> = ({
  experiences,
  showBorder = false,
  sectionTitle = 'Industry Experience',
  showTitle = true,
}) => {
  const borderStyles = showBorder ? styles.borderBottom : {}
  const sectionStyles = showTitle
    ? [tw('mt-2'), styles.section, borderStyles]
    : [borderStyles, tw('pt-4')]

  return (
    <View style={sectionStyles}>
      {showTitle && <Text style={tw('text-base mb-2')}>{sectionTitle}</Text>}

      {experiences.map((experience, index) => (
        <ExperienceItem key={`exp-${index}`} {...experience} />
      ))}
    </View>
  )
}

export default ExperienceSection
