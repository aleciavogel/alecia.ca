'use client'
import { useTheme } from 'next-themes'
import DayIcon from '@/components/images/icons/DayIcon'
import NightIcon from '@/components/images/icons/NightIcon'
import { type FC } from 'react'

interface Props {
  hover: boolean
}

const DarkModeToggle: FC<Props> = ({ hover }) => {
  const { theme, setTheme } = useTheme()
  const icon = theme === 'dark' ? <NightIcon className="h-4" /> : <DayIcon className="h-5" />

  if (hover) {
    return (
      <div className="text-right">
        <div
          role="button"
          aria-label="Toggle dark mode"
          id="theme-toggle"
          className="theme-button pointer-events-auto"
          onClick={() => {
            setTheme(theme === 'dark' ? 'light' : 'dark')
          }}
        >
          {icon}
        </div>
      </div>
    )
  }

  return (
    <div className="text-right">
      <div className="theme-button">{icon}</div>
    </div>
  )
}

export default DarkModeToggle
