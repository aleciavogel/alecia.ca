import { Polygon, StyleSheet, Svg, View } from '@react-pdf/renderer'

import { COLORS } from '@alecia/core/resume/constants'

interface ResumeBackgroundProps {
  color?: string
}

const ResumeBackground = ({ color = COLORS.indigo }: ResumeBackgroundProps) => {
  return (
    <View style={styles.container}>
      <Svg style={styles.positioning} height="200%" width="200%" viewBox="0 0 200 200">
        <Polygon fill={color} points="0 0, 200 0, 200 200" />
      </Svg>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    height: '100%',
    width: '100%',
  },
  positioning: {
    position: 'absolute',
    top: '-50%',
    left: '-30%',
    transform: 'rotate(-20deg)',
    transformOrigin: 'center',
  },
})

export default ResumeBackground
