'use client'

import { type FC } from 'react'
import { useTheme } from 'next-themes'

import { Tooltip, TooltipTrigger, TooltipContent } from '@/common/ui/tooltip'
import { DayIcon, NightIcon } from './icons'

interface Props {
  hover: boolean
}

const DarkModeToggle: FC<Props> = ({ hover }) => {
  const { theme, setTheme } = useTheme()
  const icon =
    theme === 'dark' ? <NightIcon className="h-4 -mr-2" /> : <DayIcon className="h-5 -mr-2" />

  if (hover) {
    return (
      <div>
        <Tooltip>
          <TooltipTrigger>
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
          </TooltipTrigger>
          <TooltipContent side="left">
            Switch to {theme === 'dark' ? 'light' : 'dark'} mode
          </TooltipContent>
        </Tooltip>
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
