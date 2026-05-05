import { createContext } from 'react'

export interface FormItemContextValue {
  id: string
}

const FormItemContext = createContext<FormItemContextValue | undefined>(undefined)

export default FormItemContext
