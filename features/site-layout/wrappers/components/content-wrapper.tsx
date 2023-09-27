import { type FC } from 'react'

import { cn } from '@/common/lib/utils'

interface ContentWrapperProps {
  children: React.ReactNode
  className?: string
}

const ContentWrapper: FC<ContentWrapperProps> = ({ children, className }) => {
  return (
    <div
      className={cn(
        'w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg mx-auto',
        className,
      )}
    >
      {children}
    </div>
  )
}

export default ContentWrapper
