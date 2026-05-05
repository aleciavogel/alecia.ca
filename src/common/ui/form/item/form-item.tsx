'use client'

import type { HTMLAttributes } from 'react'
import { forwardRef, useId } from 'react'

import { cn } from '@alecia/util/styles'

import FormItemContext from './context'

const FormItem = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    const id = useId()

    return (
      <FormItemContext.Provider value={{ id }}>
        <div ref={ref} className={cn('space-y-1', className)} {...props} />
      </FormItemContext.Provider>
    )
  },
)

FormItem.displayName = 'FormItem'

export default FormItem
