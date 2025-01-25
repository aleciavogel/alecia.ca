'use client'

import { type FieldError, type FieldValues, useFormContext } from 'react-hook-form'

import useFormFieldContext from './fields/use-form-field-context'
import { useFormItemContext } from './item'

interface UseFormField {
  id: string
  name: string
  formItemId: string
  formDescriptionId: string
  formMessageId: string
  invalid: boolean
  isDirty: boolean
  isTouched: boolean
  isValidating: boolean
  error?: FieldError
}

export const useFormField = (): UseFormField => {
  const fieldContext = useFormFieldContext()
  const itemContext = useFormItemContext()
  const { getFieldState, formState } = useFormContext<FieldValues>()

  const fieldState = getFieldState(fieldContext.name, formState)

  const { id } = itemContext

  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState,
  }
}
