import type { UseMutationOptions, UseMutationResult } from '@tanstack/react-query'
import { useMutation } from '@tanstack/react-query'

import { Routes } from '@alecia/constants/routes'
import type { ContactFormValues } from '@alecia/contact-types'
import { api } from '@alecia/util/api'

interface UseSendContactFormOptions
  extends Omit<UseMutationOptions<object, Error, ContactFormValues>, 'mutationFn'> {
  onSuccess?: () => void
  onError?: (error: Error) => void
}

/**
 * Hook to submit a contact form
 * @param options - Customizable options including onSuccess and onError callbacks.
 */
const useSendContactForm = (
  options: UseSendContactFormOptions = {},
): UseMutationResult<object, Error, ContactFormValues> => {
  const { onSuccess, onError, ...mutationOptions } = options

  return useMutation<object, Error, ContactFormValues>({
    mutationFn: async (payload) => {
      try {
        const response = await api.post<object>(Routes.API.Contact.Send, payload)

        // If API returns a response with an error status, throw an error
        if (!response || (response as any).status >= 400) {
          throw new Error(`Server responded with error: ${(response as any).status}`)
        }

        return response // Ensure the promise resolves correctly
      } catch (error: unknown) {
        if (error instanceof Error) {
          throw error // Properly propagate errors
        }
        throw new Error('An unknown error occurred')
      }
    },
    onSuccess: () => {
      onSuccess?.() // Ensure onSuccess is only called on actual success
    },
    onError,
    ...mutationOptions,
  })
}

export default useSendContactForm
