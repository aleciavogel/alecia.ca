import { type FC } from 'react'
import { Sheet, SheetTrigger } from '@/common/ui/sheet'

import SidebarContent from './sidebar-content'

interface Props {
  children: React.ReactNode
}

const SiteSidebar: FC<Props> = ({ children }) => {
  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SidebarContent />
    </Sheet>
  )
}

export default SiteSidebar
