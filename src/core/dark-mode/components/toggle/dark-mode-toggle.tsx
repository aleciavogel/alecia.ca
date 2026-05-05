import { type FC } from 'react'

import CurrentThemeIcon from './current-theme-icon'

const DarkModeToggle: FC = () => (
  <div className="p-2 translate-x-1 md:translate-x-2">
    <div className="opacity-70 pointer-events-none">
      <CurrentThemeIcon />
    </div>
  </div>
)

export default DarkModeToggle
