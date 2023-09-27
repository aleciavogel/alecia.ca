import { type FC } from 'react'

import type { SiteLayoutProps } from '@/features/site-layout/types'
import { cn } from '@/common/lib/utils'

const SiteWrapper: FC<SiteLayoutProps> = ({
  primaryColor = 'indigo',
  accentColor = 'pink',
  textColor = 'gray',
  className = '',
  children,
}) => {
  const colorClasses = `primary-${primaryColor} accent-${accentColor} body-${textColor}`

  return (
    <div data-scroll-section id="site-wrapper" className={cn(colorClasses, className)}>
      {children}
    </div>
  )
}

export default SiteWrapper
