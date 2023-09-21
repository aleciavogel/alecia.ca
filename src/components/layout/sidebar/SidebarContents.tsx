import { type FC } from 'react'
import { SheetContent, SheetDescription, SheetHeader, SheetTitle } from '@/components/ui/sheet'

const SidebarContents: FC = () => {
  return (
    <SheetContent side="right" className="z-[200] text-white">
      <SheetHeader>
        <SheetTitle>Edit profile</SheetTitle>
        <SheetDescription>
          Make changes to your profile here. Click save when you&apos;re done.
        </SheetDescription>
      </SheetHeader>
      <div className="grid gap-4 py-4">This is a test</div>
    </SheetContent>
  )
}

export default SidebarContents
