// components/Form/FormField.tsx
'use client'

import { type JSX } from 'react'
import { Controller, type ControllerProps, type FieldPath, type FieldValues } from 'react-hook-form'

import FormFieldContext from './context'

const FormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  ...props
}: ControllerProps<TFieldValues, TName>): JSX.Element => (
  <FormFieldContext.Provider value={{ name: props.name }}>
    <Controller {...props} />
  </FormFieldContext.Provider>
)

export default FormField
