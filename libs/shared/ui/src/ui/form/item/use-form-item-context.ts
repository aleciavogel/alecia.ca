import { useContext } from 'react'

import FormItemContext, { FormItemContextValue } from './context'

const useFormItemContext = (): FormItemContextValue => {
  const context = useContext(FormItemContext)
  if (!context) {
    throw new Error('useFormItemContext must be used within a FormItemContext.Provider')
  }
  return context
}

export default useFormItemContext
