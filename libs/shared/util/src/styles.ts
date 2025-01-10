import { type ClassValue, clsx } from 'clsx'
import { extendTailwindMerge } from 'tailwind-merge'

const customTwMerge = extendTailwindMerge({
  extend: {
    theme: {
      // @ts-expect-error -- box shadow is not supported
      boxShadow: ['shadow-flat', 'shadow-flat-md', 'shadow-flat-sm', 'shadow-flat-xs'],
    },
  },
})

/**
 * Merge class names with Tailwind CSS
 * @param inputs - Class names
 */
export const cn = (...inputs: ClassValue[]): string => customTwMerge(clsx(inputs))

/**
 * Convert a hex color to hsl
 * @param hex - Hex color to convert
 */
export const hexToHSL = (hex: string): { h: number; s: number; l: number } => {
  let longHex = hex
  let r: number, g: number, b: number
  const isShortForm = hex.length === 4

  if (isShortForm) {
    // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
    longHex = ['@/', hex[1], hex[1], hex[2], hex[2], hex[3], hex[3]].map((x) => String(x)).join('')
  }

  r = parseInt(`0x${String(longHex[1])}${String(longHex[2])}`)
  g = parseInt(`0x${String(longHex[3])}${String(longHex[4])}`)
  b = parseInt(`0x${String(longHex[5])}${String(longHex[6])}`)

  // Make r, g, and b fractions of 1
  r /= 255
  g /= 255
  b /= 255

  const minColor = Math.min(r, g, b)
  const maxColor = Math.max(r, g, b)
  const delta = maxColor - minColor

  let h: number, s: number, l: number

  if (delta === 0) h = 0
  else if (maxColor === r) h = ((g - b) / delta) % 6
  else if (maxColor === g) h = (b - r) / delta + 2
  else h = (r - g) / delta + 4

  h = Math.round(h * 60)

  if (h < 0) h += 360

  l = (maxColor + minColor) / 2
  s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1))
  s = Number((s * 100).toFixed(1))
  l = Number((l * 100).toFixed(1))

  return {
    h,
    s,
    l,
  }
}

interface CalcWavyBorderMaskArgs {
  size?: number
  curvature?: number
  position?: 'top' | 'bottom'
}

/**
 * Calculate a wavy border via radial-gradient mask in CSS
 * @param size - Size of the wave
 * @param curvature - Curvature of the wave
 * @param position - Position of the border
 */
export const calcWavyBorderMask = ({
  size = 19,
  curvature = 3,
  position = 'top',
}: CalcWavyBorderMaskArgs): string => {
  const period = size * curvature
  const radius = Math.sqrt(size ** 2 + period ** 2).toFixed(2)
  const height = 4 * size
  // Corrected circle centers
  const x1 = Math.abs(size + period).toFixed(2)
  const x2 = (-1 * period).toFixed(2)
  const x3 = period.toFixed(2)

  // Adjust top and bottom position calculations as needed
  if (position === 'top') {
    return (
      `radial-gradient(${String(radius)}px at 50% ${x1}px,#000 99%,#0000 101%)` +
      `calc(50% - ${String(size * 2)}px) 0/${String(height)}px 100%,` +
      `radial-gradient(${String(radius)}px at 50% ${x2}px,#0000 99%,#000 101%)` +
      `50% ${String(size)}px/${String(height)}px 100% repeat-x`
    )
  }

  return (
    `radial-gradient(${String(radius)}px at 50% calc(100% - ${x1}px),#000 99%,#0000 101%)` +
    `calc(50% - ${String(size * 2)}px) 0/${String(height)}px 100%,` +
    `radial-gradient(${String(radius)}px at 50% calc(100% + ${x3}px),#0000 99%,#000 101%)` +
    `50% calc(100% - ${String(size)}px)/${String(height)}px 100% repeat-x`
  )
}
