'use client'

import type { HTMLAttributes } from 'react'
import { forwardRef } from 'react'

import { cn } from '@alecia/util'

import { useFormField } from './use-form-field'

const FormDescription = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => {
    const { formDescriptionId } = useFormField()

    return (
      <p
        ref={ref}
        id={formDescriptionId}
        className={cn('text-[0.8rem] text-muted-foreground', className)}
        {...props}
      />
    )
  },
)

FormDescription.displayName = 'FormDescription'

export { FormDescription }
