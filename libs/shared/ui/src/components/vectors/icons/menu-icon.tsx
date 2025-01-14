import { type FC } from 'react'

interface MenuIconProps {
  className?: string
  onClick?: () => void
}

// TODO: Find a better menu icon to animate...

export const MenuIcon: FC<MenuIconProps> = (props) => {
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
      />
    </svg>
  )
}
