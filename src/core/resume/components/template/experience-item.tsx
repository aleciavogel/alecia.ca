import { Text, View } from '@react-pdf/renderer'

import { COLORS, styles, tw } from '@alecia/core/resume/constants'
import type { ExperienceItemProps } from '@alecia/core/resume/types'

const ExperienceItem = ({
  title,
  company,
  dateRange,
  description,
  location,
  skills,
}: ExperienceItemProps) => {
  return (
    <View style={tw('flex flex-row text-sm not:last:mb-6')}>
      <View style={tw('w-1/4')}>
        <Text
          style={{
            ...tw('leading-snug'),
            ...styles.textSmol,
            ...styles.fontBold,
          }}
        >
          {company}
        </Text>
        <Text style={tw('text-xs leading-snug')}>{location}</Text>
        <Text style={tw('text-xs leading-snug')}>{dateRange}</Text>
        {skills?.length !== undefined && skills?.length > 0 && (
          <View style={tw('mt-2')}>
            <Text
              style={{
                ...tw('text-xs leading-snug'),
                ...styles.fontBold,
                ...{ color: COLORS.indigo },
              }}
            >
              Skills
            </Text>
            <Text style={{ ...tw('text-xs leading-snug'), ...styles.textGray }}>
              {skills?.join(', ')}
            </Text>
          </View>
        )}
      </View>

      <View style={tw('w-3/4 pl-2')}>
        <Text style={{ ...tw('leading-snug'), ...styles.textSmol, ...styles.fontBold }}>
          {title}
        </Text>

        <View style={styles.textGray}>
          {description.map((desc, index) => (
            <View
              wrap={false}
              style={{ ...styles.bulletPoint, ...tw('text-sm mb-2') }}
              key={`desc-${encodeURIComponent(company)}-${index}`}
            >
              <Text style={{ ...styles.bulletIcon, ...{ width: 10 } }}>&#x2022;</Text>
              <Text style={styles.bulletText}>
                {desc}
                <Text>{'\n'}</Text>
              </Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  )
}

export default ExperienceItem
