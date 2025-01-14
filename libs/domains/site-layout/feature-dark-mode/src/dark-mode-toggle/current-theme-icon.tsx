'use client'

import { FC, useMemo } from 'react'
import { faAdjust, faMoon, faSunAlt } from '@fortawesome/pro-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useTheme } from 'next-themes'

export const CurrentThemeIcon: FC = () => {
  const { theme } = useTheme()
  const themeIcon = useMemo(() => {
    if (theme === 'system') {
      return faAdjust
    }

    if (theme === 'light') {
      return faSunAlt
    }

    return faMoon
  }, [theme])

  return (
    <FontAwesomeIcon
      icon={themeIcon}
      className="w-4 cursor-pointer pointer-events-auto inline-block"
    />
  )
}
