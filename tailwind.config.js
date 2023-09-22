const tailwindColors = require('./node_modules/tailwindcss/colors')
const safelist = []

// Skip these to avoid a load of deprecated warnings when tailwind starts up
const deprecated = ['lightBlue', 'warmGray', 'trueGray', 'coolGray', 'blueGray']

for (const colorName in tailwindColors) {
  if (deprecated.includes(colorName)) {
    continue
  }

  const shades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900]

  const palette = tailwindColors[colorName]

  if (typeof palette === 'object') {
    shades.forEach((shade) => {
      if (shade in palette) {
        safelist.push(`text-${colorName}-${shade}`)
        safelist.push(`child:text-${colorName}-${shade}`)
        safelist.push(`hover:text-${colorName}-${shade}`)
        safelist.push(`dark:hover:text-${colorName}-${shade}`)
        safelist.push(`dark:text-${colorName}-${shade}`)
        safelist.push(`bg-${colorName}-${shade}`)
        safelist.push(`hover:bg-${colorName}-${shade}`)
        safelist.push(`nextDiv:text-${colorName}-300`)
        safelist.push(`zigzag-${colorName}-400`)
        safelist.push(`zigzag-${colorName}-600`)
        safelist.push(`hover:zigzag-${colorName}-400`)
        safelist.push(`hover:zigzag-${colorName}-600`)
        safelist.push(`text-${colorName}`)
        safelist.push(`primary-${colorName}`)
        safelist.push(`accent-${colorName}`)
      }
    })
  }
}

safelist.push('page-content')

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  safelist,
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
  },
  plugins: [
    require('tailwindcss-animate'),
    function ({ addVariant }) {
      addVariant('child', '& > *')
      addVariant('child-hover', '& > *:hover')
      addVariant('visibleChild', '& > :not([hidden]) ~ :not([hidden])')
      addVariant('activeLink', '&.active')
      addVariant('nextDiv', '& + div')
      addVariant('in-view', '&.is-inview')
    },
  ],
}
