import type { VectorProps } from '@alecia/types/svg'

const ReadMoreArrowIcon = (props: VectorProps) => (
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

export default ReadMoreArrowIcon
