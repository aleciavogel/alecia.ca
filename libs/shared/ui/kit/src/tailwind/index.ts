import type { Config } from 'tailwindcss'
import {
  fuchsia as defaultAccent,
  gray as defaultBody,
  violet as defaultPrimary,
} from 'tailwindcss/colors'
import plugin from 'tailwindcss/plugin'
import type { PluginAPI } from 'tailwindcss/types/config'
import tailwindAnimate from 'tailwindcss-animate'

import { dynamicTheme } from '@alecia/tw-dynamic-themes'

const colors = [
  'slate',
  'gray',
  'zinc',
  'neutral',
  'stone',
  'red',
  'orange',
  'amber',
  'yellow',
  'lime',
  'green',
  'emerald',
  'teal',
  'cyan',
  'sky',
  'blue',
  'indigo',
  'violet',
  'purple',
  'fuchsia',
  'pink',
  'rose',
]

const safelist: string[] = []

colors.forEach((color) => {
  safelist.push(`primary-${color}`)
  safelist.push(`accent-${color}`)
  safelist.push(`body-${color}`)
})

export const theme: Config['theme'] = {
  extend: {
    boxShadow: {
      flat: '5px 5px 0 0 rgba(0, 0, 0, 1)',
      'flat-md': '4px 4px 0 0 rgba(0, 0, 0, 1)',
      'flat-sm': '3px 3px 0 0 rgba(0, 0, 0, 1)',
      'flat-xs': '1px 1px 0 0 rgba(0, 0, 0, 1)',
    },
    fontFamily: {
      heading: ['bricolage-grotesque, sans-serif'],
      paragraph: ['noto-sans, sans-serif'],
    },
    borderRadius: {
      lg: 'var(--radius)',
      md: 'calc(var(--radius) - 2px)',
      sm: 'calc(var(--radius) - 4px)',
    },
    animation: {
      marquee: 'marquee var(--duration) linear infinite',
      'marquee-vertical': 'marquee-vertical var(--duration) linear infinite',
      'accordion-down': 'accordion-down 0.2s ease-out',
      'accordion-up': 'accordion-up 0.2s ease-out',
    },
    keyframes: {
      marquee: {
        from: { transform: 'translateX(0)' },
        to: { transform: 'translateX(calc(-100% - var(--gap)))' },
      },
      'marquee-vertical': {
        from: { transform: 'translateY(0)' },
        to: { transform: 'translateY(calc(-100% - var(--gap)))' },
      },
      'accordion-down': {
        from: {
          height: '0',
        },
        to: {
          height: 'var(--radix-accordion-content-height)',
        },
      },
      'accordion-up': {
        from: {
          height: 'var(--radix-accordion-content-height)',
        },
        to: {
          height: '0',
        },
      },
    },
  },
}

export const plugins: Config['plugins'] = [
  tailwindAnimate,
  plugin((api: PluginAPI) => {
    api.addVariant('child', '& > *')
    api.addVariant('child-hover', '& > *:hover')
    api.addVariant('visibleChild', '& > :not([hidden]) ~ :not([hidden])')
    api.addVariant('activeLink', '&.active')
    api.addVariant('nextDiv', '& + div')
    api.addVariant('in-view', '&.is-inview')
    api.addVariant('light', 'html.light &')
  }),
  dynamicTheme({
    defaultColors: {
      primary: defaultPrimary,
      accent: defaultAccent,
      body: defaultBody,
    },
  }),
]
