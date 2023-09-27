import type { DefaultColor } from '@/common/types/colors'

export interface SiteLayoutProps {
  primaryColor?: DefaultColor
  accentColor?: DefaultColor
  textColor?: DefaultColor
  className?: string
  children: React.ReactNode
}

export interface PageProps extends SiteLayoutProps {
  title?: string
  subtitle?: string
}
