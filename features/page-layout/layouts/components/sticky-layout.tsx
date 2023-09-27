'use client'

import { type FC } from 'react'

import { StaticNav, StickyHeader } from '@/features/site-nav'
import SiteFooter from '@/features/site-footer'
import { ChevronHeader, SiteWrapper } from '@/features/page-layout'
import type { PageProps } from '@/features/page-layout/types'
import type { ClippedContainerType } from '../types'
import PageMain from './page-main'

interface StickyLayoutProps extends PageProps {
  variant?: ClippedContainerType
  pageHeader?: () => React.ReactNode
  contentClassName?: string
  stickyClassName?: string
  preFooter?: () => React.ReactNode
}

const StickyLayout: FC<StickyLayoutProps> = ({
  children,
  variant,
  title = '',
  subtitle,
  pageHeader = () => <ChevronHeader title={title} subtitle={subtitle} />,
  contentClassName,
  stickyClassName,
  preFooter,
  ...props
}) => {
  return (
    <SiteWrapper {...props}>
      <StickyHeader />
      <StickyHeader hover={true} />

      <StaticNav />

      {pageHeader()}

      <PageMain className={contentClassName} stickyClassName={stickyClassName}>
        {children}
      </PageMain>

      {preFooter !== undefined && preFooter()}

      <SiteFooter />
    </SiteWrapper>
  )
}

export default StickyLayout
