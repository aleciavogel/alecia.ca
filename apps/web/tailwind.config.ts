import type { Config } from 'tailwindcss'
import {
  fuchsia as defaultAccent,
  gray as defaultBody,
  violet as defaultPrimary,
} from 'tailwindcss/colors'
import plugin from 'tailwindcss/plugin'
import type { PluginAPI } from 'tailwindcss/types/config'
import tailwindAnimate from 'tailwindcss-animate'

import { dynamicTheme } from './plugins/dynamic-themes'

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

const config: Config = {
  safelist,
  darkMode: ['selector'],
  content: ['../../libs/**/*.{ts,tsx}', '../../apps/web/**/*.{ts,tsx}'],
  prefix: '',
  theme: {
    listStyleType: {
      square: 'square',
    },
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    fontFamily: {
      serif: [
        'var(--font-eksell-large), ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
      ],
      'serif-small': [
        'var(--font-eksell-small), ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
      ],
      'sans-serif': [
        'var(--font-silka), ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
      ],
    },
    extend: {
      boxShadow: {
        flat: '5px 5px 0 0 rgba(0, 0, 0, 1)',
        'flat-md': '4px 4px 0 0 rgba(0, 0, 0, 1)',
        'flat-sm': '3px 3px 0 0 rgba(0, 0, 0, 1)',
        'flat-xs': '1px 1px 0 0 rgba(0, 0, 0, 1)',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [
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
  ],
}

export default config
