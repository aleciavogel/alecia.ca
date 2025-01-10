const { theme, plugins } = require('../../libs/shared/ui/kit/src/tailwind')

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    '../../apps/backend/src/**/*!(*.spec).{ts,tsx,js,jsx}',
    '../../libs/**/src/**/*!(*.spec).{ts,tsx,js,jsx}',
  ],
  theme,
  plugins,
}
