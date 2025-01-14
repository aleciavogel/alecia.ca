import { type FC } from 'react'

import type { VectorProps } from '@alecia/types'

export const AleciaLogo: FC<VectorProps> = ({ className = 'h-10 md:h-14 w-auto', ...props }) => {
  return (
    <svg
      fill="currentColor"
      viewBox="0 0 90 97.27"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path d="M45,0,0,30V67.27l45,30,45-30V30Zm0,21.63,20.25,13.5-13.5,9L45,39.63l-6.75,4.5-13.5-9Zm27,36-27,18-27-18v-18l27,18,27-18Z" />
    </svg>
  )
}
