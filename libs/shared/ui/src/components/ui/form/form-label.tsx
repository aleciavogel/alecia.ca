'use client'

import type { ComponentPropsWithoutRef, ElementRef } from 'react'
import { forwardRef } from 'react'

import { cn } from '@alecia/util'

import { Label } from '../label'
import { useFormField } from './use-form-field'

export const FormLabel = forwardRef<ElementRef<'label'>, ComponentPropsWithoutRef<'label'>>(
  ({ className, ...props }, ref) => {
    const { error, formItemId } = useFormField()

    return (
      <Label
        ref={ref}
        className={cn(error && 'text-destructive', className)}
        htmlFor={formItemId}
        {...props}
      />
    )
  },
)

FormLabel.displayName = 'FormLabel'
