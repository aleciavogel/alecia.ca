import React, { type FC, type HTMLProps } from 'react'

import { Typography } from '@alecia/ui-kit'
import { cn } from '@alecia/util'

interface FooterNavMenuProps extends HTMLProps<HTMLUListElement> {
  label: string
  containerClassName?: string
}

export const FooterNavMenu: FC<FooterNavMenuProps> = ({
  label,
  containerClassName,
  className,
  children,
  ...props
}) => {
  return (
    <div className={cn('min-w-[145px] text-white text-center md:text-left', containerClassName)}>
      <Typography variant="footer-nav-title" className="mb-4">
        {label}
      </Typography>
      <ul className={cn('space-y-2 md:space-y-3 text-sm', className)} {...props}>
        {children}
      </ul>
    </div>
  )
}
