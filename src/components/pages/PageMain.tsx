import { type FC } from 'react'

import styles from './PageMain.module.css'
import SiteHeader from '@/components/layout/SiteHeader'

interface Props {
  children: React.ReactNode
  variant?: 'default' | 'chevron' | 'angled-left' | 'angled-right'
}

const PageMain: FC<Props> = ({ children, variant = 'default' }) => {
  const getClassName = (): string => {
    if (variant === 'chevron') return 'clipped-container-chevron'
    if (variant === 'angled-left') return 'clipped-container-angled-left'
    if (variant === 'angled-right') return 'clipped-container-angled-right'
    return 'clipped-container'
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>{children}</div>

      <div className={getClassName()}>
        <SiteHeader hasColor={true} />
      </div>
    </div>
  )
}

export default PageMain
