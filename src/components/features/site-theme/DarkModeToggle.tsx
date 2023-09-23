'use client'
import { useTheme } from 'next-themes'
import DayIcon from '@/components/icons/DayIcon'
import NightIcon from '@/components/icons/NightIcon'
import { type FC } from 'react'

interface Props {
  hover: boolean
}

const DarkModeToggle: FC<Props> = ({ hover }) => {
  const { theme, setTheme } = useTheme()
  const icon =
    theme === 'dark' ? <NightIcon className="h-4 -mr-2" /> : <DayIcon className="h-5 -mr-2" />

  if (hover) {
    return (
      <div
        role="button"
        className="theme-button pointer-events-auto p-2 translate-x-2"
        aria-label="Toggle dark mode"
        id="theme-toggle"
        onClick={() => {
          setTheme(theme === 'dark' ? 'light' : 'dark')
        }}
      >
        {icon}
      </div>
    )
  }

  return (
    <div className="p-2 translate-x-2">
      <div className="theme-button">{icon}</div>
    </div>
  )
}

export default DarkModeToggle
