import type { FC } from 'react'
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { Path, Svg } from '@react-pdf/renderer'
import type { Style } from '@react-pdf/types'

interface FontAwesomeIconProps {
  faIcon: IconDefinition
  style?: Style
}

const FontAwesomeIcon: FC<FontAwesomeIconProps> = ({ faIcon: { icon }, style = {} }) => {
  const duotone = Array.isArray(icon[4])
  const paths = Array.isArray(icon[4]) ? icon[4] : [icon[4]]
  const color = style.color ?? 'black'
  return (
    <Svg viewBox={`0 0 ${icon[0]} ${icon[1]}`} style={style}>
      {paths?.map((d, index) => (
        <Path d={d} key={index} fill={color} fillOpacity={duotone && index === 0 ? 0.4 : 1.0} />
      ))}
    </Svg>
  )
}

export default FontAwesomeIcon
