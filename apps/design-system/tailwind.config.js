const { theme, plugins } = require('../../libs/shared/ui/src/tailwind')

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    '../../apps/**/src/**/*!(*.spec).{ts,tsx,js,jsx}',
    '../../libs/**/src/**/*!(*.spec).{ts,tsx,js,jsx}',
  ],
  theme,
  plugins,
}
