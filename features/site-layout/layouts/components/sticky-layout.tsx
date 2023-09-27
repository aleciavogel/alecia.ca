'use client'

import { type FC } from 'react'

import { StaticNav, StickyHeader } from '@/features/site-nav'
import SiteFooter from '@/features/site-footer'
import { ChevronHeader, SiteWrapper } from '@/features/site-layout'
import type { PageProps } from '@/features/site-layout/types'
import type { ClippedContainerType } from '../types'
import PageMain from './page-main'

interface StickyLayoutProps extends PageProps {
  variant?: ClippedContainerType
  pageHeader?: React.ReactNode
  contentClassName?: string
  stickyClassName?: string
  preFooter?: React.ReactNode
}

const StickyLayout: FC<StickyLayoutProps> = ({
  children,
  variant,
  title = '',
  subtitle,
  contentClassName,
  stickyClassName,
  pageHeader = <ChevronHeader title={title} subtitle={subtitle} />,
  preFooter,
  ...props
}) => {
  return (
    <SiteWrapper {...props}>
      <StickyHeader />
      <StickyHeader hover={true} />

      <StaticNav />

      {pageHeader}

      <PageMain className={contentClassName} stickyClassName={stickyClassName}>
        {children}
      </PageMain>

      {preFooter}

      <SiteFooter />
    </SiteWrapper>
  )
}

export default StickyLayout
