'use client'

import React from 'react'
import { useForm } from 'react-hook-form'
import { faSpinner } from '@fortawesome/pro-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { zodResolver } from '@hookform/resolvers/zod'

import { useSendContactForm } from '@alecia/contact-data-access'
import { ContactFormSchema, type ContactFormValues } from '@alecia/contact-types'
import {
  Button,
  CardContent,
  CardFooter,
  Form,
  SelectField,
  TextAreaField,
  TextField,
} from '@alecia/ui-kit'
import { cn } from '@alecia/util'

const SUBJECT_OPTIONS = [
  'General Inquiry',
  'Employment Opportunity',
  'Freelance Project',
  'Speaking Engagement',
  'Issue with the Website',
  'Just wanted to say hi!',
  'Something else...',
]

interface ContactFormProps {
  onSuccess?: (data: ContactFormValues) => void
  onError?: (error: Error) => void
}

export const ContactForm = ({ onSuccess, onError }: ContactFormProps) => {
  const { mutate: submitForm, isPending } = useSendContactForm()
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    },
  })

  const handleSubmit = (data: ContactFormValues): void => {
    submitForm(data, {
      onSuccess: () => {
        form.reset()
        onSuccess?.(data)
      },
      onError: (error) => {
        onError?.(error)
      },
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} autoComplete="on">
        <CardContent className="grid md:grid-cols-2 gap-5">
          <TextField
            control={form.control}
            name="firstName"
            label="First Name"
            autoComplete="first-name"
          />
          <TextField
            control={form.control}
            name="lastName"
            label="Last Name"
            autoComplete="family-name"
          />
          <TextField
            control={form.control}
            name="email"
            label="Email"
            type="email"
            autoComplete="email"
            className="lg:col-span-2"
          />
          <TextField
            control={form.control}
            name="phone"
            label="Phone Number"
            autoComplete="tel"
            type="tel"
            className="lg:col-span-2"
          />
          <SelectField
            control={form.control}
            name="subject"
            label="Subject"
            className="md:col-span-2"
            options={SUBJECT_OPTIONS.map((subject) => ({
              label: subject,
              value: subject,
            }))}
          />
          <TextAreaField
            control={form.control}
            name="message"
            label="Message"
            className="md:col-span-2"
          />
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button
            type="submit"
            className={cn('text-white w-full', 'disabled:opacity-70')}
            size="lg"
            disabled={form.formState.isSubmitting || isPending}
          >
            {form.formState.isSubmitting || isPending ? (
              <>
                <FontAwesomeIcon icon={faSpinner} className="animate-spin" />
                <span>Submitting...</span>{' '}
              </>
            ) : (
              <span>Submit</span>
            )}
          </Button>
        </CardFooter>
      </form>
    </Form>
  )
}
