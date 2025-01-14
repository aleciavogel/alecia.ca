import React, { type FC } from 'react'

import { cn } from '@alecia/util'

export const FooterSeparator: FC = () => (
  <div className="container mx-auto md:pl-2">
    <hr className={cn('border-primary-300 my-6 md:my-4')} />
  </div>
)
