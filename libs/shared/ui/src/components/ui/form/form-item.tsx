'use client'

import type { HTMLAttributes } from 'react'
import { createContext, forwardRef, useContext, useId } from 'react'

import { cn } from '@alecia/util'

interface FormItemContextValue {
  id: string
}

const FormItemContext = createContext<FormItemContextValue | undefined>(undefined)

export const useFormItemContext = (): FormItemContextValue => {
  const context = useContext(FormItemContext)
  if (!context) {
    throw new Error('useFormItemContext must be used within a FormItemContext.Provider')
  }
  return context
}

export const FormItem = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
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
