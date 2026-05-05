'use client'

import type { ComponentPropsWithoutRef, ElementRef } from 'react'
import { forwardRef } from 'react'

import { cn } from '@alecia/util/styles'

import Label from '../label'
import { useFormField } from './use-form-field'

const FormLabel = forwardRef<ElementRef<'label'>, ComponentPropsWithoutRef<'label'>>(
  ({ className, ...props }, ref) => {
    const { error, formItemId } = useFormField()

    return (
      <Label
        ref={ref}
        className={cn(error && 'text-red-600 dark:text-red-300', className)}
        htmlFor={formItemId}
        {...props}
      />
    )
  },
)

FormLabel.displayName = 'FormLabel'

export default FormLabel
