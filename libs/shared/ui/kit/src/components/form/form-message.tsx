'use client'

import type { HTMLAttributes } from 'react'
import { forwardRef } from 'react'

import { cn } from '@alecia/util'

import { useFormField } from './use-form-field'

export const FormMessage = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLParagraphElement>>(
  ({ className, children, ...props }, ref) => {
    const { error, formMessageId } = useFormField()
    const body = error ? String(error.message) : children

    if (!body) {
      return null
    }

    return (
      <p
        ref={ref}
        id={formMessageId}
        className={cn('text-[0.8rem] font-medium text-destructive', className)}
        {...props}
      >
        {body}
      </p>
    )
  },
)

FormMessage.displayName = 'FormMessage'
