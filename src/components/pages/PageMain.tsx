import { type FC } from 'react'

import styles from './PageMain.module.css'
import SiteHeader from '@/components/layout/SiteHeader'

interface Props {
  children: React.ReactNode
}

const PageMain: FC<Props> = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>{children}</div>

      <div className="clipped-container">
        <SiteHeader hasColor={true} />
      </div>
    </div>
  )
}

export default PageMain
