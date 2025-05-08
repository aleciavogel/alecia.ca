import { useContext } from 'react'
import type { FieldValues } from 'react-hook-form'

import FormFieldContext, { FormFieldContextValue } from './context'

const useFormFieldContext = (): FormFieldContextValue<FieldValues, string> => {
  const context = useContext(FormFieldContext)
  if (!context) {
    throw new Error('useFormFieldContext must be used within a FormFieldContext.Provider')
  }
  return context
}

export default useFormFieldContext
