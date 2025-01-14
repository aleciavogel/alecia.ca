import type { Palette, ThemeTemplate } from './types'

export const DEFAULT_PALETTE: Palette = {
  '50': 50,
  '100': 100,
  '200': 200,
  '300': 300,
  '400': 400,
  '500': 500,
  '600': 600,
  '700': 700,
  '800': 800,
  '900': 900,
  '950': 950,
  default: {
    shade: 600,
    darkMode: 300,
  },
  shadow: {
    shade: 800,
    darkMode: 300,
  },
  zigzag: {
    shade: 600,
    darkMode: 300,
    template: (color) => {
      const encodedColor = encodeURIComponent(color)
      return `url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:ev='http://www.w3.org/2001/xml-events' viewBox='0 0 18 7'%3E%3Cstyle type='text/css'%3E.st0{animation:shift 0.4s linear infinite;}@keyframes shift {from {transform:translateX(0);}to {transform:translateX(-18px);}}%3C/style%3E%3Cpath fill='none' stroke='${encodedColor}' stroke-width='1.5' class='st0' d='M -0 6 L 11 0 L 18 6 L 27 0 L 36 6'/%3E%3C/svg%3E")`
    },
  },
}

export const DEFAULT_CONTENT_PALETTE: Palette = {
  default: {
    shade: 700,
    darkMode: 300,
  },
}

export const DEFAULT_THEME: ThemeTemplate = {
  primary: DEFAULT_PALETTE,
  accent: DEFAULT_PALETTE,
  body: DEFAULT_CONTENT_PALETTE,
}

export const EXCLUDED_COLORS = ['inherit', 'current', 'transparent', 'white', 'black']
