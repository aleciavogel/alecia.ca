import { type FC } from 'react'

interface Props {
  className?: string
  onClick?: () => void
}

const MenuIcon: FC<Props> = (props) => {
  return (
    <svg
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M4 6h16M4 12h16m-7 6h7"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      ></path>
    </svg>
  )
}

export default MenuIcon
