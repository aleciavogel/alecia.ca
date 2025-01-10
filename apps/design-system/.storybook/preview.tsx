// Add IntlProvider to wrap the preview
import { NextIntlClientProvider } from 'next-intl'

import '@alecia/ui-kit/styles/global.css'
import './storybook.css'

export const decorators = [
  (Story) => (
    <NextIntlClientProvider locale="en" messages={{}}>
      <Story />
    </NextIntlClientProvider>
  ),
]
