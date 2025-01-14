import React, { type FC } from 'react'

import { AleciaSitIllustration } from '@alecia/ui-kit'
import { cn } from '@alecia/util'

export const FooterIllustration: FC = () => (
  <div
    className={cn(
      'max-md:mx-auto',
      'max-w-[300px] w-2/3',
      /**
       * Move down so Phoebe is sitting on the border
       * (dynamically adjusted, so it stays the same regardless of width)
       */
      'md:-mb-[6%] lg:-mb-[60px]',
      /**
       * Move to the left to obscure the border with Alecia's foot
       */
      'md:-ml-[3.1%] min-[955px]:-ml-[29px]', // lg:-ml-[4%]
    )}
  >
    <AleciaSitIllustration className="w-full" />
  </div>
)
