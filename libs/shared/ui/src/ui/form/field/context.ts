import { createContext } from 'react'
import type { FieldPath, FieldValues } from 'react-hook-form'

export interface FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> {
  name: TName
}

const FormFieldContext = createContext<FormFieldContextValue | undefined>(undefined)

export default FormFieldContext
