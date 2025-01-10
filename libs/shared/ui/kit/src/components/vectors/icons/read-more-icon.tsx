import { type FC } from 'react'

import type { VectorProps } from '@alecia/types'

export const ReadMoreArrowIcon: FC<VectorProps> = (props) => {
  return (
    <svg
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M19 14l-7 7m0 0l-7-7m7 7V3"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  )
}
