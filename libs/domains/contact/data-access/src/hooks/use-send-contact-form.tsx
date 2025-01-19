import type { UseMutationOptions, UseMutationResult } from '@tanstack/react-query'
import { useMutation } from '@tanstack/react-query'

import { Routes } from '@alecia/constants'
import type { ContactFormValues } from '@alecia/contact-types'
import { api } from '@alecia/util'

type FormWithRecaptcha = ContactFormValues & { recaptcha?: string | null }

interface UseSendContactFormOptions
  extends Omit<UseMutationOptions<object, Error, FormWithRecaptcha>, 'mutationFn'> {
  onSuccess?: () => void
  onError?: (error: Error) => void
}

/**
 * Hook to submit a contact form
 * @param options - Customizable options including onSuccess and onError callbacks.
 */
export const useSendContactForm = (
  options: UseSendContactFormOptions = {},
): UseMutationResult<object, Error, FormWithRecaptcha> => {
  const { onSuccess, onError, ...mutationOptions } = options

  return useMutation<object, Error, FormWithRecaptcha>({
    mutationFn: (payload) =>
      new Promise((resolve, reject) => {
        api
          .post<FormWithRecaptcha, object>(
            Routes.Emails.ContactFormSubmission,
            payload,
            (response) => {
              resolve(response)
            },
          )
          .catch((error: unknown) => {
            if (error instanceof Error) {
              reject(error)
              return error
            }
          })
      }),
    onSuccess: () => {
      onSuccess?.()
    },
    onError,
    ...mutationOptions,
  })
}
