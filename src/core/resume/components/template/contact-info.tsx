import { Text, View } from '@react-pdf/renderer'

import { styles, tw } from '@alecia/core/resume/constants'

const ContactInfo = () => {
  return (
    <View
      style={{
        ...styles.textGray,
        ...tw('text-right text-sm leading-snug w-1/2'),
      }}
    >
      <Text>+1 (780) 232-5323</Text>
      <Text>hello@alecia.ca</Text>
      <Text>github.com/aleciavogel</Text>
    </View>
  )
}

export default ContactInfo
