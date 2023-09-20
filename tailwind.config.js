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
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'red',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'red',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'var(--primary-800)',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'red',
          foreground: 'hsl(var(--card-foreground))',
        },
        'white-rgba': 'rgba(255, 255, 255, 0.6)',
        'primary-50': 'var(--primary-50)',
        'primary-100': 'var(--primary-100)',
        'primary-200': 'var(--primary-200)',
        'primary-300': 'var(--primary-300)',
        'primary-400': 'var(--primary-400)',
        'primary-500': 'var(--primary-500)',
        'primary-600': 'var(--primary-600)',
        'primary-700': 'var(--primary-700)',
        'primary-800': 'var(--primary-800)',
        'primary-900': 'var(--primary-900)',
        'accent-50': 'var(--accent-50)',
        'accent-100': 'var(--accent-100)',
        'accent-200': 'var(--accent-200)',
        'accent-300': 'var(--accent-300)',
        'accent-400': 'var(--accent-400)',
        'accent-500': 'var(--accent-500)',
        'accent-600': 'var(--accent-600)',
        'accent-700': 'var(--accent-700)',
        'accent-800': 'var(--accent-800)',
        'accent-900': 'var(--accent-900)',
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
