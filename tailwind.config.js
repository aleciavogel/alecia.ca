const tailwindColors = require('./node_modules/tailwindcss/colors')
import { hexToRGB } from './src/lib/utils'

// Skip these to avoid a load of deprecated warnings when tailwind starts up
const deprecated = ['lightBlue', 'warmGray', 'trueGray', 'coolGray', 'blueGray']

const convertedColors = Object.keys(tailwindColors).reduce((acc, color) => {
  if (deprecated.includes(color)) {
    return
  }

  const colorValue = tailwindColors[color]
  if (typeof colorValue === 'string') {
    acc[color] = hexToRGB(colorValue, color)
  } else {
    acc[color] = {}
    Object.keys(colorValue).forEach((shade) => {
      acc[color][shade] = hexToRGB(colorValue[shade], color)
    })
  }
  return acc
}, {})

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
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
      colors: {
        border: 'red',
        input: 'hsl(var(--input))',
        ring: 'red',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'red',
          foreground: 'hsl(var(--muted-foreground))',
        },
        popover: {
          DEFAULT: 'var(--primary-800)',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'red',
          foreground: 'hsl(var(--card-foreground))',
        },
        ...convertedColors,
        primary: {
          DEFAULT: 'var(--primary-600)',
          50: 'rgb(var(--primary-50)',
          100: 'var(--primary-100)',
          200: 'var(--primary-200)',
          300: 'var(--primary-300)',
          400: 'var(--primary-400)',
          500: 'var(--primary-500)',
          600: 'var(--primary-600)',
          700: 'var(--primary-700)',
          800: 'var(--primary-800)',
          900: 'var(--primary-900)',
        },
        accent: {
          DEFAULT: 'var(--accent-600)',
          50: 'var(--accent-50)',
          100: 'var(--accent-100)',
          200: 'var(--accent-200)',
          300: 'var(--accent-300)',
          400: 'var(--accent-400)',
          500: 'var(--accent-500)',
          600: 'var(--accent-600)',
          700: 'var(--accent-700)',
          800: 'var(--accent-800)',
          900: 'var(--accent-900)',
        },
        body: 'var(--textBody)',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
    variables: {
      DEFAULT: {
        colors: convertedColors,
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    function ({ addVariant }) {
      addVariant('child', '& > *')
      addVariant('child-hover', '& > *:hover')
      addVariant('visibleChild', '& > :not([hidden]) ~ :not([hidden])')
      addVariant('activeLink', '&.active')
      addVariant('nextDiv', '& + div')
    },
  ],
}
