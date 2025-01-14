'use client'

import { FC, useMemo, useState } from 'react'
import { useTheme } from 'next-themes'

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@alecia/ui-kit'
import { cn } from '@alecia/util'

import { CurrentThemeIcon } from './current-theme-icon'

const LIGHT_MODE_TEXT = `Switch to dark mode`
const DARK_MODE_TEXT = `Switch to light mode`

export const DarkModeToggleHoverLayer: FC = () => {
  const { setTheme, resolvedTheme } = useTheme()
  const [isTooltipAllowed, setIsTooltipAllowed] = useState(false)

  const toggleText = useMemo(() => {
    const isDarkMode: boolean = resolvedTheme === 'dark'

    return isDarkMode ? DARK_MODE_TEXT : LIGHT_MODE_TEXT
  }, [resolvedTheme])

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger
          asChild
          onMouseEnter={() => {
            setIsTooltipAllowed(true)
          }}
          onMouseLeave={() => {
            setIsTooltipAllowed(false)
          }}
        >
          <div
            tabIndex={0}
            role="button"
            className={cn(
              'pointer-events-auto p-2 translate-x-1 md:translate-x-2',
              'opacity-0 hover:opacity-100 transition-opacity ease-in-out duration-200',
              'text-primary-500 dark:text-primary-300',
            )}
            id="theme-toggle"
            onClick={() => {
              setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
              }
            }}
          >
            <CurrentThemeIcon />
          </div>
        </TooltipTrigger>
        {isTooltipAllowed ? <TooltipContent>{toggleText}</TooltipContent> : null}
      </Tooltip>
    </TooltipProvider>
  )
}
