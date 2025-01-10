// components/Form/FormField.tsx
'use client'

import { createContext, type JSX, useContext } from 'react'
import { Controller, type ControllerProps, type FieldPath, type FieldValues } from 'react-hook-form'

interface FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> {
  name: TName
}

const FormFieldContext = createContext<FormFieldContextValue | undefined>(undefined)

export const useFormFieldContext = (): FormFieldContextValue<FieldValues, string> => {
  const context = useContext(FormFieldContext)
  if (!context) {
    throw new Error('useFormFieldContext must be used within a FormFieldContext.Provider')
  }
  return context
}

export const FormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  ...props
}: ControllerProps<TFieldValues, TName>): JSX.Element => (
  <FormFieldContext.Provider value={{ name: props.name }}>
    <Controller {...props} />
  </FormFieldContext.Provider>
)
