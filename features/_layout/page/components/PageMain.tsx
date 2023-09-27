import { type FC } from 'react'

import styles from './PageMain.module.css'
import SiteHeader from '@/features/_layout/header/components/SiteHeader'
import { cn } from '@/common/lib/utils'

interface Props {
  children: React.ReactNode
  variant?: 'default' | 'chevron' | 'angled-left' | 'angled-right'
  className?: string
}

const PageMain: FC<Props> = ({ children, variant = 'default', className }) => {
  const getClassName = (): string => {
    if (variant === 'chevron') return 'clipped-container-chevron'
    if (variant === 'angled-left') return 'clipped-container-angled-left'
    if (variant === 'angled-right') return 'clipped-container-angled-right'
    return 'clipped-container'
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>{children}</div>

      <div className={cn(getClassName(), className)}>
        <SiteHeader hasColor={true} />
      </div>
    </div>
  )
}

export default PageMain
