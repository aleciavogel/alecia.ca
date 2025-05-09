import { Text, View } from '@react-pdf/renderer'

import { SKILLS, styles, tw } from '../../constants'
import SkillItem from './skill-item'

const SkillsSection = () => {
  return (
    <View style={{ ...styles.section, ...{ paddingBottom: 20 } }}>
      <Text style={tw('text-base mt-2 mb-2')}>Skill Summary</Text>
      <View style={tw('flex flex-row')}>
        <View style={tw('flex flex-row flex-wrap mr-2')}>
          {Object.keys(SKILLS).map((skill, index) => (
            <SkillItem key={`exp-${index}`} skill={skill} items={SKILLS[skill]} />
          ))}
        </View>
      </View>
    </View>
  )
}

export default SkillsSection
