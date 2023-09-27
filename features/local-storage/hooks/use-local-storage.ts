'use client'

import { useState, useEffect } from 'react'

export const useLocalStorage = <T>(key: string, fallbackValue: T): [T, (value: T) => void] => {
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

  const updateValue = (newValue: T): void => {
    setValue(newValue)
  }

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])

  return [value, updateValue] as const
}
