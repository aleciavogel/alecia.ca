import { type FC } from 'react'
import { Sheet, SheetTrigger } from '@/common/ui/sheet'
import SidebarContents from './SidebarContents'

interface Props {
  children: React.ReactNode
}

const SiteSidebar: FC<Props> = ({ children }) => {
  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SidebarContents />
    </Sheet>
  )
}

export default SiteSidebar
