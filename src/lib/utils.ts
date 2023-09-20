import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs))
}

export const hexToRGB = (hex: string, colorName: string): string => {
  const color = hex.replace(/#/g, '')
  // rgb values
  const r = parseInt(color.slice(1, 3), 16)
  const g = parseInt(color.slice(3, 5), 16)
  const b = parseInt(color.slice(5, 7), 16)

  return `--color-${colorName}: ${r}, ${g}, ${b};`
}
