import { type FC } from 'react'
import { PortableText } from 'next-sanity'

import type { CourseBlock } from './portable-text-components'
import { coursePortableTextComponents } from './portable-text-components'

interface CoursePortableTextProps {
  value?: CourseBlock[]
}

const CoursePortableText: FC<CoursePortableTextProps> = ({ value = [] }) => {
  return <PortableText components={coursePortableTextComponents} value={value} />
}

export default CoursePortableText
