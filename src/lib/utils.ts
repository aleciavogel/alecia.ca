import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Merge classNames with TailwindCSS
 * @param inputs - an array of classNames
 * @returns string
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs))
}

/**
 * Converts hex color codes to rgb
 * @param hex - hex color code (ie, "#0099ff")
 * @returns string compatible with TailwindCSS (ex. '0, 153, 255;')
 */
export const hexToRGB = (hex: string): string => {
  const color = hex.replace(/#/g, '')
  // rgb values
  const r = parseInt(color.slice(1, 3), 16)
  const g = parseInt(color.slice(3, 5), 16)
  const b = parseInt(color.slice(5, 7), 16)

  return [r, g, b].join(', ') + ';'
}
