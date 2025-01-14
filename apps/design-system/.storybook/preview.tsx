import { ScrollProvider } from '@alecia/site-scroll'

import 'locomotive-scroll/dist/locomotive-scroll.min.css'
import '@fortawesome/fontawesome-svg-core/styles.css'
import './storybook.css'

export const decorators = [
  (Story: any) => (
    <ScrollProvider>
      <Story />
    </ScrollProvider>
  ),
]
