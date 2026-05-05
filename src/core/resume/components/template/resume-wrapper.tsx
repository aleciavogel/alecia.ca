import type { PropsWithChildren } from 'react'
import { View } from '@react-pdf/renderer'

import { tw } from '@alecia/core/resume/constants'

const ResumeWrapper = ({ children }: PropsWithChildren) => {
  return <View style={tw('p-6 h-full bg-white')}>{children}</View>
}

export default ResumeWrapper
