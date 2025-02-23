'use client'

import type { HTMLAttributes } from 'react'
import { forwardRef } from 'react'

import { cn } from '@alecia/util/styles'

import { useFormField } from './use-form-field'

const FormMessage = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLParagraphElement>>(
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
        className={cn('text-[0.8rem] font-medium text-red-600 dark:text-red-300', className)}
        {...props}
      >
        {body}
      </p>
    )
  },
)

FormMessage.displayName = 'FormMessage'

export default FormMessage
