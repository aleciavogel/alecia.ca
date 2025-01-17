import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/pro-solid-svg-icons'
import type { Preview } from '@storybook/react'
import { themes } from '@storybook/theming'

import 'locomotive-scroll/dist/locomotive-scroll.min.css'
import '@fortawesome/fontawesome-svg-core/styles.css'
import './storybook.css'

library.add(fas, fab)

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      disable: true,
    },
    darkMode: {
      stylePreview: true,
      dark: themes.dark,
      light: themes.light,
    },
    options: {
      storySort: {
        method: 'alphabetical',
      },
    },
  },
  decorators: [
    (Story) => (
      <div className="primary-indigo accent-pink body-gray text-body">
        <Story />
      </div>
    ),
  ],
}

export default preview
