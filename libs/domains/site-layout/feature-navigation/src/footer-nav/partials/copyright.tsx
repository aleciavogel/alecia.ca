import type { JSX } from 'react'

import { getSettings } from '@alecia/settings-data-access/server'

export const Copyright = async (): Promise<JSX.Element> => {
  const data = await getSettings()
  const currentYear = new Date().getFullYear()
  const defaultCopyright = `2022-${String(currentYear)} Alecia Vogel. All rights reserved.`
  const copyright = data?.copyright ?? defaultCopyright

  return <span>&copy; {copyright}</span>
}
