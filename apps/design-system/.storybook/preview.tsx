import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/pro-solid-svg-icons'

import 'locomotive-scroll/dist/locomotive-scroll.min.css'
import '@fortawesome/fontawesome-svg-core/styles.css'
import './storybook.css'

library.add(fas, fab)

export const decorators = [(Story: any) => <Story />]
