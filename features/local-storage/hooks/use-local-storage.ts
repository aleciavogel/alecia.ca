'use client'

import { useState, useEffect } from 'react'
import type { Dispatch, SetStateAction } from 'react'

export const useLocalStorage = <T>(
  key: string,
  fallbackValue: T,
): [T, Dispatch<SetStateAction<T>>] => {
  const [value, setValue] = useState(() => {
    let currentValue

    try {
      const storedValue = localStorage.getItem(key)
      currentValue = JSON.parse(storedValue ?? String(fallbackValue))
    } catch (error) {
      currentValue = fallbackValue
    }

    return currentValue
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])

  return [value, setValue] as const
}
